# Análise de Custos dentro da AWS

---

## 1. AWS Organizations — gestão otimizada de contas na AWS

### O problema que o AWS Organizations resolve
À medida que uma empresa cresce, é comum que diferentes equipas, projetos ou departamentos criem as suas próprias contas AWS de forma independente — cada uma com as suas próprias configurações, faturações separadas, e sem visibilidade central do custo e uso totais. Isto gera fragmentação, dificuldade de auditoria, e perda de economias de escala nos preços da AWS.

O **AWS Organizations** resolve exatamente este problema: permite **agrupar múltiplas contas AWS numa estrutura hierárquica gerida centralmente**, com controlo de políticas, faturação consolidada e governança unificada.

### Como funciona a estrutura do AWS Organizations

```
Management Account (conta raiz da organização)
│
├── Organizational Unit (OU): Produção
│       ├── Conta AWS: app-producao
│       └── Conta AWS: dados-producao
│
├── Organizational Unit (OU): Desenvolvimento
│       ├── Conta AWS: app-dev
│       └── Conta AWS: testes-qa
│
└── Organizational Unit (OU): Segurança
        └── Conta AWS: auditoria-logs
```

- **Management Account**: a conta principal que cria e gere a organização. Nunca deve ser usada para correr workloads de produção — apenas para gestão central.
- **Organizational Units (OUs)**: agrupamentos lógicos de contas, onde políticas podem ser aplicadas a todas as contas do grupo de uma só vez.
- **Member Accounts**: as contas individuais dentro da organização, cada uma com os seus próprios recursos isolados.

### Principais benefícios do AWS Organizations

**Faturação consolidada (Consolidated Billing)**
Todas as contas membro partilham uma única fatura mensal gerada na Management Account. Para além da simplicidade administrativa, isto tem um benefício financeiro direto: o consumo de todas as contas é **somado para calcular os descontos por volume** — se uma conta usa 30 TB de S3 e outra usa 25 TB, a organização é faturada pelo total de 55 TB, atingindo os escalões de desconto mais rapidamente do que cada conta individualmente.

**Service Control Policies (SCPs)**
As SCPs são políticas de controlo aplicadas ao nível das OUs ou de contas específicas, que definem **o que as contas membro podem ou não fazer** — independentemente das permissões IAM que os utilizadores dessas contas possam ter. Por exemplo, uma SCP pode proibir que qualquer conta crie recursos fora da região europeia (útil para conformidade com o RGPD, ver `14_seguranca_privacidade_nuvem.md`), ou impedir que instâncias de tipos mais caros sejam criadas em contas de desenvolvimento.

**AWS Control Tower**
Um serviço complementar ao Organizations que **automatiza a criação e configuração de novas contas AWS** seguindo boas práticas de segurança e governança pré-definidas — criando automaticamente OUs, SCPs, trail do CloudTrail, e configurações de logging centralizadas para cada nova conta criada. É o ponto de partida recomendado para empresas que precisam de escalar o número de contas AWS de forma segura e consistente.

**Gestão centralizada de serviços**
Com o Organizations, serviços como o AWS CloudTrail (ver `12_monitoramento_servidores_aws.md`), o AWS Config, o GuardDuty, e o Security Hub podem ser activados de forma centralizada em todas as contas membro através da Management Account, garantindo auditoria e segurança uniformes sem depender de que cada equipa configure os seus próprios serviços de monitoramento individualmente.

---

## 2. Traga a Sua Própria Licença (BYOL) — valorizando as licenças de software na nuvem

### O que é BYOL
**BYOL (Bring Your Own License)** é um modelo de licenciamento que permite a uma empresa **usar na nuvem as licenças de software que já possui** on-premises — em vez de ter de comprar novas licenças para usar o mesmo software em instâncias AWS.

Este modelo é especialmente relevante para software empresarial com licenças de alto custo, como Microsoft Windows Server, Microsoft SQL Server, Oracle Database, Red Hat Enterprise Linux, e outros produtos cujas licenças representam um investimento significativo.

### Por que o BYOL importa na análise de custos
Quando uma empresa migra para a nuvem, tem tipicamente duas opções para o software licenciado:

| Opção | Como funciona | Implicação de custo |
|---|---|---|
| **License Included** | A AWS inclui a licença do software no custo da instância — o utilizador paga por hora e a licença está incluída | Mais simples, mas mais caro por hora — adequado para uso temporário ou quando não há licenças existentes |
| **BYOL** | O utilizador traz as suas próprias licenças e paga apenas pelos recursos de computação (EC2, armazenamento, etc.) sem a componente de licença | Mais barato por hora se a empresa já tem licenças, especialmente para uso intensivo e de longa duração |

### Condições e considerações do BYOL

Nem todas as licenças de software são transferíveis para a nuvem — depende dos termos específicos de cada fornecedor. As regras variam:

- **Microsoft**: licenças com Software Assurance activo podem geralmente ser usadas em instâncias EC2 dedicadas (Dedicated Hosts ou Dedicated Instances), seguindo as regras do programa **License Mobility through Software Assurance**.
- **Oracle**: tem regras complexas e restritivas — a Oracle considera que o licenciamento em cloud pública segue regras diferentes das on-premises. A AWS disponibiliza documentação específica sobre como fazer Oracle BYOL corretamente para evitar não-conformidade.
- **Red Hat**: através do programa **Red Hat Cloud Access**, licenças RHEL existentes podem ser movidas para instâncias EC2.

### AWS Dedicated Hosts — viabilizando o BYOL
Para software com licenciamento baseado em **número de cores ou sockets físicos** (comum em Oracle e alguns produtos Microsoft), é necessário usar **AWS Dedicated Hosts** — servidores físicos dedicados exclusivamente a uma única conta AWS, onde o utilizador tem visibilidade e controlo sobre o hardware físico subjacente, permitindo aplicar o licenciamento baseado em hardware da mesma forma que seria feito on-premises.

### O cálculo financeiro do BYOL
A decisão entre License Included e BYOL deve considerar:
- O custo restante de vida útil das licenças existentes (já pagas ou com manutenção anual)
- O custo de hardware do Dedicated Host vs. instâncias partilhadas
- O volume e duração do uso previsto na nuvem
- Os requisitos específicos de cada fornecedor de software

Em geral, o BYOL gera poupanças significativas para empresas com licenças enterprise activas e uso intensivo e previsível na nuvem — especialmente para SQL Server e Windows Server, onde a diferença de preço entre License Included e BYOL pode ser de 30% a 50% do custo total da instância.

---

## 3. Benefícios do AWS Budgets — controlo do orçamento na nuvem

### O que é o AWS Budgets
O **AWS Budgets** é o serviço da AWS que permite **definir orçamentos para o uso e custo dos serviços AWS**, com alertas automáticos quando o gasto real ou previsto se aproxima ou ultrapassa os limites definidos. É a primeira linha de defesa contra surpresas na fatura mensal.

### Tipos de budgets disponíveis

| Tipo | O que monitoriza | Exemplo de uso |
|---|---|---|
| **Cost Budget** | Custo total em dólares | "Alertar quando o gasto mensal total ultrapassar $500" |
| **Usage Budget** | Consumo de um serviço específico (ex: horas de EC2, GB de S3) | "Alertar quando o uso de EC2 ultrapassar 500 horas/mês" |
| **Savings Plans Budget** | Utilização e cobertura dos Savings Plans contratados | "Alertar quando a cobertura dos Savings Plans cair abaixo de 80%" |
| **Reservation Budget** | Utilização e cobertura das Reserved Instances | "Alertar quando Reserved Instances estiverem subutilizadas" |

### Como criar um budget — passo a passo

1. Aceder à **AWS Management Console** → **Billing and Cost Management** → **Budgets**.
2. Clicar em **"Create budget"**.
3. Escolher o tipo de budget (Cost, Usage, Savings Plans, ou Reservation).
4. Definir o **período** (mensal, trimestral, anual) e o **valor do orçamento**.
5. Configurar os **alertas**: definir a percentagem ou valor absoluto a partir do qual o alerta deve ser enviado, e o destino (endereço de e-mail ou tópico SNS — ver `05_computacao_sem_servidor.md`).
6. Opcionalmente, aplicar **filtros** para que o budget monitorize apenas um serviço específico (ex: só EC2), uma região específica, uma tag específica, ou uma conta específica dentro de um AWS Organizations.

### Alertas e ações automáticas

O AWS Budgets suporta dois tipos de notificação:

- **Alertas baseados em custo real**: disparados quando o gasto efectivo já ultrapassou o limiar — o dinheiro já foi gasto.
- **Alertas baseados em previsão**: disparados quando a AWS prevê (com base no ritmo de consumo actual) que o gasto vai ultrapassar o limiar até ao fim do período — permite agir antes de o dinheiro ser gasto.

Para além de alertas, o AWS Budgets suporta **Budget Actions** — ações automáticas que podem ser executadas quando um limiar é atingido, como:
- Aplicar uma política IAM que revoga permissões de criação de novos recursos
- Parar instâncias EC2 específicas
- Parar instâncias RDS específicas

Isto é especialmente útil em contas de desenvolvimento ou testes, onde um utilizador pode inadvertidamente deixar recursos a correr desnecessariamente — o budget pode pará-los automaticamente quando o custo do mês ultrapassa o definido.

### Boas práticas com AWS Budgets
- Criar um budget de custo total para cada conta, com alerta a 80% e a 100% do orçamento mensal esperado.
- Em contas de desenvolvimento/testes, criar budgets com ações automáticas para parar recursos quando o custo ultrapassa um limite.
- Usar tags de recursos (Resource Tags) para criar budgets por projecto ou equipa, permitindo granularidade na análise de custos.
- Configurar alertas de previsão além de alertas de custo real — agir proativamente é sempre mais barato do que reagir depois.

---

## 4. Benefícios do AWS Cost Explorer — aprimorando o uso da nuvem com foco no custo

### O que é o AWS Cost Explorer
O **AWS Cost Explorer** é a ferramenta de **análise e visualização de custos** da AWS — permite explorar interativamente o histórico de gastos, identificar padrões e anomalias, entender o que está a gerar custo, e fazer previsões de gasto futuro.

Se o AWS Budgets é a ferramenta para **controlar** os custos (definir limites e alertas), o Cost Explorer é a ferramenta para **entender** os custos (explorar, analisar e diagnosticar).

### O que o Cost Explorer permite fazer

**Visualização do histórico de custos**
Gráficos interativos que mostram o custo ao longo do tempo (dia, mês, trimestre, ou qualquer intervalo personalizado), com a possibilidade de detalhar por:
- **Serviço AWS** (ex: quanto estou a pagar por EC2 vs. RDS vs. S3 vs. Lambda?)
- **Região** (ex: qual a região mais cara?)
- **Conta** (em organizações com múltiplas contas, ver ponto 1)
- **Tag de recurso** (ex: qual o custo dos recursos com a tag `projecto: website-producao`?)
- **Tipo de utilização** (ex: instâncias On-Demand vs. Spot vs. Reserved)
- **Modelo de compra** (On-Demand, Savings Plans, Reserved Instances)

**Deteção de anomalias de custo (Cost Anomaly Detection)**
O Cost Explorer inclui um motor de deteção de anomalias baseado em machine learning que **alerta automaticamente** quando o custo de um serviço específico diverge significativamente do padrão histórico — identificando picos inesperados de gasto que podem indicar uso não autorizado, um bug que criou recursos em loop, ou a introdução inadvertida de um serviço muito caro.

**Previsões de custo**
Com base no histórico e no padrão de crescimento actual, o Cost Explorer gera **previsões de custo para os próximos 12 meses** — útil para planning orçamental e para antecipar quando será necessário renegociar planos de reserva.

**Recomendações de poupança**
O Cost Explorer analisa o padrão de uso de instâncias EC2, RDS, Lambda, e outros serviços, e sugere automaticamente:
- **Reserved Instances**: quais tipos de instâncias compensam ser reservadas (commitment de 1 ou 3 anos em troca de desconto de até 72%)
- **Savings Plans**: compromissos de gasto mínimo por hora em troca de descontos significativos, com mais flexibilidade do que Reserved Instances
- Estimativas de poupança anual para cada recomendação

### Cost Explorer vs. AWS Budgets — complementaridade

| | AWS Budgets | AWS Cost Explorer |
|---|---|---|
| **Função principal** | Controlar e alertar | Analisar e compreender |
| **Perspetiva** | Futuro (limites e previsões de alerta) | Passado e futuro (análise histórica + previsões) |
| **Ação principal** | Definir limites → receber alertas → agir | Explorar dados → identificar oportunidades → otimizar |
| **Quando usar** | Para não ser surpreendido pela fatura | Para entender de onde vem o custo e como reduzi-lo |

Num ambiente AWS bem gerido, as duas ferramentas são usadas em conjunto: o Budgets garante que ninguém ultrapassa os limites definidos sem ser alertado; o Cost Explorer fornece a análise necessária para tomar decisões de otimização fundamentadas.

---

## 5. Calculadora de Preços AWS — estimar antes de migrar

### O que é a AWS Pricing Calculator
A **AWS Pricing Calculator** (disponível em [calculator.aws](https://calculator.aws)) é uma ferramenta gratuita que permite **estimar o custo mensal de uma arquitectura AWS antes de a implementar** — sem precisar de criar qualquer recurso real, sem custos associados, e sem necessidade de ter uma conta AWS.

É o primeiro passo recomendado para qualquer migração ou novo projeto: antes de comprometer orçamento ou iniciar implementação, usar a calculadora para ter uma estimativa fundamentada do custo mensal esperado.

### Por que estimar antes de migrar é crítico
Um dos maiores riscos de uma migração para a nuvem mal planeada é a **surpresa de custo**: a empresa migra esperando poupar 30%, e descobre no primeiro mês que está a gastar 50% a mais do que on-premises — frequentemente porque não considerou custos de egress (saída de dados), porque escolheu tipos de instância superdimensionados, ou porque licenciou software de forma ineficiente.

A calculadora, usada rigorosamente antes da migração, elimina (ou minimiza significativamente) este risco.

### Como usar a AWS Pricing Calculator

1. Aceder a [calculator.aws](https://calculator.aws) — não é necessário login nem conta AWS.
2. Clicar em **"Create estimate"**.
3. Adicionar os serviços que fazem parte da arquitectura planeada, um a um:
   - Pesquisar o serviço (ex: "EC2", "RDS", "S3", "Lambda")
   - Configurar os parâmetros específicos de cada serviço (região, tipo de instância, volume de armazenamento, número de pedidos, etc.)
   - Cada configuração gera automaticamente uma estimativa de custo mensal
4. Configurar opções de compra: On-Demand, Reserved Instances ou Savings Plans (com os descontos correspondentes)
5. Revisar o **resumo total** — a calculadora apresenta o custo estimado por serviço e o total mensal e anual
6. Partilhar ou exportar a estimativa (link partilhável ou ficheiro CSV/PDF)

### O que a calculadora inclui e o que não inclui

| Inclui | Não inclui / Precisa de atenção |
|---|---|
| Custo de computação (EC2, Lambda, etc.) | Custos de suporte AWS (Basic, Developer, Business, Enterprise) |
| Custo de armazenamento (S3, EBS, EFS) | Custos de terceiros (marketplace, licenças BYOL) |
| Custo de bases de dados (RDS, DynamoDB) | Variações de custo por uso real vs. estimado |
| Custo de transferência de dados (estimado) | Custo de egress entre regiões (frequentemente subestimado) |
| Custo de serviços de rede (Load Balancer, Direct Connect) | Custos de desenvolvimento e migração em si |
| Descontos por Reserved Instances e Savings Plans | Impostos e taxas locais |

### Exemplos de uso prático da calculadora

**Comparar On-Demand vs. Reserved vs. Savings Plans**
Para uma instância EC2 `m5.xlarge` a correr 24/7 durante um mês em `eu-west-1`:
- On-Demand: ~$155/mês
- Reserved (1 ano, No Upfront): ~$96/mês (poupança de ~38%)
- Reserved (3 anos, All Upfront): ~$63/mês (poupança de ~59%)

A calculadora torna esta comparação imediata e visual, sem necessidade de calcular manualmente.

**Estimar o custo de uma arquitectura completa**
Uma arquitectura web típica com Load Balancer + 2 instâncias EC2 + RDS Multi-AZ + S3 para estáticos + CloudFront pode ser completamente estimada na calculadora antes de uma única linha de infraestrutura ser criada — dando à empresa uma base sólida para aprovar orçamento internamente.

**Simular o impacto de mudanças de escala**
A calculadora permite comparar facilmente o custo de diferentes tamanhos de instância ou de diferentes volumes de uso — por exemplo, o que acontece ao custo mensal se o tráfego duplicar? Esta análise de sensibilidade é essencial para planear a capacidade de forma economicamente sustentável.

### A calculadora como complemento às outras ferramentas de custo
A relação entre as ferramentas de custo da AWS pode ser resumida numa linha temporal:

```
Antes de criar recursos:       Durante o uso:          Após o uso:
───────────────────────────────────────────────────────────────────►
AWS Pricing Calculator     AWS Budgets           AWS Cost Explorer
(estimar o custo)          (controlar o custo)   (analisar o custo)
```

As três ferramentas cobrem fases distintas — a calculadora é a única que funciona antes de qualquer recurso existir, sendo por isso o ponto de partida ideal de qualquer projeto de migração ou novo investimento em infraestrutura AWS.

---

## Resumo em uma frase

> A análise e controlo de custos na AWS passa por gerir contas de forma centralizada com o AWS Organizations (aproveitando faturação consolidada e descontos por volume), valorizar licenças existentes através do BYOL, definir limites proativos com o AWS Budgets, compreender e otimizar o histórico de gastos com o AWS Cost Explorer, e — antes de tudo — estimar o custo de qualquer nova arquitetura com a AWS Pricing Calculator, garantindo que as decisões de investimento em nuvem são sempre informadas e fundamentadas.

---

## Conceitos relacionados para estudar a seguir

- **FinOps** — a disciplina de gestão financeira de cloud, que combina práticas de engenharia, finanças e negócio para maximizar o valor gerado por cada euro gasto em nuvem
- **AWS Savings Plans em profundidade** — os diferentes tipos (Compute Savings Plans, EC2 Instance Savings Plans, SageMaker Savings Plans) e como escolher o mais adequado para cada padrão de uso
- **Resource Tagging Strategy** — como uma estratégia de tags bem definida é a base de qualquer análise de custo por projecto, equipa ou centro de custo no Cost Explorer
- **AWS Cost and Usage Report (CUR)** — o relatório mais granular de custos da AWS, exportado para S3 e analisável com Athena ou QuickSight para análises avançadas
- **AWS Compute Optimizer** — serviço que usa machine learning para analisar o uso histórico de instâncias EC2, Lambda e outros serviços e recomendar os tipos de recurso mais eficientes para cada workload específico