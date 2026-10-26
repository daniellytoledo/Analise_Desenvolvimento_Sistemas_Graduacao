
# Prototipagem

> Este ficheiro dá continuidade ao estudo das abordagens ágeis apresentado em `13_dite_o_ritmo.md`, aprofundando ferramentas que facilitam a conceção, validação e planeamento de projetos. O objetivo é compreender como o **Project Model Canvas** organiza as informações essenciais de um projeto, como o **Design Thinking** contribui para resolver problemas centrados nas pessoas, como os protótipos permitem validar ideias antes da implementação e como o **Google Design Sprint** acelera a criação e o teste de soluções.

---

## 1. Project Model Canvas — facilitador da iniciação de projetos

### O que é o Project Model Canvas

O **Project Model Canvas (PM Canvas)** é uma ferramenta visual de planeamento de projetos desenvolvida pelo brasileiro **José Finocchio Júnior**.

O seu objetivo é organizar as principais informações de um projeto num único quadro, facilitando a compreensão, comunicação e colaboração entre os envolvidos.

Diferentemente de um plano tradicional composto por diversos documentos, o Canvas apresenta uma visão integrada e simplificada do projeto.

É especialmente útil durante as fases iniciais, quando a equipa precisa de compreender:

- Por que o projeto será realizado.
- Quais resultados serão entregues.
- Quem participará.
- Como o trabalho será desenvolvido.
- Quando ocorrerão as entregas.
- Quanto custará a execução.

### Estrutura do Project Model Canvas

O modelo organiza 13 componentes em cinco grandes perguntas.

| Pergunta | Componentes |
|---|---|
| **Por quê?** | Justificativas, Objetivo SMART, Benefícios |
| **O quê?** | Produto, Requisitos |
| **Quem?** | Stakeholders, Equipa |
| **Como?** | Premissas, Grupo de Entregas, Restrições |
| **Quando e quanto?** | Riscos, Linha do Tempo, Custos |

### Representação simplificada

```text
+------------------------------------------------------+
|                 PROJECT MODEL CANVAS                 |
+------------------------------------------------------+
|                                                      |
| POR QUÊ?                                             |
| Justificativas | Objetivo SMART | Benefícios         |
|                                                      |
+------------------------------------------------------+
|                                                      |
| O QUÊ?                                               |
| Produto | Requisitos                                 |
|                                                      |
+------------------------------------------------------+
|                                                      |
| QUEM?                                                |
| Stakeholders | Equipa                                |
|                                                      |
+------------------------------------------------------+
|                                                      |
| COMO?                                                |
| Premissas | Grupo de Entregas | Restrições           |
|                                                      |
+------------------------------------------------------+
|                                                      |
| QUANDO E QUANTO?                                     |
| Riscos | Linha do Tempo | Custos                     |
|                                                      |
+------------------------------------------------------+
```

Esta representação é didática. O quadro original utiliza uma disposição visual própria para relacionar os componentes.

### Exemplo — Aplicação de reservas para ginásios

Uma empresa pretende desenvolver uma aplicação que permita aos clientes reservar aulas.

**Por quê?**

Reduzir o trabalho administrativo e facilitar o processo de reservas.

**O quê?**

Aplicação web com autenticação, horários e reservas.

**Quem?**

Programadores, designer, QA, gestor do projeto, ginásios e utilizadores finais.

**Como?**

Desenvolvimento incremental, utilização de ferramentas web e integração com uma base de dados.

**Quando e quanto?**

Prazo estimado de três meses, custos previstos e identificação dos principais riscos.

### Vantagens do Project Model Canvas

- Visão geral do projeto.
- Facilidade de comunicação.
- Participação dos stakeholders.
- Identificação de dependências.
- Planeamento colaborativo.
- Rapidez na organização das ideias.

### Limitações

O Canvas não substitui necessariamente documentos detalhados como:

- EAP.
- Cronograma.
- Orçamento.
- Plano de riscos.
- Plano de comunicação.

Em projetos complexos, funciona como uma ferramenta de alinhamento e iniciação, que pode ser complementada por outros processos de gestão.

---

## 2. Design Thinking — viabilizador de design em projetos

### O que é Design Thinking

O **Design Thinking** é uma abordagem de resolução de problemas centrada nas pessoas, que combina compreensão das necessidades dos utilizadores, criatividade, experimentação e validação de soluções.

É utilizado para desenvolver produtos, serviços e experiências que respondam a problemas reais.

A abordagem procura equilibrar três dimensões:

**Desejabilidade (Desirability)**

A solução atende às necessidades e desejos dos utilizadores?

**Viabilidade Técnica (Feasibility)**

É possível desenvolver a solução com as tecnologias e recursos disponíveis?

**Viabilidade de Negócio (Viability)**

A solução é sustentável do ponto de vista económico e organizacional?

```text
                DESEJABILIDADE
                      /\
                     /  \
                    /    \
                   /      \
                  /________\
           VIABILIDADE    VIABILIDADE
             TÉCNICA       DE NEGÓCIO
```

A interseção dessas dimensões contribui para identificar soluções úteis, possíveis e sustentáveis.

### As cinco etapas do Design Thinking

Uma representação muito utilizada, associada à Stanford d.school, organiza o Design Thinking em cinco etapas:

1. Empatizar.
2. Definir.
3. Idear.
4. Prototipar.
5. Testar.

Estas etapas não precisam de ocorrer obrigatoriamente numa sequência rígida.

### 1. Empatizar (Empathize)

Compreender as necessidades, dificuldades e comportamentos dos utilizadores.

Técnicas comuns:

- Entrevistas.
- Observação.
- Questionários.
- Mapas de empatia.
- Pesquisa com utilizadores.

**Exemplo:** entrevistar clientes de ginásios para compreender dificuldades no agendamento de aulas.

### 2. Definir (Define)

Organizar as informações recolhidas e formular o problema que precisa de ser resolvido.

**Problema inicial:**

> Os clientes têm dificuldades para reservar aulas.

**Problema melhor definido:**

> Os clientes precisam de consultar horários e reservar aulas sem depender de chamadas telefónicas ou atendimento presencial.

Uma definição clara ajuda a direcionar a criação de soluções.

### 3. Idear (Ideate)

Gerar diferentes possibilidades de solução.

Exemplos:

- Aplicação de reservas.
- Página web responsiva.
- Integração com calendário.
- Notificações automáticas.
- Lista de espera para aulas lotadas.

O objetivo inicial é explorar alternativas antes de selecionar uma.

### 4. Prototipar (Prototype)

Construir representações simplificadas das soluções.

Exemplos:

- Desenhos de interfaces.
- Wireframes.
- Protótipos no Figma.
- Demonstrações navegáveis.

### 5. Testar (Test)

Apresentar os protótipos aos utilizadores e recolher feedback.

Os resultados podem revelar:

- Dificuldades de navegação.
- Funcionalidades desnecessárias.
- Requisitos esquecidos.
- Problemas de compreensão.
- Oportunidades de melhoria.

### Ciclo Design Thinking

```text
             EMPATIZAR
                 |
                 v
               DEFINIR
                 |
                 v
                IDEAR
                 |
                 v
             PROTOTIPAR
                 |
                 v
               TESTAR
                 |
                 v
             FEEDBACK
                 |
                 +----------> REAVALIAR
                              E MELHORAR
```

### Design Thinking vs. Gestão Tradicional

| Design Thinking | Gestão de Projetos |
|---|---|
| Explora necessidades e problemas | Organiza a execução do trabalho |
| Estimula ideias e experimentação | Define recursos, prazos e responsabilidades |
| Utiliza protótipos para aprender | Utiliza planos e indicadores para controlar |
| Valoriza feedback dos utilizadores | Garante coordenação das entregas |

As duas abordagens são complementares: o Design Thinking ajuda a descobrir **o que vale a pena desenvolver**, enquanto a gestão de projetos ajuda a organizar **como realizar a entrega**.

---

## 3. A Era do Protótipo — facilitar o entendimento dos utilizadores

### O que é um protótipo

Um **protótipo (Prototype)** é uma representação preliminar de um produto, sistema ou funcionalidade, criada para explorar ideias, comunicar conceitos e validar hipóteses.

O protótipo permite que os stakeholders visualizem uma solução antes da implementação completa.

No desenvolvimento de software, pode representar:

- Uma interface.
- Um fluxo de navegação.
- Uma interação.
- Um processo.
- Uma funcionalidade parcial.

### Por que utilizar protótipos

Durante o levantamento de requisitos, o cliente nem sempre consegue imaginar exatamente como será o sistema.

Um protótipo facilita essa compreensão.

**Exemplo:**

O cliente solicita:

> Quero uma página onde os utilizadores possam reservar aulas.

Essa descrição permite diferentes interpretações.

Ao apresentar um protótipo, o cliente pode avaliar:

- Posição dos elementos.
- Informações disponíveis.
- Processo de seleção de horários.
- Botões de confirmação.
- Mensagens de erro.

Assim, a equipa consegue identificar problemas antes de investir na implementação completa.

### Níveis de fidelidade

Os protótipos podem apresentar diferentes níveis de detalhamento.

**Baixa Fidelidade (Low-Fidelity)**

Representações simples, normalmente utilizadas nas fases iniciais.

Exemplos:

- Desenhos em papel.
- Wireframes.
- Esboços.
- Diagramas de navegação.

**Média Fidelidade (Mid-Fidelity)**

Representações mais estruturadas, com organização de componentes e fluxos.

**Alta Fidelidade (High-Fidelity)**

Protótipos visualmente próximos do produto final, podendo incluir cores, tipografia e interações simuladas.

### Comparativo

| Característica | Baixa fidelidade | Alta fidelidade |
|---|---|---|
| Detalhamento | Baixo | Elevado |
| Custo de criação | Geralmente menor | Geralmente maior |
| Velocidade | Rápida | Mais demorada |
| Objetivo | Explorar ideias | Validar experiências específicas |
| Exemplo | Wireframe em papel | Protótipo interativo no Figma |

### Exemplo — Wireframe de autenticação

```text
+----------------------------------+
|                                  |
|            APLICAÇÃO             |
|                                  |
|  E-mail                          |
|  +----------------------------+  |
|  |                            |  |
|  +----------------------------+  |
|                                  |
|  Palavra-passe                  |
|  +----------------------------+  |
|  |                            |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  |          ENTRAR            |  |
|  +----------------------------+  |
|                                  |
|       Esqueci a palavra-passe    |
|                                  |
+----------------------------------+
```

Mesmo sem código, a equipa já consegue discutir a organização da interface.

### Protótipo vs. MVP

Embora relacionados, os conceitos não são equivalentes.

**Protótipo**

É utilizado principalmente para aprender, explorar ideias e validar hipóteses.

Pode não possuir funcionalidades reais.

**MVP — Minimum Viable Product**

É uma versão mínima de um produto que permite obter aprendizagem validada com utilizadores reais, utilizando o menor esforço necessário para testar hipóteses relevantes.

| Protótipo | MVP |
|---|---|
| Representação ou simulação | Produto mínimo utilizável |
| Pode não possuir backend | Possui as funcionalidades necessárias ao teste |
| Valida conceitos e experiências | Valida hipóteses de produto em utilização |
| Pode ser descartável | Pode evoluir para o produto final |

### Ferramentas de prototipagem

Algumas ferramentas utilizadas são:

- **Figma:** criação de interfaces e protótipos interativos.
- **Penpot:** design de interfaces e prototipagem.
- **Balsamiq:** wireframes de baixa fidelidade.
- **Miro:** colaboração visual e organização de ideias.
- **Canva:** criação de apresentações e representações visuais simples.

### Benefícios da prototipagem

- Redução de ambiguidades.
- Melhor comunicação com stakeholders.
- Identificação antecipada de problemas.
- Validação de fluxos.
- Redução de retrabalho.
- Apoio à definição de requisitos.
- Maior participação dos utilizadores.

**O principal objetivo não é produzir uma interface bonita, mas aprender rapidamente se a solução faz sentido para os utilizadores.**

---

## 4. Google Design Sprint — prototipação e teste rápido

### O que é o Design Sprint

O **Design Sprint** é uma metodologia de resolução de problemas e validação de ideias desenvolvida e difundida pela equipa do Google Ventures (GV), com participação de Jake Knapp.

O método tradicional organiza o trabalho num ciclo intensivo de **cinco dias**, permitindo compreender um desafio, desenvolver alternativas, selecionar uma solução, construir um protótipo e testá-lo com utilizadores.

É especialmente útil quando a organização precisa de reduzir incertezas antes de investir no desenvolvimento completo.

### Os cinco dias do Design Sprint

**Dia 1 — Mapear (Map)**

Compreender o problema, definir objetivos e identificar o desafio prioritário.

**Dia 2 — Esboçar (Sketch)**

Explorar diferentes soluções através de desenhos e propostas individuais.

**Dia 3 — Decidir (Decide)**

Avaliar as alternativas e selecionar aquela que será prototipada.

**Dia 4 — Prototipar (Prototype)**

Construir uma representação suficientemente realista para testar a solução.

**Dia 5 — Testar (Test)**

Apresentar o protótipo aos utilizadores e recolher informações sobre a experiência.

### Ciclo Design Sprint

```text
        SEGUNDA-FEIRA
            MAPEAR
              |
              v
        TERÇA-FEIRA
            ESBOÇAR
              |
              v
        QUARTA-FEIRA
            DECIDIR
              |
              v
        QUINTA-FEIRA
           PROTOTIPAR
              |
              v
         SEXTA-FEIRA
             TESTAR
              |
              v
           APRENDIZAGEM
              |
              v
        PRÓXIMAS DECISÕES
```

### Exemplo — Aplicação de reservas

Uma empresa pretende melhorar o processo de reservas de aulas num ginásio.

**Segunda-feira — Mapear**

A equipa identifica que os utilizadores têm dificuldade em localizar horários disponíveis.

**Terça-feira — Esboçar**

São propostas diferentes interfaces para apresentar aulas e horários.

**Quarta-feira — Decidir**

A equipa seleciona a solução com navegação mais simples.

**Quinta-feira — Prototipar**

É criado um protótipo interativo no Figma.

**Sexta-feira — Testar**

Utilizadores representativos tentam realizar uma reserva utilizando o protótipo.

A equipa observa:

- Se conseguem encontrar uma aula.
- Se compreendem os horários.
- Se identificam o botão de reserva.
- Se conseguem completar o fluxo.
- Quais dificuldades encontram.

### O que acontece após o Design Sprint

O resultado não precisa de ser um produto pronto.

A equipa pode decidir:

- Continuar com a solução.
- Ajustar o protótipo.
- Realizar novos testes.
- Explorar outra alternativa.
- Abandonar uma hipótese que não demonstrou valor.

### Design Sprint vs. Scrum

| Característica | Design Sprint | Scrum |
|---|---|---|
| Objetivo | Explorar e validar soluções | Desenvolver e entregar valor |
| Duração | Tradicionalmente 5 dias | Sprints de até 1 mês |
| Principal resultado | Aprendizagem e protótipo testado | Incremento utilizável |
| Foco | Reduzir incertezas de solução | Desenvolvimento empírico |
| Utilização | Descoberta e validação | Desenvolvimento contínuo |

O Design Sprint pode ser utilizado antes ou durante iniciativas que também empregam Scrum.

### Design Sprint vs. Design Thinking

O Design Thinking é uma abordagem ampla para compreender problemas e desenvolver soluções centradas nas pessoas.

O Design Sprint é um processo estruturado e limitado no tempo para explorar e testar uma solução.

**Em resumo:**

```text
DESIGN THINKING
      |
      v
ABORDAGEM CENTRADA NO UTILIZADOR
      |
      v
EXPLORAÇÃO E EXPERIMENTAÇÃO


DESIGN SPRINT
      |
      v
PROCESSO ESTRUTURADO
      |
      v
PROTÓTIPO E TESTE RÁPIDO
```

### Benefícios e limitações

**Benefícios:**

- Feedback antecipado.
- Redução de incertezas.
- Alinhamento da equipa.
- Validação antes de investir no desenvolvimento.
- Rapidez na avaliação de alternativas.

**Limitações:**

- Exige disponibilidade dos participantes.
- Depende de um desafio bem definido.
- O protótipo não comprova a viabilidade técnica completa.
- Resultados de poucos testes não representam necessariamente todos os utilizadores.
- Algumas questões exigem investigação adicional.

---

## 5. Integração entre Canvas, Design Thinking, Prototipagem e Design Sprint

As quatro ferramentas contribuem para diferentes momentos da conceção e validação de projetos.

| Ferramenta | Finalidade |
|---|---|
| **Project Model Canvas** | Organizar e comunicar a visão inicial do projeto |
| **Design Thinking** | Compreender problemas e explorar soluções |
| **Prototipagem** | Representar e validar ideias |
| **Google Design Sprint** | Acelerar a criação e o teste de soluções |

### Exemplo integrado — desenvolvimento de um sistema web

```text
           NECESSIDADE DO CLIENTE
                    |
                    v
            PROJECT MODEL CANVAS
                    |
                    v
           ORGANIZAR O PROJETO
                    |
                    v
              DESIGN THINKING
                    |
                    v
          COMPREENDER UTILIZADORES
                    |
                    v
              GERAR SOLUÇÕES
                    |
                    v
              DESIGN SPRINT
                    |
                    v
          CONSTRUIR UM PROTÓTIPO
                    |
                    v
           TESTAR COM UTILIZADORES
                    |
                    v
              RECOLHER FEEDBACK
                    |
                    v
           REFINAR OS REQUISITOS
                    |
                    v
          PLANEAR O DESENVOLVIMENTO
```

Essa sequência é ilustrativa, não obrigatória. As ferramentas podem ser combinadas de diferentes formas conforme o contexto e as necessidades do projeto.

### Boas práticas

- Compreender o problema antes de escolher a solução.
- Envolver utilizadores representativos.
- Validar hipóteses antes de investir excessivamente.
- Utilizar protótipos com fidelidade adequada.
- Recolher feedback de forma estruturada.
- Documentar decisões importantes.
- Manter abertura para alterar ideias.
- Relacionar as descobertas com os objetivos do negócio.

---

## Resumo em uma frase

> A prototipagem facilita a compreensão e validação de soluções antes da implementação completa, utilizando o Project Model Canvas para organizar a visão inicial do projeto, o Design Thinking para compreender necessidades e explorar alternativas, os protótipos para comunicar e testar ideias, e o Google Design Sprint para estruturar rapidamente um ciclo de investigação, decisão, prototipação e validação com utilizadores, reduzindo incertezas e apoiando o desenvolvimento de produtos mais alinhados com as necessidades reais.

---

## Conceitos relacionados para estudar a seguir

- **UX Research (Pesquisa com Utilizadores)** — compreender entrevistas, observação e testes para identificar necessidades e dificuldades dos utilizadores.

- **Wireframes e Mockups** — aprofundar técnicas de representação visual de interfaces e fluxos.

- **Figma e Prototipagem Interativa** — desenvolver protótipos navegáveis e validar experiências antes da programação.

- **MVP — Minimum Viable Product** — compreender como desenvolver versões mínimas de produtos para testar hipóteses de negócio.

- **Lean Startup** — estudar o ciclo Build–Measure–Learn e a aprendizagem validada.

- **Usability Testing (Testes de Usabilidade)** — avaliar como os utilizadores interagem com produtos e identificar dificuldades de utilização.

- **Product Discovery** — explorar práticas para identificar problemas relevantes e selecionar oportunidades de desenvolvimento.

- **Design Systems** — compreender a padronização de componentes, estilos e padrões de interface para aumentar a consistência dos produtos digitais.
