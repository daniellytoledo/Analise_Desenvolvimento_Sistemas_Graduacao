# Aplicando Metodologias Ágeis em UX

---

## 1. Fundamentos do Scrum e Kanban em UX

### O contexto: por que UX e metodologias ágeis precisam andar juntos
Durante muito tempo, o design de UX e o desenvolvimento de software viveram em mundos separados — o design entregava especificações completas para o desenvolvimento implementar, num modelo cascata onde cada fase só começava depois que a anterior terminava. O problema: quando o desenvolvimento terminava, a realidade do produto muitas vezes estava distante das necessidades reais dos usuários descobertas durante o processo.

As **metodologias ágeis** surgiram para resolver exactamente esta desconexão — iterações curtas, entrega contínua, e adaptação frequente com base em feedback real. Integrar UX a esse processo foi o passo seguinte natural: não faz sentido iterar rapidamente se não há um processo de validação com usuários acompanhando o ritmo.

### Scrum em UX

**O que é Scrum**
Scrum é um framework ágil que organiza o trabalho em ciclos curtos e fixos chamados **sprints** — tipicamente de 1 a 4 semanas — nos quais a equipa entrega um incremento de produto potencialmente utilizável. Cada sprint tem uma sequência clara de eventos e papéis definidos.

**Elementos-chave do Scrum:**

| Elemento | Descrição | Relevância para UX |
|---|---|---|
| **Sprint** | Ciclo de trabalho de 1–4 semanas com objetivo definido | O designer precisa ter o design pronto antes do sprint em que será implementado |
| **Product Backlog** | Lista priorizada de todas as funcionalidades e melhorias do produto | Onde vivem as histórias de usuário que informam o design |
| **Sprint Backlog** | Itens selecionados do Product Backlog para o sprint atual | Define o escopo que o designer precisará apoiar naquele ciclo |
| **Sprint Planning** | Reunião de planejamento no início do sprint | Momento em que o designer alinha expectativas sobre o que será entregue |
| **Daily Scrum** | Reunião diária de 15 minutos para sincronizar a equipa | Oportunidade de o designer atualizar o status do design e identificar bloqueios |
| **Sprint Review** | Demonstração do incremento ao final do sprint | Momento de coletar feedback de stakeholders sobre o que foi entregue |
| **Sprint Retrospective** | Reflexão sobre o processo, não o produto | Onde melhorias no processo de colaboração design-desenvolvimento são discutidas |
| **Product Owner** | Define prioridades e representa o negócio | Parceiro próximo do designer — juntos traduzem necessidades de negócio em problemas de design |
| **Scrum Master** | Remove impedimentos e garante o processo | Aliado do designer para garantir que o trabalho de UX tem espaço no sprint |

**O desafio do "design ahead"**
O maior obstáculo ao integrar UX no Scrum é o **tempo**: o design precisa de estar pronto antes que o desenvolvimento possa começar. Se o design e o desenvolvimento trabalham no mesmo sprint, o design nunca está pronto a tempo — ou fica tão simplificado que perde qualidade.

A solução mais comum é o modelo **"design sprint +1"** (também chamado de "design paralelo" ou "dual-track"):

```
Sprint N:    [Design pesquisa e projeta para Feature B]
             [Desenvolvimento implementa Feature A]

Sprint N+1:  [Design valida Feature B e projeta Feature C]
             [Desenvolvimento implementa Feature B]

Sprint N+2:  [Design valida Feature C e projeta Feature D]
             [Desenvolvimento implementa Feature C]
```

O designer fica sempre um sprint à frente do desenvolvimento — garantindo que o design está validado e pronto quando o desenvolvimento precisa dele.

**Benefícios do Scrum para UX:**
- Entregas frequentes permitem feedback de usuários reais com mais regularidade
- A estrutura de sprint cria ritmo previsível — o designer sabe quando tem entregas e quando tem espaço para pesquisa
- Sprint Reviews criam momentos formais de feedback de stakeholders sobre o design implementado
- A cultura de retrospectiva permite melhorar continuamente a colaboração entre design e desenvolvimento

### Kanban em UX

**O que é Kanban**
Kanban é um sistema de gestão visual do fluxo de trabalho — sem sprints fixos, sem papéis rígidos, sem cerimônias obrigatórias. O trabalho é representado em cartões que fluem por colunas num quadro (físico ou digital), e a regra central é o **WIP Limit** (Work In Progress Limit) — limitar o número de itens em cada coluna para evitar sobrecarga e garantir fluxo contínuo.

**Estrutura típica de um quadro Kanban para UX:**

```
┌──────────┬──────────┬──────────┬──────────┬──────────┐
│ Backlog  │Pesquisa  │  Design  │ Em Review│  Pronto  │
│          │ (WIP: 2) │ (WIP: 3) │ (WIP: 2) │          │
├──────────┼──────────┼──────────┼──────────┼──────────┤
│ Feature E│ Feature C│ Feature B│ Feature A│Feature X │
│ Feature F│ Feature D│          │          │Feature Y │
│ Feature G│          │          │          │Feature Z │
│   ...    │          │          │          │          │
└──────────┴──────────┴──────────┴──────────┴──────────┘
```

O WIP Limit obriga a terminar o que está em andamento antes de puxar novo trabalho — o que combina muito bem com o trabalho de UX, onde iniciar muitas coisas ao mesmo tempo tende a gerar design superficial em tudo.

**Elementos-chave do Kanban:**
- **Visualização do fluxo**: todo o trabalho de design visível num único quadro
- **WIP Limits**: máximo de itens em cada etapa do processo
- **Fluxo contínuo**: itens fluem quando estão prontos, sem cadência forçada
- **Métricas de fluxo**: cycle time (tempo de uma tarefa da entrada à saída), throughput (itens completados por semana)

**Benefícios do Kanban para UX:**
- Maior flexibilidade para responder a prioridades emergentes sem esperar o próximo sprint
- Visualização clara de gargalos no processo de design (ex: muitos itens parados em "Review")
- Adequado para equipes de design que servem múltiplos times de desenvolvimento simultaneamente
- Menor overhead de processo — sem cerimônias obrigatórias

**Scrum vs. Kanban para UX — quando usar cada um:**

| Contexto | Melhor opção |
|---|---|
| Equipa dedicada a um único produto com roadmap definido | Scrum |
| Designer que apoia múltiplos times em paralelo | Kanban |
| Produto em fase de descoberta e exploração | Kanban (mais flexível) |
| Produto em fase de entrega acelerada com sprints sincronizados | Scrum |
| Trabalho de suporte e manutenção de design | Kanban |

---

## 2. Lean UX e sua Aplicação Prática

### O que é Lean UX
**Lean UX** é uma abordagem de design criada por Jeff Gothelf e Josh Seiden (livro "Lean UX", 2013) que adapta os princípios do Lean Manufacturing e do Lean Startup ao processo de design de UX — com foco em eliminar desperdício, aprender rapidamente, e criar o mínimo de documentação necessária para avançar.

Se o Scrum e o Kanban organizam *como* o trabalho flui, o Lean UX define *como* pensar sobre o trabalho de design em ambientes de alta incerteza.

### Os princípios fundamentais do Lean UX

**1. Equipas multidisciplinares (cross-functional teams)**
Em vez de o designer trabalhar isolado e "entregar" para o desenvolvedor, todos — designer, developer, product manager, data analyst — trabalham juntos desde o início, compartilhando responsabilidade pelo resultado. O design deixa de ser uma etapa sequencial e passa a ser uma conversa contínua.

**2. Pensamento small, iterativo e ágil**
Reduzir o tamanho das iniciativas de design para que possam ser testadas e validadas rapidamente. Em vez de um redesign completo de 6 meses, fazer uma série de experimentos de 2 semanas que testam hipóteses específicas.

**3. Entregáveis mínimos (minimum viable design)**
Criar apenas a documentação de design estritamente necessária para que a equipa possa avançar — nem mais, nem menos. Documentação que não é lida ou usada é desperdício; design que não é testado é suposição.

**4. Foco em resultados, não em outputs**
A métrica de sucesso do design não é "quantas telas foram entregues" mas "que mudança de comportamento ou métrica de negócio foi atingida". Um botão redesenhado que aumenta a taxa de clique em 15% é mais valioso do que 50 telas de wireframe que ninguém testou.

**5. Hipóteses em vez de requisitos**
O Lean UX substitui a lista de requisitos por uma estrutura de hipóteses explícitas:

```
Estrutura de hipótese Lean UX:

"Acreditamos que [fazer isto]
para [estes usuários]
resultará em [este resultado].
Saberemos que temos sucesso quando virmos [esta evidência mensurável]."
```

Exemplo:
> "Acreditamos que adicionar um indicador de progresso no fluxo de cadastro para novos usuários resultará em maior taxa de conclusão. Saberemos que temos sucesso quando a taxa de conclusão do cadastro aumentar de 43% para pelo menos 55% em 30 dias."

**6. Aprender antes de fazer**
Antes de investir semanas em design detalhado, validar a suposição central com o método mais rápido e barato disponível — um protótipo de papel, uma landing page com o conceito, ou 5 entrevistas de 20 minutos. O custo de descobrir cedo que uma hipótese está errada é infinitamente menor do que o custo de descobrir depois do desenvolvimento.

**7. Remover desperdício**
No Lean, desperdício é tudo o que não entrega valor — documentação excessiva que não é lida, reuniões sem decisão, features desenvolvidas que ninguém usa, design que nunca é testado. Lean UX questiona continuamente: "precisamos mesmo disso?"

### O ciclo Lean UX: Think → Make → Check

```
         ┌─────────────────────┐
         │                     │
    ┌────▼────┐           ┌────┴────┐
    │  THINK  │           │  CHECK  │
    │         │           │         │
    │Formular │           │Testar e │
    │hipóteses│           │aprender │
    └────┬────┘           └────┬────┘
         │                     │
         └─────────┬───────────┘
                   │
              ┌────▼────┐
              │  MAKE   │
              │         │
              │Criar MVP│
              │de design│
              └─────────┘
```

Este ciclo é idêntico em espírito ao ciclo Build → Measure → Learn do Lean Startup, aplicado ao processo de design — e é exactamente a mentalidade que sustenta a prototipagem iterativa descrita em `08_prototipagem_detalhada.md`.

---

## 3. O Papel do UX em Ambientes Ágeis — integração com times de desenvolvimento

### O problema da "UX como serviço"
Em muitas organizações que adoptam metodologias ágeis sem pensar na integração de design, o UX acaba num papel de "serviço": o time de produto pede uma tela, o designer entrega, o time implementa, e ninguém sabe se funcionou. O designer nunca vê os usuários, nunca analisa dados de uso, e nunca participa das decisões estratégicas de produto.

Este modelo desperdiça o potencial transformador do UX e frequentemente resulta em designs que "parecem bem" mas não resolvem os problemas certos.

### O UX como membro integrado do time

O modelo mais eficaz é o **UX como membro permanente de um time de produto multidisciplinar** — presente nas cerimônias do Scrum ou no quadro do Kanban, com voz nas decisões de priorização, e com espaço para pesquisa e teste dentro do ritmo de trabalho do time.

Implicações práticas:
- O designer participa do Sprint Planning — não apenas recebe tarefas, mas ajuda a definir o que será feito e como
- O designer participa da Sprint Review — não apenas mostra designs, mas apresenta insights de pesquisa e resultados de testes
- O designer tem "research time" protegido dentro do sprint — tempo para falar com usuários que não pode ser sacrificado por demandas urgentes de entrega
- O designer é co-responsável pelo sucesso do produto, não apenas pela qualidade do design

### Responsabilidades típicas do UX em times ágeis

```
ANTES DO SPRINT (discovery):
→ Pesquisa com usuários para entender problemas
→ Definição de hipóteses com o Product Owner
→ Wireframing e prototipagem do próximo sprint
→ Validação do design com testes de usabilidade

DURANTE O SPRINT (delivery):
→ Suporte ao desenvolvimento — responder dúvidas, clarificar intenções de design
→ Revisão de implementações em andamento (design QA)
→ Refinamento de histórias de usuário para sprints futuros
→ Análise de dados de uso do que foi lançado no sprint anterior

APÓS O SPRINT (review e retro):
→ Sprint Review — apresentar resultados de pesquisa ou design testado
→ Retrospectiva — contribuir com perspectiva de UX sobre o processo
→ Atualização da documentação de design com decisões tomadas durante o sprint
```

### Histórias de usuário — a ponte entre UX e desenvolvimento

As **histórias de usuário** são a forma como o trabalho é descrito no backlog de um time ágil — e são também o principal artefacto de comunicação entre o UX e o desenvolvimento:

```
Formato padrão:
"Como [tipo de usuário], quero [ação ou funcionalidade],
para que [benefício ou objetivo]."

Exemplos:
"Como novo usuário, quero ver meu progresso durante o cadastro,
para que eu saiba quanto falta para terminar."

"Como usuário com baixa visão, quero poder aumentar o tamanho do texto,
para que eu consiga ler o conteúdo confortavelmente."
```

O designer de UX contribui para as histórias de usuário ao:
- Garantir que estão escritas da perspectiva do usuário (não do sistema)
- Adicionar critérios de aceitação de UX (ex: "o indicador de progresso deve ser visível sem rolar a página")
- Vincular as histórias a evidências de pesquisa ("baseado em teste de usabilidade com 5 usuários, 4/5 abandonaram porque não sabiam quanto tempo levaria")

### Comunicação com o time de desenvolvimento

Uma das habilidades mais subestimadas de um UX Designer em ambiente ágil é a comunicação eficaz com desenvolvedores — não apenas no handoff (ver `08_prototipagem_detalhada.md`), mas no dia a dia:

- **Falar a linguagem do dev**: entender o básico de HTML/CSS, componentes, estados, e responsividade facilita enormemente a comunicação e evita designs que "não dão pra fazer"
- **Estar disponível**: responder dúvidas rápidas durante o sprint evita que o desenvolvedor tome decisões de design sem o designer
- **Aceitar adaptações**: algumas decisões de design precisarão de ser adaptadas por razões técnicas — o designer que compreende a intenção por trás do design consegue aceitar adaptações inteligentes em vez de insistir em pixel-perfection sem compreensão do custo
- **Celebrar a implementação**: reconhecer publicamente quando o desenvolvimento fez um ótimo trabalho ao implementar o design cria um ambiente de colaboração muito mais saudável

---

## 4. Colaboração e Comunicação em Equipa — Gather Town

### O desafio da colaboração remota em UX
O trabalho de UX é eminentemente colaborativo — workshops, sessões de critique, brainstormings, testes de usabilidade, e standups diários são todos atividades que dependem de interação humana de qualidade. A pandemia acelerou a adoção do trabalho remoto e, com ela, a busca por ferramentas que replicassem a sensação de presença e espontaneidade de um escritório físico.

Ferramentas de videoconferência como o Zoom e o Google Meet resolvem a comunicação estruturada — mas não replicam a conversa espontânea de corredor, o "posso te interromper 2 minutos?" que acontece naturalmente num escritório. É neste gap que o **Gather Town** se destaca.

### O que é o Gather Town

**Gather Town** ([gather.town](https://gather.town)) é uma plataforma de colaboração remota com uma abordagem radicalmente diferente das ferramentas convencionais de videoconferência: em vez de uma lista de pessoas numa chamada de vídeo, os participantes são representados por **avatares 2D** que se movem livremente por um **espaço virtual** que simula um escritório, uma conferência, ou qualquer ambiente personalizado.

A mecânica central é a **proximidade**: a câmera e o microfone de um participante só se activam quando o seu avatar se aproxima do avatar de outro participante — exactamente como funciona a comunicação num espaço físico. Isto cria interações espontâneas e contextuais que as chamadas de vídeo tradicionais não conseguem replicar.

### Recursos principais do Gather Town

**Espaços personalizáveis**
O Gather Town disponibiliza templates de espaços prontos (escritórios, salas de conferência, ambientes de networking) que podem ser customizados — adicionando mobiliário virtual, decoração, áreas temáticas, e zonas com funcionalidades específicas. Para equipas de UX, é possível criar um espaço com:
- Área de work pods para trabalho individual focado
- Sala de reuniões para standups e reviews
- "Whiteboard wall" com integrações para Miro ou FigJam
- Área de lounge para conversas informais
- Sala de teste de usabilidade com espaço para observadores

**Objetos interativos**
Avatares podem interagir com objetos no espaço — monitores que abrem documentos ao aproximar, quadros que mostram moodboards, portais que transportam para outras áreas. Estas interações tornam o espaço funcional, não apenas decorativo.

**Integração com outras ferramentas**
O Gather Town integra directamente com Miro, Google Docs, YouTube, e outros serviços — permitindo colaborar em documentos sem sair do espaço virtual.

**Zonas privadas**
Áreas delimitadas no espaço onde apenas quem está dentro pode ouvir as conversas — ideal para breakout rooms durante workshops, ou para que sub-grupos trabalhem em paralelo durante sessões de Design Thinking.

**Gravação e transcrição**
Sessões podem ser gravadas para referência posterior — especialmente útil para capturar insights de workshops de ideação.

### Benefícios do Gather Town para equipas de UX

**Replicar a espontaneidade do espaço físico**
A maior vantagem: conversas não planeadas acontecem naturalmente quando dois avatares se cruzam num corredor — o designer que está a trabalhar num wireframe pode ser abordado espontaneamente pelo developer com uma dúvida, da mesma forma que aconteceria num escritório físico.

**Workshops mais envolventes**
Sessões de Design Thinking, brainstorming e testes de usabilidade são muito mais envolventes num espaço virtual partilhado do que numa chamada de Zoom — os participantes sentem-se fisicamente "juntos", o que aumenta a presença e a participação.

**Cultura de equipa remota**
A informalidade do espaço virtual — avatares personalizados, decoração do escritório, áreas de convívio — cria oportunidade para a construção de relações humanas que o trabalho remoto formal frequentemente elimina. Equipas de UX que usam Gather Town regularmente reportam maior sensação de pertença e colaboração do que as que usam apenas chamadas de vídeo.

**Sessões de trabalho paralelo ("co-working")**
Em vez de cada um trabalhar isolado em casa com o Spotify nos ouvidos, equipas podem usar o Gather Town como espaço de co-working remoto — presentes no mesmo espaço virtual, disponíveis para interação espontânea, mas com liberdade para se concentrar individualmente.

### Limitações a considerar
- Curva de aprendizagem inicial para quem não está familiarizado com a metáfora de avatar/espaço
- Pode ser desorientador em sessões grandes sem facilitação clara
- O plano gratuito limita o número de participantes simultâneos
- Requer boa conexão de internet (mais pesado que uma chamada de vídeo simples)

---

## 5. Uso do Miro para Aplicar Metodologias Ágeis

### O Miro como hub de colaboração ágil
O **Miro** ([miro.com](https://miro.com)) já foi introduzido em `05_design_thinking_empatia_definicao.md` como ferramenta para workshops de Design Thinking. No contexto de metodologias ágeis, o Miro expande o seu papel para ser o **espaço central de colaboração assíncrona e síncrona** de uma equipa de produto — onde o backlog visual, os artefactos de design, e a documentação de processos coexistem numa superfície partilhada.

### Miro para Scrum

**Sprint Planning visual**
Em vez de uma lista de texto num Jira ou Notion, o Sprint Planning no Miro pode ser feito com cards visuais que representam histórias de usuário, agrupados por área ou fluxo, com labels de prioridade e estimativa de esforço. O Product Owner e o designer movem cards juntos, criando um plano compartilhado que toda a equipa pode ver e comentar.

**Sprint Retrospective**
O Miro tem templates específicos para retrospectivas, com os formatos mais comuns:
- **Start / Stop / Continue**: o que devemos começar a fazer, parar de fazer, e continuar fazendo
- **Mad / Sad / Glad**: o que frustra, o que entristece, o que alegra na equipa
- **4Ls (Liked / Learned / Lacked / Longed For)**: aprendizagens e desejos da equipa
- **Sailboat Retrospective**: metáfora visual — vento (o que nos impulsiona), âncora (o que nos atrasa), pedras (os riscos), estrela do norte (o objetivo)

**Mapa de fluxo do usuário (User Story Map)**
O Miro é excelente para criar e manter **User Story Maps** — uma representação visual bidimensional do produto onde o eixo horizontal são as atividades do usuário e o eixo vertical são as histórias de usuário que as suportam, organizadas por prioridade. Esta visualização ajuda a planejar releases e a manter a perspectiva do usuário no centro do backlog.

```
User Story Map no Miro:

Atividades do usuário:
[Descoberta]──────[Cadastro]──────[Uso Principal]──────[Saída]

Histórias (por prioridade):
[Ver landing page]  [Preencher email]  [Fazer busca]     [Logout]
[Ver preços]        [Confirmar senha]  [Filtrar results]
                    [Verificar email]  [Ver detalhes]
                                       [Compartilhar]
```

### Miro para Kanban visual

O Miro permite criar quadros Kanban completamente personalizados — com colunas, swimlanes, e cards que podem incluir imagens, links, anexos, e labels coloridos. A vantagem sobre ferramentas de Kanban tradicionais (Trello, Jira) é a flexibilidade visual: o quadro pode coexistir com affinity maps, wireframes, e notas de pesquisa no mesmo board — criando um espaço de trabalho contextualmente rico.

### Miro para Lean UX

**Canvas de hipóteses**
Um template no Miro para documentar e rastrear hipóteses de design ao estilo Lean UX — cada hipótese com o utilizador alvo, a suposição, o experimento planeado, e os resultados observados após o teste.

**Assumption Mapping**
Uma técnica Lean UX facilitada no Miro: listar todas as suposições que o time está a fazer sobre os utilizadores e o produto, e mapeá-las numa matriz de dois eixos — quanto impacto teria se a suposição estivesse errada (alto/baixo) × quanta certeza temos de que é verdade (alta/baixa). As suposições no quadrante "alto impacto, baixa certeza" são as prioridades de pesquisa.

```
Assumption Map:

                    ALTA CERTEZA
                         │
    ┌────────────────────┼────────────────────┐
    │                    │                    │
ALTO│  Validar em        │   Continuar —      │
IMPA│  seguida           │   em bom caminho   │
CTO │                    │                    │
    │────────────────────┼────────────────────│
BAIXO                    │                    │
IMPA│  Ignorar por       │   Monitorar        │
CTO │  enquanto          │   (baixa prioridade│
    │                    │   )                │
    └────────────────────┼────────────────────┘
                         │
                    BAIXA CERTEZA
```

### Benefícios gerais do Miro para colaboração ágil

- **Trabalho assíncrono sem perda de contexto**: um board do Miro conta a história do projeto — qualquer membro da equipa que entre depois de uma sessão consegue perceber o que foi discutido e decidido
- **Inclusão de todos os perfis**: product managers, designers, developers, e stakeholders conseguem contribuir no mesmo espaço sem necessidade de ferramentas especializadas
- **Redução do número de ferramentas**: ter pesquisa, design exploratório, e planejamento de sprint no mesmo board reduz a fragmentação de informação que frequentemente afecta equipas remotas
- **Templates prontos para qualquer metodologia**: o Miro tem templates nativos para Scrum, Kanban, OKRs, Design Thinking, e Lean UX — reduzindo o tempo de setup de workshops
- **Histórico de versões**: o Miro guarda o histórico do board, permitindo "voltar no tempo" para ver como a conversa evoluiu

---

## Resumo em uma frase

> Integrar UX em ambientes ágeis significa adoptar o Scrum (sprints com design um ciclo à frente do desenvolvimento) ou o Kanban (fluxo contínuo com WIP limits) como estrutura de trabalho, aplicar os princípios do Lean UX (hipóteses explícitas, ciclos rápidos de aprendizagem, mínimo de documentação) para guiar as decisões de design, assumir um papel activo e integrado no time de produto (não como serviço externo), e usar ferramentas como o Gather Town para replicar a colaboração espontânea de equipa remotas e o Miro como hub visual de todo o processo ágil.

---

## Conceitos relacionados para estudar a seguir

- **Dual-track Agile** — o modelo formal de separação entre discovery track (pesquisa e design) e delivery track (desenvolvimento), com sincronização regular entre as duas trilhas
- **Shape Up (Basecamp)** — metodologia alternativa ao Scrum desenvolvida pelo Basecamp, com ciclos de 6 semanas e foco em "apostar" em problemas bem definidos em vez de gerir um backlog infinito
- **OKRs (Objectives and Key Results)** — como alinhar o trabalho de UX a objetivos mensuráveis de negócio, tornando o impacto do design visível e quantificável
- **Design Sprint (Google Ventures)** — processo intensivo de 5 dias para validar uma ideia com protótipo e teste de usuário, compatível com (mas distinto de) o Scrum
- **Jobs To Be Done (JTBD)** como ferramenta de backlog — como usar a framework JTBD para escrever histórias de usuário mais centradas em progresso real do que em funcionalidades específicas