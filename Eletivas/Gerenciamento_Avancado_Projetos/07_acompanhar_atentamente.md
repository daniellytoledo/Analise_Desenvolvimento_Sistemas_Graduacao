
# Acompanhar Atentamente

> Este ficheiro aprofunda o acompanhamento e controlo de projetos, dando continuidade ao planeamento de custos apresentado em `06_orcamento.md`. O foco é a **Gestão do Valor Agregado (Earned Value Management — EVM)**, também conhecida como **Análise do Valor Agregado (Earned Value Analysis — EVA)**, que permite integrar escopo, cronograma e custos para medir o desempenho real do projeto, identificar desvios e projetar os resultados esperados até à conclusão.

---

## 1. Gestão do Valor Agregado — introdução

### Por que acompanhar o desempenho de um projeto

Após o planeamento do escopo, a elaboração da EAP, a construção do cronograma e a aprovação do orçamento, inicia-se uma etapa fundamental: **acompanhar se o projeto está realmente a progredir conforme o planeado**.

Durante a execução, o gestor precisa de responder a perguntas como:

- O projeto está dentro do orçamento?
- As atividades estão a ser concluídas no ritmo previsto?
- O trabalho realizado corresponde ao dinheiro gasto?
- O projeto apresenta atrasos ou custos adicionais?
- Quanto será necessário gastar para terminar?
- O orçamento restante será suficiente?
- Quais ações podem corrigir os desvios identificados?

Analisar apenas quanto dinheiro foi gasto não permite responder adequadamente a todas essas perguntas.

**Exemplo:**

Um projeto de desenvolvimento de software possui:

```text
Orçamento total: €50.000

Duração prevista: 5 meses

Situação após 3 meses:

Valor gasto: €25.000
```

O projeto está numa boa situação financeira?

À primeira vista, parece positivo: apenas metade do orçamento foi utilizada.

No entanto, essa informação é insuficiente.

É necessário conhecer também:

- Quanto trabalho deveria estar concluído.
- Quanto trabalho foi efetivamente concluído.
- Quanto estava orçamentado para o trabalho realizado.

Se apenas 30% do projeto estiver concluído, gastar 50% do orçamento pode representar um problema significativo.

Por outro lado, se 80% do projeto estiver concluído, os mesmos €25.000 podem indicar um desempenho favorável.

É precisamente essa relação entre **trabalho planeado, trabalho executado e custo real** que a Gestão do Valor Agregado procura medir.

### O que é a Gestão do Valor Agregado

A **Gestão do Valor Agregado (Earned Value Management — EVM)** é uma técnica de monitorização e controlo que integra três dimensões fundamentais de um projeto:

1. **Escopo:** quanto trabalho deveria ser realizado e quanto foi efetivamente concluído.
2. **Cronograma:** quando o trabalho deveria ser realizado.
3. **Custos:** quanto deveria custar e quanto efetivamente custou.

A EVM compara o desempenho planeado com o desempenho real, utilizando indicadores quantitativos para identificar desvios e apoiar decisões.

```text
             GESTÃO DO VALOR AGREGADO
                       |
          +------------+------------+
          |            |            |
          v            v            v
        ESCOPO      CRONOGRAMA      CUSTOS
          |            |            |
          v            v            v
      Trabalho      Trabalho      Recursos
      realizado     planeado      utilizados
          |            |            |
          +------------+------------+
                       |
                       v
             MEDIÇÃO DO DESEMPENHO
                       |
          +------------+------------+
          |            |            |
          v            v            v
        DESVIOS     EFICIÊNCIA    PREVISÕES
                       |
                       v
                TOMADA DE DECISÃO
```

### EVA vs. EVM — existe diferença?

Os termos são frequentemente utilizados como equivalentes, mas possuem uma distinção conceptual.

**EVA — Earned Value Analysis (Análise do Valor Agregado)**

Refere-se principalmente à análise dos indicadores de desempenho, como:

- Cost Variance (CV).
- Schedule Variance (SV).
- Cost Performance Index (CPI).
- Schedule Performance Index (SPI).

**EVM — Earned Value Management (Gestão do Valor Agregado)**

Representa a abordagem mais abrangente de gestão, que utiliza os indicadores para:

- Planear a medição do desempenho.
- Recolher dados.
- Identificar desvios.
- Projetar custos futuros.
- Implementar ações corretivas.
- Apoiar decisões de gestão.

Em termos simples:

```text
EVA = Analisar os resultados

EVM = Utilizar os resultados para gerir o projeto
```

A EVM utiliza a EVA como um dos seus componentes analíticos.

> **Nota:** na literatura de gestão de projetos, o termo EVM é geralmente preferido para designar a abordagem completa. EVA pode aparecer como referência à técnica de análise.

### Origem e evolução da Gestão do Valor Agregado

A Gestão do Valor Agregado desenvolveu-se a partir de práticas de controlo de custos e desempenho utilizadas em projetos industriais e governamentais.

A sua evolução está associada especialmente a projetos de defesa norte-americanos, que exigiam mecanismos rigorosos de acompanhamento financeiro e operacional.

**Principais marcos históricos:**

```text
Início do século XX
        |
        v
Práticas de controlo de custos e produção
        |
        v
Décadas de 1950–1960
        |
        v
Expansão de projetos industriais e militares
        |
        v
1967
        |
        v
Cost/Schedule Control Systems Criteria
(C/SCSC) — Departamento de Defesa dos EUA
        |
        v
Décadas de 1990–2000
        |
        v
Consolidação do conceito moderno de EVM
        |
        v
Atualidade
        |
        v
Aplicação em projetos de engenharia,
tecnologia, infraestrutura e desenvolvimento
de sistemas
```

A técnica ganhou relevância porque permitiu avaliar o progresso dos projetos para além da simples comparação entre orçamento aprovado e dinheiro gasto.

### Os três pilares da EVM

A EVM utiliza três indicadores fundamentais.

**1. PV — Planned Value (Valor Planeado)**

Representa o valor orçamentado do trabalho que deveria estar concluído até uma determinada data.

Responde à pergunta:

**"Quanto trabalho estava previsto realizar até agora, em termos de orçamento?"**

**2. EV — Earned Value (Valor Agregado)**

Representa o valor orçamentado do trabalho efetivamente concluído até à data de medição.

Responde à pergunta:

**"Quanto trabalho realmente realizámos, medido pelo seu valor previsto no orçamento?"**

**3. AC — Actual Cost (Custo Real)**

Representa o valor efetivamente gasto para realizar o trabalho concluído.

Responde à pergunta:

**"Quanto custou executar esse trabalho?"**

### Relação entre PV, EV e AC

```text
                   PROJETO
                      |
          +-----------+-----------+
          |           |           |
          v           v           v
         PV          EV          AC
          |           |           |
          v           v           v
     PLANEADO      REALIZADO     GASTO
          |           |           |
          +-----------+-----------+
                      |
                      v
             COMPARAR VALORES
                      |
          +-----------+-----------+
          |                       |
          v                       v
        EV - PV                 EV - AC
          |                       |
          v                       v
    DESEMPENHO DE           DESEMPENHO DE
      CRONOGRAMA                 CUSTO
```

O significado dessas comparações será aprofundado nas próximas secções.

### A importância da linha de base

Para aplicar a EVM, é necessário possuir uma referência aprovada que permita comparar o desempenho planeado e o realizado.

Essa referência está relacionada com a **Performance Measurement Baseline (PMB — Linha de Base de Medição de Desempenho)**.

A PMB integra o escopo, o cronograma e o orçamento faseado no tempo, permitindo medir o progresso do trabalho.

A **Cost Baseline (Linha de Base de Custos)**, apresentada em `06_orcamento.md`, é uma componente fundamental desse planeamento.

A reserva de gestão não faz parte da linha de base de medição de desempenho.

### BAC — Budget at Completion

O **BAC (Budget at Completion — Orçamento na Conclusão)** representa o orçamento total aprovado para o trabalho que está a ser medido.

O BAC funciona como referência financeira para avaliar a conclusão do projeto.

**Exemplo:**

```text
Projeto: Sistema Web CRM

Orçamento da linha de base: €40.000

BAC = €40.000
```

O BAC não deve ser confundido com o custo real ou com a previsão atualizada de quanto o projeto custará.

| Conceito | Significado |
|---|---|
| BAC | Orçamento aprovado da linha de base |
| AC | Custo efetivamente incorrido |
| EAC | Estimativa atualizada do custo final |
| Orçamento total | Pode incluir a reserva de gestão, além da linha de base |

### Como medir o trabalho concluído

A aplicação correta da EVM depende de uma medição confiável do progresso físico ou técnico dos entregáveis.

Não basta estimar informalmente que uma atividade está "quase pronta".

Existem diferentes métodos de medição.

**Percentual concluído (Percent Complete)**

O progresso é medido através da percentagem efetivamente concluída.

```text
Orçamento da atividade: €10.000

Progresso físico: 60%

EV = 10.000 × 0,60

EV = €6.000
```

**Método 0/100**

O valor só é reconhecido quando a atividade está totalmente concluída.

```text
Atividade: Implementar autenticação

Orçamento: €4.000

Durante o desenvolvimento:

EV = €0

Após conclusão e aceitação:

EV = €4.000
```

Este método é útil para atividades curtas com critérios de aceitação claros.

**Método 50/50**

Reconhece-se 50% do valor quando a atividade começa e os restantes 50% quando termina.

```text
Orçamento da atividade: €2.000

Atividade iniciada:

EV = €1.000

Atividade concluída:

EV = €2.000
```

**Marcos ponderados (Weighted Milestones)**

O trabalho é dividido em marcos verificáveis, cada um com um peso definido.

| Marco | Peso |
|---|---:|
| Requisitos aprovados | 20% |
| API implementada | 40% |
| Testes concluídos | 30% |
| Documentação aprovada | 10% |
| **Total** | **100%** |

Este método é especialmente útil em projetos de software, pois relaciona o reconhecimento do progresso com entregáveis verificáveis.

---

## 2. Indicadores do EVA I — básico

### Compreender os indicadores fundamentais

O primeiro nível da Análise do Valor Agregado utiliza três medidas:

- **PV (Planned Value)**.
- **EV (Earned Value)**.
- **AC (Actual Cost)**.

A partir delas, calculam-se os primeiros indicadores de desempenho:

- **CV (Cost Variance)**.
- **SV (Schedule Variance)**.

Esses indicadores permitem identificar se o projeto está a gastar mais do que deveria e se está a realizar menos trabalho do que o planeado.

### PV — Planned Value (Valor Planeado)

O PV representa o orçamento associado ao trabalho programado para estar concluído até uma determinada data.

Para uma atividade com progresso planeado mensurável:

```text
PV = Orçamento da atividade × % planeada
```

**Exemplo:**

Um módulo de software possui orçamento de €8.000.

Até à data de medição, deveria estar 75% concluído.

```text
PV = 8.000 × 0,75

PV = €6.000
```

Isso significa que, de acordo com o cronograma, €6.000 do valor orçamentado deveriam corresponder a trabalho já realizado.

O PV não representa necessariamente o dinheiro que deveria ter sido pago até essa data.

Representa o **valor orçamentado do trabalho previsto**.

### EV — Earned Value (Valor Agregado)

O EV representa o valor orçamentado correspondente ao trabalho efetivamente concluído.

Para uma atividade medida por percentual de conclusão:

```text
EV = Orçamento da atividade × % realmente concluída
```

**Exemplo:**

O mesmo módulo possui orçamento de €8.000.

No entanto, apenas 50% do trabalho foi concluído.

```text
EV = 8.000 × 0,50

EV = €4.000
```

O valor agregado é €4.000.

Mesmo que tenham sido gastos €6.000, o EV continua a ser €4.000, porque é calculado com base no trabalho realizado e no orçamento aprovado.

### AC — Actual Cost (Custo Real)

O AC representa os custos efetivamente incorridos para executar o trabalho.

**Exemplo:**

```text
Horas de desenvolvimento: €3.500

Infraestrutura consumida: €700

Licenças utilizadas: €300

AC = 3.500 + 700 + 300

AC = €4.500
```

O custo real da atividade é €4.500.

O AC deve ser medido de forma consistente com o escopo e os custos considerados no PV e no EV.

### Primeiro exemplo integrado

Considere um projeto de desenvolvimento web com:

```text
BAC = €20.000

Data de avaliação: final do mês 2

Trabalho previsto: 60%

Trabalho concluído: 40%

Custo real: €9.000
```

**Passo 1 — Calcular PV**

```text
PV = BAC × Progresso planeado

PV = 20.000 × 0,60

PV = €12.000
```

**Passo 2 — Calcular EV**

```text
EV = BAC × Progresso realizado

EV = 20.000 × 0,40

EV = €8.000
```

**Passo 3 — Identificar AC**

```text
AC = €9.000
```

**Resultado:**

| Indicador | Valor | Significado |
|---|---:|---|
| PV | €12.000 | Trabalho previsto |
| EV | €8.000 | Trabalho realizado |
| AC | €9.000 | Custo real |
| BAC | €20.000 | Orçamento total da linha de base |

A situação pode ser representada por:

```text
VALOR (€)

PV  ████████████  €12.000
EV  ████████       €8.000
AC  █████████      €9.000
```

O projeto apresenta dois problemas:

1. O trabalho realizado está abaixo do planeado.
2. O custo real é superior ao valor orçamentado do trabalho realizado.

### CV — Cost Variance (Variação de Custo)

O **CV** mede a diferença entre o valor agregado e o custo real.

```text
CV = EV - AC
```

Utilizando o exemplo:

```text
EV = €8.000

AC = €9.000

CV = 8.000 - 9.000

CV = -€1.000
```

**Interpretação:**

| Resultado | Situação |
|---|---|
| CV > 0 | Favorável: custo inferior ao valor orçamentado do trabalho |
| CV = 0 | Custo conforme o orçamento do trabalho realizado |
| CV < 0 | Desfavorável: custo superior ao valor orçamentado do trabalho |

Como o CV é negativo, o projeto apresenta uma variação desfavorável de €1.000.

Isso não significa que o projeto ultrapassou o orçamento total.

Significa que o trabalho concluído custou €1.000 a mais do que o valor previsto para esse trabalho.

### SV — Schedule Variance (Variação de Cronograma)

O **SV** mede a diferença entre o valor agregado e o valor planeado.

```text
SV = EV - PV
```

Aplicando os valores:

```text
EV = €8.000

PV = €12.000

SV = 8.000 - 12.000

SV = -€4.000
```

**Interpretação:**

| Resultado | Situação |
|---|---|
| SV > 0 | Trabalho realizado acima do planeado |
| SV = 0 | Trabalho realizado conforme o plano |
| SV < 0 | Trabalho realizado abaixo do planeado |

Neste exemplo:

```text
SV = -€4.000
```

O projeto realizou €4.000 a menos em valor orçamentado de trabalho do que deveria ter realizado até à data de avaliação.

**Atenção:** o SV é apresentado em unidades monetárias, não em dias.

Não é correto interpretar SV = -€4.000 como um atraso de quatro dias ou quatro semanas.

### Visão conjunta de CV e SV

Os indicadores devem ser analisados em conjunto.

| CV | SV | Interpretação |
|---|---|---|
| Positivo | Positivo | Custo favorável e trabalho adiantado |
| Positivo | Negativo | Custo favorável, mas trabalho atrasado |
| Negativo | Positivo | Custo desfavorável, mas trabalho adiantado |
| Negativo | Negativo | Custo desfavorável e trabalho atrasado |

**Exemplo de quatro cenários:**

```text
CENÁRIO A

EV = 12.000
PV = 10.000
AC = 9.000

CV = +3.000
SV = +2.000

Custo favorável e trabalho adiantado.


CENÁRIO B

EV = 8.000
PV = 10.000
AC = 7.000

CV = +1.000
SV = -2.000

Custo favorável, mas trabalho atrasado.


CENÁRIO C

EV = 12.000
PV = 10.000
AC = 14.000

CV = -2.000
SV = +2.000

Custo desfavorável, mas trabalho adiantado.


CENÁRIO D

EV = 8.000
PV = 10.000
AC = 11.000

CV = -3.000
SV = -2.000

Custo desfavorável e trabalho atrasado.
```

### Exemplo prático — desenvolvimento de uma API

Uma equipa está a desenvolver uma API REST com autenticação, gestão de utilizadores e relatórios.

O orçamento total da API é €15.000.

Após quatro semanas:

- Estava previsto concluir 70% do trabalho.
- Foram concluídos apenas 50%.
- O custo real acumulado foi €9.000.

**Cálculos:**

```text
BAC = €15.000

PV = 15.000 × 0,70
PV = €10.500

EV = 15.000 × 0,50
EV = €7.500

AC = €9.000
```

**Variações:**

```text
CV = EV - AC

CV = 7.500 - 9.000

CV = -€1.500
```

```text
SV = EV - PV

SV = 7.500 - 10.500

SV = -€3.000
```

**Conclusão:**

A API apresenta desempenho desfavorável em custos e progresso.

A equipa gastou €9.000 para produzir trabalho cujo valor orçamentado é €7.500, quando deveria ter concluído trabalho equivalente a €10.500.

O gestor deverá investigar as possíveis causas:

- Subestimação do esforço.
- Erros de implementação.
- Retrabalho.
- Problemas técnicos inesperados.
- Dependências externas.
- Alterações não controladas de requisitos.

> O objetivo da EVA não é apenas identificar números negativos, mas compreender as causas dos desvios para melhorar a execução do projeto.

---

## 3. Indicadores do EVA II — intermediário

### Dos desvios aos índices de desempenho

Os indicadores básicos CV e SV mostram diferenças absolutas em unidades monetárias.

No entanto, essas diferenças nem sempre permitem comparar projetos com orçamentos distintos.

Por exemplo:

```text
Projeto A:

BAC = €10.000
CV  = -€2.000


Projeto B:

BAC = €1.000.000
CV  = -€2.000
```

Embora ambos apresentem o mesmo desvio absoluto, a relevância proporcional pode ser muito diferente.

Para avaliar a eficiência relativa do desempenho, utilizam-se indicadores em forma de índices.

Os principais são:

- **CPI — Cost Performance Index**.
- **SPI — Schedule Performance Index**.

### CPI — Cost Performance Index

O **Índice de Desempenho de Custos (CPI)** mede a eficiência com que os recursos financeiros estão a ser utilizados para produzir trabalho.

```text
       EV
CPI = ----
       AC
```

**Exemplo:**

```text
EV = €12.000

AC = €15.000

CPI = 12.000 / 15.000

CPI = 0,80
```

O resultado indica que, para cada €1 gasto, o projeto está a produzir €0,80 de valor orçamentado de trabalho.

### Como interpretar o CPI

| CPI | Interpretação |
|---|---|
| CPI > 1 | Desempenho de custos favorável |
| CPI = 1 | Desempenho conforme o orçamento |
| CPI < 1 | Desempenho de custos desfavorável |

**Exemplos:**

```text
CPI = 1,20

Para cada €1 gasto:
€1,20 de valor orçamentado produzido.

Situação favorável.


CPI = 1,00

Para cada €1 gasto:
€1,00 de valor orçamentado produzido.

Conforme o orçamento.


CPI = 0,75

Para cada €1 gasto:
€0,75 de valor orçamentado produzido.

Situação desfavorável.
```

O CPI não mede diretamente lucro ou retorno financeiro.

Mede a relação entre o valor orçamentado do trabalho executado e os recursos efetivamente consumidos.

### SPI — Schedule Performance Index

O **Índice de Desempenho de Cronograma (SPI)** mede a eficiência do progresso do trabalho em relação ao planeamento.

```text
       EV
SPI = ----
       PV
```

**Exemplo:**

```text
EV = €8.000

PV = €10.000

SPI = 8.000 / 10.000

SPI = 0,80
```

O resultado indica que foi realizado 80% do valor orçamentado do trabalho previsto até à data de medição.

### Como interpretar o SPI

| SPI | Interpretação |
|---|---|
| SPI > 1 | Trabalho realizado acima do planeado |
| SPI = 1 | Trabalho realizado conforme o planeado |
| SPI < 1 | Trabalho realizado abaixo do planeado |

**Exemplos:**

```text
SPI = 1,15

O valor do trabalho realizado supera
o valor do trabalho planeado até à data.


SPI = 1,00

O progresso está alinhado com o plano.


SPI = 0,70

O projeto realizou apenas 70% do
valor de trabalho previsto para a data.
```

### CPI vs. SPI — eficiência financeira e temporal

Embora ambos sejam índices de desempenho, respondem a questões diferentes.

| Indicador | Fórmula | Pergunta |
|---|---|---|
| CPI | EV / AC | Estamos a utilizar os recursos financeiros de forma eficiente? |
| SPI | EV / PV | Estamos a executar o volume de trabalho previsto? |

**Exemplo integrado:**

```text
BAC = €50.000

PV = €30.000
EV = €24.000
AC = €32.000
```

**Cálculo do CPI:**

```text
CPI = 24.000 / 32.000

CPI = 0,75
```

**Cálculo do SPI:**

```text
SPI = 24.000 / 30.000

SPI = 0,80
```

**Interpretação:**

- O CPI de 0,75 indica eficiência financeira desfavorável.
- O SPI de 0,80 indica que o progresso está abaixo do planeado.

O projeto enfrenta problemas nas duas dimensões.

### Análise de desempenho por quadrantes

A combinação entre CPI e SPI permite organizar diferentes situações de desempenho.

```text
                        SPI
                         ^
                         |
          ADIANTADO      |       ADIANTADO
          CUSTO ALTO     |       CUSTO FAVORÁVEL
                         |
              CPI < 1    |    CPI > 1
              SPI > 1    |    SPI > 1
                         |
-------------------------+----------------------> CPI
                         |
              CPI < 1    |    CPI > 1
              SPI < 1    |    SPI < 1
                         |
          ATRASADO       |       ATRASADO
          CUSTO ALTO     |       CUSTO FAVORÁVEL
                         |
```

Esta representação utiliza quatro combinações de indicadores:

**Quadrante 1 — CPI > 1 e SPI > 1**

Situação favorável em ambas as dimensões.

**Quadrante 2 — CPI < 1 e SPI > 1**

O projeto apresenta custos desfavoráveis, mas executou mais trabalho do que estava previsto.

Pode ocorrer quando a equipa utiliza recursos adicionais para acelerar as entregas.

**Quadrante 3 — CPI > 1 e SPI < 1**

O projeto possui desempenho financeiro favorável, mas está atrasado.

Pode indicar menor consumo de recursos acompanhado de execução mais lenta.

**Quadrante 4 — CPI < 1 e SPI < 1**

O projeto está a consumir recursos acima do orçamento do trabalho realizado e apresenta progresso inferior ao planeado.

Exige investigação prioritária.

### Indicadores percentuais de variação

Os desvios também podem ser expressos em percentagem para facilitar a comunicação.

**Variação percentual de custo:**

```text
CV% = (CV / EV) × 100
```

Como:

```text
CV = EV - AC
```

Também podemos escrever:

```text
CV% = [(EV - AC) / EV] × 100
```

**Exemplo:**

```text
EV = €10.000

AC = €12.000

CV = -€2.000

CV% = (-2.000 / 10.000) × 100

CV% = -20%
```

O custo real está 20% acima do valor orçamentado do trabalho realizado.

É importante observar que diferentes organizações podem utilizar convenções distintas para percentuais de desvio. A base de comparação deve ser explicitada nos relatórios.

**Variação percentual de cronograma:**

```text
SV% = (SV / PV) × 100
```

**Exemplo:**

```text
EV = €8.000

PV = €10.000

SV = -€2.000

SV% = (-2.000 / 10.000) × 100

SV% = -20%
```

O valor do trabalho realizado está 20% abaixo do valor planeado para a data.

### Análise de tendências (Trend Analysis)

Um indicador isolado mostra a situação do projeto num determinado momento.

A **análise de tendências** permite acompanhar a evolução do desempenho ao longo do tempo.

**Exemplo:**

| Mês | CPI | SPI |
|---|---:|---:|
| 1 | 1,05 | 0,95 |
| 2 | 0,98 | 0,90 |
| 3 | 0,90 | 0,85 |
| 4 | 0,82 | 0,78 |

Neste cenário, ambos os indicadores apresentam deterioração progressiva.

**Interpretação:**

- O projeto está a perder eficiência financeira.
- O progresso está cada vez mais distante do plano.
- As medidas corretivas anteriores podem ter sido insuficientes.
- É necessário investigar as causas antes que o desvio se torne maior.

A análise de tendências é especialmente importante porque permite identificar sinais de deterioração antes do encerramento do projeto.

### Exemplo prático — acompanhamento de um sistema CRM

Considere o desenvolvimento de um sistema CRM com orçamento de €60.000.

Após oito semanas:

```text
BAC = €60.000

PV = €30.000

EV = €24.000

AC = €27.000
```

**Passo 1 — Variação de custo**

```text
CV = EV - AC

CV = 24.000 - 27.000

CV = -€3.000
```

**Passo 2 — Variação de cronograma**

```text
SV = EV - PV

SV = 24.000 - 30.000

SV = -€6.000
```

**Passo 3 — Índice de custos**

```text
CPI = EV / AC

CPI = 24.000 / 27.000

CPI ≈ 0,89
```

**Passo 4 — Índice de cronograma**

```text
SPI = EV / PV

SPI = 24.000 / 30.000

SPI = 0,80
```

**Resumo:**

| Indicador | Resultado |
|---|---:|
| BAC | €60.000 |
| PV | €30.000 |
| EV | €24.000 |
| AC | €27.000 |
| CV | -€3.000 |
| SV | -€6.000 |
| CPI | 0,89 |
| SPI | 0,80 |

O projeto apresenta custos desfavoráveis e progresso inferior ao planeado.

Com estas informações, o gestor consegue demonstrar quantitativamente os desvios aos stakeholders, em vez de comunicar apenas que o trabalho está "um pouco atrasado".

---

## 4. Indicadores do EVA III — avançado

### Do acompanhamento à previsão de conclusão

Os indicadores básicos e intermediários mostram o desempenho do projeto até ao momento atual.

Contudo, o gestor também precisa de responder a perguntas futuras:

- Quanto custará terminar o projeto?
- O custo final ultrapassará o orçamento aprovado?
- Quanto dinheiro ainda será necessário?
- Qual eficiência financeira será exigida para cumprir o orçamento?
- É realista manter o orçamento original?
- As tendências atuais indicam necessidade de replaneamento?

Os indicadores avançados permitem utilizar os dados existentes para construir previsões e avaliar cenários.

Os principais são:

- **EAC — Estimate at Completion**.
- **ETC — Estimate to Complete**.
- **VAC — Variance at Completion**.
- **TCPI — To-Complete Performance Index**.

### EAC — Estimate at Completion

O **EAC (Estimativa na Conclusão)** representa a previsão atualizada do custo total do projeto quando todo o trabalho estiver concluído.

Diferentemente do BAC, que representa o orçamento aprovado da linha de base, o EAC considera o desempenho real e as estimativas futuras.

```text
BAC = Quanto estava previsto gastar no total?

EAC = Quanto estimamos que será gasto no total?
```

Existem diferentes fórmulas para calcular o EAC, dependendo das premissas utilizadas.

### EAC — Método 1: desempenho financeiro constante

Quando se considera que a eficiência de custos atual continuará até ao fim do projeto:

```text
       BAC
EAC = -----
       CPI
```

**Exemplo:**

```text
BAC = €100.000

CPI = 0,80

EAC = 100.000 / 0,80

EAC = €125.000
```

**Interpretação:**

Se a eficiência financeira atual persistir, o projeto poderá terminar com um custo de €125.000.

Isso representa €25.000 acima do orçamento aprovado.

**Quando usar:** quando o desempenho passado é considerado representativo do trabalho restante.

### EAC — Método 2: desvios anteriores não se repetirão

Quando se considera que os desvios passados foram pontuais e que o trabalho restante será realizado conforme o orçamento originalmente previsto:

```text
EAC = AC + (BAC - EV)
```

Onde:

- AC = Custo real acumulado.
- BAC = Orçamento total.
- EV = Valor agregado acumulado.

**Exemplo:**

```text
BAC = €100.000

EV = €40.000

AC = €50.000
```

```text
EAC = 50.000 + (100.000 - 40.000)

EAC = 50.000 + 60.000

EAC = €110.000
```

**Interpretação:**

O projeto já gastou €50.000.

O trabalho restante possui valor orçamentado de €60.000.

Se esse trabalho for realizado conforme o orçamento, o custo total esperado será €110.000.

**Quando usar:** quando os problemas anteriores foram resolvidos e se espera que o trabalho restante apresente eficiência financeira normal.

### EAC — Método 3: nova estimativa do trabalho restante

O gestor pode realizar uma nova estimativa detalhada dos custos necessários para concluir o projeto.

```text
EAC = AC + ETC
```

Neste caso, o ETC deve ser determinado por uma estimativa independente e atualizada do trabalho restante.

**Exemplo:**

```text
Custo já incorrido: €45.000

Nova estimativa para concluir: €50.000

EAC = 45.000 + 50.000

EAC = €95.000
```

Este método é especialmente útil quando:

- O escopo foi alterado.
- As condições de execução mudaram.
- A produtividade mudou significativamente.
- Os indicadores históricos deixaram de representar o trabalho futuro.

### EAC — Método 4: considerar desempenho de custo e cronograma

Em alguns modelos de previsão, considera-se que tanto o CPI quanto o SPI poderão influenciar o custo do trabalho restante.

Uma fórmula utilizada é:

```text
             BAC - EV
EAC = AC + -----------
             CPI × SPI
```

**Exemplo:**

```text
BAC = €100.000

EV = €40.000

AC = €50.000

CPI = 0,80

SPI = 0,90
```

```text
EAC = 50.000 + (100.000 - 40.000) / (0,80 × 0,90)

EAC = 50.000 + 60.000 / 0,72

EAC ≈ €133.333,33
```

A previsão sugere um custo final aproximado de €133.333,33.

**Atenção:** esta fórmula depende da premissa de que os desvios de custo e cronograma influenciam conjuntamente o trabalho restante. Não deve ser aplicada automaticamente a todos os projetos.

### Comparativo dos métodos EAC

| Método | Fórmula | Premissa |
|---|---|---|
| EAC 1 | BAC / CPI | Eficiência atual continuará |
| EAC 2 | AC + (BAC − EV) | Desvios anteriores não se repetirão |
| EAC 3 | AC + ETC | Nova estimativa do trabalho restante |
| EAC 4 | AC + (BAC − EV) / (CPI × SPI) | Custos e cronograma influenciam a previsão |

O método deve ser escolhido conforme o contexto do projeto, e não apenas pelo resultado numérico mais favorável.

### ETC — Estimate to Complete

O **ETC (Estimativa para Concluir)** representa o custo adicional esperado para finalizar todo o trabalho restante.

Quando já existe uma previsão EAC:

```text
ETC = EAC - AC
```

**Exemplo:**

```text
EAC = €125.000

AC = €50.000

ETC = 125.000 - 50.000

ETC = €75.000
```

Isso significa que ainda será necessário gastar aproximadamente €75.000 para concluir o projeto.

**Atenção:** o ETC não representa o orçamento original ainda não utilizado.

O ETC é uma previsão atualizada do custo do trabalho restante.

### ETC — Exemplo de comparação

Considere:

```text
BAC = €100.000

EV = €40.000

AC = €50.000

EAC = €125.000
```

O valor orçamentado do trabalho restante é:

```text
BAC - EV = 100.000 - 40.000

= €60.000
```

Contudo, o custo adicional estimado para completar o trabalho é:

```text
ETC = 125.000 - 50.000

ETC = €75.000
```

Existe uma diferença entre o valor orçamentado restante (€60.000) e o custo adicional previsto (€75.000).

Essa diferença reflete a expectativa de desempenho desfavorável na execução futura.

### VAC — Variance at Completion

O **VAC (Variação na Conclusão)** representa a diferença entre o orçamento originalmente aprovado e o custo total projetado.

```text
VAC = BAC - EAC
```

**Exemplo:**

```text
BAC = €100.000

EAC = €125.000

VAC = 100.000 - 125.000

VAC = -€25.000
```

O VAC negativo indica uma previsão de ultrapassagem do orçamento em €25.000.

**Interpretação:**

| VAC | Situação prevista |
|---|---|
| VAC > 0 | Conclusão abaixo do orçamento |
| VAC = 0 | Conclusão conforme o orçamento |
| VAC < 0 | Conclusão acima do orçamento |

### VAC% — Variação percentual prevista na conclusão

A variação também pode ser expressa proporcionalmente ao BAC.

```text
VAC% = (VAC / BAC) × 100
```

**Exemplo:**

```text
VAC = -€25.000

BAC = €100.000

VAC% = (-25.000 / 100.000) × 100

VAC% = -25%
```

A previsão indica que o projeto poderá custar 25% acima do orçamento original.

### TCPI — To-Complete Performance Index

O **TCPI (Índice de Desempenho para Concluir)** mede a eficiência financeira que será necessária no trabalho restante para atingir uma meta de custo.

Diferentemente do CPI, que mede o desempenho já observado, o TCPI indica o desempenho exigido daqui para a frente.

```text
CPI  = Como estamos a executar o trabalho?

TCPI = Qual eficiência precisamos alcançar
       para cumprir a meta financeira?
```

### TCPI baseado no BAC

Quando a meta é concluir o projeto dentro do orçamento original:

```text
         BAC - EV
TCPI = -----------
         BAC - AC
```

Onde:

- BAC − EV = Valor orçamentado do trabalho restante.
- BAC − AC = Orçamento ainda disponível em relação ao BAC.

**Exemplo:**

```text
BAC = €100.000

EV = €40.000

AC = €50.000
```

```text
TCPI = (100.000 - 40.000) / (100.000 - 50.000)

TCPI = 60.000 / 50.000

TCPI = 1,20
```

**Interpretação:**

Para concluir dentro do BAC, o projeto precisaria produzir €1,20 de valor orçamentado para cada €1 gasto no trabalho restante.

Se o CPI atual for 0,80, isso representa uma melhoria significativa de eficiência.

O gestor deverá avaliar se essa melhoria é tecnicamente e operacionalmente viável.

### TCPI baseado no EAC

Quando o orçamento original deixa de ser uma meta viável e se utiliza uma previsão EAC aprovada como referência:

```text
         BAC - EV
TCPI = -----------
         EAC - AC
```

**Exemplo:**

```text
BAC = €100.000

EV = €40.000

AC = €50.000

EAC = €125.000
```

```text
TCPI = (100.000 - 40.000) / (125.000 - 50.000)

TCPI = 60.000 / 75.000

TCPI = 0,80
```

Neste caso, a eficiência exigida para cumprir o EAC é 0,80.

Se o CPI atual também for 0,80, a projeção está alinhada com a manutenção do desempenho financeiro observado.

### Como interpretar o TCPI

| TCPI | Significado |
|---|---|
| TCPI > 1 | Necessária eficiência superior a 1 no trabalho restante |
| TCPI = 1 | Trabalho restante deverá ser executado conforme o orçamento |
| TCPI < 1 | Meta permite eficiência inferior a 1 |

A interpretação deve considerar também a comparação com o CPI atual.

**Exemplo:**

```text
CPI atual = 0,75

TCPI exigido = 1,25
```

A equipa teria de passar de uma eficiência de 0,75 para 1,25.

Essa mudança pode ser difícil sem:

- Revisão da estratégia de execução.
- Eliminação de desperdícios.
- Redução de retrabalho.
- Melhorias de produtividade.
- Reorganização dos recursos.

Um TCPI muito superior ao CPI atual pode indicar que a meta financeira original é pouco realista.

### Comparativo entre CPI e TCPI

| Indicador | Perspetiva | Pergunta |
|---|---|---|
| CPI | Passado e presente | Qual foi a eficiência financeira até agora? |
| TCPI | Futuro | Qual deverá ser a eficiência financeira do trabalho restante? |

A comparação entre ambos é essencial para avaliar a viabilidade de concluir o projeto dentro de um limite financeiro.

### Exemplo completo — todos os indicadores EVA

Considere um projeto de desenvolvimento de uma plataforma de gestão empresarial.

**Dados do projeto:**

```text
BAC = €120.000

PV = €72.000

EV = €60.000

AC = €75.000
```

### Passo 1 — Calcular CV

```text
CV = EV - AC

CV = 60.000 - 75.000

CV = -€15.000
```

O projeto apresenta um desvio de custo desfavorável de €15.000.

### Passo 2 — Calcular SV

```text
SV = EV - PV

SV = 60.000 - 72.000

SV = -€12.000
```

O projeto executou €12.000 a menos em valor orçamentado de trabalho do que estava previsto até à data.

### Passo 3 — Calcular CPI

```text
CPI = EV / AC

CPI = 60.000 / 75.000

CPI = 0,80
```

A eficiência financeira atual é 0,80.

### Passo 4 — Calcular SPI

```text
SPI = EV / PV

SPI = 60.000 / 72.000

SPI ≈ 0,83
```

O progresso está abaixo do planeado.

### Passo 5 — Calcular EAC

Assumindo que a eficiência financeira atual continuará:

```text
EAC = BAC / CPI

EAC = 120.000 / 0,80

EAC = €150.000
```

### Passo 6 — Calcular ETC

```text
ETC = EAC - AC

ETC = 150.000 - 75.000

ETC = €75.000
```

Ainda serão necessários aproximadamente €75.000 para concluir o trabalho.

### Passo 7 — Calcular VAC

```text
VAC = BAC - EAC

VAC = 120.000 - 150.000

VAC = -€30.000
```

A previsão indica uma ultrapassagem de €30.000 no orçamento.

### Passo 8 — Calcular TCPI com base no BAC

```text
TCPI = (BAC - EV) / (BAC - AC)

TCPI = (120.000 - 60.000) / (120.000 - 75.000)

TCPI = 60.000 / 45.000

TCPI ≈ 1,33
```

Para cumprir o orçamento original, será necessário alcançar uma eficiência de aproximadamente 1,33 no trabalho restante.

Como o CPI atual é 0,80, esta meta exigiria uma melhoria expressiva.

### Resumo completo dos indicadores

| Indicador | Fórmula | Resultado |
|---|---|---:|
| BAC | Orçamento aprovado | €120.000 |
| PV | Valor planeado | €72.000 |
| EV | Valor agregado | €60.000 |
| AC | Custo real | €75.000 |
| CV | EV − AC | -€15.000 |
| SV | EV − PV | -€12.000 |
| CPI | EV / AC | 0,80 |
| SPI | EV / PV | 0,83 |
| EAC | BAC / CPI | €150.000 |
| ETC | EAC − AC | €75.000 |
| VAC | BAC − EAC | -€30.000 |
| TCPI (BAC) | (BAC − EV) / (BAC − AC) | 1,33 |

### Como apresentar os resultados aos stakeholders

Os indicadores devem ser traduzidos em informação clara para a tomada de decisão.

**Exemplo de relatório executivo:**

```text
RELATÓRIO DE DESEMPENHO DO PROJETO

Projeto: Plataforma de Gestão Empresarial

Orçamento aprovado: €120.000
Custo real atual:   €75.000

--------------------------------------------

DESEMPENHO ATUAL

CPI: 0,80
SPI: 0,83

Situação:
- Desempenho financeiro desfavorável
- Progresso abaixo do planeado

--------------------------------------------

PREVISÃO FINANCEIRA

EAC: €150.000

VAC: -€30.000

Previsão de ultrapassagem: 25%

--------------------------------------------

EFICIÊNCIA NECESSÁRIA

TCPI para cumprir o BAC: 1,33

Eficiência atual: 0,80

--------------------------------------------

RECOMENDAÇÕES

1. Investigar causas dos desvios.
2. Revisar estimativas do trabalho restante.
3. Avaliar alternativas de recuperação.
4. Atualizar previsões financeiras.
5. Comunicar riscos ao patrocinador.
```

### Limitações da Gestão do Valor Agregado

Apesar das vantagens, a EVM possui limitações que precisam de ser compreendidas.

**1. Depende de uma linha de base confiável**

Se o escopo, o cronograma ou o orçamento estiverem incorretos, os indicadores poderão transmitir uma interpretação enganosa.

**2. O valor agregado não representa valor de negócio**

O EV mede o valor orçamentado do trabalho realizado, não o benefício económico efetivo entregue ao cliente.

Uma funcionalidade pode estar concluída e gerar EV sem necessariamente produzir benefícios de negócio imediatos.

**3. A qualidade precisa de ser avaliada separadamente**

O trabalho só deve ser reconhecido conforme os critérios de medição definidos.

Uma funcionalidade implementada com defeitos graves pode não atender aos critérios necessários para ser considerada concluída.

**4. O SPI tradicional possui limitações próximas do encerramento**

Quando todo o trabalho é concluído:

```text
EV = BAC

PV = BAC
```

Consequentemente:

```text
SPI = EV / PV

SPI = BAC / BAC

SPI = 1
```

Isso acontece mesmo que o projeto termine depois do prazo original.

Portanto, o SPI tradicional deixa de representar adequadamente o atraso temporal na conclusão.

**5. Os indicadores não explicam automaticamente as causas**

CPI e SPI mostram o que está a acontecer, mas não identificam sozinhos por que está a acontecer.

É necessário combinar a análise quantitativa com investigação técnica e comunicação com a equipa.

### Earned Schedule (ES) — extensão da EVM

O **Earned Schedule** é uma extensão da análise do valor agregado destinada a melhorar a avaliação do desempenho temporal.

Diferentemente do SV tradicional, expresso em unidades monetárias, o Earned Schedule permite calcular desvios em unidades de tempo.

Os seus principais conceitos são:

- **ES (Earned Schedule):** momento do cronograma de referência correspondente ao EV acumulado.
- **AT (Actual Time):** tempo efetivamente decorrido.
- **SV(t):** variação de cronograma em unidades de tempo.
- **SPI(t):** índice de desempenho temporal.

**Fórmulas fundamentais:**

```text
SV(t) = ES - AT
```

```text
SPI(t) = ES / AT
```

**Exemplo simplificado:**

O projeto está na semana 10.

Contudo, o valor agregado corresponde ao trabalho que estava previsto para estar concluído na semana 8.

```text
ES = 8 semanas

AT = 10 semanas

SV(t) = 8 - 10

SV(t) = -2 semanas
```

```text
SPI(t) = 8 / 10

SPI(t) = 0,80
```

O projeto apresenta um atraso equivalente a duas semanas relativamente ao cronograma de referência, segundo essa medição.

O Earned Schedule complementa a EVM tradicional e é especialmente útil para avaliar o desempenho temporal próximo do encerramento.

### Gestão do Valor Agregado em projetos ágeis

A EVM também pode ser aplicada em projetos de software que utilizam metodologias ágeis, embora exija adaptações.

Num ambiente Scrum, por exemplo, o progresso pode ser acompanhado por:

- Funcionalidades aceites.
- Histórias de utilizador concluídas.
- Incrementos entregues.
- Épicos finalizados.
- Marcos de produto.
- Burnup e burndown charts.

A principal dificuldade é que o escopo pode evoluir continuamente.

Por isso, é necessário definir uma referência consistente de medição e controlar as alterações aprovadas.

**Exemplo:**

Uma equipa Scrum possui um conjunto de funcionalidades com orçamento de referência de €40.000.

Durante o desenvolvimento, são concluídas funcionalidades cujo orçamento associado corresponde a €20.000.

```text
BAC = €40.000

EV = €20.000

AC = €22.000

CPI = 20.000 / 22.000

CPI ≈ 0,91
```

O CPI pode indicar desempenho financeiro desfavorável para o trabalho concluído, desde que o orçamento associado às funcionalidades seja definido de forma consistente.

**Atenção:** story points não representam diretamente dinheiro nem horas. Não devem ser convertidos automaticamente em valor agregado sem um modelo de medição e orçamento previamente estabelecido.

### A importância da tomada de decisão

O verdadeiro valor da EVM não está apenas no cálculo das fórmulas.

Está na capacidade de transformar dados de execução em decisões fundamentadas.

```text
DADOS DO PROJETO
       |
       v
PV, EV e AC
       |
       v
CÁLCULO DOS INDICADORES
       |
       +--> CV / SV
       +--> CPI / SPI
       +--> EAC / ETC
       +--> VAC / TCPI
       |
       v
INTERPRETAÇÃO
       |
       v
IDENTIFICAÇÃO DOS DESVIOS
       |
       v
ANÁLISE DAS CAUSAS
       |
       v
AÇÕES CORRETIVAS
       |
       v
NOVO ACOMPANHAMENTO
```

Entre as possíveis ações de gestão encontram-se:

**Rever a alocação de recursos**

Redistribuir profissionais e equipamentos para atividades prioritárias.

**Reduzir retrabalho**

Investigar defeitos, melhorar critérios de aceitação e reforçar práticas de qualidade.

**Reavaliar estimativas**

Atualizar a previsão do custo restante quando as premissas originais deixarem de ser válidas.

**Reorganizar atividades**

Rever dependências e possíveis oportunidades de paralelização.

**Avaliar mudanças formalmente**

Propor alterações de escopo, prazo ou orçamento através do processo de controlo integrado de mudanças.

**Comunicar os desvios**

Apresentar aos stakeholders a situação real, os riscos identificados e as alternativas disponíveis.

> A Gestão do Valor Agregado transforma o acompanhamento do projeto numa atividade quantitativa e orientada a decisões, permitindo agir antes que problemas financeiros e operacionais comprometam definitivamente os resultados esperados.

---

## Resumo em uma frase

> A Gestão do Valor Agregado (EVM) integra escopo, cronograma e custos através dos indicadores fundamentais PV, EV e AC, utiliza as variações CV e SV para identificar desvios, os índices CPI e SPI para medir a eficiência financeira e o progresso do trabalho, e os indicadores avançados EAC, ETC, VAC e TCPI para prever custos futuros, avaliar a viabilidade do orçamento e apoiar decisões corretivas, oferecendo ao gestor uma visão quantitativa do desempenho real do projeto e das condições necessárias para alcançar os objetivos estabelecidos.

---

## Conceitos relacionados para estudar a seguir

- **Earned Schedule (ES) em profundidade** — compreender a conversão dos indicadores de desempenho de cronograma em unidades de tempo, utilizando ES, AT, SV(t) e SPI(t) para avaliar atrasos e prever datas de conclusão.

- **Análise de Tendências e Previsões** — utilizar históricos de CPI, SPI e outros indicadores para identificar padrões de deterioração ou melhoria e desenvolver previsões mais confiáveis.

- **Indicadores de Desempenho (KPIs)** — estudar a definição, seleção e monitorização de indicadores de desempenho relacionados com custo, prazo, qualidade, produtividade e entrega de valor.

- **Dashboards de Gestão de Projetos** — construir painéis de acompanhamento utilizando Excel, Power BI ou outras ferramentas de visualização para apresentar indicadores EVM, custos acumulados e curvas de desempenho.

- **Gestão de Riscos e Contingências** — compreender como eventos incertos afetam custos e cronogramas e como os resultados da EVM podem apoiar a atualização das reservas financeiras e dos planos de resposta.

- **Controlo Integrado de Mudanças** — analisar processos de aprovação e documentação de mudanças que afetam as linhas de base de escopo, prazo e custos.

- **EVM em Metodologias Ágeis** — estudar como integrar indicadores de valor agregado com Scrum, Kanban, Product Backlog, burndown charts e acompanhamento de incrementos de software.
