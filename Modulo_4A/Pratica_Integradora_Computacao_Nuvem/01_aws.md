# AWS (Amazon Web Services)

## O que é?

A **AWS (Amazon Web Services)** é a plataforma de computação em nuvem da Amazon, lançada oficialmente em 2006. É atualmente a maior e mais utilizada plataforma de cloud do mundo, oferecendo mais de 200 serviços diferentes — desde armazenamento e servidores virtuais até inteligência artificial, machine learning, bases de dados, redes, segurança e ferramentas para IoT (Internet das Coisas).

Na prática, a AWS permite que qualquer pessoa ou empresa, desde um estudante a uma multinacional, alugue capacidade computacional de forma flexível e paga apenas pelo que consome, sem precisar de comprar ou manter servidores físicos.

> Para contexto: a AWS nasceu do excedente de infraestrutura que a própria Amazon tinha construído para aguentar picos de tráfego no seu site de e-commerce (ver ficheiro `computacao-em-nuvem.md` para mais detalhes sobre esse histórico).

---

## Como funciona?

A AWS opera através de uma rede global de **data centers** organizados em duas unidades geográficas principais:

- **Regiões (Regions)**: áreas geográficas distintas (ex: `us-east-1` na Virgínia, `eu-west-1` na Irlanda, `eu-south-2` em Espanha). Cada empresa escolhe em que região quer alojar os seus recursos, geralmente pela proximidade aos utilizadores finais ou por questões legais (ex: RGPD na Europa).
- **Zonas de Disponibilidade (Availability Zones - AZs)**: cada região é composta por várias AZs, que são data centers fisicamente separados entre si (com energia, refrigeração e rede independentes), mas interligados por ligações de baixa latência. Isto permite distribuir aplicações por várias AZs para garantir alta disponibilidade — se uma AZ falhar, as outras continuam a funcionar.

O acesso à AWS é feito através de três formas principais:

1. **AWS Management Console** — interface gráfica (site) para gerir os serviços visualmente.
2. **AWS CLI (Command Line Interface)** — para gerir os serviços via linha de comandos, útil para automação.
3. **SDKs e APIs** — para integrar serviços AWS diretamente em código (Python, Java, Node.js, etc.), muito usado em automação e DevOps.

O modelo de cobrança é **pay-as-you-go**: paga-se apenas pelos recursos efetivamente utilizados (por hora, por GB armazenado, por número de pedidos, etc.), sem necessidade de contratos de longo prazo (embora existam descontos para compromissos de uso reservado).

---

## Para que serve?

A AWS serve praticamente qualquer necessidade de infraestrutura tecnológica, entre as quais:

- Alojar sites, aplicações web e APIs
- Armazenar e fazer backup de ficheiros e dados
- Executar bases de dados relacionais e não-relacionais
- Processar grandes volumes de dados (big data, analytics)
- Treinar e correr modelos de machine learning e inteligência artificial
- Hospedar aplicações escaláveis que precisam de crescer/diminuir conforme a procura (ex: e-commerce, streaming)
- Criar ambientes de desenvolvimento, testes e CI/CD
- Implementar soluções de segurança, monitorização e governança de TI

---

## Principais serviços

A AWS organiza os seus serviços por categoria. Alguns dos mais relevantes para começar a estudar:

### Computação
- **EC2 (Elastic Compute Cloud)** — servidores virtuais (VMs) configuráveis, o serviço mais fundamental de IaaS da AWS.
- **Lambda** — execução de código sem gerir servidores (serverless/FaaS); paga-se apenas pelo tempo de execução.
- **Elastic Beanstalk** — plataforma (PaaS) para implementar aplicações web rapidamente sem gerir a infraestrutura subjacente.

### Armazenamento
- **S3 (Simple Storage Service)** — armazenamento de objetos (ficheiros), muito usado para backups, sites estáticos e data lakes.
- **EBS (Elastic Block Store)** — discos virtuais anexados a instâncias EC2.
- **Glacier** — armazenamento de baixo custo para arquivo a longo prazo, com acesso mais lento.

### Bases de dados
- **RDS (Relational Database Service)** — bases de dados relacionais geridas (MySQL, PostgreSQL, SQL Server, etc.)
- **DynamoDB** — base de dados NoSQL totalmente gerida, de altíssima performance.

### Redes
- **VPC (Virtual Private Cloud)** — permite criar uma rede privada isolada dentro da AWS, com controlo total sobre sub-redes, IPs e regras de tráfego.
- **Route 53** — serviço de DNS.
- **CloudFront** — CDN (Content Delivery Network) para distribuir conteúdo com baixa latência globalmente.

### Segurança e Identidade
- **IAM (Identity and Access Management)** — gestão de utilizadores, grupos, permissões e políticas de acesso.
- **AWS Shield / WAF** — proteção contra ataques (DDoS, firewall de aplicações web).

### Monitorização e Gestão
- **CloudWatch** — monitorização de métricas, logs e alarmes.
- **CloudTrail** — registo de auditoria de todas as ações realizadas na conta.

---

## Vantagens da AWS

- **Maior quota de mercado** — o fornecedor mais usado globalmente, o que significa mais documentação, comunidade, vagas de emprego e integrações disponíveis.
- **Amplitude de serviços** — dificilmente há uma necessidade de infraestrutura que a AWS não cubra.
- **Escalabilidade elástica** — recursos ajustam-se automaticamente à procura.
- **Alta disponibilidade global** — presença em várias regiões e zonas de disponibilidade no mundo inteiro.
- **Segurança robusta** — infraestrutura com certificações de conformidade (ISO, RGPD, SOC, etc.) e ferramentas avançadas de controlo de acesso.
- **Modelo de custo flexível** — paga-se apenas pelo que se usa, com opções de poupança para uso previsível (Reserved Instances, Savings Plans).
- **Camada gratuita (Free Tier)** — a AWS oferece um conjunto de serviços gratuitos (com limites) durante 12 meses após a criação da conta, além de alguns serviços sempre gratuitos até certo limite — ótimo para estudar e praticar sem custo.

---

## Tipos de perfis / contas na AWS

Este é um dos conceitos mais importantes de segurança na AWS, por isso vale a pena destacar bem:

### 1. Conta raiz (Root Account)

É a conta criada no momento em que se regista na AWS, associada ao e-mail e senha inicial. Tem **acesso total e irrestrito** a todos os serviços e definições de faturação da conta AWS.

**Boas práticas recomendadas pela própria AWS em relação à conta raiz:**
- **Nunca usar a conta raiz para tarefas do dia a dia.** Deve ser usada apenas para tarefas muito específicas que exigem explicitamente o utilizador raiz (ex: alterar o plano de suporte, fechar a conta, algumas configurações de faturação).
- **Ativar o MFA (autenticação multifator)** na conta raiz assim que possível.
- **Criar utilizadores IAM separados** para o uso normal, mesmo sendo o único administrador da conta.
- Guardar as credenciais da conta raiz com extremo cuidado (é o "chave-mestra" de tudo).

### 2. Utilizadores IAM (IAM Users)

Contas individuais criadas dentro de uma conta AWS, geridas através do serviço **IAM (Identity and Access Management)**. Cada utilizador IAM tem as suas próprias credenciais (username/password e/ou access keys) e permissões próprias, definidas através de **políticas (policies)**.

Exemplos de uso:
- Um funcionário de uma empresa recebe um utilizador IAM com permissões apenas para gerir instâncias EC2, sem acesso à faturação.
- Um developer recebe um utilizador IAM com acesso apenas ao S3 e ao CloudWatch de um projeto específico.

### 3. Grupos IAM (IAM Groups)

Conjuntos de utilizadores IAM que partilham as mesmas permissões. Em vez de atribuir permissões individualmente a cada utilizador, atribuem-se a um grupo (ex: grupo "Developers", grupo "Administradores") e todos os membros herdam essas permissões — facilita muito a gestão em equipas.

### 4. Funções IAM (IAM Roles)

Diferente de um utilizador, uma **role** não tem credenciais fixas (password ou access key permanentes). É "assumida" temporariamente por uma entidade (um utilizador, um serviço AWS, ou até uma conta externa) para obter permissões específicas durante um período limitado.

Muito usada para:
- Permitir que um serviço AWS (ex: uma instância EC2) aceda a outro serviço (ex: um bucket S3) sem guardar credenciais no código.
- Dar acesso temporário a utilizadores de outra conta AWS (cenários multi-conta).
- Federação de identidade (ex: login com conta corporativa via Active Directory).

### 5. Políticas (Policies)

Documentos em formato JSON que definem exatamente **quais ações são permitidas ou negadas**, sobre quais recursos, e sob que condições. São anexadas a utilizadores, grupos ou roles para controlar o que cada um pode ou não fazer.

Exemplo simplificado de uma política que permite apenas leitura num bucket S3 específico:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:ListBucket"],
      "Resource": ["arn:aws:s3:::meu-bucket-exemplo/*"]
    }
  ]
}
```

### Resumo da hierarquia de acesso

```
Conta Raiz (acesso total, uso restrito a emergências/faturação)
   │
   ├── Utilizadores IAM (pessoas ou aplicações específicas)
   │        └── podem pertencer a Grupos IAM (permissões partilhadas)
   │
   └── Funções IAM (Roles) — acesso temporário e assumível
            └── usadas por serviços AWS, contas externas ou federação
```

---

## Boas práticas gerais de segurança na AWS

- Nunca usar a conta raiz no dia a dia.
- Ativar MFA em todas as contas, especialmente na raiz e em utilizadores administradores.
- Seguir o **princípio do menor privilégio** (dar apenas as permissões estritamente necessárias).
- Nunca deixar *access keys* expostas em código público (ex: repositórios do GitHub).
- Monitorizar atividade através do CloudTrail.
- Definir alarmes de faturação (billing alarms) para evitar surpresas na fatura.

---

## Conceitos relacionados para estudar a seguir

- **IAM em profundidade** (policies, roles, trust relationships)
- **VPC e redes na AWS** (sub-redes públicas/privadas, security groups, NACLs)
- **Modelo de responsabilidade partilhada** (o que é da responsabilidade da AWS vs. do cliente em termos de segurança)
- **AWS Well-Architected Framework** (boas práticas oficiais de arquitetura na AWS)
- **Comparação com outros fornecedores** (Azure, Google Cloud)

---

## Resumo em uma frase

> A AWS é a plataforma de cloud da Amazon que disponibiliza mais de 200 serviços de infraestrutura e software sob demanda, com um sistema robusto de gestão de identidade e acesso (IAM) que separa claramente a conta raiz (acesso total) dos utilizadores e funções do dia a dia, seguindo o princípio de dar apenas o acesso estritamente necessário a cada pessoa ou serviço.