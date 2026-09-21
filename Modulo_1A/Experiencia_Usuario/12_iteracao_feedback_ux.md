# Iteração e Feedback em UX

---

## 1. Ciclo de Feedback e Iteração — benefícios do ciclo

### O que é o ciclo de feedback e iteração
O **ciclo de feedback e iteração** é o processo contínuo de criar, testar, aprender, e melhorar um produto — repetidamente, em ciclos cada vez mais refinados. É a espinha dorsal de todo o processo de design centrado no usuário: nenhum produto nasce perfeito na primeira versão, e os melhores produtos do mundo são o resultado de dezenas (ou centenas) de ciclos de melhoria baseados em feedback real.

A ideia não é nova — engenheiros, artistas e cientistas sempre iteraram. O que o design de UX formaliza é a disciplina de fazer isso de forma **sistemática**, **baseada em evidências de usuários reais**, e com **ciclos deliberadamente curtos** para reduzir o custo de errar.

### A estrutura do ciclo

```
         ┌─────────────────────────────────────┐
         │                                       │
    ┌────▼────┐    ┌─────────┐    ┌──────────┐  │
    │  CRIAR  │ →  │  TESTAR │ →  │ APRENDER │  │
    │         │    │         │    │          │  │
    │Protótipo│    │Com users│    │Insights  │──┘
    │Design   │    │Dados    │    │Hipóteses │
    │Conteúdo │    │Analytics│    │Decisões  │
    └─────────┘    └─────────┘    └──────────┘
                                       │
                                       ▼
                                  ┌──────────┐
                                  │  MELHORAR│
                                  │          │
                                  │Ajustar   │
                                  │Redesenhar│
                                  │Priorizar │
                                  └────┬─────┘
                                       │
                                       └── → novo ciclo
```

A característica mais importante deste ciclo é que **nunca termina** — mesmo após o lançamento, o produto continua a ser testado, medido e melhorado com base em dados reais de uso.

### Benefícios do ciclo de feedback e iteração

**Redução do risco de falha**
O maior risco no desenvolvimento de produto é investir meses ou anos a construir algo que os usuários não querem ou não conseguem usar. Ciclos curtos de iteração reduzem este risco ao validar suposições cedo e frequentemente — antes que o custo de mudança seja proibitivo.

A lógica é simples:
```
Custo de corrigir um problema:
  Na fase de esboço/wireframe:  1×
  Na fase de design hi-fi:      10×
  Na fase de desenvolvimento:   100×
  Após o lançamento:            1000×
```

**Melhoria contínua baseada em evidências**
Cada ciclo gera aprendizagens concretas — o que funcionou, o que não funcionou, e porquê. Ao longo do tempo, estas aprendizagens acumulam-se num conhecimento profundo sobre os usuários e o produto que seria impossível de obter sem a iteração sistemática.

**Maior envolvimento dos stakeholders**
Quando stakeholders veem o produto evoluir em ciclos curtos com feedback real de usuários, a confiança no processo de design aumenta — em vez de esperar meses por uma entrega final que pode não corresponder às expectativas, têm visibilidade contínua e oportunidade de contribuir.

**Equipas mais resilientes à mudança**
Organizações acostumadas a iterar encaram a mudança de forma diferente: em vez de ser uma ameaça (o plano está errado), é uma oportunidade (aprendemos algo novo). Esta resiliência é um activo cultural valioso em mercados em constante evolução.

**Melhor qualidade final a menor custo**
Paradoxalmente, produtos que passam por mais ciclos de iteração frequentemente chegam ao mercado com maior qualidade e em menos tempo total do que produtos desenvolvidos num único ciclo longo — porque os problemas são identificados e resolvidos quando ainda são baratos de corrigir.

**Alinhamento entre expectativa e realidade**
Os usuários que participam de testes durante o processo tornam-se embaixadores do produto — sentiram que a sua voz importou. E a equipa desenvolve um entendimento genuíno das necessidades reais dos usuários em vez de trabalhar com suposições.

---

## 2. Técnicas de Revisão e Melhoria Contínua

### Análise Heurística

A **análise heurística** (ou avaliação heurística) é uma técnica de revisão de UX em que especialistas avaliam uma interface com base num conjunto de princípios estabelecidos — as **heurísticas** — identificando violações que provavelmente causam problemas de usabilidade para os usuários.

O conjunto de heurísticas mais usado na indústria é o das **10 Heurísticas de Nielsen** (Jakob Nielsen, 1994), que se mantêm tão relevantes hoje como quando foram formuladas:

| # | Heurística | O que significa |
|---|---|---|
| 1 | **Visibilidade do status do sistema** | O sistema deve sempre manter o usuário informado sobre o que está acontecendo |
| 2 | **Correspondência com o mundo real** | O sistema deve usar a linguagem e os conceitos que o usuário conhece |
| 3 | **Controlo e liberdade do usuário** | Saídas claras para estados indesejados ("desfazer", "cancelar") |
| 4 | **Consistência e padrões** | Seguir convenções da plataforma; palavras iguais para coisas iguais |
| 5 | **Prevenção de erros** | Design que evita que o problema ocorra, não apenas que explica o erro |
| 6 | **Reconhecimento em vez de lembrança** | Minimizar a memória necessária — opções visíveis, não memorizadas |
| 7 | **Flexibilidade e eficiência de uso** | Atalhos para usuários experientes sem comprometer novatos |
| 8 | **Estética e design minimalista** | Sem informação irrelevante que compete com o essencial |
| 9 | **Ajuda ao reconhecimento, diagnóstico e recuperação de erros** | Mensagens de erro claras, específicas e com instrução de recuperação |
| 10 | **Ajuda e documentação** | Quando necessário, fácil de encontrar, orientado à tarefa |

**Como conduzir uma análise heurística:**

1. **Definir o escopo**: qual parte do produto será avaliada? Pode ser um fluxo específico (cadastro, checkout, onboarding) ou o produto como um todo
2. **Recrutar avaliadores**: o ideal são 3–5 especialistas de UX — estudos de Nielsen mostram que 5 avaliadores identificam cerca de 75% dos problemas de usabilidade
3. **Realizar a avaliação individualmente**: cada avaliador percorre o produto de forma independente, registando violações heurísticas sem influência dos outros
4. **Classificar a severidade de cada problema**: numa escala de 0 (não é problema de usabilidade) a 4 (catástrofe — deve ser corrigido antes do lançamento)
5. **Consolidar e priorizar**: reunir os achados de todos os avaliadores, eliminar duplicatas, e priorizar por severidade e frequência

```
Escala de severidade de problemas heurísticos:
0 — Não concordo que é um problema de usabilidade
1 — Cosmético — corrigir apenas se houver tempo
2 — Menor — baixa prioridade para corrigir
3 — Maior — alta prioridade, deve ser corrigido
4 — Catástrofe — imperativo corrigir antes do lançamento
```

**Vantagens:** rápida (1–2 dias), barata (sem recrutamento de usuários), pode ser feita a qualquer momento do processo, produz uma lista de problemas priorizada imediatamente accionável.

**Limitação importante:** avaliadores especialistas identificam problemas de usabilidade diferentes dos que usuários reais encontrariam — especialmente para públicos com baixa literacia digital ou domínio específico. A análise heurística **nunca substitui** testes com usuários reais; é um complemento que permite identificar problemas óbvios rapidamente antes de levar o produto a usuários.

### Testes de Usabilidade como Revisão Contínua

Já introduzidos em `06_pesquisa_ux.md` e `09_testando_com_usuarios.md`, os testes de usabilidade são também a principal técnica de revisão e melhoria contínua — a diferença aqui é a ênfase na **regularidade**: não um teste único no final do projecto, mas sessões regulares ao longo de todo o ciclo de desenvolvimento.

**O ritmo de testes contínuos:**
A recomendação de Steve Krug ("Não Me Faça Pensar") é testar com **3 usuários por mês**, independentemente do que está a ser desenvolvido. Mesmo que não haja novidades específicas para testar, a observação regular de usuários a usar o produto nunca deixa de revelar algo útil.

**Tipos de teste por fase do ciclo:**

| Fase | Tipo de teste | Objectivo |
|---|---|---|
| **Descoberta** | Entrevistas contextuais | Entender o problema e o contexto |
| **Conceito** | Teste de conceito com esboços | Validar a direcção antes de investir em design |
| **Wireframe** | Teste de protótipo lo/mid-fi | Validar fluxo e hierarquia de informação |
| **Design** | Teste de protótipo hi-fi | Validar experiência visual e interações |
| **Produção** | Teste de usabilidade com produto real | Identificar problemas que o protótipo não revelou |
| **Pós-lançamento** | Análise de analytics + sessões regulares | Monitorar e melhorar continuamente |

### Percurso Cognitivo (Cognitive Walkthrough)

Uma técnica complementar à análise heurística: o avaliador tenta completar tarefas específicas no produto, perguntando em cada passo:

1. O usuário vai tentar fazer a acção correcta?
2. O usuário vai notar que a acção correcta está disponível?
3. O usuário vai conseguir associar a acção disponível com o que quer fazer?
4. Se o usuário realizar a acção correcta, vai perceber que está a progredir para o seu objectivo?

Esta técnica é especialmente útil para novos fluxos onde se quer verificar se a lógica de navegação é auto-explicativa para quem a vê pela primeira vez.

### Análise de Dados como Revisão Contínua

Como visto em `11_metricas_kpis_ux.md`, a análise regular de métricas é uma forma de revisão contínua que não requer sessões formais de teste — é uma leitura sistemática do comportamento real dos usuários em produção, identificando anomalias, tendências, e oportunidades de melhoria.

Uma cadência eficaz de revisão de dados para UX:
```
Diária:   verificar métricas de erro e de crash (algo quebrou?)
Semanal:  análise de funis e completion rates (onde há fricção?)
Mensal:   análise de retenção e cohort (os usuários estão a ficar?)
Trimestral: análise de NPS/CSAT e tendências de longo prazo
```

---

## 3. Ferramentas para Testes de Usabilidade

### UserTesting

O **UserTesting** ([usertesting.com](https://usertesting.com)) é a plataforma líder de mercado para testes de usabilidade remotos não-moderados em escala — permite lançar um teste e ter resultados de participantes reais em horas, em vez de dias ou semanas de recrutamento tradicional.

**Como funciona:**
1. O pesquisador define as tarefas a completar e as perguntas a responder
2. Configura o perfil do participante desejado (idade, localização, dispositivo, comportamentos)
3. O UserTesting distribui o teste ao seu painel de participantes (mais de 1 milhão de pessoas)
4. Os participantes completam as tarefas enquanto pensam em voz alta, com a sessão gravada (tela + câmera)
5. Os resultados chegam em horas, com vídeos das sessões e transcrições automáticas

**Funcionalidades principais:**
- **Panel personalizado**: recrutar dos seus próprios usuários em vez do painel do UserTesting
- **Live Conversation**: sessões de teste moderadas ao vivo — o equivalente a um teste presencial, mas remoto
- **Metrics**: análise automática de sentimento, highlights de momentos de frustração, e clips de vídeo dos momentos mais relevantes
- **Benchmarking**: comparar métricas de usabilidade com benchmarks do setor ou com versões anteriores do produto
- **AI insights**: análise automática de padrões nos resultados de múltiplas sessões

**Quando usar UserTesting:**
- Quando se precisa de resultados rapidamente (horas, não dias)
- Para testes de validação de conceito ou de protótipos
- Para benchmarking periódico de usabilidade
- Para testes com perfis muito específicos que seriam difíceis de recrutar localmente

**Limitação principal:** o custo é elevado para uso contínuo — a plataforma é mais adequada para organizações com orçamento de pesquisa dedicado. Para equipas com orçamento limitado, as alternativas Maze e Lyssna oferecem funcionalidades semelhantes a custos menores.

### Lookback.io

O **Lookback** ([lookback.io](https://lookback.io)) é uma plataforma de pesquisa qualitativa especializada em sessões de teste de usabilidade moderadas e observação de usuários — com um foco particular em criar uma experiência de pesquisa mais humana e colaborativa.

**O que distingue o Lookback:**

*Participação de observadores*
Numa sessão do Lookback, múltiplos membros da equipa podem observar em tempo real — cada um numa janela separada, sem perturbar o participante. Os observadores podem deixar notas e highlights durante a sessão sem que o participante os veja, e discutir entre si num chat privado paralelo.

Esta funcionalidade replica a dinâmica do espelho unidirecional dos laboratórios de usabilidade tradicionais — onde designers, product managers, e stakeholders observam uma sessão sem estarem presentes na sala com o participante.

*Self-research (testes não-moderados)*
Além de sessões moderadas, o Lookback permite criar estudos não-moderados onde os participantes completam tarefas de forma autónoma, com gravação de tela, câmera, e áudio — semelhante ao UserTesting, mas com uma interface diferente.

*Diary studies (estudos de diário)*
Uma funcionalidade única do Lookback: os participantes registam as suas experiências ao longo de vários dias ou semanas, capturando pensamentos e comportamentos em contexto real — ideal para entender padrões de uso de longo prazo que uma sessão única não revelaria.

*Clips e highlights*
Durante e após as sessões, é possível criar clips de momentos relevantes — facilmente partilháveis com stakeholders que não participaram na sessão.

**Quando usar Lookback:**
- Quando a presença de observadores durante as sessões tem valor (Product Owner, CEO, stakeholders-chave)
- Para diary studies que capturam comportamento ao longo do tempo
- Para construir um repositório partilhado de insights de pesquisa que toda a equipa pode aceder

### Hotjar (para testes de usabilidade)

Já introduzido em `11_metricas_kpis_ux.md` como ferramenta de analytics, o **Hotjar** tem funcionalidades específicas para testes de usabilidade e feedback contínuo que o complementam:

**Funcionalidades de pesquisa do Hotjar:**

*Session Recordings*
Gravações de sessões reais de usuários em produção — não testes estruturados, mas observação do comportamento real sem moderação. Permite ver exactamente onde os usuários hesitam, onde clicam múltiplas vezes sem resultado, e onde abandonam um fluxo.

*Incoming Feedback (feedback contextual)*
Um widget que o usuário activa voluntariamente para destacar qualquer elemento da página e deixar um feedback — "este botão não funciona", "não encontro o que procuro aqui", "adoro esta funcionalidade". Feedback extremamente contextual e accionável.

*Engage (testes de usabilidade não-moderados)*
A funcionalidade mais recente do Hotjar — permite criar tarefas estruturadas para que os usuários completem com gravação de tela e câmera, mais próximo do UserTesting, mas integrado com os heatmaps e analytics que o Hotjar já oferece.

*Surveys no momento certo*
Surveys que podem ser acionados por comportamento específico — aparecer quando um usuário demora mais de X segundos numa página (sinal de confusão), quando usa o botão de voltar repetidamente (sinal de desorientação), ou quando está prestes a sair do site (exit intent).

**Vantagem do Hotjar em iteração contínua:** ao contrário do UserTesting ou Lookback (que requerem sessões planeadas), o Hotjar colecta dados continuamente em produção — revelando problemas que só emergem com uso real ao longo do tempo, não em sessões de teste controladas.

### Optimal Workshop

O **Optimal Workshop** ([optimalworkshop.com](https://optimalworkshop.com)) é especializado num conjunto de ferramentas específicas para arquitectura de informação e navegação — o conjunto de ferramentas mais completo disponível para validar como o conteúdo está organizado antes de investir em design visual.

**Ferramentas incluídas:**

*Treejack (tree testing)*
Permite testar se os usuários conseguem encontrar informação dentro de uma estrutura de navegação proposta — sem o design visual, apenas a hierarquia de menus e categorias em texto. Os participantes recebem tarefas ("onde encontrarias as políticas de privacidade?") e navegam pela árvore de categorias. O Treejack regista o caminho percorrido, onde erraram, e onde chegaram.

```
Relatório do Treejack:
Tarefa: "Encontra as definições da tua conta"
✓ Sucesso directo (caminho correcto à primeira):  58%
↩ Sucesso indirecto (encontrou mas com backtrack): 22%
✗ Falha:                                          20%

Caminho mais comum (incorrecto): Início > Ajuda > FAQ
Caminho correcto:                 Início > Conta > Definições
→ Insight: "Ajuda" está a atrair tráfego que pertence a "Conta"
```

*OptimalSort (card sorting)*
Já descrito em `06_pesquisa_ux.md` — permite conduzir card sorting aberto e fechado com participantes remotos, gerando dendrogramas e matrizes de similaridade que revelam como os usuários categorizam mentalmente o conteúdo.

*Chalkmark (first click testing)*
Mostra um screenshot de uma tela e pede ao participante que clique onde realizaria uma tarefa específica. Regista o primeiro clique de cada participante e agrega-os num mapa de calor. O primeiro clique é um forte preditor do sucesso na tarefa — se a maioria clica no lugar errado, a hierarquia visual está a comunicar mal.

*Reframer (qualitative research repository)*
Uma ferramenta de organização de dados qualitativos — transcrições de entrevistas, notas de observação, e highlights de sessões podem ser importados e organizados por tags e temas, facilitando a síntese de pesquisa qualitativa em escala.

*Questions (surveys)*
Surveys integrados com a análise de arquitectura de informação — para complementar os dados comportamentais com percepção dos participantes.

**Quando usar Optimal Workshop:**
- Na fase de arquitectura de informação, antes de qualquer wireframe
- Para validar (ou descobrir) como os usuários categorizam mentalmente o conteúdo
- Para diagnosticar problemas de navegação em produtos existentes
- Quando a equipa suspeita que o problema de UX está na organização da informação, não no design visual

### Comparativo das ferramentas

| Ferramenta | Tipo de teste | Moderação | Melhor para | Custo base |
|---|---|---|---|---|
| **UserTesting** | Usabilidade remota | Não-moderado + Live | Testes rápidos com painel grande | Pago (alto) |
| **Lookback** | Usabilidade remota | Moderado + Não-moderado | Sessões com observadores + diary studies | Pago (médio) |
| **Hotjar** | Analytics + feedback | Passivo (sem moderação) | Dados contínuos em produção | Gratuito + pago |
| **Optimal Workshop** | Arquitectura de informação | Não-moderado | Card sorting + tree testing + first click | Pago (médio) |

---

## 4. A Importância da Iterabilidade no Design

### O que é iterabilidade
**Iterabilidade** é a capacidade de um produto, de um processo, ou de uma equipa de **revisar, ajustar e melhorar continuamente** com base em feedback e testes — sem resistência excessiva à mudança, sem ego de autor que defende um design mesmo face a evidências de que não está a funcionar, e com sistemas e práticas que facilitam (em vez de dificultarem) a melhoria contínua.

Não é apenas uma prática técnica — é uma mentalidade e uma cultura. Um produto com alta iterabilidade é aquele que melhora a cada ciclo; uma equipa com alta iterabilidade é aquela que aprendeu a transformar feedback em acção sem drama.

### Iterabilidade técnica — design que facilita a mudança

**Design Systems como base da iterabilidade**
Um Design System bem construído (ver `03_fundamentos_identidade_visual.md` e `08_prototipagem_detalhada.md`) é o principal facilitador de iterabilidade técnica: quando o produto usa componentes centralizados, uma mudança no componente propaga-se automaticamente para todas as instâncias onde é usado — sem necessidade de actualizar dezenas de telas manualmente.

Sem Design System, iterar num produto com dezenas de telas é lento e propenso a inconsistências. Com Design System, uma melhoria num botão ou num formulário propaga-se em segundos.

**Componentização no código**
O equivalente em desenvolvimento — componentes de UI implementados em React, Vue, ou outro framework baseado em componentes — garante que quando o design de um componente muda, a mudança só precisa ser feita num único lugar no código. Isto reduz o custo técnico da iteração de forma dramática.

**Feature flags**
Mecanismo técnico que permite activar ou desactivar funcionalidades para subconjuntos de usuários sem necessidade de um novo deploy. Fundamental para iteração segura em produção — a nova versão de um fluxo pode ser activada para 5% dos usuários para ser testada antes de ser lançada para todos.

### Iterabilidade de processo — cultura que abraça a mudança

**Ciclos curtos como norma, não excepção**
Equipas que só lançam grandes versões a cada 3–6 meses têm ciclos de aprendizagem lentos e um custo alto de mudança (mais foi desenvolvido que precisa de ser corrigido). Equipas que lançam semanalmente ou diariamente aprendem mais rápido e têm menor custo de correcção.

**"Falhar barato e rápido" como princípio**
O objectivo não é evitar falhas — é garantir que as falhas acontecem no momento mais barato do ciclo (no esboço, no wireframe, no teste com 5 usuários) e não no momento mais caro (em produção, meses depois do lançamento).

**Separar identidade do design**
Um dos maiores obstáculos à iterabilidade é o ego de autor — o designer que criou uma solução torna-se emocionalmente investido nela e resiste a evidências de que não está a funcionar. Equipas com alta iterabilidade desenvolvem a capacidade de separar a identidade pessoal do trabalho: o feedback é sobre o design, não sobre o designer.

**Documentar o "porquê", não apenas o "o quê"**
Como mencionado em `08_prototipagem_detalhada.md`, documentar as razões por trás de decisões de design é fundamental para a iterabilidade — quando uma decisão precisa de ser revista, a equipa tem o contexto de porquê foi tomada originalmente e pode avaliar se as condições que a justificavam ainda existem.

### O custo da falta de iterabilidade

Um produto sem cultura de iteração tende a seguir um padrão previsível e custoso:

```
Fase 1 — Desenvolvimento isolado (6–12 meses):
  Produto desenvolvido com base em suposições internas.
  Usuários raramente consultados.
  Resultado: produto lançado que não corresponde às necessidades reais.

Fase 2 — Feedback devastador pós-lançamento:
  Reviews negativos, abandono, reclamações de suporte.
  Custo de correcção muito alto (produto já desenvolvido).
  Moral da equipa em baixo.

Fase 3 — Redesign completo:
  Decisão de redesenhar do zero (pior caso) ou de fazer mudanças
  cirúrgicas caras e arriscadas.
  Ciclo repete-se se a cultura não mudar.
```

A alternativa iterativa reduz drasticamente a probabilidade deste cenário ao distribuir o aprendizagem ao longo do processo em vez de concentrá-la no momento do lançamento.

### Iterabilidade e confiança do usuário

Há um aspecto frequentemente subestimado da iteração contínua: o **impacto na relação com o usuário**. Produtos que melhoram visivelmente ao longo do tempo constroem uma relação de confiança com os seus usuários — a percepção de que "eles estão a ouvir-nos", "o produto fica melhor a cada mês".

O Spotify, o Notion, e o Figma são exemplos de produtos cujas comunidades de usuários são altamente engajadas parcialmente porque as equipas comunicam activamente as melhorias feitas com base em feedback da comunidade. Esta transparência no processo de iteração torna-se ela própria um diferencial de produto.

### Iterabilidade como capacidade organizacional

Em última análise, a iterabilidade não é apenas uma prática de design — é uma capacidade organizacional que distingue empresas que melhoram continuamente de empresas que ficam presas em versões do passado.

Construir esta capacidade requer:

1. **Infraestrutura técnica** que facilite mudanças rápidas (Design System, componentização, CI/CD — ver pasta DevOps_I)
2. **Processos ágeis** que criem cadência regular de entrega e revisão (ver `10_metodologias_ageis_ux.md`)
3. **Cultura de pesquisa** que mantenha a voz do usuário presente nas decisões (ver `06_pesquisa_ux.md` e `09_testando_com_usuarios.md`)
4. **Métricas que orientam** as prioridades de iteração (ver `11_metricas_kpis_ux.md`)
5. **Liderança que valoriza aprendizagem** — onde "descubrimos que não funciona" é visto como sucesso, não como falha

---

## Resumo em uma frase

> O ciclo de feedback e iteração é o mecanismo central do design de UX eficaz — permitindo revelar problemas antes que o custo de correcção seja proibitivo, apoiado por técnicas como a análise heurística (revisão por especialistas) e testes de usabilidade contínuos, facilitado por ferramentas como UserTesting (testes remotos rápidos em escala), Lookback (sessões moderadas com observadores), Hotjar (dados contínuos de comportamento real) e Optimal Workshop (validação de arquitectura de informação), e tornado sustentável pela iterabilidade — a capacidade cultural, técnica e organizacional de melhorar continuamente com base em evidências reais.

---

## Conceitos relacionados para estudar a seguir

- **Continuous Discovery Habits (Teresa Torres)** — framework para integrar pesquisa e testes de usabilidade no ritmo semanal de uma equipa de produto, sem sessões formais separadas do processo de desenvolvimento
- **Design Critique estruturada** — como criar rituais de revisão de design interno que produzem feedback accionável em vez de opiniões subjectivas, acelerando a iteração dentro da equipa
- **Accessibility testing em ciclos de iteração** — como incluir testes de acessibilidade (com tecnologias assistivas reais) nos ciclos regulares de revisão, em vez de os tratar como uma fase separada
- **Maze e Lyssna** — alternativas mais acessíveis ao UserTesting para testes não-moderados, com foco em prototipagem no Figma e testes de conceito rápidos
- **Jobs To Be Done em revisões pós-lançamento** — usar a framework JTBD para interpretar dados de retenção e abandono em termos de "trabalhos" que o produto está ou não a conseguir fazer para os seus usuários