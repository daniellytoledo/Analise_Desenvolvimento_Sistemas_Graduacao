# Conectividade com a AWS

---

## 1. Conceitos básicos de redes — componentes e conceitos

Antes de entender como a AWS gere a conectividade entre recursos e redes externas, é importante ter uma base sólida dos conceitos fundamentais de redes de computadores — os mesmos que estão por baixo de qualquer sistema distribuído na nuvem.

### O que é uma rede de computadores
Uma **rede de computadores** é um conjunto de dispositivos (computadores, servidores, telemóveis, impressoras, etc.) interligados entre si de forma a poderem **comunicar e partilhar recursos** — ficheiros, impressoras, acesso à internet, bases de dados, entre outros.

### Principais componentes de uma rede

| Componente | O que faz |
|---|---|
| **Router (Roteador)** | Direciona o tráfego entre redes diferentes — decide o melhor caminho para que um pacote de dados chegue ao seu destino |
| **Switch** | Liga dispositivos dentro da mesma rede local, encaminhando o tráfego apenas para o dispositivo de destino (ao contrário de um hub, que envia para todos) |
| **Firewall** | Filtra o tráfego de rede com base em regras, bloqueando comunicações não autorizadas — o equivalente digital de um porteiro de segurança |
| **Gateway** | Ponto de entrada/saída entre duas redes diferentes (ex: entre uma rede interna de uma empresa e a internet) |
| **DNS (Domain Name System)** | Traduz nomes de domínio legíveis por humanos (ex: `amazon.com`) em endereços IP numéricos que os computadores entendem |
| **Load Balancer** | Distribui tráfego de rede entre vários servidores, evitando que um único fique sobrecarregado (ver `04_ec2_escalabilidade_trafego_virtualbox.md`) |

### Endereçamento IP
Cada dispositivo numa rede é identificado por um **endereço IP** (*Internet Protocol*). Existem dois formatos atualmente em uso:

- **IPv4**: formato mais antigo e ainda dominante — 4 grupos de números separados por pontos (ex: `192.168.1.10`), com um espaço de endereçamento de cerca de 4 mil milhões de endereços únicos (que se esgotou, na prática, com o crescimento explosivo da internet)
- **IPv6**: formato mais recente, criado para substituir o IPv4 — usa grupos hexadecimais separados por dois pontos (ex: `2001:0db8:85a3::8a2e:0370:7334`), com um espaço de endereçamento virtualmente ilimitado

### Sub-redes e CIDR
Uma **sub-rede (subnet)** é uma divisão lógica de uma rede maior, permitindo organizar e isolar grupos de dispositivos. A notação usada para definir sub-redes chama-se **CIDR (Classless Inter-Domain Routing)**, com um formato como `10.0.0.0/16`:
- `10.0.0.0` — o endereço base da rede
- `/16` — a máscara de rede (indica que os primeiros 16 bits são fixos, e os restantes 16 bits são usados para endereçar dispositivos dentro dessa sub-rede)

Quanto menor o número depois do `/`, maior a sub-rede (mais endereços disponíveis):
- `/16` → até 65.536 endereços
- `/24` → até 256 endereços
- `/28` → até 16 endereços

### Protocolos de rede essenciais

- **TCP (Transmission Control Protocol)**: protocolo orientado à ligação — garante que os dados chegam ao destino de forma completa e na ordem certa, com confirmações de receção. Usado em HTTP, HTTPS, SSH, etc.
- **UDP (User Datagram Protocol)**: mais rápido que o TCP, mas sem garantia de entrega ou ordem. Usado em aplicações onde a velocidade importa mais do que a perfeição (ex: streaming de vídeo, jogos online, chamadas VoIP)
- **HTTP/HTTPS**: protocolos de comunicação para a web — HTTPS é a versão cifrada e segura do HTTP
- **SSH (Secure Shell)**: protocolo para acesso remoto seguro a servidores (ex: aceder a uma instância EC2 via linha de comandos, ver `01_aws.md`)

### Portas
Uma **porta** é um número (de 0 a 65535) que identifica um serviço específico dentro de um dispositivo. O endereço IP identifica a máquina; a porta identifica o serviço dentro dessa máquina. Exemplos comuns:

| Porta | Serviço |
|---|---|
| 80 | HTTP (web não cifrada) |
| 443 | HTTPS (web cifrada) |
| 22 | SSH (acesso remoto seguro) |
| 3306 | MySQL (base de dados, ver `05_docker_volumes_arquivos_pastas.md`, DevOps_I) |
| 3389 | RDP (Remote Desktop Protocol — acesso remoto a Windows) |

---

## 2. Diferença entre recursos de redes públicas e privadas

Um dos conceitos mais importantes na arquitetura de sistemas na nuvem é a separação entre o que deve estar **acessível publicamente** e o que deve ficar **isolado numa rede privada**.

### Rede pública
Uma **rede pública** é uma rede acessível a partir da internet, por qualquer utilizador com o endereço correto. Recursos colocados numa rede pública têm um **endereço IP público**, diretamente alcançável de qualquer ponto da internet.

**Exemplos de recursos tipicamente públicos:**
- Servidores web (ex: o frontend de uma aplicação, ver `02_frontend_backend_persistencia_dados.md`, DevOps_I)
- Load Balancers que recebem tráfego externo
- Buckets S3 com acesso público configurado (ver `07_infraestrutura_global_aws.md`, ponto 5)
- APIs públicas

### Rede privada
Uma **rede privada** é uma rede isolada da internet pública — os recursos dentro dela só são acessíveis a partir de outros recursos dentro da mesma rede privada (ou através de mecanismos controlados de acesso, como uma VPN ou o AWS Direct Connect, ver ponto 4).

**Exemplos de recursos tipicamente privados:**
- Bases de dados (ex: RDS, DynamoDB — não devem nunca ser expostos diretamente à internet)
- Servidores de backend e lógica de negócio (ver `02_frontend_backend_persistencia_dados.md`, DevOps_I)
- Sistemas internos da empresa
- Serviços de autenticação

### A VPC (Virtual Private Cloud) da AWS
Na AWS, a forma de criar e gerir redes privadas é através da **VPC (Virtual Private Cloud)** — já mencionada em `01_aws.md`. Uma VPC é, essencialmente, uma **rede virtual completamente isolada** dentro da infraestrutura da AWS, onde se tem controlo total sobre:

- O intervalo de endereços IP (definido via CIDR, ver ponto 1)
- A criação de sub-redes públicas e privadas dentro da VPC
- As regras de entrada e saída de tráfego (via Security Groups e Network ACLs)
- Se e como a VPC se liga à internet ou a redes externas

```
Internet
    │
    ▼
Internet Gateway (ponto de entrada/saída da VPC para a internet)
    │
    ▼
┌─────────────────────────────────────────┐
│              VPC (10.0.0.0/16)           │
│                                           │
│  ┌─────────────────┐  ┌───────────────┐  │
│  │  Sub-rede pública│  │Sub-rede privada│  │
│  │  (10.0.1.0/24)  │  │ (10.0.2.0/24) │  │
│  │                 │  │               │  │
│  │  Load Balancer  │  │  Base de dados│  │
│  │  Servidor web   │  │  Backend      │  │
│  └─────────────────┘  └───────────────┘  │
└─────────────────────────────────────────┘
```

### Tipos de redes e as suas aplicações

| Tipo | Definição | Aplicação típica |
|---|---|---|
| **LAN (Local Area Network)** | Rede local, dentro de um edifício ou campus | Rede interna de um escritório |
| **WAN (Wide Area Network)** | Rede de área alargada, ligando localizações geograficamente distantes | A própria internet; ligação entre sedes de uma empresa em países diferentes |
| **VPN (Virtual Private Network)** | Cria um "túnel" cifrado sobre uma rede pública (ex: internet), simulando uma ligação privada | Acesso remoto seguro a recursos internos de uma empresa; ligar um data center on-premises à AWS |
| **VPC (Virtual Private Cloud)** | Rede privada virtual dentro de um fornecedor de nuvem | Isolar recursos AWS da internet pública |
| **Peering** | Ligação direta entre duas redes ou VPCs, sem passar pela internet | Comunicação entre VPCs de diferentes projetos ou contas AWS |

---

## 3. Redes globais — a estrutura global e as redes de computadores

### Como a internet funciona, em traços gerais
A internet não é uma rede única controlada por uma entidade — é uma **rede de redes**, composta por milhares de redes independentes (ISPs, empresas, universidades, governos) que se interligam através de acordos chamados **peering** e através de pontos físicos de interligação chamados **IXPs (Internet Exchange Points)**.

O tráfego percorre a internet através de uma cadeia de roteadores, cada um decidindo o próximo salto (*hop*) com base em tabelas de rotas — um processo chamado **roteamento BGP (Border Gateway Protocol)**, o protocolo que governa como as grandes redes da internet comunicam entre si.

### A rede privada global da AWS
A AWS não depende exclusivamente da internet pública para ligar os seus data centers — construiu a sua própria **rede privada global de fibra ótica**, ligando todas as Regiões e Zonas de Disponibilidade entre si (ver `07_infraestrutura_global_aws.md`, pontos 1 e 3).

Isto traz vantagens importantes:
- **Menor latência** entre serviços em diferentes regiões, face ao que seria obtido percorrendo a internet pública
- **Maior fiabilidade** — a rede privada da AWS é gerida e monitorizada pela própria Amazon, com redundância física em múltiplos caminhos
- **Segurança** — tráfego sensível entre regiões não percorre a internet pública, reduzindo a exposição a ataques ou interceções

É esta rede privada que, por exemplo, o **AWS Global Accelerator** usa para otimizar o percurso do tráfego dos utilizadores até às aplicações (já mencionado em `07_infraestrutura_global_aws.md`, ponto 2).

### IXPs e a presença da AWS na internet
Para além da rede privada interna, a AWS também está presente em numerosos **IXPs (Internet Exchange Points)** em todo o mundo — pontos físicos onde redes diferentes trocam tráfego diretamente, evitando percorrer caminhos mais longos pela internet. Esta presença contribui para que a latência entre utilizadores finais e os serviços AWS seja minimizada, mesmo para tráfego que percorre a internet pública.

### Redes de telecomunicações e a "última milha"
Um conceito relevante neste contexto é o da **"última milha"** (*last mile*) — o troço final da ligação entre a rede de um grande fornecedor (ex: a AWS) e o utilizador ou empresa final. A qualidade e a velocidade desta última milha dependem do ISP (fornecedor de acesso à internet) local, e é frequentemente o ponto de maior variabilidade em termos de latência e fiabilidade — o que está diretamente ligado à razão de existir do **AWS Direct Connect**, explicado no ponto seguinte.

---

## 4. AWS Direct Connect — conexão dedicada entre a rede e os recursos AWS

### O problema que o AWS Direct Connect resolve
Quando uma empresa se liga à AWS através da internet pública, o tráfego percorre múltiplos routers e redes intermediárias que a empresa não controla — o que pode resultar em:

- **Latência variável e imprevisível** — o percurso pode mudar a qualquer momento, com resultados diferentes de dia para dia ou até de hora para hora
- **Largura de banda partilhada** — a ligação à internet é partilhada com todo o tráfego público, sem garantias de throughput dedicado
- **Custos elevados de transferência** — o custo de saída de dados da AWS para a internet (*data transfer out*) é mais caro do que a transferência entre a AWS e uma rede privada
- **Preocupações de segurança** — tráfego sensível (ex: dados financeiros, dados clínicos) que percorre a internet pública está, em princípio, mais exposto do que tráfego numa ligação privada dedicada

### O que é o AWS Direct Connect
O **AWS Direct Connect** é um serviço que permite estabelecer uma **ligação de rede dedicada e privada** entre a infraestrutura de uma empresa (ou data center on-premises) e a AWS — sem que o tráfego percorra a internet pública.

```
Infraestrutura da empresa          AWS
(data center on-premises)
        │
        │   Ligação física dedicada
        │   (fibra ótica, via parceiro Direct Connect)
        │
        ▼
  Direct Connect Location
  (ponto de presença físico
   do parceiro de conetividade)
        │
        │   Ligação privada à rede global AWS
        ▼
  AWS (VPC, S3, ou qualquer serviço AWS)
```

### Como funciona na prática
1. A empresa contacta um **parceiro de conetividade Direct Connect** (operadoras e fornecedores de rede credenciados pela AWS, presentes em localizações físicas específicas — os *Direct Connect Locations*).
2. O parceiro estabelece uma **ligação física de fibra ótica** entre o data center da empresa e o ponto de presença do Direct Connect mais próximo.
3. A partir desse ponto, o tráfego percorre a **rede privada global da AWS** até chegar aos recursos desejados (ex: uma VPC específica, buckets S3, etc.), sem nunca entrar na internet pública.

### Velocidades disponíveis
O Direct Connect está disponível em diferentes capacidades de largura de banda, consoante as necessidades da empresa:
- **1 Gbps** e **10 Gbps** — para ligações dedicadas (a empresa tem uma porta física exclusiva)
- Opções de **sub-1 Gbps** (ex: 50 Mbps, 100 Mbps, 500 Mbps) — para ligações partilhadas, através do modelo *hosted connection*, em parceria com operadoras autorizadas

### Vantagens do AWS Direct Connect

| Vantagem | Explicação |
|---|---|
| **Latência reduzida e previsível** | O percurso é fixo e dedicado, sem as variações imprevisíveis da internet pública |
| **Maior largura de banda** | Capacidades de até 10 Gbps por ligação (e múltiplas ligações agregadas), difíceis de replicar de forma consistente pela internet |
| **Custo de transferência mais baixo** | O custo de saída de dados da AWS para uma ligação Direct Connect é significativamente mais baixo do que para a internet pública |
| **Segurança reforçada** | O tráfego nunca percorre a internet pública, reduzindo a superfície de ataque e facilitando o cumprimento de requisitos de conformidade (ex: RGPD, PCI-DSS, HIPAA) |
| **Consistência de rede** | SLAs (acordos de nível de serviço) mais robustos face ao que a internet pública pode garantir |

### Direct Connect vs. VPN — quando usar cada um

| | AWS Direct Connect | VPN sobre internet |
|---|---|---|
| **Percurso** | Ligação física dedicada, fora da internet | Túnel cifrado sobre a internet pública |
| **Latência** | Baixa e previsível | Variável (depende da internet) |
| **Custo de setup** | Mais alto (ligação física, parceiro) | Baixo (configuração de software) |
| **Custo recorrente** | Mais alto | Mais baixo |
| **Segurança** | Alta (não percorre a internet) | Alta (cifrada), mas percorre a internet |
| **Velocidade máxima** | Até 10 Gbps por ligação | Limitada pela ligação à internet da empresa |
| **Tempo de implementação** | Semanas a meses (depende de obra física) | Horas a dias |
| **Quando usar** | Cargas de trabalho grandes, críticas, com requisitos de conformidade ou latência rigorosos | Acesso remoto de utilizadores individuais, ou ligações temporárias/de menor escala |

### AWS Direct Connect Gateway
Para cenários mais complexos, onde uma empresa precisa de uma única ligação Direct Connect que sirva **múltiplas VPCs em diferentes Regiões**, a AWS disponibiliza o **Direct Connect Gateway** — um recurso que agrega múltiplas VPCs sob uma única ligação Direct Connect, simplificando a arquitetura e reduzindo os custos de múltiplas ligações físicas independentes.

### Ligação com os conceitos anteriores
O AWS Direct Connect é, em certa medida, a resposta da AWS ao problema da "última milha" mencionado no ponto 3: em vez de depender da variabilidade e imprevisibilidade da internet pública para ligar a infraestrutura de uma empresa à nuvem, o Direct Connect substitui esse troço por uma ligação física dedicada e controlada — tornando a conectividade entre o mundo on-premises e a AWS tão previsível e gerível como a própria rede interna da empresa.

---

## Resumo em uma frase

> A conectividade com a AWS assenta nos mesmos fundamentos das redes de computadores (IPs, portas, protocolos), organizando os recursos em redes públicas e privadas através de VPCs, numa infraestrutura global que usa a própria rede privada da AWS para minimizar latência e maximizar fiabilidade — com o AWS Direct Connect como solução para empresas que precisam de uma ligação dedicada, previsível e privada entre os seus data centers e os serviços AWS, sem depender da internet pública.

---

## Conceitos relacionados para estudar a seguir

- **Security Groups e Network ACLs** — os dois mecanismos de filtragem de tráfego dentro de uma VPC, com diferenças importantes entre si (stateful vs. stateless)
- **VPC Peering e Transit Gateway** — como ligar múltiplas VPCs entre si, dentro da mesma conta ou entre contas AWS diferentes
- **AWS PrivateLink** — mecanismo para aceder a serviços AWS (ex: S3, DynamoDB) a partir de dentro de uma VPC, sem que o tráfego saia para a internet pública
- **Route 53** — o serviço de DNS da AWS, que resolve nomes de domínio para os endereços IP dos recursos AWS (mencionado em `01_aws.md`)
- **NAT Gateway** — permite que recursos numa sub-rede privada iniciem ligações à internet (ex: para descarregar atualizações), sem serem diretamente acessíveis a partir da internet