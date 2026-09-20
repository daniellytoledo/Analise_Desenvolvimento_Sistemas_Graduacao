# Pesquisa em UX

---

## 1. Definição de Problemas de Design

### Por que definir o problema antes de pesquisar
Um erro comum em projetos de produto é começar a pesquisa sem ter clareza sobre qual problema se está a tentar resolver. Pesquisa sem foco gera dados sem direção — é possível coletar centenas de respostas e ainda assim não saber o que fazer com elas. O primeiro passo de qualquer pesquisa de UX é, portanto, **definir o problema de design** que se quer investigar.

Um **problema de design** não é uma solução disfarçada ("precisamos de um botão de ajuda na tela inicial"), nem uma queixa vaga ("os usuários não gostam do produto"). É uma afirmação clara e investigável sobre uma lacuna entre a experiência atual e a experiência desejada, do ponto de vista do usuário.

### A diferença entre sintoma e problema
A maior armadilha na definição de problemas é confundir o sintoma com a causa raiz. Se a métrica de negócio mostra que 60% dos usuários abandonam o processo de cadastro, isso é um **sintoma** — não o problema. O problema pode ser qualquer número de coisas: formulário longo demais, campos com instruções confusas, falta de contexto sobre por que certas informações são pedidas, ou até desconfiança sobre privacidade de dados.

A técnica dos **5 Porquês** (originada no Sistema Toyota de Produção) é uma forma simples e poderosa de ir da superfície à causa raiz:

```
Observação: 60% dos usuários abandonam o cadastro.
Por quê?  → Ficam parados no campo "CPF" por tempo longo.
Por quê?  → Não entendem para que serve ou por que é obrigatório.
Por quê?  → Não há explicação contextual próxima ao campo.
Por quê?  → A equipe assumiu que todos os usuários sabem o que é CPF e por que é necessário.
Por quê?  → Nunca houve pesquisa com usuários fora do perfil técnico.

Problema real: usuários sem experiência prévia com serviços financeiros digitais
não entendem por que dados pessoais como CPF são necessários,
gerando desconfiança e abandono.
```

A pesquisa de UX investiga esse problema real — não o sintoma na superfície.

### Frameworks para definir o problema

**Declaração de problema (Problem Statement)**
Estrutura clássica para articular um problema de design de forma centrada no usuário:

> *[Persona] precisa de [necessidade ou objetivo] porque [insight sobre a motivação ou contexto].*

Exemplo:
> *Carolina (professora, 37 anos) precisa encontrar recursos didáticos confiáveis de forma rápida porque não tem tempo livre para avaliar cada ferramenta individualmente durante o semestre.*

**POV (Point of View)**
Variação mais elaborada, usada no Design Thinking (ver `05_design_thinking_empatia_definicao.md`):
> *Usuário: [descrição breve]. Necessidade: [necessidade em termos de verbo — não de solução]. Insight: [por quê — descoberta surpreendente da pesquisa de empatia].*

**Hipóteses de design**
Antes de pesquisar, é útil documentar explicitamente as suposições e hipóteses que a equipe tem sobre o problema — para que a pesquisa possa validá-las ou refutá-las deliberadamente:

```
Hipóteses a testar:
H1: Os usuários abandonam o cadastro porque o formulário é muito longo.
H2: Os usuários não confiam na plataforma com os seus dados pessoais.
H3: Os usuários não entendem o valor que receberão ao completar o cadastro.
```

Documentar hipóteses antes da pesquisa tem dois benefícios: direciona as perguntas de pesquisa, e protege contra o viés de confirmação — a tendência de só "ver" nos dados o que já se acreditava.

### Perguntas de pesquisa
Com o problema definido, o passo seguinte é traduzir esse problema em **perguntas de pesquisa** — as questões específicas que a pesquisa precisa responder.

Boas perguntas de pesquisa:
- São investigáveis (podem ser respondidas com métodos de pesquisa)
- São abertas (não pressupõem a resposta)
- São específicas o suficiente para orientar a coleta de dados

Exemplos:
- "Que informações os usuários procuram antes de decidir completar o cadastro?"
- "Em que momento exato do fluxo de cadastro a maioria dos usuários abandona?"
- "Que emoções os usuários relatam durante o processo de cadastro?"

---

## 2. Técnicas Qualitativas vs. Quantitativas

### A distinção fundamental
Pesquisa de UX usa duas grandes categorias de métodos, cada uma respondendo a perguntas diferentes:

| | Qualitativa | Quantitativa |
|---|---|---|
| **Pergunta que responde** | *Por quê? Como?* | *Quanto? Quantos? Com que frequência?* |
| **Tipo de dado** | Palavras, comportamentos, histórias | Números, estatísticas, métricas |
| **Tamanho de amostra** | Pequeno (5–30 pessoas) | Grande (100+ respostas) |
| **O que revela** | Motivações, necessidades, contexto, "porquês" | Padrões, frequências, magnitude dos problemas |
| **Flexibilidade** | Alta — pode explorar temas inesperados | Baixa — responde às perguntas previamente definidas |
| **Quando usar** | Exploração, entendimento profundo, descoberta | Validação, medição, priorização |

A metáfora mais usada para ilustrar a diferença: métodos quantitativos dizem *o quê* está acontecendo; métodos qualitativos dizem *por que* está acontecendo. Um produto digital bem investigado precisa de ambos.

### Métodos qualitativos

**Entrevistas em profundidade**
Conversas individuais, semi-estruturadas, com usuários reais — o método mais central da pesquisa qualitativa de UX. Permitem explorar motivações, contextos e comportamentos com uma riqueza que nenhum questionário consegue capturar.

*Estrutura típica de uma entrevista de UX:*
- **Abertura (5 min)**: apresentação, explicação dos objetivos, permissão para gravar, deixar o entrevistado confortável
- **Contexto (10 min)**: perguntas amplas sobre rotina e contexto do tema ("Me conta como é o seu dia a dia...")
- **Tema central (20–30 min)**: exploração do problema específico, com sondas abertas
- **Fechamento (5 min)**: "Há algo que você gostaria de adicionar que não foi perguntado?" — frequentemente produz os insights mais inesperados

*Exemplos de perguntas eficazes vs. ineficazes:*

| ❌ Ineficaz | ✅ Eficaz |
|---|---|
| "Você usaria uma funcionalidade X?" | "Me conta sobre a última vez que você tentou fazer X." |
| "O que você acha do produto?" | "O que aconteceu quando você tentou fazer Y pela última vez?" |
| "Você acha que isso seria útil?" | "Com que frequência você precisa fazer Z? Como você faz hoje?" |

**Testes de usabilidade**
O usuário realiza tarefas específicas num produto (real ou protótipo) enquanto o pesquisador observa — o objetivo é identificar onde a interface cria fricção, confusão ou erros. O protocolo **"pense em voz alta"** (*think aloud*) pede ao usuário que verbalize os seus pensamentos durante a tarefa, revelando o modelo mental que está a usar.

*Modalidades:*
- **Moderado presencial**: pesquisador no mesmo espaço, pode fazer perguntas durante a sessão
- **Moderado remoto**: via videochamada (Zoom, Google Meet) — mais fácil de recrutar participantes
- **Não-moderado**: o usuário realiza as tarefas sozinho, numa plataforma automatizada (Maze, UserTesting) — mais escalável, menos rico em contexto

**Card Sorting**
Participantes organizam cartões com conteúdo ou funcionalidades em grupos que fazem sentido para eles, e nomeiam esses grupos. Revela como os usuários categorizam mentalmente a informação — fundamental para arquitetura de informação e navegação.

- **Card Sorting Aberto**: participantes criam e nomeiam os grupos livremente — revela categorias mentais naturais
- **Card Sorting Fechado**: grupos pré-definidos, participantes apenas distribuem os itens — valida uma estrutura existente

**Tree Testing**
O inverso do card sorting — dado uma estrutura de navegação, pede-se ao participante que encontre onde estaria determinado item, sem ver o design real da interface. Valida se a hierarquia de informação faz sentido antes de investir em design visual.

**Observação etnográfica**
Observar os usuários no seu contexto real de uso — no trabalho, em casa, em deslocamento. Revela comportamentos que as pessoas não relatam em entrevistas porque são tácitos (fazem sem perceber) ou porque idealizam as suas próprias práticas.

**Pesquisa de guerrilha (Guerrilla Research)**
Testes rápidos e informais com pessoas em cafés, centros comerciais ou remotamente — sem recrutamento formal, em 10–15 minutos por sessão. Útil quando o tempo é curto e o objetivo é uma validação rápida de conceitos.

### Métodos quantitativos

**Questionários e surveys**
Conjuntos de perguntas fechadas distribuídas a uma amostra maior de usuários. Úteis para medir frequência, preferências, satisfação e características demográficas. A análise é estatística — médias, percentagens, correlações.

*Boas práticas em surveys:*
- Começar com perguntas mais fáceis e contextuais, aprofundar gradualmente
- Usar escalas validadas (Likert de 5 ou 7 pontos, NPS, SUS) para comparabilidade
- Testar o survey com 3–5 pessoas antes de distribuir (cognitive interviewing)
- Evitar perguntas duplas ("O produto é fácil e rápido de usar?")
- Limitar o tamanho — surveys longos têm alta taxa de abandono

**Analytics e dados comportamentais**
Dados quantitativos gerados automaticamente pelo produto — sem intervenção do pesquisador:
- **Pageviews e sessões**: quais telas são mais visitadas
- **Funis de conversão**: onde os usuários abandonam um fluxo
- **Heatmaps**: onde os usuários clicam, movem o mouse ou tocam na tela
- **Session recordings**: gravações de sessões de usuários reais navegando no produto
- **A/B Testing**: comparar duas versões de um elemento para medir qual performa melhor

Ferramentas comuns: **Google Analytics**, **Hotjar** (heatmaps + gravações), **Mixpanel** (análise de eventos), **Amplitude** (product analytics).

**System Usability Scale (SUS)**
Uma das ferramentas quantitativas mais usadas em UX — um questionário de 10 itens (com escala Likert de 5 pontos) que gera uma pontuação de 0 a 100 representando a usabilidade percebida de um produto. Tem a vantagem de ser simples, rápido e produzir uma pontuação comparável a benchmarks da indústria.

**Net Promoter Score (NPS)**
Uma única pergunta — "Em uma escala de 0 a 10, qual é a probabilidade de você recomendar este produto a um amigo?" — complementada por uma pergunta aberta sobre o motivo. Classifica os respondentes em Promotores (9–10), Neutros (7–8) e Detratores (0–6). O NPS = % Promotores − % Detratores.

---

## 3. Ferramentas e Recursos de Pesquisa

### Ferramentas de recrutamento de participantes
O recrutamento é frequentemente o maior gargalo em pesquisa de UX — encontrar as pessoas certas para participar, nos prazos disponíveis.

- **UserTesting**: plataforma que conecta pesquisadores com painéis de participantes e permite testes não-moderados automatizados
- **Respondent.io**: especializado em recrutamento de perfis específicos (ex: profissionais de saúde, gerentes de TI)
- **Maze Panel**: painel integrado à plataforma Maze para testes não-moderados
- **Redes sociais e comunidades**: para produtos de nicho, grupos no LinkedIn, Facebook ou Reddit com o público-alvo podem ser eficazes e gratuitos
- **Base de usuários existente**: o recrutamento mais fácil e com melhor contexto — utilizadores reais do produto que se voluntariam

### Ferramentas de condução de pesquisa

| Método | Ferramenta |
|---|---|
| Entrevistas remotas | Zoom, Google Meet, Microsoft Teams |
| Testes de usabilidade não-moderados | Maze, UserTesting, Lyssna (antigo UsabilityHub) |
| Card sorting e tree testing | Optimal Workshop, Maze |
| Gravações de sessão e heatmaps | Hotjar, Microsoft Clarity (gratuito), FullStory |
| Surveys e questionários | Google Forms, Typeform, SurveyMonkey |
| Colaboração e síntese | Miro, FigJam, Notion |
| Gestão de dados de pesquisa | Dovetail, Notion, Airtable |

### Ferramentas de análise e síntese

**Dovetail**
Plataforma especializada em gestão de dados de pesquisa qualitativa — permite importar transcrições de entrevistas, tagear trechos com insights, criar padrões entre sessões diferentes, e colaborar com a equipe na análise. Muito mais eficiente do que planilhas para projetos com muitas entrevistas.

**Notion / Confluence**
Documentação de pesquisa — repositório central onde todos os estudos, insights e decisões baseadas em pesquisa ficam acessíveis à equipe de produto.

**Figma / Miro / FigJam**
Para síntese visual — affinity mapping, mapa de jornada, personas, e outros entregáveis de pesquisa que se beneficiam de uma representação espacial e visual (ver `05_design_thinking_empatia_definicao.md`).

---

## 4. Organização e Análise de Dados de Pesquisa

### O desafio da síntese qualitativa
Depois de conduzir 10 entrevistas de 45 minutos cada, o pesquisador tem aproximadamente 7,5 horas de material bruto. O desafio — e o valor central da pesquisa de UX — é transformar esse volume de dados não-estruturados em insights acionáveis que possam informar decisões de design.

### O processo de análise qualitativa passo a passo

**1. Transcrição**
Converter as gravações em texto — manualmente ou usando ferramentas automáticas (Otter.ai, Descript, Whisper da OpenAI). A transcrição automática precisa sempre de revisão, mas reduz drasticamente o tempo do processo.

**2. Leitura e marcação (coding)**
Ler o material e marcar (ou "taguear") trechos relevantes com etiquetas que descrevem o que está sendo dito:
- `frustração-cadastro`
- `workaround-descoberto`
- `motivação-uso`
- `momento-confusão`

Este processo pode ser feito no Dovetail, no Notion, ou mesmo num documento com highlights coloridos — o importante é criar uma camada de organização sobre o material bruto.

**3. Affinity Mapping (Diagrama de Afinidade)**
Com os trechos marcados, agrupam-se os que falam de temas semelhantes — física ou digitalmente no Miro/FigJam — deixando padrões emergirem dos dados de baixo para cima, sem categorias pré-definidas.

```
Processo de Affinity Mapping:

1. Cada insight relevante numa nota individual (post-it)
2. Agrupar notas por afinidade — deixar o agrupamento emergir
3. Nomear cada grupo com um insight, não uma categoria:
   ❌ "Problemas no cadastro" (categoria)
   ✅ "Usuários não confiam em dar dados pessoais sem contexto" (insight)
4. Identificar grupos maiores (temas) agrupando os grupos menores
```

**4. Identificação de padrões e insights**
Com os grupos formados, identificar quais padrões aparecem em múltiplas sessões — esses são os insights mais robustos e acionáveis. Um padrão observado em 1 das 10 entrevistas é uma observação; observado em 7 das 10 é um insight.

**5. Priorização de insights**
Nem todos os insights têm o mesmo peso. Critérios de priorização:
- **Frequência**: quantos usuários mencionaram?
- **Intensidade**: quão forte foi a reação (frustração intensa vs. pequeno incômodo)?
- **Impacto no objetivo de negócio**: resolve um problema que afeta a conversão ou retenção?
- **Viabilidade de endereçar**: a equipe pode resolver isso num prazo razoável?

**6. Entregáveis de pesquisa**
Os insights sintetizados são comunicados à equipe em formatos visuais e narrativos:

- **Relatório de pesquisa**: documento com metodologia, participantes, principais descobertas e recomendações
- **Topline summary**: versão de 1 página com os 3–5 insights mais importantes — para quem não tem tempo de ler o relatório completo
- **Personas** (ver `05_design_thinking_empatia_definicao.md`): personagens que condensam padrões de comportamento e necessidades encontrados na pesquisa
- **Mapa de jornada**: visualização da experiência atual do usuário com os seus pontos de dor e momentos de satisfação
- **"How Might We..."**: transformação dos pontos de dor em oportunidades de design acionáveis

### Análise de dados quantitativos
Para dados de survey e analytics, a análise é estatística — mas não precisa ser sofisticada para ser útil:

- **Distribuição de frequências**: quantos respondentes escolheram cada opção?
- **Médias e medianas**: qual o valor central em escalas Likert?
- **Segmentação**: os resultados diferem entre grupos diferentes (por faixa etária, dispositivo, frequência de uso)?
- **Cruzamento com dados qualitativos**: os números confirmam o que as entrevistas sugeriram? Onde há contradições?

### Triangulação — combinando múltiplos métodos
A análise mais robusta combina dados de diferentes fontes para triangular os achados:

```
Dado quantitativo: 60% dos usuários abandonam na tela de CPF (analytics)
        +
Dado qualitativo: "Fiquei com medo de dar meu CPF pra um site que nunca usei" (entrevista)
        +
Dado comportamental: usuários param e saem sem clicar em nada na tela de CPF (session recording)
        =
Insight triangulado: o abandono no CPF é causado por desconfiança, não por dificuldade técnica —
a solução é adicionar contexto de segurança e transparência, não simplificar o campo.
```

---

## 5. Google Forms para Coleta de Dados

### Por que o Google Forms
O **Google Forms** é a ferramenta de criação de surveys mais usada no mundo pela combinação de fatores que dificilmente qualquer outra ferramenta gratuita consegue igualar: acessível a qualquer pessoa com uma conta Google, sem custo, sem limite de respostas, com coleta automática no Google Sheets, e extremamente simples de usar para quem cria e para quem responde.

Para pesquisa de UX, é especialmente adequado para:
- Screeners de recrutamento (filtrar participantes antes de entrevistas)
- Surveys de satisfação e NPS
- Coleta de dados demográficos e contextuais
- Questionários pós-teste (ex: SUS após um teste de usabilidade)
- Pesquisas rápidas de validação de conceito

### Tipos de questão disponíveis no Google Forms

| Tipo | Uso em pesquisa de UX |
|---|---|
| **Resposta curta** | Nome, e-mail, respostas textuais breves |
| **Parágrafo** | Questões abertas qualitativas ("Descreva com suas palavras...") |
| **Múltipla escolha** | Selecionar uma opção de várias — segmentação de perfil |
| **Caixas de seleção** | Selecionar múltiplas opções — hábitos e comportamentos |
| **Lista suspensa** | Seleção de uma lista longa — faixa etária, estado, etc. |
| **Escala linear** | Escala de concordância (Likert) — satisfação, usabilidade |
| **Grade de múltipla escolha** | Múltiplas questões com a mesma escala — SUS |
| **Grade de caixas de seleção** | Tabela com múltipla seleção por linha |
| **Data e hora** | Dados cronológicos — quando usa o produto, frequência |

### Criar um survey eficaz no Google Forms — passo a passo

1. **Criar o formulário**: aceder a [forms.google.com](https://forms.google.com) e clicar em "+" para um novo formulário
2. **Definir título e descrição**: o título deve deixar claro o propósito do survey; a descrição deve incluir quanto tempo levará e como os dados serão usados (transparência é boa prática e melhora a taxa de resposta)
3. **Estruturar em seções**: usar seções para organizar o survey em blocos temáticos, tornando-o mais fácil de navegar. Cada seção pode ter lógica condicional ("Se respondeu X na pergunta 3, ir para a seção B")
4. **Adicionar perguntas de aquecimento**: começar com perguntas simples e não ameaçadoras (perfil, contexto de uso) antes das perguntas mais específicas e sensíveis
5. **Configurar obrigatoriedade**: marcar apenas as perguntas realmente necessárias como obrigatórias — perguntas opcionais têm menor atrito e ainda fornecem dados úteis quando respondidas
6. **Ativar coleta de e-mail (se necessário)**: em "Configurações" → "Respostas" → "Coletar endereços de e-mail" — útil para follow-up ou validação de respondentes únicos
7. **Configurar confirmação**: personalizar a mensagem de confirmação após submissão — uma oportunidade de agradecer e mencionar os próximos passos
8. **Testar antes de distribuir**: enviar para 2–3 pessoas da equipe para verificar fluxo, erros de digitação, e se as perguntas fazem sentido para alguém fora do contexto de criação

### Analisar os dados no Google Sheets

Após coletar respostas, os dados ficam disponíveis de duas formas:

**Resumo visual automático (aba "Respostas")**
O Google Forms gera automaticamente gráficos de pizza e barra para perguntas fechadas, e lista as respostas abertas sequencialmente. Útil para uma primeira leitura rápida dos dados.

**Exportação para Google Sheets**
Clicar no ícone de Sheets na aba "Respostas" cria automaticamente uma planilha com todos os dados, onde cada coluna é uma pergunta e cada linha é uma resposta. A partir daí, é possível:
- Filtrar e ordenar por qualquer critério
- Calcular médias e medianas de escalas Likert
- Criar tabelas dinâmicas para cruzar variáveis
- Gerar gráficos customizados

```
Exemplo de análise básica no Sheets:

Pergunta: "Em uma escala de 1 a 5, como avalia a facilidade de uso?"
Respostas: 3, 5, 2, 4, 3, 1, 4, 5, 3, 2

=AVERAGE(B2:B11) → Média: 3.2
=MEDIAN(B2:B11) → Mediana: 3
=COUNTIF(B2:B11,">=4") → Respostas positivas (4 ou 5): 4

Interpretação: média de 3.2/5 — maioria neutro ou negativo.
Prioridade alta para melhoria de usabilidade.
```

### Screener de recrutamento com Google Forms — exemplo prático
Um screener é um survey curto para filtrar candidatos a participantes de pesquisa, garantindo que os selecionados correspondem ao perfil de usuário relevante para o estudo.

Estrutura típica de um screener:

```
SCREENER — Pesquisa sobre apps de finanças pessoais

1. Qual a sua faixa etária?
   ○ 18-24  ○ 25-34  ○ 35-44  ○ 45-54  ○ 55+
   [Lógica: excluir menores de 18]

2. Com que frequência você usa apps de finanças pessoais?
   ○ Nunca         [→ Desqualificado]
   ○ Raramente (menos de 1x/mês)
   ○ Ocasionalmente (1-3x/mês)  [→ Qualificado se as outras respostas ok]
   ○ Frequentemente (1x/semana ou mais)  [→ Qualificado]

3. Quais apps de finanças você usa? (selecione todos que aplicam)
   □ Nubank    □ C6 Bank    □ Mercado Pago
   □ Outros: _____
   [Informação contextual, não critério de exclusão]

4. Você estaria disponível para uma entrevista de 45 minutos online?
   ○ Sim  ○ Não  [→ Não = desqualificado]

5. Se sim, deixe seu nome e e-mail para entrarmos em contato:
   Nome: _____  E-mail: _____
```

---

## Resumo em uma frase

> Pesquisa em UX começa por definir claramente o problema a investigar (distinguindo sintomas de causas raiz e documentando hipóteses explícitas), usa métodos qualitativos para entender o *porquê* e quantitativos para medir o *quanto*, conta com ferramentas que vão do Google Forms ao Dovetail passando por Maze e Hotjar, e transforma dados brutos em insights acionáveis através de síntese por affinity mapping e triangulação de múltiplas fontes — sempre com o objetivo final de informar decisões de design baseadas em evidências reais de usuários reais.

---

## Conceitos relacionados para estudar a seguir

- **Research Operations (ReOps)** — a prática de sistematizar e escalar a função de pesquisa numa organização: templates, repositórios de insights, painéis de participantes e processos de recrutamento reutilizáveis
- **Análise estatística para UX** — conceitos básicos de estatística que todo pesquisador de UX deveria dominar: tamanho de amostra, significância estatística, correlação vs. causalidade
- **Jobs To Be Done (JTBD)** como framework de entrevista — uma abordagem específica de condução de entrevistas focada em entender o "trabalho" que o usuário está a tentar fazer, e as circunstâncias em que decide "contratar" um produto para fazê-lo
- **Ética em pesquisa com usuários** — consentimento informado, anonimização de dados, compensação justa de participantes, e cuidados especiais com grupos vulneráveis
- **Continuous Discovery Habits** — abordagem de Teresa Torres para integrar pesquisa contínua com usuários ao ciclo regular de desenvolvimento de produto, em vez de pesquisa apenas em fases discretas