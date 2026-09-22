# Como Trabalhar em um Projeto de UX

---

## 1. Diretrizes Detalhadas para um Projeto — objetivos SMART

### O problema de começar sem clareza
Um dos erros mais comuns em projetos de UX — e de produto em geral — é começar a trabalhar sem ter objetivos claramente definidos. Sem isso, a equipa pode trabalhar semanas em algo que não move a métrica certa, resolver o problema errado, ou chegar ao final do projeto sem conseguir avaliar se foi bem-sucedido.

Boas diretrizes de projeto começam sempre pela definição de **objetivos claros** — e o framework mais usado para isso é o **SMART**:

### O framework SMART

O acrônimo SMART define as cinco características que um bom objetivo de projeto precisa de ter:

```
S — Specific      (Específico)
M — Measurable    (Mensurável)
A — Achievable    (Atingível)
R — Relevant      (Relevante)
T — Time-bound    (Com prazo definido)
```

**S — Específico**
O objetivo deve descrever claramente *o quê* se quer alcançar, *quem* está envolvido, e *onde* acontece. Objetivos vagos geram trabalho vago.

- ❌ "Melhorar a experiência do usuário"
- ✅ "Redesenhar o fluxo de onboarding para novos usuários do app mobile"

**M — Mensurável**
Deve ser possível medir se o objetivo foi atingido — com métricas concretas e critérios de sucesso definidos antes de começar (não depois).

- ❌ "Aumentar a satisfação dos usuários"
- ✅ "Aumentar o CSAT do onboarding de 3.2 para pelo menos 4.0 (em escala de 5)"

**A — Atingível**
O objetivo deve ser desafiador mas realista — dado o tempo, os recursos, e as capacidades disponíveis. Objetivos impossíveis desmotivam; objetivos fáceis demais não geram aprendizagem.

- ❌ "Aumentar a conversão de 5% para 80% em 30 dias" (irrealista)
- ✅ "Aumentar a conversão do cadastro de 43% para 55% em 60 dias"

**R — Relevante**
O objetivo deve estar alinhado com os objetivos mais amplos do negócio e do produto — não ser apenas tecnicamente interessante, mas ter impacto real.

- ❌ "Redesenhar o fluxo de configurações avançadas" (usadas por 2% dos usuários)
- ✅ "Redesenhar o fluxo de onboarding" (ponto de entrada de 100% dos novos usuários)

**T — Com prazo definido**
Objetivos sem prazo nunca são concluídos. O prazo cria urgência, permite planeamento, e define o ponto de avaliação dos resultados.

- ❌ "Melhorar o onboarding em breve"
- ✅ "Lançar o novo onboarding até o final do Q2 (30 de junho)"

### Exemplo completo de objetivo SMART para um projeto de UX

```
Objetivo do projecto:

"Redesenhar o fluxo de onboarding do app mobile [produto]
para aumentar a taxa de activação de novos usuários
(definida como: completar o perfil e realizar a primeira
acção-chave) de 38% para pelo menos 55%,
medida 30 dias após o lançamento,
com lançamento previsto para 15 de setembro."

S: redesenhar o fluxo de onboarding do app mobile
M: taxa de activação de 38% → 55% (medida 30 dias após lançamento)
A: aumento de 17 pontos percentuais — ambicioso mas atingível com redesign focado
R: onboarding é o ponto crítico de primeiro valor para novos usuários
T: lançamento em 15 de setembro
```

### Diretrizes do projeto além dos objetivos

Para além do objetivo SMART, um projecto de UX bem estruturado precisa de definir:

**Escopo (o que está dentro e fora do projecto)**
Definir explicitamente o que o projecto cobre e o que não cobre — para evitar scope creep (expansão gradual e não planeada do escopo que atrasa e encarece o projecto).

```
Dentro do escopo:
✓ Fluxo de onboarding (4 telas)
✓ E-mail de boas-vindas e activação
✓ Tela de primeiro uso após activação

Fora do escopo:
✗ Redesign da área de perfil
✗ Fluxo de recuperação de password
✗ Versão desktop (apenas mobile)
```

**Stakeholders e papéis**
Quem é responsável por quê, quem precisa de ser consultado, quem precisa de ser informado — a matriz RACI aplicada ao projecto:

| Tarefa | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Pesquisa com usuários | UX Researcher | Product Manager | Dev Lead | Liderança |
| Design das telas | UX Designer | Product Manager | Dev Lead, Mktg | Liderança |
| Implementação | Dev Lead | CTO | UX Designer | PM |
| Testes de usabilidade | UX Researcher | UX Designer | PM | Dev Lead |

**Restrições e premissas**
Que recursos estão disponíveis (orçamento, pessoas, tempo), que restrições técnicas existem, e que premissas estão a ser assumidas como verdadeiras.

**Definição de "done"**
Critérios claros que definem quando o projecto está concluído — não apenas "lançado", mas "lançado e com as métricas X, Y, Z validadas".

---

## 2. Estratégias para Gerenciamento de Tempo — Gantt Chart

### Por que o gerenciamento de tempo é crítico em projetos de UX
Projetos de UX têm uma característica que os torna particularmente difíceis de gerir no tempo: são sequencialmente dependentes. A fase de design só começa depois que a pesquisa tem insights suficientes; os testes de usabilidade só acontecem quando há um protótipo; o desenvolvimento só começa quando o design está aprovado. Esta dependência sequencial significa que atrasos numa fase se propagam para todas as seguintes — e um atraso de 1 semana na pesquisa pode resultar num atraso de 3 semanas no lançamento.

### O Gantt Chart — visão temporal do projecto

O **Gráfico de Gantt** (Gantt Chart) é a ferramenta de planeamento de projecto mais usada no mundo — uma visualização horizontal que mostra as tarefas do projecto distribuídas no tempo, com as suas durações, sequências, e dependências.

**Estrutura de um Gantt Chart para projecto de UX:**

```
FASE / TAREFA               Semana: 1  2  3  4  5  6  7  8  9  10
────────────────────────────────────────────────────────────────────
FASE 1 — DESCOBERTA
  Kickoff e definição         ████
  Pesquisa com usuários           ████████
  Análise e síntese                       ████
  Apresentação de insights                    ██

FASE 2 — DESIGN
  Arquitectura de informação                  ████
  Wireframes (lo-fi)                              ████
  Teste de wireframes                                 ██
  Design hi-fi                                           ████████

FASE 3 — VALIDAÇÃO
  Teste de usabilidade (protótipo)                               ████
  Iteração e ajustes                                                 ████
  Aprovação final                                                         ██

FASE 4 — HANDOFF & DESENVOLVIMENTO
  Handoff para desenvolvimento                                             ████
  Suporte ao desenvolvimento                                                   ████████
  Design QA                                                                           ████

MARCOS (Milestones)
  ◆ Insights validados                               ◆
  ◆ Wireframes aprovados                                     ◆
  ◆ Design hi-fi aprovado                                                   ◆
  ◆ Lançamento                                                                         ◆
```

### Elementos essenciais de um Gantt Chart

**Tarefas (tasks)**
Cada actividade do projecto, agrupada por fase ou categoria. O nível de detalhe depende da duração do projecto — para um projecto de 10 semanas, o nível de tarefa pode ser suficiente; para um de 6 meses, pode ser necessário detalhar sub-tarefas.

**Durações**
Quanto tempo cada tarefa leva — estimadas com base em experiência anterior e nas restrições de recursos disponíveis.

**Dependências**
Relações entre tarefas — algumas só podem começar depois que outra terminou (ex: o design hi-fi depende da aprovação dos wireframes). Dependências mal identificadas são a causa mais comum de atrasos em projectos.

**Marcos (milestones)**
Pontos de verificação que marcam a conclusão de uma fase importante ou a entrega de um artefacto crítico. Marcos permitem avaliar se o projecto está no ritmo certo sem precisar de rever cada tarefa individualmente.

**Caminho crítico (critical path)**
A sequência de tarefas dependentes cuja duração total determina a duração mínima do projecto. Um atraso em qualquer tarefa do caminho crítico atrasa directamente o projecto; um atraso numa tarefa fora do caminho crítico pode ser absorvido pelo "folga" disponível.

### Ferramentas para criar e gerir Gantt Charts

| Ferramenta | Tipo | Melhor para | Custo |
|---|---|---|---|
| **Notion** | Productivity + Gantt | Equipas que já usam Notion | Gratuito + pago |
| **ClickUp** | Project Management | Equipas com projectos complexos | Gratuito + pago |
| **Asana** | Project Management | Equipas médias-grandes | Gratuito + pago |
| **Monday.com** | Project Management | Gestão visual de projectos | Pago |
| **Trello + plugin** | Kanban + Gantt | Equipas pequenas com orçamento limitado | Gratuito + pago |
| **Excel / Google Sheets** | Spreadsheet | Quando nenhuma outra ferramenta está disponível | Gratuito |
| **GanttProject** | Gantt dedicado | Projectos mais formais e complexos | Gratuito |

### Técnicas complementares de gerenciamento de tempo

**Time boxing**
Definir um bloco de tempo fixo para uma tarefa — independentemente de estar concluída, o tempo acaba. Esta técnica é especialmente útil em UX para limitar a tendência de "aperfeiçoar infinitamente" um wireframe ou protótipo: 4 horas de wireframing, depois avança-se.

**Buffer de contingência**
Adicionar 15–20% de tempo extra ao planeamento para absorver imprevistos — um participante de pesquisa que cancela, uma revisão de stakeholder que exige mais tempo do que o previsto, ou uma descoberta na pesquisa que muda a direcção do design.

**Weekly check-in**
Uma verificação semanal breve (15–30 minutos) do status do projecto face ao plano — identificar desvios cedo, quando ainda há tempo de ajustar, em vez de só perceber o atraso na semana antes da entrega.

---

## 3. Ferramentas e Técnicas Recomendadas

### Ferramentas de design e prototipagem

| Ferramenta | Uso em UX | Fidelidade | Custo |
|---|---|---|---|
| **Figma** | Design de interface, wireframes, protótipos, Design System, handoff | Lo-fi a hi-fi | Gratuito + pago |
| **Excalidraw** | Esboços rápidos, brainstorming visual, diagramas de fluxo | Lo-fi | Gratuito |
| **Draw.io** | Fluxogramas, user flows, arquitectura de informação | Diagrama | Gratuito |
| **Balsamiq** | Wireframes de baixa fidelidade com estética de esboço | Lo-fi | Pago |
| **Adobe XD** | Design e protótipos (menos adoptado desde o domínio do Figma) | Mid a hi-fi | Pago |

**Recomendação para a maioria dos projectos:**
- **Excalidraw** para esboços e fluxos iniciais (velocidade máxima, zero custo)
- **Figma** para wireframes mid-fi, design hi-fi, protótipos clicáveis, e handoff (cobertura completa)
- **Draw.io** para documentar arquitectura de informação e user flows complexos

### Ferramentas de pesquisa e testes

| Ferramenta | Uso | Custo |
|---|---|---|
| **Google Forms** | Surveys, screeners de recrutamento | Gratuito |
| **Hotjar** | Heatmaps, session recordings, feedback contínuo | Gratuito + pago |
| **Maze** | Testes de usabilidade não-moderados com protótipos Figma | Gratuito + pago |
| **Optimal Workshop** | Card sorting, tree testing, first click | Pago |
| **Lookback** | Testes moderados remotos, diary studies | Pago |
| **Otter.ai / Descript** | Transcrição automática de entrevistas | Gratuito + pago |
| **Dovetail** | Repositório de insights e análise qualitativa | Pago |

### Ferramentas de gerenciamento de projeto

| Ferramenta | Tipo | Melhor para |
|---|---|---|
| **Notion** | All-in-one (docs + database + kanban + gantt) | Equipas que valorizam flexibilidade e documentação centralizada |
| **Jira** | Agile project management | Equipas de desenvolvimento com processos Scrum formais |
| **Linear** | Issue tracking moderno | Equipas de produto e tech que querem velocidade e simplicidade |
| **ClickUp** | Project management completo | Gestão de projectos complexos com muitas dependências |
| **Asana** | Task management | Organizações com múltiplos projectos paralelos |

### Ferramentas de colaboração e comunicação

| Ferramenta | Uso | Destaque |
|---|---|---|
| **Miro** | Quadro branco colaborativo — Design Thinking, retrospectivas, workshops | Melhor para colaboração visual assíncrona e síncrona |
| **FigJam** | Quadro branco integrado ao Figma | Melhor quando a equipa já usa Figma como hub central |
| **Gather Town** | Escritório virtual — colaboração remota espontânea | Melhor para replicar a dinâmica de co-presença (ver `10_metodologias_ageis_ux.md`) |
| **Notion** | Documentação e base de conhecimento do projecto | Melhor para documentação estruturada e pesquisável |
| **Slack / Discord** | Comunicação assíncrona da equipa | Canal principal de comunicação no dia a dia |
| **Loom** | Gravação de vídeo para comunicação assíncrona | Melhor para explicar designs ou dar feedback sem agendar reunião |

### Stack recomendada por tamanho de equipa

**Equipa pequena / freelancer (1–3 pessoas):**
```
Design:           Figma (plano gratuito)
Esboços:          Excalidraw
Pesquisa:         Google Forms + Hotjar (plano gratuito)
Gestão:           Notion
Colaboração:      FigJam + Slack
```

**Equipa média (4–10 pessoas):**
```
Design:           Figma (plano profissional)
Testes:           Maze + Lookback ou UserTesting
Pesquisa:         Dovetail + Optimal Workshop
Gestão:           Linear ou ClickUp
Colaboração:      Miro + Notion + Slack
```

**Equipa grande / corporativa (10+ pessoas):**
```
Design:           Figma (plano organização) + Storybook
Testes:           UserTesting + Hotjar + Optimal Workshop
Analytics:        Mixpanel ou Amplitude
Pesquisa:         Dovetail
Gestão:           Jira + Confluence
Colaboração:      Miro + Microsoft Teams ou Slack
```

---

## 4. Plano de Ação para Desenvolvimento — as cinco fases

### Visão geral do plano

Um projecto de UX típico segue cinco fases principais — da descoberta ao lançamento. Cada fase tem objectivos claros, actividades específicas, e entregáveis que servem de input para a fase seguinte.

```
┌─────────────┐   ┌─────────────┐   ┌───────────────┐   ┌─────────────┐   ┌───────────┐
│   1. DEFINIR │ → │  2. DESIGN  │ → │ 3. DESENVOLVER │ → │  4. TESTAR  │ → │ 5. LANÇAR │
│             │   │             │   │               │   │             │   │           │
│Pesquisa     │   │Wireframes   │   │Implementação  │   │QA + testes  │   │Deploy     │
│Objectivos   │   │Protótipos   │   │Código         │   │Usabilidade  │   │Monitorar  │
│Personas     │   │Design hi-fi │   │Componentes    │   │Bugs         │   │Iterar     │
└─────────────┘   └─────────────┘   └───────────────┘   └─────────────┘   └───────────┘
```

### Fase 1 — Definição (Discovery)

**Objectivo:** entender o problema, os usuários, e o contexto antes de tomar qualquer decisão de design.

**Actividades:**
- Kickoff do projecto — alinhar equipa e stakeholders sobre objectivos SMART, escopo, e cronograma
- Pesquisa com usuários (entrevistas, observação, dados existentes)
- Análise da concorrência e de melhores práticas
- Revisão de dados de analytics do produto existente (se houver)
- Definição de personas e jornadas do usuário
- Formulação de perguntas de design e hipóteses (HMW)

**Entregáveis:**
- Brief de projecto com objectivos SMART validados
- Relatório de pesquisa com insights principais
- Personas documentadas
- Mapa de jornada do usuário (estado actual)
- Perguntas "How Might We...?" priorizadas

**Duração típica:** 2–4 semanas (depende da profundidade da pesquisa)

**Critério de conclusão:** a equipa tem clareza suficiente sobre o problema real dos usuários para tomar decisões de design fundamentadas.

### Fase 2 — Design

**Objectivo:** traduzir os insights da descoberta em soluções de design validadas.

**Actividades:**
- Brainstorming e ideação (Crazy 8s, SCAMPER — ver `07_ideacao_ux.md`)
- Arquitectura de informação e user flows
- Wireframes de baixa fidelidade (Excalidraw) — exploração rápida
- Teste rápido de wireframes com 3–5 usuários
- Iteração com base no feedback
- Design de alta fidelidade no Figma
- Prototipagem interactiva
- Teste de usabilidade do protótipo hi-fi
- Iteração final e aprovação

**Entregáveis:**
- User flows documentados (Draw.io)
- Wireframes aprovados
- Protótipo hi-fi interactivo no Figma
- Design System ou UI Kit (componentes, cores, tipografia)
- Especificações de handoff

**Duração típica:** 3–6 semanas

**Critério de conclusão:** protótipo hi-fi aprovado por stakeholders e validado com usuários, sem problemas críticos de usabilidade identificados.

### Fase 3 — Desenvolvimento

**Objectivo:** transformar o design aprovado em produto funcional, com o menor desvio possível da intenção de design.

**Responsabilidade principal:** equipa de desenvolvimento, com suporte activo do designer.

**Papel do designer nesta fase:**
- Handoff estruturado (especificações, assets, documentação de estados)
- Disponibilidade para responder dúvidas rapidamente
- Revisões periódicas de implementação em andamento (não apenas no final)
- Anotação de decisões de adaptação tomadas durante o desenvolvimento

**O que monitorar:**
- Fidelidade ao design — a implementação está a corresponder às especificações?
- Consistência — componentes iguais implementados da mesma forma em diferentes telas?
- Responsividade — o layout comporta-se correctamente em diferentes tamanhos de tela?
- Estados de componentes — todos os estados (hover, foco, erro, disabled) implementados?

**Duração típica:** 4–10 semanas (muito variável conforme a complexidade)

### Fase 4 — Testes

**Objectivo:** garantir que o produto implementado funciona como esperado, tanto tecnicamente (QA) quanto do ponto de vista da experiência do usuário.

**Tipos de testes nesta fase:**

*QA (Quality Assurance) — testes técnicos*
- Verificar que todas as funcionalidades implementadas funcionam conforme especificado
- Testar em diferentes dispositivos, browsers, e tamanhos de tela
- Identificar e registar bugs para correção

*Design QA — testes de fidelidade ao design*
- Comparar a implementação com o design especificado tela a tela
- Identificar desvios e classificar por severidade (cosmético vs. funcional)
- Documentar e priorizar com a equipa de desenvolvimento

*Testes de usabilidade pré-lançamento*
- Sessões com usuários reais no produto implementado (não no protótipo)
- Identificar problemas que só surgem com o produto real — interacções que o protótipo não captura completamente
- Validar que os problemas identificados nos testes anteriores foram efectivamente resolvidos

*Testes de acessibilidade*
- Verificação com ferramentas automáticas (Lighthouse, axe) — identifica ~30–40% dos problemas
- Teste de navegação por teclado (Tab order, foco visível, operabilidade por teclado)
- Teste com leitor de tela (VoiceOver, NVDA)

**Entregáveis:**
- Relatório de QA com bugs classificados por severidade
- Relatório de Design QA com desvios documentados
- Relatório de testes de usabilidade pré-lançamento
- Lista de itens a corrigir antes do lançamento (obrigatórios vs. opcionais)

**Duração típica:** 1–3 semanas

### Fase 5 — Lançamento e Monitorização

**Objectivo:** lançar o produto para os usuários e estabelecer um processo contínuo de monitorização e melhoria.

**Actividades de lançamento:**
- Deploy para produção (tipicamente responsabilidade do desenvolvimento, com suporte do designer para verificação final)
- Verificação pós-deploy — o produto está a funcionar em produção como esperado?
- Comunicação interna e externa (comunicados, changelogs, e-mails para usuários se relevante)

**Actividades de monitorização pós-lançamento:**
- Configurar dashboards de métricas para os KPIs definidos nos objectivos SMART (ver `11_metricas_kpis_ux.md`)
- Activar ferramentas de analytics comportamental (Hotjar, Mixpanel) se ainda não estiverem configuradas
- Agendar revisão de métricas 1 semana, 2 semanas, e 30 dias após o lançamento
- Recolher feedback inicial dos usuários (surveys in-app, análise de tickets de suporte)

**O ciclo reinicia:**
O lançamento não é o fim — é o início de um novo ciclo de descoberta. Os dados recolhidos pós-lançamento informam a próxima iteração, fechando o loop que começou na Fase 1.

```
Pós-lançamento (30 dias):
→ As métricas melhoraram como previsto?
→ Que novos problemas emergiram que o protótipo não revelou?
→ O que os usuários estão a dizer no suporte e nas reviews?
→ Quais as próximas oportunidades de melhoria?
→ → → Fase 1 do próximo ciclo
```

**Entregáveis:**
- Dashboard de KPIs configurado e operacional
- Relatório de resultados 30 dias pós-lançamento
- Backlog de melhorias identificadas para o próximo ciclo
- Post-mortem do projecto — o que correu bem, o que correr mal, o que aprendemos

---

## Resumo em uma frase

> Trabalhar bem num projecto de UX começa com objectivos SMART que definem claramente o sucesso antes do início, passa por um planeamento temporal estruturado num Gantt Chart que torna dependências e marcos visíveis, usa a combinação certa de ferramentas para cada fase (Figma para design, Miro para colaboração, Notion para gestão, Hotjar para dados), e segue um plano de acção de cinco fases — definição, design, desenvolvimento, testes e lançamento — onde cada fase tem critérios claros de entrada e saída e alimenta a seguinte com evidências, não suposições.

---

## Conceitos relacionados para estudar a seguir

- **Project Charter** — documento formal de início de projecto que consolida objectivos, escopo, stakeholders, restrições, e critérios de sucesso numa única referência partilhada por toda a equipa
- **Risk Management em projectos de UX** — como identificar, avaliar e mitigar riscos específicos de projectos de design (riscos de pesquisa, de alinhamento de stakeholders, de dependência técnica)
- **Stakeholder Mapping e gestão de expectativas** — técnicas para identificar todos os stakeholders relevantes, entender os seus interesses e influência, e comunicar com cada um de forma adequada ao longo do projecto
- **Design Sprint (GV)** — processo intensivo de 5 dias que condensa as fases 1–3 (descoberta + design + protótipo validado) numa única semana, ideal para projectos que precisam de validar uma ideia rapidamente
- **Retrospectiva de projecto (post-mortem)** — como estruturar uma reflexão pós-projecto que gera aprendizagens reais e transferíveis para futuros projectos, em vez de uma reunião de reclamações sem acção