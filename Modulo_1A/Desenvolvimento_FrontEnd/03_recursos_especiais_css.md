
# Recursos Especiais do CSS

---

## 1. Box Sizing

### O que é Box Sizing?

A propriedade **`box-sizing`** determina como o navegador calcula a largura e a altura dos elementos HTML.

Está diretamente relacionada com o **Box Model**, estudado anteriormente, que é composto por quatro áreas:

- **Content:** conteúdo do elemento.
- **Padding:** espaço interno entre o conteúdo e a borda.
- **Border:** borda do elemento.
- **Margin:** espaço externo à borda.

A propriedade `box-sizing` controla se as dimensões definidas incluem apenas o conteúdo ou também o padding e a borda.

### Valores da propriedade

Os dois principais valores são:

| Valor | Comportamento |
|---|---|
| `content-box` | A largura e a altura definidas aplicam-se à área de conteúdo |
| `border-box` | A largura e a altura definidas incluem conteúdo, padding e borda |

### Content-box

O valor **`content-box`** é o comportamento padrão da maioria dos elementos HTML.

```css
.caixa {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

Neste exemplo, a largura total da caixa é:

```text
Conteúdo = 200px
Padding esquerdo = 20px
Padding direito = 20px
Border esquerdo = 5px
Border direito = 5px

Largura total = 200 + 20 + 20 + 5 + 5

Resultado = 250px
```

O navegador acrescenta o padding e a borda à largura definida.

### Border-box

O valor **`border-box`** inclui padding e bordas nas dimensões especificadas.

```css
.caixa {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid black;
}
```

Neste caso:

```text
Largura total = 200px

Conteúdo = 150px
Padding total = 40px
Bordas = 10px
```

A largura total continua a ser 200px, pois o navegador ajusta o espaço disponível para o conteúdo.

**Importante:** as margens não são incluídas no cálculo de `box-sizing`.

### Comparativo visual

```text
CONTENT-BOX

+--------------------------------+
|             BORDER             |
|  +--------------------------+  |
|  |         PADDING          |  |
|  |    +----------------+    |  |
|  |    |    CONTENT     |    |  |
|  |    |     200px      |    |  |
|  |    +----------------+    |  |
|  +--------------------------+  |
+--------------------------------+

Largura total: 250px


BORDER-BOX

+--------------------------+
|          BORDER          |
|  +--------------------+  |
|  |       PADDING      |  |
|  |   +------------+   |  |
|  |   |  CONTENT   |   |  |
|  |   |   150px    |   |  |
|  |   +------------+   |  |
|  +--------------------+  |
+--------------------------+

Largura total: 200px
```

### Aplicando Box Sizing Globalmente

Uma prática comum no desenvolvimento frontend é utilizar:

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}
```

Esse código aplica `border-box` aos elementos e aos seus pseudoelementos.

### Por que utilizar Border-box?

As principais vantagens são:

- Facilita o cálculo das dimensões.
- Ajuda a evitar que padding e bordas aumentem inesperadamente a largura.
- Simplifica a construção de layouts.
- Facilita a utilização de Flexbox e Grid.
- Melhora a previsibilidade dos tamanhos dos elementos.

---

## 2. Degradês (Gradientes)

### O que são Gradientes?

Os **gradientes (Gradients)** permitem criar transições graduais entre duas ou mais cores.

São frequentemente utilizados para estilizar:

- Fundos de páginas.
- Botões.
- Cartões.
- Cabeçalhos.
- Banners.
- Elementos decorativos.

O CSS permite criar gradientes sem utilizar ficheiros de imagem.

### Tipos de gradientes

Os principais tipos são:

| Tipo | Função |
|---|---|
| `linear-gradient()` | Transição de cores ao longo de uma linha |
| `radial-gradient()` | Transição de cores a partir de uma origem |
| `conic-gradient()` | Transição de cores em torno de um ponto |
| `repeating-linear-gradient()` | Gradiente linear repetido |

### Linear Gradient

O **`linear-gradient()`** cria uma transição de cores ao longo de uma direção.

**Exemplo:**

```css
.caixa {
    background: linear-gradient(blue, purple);
}
```

O navegador cria um gradiente que começa em azul e termina em roxo.

Por padrão, a direção é de cima para baixo.

### Definindo a direção

Podemos utilizar palavras-chave para configurar a direção.

```css
.caixa {
    background: linear-gradient(to right, blue, purple);
}
```

O gradiente é aplicado da esquerda para a direita.

**Outras direções:**

```css
/* De cima para baixo */
background: linear-gradient(to bottom, blue, purple);

/* De baixo para cima */
background: linear-gradient(to top, blue, purple);

/* Da esquerda para a direita */
background: linear-gradient(to right, blue, purple);

/* Na diagonal */
background: linear-gradient(to bottom right, blue, purple);
```

### Gradientes com ângulos

Também podemos utilizar graus (`deg`).

```css
.caixa {
    background: linear-gradient(45deg, blue, purple);
}
```

Os ângulos permitem controlar precisamente a direção do gradiente.

### Gradientes com várias cores

Um gradiente não precisa de possuir apenas duas cores.

```css
.caixa {
    background: linear-gradient(
        to right,
        red,
        orange,
        yellow,
        green,
        blue
    );
}
```

As cores serão distribuídas ao longo da direção definida.

### Controlando a posição das cores

Podemos definir pontos de paragem, conhecidos como **Color Stops**.

```css
.caixa {
    background: linear-gradient(
        to right,
        blue 0%,
        purple 50%,
        pink 100%
    );
}
```

Neste exemplo:

- Azul começa em 0%.
- Roxo está posicionado em 50%.
- Rosa chega a 100%.

### Radial Gradient

O **`radial-gradient()`** cria uma transição de cores que se expande a partir de uma origem.

```css
.caixa {
    background: radial-gradient(circle, yellow, orange, red);
}
```

Podemos utilizar diferentes formas e posições.

```css
.caixa {
    background: radial-gradient(
        circle at center,
        white,
        blue
    );
}
```

### Conic Gradient

O **`conic-gradient()`** cria transições de cores em torno de um ponto.

```css
.caixa {
    background: conic-gradient(
        red,
        yellow,
        green,
        blue,
        red
    );
}
```

Esse tipo de gradiente pode ser utilizado para criar efeitos circulares e indicadores visuais.

### Exemplo prático — Botão com Gradiente

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
    border: none;
    border-radius: 8px;

    background: linear-gradient(
        90deg,
        #2563eb,
        #9333ea
    );

    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
}
```

O botão apresenta uma transição gradual entre azul e roxo.

---

## 3. Animações

### O que são Animações CSS?

As **animações CSS (CSS Animations)** permitem modificar propriedades de um elemento ao longo do tempo.

Podem ser utilizadas para:

- Criar movimentos.
- Alterar cores.
- Produzir efeitos de entrada e saída.
- Criar indicadores de carregamento.
- Destacar elementos.
- Melhorar a comunicação visual.

Diferentemente das transições, as animações podem executar sequências de várias etapas sem depender necessariamente de uma interação do utilizador.

### Propriedade `@keyframes`

A regra **`@keyframes`** permite definir os diferentes estados de uma animação.

**Exemplo:**

```css
@keyframes mudarCor {
    from {
        background-color: blue;
    }

    to {
        background-color: purple;
    }
}
```

Neste exemplo:

- `from` define o estado inicial.
- `to` define o estado final.

### Aplicando uma animação

Para utilizar a animação, aplicamos a propriedade `animation`.

```css
.caixa {
    width: 150px;
    height: 150px;
    background-color: blue;

    animation: mudarCor 3s;
}
```

A animação modifica gradualmente a cor durante três segundos.

### Animações com porcentagens

Também podemos definir diferentes etapas através de porcentagens.

```css
@keyframes movimento {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(100px);
    }

    100% {
        transform: translateX(0);
    }
}
```

O elemento:

1. Começa na posição original.
2. Desloca-se 100px para a direita.
3. Regressa à posição inicial.

### Principais propriedades de animação

| Propriedade | Função |
|---|---|
| `animation-name` | Nome da animação |
| `animation-duration` | Duração |
| `animation-timing-function` | Ritmo da animação |
| `animation-delay` | Tempo de espera antes de iniciar |
| `animation-iteration-count` | Número de repetições |
| `animation-direction` | Direção de reprodução |
| `animation-fill-mode` | Comportamento dos estilos fora da execução |
| `animation-play-state` | Permite pausar ou continuar |

### Exemplo com várias propriedades

```css
.caixa {
    animation-name: movimento;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
```

Neste exemplo:

- A animação chama-se `movimento`.
- Dura dois segundos por ciclo.
- Começa após um segundo.
- Repete-se indefinidamente.
- Alterna a direção entre os ciclos.

### Valores de Animation Timing Function

A propriedade `animation-timing-function` determina como os valores são interpolados ao longo do tempo.

| Valor | Comportamento |
|---|---|
| `linear` | Velocidade constante |
| `ease` | Aceleração e desaceleração padrão |
| `ease-in` | Começa lentamente |
| `ease-out` | Termina lentamente |
| `ease-in-out` | Começa e termina lentamente |
| `steps()` | Define alterações em etapas |

### Exemplo — Animação de Entrada

**HTML:**

```html
<div class="cartao">
    <h2>Bem-vindo!</h2>
    <p>Conteúdo com animação de entrada.</p>
</div>
```

**CSS:**

```css
.cartao {
    padding: 20px;
    background-color: #eeeeee;
    border-radius: 10px;

    animation: aparecer 1s ease-out;
}

@keyframes aparecer {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

O cartão surge gradualmente enquanto se desloca até à sua posição original.

### Exemplo — Animação de Carregamento

**HTML:**

```html
<div class="loading" role="status" aria-label="Carregando"></div>
```

**CSS:**

```css
.loading {
    width: 40px;
    height: 40px;

    border: 5px solid #dddddd;
    border-top-color: #2563eb;
    border-radius: 50%;

    animation: girar 1s linear infinite;
}

@keyframes girar {
    to {
        transform: rotate(360deg);
    }
}
```

A animação cria um indicador circular de carregamento.

### Acessibilidade nas Animações

Algumas pessoas podem sentir desconforto com movimentos intensos.

Para respeitar preferências de movimento reduzido, podemos utilizar:

```css
@media (prefers-reduced-motion: reduce) {
    .loading {
        animation: none;
    }

    .cartao {
        animation: none;
    }
}
```

Essa é uma prática importante para melhorar a acessibilidade das interfaces.

---

## 4. Transições

### O que são Transições CSS?

As **transições (CSS Transitions)** permitem criar mudanças graduais entre valores de propriedades CSS.

São frequentemente utilizadas em:

- Botões.
- Links.
- Menus.
- Cartões.
- Campos de formulário.
- Efeitos de hover.
- Alterações de estado.

Uma transição normalmente acontece quando uma propriedade muda de valor.

### Propriedade `transition`

A sintaxe simplificada é:

```css
seletor {
    transition: propriedade duração função-de-tempo;
}
```

**Exemplo:**

```css
.botao {
    background-color: blue;
    transition: background-color 0.3s ease;
}

.botao:hover {
    background-color: purple;
}
```

Quando o ponteiro passa sobre o botão, a cor muda gradualmente.

### Principais propriedades de transição

| Propriedade | Função |
|---|---|
| `transition-property` | Define quais propriedades serão animadas |
| `transition-duration` | Duração |
| `transition-timing-function` | Ritmo |
| `transition-delay` | Atraso antes de começar |
| `transition` | Forma abreviada |

### Exemplo com propriedades separadas

```css
.botao {
    transition-property: background-color;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
}
```

### Exemplo com múltiplas propriedades

Podemos animar diferentes propriedades simultaneamente.

```css
.cartao {
    background-color: white;
    transform: scale(1);

    transition:
        background-color 0.3s ease,
        transform 0.3s ease;
}

.cartao:hover {
    background-color: lightblue;
    transform: scale(1.05);
}
```

Neste exemplo, o cartão muda de cor e aumenta ligeiramente de tamanho.

### A propriedade Transform

A propriedade **`transform`** permite modificar visualmente a posição, rotação, escala ou inclinação de um elemento.

Principais funções:

| Função | Finalidade |
|---|---|
| `translate()` | Deslocar o elemento |
| `scale()` | Aumentar ou diminuir |
| `rotate()` | Rodar |
| `skew()` | Inclinar |

**Exemplos:**

```css
/* Deslocar */
transform: translateX(20px);

/* Aumentar */
transform: scale(1.2);

/* Rodar */
transform: rotate(45deg);

/* Inclinar */
transform: skew(10deg);
```

### Exemplo — Botão Interativo

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

    background-color: #2563eb;
    color: white;

    border: none;
    border-radius: 8px;
    cursor: pointer;

    transition:
        background-color 0.3s ease,
        transform 0.2s ease;
}

.botao:hover {
    background-color: #1d4ed8;
    transform: translateY(-3px);
}

.botao:active {
    transform: translateY(0);
}
```

O botão apresenta efeitos diferentes ao receber o ponteiro e ao ser pressionado.

### Diferença entre Animações e Transições

| Animações | Transições |
|---|---|
| Utilizam `@keyframes` | Utilizam `transition` |
| Podem possuir várias etapas | Interpolam mudanças entre valores |
| Podem iniciar automaticamente | Normalmente dependem de uma alteração |
| Podem repetir-se indefinidamente | Acompanham mudanças de estado |
| Ideais para sequências complexas | Ideais para efeitos simples |

### Quando utilizar cada recurso?

**Transições:**

- Alteração de cor de botões.
- Efeitos de hover.
- Destaque de cartões.
- Abertura de componentes com estados controlados.

**Animações:**

- Indicadores de carregamento.
- Animações de entrada.
- Movimentos repetitivos.
- Sequências com várias etapas.

---

## 5. Exemplo Prático — Cartão Animado com Gradiente

Vamos combinar os quatro recursos estudados:

1. Box Sizing.
2. Gradientes.
3. Animações.
4. Transições.

### Estrutura do Projeto

```text
recursos-especiais/
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

    <title>Recursos Especiais CSS</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main class="container">
        <article class="cartao">
            <h1>Recursos Especiais CSS</h1>

            <p>
                Exemplo utilizando gradientes,
                animações e transições.
            </p>

            <a
                class="botao"
                href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                target="_blank"
                rel="noopener noreferrer"
            >
                Aprender CSS
            </a>
        </article>
    </main>

</body>
</html>
```

### CSS — `style.css`

```css
/* Box Sizing */

*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Configurações gerais */

body {
    margin: 0;
    font-family: Arial, sans-serif;

    background: linear-gradient(
        135deg,
        #2563eb,
        #9333ea
    );
}

/* Container */

.container {
    min-height: 100vh;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
}

/* Cartão */

.cartao {
    width: 100%;
    max-width: 400px;
    padding: 30px;

    background-color: white;
    border-radius: 15px;
    text-align: center;

    box-shadow: 0 10px 25px rgb(0 0 0 / 15%);

    animation: aparecer 1s ease-out;

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

/* Transição ao passar o ponteiro */

.cartao:hover {
    transform: translateY(-8px);

    box-shadow: 0 15px 35px rgb(0 0 0 / 25%);
}

/* Título */

.cartao h1 {
    color: #2563eb;
}

/* Texto */

.cartao p {
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
    border-radius: 8px;

    transition: transform 0.3s ease;
}

.botao:hover {
    transform: scale(1.05);
}

.botao:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 4px;
}

/* Animação */

@keyframes aparecer {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Acessibilidade */

@media (prefers-reduced-motion: reduce) {
    .cartao,
    .botao {
        animation: none;
        transition: none;
    }
}
```

### Conceitos Aplicados

| Conceito | Aplicação |
|---|---|
| `box-sizing` | Controla o cálculo das dimensões |
| `linear-gradient()` | Cria fundos com transição de cores |
| `@keyframes` | Define a animação de entrada |
| `animation` | Executa a animação |
| `transition` | Suaviza mudanças de estilo |
| `transform` | Move ou aumenta elementos |
| `:hover` | Aplica estilos ao passar o ponteiro |
| `:focus-visible` | Destaca a navegação por teclado |
| `prefers-reduced-motion` | Respeita preferências de movimento reduzido |

---

## 6. Boas Práticas na Utilização dos Recursos Especiais

### Utilizar Border-box

O uso de `box-sizing: border-box` facilita o desenvolvimento de layouts e reduz problemas de dimensionamento.

### Evitar Animações Excessivas

Animações devem melhorar a experiência do utilizador, não dificultar a leitura ou a navegação.

### Priorizar Desempenho

Sempre que possível, preferir animações de propriedades como `transform` e `opacity`, que geralmente possuem melhor desempenho do que alterações frequentes de propriedades de layout.

### Respeitar a Acessibilidade

Utilizar `prefers-reduced-motion` para adaptar efeitos visuais a pessoas sensíveis a movimento.

### Evitar `transition: all` sem necessidade

É preferível especificar as propriedades que devem ser animadas.

**Exemplo recomendado:**

```css
.botao {
    transition:
        background-color 0.3s ease,
        transform 0.3s ease;
}
```

Isso ajuda a evitar transições inesperadas.

### Manter Consistência Visual

Utilizar cores, tempos de animação e efeitos de forma coerente em toda a aplicação.

---

## Resumo em uma frase

> Os recursos especiais do CSS permitem criar interfaces visualmente mais elaboradas através de `box-sizing`, que controla o dimensionamento das caixas, gradientes, que produzem transições graduais entre cores, animações com `@keyframes`, que modificam propriedades ao longo do tempo, e transições, que suavizam mudanças de estilo, contribuindo para a construção de páginas modernas, interativas e responsivas.

---

## Conceitos Relacionados para Estudar a Seguir

- **CSS Transform** — aprofundar transformações de escala, rotação e deslocamento.

- **CSS Animations** — estudar animações complexas com múltiplos keyframes.

- **CSS Transitions** — criar interações visuais suaves.

- **Flexbox** — desenvolver layouts flexíveis.

- **CSS Grid** — organizar interfaces em linhas e colunas.

- **Responsividade** — adaptar layouts a diferentes tamanhos de ecrã.

- **Pseudoclasses CSS** — estudar `:hover`, `:focus` e `:active`.

- **Acessibilidade Web** — criar efeitos visuais compatíveis com diferentes necessidades.

- **Performance Frontend** — otimizar animações e renderização.

---

## Referências para Estudo

- [MDN — CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [MDN — Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [MDN — CSS Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- [MDN — CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- [MDN — CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [MDN — Prefers Reduced Motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
