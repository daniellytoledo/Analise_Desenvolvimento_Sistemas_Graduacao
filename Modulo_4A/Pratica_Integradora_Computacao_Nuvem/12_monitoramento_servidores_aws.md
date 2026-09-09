# Monitoramento dos Servidores Virtualizados

---

## 1. Abordagens para monitorar o ambiente AWS

### Por que monitorar é tão importante quanto construir
Construir e implementar uma aplicação na nuvem é apenas metade do trabalho — a outra metade é **garantir que essa aplicação continua a funcionar bem depois de estar em produção**. Sem monitoramento, problemas como aumento inesperado de latência, aumento de custo, falhas silenciosas em componentes secundários, ou tentativas de acesso não autorizado podem passar despercebidos por horas ou dias, com consequências sérias para o negócio e para os utilizadores.

O monitoramento em cloud é especialmente relevante por uma razão particular: ao contrário de um servidor físico que se pode ir verificar fisicamente, os recursos na AWS são **virtuais, distribuídos e efémeros** (ver `00_computacao_em_nuvem.md`) — a única forma de "ver" o que está a acontecer é através de **dados, métricas e logs**, recolhidos e analisados automaticamente.

### As três dimensões do monitoramento na AWS

**Monitoramento de infraestrutura**
Observar o comportamento dos recursos computacionais — uso de CPU, memória, disco, rede das instâncias EC2 (ver `04_ec2_escalabilidade_trafego_virtualbox.md`), saúde dos contentores Kubernetes (ver pasta DevOps_II), e estado dos bancos de dados RDS (ver `10_bancos_de_dados_nuvem_aws.md`).

**Monitoramento de segurança e auditoria**
Registar e analisar quem fez o quê e quando — que utilizadores ou serviços chamaram que APIs, de onde, com que resultado. É aqui que entra o **AWS CloudTrail** (ver ponto 2).

**Monitoramento de custos**
Acompanhar o consumo de recursos e o custo associado em tempo real, identificar desperdícios, e agir proativamente para otimizar — com o **AWS Trusted Advisor** (ver ponto 4) e ferramentas como o **AWS Cost Explorer** (já mencionado em `01_aws.md`).

### Princípio fundamental: observabilidade
O conceito moderno que enquadra todo este monitoramento chama-se **observabilidade** — a capacidade de entender o estado interno de um sistema a partir dos dados que ele produz externamente (métricas, logs e traces). Os três pilares da observabilidade são:

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   MÉTRICAS   │  │    LOGS      │  │    TRACES    │
│              │  │              │  │              │
│ Valores      │  │ Registos     │  │ Rastreamento │
│ numéricos    │  │ de eventos   │  │ de um pedido │
│ ao longo do  │  │ e mensagens  │  │ através de   │
│ tempo        │  │ de sistema   │  │ vários       │
│ (ex: CPU %)  │  │ (ex: erros)  │  │ serviços     │
└──────────────┘  └──────────────┘  └──────────────┘
       ▲                 ▲                 ▲
       │                 │                 │
       └─────────────────┴─────────────────┘
                Amazon CloudWatch (principal ferramenta)
```

### Ferramentas nativas de monitoramento da AWS
A AWS disponibiliza um conjunto de serviços próprios que cobrem as diferentes dimensões do monitoramento:

| Ferramenta | Foco principal |
|---|---|
| **Amazon CloudWatch** | Métricas, logs, alarmes e dashboards de qualquer recurso AWS |
| **AWS CloudTrail** | Auditoria e registo de chamadas à API — quem fez o quê |
| **AWS Trusted Advisor** | Recomendações de boas práticas (custos, segurança, performance, fiabilidade) |
| **AWS Config** | Registo do estado de configuração dos recursos ao longo do tempo e verificação de conformidade |
| **Amazon GuardDuty** | Deteção inteligente de ameaças e comportamentos suspeitos, usando machine learning |
| **AWS Health Dashboard** | Estado operacional dos próprios serviços AWS, com alertas de incidentes que afetam a conta |
| **AWS Cost Explorer** | Análise e previsão de custos por serviço, região, tag, ou período |

---

## 2. Monitoramento de APIs com AWS CloudTrail

### O que é o AWS CloudTrail
O **AWS CloudTrail** é o serviço de **auditoria e registo de atividade** da AWS — regista automaticamente **todas as chamadas à API** feitas na conta AWS, independentemente de terem sido feitas pelo console web, pela CLI, por um SDK, ou por um serviço AWS em nome do utilizador.

"Chamada à API" significa, na prática, qualquer ação realizada na conta: criar uma instância EC2, apagar um bucket S3, alterar uma regra de Security Group, criar um utilizador IAM, ou invocar uma função Lambda — tudo fica registado.

### Por que o CloudTrail é fundamental para segurança
Imagine um cenário onde, num domingo de manhã, é criada uma instância EC2 de alta performance numa região onde a empresa nunca trabalha — e essa criação é faturada à conta. Sem o CloudTrail, seria extremamente difícil responder: quem criou? Com que credenciais? A partir de que endereço IP? Às que horas?

Com o CloudTrail, esta informação está toda disponível em segundos — tornando-o **indispensável para investigação de incidentes de segurança, auditoria de conformidade regulatória, e deteção de uso não autorizado**.

### O que cada evento CloudTrail regista

```json
{
  "eventTime": "2024-09-15T14:32:01Z",
  "eventName": "RunInstances",
  "eventSource": "ec2.amazonaws.com",
  "userIdentity": {
    "type": "IAMUser",
    "userName": "developer-joao",
    "accountId": "123456789012"
  },
  "sourceIPAddress": "192.168.1.100",
  "userAgent": "aws-cli/2.13.0",
  "requestParameters": {
    "instanceType": "t3.large",
    "imageId": "ami-0abc12345def67890"
  },
  "responseElements": {
    "instanceId": "i-0987654321fedcba"
  },
  "awsRegion": "eu-west-1"
}
```

Cada evento regista:
- **Quem** realizou a ação (`userIdentity` — utilizador IAM, role, conta root, serviço AWS)
- **O quê** foi feito (`eventName` — a API chamada)
- **Onde** (`awsRegion`, `eventSource` — que serviço)
- **Quando** (`eventTime`)
- **De onde** (`sourceIPAddress`)
- **Com que parâmetros** (`requestParameters`)
- **Com que resultado** (`responseElements` ou código de erro)

### Configuração do CloudTrail

**Trail (trilha)**
Um **trail** é a configuração que define onde os eventos do CloudTrail são guardados. Por padrão, o CloudTrail já mostra os eventos dos últimos 90 dias na consola (sem custo adicional), mas para retenção mais longa ou análise avançada, é necessário criar um trail que guarda os eventos num bucket S3:

1. Aceder ao serviço **CloudTrail** na consola AWS.
2. Clicar em **"Create trail"**.
3. Dar um nome ao trail e escolher o bucket S3 de destino.
4. Opcionalmente, ativar encriptação dos logs com KMS e integração com CloudWatch Logs para análise em tempo real.

**Tipos de eventos registados**
- **Management events** (ativados por padrão): criação, modificação e eliminação de recursos — as ações de gestão da infraestrutura.
- **Data events** (custo adicional): operações sobre dados em si — ex: leituras e escritas em buckets S3 individuais, ou invocações de funções Lambda.

### CloudTrail + CloudWatch = auditoria em tempo real
Uma das integrações mais poderosas é enviar os logs do CloudTrail diretamente para o **CloudWatch Logs**, onde podem ser configurados **alarmes em tempo real** para padrões suspeitos:

```
CloudTrail (regista evento)
        │
        ▼
CloudWatch Logs (recebe o log)
        │
        ▼
CloudWatch Metric Filter (procura padrão suspeito, ex: "DeleteBucket" às 3h da manhã)
        │
        ▼
CloudWatch Alarm (dispara)
        │
        ▼
SNS (envia alerta por e-mail/SMS) → ver `05_computacao_sem_servidor.md`
```

---

## 3. Monitoramento de ambiente com Amazon CloudWatch

### O que é o Amazon CloudWatch
O **Amazon CloudWatch** é o serviço central de monitoramento e observabilidade da AWS — a ferramenta onde convergem métricas, logs, alarmes e dashboards de praticamente todos os serviços AWS. É o "painel de controlo" da infraestrutura, e uma das ferramentas mais usadas no dia a dia de quem opera sistemas na AWS.

### Métricas — o que o CloudWatch recolhe automaticamente
O CloudWatch recolhe **métricas** (valores numéricos ao longo do tempo) de todos os recursos AWS, sem qualquer configuração adicional. Exemplos de métricas recolhidas automaticamente:

| Serviço | Métricas automáticas |
|---|---|
| **EC2** | CPUUtilization, NetworkIn/Out, DiskReadOps/WriteOps |
| **RDS** | DatabaseConnections, FreeStorageSpace, ReadLatency, WriteLatency |
| **S3** | BucketSizeBytes, NumberOfObjects, AllRequests |
| **Lambda** | Invocations, Errors, Duration, Throttles |
| **ELB (Load Balancer)** | RequestCount, TargetResponseTime, HTTPCode_ELB_5XX |

> **Nota importante**: o CloudWatch recolhe métricas de EC2 a cada 5 minutos por padrão (monitoramento básico, gratuito). Para métricas a cada 1 minuto, é necessário ativar o **monitoramento detalhado** (custo adicional).

### CloudWatch Agent — métricas que não estão disponíveis automaticamente
Algumas métricas importantes **não estão disponíveis por defeito** no CloudWatch, porque requerem acesso ao interior da instância EC2 — nomeadamente a **utilização de memória RAM** e a **utilização de disco** ao nível do sistema de ficheiros (não confundir com as métricas de I/O de disco, que são recolhidas automaticamente).

Para estas métricas, é necessário instalar o **CloudWatch Agent** dentro da instância EC2, que as recolhe e envia para o CloudWatch periodicamente.

### Alarmes — reação automática a condições
Um **alarme CloudWatch** é uma regra que monitoriza uma métrica e **executa uma ação** quando essa métrica ultrapassa (ou fica abaixo de) um limiar definido durante um período especificado.

Exemplo: alarme que escala automaticamente o Auto Scaling Group quando a CPU média das instâncias EC2 ultrapassa 70%:

```
Métrica: CPUUtilization (média das instâncias do Auto Scaling Group)
Condição: > 70% durante 2 períodos de 5 minutos consecutivos
Ação: acionar política de Scale Out do Auto Scaling Group (adicionar instâncias)
```

As ações possíveis de um alarme incluem:
- Enviar notificação via **SNS** (e-mail, SMS, etc.) — ver `05_computacao_sem_servidor.md`
- Acionar uma **política de Auto Scaling** (escalar EC2)
- **Parar, terminar ou reiniciar** uma instância EC2
- Criar um **ticket no AWS Systems Manager OpsCenter**

### Estados de um alarme

| Estado | Significado |
|---|---|
| **OK** | A métrica está dentro dos limites definidos |
| **ALARM** | A métrica ultrapassou o limiar definido — ação pode ser acionada |
| **INSUFFICIENT_DATA** | Dados insuficientes para determinar o estado (ex: instância recém-criada) |

### Logs — centralizar e analisar registos de aplicações
O **CloudWatch Logs** permite centralizar logs de qualquer origem:
- Logs de instâncias EC2 (via CloudWatch Agent)
- Logs de funções Lambda (enviados automaticamente)
- Logs de RDS, ECS, EKS, API Gateway, e outros serviços AWS
- Logs de aplicações customizados (via SDK ou agente)

Os logs ficam organizados em **Log Groups** (um por aplicação ou serviço) e **Log Streams** (um por instância ou contentor), podendo ser pesquisados com o **CloudWatch Logs Insights** — uma linguagem de query própria para explorar e analisar grandes volumes de logs rapidamente.

### Dashboards — visibilidade centralizada
Os **CloudWatch Dashboards** permitem criar painéis visuais personalizados, com gráficos de métricas de diferentes serviços e regiões numa única vista — ideal para ter uma visão geral do estado da infraestrutura em tempo real.

### CloudWatch ServiceLens e X-Ray — traces
Para monitoramento de **traces** (rastreamento de um pedido através de múltiplos serviços), o CloudWatch integra-se com o **AWS X-Ray**, que permite visualizar o caminho completo de um pedido desde o frontend até à base de dados, identificando onde estão os gargalos de performance em arquiteturas de microsserviços (ver pasta DevOps_II, sobre Kubernetes e microsserviços).

---

## 4. Otimização de custos com AWS Trusted Advisor

### O que é o AWS Trusted Advisor
O **AWS Trusted Advisor** é um serviço de consultoria automática da AWS que, com base na experiência acumulada da AWS a operar infraestrutura para centenas de milhares de clientes, **analisa os recursos e configurações da conta** e oferece **recomendações concretas de melhoria** em cinco categorias.

A metáfora usada pela própria AWS é a de um "consultor de confiança" (*trusted advisor*) — alguém com vasto conhecimento do que funciona e do que não funciona, que revê constantemente a conta e aponta oportunidades de melhoria antes que se tornem problemas.

### As cinco categorias de recomendação

**1. Otimização de Custos (Cost Optimization)**
Identifica recursos que estão a gerar custo desnecessário:
- Instâncias EC2 com utilização de CPU consistentemente baixa (possivelmente superdimensionadas)
- Volumes EBS não associados a nenhuma instância (a pagar sem estar a ser usados)
- Endereços IP Elásticos não associados a nenhuma instância
- Reserved Instances subutilizadas ou que expiraram sem renovação
- Balanceadores de carga sem instâncias associadas ou com pouco tráfego

**2. Performance**
Identifica configurações que podem estar a limitar a performance dos serviços:
- Instâncias EC2 com throughput de rede próximo do limite
- Volumes EBS com I/O próximo da capacidade máxima
- Distribuições CloudFront sem otimizações disponíveis

**3. Segurança (Security)**
Identifica configurações de segurança que devem ser corrigidas:
- Conta root sem MFA ativado (ver `01_aws.md`)
- Security Groups com portas demasiado abertas (ex: SSH aberto ao mundo inteiro — `0.0.0.0/0`)
- Buckets S3 com acesso público desnecessário
- Utilizadores IAM sem rotação de access keys há mais de 90 dias
- Volumes EBS sem encriptação

**4. Tolerância a Falhas (Fault Tolerance)**
Identifica arquiteturas que podem ser melhoradas para maior resiliência:
- Instâncias RDS sem configuração Multi-AZ
- Instâncias EC2 sem snapshots recentes (backups)
- Auto Scaling Groups com instâncias em apenas uma AZ
- Buckets S3 sem versionamento ativado

**5. Limites de Serviço (Service Limits)**
Monitoriza se o uso de serviços está a aproximar-se dos **limites (quotas)** definidos pela AWS para a conta — ex: número máximo de instâncias EC2 por região, número de buckets S3, etc. Aproximar-se de um limite sem perceber pode resultar em falhas inesperadas ao tentar criar novos recursos.

### Níveis de acesso ao Trusted Advisor

| Plano de Suporte | Acesso ao Trusted Advisor |
|---|---|
| **Basic / Developer** | Apenas 7 verificações fundamentais (subset de Segurança e Limites) |
| **Business** | Acesso completo a todas as verificações, com API para automatização |
| **Enterprise On-Ramp / Enterprise** | Acesso completo + suporte técnico dedicado da AWS |

### Como usar o Trusted Advisor na prática

1. Aceder ao serviço **Trusted Advisor** na consola AWS.
2. Navegar pelas cinco categorias e verificar os itens marcados com:
   - 🔴 **Vermelho (Ação recomendada)**: problema identificado que deve ser corrigido.
   - 🟡 **Amarelo (Investigação recomendada)**: situação que merece atenção, pode ou não ser um problema.
   - 🟢 **Verde (Sem problemas detetados)**: a verificação passou sem recomendações.
3. Para cada recomendação, o Trusted Advisor fornece:
   - Uma descrição clara do problema
   - Os recursos específicos afetados (ex: lista de instâncias EC2 subutilizadas)
   - Os passos recomendados para resolver

### Exemplo prático de otimização de custo com Trusted Advisor

```
Verificação: Low Utilization Amazon EC2 Instances

Instâncias identificadas:
  i-0abc123456 (t3.large) — eu-west-1
  → CPU média nos últimos 14 dias: 3.2%
  → Custo mensal estimado: $55
  → Poupança potencial redimensionando para t3.micro: ~$48/mês

Recomendação: Considerar redimensionar (downsize) ou desligar a instância
```

### Trusted Advisor vs. AWS Cost Explorer vs. CloudWatch — complementaridade

| Ferramenta | Tipo de insight | Natureza |
|---|---|---|
| **CloudWatch** | "O que está a acontecer agora?" — métricas e logs em tempo real | Reativo / Operacional |
| **AWS Cost Explorer** | "Quanto estou a gastar e em quê?" — análise histórica de custos | Analítico / Financeiro |
| **Trusted Advisor** | "O que devia estar a fazer de forma diferente?" — recomendações proativas | Proativo / Estratégico |

As três ferramentas são **complementares**, não alternativas — uma operação madura na AWS usa as três em conjunto para ter uma visão completa do ambiente.

---

## Resumo em uma frase

> O monitoramento eficaz na AWS combina o CloudTrail para auditoria completa de todas as ações realizadas na conta (quem fez o quê e quando), o CloudWatch para observabilidade em tempo real de métricas, logs e alarmes de qualquer recurso, e o Trusted Advisor para recomendações proativas e automáticas de otimização de custo, performance, segurança e tolerância a falhas — formando em conjunto o sistema de controlo e melhoria contínua de qualquer ambiente AWS bem gerido.

---

## Conceitos relacionados para estudar a seguir

- **AWS Config** — complemento ao CloudTrail, focado em registar o estado de configuração dos recursos ao longo do tempo e verificar conformidade com políticas definidas
- **Amazon GuardDuty** — deteção inteligente de ameaças que analisa automaticamente logs do CloudTrail, VPC Flow Logs e DNS Logs em busca de comportamentos suspeitos
- **AWS Systems Manager** — conjunto de ferramentas para gerir operacionalmente instâncias EC2 em escala, incluindo patch management automatizado, execução remota de comandos e inventário de software instalado
- **CloudWatch Logs Insights** — a linguagem de query do CloudWatch para análise de logs em grande escala
- **AWS Well-Architected Tool + Trusted Advisor** — como as recomendações do Trusted Advisor se relacionam com os pilares do Well-Architected Framework já estudados em `03_aws_well_architected_framework.md`