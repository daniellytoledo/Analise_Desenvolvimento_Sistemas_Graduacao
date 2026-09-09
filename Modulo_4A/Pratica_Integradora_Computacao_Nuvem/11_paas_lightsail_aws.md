# Configuração e Uso de Plataformas como Serviço

---

## 1. Serviços gerenciados na AWS — facilitando o gerenciamento dos recursos na nuvem

### O que são serviços gerenciados
Ao longo de todo este módulo, foi possível perceber que a AWS não oferece apenas "infraestrutura bruta" (como instâncias EC2, onde o utilizador precisa de instalar e configurar tudo manualmente) — oferece também **serviços gerenciados**, onde a AWS assume a responsabilidade de gerir a camada operacional, deixando o utilizador livre para focar na aplicação e no valor de negócio.

Já foram vistos vários exemplos deste modelo ao longo dos ficheiros anteriores:

| Serviço gerenciado | O que a AWS gere | O que o utilizador define |
|---|---|---|
| Amazon RDS (ver `10_bancos_de_dados_nuvem_aws.md`) | Motor, patches, backups, failover | Schema, dados, queries, utilizadores do DB |
| AWS Lambda (ver `05_computacao_sem_servidor.md`) | Servidores, escalabilidade, sistema operativo | Apenas o código da função |
| Amazon S3 (ver `09_armazenamento_dados_aws.md`) | Hardware, replicação, durabilidade | Organização dos objetos, permissões, ciclo de vida |
| Amazon EKS (ver pasta DevOps_II) | Control Plane do Kubernetes | Deployments, Services, configuração das aplicações |

### O espectro de controlo vs. abstração
Os serviços da AWS distribuem-se ao longo de um espectro, desde o máximo controlo (mas máxima responsabilidade) até à máxima abstração (mas mínima configuração necessária):

```
Mais controlo ←──────────────────────────────────────→ Mais abstração
(mais para gerir)                                      (menos para gerir)

EC2         RDS / EKS        Elastic Beanstalk       Lambda / Lightsail
(IaaS)      (gerido parcial)     (PaaS)                (Serverless / PaaS)
```

Este ficheiro foca-se especificamente na camada **PaaS**, onde a abstração é suficientemente alta para que um developer consiga implementar uma aplicação completa sem precisar de gerir infraestrutura individualmente.

### Por que os serviços gerenciados importam para o desenvolvimento
- **Velocidade**: uma aplicação que demoraria dias ou semanas a configurar em servidores próprios pode estar disponível em minutos com um serviço gerenciado.
- **Redução de risco operacional**: a AWS é responsável pela disponibilidade e segurança da plataforma — menos pontos de falha sob responsabilidade da equipa de desenvolvimento.
- **Foco no produto**: a equipa deixa de gastar tempo a instalar dependências, configurar rede e gerir patches, e passa a focar-se no código e nas funcionalidades que os utilizadores realmente valorizam.
- **Custo previsível**: o modelo de pagamento por uso (pay-as-you-go) elimina o desperdício de capacidade que frequentemente acompanha infraestrutura on-premises superdimensionada (ver `00_computacao_em_nuvem.md`).

---

## 2. Plataforma como Serviço (PaaS) — ambientes de desenvolvimento de aplicações na nuvem

### Recapitulação dos modelos de serviço
Já foi introduzida a divisão IaaS / PaaS / SaaS em `00_computacao_em_nuvem.md` — este ponto aprofunda especificamente o modelo **PaaS** no contexto da AWS.

### O que é PaaS
**PaaS (Platform as a Service)** é o modelo em que o fornecedor de nuvem disponibiliza não apenas a infraestrutura (IaaS), mas também uma **plataforma completa de desenvolvimento e execução** de aplicações — incluindo runtime, middleware, sistema operativo, rede e armazenamento, tudo gerido pelo fornecedor. O utilizador apenas escreve e publica o código da aplicação.

```
IaaS (ex: EC2):                    PaaS (ex: Lightsail, Beanstalk):
┌──────────────────┐               ┌──────────────────┐
│ Aplicação        │ ← utilizador  │ Aplicação        │ ← utilizador
│ Runtime          │ ← utilizador  ├──────────────────┤
│ Sistema Operativo│ ← utilizador  │ Runtime          │ ← AWS
│ Virtualização    │ ← AWS         │ Sistema Operativo│ ← AWS
│ Hardware         │ ← AWS         │ Virtualização    │ ← AWS
└──────────────────┘               │ Hardware         │ ← AWS
                                   └──────────────────┘
```

### Vantagens do PaaS para developers
- **Deploy simplificado**: em vez de configurar servidores, instalar dependências e gerir configurações de rede, o developer apenas envia o código e a plataforma trata do resto.
- **Escalabilidade integrada**: a plataforma escala automaticamente a aplicação conforme a procura, sem configuração adicional.
- **Ambientes de desenvolvimento, testes e produção facilmente replicáveis**: criar um novo ambiente de testes é tão simples quanto criar uma nova instância da aplicação.
- **Redução da curva de aprendizagem de infraestrutura**: equipas pequenas ou developers individuais podem lançar aplicações robustas sem precisar de ser especialistas em infraestrutura.

### Exemplos de PaaS na AWS
- **AWS Elastic Beanstalk**: já mencionado em `05_computacao_sem_servidor.md` — recebe o código da aplicação e gere automaticamente EC2, Load Balancer, Auto Scaling, CloudWatch.
- **AWS App Runner**: serviço mais recente e simplificado, que corre aplicações diretamente a partir de código-fonte ou imagens de contentor, sem qualquer configuração de infraestrutura.
- **AWS Lightsail**: a oferta PaaS mais acessível e simplificada da AWS, especificamente desenhada para reduzir ao mínimo a complexidade de configuração — o foco principal deste ficheiro, aprofundado nos pontos seguintes.

---

## 3. Exemplos de aplicações com AWS Lightsail

### O que é o AWS Lightsail
O **AWS Lightsail** é o serviço da AWS desenhado para ser o ponto de entrada mais simples e acessível na plataforma — agrupando, numa única interface simplificada, os recursos mais comuns que uma aplicação típica precisa:

- **Instâncias** (servidores virtuais pré-configurados)
- **Bases de dados geridas** (MySQL, PostgreSQL)
- **Armazenamento de objetos** (compatível com S3)
- **Contentores** (para correr imagens Docker)
- **Balanceadores de carga**
- **CDN e distribuição de conteúdo**
- **IPs estáticos e domínios**

Em vez de o utilizador ter de navegar por dezenas de serviços AWS diferentes e configurar as integrações entre eles manualmente, o Lightsail apresenta tudo num painel único, com preços fixos e previsíveis por mês (ao contrário do modelo de pay-as-you-go detalhado da AWS, que pode ser complexo de prever para quem está a começar).

### Para quem o Lightsail é especialmente adequado
- **Developers individuais ou equipas pequenas** que precisam de lançar uma aplicação rapidamente sem querer aprender toda a complexidade da AWS.
- **Pequenas e médias empresas** com necessidades de infraestrutura mais simples e previsíveis.
- **Protótipos e MVPs** (Minimum Viable Products) — testar uma ideia rapidamente antes de investir em configuração de infraestrutura mais complexa.
- **Sites e blogs** baseados em CMS (WordPress, Joomla, Drupal) — o Lightsail tem blueprints pré-configurados para estes (ver ponto 4).
- **Aprendizagem e estudo** — o Lightsail é uma das formas mais acessíveis de experimentar a AWS sem risco de custos inesperados.

### Exemplos concretos de aplicações que se pode lançar com Lightsail

**Site WordPress**
Sem instalar manualmente PHP, MySQL, Nginx ou Apache — o Lightsail disponibiliza um blueprint WordPress já configurado, onde a instância está pronta a receber o primeiro artigo em minutos (ver ponto 4 para mais detalhes sobre blueprints).

**Aplicação Node.js com base de dados**
Uma instância Lightsail com Node.js pré-configurado, ligada a uma base de dados gerida MySQL ou PostgreSQL do próprio Lightsail — tudo dentro da mesma rede privada do Lightsail, sem precisar de configurar VPCs ou Security Groups manualmente.

**API com contentores Docker**
O Lightsail suporta também a implementação de aplicações em contentores (imagens Docker, ver pasta DevOps_I), com um serviço de contentor gerido que abstrai a complexidade do Kubernetes ou do ECS — mais simples para casos de uso menores, sem as capacidades de orquestração avançada (ver pasta DevOps_II).

**E-commerce com WooCommerce**
WordPress + WooCommerce, lançado diretamente a partir de um blueprint Lightsail, com armazenamento de objetos para media (imagens de produtos) e CDN integrada para distribuição global de conteúdo — tudo configurável no mesmo painel.

---

## 4. Pilha e modelos de sistemas com Lightsail — aceleração com pré-configurações

### O conceito de "blueprint" no Lightsail
Um **blueprint** no Lightsail é uma **imagem pré-configurada** de um sistema completo — inclui o sistema operativo, o runtime, o software de aplicação, e as configurações iniciais necessárias para que a aplicação esteja funcional imediatamente após a criação da instância. É o equivalente, em espírito, a um Dockerfile já escrito e testado (ver `04_docker_dockerfile_imagens.md`, na pasta DevOps_I), mas para instâncias completas em vez de contentores.

### Categorias de blueprints disponíveis

**Blueprints de aplicações** — pilhas completas prontas a usar:

| Blueprint | O que inclui |
|---|---|
| **WordPress** | Linux + Apache/Nginx + MySQL + PHP + WordPress (pilha LAMP) |
| **LAMP Stack** | Linux + Apache + MySQL + PHP (sem CMS — para aplicações PHP customizadas) |
| **MEAN Stack** | MongoDB + Express + Angular + Node.js (pilha JavaScript full-stack) |
| **Node.js** | Linux + Node.js + npm pré-instalados |
| **Django** | Linux + Python + Django framework |
| **Ruby on Rails** | Linux + Ruby + Rails framework |
| **Magento** | Plataforma de e-commerce open-source, pré-configurada |
| **Joomla / Drupal** | CMS alternativos ao WordPress |

**Blueprints de sistema operativo** — para quando se quer apenas o OS, sem software de aplicação pré-instalado:

| Blueprint | Variantes disponíveis |
|---|---|
| **Amazon Linux 2** | Distribuição Linux otimizada para a AWS |
| **Ubuntu** | Versões LTS recentes |
| **Debian / CentOS / FreeBSD** | Outras distribuições Linux populares |
| **Windows Server** | Para aplicações .NET e ambientes Windows |

### Pilhas de tecnologia e o conceito de "stack"
Uma **stack (pilha)** de tecnologia refere-se ao conjunto de tecnologias usadas juntas para construir uma aplicação completa — desde o sistema operativo até à camada de apresentação. Os blueprints do Lightsail implementam essas pilhas de forma automatizada:

```
WordPress blueprint (pilha LAMP):
┌─────────────────────────────┐
│       WordPress (CMS)        │  ← camada de aplicação
├─────────────────────────────┤
│  PHP (processamento server)  │  ← runtime
├─────────────────────────────┤
│   MySQL (banco de dados)     │  ← persistência de dados
├─────────────────────────────┤
│  Apache / Nginx (web server) │  ← servidor web
├─────────────────────────────┤
│    Ubuntu / Amazon Linux     │  ← sistema operativo
└─────────────────────────────┘
       Instância Lightsail
```

### Snapshots — o equivalente Lightsail de backups
Semelhante aos snapshots EBS já vistos em `09_armazenamento_dados_aws.md`, o Lightsail permite criar **snapshots** de instâncias completas — um ponto de restauro do estado inteiro da instância num dado momento. Podem ser:
- **Manuais**: criados a qualquer momento pelo utilizador
- **Automáticos**: configurados para ser criados diariamente, com retenção definida

Os snapshots são também a forma recomendada de **migrar uma aplicação Lightsail para serviços AWS mais avançados** (ex: EC2, RDS) quando o crescimento da aplicação ultrapassa as capacidades do Lightsail — permitindo exportar a instância Lightsail como uma AMI (Amazon Machine Image) e importá-la no EC2.

---

## 5. Configuração de uma aplicação num serviço gerenciado — o impacto do Lightsail no desenvolvimento e implementação

### Criar uma instância no Lightsail — passo a passo

1. Aceder à **AWS Management Console** e navegar até ao **Amazon Lightsail** (ou diretamente em `lightsail.aws.amazon.com`).
2. Clicar em **"Create instance"**.
3. Selecionar a **região e zona de disponibilidade** onde a instância vai correr (ver `07_infraestrutura_global_aws.md`, ponto 3).
4. Escolher a **plataforma**: Linux/Unix ou Windows.
5. Escolher um **blueprint**:
   - Apps + OS: selecionar o blueprint desejado (ex: WordPress, Node.js, LAMP)
   - OS Only: selecionar apenas o sistema operativo (ex: Ubuntu 22.04)
6. Escolher o **plano (instance plan)** — o Lightsail usa planos com preço fixo mensal, com diferentes combinações de CPU, RAM, armazenamento e transferência de dados incluída:

| Plano | vCPUs | RAM | SSD | Transferência | Preço mensal (aprox.) |
|---|---|---|---|---|---|
| Nano | 2 | 512 MB | 20 GB | 1 TB | ~$3.50 |
| Micro | 2 | 1 GB | 40 GB | 2 TB | ~$7 |
| Small | 2 | 2 GB | 60 GB | 3 TB | ~$12 |
| Medium | 2 | 4 GB | 80 GB | 4 TB | ~$20 |
| Large | 2 | 8 GB | 160 GB | 5 TB | ~$40 |

7. Dar um nome à instância (ex: `wordpress-site-producao`).
8. Clicar em **"Create instance"** — a instância fica pronta em menos de um minuto.

### Configurar um IP estático
Por padrão, o IP público de uma instância Lightsail muda sempre que é reiniciada. Para evitar isto (especialmente importante para domínios personalizados), é necessário atribuir um **IP estático (Static IP)**:

1. No painel da instância, ir a **"Networking"**.
2. Clicar em **"Create static IP"** e associar à instância.
3. O IP estático é **gratuito** enquanto estiver associado a uma instância em execução.

### Ligar um domínio personalizado
1. No painel Lightsail, aceder a **"Domains & DNS"**.
2. Criar um novo domínio ou usar o DNS do Lightsail para gerir um domínio já existente.
3. Criar um registo **A** apontando para o IP estático da instância.

### Adicionar uma base de dados gerida
Em vez de instalar MySQL ou PostgreSQL dentro da instância (o que obrigaria a gerir manualmente backups, patches e alta disponibilidade), o Lightsail permite criar uma **base de dados gerida** separada:

1. No painel Lightsail, aceder a **"Databases"** e clicar em **"Create database"**.
2. Escolher o motor (MySQL 8.0 ou PostgreSQL 13/14) e o plano.
3. A base de dados fica numa rede privada do Lightsail, acessível apenas pelas instâncias do mesmo projeto — isolada da internet pública por padrão.

### O impacto do Lightsail no desenvolvimento e implementação

**Sem Lightsail (ex: com EC2 puro):**
```
Developer → Cria instância EC2 → Instala sistema operativo
         → Configura Security Groups → Instala Nginx/Apache
         → Instala PHP/Node/Python → Instala MySQL
         → Configura base de dados → Configura firewall
         → Instala certificado SSL → Cria backups automáticos
         → Configura monitorização → [aplicação finalmente acessível]

Tempo estimado: horas a dias
Conhecimento necessário: infraestrutura AWS, Linux, redes, segurança
```

**Com Lightsail (usando blueprint):**
```
Developer → Seleciona blueprint → Escolhe plano → Cria instância
         → [aplicação acessível em ~1 minuto]

Tempo estimado: minutos
Conhecimento necessário: o básico da aplicação em si
```

### Quando o Lightsail deixa de ser suficiente — e como evoluir
O Lightsail é desenhado para simplicidade, e tem limitações face aos serviços AWS completos:
- Sem suporte nativo para Auto Scaling avançado (como o do EC2 + HPA do Kubernetes)
- Planos com limites fixos de transferência mensal
- Menos controlo sobre configurações de rede avançadas (VPC, peering, Direct Connect)
- Sem integração direta com todos os serviços AWS (ex: não se integra nativamente com o RDS de outras contas)

Quando uma aplicação cresce e estas limitações se tornam relevantes, o caminho natural é **migrar do Lightsail para serviços AWS mais avançados** — usando os snapshots do Lightsail para exportar a instância como AMI e importá-la no EC2, ou reconstruindo a arquitetura com os serviços geridos já estudados (RDS, ECS/EKS, Lambda, CloudFront, Route 53), o que requer mais conhecimento técnico, mas oferece muito mais flexibilidade e capacidade de escala.

---

## Resumo em uma frase

> O AWS Lightsail é a forma mais acessível de aproveitar o modelo PaaS na AWS, reunindo instâncias, bases de dados, contentores, armazenamento e CDN numa interface única com preços fixos e blueprints pré-configurados (WordPress, LAMP, Node.js, etc.) que reduzem o tempo de lançamento de uma aplicação de horas para minutos — sendo ideal para projetos mais simples, com um caminho claro de migração para serviços AWS mais avançados quando a aplicação escala.

---

## Conceitos relacionados para estudar a seguir

- **AWS Elastic Beanstalk em profundidade** — PaaS mais avançado da AWS, com mais controlo sobre a infraestrutura subjacente do que o Lightsail (ver `05_computacao_sem_servidor.md`)
- **AWS App Runner** — serviço PaaS mais recente da AWS, desenhado especificamente para aplicações em contentores, mais simples do que o ECS mas mais flexível do que o Lightsail
- **Migração Lightsail → EC2** — como exportar uma instância Lightsail como AMI e recriá-la no EC2, com toda a flexibilidade adicional que isso traz
- **SSL/TLS no Lightsail com Let's Encrypt** — configurar certificados HTTPS gratuitos em instâncias Lightsail, uma das primeiras configurações necessárias depois de criar uma instância com domínio próprio
- **Lightsail Containers vs. Amazon ECS/EKS** — quando a simplicidade do Lightsail Container Service é suficiente, e quando vale a pena avançar para a orquestração completa do Kubernetes