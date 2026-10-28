
# Tabelas em HTML e CSS

---

## 1. Thead, Tbody e Tfoot

### O que são tabelas HTML?

As **tabelas HTML** são estruturas utilizadas para apresentar dados organizados em linhas e colunas.

São especialmente úteis quando precisamos relacionar diferentes informações, como:

- Nomes e notas de alunos.
- Produtos e preços.
- Horários de aulas.
- Relatórios financeiros.
- Resultados de pesquisas.
- Dados estatísticos.
- Informações provenientes de APIs.

### Estrutura básica de uma tabela

As principais tags utilizadas são:

| Tag | Função |
|---|---|
| `<table>` | Define uma tabela |
| `<tr>` | Define uma linha |
| `<th>` | Define uma célula de cabeçalho |
| `<td>` | Define uma célula de dados |
| `<thead>` | Agrupa as linhas de cabeçalho |
| `<tbody>` | Agrupa as linhas do corpo |
| `<tfoot>` | Agrupa as linhas de rodapé |
| `<caption>` | Define o título ou descrição da tabela |

### Criando uma tabela simples

```html
<table>
    <tr>
        <th>Nome</th>
        <th>Curso</th>
        <th>Nota</th>
    </tr>

    <tr>
        <td>Ana</td>
        <td>ADS</td>
        <td>9</td>
    </tr>

    <tr>
        <td>Maria</td>
        <td>Engenharia</td>
        <td>8</td>
    </tr>
</table>
```

**Resultado esperado:**

| Nome | Curso | Nota |
|---|---|---|
| Ana | ADS | 9 |
| Maria | Engenharia | 8 |

### Elemento `<thead>`

O elemento **`<thead>` (Table Head)** representa o conjunto de linhas que formam o cabeçalho da tabela.

Normalmente, contém células `<th>`.

```html
<table>
    <thead>
        <tr>
            <th>Produto</th>
            <th>Preço</th>
        </tr>
    </thead>
</table>
```

O `<thead>` permite identificar semanticamente quais informações representam os títulos das colunas.

### Elemento `<tbody>`

O elemento **`<tbody>` (Table Body)** representa o corpo principal da tabela.

Contém as linhas com os dados.

```html
<table>
    <thead>
        <tr>
            <th>Produto</th>
            <th>Preço</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Notebook</td>
            <td>800€</td>
        </tr>

        <tr>
            <td>Mouse</td>
            <td>25€</td>
        </tr>
    </tbody>
</table>
```

### Elemento `<tfoot>`

O elemento **`<tfoot>` (Table Foot)** representa um conjunto de linhas de rodapé da tabela.

É frequentemente utilizado para apresentar:

- Totais.
- Médias.
- Resumos.
- Resultados agregados.

```html
<table>
    <thead>
        <tr>
            <th>Produto</th>
            <th>Preço</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Notebook</td>
            <td>800€</td>
        </tr>

        <tr>
            <td>Mouse</td>
            <td>25€</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <th scope="row">Total</th>
            <td>825€</td>
        </tr>
    </tfoot>
</table>
```

### Elemento `<caption>`

O elemento **`<caption>`** permite adicionar um título descritivo à tabela.

É importante para a acessibilidade, pois ajuda a identificar a finalidade dos dados apresentados.

```html
<table>
    <caption>Relatório de Vendas</caption>

    <thead>
        <tr>
            <th>Produto</th>
            <th>Quantidade</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Notebook</td>
            <td>5</td>
        </tr>
    </tbody>
</table>
```

### Estrutura completa

```text
                    TABLE
                      |
             +--------+--------+
             |                 |
             v                 v
          CAPTION          CONTEÚDO
                               |
                  +------------+------------+
                  |            |            |
                  v            v            v
                THEAD        TBODY        TFOOT
                  |            |            |
                  v            v            v
                  TR           TR           TR
                /    \       /    \       /    \
               TH    TH     TD    TD     TH    TD
```

### Exemplo completo — Notas de alunos

```html
<table>
    <caption>Notas dos Alunos</caption>

    <thead>
        <tr>
            <th scope="col">Aluno</th>
            <th scope="col">Disciplina</th>
            <th scope="col">Nota</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Ana</td>
            <td>JavaScript</td>
            <td>9</td>
        </tr>

        <tr>
            <td>Maria</td>
            <td>HTML</td>
            <td>8</td>
        </tr>

        <tr>
            <td>Pedro</td>
            <td>CSS</td>
            <td>10</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <th scope="row" colspan="2">Média</th>
            <td>9</td>
        </tr>
    </tfoot>
</table>
```

Neste exemplo:

- `<caption>` identifica a tabela.
- `<thead>` organiza o cabeçalho.
- `<tbody>` contém os dados.
- `<tfoot>` apresenta a média.
- `scope` identifica a relação dos cabeçalhos.
- `colspan` permite combinar células.

---

## 2. Atributos de uma Tabela

### O que são atributos HTML?

Os **atributos** são informações adicionais inseridas nas tags HTML para modificar ou complementar o comportamento dos elementos.

Nas tabelas, determinados atributos permitem configurar a organização e a relação entre células.

### Atributo `colspan`

O atributo **`colspan`** permite que uma célula ocupe várias colunas.

**Exemplo:**

```html
<table>
    <tr>
        <th colspan="3">Relatório de Vendas</th>
    </tr>

    <tr>
        <th>Produto</th>
        <th>Quantidade</th>
        <th>Preço</th>
    </tr>

    <tr>
        <td>Notebook</td>
        <td>2</td>
        <td>800€</td>
    </tr>
</table>
```

Neste exemplo, o título ocupa três colunas.

### Atributo `rowspan`

O atributo **`rowspan`** permite que uma célula ocupe várias linhas.

```html
<table>
    <tr>
        <th>Categoria</th>
        <th>Produto</th>
    </tr>

    <tr>
        <td rowspan="2">Eletrônicos</td>
        <td>Notebook</td>
    </tr>

    <tr>
        <td>Mouse</td>
    </tr>
</table>
```

A célula `Eletrônicos` ocupa duas linhas.

### Diferença entre Colspan e Rowspan

| Atributo | Função |
|---|---|
| `colspan` | Une o espaço de várias colunas |
| `rowspan` | Une o espaço de várias linhas |

### Atributo `scope`

O atributo **`scope`** é utilizado em células `<th>` para indicar a quais células o cabeçalho se refere.

Valores comuns:

| Valor | Significado |
|---|---|
| `col` | Cabeçalho de coluna |
| `row` | Cabeçalho de linha |
| `colgroup` | Cabeçalho de grupo de colunas |
| `rowgroup` | Cabeçalho de grupo de linhas |

**Exemplo:**

```html
<table>
    <tr>
        <th scope="col">Nome</th>
        <th scope="col">Nota</th>
    </tr>

    <tr>
        <th scope="row">Ana</th>
        <td>9</td>
    </tr>
</table>
```

O atributo contribui para a interpretação dos dados por tecnologias de apoio.

### Atributos `id` e `class`

Também podemos utilizar atributos globais como `id` e `class` para selecionar e estilizar tabelas.

```html
<table id="tabela-alunos" class="tabela">
    <tr>
        <th>Nome</th>
        <th>Nota</th>
    </tr>
</table>
```

**CSS:**

```css
.tabela {
    width: 100%;
    border-collapse: collapse;
}

#tabela-alunos {
    background-color: #f8fafc;
}
```

### Atributos antigos

Em versões antigas de HTML, era comum utilizar atributos diretamente na tabela para controlar a aparência.

Exemplos:

```html
<table border="1" cellpadding="10" cellspacing="0">
```

Esses atributos são considerados práticas antigas ou obsoletas no HTML moderno.

Atualmente, recomenda-se utilizar CSS.

| Atributo antigo | Alternativa CSS |
|---|---|
| `border` | `border` |
| `cellpadding` | `padding` nas células |
| `cellspacing` | `border-spacing` |
| `width` | `width` |
| `align` | Propriedades de alinhamento e layout |

**Exemplo moderno:**

```css
table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    padding: 12px;
    border: 1px solid #cccccc;
}
```

### Boas práticas na utilização de atributos

- Utilizar `colspan` e `rowspan` apenas quando necessário.
- Associar corretamente cabeçalhos e dados.
- Utilizar `scope` para melhorar a acessibilidade.
- Preferir CSS para a apresentação visual.
- Evitar atributos HTML obsoletos.
- Manter uma estrutura compreensível.

---

## 3. Propriedades de uma Tabela

### Estilização de tabelas com CSS

O CSS permite controlar o layout e a aparência das tabelas sem modificar a sua estrutura HTML.

Podemos personalizar:

- Largura.
- Bordas.
- Espaçamentos.
- Cores.
- Alinhamentos.
- Distribuição das colunas.
- Estados de interação.

### Propriedade `border`

Define as bordas da tabela ou das células.

```css
table {
    border: 1px solid black;
}

th,
td {
    border: 1px solid gray;
}
```

### Propriedade `border-collapse`

A propriedade **`border-collapse`** determina como as bordas das células são apresentadas.

Os principais valores são:

| Valor | Comportamento |
|---|---|
| `separate` | Mantém as bordas separadas |
| `collapse` | Combina bordas adjacentes |

**Exemplo:**

```css
table {
    border-collapse: collapse;
}
```

É muito utilizado para criar tabelas com bordas contínuas.

### Propriedade `border-spacing`

Define o espaço entre células quando `border-collapse` possui o valor `separate`.

```css
table {
    border-collapse: separate;
    border-spacing: 10px;
}
```

O valor não produz o mesmo efeito quando as bordas estão colapsadas.

### Propriedade `padding`

Define o espaçamento interno das células.

```css
th,
td {
    padding: 12px;
}
```

Esse espaçamento facilita a leitura e evita que o conteúdo fique demasiado próximo das bordas.

### Propriedade `text-align`

Define o alinhamento horizontal do conteúdo.

```css
th {
    text-align: left;
}

td {
    text-align: center;
}
```

### Propriedade `vertical-align`

Controla o alinhamento vertical do conteúdo das células.

```css
td {
    vertical-align: middle;
}
```

Valores comuns incluem:

- `top`
- `middle`
- `bottom`

### Propriedade `width`

Permite controlar a largura da tabela.

```css
table {
    width: 100%;
}
```

Neste exemplo, a tabela tenta ocupar toda a largura disponível no seu contentor.

### Propriedade `table-layout`

A propriedade **`table-layout`** controla o algoritmo utilizado para calcular a largura das colunas.

| Valor | Comportamento |
|---|---|
| `auto` | Considera o conteúdo para determinar a largura das colunas |
| `fixed` | Utiliza regras de largura mais previsíveis, sem depender do conteúdo de todas as células |

**Exemplo:**

```css
table {
    width: 100%;
    table-layout: fixed;
}
```

Com `table-layout: fixed`, pode ser necessário tratar textos longos para evitar que ultrapassem os limites das células.

```css
td {
    overflow-wrap: anywhere;
}
```

### Cores alternadas — Zebra Striping

Uma técnica comum é utilizar cores alternadas nas linhas da tabela.

```css
tbody tr:nth-child(even) {
    background-color: #f1f5f9;
}
```

A pseudoclasse `:nth-child(even)` seleciona os elementos pares.

### Efeito Hover

Também podemos destacar uma linha quando o ponteiro passa sobre ela.

```css
tbody tr:hover {
    background-color: #dbeafe;
}
```

Esse efeito facilita a identificação visual dos dados.

### Estilização do cabeçalho

```css
thead {
    background-color: #2563eb;
    color: white;
}
```

### Estilização do rodapé

```css
tfoot {
    background-color: #e5e7eb;
    font-weight: bold;
}
```

### Exemplo completo

**HTML:**

```html
<table class="tabela">
    <caption>Relatório de Produtos</caption>

    <thead>
        <tr>
            <th scope="col">Produto</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Preço</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Notebook</td>
            <td>2</td>
            <td>800€</td>
        </tr>

        <tr>
            <td>Mouse</td>
            <td>5</td>
            <td>25€</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <th scope="row" colspan="2">Total</th>
            <td>1725€</td>
        </tr>
    </tfoot>
</table>
```

**CSS:**

```css
.tabela {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
}

.tabela caption {
    margin-bottom: 15px;
    font-size: 1.3rem;
    font-weight: bold;
}

.tabela th,
.tabela td {
    padding: 12px;
    border: 1px solid #dddddd;
    text-align: left;
}

.tabela thead {
    background-color: #2563eb;
    color: white;
}

.tabela tbody tr:nth-child(even) {
    background-color: #f1f5f9;
}

.tabela tbody tr:hover {
    background-color: #dbeafe;
}

.tabela tfoot {
    background-color: #e5e7eb;
    font-weight: bold;
}
```

### Tabelas Responsivas

As tabelas podem apresentar dificuldades em ecrãs pequenos devido à quantidade de colunas.

Uma solução simples consiste em permitir a rolagem horizontal.

**HTML:**

```html
<div class="tabela-container" role="region" aria-label="Tabela de produtos" tabindex="0">
    <table>
        <caption>Produtos</caption>

        <thead>
            <tr>
                <th scope="col">Produto</th>
                <th scope="col">Categoria</th>
                <th scope="col">Quantidade</th>
                <th scope="col">Preço</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>Notebook</td>
                <td>Informática</td>
                <td>2</td>
                <td>800€</td>
            </tr>
        </tbody>
    </table>
</div>
```

**CSS:**

```css
.tabela-container {
    max-width: 100%;
    overflow-x: auto;
}

.tabela-container table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;
}
```

A tabela mantém a estrutura, e o utilizador pode deslocar-se horizontalmente quando não existe espaço suficiente.

### Propriedades CSS mais utilizadas

| Propriedade | Função |
|---|---|
| `border` | Define bordas |
| `border-collapse` | Controla a união das bordas |
| `border-spacing` | Define espaço entre células |
| `padding` | Define espaçamento interno |
| `width` | Controla a largura |
| `table-layout` | Define o algoritmo de distribuição das colunas |
| `text-align` | Alinha o conteúdo horizontalmente |
| `vertical-align` | Alinha o conteúdo verticalmente |
| `background-color` | Define cores de fundo |
| `overflow-x` | Permite gerir o transbordamento horizontal |

---

## 4. Diferentes Aplicações do Uso de Tabelas

### Quando utilizar tabelas?

As tabelas são adequadas quando as informações possuem uma relação organizada entre linhas e colunas.

São muito utilizadas em sistemas empresariais, administrativos, educacionais e financeiros.

### 4.1 Tabelas de Dados Académicos

Podem ser utilizadas para apresentar notas, disciplinas e frequência.

```html
<table>
    <caption>Notas dos Alunos</caption>

    <thead>
        <tr>
            <th scope="col">Aluno</th>
            <th scope="col">Disciplina</th>
            <th scope="col">Nota</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Ana</td>
            <td>HTML</td>
            <td>9</td>
        </tr>

        <tr>
            <td>Maria</td>
            <td>JavaScript</td>
            <td>8</td>
        </tr>
    </tbody>
</table>
```

### 4.2 Tabelas Financeiras

Permitem organizar receitas, despesas e resultados.

| Mês | Receita | Despesa | Saldo |
|---|---:|---:|---:|
| Janeiro | 2000€ | 1500€ | 500€ |
| Fevereiro | 2500€ | 1800€ | 700€ |
| Março | 2200€ | 1700€ | 500€ |

Essas informações podem ser apresentadas em dashboards ou relatórios.

### 4.3 Tabelas de Produtos

São comuns em sistemas de gestão de stocks e lojas virtuais.

```html
<table>
    <caption>Produtos em Stock</caption>

    <thead>
        <tr>
            <th scope="col">Código</th>
            <th scope="col">Produto</th>
            <th scope="col">Quantidade</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>001</td>
            <td>Teclado</td>
            <td>15</td>
        </tr>

        <tr>
            <td>002</td>
            <td>Mouse</td>
            <td>20</td>
        </tr>
    </tbody>
</table>
```

### 4.4 Tabelas de Horários

Podem ser utilizadas para organizar aulas, reuniões ou turnos.

| Dia | Horário | Atividade |
|---|---|---|
| Segunda-feira | 09:00 | HTML |
| Terça-feira | 10:00 | CSS |
| Quarta-feira | 14:00 | JavaScript |

### 4.5 Tabelas Dinâmicas com JavaScript

Uma aplicação pode obter dados através de uma API e apresentar os resultados numa tabela HTML.

**Exemplo HTML:**

```html
<table id="tabela-usuarios">
    <caption>Utilizadores</caption>

    <thead>
        <tr>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
        </tr>
    </thead>

    <tbody></tbody>
</table>

<script src="script.js" defer></script>
```

**JavaScript — `script.js`:**

```js
const corpoTabela = document.querySelector(
    "#tabela-usuarios tbody"
);

async function carregarUsuarios() {
    try {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const usuarios = await resposta.json();

        corpoTabela.replaceChildren();

        usuarios.forEach(usuario => {
            const linha = document.createElement("tr");

            const nome = document.createElement("td");
            nome.textContent = usuario.name;

            const email = document.createElement("td");
            email.textContent = usuario.email;

            linha.append(nome, email);

            corpoTabela.appendChild(linha);
        });

    } catch (erro) {
        console.error("Erro:", erro.message);
    }
}

carregarUsuarios();
```

Neste exemplo:

1. `fetch()` consulta uma API.
2. `await` aguarda a resposta.
3. `response.json()` interpreta os dados.
4. `forEach()` percorre os utilizadores.
5. `createElement()` cria linhas e células.
6. `textContent` adiciona os dados.
7. `appendChild()` insere as linhas na tabela.

Esse exemplo demonstra como as tabelas podem ser integradas com os conceitos de DOM, Promises e consumo de APIs.

### Quando não utilizar tabelas?

As tabelas não devem ser utilizadas como estrutura principal para posicionar os elementos de uma página.

Para criar layouts, é preferível utilizar:

- Flexbox.
- CSS Grid.
- Elementos semânticos.
- Media Queries.

**Exemplo de layout com Grid:**

```css
.container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
}
```

A diferença principal é:

- **Tabelas HTML:** representam dados tabulares.
- **CSS Grid e Flexbox:** organizam componentes visuais.

---

## 5. Exemplo Prático — Tabela de Vendas

Vamos criar uma página completa que apresenta uma tabela de vendas utilizando HTML e CSS.

### Estrutura do Projeto

```text
projeto-tabelas/
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

    <title>Relatório de Vendas</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <main class="container">
        <h1>Relatório de Vendas</h1>

        <p>
            Exemplo de organização de dados
            utilizando tabelas HTML.
        </p>

        <div class="tabela-container" role="region" aria-label="Relatório de vendas" tabindex="0">
            <table>
                <caption>Vendas do Mês</caption>

                <thead>
                    <tr>
                        <th scope="col">Produto</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Preço Unitário</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Notebook</td>
                        <td>2</td>
                        <td>800€</td>
                        <td>1600€</td>
                    </tr>

                    <tr>
                        <td>Mouse</td>
                        <td>5</td>
                        <td>25€</td>
                        <td>125€</td>
                    </tr>

                    <tr>
                        <td>Teclado</td>
                        <td>3</td>
                        <td>50€</td>
                        <td>150€</td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <th scope="row" colspan="3">Total</th>
                        <td>1875€</td>
                    </tr>
                </tfoot>
            </table>
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

    background-color: #f4f6f9;
    color: #333;
}

/* Container */

.container {
    width: 100%;
    max-width: 1000px;

    margin: 0 auto;
    padding: 30px;

    background-color: white;

    border-radius: 12px;
    box-shadow: 0 5px 15px rgb(0 0 0 / 10%);
}

/* Título */

h1 {
    color: #2563eb;
    text-align: center;
}

/* Responsividade */

.tabela-container {
    max-width: 100%;
    overflow-x: auto;
}

/* Tabela */

table {
    width: 100%;
    min-width: 650px;

    border-collapse: collapse;
    margin-top: 20px;
}

/* Legenda */

caption {
    margin-bottom: 15px;

    font-size: 1.3rem;
    font-weight: bold;
}

/* Células */

th,
td {
    padding: 14px;

    border: 1px solid #dddddd;

    text-align: left;
}

/* Cabeçalho */

thead {
    background-color: #2563eb;
    color: white;
}

/* Linhas alternadas */

tbody tr:nth-child(even) {
    background-color: #f1f5f9;
}

/* Hover */

tbody tr:hover {
    background-color: #dbeafe;
}

/* Rodapé */

tfoot {
    background-color: #e5e7eb;
    font-weight: bold;
}

/* Ecrãs menores */

@media (max-width: 600px) {
    body {
        padding: 10px;
    }

    .container {
        padding: 15px;
    }
}
```

### Conceitos Aplicados

| Conceito | Aplicação |
|---|---|
| `<table>` | Estrutura da tabela |
| `<caption>` | Título descritivo |
| `<thead>` | Cabeçalho |
| `<tbody>` | Dados |
| `<tfoot>` | Total |
| `<tr>` | Linhas |
| `<th>` | Cabeçalhos |
| `<td>` | Células |
| `scope` | Associação semântica dos cabeçalhos |
| `colspan` | Combinação de colunas |
| `border-collapse` | União das bordas |
| `padding` | Espaçamento interno |
| `:nth-child()` | Cores alternadas |
| `:hover` | Destaque de linhas |
| `overflow-x` | Rolagem horizontal em ecrãs pequenos |

---

## 6. Boas Práticas na Utilização de Tabelas

### Utilizar tabelas apenas para dados tabulares

Não utilizar tabelas para organizar o layout geral de páginas.

### Organizar a estrutura

Separar claramente cabeçalhos, corpo e rodapé através de `<thead>`, `<tbody>` e `<tfoot>`.

### Utilizar cabeçalhos apropriados

Preferir `<th>` para identificar linhas e colunas.

### Considerar a acessibilidade

Utilizar `<caption>` e `scope` quando apropriado, especialmente em tabelas com diferentes relações entre cabeçalhos e dados.

### Garantir responsividade

Quando existirem muitas colunas, considerar uma área com rolagem horizontal.

### Manter boa legibilidade

Utilizar espaçamento, alinhamento e contraste adequados.

### Evitar excesso de informação

Tabelas muito extensas podem ser difíceis de interpretar.

Em aplicações maiores, podem ser necessários recursos como:

- Paginação.
- Pesquisa.
- Filtros.
- Ordenação de colunas.

---

## 7. Exercícios para Praticar

### Exercício 1 — Tabela Simples

Crie uma tabela com três colunas:

- Nome.
- Idade.
- Curso.

Adicione pelo menos cinco linhas.

### Exercício 2 — Thead, Tbody e Tfoot

Crie uma tabela de produtos contendo:

1. Cabeçalho.
2. Corpo com produtos.
3. Rodapé com o valor total.

Utilize corretamente `<thead>`, `<tbody>` e `<tfoot>`.

### Exercício 3 — Colspan

Crie uma tabela contendo uma célula que ocupe três colunas utilizando `colspan`.

### Exercício 4 — Rowspan

Crie uma tabela de categorias e produtos utilizando `rowspan` para agrupar produtos pertencentes à mesma categoria.

### Exercício 5 — Estilização com CSS

Personalize uma tabela utilizando:

- Bordas.
- Cores.
- Padding.
- Cabeçalho colorido.
- Linhas alternadas.

### Exercício 6 — Tabela Responsiva

Crie uma tabela com seis colunas.

Implemente uma área com `overflow-x: auto` para permitir a visualização em ecrãs pequenos.

### Exercício 7 — Tabela Dinâmica

Consuma a API:

```text
https://jsonplaceholder.typicode.com/users
```

Utilize JavaScript para apresentar os nomes e e-mails numa tabela HTML.

### Exercício 8 — Projeto Completo

Desenvolva uma página de relatório contendo:

1. Título.
2. Descrição.
3. Tabela de vendas.
4. Cabeçalho com quatro colunas.
5. Cinco produtos.
6. Rodapé com o total.
7. Estilização CSS.
8. Responsividade.

---

## Resumo em uma frase

> As tabelas HTML permitem organizar dados em linhas e colunas através de elementos como `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>` e `<td>`, utilizando atributos como `colspan`, `rowspan` e `scope` para definir relações entre células, enquanto propriedades CSS como `border-collapse`, `padding`, `table-layout` e `background-color` permitem controlar a apresentação visual, sendo especialmente úteis para relatórios, horários, dados académicos, produtos e informações dinâmicas provenientes de APIs.

---

## Conceitos Relacionados para Estudar a Seguir

- **HTML Semântico** — estruturar corretamente os dados.
- **CSS Table Layout** — aprofundar a formatação de tabelas.
- **Responsividade** — adaptar tabelas a dispositivos móveis.
- **Acessibilidade Web** — melhorar a navegação e interpretação das tabelas.
- **DOM** — criar e modificar linhas e células dinamicamente.
- **JavaScript** — implementar filtros, pesquisas e ordenação.
- **Fetch API** — obter dados externos para apresentar em tabelas.
- **JSON** — interpretar dados provenientes de APIs.
- **Paginação** — dividir grandes conjuntos de dados.
- **Dashboards** — apresentar informações através de tabelas e gráficos.

---

## Referências para Estudo

- [MDN — HTML Table](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table)
- [MDN — Thead](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/thead)
- [MDN — Tbody](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tbody)
- [MDN — Tfoot](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/tfoot)
- [MDN — Colspan e Rowspan](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
- [MDN — Border Collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse)
- [W3C WAI — Tables](https://www.w3.org/WAI/tutorials/tables/)
