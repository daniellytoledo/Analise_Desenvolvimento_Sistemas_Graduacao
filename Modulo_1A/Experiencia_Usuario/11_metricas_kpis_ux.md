# Métricas e KPIs em UX

---

## 1. Definição e Importância de Métricas em UX

### O que são métricas em UX
**Métricas de UX** são medidas quantificáveis que permitem avaliar a qualidade da experiência que os usuários têm ao interagir com um produto digital. São a resposta à pergunta que todo gestor eventualmente faz ao designer: "como sabemos que o design está funcionando?"

Sem métricas, o design vive numa zona de subjectividade — "achamos que ficou melhor", "parece mais intuitivo", "o feedback do cliente foi positivo". Com métricas, é possível afirmar: "a taxa de conclusão do cadastro aumentou de 43% para 61% após o redesign", "o tempo médio para completar a tarefa reduziu de 4 minutos para 1 minuto e 45 segundos", "o NPS subiu 18 pontos no trimestre seguinte ao lançamento da nova navegação".

### KPIs vs. Métricas
Os termos são frequentemente usados de forma intercambiável, mas têm uma distinção importante:

- **Métrica**: qualquer valor mensurável que rastreia um aspecto do produto (ex: número de pageviews, taxa de bounce, tempo médio de sessão)
- **KPI (Key Performance Indicator — Indicador-Chave de Desempenho)**: uma métrica que foi escolhida especificamente por ser um indicador crítico do sucesso dos objetivos do produto. Nem toda métrica é um KPI, mas todo KPI é uma métrica.

A distinção prática: uma equipa de produto pode rastrear dezenas de métricas, mas escolhe 3–5 KPIs que representam as apostas mais importantes do momento. Se o KPI vai bem, a estratégia está a funcionar; se vai mal, algo precisa de mudar.

### Por que métricas são essenciais para UX

**Tornam o valor do design visível**
UX é frequentemente visto como custo em vez de investimento porque o seu impacto é difícil de quantificar quando não há métricas. Quando o designer consegue mostrar que o redesign de um fluxo aumentou a conversão em X%, o investimento em design ganha credibilidade e prioridade dentro da organização.

**Orientam decisões de priorização**
Com métricas, é possível comparar o impacto potencial de diferentes iniciativas de design e priorizar com base em evidência — não em opinião. "Devemos resolver o problema A ou o problema B primeiro?" deixa de ser uma discussão subjectiva e passa a ser respondida pelos dados.

**Detectam problemas invisíveis**
Um usuário raramente liga para reclamar que demorou 3 cliques a mais do que deveria para encontrar uma funcionalidade — simplesmente para de usar o produto. Métricas como taxa de abandono e tempo em tarefa detectam esses problemas silenciosos que os canais de feedback directo não capturam.

**Criam cultura de design baseado em evidências**
Quando a equipa acompanha métricas regularmente, as discussões de design mudam de "acho que deveria ser assim" para "os dados mostram que os usuários estão a ter dificuldade aqui — vamos testar esta hipótese". Esta mudança cultural é uma das maiores contribuições que a função de UX pode fazer para um time de produto.

**Fecham o loop de aprendizagem**
O processo de design iterativo (Design Thinking, Lean UX) só é completo quando há validação pós-lançamento. Métricas são o mecanismo que fecha esse loop — o que o design previu que melhoraria, melhorou de facto?

---

## 2. Métricas Comuns e Como Usá-las — cinco pilares

### Os cinco pilares de métricas em UX (HEART Framework)
O **HEART Framework** foi desenvolvido pela Google (Kerry Rodden, 2010) especificamente para métricas de produto e UX. O acrônimo representa cinco categorias de métricas que, juntas, cobrem as dimensões mais importantes da experiência do usuário:

```
H — Happiness      (Satisfação)
E — Engagement     (Engajamento)
A — Adoption       (Adoção)
R — Retention      (Retenção)
T — Task Success   (Sucesso na Tarefa)
```

### H — Happiness (Satisfação)

Mede a percepção subjectiva do usuário sobre o produto — como ele se sente ao usá-lo. É a única categoria que requer coleta de dados qualitativos ou surveys, pois não pode ser inferida apenas do comportamento observável.

**Métricas comuns:**
- **CSAT (Customer Satisfaction Score)**: "Como você avalia a sua experiência?" (escala de 1–5 ou 1–10). Calculado como média das respostas ou percentagem de respostas positivas.
- **NPS (Net Promoter Score)**: "Em uma escala de 0 a 10, qual é a probabilidade de você recomendar este produto?" — NPS = % Promotores (9–10) − % Detratores (0–6)
- **SUS (System Usability Scale)**: questionário padronizado de 10 itens que gera um score de 0 a 100 representando a usabilidade percebida. Score acima de 68 é considerado acima da média.
- **Sentiment analysis**: análise do tom emocional de reviews, comentários de redes sociais, e respostas abertas de surveys.

**Como usar:** surveys de satisfação devem ser contextuais (aparecer após uma tarefa específica) em vez de genéricos (pop-up aleatório). Satisfação medida logo após uma interação é mais precisa do que medida dias depois.

### E — Engagement (Engajamento)

Mede a profundidade e frequência com que os usuários interagem com o produto — não apenas se entraram, mas o que fizeram lá dentro.

**Métricas comuns:**
- **Sessões por usuário** por período (diário, semanal, mensal)
- **Duração média da sessão** — mais tempo não é necessariamente melhor; depende do tipo de produto (uma sessão longa num banco digital pode indicar dificuldade, não engajamento)
- **Páginas / telas por sessão**
- **Taxa de interação com funcionalidades específicas** — percentagem de usuários que usaram uma funcionalidade ao menos uma vez num período
- **DAU/WAU/MAU** (Daily/Weekly/Monthly Active Users) e as suas razões (DAU/MAU — "stickiness ratio")
- **Depth of use** — quantas funcionalidades diferentes do produto o usuário usa

**Como usar:** selecionar as métricas de engajamento que reflectem o comportamento que o produto quer incentivar — não rastrear tudo por padrão. Um app de meditação quer sessões frequentes e curtas; uma plataforma de design quer sessões longas e profundas.

### A — Adoption (Adoção)

Mede a adopção de novas funcionalidades ou da plataforma como um todo por novos usuários.

**Métricas comuns:**
- **Taxa de adopção de nova funcionalidade**: % de usuários elegíveis que usaram a funcionalidade ao menos uma vez num período após o lançamento
- **Taxa de activação** (activation rate): % de novos usuários que completam uma ação-chave de "primeiro valor" (o "aha moment") — ex: criar o primeiro projeto, conectar o primeiro serviço, ou completar o perfil
- **Time to first value** (TTFV): tempo médio desde o cadastro até o usuário experimentar o valor central do produto
- **Feature adoption funnel**: funil que mostra quantos usuários chegaram à funcionalidade, iniciaram o uso, e completaram o fluxo

**Como usar:** a adopção é especialmente importante no onboarding de novos usuários — uma baixa taxa de activação indica que o produto não está a conseguir demonstrar o seu valor suficientemente rápido. A combinação de analytics (onde os usuários param) + pesquisa qualitativa (por que param) é fundamental para diagnosticar problemas de adopção.

### R — Retention (Retenção)

Mede se os usuários continuam a usar o produto ao longo do tempo — a métrica mais correlacionada com saúde de negócio a longo prazo.

**Métricas comuns:**
- **Retention rate**: % de usuários que retornam ao produto em períodos subsequentes (D1, D7, D30 — retenção após 1, 7, e 30 dias)
- **Churn rate**: % de usuários que abandonam o produto num período — o inverso da retenção
- **Cohort analysis**: análise de retenção por coorte (grupo de usuários que se cadastraram no mesmo período) — permite identificar se as melhorias ao longo do tempo estão a impactar a retenção de novos usuários
- **Return frequency**: com que frequência os usuários retornam espontaneamente

**Como usar:** a retenção é o "teste de verdade" do UX — um produto que as pessoas só usam uma vez pode ter uma primeira experiência excelente mas uma proposta de valor fraca, ou pode ter uma experiência tão frustrante que os usuários não voltam. Distinguir os dois casos requer combinar dados de retenção com pesquisa qualitativa.

### T — Task Success (Sucesso na Tarefa)

Mede a eficácia com que os usuários conseguem completar as tarefas que vieram ao produto realizar.

**Métricas comuns:**
- **Completion rate** (taxa de conclusão): % de usuários que completam uma tarefa com sucesso — medida em testes de usabilidade ou inferida de analytics
- **Time on task**: tempo médio para completar uma tarefa — em contexto de teste de usabilidade
- **Error rate**: frequência e tipo de erros cometidos durante a execução de uma tarefa
- **Abandonment rate** (taxa de abandono): % de usuários que iniciam mas não completam um fluxo específico (checkout, cadastro, configuração)
- **Efficiency rate**: combinação de task completion e time on task — quão rápido e com que sucesso os usuários completam as tarefas

**Como usar:** métricas de sucesso de tarefa são as mais directamente ligadas a usabilidade e são as mais accionáveis para designers — se a taxa de conclusão do checkout é 40%, existe um problema de design específico a resolver. Combinar completion rate com session recordings (ver ponto 3) permite identificar exactamente onde no fluxo os usuários falham.

---

## 3. Coleta e Análise de Dados de Uso — ferramentas

### Google Analytics (GA4) para UX

O **Google Analytics** (actualmente na versão GA4 — Google Analytics 4) é a ferramenta de analytics mais usada no mundo — gratuita, poderosa, e integrada nativamente com o ecossistema Google (Google Search Console, Google Ads, Looker Studio).

**O que o GA4 oferece para UX:**
- **Relatórios de comportamento**: fluxo de navegação entre páginas, páginas de entrada e saída, bounce rate por página
- **Funis de conversão**: onde os usuários abandonam um fluxo definido (ex: cadastro, checkout)
- **Segmentação de audiência**: comportamento por dispositivo, localização, canal de aquisição, e segmentos personalizados
- **Eventos personalizados**: rastrear qualquer interação específica (clique num botão, scroll até 75% da página, tempo na página) com configuração de eventos
- **Relatórios de engajamento**: sessões, usuários activos, duração média de sessão, pages/session
- **Exploração (Explore)**: interface de análise avançada para criar funis, análises de coorte, e segmentação personalizada

**Limitações para UX:** o GA4 mostra *o quê* acontece (quão percentagem abandona num ponto) mas não *porquê* (o que os usuários estavam a tentar fazer quando pararam). É uma ferramenta de diagnóstico que aponta onde investigar, não uma ferramenta que explica comportamento.

### Hotjar

O **Hotjar** ([hotjar.com](https://hotjar.com)) é a ferramenta de analytics comportamental mais popular entre equipas de UX — combina heatmaps, gravações de sessão, e feedback de usuários numa única plataforma.

**Funcionalidades principais:**

*Heatmaps*
Visualizações que mostram onde os usuários clicam, movem o cursor, e rolam a página — representadas como mapa de calor onde as áreas mais quentes indicam mais actividade.

```
Tipos de heatmap no Hotjar:
Click map:  onde os usuários clicam (identifica elementos confusos ou ignorados)
Move map:   onde o cursor se move (indica atenção visual no desktop)
Scroll map: até onde os usuários rolam a página (conteúdo abaixo da "dobra")
```

*Session Recordings (gravações de sessão)*
Gravações anónimas de sessões reais de usuários — é possível ver exactamente o que cada usuário fez, onde hesitou, onde clicou múltiplas vezes sem resultado, e onde abandonou. Extremamente revelador para diagnosticar problemas de usabilidade em produção.

*Feedback in-page (Incoming Feedback)*
Um widget que permite ao usuário destacar qualquer elemento da página e deixar um comentário ou emoção — feedback contextual extremamente preciso.

*Surveys e polls*
Surveys curtos que podem ser acionados por comportamento (ex: ao detectar intenção de saída, ou após o usuário completar uma acção específica).

**Limitações:** a análise de sessões requer tempo — revisar centenas de gravações para encontrar padrões não é escalável sem uma estratégia de filtragem. O Hotjar oferece filtros por dispositivo, URL, duração de sessão, e eventos personalizados para reduzir o volume a analisar.

### Crazy Egg

O **Crazy Egg** ([crazyegg.com](https://crazyegg.com)) é uma ferramenta especializada em heatmaps e testes A/B, com uma abordagem ligeiramente diferente do Hotjar.

**Funcionalidades distintivas:**
- **Confetti map**: mostra cada clique individual como um ponto colorido, segmentado por fonte de tráfego — permite ver se usuários vindos de Google clicam em lugares diferentes dos que vieram de redes sociais
- **Overlay report**: mostra as percentagens de cliques em cada elemento da página, útil para identificar hierarquia de atenção
- **Scroll map com benchmarks**: comparação do scroll rate da página com médias do setor
- **A/B Testing integrado**: criar e monitorar testes A/B directamente na plataforma sem necessidade de desenvolvimento adicional
- **Error click tracking**: identifica automaticamente cliques em elementos que não são interactivos (sinalizando confusão do usuário)

**Diferença face ao Hotjar:** o Crazy Egg tem um foco maior em optimização de conversão (CRO — Conversion Rate Optimization) com os seus A/B tests integrados, enquanto o Hotjar tem um foco mais amplo em pesquisa qualitativa de UX (surveys, feedback).

### Mixpanel

O **Mixpanel** ([mixpanel.com](https://mixpanel.com)) é uma ferramenta de product analytics orientada a eventos — em vez de rastrear pageviews (como o GA4), rastreia acções específicas que os usuários realizam dentro do produto.

**O que torna o Mixpanel diferente:**

*Análise baseada em eventos*
Em vez de "o usuário visitou a página X", o Mixpanel rastreia "o usuário clicou no botão Adicionar ao Carrinho", "o usuário completou o onboarding", "o usuário exportou um relatório". Isto dá uma visão muito mais precisa do comportamento real do que pageviews.

*Funis detalhados*
Funis de conversão com detalhe de cada passo — drop-off por passo, tempo médio entre passos, e segmentação por qualquer propriedade do usuário.

*Análise de coorte e retenção*
A análise de coorte do Mixpanel é especialmente poderosa — permite ver se a retenção de usuários que se cadastraram depois de um redesign específico é diferente da de usuários anteriores.

*Flows (análise de fluxo)*
Visualização de todos os caminhos que os usuários percorrem depois de um evento específico — quais os próximos passos mais comuns após um usuário completar o checkout? Quais os caminhos que levam ao cancelamento?

*Segmentação em tempo real*
Criar segmentos de usuários com base em qualquer combinação de comportamentos e propriedades, e analisar métricas separadamente para cada segmento.

**Quando usar Mixpanel em vez de GA4:** quando o produto é um web app ou app móvel com acções complexas dentro de sessões (não apenas navegação entre páginas), e quando a equipa precisa de analytics orientados a produto em vez de orientados a marketing.

### Comparativo das ferramentas

| Ferramenta | Tipo | Melhor para | Custo base |
|---|---|---|---|
| **GA4** | Web analytics | Tráfego, aquisição, funis de conversão | Gratuito |
| **Hotjar** | Behavioural analytics | Heatmaps, session recordings, feedback qualitativo | Gratuito (limitado) |
| **Crazy Egg** | CRO analytics | Heatmaps + A/B testing integrado | Pago ($49+/mês) |
| **Mixpanel** | Product analytics | Análise de eventos, retenção, coortes | Gratuito (até 20M eventos/mês) |

---

## 4. Interpretação de Dados e Ferramentas de Análise

### O processo de interpretar dados de UX

Coletar dados é o passo inicial — o valor real está em **interpretar** esses dados correctamente para chegar a conclusões accionáveis. A interpretação precisa ser feita com cuidado para evitar armadilhas comuns:

**Correlação ≠ causalidade**
Se a taxa de conversão aumentou no mesmo mês em que foi lançada uma nova funcionalidade, não significa necessariamente que a funcionalidade causou o aumento — pode ter sido uma campanha de marketing, uma sazonalidade, ou simplesmente variação normal. Isolar causalidade requer experimentos controlados (A/B tests).

**Médias que enganam**
Uma média de tempo na página de 3 minutos pode significar que a maioria dos usuários fica 3 minutos, ou que metade fica 30 segundos e metade fica 5 minutos e 30 segundos. Distribuições e medianas são frequentemente mais reveladoras do que médias.

**Dados sem contexto não dizem nada**
Uma taxa de bounce de 70% é boa ou má? Depende completamente do tipo de página — para uma landing page de campanha, pode ser excelente; para a página inicial de um web app, pode ser catastrófica. Dados de UX só fazem sentido no contexto do produto, do usuário, e dos objectivos.

**Combinar quantitativo e qualitativo**
Os dados quantitativos (analytics) mostram *o quê* está a acontecer e *onde*; os dados qualitativos (entrevistas, session recordings, feedback) mostram *porquê*. Interpretar apenas um lado leva a conclusões incompletas.

### Python para análise de dados de UX

O **Python** é a linguagem mais usada em análise de dados em geral — e pode ser aplicado a dados de UX para análises que vão além do que as ferramentas nativas oferecem.

**Bibliotecas relevantes:**

```python
# Importações essenciais para análise de dados de UX
import pandas as pd          # Manipulação e análise de dados tabulares
import numpy as np           # Operações numéricas
import matplotlib.pyplot as plt  # Visualizações básicas
import seaborn as sns        # Visualizações estatísticas mais elaboradas
import plotly.express as px  # Visualizações interactivas
```

**Exemplos de análise com Python:**

*Análise de funil de conversão exportada do GA4:*
```python
import pandas as pd
import matplotlib.pyplot as plt

# Dados exportados do GA4
funil = pd.DataFrame({
    'etapa': ['Visita', 'Página de produto', 'Carrinho', 'Checkout', 'Compra'],
    'usuarios': [10000, 6500, 2800, 1200, 480]
})

# Calcular taxa de conversão entre etapas
funil['taxa_conversao'] = funil['usuarios'] / funil['usuarios'].shift(1) * 100
funil['taxa_conversao'] = funil['taxa_conversao'].round(1)

# Calcular drop-off
funil['drop_off'] = 100 - funil['taxa_conversao']

print(funil[['etapa', 'usuarios', 'taxa_conversao', 'drop_off']])
```

*Análise de coorte de retenção:*
```python
# A análise de coorte mostra a retenção de usuários que
# se cadastraram em diferentes períodos ao longo do tempo
cohort_data = pd.read_csv('retention_data.csv')

# Criar tabela pivô para heatmap de retenção
cohort_pivot = cohort_data.pivot_table(
    index='cohort_month',
    columns='period_number',
    values='retention_rate'
)

# Visualizar como heatmap
import seaborn as sns
plt.figure(figsize=(12, 8))
sns.heatmap(cohort_pivot, annot=True, fmt='.0%', cmap='YlOrRd')
plt.title('Análise de Retenção por Coorte')
plt.xlabel('Período (meses após cadastro)')
plt.ylabel('Coorte (mês de cadastro)')
plt.show()
```

*Análise de SUS score:*
```python
# Calcular o System Usability Scale (SUS) score
sus_respostas = pd.read_csv('sus_survey.csv')

# Os itens 1, 3, 5, 7, 9 são positivos; 2, 4, 6, 8, 10 são negativos
itens_positivos = ['q1', 'q3', 'q5', 'q7', 'q9']
itens_negativos = ['q2', 'q4', 'q6', 'q8', 'q10']

# Fórmula SUS: (soma dos positivos - 5) + (25 - soma dos negativos) * 2.5
sus_respostas['score_positivos'] = sus_respostas[itens_positivos].sum(axis=1) - 5
sus_respostas['score_negativos'] = 25 - sus_respostas[itens_negativos].sum(axis=1)
sus_respostas['sus_score'] = (sus_respostas['score_positivos'] + sus_respostas['score_negativos']) * 2.5

media_sus = sus_respostas['sus_score'].mean()
print(f'SUS Score médio: {media_sus:.1f}')
print(f'Interpretação: {"Acima da média (>68)" if media_sus > 68 else "Abaixo da média (<68)"}')
```

### R para análise estatística de UX

O **R** é a linguagem de escolha para análises estatísticas mais avançadas — especialmente útil quando a equipa precisa de testar a significância estatística de resultados de A/B tests, ou realizar análises multivariadas de dados de survey.

```r
# Análise de A/B test — teste de significância estatística
# Comparar taxa de conversão de controlo vs. variante

controle_conversoes <- 480
controle_total <- 10000
variante_conversoes <- 612
variante_total <- 10000

# Teste qui-quadrado para proporções
resultado_teste <- prop.test(
  x = c(controle_conversoes, variante_conversoes),
  n = c(controle_total, variante_total),
  alternative = "two.sided"
)

cat("Taxa de conversão - Controlo:", round(controle_conversoes/controle_total*100, 2), "%\n")
cat("Taxa de conversão - Variante:", round(variante_conversoes/variante_total*100, 2), "%\n")
cat("p-value:", resultado_teste$p.value, "\n")
cat("Resultado significativo (p<0.05)?", resultado_teste$p.value < 0.05, "\n")
```

**Quando usar R vs. Python:**
- **R**: análises estatísticas formais, modelagem preditiva, gráficos estatísticos avançados, quando a equipa já tem experiência em R
- **Python**: pipeline de dados mais amplo (integração com APIs, automação), quando a equipa já usa Python para outros fins, para projetos que combinam analytics com machine learning

### Excel e Google Sheets para análise de UX

Para a maioria das equipas de UX, o **Excel** ou o **Google Sheets** são as ferramentas de análise mais acessíveis e suficientes para as análises rotineiras.

**O que é possível fazer:**

*Análise básica de survey:*
- COUNTIF / COUNTIFS para frequências de resposta
- AVERAGE, MEDIAN para escalas Likert
- Tabelas dinâmicas para cruzar variáveis
- Gráficos de barras, pizza, e scatter para visualização

*Cálculo de métricas de UX:*
```
NPS = (COUNTIF(respostas,">=9")/TOTAL - COUNTIF(respostas,"<=6")/TOTAL) * 100

SUS Score = (SOMA(itens_positivos) - 5 + 25 - SOMA(itens_negativos)) * 2.5

Completion Rate = (usuários_que_completaram / usuários_que_iniciaram) * 100

Churn Rate = (usuários_perdidos_no_período / usuários_início_do_período) * 100
```

*Template de dashboard básico de KPIs no Google Sheets:*
- Aba de dados brutos (importada de GA4, Mixpanel, ou Hotjar)
- Aba de cálculos (métricas derivadas com fórmulas)
- Aba de visualização (gráficos dinâmicos que actualizam automaticamente)

### Power BI para dashboards de UX

O **Power BI** (Microsoft) é a ferramenta de business intelligence mais usada em ambientes corporativos para criar dashboards interactivos que combinam múltiplas fontes de dados numa única visualização.

**Vantagens para dashboards de UX:**

*Integração com múltiplas fontes*
O Power BI conecta directamente com Google Analytics, bases de dados SQL, Excel, SharePoint, e centenas de outras fontes — permitindo criar um dashboard de UX que combina métricas de analytics, dados de survey, e dados de negócio num único painel.

*Visualizações interactivas*
Filtros, slicers, e drill-through permitem que stakeholders não-técnicos explorem os dados autonomamente — em vez de o designer ter de criar um relatório diferente para cada pergunta.

*DAX para métricas calculadas*
A linguagem DAX do Power BI permite criar métricas calculadas complexas (como NPS, SUS score, ou retenção por coorte) que ficam disponíveis em toda a visualização.

**Exemplo de métricas num dashboard de UX em Power BI:**

```
Dashboard de UX - KPIs:
┌─────────────────────────────────────────────────────────────────┐
│  NPS: 42 (+8 MoM)    CSAT: 4.2/5     SUS: 71.5 (acima da média)│
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  Funil de Conversão          Retenção D1/D7/D30                  │
│  [Gráfico de barras]         [Linha por coorte]                  │
│                                                                   │
│  Top 5 páginas com           Completion rate por fluxo           │
│  maior abandono              [Tabela com barras de progresso]    │
│  [Lista com %]                                                    │
│                                                                   │
│  Heatmap de uso              NPS por segmento de usuário         │
│  por funcionalidade          [Bar chart segmentado]              │
└─────────────────────────────────────────────────────────────────┘
```

**Alternativas ao Power BI:**
- **Looker Studio** (Google, gratuito): integração nativa com GA4, excelente ponto de partida para equipas que já usam Google Analytics
- **Tableau**: mais poderoso para visualizações complexas, com curva de aprendizagem maior
- **Metabase** (open-source): boa opção para equipas técnicas que preferem self-hosting

---

## Resumo em uma frase

> Métricas e KPIs em UX transformam a percepção subjectiva de "o design está bom" em evidência quantificável através dos cinco pilares do HEART Framework (satisfação, engajamento, adopção, retenção e sucesso na tarefa), coletados com ferramentas como Google Analytics (comportamento e funis), Hotjar (heatmaps e gravações), Crazy Egg (heatmaps e A/B tests) e Mixpanel (eventos e coortes), e interpretados com Python ou R para análises estatísticas, Excel/Google Sheets para cálculos rotineiros, e Power BI ou Looker Studio para dashboards interactivos que tornam o impacto do design visível para toda a organização.

---

## Conceitos relacionados para estudar a seguir

- **Análise de coorte em profundidade** — como construir e interpretar matrizes de retenção por coorte para entender se melhorias ao produto estão a impactar a retenção de novos usuários
- **A/B Testing estatisticamente rigoroso** — como calcular o tamanho de amostra necessário, escolher o nível de significância, e interpretar os resultados de forma correcta sem tirar conclusões precipitadas
- **OKRs para design** — como traduzir objectivos de negócio em KPIs de UX accionáveis, usando o framework OKR (Objectives and Key Results) para alinhar o trabalho de design com a estratégia da empresa
- **Product Analytics com Amplitude** — alternativa ao Mixpanel com interface mais focada em product managers e designers, com funcionalidades de análise de comportamento de usuários muito semelhantes
- **Looker Studio (Google Data Studio)** — criar dashboards de UX gratuitos conectados directamente ao GA4, Sheets, e outras fontes Google, com partilha fácil com stakeholders