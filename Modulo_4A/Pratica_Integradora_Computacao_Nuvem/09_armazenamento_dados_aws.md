# Armazenamento de Dados na AWS

---

## 1. Amazon Elastic Block Store (EBS) — alta performance no armazenamento de blocos

### O que é o EBS
O **Amazon EBS (Elastic Block Store)** é o serviço de armazenamento em blocos da AWS, desenhado para ser usado como o "disco rígido" de instâncias EC2 (ver `04_ec2_escalabilidade_trafego_virtualbox.md`). Funciona de forma análoga a um SSD ou HDD físico ligado a um computador — mas implementado como um volume virtual na nuvem, que pode ser criado, redimensionado e desanexado com facilidade.

### Como funciona
Um volume EBS existe independentemente da instância EC2 a que está ligado — pode ser desanexado de uma instância e reanexado a outra, dentro da mesma Zona de Disponibilidade. Esta independência é fundamental:

```
Instância EC2 (em execução)
        │
        │  ligação de rede dedicada
        ▼
  Volume EBS (disco virtual)
  → os dados persistem mesmo que a instância seja terminada
```

> Ponto importante: por padrão, o **volume raiz** (onde o sistema operativo está instalado) de uma instância EC2 é configurado para ser eliminado quando a instância é terminada — mas **volumes EBS adicionais** persistem independentemente, a não ser que sejam explicitamente configurados para ser eliminados.

### Tipos de volumes EBS

| Tipo | Tecnologia | Caso de uso típico | Destaque |
|---|---|---|---|
| **gp3** (General Purpose SSD) | SSD | Uso geral, a maioria das cargas de trabalho | Melhor equilíbrio custo/performance; permite configurar IOPS independentemente do tamanho |
| **gp2** (General Purpose SSD) | SSD | Uso geral (geração anterior ao gp3) | IOPS escala com o tamanho do volume |
| **io2 / io1** (Provisioned IOPS SSD) | SSD | Bases de dados críticas, aplicações de alta performance | IOPS altíssimo e garantido — o mais caro |
| **st1** (Throughput Optimized HDD) | HDD | Big data, data warehouses, logs | Otimizado para throughput sequencial, não para IOPS |
| **sc1** (Cold HDD) | HDD | Dados acedidos com pouca frequência | O mais barato por GB, mas com menor performance |

### Características principais do EBS
- **Alta durabilidade**: os dados de cada volume são automaticamente replicados dentro da mesma AZ, protegendo contra falha de um único componente físico.
- **Snapshots**: é possível criar **instantâneos (snapshots)** de volumes EBS a qualquer momento, que ficam guardados no S3 (gerido pela AWS, de forma transparente) e podem ser usados para restaurar o volume ou para criar novos volumes idênticos — útil para backups e para mover dados entre AZs ou Regiões.
- **Encriptação**: os volumes EBS podem ser encriptados de forma transparente, sem impacto significativo de performance — boa prática especialmente para volumes com dados sensíveis.
- **Redimensionamento a quente**: é possível aumentar o tamanho de um volume EBS, ou mudar o seu tipo, sem precisar de parar a instância EC2 a que está ligado (com algumas limitações consoante o sistema operativo).

### Limitação fundamental do EBS
Um volume EBS **só pode estar ligado a uma única instância EC2 de cada vez** (por padrão), e **apenas dentro da mesma AZ** — o que o torna menos adequado para cenários que exigem acesso partilhado por múltiplas instâncias em simultâneo (esse cenário é o domínio do EFS, ver ponto 3).

---

## 2. Amazon Simple Storage Service (S3) — armazenamento de uso simplificado

### O que é o S3
O **Amazon S3 (Simple Storage Service)** é o serviço de armazenamento de **objetos** da AWS (ver comparativo no ponto 4) — provavelmente o serviço mais icónico e mais usado de toda a plataforma. Já foi mencionado em vários ficheiros anteriores (`01_aws.md`, `07_infraestrutura_global_aws.md`), mas este ponto consolida os seus conceitos e funcionalidades com mais profundidade.

### Conceitos centrais

- **Objeto**: a unidade básica de armazenamento no S3 — pode ser qualquer ficheiro (imagem, vídeo, documento, código, backup, etc.), com tamanho de 0 bytes até **5 TB por objeto**.
- **Bucket**: o contentor de objetos, com nome globalmente único em toda a AWS (não apenas na conta — em todo o mundo). É aqui que se configuram as permissões, as políticas de ciclo de vida, o versionamento, e outras definições (ver `07_infraestrutura_global_aws.md`, ponto 5, sobre custo e classes de armazenamento).
- **Chave (key)**: o identificador único de cada objeto dentro de um bucket — funciona como o caminho completo do ficheiro (ex: `fotos/2024/janeiro/imagem.jpg`), embora o S3 não tenha pastas reais, apenas prefixos de chave.

### Por que o S3 é tão amplamente usado

- **Durabilidade excepcional**: o S3 foi desenhado para oferecer **99.999999999% de durabilidade** (11 noves), através de replicação automática por múltiplas AZs dentro da região escolhida.
- **Disponibilidade**: 99.99% de disponibilidade para o tier Standard.
- **Escalabilidade praticamente ilimitada**: não há limite de capacidade total de um bucket — pode crescer de zero a petabytes sem qualquer configuração adicional.
- **Acesso via URL**: cada objeto no S3 tem um URL único, podendo ser acedido via HTTP/HTTPS — tornando o S3 natural para servir conteúdo estático (imagens, CSS, JS, até sites completos).
- **Integração nativa com outros serviços AWS**: praticamente todos os serviços AWS se integram diretamente com o S3 — Lambda (ver `05_computacao_sem_servidor.md`), EC2, Glue, Athena, SageMaker, entre outros.

### Casos de uso comuns do S3

| Caso de uso | Descrição |
|---|---|
| **Hosting de site estático** | Servir um site composto apenas por HTML, CSS e JS diretamente do S3, sem precisar de um servidor |
| **Backup e arquivo** | Guardar backups de bases de dados, snapshots EBS, ou qualquer dado que precise de ser preservado de forma durável |
| **Data lake** | Centralizar grandes volumes de dados brutos para posterior análise com ferramentas como Athena ou Glue |
| **Distribuição de conteúdo** | Origem de dados para o CloudFront (CDN), servindo imagens, vídeos e ficheiros estáticos com baixa latência globalmente (ver `07_infraestrutura_global_aws.md`, ponto 2) |
| **Armazenamento de artefactos de CI/CD** | Guardar binários compilados, pacotes de deployment e logs de pipeline |
| **Armazenamento de logs** | Centralizar logs de aplicações, de acesso ao CloudFront, de atividade IAM (CloudTrail), entre outros |

### Funcionalidades avançadas do S3 relevantes neste contexto

- **Versionamento**: manter múltiplas versões do mesmo objeto — se um ficheiro for substituído ou eliminado, as versões anteriores continuam acessíveis (conceito equivalente ao versionamento de blobs no Azure, ver `03_buckets_google_cloud_recursos_azure.md`, ponto 5, DevOps_II).
- **Políticas de ciclo de vida**: mover automaticamente objetos entre classes de armazenamento (ex: S3 Standard → Glacier) conforme envelhecem, para otimizar custos (ver `07_infraestrutura_global_aws.md`, ponto 5).
- **Replicação entre regiões (CRR)**: copiar automaticamente objetos para um bucket noutras região, para conformidade, redução de latência para utilizadores noutras geografias, ou recuperação de desastre.

---

## 3. Amazon Elastic File System (EFS) — armazenamento com acesso simultâneo

### O que é o EFS
O **Amazon EFS (Elastic File System)** é um sistema de ficheiros gerido e elástico, desenhado especificamente para ser **acedido em simultâneo por múltiplas instâncias EC2** — resolvendo a limitação fundamental do EBS (ver ponto 1) de só poder ser ligado a uma instância de cada vez.

### Como funciona
O EFS implementa o protocolo **NFS (Network File System)** — o mesmo protocolo usado para partilha de ficheiros em redes Linux/Unix. As instâncias EC2 acedem ao EFS como se fosse uma pasta local do seu próprio sistema de ficheiros, mas na prática o armazenamento está na rede, gerido pela AWS.

```
                  ┌─────────────────┐
                  │   Amazon EFS    │
                  │ (sistema de     │
                  │  ficheiros      │
                  │  partilhado)    │
                  └────────┬────────┘
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
    Instância EC2    Instância EC2    Instância EC2
      (AZ-a)           (AZ-b)           (AZ-c)
    acesso simultâneo em leitura e escrita
```

### Características principais

- **Acesso simultâneo**: múltiplas instâncias EC2, em múltiplas AZs, podem ler e escrever no mesmo sistema de ficheiros em simultâneo — o que não é possível com EBS (por padrão).
- **Elasticidade automática**: ao contrário do EBS (onde se define um tamanho fixo ao criar o volume), o EFS **cresce e encolhe automaticamente** conforme os ficheiros são adicionados ou removidos — sem necessidade de provisionar capacidade antecipadamente.
- **Alta disponibilidade por design**: o EFS replica automaticamente os dados por **múltiplas AZs** dentro da região, sem qualquer configuração adicional.
- **Compatível com Linux**: o EFS suporta o protocolo NFS, o que o torna compatível com sistemas operativos Linux/Unix — **não é suportado nativamente em instâncias Windows EC2** (para esse caso, a AWS oferece o Amazon FSx for Windows File Server como alternativa).

### Classes de armazenamento do EFS

| Classe | Uso | Custo |
|---|---|---|
| **EFS Standard** | Ficheiros acedidos com frequência | Mais alto |
| **EFS Standard-IA** (Infrequent Access) | Ficheiros raramente acedidos, mas com necessidade de acesso rápido | Mais baixo |
| **EFS One Zone** | Armazenado numa única AZ (sem replicação multi-AZ) | Mais barato, mas com menor resiliência |
| **EFS One Zone-IA** | Combinação de uma única AZ com acesso infrequente | O mais barato |

O EFS suporta também **políticas de ciclo de vida**, que movem automaticamente ficheiros que não são acedidos há um período definido (ex: 30 dias) para a classe IA correspondente — reduzindo o custo sem intervenção manual.

### Casos de uso típicos do EFS
- **Servidores web com múltiplas instâncias**: várias instâncias EC2 precisam de aceder ao mesmo sistema de ficheiros de conteúdo (ex: imagens, media uploads de utilizadores)
- **Ambientes de desenvolvimento partilhados**: equipas de desenvolvimento que precisam de um sistema de ficheiros comum, acessível em simultâneo
- **Big data e análise**: cargas de trabalho de processamento paralelo que precisam de aceder ao mesmo conjunto de dados em simultâneo
- **Contentores**: o EFS é uma das opções nativas de armazenamento persistente para contentores no Amazon ECS e EKS (ver `05_computacao_sem_servidor.md` e pasta DevOps_II), permitindo que múltiplos contentores partilhem o mesmo sistema de ficheiros

---

## 4. Comparativo: armazenamento em blocos vs. objetos — diferentes soluções, diferentes vantagens

Com os três serviços apresentados, esta secção consolida as diferenças fundamentais entre os dois paradigmas de armazenamento remoto mais relevantes na AWS, e quando usar cada um.

### Os três paradigmas de armazenamento na nuvem

| Paradigma | Serviço AWS | Como os dados são organizados |
|---|---|---|
| **Armazenamento em blocos** | EBS | Dividido em blocos de tamanho fixo, como um disco rígido físico — o sistema operativo gere o sistema de ficheiros por cima |
| **Armazenamento de ficheiros** | EFS | Sistema de ficheiros hierárquico (pastas e ficheiros), com protocolo de acesso de rede (NFS) |
| **Armazenamento de objetos** | S3 | Objetos planos, cada um com um identificador único (chave), metadados e conteúdo — sem hierarquia de ficheiros real |

### Armazenamento em blocos (EBS) vs. armazenamento de objetos (S3) — comparativo detalhado

| Aspeto | EBS (Blocos) | S3 (Objetos) |
|---|---|---|
| **Como os dados são acedidos** | Como um disco local — via sistema de ficheiros do sistema operativo (ex: `ext4`, `NTFS`) | Via HTTP/HTTPS através de uma API REST (GET, PUT, DELETE) |
| **Latência** | Muito baixa — adequado para bases de dados e aplicações que precisam de I/O rápido | Mais alta — não adequado para operações que exigem acesso de millisegundo a ficheiros individuais em alta frequência |
| **Escalabilidade** | Limitada ao tamanho definido no volume (pode ser aumentado manualmente) | Praticamente ilimitada, sem configuração |
| **Acesso simultâneo** | Uma instância de cada vez (por padrão) | Múltiplos clientes em simultâneo, de qualquer lugar com acesso à internet |
| **Modificação de dados** | Alterações parciais a ficheiros são possíveis (ex: editar uma linha de uma base de dados) | Objetos são imutáveis — para modificar, substitui-se o objeto inteiro |
| **Durabilidade** | Alta (replicação dentro da AZ) | Muito alta — 99.999999999% (11 noves), replicação multi-AZ |
| **Custo por GB** | Mais alto | Mais baixo (especialmente nas classes de arquivo como Glacier) |
| **Localização** | Restrito à mesma AZ da instância EC2 | Acessível globalmente, de qualquer serviço ou aplicação |
| **Melhor para** | Disco de sistema operativo, bases de dados relacionais, aplicações que precisam de sistema de ficheiros | Backups, media, data lakes, conteúdo estático, qualquer ficheiro que não precise de acesso de baixa latência constante |

### Quando usar cada serviço — guia rápido de decisão

```
Preciso de um disco para uma instância EC2 (sistema operativo, base de dados)?
  → EBS

Preciso que múltiplas instâncias acedam ao mesmo sistema de ficheiros em simultâneo (Linux)?
  → EFS

Preciso guardar ficheiros grandes, backups, media, ou dados para análise posterior?
Ou preciso de acesso por URL via internet?
  → S3
```

### A diferença conceptual que mais importa

A distinção mais importante entre armazenamento em blocos (EBS) e armazenamento de objetos (S3) é a forma como os dados são **modificados**:

- Num sistema de blocos, é possível **sobrescrever apenas uma parte** de um ficheiro — por exemplo, atualizar uma única linha de uma base de dados sem precisar de reescrever o ficheiro inteiro. Isto é fundamental para bases de dados e sistemas operativos, onde as modificações são frequentes e parciais.
- Num sistema de objetos, os objetos são **imutáveis** — quando um ficheiro é atualizado, o objeto inteiro é substituído. Isto torna o armazenamento de objetos inadequado para casos de uso com modificações frequentes e parciais, mas muito eficiente para casos de uso onde os ficheiros são escritos uma vez e depois lidos muitas vezes (ex: imagens de um site, vídeos de uma plataforma de streaming).

---

## Resumo em uma frase

> A AWS oferece três paradigmas complementares de armazenamento — EBS para discos de alta performance ligados a uma instância EC2, S3 para armazenamento de objetos escalável, durável e acessível globalmente, e EFS para sistemas de ficheiros partilhados e acedidos em simultâneo por múltiplas instâncias — cada um com características, custos e casos de uso distintos que se complementam em vez de competir diretamente entre si.

---

## Conceitos relacionados para estudar a seguir

- **Amazon FSx** — sistemas de ficheiros geridos para casos de uso específicos: FSx for Windows File Server (equivalente ao EFS mas para Windows), FSx for Lustre (para HPC e machine learning), entre outros
- **AWS Storage Gateway** — ponte entre infraestrutura on-premises e armazenamento na nuvem, permitindo que aplicações locais usem S3, EBS ou Glacier de forma transparente
- **S3 Select e S3 Glacier Select** — capacidade de executar queries SQL sobre dados armazenados diretamente no S3 ou Glacier, sem precisar de os descarregar primeiro
- **EBS Multi-Attach** — funcionalidade de anexar um volume EBS do tipo io2 a múltiplas instâncias EC2 em simultâneo, dentro da mesma AZ (para casos de uso muito específicos de clustering)
- **Snapshots EBS e AWS Backup** — aprofundar estratégias de backup automatizado que combinam snapshots EBS com o serviço AWS Backup para uma política de proteção de dados unificada