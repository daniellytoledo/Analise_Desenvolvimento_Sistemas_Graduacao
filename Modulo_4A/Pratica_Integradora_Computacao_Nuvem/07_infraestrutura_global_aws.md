# Infraestrutura Global da AWS

---

## 1. Infraestrutura global da AWS — como foi criada a nuvem que atende uma das gigantes do e-commerce

A história da infraestrutura da AWS começa, como já visto em `00_computacao_em_nuvem.md`, com um problema prático da própria Amazon: a empresa precisava de uma infraestrutura capaz de aguentar picos imensos de tráfego (ex: épocas de Natal, Black Friday) sem falhar — e percebeu que essa mesma infraestrutura, quando não estava a ser usada ao máximo, podia ser alugada a terceiros.

### Da necessidade interna ao produto global
A Amazon não construiu a sua infraestrutura de nuvem a pensar originalmente em vender serviços — construiu-a para **resolver os seus próprios problemas de escala**. O site amazon.com, nos seus anos de crescimento acelerado, exigia uma infraestrutura capaz de:

- Servir milhões de utilizadores em simultâneo, em diferentes partes do mundo
- Garantir que uma falha num servidor não derrubava o site inteiro
- Escalar rapidamente em períodos de pico sem meses de planeamento antecipado
- Manter os dados dos clientes sempre seguros e disponíveis

Ao resolver estes problemas para si própria, a Amazon construiu, sem o planear inicialmente, a base técnica do que viria a ser o maior fornecedor de computação em nuvem do mundo. O **AWS** foi oficialmente lançado em 2006 (ver `00_computacao_em_nuvem.md`), e desde então a sua infraestrutura física cresceu para ser uma das maiores e mais distribuídas redes privadas de fibra ótica e data centers do planeta.

### A escala atual
A infraestrutura global da AWS está distribuída por dezenas de países e é composta por:
- **Regiões (Regions)** — grandes agrupamentos geográficos de data centers (ex: Europa, América do Norte, Ásia-Pacífico), cada uma completamente independente das outras
- **Zonas de Disponibilidade (Availability Zones / AZs)** — grupos de data centers dentro de cada região (aprofundado no ponto 3)
- **Pontos de Presença (Edge Locations)** — infraestrutura mais distribuída ainda, mais próxima dos utilizadores finais (aprofundado no ponto 2)

Esta estrutura em três níveis é o que permite à AWS oferecer simultaneamente **alta disponibilidade, baixa latência e alcance global** — algo que nenhuma empresa isolada conseguiria replicar internamente com um custo razoável.

### Por que a infraestrutura física importa para quem usa a nuvem
Ao contrário do que se possa pensar, "a nuvem" não é algo etéreo — é fisicamente composta por milhares de servidores, cabos de fibra ótica, geradores de emergência, sistemas de refrigeração e equipa humana especializada, distribuídos por data centers físicos em todo o mundo. A forma como esses data centers estão organizados geograficamente tem impacto direto em aspetos práticos como:
- O quão rápida é a resposta de uma aplicação para um utilizador em Lisboa vs. Tóquio
- A capacidade de uma aplicação sobreviver à falha de um data center inteiro
- As leis de proteção de dados que se aplicam (ex: dados de cidadãos europeus devem, pelo RGPD, poder ser mantidos em servidores dentro da União Europeia)

---

## 2. Pontos de Presença — nuvem em todo o globo, próxima dos clientes

### O problema da latência
Mesmo com a internet a funcionar à velocidade da luz, a distância física entre um utilizador e o servidor que lhe serve os dados **tem impacto real no tempo de resposta (latência)**. Um utilizador em Lisboa a aceder a um servidor localizado apenas na Virgínia (EUA) vai sentir sempre alguma latência adicional face a um utilizador mais próximo fisicamente desse servidor — e em aplicações modernas, onde cada milissegundo conta (ex: streaming de vídeo, aplicações financeiras), esse impacto é significativo.

### A solução: Pontos de Presença (Edge Locations)
Os **Pontos de Presença** (*Edge Locations*) são infraestruturas mais pequenas e distribuídas por muito mais localizações do que as Regiões principais — tipicamente em cidades grandes onde há grande concentração de utilizadores, mas onde não seria economicamente justificável construir um data center completo.

A sua função é **aproximar o conteúdo dos utilizadores**, servindo como uma camada intermédia entre o utilizador final e os servidores principais da AWS. Os dados mais solicitados são **cacheados (armazenados temporariamente)** nestas localizações de borda, para que as respostas seguintes não precisem de viajar até ao servidor original — respondendo ao utilizador muito mais rapidamente.

### Amazon CloudFront — a CDN da AWS
O principal serviço da AWS que usa estes Pontos de Presença é o **Amazon CloudFront**, a rede de entrega de conteúdo (CDN — *Content Delivery Network*) da AWS (já mencionado em `01_aws.md`). Quando um utilizador acede a um conteúdo distribuído pelo CloudFront:

```
Utilizador (Lisboa)
        │
        ▼
Edge Location mais próxima (ex: Lisboa ou Madrid)
        │
  Conteúdo em cache?
   ┌────┴────┐
   Sim       Não
   │          │
   ▼          ▼
Resposta    Vai buscar ao servidor de origem (ex: bucket S3)
imediata    → guarda em cache → responde ao utilizador
```

Na segunda vez que qualquer utilizador próximo dessa Edge Location pedir o mesmo conteúdo, a resposta já vem diretamente da cache local, sem percorrer todo o caminho até ao servidor de origem.

### AWS Global Accelerator
Um serviço complementar ao CloudFront, o **AWS Global Accelerator** usa também a rede privada global da AWS (em vez da internet pública) para encaminhar o tráfego do utilizador até ao servidor de origem pelo caminho mais rápido disponível, reduzindo a latência mesmo para tráfego que não pode ser simplesmente cacheado (ex: pedidos de API com dados dinâmicos).

### Impacto prático
A combinação de Regiões + Pontos de Presença permite à AWS oferecer um nível de desempenho e disponibilidade que seria impossível replicar com infraestrutura centralizada num único local, independentemente de quão poderosa essa infraestrutura fosse.

---

## 3. Zonas de Disponibilidade — agrupamento de data centers

### O conceito de Região
Cada **Região AWS** é uma área geográfica ampla e independente (ex: `eu-west-1` na Irlanda, `eu-south-2` em Espanha, `us-east-1` na Virgínia). As Regiões são totalmente isoladas umas das outras — uma falha catastrófica numa Região não afeta as outras, o que é fundamental para garantir a continuidade de serviço de aplicações globais.

### O que são Zonas de Disponibilidade (AZs)
Cada Região é composta por **duas ou mais Zonas de Disponibilidade (AZs)** — e a AWS exige um mínimo de três AZs por Região para a grande maioria das regiões modernas. Cada AZ é, na prática, **um ou mais data centers físicos**, com:

- **Energia independente** (alimentação elétrica própria, com geradores de backup)
- **Refrigeração independente**
- **Rede independente** (ligações físicas redundantes)
- **Localização física separada** dentro da mesma área metropolitana — tipicamente a dezenas de quilómetros de distância entre AZs, suficiente para isolar eventos locais (incêndios, inundações, cortes de energia), mas próximos o suficiente para que a latência entre AZs seja muito baixa (normalmente inferior a 2ms)

```
Região: eu-west-1 (Irlanda)
│
├── AZ: eu-west-1a  (data center A — fisicamente separado)
├── AZ: eu-west-1b  (data center B — fisicamente separado)
└── AZ: eu-west-1c  (data center C — fisicamente separado)
     │
     └── Interligados por fibra ótica dedicada de alta velocidade
```

### Por que distribuir por múltiplas AZs
Nenhum data center, por mais bem construído que seja, é imune a falhas — cortes de energia, problemas de hardware em massa, ou eventos físicos imprevistos podem acontecer. Ao distribuir uma aplicação por múltiplas AZs:

- Se uma AZ falhar, as outras continuam a funcionar normalmente e o tráfego é automaticamente redirecionado
- Não há interrupção percetível para o utilizador final, mesmo perante uma falha de data center completa
- É um dos pilares do pilar de **Fiabilidade** do AWS Well-Architected Framework (ver `03_aws_well_architected_framework.md`)

### AZs vs. Regiões — quando usar cada uma

| | Proteção contra | Latência entre nós | Exemplo de uso |
|---|---|---|---|
| **Múltiplas AZs** | Falha de um data center | Muito baixa (< 2ms) — ideal para replicação em tempo real | Base de dados com réplica síncrona entre AZs |
| **Múltiplas Regiões** | Falha de uma região inteira (evento extremo) | Mais elevada (dezenas a centenas de ms) | Backup de dados para outra região, ou aplicações com utilizadores em diferentes continentes |

---

## 4. Como provisionar recursos AWS — distribuição dos recursos AWS

### O que significa "provisionar"
**Provisionar** um recurso na AWS significa criar e configurar esse recurso (ex: um servidor, uma base de dados, um bucket de armazenamento) para que fique disponível e pronto para uso. É o equivalente, no mundo físico, a comprar e instalar um servidor — mas feito em segundos, via software.

### As três formas de provisionar recursos na AWS

**1. AWS Management Console**
A interface gráfica (web) da AWS, acessível em `console.aws.amazon.com`. Permite criar e gerir recursos de forma visual, sem escrever código — o ponto de partida mais natural para quem está a começar (como nas práticas realizadas em `06_pratica_root_lambda_sqs.md`).

**2. AWS CLI (Command Line Interface)**
A ferramenta de linha de comandos que permite fazer praticamente tudo o que o Console permite, mas através de comandos de texto — muito mais eficiente para tarefas repetitivas, automações e scripts. Exemplo de criação de um bucket S3 via CLI:
```
aws s3api create-bucket \
  --bucket meu-bucket-exemplo \
  --region eu-west-1 \
  --create-bucket-configuration LocationConstraint=eu-west-1
```

**3. SDKs e Infraestrutura como Código (IaC)**
Para automação mais avançada, a AWS disponibiliza SDKs para várias linguagens (Python, Node.js, Java, etc.) que permitem criar e gerir recursos diretamente a partir do código de uma aplicação. Para automação de infraestrutura completa, ferramentas como o **AWS CloudFormation** permitem descrever toda a infraestrutura num ficheiro YAML/JSON (o mesmo princípio declarativo dos ARM Templates no Azure, ver `03_buckets_google_cloud_recursos_azure.md`, ponto 3, e dos YAML manifests no Kubernetes, ver `04_escalonamento_clusters_kubernetes.md`, ponto 3).

### Escolher em que Região provisionar
Ao criar qualquer recurso, é necessário escolher a **Região** onde ele vai existir fisicamente. Esta escolha deve considerar:

- **Proximidade dos utilizadores finais** — recursos mais perto dos utilizadores = menor latência (ver ponto 2)
- **Conformidade legal** — ex: dados de cidadãos europeus podem exigir que os recursos fiquem em regiões dentro da UE
- **Disponibilidade de serviços** — nem todos os serviços AWS estão disponíveis em todas as regiões (a `us-east-1` é tipicamente a primeira a receber novos serviços)
- **Custo** — o preço dos serviços AWS varia consoante a região (ver ponto 5, sobre o custo do S3)

### Provisionar com alta disponibilidade — a boa prática
Em aplicações que precisam de alta disponibilidade, os recursos devem ser distribuídos por **múltiplas AZs** dentro da mesma Região (ver ponto 3), por exemplo:
- Instâncias EC2 distribuídas por AZ-a, AZ-b e AZ-c, com um Load Balancer à frente (ver `04_ec2_escalabilidade_trafego_virtualbox.md`)
- Bases de dados RDS com réplica síncrona em AZ diferente (Multi-AZ deployment)
- Buckets S3, que por padrão já replicam automaticamente os dados por múltiplas AZs dentro da região escolhida

---

## 5. Custo do armazenamento S3 pelo mundo

O **Amazon S3** (Simple Storage Service) é o serviço de armazenamento de objetos da AWS (já mencionado em `01_aws.md`), e um dos mais usados globalmente. Um aspeto importante — e que frequentemente surpreende quem está a começar — é que o **custo do S3 varia consoante a Região AWS onde o bucket é criado**.

### Por que o preço varia por região
A AWS opera os seus data centers em regiões com custos operacionais diferentes — energia elétrica, mão de obra, impostos locais, e conectividade de rede têm preços diferentes na Virgínia, na Irlanda, em São Paulo, ou em Singapura. Esses custos operacionais refletem-se, inevitavelmente, no preço cobrado pelos serviços nesses locais.

### Estrutura de preços do S3

O custo do S3 é composto por três componentes principais:

**1. Armazenamento** — cobrado por GB armazenado por mês, com desconto por volume:

| Região | Preço aproximado por GB/mês (primeiros 50 TB) |
|---|---|
| US East (N. Virginia) — `us-east-1` | ~$0.023 |
| Europe (Ireland) — `eu-west-1` | ~$0.023 |
| South America (São Paulo) — `sa-east-1` | ~$0.0405 |
| Asia Pacific (Singapore) — `ap-southeast-1` | ~$0.023 |
| Asia Pacific (Sydney) — `ap-southeast-2` | ~$0.025 |

> Valores aproximados e sujeitos a alteração — consultar sempre a [página oficial de preços da AWS](https://aws.amazon.com/s3/pricing/) para os valores atuais.

**2. Pedidos (Requests)** — cobrado pelo número de operações feitas ao bucket:
- **GET, SELECT** (leitura) — preço por cada 1.000 pedidos
- **PUT, COPY, POST, LIST** (escrita, listagem) — tipicamente mais caro do que leitura

**3. Transferência de dados (Data Transfer)**
- **Entrada de dados na AWS (inbound)** — **gratuita** em quase todos os cenários
- **Saída de dados da AWS para a internet (outbound)** — **cobrada por GB**, frequentemente o item mais caro da fatura em aplicações com muito tráfego de saída
- **Transferência entre serviços na mesma Região** — geralmente gratuita ou a custo muito reduzido
- **Transferência entre Regiões diferentes** — cobrada

### Classes de armazenamento do S3 e o seu impacto no custo

| Classe | Uso típico | Custo de armazenamento | Custo de recuperação |
|---|---|---|---|
| **S3 Standard** | Dados acedidos com frequência | Mais alto | Baixo |
| **S3 Standard-IA** | Acesso pouco frequente, mas rápido quando necessário | Mais baixo que Standard | Por GB recuperado |
| **S3 Glacier Instant Retrieval** | Arquivo, acesso em milissegundos | Muito mais baixo | Por GB recuperado |
| **S3 Glacier Flexible Retrieval** | Arquivo, acesso em minutos a horas | Ainda mais baixo | Por GB recuperado |
| **S3 Glacier Deep Archive** | Arquivo a longo prazo, acesso raramente necessário | Mais barato de todos | Por GB recuperado |

### A conclusão prática
A escolha da Região onde um bucket S3 é criado deve equilibrar **proximidade dos utilizadores** (menor latência), **conformidade legal** (onde os dados podem estar fisicamente) e **custo** — com regiões como São Paulo consistentemente mais caras do que `us-east-1` ou `eu-west-1`. Para arquivos raramente acedidos, mudar a classe de armazenamento (ex: de S3 Standard para S3 Glacier Deep Archive) pode reduzir o custo de armazenamento em mais de 90%, ao custo de um tempo de acesso mais lento.

---

## Resumo em uma frase

> A infraestrutura global da AWS — construída originalmente para suportar o próprio e-commerce da Amazon — organiza-se em Regiões, Zonas de Disponibilidade e Pontos de Presença, formando uma rede que equilibra disponibilidade, latência e conformidade legal, onde os recursos são provisionados à escolha do utilizador e cujo custo, exemplificado pelo S3, varia significativamente consoante a região e a classe de armazenamento escolhidas.

---

## Conceitos relacionados para estudar a seguir

- **AWS Local Zones** — extensões de Regiões AWS colocadas ainda mais próximas de grandes cidades, para latências ultrabaixas em casos muito específicos
- **AWS Wavelength** — infraestrutura AWS integrada em redes 5G de operadoras, para aplicações que exigem latência mínima em dispositivos móveis
- **S3 Lifecycle Policies** — automatizar a transição de objetos entre classes de armazenamento (Standard → Glacier) para otimizar custos ao longo do tempo
- **AWS Cost Explorer e Billing Alerts** — já mencionados em `01_aws.md`, aprofundar como monitorizar e prever custos de serviços como o S3 em múltiplas regiões
- **S3 Transfer Acceleration** — acelerar a transferência de dados para buckets S3 distantes, usando os Pontos de Presença do CloudFront como ponto de entrada