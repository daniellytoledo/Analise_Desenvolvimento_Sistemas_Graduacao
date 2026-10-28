
# Boas Práticas de Mercado no Desenvolvimento Dinâmico

---

## 1. Boas Práticas no Desenvolvimento Dinâmico

### O que são boas práticas?

As **boas práticas de desenvolvimento de software** são técnicas e recomendações utilizadas para produzir aplicações mais organizadas, seguras, confiáveis e fáceis de manter.

No desenvolvimento dinâmico, essas práticas são especialmente importantes porque as aplicações envolvem diferentes tecnologias, como HTML, CSS, JavaScript, APIs e bases de dados.

### Organização do código

Uma das principais recomendações é separar as responsabilidades de cada tecnologia.

- **HTML:** estrutura da página.
- **CSS:** apresentação visual.
- **JavaScript:** comportamento e interatividade.

**Exemplo de organização:**

```text
meu-projeto/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── imagens/
└── README.md
```

Essa organização facilita a manutenção e a localização dos ficheiros.

### Clean Code — Código Limpo

O conceito de **Clean Code** está relacionado com a escrita de código legível, compreensível e de fácil manutenção.

Algumas recomendações são:

- Utilizar nomes descritivos.
- Evitar duplicação de código.
- Criar funções com responsabilidades específicas.
- Manter uma formatação consistente.
- Evitar funções excessivamente longas.
- Escrever comentários quando acrescentam informações úteis.

**Exemplo pouco descritivo:**

```js
function calc(a, b) {
    return a * b;
}
```

**Exemplo mais claro:**

```js
function calcularSubtotal(preco, quantidade) {
    return preco * quantidade;
}
```

A segunda versão facilita a compreensão da finalidade da função.

### Princípio DRY

O princípio **DRY (Don't Repeat Yourself)** recomenda evitar a duplicação desnecessária de lógica.

**Exemplo:**

```js
function calcularDesconto(preco, percentual) {
    return preco - (preco * percentual / 100);
}

console.log(calcularDesconto(100, 10)); // 90
console.log(calcularDesconto(200, 20)); // 160
```

A mesma função pode ser utilizada em diferentes partes da aplicação.

### Tratamento de erros

As aplicações devem estar preparadas para lidar com situações inesperadas.

No JavaScript, podemos utilizar `try...catch`.

```js
async function carregarDados() {
    try {
        const resposta = await fetch("/api/dados");

        if (!resposta.ok) {
            throw new Error("Erro ao consultar a API.");
        }

        return await resposta.json();

    } catch (erro) {
        console.error(erro.message);
        throw erro;
    }
}
```

O tratamento de erros ajuda a identificar problemas e permite que a aplicação apresente mensagens adequadas.

### Segurança no desenvolvimento

A segurança deve ser considerada desde o início de um projeto.

Boas práticas incluem:

- Validar dados recebidos.
- Evitar inserir entradas não confiáveis diretamente em `innerHTML`.
- Proteger credenciais e informações sensíveis.
- Atualizar dependências.
- Utilizar HTTPS.
- Implementar autenticação e autorização quando necessário.

**Exemplo:**

```js
const mensagem = document.getElementById("mensagem");

mensagem.textContent = textoRecebido;
```

O uso de `textContent` é apropriado quando queremos apresentar dados externos como texto, reduzindo riscos de injeção de HTML.

### Ferramentas de padronização

| Ferramenta | Finalidade |
|---|---|
| ESLint | Identificar problemas e aplicar regras de código |
| Prettier | Padronizar a formatação |
| Git | Controlar versões |
| GitHub | Hospedar e colaborar em repositórios |
| VS Code | Editar e depurar código |
| npm | Gerir dependências JavaScript |

A utilização dessas ferramentas contribui para um fluxo de trabalho profissional.

---

## 2. Versionamento de Código

### O que é versionamento?

O **versionamento de código (Version Control)** consiste em registar e acompanhar as alterações realizadas nos ficheiros de um projeto.

Permite consultar versões anteriores, identificar modificações e colaborar com outros desenvolvedores.

Uma das ferramentas mais utilizadas é o **Git**.

### O que é Git?

O **Git** é um sistema de controlo de versões distribuído.

Permite:

- Registar alterações.
- Consultar o histórico.
- Recuperar versões anteriores.
- Criar ramificações de desenvolvimento.
- Combinar alterações.
- Colaborar com outros programadores.

### Git vs. GitHub

Embora estejam relacionados, Git e GitHub não são a mesma coisa.

| Git | GitHub |
|---|---|
| Sistema de controlo de versões | Plataforma de hospedagem e colaboração |
| Funciona localmente | Disponibiliza repositórios remotos |
| Regista alterações | Permite partilhar código e gerir projetos |
| Utiliza commits e branches | Disponibiliza Pull Requests e Issues |

Outras plataformas de hospedagem Git incluem GitLab e Forgejo.

### Comandos básicos do Git

**Inicializar um repositório:**

```bash
git init
```

**Verificar o estado dos ficheiros:**

```bash
git status
```

**Adicionar ficheiros à área de preparação:**

```bash
git add .
```

**Registar uma alteração:**

```bash
git commit -m "Adiciona estrutura inicial do projeto"
```

**Consultar o histórico:**

```bash
git log --oneline
```

### O que é um Commit?

Um **commit** representa um registo de alterações no histórico do repositório.

Cada commit possui informações como:

- Identificador.
- Autor.
- Data.
- Mensagem descritiva.
- Alterações registadas.

### Boas práticas de commits

As mensagens devem explicar claramente o que foi alterado.

**Exemplos:**

```bash
git commit -m "Adiciona formulário de cadastro"
git commit -m "Corrige validação de e-mail"
git commit -m "Implementa consumo da API de produtos"
git commit -m "Adiciona testes de autenticação"
```

É recomendável criar commits pequenos e relacionados com uma alteração específica.

### O que são Branches?

Uma **branch** é uma ramificação do histórico utilizada para desenvolver funcionalidades ou correções separadamente.

```text
             main
               |
          Commit inicial
               |
          +----+----+
          |         |
          v         v
        main     feature/login
          |         |
          |      Alterações
          |         |
          +----+----+
               |
               v
              merge
```

### Criando uma Branch

```bash
git switch -c feature/login
```

O comando cria uma branch e muda para ela.

Para consultar as branches:

```bash
git branch
```

Para regressar à branch principal:

```bash
git switch main
```

### Pull Requests

Um **Pull Request (PR)** é uma proposta de integração de alterações num repositório, utilizada em plataformas como GitHub.

Permite:

1. Apresentar as alterações.
2. Solicitar revisão.
3. Discutir melhorias.
4. Executar verificações automáticas.
5. Integrar o código após aprovação.

### Utilização do `.gitignore`

O ficheiro `.gitignore` permite indicar ficheiros e diretórios que o Git deve ignorar quando ainda não estão rastreados.

**Exemplo para Node.js:**

```gitignore
node_modules/
.env
dist/
coverage/
```

É importante evitar guardar ficheiros com senhas, tokens e outras credenciais no repositório.

O `.gitignore` não remove automaticamente ficheiros que já foram adicionados ao histórico.

---

## 3. Introdução de Testes e Qualidade

### O que são testes de software?

Os **testes de software (Software Testing)** são atividades utilizadas para verificar o comportamento de uma aplicação e identificar possíveis defeitos.

O objetivo é obter evidências de que o sistema funciona conforme os requisitos estabelecidos.

Os testes contribuem para:

- Identificar erros.
- Reduzir regressões.
- Melhorar a confiabilidade.
- Validar funcionalidades.
- Facilitar alterações futuras.

Entretanto, os testes não garantem a ausência completa de defeitos.

### Quality Assurance vs. Quality Control

É importante diferenciar dois conceitos.

**Quality Assurance (QA)**

Está relacionado com processos e práticas utilizados para prevenir problemas e melhorar a qualidade durante o desenvolvimento.

**Quality Control (QC)**

Está relacionado com atividades de verificação do produto para identificar problemas e avaliar a conformidade com os requisitos.

| QA | QC |
|---|---|
| Foco nos processos | Foco no produto |
| Prevenção de problemas | Identificação de defeitos |
| Melhoria contínua | Verificação dos resultados |
| Exemplo: definição de práticas de teste | Exemplo: execução de casos de teste |

### Principais tipos de testes

| Tipo | Finalidade |
|---|---|
| Teste Unitário | Verificar funções ou unidades isoladas |
| Teste de Integração | Verificar a comunicação entre componentes |
| Teste End-to-End (E2E) | Validar fluxos completos |
| Teste de API | Verificar endpoints e respostas |
| Teste de Regressão | Verificar se alterações afetaram funcionalidades existentes |
| Teste de Aceitação | Validar o atendimento aos requisitos |

### Exemplo de teste unitário

Considere a função:

```js
function somar(a, b) {
    return a + b;
}
```

Podemos verificar o resultado utilizando `console.assert()`.

```js
console.assert(somar(2, 3) === 5);
console.assert(somar(0, 0) === 0);
console.assert(somar(-2, 2) === 0);
```

Se uma condição for falsa, o navegador ou ambiente de execução apresenta uma mensagem de falha.

Esse exemplo é uma verificação simples. Em projetos profissionais, os testes são normalmente organizados através de ferramentas específicas.

### Frameworks e ferramentas de testes

No ecossistema JavaScript, existem ferramentas para automatizar diferentes tipos de testes.

| Ferramenta | Utilização |
|---|---|
| Jest | Testes unitários e de integração |
| Vitest | Testes JavaScript e TypeScript |
| Playwright | Testes de aplicações web e E2E |
| Cypress | Testes de aplicações web |
| Postman | Testes e exploração de APIs |
| ESLint | Análise estática de código |

### Exemplo com Vitest

**Função a testar:**

```js
// calculadora.js

export function multiplicar(a, b) {
    return a * b;
}
```

**Ficheiro de teste:**

```js
// calculadora.test.js

import { test, expect } from "vitest";
import { multiplicar } from "./calculadora.js";

test("deve multiplicar dois números", () => {
    expect(multiplicar(5, 4)).toBe(20);
});
```

O exemplo pressupõe que o Vitest esteja instalado e configurado no projeto.

### Testes manuais

Nem todos os testes precisam de ser automatizados.

Os **testes manuais** consistem em executar funcionalidades e comparar os resultados observados com os esperados.

**Exemplo de caso de teste:**

| Campo | Descrição |
|---|---|
| ID | CT-001 |
| Funcionalidade | Login |
| Cenário | Autenticação com credenciais válidas |
| Pré-condição | Utilizador cadastrado |
| Ação | Introduzir e-mail e senha válidos |
| Resultado esperado | Acesso autorizado |

### O que é um Bug?

Um **bug** é um defeito no software que pode provocar um comportamento diferente do esperado.

Um registo de bug deve apresentar informações suficientes para permitir a reprodução do problema.

**Exemplo:**

```text
Título: Botão de login não funciona

Ambiente: Google Chrome

Passos para reproduzir:
1. Abrir a página de login.
2. Preencher e-mail e senha válidos.
3. Clicar em "Entrar".

Resultado esperado:
O utilizador deve ser autenticado.

Resultado observado:
O botão não executa nenhuma ação.
```

### Integração Contínua — CI

A **Integração Contínua (Continuous Integration)** consiste em integrar alterações frequentemente e executar verificações automatizadas.

Um pipeline pode executar:

```text
           COMMIT
              |
              v
       Repositório Git
              |
              v
         Pipeline CI
              |
       +------+------+
       |             |
       v             v
     ESLint        Testes
       |             |
       +------+------+
              |
              v
        Build do projeto
              |
              v
       Resultado do pipeline
```

Ferramentas como GitHub Actions, GitLab CI/CD e Forgejo Actions podem automatizar essas verificações.

---

## 4. Importância de um Portfólio

### O que é um portfólio de programação?

Um **portfólio de programação** é uma coleção de projetos que demonstra conhecimentos, competências técnicas e capacidade de resolver problemas através do desenvolvimento de software.

É especialmente importante para estudantes e profissionais em início de carreira que ainda possuem pouca experiência profissional.

### Por que criar um portfólio?

Um portfólio permite apresentar evidências práticas das competências adquiridas.

Pode demonstrar:

- Conhecimento de linguagens.
- Organização do código.
- Utilização de Git.
- Integração com APIs.
- Criação de interfaces.
- Resolução de problemas.
- Documentação.
- Implementação de testes.

### GitHub como portfólio

O **GitHub** permite disponibilizar repositórios com código-fonte, documentação e histórico de desenvolvimento.

Um repositório bem organizado pode apresentar:

```text
projeto/
├── src/
├── tests/
├── assets/
├── .gitignore
├── package.json
└── README.md
```

Nem todos os projetos precisam de possuir essa estrutura. A organização deve corresponder às tecnologias e necessidades da aplicação.

### A importância do README.md

O ficheiro **`README.md`** é frequentemente utilizado para apresentar as principais informações de um projeto.

Recomenda-se incluir:

1. Nome do projeto.
2. Objetivo.
3. Tecnologias utilizadas.
4. Funcionalidades.
5. Instruções de instalação e execução.
6. Imagens ou demonstração.
7. Informações sobre testes.

### Exemplo de README

```markdown
# Sistema de Gestão de Tarefas

Aplicação web desenvolvida com HTML, CSS e JavaScript.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- LocalStorage

## Funcionalidades

- Adicionar tarefas.
- Marcar tarefas como concluídas.
- Remover tarefas.
- Guardar tarefas no navegador.

## Como executar

1. Clonar o repositório.
2. Abrir a pasta no VS Code.
3. Executar o ficheiro index.html num navegador.
```

### Projetos para incluir no portfólio

Alguns exemplos adequados para quem está a estudar Análise e Desenvolvimento de Sistemas:

| Projeto | Competências demonstradas |
|---|---|
| Landing Page | HTML, CSS e responsividade |
| Lista de Tarefas | JavaScript, DOM e eventos |
| Aplicação de Consulta de API | Fetch, JSON e Async/Await |
| Sistema de Cadastro | Formulários e validações |
| Dashboard | Manipulação e apresentação de dados |
| API REST | Backend, HTTP e bases de dados |
| Aplicação Full Stack | Integração entre frontend e backend |

### Qualidade vs. Quantidade

Um portfólio não precisa de possuir dezenas de projetos.

É preferível apresentar projetos bem organizados e documentados, que demonstrem:

- Funcionalidades implementadas.
- Código compreensível.
- Uso adequado das tecnologias.
- Tratamento de erros.
- Testes quando apropriado.
- Documentação clara.

### Demonstração dos projetos

Sempre que possível, é interessante disponibilizar uma versão funcional da aplicação.

Algumas opções incluem:

- GitHub Pages.
- Vercel.
- Netlify.
- Outros serviços de hospedagem.

A escolha depende do tipo de projeto, especialmente quando necessita de backend ou base de dados.

### O portfólio no mercado de trabalho

Para posições de estágio e júnior, o portfólio pode ajudar a demonstrar conhecimentos práticos durante processos de recrutamento.

Entretanto, não substitui completamente outras competências, como:

- Comunicação.
- Trabalho em equipa.
- Resolução de problemas.
- Conhecimento de fundamentos.
- Capacidade de aprendizagem.
- Experiência com ferramentas profissionais.

### Portfólio e evolução profissional

É recomendável atualizar os projetos à medida que novos conhecimentos são adquiridos.

Por exemplo:

```text
        PROJETO INICIAL
               |
               v
          HTML + CSS
               |
               v
        Adicionar JavaScript
               |
               v
         Integrar uma API
               |
               v
        Adicionar validações
               |
               v
       Implementar testes
               |
               v
        Melhorar documentação
               |
               v
       PROJETO MAIS COMPLETO
```

Esse processo demonstra evolução técnica e capacidade de melhoria contínua.

---

## 5. Boas Práticas Integradas no Desenvolvimento de Software

Os quatro conteúdos deste módulo estão diretamente relacionados.

Uma aplicação profissional deve considerar qualidade, organização, colaboração e documentação durante todo o desenvolvimento.

```text
           PLANEJAMENTO
                |
                v
        DESENVOLVIMENTO
                |
                v
          BOAS PRÁTICAS
                |
                v
           VERSIONAMENTO
                |
                v
              TESTES
                |
                v
          CODE REVIEW
                |
                v
             ENTREGA
                |
                v
        MONITORIZAÇÃO
                |
                v
         MELHORIA CONTÍNUA
```

### Exemplo de fluxo profissional

Imagine que uma equipa precisa implementar uma nova funcionalidade de cadastro.

**1. Criar uma branch**

```bash
git switch -c feature/cadastro
```

**2. Implementar a funcionalidade**

Desenvolver a interface e a lógica JavaScript.

**3. Verificar o código**

Executar verificações de qualidade e testes.

**4. Criar um commit**

```bash
git add .

git commit -m "Implementa cadastro de utilizadores"
```

**5. Enviar as alterações**

```bash
git push -u origin feature/cadastro
```

**6. Criar um Pull Request**

Solicitar a revisão do código antes da integração na branch principal.

**7. Integrar após aprovação**

As alterações podem ser integradas conforme as regras estabelecidas pela equipa.

Esse fluxo ajuda a manter um histórico organizado e facilita a colaboração.

---

## 6. Exercícios para Praticar

### Exercício 1 — Organização de Projeto

Crie uma pasta contendo:

- `index.html`.
- `style.css`.
- `script.js`.
- `README.md`.

Organize os ficheiros e explique a finalidade de cada um.

### Exercício 2 — Clean Code

Considere a função:

```js
function f(a, b) {
    return a * b;
}
```

Reescreva a função utilizando nomes descritivos.

### Exercício 3 — Git

Crie um repositório Git local e execute:

1. `git init`.
2. `git status`.
3. `git add .`.
4. `git commit`.

Depois, consulte o histórico utilizando `git log --oneline`.

### Exercício 4 — Branches

Crie uma branch chamada `feature/formulario`.

Implemente uma pequena alteração e registe-a num commit.

### Exercício 5 — Testes

Crie uma função que calcule a média de duas notas.

Depois, escreva pelo menos três testes para verificar diferentes entradas.

### Exercício 6 — Registo de Bug

Escolha uma aplicação ou projeto e descreva um possível defeito.

Inclua:

- Título.
- Passos para reproduzir.
- Resultado esperado.
- Resultado observado.
- Ambiente de teste.

### Exercício 7 — Portfólio

Escolha um projeto desenvolvido durante a disciplina e crie um `README.md` contendo:

1. Objetivo.
2. Tecnologias.
3. Funcionalidades.
4. Instruções de execução.
5. Imagens ou demonstração.

---

## Resumo em uma frase

> As boas práticas de mercado no desenvolvimento dinâmico envolvem a criação de código organizado, legível e seguro, o controlo de versões através de Git e plataformas como GitHub, a aplicação de testes e processos de qualidade para reduzir defeitos e melhorar a confiabilidade das aplicações, além da construção de um portfólio com projetos documentados que demonstrem competências técnicas, capacidade de resolução de problemas e evolução profissional.

---

## Conceitos Relacionados para Estudar a Seguir

- **Clean Code** — aprofundar princípios de legibilidade e manutenção do código.

- **Git Avançado** — estudar merge, rebase, resolução de conflitos e estratégias de branches.

- **Code Review** — compreender a revisão colaborativa de alterações.

- **Testes Unitários** — utilizar Jest ou Vitest para automatizar verificações.

- **Testes End-to-End** — estudar Playwright e Cypress.

- **CI/CD** — automatizar integração, testes e entrega de aplicações.

- **DevOps** — integrar desenvolvimento, operações e melhoria contínua.

- **Segurança Web** — aprofundar práticas de desenvolvimento seguro.

- **Documentação Técnica** — criar READMEs, documentação de APIs e instruções de execução.

- **Portfólio Profissional** — organizar projetos e apresentar competências para oportunidades de estágio e emprego.

---

## Referências para Estudo

- [Git — Documentação Oficial](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)
- [MDN — JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Vitest — Documentação Oficial](https://vitest.dev/)
- [Jest — Documentação Oficial](https://jestjs.io/)
- [Playwright — Documentação Oficial](https://playwright.dev/)
- [OWASP — Segurança de Aplicações Web](https://owasp.org/)
