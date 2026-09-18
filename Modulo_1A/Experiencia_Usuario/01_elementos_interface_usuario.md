# Elementos de Interface do Usuário

---

## 1. Componentes Visuais da UI — elementos de interface do usuário

### O que são componentes de UI
Componentes de UI são os **blocos de construção visuais e interativos** de qualquer interface digital — os elementos que o usuário vê e com os quais interage. Assim como na construção civil se usa tijolos, vigas e janelas em combinações diferentes para criar edifícios distintos, no design de interfaces usa-se um conjunto definido de componentes para construir telas, fluxos e produtos completos.

Entender cada componente — o que é, quando usar, e como combiná-los adequadamente — é a base do trabalho de UI Design.

### Componentes de navegação
Responsáveis por orientar o usuário dentro do produto, indicando onde ele está e para onde pode ir.

- **Navbar (barra de navegação)**: menu horizontal ou vertical com os principais destinos do produto, tipicamente fixo no topo ou na lateral da tela.
- **Breadcrumbs**: trilha de navegação hierárquica que mostra o caminho percorrido pelo usuário (ex: Home > Produtos > Eletrônicos > Notebooks). Fundamental para produtos com muitos níveis de profundidade.
- **Tabs (abas)**: permitem alternar entre seções de conteúdo dentro da mesma tela, sem recarregar a página.
- **Pagination (paginação)**: divide grandes listas ou resultados em páginas navegáveis, evitando sobrecarga visual.
- **Sidebar (barra lateral)**: navegação secundária ou filtros posicionados ao lado do conteúdo principal.

### Componentes de entrada de dados
Permitem que o usuário insira, selecione ou modifique informações.

- **Input text**: campo de texto simples para entrada de dados como nome, e-mail, busca.
- **Textarea**: campo de texto multi-linha para entradas mais longas, como comentários ou descrições.
- **Dropdown / Select**: lista recolhida que expande ao ser clicada, apresentando opções para seleção.
- **Checkbox**: permite selecionar uma ou mais opções independentes de uma lista.
- **Radio button**: permite selecionar apenas uma opção de um grupo — exclusão mútua entre as opções.
- **Toggle / Switch**: botão deslizante para estados binários (ligado/desligado, ativo/inativo).
- **Slider**: controle deslizante para selecionar um valor dentro de um intervalo (ex: faixa de preço, volume).
- **Date picker**: seletor de data com calendário visual.
- **Search bar**: campo de busca, frequentemente com ícone de lupa e sugestões em tempo real.

### Componentes de ação
Disparam ações ou transições no sistema quando acionados pelo usuário.

- **Button (botão)**: o componente de ação mais fundamental — deve comunicar claramente o que vai acontecer ao ser clicado. A hierarquia visual entre botões primários, secundários e terciários guia o usuário para a ação mais importante da tela.
- **Icon button**: botão composto apenas por ícone, sem texto — usado quando o espaço é limitado e o ícone é suficientemente autoexplicativo (ex: botão de fechar com ×).
- **FAB (Floating Action Button)**: botão flutuante proeminente, geralmente circular, que representa a ação principal da tela — muito comum em apps mobile.
- **Link**: texto clicável que leva a outro destino, interno ou externo.

### Componentes de exibição de conteúdo
Organizam e apresentam informações ao usuário.

- **Card**: contêiner visual que agrupa informações relacionadas — imagem, título, texto e ações — numa unidade visualmente delimitada. Muito usado em feeds, catálogos e dashboards.
- **Modal / Dialog**: janela sobreposta ao conteúdo principal para exibir informações importantes ou solicitar confirmação de uma ação — o restante da tela fica bloqueado enquanto o modal está aberto.
- **Tooltip**: pequena sobreposição que aparece ao passar o mouse sobre um elemento, fornecendo informação contextual adicional sem ocupar espaço permanente na tela.
- **Accordion**: seção expansível que oculta conteúdo secundário, revelando-o apenas quando o usuário clica no cabeçalho — economiza espaço em conteúdos longos.
- **Table (tabela)**: organiza dados estruturados em linhas e colunas — ideal para comparação de múltiplos itens com os mesmos atributos.
- **Badge**: pequeno indicador visual numérico ou de status, geralmente sobreposto a um ícone (ex: número de notificações não lidas).
- **Tag / Chip**: rótulo compacto que categoriza ou filtra conteúdo. Chips podem ser selecionáveis ou removíveis.
- **Avatar**: representação visual do usuário — foto de perfil ou iniciais em forma circular.

### Componentes de feedback e estado
Comunicam ao usuário o resultado de suas ações ou o estado atual do sistema.

- **Toast / Snackbar**: notificação temporária que aparece brevemente na tela para confirmar uma ação (ex: "Salvo com sucesso") e desaparece automaticamente.
- **Alert / Banner**: mensagem de destaque que comunica informações importantes, erros, avisos ou confirmações — geralmente com código de cor (verde: sucesso, vermelho: erro, amarelo: aviso, azul: informação).
- **Progress bar**: barra que indica o progresso de um processo — pode ser determinada (com percentagem) ou indeterminada (quando o tempo não é previsível).
- **Skeleton screen**: estrutura visual em cinza que imita o layout do conteúdo enquanto os dados estão a ser carregados — alternativa mais agradável ao spinner, pois reduz a percepção de espera.
- **Empty state**: estado visual apresentado quando não há conteúdo a mostrar — uma boa prática é aproveitar este estado para orientar o usuário sobre o que fazer a seguir.

---

## 2. Análise de Layouts e Grids — a importância dos grids para o design

### O que é um grid
Um **grid (grade)** é um sistema de linhas horizontais e verticais invisíveis que divide o espaço de uma tela em colunas, linhas e calhas (*gutters*), servindo como estrutura organizacional para o posicionamento de todos os elementos da interface.

O grid não aparece no produto final — é uma ferramenta de design que garante que os elementos são posicionados de forma **consistente, alinhada e proporcionalmente harmoniosa** em toda a interface.

### Por que o grid é fundamental

**Consistência visual**
Sem um grid, cada tela de um produto tende a desenvolver espaçamentos e alinhamentos ligeiramente diferentes — o que cria uma sensação de desorganização visual que o usuário percebe intuitivamente, mesmo sem conseguir articular o motivo. Com um grid, todos os elementos seguem as mesmas regras de posicionamento, criando uma experiência visualmente coerente.

**Velocidade de trabalho**
Um grid bem definido elimina decisões individuais de posicionamento: em vez de decidir caso a caso onde cada elemento vai, o designer segue a estrutura do grid — o que acelera o processo de criação e facilita a comunicação com desenvolvedores.

**Comunicação com desenvolvimento**
Grids baseados em medidas fixas (especialmente os sistemas de 8pt, muito utilizados na indústria) traduzem-se diretamente em valores CSS, facilitando a implementação fiel do design no código.

### Anatomia de um grid

```
┌─────────────────────────────────────────────────────┐
│  Margin   │ Col │Gut│ Col │Gut│ Col │Gut│ Col │ Margin │
│           │  1  │   │  2  │   │  3  │   │  4  │        │
└─────────────────────────────────────────────────────┘
     ↑                   ↑                      ↑
  Margem             Calha (gutter)          Coluna
  (espaço nas        (espaço entre           (área de
  bordas)            colunas)                conteúdo)
```

- **Colunas**: as divisões verticais principais do grid, onde o conteúdo é posicionado.
- **Gutters**: o espaço entre colunas, que cria separação visual e respiração entre os elementos.
- **Margins**: o espaço nas bordas externas do layout, separando o conteúdo das extremidades da tela.

### Sistemas de grid mais usados

**Grid de 12 colunas**
O sistema mais amplamente adotado em design web — 12 colunas são divisíveis por 2, 3, 4 e 6, o que oferece enorme flexibilidade: elementos podem ocupar 1, 2, 3, 4, 6 ou 12 colunas, criando layouts de 2, 3, 4 ou 6 elementos por linha com perfeito alinhamento. É a base de frameworks CSS populares como Bootstrap e Tailwind CSS.

**Sistema de 8pt grid**
Um sistema onde todos os espaçamentos (margens, paddings, tamanhos de elementos) são múltiplos de 8 pixels — criando harmonia matemática em todo o design. Este sistema funciona bem para telas de diferentes densidades de pixels (Retina, etc.) e é adoptado por grandes Design Systems como o Material Design (Google) e o Human Interface Guidelines (Apple).

**Baseline grid**
Uma grade horizontal baseada na altura da linha do texto (*line-height*), usada para alinhar verticalmente os elementos de tipografia. Garante que o texto de diferentes tamanhos e componentes diferentes se alinhe ao mesmo ritmo vertical.

### Layout vs. Composição

Entender o grid é o primeiro passo — saber usá-lo para criar **layouts eficazes** é o segundo. Alguns princípios de layout que ampliam o uso do grid:

- **Hierarquia visual**: elementos maiores ou posicionados no topo captam atenção primeiro. O grid define onde os elementos ficam; a hierarquia define a ordem em que são percebidos.
- **Espaço negativo (whitespace)**: o espaço vazio não é "espaço desperdiçado" — é uma ferramenta ativa de separação e foco. Designs com whitespace generoso comunicam qualidade e sofisticação.
- **Alinhamento**: todos os elementos devem se alinhar a algo — ao grid, a outros elementos, ou a uma linha lógica. Elementos desalinhados criam desconforto visual imediato.
- **Proximidade**: elementos relacionados devem estar visualmente próximos; elementos não relacionados devem estar separados. Este princípio da Gestalt é fundamental para a organização de qualquer layout.

---

## 3. Princípios de Design Responsivo — UX consistente em diversos dispositivos

### O que é design responsivo
**Design responsivo** (*responsive design*) é a abordagem de design e desenvolvimento em que a interface se **adapta automaticamente** ao tamanho e às características do dispositivo em que está sendo exibida — seja um smartphone pequeno, um tablet, um laptop ou um monitor widescreen — sem perder funcionalidade, usabilidade ou qualidade visual.

O conceito foi formalizado por **Ethan Marcotte** em 2010, em um artigo que se tornou referência na área, e desde então se tornou o padrão da indústria para design web.

### Por que o design responsivo é essencial
Mais de 60% do tráfego global da internet hoje vem de dispositivos móveis — mas o mesmo usuário frequentemente acessa o mesmo produto em diferentes dispositivos ao longo do dia (celular no transporte, tablet em casa, notebook no trabalho). Um produto que funciona bem apenas num tipo de tela está excluindo uma parte significativa dos seus usuários.

### Os três pilares técnicos do design responsivo

**1. Layouts fluidos (Fluid Grids)**
Em vez de usar medidas fixas em pixels, layouts responsivos usam **unidades relativas** — percentagens, `vw` (viewport width), `em`, `rem` — de forma que os elementos se expandem e contraem proporcionalmente conforme o tamanho da tela muda.

**2. Media Queries**
Regras CSS que aplicam estilos diferentes com base nas características do dispositivo — principalmente a largura da tela. Os **breakpoints** são os pontos de largura onde o layout muda de configuração:

```css
/* Layout mobile — coluna única */
.container {
  display: flex;
  flex-direction: column;
}

/* Layout tablet — duas colunas (a partir de 768px) */
@media (min-width: 768px) {
  .container {
    flex-direction: row;
  }
}

/* Layout desktop — três colunas (a partir de 1024px) */
@media (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

Breakpoints comuns: 320px (mobile pequeno), 375px (mobile padrão), 768px (tablet), 1024px (laptop), 1280px e 1440px (desktop).

**3. Imagens e mídia flexíveis**
Imagens e vídeos que se redimensionam automaticamente para nunca ultrapassar o tamanho do seu contêiner:

```css
img {
  max-width: 100%;
  height: auto;
}
```

### Mobile First vs. Desktop First

**Mobile First** (abordagem recomendada): o design começa pelo layout mobile — a versão mais simples e com mais restrições — e expande progressivamente para telas maiores usando `min-width` nas media queries. Esta abordagem força priorização de conteúdo (num celular, só o essencial cabe) e resulta geralmente em interfaces mais limpas e bem pensadas.

**Desktop First**: começa pelo layout desktop e vai reduzindo usando `max-width`. Mais natural para designers acostumados com telas grandes, mas tende a gerar interfaces mobile como "versões comprimidas" do desktop, em vez de experiências pensadas especificamente para o contexto mobile.

### Praticando com Flexbox Froggy
Uma das formas mais eficazes e divertidas de aprender e praticar os fundamentos de layout responsivo é o **Flexbox Froggy** ([flexboxfroggy.com](https://flexboxfroggy.com)), um jogo interativo gratuito onde o objetivo é escrever CSS Flexbox para mover rãs coloridas até os seus lírios correspondentes.

**Por que Flexbox é essencial para design responsivo:**
O **CSS Flexbox** (Flexible Box Layout) é um modelo de layout CSS desenhado especificamente para distribuir espaço e alinhar elementos de forma flexível e adaptável — sendo a base da maioria dos layouts responsivos modernos.

Os conceitos praticados no Flexbox Froggy incluem:

| Propriedade CSS | O que faz |
|---|---|
| `justify-content` | Alinha os itens ao longo do eixo principal (horizontal por padrão) |
| `align-items` | Alinha os itens ao longo do eixo cruzado (vertical por padrão) |
| `flex-direction` | Define a direção do eixo principal (row, column, row-reverse, column-reverse) |
| `flex-wrap` | Define se os itens podem quebrar para uma nova linha quando não cabem |
| `align-self` | Sobrescreve o `align-items` para um item específico |
| `order` | Define a ordem de exibição de um item independentemente da ordem no HTML |
| `flex-grow` | Define quanto um item cresce proporcionalmente ao espaço disponível |

O jogo tem 24 níveis progressivos, cada um introduzindo uma nova propriedade ou combinação de propriedades. Completá-lo é suficiente para ter uma base sólida de Flexbox e começar a criar layouts responsivos com confiança.

---

## 4. Design Patterns — padrões criacionais, estruturais e comportamentais

### O que são Design Patterns no contexto de UI/UX
**Design patterns** (padrões de design) são **soluções reutilizáveis para problemas de design que surgem repetidamente** — soluções que já foram testadas, refinadas e validadas ao longo do tempo por inúmeros produtos e situações, e que podem ser aplicadas em novos contextos sem precisar "reinventar a roda".

> **Nota importante:** o termo "design patterns" tem origem no desenvolvimento de software (o livro "Design Patterns: Elements of Reusable Object-Oriented Software", dos "Gang of Four", 1994), onde descrevia padrões de arquitetura de código. No contexto de UX/UI, o conceito foi adaptado para descrever padrões de solução de problemas de interação e interface — as duas utilizações coexistem, e é importante distinguir o contexto.

A classificação em **criacionais, estruturais e comportamentais** vem da origem do conceito no desenvolvimento de software, mas aplica-se de forma análoga ao design de interfaces.

### Padrões Criacionais — como criar e iniciar interações

No contexto de software, padrões criacionais lidam com a instanciação de objetos. Traduzindo para UX/UI, são os padrões relacionados a **como o usuário começa a usar o produto ou uma funcionalidade** — os momentos de criação de conta, configuração inicial, e primeiro contato.

**Onboarding progressivo**
Em vez de apresentar todas as funcionalidades de uma vez, o produto apresenta recursos gradualmente conforme o usuário avança — reduzindo a curva de aprendizagem e aumentando as chances de adoção. Exemplo: o Duolingo começa com a primeira lição antes mesmo de pedir cadastro.

**Wizard (assistente passo a passo)**
Divide tarefas complexas (como um cadastro longo ou uma configuração elaborada) em etapas menores e sequenciais, com indicação de progresso. Reduz a sensação de "tarefa grande" e aumenta a taxa de conclusão. Exemplo: criação de perfil em plataformas como LinkedIn ou Airbnb.

**Empty State com call to action**
O estado vazio de uma tela (quando não há conteúdo ainda) é tratado como uma oportunidade de criação — em vez de mostrar uma tela em branco, o produto apresenta uma mensagem motivadora e uma ação clara para começar. Exemplo: Trello mostrando um convite para criar o primeiro quadro quando a conta está vazia.

**Templates e pré-preenchimento**
Oferecer templates ou pré-preencher campos com valores padrão razoáveis para reduzir o esforço inicial do usuário — deixando a customização como uma segunda etapa opcional.

### Padrões Estruturais — como organizar e apresentar o conteúdo

No contexto de software, padrões estruturais descrevem como objetos se compõem. Em UX/UI, são os padrões de **como o conteúdo e as funcionalidades são organizados e apresentados na interface**.

**Card Layout**
Organizar conteúdo em unidades visuais discretas (cards) que podem ser reordenadas, filtradas e reorganizadas com facilidade — criando layouts flexíveis que funcionam bem em diferentes tamanhos de tela. Usado amplamente pelo Pinterest, Google, e qualquer produto com feed de conteúdo.

**Dashboard / Hub and Spoke**
Uma tela central ("hub") que oferece visão geral e acesso a todas as áreas principais do produto ("spokes"), sem que o usuário precise navegar linearmente. Comum em ferramentas de gestão, analytics e sistemas administrativos.

**Master-Detail**
Um painel lista itens (master) e ao selecionar um deles, um segundo painel mostra os detalhes daquele item (detail) — sem abandonar a lista. Muito usado em apps de e-mail (lista de emails + email aberto), contatos, e apps de notícias.

**Accordion / Progressive Disclosure**
Ocultar informações secundárias e revelá-las apenas quando solicitadas, reduzindo a carga cognitiva inicial. O usuário vê o essencial primeiro e aprofunda quando precisar — uma aplicação direta do princípio de **divulgação progressiva**.

**Sticky / Fixed Elements**
Elementos que permanecem visíveis enquanto o usuário rola a página — como uma navbar fixa no topo, um botão de "voltar ao topo", ou um resumo de pedido em checkout. Evita que o usuário perca o acesso a ações importantes ao explorar conteúdo longo.

### Padrões Comportamentais — como o sistema responde às ações do usuário

No contexto de software, padrões comportamentais definem como objetos comunicam entre si. Em UX/UI, são os padrões de **como o produto responde e se comunica com o usuário durante a interação** — os comportamentos e feedbacks que moldam a experiência em tempo real.

**Feedback imediato**
O sistema confirma visualmente cada ação do usuário — animações ao clicar em botões, mudança de cor ao interagir com um campo, toast de confirmação após salvar. Este padrão combate a ansiedade de "será que funcionou?" e cria confiança na interface.

**Undo / Desfazer**
Em vez de pedir confirmação antes de ações destrutivas (o que interrompe o fluxo), o produto permite que a ação seja desfeita por um breve período. O Gmail é o exemplo clássico: ao deletar um e-mail, aparece um toast com "Desfazer" por alguns segundos — uma experiência muito mais fluida do que um modal de confirmação.

**Lazy Loading (carregamento progressivo)**
Carregar conteúdo conforme o usuário rola a página, em vez de carregar tudo de uma vez — melhora a performance percebida e o tempo de carregamento inicial. Instagram e Twitter usam este padrão em seus feeds infinitos.

**Autocomplete e Sugestões**
Completar automaticamente entradas de texto com base em histórico, dados cadastrais ou padrões comuns — reduz o esforço de digitação e o risco de erros. O Google Search popularizou este padrão; hoje é esperado em qualquer campo de busca.

**Confirmação antes de ações irreversíveis**
Para ações que não podem ser desfeitas (deletar uma conta, publicar algo permanentemente, enviar um pagamento), um modal ou tela de confirmação é apresentado. Diferente de ações comuns, onde o feedback pós-ação é suficiente — aqui a confirmação prévia é justificada pelo peso da consequência.

**Skeleton Loading**
Já mencionado nos componentes — o produto exibe a estrutura visual da tela antes de os dados chegarem, reduzindo a percepção de tempo de espera. É um padrão comportamental porque define como o sistema "se comporta" durante estados de carregamento.

---

## Resumo em uma frase

> Uma interface bem construída combina componentes visuais adequados a cada contexto (botões, cards, modais, feedbacks), organizados sobre um grid que garante consistência e alinhamento, adaptáveis a qualquer tela através dos princípios de design responsivo, e seguindo padrões de design consolidados — criacionais para iniciar interações, estruturais para organizar o conteúdo, e comportamentais para comunicar o estado do sistema em tempo real.

---

## Conceitos relacionados para estudar a seguir

- **CSS Grid Layout** — o complemento natural ao Flexbox para layouts bidimensionais mais complexos; pode ser praticado no **Grid Garden** ([cssgridgarden.com](https://cssgridgarden.com)), o jogo-irmão do Flexbox Froggy
- **Design Systems** — coleções de componentes, padrões e diretrizes documentadas que garantem consistência em produtos maiores (ex: Material Design do Google, Fluent Design da Microsoft, HIG da Apple)
- **Atomic Design** — metodologia de Brad Frost que organiza componentes de interface em átomos, moléculas, organismos, templates e páginas — uma forma estruturada de pensar e construir sistemas de design
- **Testes de usabilidade com protótipos** — como validar se os padrões e componentes escolhidos funcionam na prática, antes de desenvolver
- **WCAG (Web Content Accessibility Guidelines)** — diretrizes internacionais de acessibilidade que definem como componentes e layouts devem ser projetados para funcionar com tecnologias assistivas (leitores de tela, navegação por teclado, etc.)