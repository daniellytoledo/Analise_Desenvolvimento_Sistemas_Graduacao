
# Desenvolvimento Dinâmico

---

## 1. Conceito de Desenvolvimento Dinâmico

### O que é Desenvolvimento Dinâmico?

O **desenvolvimento dinâmico** consiste na criação de aplicações e páginas web capazes de apresentar conteúdos e comportamentos que se alteram de acordo com as interações dos utilizadores, dados recebidos ou determinadas condições do sistema.

Diferentemente de uma página que apresenta apenas conteúdos fixos, uma aplicação dinâmica pode atualizar informações, processar formulários e comunicar com servidores sem necessitar de recarregar toda a página.

### Páginas Estáticas vs. Páginas Dinâmicas

| Página Estática | Página Dinâmica |
|---|---|
| Conteúdo geralmente fixo | Conteúdo pode ser atualizado |
| Pouca interação | Maior interatividade |
| Pode utilizar apenas HTML e CSS | Pode utilizar JavaScript e backend |
| Alterações frequentemente exigem modificar o conteúdo original | Pode atualizar dados automaticamente |
| Exemplo: página informativa simples | Exemplo: sistema de reservas |

Uma página estática também pode conter JavaScript e funcionalidades interativas. A principal diferença está na forma como o conteúdo é produzido e atualizado.

### Tecnologias utilizadas

O desenvolvimento web dinâmico combina diferentes tecnologias.

**Frontend:**

- HTML — estrutura e conteúdo.
- CSS — aparência e layout.
- JavaScript — comportamentos e interações.

**Backend:**

- Node.js.
- PHP.
- Python.
- Java.
- Outras linguagens e plataformas de servidor.

**Comunicação e dados:**

- APIs REST.
- HTTP.
- JSON.
- Bases de dados.

### Funcionamento de uma aplicação dinâmica

```text
                 UTILIZADOR
                     |
                     v
                  FRONTEND
              HTML / CSS / JS
                     |
                     v
              Evento / Interação
                     |
                     v
                JavaScript
                     |
             +-------+-------+
             |               |
             v               v
        Atualizar DOM    Requisição API
             |               |
             |               v
             |            BACKEND
             |               |
             |               v
             |          BASE DE DADOS
             |               |
             +-------+-------+
                     |
                     v
             Atualizar Interface
```

### Exemplo prático

Imagine uma aplicação de gestão de tarefas.

O utilizador pode:

1. Adicionar uma tarefa.
2. Marcar uma tarefa como concluída.
3. Remover tarefas.
4. Consultar tarefas guardadas num servidor.

Essas funcionalidades podem ser implementadas utilizando JavaScript, manipulação do DOM, eventos e APIs.

**Exemplo simples:**

```html
<button id="botao">Atualizar mensagem</button>

<p id="mensagem">Mensagem original</p>

<script src="script.js" defer></script>
```

**JavaScript — `script.js`:**

```js
const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
    mensagem.textContent = "Conteúdo atualizado dinamicamente!";
});
```

Neste exemplo, o JavaScript modifica o conteúdo da página em resposta a um evento, sem recarregar o documento.

---

## 2. Frameworks e Bibliotecas JavaScript

### O que são bibliotecas?

Uma **biblioteca (Library)** é um conjunto de funções, componentes ou ferramentas reutilizáveis que facilitam a implementação de determinadas funcionalidades.

Normalmente, o programador controla quando e como utiliza a biblioteca.

### O que são frameworks?

Um **framework** é uma estrutura que disponibiliza ferramentas, convenções e mecanismos para organizar o desenvolvimento de aplicações.

Geralmente, define uma arquitetura ou um fluxo de trabalho que orienta como o código deve ser desenvolvido.

### Biblioteca vs. Framework

| Biblioteca | Framework |
|---|---|
| Oferece funcionalidades reutilizáveis | Fornece uma estrutura de desenvolvimento |
| O programador decide quando utilizá-la | Define convenções para organizar o projeto |
| Pode ter um propósito específico | Pode integrar diferentes funcionalidades |
| Exemplo: React | Exemplo: Angular |

A distinção nem sempre é rígida. Algumas ferramentas combinam características de bibliotecas e frameworks.

### React

O **React** é uma biblioteca JavaScript utilizada para construir interfaces de utilizador baseadas em componentes.

Os componentes permitem dividir uma interface em partes reutilizáveis.

**Exemplo:**

```jsx
function Saudacao() {
    return <h1>Olá, mundo!</h1>;
}

export default Saudacao;
```

Neste exemplo, criámos um componente que apresenta um título.

**Principais características:**

- Desenvolvimento baseado em componentes.
- Reutilização de interfaces.
- Gestão de estado.
- Atualização declarativa da interface.
- Integração com diferentes ferramentas.

O React utiliza frequentemente JSX, uma extensão de sintaxe que permite escrever estruturas semelhantes a HTML dentro do JavaScript.

### Angular

O **Angular** é um framework utilizado para desenvolver aplicações web.

É especialmente associado à construção de aplicações estruturadas e utiliza TypeScript como linguagem principal.

**Principais características:**

- Arquitetura baseada em componentes.
- Injeção de dependências.
- Sistema de rotas.
- Ferramentas para formulários.
- Organização de aplicações complexas.

É uma opção frequente em sistemas empresariais.

### Vue.js

O **Vue.js** é um framework JavaScript progressivo para construir interfaces.

Permite utilizar funcionalidades de forma gradual, desde componentes simples até aplicações completas.

**Principais características:**

- Sintaxe acessível.
- Componentes reutilizáveis.
- Sistema de reatividade.
- Integração gradual.
- Ferramentas para aplicações de página única.

### Node.js

O **Node.js** não é um framework, mas sim um **ambiente de execução JavaScript** fora do navegador.

Permite desenvolver servidores, APIs e ferramentas de automação utilizando JavaScript.

**Exemplo:**

```js
console.log("JavaScript executado com Node.js!");
```

Podemos executar este código através do terminal:

```bash
node app.js
```

### Express.js

O **Express.js** é um framework minimalista para aplicações web e APIs executadas em Node.js.

**Exemplo:**

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        mensagem: "Olá, API!"
    });
});

app.listen(3000, () => {
    console.log("Servidor iniciado na porta 3000");
});
```

Esse exemplo pressupõe que o Express já esteja instalado no projeto.

### Next.js e NestJS

Outras ferramentas importantes do ecossistema JavaScript incluem:

**Next.js**

Framework baseado em React, utilizado para criar aplicações web com recursos como renderização no servidor, geração estática e organização de rotas.

**NestJS**

Framework para desenvolvimento backend com Node.js, frequentemente utilizado com TypeScript. Oferece uma arquitetura modular, controladores, serviços e injeção de dependências.

### Comparativo das tecnologias

| Tecnologia | Categoria | Utilização principal |
|---|---|---|
| React | Biblioteca | Interfaces frontend |
| Angular | Framework | Aplicações web |
| Vue.js | Framework | Interfaces frontend |
| Next.js | Framework | Aplicações React |
| Node.js | Ambiente de execução | JavaScript no servidor |
| Express.js | Framework | APIs e servidores |
| NestJS | Framework | Backend estruturado |

### É necessário utilizar frameworks?

Não necessariamente.

Aplicações simples podem ser desenvolvidas utilizando apenas HTML, CSS e JavaScript.

Os frameworks tornam-se especialmente úteis quando existem:

- Muitos componentes.
- Interfaces complexas.
- Vários estados de aplicação.
- Equipas de desenvolvimento.
- Necessidade de manutenção e expansão.

A escolha depende das características do projeto.

---

## 3. Importância do Desenvolvimento Dinâmico

### Experiência do Utilizador

O desenvolvimento dinâmico permite criar interfaces mais interativas.

Exemplos:

- Mensagens de validação.
- Pesquisas com resultados atualizados.
- Formulários dinâmicos.
- Carrinhos de compras.
- Notificações.
- Atualização de dados sem recarregar a página.

### Integração entre sistemas

Uma aplicação dinâmica pode comunicar com diferentes serviços através de APIs.

**Exemplo:**

Um sistema de reservas pode consultar uma API para verificar quais horários estão disponíveis e atualizar a interface conforme a resposta recebida.

```js
async function consultarReservas() {
    try {
        const resposta = await fetch("/api/reservas");

        if (!resposta.ok) {
            throw new Error("Erro ao consultar reservas.");
        }

        const reservas = await resposta.json();

        console.log(reservas);

    } catch (erro) {
        console.error(erro.message);
    }
}
```

Neste exemplo, `/api/reservas` representa um endpoint de um backend que precisaria existir para o código funcionar.

### Reutilização de código

Frameworks e bibliotecas permitem desenvolver componentes reutilizáveis.

Por exemplo, um componente de botão pode ser utilizado em diversas páginas.

Isso facilita:

- Manutenção.
- Padronização visual.
- Correção de erros.
- Evolução das funcionalidades.

### Escalabilidade e manutenção

A utilização de boas práticas e arquiteturas organizadas ajuda a desenvolver aplicações que podem evoluir com o tempo.

Entretanto, a utilização de um framework não garante automaticamente escalabilidade ou qualidade.

Também são necessários:

- Organização de código.
- Testes automatizados.
- Segurança.
- Monitorização.
- Gestão de dependências.
- Boas práticas de desenvolvimento.

### Desenvolvimento Full Stack

O desenvolvimento dinâmico também está relacionado com o conceito de **Full Stack**, que envolve conhecimentos tanto de frontend como de backend.

```text
               FULL STACK
                    |
           +--------+--------+
           |                 |
           v                 v
        FRONTEND           BACKEND
           |                 |
      HTML / CSS         Node.js
      JavaScript         APIs
      React / Vue        Regras de negócio
           |                 |
           +--------+--------+
                    |
                    v
               BASE DE DADOS
```

O JavaScript possui destaque nesse contexto porque pode ser utilizado tanto no navegador como no servidor.

---

## 4. Tendências de Mercado

O desenvolvimento web está em constante evolução, com novas ferramentas e abordagens para melhorar produtividade, desempenho e manutenção.

As tendências devem ser analisadas considerando tanto a adoção das tecnologias como as necessidades reais dos projetos.

### 4.1 Utilização de frameworks modernos

React, Angular e Vue continuam a fazer parte das tecnologias utilizadas no desenvolvimento frontend.

Segundo o **Stack Overflow Developer Survey 2026**, entre os participantes que responderam à pergunta sobre tecnologias web utilizadas no último ano, destacaram-se:

| Tecnologia | Percentual dos respondentes |
|---|---:|
| Node.js | 46,4% |
| React | 41,5% |
| Next.js | 20,6% |
| Vue.js | 17,2% |
| Angular | 16,0% |

**Fonte:** [Stack Overflow Developer Survey 2026 — Web Frameworks](https://survey.stackoverflow.co/2026/technology/data/web-framework).

Esses números representam respostas de participantes do levantamento, não a percentagem de empresas que utilizam cada tecnologia nem uma medição direta de vagas de emprego.

### 4.2 Crescimento da utilização de TypeScript

O **TypeScript** é uma linguagem baseada em JavaScript que acrescenta um sistema de tipos estáticos.

Exemplo em TypeScript:

```ts
function somar(a: number, b: number): number {
    return a + b;
}

console.log(somar(10, 5));
```

A tipagem permite identificar determinados problemas durante o desenvolvimento, antes da execução do código.

O TypeScript é frequentemente utilizado com:

- Angular.
- React.
- Node.js.
- Next.js.
- NestJS.

É particularmente relevante em projetos de maior dimensão, nos quais a manutenção e a colaboração entre programadores são importantes.

### 4.3 Aplicações Full Stack

O desenvolvimento Full Stack continua a ser uma competência relevante, especialmente em projetos que exigem integração entre frontend, backend e bases de dados.

Uma combinação possível é:

```text
           FRONTEND
          React / Next.js
                |
                v
              API
                |
                v
           Node.js
          Express / NestJS
                |
                v
           PostgreSQL
```

Outras combinações também são utilizadas, incluindo backends desenvolvidos em Java, Python, PHP ou C#.

### 4.4 Server-Side Rendering e Static Generation

Aplicações modernas podem combinar diferentes estratégias de apresentação de conteúdos.

**Client-Side Rendering (CSR)**

O navegador executa JavaScript para produzir ou atualizar partes da interface.

**Server-Side Rendering (SSR)**

O servidor produz HTML em resposta a uma requisição.

**Static Site Generation (SSG)**

O conteúdo HTML é gerado antecipadamente, normalmente durante o processo de construção da aplicação.

| Estratégia | Característica |
|---|---|
| CSR | Renderização predominantemente no cliente |
| SSR | HTML produzido no servidor por requisição |
| SSG | HTML gerado antecipadamente |

Frameworks como Next.js permitem combinar estratégias diferentes conforme as necessidades da aplicação.

### 4.5 Integração com Inteligência Artificial

A inteligência artificial está a ser integrada em diferentes etapas do desenvolvimento de software.

Exemplos:

- Assistentes de programação.
- Geração de testes.
- Análise de código.
- Apoio à documentação.
- Chatbots integrados em aplicações.
- Funcionalidades inteligentes baseadas em APIs.

Entretanto, o código produzido com assistência de IA continua a necessitar de revisão, validação e testes.

### 4.6 Testes Automatizados e Qualidade

A qualidade do software também é uma preocupação importante no desenvolvimento dinâmico.

As aplicações podem utilizar diferentes níveis de testes.

| Tipo | Finalidade |
|---|---|
| Unitários | Verificar funções ou unidades isoladas |
| Integração | Verificar a comunicação entre componentes |
| End-to-End (E2E) | Simular fluxos completos do utilizador |
| Testes de API | Validar endpoints e respostas |
| Testes de acessibilidade | Identificar barreiras de utilização |

Ferramentas como **Vitest, Jest, Playwright e Cypress** podem ser utilizadas em diferentes estratégias de teste no ecossistema JavaScript.

### 4.7 Acessibilidade, desempenho e segurança

O mercado também valoriza a capacidade de desenvolver aplicações acessíveis, rápidas e seguras.

Alguns conceitos importantes incluem:

- **WCAG:** diretrizes de acessibilidade web.
- **Core Web Vitals:** métricas de experiência e desempenho.
- **CORS:** mecanismo de controlo de acesso entre origens.
- **XSS:** vulnerabilidade associada à execução de conteúdo malicioso.
- **Autenticação e autorização:** mecanismos de proteção de recursos.
- **Responsividade:** adaptação a diferentes dispositivos.

### Competências importantes para um desenvolvedor JavaScript

Para iniciar uma trajetória profissional no desenvolvimento web, é recomendável consolidar os fundamentos antes de depender exclusivamente de frameworks.

**Sequência sugerida:**

```text
        HTML + CSS
             |
             v
     JavaScript Básico
             |
             v
       DOM e Eventos
             |
             v
     JSON + Fetch API
             |
             v
    Promises + Async/Await
             |
             v
         TypeScript
             |
       +-----+-----+
       |           |
       v           v
     React       Node.js
       |           |
       v           v
    Next.js    Express/NestJS
       |           |
       +-----+-----+
             |
             v
       Testes + Git
             |
             v
       Projeto Full Stack
```

Esta sequência representa uma sugestão de aprendizagem, não uma ordem obrigatória.

---

## 5. Exemplo Prático — Aplicação Dinâmica

Vamos utilizar alguns dos conceitos estudados ao longo da disciplina para criar uma página que consulta uma API e apresenta informações dinamicamente.

### HTML — `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Desenvolvimento Dinâmico</title>

    <script src="script.js" defer></script>
</head>
<body>

    <main>
        <h1>Publicações</h1>

        <button id="carregar" type="button">
            Carregar publicações
        </button>

        <p id="mensagem" role="status"></p>

        <ul id="lista"></ul>
    </main>

</body>
</html>
```

### JavaScript — `script.js`

```js
const botao = document.getElementById("carregar");
const lista = document.getElementById("lista");
const mensagem = document.getElementById("mensagem");

async function carregarPublicacoes() {
    botao.disabled = true;
    mensagem.textContent = "Carregando...";
    lista.replaceChildren();

    try {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!resposta.ok) {
            throw new Error(`Erro HTTP: ${resposta.status}`);
        }

        const publicacoes = await resposta.json();

        publicacoes.slice(0, 5).forEach(publicacao => {
            const item = document.createElement("li");

            const titulo = document.createElement("h2");
            titulo.textContent = publicacao.title;

            const conteudo = document.createElement("p");
            conteudo.textContent = publicacao.body;

            item.append(titulo, conteudo);

            lista.appendChild(item);
        });

        mensagem.textContent = "Publicações carregadas!";

    } catch (erro) {
        console.error(erro);

        mensagem.textContent = "Erro ao carregar publicações.";

    } finally {
        botao.disabled = false;
    }
}

botao.addEventListener("click", carregarPublicacoes);
```

### Conceitos utilizados

| Conceito | Aplicação |
|---|---|
| HTML | Estrutura da página |
| JavaScript | Comportamento dinâmico |
| DOM | Manipulação dos elementos |
| Eventos | Clique no botão |
| Fetch API | Comunicação com servidor |
| JSON | Formato dos dados recebidos |
| Async/Await | Operações assíncronas |
| Exceções | Tratamento de falhas |
| Arrays | Processamento das publicações |

Este exemplo demonstra como os conteúdos estudados ao longo da disciplina podem ser combinados numa aplicação funcional.

---

## Resumo em uma frase

> O desenvolvimento dinâmico consiste na criação de aplicações web capazes de atualizar conteúdos e responder às interações dos utilizadores através da combinação de HTML, CSS, JavaScript, DOM, eventos e APIs, podendo utilizar bibliotecas e frameworks como React, Angular, Vue.js, Next.js, Express e NestJS para organizar soluções mais complexas, enquanto tendências como TypeScript, arquiteturas Full Stack, inteligência artificial, testes automatizados, acessibilidade e desempenho influenciam a evolução das práticas de desenvolvimento web.

---

## Conceitos Relacionados para Estudar a Seguir

- **TypeScript** — adicionar tipagem estática ao desenvolvimento JavaScript.

- **React** — desenvolver interfaces com componentes reutilizáveis.

- **Node.js** — executar JavaScript no ambiente de servidor.

- **Express e NestJS** — construir APIs e aplicações backend.

- **Arquitetura Full Stack** — integrar frontend, backend e bases de dados.

- **Server-Side Rendering (SSR)** — compreender estratégias de renderização.

- **Testes Automatizados** — verificar qualidade e comportamento das aplicações.

- **CI/CD** — automatizar processos de integração, testes e entrega de software.

- **Segurança Web** — compreender vulnerabilidades e boas práticas de proteção.

- **Acessibilidade e Performance** — melhorar a experiência de utilização das aplicações.

---

## Referências para Estudo

- [MDN — Introdução aos Frameworks Frontend](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
- [MDN — JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [React — Documentação Oficial](https://react.dev/)
- [Angular — Documentação Oficial](https://angular.dev/)
- [Vue.js — Documentação Oficial](https://vuejs.org/)
- [Node.js — Documentação Oficial](https://nodejs.org/)
- [TypeScript — Documentação Oficial](https://www.typescriptlang.org/)
- [Stack Overflow Developer Survey 2026](https://survey.stackoverflow.co/2026/technology/data/web-framework)
