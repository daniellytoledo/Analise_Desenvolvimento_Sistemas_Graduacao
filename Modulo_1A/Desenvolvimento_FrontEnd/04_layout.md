
# Layout no Desenvolvimento Frontend

---

## 1. Tipos de Layout

### O que é Layout?

O **layout** é a forma como os elementos visuais são organizados e distribuídos numa página web.

Define a disposição de componentes como:

- Cabeçalhos.
- Menus de navegação.
- Conteúdo principal.
- Barras laterais.
- Imagens.
- Botões.
- Rodapés.

Um layout bem estruturado facilita a navegação, melhora a experiência do utilizador e contribui para a apresentação das informações.

### Importância do Layout

O layout possui um papel fundamental no desenvolvimento frontend.

Entre os seus objetivos estão:

- Organizar os conteúdos.
- Facilitar a leitura.
- Criar uma hierarquia visual.
- Melhorar a experiência do utilizador.
- Adaptar interfaces a diferentes dispositivos.
- Manter a consistência visual.

### Principais Tipos de Layout

Existem diferentes estratégias para definir as dimensões e o comportamento dos elementos.

| Tipo | Características |
|---|---|
| Centralizado | Conteúdo alinhado ao centro de uma área |
| Fixo | Dimensões definidas com valores fixos |
| Elástico | Dimensões baseadas em unidades relativas à fonte, como `em` |
| Fluido | Dimensões proporcionais ao espaço disponível, frequentemente em `%` |
| Responsivo | Layout adapta-se a diferentes tamanhos de ecrã |
| Adaptativo | Utiliza configurações de layout específicas para diferentes condições |

**Importante:** essas categorias não são mutuamente exclusivas. Um layout pode ser centralizado, elástico e responsivo ao mesmo tempo.

### Layout e CSS

O CSS disponibiliza diferentes recursos para desenvolver layouts.

Entre eles:

- `width` e `height`.
- `max-width` e `min-width`.
- `margin` e `padding`.
- `display`.
- `position`.
- Flexbox.
- CSS Grid.
- Media Queries.

### Exemplo de Estrutura HTML

```html
<header>
    <h1>Meu Website</h1>
</header>

<nav>
    <a href="#inicio">Início</a>
    <a href="#sobre">Sobre</a>
    <a href="#contato">Contato</a>
</nav>

<main>
    <section id="inicio">
        <h2>Conteúdo Principal</h2>
        <p>Exemplo de organização de layout.</p>
    </section>
</main>

<footer>
    <p>Meu Website</p>
</footer>
```

O HTML define a estrutura semântica, enquanto o CSS determina a disposição dos elementos.

---

## 2. Layout Centralizado

### O que é um Layout Centralizado?

Um **layout centralizado** organiza determinados elementos no centro da página ou de um contentor.

A centralização pode ser:

- Horizontal.
- Vertical.
- Horizontal e vertical simultaneamente.

É frequentemente utilizada em:

- Páginas de login.
- Formulários.
- Cartões.
- Landing Pages.
- Áreas principais de conteúdo.

### Centralização Horizontal com Margin

Uma das técnicas mais utilizadas para centralizar horizontalmente um elemento de bloco é:

```css
.container {
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
}
```

**Explicação:**

- `width: 80%` define uma largura proporcional.
- `max-width: 1000px` estabelece uma largura máxima.
- `margin: 0 auto` distribui o espaço horizontal disponível pelas margens laterais.

### Exemplo Prático

**HTML:**

```html
<div class="container">
    <h1>Layout Centralizado</h1>

    <p>
        Este conteúdo está centralizado
        horizontalmente na página.
    </p>
</div>
```

**CSS:**

```css
body {
    margin: 0;
    background-color: #f4f4f4;
    font-family: Arial, sans-serif;
}

.container {
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;

    padding: 20px;
    box-sizing: border-box;

    background-color: white;
}
```

### Centralização com Flexbox

O **Flexbox** permite centralizar elementos horizontal e verticalmente.

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
}
```

**Propriedades:**

| Propriedade | Função |
|---|---|
| `display: flex` | Ativa o Flexbox |
| `justify-content` | Alinha os elementos no eixo principal |
| `align-items` | Alinha os elementos no eixo transversal |
| `min-height: 100vh` | Define uma altura mínima equivalente à viewport |

Com `flex-direction: row`, o eixo principal é horizontal por padrão.

### Exemplo — Formulário Centralizado

**HTML:**

```html
<div class="pagina">
    <form class="formulario">
        <h2>Login</h2>

        <label for="email">E-mail:</label>
        <input type="email" id="email" required>

        <label for="senha">Senha:</label>
        <input type="password" id="senha" required>

        <button type="submit">Entrar</button>
    </form>
</div>
```

**CSS:**

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
}

.pagina {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 100vh;
    padding: 20px;
    background-color: #eef2ff;
}

.formulario {
    display: flex;
    flex-direction: column;
    gap: 12px;

    width: 100%;
    max-width: 400px;
    padding: 30px;

    background-color: white;
    border-radius: 10px;
}

input,
button {
    padding: 12px;
}
```

### Centralização com CSS Grid

Também podemos utilizar Grid:

```css
.pagina {
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 20px;
}
```

O `place-items: center` centraliza os itens nos dois eixos da grelha.

### Vantagens e Desvantagens

**Vantagens:**

- Apresentação equilibrada.
- Facilita a leitura.
- Destaca o conteúdo principal.
- Pode funcionar bem em diferentes dispositivos.

**Desvantagens:**

- Pode deixar espaços laterais grandes em ecrãs muito largos.
- A centralização vertical de áreas extensas precisa considerar a rolagem.
- Nem sempre é adequada para interfaces com muitos painéis.

---

## 3. Layout Fixo

### O que é um Layout Fixo?

Um **layout fixo (Fixed Layout)** utiliza dimensões definidas através de valores fixos, frequentemente em pixels (`px`).

Nesse modelo, os elementos podem manter a mesma largura independentemente do tamanho da viewport.

### Exemplo de Layout Fixo

**HTML:**

```html
<div class="container">
    <header>
        <h1>Meu Site</h1>
    </header>

    <main>
        <p>Exemplo de layout fixo.</p>
    </main>
</div>
```

**CSS:**

```css
.container {
    width: 960px;
    margin: 0 auto;
    padding: 20px;

    box-sizing: border-box;
    background-color: #f0f0f0;
}
```

O contentor possui largura de `960px`, mesmo quando a viewport é menor.

### Funcionamento do Layout Fixo

```text
Viewport larga:

+------------------------------------------+
|                                          |
|      +----------------------------+      |
|      |                            |      |
|      |       CONTEÚDO FIXO        |      |
|      |           960px            |      |
|      |                            |      |
|      +----------------------------+      |
|                                          |
+------------------------------------------+


Viewport estreita:

+--------------------+
|                    |
| +----------------------------+
| |                            |
| |       CONTEÚDO FIXO        |
| |           960px            |
| |                            |
| +----------------------------+
|                    |
+--------------------+

Pode surgir rolagem horizontal.
```

### Vantagens do Layout Fixo

- Maior previsibilidade das dimensões.
- Facilidade de controlar certos alinhamentos.
- Útil em componentes que exigem tamanhos específicos.
- Pode simplificar determinados protótipos.

### Desvantagens do Layout Fixo

- Adaptação limitada a dispositivos pequenos.
- Possibilidade de rolagem horizontal.
- Mau aproveitamento de ecrãs maiores.
- Pode exigir ajustes adicionais para acessibilidade e responsividade.

### Quando Utilizar?

Um layout de largura fixa pode ser adequado para componentes ou interfaces com requisitos específicos de dimensão.

Entretanto, para páginas web destinadas a computadores e dispositivos móveis, normalmente é preferível combinar limites máximos com larguras flexíveis.

**Exemplo mais adaptável:**

```css
.container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;

    box-sizing: border-box;
}
```

Neste caso, o contentor não ultrapassa `960px`, mas pode diminuir quando o espaço disponível é menor.

**Atenção:** `position: fixed` não é a mesma coisa que layout fixo.

A propriedade `position: fixed` controla o posicionamento de elementos, enquanto o layout fixo se refere principalmente à estratégia utilizada para definir dimensões.

---

## 4. Layout Elástico

### O que é um Layout Elástico?

O **layout elástico (Elastic Layout)** utiliza unidades relativas ao tamanho da fonte, especialmente `em`, para definir dimensões e espaçamentos.

A ideia é permitir que certas partes da interface acompanhem alterações na escala tipográfica.

Esse modelo pode melhorar a flexibilidade dos conteúdos, especialmente quando o utilizador altera o tamanho do texto.

### Unidade `em`

A unidade **`em`** é relativa ao tamanho da fonte.

Em propriedades como `width`, `padding` e `margin`, `1em` corresponde ao tamanho de fonte computado do próprio elemento.

Na propriedade `font-size`, o valor em `em` é calculado em relação à fonte do elemento pai.

### Exemplo

```css
.container {
    font-size: 16px;
    width: 40em;
}
```

Neste caso:

```text
1em = 16px

40em = 40 × 16px

Largura = 640px
```

Se o tamanho da fonte do contentor passar para `20px`:

```text
40em = 40 × 20px

Largura = 800px
```

A largura acompanha a alteração da fonte.

### Exemplo de Layout Elástico

**HTML:**

```html
<div class="container">
    <h1>Layout Elástico</h1>

    <p>
        Este layout utiliza unidades relativas
        para definir as suas dimensões.
    </p>
</div>
```

**CSS:**

```css
*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 16px;
}

.container {
    width: 40em;
    max-width: 100%;
    margin: 2em auto;
    padding: 2em;

    background-color: #e0f2fe;
    border-radius: 0.5em;
}
```

### Unidade `rem`

A unidade **`rem` (Root em)** é relativa ao tamanho da fonte do elemento raiz, normalmente `<html>`.

```css
html {
    font-size: 16px;
}

.container {
    width: 40rem;
    padding: 2rem;
}
```

Neste exemplo:

- `1rem = 16px`.
- `40rem = 640px`.
- `2rem = 32px`.

### Diferença entre `em` e `rem`

| Unidade | Referência |
|---|---|
| `em` em `font-size` | Fonte do elemento pai |
| `em` noutras propriedades | Fonte computada do próprio elemento |
| `rem` | Fonte do elemento raiz |

### Cuidado com Unidades `em` Aninhadas

Quando utilizamos `em` na propriedade `font-size` de elementos aninhados, os valores podem acumular-se.

**Exemplo:**

```html
<div class="pai">
    <p class="filho">Texto de exemplo</p>
</div>
```

```css
html {
    font-size: 16px;
}

.pai {
    font-size: 1.5em;
}

.filho {
    font-size: 1.5em;
}
```

Considerando que o elemento pai de `.pai` utiliza `16px`:

```text
.pai = 16 × 1.5 = 24px

.filho = 24 × 1.5 = 36px
```

Por isso, em muitas situações, `rem` torna os tamanhos mais previsíveis.

### Layout Elástico vs. Layout Fluido

Esses conceitos são frequentemente confundidos.

**Layout Elástico**

Utiliza dimensões relacionadas com a tipografia.

```css
.container {
    width: 40em;
}
```

**Layout Fluido**

Utiliza dimensões proporcionais ao espaço disponível.

```css
.container {
    width: 80%;
}
```

| Elástico | Fluido |
|---|---|
| Baseado em unidades tipográficas | Baseado em proporções do espaço |
| Exemplo: `em` | Exemplo: `%` |
| Acompanha alterações na escala da fonte | Acompanha alterações no espaço disponível |
| Pode ultrapassar a viewport sem limites adicionais | Geralmente adapta-se à largura disponível |

### Vantagens e Desvantagens

**Vantagens:**

- Acompanha alterações de tamanho da fonte.
- Ajuda a criar proporções tipográficas consistentes.
- Pode melhorar a adaptação ao aumento do texto.
- Reduz a dependência de dimensões absolutas.

**Desvantagens:**

- Exige atenção aos cálculos das unidades.
- O uso de `em` aninhado pode gerar resultados inesperados.
- Pode ultrapassar o espaço disponível sem restrições.
- Não garante responsividade por si só.

---

## 5. Comparativo entre os Tipos de Layout

| Característica | Centralizado | Fixo | Elástico |
|---|---|---|---|
| Objetivo | Alinhar conteúdos | Manter dimensões | Escalar com a tipografia |
| Unidades comuns | `%`, `px`, `rem` | `px` | `em`, `rem` |
| Adaptabilidade | Depende das dimensões | Limitada | Depende da implementação |
| Utilização | Formulários, páginas e cartões | Componentes com dimensões específicas | Interfaces baseadas em proporções tipográficas |
| Principal cuidado | Espaço disponível | Ecrãs pequenos | Escala e aninhamento |

### Qual Layout Escolher?

Não existe um único layout ideal para todas as aplicações.

Na prática, o desenvolvimento frontend moderno costuma combinar diferentes estratégias.

**Exemplo:**

```css
.container {
    width: 90%;
    max-width: 70rem;
    margin: 0 auto;
    padding: 2rem;
}
```

Esse código combina:

- Largura fluida com `90%`.
- Largura máxima relativa à fonte com `rem`.
- Centralização horizontal com `margin: 0 auto`.
- Espaçamento interno proporcional com `rem`.

É uma abordagem útil para criar páginas centralizadas e adaptáveis.

---

## 6. Exemplo Prático — Layout Centralizado e Responsivo

Vamos criar uma página utilizando características dos layouts estudados.

### Estrutura do Projeto

```text
projeto-layout/
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

    <title>Exemplo de Layout</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="cabecalho">
        <div class="container">
            <h1>Meu Website</h1>
            <p>Exemplo de organização de layout.</p>
        </div>
    </header>

    <main class="container">
        <section class="conteudo">
            <h2>Desenvolvimento Frontend</h2>

            <p>
                Este exemplo utiliza um layout centralizado,
                largura flexível e unidades relativas.
            </p>

            <div class="cards">
                <article class="card">
                    <h3>HTML</h3>
                    <p>Estrutura das páginas web.</p>
                </article>

                <article class="card">
                    <h3>CSS</h3>
                    <p>Estilização e organização visual.</p>
                </article>

                <article class="card">
                    <h3>JavaScript</h3>
                    <p>Comportamento e interatividade.</p>
                </article>
            </div>
        </section>
    </main>

    <footer class="rodape">
        <p>Projeto de Desenvolvimento Frontend</p>
    </footer>

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
    line-height: 1.6;

    background-color: #f4f4f4;
    color: #333;
}

/* Layout centralizado */

.container {
    width: 90%;
    max-width: 70rem;
    margin: 0 auto;
}

/* Cabeçalho */

.cabecalho {
    padding: 2rem 0;
    background-color: #2563eb;
    color: white;
}

/* Conteúdo */

.conteudo {
    padding: 2rem 0;
}

.conteudo h2 {
    margin-bottom: 1rem;
}

/* Cartões com Grid */

.cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

/* Layout dos cartões */

.card {
    min-width: 0;
    padding: 1.5rem;

    background-color: white;
    border-radius: 0.75rem;
    border: 1px solid #dddddd;
}

.card h3 {
    color: #2563eb;
}

/* Rodapé */

.rodape {
    padding: 1.5rem;
    text-align: center;
    background-color: #e5e7eb;
}

/* Responsividade */

@media (max-width: 768px) {
    .cards {
        grid-template-columns: 1fr;
    }
}
```

### Conceitos Aplicados

| Conceito | Aplicação |
|---|---|
| `width: 90%` | Largura fluida |
| `max-width: 70rem` | Limite máximo baseado na fonte raiz |
| `margin: 0 auto` | Centralização horizontal |
| `padding: 2rem` | Espaçamento relativo |
| `box-sizing: border-box` | Cálculo previsível das dimensões |
| `display: grid` | Organização dos cartões |
| `gap` | Espaçamento entre elementos |
| `@media` | Adaptação a ecrãs menores |

O exemplo demonstra como diferentes conceitos de layout podem trabalhar em conjunto para criar uma interface organizada e responsiva.

---

## 7. Boas Práticas na Criação de Layouts

### Utilizar Larguras Flexíveis

Evitar definir larguras fixas para todos os elementos, especialmente em páginas destinadas a dispositivos móveis.

### Definir Limites Máximos

A propriedade `max-width` ajuda a controlar a largura do conteúdo em ecrãs grandes.

### Utilizar `box-sizing: border-box`

Facilita o cálculo das dimensões e reduz problemas com padding e bordas.

### Priorizar Flexbox e Grid

Esses modelos oferecem recursos modernos para organizar componentes sem depender de técnicas antigas de posicionamento.

### Utilizar Unidades Relativas

Unidades como `%`, `em` e `rem` ajudam a criar dimensões adaptáveis.

### Testar Diferentes Tamanhos de Ecrã

As ferramentas de desenvolvimento dos navegadores permitem simular diferentes larguras de viewport.

### Considerar Acessibilidade

O layout deve continuar funcional quando:

- O utilizador aumenta o tamanho do texto.
- A página recebe zoom.
- O ecrã é pequeno.
- A navegação é realizada pelo teclado.

---

## Resumo em uma frase

> O layout no desenvolvimento frontend define a organização visual dos elementos de uma página, podendo utilizar diferentes estratégias, como layout centralizado para alinhar conteúdos, layout fixo para manter dimensões constantes e layout elástico para criar proporções relacionadas com o tamanho da fonte, sendo possível combinar essas abordagens com unidades relativas, Flexbox, Grid e Media Queries para desenvolver interfaces mais organizadas, flexíveis e responsivas.

---

## Conceitos Relacionados para Estudar a Seguir

- **Flexbox** — organizar elementos através de um modelo flexível.
- **CSS Grid** — criar layouts bidimensionais.
- **Responsive Web Design** — adaptar páginas a diferentes dispositivos.
- **Media Queries** — aplicar estilos conforme as características da viewport.
- **CSS Box Model** — compreender dimensões e espaçamentos.
- **Unidades CSS** — aprofundar `px`, `%`, `em`, `rem`, `vw` e `vh`.
- **Mobile First** — desenvolver inicialmente para ecrãs menores.
- **Acessibilidade Web** — garantir interfaces utilizáveis com zoom e diferentes tamanhos de fonte.
- **Layout Adaptativo** — explorar estratégias específicas para diferentes condições de apresentação.

---

## Referências para Estudo

- [MDN — CSS Layout](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout)
- [MDN — Valores e Unidades CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- [MDN — Flexbox](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox)
- [MDN — CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [MDN — Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [MDN — Box Sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
