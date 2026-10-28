
# Formulários em HTML

---

## 1. Campo Input e Textarea

### O que são formulários?

Os **formulários HTML (HTML Forms)** são estruturas que permitem recolher informações fornecidas pelos utilizadores.

São utilizados em diferentes funcionalidades de aplicações web, como:

- Cadastro de utilizadores.
- Login e autenticação.
- Pesquisas.
- Formulários de contacto.
- Reservas.
- Inscrições em cursos.
- Envio de comentários.
- Atualização de dados pessoais.

O HTML disponibiliza elementos específicos para criar campos, organizar informações e enviar dados.

### Elemento `<form>`

O elemento **`<form>`** é utilizado para agrupar os campos de um formulário.

**Exemplo:**

```html
<form>
    <label for="nome">Nome:</label>

    <input type="text" id="nome" name="nome">

    <button type="submit">Enviar</button>
</form>
```

Neste exemplo:

- `<form>` representa o formulário.
- `<label>` identifica o campo.
- `<input>` permite introduzir informações.
- `<button>` permite enviar os dados.

### Principais atributos de um formulário

| Atributo | Função |
|---|---|
| `action` | Define o endereço que receberá os dados |
| `method` | Define o método HTTP utilizado |
| `enctype` | Define a codificação dos dados enviados |
| `autocomplete` | Controla sugestões de preenchimento automático |
| `novalidate` | Desativa a validação nativa durante o envio |

### Métodos GET e POST

Os dois métodos mais comuns em formulários são `GET` e `POST`.

**GET:**

```html
<form action="/pesquisar" method="get">
    <input type="search" name="q">

    <button type="submit">Pesquisar</button>
</form>
```

Os dados são normalmente incluídos na URL como parâmetros.

Exemplo:

```text
/pesquisar?q=javascript
```

**POST:**

```html
<form action="/cadastro" method="post">
    <input type="text" name="nome">

    <button type="submit">Cadastrar</button>
</form>
```

Os dados são enviados no corpo da requisição HTTP.

| GET | POST |
|---|---|
| Normalmente utilizado para consultas | Utilizado para envio e processamento de dados |
| Parâmetros geralmente visíveis na URL | Dados enviados no corpo |
| Pode ser guardado nos favoritos | Não representa uma consulta por URL |
| Não deve ser utilizado para operações que alteram dados | Pode ser utilizado para criar recursos |

**Importante:** POST não garante confidencialidade sozinho. Para proteger os dados durante a transmissão, devemos utilizar HTTPS.

### Elemento `<input>`

O **`<input>`** é um dos principais elementos utilizados para recolher informações.

O seu comportamento depende do atributo `type`.

**Sintaxe:**

```html
<input type="text" name="nome">
```

### Principais tipos de Input

| Tipo | Finalidade |
|---|---|
| `text` | Texto simples |
| `password` | Palavra-passe |
| `email` | Endereço de e-mail |
| `number` | Entrada numérica |
| `date` | Seleção de data |
| `time` | Seleção de horário |
| `checkbox` | Seleção independente |
| `radio` | Seleção de uma opção num grupo |
| `file` | Seleção de ficheiros |
| `search` | Campo de pesquisa |
| `tel` | Número de telefone |
| `url` | Endereço web |
| `hidden` | Valor não apresentado visualmente |

### Input Text

O tipo **`text`** permite introduzir informações textuais.

```html
<label for="nome">Nome completo:</label>

<input
    type="text"
    id="nome"
    name="nome"
    placeholder="Digite o seu nome"
    required
>
```

**Atributos utilizados:**

- `type="text"` — define um campo textual.
- `id` — identifica o elemento no documento.
- `name` — identifica o campo nos dados enviados.
- `placeholder` — apresenta uma sugestão.
- `required` — exige o preenchimento antes do envio normal do formulário.

### Input Password

O tipo **`password`** é utilizado para introduzir palavras-passe.

```html
<label for="senha">Senha:</label>

<input
    type="password"
    id="senha"
    name="senha"
    minlength="8"
    required
>
```

Os caracteres são visualmente ocultados pelo navegador.

Entretanto, isso não significa que os dados estejam encriptados pelo próprio campo HTML.

### Input Number

O tipo **`number`** permite introduzir valores numéricos.

```html
<label for="idade">Idade:</label>

<input
    type="number"
    id="idade"
    name="idade"
    min="18"
    max="100"
>
```

- `min` — valor mínimo.
- `max` — valor máximo.

Também podemos utilizar `step` para controlar os incrementos permitidos.

### Input Checkbox

O tipo **`checkbox`** permite selecionar opções independentes.

```html
<input
    type="checkbox"
    id="html"
    name="tecnologias"
    value="HTML"
>

<label for="html">HTML</label>

<input
    type="checkbox"
    id="css"
    name="tecnologias"
    value="CSS"
>

<label for="css">CSS</label>
```

O utilizador pode selecionar ambas as opções.

### Input Radio

O tipo **`radio`** permite selecionar uma opção de um grupo.

```html
<input
    type="radio"
    id="presencial"
    name="modalidade"
    value="presencial"
>

<label for="presencial">Presencial</label>

<input
    type="radio"
    id="online"
    name="modalidade"
    value="online"
>

<label for="online">Online</label>
```

Os campos possuem o mesmo atributo `name`, formando um grupo no qual normalmente apenas uma opção pode ser selecionada.

### Elemento `<textarea>`

O elemento **`<textarea>`** permite introduzir textos com múltiplas linhas.

É especialmente útil para:

- Comentários.
- Descrições.
- Mensagens.
- Observações.
- Relatórios.

**Exemplo:**

```html
<label for="mensagem">Mensagem:</label>

<textarea
    id="mensagem"
    name="mensagem"
    rows="5"
    cols="40"
    placeholder="Escreva a sua mensagem"
></textarea>
```

### Principais atributos do Textarea

| Atributo | Função |
|---|---|
| `rows` | Número de linhas visíveis |
| `cols` | Largura aproximada em caracteres |
| `maxlength` | Quantidade máxima de caracteres |
| `minlength` | Quantidade mínima de caracteres |
| `placeholder` | Texto de orientação |
| `required` | Campo obrigatório |
| `readonly` | Impede a edição do conteúdo |

### Input vs. Textarea

| Input Text | Textarea |
|---|---|
| Normalmente uma linha | Várias linhas |
| Ideal para dados curtos | Ideal para textos longos |
| Elemento vazio | Possui abertura e fechamento |
| Valor inicial pelo atributo `value` | Valor inicial entre as tags |

**Exemplo de Textarea com conteúdo inicial:**

```html
<textarea name="observacoes" rows="4">Observação inicial.</textarea>
```

### Estilizando os Campos

```css
input,
textarea {
    width: 100%;
    padding: 12px;

    border: 1px solid #cccccc;
    border-radius: 6px;

    font-family: Arial, sans-serif;
    font-size: 16px;
}

textarea {
    resize: vertical;
}

input:focus,
textarea:focus {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
}
```

A propriedade `resize: vertical` permite redimensionar a altura do campo de texto.

---

## 2. Campo Combobox e Fieldset

### O que é um Combobox?

Um **combobox** é um componente de interface utilizado para selecionar valores, podendo, dependendo da implementação, permitir também a introdução de texto.

No HTML básico, uma lista suspensa de seleção é normalmente criada com os elementos:

- `<select>` — define a lista.
- `<option>` — define as opções.
- `<optgroup>` — agrupa opções relacionadas.

**Importante:** um `<select>` nativo representa uma lista de seleção. Um combobox editável, com pesquisa ou sugestões durante a digitação, pode exigir outros elementos e JavaScript.

### Elemento `<select>`

**Exemplo:**

```html
<label for="curso">Selecione o curso:</label>

<select id="curso" name="curso">
    <option value="ads">Análise e Desenvolvimento de Sistemas</option>
    <option value="engenharia">Engenharia de Software</option>
    <option value="design">Design</option>
</select>
```

O utilizador pode escolher uma das opções apresentadas.

### Atributos do Select

| Atributo | Função |
|---|---|
| `name` | Identifica o campo no envio |
| `id` | Identifica o elemento |
| `required` | Torna a seleção obrigatória |
| `multiple` | Permite selecionar várias opções |
| `size` | Define quantas opções podem ficar visíveis |
| `disabled` | Desativa o campo |

### Opção selecionada por padrão

O atributo **`selected`** permite definir a opção inicialmente selecionada.

```html
<select name="pais">
    <option value="brasil">Brasil</option>
    <option value="portugal" selected>Portugal</option>
    <option value="espanha">Espanha</option>
</select>
```

### Campo de seleção obrigatório

Podemos adicionar uma opção inicial sem valor.

```html
<label for="categoria">Categoria:</label>

<select id="categoria" name="categoria" required>
    <option value="">Selecione uma categoria</option>
    <option value="frontend">Frontend</option>
    <option value="backend">Backend</option>
</select>
```

Enquanto a opção com valor vazio estiver selecionada, a validação `required` não será satisfeita.

### Elemento `<optgroup>`

O elemento **`<optgroup>`** permite agrupar opções de uma lista.

```html
<label for="tecnologia">Tecnologia:</label>

<select id="tecnologia" name="tecnologia">

    <optgroup label="Frontend">
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
    </optgroup>

    <optgroup label="Backend">
        <option value="node">Node.js</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
    </optgroup>

</select>
```

Essa organização facilita a compreensão quando existem muitas opções.

### Elemento `<datalist>`

O elemento **`<datalist>`** permite definir sugestões para determinados campos `<input>`.

```html
<label for="linguagem">Linguagem:</label>

<input
    type="text"
    id="linguagem"
    name="linguagem"
    list="linguagens"
>

<datalist id="linguagens">
    <option value="JavaScript">
    <option value="Python">
    <option value="Java">
    <option value="PHP">
</datalist>
```

O utilizador pode selecionar uma sugestão ou escrever outro valor.

**Diferença importante:**

| Select | Input com Datalist |
|---|---|
| Seleção entre opções definidas | Sugestões durante a introdução de texto |
| Normalmente restringe aos valores existentes | Permite introduzir outros valores |
| Pode utilizar `optgroup` | Utiliza `datalist` |
| Apropriado para opções controladas | Apropriado para sugestões |

### Elemento `<fieldset>`

O elemento **`<fieldset>`** permite agrupar campos relacionados dentro de um formulário.

É especialmente útil quando temos:

- Dados pessoais.
- Informações de contacto.
- Preferências.
- Opções de pagamento.
- Grupos de radio buttons.

### Elemento `<legend>`

O elemento **`<legend>`** define uma legenda ou título para um grupo de campos.

**Exemplo:**

```html
<form>

    <fieldset>
        <legend>Dados Pessoais</legend>

        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome">

        <label for="idade">Idade:</label>
        <input type="number" id="idade" name="idade">
    </fieldset>

</form>
```

### Agrupando Radio Buttons

O `fieldset` é particularmente importante quando várias opções pertencem à mesma pergunta.

```html
<fieldset>
    <legend>Modalidade do curso</legend>

    <input
        type="radio"
        id="curso-online"
        name="modalidade"
        value="online"
    >
    <label for="curso-online">Online</label>

    <input
        type="radio"
        id="curso-presencial"
        name="modalidade"
        value="presencial"
    >
    <label for="curso-presencial">Presencial</label>
</fieldset>
```

O `<legend>` descreve o grupo, enquanto cada `<label>` identifica uma opção.

### Estilizando Fieldset

```css
fieldset {
    border: 2px solid #2563eb;
    border-radius: 10px;

    padding: 20px;
    margin-bottom: 20px;
}

legend {
    color: #2563eb;
    font-weight: bold;
    padding: 0 10px;
}
```

### Vantagens do Fieldset

- Agrupa informações relacionadas.
- Melhora a organização visual.
- Ajuda tecnologias de apoio a compreender os campos.
- Facilita a manutenção de formulários extensos.

---

## 3. Label, Hidden, E-mail e Data

### Elemento `<label>`

O elemento **`<label>`** identifica um campo de formulário.

É importante para a acessibilidade, pois permite que os utilizadores e tecnologias de apoio compreendam a finalidade de cada campo.

**Exemplo:**

```html
<label for="usuario">Nome de utilizador:</label>

<input
    type="text"
    id="usuario"
    name="usuario"
>
```

### Relação entre Label e Input

O atributo `for` do `<label>` deve corresponder ao atributo `id` do campo.

```text
LABEL                      INPUT
  |                          |
  v                          v
for="email"  ----------> id="email"
```

Essa associação permite, por exemplo, que clicar no texto do label direcione o foco para o campo.

### Label envolvendo Input

Também podemos associar o label ao campo colocando o input dentro dele.

```html
<label>
    <input type="checkbox" name="aceitar" required>
    Aceito os termos de utilização.
</label>
```

### Input Hidden

O tipo **`hidden`** permite incluir um valor no envio do formulário sem apresentar um campo visual ao utilizador.

**Exemplo:**

```html
<form action="/atualizar" method="post">

    <input
        type="hidden"
        name="usuario_id"
        value="123"
    >

    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">

    <button type="submit">Atualizar</button>
</form>
```

Neste exemplo, `usuario_id` será enviado juntamente com os restantes dados.

### Atenção à Segurança

O campo `hidden` não é um mecanismo de segurança.

Embora não apareça visualmente no formulário, o valor pode ser inspecionado e modificado através das ferramentas do navegador.

Por isso:

- Não guardar senhas em campos hidden.
- Não confiar em IDs enviados sem validação.
- Validar os dados no backend.
- Verificar as permissões do utilizador no servidor.

### Input E-mail

O tipo **`email`** é utilizado para recolher endereços de e-mail.

```html
<label for="email">E-mail:</label>

<input
    type="email"
    id="email"
    name="email"
    placeholder="exemplo@email.com"
    required
>
```

O navegador pode realizar validações básicas do formato do e-mail.

Entretanto, isso não confirma que o endereço existe ou pertence ao utilizador.

### Input Date

O tipo **`date`** permite selecionar uma data.

```html
<label for="nascimento">Data de nascimento:</label>

<input
    type="date"
    id="nascimento"
    name="nascimento"
>
```

O navegador pode disponibilizar um seletor de calendário, dependendo da plataforma.

### Definindo datas mínimas e máximas

```html
<label for="data-reserva">Data da reserva:</label>

<input
    type="date"
    id="data-reserva"
    name="data_reserva"
    min="2026-01-01"
    max="2026-12-31"
>
```

Os valores são definidos no formato:

```text
AAAA-MM-DD
```

### Outros campos relacionados com datas

| Tipo | Finalidade |
|---|---|
| `date` | Data |
| `time` | Horário |
| `datetime-local` | Data e horário local |
| `month` | Mês e ano |
| `week` | Semana e ano |

**Exemplo:**

```html
<label for="horario">Horário:</label>
<input type="time" id="horario" name="horario">

<label for="agendamento">Agendamento:</label>
<input
    type="datetime-local"
    id="agendamento"
    name="agendamento"
>
```

### Outros atributos importantes

| Atributo | Finalidade |
|---|---|
| `required` | Campo obrigatório |
| `disabled` | Campo desativado e não enviado normalmente |
| `readonly` | Impede edição, mantendo o valor elegível para envio |
| `placeholder` | Exemplo ou sugestão de preenchimento |
| `maxlength` | Quantidade máxima de caracteres |
| `minlength` | Quantidade mínima de caracteres |
| `pattern` | Padrão de validação para tipos compatíveis |
| `autocomplete` | Orienta o preenchimento automático |
| `value` | Valor do campo |

### Validação de Formulários

O HTML disponibiliza validações nativas.

**Exemplo:**

```html
<form>
    <label for="nome">Nome:</label>

    <input
        type="text"
        id="nome"
        name="nome"
        minlength="3"
        required
    >

    <label for="email">E-mail:</label>

    <input
        type="email"
        id="email"
        name="email"
        required
    >

    <button type="submit">Enviar</button>
</form>
```

Se os campos não cumprirem as regras, o navegador normalmente impede o envio e apresenta mensagens de validação.

**Importante:** a validação HTML melhora a experiência do utilizador, mas nunca substitui a validação no servidor.

---

## 4. Tipos de Botões

### O que são botões em formulários?

Os **botões HTML** permitem que o utilizador execute ações, como enviar, limpar ou processar informações.

Podem ser criados com:

- `<button>`.
- `<input type="submit">`.
- `<input type="reset">`.
- `<input type="button">`.

### Elemento `<button>`

O elemento **`<button>`** permite criar botões com texto e outros conteúdos HTML apropriados.

```html
<button type="button">
    Clique aqui
</button>
```

### Tipos principais de botões

| Tipo | Finalidade |
|---|---|
| `submit` | Enviar o formulário |
| `reset` | Restaurar os valores iniciais |
| `button` | Executar uma ação personalizada |

### Botão Submit

O tipo **`submit`** é utilizado para submeter o formulário.

```html
<form action="/cadastro" method="post">

    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">

    <button type="submit">Cadastrar</button>

</form>
```

Ao ser ativado, o botão inicia o processo normal de submissão, sujeito às validações aplicáveis.

### Botão Reset

O tipo **`reset`** permite restaurar os campos aos valores iniciais.

```html
<form>
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">

    <button type="reset">Limpar</button>
</form>
```

**Atenção:** `reset` não significa necessariamente deixar todos os campos vazios. Ele restaura os valores iniciais do formulário.

### Botão Button

O tipo **`button`** é utilizado para executar ações personalizadas, geralmente através de JavaScript.

**HTML:**

```html
<button type="button" id="mostrar">
    Mostrar mensagem
</button>

<p id="mensagem"></p>

<script src="script.js" defer></script>
```

**JavaScript:**

```js
const botao = document.getElementById("mostrar");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent = "Botão clicado com sucesso!";
});
```

### Diferença entre os botões

```text
                BOTÃO
                  |
       +----------+----------+
       |          |          |
       v          v          v
     SUBMIT      RESET      BUTTON
       |          |          |
       v          v          v
     Envia     Restaura    Executa
    formulário  valores    ação customizada
```

### Botões com Input

Também podemos criar botões utilizando `<input>`.

```html
<input type="submit" value="Enviar">

<input type="reset" value="Limpar">

<input type="button" value="Clique aqui">
```

A principal diferença é que `<button>` permite incluir conteúdo HTML dentro do elemento.

### O atributo `disabled`

O atributo **`disabled`** impede a interação normal do utilizador com o botão.

```html
<button type="submit" disabled>
    Enviar
</button>
```

Podemos controlar essa propriedade através de JavaScript.

```js
const botao = document.querySelector("button");

botao.disabled = true;
```

### Estilizando Botões com CSS

```css
button {
    padding: 12px 24px;

    background-color: #2563eb;
    color: white;

    border: none;
    border-radius: 8px;

    font-size: 16px;
    cursor: pointer;

    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #1d4ed8;
}

button:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 3px;
}

button:disabled {
    background-color: #94a3b8;
    cursor: not-allowed;
}
```

---

## 5. Exemplo Prático — Formulário de Inscrição

Vamos combinar os conceitos estudados para criar um formulário completo.

### Estrutura do projeto

```text
formulario-inscricao/
├── index.html
├── style.css
└── script.js
```

### HTML — `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Formulário de Inscrição</title>

    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>

    <main class="container">
        <h1>Inscrição em Curso</h1>

        <form id="formulario">

            <input
                type="hidden"
                name="origem"
                value="site"
            >

            <fieldset>
                <legend>Dados Pessoais</legend>

                <label for="nome">Nome completo:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    minlength="3"
                    required
                >

                <label for="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                >

                <label for="nascimento">Data de nascimento:</label>
                <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    required
                >
            </fieldset>

            <fieldset>
                <legend>Informações do Curso</legend>

                <label for="curso">Curso desejado:</label>

                <select id="curso" name="curso" required>
                    <option value="">Selecione um curso</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    <option value="javascript">JavaScript</option>
                </select>

                <fieldset class="grupo-opcoes">
                    <legend>Modalidade:</legend>

                    <label>
                        <input
                            type="radio"
                            name="modalidade"
                            value="online"
                            required
                        >
                        Online
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="modalidade"
                            value="presencial"
                        >
                        Presencial
                    </label>
                </fieldset>

                <label for="observacoes">Observações:</label>

                <textarea
                    id="observacoes"
                    name="observacoes"
                    rows="4"
                    placeholder="Informações adicionais"
                ></textarea>
            </fieldset>

            <div class="botoes">
                <button type="submit">Enviar inscrição</button>
                <button type="reset">Limpar</button>
            </div>

        </form>

        <p id="mensagem" role="status"></p>
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
    padding: 20px;

    font-family: Arial, sans-serif;

    background-color: #f4f6f9;
    color: #333333;
}

.container {
    width: 100%;
    max-width: 650px;

    margin: 0 auto;
    padding: 30px;

    background-color: white;

    border-radius: 12px;
    box-shadow: 0 5px 20px rgb(0 0 0 / 10%);
}

h1 {
    text-align: center;
    color: #2563eb;
}

fieldset {
    margin-bottom: 20px;
    padding: 20px;

    border: 1px solid #cccccc;
    border-radius: 8px;
}

legend {
    padding: 0 8px;

    font-weight: bold;
    color: #2563eb;
}

label {
    display: block;
    margin-top: 12px;
    margin-bottom: 6px;
}

input:not([type="radio"]),
select,
textarea {
    width: 100%;
    padding: 12px;

    border: 1px solid #cccccc;
    border-radius: 6px;

    font: inherit;
}

textarea {
    resize: vertical;
}

.grupo-opcoes label {
    display: flex;
    align-items: center;
    gap: 8px;
}

input:focus-visible,
select:focus-visible,
textarea:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
}

.botoes {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

button {
    padding: 12px 20px;

    border: none;
    border-radius: 6px;

    background-color: #2563eb;
    color: white;

    cursor: pointer;
    font: inherit;
}

button[type="reset"] {
    background-color: #64748b;
}

button:focus-visible {
    outline: 3px solid #f59e0b;
    outline-offset: 3px;
}

#mensagem {
    font-weight: bold;
}
```

### JavaScript — `script.js`

```js
const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const dados = new FormData(formulario);

    const nome = dados.get("nome").trim();
    const email = dados.get("email").trim();
    const curso = dados.get("curso");
    const modalidade = dados.get("modalidade");

    if (!nome || !email || !curso || !modalidade) {
        mensagem.textContent = "Preencha os campos obrigatórios.";
        return;
    }

    console.log({
        nome,
        email,
        curso,
        modalidade,
        nascimento: dados.get("nascimento"),
        observacoes: dados.get("observacoes"),
        origem: dados.get("origem")
    });

    mensagem.textContent =
        `Inscrição de ${nome} preenchida com sucesso!`;

    // Este exemplo não envia os dados para um servidor.
});

formulario.addEventListener("reset", () => {
    mensagem.textContent = "";
});
```

### Conceitos aplicados

| Conceito | Aplicação |
|---|---|
| `<form>` | Estrutura do formulário |
| `<fieldset>` | Agrupamento dos campos |
| `<legend>` | Identificação dos grupos |
| `<label>` | Descrição dos campos |
| `input type="text"` | Nome |
| `input type="email"` | E-mail |
| `input type="date"` | Data de nascimento |
| `input type="hidden"` | Origem da inscrição |
| `<select>` | Seleção do curso |
| `input type="radio"` | Seleção da modalidade |
| `<textarea>` | Observações |
| `submit` | Processamento do formulário |
| `reset` | Reposição dos valores |
| `FormData` | Leitura dos dados |
| `preventDefault()` | Impede o envio tradicional |
| `addEventListener()` | Tratamento de eventos |

**Importante:** este exemplo apenas recolhe e apresenta os dados no navegador. Para realizar uma inscrição real, seria necessário implementar a comunicação com um backend e validar os dados no servidor.

---

## 6. Boas Práticas na Criação de Formulários

### Utilizar Labels

Todos os campos devem possuir identificações claras.

O placeholder não substitui um label.

### Agrupar Campos Relacionados

Utilizar `<fieldset>` e `<legend>` quando existir uma relação lógica entre os campos.

### Utilizar Tipos Adequados

Preferir tipos específicos como:

- `email`.
- `date`.
- `number`.
- `tel`.
- `password`.

Isso melhora a experiência do utilizador e permite aproveitar funcionalidades nativas do navegador.

### Validar Dados

Utilizar validações HTML e JavaScript quando apropriado.

A validação no backend continua indispensável.

### Não Confiar em Campos Hidden

Os valores ocultos podem ser modificados pelo utilizador.

### Garantir Acessibilidade

Manter:

- Labels associados.
- Foco visível.
- Ordem lógica dos campos.
- Mensagens de erro claras.
- Navegação por teclado.

### Evitar Formulários Excessivamente Longos

Quando existirem muitos campos, organizar por grupos ou etapas para facilitar o preenchimento.

### Proteger Dados Sensíveis

Utilizar HTTPS e implementar mecanismos de segurança apropriados no servidor.

---

## Resumo em uma frase

> Os formulários HTML permitem recolher informações dos utilizadores através de elementos como `<input>` e `<textarea>`, listas de seleção com `<select>` e `<option>`, agrupamentos com `<fieldset>` e `<legend>`, campos identificados por `<label>` e tipos específicos como `hidden`, `email` e `date`, enquanto botões `submit`, `reset` e `button` permitem controlar diferentes ações, sendo fundamentais para desenvolver interfaces de cadastro, autenticação, pesquisa e comunicação com sistemas backend.

---

## Conceitos Relacionados para Estudar a Seguir

- **Validação de Formulários** — aprofundar as validações HTML e JavaScript.
- **Constraint Validation API** — utilizar métodos nativos de validação.
- **FormData** — recolher dados dos formulários com JavaScript.
- **Eventos de Formulário** — estudar `submit`, `input`, `change` e `reset`.
- **Fetch API** — enviar dados para servidores.
- **Autenticação** — implementar processos de login.
- **Acessibilidade Web** — desenvolver formulários acessíveis.
- **CSS Forms** — personalizar campos e botões.
- **Segurança Web** — compreender validação no servidor, CSRF e XSS.
- **UX Design** — melhorar a experiência de preenchimento.

---

## Referências para Estudo

- [MDN — HTML Forms](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms)
- [MDN — Form](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/form)
- [MDN — Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input)
- [MDN — Textarea](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/textarea)
- [MDN — Select](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select)
- [MDN — Fieldset](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/fieldset)
- [MDN — Button](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)
- [W3C WAI — Forms Tutorial](https://www.w3.org/WAI/tutorials/forms/)
