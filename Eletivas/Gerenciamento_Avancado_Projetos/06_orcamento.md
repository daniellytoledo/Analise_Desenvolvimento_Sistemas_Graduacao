
# Orçamento

> Este ficheiro dá continuidade ao planeamento de projetos desenvolvido em `05_cronograma.md`, avançando para a dimensão financeira: compreender os fundamentos do orçamento, aplicar técnicas de estimativa, identificar os custos necessários e consolidar todas as estimativas num orçamento estruturado, com reservas, linha de base e mecanismos de controlo.

---

## 1. Fundamentação — fundamentar orçamentos em projetos

### O que é o orçamento de um projeto

O **orçamento de um projeto (Project Budget)** é a representação financeira dos recursos necessários para executar todo o trabalho previsto no escopo, dentro do prazo estabelecido e com os padrões de qualidade definidos.

Enquanto a **EAP (Estrutura Analítica do Projeto)** responde à pergunta "o que precisa de ser entregue?" e o **cronograma** responde "quando será entregue?", o orçamento responde:

**"Quanto custará executar o projeto e como esses recursos financeiros serão distribuídos?"**

O orçamento não deve ser entendido apenas como uma estimativa de quanto dinheiro será gasto. É um instrumento de **planeamento, autorização, monitorização e controlo financeiro**, utilizado para orientar decisões ao longo de todo o ciclo de vida do projeto.

Um orçamento bem elaborado permite:

- Determinar a viabilidade financeira de um projeto antes da sua execução.
- Identificar os recursos necessários para produzir cada entregável.
- Distribuir os custos pelas atividades e fases do projeto.
- Estabelecer limites de gastos e responsabilidades financeiras.
- Antecipar necessidades de financiamento.
- Comparar os custos planeados com os custos reais.
- Identificar desvios financeiros e implementar ações corretivas.
- Apoiar decisões sobre mudanças de escopo, prazo ou recursos.

### A relação entre escopo, cronograma e orçamento

O orçamento faz parte da **Tripla Restrição (Triple Constraint)**, apresentada em `00_gestao_projeto.md`.

Os três elementos clássicos são interdependentes:

```text
                    ESCOPO
                      /\
                     /  \
                    /    \
                   /      \
                  /________\
               TEMPO       CUSTO

        QUALIDADE = resultado afetado
        pelo equilíbrio das restrições
```

Uma alteração numa dessas dimensões pode provocar impactos nas restantes.

**Exemplo — Desenvolvimento de um sistema web:**

Uma empresa planeia desenvolver uma aplicação de gestão de clientes em 12 semanas, com um orçamento de €30.000.

Durante o desenvolvimento, o cliente solicita um novo módulo de relatórios financeiros.

Esta alteração pode provocar:

```text
NOVO REQUISITO
      |
      v
Aumento do escopo
      |
      +----> Mais horas de desenvolvimento
      |              |
      |              v
      |        Aumento dos custos
      |
      +----> Mais atividades no cronograma
                     |
                     v
               Aumento do prazo
```

Se a organização decidir manter o prazo original, poderá ser necessário contratar recursos adicionais, aumentar a produtividade ou reduzir outras funcionalidades.

Por isso, **o orçamento não pode ser desenvolvido isoladamente** — depende diretamente da definição do escopo, da EAP, das estimativas de duração e do planeamento dos recursos.

### A Gestão dos Custos no PMBOK®

A **Gestão dos Custos do Projeto (Project Cost Management)** corresponde a uma das 10 áreas de conhecimento apresentadas na abordagem por processos do PMBOK® Guide, especialmente na sua 6ª edição.

O objetivo é assegurar que o projeto seja concluído dentro do orçamento aprovado.

Esta área organiza-se em quatro processos fundamentais:

**1. Planear a Gestão dos Custos (Plan Cost Management)**

Define como os custos serão estimados, orçamentados, monitorizados e controlados.

O principal resultado é o **Plano de Gestão dos Custos (Cost Management Plan)**.

**2. Estimar os Custos (Estimate Costs)**

Desenvolve uma aproximação monetária dos recursos necessários para completar as atividades do projeto.

Envolve técnicas como estimativa análoga, paramétrica, bottom-up e estimativa de três pontos.

**3. Determinar o Orçamento (Determine Budget)**

Agrega os custos estimados das atividades e dos pacotes de trabalho, incluindo as reservas de contingência, para estabelecer uma linha de base de custos autorizada.

**4. Controlar os Custos (Control Costs)**

Monitoriza os gastos reais, compara-os com o orçamento aprovado e gere as alterações financeiras.

O processo completo pode ser representado por:

```text
       PLANEAR OS CUSTOS
                |
                v
       ESTIMAR OS CUSTOS
                |
                v
      DETERMINAR O ORÇAMENTO
                |
                v
       LINHA DE BASE DE CUSTOS
                |
                v
         EXECUTAR O PROJETO
                |
                v
       CONTROLAR OS CUSTOS
                |
       +--------+---------+
       |                  |
       v                  v
  Dentro do plano?    Desvios?
       |                  |
       v                  v
   Continuar         Analisar causas
   monitorização          |
                          v
                    Ação corretiva
```

### Orçamento, estimativa e custo — conceitos diferentes

Embora estejam relacionados, estes termos não são sinónimos.

| Conceito | Definição | Exemplo |
|---|---|---|
| **Custo (Cost)** | Valor monetário associado ao consumo de recursos | €2.000 em serviços de cloud |
| **Estimativa de custos (Cost Estimate)** | Previsão do valor necessário para realizar um trabalho | Desenvolvimento estimado em €15.000 |
| **Orçamento (Budget)** | Consolidação financeira autorizada para o projeto | Orçamento total aprovado de €30.000 |
| **Custo real (Actual Cost)** | Valor efetivamente incorrido durante a execução | €17.500 gastos até ao momento |
| **Linha de base de custos (Cost Baseline)** | Referência aprovada para medir o desempenho financeiro | Plano faseado de €28.000 |
| **Reserva de gestão (Management Reserve)** | Valor separado para trabalho imprevisto dentro do escopo do projeto | €2.000 reservados pela direção |

**A principal distinção:** a estimativa procura prever os custos; o orçamento transforma essas previsões num plano financeiro autorizado; e o controlo verifica se os gastos reais estão alinhados com esse plano.

### A importância da viabilidade económica

Antes de aprovar um projeto, uma organização precisa de avaliar se os benefícios esperados justificam os custos e riscos envolvidos.

Esta análise costuma ser apresentada no **Business Case (Caso de Negócio)**, estudado em `02_escorpo_trabalhar_a_fazer.md`.

Alguns indicadores financeiros são:

**ROI — Return on Investment (Retorno sobre o Investimento)**

Mede o retorno obtido em relação ao investimento realizado.

```text
          Benefício líquido
ROI = ------------------------- × 100
         Investimento total
```

Exemplo:

```text
Investimento no projeto: €20.000
Benefícios financeiros:  €30.000

Benefício líquido = 30.000 - 20.000 = €10.000

ROI = (10.000 / 20.000) × 100

ROI = 50%
```

Neste exemplo, o retorno líquido equivale a 50% do investimento inicial, considerando apenas os valores apresentados.

**Payback Period (Prazo de Recuperação)**

Representa o tempo necessário para recuperar o investimento inicial.

```text
Investimento inicial: €24.000

Economia mensal gerada: €2.000

Payback = 24.000 / 2.000

Payback = 12 meses
```

O cálculo simples pressupõe benefícios mensais constantes e não considera o valor temporal do dinheiro.

**VPL — Valor Presente Líquido (Net Present Value — NPV)**

Considera o valor temporal do dinheiro, descontando os fluxos financeiros futuros a uma taxa apropriada.

```text
                FCt
VPL = Σ ---------------- - I0
             (1 + r)^t

Onde:

FCt = Fluxo de caixa no período t
r   = Taxa de desconto
t   = Período considerado
I0  = Investimento inicial
```

Um VPL positivo indica que, dadas as premissas e a taxa de desconto utilizada, o investimento tende a criar valor financeiro.

> **Na prática:** um projeto pode ser tecnicamente viável, mas financeiramente inviável. O orçamento ajuda a identificar esta situação antes que a organização comprometa recursos significativos.

---

## 2. Estimativas — técnicas para estimativa

### O que significa estimar custos

A **estimativa de custos (Cost Estimation)** é o processo de prever os recursos financeiros necessários para completar o trabalho do projeto.

A estimativa deve considerar:

- Recursos humanos e respetivas taxas de custo.
- Equipamentos, materiais e infraestrutura.
- Licenças e ferramentas de software.
- Serviços contratados e fornecedores.
- Custos administrativos e operacionais.
- Riscos conhecidos e incertezas.
- Inflação, câmbio e outras condições económicas relevantes.
- Requisitos de qualidade, segurança e conformidade.

Uma boa estimativa não é simplesmente um número apresentado pelo gestor. Deve possuir **premissas documentadas, critérios de cálculo, fontes de informação e um grau de incerteza compreendido**.

### A influência do nível de conhecimento

As estimativas evoluem à medida que o projeto se torna mais conhecido.

No início, quando o escopo ainda está pouco detalhado, a incerteza é elevada.

À medida que os requisitos, a EAP, os recursos e o cronograma são definidos, as estimativas podem tornar-se mais precisas.

```text
INCERTEZA
    ^
    |
Alta|\
    | \
    |  \
    |   \
    |    \
    |      \____
    |           \____
Baixa+------------------------> TEMPO
      Início   Planeamento   Execução

     Mais informação disponível
              =
     Estimativas mais confiáveis
```

Este comportamento está relacionado com o **Cone de Incerteza (Cone of Uncertainty)**, frequentemente utilizado no desenvolvimento de software.

O aumento do conhecimento não garante automaticamente a precisão, mas permite substituir suposições iniciais por informações verificadas.

### Técnica 1 — Estimativa Análoga (Analogous Estimating)

A **estimativa análoga** utiliza os custos reais de projetos anteriores semelhantes para estimar o custo de um novo projeto.

É uma abordagem **top-down**, pois parte de uma referência global antes de detalhar os componentes.

**Exemplo:**

Uma empresa desenvolveu anteriormente um portal web por €25.000.

O novo projeto possui características semelhantes, mas estima-se que exija 20% mais esforço.

```text
Projeto anterior = €25.000

Fator de ajuste = 1,20

Estimativa = 25.000 × 1,20

Estimativa = €30.000
```

**Vantagens:**
- Rápida e relativamente barata.
- Útil nas fases iniciais.
- Aproveita a experiência histórica da organização.

**Limitações:**
- Depende da qualidade dos dados anteriores.
- Pode ignorar diferenças importantes entre projetos.
- Possui menor precisão quando utilizada sem ajustes fundamentados.

**Quando usar:** quando ainda não existe uma EAP detalhada, mas há histórico confiável de projetos semelhantes.

### Técnica 2 — Estimativa Paramétrica (Parametric Estimating)

A **estimativa paramétrica** utiliza relações estatísticas ou taxas unitárias para calcular custos.

A fórmula geral é:

```text
Custo estimado = Quantidade × Custo por unidade
```

**Exemplo — Desenvolvimento de telas de uma aplicação:**

```text
Quantidade de telas: 20

Custo médio por tela: €350

Estimativa = 20 × 350

Estimativa = €7.000
```

**Exemplo — Armazenamento cloud:**

```text
Armazenamento necessário: 500 GB

Custo hipotético: €0,025 por GB/mês

Período: 12 meses

Estimativa = 500 × 0,025 × 12

Estimativa = €150
```

O segundo exemplo representa apenas a componente de armazenamento, não incluindo transferências de dados, operações, impostos ou outros serviços.

**Vantagens:**
- Cálculo relativamente rápido.
- Facilita a comparação entre cenários.
- Pode apresentar boa precisão quando existem taxas confiáveis.

**Limitações:**
- Pressupõe uma relação válida entre quantidade e custo.
- Nem sempre considera diferenças de complexidade.
- Requer dados históricos ou preços unitários consistentes.

> Em Engenharia de Software, estimativas baseadas exclusivamente em linhas de código podem ser pouco confiáveis, porque a complexidade técnica não aumenta necessariamente de forma proporcional à quantidade de código produzido.

### Técnica 3 — Estimativa Bottom-Up

A **estimativa bottom-up** é uma das técnicas mais detalhadas.

Consiste em decompor o trabalho até ao nível das atividades ou pacotes de trabalho, estimar individualmente os custos e agregar os valores.

Este método depende diretamente da EAP, estudada em `03_escopo_a_estrutura.md`.

```text
             PROJETO
                |
       +--------+--------+
       |                 |
       v                 v
   FRONTEND           BACKEND
       |                 |
   +---+---+         +---+---+
   |       |         |       |
   v       v         v       v
 Login   Dashboard  API    Banco
   |       |         |       |
 €800    €1.500    €3.000  €1.200

Total Frontend = €2.300

Total Backend = €4.200

TOTAL = €6.500
```

**Vantagens:**
- Permite identificar custos de forma granular.
- Facilita a atribuição de responsabilidades.
- Melhora a rastreabilidade entre entregáveis e orçamento.
- Favorece o controlo financeiro durante a execução.

**Limitações:**
- Exige uma EAP suficientemente detalhada.
- Consome mais tempo de planeamento.
- Pode acumular erros caso as estimativas individuais sejam incorretas.

**Quando usar:** projetos com escopo bem definido e necessidade elevada de precisão e rastreabilidade.

### Técnica 4 — Estimativa de Três Pontos (Three-Point Estimating)

A **estimativa de três pontos** considera a incerteza através de três cenários:

- **O — Otimista:** custo caso o trabalho decorra nas melhores condições realistas.
- **M — Mais provável:** custo esperado em condições normais.
- **P — Pessimista:** custo caso ocorram dificuldades relevantes.

Uma forma de calcular a estimativa esperada é utilizar a fórmula PERT, apresentada em `05_cronograma.md`.

```text
             O + 4M + P
Custo PERT = -----------
                 6
```

**Exemplo — Desenvolvimento de uma API:**

```text
Otimista:      €4.000
Mais provável: €6.000
Pessimista:    €11.000

Custo PERT = (4.000 + 4×6.000 + 11.000) / 6

Custo PERT = (4.000 + 24.000 + 11.000) / 6

Custo PERT = €6.500
```

A estimativa ponderada é de €6.500, mas isso não significa que o custo real será necessariamente esse valor.

A técnica oferece uma forma de incorporar cenários de incerteza no planeamento.

**Desvio padrão aproximado:**

```text
       P - O
σ = -----------
          6

σ = (11.000 - 4.000) / 6

σ ≈ €1.166,67
```

Este valor representa uma medida aproximada da dispersão da estimativa sob as premissas do modelo PERT.

### Técnica 5 — Estimativa de Três Pontos por Distribuição Triangular

Outra possibilidade é atribuir pesos iguais aos três cenários.

```text
                   O + M + P
Custo triangular = -----------
                       3
```

Usando o mesmo exemplo:

```text
O = €4.000
M = €6.000
P = €11.000

Custo = (4.000 + 6.000 + 11.000) / 3

Custo = €7.000
```

A estimativa triangular produz €7.000, enquanto a ponderação PERT produz €6.500.

A diferença ocorre porque o PERT atribui maior peso ao cenário mais provável.

### Técnica 6 — Julgamento Especializado (Expert Judgment)

Consiste em utilizar a experiência de profissionais que já participaram em projetos semelhantes.

Podem contribuir:

- Gestores de projetos.
- Arquitetos de software.
- Tech Leads.
- Especialistas em infraestrutura.
- Analistas financeiros.
- Fornecedores especializados.

**Exemplo:**

Uma equipa precisa de estimar os custos de migrar um banco de dados local para a AWS.

Um especialista em cloud poderá identificar custos que a equipa de desenvolvimento inicialmente não considerou:

- Transferência de dados.
- Serviços de armazenamento.
- Backups automáticos.
- Monitorização.
- Segurança.
- Ambientes de testes.
- Horas de configuração e migração.

O julgamento especializado funciona melhor quando combinado com dados históricos, cálculos e premissas explícitas.

### Técnica 7 — Análise de Propostas de Fornecedores

A **Vendor Bid Analysis** consiste em analisar propostas comerciais apresentadas por fornecedores para executar parte do trabalho.

**Exemplo — Contratação de testes de segurança:**

| Fornecedor | Proposta | Prazo | Características |
|---|---:|---|---|
| Empresa A | €2.000 | 10 dias | Pentest básico |
| Empresa B | €3.500 | 7 dias | Pentest e relatório detalhado |
| Empresa C | €4.200 | 5 dias | Pentest, relatório e reteste |

A proposta mais barata não é necessariamente a mais vantajosa.

A avaliação deve considerar o custo, o prazo, a qualidade, os riscos e o atendimento aos requisitos.

### Comparativo das técnicas de estimativa

| Técnica | Detalhamento necessário | Velocidade | Principal vantagem |
|---|---|---|---|
| Análoga | Baixo | Alta | Utiliza projetos anteriores |
| Paramétrica | Médio | Alta | Baseia-se em custos unitários |
| Bottom-up | Alto | Baixa | Rastreabilidade e detalhamento |
| Três pontos / PERT | Médio | Média | Incorpora incerteza |
| Triangular | Médio | Média | Considera três cenários |
| Julgamento especializado | Variável | Variável | Aproveita conhecimento técnico |
| Propostas de fornecedores | Requisitos de contratação | Média | Utiliza preços comerciais |

### Estimativa de esforço vs. estimativa de custo

Uma distinção importante em projetos de software é a diferença entre **esforço** e **custo**.

O esforço pode ser medido em horas-pessoa:

```text
Esforço estimado = 120 horas

Custo por hora = €35

Custo de mão de obra = 120 × 35

Custo = €4.200
```

Contudo, o esforço não representa necessariamente a duração do trabalho no calendário.

Duas pessoas podem dividir parte das 120 horas, mas haverá atividades que exigem colaboração, sincronização ou execução sequencial.

Além disso, o custo-hora deve considerar a base utilizada: pode representar apenas salário direto ou incluir encargos, benefícios, infraestrutura e custos indiretos.

### Documentar as bases das estimativas

O PMBOK® apresenta o conceito de **Basis of Estimates (Bases das Estimativas)**.

Para cada estimativa significativa, é importante documentar:

- Método utilizado.
- Fonte dos dados.
- Premissas consideradas.
- Restrições identificadas.
- Nível de confiança.
- Intervalo possível de custos.
- Riscos que podem alterar o resultado.
- Data da estimativa.

**Exemplo:**

```text
ATIVIDADE: Desenvolvimento da API de autenticação

Estimativa: €3.500

Método: Bottom-up

Premissas:
- 100 horas de desenvolvimento
- Custo-hora de €35
- Biblioteca de autenticação já conhecida
- Banco de dados disponível

Exclusões:
- Integração com provedores externos de identidade
- Custos de infraestrutura cloud

Risco:
- Alterações nos requisitos de segurança

Responsável pela estimativa:
- Tech Lead
```

> Uma estimativa que não apresenta as suas premissas é difícil de verificar, atualizar e defender perante o patrocinador do projeto.

---

## 3. Levantamento dos Custos — fundamentar custos

### O que é o levantamento de custos

O **levantamento de custos** é a identificação sistemática de todos os recursos que gerarão despesas ou consumo económico durante a execução do projeto.

O seu propósito é evitar que o orçamento contemple apenas os elementos mais visíveis, esquecendo custos necessários para realizar e entregar o trabalho.

Em projetos de tecnologia, um erro comum é considerar apenas o custo dos programadores, ignorando:

- Hospedagem e infraestrutura.
- Bases de dados e armazenamento.
- Ferramentas de desenvolvimento.
- Licenças.
- Testes e garantia de qualidade.
- Segurança.
- Treinamento de utilizadores.
- Migração de dados.
- Documentação.
- Suporte durante a implantação.

### Classificação dos custos

Os custos podem ser classificados de diferentes maneiras, dependendo da finalidade da análise.

### Custos Diretos (Direct Costs)

São custos que podem ser atribuídos diretamente a um projeto, atividade ou entregável específico.

**Exemplos:**
- Horas de desenvolvimento dedicadas ao projeto.
- Licença adquirida exclusivamente para o sistema.
- Contratação de uma empresa para testes de segurança.
- Equipamentos comprados especificamente para o projeto.

```text
Projeto: Sistema Web

Desenvolvedor Backend:  €5.000
Desenvolvedor Frontend: €4.000
Designer UX/UI:         €2.000

Total de custos diretos = €11.000
```

### Custos Indiretos (Indirect Costs)

São custos compartilhados entre vários projetos ou atividades da organização e que necessitam de critérios de alocação.

**Exemplos:**
- Energia elétrica do escritório.
- Internet corporativa.
- Equipa administrativa.
- Infraestrutura compartilhada.
- Serviços de contabilidade.
- Equipamentos utilizados em múltiplos projetos.

**Exemplo:**

```text
Custo mensal da infraestrutura compartilhada: €3.000

Número de projetos: 5

Critério: distribuição igualitária

Custo alocado por projeto = 3.000 / 5

Custo = €600/mês
```

A distribuição igualitária é apenas um exemplo. Em situações reais, podem ser usados critérios como horas consumidas, número de utilizadores ou percentagem de utilização dos recursos.

### Custos Fixos (Fixed Costs)

São custos que permanecem constantes dentro de um determinado intervalo de operação, independentemente de pequenas variações no volume de trabalho.

**Exemplos:**
- Assinatura mensal de uma ferramenta.
- Aluguer de um escritório.
- Contrato de suporte com mensalidade fixa.
- Licença anual com preço contratado.

```text
Licença de software = €200/mês

Duração do projeto = 6 meses

Custo total = 200 × 6

Custo total = €1.200
```

### Custos Variáveis (Variable Costs)

São custos que se alteram conforme o volume de utilização ou produção.

**Exemplos:**
- Consumo de serviços cloud.
- Armazenamento por GB.
- Cobrança por requisição de API.
- Tarifas por transação.
- Materiais consumidos por unidade produzida.

```text
Custo por requisição de API = €0,002

Volume previsto = 500.000 requisições

Custo = 500.000 × 0,002

Custo estimado = €1.000
```

É importante verificar as condições reais de tarifação: preços por escalões, pacotes incluídos e mínimos de cobrança podem alterar a estimativa.

### Custos Recorrentes e Não Recorrentes

**Custos recorrentes:** repetem-se ao longo do tempo.

Exemplos:
- Hospedagem mensal.
- Licenças por subscrição.
- Monitorização.
- Manutenção contratada.

**Custos não recorrentes:** ocorrem uma única vez ou em momentos específicos.

Exemplos:
- Compra inicial de equipamentos.
- Migração de base de dados.
- Implementação de um módulo.
- Formação inicial da equipa.

| Tipo | Exemplo | Frequência |
|---|---|---|
| Recorrente | Hospedagem cloud | Mensal |
| Recorrente | Licença de monitorização | Anual |
| Não recorrente | Migração de dados | Uma vez |
| Não recorrente | Configuração inicial de servidores | Uma vez |

### CAPEX vs. OPEX

Outra classificação importante é a distinção entre despesas de capital e despesas operacionais.

**CAPEX — Capital Expenditure**

Investimentos destinados à aquisição, desenvolvimento ou melhoria de ativos que poderão gerar benefícios durante vários períodos.

Exemplos potenciais:
- Aquisição de servidores.
- Construção de infraestrutura própria.
- Desenvolvimento de software que cumpra critérios contabilísticos de capitalização.

**OPEX — Operational Expenditure**

Despesas relacionadas com a operação corrente da organização.

Exemplos:
- Subscrições de serviços.
- Custos correntes de alojamento cloud.
- Manutenção operacional.
- Suporte e consumo de infraestrutura.

**Comparação:**

| Critério | CAPEX | OPEX |
|---|---|---|
| Natureza | Investimento em ativo | Despesa operacional |
| Exemplo | Compra de servidor | Pagamento mensal por infraestrutura cloud |
| Horizonte | Benefícios em vários períodos | Operação corrente |
| Contabilização | Pode envolver depreciação/amortização | Geralmente reconhecido como despesa conforme aplicável |

> **Atenção:** nem todo custo de desenvolvimento de software é automaticamente CAPEX. O tratamento contabilístico depende da natureza do gasto e das normas aplicáveis.

### Custos Afundados (Sunk Costs)

Os **sunk costs** são custos já incorridos que não podem ser recuperados.

Não devem, isoladamente, justificar a continuidade de um projeto.

**Exemplo:**

Uma empresa já investiu €80.000 num sistema.

Para terminar o projeto, ainda será necessário investir €50.000, mas os benefícios futuros esperados são inferiores ao valor adicional necessário.

A organização deve analisar os custos e benefícios futuros, em vez de decidir continuar apenas porque já gastou €80.000.

Este problema está associado à **Sunk Cost Fallacy (Falácia dos Custos Afundados)**.

### Custos de Oportunidade (Opportunity Costs)

O **custo de oportunidade** representa o benefício que a organização deixa de obter ao escolher uma alternativa em vez de outra.

**Exemplo:**

Uma equipa pode desenvolver:

- Projeto A: benefício líquido esperado de €40.000.
- Projeto B: benefício líquido esperado de €60.000.

Se os projetos forem mutuamente exclusivos e a empresa escolher o Projeto A, estará a abdicar da oportunidade de obter o benefício esperado do Projeto B.

Esta análise é relevante na seleção e priorização de projetos.

### Estrutura Analítica de Custos (Cost Breakdown Structure — CBS)

A **CBS** organiza os custos em categorias hierárquicas, permitindo visualizar onde os recursos financeiros serão consumidos.

Enquanto a EAP representa os entregáveis do projeto, a CBS representa a estrutura dos custos.

```text
1.0 CUSTOS DO PROJETO
    |
    +-- 1.1 Recursos Humanos
    |      +-- Desenvolvimento
    |      +-- Design
    |      +-- Testes
    |      +-- Gestão do Projeto
    |
    +-- 1.2 Infraestrutura
    |      +-- Servidores
    |      +-- Base de dados
    |      +-- Armazenamento
    |
    +-- 1.3 Ferramentas
    |      +-- Licenças
    |      +-- Ferramentas de QA
    |
    +-- 1.4 Serviços Externos
    |      +-- Consultoria
    |      +-- Auditoria de segurança
    |
    +-- 1.5 Reservas de Contingência
```

A ligação entre a EAP e a CBS permite identificar quanto custa cada entregável e quais categorias de despesa contribuem para esse custo.

### Custos dos Recursos Humanos

Em projetos de software, os recursos humanos frequentemente representam uma parcela importante dos custos.

O cálculo pode utilizar a seguinte fórmula:

```text
Custo de mão de obra = Horas previstas × Custo-hora
```

**Exemplo:**

| Profissional | Horas | Custo/hora | Total |
|---|---:|---:|---:|
| Project Manager | 80h | €45 | €3.600 |
| Backend Developer | 200h | €35 | €7.000 |
| Frontend Developer | 160h | €30 | €4.800 |
| UX/UI Designer | 80h | €30 | €2.400 |
| QA Engineer | 100h | €25 | €2.500 |
| **Total** | **620h** | — | **€20.300** |

O custo-hora deve ser calculado considerando os critérios financeiros da organização e pode incluir salário, encargos patronais, benefícios e outros custos associados.

### Custos de Infraestrutura e Cloud

Em aplicações modernas, os serviços de computação em nuvem representam uma componente importante do orçamento.

Os custos podem incluir:

**Computação**
- Instâncias virtuais.
- Containers.
- Funções serverless.
- Recursos de processamento.

**Armazenamento**
- Armazenamento de objetos.
- Discos associados a instâncias.
- Backups.
- Arquivamento de dados.

**Bases de dados**
- Instâncias gerenciadas.
- Armazenamento.
- Backups.
- Transferência de dados.

**Rede**
- Transferência de dados.
- Balanceadores de carga.
- Gateways.
- Endereços IP e serviços associados.

**Monitorização**
- Logs.
- Métricas.
- Alertas.
- Retenção de dados.

**Exemplo de previsão hipotética:**

| Serviço | Custo mensal | Duração | Total |
|---|---:|---:|---:|
| Computação | €120 | 4 meses | €480 |
| Base de dados | €80 | 4 meses | €320 |
| Armazenamento | €20 | 4 meses | €80 |
| Monitorização | €30 | 4 meses | €120 |
| **Total** | **€250** | **4 meses** | **€1.000** |

Estes valores são ilustrativos e não correspondem a uma cotação comercial real.

### Custo Total de Propriedade (Total Cost of Ownership — TCO)

O **TCO** considera não apenas o custo de aquisição ou desenvolvimento inicial, mas também os custos necessários para utilizar, operar e manter a solução durante o período analisado.

```text
TCO =
    Aquisição ou Desenvolvimento
  + Implementação
  + Infraestrutura
  + Licenças
  + Operação
  + Manutenção
  + Suporte
  + Outros custos do ciclo de vida
```

**Exemplo:**

```text
Desenvolvimento inicial: €30.000

Infraestrutura anual:    €4.000
Manutenção anual:        €6.000
Suporte anual:           €2.000

Período de análise: 3 anos

TCO = 30.000 + 3×(4.000 + 6.000 + 2.000)

TCO = 30.000 + 36.000

TCO = €66.000
```

Este exemplo não considera inflação, valor temporal do dinheiro ou custos de desativação.

O TCO permite comparar alternativas tecnológicas de forma mais completa.

Por exemplo, uma solução com menor custo inicial pode apresentar um custo total superior ao longo de vários anos devido às despesas de manutenção e operação.

### Reservas para lidar com a incerteza

O orçamento deve considerar a possibilidade de eventos que provoquem custos adicionais.

Existem duas categorias importantes de reservas.

**Reserva de Contingência (Contingency Reserve)**

Destina-se aos riscos identificados para os quais foram planeadas respostas financeiras.

Exemplos:
- Possíveis custos adicionais numa integração.
- Necessidade de executar novos testes.
- Variações previstas no preço de serviços externos.

A reserva de contingência faz parte da **linha de base de custos**.

**Reserva de Gestão (Management Reserve)**

Destina-se a situações imprevistas que não foram especificamente identificadas no planeamento.

A reserva de gestão:

- É incluída no orçamento total do projeto.
- Não faz parte da linha de base de custos.
- Geralmente exige autorização específica para utilização.
- Pode ser transferida para a linha de base através do processo aprovado de gestão de mudanças.

**Diferença:**

| Característica | Contingência | Gestão |
|---|---|---|
| Finalidade | Riscos identificados | Trabalho imprevisto dentro do escopo |
| Faz parte da linha de base? | Sim | Não |
| Faz parte do orçamento total? | Sim | Sim |
| Utilização | Conforme regras do plano | Exige autorização apropriada |
| Base de cálculo | Análise de riscos | Política e julgamento organizacional |

### Valor Monetário Esperado (Expected Monetary Value — EMV)

O **EMV** é uma técnica de análise quantitativa de riscos que pode apoiar a definição da reserva de contingência.

Para um evento simples:

```text
EMV = Probabilidade × Impacto financeiro
```

**Exemplo:**

| Risco | Probabilidade | Impacto | EMV |
|---|---:|---:|---:|
| Problemas na integração da API | 30% | €4.000 | €1.200 |
| Atraso do fornecedor | 20% | €3.000 | €600 |
| Falha que exige novos testes | 25% | €2.000 | €500 |
| **Total** | — | — | **€2.300** |

```text
Reserva estimada pelo EMV =

(0,30 × 4.000)
+
(0,20 × 3.000)
+
(0,25 × 2.000)

= €2.300
```

Neste exemplo, o EMV total é de €2.300.

Isso não significa que todos os riscos ocorrerão nem que a reserva será suficiente em todos os cenários.

A técnica representa uma expectativa monetária e deve ser complementada pela análise de risco, especialmente quando existem dependências entre eventos ou impactos muito elevados.

---

## 4. Orçamento — montar o orçamento do projeto

### Do levantamento de custos ao orçamento aprovado

Depois de identificar as atividades, estimar os recursos e levantar os custos, o gestor pode consolidar todas as informações para desenvolver o orçamento.

O processo pode ser representado por:

```text
      ESCOPO DO PROJETO
               |
               v
              EAP
               |
               v
      LISTA DE ATIVIDADES
               |
               v
      RECURSOS NECESSÁRIOS
               |
               v
      ESTIMATIVAS DE CUSTOS
               |
               v
      AGREGAÇÃO DOS CUSTOS
               |
               v
    RESERVAS DE CONTINGÊNCIA
               |
               v
       LINHA DE BASE
          DE CUSTOS
               |
               v
      RESERVA DE GESTÃO
               |
               v
       ORÇAMENTO TOTAL
               |
               v
          APROVAÇÃO
```

### Etapa 1 — Definir a EAP

O primeiro passo é garantir que o trabalho necessário está identificado.

Vamos utilizar como exemplo o desenvolvimento de um **Sistema Web de Gestão de Clientes (CRM)**.

A estrutura simplificada do projeto será:

```text
1.0 SISTEMA CRM
    |
    +-- 1.1 Gestão do Projeto
    |      +-- Planeamento e acompanhamento
    |
    +-- 1.2 Design
    |      +-- UX/UI
    |
    +-- 1.3 Desenvolvimento
    |      +-- Backend
    |      +-- Frontend
    |
    +-- 1.4 Qualidade
    |      +-- Testes e validação
    |
    +-- 1.5 Infraestrutura
    |      +-- Cloud e licenças
    |
    +-- 1.6 Implantação
           +-- Deploy e documentação
```

Esta estrutura oferece uma base para atribuir custos aos principais pacotes de trabalho.

### Etapa 2 — Estimar os custos dos pacotes de trabalho

Para cada pacote, devem ser identificadas as atividades, os recursos e os respetivos custos.

**Exemplo de estimativas:**

| Código EAP | Pacote de trabalho | Custo estimado |
|---|---|---:|
| 1.1 | Gestão do Projeto | €3.600 |
| 1.2 | Design UX/UI | €2.400 |
| 1.3.1 | Desenvolvimento Backend | €7.000 |
| 1.3.2 | Desenvolvimento Frontend | €4.800 |
| 1.4 | Testes e Qualidade | €2.500 |
| 1.5 | Infraestrutura e Licenças | €1.000 |
| 1.6 | Deploy e Documentação | €1.200 |
| **Total** | **Custos estimados** | **€22.500** |

Os valores são hipotéticos e representam uma aplicação simplificada da técnica bottom-up.

### Etapa 3 — Agregar os custos

A **agregação de custos (Cost Aggregation)** consiste em somar as estimativas das atividades e pacotes de trabalho, obtendo o custo planeado do projeto.

```text
Gestão do Projeto:           €3.600
Design UX/UI:                €2.400
Backend:                     €7.000
Frontend:                    €4.800
Testes:                      €2.500
Infraestrutura:              €1.000
Deploy e Documentação:       €1.200
                            --------
CUSTO ESTIMADO TOTAL:       €22.500
```

A agregação deve respeitar a EAP e evitar a contabilização duplicada de custos.

Por exemplo, se o custo-hora dos programadores já incluir os encargos empresariais, esses mesmos encargos não devem ser somados novamente como uma categoria independente.

### Etapa 4 — Incluir a reserva de contingência

Depois de calcular os custos estimados, o gestor deve determinar quanto precisa de reservar para riscos identificados.

Para este exemplo, vamos utilizar uma reserva de contingência de €2.300, calculada previamente pelo EMV.

```text
Custos estimados:        €22.500

Reserva de contingência: €2.300
                         --------
Linha de base de custos: €24.800
```

### Etapa 5 — Definir a reserva de gestão

A organização decide acrescentar uma reserva de gestão de €2.000 para imprevistos dentro do escopo do projeto.

```text
Linha de base de custos: €24.800

Reserva de gestão:        €2.000
                         --------
ORÇAMENTO TOTAL:         €26.800
```

O valor de €26.800 representa o orçamento total aprovado, enquanto €24.800 representa a linha de base contra a qual o desempenho financeiro será medido.

**Estrutura do orçamento:**

```text
             ORÇAMENTO TOTAL
                 €26.800
                    |
           +--------+--------+
           |                 |
           v                 v
    LINHA DE BASE       RESERVA DE
       DE CUSTOS          GESTÃO
        €24.800            €2.000
           |
      +----+----+
      |         |
      v         v
   CUSTOS     RESERVA DE
 ESTIMADOS   CONTINGÊNCIA
  €22.500       €2.300
```

### Etapa 6 — Distribuir os custos no tempo

Um orçamento não deve indicar apenas quanto será gasto no total, mas também **quando os recursos financeiros serão necessários**.

A distribuição temporal depende do cronograma desenvolvido anteriormente.

Considere que o projeto CRM terá duração de quatro meses.

Um exemplo de distribuição da linha de base é:

| Mês | Custos planeados, incluindo contingência | Acumulado |
|---|---:|---:|
| Mês 1 | €5.000 | €5.000 |
| Mês 2 | €8.000 | €13.000 |
| Mês 3 | €7.000 | €20.000 |
| Mês 4 | €4.800 | €24.800 |
| **Total** | **€24.800** | **€24.800** |

A distribuição apresentada é ilustrativa. Num projeto real, deve refletir o calendário efetivo das atividades, os momentos de consumo dos recursos e o planeamento das reservas.

### A Curva S (S-Curve)

A **Curva S** representa a evolução acumulada dos custos ao longo do tempo.

É uma ferramenta utilizada para acompanhar o consumo de recursos e comparar o comportamento planeado com o realizado.

Uma representação conceptual é:

```text
CUSTO
ACUMULADO
   ^
   |
100|                         ______
   |                     ___/
 80|                  __/
   |                _/
 60|             __/
   |           _/
 40|        __/
   |      _/
 20|   __/
   |__/
  0+--------------------------------> TEMPO
     Início                    Fim
```

A forma da curva depende da distribuição real dos custos.

Em muitos projetos, os gastos acumulam-se mais lentamente no início, aceleram durante a execução e estabilizam próximo do encerramento.

Contudo, esta forma não é obrigatória: projetos com grandes aquisições iniciais podem apresentar curvas diferentes.

### Etapa 7 — Estabelecer a linha de base de custos

A **Cost Baseline (Linha de Base de Custos)** é a versão aprovada do orçamento distribuído ao longo do tempo, excluindo a reserva de gestão.

Serve para comparar o desempenho financeiro real com o plano.

A linha de base não deve ser alterada informalmente sempre que surgirem desvios.

Mudanças aprovadas podem exigir a atualização do orçamento e da linha de base por meio do processo de **Controlo Integrado de Mudanças (Integrated Change Control)**.

**Exemplo:**

O cliente solicita uma funcionalidade adicional que exige €3.000 em desenvolvimento.

O processo correto será:

```text
Pedido de mudança
       |
       v
Análise de impacto
       |
       +----> Escopo
       +----> Prazo
       +----> Custo
       +----> Qualidade
       +----> Riscos
       |
       v
Avaliação e aprovação
       |
       +----> Rejeitado: manter plano
       |
       +----> Aprovado:
                  |
                  v
           Atualizar a EAP
                  |
                  v
           Atualizar cronograma
                  |
                  v
           Atualizar orçamento
                  |
                  v
           Revisar linha de base
```

Uma mudança aprovada não deve ser tratada como se fosse simplesmente um erro de estimativa.

É necessário documentar o que mudou e qual será o novo compromisso financeiro.

### Etapa 8 — Definir os requisitos de financiamento

O **Project Funding Requirements (Requisitos de Financiamento do Projeto)** identifica quanto dinheiro será necessário e em que momentos.

Este planeamento é importante porque possuir um orçamento aprovado não significa necessariamente ter todos os recursos financeiros disponíveis imediatamente.

**Exemplo:**

| Período | Necessidade de financiamento |
|---|---:|
| Início do Mês 1 | €5.000 |
| Início do Mês 2 | €8.000 |
| Início do Mês 3 | €7.000 |
| Início do Mês 4 | €4.800 |
| Reserva de gestão | €2.000 |
| **Total previsto** | **€26.800** |

O financiamento pode ser disponibilizado de uma só vez ou em parcelas, conforme as políticas da organização.

Uma organização precisa de avaliar a disponibilidade de caixa, os pagamentos aos fornecedores e o calendário de despesas.

> Um projeto pode possuir orçamento suficiente no total e ainda enfrentar dificuldades financeiras se os recursos não estiverem disponíveis nos momentos em que os pagamentos precisam de ocorrer.

### Etapa 9 — Controlar o orçamento durante a execução

Depois da aprovação, inicia-se o acompanhamento do desempenho financeiro.

O controlo envolve:

- Registar custos reais.
- Comparar gastos com o orçamento planeado.
- Identificar desvios.
- Atualizar previsões.
- Avaliar solicitações de mudança.
- Implementar ações corretivas.
- Comunicar o estado financeiro aos stakeholders.

Uma das principais técnicas utilizadas é o **Earned Value Management (EVM — Gestão do Valor Agregado)**.

### Introdução ao Earned Value Management (EVM)

O **EVM** integra três dimensões importantes:

- Trabalho planeado.
- Trabalho efetivamente realizado.
- Custo real do trabalho executado.

Os três indicadores fundamentais são:

**PV — Planned Value (Valor Planeado)**

Representa o orçamento autorizado para o trabalho que deveria ter sido realizado até uma determinada data.

**EV — Earned Value (Valor Agregado)**

Representa o valor orçamentado do trabalho efetivamente concluído.

**AC — Actual Cost (Custo Real)**

Representa o custo efetivamente incorrido para realizar o trabalho.

### Exemplo de controlo financeiro por EVM

Considere um projeto com orçamento de referência de €20.000.

Após determinado período:

```text
PV = €10.000
EV = €8.000
AC = €9.500
```

**Interpretação inicial:**

- Estava planeado realizar €10.000 de trabalho.
- O trabalho concluído equivale a €8.000 do orçamento.
- Foram efetivamente gastos €9.500.

Portanto, o projeto está atrasado em relação ao plano e gastou mais do que o valor orçamentado para o trabalho realizado.

### Cost Variance (CV) — Variação de Custo

```text
CV = EV - AC

CV = 8.000 - 9.500

CV = -€1.500
```

**Interpretação:**
- CV > 0: custo abaixo do previsto para o trabalho realizado.
- CV = 0: custo conforme o previsto.
- CV < 0: custo acima do previsto.

Neste exemplo, o projeto apresenta uma variação negativa de €1.500.

### Schedule Variance (SV) — Variação de Prazo

```text
SV = EV - PV

SV = 8.000 - 10.000

SV = -€2.000
```

O SV negativo indica que o valor do trabalho realizado está abaixo do valor planeado para a data.

Embora se chame variação de prazo, o SV é expresso em unidades monetárias, não em dias.

### Cost Performance Index (CPI)

O **CPI** mede a eficiência dos custos.

```text
       EV
CPI = ----
       AC

CPI = 8.000 / 9.500

CPI ≈ 0,84
```

**Interpretação:**

| CPI | Situação |
|---|---|
| CPI > 1 | Custo abaixo do previsto |
| CPI = 1 | Conforme o orçamento |
| CPI < 1 | Custo acima do previsto |

Neste exemplo, para cada €1 gasto, a equipa produz aproximadamente €0,84 de valor orçamentado de trabalho.

### Schedule Performance Index (SPI)

O **SPI** mede a eficiência de progresso em relação ao planeado.

```text
       EV
SPI = ----
       PV

SPI = 8.000 / 10.000

SPI = 0,80
```

**Interpretação:**

| SPI | Situação |
|---|---|
| SPI > 1 | Trabalho realizado acima do planeado |
| SPI = 1 | Conforme o plano |
| SPI < 1 | Trabalho realizado abaixo do planeado |

Neste exemplo, o projeto apresenta um desempenho de 80% do valor que estava planeado realizar até à data de medição.

### Estimate at Completion (EAC)

O **EAC** é uma previsão do custo total do projeto quando estiver concluído.

Existem diferentes fórmulas, dependendo das premissas consideradas.

Se o desempenho de custos atual se mantiver:

```text
       BAC
EAC = -----
       CPI
```

Onde **BAC (Budget at Completion)** representa o orçamento total da linha de base utilizada na medição.

Para o exemplo:

```text
BAC = €20.000

CPI ≈ 0,8421

EAC = 20.000 / 0,8421

EAC ≈ €23.750
```

Se a eficiência atual persistir, o projeto poderá terminar com um custo aproximado de €23.750.

Isso representa €3.750 acima do orçamento de referência.

Esta previsão não é uma certeza: depende da validade da premissa de que a eficiência financeira atual continuará até ao encerramento.

### Resumo dos principais indicadores EVM

| Indicador | Fórmula | Finalidade |
|---|---|---|
| **PV** | Valor planeado acumulado | Quanto trabalho deveria ter sido realizado |
| **EV** | Valor orçamentado do trabalho concluído | Quanto trabalho foi realmente realizado |
| **AC** | Custos efetivamente incorridos | Quanto foi gasto |
| **CV** | EV − AC | Medir desvio de custo |
| **SV** | EV − PV | Medir desvio de cronograma em valor |
| **CPI** | EV / AC | Avaliar eficiência financeira |
| **SPI** | EV / PV | Avaliar eficiência do progresso |
| **BAC** | Orçamento total da linha de base | Referência financeira da conclusão |
| **EAC** | BAC / CPI (um dos métodos) | Projetar custo final |

### Boas práticas para elaborar um orçamento confiável

**1. Utilizar a EAP como referência**

Todo o trabalho previsto no projeto deve possuir uma estimativa de custo ou estar contemplado num conjunto de custos adequadamente documentado.

**2. Envolver os responsáveis pelas atividades**

Os profissionais que executarão o trabalho possuem conhecimento técnico importante para estimar esforço e recursos.

**3. Utilizar dados históricos**

Projetos anteriores ajudam a validar estimativas e identificar custos frequentemente esquecidos.

**4. Documentar premissas e exclusões**

O orçamento precisa indicar o que está incluído e o que não está contemplado.

**5. Incorporar riscos**

Reservas devem ser justificadas pela análise de incerteza e pelas políticas do projeto.

**6. Evitar a falsa precisão**

Apresentar um orçamento extremamente detalhado não garante precisão se as premissas ainda forem incertas.

**7. Controlar mudanças**

Alterações de escopo, recursos e prazos devem passar por avaliação de impacto financeiro.

**8. Atualizar previsões de conclusão**

Mesmo mantendo a linha de base original, o gestor deve atualizar as estimativas do custo final utilizando as informações reais da execução.

**9. Monitorizar o consumo de recursos**

Acompanhamento regular permite identificar desvios antes que comprometam todo o orçamento.

**10. Relacionar custos com entregáveis**

Gastar menos não representa sucesso se o projeto deixar de entregar os requisitos e padrões de qualidade acordados.

### Erros comuns na elaboração do orçamento

**Subestimar os recursos humanos**

Ignorar reuniões, revisões, comunicação, documentação, testes e correções necessárias ao desenvolvimento.

**Não incluir custos indiretos**

Considerar apenas as despesas diretamente associadas à implementação.

**Ignorar a infraestrutura**

Desenvolver uma aplicação sem prever gastos com ambientes de testes, servidores, bases de dados, backups e monitorização.

**Confundir reserva com orçamento disponível**

Utilizar reservas indiscriminadamente para financiar atividades não planeadas.

**Não considerar dependências externas**

Deixar de prever possíveis custos relacionados com fornecedores, licenças e serviços contratados.

**Não revisar estimativas**

Manter previsões iniciais mesmo quando novas informações demonstram que já não são realistas.

**Não acompanhar custos reais**

Descobrir apenas no final do projeto que o orçamento aprovado foi ultrapassado.

### Integração entre escopo, cronograma e orçamento

A gestão integrada permite relacionar as diferentes dimensões do projeto.

```text
                 PROJETO
                    |
                    v
                  ESCOPO
                    |
                    v
                   EAP
                    |
          +---------+---------+
          |                   |
          v                   v
      ATIVIDADES           RECURSOS
          |                   |
          v                   v
      CRONOGRAMA          ESTIMATIVAS
          |                   |
          +---------+---------+
                    |
                    v
                ORÇAMENTO
                    |
                    v
              LINHA DE BASE
                    |
                    v
                EXECUÇÃO
                    |
                    v
          MONITORIZAÇÃO E CONTROLO
                    |
          +---------+---------+
          |                   |
          v                   v
       PRAZOS               CUSTOS
          |                   |
          +---------+---------+
                    |
                    v
             DECISÕES DE GESTÃO
```

A EAP identifica o trabalho, o cronograma organiza esse trabalho no tempo e o orçamento representa financeiramente os recursos necessários.

A integração permite que uma alteração numa área seja analisada em relação às restantes.

---

## Resumo em uma frase

> O orçamento de um projeto transforma o escopo e o cronograma num plano financeiro estruturado, utilizando técnicas de estimativa como análoga, paramétrica, bottom-up e PERT para prever os custos, classificando recursos e despesas através do levantamento de custos e da CBS, agregando estimativas e reservas para estabelecer a linha de base e o orçamento total aprovado, e aplicando técnicas de controlo como o Earned Value Management (EVM) para acompanhar o desempenho financeiro, antecipar desvios e garantir que os recursos disponíveis sejam utilizados de forma eficiente na entrega dos objetivos do projeto.

---

## Conceitos relacionados para estudar a seguir

- **Earned Value Management (EVM) em profundidade** — aprofundar os indicadores CPI, SPI, CV, SV, BAC, EAC, ETC e VAC, compreendendo como medir e prever o desempenho financeiro dos projetos.

- **Gestão de Riscos em Projetos** — identificar ameaças e oportunidades, construir matrizes de probabilidade e impacto, calcular reservas de contingência e definir estratégias de resposta.

- **Análise de Viabilidade Económica** — aplicar ROI, VPL, TIR e Payback para comparar investimentos e apoiar decisões de aprovação ou rejeição de projetos.

- **Simulação Monte Carlo para custos** — aplicar simulações probabilísticas às estimativas financeiras e avaliar a probabilidade de concluir o projeto dentro de diferentes limites orçamentais.

- **Gestão de Aquisições (Project Procurement Management)** — compreender processos de contratação, seleção de fornecedores, tipos de contratos e respetivos impactos no orçamento.

- **FinOps e Gestão de Custos na Cloud** — estudar práticas de previsão, monitorização e otimização financeira em ambientes de computação em nuvem, especialmente AWS, Azure e Google Cloud.

- **Controlo Integrado de Mudanças (Integrated Change Control)** — analisar como alterações de escopo, cronograma, recursos e riscos afetam o orçamento e exigem atualizações controladas das linhas de base.
