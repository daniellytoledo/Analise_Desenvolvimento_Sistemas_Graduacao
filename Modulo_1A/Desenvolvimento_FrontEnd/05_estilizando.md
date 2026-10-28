
# Estilizando Elementos com CSS

---

## 1. Bordas

### O que são bordas?

As **bordas (Borders)** são linhas que envolvem os elementos HTML, delimitando visualmente a área composta pelo conteúdo e pelo padding.

Fazem parte do **Box Model**, juntamente com:

- Content — conteúdo do elemento.
- Padding — espaçamento interno.
- Border — borda.
- Margin — espaçamento externo.

As bordas são utilizadas para:

- Delimitar cartões e caixas.
- Destacar elementos.
- Criar divisões visuais.
- Personalizar botões.
- Identificar campos de formulários.

### Propriedade `border`

A propriedade **`border`** permite configurar a espessura, o estilo e a cor da borda.

**Sintaxe:**

```css
seletor {
    border: espessura estilo cor;
}
```

**Exemplo:**

```css
.caixa {
    border: 2px solid blue;
}
```

Neste exemplo:

- `2px` — espessura da borda.
- `solid` — estilo da linha.
- `blue` — cor da borda.

### Principais estilos de borda

| Valor | Descrição |
|---|---|
| `solid` | Linha contínua |
| `dashed` | Linha tracejada |
| `dotted` | Linha pontilhada |
| `double` | Linha dupla |
| `groove` | Efeito de borda entalhada |
| `ridge` | Efeito de borda em relevo |
| `inset` | Efeito de borda interna |
| `outset` | Efeito de borda externa |
| `none` | Sem borda visível |
| `hidden` | Borda oculta, com comportamento especial em tabelas |

**Exemplo:**

```css
.borda-solida {
    border: 3px solid blue;
}

.borda-tracejada {
    border: 3px dashed red;
}

.borda-pontilhada {
    border: 3px dotted green;
}

.borda-dupla {
    border: 5px double purple;
}
```

### Propriedades individuais

Podemos definir as características das bordas separadamente.

```css
.caixa {
    border-width: 3px;
    border-style: solid;
    border-color: #2563eb;
}
```

| Propriedade | Função |
|---|---|
| `border-width` | Define a espessura |
| `border-style` | Define o estilo |
| `border-color` | Define a cor |

### Bordas em lados específicos

Também podemos aplicar bordas individualmente.

```css
.caixa {
    border-top: 2px solid red;
    border-right: 2px solid blue;
    border-bottom: 2px solid green;
    border-left: 2px solid orange;
}
```

Essa possibilidade é útil para criar elementos com diferentes estilos em cada lado.

### Bordas arredondadas — `border-radius`

A propriedade **`border-radius`** permite arredondar os cantos dos elementos.

```css
.cartao {
    border: 1px solid #dddddd;
    border-radius: 10px;
}
```

Quanto maior o valor, maior tende a ser o arredondamento dos cantos, respeitando as dimensões da caixa.

### Formas utilizando Border Radius

**Cantos ligeiramente arredondados:**

```css
.caixa {
    border-radius: 8px;
}
```

**Cantos bastante arredondados:**

```css
.caixa {
    border-radius: 25px;
}
```

**Elemento circular:**

```css
.circulo {
    width: 150px;
    height: 150px;
    background-color: blue;
    border-radius: 50%;
}
```

Para criar um círculo com esse exemplo, o elemento deve possuir largura e altura iguais.

### Exemplo prático — Cartão com borda

**HTML:**

```html
<div class="cartao">
    <h2>Aprendendo CSS</h2>
    <p>Este cartão possui bordas arredondadas.</p>
</div>
```

**CSS:**

```css
.cartao {
    width: 300px;
    padding: 20px;

    border: 2px solid #2563eb;
    border-radius: 12px;

    background-color: white;
}
```

---

## 2. Sombras

### O que são sombras?

As **sombras (Shadows)** são efeitos visuais que podem criar a sensação de profundidade e destacar elementos.

São frequentemente utilizadas em:

- Cartões.
- Botões.
- Menus.
- Caixas de diálogo.
- Imagens.
- Títulos.

O CSS disponibiliza duas propriedades principais:

- `box-shadow` — sombra associada à caixa de um elemento.
- `text-shadow` — sombra aplicada ao texto.

### Propriedade `box-shadow`

A propriedade **`box-shadow`** permite adicionar uma ou mais sombras a um elemento.

**Sintaxe:**

```css
seletor {
    box-shadow: deslocamento-x deslocamento-y desfoque espalhamento cor;
}
```

**Exemplo:**

```css
.caixa {
    box-shadow: 5px 5px 10px gray;
}
```

Neste exemplo:

- `5px` — deslocamento horizontal.
- `5px` — deslocamento vertical.
- `10px` — intensidade do desfoque.
- `gray` — cor da sombra.

O valor de espalhamento é opcional.

### Componentes do Box Shadow

| Componente | Função |
|---|---|
| Offset X | Deslocamento horizontal |
| Offset Y | Deslocamento vertical |
| Blur Radius | Desfoque |
| Spread Radius | Expansão ou contração da sombra |
| Color | Cor da sombra |
| `inset` | Define uma sombra interna |

### Exemplos de sombras

**Sombra discreta:**

```css
.cartao {
    box-shadow: 0 2px 5px rgb(0 0 0 / 10%);
}
```

**Sombra mais intensa:**

```css
.cartao {
    box-shadow: 0 10px 25px rgb(0 0 0 / 25%);
}
```

**Sombra colorida:**

```css
.cartao {
    box-shadow: 0 5px 15px rgb(37 99 235 / 30%);
}
```

### Sombra interna — `inset`

A palavra-chave **`inset`** permite criar uma sombra dentro da caixa.

```css
.caixa {
    box-shadow: inset 0 0 10px rgb(0 0 0 / 30%);
}
```

É útil para criar efeitos de profundidade interna.

### Múltiplas sombras

Podemos utilizar várias sombras no mesmo elemento, separando-as por vírgulas.

```css
.cartao {
    box-shadow:
        0 4px 10px rgb(0 0 0 / 15%),
        0 10px 25px rgb(0 0 0 / 10%);
}
```

### Propriedade `text-shadow`

A propriedade **`text-shadow`** permite adicionar sombras aos textos.

```css
h1 {
    color: white;
    text-shadow: 2px 2px 4px black;
}
```

A sintaxe básica utiliza:

```text
text-shadow: deslocamento-x deslocamento-y desfoque cor;
```

### Exemplo — Botão com sombra

**HTML:**

```html
<button class="botao">
    Clique aqui
</button>
```

**CSS:**

```css
.botao {
    padding: 12px 24px;

    background-color: #2563eb;
    color: white;

    border: none;
    border-radius: 8px;

    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);

    cursor: pointer;
}
```

### Boas práticas para sombras

- Evitar sombras excessivamente escuras.
- Utilizar efeitos discretos para criar profundidade.
- Manter consistência entre componentes.
- Evitar sombras que prejudiquem a leitura.
- Considerar o desempenho em animações frequentes.

---

## 3. Opacidade

### O que é opacidade?

A **opacidade (Opacity)** determina o nível de transparência de um elemento.

A propriedade `opacity` aceita valores entre `0` e `1`.

| Valor | Resultado |
|---|---|
| `0` | Totalmente transparente |
| `0.25` | 25% opaco |
| `0.5` | 50% opaco |
| `0.75` | 75% opaco |
| `1` | Totalmente opaco |

### Propriedade `opacity`

**Exemplo:**

```css
.imagem {
    opacity: 0.5;
}
```

A imagem será apresentada com 50% de opacidade.

### Exemplo com diferentes opacidades

```html
<div class="caixa opacidade-100">100%</div>
<div class="caixa opacidade-75">75%</div>
<div class="caixa opacidade-50">50%</div>
<div class="caixa opacidade-25">25%</div>
```

```css
.caixa {
    width: 200px;
    padding: 20px;
    margin: 10px;

    background-color: blue;
    color: white;
}

.opacidade-100 {
    opacity: 1;
}

.opacidade-75 {
    opacity: 0.75;
}

.opacidade-50 {
    opacity: 0.5;
}

.opacidade-25 {
    opacity: 0.25;
}
```

### Opacidade e elementos filhos

Uma característica importante é que a propriedade `opacity` afeta a composição visual de todo o elemento, incluindo o seu conteúdo e descendentes.

**Exemplo:**

```css
.cartao {
    opacity: 0.5;
}
```

Nesse caso, o fundo, os textos e as imagens do cartão serão apresentados com transparência.

### Transparência apenas no fundo

Quando queremos tornar apenas o fundo transparente, é preferível utilizar uma cor com canal alfa.

**Exemplo com RGBA:**

```css
.cartao {
    background-color: rgba(0, 0, 255, 0.5);
}
```

**Exemplo com sintaxe RGB moderna:**

```css
.cartao {
    background-color: rgb(0 0 255 / 50%);
}
```

Essas duas declarações representam uma cor azul com 50% de opacidade.

### Opacity vs. RGBA

| `opacity` | Cor com canal alfa |
|---|---|
| Afeta o elemento visualmente como um todo | Afeta apenas a propriedade onde a cor é utilizada |
| Pode tornar textos transparentes | Permite preservar a opacidade do texto |
| Útil para efeitos de entrada e saída | Útil para fundos translúcidos |

### Opacidade em efeitos Hover

Podemos combinar `opacity` com `transition`.

**HTML:**

```html
<button class="botao">
    Enviar
</button>
```

**CSS:**

```css
.botao {
    padding: 12px 24px;
    background-color: blue;
    color: white;

    border: none;
    cursor: pointer;

    opacity: 0.8;

    transition: opacity 0.3s ease;
}

.botao:hover {
    opacity: 1;
}
```

Quando o ponteiro passa sobre o botão, a sua opacidade aumenta gradualmente.

### Opacidade não remove elementos

Uma característica importante:

```css
.elemento {
    opacity: 0;
}
```

O elemento fica visualmente transparente, mas continua a ocupar espaço no layout e pode continuar a receber interações.

Para o remover da apresentação e do layout, podemos utilizar:

```css
.elemento {
    display: none;
}
```

Porém, `display: none` possui consequências diferentes para acessibilidade e comportamento da página.

---

## 4. Gradientes

### O que são gradientes?

Os **gradientes (Gradients)** são recursos que permitem criar transições graduais entre duas ou mais cores.

São utilizados para personalizar:

- Fundos.
- Botões.
- Cabeçalhos.
- Cartões.
- Banners.
- Elementos decorativos.

Os gradientes CSS são representados como imagens geradas pelo navegador, sem necessidade de utilizar ficheiros de imagem externos.

### Tipos de gradientes

| Tipo | Descrição |
|---|---|
| `linear-gradient()` | Gradiente ao longo de uma linha |
| `radial-gradient()` | Gradiente a partir de uma origem |
| `conic-gradient()` | Gradiente em torno de um ponto |
| `repeating-linear-gradient()` | Gradiente linear repetitivo |
| `repeating-radial-gradient()` | Gradiente radial repetitivo |

### Linear Gradient

O **`linear-gradient()`** cria uma transição entre cores ao longo de uma direção.

**Exemplo:**

```css
.fundo {
    background: linear-gradient(blue, purple);
}
```

Por padrão, o gradiente é aplicado de cima para baixo.

### Alterando a direção

```css
.fundo {
    background: linear-gradient(to right, blue, purple);
}
```

O gradiente passa da esquerda para a direita.

**Outras direções:**

```css
/* De cima para baixo */
background: linear-gradient(to bottom, blue, purple);

/* De baixo para cima */
background: linear-gradient(to top, blue, purple);

/* Da esquerda para a direita */
background: linear-gradient(to right, blue, purple);

/* Diagonal */
background: linear-gradient(to bottom right, blue, purple);
```

### Gradientes com ângulos

Também podemos definir a direção através de graus.

```css
.fundo {
    background: linear-gradient(45deg, blue, purple);
}
```

Alguns exemplos:

| Ângulo | Direção aproximada |
|---|---|
| `0deg` | Para cima |
| `90deg` | Para a direita |
| `180deg` | Para baixo |
| `270deg` | Para a esquerda |

### Gradientes com várias cores

Podemos combinar três ou mais cores.

```css
.fundo {
    background: linear-gradient(
        to right,
        blue,
        purple,
        pink
    );
}
```

### Color Stops

Os **Color Stops** permitem definir as posições das cores no gradiente.

```css
.fundo {
    background: linear-gradient(
        to right,
        blue 0%,
        purple 50%,
        pink 100%
    );
}
```

Neste exemplo:

- Azul encontra-se no início.
- Roxo encontra-se na posição de 50%.
- Rosa encontra-se no final.

### Radial Gradient

O **`radial-gradient()`** cria uma transição radial a partir de uma origem.

```css
.fundo {
    background: radial-gradient(
        circle,
        yellow,
        orange,
        red
    );
}
```

Podemos também alterar a posição do centro.

```css
.fundo {
    background: radial-gradient(
        circle at top left,
        white,
        blue
    );
}
```

### Conic Gradient

O **`conic-gradient()`** cria transições em torno de um ponto central.

```css
.fundo {
    background: conic-gradient(
        red,
        yellow,
        green,
        blue,
        red
    );
}
```

É útil para criar efeitos circulares e elementos decorativos.

### Gradientes repetitivos

O **`repeating-linear-gradient()`** permite repetir um padrão.

```css
.fundo {
    background: repeating-linear-gradient(
        45deg,
        white 0px,
        white 10px,
        lightblue 10px,
        lightblue 20px
    );
}
```

Esse código cria faixas diagonais alternadas.

### Exemplo prático — Botão com gradiente

**HTML:**

```html
<button class="botao-gradiente">
    Clique aqui
</button>
```

**CSS:**

```css
.botao-gradiente {
    padding: 15px 30px;

    background: linear-gradient(
        90deg,
        #2563eb,
        #9333ea
    );

    color: white;
    border: none;
    border-radius: 8px;

    cursor: pointer;
}
```

O botão apresenta uma transição gradual entre azul e roxo.

---

## 5. Exemplo Prático — Cartão Estilizado

Vamos combinar os quatro conceitos estudados:

1. Bordas.
2. Sombras.
3. Opacidade.
4. Gradientes.

### Estrutura do projeto

```text
cartao-estilizado/
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

    <title>Estilizando com CSS</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main class="container">
        <article class="cartao">
            <div class="cabecalho">
                <h1>Estilizando com CSS</h1>
            </div>

            <div class="conteudo">
                <h2>Recursos Visuais</h2>

                <p>
                    Este cartão utiliza bordas arredondadas,
                    sombras, transparência e gradientes.
                </p>

                <a
                    class="botao"
                    href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Aprender CSS
                </a>
            </div>
        </article>
    </main>

</body>
</html>
```

### CSS — `style.css`

```css
/* Configurações gerais */

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;

    background: linear-gradient(
        135deg,
        #dbeafe,
        #ede9fe
    );
}

/* Container principal */

.container {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
    padding: 20px;
}

/* Cartão */

.cartao {
    width: 100%;
    max-width: 420px;

    background-color: white;

    border: 1px solid #dddddd;
    border-radius: 15px;

    overflow: hidden;

    box-shadow: 0 10px 30px rgb(0 0 0 / 15%);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

/* Efeito de hover */

.cartao:hover {
    transform: translateY(-5px);

    box-shadow: 0 15px 40px rgb(0 0 0 / 22%);
}

/* Cabeçalho com gradiente */

.cabecalho {
    padding: 30px;

    background: linear-gradient(
        90deg,
        #2563eb,
        #9333ea
    );

    color: white;
    text-align: center;
}

.cabecalho h1 {
    margin: 0;
    font-size: 1.6rem;

    text-shadow: 1px 2px 3px rgb(0 0 0 / 20%);
}

/* Conteúdo */

.conteudo {
    padding: 25px;
    text-align: center;
}

.conteudo h2 {
    color: #2563eb;
}

.conteudo p {
    color: #444444;
    line-height: 1.6;
}

/* Botão */

.botao {
    display: inline-block;

    margin-top: 15px;
    padding: 12px 24px;

    background: linear-gradient(
        90deg,
        #2563eb,
        #9333ea
    );

    color: white;
    text-decoration: none;

    border: none;
    border-radius: 8px;

    box-shadow: 0 4px 10px rgb(0 0 0 / 20%);

    opacity: 0.9;

    transition:
        opacity 0.3s ease,
        transform 0.3s ease;
}

/* Interação */

.botao:hover {
    opacity: 1;
    transform: scale(1.05);
}

.botao:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 4px;
}

/* Acessibilidade */

@media (prefers-reduced-motion: reduce) {
    .cartao,
    .botao {
        transition: none;
    }
}
```

### Conceitos aplicados

| Conceito | Aplicação |
|---|---|
| `border` | Delimita o cartão |
| `border-radius` | Arredonda os cantos |
| `box-shadow` | Cria profundidade |
| `text-shadow` | Aplica sombra ao título |
| `opacity` | Controla a transparência do botão |
| `linear-gradient()` | Cria fundos coloridos |
| `transition` | Suaviza alterações visuais |
| `transform` | Cria efeitos de movimento |
| `:hover` | Aplica estilos na interação |
| `:focus-visible` | Destaca o foco do teclado |

---

## 6. Boas Práticas na Estilização

### Utilizar bordas de forma consistente

Manter padrões de espessura, cor e arredondamento entre componentes semelhantes.

### Evitar excesso de sombras

Sombras muito intensas podem prejudicar a aparência visual e dificultar a leitura.

### Manter contraste adequado

Textos e elementos interativos devem apresentar contraste suficiente em relação ao fundo.

### Utilizar transparência com cuidado

Valores baixos de opacidade podem tornar informações importantes difíceis de visualizar.

### Não depender apenas de cores

Informações importantes devem ser comunicadas também através de textos, ícones ou outros indicadores.

### Evitar efeitos visuais desnecessários

Gradientes, sombras e transições devem contribuir para a organização e compreensão da interface.

### Priorizar a responsividade

Os componentes devem adaptar-se a diferentes tamanhos de ecrã sem provocar problemas de apresentação.

---

## 7. Exercícios para Praticar

### Exercício 1 — Bordas

Crie quatro caixas utilizando:

- Borda sólida.
- Borda tracejada.
- Borda pontilhada.
- Borda dupla.

Utilize cores diferentes.

### Exercício 2 — Border Radius

Crie três elementos:

1. Um quadrado com cantos arredondados.
2. Um botão com cantos bastante arredondados.
3. Um círculo utilizando `border-radius: 50%`.

### Exercício 3 — Box Shadow

Crie um cartão com uma sombra externa.

Depois, altere:

- Deslocamento horizontal.
- Deslocamento vertical.
- Desfoque.
- Cor.

Observe as diferenças.

### Exercício 4 — Text Shadow

Crie um título com uma sombra utilizando `text-shadow`.

Experimente diferentes cores e intensidades.

### Exercício 5 — Opacidade

Crie quatro caixas com valores de opacidade:

- `1`.
- `0.75`.
- `0.5`.
- `0.25`.

Compare os resultados.

### Exercício 6 — Gradientes

Crie três elementos utilizando:

1. `linear-gradient()`.
2. `radial-gradient()`.
3. `conic-gradient()`.

### Exercício 7 — Projeto Completo

Crie um cartão de apresentação contendo:

- Título.
- Imagem.
- Descrição.
- Botão.

Utilize bordas arredondadas, sombras, gradientes e efeitos de opacidade.

---

## Resumo em uma frase

> A estilização com CSS permite personalizar a apresentação visual dos elementos HTML através de propriedades como `border` e `border-radius`, utilizadas para criar bordas e arredondamentos, `box-shadow` e `text-shadow`, responsáveis por efeitos de profundidade, `opacity`, que controla a transparência, e gradientes como `linear-gradient()`, `radial-gradient()` e `conic-gradient()`, que produzem transições graduais entre cores, contribuindo para desenvolver interfaces modernas e visualmente organizadas.

---

## Conceitos Relacionados para Estudar a Seguir

- **CSS Box Model** — compreender a relação entre conteúdo, padding, bordas e margens.
- **CSS Transitions** — criar alterações graduais entre estilos.
- **CSS Animations** — desenvolver animações com `@keyframes`.
- **CSS Transform** — aplicar deslocamentos, escalas e rotações.
- **Flexbox** — organizar elementos em layouts flexíveis.
- **CSS Grid** — criar estruturas com linhas e colunas.
- **Responsividade** — adaptar estilos a diferentes dispositivos.
- **Acessibilidade Visual** — melhorar contraste e legibilidade.
- **CSS Variables** — reutilizar cores e outros valores através de propriedades personalizadas.

---

## Referências para Estudo

- [MDN — CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [MDN — Border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)
- [MDN — Border Radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
- [MDN — Box Shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
- [MDN — Text Shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- [MDN — Opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity)
- [MDN — CSS Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients)
