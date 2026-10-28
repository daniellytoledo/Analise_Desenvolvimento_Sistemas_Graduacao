
# Efeitos em CSS — Transformações

---

## 1. Rotate

### O que são transformações CSS?

As **transformações CSS (CSS Transforms)** permitem modificar visualmente elementos HTML através de operações como:

- Rotação.
- Redimensionamento.
- Inclinação.
- Deslocamento.

Esses efeitos são aplicados principalmente através da propriedade `transform`.

**Sintaxe básica:**

```css
seletor {
    transform: funcao(valor);
}
```

As quatro funções estudadas neste módulo são:

| Função | Finalidade |
|---|---|
| `rotate()` | Girar elementos |
| `scale()` | Alterar a escala |
| `skew()` | Inclinar elementos |
| `translate()` | Deslocar elementos |

As transformações modificam a representação visual do elemento sem alterar diretamente o espaço que ele ocupa no fluxo normal do documento.

### O que é Rotate?

A função **`rotate()`** permite girar um elemento em torno de um ponto de referência.

Por padrão, em elementos HTML comuns, a rotação acontece em torno do centro do elemento.

### Sintaxe

```css
transform: rotate(angulo);
```

O ângulo pode ser definido através de unidades como:

- `deg` — graus.
- `rad` — radianos.
- `turn` — voltas.

### Exemplo com graus

```css
.caixa {
    transform: rotate(45deg);
}
```

Esse código gira o elemento 45 graus no sentido horário, considerando o sistema de coordenadas habitual de uma página com direção da esquerda para a direita.

### Valores positivos e negativos

```css
/* Rotação de 45 graus */
.caixa1 {
    transform: rotate(45deg);
}

/* Rotação de -45 graus */
.caixa2 {
    transform: rotate(-45deg);
}

/* Uma volta completa */
.caixa3 {
    transform: rotate(360deg);
}
```

Em condições habituais:

- Valores positivos produzem rotação no sentido horário.
- Valores negativos produzem rotação no sentido anti-horário.
- `360deg` corresponde a uma volta completa.

A direção visual pode variar conforme a direção de escrita configurada.

### Exemplo prático

**HTML:**

```html
<div class="caixa">
    Rotate
</div>
```

**CSS:**

```css
.caixa {
    width: 150px;
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #2563eb;
    color: white;

    transform: rotate(30deg);
}
```

O elemento será apresentado com uma inclinação de 30 graus.

### Propriedade `transform-origin`

A propriedade **`transform-origin`** permite definir o ponto de referência utilizado para aplicar a transformação.

**Exemplo:**

```css
.caixa {
    transform-origin: top left;
    transform: rotate(30deg);
}
```

Nesse caso, o elemento gira em torno do canto superior esquerdo.

### Valores comuns

| Valor | Ponto de referência |
|---|---|
| `center` | Centro |
| `top left` | Canto superior esquerdo |
| `top right` | Canto superior direito |
| `bottom left` | Canto inferior esquerdo |
| `bottom right` | Canto inferior direito |

Também podemos utilizar porcentagens:

```css
.caixa {
    transform-origin: 25% 75%;
    transform: rotate(45deg);
}
```

### Rotate com Hover

Podemos aplicar uma rotação quando o ponteiro passa sobre o elemento.

```css
.caixa {
    transition: transform 0.5s ease;
}

.caixa:hover {
    transform: rotate(15deg);
}
```

A propriedade `transition` permite que o movimento aconteça gradualmente.

### Animação de rotação contínua

O `rotate()` pode ser utilizado com `@keyframes`.

```css
@keyframes girar {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.icone {
    animation: girar 2s linear infinite;
}
```

Esse tipo de efeito é frequentemente utilizado em indicadores de carregamento.

### Aplicações de Rotate

- Ícones de carregamento.
- Setas de menus expansíveis.
- Efeitos decorativos.
- Cartões inclinados.
- Animações de rotação.

---

## 2. Scale

### O que é Scale?

A função **`scale()`** permite aumentar ou diminuir visualmente o tamanho de um elemento.

Podemos alterar:

- Largura e altura simultaneamente.
- Apenas a escala horizontal.
- Apenas a escala vertical.

### Sintaxe

```css
transform: scale(valor);
```

O valor representa um fator multiplicativo.

| Valor | Resultado |
|---|---|
| `scale(1)` | Tamanho original |
| `scale(1.2)` | Aumento de 20% |
| `scale(1.5)` | Aumento de 50% |
| `scale(2)` | Dobro do tamanho |
| `scale(0.5)` | Metade do tamanho |
| `scale(0)` | Escala visual reduzida a zero |

### Exemplo básico

```css
.caixa {
    transform: scale(1.5);
}
```

O elemento será apresentado com 150% do seu tamanho original nos dois eixos.

### Scale com dois valores

Podemos definir escalas diferentes para os eixos X e Y.

```css
.caixa {
    transform: scale(1.5, 0.8);
}
```

Neste exemplo:

- Eixo X: 150%.
- Eixo Y: 80%.

O elemento fica mais largo e menos alto visualmente.

### ScaleX e ScaleY

Também existem funções específicas.

**Escala horizontal:**

```css
.caixa {
    transform: scaleX(1.5);
}
```

**Escala vertical:**

```css
.caixa {
    transform: scaleY(0.5);
}
```

### Exemplo prático — Imagem com Zoom

**HTML:**

```html
<div class="imagem-container">
    <img
        src="imagem.jpg"
        alt="Paisagem natural"
    >
</div>
```

**CSS:**

```css
.imagem-container {
    width: 300px;
    height: 200px;

    overflow: hidden;
    border-radius: 10px;
}

.imagem-container img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform 0.4s ease;
}

.imagem-container:hover img {
    transform: scale(1.1);
}
```

Quando o ponteiro passa sobre a imagem, ela aumenta 10%.

A propriedade `overflow: hidden` impede que a parte ampliada ultrapasse visualmente os limites do contentor.

### Exemplo — Botão com Scale

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

    cursor: pointer;

    transition: transform 0.3s ease;
}

.botao:hover {
    transform: scale(1.1);
}
```

O botão aumenta ligeiramente quando recebe o ponteiro.

### Scale e valores negativos

A função `scale()` também aceita valores negativos.

```css
.imagem {
    transform: scaleX(-1);
}
```

Esse efeito inverte visualmente a imagem na horizontal.

### Cuidados com Scale

A transformação não altera o tamanho utilizado pelo elemento no layout.

Por exemplo:

```css
.caixa {
    width: 200px;
    transform: scale(1.5);
}
```

A caixa continua a ocupar o espaço de layout correspondente aos 200px originais, embora a sua apresentação visual seja ampliada.

Por isso, o elemento pode sobrepor-se a outros componentes.

### Aplicações de Scale

- Zoom de imagens.
- Destaque de cartões.
- Efeitos de botões.
- Microinterações.
- Animações de entrada.
- Efeitos decorativos.

---

## 3. Skew

### O que é Skew?

A função **`skew()`** permite inclinar visualmente um elemento através de uma transformação de cisalhamento.

Ao contrário de `rotate()`, que gira o elemento, `skew()` modifica os ângulos da sua forma.

### Sintaxe

```css
transform: skew(anguloX, anguloY);
```

Os valores representam os ângulos de inclinação nos eixos X e Y.

O segundo valor é opcional.

### Exemplo básico

```css
.caixa {
    transform: skew(20deg);
}
```

Neste exemplo, o elemento recebe uma inclinação no eixo X.

### SkewX

A função **`skewX()`** inclina o elemento horizontalmente.

```css
.caixa {
    transform: skewX(20deg);
}
```

O efeito pode fazer com que uma caixa retangular adquira a aparência de um paralelogramo.

### SkewY

A função **`skewY()`** aplica uma inclinação relacionada com o eixo vertical.

```css
.caixa {
    transform: skewY(15deg);
}
```

### Skew com dois valores

Podemos combinar os dois eixos.

```css
.caixa {
    transform: skew(20deg, 10deg);
}
```

Nesse caso:

- `20deg` representa a inclinação no eixo X.
- `10deg` representa a inclinação no eixo Y.

### Comparando Rotate e Skew

| Rotate | Skew |
|---|---|
| Gira o elemento | Inclina a geometria do elemento |
| Preserva os ângulos da forma | Pode alterar os ângulos internos |
| Utiliza `rotate()` | Utiliza `skew()` |
| Ideal para rotação de ícones | Ideal para efeitos geométricos |

### Exemplo prático — Caixa Inclinada

**HTML:**

```html
<div class="caixa">
    Efeito Skew
</div>
```

**CSS:**

```css
.caixa {
    width: 200px;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #9333ea;
    color: white;

    transform: skewX(15deg);
}
```

O elemento apresentará uma inclinação horizontal.

### Corrigindo a inclinação do texto

Um problema comum é que a transformação também afeta visualmente o conteúdo.

Podemos aplicar uma transformação inversa ao texto.

**HTML:**

```html
<div class="caixa-inclinada">
    <span>Texto sem inclinação</span>
</div>
```

**CSS:**

```css
.caixa-inclinada {
    padding: 20px 40px;

    background-color: #2563eb;
    color: white;

    transform: skewX(-15deg);
}

.caixa-inclinada span {
    display: inline-block;
    transform: skewX(15deg);
}
```

A inclinação inversa ajuda a manter o texto visualmente alinhado.

### Skew com Transição

```css
.caixa {
    transition: transform 0.4s ease;
}

.caixa:hover {
    transform: skewX(10deg);
}
```

O elemento inclina-se gradualmente quando o ponteiro passa sobre ele.

### Aplicações de Skew

- Banners inclinados.
- Efeitos geométricos.
- Elementos decorativos.
- Cartões com formas diferenciadas.
- Botões estilizados.
- Interfaces com design moderno.

**Boa prática:** evitar inclinar diretamente textos longos, pois isso pode prejudicar a legibilidade.

---

## 4. Translate

### O que é Translate?

A função **`translate()`** permite deslocar visualmente um elemento da sua posição original.

O deslocamento pode acontecer:

- Horizontalmente, no eixo X.
- Verticalmente, no eixo Y.
- Nos dois eixos simultaneamente.

### Sintaxe

```css
transform: translate(valorX, valorY);
```

Os valores representam a distância de deslocamento.

### TranslateX

A função **`translateX()`** desloca o elemento horizontalmente.

```css
.caixa {
    transform: translateX(50px);
}
```

O elemento é deslocado 50px para a direita no sistema de coordenadas CSS habitual.

Para deslocar para a esquerda:

```css
.caixa {
    transform: translateX(-50px);
}
```

### TranslateY

A função **`translateY()`** desloca o elemento verticalmente.

```css
.caixa {
    transform: translateY(30px);
}
```

O elemento desloca-se 30px para baixo.

**Valor negativo:**

```css
.caixa {
    transform: translateY(-30px);
}
```

O elemento desloca-se para cima.

### Translate com dois valores

Podemos deslocar o elemento em ambos os eixos.

```css
.caixa {
    transform: translate(50px, 20px);
}
```

Neste exemplo:

- `50px` — deslocamento horizontal.
- `20px` — deslocamento vertical.

### Translate com Porcentagens

Também podemos utilizar porcentagens.

```css
.caixa {
    transform: translateX(50%);
}
```

Nesse contexto, a porcentagem é calculada com base nas dimensões da caixa de referência da própria transformação, normalmente relacionadas com o elemento.

Isso é diferente de propriedades como `width: 50%`, que seguem outras regras de cálculo.

### Exemplo — Centralização Absoluta

Uma utilização clássica do `translate()` consiste em centralizar um elemento posicionado absolutamente.

**HTML:**

```html
<div class="container">
    <div class="caixa">
        Centralizado
    </div>
</div>
```

**CSS:**

```css
.container {
    position: relative;

    width: 100%;
    height: 400px;

    background-color: #e5e7eb;
}

.caixa {
    position: absolute;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    padding: 20px;
    background-color: #2563eb;
    color: white;
}
```

### Como funciona a centralização?

```text
top: 50%
    Desloca a referência superior do elemento
    até metade da altura do contentor.

left: 50%
    Desloca a referência esquerda até
    metade da largura do contentor.

translate(-50%, -50%)
    Move o elemento de volta metade
    da sua própria largura e altura.
```

O resultado é um elemento centralizado horizontal e verticalmente.

Atualmente, também podemos utilizar Flexbox ou Grid para realizar essa centralização de forma mais simples.

### Exemplo — Cartão que se Move

**HTML:**

```html
<div class="cartao">
    <h2>Meu Cartão</h2>
    <p>Passe o mouse sobre este cartão.</p>
</div>
```

**CSS:**

```css
.cartao {
    width: 300px;
    padding: 25px;

    background-color: white;

    border-radius: 10px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.cartao:hover {
    transform: translateY(-10px);

    box-shadow: 0 12px 25px rgb(0 0 0 / 20%);
}
```

O cartão sobe ligeiramente quando o ponteiro passa sobre ele.

### Translate vs. Margin

As propriedades `translate()` e `margin` podem produzir deslocamentos visuais, mas funcionam de forma diferente.

| Translate | Margin |
|---|---|
| Modifica a apresentação visual | Participa no cálculo do layout |
| Não reserva uma nova posição no fluxo | Influencia o espaçamento entre caixas |
| Muito utilizado em animações | Muito utilizado para espaçamento |
| Pode causar sobreposição visual | Pode deslocar elementos vizinhos |

### Aplicações de Translate

- Efeitos de hover.
- Deslocamento de cartões.
- Animações de entrada.
- Movimentação de elementos.
- Menus e painéis.
- Centralização de componentes.

---

## 5. Combinando Transformações

### É possível utilizar várias transformações?

Sim. A propriedade `transform` permite combinar diferentes funções numa única declaração.

**Exemplo:**

```css
.caixa {
    transform:
        translateX(50px)
        rotate(15deg)
        scale(1.2);
}
```

Nesse caso, são combinados:

1. Deslocamento.
2. Rotação.
3. Escala.

### A ordem importa?

Sim. A ordem das funções influencia o resultado visual.

Considere:

```css
.caixa1 {
    transform: translateX(100px) rotate(45deg);
}
```

E:

```css
.caixa2 {
    transform: rotate(45deg) translateX(100px);
}
```

Os resultados podem ser diferentes.

As transformações são compostas matematicamente, e alterar a ordem modifica a transformação final.

### Atenção ao substituir `transform`

Cada declaração da propriedade `transform` substitui a declaração anterior que prevalecer na cascata.

**Exemplo incorreto:**

```css
.caixa {
    transform: rotate(15deg);
    transform: scale(1.2);
}
```

Nesse caso, a segunda declaração substitui a primeira.

**Exemplo correto:**

```css
.caixa {
    transform: rotate(15deg) scale(1.2);
}
```

As duas transformações são aplicadas.

### Transformações e Transições

Podemos utilizar `transition` para suavizar os efeitos.

```css
.caixa {
    transition: transform 0.4s ease;
}

.caixa:hover {
    transform:
        translateY(-10px)
        rotate(5deg)
        scale(1.05);
}
```

### Transformações e Animações

Também podemos combinar as funções com `@keyframes`.

```css
@keyframes entrada {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.9);
    }

    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.cartao {
    animation: entrada 0.6s ease-out;
}
```

O elemento aparece gradualmente, deslocando-se e aumentando até atingir o tamanho original.

---

## 6. Exemplo Prático — Galeria de Efeitos CSS

Vamos criar uma página com quatro cartões, cada um demonstrando uma transformação diferente.

### Estrutura do Projeto

```text
efeitos-css/
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

    <title>Efeitos CSS</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main class="container">

        <h1>Transformações CSS</h1>

        <p>
            Passe o ponteiro sobre os cartões
            ou utilize a tecla Tab para observar os efeitos.
        </p>

        <div class="galeria">

            <button class="cartao rotate" type="button">
                <span>Rotate</span>
                <small>Rotação</small>
            </button>

            <button class="cartao scale" type="button">
                <span>Scale</span>
                <small>Escala</small>
            </button>

            <button class="cartao skew" type="button">
                <span>Skew</span>
                <small>Inclinação</small>
            </button>

            <button class="cartao translate" type="button">
                <span>Translate</span>
                <small>Deslocamento</small>
            </button>

        </div>

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
    padding: 20px;

    font-family: Arial, sans-serif;

    background-color: #f1f5f9;
    color: #333;
}

/* Container */

.container {
    width: 100%;
    max-width: 1000px;

    margin: 0 auto;
    text-align: center;
}

h1 {
    color: #2563eb;
}

/* Galeria */

.galeria {
    display: grid;

    grid-template-columns:
        repeat(auto-fit, minmax(180px, 1fr));

    gap: 35px;

    margin-top: 50px;
    padding: 20px;
}

/* Cartões */

.cartao {
    min-height: 180px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    border: none;
    border-radius: 12px;

    background: linear-gradient(
        135deg,
        #2563eb,
        #9333ea
    );

    color: white;
    font-family: inherit;

    box-shadow: 0 5px 15px rgb(0 0 0 / 15%);

    cursor: pointer;

    transition:
        transform 0.4s ease,
        box-shadow 0.4s ease;
}

.cartao span {
    font-size: 1.5rem;
    font-weight: bold;
}

.cartao small {
    font-size: 0.9rem;
}

/* Rotate */

.rotate:hover,
.rotate:focus-visible {
    transform: rotate(10deg);
}

/* Scale */

.scale:hover,
.scale:focus-visible {
    transform: scale(1.1);
}

/* Skew */

.skew:hover,
.skew:focus-visible {
    transform: skewX(10deg);
}

/* Translate */

.translate:hover,
.translate:focus-visible {
    transform: translateY(-15px);
}

/* Destaque */

.cartao:hover,
.cartao:focus-visible {
    box-shadow: 0 15px 30px rgb(0 0 0 / 25%);
}

.cartao:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 5px;
}

/* Responsividade */

@media (max-width: 600px) {
    .galeria {
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
}

@media (max-width: 400px) {
    .galeria {
        grid-template-columns: 1fr;
    }
}

/* Acessibilidade */

@media (prefers-reduced-motion: reduce) {
    .cartao {
        transition: none;
    }
}
```

### Conceitos Aplicados

| Conceito | Aplicação |
|---|---|
| `transform` | Aplica transformações visuais |
| `rotate()` | Gira o cartão |
| `scale()` | Aumenta o cartão |
| `skewX()` | Inclina o cartão |
| `translateY()` | Desloca o cartão |
| `transition` | Suaviza os efeitos |
| `:hover` | Ativa o efeito pelo ponteiro |
| `:focus-visible` | Permite observar o efeito com o teclado |
| CSS Grid | Organiza os cartões |
| Media Queries | Adapta a galeria |
| `prefers-reduced-motion` | Respeita a preferência de movimento reduzido |

**Observação:** os botões deste exemplo servem apenas para demonstrar estados visuais. Numa aplicação real, um botão deve executar uma ação significativa. Para componentes puramente decorativos, prefira elementos não interativos.

---

## 7. Boas Práticas na Utilização de Transformações

### Utilizar Transformações com Moderação

Os efeitos devem melhorar a experiência visual, sem dificultar a utilização da página.

### Evitar Movimentos Excessivos

Animações muito intensas podem causar desconforto ou distrair os utilizadores.

### Respeitar `prefers-reduced-motion`

Uma boa prática é reduzir ou remover movimentos não essenciais quando o utilizador solicita movimento reduzido.

```css
@media (prefers-reduced-motion: reduce) {
    .cartao {
        transition: none;
        animation: none;
        transform: none;
    }
}
```

### Preferir Transform e Opacity para Animações

As propriedades `transform` e `opacity` frequentemente permitem animações mais eficientes do que alterações constantes de propriedades que exigem novos cálculos de layout.

Entretanto, o desempenho depende da implementação e deve ser avaliado quando necessário.

### Considerar a Sobreposição de Elementos

Como transformações não reorganizam automaticamente os elementos vizinhos, podem ocorrer sobreposições visuais.

### Utilizar Transições Curtas

Para efeitos simples de interface, transições curtas são normalmente mais adequadas do que movimentos longos.

### Considerar a Navegação por Teclado

Quando um efeito comunica informação importante, não deve depender exclusivamente de `:hover`.

Utilizar também estados como `:focus-visible`, quando apropriado.

---

## Resumo em uma frase

> As transformações CSS permitem modificar visualmente elementos HTML através da propriedade `transform`, utilizando funções como `rotate()` para girar, `scale()` para aumentar ou diminuir, `skew()` para inclinar e `translate()` para deslocar elementos, podendo ser combinadas com transições e animações para desenvolver interfaces mais dinâmicas, interativas e visualmente modernas, sem alterar diretamente o espaço ocupado pelos elementos no fluxo normal do layout.

---

## Conceitos Relacionados para Estudar a Seguir

- **CSS Transitions** — suavizar mudanças entre estilos.
- **CSS Animations** — criar animações com `@keyframes`.
- **Transform Origin** — controlar o ponto de referência das transformações.
- **Transformações 3D** — estudar `rotateX()`, `rotateY()` e `translateZ()`.
- **CSS Perspective** — criar efeitos visuais de profundidade.
- **Pseudo-classes** — utilizar `:hover`, `:focus-visible` e `:active`.
- **Responsividade** — adaptar os efeitos a diferentes dispositivos.
- **Acessibilidade** — respeitar preferências de movimento reduzido.
- **Performance Frontend** — compreender o impacto das animações na renderização.
- **JavaScript e DOM** — controlar transformações através de eventos.

---

## Referências para Estudo

- [MDN — CSS Transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
- [MDN — Rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate)
- [MDN — Scale](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale)
- [MDN — Skew](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew)
- [MDN — Translate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate)
- [MDN — Transform Origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
- [MDN — CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions)
- [MDN — Prefers Reduced Motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
