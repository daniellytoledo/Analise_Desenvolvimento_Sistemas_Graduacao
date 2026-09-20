# Testando com Usuários

---

## 1. Planejamento e Execução de Testes de Usabilidade

### O que é um teste de usabilidade
Um **teste de usabilidade** é um método de pesquisa em que participantes representativos do público-alvo realizam tarefas específicas num produto (real ou protótipo) enquanto o pesquisador observa — com o objetivo de identificar problemas de usabilidade, compreender o modelo mental dos utilizadores, e validar decisões de design com evidências reais.

É o método mais poderoso disponível em UX para responder à pergunta "o meu design funciona para as pessoas que vão usá-lo?" — e, ao contrário do que muitos acreditam, não precisa de ser caro, demorado, ou tecnicamente complexo para ser valioso.

### Por que testar com utilizadores (e não apenas internamente)
As equipas de produto sofrem de um viés inevitável: conhecem o produto profundamente, sabem o que ele deveria fazer, e inconscientemente preenchem lacunas de usabilidade com o seu próprio conhecimento. Utilizadores reais não têm esse conhecimento — e é exactamente por isso que os problemas que encontram são os que mais importam resolver.

A pesquisa de Jakob Nielsen (Nielsen Norman Group) mostrou que **testar com apenas 5 utilizadores** identifica aproximadamente 85% dos problemas de usabilidade de um produto — tornando os testes de usabilidade um dos métodos de pesquisa com melhor custo-benefício disponíveis.

### Definição dos objetivos do teste
Antes de qualquer outra decisão, é preciso responder: **o que precisamos aprender com este teste?** Objectivos vagos geram testes vagos. Objectivos específicos geram insights acionáveis.

*Exemplos de objectivos mal definidos:*
- "Saber se os utilizadores gostam do produto"
- "Testar a usabilidade geral"

*Exemplos de objectivos bem definidos:*
- "Identificar onde os utilizadores têm dificuldade no fluxo de cadastro"
- "Verificar se o novo layout do menu de navegação é intuitivo para utilizadores novos"
- "Avaliar se os utilizadores compreendem a diferença entre os planos Básico e Pro"

### Definição do público-alvo (recrutamento)
O valor de um teste de usabilidade depende directamente de quem participa. Testar com as pessoas erradas pode ser pior do que não testar — gera falsa confiança ou falsos problemas.

O perfil de recrutamento deve ser baseado nas **personas** do produto (ver `05_design_thinking_empatia_definicao.md`) e incluir critérios como:
- Experiência com o tipo de produto (novato vs. experiente)
- Dados demográficos relevantes (faixa etária, ocupação, localização)
- Comportamentos e hábitos específicos (frequência de uso, dispositivos)
- Critérios de exclusão (ex: excluir pessoas que trabalham na empresa)

*Ferramentas de recrutamento:* UserTesting, Respondent.io, Maze Panel, redes sociais da empresa, ou directamente da base de utilizadores existente (ver `06_pesquisa_ux.md`).

### Definição e redação das tarefas
As **tarefas** são o coração do teste de usabilidade — são as instruções dadas ao participante sobre o que deve tentar fazer no produto. Tarefas bem escritas são:

- **Realistas**: baseadas em situações que o utilizador real encontraria
- **Abertas**: não indicam o caminho — deixam o utilizador descobri-lo
- **Livres de jargão**: não usam os termos exactos que estão na interface

*Exemplos de tarefas mal escritas vs. bem escritas:*

| ❌ Mal escrita | ✅ Bem escrita |
|---|---|
| "Clique no botão 'Criar conta'" | "Imagine que é a primeira vez que acessa este site. Tente criar uma conta para começar a usar o serviço." |
| "Use o menu de navegação para ir a Configurações" | "Você quer mudar o e-mail associado à sua conta. Como você faria isso?" |
| "Adicione o produto ao carrinho e faça o checkout" | "Você quer comprar este produto como presente para um amigo. Complete a compra." |

### Métodos de coleta de dados durante o teste

**Observação directa**
O pesquisador observa o comportamento do participante em tempo real — onde hesita, onde clica por engano, onde sorri ou franze o sobrolho. É o dado mais rico e mais difícil de capturar sem prática.

**Protocolo think aloud (pensar em voz alta)**
Pedir ao participante que verbalize os seus pensamentos durante a tarefa: "O que está a ver? O que está a pensar? O que está a tentar fazer?". Revela o modelo mental do utilizador — a lógica que está a usar para navegar no produto.

*Como introduzir o protocolo:* antes do teste, demonstrar com um exemplo não relacionado ("Imagine que está a montar uma estante IKEA e me diz o que está a pensar em cada passo").

**Gravação (ecrã + áudio + vídeo)**
Gravar a sessão permite rever comportamentos específicos depois, partilhar com a equipa, e criar clipes de momentos-chave para apresentações a stakeholders.
- **Ecrã + áudio**: o mínimo necessário para análise posterior
- **Vídeo da face**: captura expressões faciais que revelam emoções
- **Eye tracking** (avançado): tecnologia que regista para onde o utilizador olha na tela — identifica o que captura e o que escapa à atenção visual

**Questionários pós-tarefa e pós-teste**
Após cada tarefa ou ao final de todas as tarefas, questionários quantitativos medem a percepção subjectiva do utilizador:
- **SUS (System Usability Scale)**: 10 questões que geram uma pontuação de usabilidade comparável a benchmarks
- **Escala de dificuldade da tarefa (SEQ — Single Ease Question)**: "Quão difícil foi esta tarefa? (1–7)"
- **NPS (Net Promoter Score)**: "Qual a probabilidade de recomendar este produto? (0–10)"

### Moderado vs. não-moderado

| | Moderado | Não-moderado |
|---|---|---|
| **Facilitador presente?** | Sim — conduz a sessão em tempo real | Não — participante segue instruções gravadas |
| **Profundidade** | Alta — pode fazer perguntas de follow-up | Baixa — não há exploração contextual |
| **Escalabilidade** | Baixa — 1 sessão por vez | Alta — dezenas de sessões simultâneas |
| **Plataformas** | Zoom, Google Meet + Figma | Maze, UserTesting, Lyssna |
| **Quando usar** | Para entender o *porquê* dos comportamentos | Para validar rapidamente com mais participantes |

---

## 2. Técnicas para Coletar Feedback Efetivo

### Entrevistas — o método mais rico

As **entrevistas** já foram introduzidas em `06_pesquisa_ux.md`, mas no contexto de testes com utilizadores têm uma aplicação específica: as entrevistas **pós-teste** aprofundam o que foi observado durante a sessão de usabilidade.

*Perguntas eficazes pós-teste:*
- "Em que momento do processo você se sentiu mais confuso? O que estava a pensar nesse momento?"
- "Se você pudesse mudar uma coisa neste produto, o que seria?"
- "Tem algo que esperava encontrar e não encontrou?"
- "O que você fez que achou inesperadamente fácil?"

*Boas práticas em entrevistas de UX:*

**O silêncio é uma ferramenta** — após uma resposta, esperar alguns segundos antes de fazer a próxima pergunta. Muitas vezes os comentários mais ricos chegam no silêncio depois da resposta inicial.

**Sondas abertas em vez de perguntas fechadas:**
- ❌ "Você achou fácil?" (sim/não — fecha a conversa)
- ✅ "Como foi para você?" (abre a exploração)

**Não interpretar, observar:**
- ❌ "Então você achou confuso porque o botão era pequeno?" (o pesquisador está a propor a causa)
- ✅ "Pode me contar mais sobre o que aconteceu nesse momento?" (deixa o participante articular)

### Focus Groups — validação de conceitos com grupos

Um **focus group** é uma discussão guiada com um grupo de 5–8 participantes, moderada por um facilitador, em torno de um tema, conceito, ou produto específico.

*Quando usar focus groups em UX:*
- Explorar percepções e atitudes sobre um conceito novo antes de prototipar
- Validar propostas de valor e mensagens de marketing com o público-alvo
- Gerar ideias colectivas sobre necessidades e soluções desejadas

*Quando NÃO usar focus groups para testar usabilidade:*
Focus groups são frequentemente usados de forma equivocada como substitutos de testes de usabilidade — o que é um erro. Em grupo, as pessoas não se comportam da mesma forma que sozinhas, as opiniões dos mais articulados dominam, e há forte pressão de conformidade social. Focus groups revelam *o que as pessoas dizem* sobre um produto; testes de usabilidade revelam *o que as pessoas fazem* com ele.

*Estrutura típica de um focus group de UX:*
1. **Abertura** (10 min): apresentação e regras da sessão
2. **Aquecimento** (10 min): perguntas sobre hábitos e contexto — para soltar o grupo
3. **Tema central** (40–50 min): discussão guiada sobre o tópico principal, com estímulos visuais (mockups, protótipos, ou concorrentes)
4. **Priorização** (10 min): actividade de votação — pedir ao grupo que priorize as necessidades ou funcionalidades discutidas
5. **Encerramento** (5 min): perguntas abertas finais e agradecimento

### Surveys — feedback quantitativo em escala

Surveys complementam os dados qualitativos de entrevistas e focus groups com medição quantitativa. No contexto de testes com utilizadores, são mais usados como:
- **Screener de recrutamento** (ver `06_pesquisa_ux.md`)
- **Questionário pós-teste** (SUS, SEQ, NPS)
- **Avaliação de satisfação** após um período de uso real do produto

*Boas práticas específicas para surveys de UX:*

**Escala Likert consistente**: se a escala é de 1 a 5, manter em todas as questões — não misturar "1 = discordo totalmente" numa questão e "1 = concordo totalmente" noutra.

**Perguntas simples, uma ideia de cada vez:**
- ❌ "O produto é fácil de usar e atende às suas expectativas?" (duas perguntas numa)
- ✅ "O produto é fácil de usar?" + "O produto atende às suas expectativas?" (separadas)

**Combinar fechadas e abertas**: questões fechadas (escala, múltipla escolha) capturam padrões quantitativos; questões abertas ("Explique o seu raciocínio") capturam o contexto e o porquê. A combinação dos dois tipos no mesmo survey é mais rica do que qualquer um dos dois isolados.

---

## 3. Uso de Formulários para Coleta de Feedback

### O papel dos formulários na pesquisa de UX
Formulários digitais são a forma mais escalável de coletar feedback estruturado de utilizadores — permitem alcançar centenas ou milhares de pessoas com o mesmo conjunto de perguntas, de forma assíncrona e sem custo de facilitação por sessão.

Já introduzidos em `06_pesquisa_ux.md` no contexto do Google Forms, este ponto aprofunda a estrutura, os tipos de perguntas, e as melhores práticas especificamente para feedback de utilizadores.

### Estrutura de um formulário eficaz

**1. Cabeçalho e contexto**
A primeira coisa que o participante vê. Deve responder a:
- O que é este formulário?
- Por que está a ser pedido?
- Quanto tempo vai levar?
- O que acontecerá com as respostas?

Exemplo eficaz:
> *"Ajude-nos a melhorar o [produto]. Este formulário tem 8 perguntas e leva cerca de 3 minutos. As respostas são anónimas e serão usadas apenas pela nossa equipa de design para identificar oportunidades de melhoria."*

**2. Perguntas de aquecimento**
Começar com perguntas simples e não ameaçadoras — frequência de uso, contexto de utilização. Reduzem o atrito inicial e enquadram o participante no assunto antes das perguntas mais específicas.

**3. Núcleo do formulário**
As perguntas principais alinhadas com os objetivos da pesquisa. Organizar em blocos temáticos com separadores visuais quando o formulário cobre múltiplos tópicos.

**4. Perguntas abertas de aprofundamento**
Incluir pelo menos uma ou duas perguntas abertas que dão espaço para o participante partilhar algo não antecipado pelo designer do formulário. "Há alguma coisa que gostaríamos de saber e não perguntámos?" captura consistentemente insights inesperados.

**5. Encerramento e agradecimento**
Uma mensagem de confirmação personalizada — não apenas "Enviado com sucesso" — que agradece, informa sobre o uso das respostas, e (quando relevante) oferece um próximo passo (ex: "Deseja participar de uma entrevista de 30 minutos? Deixe o seu e-mail aqui.").

### Tipos de perguntas e quando usar cada uma

| Tipo | Dados gerados | Melhor para |
|---|---|---|
| **Escala Likert (1–5 ou 1–7)** | Quantitativo ordinal | Medir graus de concordância, satisfação ou frequência |
| **NPS (0–10)** | Quantitativo | Medir propensão de recomendação e lealdade |
| **Múltipla escolha (uma opção)** | Quantitativo nominal | Segmentação, preferências exclusivas |
| **Caixas de seleção (múltiplas opções)** | Quantitativo | Hábitos, comportamentos, seleção de múltiplos itens |
| **Classificação (ranking)** | Quantitativo ordinal | Priorização de funcionalidades ou atributos |
| **Resposta aberta curta** | Qualitativo | Capturar terminologia natural, respostas concisas |
| **Resposta aberta longa** | Qualitativo | Narrativas, contexto, sugestões detalhadas |
| **Diferencial semântico** | Quantitativo | Percepção de atributos opostos (ex: "Complexo ←→ Simples") |

### Ferramentas recomendadas por caso de uso

| Ferramenta | Ponto forte | Melhor para |
|---|---|---|
| **Google Forms** | Gratuito, integração com Sheets, simples | Surveys internos, screeners, questionários básicos |
| **Typeform** | Experiência conversacional, alto engajamento | Surveys voltados para o utilizador final, com foco em experiência |
| **SurveyMonkey** | Recursos de análise avançados, templates validados | Surveys maiores com necessidade de análise mais sofisticada |
| **Maze** | Integrado com Figma, testes de usabilidade assíncronos | Questionários pós-tarefa combinados com testes de usabilidade |
| **Hotjar** | Surveys in-product no momento de uso | Feedback contextual dentro do próprio produto |
| **Notion / Tally** | Integração com fluxo de trabalho de produto | Surveys internos de equipa, avaliações rápidas |

---

## 4. Análise e Interpretação de Resultados de Teste

### O desafio da análise de dados de usabilidade
Após conduzir 5–10 sessões de teste, o pesquisador tem um volume considerável de dados — gravações, notas, questionários. O desafio é transformar esse volume em insights claros e acionáveis que a equipa consiga usar para tomar decisões de design.

### Organização dos dados brutos

**1. Notas durante as sessões**
Usar um template consistente para notar em cada sessão:
- Comportamentos observados ("clicou duas vezes no ícone antes de procurar no menu")
- Citações directas do participante (entre aspas)
- Questões que surgiram durante a sessão ("verificar se este padrão aparece noutras sessões")

```
Template de notas por sessão:
─────────────────────────────
Participante: P03 | Data: [data] | Moderador: [nome]
─────────────────────────────
TAREFA 1: Criar uma conta
├── Comportamento: [o que fez]
├── Citação: "[o que disse]"
├── Ponto de fricção: [onde ficou preso]
└── Resolução: [como avançou, ou não avançou]

TAREFA 2: ...
─────────────────────────────
Impressões gerais da sessão:
```

**2. Transcrição e marcação**
Para sessões gravadas, transcrever (ou usar ferramentas como Otter.ai) e marcar trechos com tags:
- `#ponto-de-fricção`
- `#confusão-navegação`
- `#expectativa-não-cumprida`
- `#momento-positivo`
- `#sugestão-utilizador`

### Métodos de análise

**Affinity Mapping para dados qualitativos**
Já descrito em `06_pesquisa_ux.md`, o affinity mapping é o método central para sintetizar dados qualitativos de múltiplas sessões — cada observação num post-it, agrupada por tema, nomeada com um insight.

**Contagem de ocorrências**
Para dados comportamentais: quantas sessões em quantas o mesmo problema ocorreu?

```
Problema: Utilizador não encontra o botão de ajuda
Sessões onde ocorreu: P01 ✓, P02 ✓, P03 ✗, P04 ✓, P05 ✓
Frequência: 4/5 sessões = crítico (prioridade alta)
```

A frequência por si só não define prioridade — é combinada com a severidade (quão bloqueante foi o problema) e o impacto no objectivo de negócio.

**Análise de severidade**
Sistema de classificação para priorizar os problemas identificados:

| Nível | Descrição | Exemplo | Prioridade |
|---|---|---|---|
| **Crítico** | Impede a conclusão da tarefa | Utilizador não consegue submeter formulário | Corrigir antes do lançamento |
| **Grave** | Dificulta muito, causa grande frustração | Utilizador demora 5+ min numa tarefa de 30 seg | Corrigir na próxima iteração |
| **Moderado** | Causa confusão mas o utilizador avança | Utilizador hesita mas encontra o caminho certo | Melhorar quando possível |
| **Leve** | Pequeno incómodo, sem impacto real | Texto ligeiramente ambíguo num label | Opcional — se houver tempo |

**Rainbow Spreadsheet**
Uma técnica visual de síntese — uma tabela onde as colunas são os participantes (P01, P02...) e as linhas são os problemas identificados. Uma cor ou marca indica que aquele participante encontrou aquele problema. A "chuva de arco-íris" de cores torna imediatamente visível quais problemas são generalizados e quais são isolados.

```
                    P01  P02  P03  P04  P05  Freq.
Botão de ajuda      ✓    ✓    ·    ✓    ✓    4/5 ← crítico
Confirmação de pagamento ✓  ·    ✓    ·    ·    2/5
Texto de error msg  ·    ✓    ✓    ·    ✓    3/5
```

### Interpretação e comunicação dos resultados

**Distinguir problema de solução**
Durante a análise, a tentação é saltar directamente para soluções. O relatório de teste deve documentar os **problemas** (o que o utilizador encontrou de difícil), não as soluções (o que deve ser feito) — as soluções são decididas em conjunto pela equipa de produto depois de compreender o problema.

**Topline summary**
Para stakeholders que não vão ler o relatório completo — um documento de 1 página com:
- Objectivo do teste e metodologia (2–3 linhas)
- Os 3–5 principais descobertas (priorizadas)
- Recomendações imediatas

**Relatório completo**
Para a equipa de design e produto que vai agir sobre os dados:
- Metodologia detalhada (participantes, tarefas, ferramentas)
- Lista priorizada de problemas com severidade e frequência
- Evidências (citações directas, clips de vídeo quando possível)
- Recomendações de design para cada problema identificado

**Apresentação com clips de vídeo**
Nada convence stakeholders de que um problema existe como ver e ouvir utilizadores reais a encontrá-lo. Incluir 30–60 segundos de clip de vídeo de um momento representativo de cada problema principal transforma dados abstractos em experiências viscerais e irrefutáveis.

---

## 5. Gamificação para Aumentar o Engajamento em Formulários

### O problema do engajamento em surveys
A taxa de resposta de surveys online caiu drasticamente nas últimas décadas — entre spam, fadiga de questionários, e competição pela atenção, conseguir que as pessoas completem um formulário de feedback é cada vez mais desafiante. A gamificação é uma das abordagens mais eficazes para reverter esse problema.

### O que é gamificação
**Gamificação** é a aplicação de elementos e mecânicas de design de jogos em contextos não-lúdicos — com o objetivo de aumentar o engajamento, a motivação, e a persistência dos participantes.

No contexto de formulários de UX, não se trata de transformar um survey num jogo completo, mas de incorporar elementos específicos que tornam a experiência de responder mais envolvente e menos enfadonha.

### Elementos de gamificação aplicáveis a formulários

**Barra de progresso**
O elemento de gamificação mais simples e mais eficaz — mostrar ao participante o quanto já avançou no formulário ("Pergunta 4 de 10" ou uma barra visual de progresso) reduz o abandono significativamente. A percepção de progresso activa a motivação para completar — o chamado **efeito de progresso dotado** (*endowed progress effect*): sentimos mais motivação para completar uma tarefa quando vemos que já avançámos.

**Feedback visual imediato por pergunta**
Em vez de apenas avançar para a próxima pergunta em silêncio, adicionar uma micro-animação ou mensagem positiva ao responder ("Obrigado!" com uma animação suave) cria um ciclo de recompensa que mantém o participante engajado.

**Linguagem conversacional**
Substituir a linguagem formal e impessoal de um questionário padrão por uma linguagem mais directa e calorosa faz o participante sentir que está a ter uma conversa, não a preencher um formulário burocrático:
- ❌ "Por favor, classifique a facilidade de uso do produto numa escala de 1 a 5."
- ✅ "O quão fácil foi usar o produto hoje? (1 = muito difícil | 5 = muito fácil)"

O **Typeform** é a ferramenta mais conhecida por implementar este padrão de forma sistemática — apresentando uma pergunta de cada vez, com transições suaves, num formato que se assemelha mais a uma conversa do que a um formulário.

**Personalização e contexto**
Usar o nome do participante (quando disponível), referenciar o produto específico que usou, ou adaptar as perguntas com base em respostas anteriores (lógica condicional) cria uma sensação de que o formulário foi feito para aquela pessoa específica — o que aumenta o engajamento e a qualidade das respostas.

**Elementos visuais atractivos**
Emojis como opções de resposta (😡 😐 😊 😄), imagens de escolha em vez de texto puro, ou elementos visuais que comunicam a escala de forma mais intuitiva do que números tornam o formulário mais rápido de responder e mais agradável de completar.

Exemplo:
```
Como você se sentiu usando o produto hoje?

😡      😕      😐      🙂      😄
Muito   Pouco   Neutro  Bem   Muito
mal     bem                    bem
```

**Sistemas de pontos e desafios (para pesquisa longitudinal)**
Para estudos que acompanham utilizadores ao longo do tempo (diários de utilizador, estudos de painéis), um sistema de pontos por respostas completadas — com recompensas a atingir marcos ("Completou 5 check-ins consecutivos — desbloqueou o badge Pioneer!") — mantém a participação ao longo de semanas ou meses.

**Perguntas de trivia relacionadas ao tema**
Para formulários sobre produtos de nicho ou temáticas específicas, incluir uma ou duas perguntas de trivia relacionadas ao tema ("Sabia que o utilizador médio verifica o telemóvel 96 vezes por dia?") cria momentos de surpresa e aprendizagem que quebram a monotonia.

**Revelação gradual (progressive disclosure)**
Mostrar apenas uma questão de cada vez (como o Typeform), em vez de todas as questões de uma vez, cria a sensação de progresso contínuo e reduz a percepção de que o formulário é longo — mesmo que tenha o mesmo número de perguntas.

**Recompensas e incentivos**
Para aumentar a taxa de resposta em pesquisas que requerem mais esforço:
- Sorteio de prémios entre respondentes
- Acesso antecipado a uma feature
- Desconto ou crédito no produto
- Relatório com os resultados agregados (especialmente eficaz em pesquisas B2B)

### O limite da gamificação — não comprometer a qualidade dos dados
A gamificação deve facilitar e motivar respostas genuínas — nunca manipular as respostas. Alguns cuidados:

- Recompensas não devem incentivar respostas positivas (ex: "Responda 5 estrelas e ganhe um desconto")
- Perguntas de trivia devem ser claramente separadas das perguntas de pesquisa
- A estética lúdica não deve tornar o formulário tão "divertido" que os participantes o tomem menos a sério
- Barra de progresso deve ser honesta — não mostrar 80% quando ainda faltam 15 perguntas

---

## Resumo em uma frase

> Testar com utilizadores é o processo de colocar o design em contacto com a realidade — planeando testes com objectivos claros, tarefas realistas e participantes representativos, coletando feedback efetivo através de entrevistas, focus groups e formulários bem estruturados, analisando os dados com affinity mapping e análise de severidade para priorizar o que realmente importa, e tornando esse processo mais eficaz com elementos de gamificação que aumentam o engajamento sem comprometer a qualidade dos dados.

---

## Conceitos relacionados para estudar a seguir

- **Eye tracking e análise de atenção visual** — como tecnologia de rastreamento ocular revela padrões de leitura e atenção que observação directa não consegue capturar
- **Benchmark studies** — testes de usabilidade comparativos que medem a evolução da usabilidade de um produto ao longo do tempo, ou face à concorrência, usando métricas padronizadas
- **Ética em testes com utilizadores** — consentimento informado, anonimização, gravação responsável, compensação justa, e cuidados especiais com grupos vulneráveis
- **Continuous Discovery Habits (Teresa Torres)** — framework para integrar pesquisa e testes com utilizadores de forma contínua e frequente no ciclo de produto, em vez de estudos pontuais
- **Heuristic Evaluation (Avaliação Heurística)** — método de avaliação de usabilidade sem utilizadores reais, baseado nas 10 heurísticas de Nielsen, que complementa os testes com utilizadores ao identificar problemas de forma rápida e económica