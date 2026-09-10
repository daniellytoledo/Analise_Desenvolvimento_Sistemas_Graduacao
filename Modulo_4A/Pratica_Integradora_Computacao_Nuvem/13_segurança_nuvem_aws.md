# Ferramentas e Características para Segurança na Nuvem

---

## 1. Modelo de Responsabilidade Compartilhada

### O conceito central
Um dos princípios mais importantes para quem trabalha com a AWS — e frequentemente subestimado por quem está a começar — é o **Modelo de Responsabilidade Compartilhada**: a ideia de que a segurança na nuvem é uma **responsabilidade dividida** entre a AWS e o utilizador, com limites claros de até onde vai a responsabilidade de cada parte.

A forma mais simples de resumir é:
- **AWS**: responsável pela segurança **da** nuvem (*security of the cloud*)
- **Utilizador**: responsável pela segurança **na** nuvem (*security in the cloud*)

### O que a AWS é responsável por proteger

A AWS é responsável por toda a **infraestrutura física e de virtualização** que sustenta os seus serviços:

```
┌─────────────────────────────────────────────────┐
│         RESPONSABILIDADE DA AWS                  │
│                                                   │
│  Data centers físicos                             │
│  (segurança física, controlo de acesso, CCTV)    │
│                                                   │
│  Hardware (servidores, switches, routers)         │
│                                                   │
│  Infraestrutura de rede global                    │
│                                                   │
│  Camada de virtualização (hypervisors)            │
│                                                   │
│  Software dos serviços geridos                    │
│  (ex: patches do motor RDS, do Lambda, do S3)    │
└─────────────────────────────────────────────────┘
```

### O que o utilizador é responsável por proteger

A responsabilidade do utilizador varia consoante o tipo de serviço usado — quanto mais gerido for o serviço, menos responsabilidades recaem sobre o utilizador:

```
┌─────────────────────────────────────────────────┐
│         RESPONSABILIDADE DO UTILIZADOR           │
│                                                   │
│  Dados (encriptação, classificação, backups)      │
│                                                   │
│  Gestão de identidade e acesso (IAM)              │
│  (ver ponto 3)                                    │
│                                                   │
│  Configuração de rede (Security Groups, NACLs,    │
│  VPCs) — ver `08_conectividade_aws.md`            │
│                                                   │
│  Sistema operativo das instâncias EC2             │
│  (patches, atualizações — responsabilidade total) │
│                                                   │
│  Aplicações instaladas e código próprio           │
│                                                   │
│  Firewall da aplicação (ver AWS WAF, ponto 4)     │
└─────────────────────────────────────────────────┘
```

### Como a responsabilidade muda consoante o modelo de serviço

| Camada | On-Premises | IaaS (EC2) | PaaS (RDS/Beanstalk) | SaaS |
|---|---|---|---|---|
| Dados | Utilizador | Utilizador | Utilizador | Utilizador |
| Aplicação | Utilizador | Utilizador | Utilizador | AWS |
| Runtime/OS | Utilizador | Utilizador | AWS | AWS |
| Virtualização | Utilizador | AWS | AWS | AWS |
| Hardware/Rede | Utilizador | AWS | AWS | AWS |
| Data centers | Utilizador | AWS | AWS | AWS |

Este modelo é fundamental porque esclarece que **migrar para a nuvem não elimina responsabilidades de segurança** — apenas redistribui algumas delas. O erro mais comum é assumir que "a AWS cuida de tudo" e negligenciar configurações de segurança que são, de facto, da responsabilidade do utilizador (ex: deixar portas abertas em Security Groups, não encriptar dados sensíveis, ou não ativar MFA).

---

## 2. Autenticação Multifator (MFA) — incremento na conexão aos serviços na nuvem

### O problema que o MFA resolve
Uma password, por mais forte que seja, é um único fator de autenticação — se for descoberta (por phishing, força bruta, vazamento de dados, ou engenharia social), o atacante tem acesso completo. A **autenticação multifator (MFA)** adiciona uma segunda camada de verificação, de forma que mesmo que a password seja comprometida, o atacante ainda precisa de um segundo fator que normalmente só o utilizador legítimo possui.

### Os três fatores de autenticação

| Fator | Tipo | Exemplo |
|---|---|---|
| **Algo que se sabe** | Conhecimento | Password, PIN, resposta a pergunta de segurança |
| **Algo que se tem** | Posse | Telemóvel com app de autenticação, chave de segurança física (YubiKey) |
| **Algo que se é** | Inerência | Impressão digital, reconhecimento facial |

O MFA combina pelo menos dois destes fatores — o mais comum na AWS é a combinação de **password** (algo que se sabe) + **código OTP** (algo que se tem).

### Tipos de MFA suportados pela AWS

**Aplicações de autenticação virtual (TOTP)**
A forma mais comum e prática. Uma aplicação no telemóvel (ex: Google Authenticator, Authy, Microsoft Authenticator) gera um **código de 6 dígitos que muda a cada 30 segundos** — chamado TOTP (*Time-based One-Time Password*). O utilizador introduz a password + este código ao fazer login.

**Chaves de segurança físicas (FIDO2 / WebAuthn)**
Dispositivos físicos USB ou NFC (ex: YubiKey, Feitian) que, quando tocados ou inseridos, confirmam a identidade do utilizador. Mais seguros do que apps de telemóvel (imunes a phishing), mas com custo de hardware associado.

**MFA por SMS**
Código enviado por SMS para o número de telemóvel registado. Menos seguro do que as opções anteriores (vulnerável a ataques SIM-swapping), mas ainda assim muito melhor do que sem MFA — a AWS não recomenda este método para a conta root, mas suporta-o para casos de uso específicos.

### Onde e como ativar MFA na AWS

**Conta root — obrigatório por boas práticas**
Como já mencionado em `01_aws.md`, ativar MFA na conta root é uma das primeiras ações a tomar após criar uma conta AWS. O processo:

1. Aceder à consola AWS com a conta root.
2. Clicar no nome da conta no topo direito → **"Security credentials"**.
3. Em **"Multi-factor authentication (MFA)"**, clicar em **"Assign MFA device"**.
4. Escolher o tipo de dispositivo MFA (app virtual, chave física, etc.).
5. Seguir as instruções de configuração (ex: escanear QR code com a app de autenticação).

**Utilizadores IAM**
Cada utilizador IAM pode (e deve) ter MFA configurado individualmente. É possível criar **políticas IAM que obrigam os utilizadores a ter MFA ativo** antes de poderem realizar qualquer ação além da configuração do próprio MFA:

```json
{
  "Effect": "Deny",
  "NotAction": [
    "iam:CreateVirtualMFADevice",
    "iam:EnableMFADevice",
    "iam:GetUser",
    "iam:ListMFADevices",
    "iam:ListVirtualMFADevices",
    "sts:GetSessionToken"
  ],
  "Resource": "*",
  "Condition": {
    "BoolIfExists": {
      "aws:MultiFactorAuthPresent": "false"
    }
  }
}
```
Esta política nega qualquer ação (exceto as necessárias para configurar o próprio MFA) a utilizadores que não autenticaram com MFA — forçando a adoção de MFA em toda a organização.

---

## 3. AWS Identity and Access Management (IAM) — gestão de identidades e acesso

### O que é o IAM
O **AWS IAM (Identity and Access Management)** é o serviço da AWS que controla **quem pode fazer o quê** em qualquer recurso da conta AWS. É um dos serviços mais fundamentais e transversais de toda a plataforma — toda a segurança de acesso passa, de uma forma ou de outra, pelo IAM.

Já foi introduzido em `01_aws.md` — este ponto aprofunda os conceitos e mecanismos com mais detalhe.

### Os quatro pilares do IAM

**1. Utilizadores (Users)**
Identidades individuais, tipicamente pessoas, com credenciais próprias (password para a consola web, e/ou access keys para a CLI/API). Cada utilizador deve ter **apenas as permissões estritamente necessárias** para o seu trabalho (princípio do menor privilégio).

**2. Grupos (Groups)**
Conjuntos de utilizadores que partilham o mesmo conjunto de permissões. Em vez de atribuir permissões individualmente a cada pessoa, atribuem-se a grupos (ex: `grupo-developers`, `grupo-analistas-dados`, `grupo-admins`) — muito mais fácil de gerir em organizações com muitas pessoas.

**3. Roles (Funções)**
Identidades temporárias que podem ser **assumidas** por utilizadores, serviços AWS, ou contas externas, para obter permissões específicas durante um período limitado. As roles não têm credenciais fixas — as credenciais são geradas temporariamente no momento em que a role é assumida, o que as torna mais seguras do que utilizadores com access keys permanentes.

Casos de uso típicos:
- Uma função Lambda que precisa de aceder ao S3 — em vez de guardar access keys no código (péssima prática), a função assume uma role com as permissões necessárias
- Um utilizador que precisa de acesso temporário a uma conta AWS diferente (cross-account access)
- Serviços EC2 que precisam de chamar outros serviços AWS sem credenciais hard-coded

**4. Políticas (Policies)**
Documentos JSON que definem **o que é permitido ou negado**, sobre **que recursos**, e **sob que condições**. São a "lei" do IAM — toda a decisão de acesso é tomada com base nas políticas associadas à identidade que está a fazer o pedido.

### Estrutura de uma política IAM

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PermitirLeituraS3",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::meu-bucket-producao",
        "arn:aws:s3:::meu-bucket-producao/*"
      ],
      "Condition": {
        "StringEquals": {
          "aws:RequestedRegion": "eu-west-1"
        }
      }
    }
  ]
}
```

Cada statement (declaração) tem:
- **Effect**: `Allow` ou `Deny` — o resultado desta regra
- **Action**: que operações da API esta regra cobre (ex: `s3:GetObject`, `ec2:*`, `rds:Describe*`)
- **Resource**: que recursos específicos esta regra cobre (via ARN — Amazon Resource Name, o identificador único de qualquer recurso AWS)
- **Condition** (opcional): condições adicionais para a regra ser aplicada (ex: apenas de determinada região, apenas com MFA ativo, apenas em determinadas horas)

### Tipos de políticas

| Tipo | Descrição | Exemplo |
|---|---|---|
| **AWS Managed Policies** | Criadas e mantidas pela AWS, para casos de uso comuns | `AmazonS3ReadOnlyAccess`, `AdministratorAccess` |
| **Customer Managed Policies** | Criadas pelo utilizador, reutilizáveis em múltiplas identidades | Política customizada para um papel específico da empresa |
| **Inline Policies** | Diretamente embutidas numa identidade específica, não reutilizáveis | Usadas para casos muito específicos, desaconselhadas em geral |

### Regras de avaliação de acesso
Quando uma identidade IAM faz um pedido, a AWS avalia as políticas numa ordem específica:

```
1. Há um Deny explícito? → NEGADO (Deny sempre vence)
      │ Não
      ▼
2. Há um Allow explícito? → PERMITIDO
      │ Não
      ▼
3. Negação implícita → NEGADO (tudo é negado por defeito se não houver Allow)
```

Este modelo de **"negar por defeito"** é fundamental: sem uma política que explicitamente permita uma ação, ela é negada — reforçando o princípio do menor privilégio.

### IAM Access Analyzer e boas práticas
O **IAM Access Analyzer** é uma ferramenta que analisa as políticas da conta e identifica recursos que estão acessíveis a partir do exterior da conta (ex: um bucket S3 com política que permite acesso público sem ser intencional) — ajudando a detetar configurações de acesso mais permissivas do que o pretendido.

---

## 4. AWS WAF — firewall virtual de aplicações web na nuvem

### O que é o AWS WAF
O **AWS WAF (Web Application Firewall)** é um firewall específico para **aplicações web** — diferente de um Security Group (que filtra tráfego ao nível de IP e porta, ver `08_conectividade_aws.md`), o WAF opera ao **nível da camada da aplicação (Layer 7)**, inspecionando o conteúdo dos pedidos HTTP/HTTPS para detetar e bloquear ataques específicos a aplicações web.

### O problema que o WAF resolve
Uma aplicação web exposta na internet está constantemente exposta a tentativas de ataque, mesmo sem ser alvo de ataques deliberados — bots e scanners automáticos percorrem continuamente a internet à procura de vulnerabilidades conhecidas. Os tipos de ataque mais comuns que o WAF protege:

| Ataque | Descrição |
|---|---|
| **SQL Injection (SQLi)** | Injeção de código SQL malicioso em campos de formulário para manipular ou extrair dados da base de dados (ver `10_bancos_de_dados_nuvem_aws.md`) |
| **Cross-Site Scripting (XSS)** | Injeção de código JavaScript malicioso em páginas web, que é depois executado no browser de outros utilizadores |
| **DDoS Layer 7** | Flood de pedidos HTTP legítimos aparentes, que sobrecarregam a aplicação (diferente de DDoS de rede, que é tratado pelo AWS Shield) |
| **Bot traffic** | Tráfego automatizado que simula utilizadores humanos, para scraping, credential stuffing, ou fraude |
| **Rate limiting abuse** | Chamadas excessivas à API por uma única origem, esgotando recursos da aplicação |

### Como o WAF funciona

O WAF é associado a um ponto de entrada da aplicação — **CloudFront**, **Application Load Balancer (ALB)**, **API Gateway**, ou **AppSync** — e inspeciona cada pedido HTTP/HTTPS antes de este chegar à aplicação:

```
Internet
    │
    ▼
CloudFront / ALB / API Gateway
    │
    ▼ (cada pedido passa pelo WAF antes de chegar à aplicação)
┌──────────────┐
│   AWS WAF    │
│              │
│  Avalia      │ → Pedido bloqueado (HTTP 403 Forbidden)
│  regras      │
│  (Web ACLs)  │ → Pedido permitido → Aplicação
└──────────────┘
```

### Web ACLs e Regras
A configuração central do WAF é a **Web ACL (Access Control List)** — um conjunto ordenado de regras, onde cada regra define:
- **O que inspecionar**: headers, body, URI, query string, IP de origem, etc.
- **A condição de correspondência**: ex: "o body contém padrões de SQL Injection"
- **A ação**: `Allow` (permitir), `Block` (bloquear), `Count` (contar sem bloquear — útil para testar regras novas), ou `CAPTCHA`

### AWS Managed Rules
A AWS disponibiliza conjuntos de regras **pré-construídas e geridas**, actualizadas regularmente pela equipa de segurança da AWS à medida que surgem novas ameaças — sem que o utilizador precise de as manter manualmente:

| Conjunto de regras geridas | O que protege |
|---|---|
| **Core Rule Set (CRS)** | Proteção genérica contra os ataques OWASP Top 10 (as 10 vulnerabilidades web mais comuns) |
| **SQL Database** | Padrões específicos de SQL Injection |
| **Known Bad Inputs** | Padrões conhecidos de inputs maliciosos |
| **Amazon IP Reputation List** | IPs associados a bots, malware e outros comportamentos maliciosos |
| **Bot Control** | Deteção e gestão de tráfego de bots (legítimos e maliciosos) |

### AWS Shield — complemento ao WAF para DDoS
Enquanto o WAF protege ao nível da aplicação (Layer 7), o **AWS Shield** protege ao nível de rede e transporte (Layers 3 e 4) contra ataques DDoS volumétricos:
- **AWS Shield Standard**: ativado automaticamente e gratuitamente em todos os recursos AWS
- **AWS Shield Advanced**: proteção adicional contra ataques mais sofisticados, com suporte da equipa de resposta a DDoS da AWS (DDoS Response Team) e proteção financeira contra custos inesperados gerados por ataques

---

## 5. AWS Key Management Service (KMS) — gestão de chaves criptográficas

### O que é o AWS KMS
O **AWS KMS (Key Management Service)** é o serviço da AWS para **criar, gerir e controlar chaves criptográficas** usadas para encriptar e desencriptar dados em qualquer serviço AWS — ou em aplicações próprias.

A encriptação é uma das práticas mais importantes da segurança na nuvem: mesmo que um atacante consiga aceder fisicamente aos dados armazenados (ex: num bucket S3 ou num volume EBS), se esses dados estiverem encriptados com uma chave bem gerida, não consegue ler o seu conteúdo.

### O que é uma chave criptográfica, simplificado
Uma **chave criptográfica** é, simplificando, um valor secreto usado por um algoritmo matemático para transformar dados legíveis (plaintext) em dados ilegíveis sem a chave (ciphertext) — e vice-versa. A segurança dos dados encriptados depende directamente de **onde e como as chaves são guardadas**.

O KMS resolve o problema de guardar estas chaves de forma segura, dentro de módulos de segurança de hardware (*HSMs — Hardware Security Modules*) validados pela norma **FIPS 140-2**, que nunca permitem que as chaves saiam do sistema em texto puro.

### Tipos de chaves no KMS

| Tipo | Quem cria e gere | Caso de uso |
|---|---|---|
| **AWS Managed Keys** | Criadas automaticamente pela AWS para cada serviço (ex: `aws/s3`, `aws/rds`) | Encriptação padrão de serviços AWS sem preocupações de gestão |
| **Customer Managed Keys (CMK)** | Criadas e geridas pelo utilizador no KMS | Controlo total sobre políticas de acesso, rotação e auditoria da chave |
| **Customer Provided Keys** | Criadas fora da AWS, importadas para o KMS | Casos onde regulamentação exige que as chaves sejam geradas internamente |

### Como o KMS se integra com outros serviços AWS

O KMS integra-se nativamente com praticamente todos os serviços de armazenamento e processamento de dados da AWS:

```
Serviço AWS (ex: S3, EBS, RDS, Lambda, CloudTrail)
        │
        │ pedido de encriptação/desencriptação
        ▼
    AWS KMS
        │
        │ (chave nunca sai do KMS em texto puro)
        ▼
    Dado encriptado ↔ Dado desencriptado
```

Exemplos concretos:
- **S3**: ao activar *Server-Side Encryption* com KMS (`SSE-KMS`) num bucket, todos os objectos são encriptados automaticamente com uma chave KMS escolhida — e o acesso ao conteúdo requer tanto permissão no S3 como permissão na chave KMS correspondente (duas camadas de controlo).
- **EBS** (ver `09_armazenamento_dados_aws.md`): volumes encriptados com KMS — os dados em disco são sempre encriptados, desencriptados de forma transparente quando a instância EC2 autorizada os lê.
- **RDS** (ver `10_bancos_de_dados_nuvem_aws.md`): a base de dados e os seus backups automáticos são encriptados com KMS, configurado no momento da criação da instância.
- **CloudTrail** (ver `12_monitoramento_servidores_aws.md`): os logs de auditoria guardados no S3 podem ser encriptados com KMS para garantir que apenas identidades autorizadas conseguem lê-los.

### Políticas de chave (Key Policies)
Cada chave KMS tem a sua própria **política de chave (key policy)** — um documento similar às políticas IAM — que define **quem pode usar ou gerir essa chave**. Esta é uma camada de controlo adicional à política IAM: mesmo que um utilizador IAM tenha permissão de `kms:Decrypt`, se a política da chave não o incluir, o acesso é negado.

### Rotação automática de chaves
O KMS suporta **rotação automática de chaves** para CMKs, criando automaticamente novo material de chave a cada ano. O material de chave antigo é mantido para desencriptar dados que foram encriptados com ele anteriormente — mas todos os novos dados são encriptados com o material mais recente. Isto segue a boa prática de limitar o tempo de exposição de qualquer chave específica.

### CloudHSM — para requisitos de conformidade mais rigorosos
Para organizações com requisitos regulatórios que exigem **controlo exclusivo** sobre o hardware onde as chaves são geradas e armazenadas (ex: algumas normas do setor financeiro ou de saúde), a AWS disponibiliza o **AWS CloudHSM** — módulos de segurança de hardware dedicados exclusivamente ao cliente, onde a AWS não tem acesso às chaves armazenadas. É mais caro e complexo de gerir do que o KMS, mas oferece o maior nível de isolamento possível.

---

## Resumo em uma frase

> A segurança na AWS é uma responsabilidade partilhada entre a AWS (infraestrutura física e virtualização) e o utilizador (dados, identidades, configurações de rede e aplicações), implementada na prática através de MFA para autenticação robusta, IAM para controlo granular de quem pode fazer o quê, WAF para proteger aplicações web contra ataques Layer 7, e KMS para encriptação de dados em repouso com gestão centralizada e auditável de chaves criptográficas.

---

## Conceitos relacionados para estudar a seguir

- **AWS Organizations e Service Control Policies (SCPs)** — gestão de segurança e políticas em múltiplas contas AWS de forma centralizada
- **Amazon Cognito** — serviço para gerir autenticação e autorização de utilizadores finais das aplicações (diferente do IAM, que é para identidades internas da AWS)
- **AWS Secrets Manager** — gestão segura de credenciais de aplicações (passwords de bases de dados, API keys) com rotação automática, complementar ao KMS
- **AWS GuardDuty** — deteção de ameaças com machine learning, analisando CloudTrail, VPC Flow Logs e DNS Logs em busca de comportamentos suspeitos
- **Penetration Testing na AWS** — o que é permitido fazer (e o que requer autorização prévia) quando se realizam testes de segurança nos próprios recursos AWS