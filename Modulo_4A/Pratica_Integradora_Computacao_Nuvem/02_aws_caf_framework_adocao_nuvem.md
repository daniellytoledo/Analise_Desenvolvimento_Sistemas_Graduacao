# AWS CAF — Framework de Adoção da Nuvem

## O que é o AWS CAF?

O **AWS CAF (Cloud Adoption Framework)** é um conjunto de ferramentas, orientações e boas práticas criado pela AWS para ajudar as organizações a planear, estruturar e executar a sua jornada de adoção da nuvem de forma organizada — desde a decisão de migrar até à operação diária de sistemas já na nuvem.

Não é uma ferramenta técnica em si, mas sim um **guia estratégico**: ajuda a empresa a responder perguntas como "por onde começar?", "que áreas da empresa precisam de mudar?", "que competências faltam à equipa?" e "como medir se a migração está a correr bem?".

O CAF organiza essas orientações em **6 perspetivas**, divididas em dois grandes grupos: perspetivas de negócio e perspetivas técnicas.

---

## Perspetivas de adoção da nuvem

Adotar a nuvem não é apenas "mover servidores para a AWS" — é uma mudança que atravessa toda a organização, e por isso exige cuidados e processos bem definidos para que a migração aconteça com qualidade, sem improviso.

O AWS CAF identifica **6 perspetivas**, cada uma representando um grupo de responsabilidades dentro da empresa:

| Perspetiva | Grupo | Foco principal |
|---|---|---|
| **Business (Negócio)** | Empresarial | Garantir que a estratégia de TI está alinhada com os objetivos de negócio |
| **People (Pessoas)** | Empresarial | Gestão de mudança organizacional, formação e cultura |
| **Governance (Governança)** | Empresarial | Gestão de risco, conformidade e otimização de investimento |
| **Platform (Plataforma)** | Técnico | Arquitetura, modernização de aplicações e infraestrutura |
| **Security (Segurança)** | Técnico | Proteção de dados, sistemas e ativos na nuvem |
| **Operations (Operações)** | Técnico | Gestão, monitorização e manutenção dos sistemas em produção |

A ideia central é que uma migração para a nuvem só é bem-sucedida quando **as pessoas certas, com as competências certas, seguem processos bem definidos**, e não apenas quando a tecnologia é tecnicamente implementada. Muitas migrações falham não por limitações técnicas, mas por falta de preparação organizacional, resistência à mudança ou ausência de governança clara.

---

## Foco nos recursos empresariais (perspetivas de negócio)

Estas três perspetivas representam as orientações da AWS relativamente aos **aspectos empresariais** da adoção da nuvem — ou seja, o "porquê" e o "para quem" da migração, mais do que o "como técnico".

### 1. Business (Negócio)
Garante que os investimentos em TI e nuvem estão diretamente ligados aos objetivos e resultados de negócio da empresa. Envolve stakeholders de liderança (ex: CFO, diretores de área) para justificar o retorno sobre o investimento (ROI) da migração.

### 2. People (Pessoas)
Foca-se na gestão da mudança organizacional: como preparar equipas, redefinir funções, formar colaboradores em novas competências (upskilling) e gerir a cultura organizacional durante a transição. É comum haver resistência interna à mudança, e esta perspetiva trata exatamente de mitigar esse risco.

### 3. Governance (Governança)
Trata da gestão de risco, conformidade legal/regulatória, gestão financeira da nuvem (FinOps) e definição de políticas que orientam como a organização toma decisões sobre o uso da nuvem — quem pode aprovar novos serviços, como controlar custos, como garantir conformidade com leis como o RGPD, etc.

---

## Foco nos recursos técnicos (perspetivas técnicas)

Estas três perspetivas representam as **orientações técnicas** da AWS — o "como" da migração, focando na equipa de TI e engenharia.

### 4. Platform (Plataforma)
Cobre a arquitetura técnica dos sistemas: como modernizar aplicações legadas, que padrões de arquitetura adotar (ex: microsserviços, containers), e como desenhar uma infraestrutura escalável e resiliente na AWS.

### 5. Security (Segurança)
Garante que a confidencialidade, integridade e disponibilidade dos dados e sistemas são mantidas durante e depois da migração. Inclui gestão de identidade e acesso (IAM), encriptação, deteção de ameaças e conformidade com normas de segurança.

### 6. Operations (Operações)
Trata da operação do dia a dia dos sistemas já migrados: monitorização, gestão de incidentes, automação de tarefas recorrentes e garantia de que os sistemas continuam disponíveis e com boa performance após a migração.

> **Nota:** É comum encontrar o CAF descrito com estas 6 perspetivas divididas exatamente em "3 empresariais + 3 técnicas", que é a estrutura seguida neste resumo — alinhado ao sumário do material em estudo.

---

## Modelo de definição de preço da AWS

A estrutura de precificação da AWS segue alguns princípios fundamentais que valem a pena entender bem, já que impactam diretamente o custo de qualquer solução construída na nuvem:

### Princípios gerais
- **Pagar pelo que se usa (pay-as-you-go)**: não há necessidade de investimento inicial elevado; paga-se apenas pelos recursos efetivamente consumidos.
- **Pagar menos quando se reserva mais (economias de escala)**: compromissos de uso a longo prazo (ex: Reserved Instances, Savings Plans) saem mais baratos por hora do que uso sob demanda.
- **Pagar menos à medida que se usa mais (volume discounts)**: em serviços como o S3, o custo por GB tende a diminuir conforme o volume armazenado aumenta.

### Principais fatores que determinam o custo
1. **Computação** — tempo de utilização de recursos como instâncias EC2 ou execuções Lambda.
2. **Armazenamento** — quantidade de dados guardados (ex: GB no S3) e tipo de armazenamento escolhido (acesso frequente vs. arquivo a longo prazo).
3. **Transferência de dados (data transfer)** — geralmente a entrada de dados na AWS é gratuita, mas a **saída de dados (data transfer out)** para a internet tem custo, e é frequentemente um dos itens que mais surpreende quem está a começar.

### Modelos de compra (principalmente para computação — EC2)
- **On-Demand**: paga-se por hora/segundo de uso, sem compromisso. Mais caro por unidade, mas com total flexibilidade.
- **Reserved Instances**: compromisso de uso por 1 ou 3 anos, com desconto significativo (até 70%+ face ao On-Demand).
- **Savings Plans**: modelo mais flexível que Reserved Instances, com desconto em troca de um compromisso de gasto (não de instância específica).
- **Spot Instances**: uso de capacidade ociosa da AWS com descontos muito altos (até 90%), mas com risco de interrupção a qualquer momento — ideal para cargas de trabalho tolerantes a falhas.

### Ferramentas para estimar e controlar custos
- **AWS Pricing Calculator** — permite simular o custo de uma arquitetura antes de a implementar.
- **AWS Cost Explorer** — visualiza e analisa o histórico e as tendências de custos.
- **Billing Alarms (via CloudWatch)** — permite definir alertas quando o gasto ultrapassa um valor definido, evitando surpresas na fatura.
- **AWS Free Tier** — camada gratuita para praticar e estudar, com limites de uso durante os primeiros 12 meses (e alguns serviços sempre gratuitos até certo limite).

---

## Resumo em uma frase

> O AWS CAF é o framework da AWS que organiza a adoção da nuvem em 6 perspetivas — três empresariais (Business, People, Governance) e três técnicas (Platform, Security, Operations) — garantindo que a migração é conduzida com estratégia, pessoas preparadas e governança, e não apenas como um exercício técnico isolado.

---

## Conceitos relacionados para estudar a seguir

- **Modelo de responsabilidade partilhada** (o que cabe à AWS e o que cabe ao cliente)
- **FinOps** (gestão financeira e otimização de custos na nuvem)
- **AWS Well-Architected Framework** (complementar ao CAF, mais focado em boas práticas de arquitetura técnica)
- **Estratégias de migração (as famosas "6 Rs"): Rehost, Replatform, Repurchase, Refactor, Retain, Retire**