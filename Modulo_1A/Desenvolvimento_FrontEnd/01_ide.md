
# IDE — Ambiente de Desenvolvimento Integrado

---

## 1. Exemplos de IDEs

### O que é uma IDE?

Uma **IDE (Integrated Development Environment)**, ou **Ambiente de Desenvolvimento Integrado**, é uma aplicação que reúne ferramentas para facilitar a criação, execução, depuração e manutenção de software.

Geralmente, uma IDE oferece:

- Editor de código.
- Destaque de sintaxe.
- Autocompletar.
- Ferramentas de depuração.
- Integração com sistemas de versionamento.
- Terminal e ferramentas de execução.
- Gestão de projetos.

O objetivo é permitir que o programador realize diferentes atividades de desenvolvimento num ambiente centralizado.

### IDE vs. Editor de Código

Embora sejam utilizados para finalidades semelhantes, existem diferenças entre IDEs completas e editores de código.

| IDE | Editor de Código |
|---|---|
| Ambiente com ferramentas integradas | Focado principalmente na edição |
| Pode incluir compiladores e depuradores | Pode necessitar de ferramentas adicionais |
| Geralmente possui funcionalidades específicas para determinadas linguagens | Frequentemente é mais leve e flexível |
| Exemplo: IntelliJ IDEA | Exemplo: Visual Studio Code |

**Importante:** o VS Code é tecnicamente um editor de código extensível, mas pode funcionar como um ambiente de desenvolvimento bastante completo através de extensões e ferramentas integradas.

### Principais IDEs e Editores

| Ferramenta | Utilização |
|---|---|
| Visual Studio Code | Desenvolvimento web e múltiplas linguagens |
| WebStorm | Desenvolvimento JavaScript e TypeScript |
| IntelliJ IDEA | Desenvolvimento Java e outras linguagens |
| Visual Studio | Desenvolvimento .NET, C# e outras tecnologias |
| PyCharm | Desenvolvimento Python |
| Eclipse | Desenvolvimento Java e outras linguagens |
| Android Studio | Desenvolvimento Android |

### Visual Studio Code

O **Visual Studio Code (VS Code)** é um editor de código desenvolvido pela Microsoft.

É utilizado no desenvolvimento frontend porque oferece suporte a:

- HTML.
- CSS.
- JavaScript.
- TypeScript.
- JSON.
- Git.
- Node.js.

Entre as suas características estão o terminal integrado, a depuração e um sistema de extensões.

### WebStorm

O **WebStorm**, desenvolvido pela JetBrains, é uma IDE especializada em JavaScript e TypeScript.

Oferece funcionalidades integradas para:

- Análise de código.
- Refatoração.
- Depuração.
- Integração com Git.
- Desenvolvimento com frameworks frontend.

### Qual ferramenta escolher?

Para iniciar os estudos de desenvolvimento frontend, o VS Code é uma opção prática devido à sua flexibilidade e ao suporte nativo às tecnologias web.

Entretanto, a escolha depende das necessidades do projeto, das ferramentas utilizadas pela equipa e das preferências do programador.

---

## 2. Por que Fazer uma Configuração Inicial?

### O que é a configuração inicial?

A **configuração inicial do ambiente de desenvolvimento** consiste em preparar o editor, as ferramentas e as preferências necessárias antes de iniciar um projeto.

Uma configuração adequada ajuda a evitar problemas e torna o processo de desenvolvimento mais organizado.

### Principais benefícios

- Melhor produtividade.
- Padronização do código.
- Identificação antecipada de erros.
- Organização dos ficheiros.
- Integração com Git.
- Facilidade de execução e depuração.

### Instalação do VS Code

Para instalar o Visual Studio Code:

1. Aceder ao site oficial: https://code.visualstudio.com/
2. Escolher a versão compatível com o sistema operativo.
3. Executar o instalador.
4. Concluir a instalação.
5. Abrir o programa.

### Configurações recomendadas

Algumas configurações podem facilitar o desenvolvimento.

| Configuração | Finalidade |
|---|---|
| Auto Save | Guardar alterações automaticamente |
| Format On Save | Formatar o código ao guardar |
| Word Wrap | Quebrar linhas longas visualmente |
| Tab Size | Definir a indentação |
| Font Size | Ajustar o tamanho do texto |
| Theme | Personalizar a aparência |

### Configuração do `settings.json`

O VS Code permite personalizar preferências através do ficheiro `settings.json`.

**Exemplo:**

```json id="zg9dgm"
{
    "editor.fontSize": 14,
    "editor.tabSize": 4,
    "editor.wordWrap": "on",
    "editor.formatOnSave": true,
    "files.autoSave": "afterDelay"
}
```

Neste exemplo:

- `fontSize`: define o tamanho da fonte.
- `tabSize`: define o tamanho visual da indentação.
- `wordWrap`: ativa a quebra visual de linhas.
- `formatOnSave`: ativa a formatação ao guardar, quando existe um formatador configurado.
- `autoSave`: guarda automaticamente depois de um intervalo.

### Configuração do terminal

O terminal integrado permite executar comandos sem sair do VS Code.

Podemos abri-lo através do menu:

```text id="vk8pgf"
Terminal → New Terminal
```

Atalho comum no Windows:

```text id="ce1k15"
Ctrl + `
```

No terminal, podemos executar comandos como:

```bash id="ho9dze"
node --version
```

O comando verifica a versão instalada do Node.js.

Também podemos verificar a instalação do Git:

```bash id="89pfcg"
git --version
```

### Configuração do Git

O Git permite acompanhar alterações no código e trabalhar com repositórios.

Após a instalação, podemos configurar o nome e o e-mail associados aos commits.

```bash id="uo6zer"
git config --global user.name "Seu Nome"

git config --global user.email "seu-email@exemplo.com"
```

Para consultar a configuração:

```bash id="3kwd8w"
git config --global --list
```

### Organização inicial do projeto

É recomendável criar uma estrutura de pastas clara.

**Exemplo:**

```text id="7cq9a3"
meu-site/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── imagens/
└── README.md
```

Essa separação facilita a localização e manutenção dos ficheiros.

---

## 3. Interface

### Conhecendo a interface do VS Code

A interface do VS Code é composta por diferentes áreas que auxiliam no desenvolvimento.

### Principais componentes

| Componente | Função |
|---|---|
| Activity Bar | Acesso às principais áreas |
| Explorer | Navegação pelos ficheiros |
| Editor | Edição do código |
| Panel | Terminal, problemas e saídas |
| Status Bar | Informações do projeto |
| Command Palette | Execução rápida de comandos |

### Activity Bar

A **Activity Bar** apresenta os ícones utilizados para aceder às principais funcionalidades.

Entre elas:

- Explorer.
- Search.
- Source Control.
- Run and Debug.
- Extensions.

### Explorer

O **Explorer** permite navegar pelos diretórios e ficheiros do projeto.

Também podemos:

- Criar ficheiros.
- Criar pastas.
- Renomear elementos.
- Mover ficheiros.
- Eliminar ficheiros.

### Editor

O **Editor** é a área principal onde escrevemos e modificamos o código.

Oferece recursos como:

- Destaque de sintaxe.
- Numeração de linhas.
- Sugestões automáticas.
- Identificação de determinados erros.
- Formatação.

### Terminal Integrado

O terminal permite executar comandos diretamente no ambiente de desenvolvimento.

**Exemplo:**

```bash id="z24k0a"
node script.js
```

Esse comando executa o ficheiro JavaScript utilizando Node.js, desde que esteja instalado.

### Source Control

A área **Source Control** permite trabalhar com o Git através de uma interface visual.

Podemos:

- Visualizar ficheiros alterados.
- Preparar alterações.
- Criar commits.
- Consultar diferenças.
- Sincronizar alterações com repositórios remotos.

### Run and Debug

A área **Run and Debug** permite executar e depurar aplicações.

Uma das funcionalidades mais importantes é o **breakpoint**.

Um breakpoint interrompe temporariamente a execução numa determinada linha, permitindo analisar:

- Valores das variáveis.
- Fluxo de execução.
- Chamadas de funções.
- Possíveis causas de erros.

### Command Palette

A **Command Palette** permite procurar e executar comandos do VS Code.

Atalho comum:

```text id="n2l58d"
Ctrl + Shift + P
```

Podemos utilizá-la para:

- Alterar o tema.
- Formatar um documento.
- Abrir configurações.
- Executar comandos de extensões.
- Gerir funcionalidades do editor.

### Atalhos úteis

| Atalho (Windows) | Função |
|---|---|
| `Ctrl + S` | Guardar ficheiro |
| `Ctrl + Shift + P` | Abrir Command Palette |
| `Ctrl + P` | Procurar ficheiros |
| `Ctrl + /` | Comentar ou descomentar linhas |
| `Ctrl + F` | Procurar texto |
| `Ctrl + H` | Substituir texto |
| `Ctrl + Shift + F` | Pesquisar em vários ficheiros |
| `F5` | Iniciar depuração, conforme configuração |

Os atalhos podem variar conforme o sistema operativo e as personalizações realizadas.

### Exemplo prático — criando um projeto

No VS Code:

1. Criar uma pasta chamada `primeiro-site`.
2. Abrir a pasta através de **File → Open Folder**.
3. Criar um ficheiro `index.html`.
4. Escrever a estrutura HTML.
5. Guardar o ficheiro.
6. Abrir a página no navegador.

**Exemplo:**

```html id="ho3jf2"
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Site</title>
</head>
<body>

    <h1>Olá, mundo!</h1>

    <p>Desenvolvendo com VS Code.</p>

</body>
</html>
```

---

## 4. Extensões

### O que são extensões?

As **extensões (Extensions)** são componentes adicionais que permitem expandir as funcionalidades do VS Code.

Podem oferecer:

- Suporte a linguagens.
- Formatação automática.
- Identificação de erros.
- Pré-visualização de páginas.
- Ferramentas de depuração.
- Integração com serviços externos.

### Como instalar extensões

No VS Code:

1. Abrir a área **Extensions**.
2. Pesquisar pelo nome da extensão.
3. Verificar o fornecedor.
4. Selecionar **Install**.
5. Configurar a extensão, quando necessário.

Atalho comum:

```text id="po2uqh"
Ctrl + Shift + X
```

### Extensões úteis para Frontend

| Extensão | Finalidade |
|---|---|
| Live Server | Executar um servidor local para visualizar páginas |
| Prettier | Formatação automática de código |
| ESLint | Identificação de problemas e aplicação de regras |
| Auto Rename Tag | Renomear tags HTML relacionadas |
| Path Intellisense | Sugestões de caminhos de ficheiros |
| GitLens | Exploração avançada do histórico Git |
| Error Lens | Destacar diagnósticos diretamente no editor |

**Importante:** algumas funcionalidades já existem nativamente no VS Code, e a necessidade de instalar extensões depende das versões e configurações utilizadas.

### Live Server

A extensão **Live Server** permite executar um servidor local para visualizar páginas durante o desenvolvimento.

Uma das suas vantagens é atualizar a página automaticamente quando os ficheiros são modificados.

É especialmente útil para projetos com HTML, CSS e JavaScript.

### Prettier

O **Prettier** é uma ferramenta de formatação de código.

Ajuda a manter um estilo consistente no projeto.

**Exemplo antes da formatação:**

```js id="d4shc1"
function somar(a,b){return a+b}
```

**Depois da formatação:**

```js id="iz3fu2"
function somar(a, b) {
    return a + b;
}
```

### ESLint

O **ESLint** é uma ferramenta de análise estática utilizada para identificar possíveis problemas e aplicar regras de qualidade em JavaScript.

Pode ajudar a detetar:

- Variáveis não utilizadas.
- Problemas de estilo.
- Padrões potencialmente incorretos.
- Violações de regras estabelecidas pela equipa.

### Prettier vs. ESLint

| Prettier | ESLint |
|---|---|
| Formata o código | Analisa o código |
| Padroniza espaçamentos e quebras | Identifica problemas e regras violadas |
| Foco na apresentação do código | Foco em qualidade e consistência |
| Pode funcionar em conjunto com ESLint | Pode funcionar em conjunto com Prettier |

### GitLens

O **GitLens** expande as funcionalidades de integração com Git.

Permite visualizar informações como:

- Histórico de alterações.
- Autores de commits.
- Diferenças entre versões.
- Histórico de linhas e ficheiros.

### Cuidados ao instalar extensões

Nem sempre instalar muitas extensões melhora a produtividade.

Algumas extensões podem:

- Consumir recursos.
- Criar conflitos.
- Apresentar funcionalidades repetidas.
- Solicitar permissões sensíveis.

**Boa prática:** instalar apenas extensões necessárias e verificar a origem e a reputação do fornecedor.

---

## 5. Boas Práticas na Utilização de IDEs

### Manter o ambiente atualizado

As atualizações podem corrigir falhas, melhorar o desempenho e acrescentar funcionalidades.

### Padronizar a formatação

Em projetos colaborativos, é importante seguir um padrão de escrita.

Ferramentas como Prettier e ESLint ajudam a manter essa consistência.

### Utilizar o Git desde o início

O versionamento permite acompanhar alterações e recuperar versões anteriores.

### Organizar o projeto

Manter ficheiros e diretórios com nomes descritivos.

### Utilizar ferramentas de depuração

Em vez de depender exclusivamente de `console.log()`, aprender a utilizar breakpoints e o depurador.

### Evitar extensões desnecessárias

Manter o ambiente simples e adequado às necessidades do projeto.

---

## 6. Exercícios para Praticar

### Exercício 1 — Identificar IDEs

Pesquise três IDEs ou editores de código e descreva:

- Linguagens suportadas.
- Principais funcionalidades.
- Utilização mais comum.

### Exercício 2 — Configurar o VS Code

Abra as configurações do VS Code e personalize:

1. Tema.
2. Tamanho da fonte.
3. Indentação.
4. Quebra de linhas.
5. Salvamento automático.

### Exercício 3 — Explorar a interface

Identifique no VS Code:

- Explorer.
- Source Control.
- Run and Debug.
- Extensions.
- Terminal.

Explique a finalidade de cada área.

### Exercício 4 — Criar uma página HTML

Crie um projeto com os ficheiros:

```text id="t7tk48"
projeto/
├── index.html
├── style.css
└── script.js
```

Ligue os três ficheiros e apresente uma mensagem no navegador.

### Exercício 5 — Instalar extensões

Instale uma extensão de formatação e uma extensão de pré-visualização de páginas.

Teste as funcionalidades num projeto HTML.

### Exercício 6 — Utilizar Git

Inicialize um repositório no VS Code, adicione os ficheiros e crie um commit.

---

## Resumo em uma frase

> Uma IDE é um ambiente que reúne ferramentas para facilitar o desenvolvimento de software, oferecendo recursos de edição, execução, depuração e versionamento, enquanto a configuração inicial, o conhecimento da interface e a utilização adequada de extensões, como Prettier, ESLint e Live Server, contribuem para melhorar a produtividade, a organização e a qualidade dos projetos frontend.

---

## Conceitos Relacionados para Estudar a Seguir

- **HTML5** — estruturar páginas web.
- **CSS3** — criar estilos e layouts.
- **JavaScript** — implementar interatividade.
- **Git e GitHub** — controlar versões e colaborar em projetos.
- **Node.js e npm** — executar JavaScript e gerir dependências.
- **Debugging** — identificar e corrigir erros.
- **ESLint e Prettier** — padronizar e analisar código.
- **DevTools** — inspecionar páginas e analisar requisições.
- **Terminal** — executar comandos e automatizar tarefas.

---

## Referências para Estudo

- [Visual Studio Code — Documentação Oficial](https://code.visualstudio.com/docs)
- [Visual Studio Code — Extensões](https://code.visualstudio.com/docs/configure/extensions/extension-marketplace)
- [WebStorm — Documentação Oficial](https://www.jetbrains.com/webstorm/)
- [Prettier — Documentação Oficial](https://prettier.io/)
- [ESLint — Documentação Oficial](https://eslint.org/)
- [Git — Documentação Oficial](https://git-scm.com/doc)
