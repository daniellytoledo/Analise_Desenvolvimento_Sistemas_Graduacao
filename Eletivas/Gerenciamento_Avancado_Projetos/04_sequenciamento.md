# Sequenciamento

> Este ficheiro parte dos pacotes de trabalho definidos na EAP (`03_escopo_a_estrutura.md`) e avança para o próximo nível de planeamento: transformar entregáveis em actividades, sequenciá-las correctamente, e estimar quanto tempo cada uma levará — os três passos que constroem o cronograma do projecto.

---

## 1. Introdução ao Cronograma — fundamentar o cronograma

### O que é e para que serve o cronograma

O **cronograma** é o artefacto que responde à pergunta "**quando?**" — complementando o escopo (o quê), os custos (quanto), e os recursos (quem). É a tradução da EAP em tempo: as actividades necessárias para produzir cada entregável, ordenadas logicamente, estimadas em duração, e distribuídas no calendário com datas de início e fim.

Mais do que uma lista de datas, o cronograma bem construído é um **modelo preditivo do projecto** — permite antecipar problemas, simular cenários, e responder a perguntas como "se esta actividade atrasar 3 dias, quando termina o projecto?"

### O processo de desenvolvimento do cronograma

O PMBOK® divide o desenvolvimento do cronograma em seis processos sequenciais:

```
1. Planear a Gestão do Cronograma
   → Como o cronograma será desenvolvido, monitorizado e controlado

2. Definir as Actividades
   → Decompor os pacotes de trabalho da EAP em actividades específicas
   (da EAP saem entregáveis; das actividades sai o trabalho executável)

3. Sequenciar as Actividades
   → Identificar e documentar relações lógicas entre actividades
   (o quê depende do quê)

4. Estimar a Duração das Actividades
   → Determinar o número de períodos de trabalho necessários
   para cada actividade

5. Desenvolver o Cronograma
   → Integrar sequências, durações, recursos, e restrições
   para criar o modelo de cronograma

6. Controlar o Cronograma
   → Monitorizar o estado, actualizar e gerir mudanças
   durante a execução
```

Este ficheiro foca-se nos passos 2, 3 e 4 — Definir, Sequenciar e Estimar. O desenvolvimento completo (passo 5) resulta em ferramentas como o Gantt Chart e o diagrama de rede, que serão abordados neste módulo.

### EAP vs. Actividades — a distinção fundamental

Um erro frequente é confundir os pacotes de trabalho da EAP com as actividades do cronograma.

```
EAP (pacote de trabalho):  "Wireframes mobile"
                                    │
                                    ▼ decomposição em actividades
Actividades do cronograma:
  Act. 1 — Preparar guia de estilo para wireframes (4h)
  Act. 2 — Criar wireframe tela de login (2h)
  Act. 3 — Criar wireframe tela de dashboard (3h)
  Act. 4 — Criar wireframe tela de perfil (2h)
  Act. 5 — Criar wireframe tela de notificações (2h)
  Act. 6 — Revisão interna com equipa (1h)
  Act. 7 — Apresentação ao Product Owner (1h)
  Act. 8 — Incorporar feedback (2h)
```

A EAP responde "o quê será entregue?"; as actividades respondem "o que será feito para entregar?". Esta decomposição adicional é necessária porque:
- Actividades têm durações estimáveis com mais precisão
- Actividades têm dependências entre si (sequenciamento)
- Actividades podem ser atribuídas a recursos específicos
- O progresso pode ser medido ao nível das actividades

### O cronograma como ferramenta de comunicação

Tal como a EAP, o cronograma serve múltiplas audiências com diferentes necessidades de detalhe:

| Audiência | O que precisam ver | Formato adequado |
|---|---|---|
| Patrocinador / Executivos | Marcos, fases, data de conclusão | Gantt de alto nível ou resumo de marcos |
| Clientes externos | Entregas-chave e datas de revisão | Calendário de marcos e entregáveis |
| Equipa de projecto | Actividades, dependências, responsável | Gantt detalhado ou backlog de sprints |
| Gestão de recursos | Carga de trabalho por pessoa ao longo do tempo | Histograma de recursos |
| PMO | Desempenho face ao plano | Dashboard com SPI e variâncias |

---

## 2. Diagramas de Rede — AON vs. AOA

### O que são diagramas de rede

Os **diagramas de rede** são representações visuais das relações lógicas entre as actividades de um projecto — mostram a sequência em que as actividades devem ocorrer, as suas dependências, e os caminhos possíveis desde o início até ao fim do projecto.

São a base para o cálculo do **caminho crítico** e para a identificação de actividades com folga (que podem atrasar sem impactar a data de conclusão).

Existem dois tipos principais de diagrama de rede em gestão de projectos:

### AON — Activity-on-Node (Precedence Diagramming Method)

No **AON** (actividade no nó), cada **actividade é representada por um nó** (tipicamente um rectângulo ou círculo), e as **setas representam as dependências** entre actividades — indicando a direcção do fluxo (de predecessora para sucessora).

```
AON — Exemplo simplificado:

  ┌─────┐     ┌─────┐     ┌─────┐
  │  A  │ ──▶ │  C  │ ──▶ │  E  │
  │ 3d  │     │ 4d  │     │ 2d  │
  └─────┘     └─────┘     └─────┘
     │                       ▲
     │         ┌─────┐       │
     └────────▶│  D  │───────┘
               │ 5d  │
               └─────┘
  ┌─────┐
  │  B  │ ──────────────────────▶ (para actividade F, por exemplo)
  │ 6d  │
  └─────┘
```

**Estrutura de um nó AON** (formato expandido, como usado no MS Project):

```
┌────────────────────────────────────┐
│ Início Cedo (ES)  │ Início Tarde (LS)│
├────────────────────────────────────┤
│         NOME DA ACTIVIDADE          │
│              Duração                │
├────────────────────────────────────┤
│ Fim Cedo (EF)     │ Fim Tarde (LF)  │
│                   │    Folga (TF)   │
└────────────────────────────────────┘
```

**Vantagens do AON:**
- Mais intuitivo e fácil de ler — a actividade está no nó, não na seta
- Suporta todos os tipos de dependências (FS, SS, FF, SF — ver secção 3)
- É o formato adoptado pela maioria das ferramentas modernas (MS Project, Primavera, etc.)
- Não requer actividades fictícias (*dummy activities*)

### AOA — Activity-on-Arrow (Arrow Diagramming Method)

No **AOA** (actividade na seta), cada **actividade é representada por uma seta**, e os **nós representam eventos** — pontos no tempo que marcam o início e o fim de actividades.

```
AOA — O mesmo exemplo:

       A(3d)          C(4d)
   ①─────────▶②───────────▶④
   │                        ▲
   │     B(6d)    D(5d)     │
   └──────────▶③────────────┘
                        E(2d)
                    ④─────────▶⑤
```

**Actividades fictícias (Dummy Activities)** — a principal limitação do AOA:
O AOA por vezes exige a introdução de setas sem duração (representadas a tracejado) para representar correctamente dependências que não podem ser expressas apenas com as setas de actividades reais. Estas "actividades fictícias" não representam trabalho — apenas constrangimentos lógicos.

```
   ①──── A ────▶②
   │              │
   │  (dummy) ───▶│──── C ────▶③
   │
   └──── B ────▶④
```

**Vantagens do AOA:**
- Clareza visual para projectos com muitas dependências em cadeia
- Historicamente mais usado na construção civil e engenharia
- Base original do PERT (ver secção 4)

**AOA vs. AON — comparativo:**

| Aspecto | AON (Actividade no Nó) | AOA (Actividade na Seta) |
|---|---|---|
| **Onde fica a actividade** | No nó (rectângulo) | Na seta |
| **O que o nó representa** | A actividade em si | Um evento (ponto no tempo) |
| **Actividades fictícias** | Não necessárias | Frequentemente necessárias |
| **Tipos de dependência** | Todos (FS, SS, FF, SF) | Principalmente FS |
| **Complexidade visual** | Menor para projectos complexos | Maior para projectos complexos |
| **Uso actual** | Dominante na indústria | Menos comum, ainda usado em engenharia |
| **Ferramentas** | MS Project, Primavera, todas modernas | Algumas ferramentas especializadas |

> **Na prática:** o AON é o formato padrão actual. O AOA é importante conhecer por razões históricas e porque ainda aparece em alguns contextos de engenharia e em provas de certificação (PMP, CAPM).

---

## 3. Tarefas e Seus Tipos

### Tipos de actividades no cronograma

Nem todas as actividades são iguais — o cronograma distingue diferentes tipos que têm implicações para o planeamento e a estimativa.

**Actividades de duração fixa (Fixed Duration)**
A duração é definida independentemente dos recursos atribuídos — seja por restrição externa (ex: "a cura do betão leva 7 dias independentemente de quantos trabalhadores estejam presentes") ou por constrangimento de calendário (ex: "reunião de revisão mensal — sempre na última sexta-feira").

```
Duração = constante
Trabalho = varia com os recursos atribuídos
Recursos adicionais → mais trabalho produzido no mesmo tempo
                   → mas a duração não se altera
```

**Actividades de trabalho fixo (Fixed Work)**
O esforço total (em horas-pessoa) é definido independentemente da duração — adicionar recursos reduz a duração.

```
Trabalho = constante (ex: 80 horas-pessoa)
Duração = varia com os recursos atribuídos
1 pessoa a 100% → 80h → 10 dias de trabalho (8h/dia)
2 pessoas a 100% → 80h → 5 dias de trabalho
4 pessoas a 100% → 80h → 2,5 dias de trabalho
```

> **Atenção:** a Lei de Brooks (*The Mythical Man-Month*) — famosa na engenharia de software — adverte que "adicionar pessoas a um projecto atrasado torna-o ainda mais atrasado". O paralelismo tem limites: há overhead de comunicação e coordenação, e certas actividades são inerentemente sequenciais independentemente dos recursos.

**Actividades de unidades de recurso fixas (Fixed Units)**
A percentagem de dedicação de cada recurso é fixa — se a quantidade de trabalho muda, a duração ajusta-se automaticamente.

**Marcos (Milestones)**
Pontos de referência no cronograma sem duração (duração = 0) que assinalam a conclusão de uma fase, a aprovação de um entregável, ou qualquer evento significativo. Não têm trabalho associado — existem apenas como referências temporais.

```
◆ Marco: Aprovação dos wireframes     [21/03]
◆ Marco: Início do desenvolvimento    [22/03]
◆ Marco: Entrega da versão beta       [15/04]
◆ Marco: Lançamento em produção       [30/04]
```

**Actividades-resumo (Summary Tasks)**
Agrupamentos de actividades relacionadas que, quando expandidos, mostram o detalhe das actividades filhas. A duração e o custo das actividades-resumo são calculados automaticamente como a soma das actividades filhas. Correspondem, no cronograma, aos entregáveis da EAP.

### Tipos de dependências (relações lógicas)

A relação entre actividades predecessoras e sucessoras pode ser de quatro tipos — todos suportados pelo AON:

**FS — Finish-to-Start (Fim para Início)**
A sucessora só pode começar depois que a predecessora terminar. A dependência mais comum.

```
Predecessora ──────────────┐
                           │ FS
                           └──────────────── Sucessora
```
*Exemplo:* o código só pode ser testado depois de estar escrito.

**SS — Start-to-Start (Início para Início)**
A sucessora só pode começar depois que a predecessora tiver começado. Permitem paralelismo com restrição.

```
Predecessora ────────────────────────
                  │ SS
                  └── Sucessora ─────────
```
*Exemplo:* os testes de integração podem começar quando o desenvolvimento tiver começado (não precisam que todo o desenvolvimento esteja concluído).

**FF — Finish-to-Finish (Fim para Fim)**
A sucessora só pode terminar depois que a predecessora tiver terminado.

```
Predecessora ──────────────────────┐
                                   │ FF
              Sucessora ───────────┘
```
*Exemplo:* a documentação técnica só pode ser finalizada depois que o desenvolvimento esteja finalizado (pode progredir em paralelo, mas só fecha quando o código estiver fechado).

**SF — Start-to-Finish (Início para Fim)**
A sucessora só pode terminar depois que a predecessora tiver começado. Rara — usada principalmente em Just-In-Time e sistemas de turnos.

```
                  Predecessora ───────────
Sucessora ────────┘ SF
```
*Exemplo:* o novo turno de suporte (sucessora) só termina quando o próximo turno (predecessora) começa.

### Lags e Leads

**Lag (Atraso)**
Um atraso deliberado entre o fim de uma predecessora e o início de uma sucessora — tempo de espera que não é trabalho activo.

```
Predecessora ──────────────┐
                           │── Lag (3 dias) ──┐
                                              └── Sucessora
```
*Exemplo FS + Lag:* depois de a pintura secar (predecessora), é necessário esperar 24h (lag) antes de aplicar o segundo revestimento (sucessora).

**Lead (Adiantamento)**
A sucessora começa antes que a predecessora termine — overlap entre actividades.

```
Predecessora ──────────────────────────┐
                    │← Lead (2 dias) ──┘
                    └── Sucessora ──────────
```
*Exemplo FS com Lead:* a revisão do capítulo 2 pode começar 3 dias antes de o capítulo 1 estar completamente escrito — logo que haja material suficiente para rever.

Leads e lags são representados como modificadores numéricos nas dependências:
- FS + 3d → a sucessora começa 3 dias depois que a predecessora termina (lag)
- FS - 2d → a sucessora começa 2 dias antes que a predecessora termine (lead)

---

## 4. Sequenciamento e Estimativas

### O processo de sequenciamento

Sequenciar actividades é identificar e documentar as **relações lógicas** entre elas — determinando quais podem ser feitas em paralelo e quais têm de esperar que outras terminem primeiro.

**Tipos de dependências por origem:**

*Dependências obrigatórias (hard logic)*
Inerentes à natureza do trabalho — não podem ser alteradas independentemente de preferências ou recursos. Também chamadas de lógica rígida.
```
Exemplo: não é possível testar código que ainda não foi escrito.
         Não é possível instalar electricidade antes da estrutura estar levantada.
```

*Dependências arbitrárias (soft logic)*
Baseadas em boas práticas, preferências da equipa, ou decisões de gestão — podem ser alteradas se necessário, aceitando eventualmente um risco adicional.
```
Exemplo: a equipa prefere fazer revisão de design antes de começar o desenvolvimento,
         mas tecnicamente o desenvolvimento poderia começar em paralelo com a revisão.
```

*Dependências externas*
Dependem de factores fora do controlo da equipa do projecto — aprovações regulatórias, entregas de fornecedores externos, decisões de terceiros.
```
Exemplo: o desenvolvimento da integração com o API de pagamento só pode começar
         depois de receber as credenciais e a documentação do fornecedor externo.
```

*Dependências internas*
Dependem de relações entre actividades dentro do controlo da equipa do projecto.

### O Método do Caminho Crítico (CPM — Critical Path Method)

O **CPM** foi desenvolvido em 1957 pela DuPont e Remington Rand para gestão de projectos de manutenção de fábricas. É a técnica mais usada para análise de redes de projectos e identificação do caminho crítico.

**O que é o caminho crítico:**
A sequência de actividades com a maior duração total — que determina a **duração mínima do projecto**. Qualquer atraso numa actividade do caminho crítico atrasa directamente o projecto.

**Cálculo do CPM — Forward Pass e Backward Pass:**

O CPM calcula quatro datas para cada actividade:

| Abreviatura | Nome | Significado |
|---|---|---|
| **ES** | Early Start (Início Cedo) | O mais cedo que a actividade pode começar |
| **EF** | Early Finish (Fim Cedo) | O mais cedo que a actividade pode terminar |
| **LS** | Late Start (Início Tarde) | O mais tarde que pode começar sem atrasar o projecto |
| **LF** | Late Finish (Fim Tarde) | O mais tarde que pode terminar sem atrasar o projecto |

**Forward Pass** (passe directo — da esquerda para a direita):
Calcula ES e EF de cada actividade, começando no início do projecto.

```
ES = max(EF de todas as predecessoras)
EF = ES + Duração
```

**Backward Pass** (passe inverso — da direita para a esquerda):
Calcula LS e LF de cada actividade, começando no fim do projecto.

```
LF = min(LS de todas as sucessoras)
LS = LF - Duração
```

**Folga Total (Total Float / TF):**
O tempo que uma actividade pode atrasar sem atrasar o projecto.
```
TF = LS - ES   (ou equivalente: LF - EF)
```

**Actividades críticas:** TF = 0
**Caminho crítico:** a sequência de actividades com TF = 0

**Exemplo de cálculo CPM:**

```
Actividades e durações:
A (3 dias) → C (4 dias) → E (2 dias)
A (3 dias) → D (5 dias) → E (2 dias)
B (2 dias) → D (5 dias) → E (2 dias)

Forward Pass:
A: ES=0, EF=3
B: ES=0, EF=2
C: ES=3, EF=7
D: ES=max(3,2)=3, EF=8
E: ES=max(7,8)=8, EF=10

Duração do projecto = 10 dias

Backward Pass:
E: LF=10, LS=8
D: LF=8, LS=3
C: LF=8, LS=4
A: LF=min(4,3)=3, LS=0
B: LF=3, LS=1

Folgas:
A: TF = LS-ES = 0-0 = 0  → CRÍTICO
B: TF = 1-0 = 1           → não crítico
C: TF = 4-3 = 1           → não crítico
D: TF = 3-3 = 0           → CRÍTICO
E: TF = 8-8 = 0           → CRÍTICO

Caminho Crítico: A → D → E (duração: 3+5+2 = 10 dias)
```

### Técnicas de Estimativa de Duração

Estimar duração é uma das actividades mais difíceis em gestão de projectos — as pessoas tendem sistematicamente a subestimar o tempo necessário (a "falácia do planeamento"). Existem várias técnicas, cada uma com vantagens e limitações:

**Estimativa análoga (top-down)**
Usar a duração real de projectos semelhantes no passado como base para estimar o projecto actual. Rápida e barata — mas depende de dados históricos de qualidade e assume que os projectos são suficientemente semelhantes.

```
"O projecto X, que tinha características semelhantes a este,
levou 14 semanas. Este projecto é ligeiramente mais simples,
estimamos 12 semanas."
```

*Quando usar:* fases iniciais do projecto, quando há poucos detalhes disponíveis mas há experiência com projectos semelhantes.

**Estimativa paramétrica**
Usar relações estatísticas entre variáveis históricas e outros parâmetros para calcular estimativas.

```
Fórmula genérica: Duração = Quantidade de trabalho × Produtividade

Exemplos:
  - 200 linhas de código × 2h/100 linhas = 4h de desenvolvimento
  - 15 ecrãs de design × 4h/ecrã = 60h de design
  - 500m² de escritório × 3 dias/100m² = 15 dias de instalação
```

*Quando usar:* quando há dados históricos confiáveis de produtividade e o trabalho é suficientemente uniforme para ser parametrizado.

**Estimativa de três pontos (PERT)**
O **PERT (Program Evaluation and Review Technique)** foi desenvolvido pela NASA e pela Marinha dos EUA em 1958 para o Programa Polaris — especificamente para lidar com a incerteza em projectos inovadores sem precedentes históricos claros.

A estimativa PERT usa três valores para cada actividade:

| Estimativa | Símbolo | Significado |
|---|---|---|
| **Optimista** | O (ou a) | Se tudo correr bem — o melhor cenário realista |
| **Pessimista** | P (ou b) | Se tudo correr mal — o pior cenário realista |
| **Mais provável** | M (ou m) | O cenário mais provável dado o contexto actual |

**Fórmula PERT (média ponderada):**
```
       O + 4M + P
tE = ─────────────
            6
```

O valor 4 atribuído ao "Mais Provável" reflecte que este cenário é quatro vezes mais provável do que cada um dos extremos — produzindo uma distribuição beta aproximada.

**Desvio padrão da estimativa:**
```
     P - O
σ = ───────
       6
```

**Exemplo:**
```
Actividade: "Desenvolver módulo de relatórios"

O (Optimista):    6 dias  (tudo corre bem, sem bugs surpresa)
M (Mais provável): 10 dias (cenário normal com alguns ajustes)
P (Pessimista):   20 dias  (integrações problemáticas, refactoring necessário)

tE = (6 + 4×10 + 20) / 6 = (6 + 40 + 20) / 6 = 66 / 6 = 11 dias

σ  = (20 - 6) / 6 = 14 / 6 ≈ 2,3 dias
```

O resultado é uma estimativa de 11 dias com desvio padrão de 2,3 dias — mais informativo do que apenas "10 dias" porque comunica também a incerteza associada.

**Estimativa bottom-up**
Decompor o trabalho no máximo detalhe possível, estimar cada componente individualmente, e somar para obter a estimativa total. É a técnica mais precisa — e a mais demorada.

```
Estimativa bottom-up — Módulo de relatórios:
  1. Análise de requisitos de relatórios:  8h
  2. Design da estrutura de dados:         4h
  3. Query SQL principal:                  6h
  4. Backend API de relatórios:           12h
  5. Frontend componente gráfico:         16h
  6. Frontend componente tabela:          10h
  7. Testes unitários:                     8h
  8. Testes de integração:                 6h
  9. Documentação:                         4h
  TOTAL:                                  74h ≈ 9,25 dias
```

*Quando usar:* para actividades de alta incerteza ou de grande valor, quando a precisão justifica o tempo investido na estimativa.

**Planning Poker (Scrum / Ágil)**
Técnica colaborativa usada em ambientes ágeis para estimar histórias de utilizador em pontos de história (*story points*) — uma unidade relativa de esforço, não de tempo. Cada membro da equipa escolhe uma carta com a sua estimativa simultaneamente (para evitar âncora/groupthink), depois discutem as divergências e convergem para um consenso.

```
Sequência de cartas típica (baseada em Fibonacci):
0 — 1 — 2 — 3 — 5 — 8 — 13 — 21 — 40 — 100 — ∞ — ?

A progressão não-linear reflecte que estimativas de trabalho
maior têm inerentemente maior incerteza.
```

### Comparativo das técnicas de estimativa

| Técnica | Precisão | Velocidade | Requisitos | Melhor para |
|---|---|---|---|---|
| **Análoga** | Baixa | Alta | Dados históricos + projectos similares | Fase inicial, orçamentação rápida |
| **Paramétrica** | Média-Alta | Média | Dados históricos + trabalho parametrizável | Actividades repetitivas e mensuráveis |
| **PERT (3 pontos)** | Média | Média | Experiência para estimar O, M, P | Actividades com incerteza significativa |
| **Bottom-up** | Alta | Baixa | EAP detalhada + equipa experiente | Actividades críticas, projectos complexos |
| **Planning Poker** | Média | Alta | Equipa calibrada com pontos relativos | Contextos ágeis, sprints |

---

## Resumo em uma frase

> O sequenciamento transforma a EAP em cronograma ao decompor entregáveis em actividades, representar as suas dependências em diagramas de rede (preferencialmente AON, que suporta todos os tipos de relações FS, SS, FF, SF com lags e leads), calcular o caminho crítico pelo método CPM (identificando as actividades com folga zero), e estimar durações com a técnica mais adequada à situação — análoga para velocidade, paramétrica para repetibilidade, PERT para incerteza, e bottom-up para precisão máxima.

---

## Conceitos relacionados para estudar a seguir

- **Compressão de cronograma** — técnicas de *crashing* (adicionar recursos ao caminho crítico) e *fast-tracking* (paralelizar actividades sequenciais) para reduzir a duração do projecto quando o prazo é ameaçado
- **Nivelamento e optimização de recursos** — como ajustar o cronograma para resolver conflitos de recursos (a mesma pessoa atribuída a duas actividades paralelas) sem necessariamente alargar o prazo
- **Earned Value Management (EVM)** — como usar as datas planeadas do cronograma como base para medir o desempenho real durante a execução (SPI — Schedule Performance Index)
- **Gestão ágil do cronograma** — como o velocity, os burndown charts, e o sprint planning substituem (parcialmente) o CPM em contextos ágeis
- **Monte Carlo em estimativas de projecto** — simulação estatística que corre milhares de cenários combinando as estimativas PERT de cada actividade para produzir distribuições de probabilidade para a data de conclusão do projecto