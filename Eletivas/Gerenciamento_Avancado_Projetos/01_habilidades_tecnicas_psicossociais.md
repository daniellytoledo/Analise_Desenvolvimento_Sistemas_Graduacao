# Habilidades Técnicas e Psicossociais

---

## 1. Outras Metodologias de Gestão de Projetos

O **PMBOK®** não é a única — nem sempre a melhor — abordagem para gerir projectos. O ecossistema de metodologias cresceu significativamente nas últimas décadas, especialmente com o surgimento das abordagens ágeis na área de software. Conhecer o leque disponível e saber escolher a mais adequada para cada contexto é uma das competências mais valiosas de um gestor de projectos moderno.

### Waterfall (Cascata)

O modelo **Waterfall** é a abordagem preditiva clássica — o projecto flui de uma fase para a seguinte de forma sequencial e linear, como uma cascata, sem retorno às fases anteriores.

```
REQUISITOS → DESIGN → IMPLEMENTAÇÃO → TESTES → MANUTENÇÃO
     ↓            ↓           ↓            ↓           ↓
  (100%)      (100%)      (100%)       (100%)      (100%)
  concluído  concluído   concluído   concluído
  antes de   antes de    antes de    antes de
  avançar    avançar     avançar     avançar
```

**Características:**
- Toda a planificação acontece no início — o escopo é definido e congelado antes de qualquer implementação
- Fácil de gerir e documentar — cada fase tem entradas, saídas e critérios de aceitação claros
- Mudanças de requisitos no meio do projecto são caras e difíceis de absorver

**Quando usar:** projectos com requisitos estáveis e bem definidos desde o início, onde o custo de mudança é muito elevado — construção civil, engenharia aeronáutica, projectos farmacêuticos com regulação rígida.

**Quando evitar:** projectos com alta incerteza de requisitos, onde o cliente não sabe exactamente o que quer até ver uma versão funcional — a maioria dos projectos de software moderno.

### Agile (Ágil)

**Agile** não é uma metodologia específica, mas um **conjunto de valores e princípios** estabelecidos no [Manifesto Ágil](https://agilemanifesto.org) (2001), assinado por 17 líderes da indústria de software. Os quatro valores centrais:

```
Indivíduos e interações   MAIS QUE   processos e ferramentas
Software funcionando       MAIS QUE   documentação abrangente
Colaboração com o cliente  MAIS QUE   negociação de contratos
Responder a mudanças       MAIS QUE   seguir um plano
```

"*Ou seja, embora haja valor nos itens à direita, valorizamos mais os itens à esquerda.*"

Agile é o guarda-chuva sob o qual vivem as metodologias Scrum, Kanban, XP, e outras. O que todas partilham é a ênfase em **ciclos curtos de entrega, feedback contínuo, e adaptação a mudanças**.

### Scrum

O **Scrum** é o framework ágil mais adoptado no mundo — estrutura o trabalho em ciclos fixos chamados **Sprints** (tipicamente 1–4 semanas), com cerimónias, papéis e artefactos bem definidos.

**Papéis:**
- **Product Owner (PO)**: representa o negócio, define e prioriza o Product Backlog
- **Scrum Master**: garante que o processo é seguido, remove impedimentos, facilita cerimónias
- **Dev Team**: equipa multidisciplinar que executa o trabalho dentro dos sprints

**Artefactos:**
- **Product Backlog**: lista priorizada de tudo que o produto precisa (histórias de usuário, bugs, melhorias)
- **Sprint Backlog**: subconjunto do Product Backlog seleccionado para o sprint actual
- **Incremento**: o produto potencialmente entregável ao fim de cada sprint

**Cerimónias:**
```
Sprint Planning     → O que faremos neste sprint?
Daily Scrum         → O que fiz ontem? O que farei hoje? Há impedimentos?
Sprint Review       → Demonstração do que foi entregue ao PO e stakeholders
Sprint Retrospective → Como melhoramos o nosso processo?
```

**Quando usar:** equipas de produto digital com requisitos que evoluem, onde entrega frequente e feedback de utilizadores são essenciais.

### Kanban

O **Kanban** (palavra japonesa para "cartão visual") originou-se no sistema de produção da Toyota nos anos 1940 e foi adaptado para o trabalho do conhecimento por David Anderson nos anos 2000.

Ao contrário do Scrum, o Kanban não tem sprints, papéis fixos, nem cerimónias obrigatórias. O seu núcleo é a **visualização do fluxo de trabalho** num quadro com colunas e **limites de WIP (Work In Progress)**.

```
┌──────────┬──────────┬──────────┬──────────┐
│ A FAZER  │ EM CURSO │  REVIEW  │  PRONTO  │
│ (Backlog)│ (WIP: 3) │ (WIP: 2) │          │
├──────────┼──────────┼──────────┼──────────┤
│  Card A  │  Card D  │  Card G  │  Card I  │
│  Card B  │  Card E  │  Card H  │  Card J  │
│  Card C  │  Card F  │          │          │
└──────────┴──────────┴──────────┴──────────┘
```

**Princípios centrais:**
- Visualizar o trabalho — tornar o fluxo visível para toda a equipa
- Limitar o WIP — trabalhar em menos coisas em simultâneo para terminar mais rápido
- Gerir e melhorar o fluxo — identificar e eliminar gargalos continuamente
- Fazer políticas explícitas — todos sabem quando um card pode avançar de coluna
- Melhorar colaborativamente — usando métricas como cycle time e throughput

**Quando usar:** equipas de suporte, manutenção, operações, ou qualquer contexto onde o trabalho chega de forma contínua e imprevisível, sem cadência de sprint adequada.

### Scrumban

O **Scrumban** é um híbrido deliberado entre Scrum e Kanban — usa a estrutura e a cadência do Scrum (sprints, daily, retrospectiva) combinada com os limites de WIP e o foco em fluxo do Kanban.

É frequentemente adoptado por equipas que:
- Estão a transitar de Scrum para Kanban (ou vice-versa)
- Têm trabalho misto: desenvolvimento planeado (sprints) + suporte reactivo (kanban)
- Querem a estrutura do Scrum mas sem a rigidez das cerimónias completas

### Lean

O **Lean** tem as suas raízes no **Toyota Production System (TPS)** dos anos 1950–70 e foi formalizado como metodologia de gestão por James Womack e Daniel Jones no livro *The Machine That Changed the World* (1990).

O princípio central é a **eliminação de desperdício (muda)** — qualquer actividade que consuma recursos sem criar valor para o cliente:

```
Os 7 desperdícios do Lean (originalmente da manufatura, adaptados ao trabalho do conhecimento):
1. Transporte       → handoffs desnecessários entre equipas
2. Inventário       → trabalho iniciado mas não concluído (WIP excessivo)
3. Movimento        → busca de informação, reuniões desnecessárias
4. Espera           → aprovações lentas, dependências bloqueantes
5. Sobreprodução    → fazer mais do que o necessário ou mais cedo que o necessário
6. Sobre-processamento → documentação excessiva, reuniões sem propósito
7. Defeitos         → retrabalho, bugs, erros que precisam de ser corrigidos
```

O Lean em GP foca em maximizar o valor entregue ao cliente minimizando tudo o que não contribui para esse valor. É a filosofia que influenciou directamente o Lean UX (já visto em `10_metodologias_ageis_ux.md`) e o Lean Startup.

### Extreme Programming (XP)

O **Extreme Programming** foi criado por Kent Beck nos anos 1990, no contexto de desenvolvimento de software, e formalizado no livro *Extreme Programming Explained* (1999). É uma metodologia ágil que leva práticas de engenharia de software às suas versões "extremas" — se testar é bom, testar continuamente é melhor; se code review é bom, pair programming é melhor.

**Práticas centrais do XP:**
- **TDD (Test-Driven Development)**: escrever os testes antes do código
- **Pair Programming**: dois developers a trabalhar no mesmo código em simultâneo
- **Integração contínua (CI)**: integrar e testar o código múltiplas vezes por dia
- **Refactoring contínuo**: melhorar continuamente a estrutura do código sem alterar o comportamento
- **Cliente on-site**: representante do cliente disponível continuamente para esclarecer dúvidas
- **Iterações curtas**: semanas, não meses
- **Collective ownership**: qualquer membro da equipa pode modificar qualquer parte do código

**Quando usar:** equipas de desenvolvimento pequenas, projectos onde a qualidade técnica é crítica, ambientes com requisitos que mudam rapidamente.

### PRINCE2 (Projects IN Controlled Environments)

O **PRINCE2** é uma metodologia de gestão de projectos desenvolvida no Reino Unido (originalmente pelo governo britânico) e hoje mantida pela **AXELOS**. É amplamente adoptada na Europa, em organizações governamentais, e em projectos de grande escala.

Ao contrário do PMBOK® (que é um guia de boas práticas e conhecimento), o PRINCE2 é uma **metodologia prescritiva** — define exactamente como gerir um projecto, com processos, papéis, e documentos específicos.

**Os 7 Princípios do PRINCE2:**
1. Justificação contínua do negócio (Business Case sempre actualizado)
2. Aprender com a experiência (lessons learned ao longo de todo o projecto)
3. Papéis e responsabilidades definidos
4. Gestão por fases (o projecto é dividido em fases de gestão)
5. Gestão por excepção (delegar dentro de tolerâncias definidas)
6. Foco nos produtos (orientado a entregáveis, não a actividades)
7. Adaptar ao ambiente do projecto

**Os 7 Temas:** Business Case, Organização, Qualidade, Planos, Risco, Mudança, Progresso.

**Os 7 Processos:** Iniciar o projecto, Dirigir o projecto, Iniciar uma fase, Controlar uma fase, Gerir a entrega de produtos, Gerir uma transição de fase, Encerrar o projecto.

**PRINCE2 vs. PMBOK®:**

| | PMBOK® | PRINCE2 |
|---|---|---|
| **Natureza** | Guia de boas práticas | Metodologia prescritiva |
| **Origem** | EUA (PMI) | Reino Unido (governo britânico) |
| **Foco** | Conhecimento e processos | Papéis, responsabilidades, e produtos |
| **Flexibilidade** | Alta (adapta-se ao contexto) | Média (tem princípios não negociáveis) |
| **Adopção** | Global, forte nas Américas | Forte na Europa e governos |
| **Certificação** | PMP (Project Management Professional) | PRINCE2 Foundation / Practitioner |

### Factores para Escolher a Metodologia

A escolha da metodologia não é dogmática — depende de múltiplos factores contextuais:

| Factor | Preditivo (Waterfall/PMBOK®/PRINCE2) | Adaptativo (Agile/Scrum/Kanban) |
|---|---|---|
| **Clareza dos requisitos** | Requisitos estáveis e bem definidos | Requisitos incertos ou em evolução |
| **Tolerância a mudanças** | Mudanças são caras e disruptivas | Mudanças são esperadas e bem-vindas |
| **Ciclo de entrega** | Uma entrega grande no final | Entregas frequentes e incrementais |
| **Tamanho da equipa** | Funciona bem em equipas grandes e distribuídas | Mais eficaz em equipas pequenas (até ~9 pessoas) |
| **Risco e regulação** | Alta regulação exige documentação formal | Baixa regulação permite mais flexibilidade |
| **Cultura organizacional** | Organizações hierárquicas e formais | Organizações colaborativas e planas |
| **Tipo de produto** | Produto físico, infraestrutura, hardware | Software, produto digital, serviço |

> **Nota importante:** o mundo real raramente é puramente preditivo ou puramente ágil. A maioria dos projectos modernos usa **abordagens híbridas** — por exemplo, planeamento estratégico em waterfall com execução em sprints ágeis.

---

## 2. Metodologia PMI — PMBOK em Detalhe: Escopo e Scope Creep

### O Escopo no PMBOK®

A **Gestão do Escopo** é uma das 10 áreas de conhecimento do PMBOK® (ver `00_gestao_projeto.md`) e responde à pergunta fundamental: **"O que o projecto inclui — e o que não inclui?"**

O escopo tem duas dimensões complementares:

- **Escopo do Produto**: as características, funções, e atributos do produto ou serviço que o projecto vai entregar — *o quê* vai ser entregue
- **Escopo do Projecto**: o trabalho necessário para entregar o produto com as características definidas — *como* vai ser entregue

### Os Processos de Gestão do Escopo

**1. Planear a Gestão do Escopo**
Documentar como o escopo será definido, validado e controlado ao longo do projecto. O resultado é o **Plano de Gestão do Escopo**.

**2. Recolher Requisitos**
Determinar, documentar e gerir as necessidades dos stakeholders. Técnicas utilizadas: entrevistas, focus groups, workshops, questionários, observação, prototipagem. O resultado é a **Documentação de Requisitos** e a **Matriz de Rastreabilidade de Requisitos** (que liga cada requisito ao seu objetivo de negócio e ao entregável correspondente).

**3. Definir o Escopo**
Desenvolver uma descrição detalhada do projecto e do produto — a **Declaração do Escopo do Projecto (Project Scope Statement)**. Este documento inclui:
- Descrição do escopo do produto
- Critérios de aceitação dos entregáveis
- Entregáveis do projecto
- Exclusões explícitas (o que está fora do escopo)
- Restrições e premissas

**4. Criar a WBS (Work Breakdown Structure)**
Decompor o trabalho total do projecto em componentes menores e mais gerenciáveis até ao nível de **pacotes de trabalho** (work packages) — a menor unidade da WBS, a partir da qual se estimam tempo e custo.

```
WBS — Exemplo simplificado de um projecto de website:

Projecto Website
├── 1. Gestão do Projecto
│       ├── 1.1 Planeamento
│       ├── 1.2 Monitorização e Controlo
│       └── 1.3 Encerramento
├── 2. Design
│       ├── 2.1 Pesquisa com utilizadores
│       ├── 2.2 Wireframes
│       └── 2.3 Design visual (hi-fi)
├── 3. Desenvolvimento
│       ├── 3.1 Front-end
│       ├── 3.2 Back-end
│       └── 3.3 Base de dados
└── 4. Lançamento
        ├── 4.1 Testes de QA
        ├── 4.2 Deploy
        └── 4.3 Formação de utilizadores
```

**5. Validar o Escopo**
Obter a aceitação formal dos entregáveis concluídos pelos stakeholders relevantes. A validação do escopo difere do controlo de qualidade: qualidade verifica se o produto *está correcto*; validação do escopo verifica se o produto *é o que o cliente queria*.

**6. Controlar o Escopo**
Monitorizar o estado do escopo ao longo do projecto e gerir as mudanças à linha de base do escopo. É aqui que se combate o **scope creep**.

### Scope Creep — o maior inimigo do escopo

O **scope creep** (em português, "expansão não controlada do escopo") é a adição gradual e não autorizada de trabalho ao projecto sem os ajustes correspondentes de prazo, custo, e recursos. É uma das causas mais comuns de atraso e de estouro de orçamento em projectos.

**Como o scope creep acontece:**

O scope creep raramente surge de uma única grande decisão — acontece por acumulação de pequenos pedidos que parecem razoáveis individualmente:

- "Só mais esta funcionalidade pequena — não demora nada"
- "O cliente pediu uma pequena alteração no ecrã de login"
- "Enquanto estamos a desenvolver o módulo A, podemos também fazer o B?"
- "A direcção quer adicionar um dashboard de relatórios ao sistema"

Cada pedido individualmente pode parecer menor. No conjunto, somam semanas de trabalho não planeado, sem qualquer ajuste ao prazo ou orçamento.

**Consequências do scope creep:**
```
Trabalho aumenta     → sem aumento de recursos ou prazo
       ↓
Equipa sobrecarregada → qualidade do trabalho cai
       ↓
Prazos não cumpridos  → cliente insatisfeito
       ↓
Horas extras / custo extra → orçamento estourado
       ↓
Moral da equipa em baixo → risco de burnout e saída de pessoas
```

**Como prevenir e controlar o scope creep:**

*1. Definir o escopo com precisão desde o início*
Uma Declaração de Escopo detalhada, com exclusões explícitas ("este projecto não inclui X, Y, Z"), elimina a ambiguidade que alimenta pedidos de mudança informais.

*2. Processo formal de gestão de mudanças*
Nenhuma alteração ao escopo deve ser aceite sem passar por um processo formal: pedido documentado → avaliação do impacto em prazo, custo e risco → aprovação pelo patrocinador ou comité de mudanças → actualização do plano.

*3. Comunicar o processo a todos os stakeholders*
Stakeholders que entendem que qualquer adição ao escopo tem um custo — e requer aprovação formal — fazem pedidos mais cuidadosos e priorizados.

*4. Dizer não (com contexto)*
O PM tem a responsabilidade de proteger o escopo acordado. Rejeitar um pedido de mudança não é ser inflexível — é ser profissional. A forma de o fazer: "Podemos fazer isso, mas vai implicar estender o prazo em X semanas e aumentar o custo em Y. Quer prosseguir com essa mudança ou manter o plano actual?"

*5. Reuniões regulares de revisão de escopo*
Revisar periodicamente com o cliente e os stakeholders o que está a ser entregue face ao que foi acordado — detectando desvios antes de se tornarem problemas grandes.

---

## 3. Hard Skills — Desenvolver o Conhecimento Técnico

**Hard skills** são competências técnicas específicas, mensuráveis e ensináveis — o conhecimento e as ferramentas concretas que um gestor de projecto precisa de dominar para exercer a função com proficiência.

### Competências técnicas fundamentais em GP

**Planeamento e cronograma**
- Criação de WBS (Work Breakdown Structure)
- Desenvolvimento de cronogramas com CPM (Critical Path Method) e PERT
- Criação e leitura de Gantt Charts
- Estimativa de durações (análoga, paramétrica, de três pontos)
- Gestão de dependências entre actividades

**Gestão de custo e orçamento**
- Estimativa de custos (bottom-up, top-down, análoga)
- Desenvolvimento e gestão de orçamentos
- **Earned Value Management (EVM)**: medir simultaneamente desempenho de prazo e custo
  - **SPI (Schedule Performance Index)**: SPI > 1 = adiantado; < 1 = atrasado
  - **CPI (Cost Performance Index)**: CPI > 1 = abaixo do orçamento; < 1 = acima
  - **EAC (Estimate at Completion)**: projecção do custo total ao completar

**Gestão de riscos**
- Identificação de riscos (brainstorming, checklists, lições aprendidas)
- Análise qualitativa (matriz probabilidade × impacto)
- Análise quantitativa (simulação Monte Carlo, árvore de decisão)
- Estratégias de resposta: evitar, transferir, mitigar, aceitar (ameaças); explorar, melhorar, partilhar, aceitar (oportunidades)

**Gestão de qualidade**
- Métricas de qualidade e critérios de aceitação
- Ferramentas de controlo de qualidade: diagrama de causa e efeito (Ishikawa), gráficos de controlo, histogramas, diagramas de Pareto
- Planos de teste e QA

**Ferramentas de GP**
- Microsoft Project, Primavera P6 (ferramentas de cronograma profissionais)
- Jira, Asana, ClickUp, Monday.com (gestão ágil de projectos)
- Excel / Google Sheets (análise de custo, cronograma simplificado)
- Miro, Mural (workshops e planeamento visual)

**Documentação e relatórios**
- Termos de Abertura de Projecto (TAP / Charter)
- Planos de Gestão do Projecto
- Relatórios de status e dashboards de desempenho
- Actas de reunião e registos de decisões
- Lições aprendidas

### Como desenvolver hard skills em GP

**Certificações reconhecidas:**

| Certificação | Emitida por | Nível | Foco |
|---|---|---|---|
| **CAPM** (Certified Associate in PM) | PMI | Iniciante | PMBOK® — porta de entrada |
| **PMP** (Project Management Professional) | PMI | Avançado | PMBOK® — certificação mais reconhecida mundialmente |
| **PRINCE2 Foundation** | AXELOS | Iniciante | Metodologia PRINCE2 |
| **PRINCE2 Practitioner** | AXELOS | Avançado | PRINCE2 aplicado |
| **PMI-ACP** (Agile Certified Practitioner) | PMI | Avançado | Abordagens ágeis |
| **Scrum Master Certificado (CSM)** | Scrum Alliance | Intermediário | Framework Scrum |
| **Professional Scrum Master (PSM)** | Scrum.org | Intermediário | Framework Scrum |

**Prática deliberada:**
- Participar activamente em projectos reais, mesmo em papéis de suporte
- Criar planos de projecto para situações do dia a dia (mudança de casa, evento, projecto pessoal)
- Analisar casos de estudo de projectos reais que falharam ou tiveram sucesso
- Usar ferramentas profissionais mesmo em projectos pequenos para ganhar fluência

---

## 4. Soft Skills — Desenvolver os Aspectos Psicossociais

**Soft skills** são competências interpessoais, emocionais e comportamentais — menos tangíveis do que as hard skills, mas igualmente (ou mais) determinantes para o sucesso de um gestor de projectos. Estudos do PMI indicam que a maioria dos projectos que falham tem causas relacionadas com pessoas e comunicação, não com deficiências técnicas.

### As soft skills mais críticas em Gestão de Projetos

**Comunicação**
Gestores de projecto passam, segundo o PMBOK®, até **90% do seu tempo comunicando** — em reuniões, e-mails, relatórios, apresentações, e conversas informais. A comunicação eficaz em GP envolve:

- Adaptar a mensagem ao público (técnico vs. executivo, interno vs. externo)
- Escolher o canal certo (e-mail para registo formal, conversa presencial para temas sensíveis)
- Ouvir activamente — não apenas esperar pela vez de falar
- Comunicar más notícias com transparência e rapidez (não esperar para ver se melhora)
- Reportar o estado real do projecto, não o estado desejado

**Liderança**
O PM raramente tem autoridade formal sobre os membros da equipa — especialmente em estruturas matriciais (ver `00_gestao_projeto.md`). A liderança em GP é frequentemente **liderança por influência**:

- Criar visão e propósito — a equipa precisa de entender o "porquê" do projecto
- Motivar e reconhecer contribuições
- Resolver conflitos de forma construtiva
- Defender a equipa perante a organização
- Criar um ambiente de trabalho psicologicamente seguro onde erros podem ser reportados sem medo

**Negociação**
O PM negocia constantemente — recursos com gestores funcionais, prazos com clientes, prioridades com stakeholders, e soluções com a equipa. A negociação eficaz em GP não é "ganhar" — é encontrar soluções que funcionem para todas as partes e que o projecto possa suportar.

Princípios de negociação aplicados ao GP:
- Separar pessoas do problema — negociar interesses, não posições
- Criar opções antes de decidir — ter mais de uma proposta na mesa
- Basear acordos em critérios objectivos — custo, prazo, capacidade
- Manter o relacionamento — em GP, negocia-se com as mesmas pessoas múltiplas vezes

**Resolução de Conflitos**
Conflitos são inevitáveis em projectos — e, quando bem geridos, podem ser produtivos. O modelo de Thomas-Kilmann identifica cinco estilos de gestão de conflito:

```
                    ASSERTIVO
                         │
              ┌──────────┼──────────┐
              │          │          │
          Competir   Colaborar      │
              │          │          │
              ├──────────┼──────────┤ COMPROMISSO
              │          │          │
           Evitar    Acomodar       │
              │          │          │
              └──────────┼──────────┘
                         │
                   NÃO ASSERTIVO
              ←COOPERATIVO          COMPETITIVO→
```

Em GP, **Colaborar** (win-win) e **Compromisso** são geralmente os estilos mais eficazes. **Evitar** é o menos recomendado — conflitos não geridos tendem a escalar.

**Inteligência Emocional (IE)**
Formalizada por Daniel Goleman, a IE em contexto de GP envolve:

- **Autoconsciência**: reconhecer as próprias emoções e como afectam as decisões
- **Autorregulação**: gerir emoções em situações de pressão (um projecto em atraso, um stakeholder difícil)
- **Motivação intrínseca**: manter o foco e a energia mesmo em fases difíceis do projecto
- **Empatia**: compreender as preocupações da equipa e dos stakeholders
- **Competências sociais**: construir e manter relações profissionais sólidas

**Gestão de Stakeholders e Política Organizacional**
Projectos existem dentro de organizações com culturas, dinâmicas de poder, e agendas que o PM precisa de navegar:

- Identificar stakeholders com influência oculta (não os mais óbvios)
- Compreender interesses divergentes e encontrar terreno comum
- Saber quando escalar um problema e para quem
- Gerir expectativas de forma realista e contínua
- Construir aliados dentro da organização

**Gestão do Stress e Resiliência**
Projectos são, por natureza, ambientes de pressão. As competências de resiliência incluem:

- Reconhecer os sinais de burnout — próprio e da equipa
- Estabelecer prioridades claras quando tudo parece urgente
- Aceitar a ambiguidade e a incerteza como condições normais
- Aprender com falhas sem as personalizar em excesso
- Manter o equilíbrio entre vida pessoal e profissional

### Hard Skills vs. Soft Skills — complementaridade, não hierarquia

É tentador pensar que hard skills são o "trabalho real" e soft skills são acessórias. A evidência aponta o contrário:

```
Por que projectos falham (PMI Pulse of the Profession):
  Requisitos mal definidos:          37%
  Comunicação deficiente:            19%
  Falta de suporte executivo:        16%
  Mudanças de prioridades:           12%
  Problemas técnicos puros:          <8%
```

A esmagadora maioria das causas de falha é de natureza humana e organizacional — exactamente o domínio das soft skills. Um PM tecnicamente brilhante que não consegue comunicar, liderar, negociar ou gerir conflitos terá dificuldade em entregar projectos de forma consistente.

O PM excelente desenvolve ambas em paralelo — usa as hard skills para criar estrutura e previsibilidade, e as soft skills para gerir a complexidade humana que nenhum plano consegue eliminar completamente.

---

## Resumo em uma frase

> A escolha da metodologia de gestão de projectos — entre as abordagens preditivas (Waterfall, PMBOK®, PRINCE2) e adaptativas (Agile, Scrum, Kanban, XP, Lean) — deve ser contextual e muitas vezes híbrida, apoiada pelo domínio técnico do escopo, do cronograma, do custo e do risco (hard skills), e pela capacidade de comunicar, liderar, negociar e gerir conflitos (soft skills) que, juntos, determinam se um projecto é entregue com sucesso ou não.

---

## Conceitos relacionados para estudar a seguir

- **Earned Value Management (EVM) em profundidade** — calcular e interpretar SPI, CPI, EAC, e ETC para tomar decisões baseadas em dados de desempenho de projecto
- **Gestão de Mudanças Organizacionais (Change Management)** — frameworks como Kotter 8 Steps e ADKAR para gerir o lado humano de projectos de transformação
- **OKRs em Gestão de Projecto** — como alinhar o trabalho de projecto com os objectivos estratégicos da organização usando Objectives and Key Results
- **SAFe (Scaled Agile Framework)** — como escalar práticas ágeis para grandes organizações com múltiplas equipas trabalhando em simultâneo
- **Gestão de Portfólio de Projectos** — como as organizações seleccionam, priorizam e gerem um conjunto de projectos alinhados com a estratégia corporativa