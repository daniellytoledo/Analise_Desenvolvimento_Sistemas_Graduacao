# Cronograma

> Este ficheiro aprofunda as técnicas de desenvolvimento do cronograma introduzidas em `04_sequenciamento.md`, com foco no cálculo detalhado do CPM, na aplicação completa do PERT, e nos métodos de compressão para ajustar o cronograma quando o prazo está em risco.

---

## 1. CPM Introdutório — fundamentos do método do caminho crítico

### Contexto histórico e propósito

O **CPM (Critical Path Method — Método do Caminho Crítico)** foi desenvolvido em 1957 numa parceria entre a DuPont e a Remington Rand, com o objectivo de optimizar o planeamento de projectos de manutenção de fábricas químicas. O problema era concreto: como reduzir o tempo de paragem das fábricas para manutenção sem comprometer a qualidade ou a segurança?

A resposta foi um método matemático que, dado um conjunto de actividades com durações conhecidas e dependências definidas, calcula:
1. A **duração mínima** do projecto
2. Quais as actividades que, se atrasarem, atrasam o projecto (caminho crítico)
3. Quais as actividades que têm margem de atraso sem impactar o prazo final (folga)

O CPM pressupõe que as durações são **determinísticas** — conhecidas com certeza. Esta é a sua principal diferença face ao PERT (ver secção 3), que trabalha com durações probabilísticas.

### Os conceitos fundamentais

**Caminho crítico**
A sequência de actividades ligadas por dependências que tem a **maior duração total** — e que, por isso, determina a duração mínima do projecto. Uma rede pode ter mais do que um caminho crítico (quando dois ou mais caminhos têm a mesma duração máxima).

**Folga total (Total Float — TF)**
O tempo que uma actividade pode atrasar sem impactar a **data de conclusão do projecto**. Actividades no caminho crítico têm TF = 0.

**Folga livre (Free Float — FF)**
O tempo que uma actividade pode atrasar sem impactar o **início cedo das suas sucessoras imediatas**. A folga livre é sempre ≤ folga total.

**Folga do projecto**
Quando o projecto tem uma data imposta (deadline externo) posterior à data calculada pelo CPM, a diferença é a folga do projecto — margem total disponível antes de a data imposta ser comprometida.

### As quatro datas de cada actividade

Para cada actividade, o CPM calcula quatro datas:

```
┌─────────────────────────────────────────────────┐
│  ES (Early Start)   │   LS (Late Start)          │
│  Início Cedo        │   Início Tarde              │
├─────────────────────────────────────────────────┤
│         NOME DA ACTIVIDADE / DURAÇÃO             │
├─────────────────────────────────────────────────┤
│  EF (Early Finish)  │   LF (Late Finish)          │
│  Fim Cedo           │   Fim Tarde                 │
│                     │   TF = LS - ES              │
└─────────────────────────────────────────────────┘
```

| Sigla | Nome | Definição |
|---|---|---|
| **ES** | Early Start (Início Cedo) | O mais cedo que a actividade pode começar, respeitando as predecessoras |
| **EF** | Early Finish (Fim Cedo) | O mais cedo que a actividade pode terminar: ES + Duração |
| **LS** | Late Start (Início Tarde) | O mais tarde que pode começar sem atrasar o projecto |
| **LF** | Late Finish (Fim Tarde) | O mais tarde que pode terminar sem atrasar o projecto |
| **TF** | Total Float (Folga Total) | LS − ES (ou LF − EF) |
| **FF** | Free Float (Folga Livre) | ES(sucessora) − EF(actividade) |

### Condições de fronteira

- **Início do projecto**: ES = 0 (ou = 1, dependendo da convenção — o importante é ser consistente)
- **Fim do projecto**: LF da(s) última(s) actividade(s) = EF da(s) última(s) actividade(s) (sem folga no fim)

---

## 2. CPM Cálculos — calcular o caminho crítico

### O algoritmo em dois passos

O CPM calcula-se em dois passos sequenciais, percorrendo a rede em sentidos opostos:

**Passo 1 — Forward Pass (Passe Directo)**
Percorre a rede da esquerda para a direita, calculando ES e EF de cada actividade.

```
Regras do Forward Pass:
  ES(primeira actividade) = 0
  EF = ES + Duração
  ES(actividade) = max(EF de todas as predecessoras directas)
```

**Passo 2 — Backward Pass (Passe Inverso)**
Percorre a rede da direita para a esquerda, calculando LF e LS de cada actividade.

```
Regras do Backward Pass:
  LF(última actividade) = EF(última actividade)  [sem folga no fim]
  LS = LF − Duração
  LF(actividade) = min(LS de todas as sucessoras directas)
```

### Exemplo completo de cálculo CPM

**Dados do projecto:**

| Actividade | Duração | Predecessoras |
|---|---|---|
| A | 4 dias | — (início) |
| B | 3 dias | — (início) |
| C | 5 dias | A |
| D | 2 dias | A, B |
| E | 6 dias | C |
| F | 4 dias | D |
| G | 3 dias | E, F (fim) |

**Diagrama da rede (AON):**

```
         ┌─────────────────────────────┐
         │                             │
┌────┐   ├──▶ [A,4] ──▶ [C,5] ──▶ [E,6] ──┐
│    │   │                                  ├──▶ [G,3]
│INIT│───┤                                  │
│    │   │                                  │
└────┘   ├──▶ [B,3] ──▶ [D,2] ──▶ [F,4] ──┘
         │         ▲
         │         │
         └─────────┘ (D depende de A e B)
```

**Passo 1 — Forward Pass:**

```
A: ES=0,  EF=0+4=4
B: ES=0,  EF=0+3=3
C: ES=4,  EF=4+5=9      (depende de A: ES=EF(A)=4)
D: ES=4,  EF=4+2=6      (depende de A e B: ES=max(EF(A),EF(B))=max(4,3)=4)
E: ES=9,  EF=9+6=15     (depende de C: ES=EF(C)=9)
F: ES=6,  EF=6+4=10     (depende de D: ES=EF(D)=6)
G: ES=15, EF=15+3=18    (depende de E e F: ES=max(EF(E),EF(F))=max(15,10)=15)

Duração do projecto = 18 dias
```

**Passo 2 — Backward Pass:**

```
G: LF=18, LS=18-3=15
E: LF=15, LS=15-6=9     (única sucessora: G, LS(G)=15)
F: LF=15, LS=15-4=11    (única sucessora: G, LS(G)=15)
C: LF=9,  LS=9-5=4      (única sucessora: E, LS(E)=9)
D: LF=11, LS=11-2=9     (única sucessora: F, LS(F)=11)
A: LF=4,  LS=4-4=0      (sucessoras: C e D; LF=min(LS(C),LS(D))=min(4,9)=4)
B: LF=9,  LS=9-3=6      (única sucessora: D, LS(D)=9)
```

**Calcular folgas:**

| Act. | ES | EF | LS | LF | TF=LS-ES | FF | Crítica? |
|---|---|---|---|---|---|---|---|
| A | 0 | 4 | 0 | 4 | **0** | 0 | ✅ SIM |
| B | 0 | 3 | 6 | 9 | 6 | 1 | ❌ não |
| C | 4 | 9 | 4 | 9 | **0** | 0 | ✅ SIM |
| D | 4 | 6 | 9 | 11 | 5 | 4 | ❌ não |
| E | 9 | 15 | 9 | 15 | **0** | 0 | ✅ SIM |
| F | 6 | 10 | 11 | 15 | 5 | 5 | ❌ não |
| G | 15 | 18 | 15 | 18 | **0** | 0 | ✅ SIM |

> **Folga Livre de B:** FF = ES(D) − EF(B) = 4 − 3 = 1 dia
> **Folga Livre de D:** FF = ES(F) − EF(D) = 6 − 6 = 0... mas LS(D)=9 e ES(D)=4, logo TF=5
> (D pode atrasar até 5 dias no total, mas apenas 0 dias antes de atrasar F)

**Caminho crítico: A → C → E → G**
**Duração do projecto: 18 dias**

**Verificação visual:**

```
Caminho 1: A(4) → C(5) → E(6) → G(3) = 18 dias ← CRÍTICO
Caminho 2: A(4) → D(2) → F(4) → G(3) = 13 dias
Caminho 3: B(3) → D(2) → F(4) → G(3) = 12 dias
```

O caminho crítico é o mais longo — confirma-se: 18 dias.

### O que fazer com o caminho crítico

**Monitorização prioritária**
As actividades críticas merecem atenção redobrada — qualquer atraso impacta directamente o projecto. Em reuniões de acompanhamento, o PM deve verificar o estado das actividades críticas em primeiro lugar.

**Gestão de recursos**
Se houver conflito de recursos entre uma actividade crítica e uma não-crítica, a crítica tem prioridade — a não-crítica tem folga para absorver o atraso.

**Reanálise dinâmica**
O caminho crítico não é estático. À medida que o projecto avança e os progressos reais diferem dos planeados, o caminho crítico pode mudar — uma actividade que tinha folga pode tornar-se crítica se atrasar o suficiente. Recalcular regularmente é boa prática.

---

## 3. PERT — técnica de avaliação e revisão de programa

### Contexto e diferença face ao CPM

O **PERT (Program Evaluation and Review Technique)** foi desenvolvido em 1958 pela Marinha dos EUA, com o apoio da Booz Allen Hamilton, para o **Programa Polaris** — o projecto de desenvolvimento de mísseis balísticos lançados de submarinos. O desafio era gerir um projecto de enorme complexidade tecnológica, sem precedentes históricos claros, onde as durações das actividades eram altamente incertas.

A diferença fundamental face ao CPM:

| | CPM | PERT |
|---|---|---|
| **Duração das actividades** | Determinística (um único valor) | Probabilística (três estimativas) |
| **Origem** | Indústria química / manutenção (1957) | Projecto militar / inovação (1958) |
| **Melhor para** | Projectos com experiência histórica | Projectos inovadores com alta incerteza |
| **Resultado** | Data de conclusão determinística | Distribuição de probabilidade da data |

Na prática moderna, o PERT é frequentemente usado como **técnica de estimativa** (as três estimativas por actividade) combinado com a **rede CPM** para o cálculo do caminho crítico — dando origem ao que se chama de "PERT/CPM".

### A estimativa de três pontos (revisão)

Já introduzida em `04_sequenciamento.md`, a estimativa PERT usa:

| Estimativa | Símbolo | Descrição |
|---|---|---|
| **Optimista** | *a* (ou O) | Melhor cenário realista — se tudo correr bem |
| **Pessimista** | *b* (ou P) | Pior cenário realista — se tudo correr mal |
| **Mais provável** | *m* (ou M) | O cenário mais provável dado o contexto actual |

**Duração esperada (Expected Time — tE):**
```
       a + 4m + b
tE = ─────────────
            6
```

**Desvio padrão da actividade (σ):**
```
     b - a
σ = ───────
       6
```

**Variância da actividade (σ²):**
```
          (b - a)²
σ² = ─────────────────
              36
```

### Cálculo da variância e desvio padrão do projecto

O grande valor do PERT está na capacidade de calcular não só a duração esperada do projecto, mas também a **incerteza** dessa estimativa.

O desvio padrão do projecto é calculado **apenas para as actividades do caminho crítico** (as actividades não-críticas têm folga e, portanto, contribuem menos para a incerteza do prazo):

```
σ²(projecto) = Σ σ²(actividades críticas)

σ(projecto) = √ σ²(projecto)
```

### Exemplo completo de cálculo PERT

**Projecto com 5 actividades no caminho crítico:**

| Act. | a (Opt.) | m (Prov.) | b (Pess.) | tE | σ | σ² |
|---|---|---|---|---|---|---|
| A | 2 | 4 | 6 | (2+16+6)/6 = **4,00** | (6-2)/6 = **0,67** | **0,44** |
| B | 3 | 6 | 9 | (3+24+9)/6 = **6,00** | (9-3)/6 = **1,00** | **1,00** |
| C | 1 | 3 | 11 | (1+12+11)/6 = **4,00** | (11-1)/6 = **1,67** | **2,78** |
| D | 4 | 7 | 10 | (4+28+10)/6 = **7,00** | (10-4)/6 = **1,00** | **1,00** |
| E | 2 | 5 | 14 | (2+20+14)/6 = **6,00** | (14-2)/6 = **2,00** | **4,00** |

**Duração esperada do projecto (caminho crítico A→B→C→D→E):**
```
tE(projecto) = 4 + 6 + 4 + 7 + 6 = 27 dias
```

**Variância e desvio padrão do projecto:**
```
σ²(projecto) = 0,44 + 1,00 + 2,78 + 1,00 + 4,00 = 9,22

σ(projecto) = √9,22 ≈ 3,04 dias
```

### Probabilidade de cumprir uma data — distribuição normal

Pelo **Teorema do Limite Central**, a duração do projecto (soma das durações de muitas actividades independentes) aproxima-se de uma **distribuição normal**, com:
- Média = tE(projecto)
- Desvio padrão = σ(projecto)

Isso permite calcular a probabilidade de completar o projecto até uma data específica usando a **distribuição normal padronizada (Z)**:

```
     Td - tE(projecto)
Z = ─────────────────────
         σ(projecto)
```

Onde **Td** é a data-alvo (deadline) em dias.

**Continuando o exemplo:**

**Pergunta 1:** Qual a probabilidade de concluir em 27 dias (= a duração esperada)?
```
Z = (27 - 27) / 3,04 = 0 / 3,04 = 0

P(Z ≤ 0) = 50%
```
A probabilidade de concluir na duração esperada é exactamente 50% — faz sentido, já que a duração esperada é a média da distribuição.

**Pergunta 2:** Qual a probabilidade de concluir em 30 dias?
```
Z = (30 - 27) / 3,04 = 3 / 3,04 ≈ 0,99

P(Z ≤ 0,99) ≈ 83,9%
```

**Pergunta 3:** Qual a probabilidade de concluir em 24 dias (antes do esperado)?
```
Z = (24 - 27) / 3,04 = -3 / 3,04 ≈ -0,99

P(Z ≤ -0,99) ≈ 16,1%
```

**Pergunta 4:** Para que data posso comprometer-me com 90% de confiança?
```
P = 90% → Z = 1,28 (da tabela normal)

Td = tE + Z × σ = 27 + 1,28 × 3,04 = 27 + 3,9 ≈ 31 dias
```

**Tabela de referência Z mais usada:**

| Confiança | Z | Interpretação |
|---|---|---|
| 50% | 0,00 | A duração esperada (tE) |
| 68% | 1,00 | tE ± 1σ |
| 84% | 1,00 (unilateral) | tE + 1σ |
| 90% | 1,28 | Compromisso conservador |
| 95% | 1,65 | Compromisso muito conservador |
| 99% | 2,33 | Praticamente garantido |

### O valor prático do PERT nas negociações de prazo

O PERT transforma as negociações de prazo de "achismos" em conversas baseadas em probabilidade:

```
Gestor de Projecto: "A duração esperada é 27 dias.
                    Com 90% de confiança, comprometemo-nos com 31 dias.
                    Se precisar de 25 dias, a probabilidade de conseguir
                    é de apenas 25% — o risco é elevado."

Patrocinador: "Que nível de confiança tem com 29 dias?"

GP: Z = (29-27)/3,04 = 0,66 → P ≈ 75%

GP: "75% de probabilidade de cumprir 29 dias."
```

Este tipo de transparência permite que o patrocinador tome decisões informadas — aceitando o risco ou alocando mais recursos para comprimir o cronograma.

---

## 4. Método de Compressão — ajustar sob demanda

### Por que comprimir o cronograma

Situações em que a compressão é necessária:
- O caminho crítico calculado supera o prazo imposto (deadline externo)
- Uma fase atrasou e o prazo final precisa de ser recuperado
- O cliente pediu antecipação da entrega
- Um risco materializou-se e o plano precisa de ser reposto

Existem dois métodos principais de compressão de cronograma — cada um com características, custos, e riscos diferentes.

### Método 1 — Crashing (Compressão por Recursos)

**O que é:**
Adicionar recursos (mão de obra, equipamento, trabalho em horas extra) a actividades do caminho crítico para reduzir a sua duração — ao custo de maior despesa.

**Princípio:**
```
Mais recursos → Mais trabalho em paralelo → Menos duração
(mas com custo adicional)
```

**Como aplicar o Crashing de forma óptima:**

O Crashing deve ser aplicado de forma **incremental e estratégica** — sempre começando pelas actividades com menor custo por dia ganho:

```
Procedimento de Crashing óptimo:
1. Identificar todas as actividades no caminho crítico
2. Para cada actividade crítica, calcular o custo de crash por dia:
   Custo/dia = (Custo crash - Custo normal) / (Duração normal - Duração mínima)
3. Seleccionar a actividade crítica com MENOR custo por dia
4. Comprimir essa actividade até ao máximo possível (ou até atingir o prazo)
5. Recalcular o caminho crítico (pode ter mudado!)
6. Repetir até atingir o prazo desejado ou esgotar as opções

```

**Exemplo de Crashing:**

| Act. Crítica | Duração Normal | Duração Mínima | Custo Normal | Custo Crash | Custo/dia |
|---|---|---|---|---|---|
| A | 4 dias | 2 dias | €4.000 | €6.000 | (6k-4k)/(4-2) = **€1.000/dia** |
| C | 5 dias | 3 dias | €7.500 | €9.500 | (9.5k-7.5k)/(5-3) = **€1.000/dia** |
| E | 6 dias | 4 dias | €9.000 | €13.000 | (13k-9k)/(6-4) = **€2.000/dia** |
| G | 3 dias | 2 dias | €3.000 | €4.500 | (4.5k-3k)/(3-2) = **€1.500/dia** |

Caminho crítico original: A→C→E→G = 18 dias. Pretende-se atingir 15 dias (reduzir 3 dias).

```
Passo 1: Menor custo/dia = A e C (empatados a €1.000/dia)
         Comprimir A em 1 dia: duração A = 3, projecto = 17 dias (+€1.000)
         Caminho crítico: A→C→E→G = 17 dias ✓

Passo 2: Menor custo/dia ainda: C (€1.000/dia) e A (ainda pode 1 dia mais)
         Comprimir C em 1 dia: duração C = 4, projecto = 16 dias (+€1.000)

Passo 3: Menor custo/dia disponível: A (1 dia restante, €1.000) ou G (€1.500)
         Comprimir A em mais 1 dia: duração A = 2 (mínimo), projecto = 15 dias (+€1.000)

Custo total do crashing: €1.000 + €1.000 + €1.000 = €3.000
Duração final: 15 dias ✓
```

**Limitações do Crashing:**
- **Lei dos rendimentos decrescentes**: adicionar recursos tem um limite — dez pessoas a fazer o trabalho de uma não o fazem dez vezes mais depressa (Lei de Brooks)
- **Custo exponencial**: quanto mais se comprime, mais caro fica cada dia ganho
- **Risco de qualidade**: mais recursos mal coordenados podem introduzir erros
- **Duração mínima (crash point)**: existe uma duração mínima absoluta abaixo da qual não é possível ir, independentemente dos recursos

```
Curva de custo vs. duração (Crashing):

Custo
  ↑
  │                      ● Ponto de crash (duração mínima)
  │                   ●
  │                ●
  │            ●
  │        ●
  │    ●  ← Ponto de custo normal
  └───────────────────────────────────→ Duração
      mín.              normal
```

### Método 2 — Fast Tracking (Paralelização)

**O que é:**
Realizar em paralelo actividades que, no plano original, estavam sequenciais — sobrepoondo fases ou actividades para reduzir o prazo total sem necessariamente aumentar custos.

**Princípio:**
```
Actividades sequenciais → Actividades sobrepostas (com dependência SS ou FS com lead)
→ Menor duração total (mas com maior risco)
```

**Exemplo visual:**

```
Plano original (sequencial):
Design  ├──────────────────┤
                           Desenvolvimento  ├──────────────────┤
                                                                Testes  ├──────┤
Total: 18 semanas

Após Fast Tracking:
Design  ├──────────────────┤
                 Desenvolvimento  ├──────────────────┤
                                           Testes  ├──────┤
Total: 14 semanas (redução de 4 semanas)
```

No fast tracking, o desenvolvimento começa antes de o design estar 100% concluído — o que exige que as decisões de design relativas às primeiras funcionalidades estejam tomadas antes de o design global estar fechado.

**Tipos de fast tracking:**

*Sobreposição com lead (o mais comum):*
```
Design (FS - 3 semanas) → Desenvolvimento começa 3 semanas antes de Design terminar
```

*Mudança para dependência SS:*
```
Em vez de: Design TERMINA → Desenvolvimento COMEÇA
Passar para: Design COMEÇA → Desenvolvimento COMEÇA (após X semanas)
```

**Limitações e riscos do Fast Tracking:**
- **Retrabalho**: se o design da parte já desenvolvida for alterado, o desenvolvimento feito tem de ser refeito
- **Coordenação intensiva**: mais comunicação entre equipas que trabalham em paralelo
- **Risco de qualidade**: maior probabilidade de interfaces mal especificadas entre componentes desenvolvidos em paralelo
- **Não funciona em todas as actividades**: fast tracking só é possível em actividades que têm alguma independência interna — não é possível paralelizar actividades com dependência rígida (hard logic)

### Crashing vs. Fast Tracking — quando usar cada um

| Critério | Crashing | Fast Tracking |
|---|---|---|
| **Impacto no custo** | Aumenta (sempre) | Pode não aumentar (mas pode aumentar via retrabalho) |
| **Impacto no risco** | Baixo (mais previsível) | Alto (mais incerto) |
| **Dependência da natureza do trabalho** | Funciona quando trabalho é paralelizável por recursos | Funciona quando partes do trabalho têm independência |
| **Velocidade de impacto** | Imediato (mais recursos = mais velocidade) | Depende do ritmo de progresso das actividades sobrepostas |
| **Quando preferir** | Quando o risco de retrabalho é alto | Quando o orçamento é limitado mas o risco é aceitável |

### A curva de trade-off custo-tempo

A análise de compressão pode ser representada graficamente para apoiar a decisão de quanto comprimir:

```
Custo Total do Projecto
         ↑
         │  ┌─────────────────────── Custo de crash (cresce com compressão)
         │  │
Custo    │  │         Ponto óptimo
total    │──┼──────────────────●
         │  │              ●       ●
         │  │          ●               ●── Custo directo + indirecto
         │  │      ●
         │──┼──────────────────────────── Custo indirecto (overhead por dia)
         │
         └──────────────────────────────→ Duração do projecto
              mín.    óptimo    normal
```

O **ponto óptimo** é onde a soma de custos directos (que sobem com a compressão) e indirectos (overhead diário que desce com a redução do prazo) é mínima.

### Reservas de contingência — outra forma de gerir o prazo

Além da compressão, o gestor de projecto pode proteger o cronograma com **reservas de tempo (buffers)**:

**Reserva de contingência (schedule contingency)**
Tempo adicional adicionado ao plano para lidar com riscos identificados — calculada com base na análise de riscos (por exemplo, usando a variância PERT das actividades de risco).

**Reserva de gestão (management reserve)**
Tempo adicional para eventos desconhecidos e imprevistos — mantida pelo patrocinador ou pelo PMO, não pelo PM.

**Buffer de projecto (Critical Chain)**
No método da **Corrente Crítica** (Critical Chain Project Management, de Goldratt), as reservas individuais de cada actividade são removidas e concentradas num único buffer no final do caminho crítico — tornando o projecto mais eficiente e o buffer mais visível.

---

## Resumo em uma frase

> O cronograma é desenvolvido pelo CPM — que, através do Forward Pass (ES e EF) e do Backward Pass (LS e LF), identifica o caminho crítico e a folga de cada actividade — complementado pelo PERT quando há incerteza nas durações, que acrescenta a dimensão probabilística através das estimativas optimista, mais provável e pessimista, permitindo calcular a probabilidade de cumprir qualquer prazo, e ajustado quando necessário por Crashing (mais recursos, maior custo, menor risco) ou Fast Tracking (paralelização, menor custo potencial, maior risco), sempre priorizando as actividades críticas e avaliando o trade-off entre tempo, custo e risco.

---

## Conceitos relacionados para estudar a seguir

- **Critical Chain Project Management (CCPM)** — a metodologia de Eliyahu Goldratt que reformula o CPM incorporando a psicologia humana das estimativas (lei de Parkinson, síndrome do estudante) e usando buffers concentrados em vez de margens distribuídas
- **Earned Value Management (EVM) no cronograma** — como usar o cronograma como baseline para calcular o SPI (Schedule Performance Index) e o SV (Schedule Variance) durante a execução
- **Resource levelling e resource smoothing** — técnicas para resolver conflitos de recursos no cronograma sem (smoothing) ou com (levelling) impacto no caminho crítico
- **Simulação Monte Carlo** — método estatístico que corre milhares de cenários combinando as distribuições PERT de cada actividade para produzir uma curva S de probabilidade para a data de conclusão do projecto
- **Gantt Chart detalhado** — como transpor o cronograma CPM/PERT para um gráfico de barras horizontal com as dependências, milestones, e caminho crítico destacado visualmente