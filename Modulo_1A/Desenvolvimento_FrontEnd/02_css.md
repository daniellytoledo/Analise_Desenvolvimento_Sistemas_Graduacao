
# CSS — Cascading Style Sheets

---

## 1. Definições

### O que é CSS?

O **CSS (Cascading Style Sheets)**, ou **Folhas de Estilo em Cascata**, é uma linguagem utilizada para definir a aparência e a apresentação visual de documentos HTML.

Enquanto o HTML organiza o conteúdo, o CSS determina como os elementos serão apresentados no navegador.

Com CSS, podemos definir:

- Cores e fundos.
- Fontes e tamanhos de texto.
- Margens e espaçamentos.
- Bordas e sombras.
- Posicionamento dos elementos.
- Layouts e alinhamentos.
- Animações e transições.
- Adaptação a diferentes tamanhos de ecrã.

### HTML vs. CSS vs. JavaScript

| Tecnologia | Responsabilidade |
|---|---|
| HTML | Estrutura e conteúdo |
| CSS | Aparência e apresentação |
| JavaScript | Comportamento e interatividade |

### Estrutura de uma regra CSS

Uma regra CSS é normalmente composta por um **seletor** e um bloco de **declarações**.

```css
h1 {
    color: blue;
    font-size: 32px;
}
```

Neste exemplo:

- `h1` — seletor que identifica os elementos.
- `color` — propriedade que será modificada.
- `blue` — valor atribuído à propriedade.
- `font-size` — propriedade que define o tamanho da fonte.
- `32px` — valor do tamanho da fonte.
- `{}` — delimitam o bloco de declarações.
- `;` — separa as declarações.

A estrutura geral é:

```text
seletor {
    propriedade: valor;
}
```

### Formas de aplicar CSS

Existem três formas principais de associar CSS a um documento HTML.

**1. CSS Inline**

O estilo é aplicado diretamente ao elemento através do atributo `style`.

```html
<p style="color: red;">Texto vermelho</p>
```

É útil em situações específicas, mas dificulta a manutenção quando utilizado excessivamente.

**2. CSS Interno**

O código CSS é inserido dentro da tag `<style>`, normalmente no `<head>`.

```html
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
```

**3. CSS Externo**

O código é armazenado num ficheiro `.css`, separado do HTML.

```html
<link rel="stylesheet" href="style.css">
```

**Ficheiro `style.css`:**

```css
p {
    color: green;
}
```

Esta é geralmente a abordagem recomendada para organizar os estilos de um projeto.

### Principais seletores CSS

Os **seletores (Selectors)** permitem identificar quais elementos HTML receberão os estilos.

| Seletor | Exemplo | Significado |
|---|---|---|
| Elemento | `p` | Seleciona parágrafos |
| Classe | `.destaque` | Seleciona elementos com a classe |
| ID | `#titulo` | Seleciona o elemento com o ID |
| Universal | `*` | Seleciona todos os elementos |
| Descendente | `main p` | Seleciona parágrafos dentro de `main` |
| Pseudoclasse | `button:hover` | Seleciona um estado do elemento |

**Exemplo:**

```html
<h1 id="titulo">Meu Site</h1>

<p class="descricao">Aprendendo CSS.</p>
```

```css
#titulo {
    color: navy;
}

.descricao {
    font-size: 18px;
}
```

### O que significa Cascata?

O termo **Cascading** refere-se ao mecanismo utilizado pelo CSS para determinar quais declarações devem ser aplicadas quando existem regras concorrentes.

A escolha depende de fatores como:

- Origem e importância das declarações.
- Camadas de cascata.
- Especificidade dos seletores.
- Proximidade de escopo, quando aplicável.
- Ordem das declarações.

**Exemplo:**

```css
p {
    color: blue;
}

.destaque {
    color: red;
}
```

```html
<p class="destaque">Texto de exemplo</p>
```

O texto ficará vermelho porque, neste caso, o seletor de classe possui maior especificidade.

---

## 2. Modelo de Formatação

### O que é o modelo de formatação?

O **modelo de formatação CSS (CSS Formatting Model)** descreve como os elementos são organizados, dimensionados e posicionados visualmente numa página.

O navegador interpreta o HTML e as regras CSS para calcular a disposição dos elementos.

Entre os conceitos principais estão:

- Fluxo normal do documento.
- Elementos de bloco e elementos inline.
- Propriedade `display`.
- Posicionamento.
- Flexbox.
- CSS Grid.

### Elementos Block e Inline

No fluxo normal, os elementos podem participar em diferentes modelos de disposição.

**Elementos Block**

Normalmente iniciam uma nova linha e ocupam o espaço horizontal disponível no seu contexto.

Exemplos comuns:

- `<div>`
- `<p>`
- `<h1>`
- `<section>`

**Elementos Inline**

Participam no fluxo do texto e normalmente não iniciam uma nova linha.

Exemplos:

- `<span>`
- `<a>`
- `<strong>`

### Propriedade `display`

A propriedade **`display`** determina como o elemento participa no layout.

| Valor | Comportamento |
|---|---|
| `block` | Cria uma caixa de bloco |
| `inline` | Participa no fluxo inline |
| `inline-block` | Participa inline, permitindo dimensões de caixa |
| `flex` | Cria um contentor flexível |
| `grid` | Cria um contentor de grelha |
| `none` | Remove a caixa do fluxo de renderização |

### Exemplo de Block

```html
<div class="caixa">Primeira caixa</div>
<div class="caixa">Segunda caixa</div>
```

```css
.caixa {
    display: block;
    background-color: lightblue;
    margin-bottom: 10px;
    padding: 15px;
}
```

As caixas serão organizadas verticalmente no fluxo normal.

### Exemplo de Inline

```html
<p>
    Aprendendo <span class="destaque">CSS</span> no frontend.
</p>
```

```css
.destaque {
    display: inline;
    color: red;
    font-weight: bold;
}
```

O elemento `<span>` permanece no fluxo do texto.

### Flexbox

O **Flexbox (Flexible Box Layout)** é um modelo de layout utilizado para organizar elementos principalmente numa dimensão: linha ou coluna.

```html
<div class="container">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
```

**Propriedades importantes:**

| Propriedade | Função |
|---|---|
| `display: flex` | Ativa o Flexbox |
| `flex-direction` | Define a direção |
| `justify-content` | Alinha no eixo principal |
| `align-items` | Alinha no eixo transversal |
| `gap` | Define o espaço entre elementos |
| `flex-wrap` | Permite quebrar linhas |

### CSS Grid

O **CSS Grid Layout** permite organizar elementos em linhas e colunas.

É especialmente útil para layouts bidimensionais.

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

Neste exemplo:

- `display: grid` ativa o Grid.
- `grid-template-columns` define três colunas.
- `1fr` representa uma fração do espaço disponível.
- `gap` define o espaçamento entre os elementos.

### Flexbox vs. Grid

| Flexbox | Grid |
|---|---|
| Organização principalmente unidimensional | Organização bidimensional |
| Ideal para linhas e colunas flexíveis | Ideal para grelhas e layouts estruturados |
| Muito utilizado em menus e alinhamentos | Muito utilizado em dashboards e páginas |

### Posicionamento de Elementos

A propriedade **`position`** permite controlar o posicionamento.

| Valor | Significado |
|---|---|
| `static` | Posicionamento normal |
| `relative` | Deslocamento relativo à posição original |
| `absolute` | Posicionamento em relação ao bloco de referência |
| `fixed` | Posicionamento normalmente relativo à viewport |
| `sticky` | Alterna entre comportamento normal e fixação durante a rolagem |

**Exemplo:**

```css
.container {
    position: relative;
}

.botao {
    position: absolute;
    top: 10px;
    right: 10px;
}
```

O botão será posicionado em relação ao contentor que estabelece o bloco de referência.

---

## 3. Box Model

### O que é Box Model?

O **Box Model (Modelo de Caixa)** é um dos conceitos fundamentais do CSS.

Cada elemento visual é representado através de uma caixa retangular composta por diferentes áreas.

As quatro áreas principais são:

1. Content.
2. Padding.
3. Border.
4. Margin.

### Estrutura do Box Model

```text
+---------------------------------------+
|                MARGIN                 |
|                                       |
|   +-------------------------------+   |
|   |            BORDER             |   |
|   |                               |   |
|   |   +-----------------------+   |   |
|   |   |        PADDING        |   |   |
|   |   |                       |   |   |
|   |   |   +---------------+   |   |   |
|   |   |   |    CONTENT    |   |   |   |
|   |   |   +---------------+   |   |   |
|   |   |                       |   |   |
|   |   +-----------------------+   |   |
|   |                               |   |
|   +-------------------------------+   |
|                                       |
+---------------------------------------+
```

### Content

A área **Content** contém o conteúdo do elemento, como texto, imagens ou outros elementos.

```css
.caixa {
    width: 200px;
    height: 100px;
}
```

Com o modelo de caixa padrão `content-box`, essas dimensões definem a área de conteúdo.

### Padding

O **padding** representa o espaço interno entre o conteúdo e a borda.

```css
.caixa {
    padding: 20px;
}
```

Também podemos definir cada lado separadamente:

```css
.caixa {
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
}
```

### Border

A **border** é a borda que envolve o conteúdo e o padding.

```css
.caixa {
    border: 2px solid black;
}
```

A declaração define:

- `2px` — espessura.
- `solid` — estilo.
- `black` — cor.

### Margin

A **margin** representa o espaço externo à borda da caixa.

```css
.caixa {
    margin: 20px;
}
```

Pode ser utilizada para afastar elementos uns dos outros.

### Diferença entre Padding e Margin

| Padding | Margin |
|---|---|
| Espaço interno | Espaço externo |
| Fica entre conteúdo e borda | Fica fora da borda |
| O fundo do elemento pode ocupar essa área | Normalmente é transparente |
| Aumenta a dimensão da caixa em `content-box` | Acrescenta espaço externo |

### Exemplo completo

**HTML:**

```html
<div class="caixa">
    Conteúdo da caixa
</div>
```

**CSS:**

```css
.caixa {
    width: 200px;
    padding: 20px;
    border: 5px solid blue;
    margin: 15px;
    background-color: lightblue;
}
```

### Calculando a largura total

Com `box-sizing: content-box`, a largura da caixa, excluindo as margens, é calculada por:

```text
Largura da caixa =
Content + Padding esquerdo + Padding direito
+ Border esquerdo + Border direito
```

No exemplo:

```text
200 + 20 + 20 + 5 + 5 = 250px
```

Se também considerarmos as duas margens de 15px:

```text
250 + 15 + 15 = 280px
```

Esse é o espaço horizontal total considerado neste exemplo simples, sem outros efeitos de layout.

### `box-sizing`

A propriedade **`box-sizing`** determina como a largura e a altura são calculadas.

**`content-box` — valor padrão:**

```css
.caixa {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

A largura da caixa será de 250px, sem considerar margens.

**`border-box`:**

```css
.caixa {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

Nesse caso, a largura definida de 200px inclui conteúdo, padding e bordas.

### Boa prática — Box Sizing Global

É comum encontrar a seguinte configuração:

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

Ela facilita os cálculos de dimensões durante a criação de layouts.

### Centralizando um elemento

Podemos utilizar margens automáticas para centralizar horizontalmente um elemento de bloco com largura limitada.

```css
.container {
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
}
```

O valor `auto` distribui o espaço horizontal disponível entre as margens esquerda e direita, quando aplicável.

---

## 4. Categorias e Valores

### Principais categorias de propriedades CSS

As propriedades CSS podem ser agrupadas conforme a sua finalidade.

| Categoria | Exemplos |
|---|---|
| Cores e fundos | `color`, `background-color` |
| Texto e tipografia | `font-size`, `font-family` |
| Dimensões | `width`, `height`, `max-width` |
| Espaçamento | `margin`, `padding`, `gap` |
| Bordas | `border`, `border-radius` |
| Layout | `display`, `position`, `flex`, `grid` |
| Efeitos visuais | `box-shadow`, `opacity` |
| Animações | `transition`, `animation` |

### Cores e Fundos

A propriedade `color` define a cor do texto.

```css
p {
    color: blue;
}
```

A propriedade `background-color` define a cor do fundo.

```css
body {
    background-color: lightgray;
}
```

### Formas de representar cores

**Nomes de cores:**

```css
color: red;
```

**Hexadecimal:**

```css
color: #ff0000;
```

**RGB:**

```css
color: rgb(255, 0, 0);
```

**HSL:**

```css
color: hsl(0, 100%, 50%);
```

### Texto e Tipografia

O CSS permite configurar diferentes características dos textos.

```css
p {
    font-family: Arial, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
    text-align: justify;
}
```

| Propriedade | Função |
|---|---|
| `font-family` | Família tipográfica |
| `font-size` | Tamanho da fonte |
| `font-weight` | Espessura da fonte |
| `line-height` | Altura da linha |
| `text-align` | Alinhamento horizontal do texto |
| `text-decoration` | Decorações como sublinhado |
| `letter-spacing` | Espaçamento entre caracteres |

### Unidades de Medida

O CSS permite utilizar diferentes unidades para definir dimensões.

| Unidade | Tipo | Significado |
|---|---|---|
| `px` | Comprimento absoluto CSS | Pixel CSS |
| `%` | Relativa | Percentual conforme a propriedade |
| `em` | Relativa | Relacionada ao tamanho da fonte |
| `rem` | Relativa | Relacionada à fonte do elemento raiz |
| `vw` | Relativa à viewport | 1% da largura da viewport |
| `vh` | Relativa à viewport | 1% da altura da viewport |
| `fr` | Flexível do Grid | Fração do espaço disponível na grelha |

### Exemplo com diferentes unidades

```css
.container {
    width: 80%;
    max-width: 1200px;
    padding: 2rem;
}

h1 {
    font-size: 2rem;
}

section {
    min-height: 50vh;
}
```

As unidades relativas são frequentemente utilizadas para construir interfaces adaptáveis.

### Valores especiais

Existem valores CSS que ajudam a controlar o comportamento das propriedades.

**`auto`**

Permite que o navegador calcule determinados valores conforme as regras da propriedade.

```css
.container {
    margin: 0 auto;
}
```

**`inherit`**

Faz com que a propriedade utilize o valor computado do elemento pai.

```css
button {
    font-family: inherit;
}
```

**`initial`**

Aplica o valor inicial definido pela especificação da propriedade.

```css
p {
    color: initial;
}
```

**`unset`**

Funciona como `inherit` em propriedades herdáveis e como `initial` nas restantes.

### Responsividade com Media Queries

As **Media Queries** permitem aplicar estilos de acordo com características do dispositivo ou da viewport.

```css
.container {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
}

@media (max-width: 600px) {
    .container {
        width: 95%;
    }
}
```

Neste exemplo, quando a viewport possui largura igual ou inferior a 600px, o contentor passa a ocupar 95% da largura disponível conforme o seu contexto.

### Transições e Efeitos

O CSS também permite criar efeitos visuais.

```css
.botao {
    background-color: blue;
    color: white;
    transition: background-color 0.3s ease;
}

.botao:hover {
    background-color: darkblue;
}
```

A propriedade `transition` permite animar a alteração de determinadas propriedades.

---

## 5. Exemplo Prático — Criando um Cartão com CSS

Vamos utilizar HTML e CSS para criar um cartão simples.

### Estrutura do projeto

```text
projeto-css/
├── index.html
└── style.css
```

### HTML — `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Cartão com CSS</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main class="container">
        <article class="cartao">
            <h1>Aprendendo CSS</h1>

            <p>
                Este cartão utiliza Box Model,
                Flexbox, cores e espaçamentos.
            </p>

            <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
                Saber mais
            </a>
        </article>
    </main>

</body>
</html>
```

### CSS — `style.css`

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
    padding: 20px;
}

.cartao {
    width: 100%;
    max-width: 400px;

    padding: 25px;
    margin: 0 auto;

    background-color: white;
    border: 1px solid #dddddd;
    border-radius: 12px;

    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
}

.cartao h1 {
    color: #2563eb;
    font-size: 1.8rem;
}

.cartao p {
    color: #444444;
    line-height: 1.6;
}

.cartao a {
    display: inline-block;

    margin-top: 15px;
    padding: 10px 15px;

    background-color: #2563eb;
    color: white;

    text-decoration: none;
    border-radius: 6px;
}

.cartao a:hover {
    background-color: #1d4ed8;
}

.cartao a:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 3px;
}
```

### Conceitos aplicados

| Conceito | Aplicação |
|---|---|
| Seletores CSS | Identificação dos elementos |
| Box Model | Padding, border e margin |
| `box-sizing` | Cálculo das dimensões |
| Flexbox | Centralização do cartão |
| `max-width` | Limitação da largura |
| Cores | Personalização visual |
| `border-radius` | Arredondamento das bordas |
| `box-shadow` | Efeito de sombra |
| `:hover` | Estilo na interação com o ponteiro |
| `:focus-visible` | Destaque acessível durante navegação por teclado |

---

## 6. Boas Práticas na Utilização do CSS

### Separar HTML e CSS

Preferir ficheiros externos para facilitar a manutenção.

### Utilizar classes descritivas

```css
.botao-principal {
    background-color: blue;
}
```

É preferível a nomes sem significado, como `.x1`.

### Evitar estilos repetidos

Quando vários elementos partilham os mesmos estilos, podemos reutilizar classes CSS.

### Priorizar a responsividade

Utilizar unidades relativas, Flexbox, Grid e Media Queries conforme as necessidades do projeto.

### Evitar `!important` desnecessário

O `!important` altera a prioridade das declarações na cascata e pode dificultar a manutenção quando utilizado em excesso.

### Utilizar as DevTools

As ferramentas do navegador permitem inspecionar:

- Seletores aplicados.
- Propriedades CSS.
- Estilos sobrescritos.
- Dimensões do Box Model.
- Problemas de layout.

---

## 7. Exercícios para Praticar

### Exercício 1 — Aplicando CSS

Crie uma página HTML e associe um ficheiro CSS externo.

Personalize:

- Cor de fundo.
- Cor dos títulos.
- Tamanho dos parágrafos.
- Família tipográfica.

### Exercício 2 — Seletores

Crie elementos HTML com:

- Tags diferentes.
- Classes.
- IDs.

Depois, aplique regras CSS utilizando diferentes seletores.

### Exercício 3 — Box Model

Crie uma caixa com:

```css
.caixa {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
```

Calcule a largura total da caixa, incluindo margens, considerando `box-sizing: content-box`.

**Resultado esperado:** `270px`.

### Exercício 4 — Flexbox

Crie três caixas e utilize Flexbox para as alinhar horizontalmente.

Depois, modifique a direção para vertical.

### Exercício 5 — Grid

Crie uma grelha com seis elementos distribuídos em três colunas.

Utilize `grid-template-columns` e `gap`.

### Exercício 6 — Responsividade

Crie uma Media Query para alterar a largura de um contentor quando a viewport possuir menos de 600px.

### Exercício 7 — Cartão de Perfil

Crie um cartão contendo:

- Nome.
- Imagem.
- Descrição.
- Botão ou link.

Utilize Box Model, bordas, cores, sombras e alinhamento para personalizar a aparência.

---

## Resumo em uma frase

> O CSS (Cascading Style Sheets) é a linguagem utilizada para definir a apresentação visual de páginas HTML, permitindo personalizar cores, fontes, dimensões e layouts através de seletores, propriedades e valores, enquanto os modelos de formatação, como Flexbox e Grid, organizam os elementos e o Box Model determina a relação entre conteúdo, padding, bordas e margens, sendo fundamental para desenvolver interfaces modernas, organizadas e responsivas.

---

## Conceitos Relacionados para Estudar a Seguir

- **Seletores Avançados** — aprofundar combinadores, pseudoclasses e pseudoelementos.

- **Especificidade e Cascata** — compreender como o navegador determina os estilos aplicados.

- **Flexbox** — criar layouts flexíveis e alinhamentos.

- **CSS Grid** — desenvolver grelhas e layouts bidimensionais.

- **Responsive Web Design** — adaptar interfaces a diferentes dispositivos.

- **Media Queries** — aplicar estilos condicionais.

- **CSS Variables** — utilizar propriedades personalizadas, como `--cor-principal`.

- **Animações e Transições** — criar efeitos visuais.

- **Acessibilidade Visual** — trabalhar com contraste, tamanhos e estados de foco.

- **Frameworks CSS** — conhecer ferramentas como Bootstrap e Tailwind CSS.

---

## Referências para Estudo

- [MDN — CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [MDN — Introdução ao CSS](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Styling_basics)
- [MDN — Box Model](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model)
- [MDN — Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [MDN — CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [W3C — CSS](https://www.w3.org/Style/CSS/)
