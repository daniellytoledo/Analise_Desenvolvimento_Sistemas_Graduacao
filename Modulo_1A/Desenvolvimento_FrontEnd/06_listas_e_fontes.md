
# Listas e Fontes em HTML e CSS

---

## 1. Estilo de Fontes

### O que são fontes no desenvolvimento web?

As **fontes (Fonts)** representam os estilos tipográficos utilizados para apresentar textos numa página web.

A tipografia é importante porque influencia diretamente a:

- Legibilidade dos conteúdos.
- Organização das informações.
- Identidade visual.
- Hierarquia dos títulos.
- Experiência do utilizador.
- Acessibilidade.

No desenvolvimento frontend, utilizamos principalmente propriedades CSS para personalizar a aparência dos textos.

### Propriedade `font-family`

A propriedade **`font-family`** define a família tipográfica utilizada num elemento.

**Exemplo:**

```css
body {
    font-family: Arial, sans-serif;
}
```

Neste exemplo:

- `Arial` é a fonte preferencial.
- `sans-serif` é uma família genérica de reserva.

Se a fonte Arial não estiver disponível, o navegador poderá utilizar outra fonte sem serifa.

### Principais famílias tipográficas

| Família | Características | Exemplos |
|---|---|---|
| `serif` | Possui pequenos prolongamentos nas letras | Times New Roman, Georgia |
| `sans-serif` | Não possui serifas | Arial, Verdana |
| `monospace` | Caracteres com largura uniforme | Consolas, Courier New |
| `cursive` | Aparência semelhante à escrita manual | Fontes cursivas |
| `fantasy` | Fontes decorativas | Fontes estilizadas |

**Exemplo:**

```css
.titulo {
    font-family: Georgia, serif;
}

.paragrafo {
    font-family: Arial, sans-serif;
}

.codigo {
    font-family: Consolas, monospace;
}
```

### Propriedade `font-size`

A propriedade **`font-size`** define o tamanho da fonte.

```css
h1 {
    font-size: 32px;
}

p {
    font-size: 16px;
}
```

O CSS permite utilizar diferentes unidades de medida.

| Unidade | Significado |
|---|---|
| `px` | Pixel CSS |
| `em` | Relativa ao tamanho da fonte |
| `rem` | Relativa à fonte do elemento raiz |
| `%` | Percentual relativo ao contexto da propriedade |
| `vw` | Relativa à largura da viewport |

**Exemplo com `rem`:**

```css
html {
    font-size: 16px;
}

h1 {
    font-size: 2rem;
}

p {
    font-size: 1rem;
}
```

Considerando o tamanho de fonte definido no exemplo:

- `1rem = 16px`.
- `2rem = 32px`.

### Propriedade `font-weight`

A propriedade **`font-weight`** define a espessura da fonte.

```css
h1 {
    font-weight: bold;
}

p {
    font-weight: normal;
}
```

Também podemos utilizar valores numéricos.

```css
.titulo {
    font-weight: 700;
}

.texto {
    font-weight: 400;
}
```

| Valor | Significado |
|---|---|
| `100` | Muito fino |
| `300` | Leve |
| `400` | Normal |
| `500` | Médio |
| `600` | Seminegrito |
| `700` | Negrito |
| `900` | Muito espesso |

A aparência real depende dos pesos disponibilizados pela fonte utilizada.

### Propriedade `font-style`

A propriedade **`font-style`** define o estilo da fonte.

```css
.texto-normal {
    font-style: normal;
}

.texto-italico {
    font-style: italic;
}

.texto-obliquo {
    font-style: oblique;
}
```

Os principais valores são:

- `normal` — texto normal.
- `italic` — estilo itálico.
- `oblique` — estilo inclinado.

### Propriedade `line-height`

A propriedade **`line-height`** define a altura das linhas de texto.

```css
p {
    font-size: 16px;
    line-height: 1.6;
}
```

O valor `1.6` estabelece uma altura de linha equivalente a 1,6 vezes o tamanho da fonte utilizado no elemento.

Essa propriedade é importante para melhorar a legibilidade de parágrafos.

### Propriedade `letter-spacing`

Define o espaçamento entre os caracteres.

```css
h1 {
    letter-spacing: 2px;
}
```

### Propriedade `word-spacing`

Define o espaçamento entre palavras.

```css
p {
    word-spacing: 4px;
}
```

### Propriedade `text-transform`

Permite modificar a apresentação das letras.

```css
.maiusculas {
    text-transform: uppercase;
}

.minusculas {
    text-transform: lowercase;
}

.capitalizado {
    text-transform: capitalize;
}
```

| Valor | Resultado |
|---|---|
| `uppercase` | Apresenta as letras em maiúsculas |
| `lowercase` | Apresenta as letras em minúsculas |
| `capitalize` | Aplica capitalização às palavras |
| `none` | Não aplica transformação |

### Utilizando fontes externas

É possível utilizar fontes disponibilizadas por serviços como o Google Fonts.

**Exemplo de importação no CSS:**

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

body {
    font-family: "Roboto", sans-serif;
}
```

O navegador precisa conseguir aceder ao serviço externo para carregar a fonte.

Também é possível hospedar ficheiros de fontes no próprio projeto através da regra `@font-face`.

### Boas práticas de tipografia

- Utilizar fontes legíveis.
- Manter consistência visual.
- Evitar muitas famílias tipográficas na mesma página.
- Criar uma hierarquia entre títulos e parágrafos.
- Garantir contraste suficiente entre texto e fundo.
- Evitar tamanhos de fonte excessivamente pequenos.
- Testar a leitura em diferentes dispositivos.

---

## 2. Alinhamento de Fontes

### O que é alinhamento de texto?

O **alinhamento de texto** determina como o conteúdo textual é distribuído horizontalmente ou verticalmente dentro de uma área.

É importante para a organização visual e para a facilidade de leitura.

### Propriedade `text-align`

A propriedade **`text-align`** define o alinhamento horizontal do conteúdo inline dentro de um elemento de bloco.

**Exemplo:**

```css
p {
    text-align: center;
}
```

### Principais valores

| Valor | Comportamento |
|---|---|
| `left` | Alinha à esquerda |
| `right` | Alinha à direita |
| `center` | Centraliza o texto |
| `justify` | Ajusta o espaçamento para justificar as linhas |
| `start` | Alinha ao início da direção de escrita |
| `end` | Alinha ao final da direção de escrita |

### Alinhamento à esquerda

```css
.texto {
    text-align: left;
}
```

É uma opção comum para parágrafos em idiomas escritos da esquerda para a direita.

### Alinhamento à direita

```css
.texto {
    text-align: right;
}
```

Pode ser utilizado em determinadas informações, como valores ou componentes específicos.

### Alinhamento centralizado

```css
.titulo {
    text-align: center;
}
```

É muito utilizado em títulos, cabeçalhos e elementos de destaque.

### Texto justificado

```css
.paragrafo {
    text-align: justify;
}
```

O navegador ajusta o espaçamento entre palavras para alinhar as linhas às margens disponíveis.

**Atenção:** o alinhamento justificado pode produzir espaços irregulares entre palavras, especialmente em ecrãs estreitos.

### Diferença entre centralizar texto e elemento

Essas operações são diferentes.

**Centralizar o texto:**

```css
h1 {
    text-align: center;
}
```

**Centralizar um contentor:**

```css
.container {
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
}
```

O primeiro exemplo modifica o alinhamento do texto.

O segundo centraliza horizontalmente o contentor, quando existe espaço disponível.

### Alinhamento com Flexbox

Podemos utilizar Flexbox para alinhar elementos num contentor.

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

Para centralizar verticalmente numa área com altura definida:

```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 300px;
}
```

### Exemplo prático

**HTML:**

```html
<div class="container">
    <h1>Desenvolvimento Frontend</h1>
    <p>Aprendendo alinhamento de textos com CSS.</p>
</div>
```

**CSS:**

```css
.container {
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
}

h1 {
    text-align: center;
    color: #2563eb;
}

p {
    text-align: justify;
    line-height: 1.6;
}
```

### Outras propriedades importantes

**`text-decoration`**

Permite adicionar ou remover decorações do texto.

```css
a {
    text-decoration: none;
}
```

**`text-indent`**

Define o recuo da primeira linha de um bloco de texto.

```css
p {
    text-indent: 2em;
}
```

**`vertical-align`**

Permite controlar o alinhamento vertical de elementos inline, inline-block ou células de tabelas, conforme o contexto.

```css
img {
    vertical-align: middle;
}
```

**Importante:** `vertical-align` não centraliza verticalmente qualquer elemento de bloco. Para layouts, Flexbox e Grid costumam ser mais adequados.

---

## 3. Listas Mais Utilizadas em HTML

### O que são listas?

As **listas HTML** permitem organizar informações em conjuntos de elementos relacionados.

São utilizadas para apresentar:

- Menus de navegação.
- Etapas de processos.
- Categorias de produtos.
- Tecnologias.
- Instruções.
- Definições e descrições.

O HTML possui três estruturas principais de listas:

1. Lista não ordenada.
2. Lista ordenada.
3. Lista de descrição.

### Lista Não Ordenada — `<ul>`

A tag **`<ul>` (Unordered List)** cria uma lista de itens cuja ordem não é essencial.

Cada item é representado através de `<li>`.

**Exemplo:**

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Resultado visual aproximado:

```text
• HTML
• CSS
• JavaScript
```

### Lista Ordenada — `<ol>`

A tag **`<ol>` (Ordered List)** cria uma lista na qual a sequência dos itens é significativa.

**Exemplo:**

```html
<ol>
    <li>Criar o ficheiro HTML</li>
    <li>Adicionar o CSS</li>
    <li>Implementar o JavaScript</li>
</ol>
```

Resultado:

```text
1. Criar o ficheiro HTML
2. Adicionar o CSS
3. Implementar o JavaScript
```

### Atributos de listas ordenadas

A tag `<ol>` possui atributos que permitem personalizar a numeração.

**Atributo `type`:**

```html
<ol type="A">
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
</ol>
```

Resultado:

```text
A. Primeiro item
B. Segundo item
C. Terceiro item
```

Valores possíveis:

| Valor | Tipo de marcador |
|---|---|
| `1` | Números |
| `A` | Letras maiúsculas |
| `a` | Letras minúsculas |
| `I` | Números romanos maiúsculos |
| `i` | Números romanos minúsculos |

**Atributo `start`:**

```html
<ol start="5">
    <li>Quinto item</li>
    <li>Sexto item</li>
</ol>
```

A numeração começa em 5.

**Atributo `reversed`:**

```html
<ol reversed>
    <li>Terceiro lugar</li>
    <li>Segundo lugar</li>
    <li>Primeiro lugar</li>
</ol>
```

A numeração é apresentada em ordem decrescente.

### Lista de Descrição — `<dl>`

A tag **`<dl>` (Description List)** representa uma lista de termos e descrições.

Utiliza:

- `<dl>` — lista de descrição.
- `<dt>` — termo.
- `<dd>` — descrição.

**Exemplo:**

```html
<dl>
    <dt>HTML</dt>
    <dd>Linguagem de marcação utilizada na estruturação de páginas web.</dd>

    <dt>CSS</dt>
    <dd>Linguagem utilizada para definir estilos visuais.</dd>

    <dt>JavaScript</dt>
    <dd>Linguagem de programação utilizada para criar interatividade.</dd>
</dl>
```

Esse tipo de lista é adequado para glossários e relações entre termos e descrições.

### Comparação entre as listas

| Elemento | Tipo | Utilização |
|---|---|---|
| `<ul>` | Não ordenada | Itens sem sequência obrigatória |
| `<ol>` | Ordenada | Etapas e sequências |
| `<dl>` | Descrição | Termos e respetivas descrições |
| `<li>` | Item | Elementos de `<ul>` e `<ol>` |
| `<dt>` | Termo | Termo de uma lista de descrição |
| `<dd>` | Descrição | Descrição associada ao termo |

### Estilizando listas com CSS

A propriedade **`list-style-type`** define o tipo de marcador.

```css
ul {
    list-style-type: square;
}
```

Principais valores:

| Valor | Resultado |
|---|---|
| `disc` | Marcador circular preenchido |
| `circle` | Marcador circular vazio |
| `square` | Marcador quadrado |
| `decimal` | Numeração decimal |
| `upper-roman` | Numeração romana maiúscula |
| `lower-alpha` | Letras minúsculas |
| `none` | Remove o marcador |

### Propriedade `list-style-position`

Determina a posição do marcador em relação à caixa do item.

```css
ul {
    list-style-position: inside;
}
```

Valores principais:

- `inside` — marcador dentro da caixa de conteúdo do item.
- `outside` — marcador fora da caixa principal do conteúdo, conforme as regras de layout.

### Removendo marcadores

```css
ul {
    list-style: none;
    padding: 0;
}
```

Essa técnica é frequentemente utilizada em menus de navegação.

**Boa prática:** em listas interativas de navegação, devemos garantir que a estrutura continue semanticamente adequada e acessível.

---

## 4. Listas Estruturadas para Organizar Informações de Forma Hierárquica

### O que são listas hierárquicas?

As **listas hierárquicas** são estruturas que organizam informações em diferentes níveis.

Permitem representar relações entre:

- Categorias e subcategorias.
- Capítulos e tópicos.
- Menus e submenus.
- Processos e subprocessos.
- Diretórios e ficheiros.

No HTML, podemos criar listas hierárquicas através do **aninhamento de listas**.

### O que é aninhamento?

O **aninhamento (Nesting)** ocorre quando colocamos uma lista dentro de um item de outra lista.

**Exemplo:**

```html
<ul>
    <li>
        Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>

    <li>
        Backend
        <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>Java</li>
        </ul>
    </li>
</ul>
```

Resultado visual aproximado:

```text
• Frontend
    • HTML
    • CSS
    • JavaScript

• Backend
    • Node.js
    • Python
    • Java
```

### Estrutura hierárquica do HTML

```text
                  UL
                  |
          +-------+-------+
          |               |
          v               v
     LI Frontend      LI Backend
          |               |
          v               v
         UL              UL
      /   |   \        /  |  \
    HTML CSS   JS    Node Python Java
```

### Listas ordenadas aninhadas

Também podemos criar listas ordenadas com vários níveis.

```html
<ol>
    <li>
        Planejamento
        <ol>
            <li>Definir requisitos</li>
            <li>Criar protótipo</li>
        </ol>
    </li>

    <li>
        Desenvolvimento
        <ol>
            <li>Implementar frontend</li>
            <li>Implementar backend</li>
        </ol>
    </li>

    <li>
        Testes
        <ol>
            <li>Executar testes</li>
            <li>Corrigir defeitos</li>
        </ol>
    </li>
</ol>
```

### Personalizando níveis com CSS

Podemos utilizar seletores descendentes para definir marcadores diferentes.

```css
.lista-principal {
    list-style-type: disc;
}

.lista-principal ul {
    list-style-type: circle;
}

.lista-principal ul ul {
    list-style-type: square;
}
```

### Misturando listas ordenadas e não ordenadas

É possível combinar diferentes tipos de lista conforme a organização das informações.

**Exemplo:**

```html
<ol>
    <li>
        Criar estrutura
        <ul>
            <li>index.html</li>
            <li>style.css</li>
        </ul>
    </li>

    <li>
        Implementar funcionalidades
        <ul>
            <li>Eventos</li>
            <li>Manipulação do DOM</li>
        </ul>
    </li>
</ol>
```

Essa abordagem é útil quando existe uma sequência principal, mas cada etapa possui subtarefas sem uma ordem obrigatória.

### Listas Hierárquicas em Menus de Navegação

Uma das aplicações mais comuns é a criação de menus.

**HTML:**

```html
<nav aria-label="Navegação principal">
    <ul class="menu">
        <li><a href="#inicio">Início</a></li>

        <li>
            <a href="#cursos">Cursos</a>

            <ul>
                <li><a href="#html">HTML</a></li>
                <li><a href="#css">CSS</a></li>
                <li><a href="#javascript">JavaScript</a></li>
            </ul>
        </li>

        <li><a href="#contato">Contato</a></li>
    </ul>
</nav>
```

**CSS:**

```css
.menu {
    list-style: none;
    padding: 0;
}

.menu li {
    margin-bottom: 10px;
}

.menu ul {
    list-style-type: circle;
    margin-top: 10px;
}

.menu a {
    color: #2563eb;
    text-decoration: none;
}

.menu a:hover {
    text-decoration: underline;
}
```

Neste exemplo, todos os links são apresentados diretamente, sem necessidade de criar um sistema de abertura e fechamento de submenu.

Para desenvolver menus suspensos mais complexos, devemos considerar também a navegação por teclado, os estados de foco e os requisitos de acessibilidade.

### Boas práticas em listas hierárquicas

- Utilizar listas quando existe uma relação real entre os itens.
- Colocar listas aninhadas dentro de elementos `<li>`.
- Evitar níveis excessivos de aninhamento.
- Manter a estrutura organizada.
- Utilizar marcadores adequados ao conteúdo.
- Garantir que os menus sejam acessíveis.
- Não utilizar listas apenas para controlar o posicionamento visual.

---

## 5. Exemplo Prático — Página de Conteúdos com Fontes e Listas

Vamos combinar os conceitos estudados para criar uma página de apresentação de conteúdos de um curso.

### Estrutura do projeto

```text
listas-e-fontes/
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

    <title>Conteúdos de Desenvolvimento Frontend</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header class="cabecalho">
        <h1>Desenvolvimento Frontend</h1>
        <p>Conteúdos fundamentais para desenvolvimento web.</p>
    </header>

    <main class="container">

        <section>
            <h2>Tecnologias Estudadas</h2>

            <ul class="lista-tecnologias">
                <li>
                    HTML
                    <ul>
                        <li>Estrutura de documentos</li>
                        <li>Elementos semânticos</li>
                        <li>Formulários</li>
                    </ul>
                </li>

                <li>
                    CSS
                    <ul>
                        <li>Seletores</li>
                        <li>Box Model</li>
                        <li>Flexbox</li>
                        <li>CSS Grid</li>
                    </ul>
                </li>

                <li>
                    JavaScript
                    <ul>
                        <li>Variáveis e funções</li>
                        <li>DOM</li>
                        <li>Eventos</li>
                    </ul>
                </li>
            </ul>
        </section>

        <section>
            <h2>Etapas de Aprendizagem</h2>

            <ol class="lista-etapas">
                <li>Aprender HTML</li>
                <li>Estudar CSS</li>
                <li>Praticar JavaScript</li>
                <li>Desenvolver projetos</li>
            </ol>
        </section>

        <section>
            <h2>Glossário</h2>

            <dl>
                <dt>Frontend</dt>
                <dd>Parte da aplicação com a qual o utilizador interage.</dd>

                <dt>CSS</dt>
                <dd>Linguagem utilizada para definir a apresentação visual.</dd>

                <dt>DOM</dt>
                <dd>Representação estruturada dos documentos HTML.</dd>
            </dl>
        </section>

    </main>

    <footer>
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
    font-size: 16px;
    line-height: 1.6;

    background-color: #f4f6f9;
    color: #333;
}

/* Cabeçalho */

.cabecalho {
    padding: 40px 20px;

    background: linear-gradient(
        90deg,
        #2563eb,
        #7c3aed
    );

    color: white;
    text-align: center;
}

.cabecalho h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
}

/* Container */

.container {
    width: 90%;
    max-width: 900px;

    margin: 30px auto;
}

/* Secções */

section {
    padding: 25px;
    margin-bottom: 25px;

    background-color: white;

    border: 1px solid #dddddd;
    border-radius: 12px;

    box-shadow: 0 4px 12px rgb(0 0 0 / 8%);
}

/* Títulos */

h2 {
    color: #2563eb;
    font-size: 1.5rem;
}

/* Listas */

.lista-tecnologias {
    list-style-type: disc;
    padding-left: 25px;
}

.lista-tecnologias ul {
    list-style-type: circle;
    margin-top: 8px;
}

.lista-tecnologias li {
    margin-bottom: 8px;
}

.lista-etapas {
    list-style-type: decimal;
    padding-left: 25px;
}

.lista-etapas li {
    margin-bottom: 10px;
}

/* Lista de descrição */

dt {
    font-weight: bold;
    color: #2563eb;
    margin-top: 15px;
}

dd {
    margin-left: 20px;
    margin-bottom: 10px;
}

/* Rodapé */

footer {
    padding: 20px;

    background-color: #e5e7eb;

    text-align: center;
    font-size: 0.9rem;
}

/* Responsividade */

@media (max-width: 600px) {
    .cabecalho h1 {
        font-size: 1.5rem;
    }

    section {
        padding: 15px;
    }
}
```

### Conceitos aplicados

| Conceito | Aplicação |
|---|---|
| `font-family` | Define a família tipográfica |
| `font-size` | Controla o tamanho das fontes |
| `font-weight` | Destaca títulos |
| `line-height` | Melhora a leitura |
| `text-align` | Centraliza o cabeçalho |
| `<ul>` | Organiza tecnologias |
| `<ol>` | Apresenta etapas de aprendizagem |
| `<dl>` | Cria um glossário |
| Listas aninhadas | Organizam categorias e subcategorias |
| `list-style-type` | Personaliza os marcadores |
| Media Queries | Ajustam a interface para ecrãs menores |

---

## 6. Boas Práticas na Utilização de Fontes e Listas

### Criar uma hierarquia tipográfica

Utilizar tamanhos e pesos diferentes para distinguir títulos, subtítulos e parágrafos.

### Manter a legibilidade

Evitar textos muito pequenos e espaçamentos insuficientes entre linhas.

### Utilizar fontes consistentes

Limitar a quantidade de famílias tipográficas para manter a identidade visual do projeto.

### Respeitar a estrutura semântica

Utilizar:

- `<ul>` para itens sem ordem obrigatória.
- `<ol>` quando a sequência é importante.
- `<dl>` para associações entre termos e descrições.

### Evitar listas excessivamente aninhadas

Estruturas muito profundas podem dificultar a leitura e a navegação.

### Considerar a acessibilidade

Manter contraste adequado e garantir que a informação continue compreensível quando o utilizador aumenta o tamanho do texto.

---

## 7. Exercícios para Praticar

### Exercício 1 — Estilos de fontes

Crie uma página com três parágrafos.

Aplique:

1. Uma fonte com serifa.
2. Uma fonte sem serifa.
3. Uma fonte monoespaçada.

### Exercício 2 — Font Size e Font Weight

Crie títulos e parágrafos utilizando diferentes tamanhos e espessuras de fonte.

Compare os resultados.

### Exercício 3 — Alinhamento

Crie quatro parágrafos com os seguintes alinhamentos:

- Esquerda.
- Direita.
- Centro.
- Justificado.

### Exercício 4 — Lista Não Ordenada

Crie uma lista com cinco tecnologias utilizadas no desenvolvimento web.

Personalize os marcadores através de `list-style-type`.

### Exercício 5 — Lista Ordenada

Crie uma lista com as etapas necessárias para desenvolver uma página web.

Experimente diferentes valores para o atributo `type`.

### Exercício 6 — Lista de Descrição

Crie um glossário contendo cinco termos relacionados com desenvolvimento frontend.

Utilize `<dl>`, `<dt>` e `<dd>`.

### Exercício 7 — Lista Hierárquica

Crie uma lista que represente:

```text
Desenvolvimento Web
│
├── Frontend
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
└── Backend
    ├── Node.js
    ├── Python
    └── Java
```

Utilize listas aninhadas para representar os diferentes níveis.

### Exercício 8 — Projeto Completo

Desenvolva uma página de apresentação de um curso contendo:

1. Título principal.
2. Descrição.
3. Lista de módulos.
4. Subtópicos organizados hierarquicamente.
5. Etapas de aprendizagem.
6. Glossário.

Personalize fontes, alinhamentos e marcadores com CSS.

---

## Resumo em uma frase

> As fontes e listas são recursos fundamentais para organizar e apresentar informações no desenvolvimento frontend, permitindo personalizar a tipografia através de propriedades CSS como `font-family`, `font-size`, `font-weight` e `text-align`, enquanto os elementos HTML `<ul>`, `<ol>` e `<dl>` permitem estruturar conteúdos em listas não ordenadas, ordenadas e descritivas, podendo utilizar aninhamento para representar relações hierárquicas entre diferentes categorias e informações.

---

## Conceitos Relacionados para Estudar a Seguir

- **Tipografia Web** — aprofundar famílias tipográficas, pesos e escalas.
- **Google Fonts** — utilizar fontes externas.
- **CSS Text** — trabalhar com alinhamentos, transformações e decorações.
- **HTML Semântico** — estruturar corretamente os conteúdos.
- **Listas Aninhadas** — organizar informações em vários níveis.
- **Menus de Navegação** — criar menus utilizando listas HTML.
- **Flexbox** — alinhar elementos e componentes.
- **Responsividade** — adaptar a tipografia e a disposição dos elementos.
- **Acessibilidade Web** — melhorar a legibilidade e a navegação.
- **CSS Pseudo-elements** — personalizar elementos como `::marker`.

---

## Referências para Estudo

- [MDN — CSS Fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts)
- [MDN — Font Family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
- [MDN — Font Size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)
- [MDN — Text Align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
- [MDN — HTML Lists](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists)
- [MDN — List Style Type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
- [MDN — CSS Marker](https://developer.mozilla.org/en-US/docs/Web/CSS/::marker)
- [Google Fonts](https://fonts.google.com/)
