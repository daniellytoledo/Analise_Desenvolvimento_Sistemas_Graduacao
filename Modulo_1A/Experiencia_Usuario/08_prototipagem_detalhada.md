# Prototipagem Detalhada

---

## 1. Prototipagem de Alta e Baixa Fidelidade — definição e comparação

### O que é um protótipo
Um **protótipo** é qualquer representação de um design que permite testar e comunicar ideias antes de desenvolver o produto final. O conceito central da prototipagem em UX é que é sempre mais barato descobrir um problema no protótipo do que no produto desenvolvido — e quanto mais cedo o problema é descoberto, mais barato é corrigi-lo.

A "fidelidade" de um protótipo descreve o quão próximo ele está do produto final — em aparência, conteúdo, comportamento e interatividade. Não existe uma fidelidade "certa" — a escolha depende do que se quer testar, do tempo disponível, e da audiência para quem o protótipo será mostrado.

### Baixa fidelidade (Low-fi)

Protótipos de baixa fidelidade são representações intencionalmente simples e rápidas — esboços, wireframes básicos, papéis cortados — que comunicam a estrutura e o conceito sem qualquer preocupação com aparência visual.

**Características:**
- Criados em minutos a horas (não dias)
- Normalmente em preto e branco, sem tipografia definida, sem imagens reais
- Podem ser físicos (papel, post-its) ou digitais (Excalidraw, Balsamiq)
- Interatividade simulada por humanos (facilitador troca os papéis durante o teste)

**Melhor para:**
- Exploração inicial de conceitos — quando ainda há muita incerteza sobre a direção
- Testes de fluxo e arquitetura de informação — a estrutura importa, o visual não
- Iteração rápida — modificar em segundos, descartar sem culpa
- Comunicação com stakeholders não-técnicos que tendem a focar no visual quando veem algo "pronto"
- Workshops colaborativos onde todos contribuem (não apenas designers)

**Limitações:**
- Não testa a experiência visual ou a qualidade percebida do produto
- Participantes de teste podem ter dificuldade em "imaginar" como o produto ficaria de verdade
- Não adequado para validar micro-interações, animações, ou hierarquia visual

**Exemplos de ferramentas:** papel e caneta, Excalidraw, Balsamiq, FigJam, Miro

### Média fidelidade (Mid-fi)

Protótipos de média fidelidade ficam entre o esboço e o design completo — wireframes digitais em escala de cinza, com estrutura e hierarquia clara, mas sem cores de marca, tipografia final, ou imagens reais.

**Características:**
- Criados em horas a dias
- Escala de cinza, componentes genéricos, placeholder de imagens e texto
- Frequentemente clicáveis (prototipagem de fluxo no Figma)
- Adequados para testar fluxo e hierarquia com usuários reais

**Melhor para:**
- Validação de fluxo de navegação com usuários
- Revisão técnica com desenvolvedores (avaliar viabilidade)
- Alinhamento interno sobre estrutura antes do design visual
- Apresentação de conceito a stakeholders quando o design final ainda está em andamento

**Ferramentas:** Figma (wireframes), Balsamiq, Sketch

### Alta fidelidade (Hi-fi)

Protótipos de alta fidelidade são representações próximas do produto final — com cores de marca, tipografia definida, imagens reais, ícones do produto, e interações animadas. Do ponto de vista do usuário em teste, é difícil distinguir de um produto real.

**Características:**
- Criados em dias a semanas
- Visualmente completos e consistentes com o Design System
- Altamente interativos — transições, micro-animações, estados de componentes
- Usados como especificação para desenvolvimento (handoff)

**Melhor para:**
- Testes de usabilidade que exigem feedback sobre a experiência visual
- Apresentação final para stakeholders e aprovação de design
- Validação de micro-interações e animações
- Handoff para desenvolvimento como referência de implementação
- Testes de A/B com usuários reais para comparar variações

**Limitações:**
- Custo alto de criação — mudanças tardias são custosas
- Pode criar falsa impressão de "produto pronto" inibindo feedback crítico
- Não deve substituir testes em etapas anteriores — erros de conceito chegam à hi-fi caros demais

### Tabela comparativa completa

| Dimensão | Baixa fidelidade | Média fidelidade | Alta fidelidade |
|---|---|---|---|
| **Tempo de criação** | Minutos a horas | Horas a dias | Dias a semanas |
| **Custo de mudança** | Mínimo | Baixo | Alto |
| **Visual** | Esboço / caixas | Grayscale estruturado | Design completo e consistente |
| **Interatividade** | Nenhuma / manual | Clicável (fluxo básico) | Animada e responsiva |
| **O que testa** | Conceito, fluxo, estrutura | Fluxo, hierarquia, navegação | Experiência visual, usabilidade completa |
| **Audiência ideal** | Equipa interna, workshops | Equipa + stakeholders + primeiros testes | Stakeholders, testes com usuários, dev |
| **Ferramenta típica** | Papel, Excalidraw | Figma (wireframes) | Figma (design completo) |

### A regra da fidelidade adequada
A pergunta que guia a escolha não é "qual é a melhor fidelidade?" mas **"qual é a fidelidade mínima necessária para responder à pergunta que quero testar?"** Criar um hi-fi para testar se o fluxo de cadastro faz sentido é desperdício de tempo; usar um lo-fi para validar a consistência visual de um Design System é inadequado. Fidelidade e propósito precisam de estar alinhados.

---

## 2. Ferramentas de Prototipagem Digital

### Figma — o padrão da indústria

O **Figma** ([figma.com](https://figma.com)) é a ferramenta dominante para design e prototipagem de interfaces digitais, usada pela maioria das equipes de produto no mundo. Desde a sua fundação em 2016, a sua combinação de design vetorial, componentes reutilizáveis, colaboração em tempo real e prototipagem clicável num único ambiente tornou obsoletas as configurações anteriores que exigiam múltiplas ferramentas.

**Capacidades de prototipagem do Figma:**

*Conexões e fluxos*
No modo Prototype (aba lateral direita), qualquer elemento pode ser conectado a qualquer frame — definindo o destino, o gatilho (clique, hover, arrasto, teclado) e o tipo de transição (dissolve, slide, push, smart animate).

```
Configuração de uma conexão no Figma:
Trigger:     On Click / On Hover / On Drag / Key Press
Action:      Navigate to / Open overlay / Back / Scroll to
Destination: [Frame de destino]
Animation:   Instant / Dissolve / Smart Animate
Easing:      Ease in / Ease out / Linear
Duration:    300ms (padrão — ajustável)
```

*Smart Animate*
Quando dois frames têm elementos com o mesmo nome de layer, o Figma anima automaticamente a transição entre eles — criando animações fluidas de posição, tamanho, opacidade e rotação sem necessidade de configuração manual. Permite simular micro-interações como expansão de card, abertura de modal, e transições de lista com muito menos esforço.

*Overlays*
Permitem sobrepor um frame a outro — simular modais, sheets, tooltips, dropdowns e outros elementos que aparecem sobre o conteúdo existente sem navegar para uma nova tela.

*Scroll e fixed position*
Frames com altura maior que o viewport simulam scroll vertical; elementos com "Fixed position" ficam presos na tela enquanto o conteúdo por baixo rola — essencial para navbars e FABs fixos.

*Device frame*
O Figma permite envolver o protótipo numa moldura de dispositivo (iPhone, Android, desktop browser) para apresentações — comunicando imediatamente o contexto de uso.

*Compartilhar e testar*
O link de protótipo pode ser compartilhado com qualquer pessoa sem que precisem de ter conta no Figma — abrindo no browser e sendo totalmente interativo. Para testes remotos moderados via videochamada, o participante recebe o link e o pesquisador observa a tela compartilhada.

### Excalidraw — esboço digital colaborativo

O **Excalidraw** ([excalidraw.com](https://excalidraw.com)) é uma ferramenta de quadro branco open-source que produz diagramas e wireframes com estética "feita à mão" — o que, como já visto em `07_ideacao_ux.md`, é uma característica intencional que sinaliza rascunho e facilita feedback crítico.

**Capacidades para prototipagem:**
- Desenho livre com formas básicas, setas e texto
- Biblioteca de elementos com ícones, mockups de UI, e componentes básicos
- Colaboração em tempo real via link compartilhável
- Zero configuração — funciona diretamente no browser sem conta
- Exportação em PNG, SVG ou formato nativo

**Limitações para prototipagem:**
- Não suporta interatividade — apenas representação estática
- Sem componentes reutilizáveis ou sistema de design
- Adequado apenas para lo-fi — wireframes de exploração, nunca para especificação de desenvolvimento

**Quando usar:** sessions de brainstorming, esboços rápidos de fluxo, workshops onde todos participam, quando a prioridade é velocidade e não qualidade visual.

### Draw.io (diagrams.net) — diagramas e fluxogramas

O **Draw.io** ([app.diagrams.net](https://app.diagrams.net)) é uma ferramenta gratuita e open-source voltada principalmente para diagramas técnicos — fluxogramas, diagramas de arquitetura de software, mapas de processos, diagramas de entidade-relacionamento. Embora não seja primariamente uma ferramenta de UI design, tem aplicações específicas em UX.

**Usos relevantes em UX:**
- **User flow diagrams**: mapear todos os caminhos possíveis que um usuário pode percorrer no produto — todos os estados, condições e decisões — antes de começar a projetar telas individuais
- **Mapas de jornada simplificados**: a estrutura de diagrama é adequada para jornadas mais lineares e processuais
- **Diagramas de arquitetura de informação**: hierarquia de conteúdo e estrutura de navegação em formato de árvore
- **Integrações**: salva diretamente no Google Drive, OneDrive, GitHub, e outros repositórios

**Limitações para UX:**
- Não é uma ferramenta de design de interface — não produz wireframes detalhados
- Sem capacidade de prototipagem interativa
- Estética mais técnica e menos adequada para comunicação com stakeholders não-técnicos

**Quando usar:** para mapear user flows completos com todas as ramificações antes de começar o wireframing; para documentar arquitetura de informação; para diagramas de processo que precisam de ser partilhados com desenvolvedores e analistas de negócio.

### Comparação das três ferramentas

| Critério | Figma | Excalidraw | Draw.io |
|---|---|---|---|
| **Fidelidade** | Lo-fi a hi-fi | Lo-fi apenas | Diagramas técnicos |
| **Interatividade** | Alta (prototipagem completa) | Nenhuma | Nenhuma |
| **Colaboração** | Excelente (em tempo real) | Boa (link compartilhável) | Boa (Google Drive) |
| **Curva de aprendizagem** | Média-alta | Mínima | Baixa-média |
| **Custo** | Gratuito (plano básico) | Gratuito (open-source) | Gratuito (open-source) |
| **Melhor uso** | Design completo + prototipagem + handoff | Esboço rápido + workshops | User flows + arquitetura de informação |

---

## 3. Princípios de Design Interativo

### O que é design interativo
**Design interativo** (ou design de interação — Interaction Design / IxD) é a disciplina responsável por definir como um produto responde às ações do usuário — os comportamentos, transições, feedbacks e estados que compõem a experiência de interação. Enquanto o design visual define como a interface parece, o design interativo define como ela se comporta.

Os princípios a seguir são os fundamentos que guiam qualquer boa experiência interativa — independentemente da ferramenta ou plataforma.

### Feedback

**O princípio**: o sistema deve sempre comunicar ao usuário o resultado das suas ações — o que aconteceu, o que está a acontecer, e o que vai acontecer.

Um sistema sem feedback cria ansiedade: "O botão funcionou? A informação foi salva? Está a carregar ou travou?" Cada ação do usuário merece uma resposta visível do sistema, proporcional à importância da ação:

| Tipo de ação | Nível de feedback adequado |
|---|---|
| Clique em botão | Mudança de estado visual imediata (hover → pressed → disabled) |
| Envio de formulário | Loading state + confirmação ou mensagem de erro específica |
| Processo demorado | Progress indicator com estimativa de tempo se possível |
| Ação destrutiva (deletar) | Confirmação explícita + opção de desfazer |
| Ação bem-sucedida | Toast/snackbar de confirmação com duração adequada |

**Lei de Jakob Nielsen relacionada**: Visibilidade do status do sistema — o sistema deve sempre manter o usuário informado sobre o que está acontecendo, através de feedback apropriado em tempo razoável.

### Consistência

**O princípio**: elementos e comportamentos semelhantes devem funcionar da mesma forma em todo o produto — criando um modelo mental previsível que o usuário aprende uma vez e aplica em todo o resto.

Existem dois tipos de consistência:

*Consistência interna:* o produto é consistente consigo mesmo — o mesmo botão de fechar (×) fecha modais, drawers, tooltips e notificações da mesma forma; a mesma cor de erro aparece em todos os contextos de erro; a mesma animação de transição é usada em todos os slides de card.

*Consistência externa:* o produto segue convenções da plataforma e do setor — usuários chegam com expectativas formadas por anos de uso de outros produtos. O ícone de hamburger (☰) significa menu; o ícone de lupa significa busca; arrastar para cima em mobile fecha um bottom sheet. Violar essas convenções sem razão muito boa cria fricção desnecessária.

**Aplicação prática:** o Design System é a ferramenta técnica que garante consistência — ao usar componentes definidos centralmente em vez de recriar elementos do zero, consistência deixa de depender de memória individual e se torna estrutural.

### Acessibilidade no design interativo

**O princípio**: interações devem ser acessíveis a todos os usuários, independentemente de capacidade ou dispositivo de entrada.

Já abordada em profundidade em `04_design_inclusivo_acessibilidade.md`, no contexto de design interativo, acessibilidade significa especificamente:

**Navegação por teclado:** todas as interações devem ser possíveis usando apenas o teclado. A ordem de foco (Tab order) deve seguir a lógica visual e de fluxo; elementos interativos precisam de indicador de foco visível; modais precisam de "prender" o foco enquanto estão abertos e devolver o foco ao elemento que os abriu quando fechados.

```
Comportamento esperado de um modal acessível:
1. Usuário pressiona botão → modal abre
2. Foco vai automaticamente para o primeiro elemento interativo do modal
3. Tab navega pelos elementos do modal (foco não sai do modal)
4. Esc fecha o modal
5. Foco retorna ao botão que abriu o modal
```

**Touch targets adequados:** em mobile, elementos interativos devem ter área de toque de pelo menos 44×44px — mesmo que o elemento visualmente seja menor (padding invisível pode aumentar a área clicável).

**Estados e transições:** animações e transições precisam ser desativáveis para usuários com sensibilidade a movimento (`prefers-reduced-motion` em CSS).

**Tempo:** interações com limite de tempo (sessões que expiram, carrosséis automáticos) devem poder ser pausadas ou estendidas.

### Eficiência

**O princípio**: o design deve minimizar o esforço (cognitivo e físico) necessário para o usuário atingir o seu objetivo.

Eficiência em design interativo opera em múltiplos níveis:

**Lei de Fitts:** o tempo para atingir um alvo é função da distância ao alvo e do seu tamanho. Implicações práticas:
- Botões de ação principal devem ser grandes e próximos de onde o usuário já está
- Ações frequentes devem estar mais acessíveis (menor número de cliques/taps) do que ações raras
- Em mobile, as ações mais comuns devem estar na zona de alcance do polegar (bottom half of screen)

**Lei de Hick:** o tempo de tomada de decisão aumenta com o número de opções. Implicações práticas:
- Menus com muitas opções são mais difíceis de usar do que menus com poucas
- Organizar opções em grupos com labels reduz o esforço cognitivo de escolha
- Progressive disclosure — mostrar apenas o necessário, revelar mais quando pedido

**Atalhos para usuários experientes:** formulários com preenchimento automático, atalhos de teclado para ações frequentes, histórico de ações recentes — permitem que usuários que já dominam o produto sejam muito mais eficientes sem comprometer a simplicidade para novatos.

**Prevenção de erros > correção de erros:** um design que impede o erro (validação em tempo real, confirmações para ações irreversíveis, desabilitar ações impossíveis) é sempre preferível a um design que apenas explica o erro depois que aconteceu.

### Os princípios juntos: o exemplo de um formulário bem desenhado

```
Formulário com todos os princípios aplicados:

FEEDBACK:
→ Validação em tempo real (não apenas ao submeter)
→ Campos válidos recebem checkmark verde imediatamente
→ Loading spinner após submit + confirmação de sucesso
→ Mensagem de erro específica por campo (não genérica)

CONSISTÊNCIA:
→ Todos os campos seguem o mesmo padrão visual
→ Comportamento de erro idêntico em todos os campos
→ Botão de submit segue estilo do resto do produto

ACESSIBILIDADE:
→ Label visível acima de cada campo (nunca só placeholder)
→ Foco visível ao navegar por teclado
→ Mensagens de erro lidas por leitores de tela (aria-live)
→ Campo obrigatório indicado por texto ("obrigatório"), não só por asterisco vermelho

EFICIÊNCIA:
→ Preenchimento automático ativado (autocomplete="email", etc.)
→ Ordem de Tab lógica (de cima para baixo, esquerda para direita)
→ Enter no último campo submete o formulário
→ Número mínimo de campos necessários (nenhum "nice to have")
```

---

## 4. Entregas e Handoff para Desenvolvimento — boas práticas e ferramentas

### O que é handoff
**Handoff** é o processo de transferir o design finalizado para a equipe de desenvolvimento — o momento em que o produto deixa de existir como protótipo e começa a ser implementado em código. A qualidade do handoff determina em grande medida a fidelidade com que o design será implementado: um handoff pobre resulta em implementações que "aproximam" o design em vez de o replicar.

O objetivo de um bom handoff não é criar um documento estático que responde a todas as perguntas possíveis — é criar um sistema de comunicação contínua onde designer e desenvolvedor colaboram para implementar o melhor produto possível dentro das restrições existentes.

### O que um handoff precisa incluir

**1. Design finalizado e organizado no Figma**

Antes de qualquer ferramenta de handoff, o próprio arquivo do Figma precisa de estar organizado de forma que um desenvolvedor consiga navegar sem o designer ao lado:

- Layers nomeados de forma descritiva ("Botão primário — estado hover", não "Rectangle 47")
- Frames organizados em fluxos lógicos, não espalhados aleatoriamente pela tela
- Componentes usados de forma consistente (não recriados manualmente a cada uso)
- Uma página de "Cover" com visão geral do projeto e links para seções principais
- Páginas separadas para diferentes flows ou seções do produto

**2. Especificações de design**

Todo elemento visual precisar de ter especificações claras e acessíveis:

*Tipografia:*
```
Heading 1:  Roboto Bold, 32px, line-height 40px, letter-spacing -0.5px
Heading 2:  Roboto Bold, 24px, line-height 32px
Body:       Roboto Regular, 16px, line-height 24px
Caption:    Roboto Regular, 12px, line-height 16px
```

*Cores (com tokens de design):*
```
Primary:    #6750A4  → var(--color-primary)
On-Primary: #FFFFFF  → var(--color-on-primary)
Surface:    #FFFBFE  → var(--color-surface)
Error:      #B3261E  → var(--color-error)
```

*Espaçamentos:*
```
Spacing-xs:  4px
Spacing-sm:  8px
Spacing-md:  16px
Spacing-lg:  24px
Spacing-xl:  32px
Spacing-2xl: 48px
```

*Raios de borda e sombras:*
```
Radius-sm:   4px   (inputs, chips)
Radius-md:   8px   (cards, buttons)
Radius-lg:   16px  (modais, sheets)
Radius-full: 999px (pills, avatars)

Elevation-1: 0 1px 2px rgba(0,0,0,0.3)   (cards em repouso)
Elevation-2: 0 4px 8px rgba(0,0,0,0.15)  (cards em hover)
```

**3. Especificação de estados e comportamentos**

Uma das lacunas mais comuns em handoffs: os desenvolvedores recebem o estado padrão de um componente mas não os outros estados. Um componente completo precisa de:

```
Botão primário — todos os estados necessários:
├── Default (repouso)
├── Hover (mouse sobre o elemento)
├── Pressed / Active (durante o clique)
├── Focus (foco via teclado — ring de foco visível)
├── Disabled (inativo — opacidade reduzida, não clicável)
└── Loading (ação em processamento — spinner ou skeleton)

Campo de input — todos os estados:
├── Empty (vazio sem foco)
├── Focused (cursor dentro do campo)
├── Filled (com conteúdo)
├── Error (validação falhou — com mensagem de erro)
├── Success (validação passou)
└── Disabled
```

**4. Assets exportados**

- **Ícones em SVG**: escaláveis sem perda de qualidade, preferíveis a PNG para ícones
- **Ilustrações em SVG**: quando possível; PNG em 2x (para telas Retina) como fallback
- **Imagens em WebP**: formato moderno com melhor compressão que JPEG/PNG para fotografias
- **Fontes**: instruções claras sobre carregamento (Google Fonts URL, ou arquivo de fonte licenciado)

No Figma, a exportação é configurada por elemento: selecionar → painel direito → "+ Export" → definir formato e escala.

**5. Documentação de responsividade**

Para cada componente ou layout, especificar o comportamento em diferentes breakpoints:

```
Hero section:
Desktop (≥1280px): imagem à direita, texto à esquerda (50/50)
Tablet  (768-1279px): imagem acima, texto abaixo, padding 24px
Mobile  (<768px): imagem colapsada, texto centralizado, padding 16px
```

**6. Especificação de animações e transições**

```
Modal — abertura:
  Animation: fade in + scale (0.95 → 1)
  Duration:  200ms
  Easing:    ease-out
  Trigger:   clique no botão de ação

Bottom sheet — abertura (mobile):
  Animation: slide up
  Duration:  300ms
  Easing:    cubic-bezier(0.4, 0, 0.2, 1)  [Material Design standard]
```

### Ferramentas de handoff

**Figma Dev Mode**
O Figma tem um modo dedicado para desenvolvedores (ativado gratuitamente com planos pagos, ou em versão limitada no plano gratuito) que gera automaticamente:
- Código CSS, iOS (Swift/UIKit) ou Android (Compose/XML) de qualquer elemento selecionado
- Especificações de espaçamento, cor e tipografia em formato legível
- Links diretos para assets exportáveis
- Comparação de versões (para ver o que mudou entre iterações)

**Zeplin**
Ferramenta dedicada a handoff que importa designs do Figma e gera especificações detalhadas para desenvolvedores — com código CSS/iOS/Android, guias de estilo automáticos, e comentários de anotação. Mais estruturado que o Figma Dev Mode para equipas que precisam de documentação formal.

**Storybook**
Ferramenta open-source para documentar e demonstrar componentes de UI ao vivo — os próprios componentes implementados em código (React, Vue, Angular, etc.) são documentados com todas as suas variantes e estados. É o ponto de chegada ideal de um handoff bem-sucedido: o Design System do Figma e o Storybook dos componentes implementados devem estar em sincronia.

### Boas práticas de colaboração designer-desenvolvedor

**Envolver desenvolvedores cedo (não apenas no handoff)**
O handoff não deveria ser o primeiro contato de um desenvolvedor com o design. Quando devs participam de revisões de wireframe e protótipo, podem sinalizas restrições técnicas antes de o design estar finalizado — evitando o "isso não dá pra fazer" no último minuto.

**Annotations sobre "porquê", não apenas "o quê"**
A especificação técnica diz *o quê* implementar; as anotações de design dizem *por quê* foi decidido assim. Quando o desenvolvedor entende a intenção por trás de uma decisão de design, consegue adaptá-la inteligentemente quando encontra uma restrição técnica inesperada — em vez de simplesmente simplificar sem entender o impacto.

**Estar disponível durante a implementação**
O handoff não é o fim da responsabilidade do designer. Durante a implementação, dúvidas surgem, edge cases aparecem, e decisões precisam de ser tomadas. Um designer que está disponível para responder perguntas rápidas resulta numa implementação muito mais fiel ao design do que um designer que "entregou" e considerou o trabalho feito.

**Revisão de implementação (design QA)**
Antes do lançamento, o designer deve revisar a implementação — verificando fidelidade visual, comportamento de interações, estados dos componentes, e responsividade. Esta revisão pode ser feita com ferramentas como o **PixelSnap** ou simplesmente colocando o design lado a lado com a implementação.

**Documentar decisões tomadas durante a implementação**
Quando o desenvolvedor e o designer chegam a um acordo sobre uma adaptação (ex: uma animação que foi simplificada por limitação técnica), essa decisão deve ser documentada no Figma ou Notion — para que futuras iterações partam da realidade implementada, não do design original obsoleto.

---

## Resumo em uma frase

> A prototipagem detalhada usa a fidelidade adequada ao propósito — de esboços no Excalidraw e diagramas de fluxo no Draw.io para exploração rápida, a protótipos hi-fi interativos no Figma para validação e handoff — guiada por princípios de design interativo (feedback, consistência, acessibilidade e eficiência) e culminando num handoff estruturado que inclui especificações completas, todos os estados de componentes, assets exportados e documentação de comportamento, viabilizando uma implementação fiel que preserva a intenção do design.

---

## Conceitos relacionados para estudar a seguir

- **Motion Design e microinterações** — aprofundar o design de animações e transições, incluindo princípios de timing, easing e choreography para criar movimento com propósito
- **Design Tokens no Figma e em código** — como sincronizar as variáveis de design entre o Figma e a codebase usando ferramentas como Tokens Studio (plugin Figma) e Style Dictionary
- **Component-driven development** — abordagem de desenvolvimento onde os componentes de UI são construídos e documentados isoladamente (via Storybook) antes de serem integrados ao produto
- **Accessibility in prototypes** — como configurar protótipos no Figma com foco order, aria labels e estados de foco para comunicar intenções de acessibilidade ao time de desenvolvimento
- **Continuous Design** — integrar o processo de design iterativo com pipelines de CI/CD (ver pasta DevOps_I), usando ferramentas como Chromatic (visual testing) para detectar regressões visuais automaticamente