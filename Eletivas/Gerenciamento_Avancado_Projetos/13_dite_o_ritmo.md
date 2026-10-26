
# Dite o Ritmo

> Este ficheiro dá continuidade ao estudo da Gestão da Integração e do Desenvolvimento Profissional apresentado em `12_motivacao_compromisso.md`. O objetivo é compreender os desafios do **mundo BANI**, os fundamentos da **Agilidade (Agility)**, a aplicação do **Scrum** na gestão de produtos e projetos e os princípios do **Lean**, que procura maximizar o valor entregue e reduzir desperdícios nos processos.

---

## 1. Mundo B.A.N.I. — o contexto do mundo BANI

### O que é o mundo BANI

O conceito **BANI**, proposto pelo futurista **Jamais Cascio**, descreve características de um ambiente marcado por instabilidade, incerteza e complexidade.

A sigla representa quatro características:

- **B — Brittle:** Frágil.
- **A — Anxious:** Ansioso.
- **N — Nonlinear:** Não linear.
- **I — Incomprehensible:** Incompreensível.

O modelo BANI ajuda a refletir sobre os desafios enfrentados por organizações e profissionais num mundo sujeito a mudanças rápidas e acontecimentos difíceis de prever.

### As quatro dimensões do BANI

**1. Brittle — Frágil**

Sistemas aparentemente estáveis podem sofrer falhas significativas quando submetidos a pressões inesperadas.

**Exemplo:** uma aplicação depende de um único fornecedor cloud. Uma falha desse serviço pode comprometer toda a operação.

**2. Anxious — Ansioso**

A incerteza e o excesso de informações podem aumentar a ansiedade e dificultar a tomada de decisões.

**Exemplo:** uma equipa trabalha com prazos restritos e mudanças constantes de requisitos, gerando insegurança sobre as entregas.

**3. Nonlinear — Não Linear**

Pequenas ações podem provocar grandes consequências, enquanto grandes esforços nem sempre produzem resultados proporcionais.

**Exemplo:** uma pequena alteração numa API pode comprometer diferentes módulos de um sistema.

**4. Incomprehensible — Incompreensível**

A quantidade de informações e a complexidade dos sistemas podem dificultar a compreensão das causas e consequências dos acontecimentos.

**Exemplo:** um sistema distribuído apresenta falhas intermitentes cuja origem é difícil de identificar.

### Representação do mundo BANI

```text
                    MUNDO BANI
                        |
         +--------------+--------------+
         |              |              |
         v              v              v
      BRITTLE        ANXIOUS       NONLINEAR
      (Frágil)       (Ansioso)     (Não linear)
         |              |              |
         +--------------+--------------+
                        |
                        v
                INCOMPREHENSIBLE
                 (Incompreensível)
```

### BANI vs. VUCA

Antes do BANI, o conceito **VUCA** já era utilizado para descrever ambientes complexos e incertos.

VUCA representa:

- Volatility — Volatilidade.
- Uncertainty — Incerteza.
- Complexity — Complexidade.
- Ambiguity — Ambiguidade.

| VUCA | BANI |
|---|---|
| Volátil | Frágil |
| Incerto | Ansioso |
| Complexo | Não linear |
| Ambíguo | Incompreensível |

Os modelos não são equivalentes nem substitutos obrigatórios.

O BANI procura enfatizar consequências humanas, fragilidades dos sistemas e dificuldades de compreensão em ambientes de mudança.

### Como responder aos desafios do BANI

Algumas capacidades importantes são:

**Resiliência**

Preparar sistemas e equipas para lidar com falhas e recuperar o funcionamento.

**Empatia**

Compreender as preocupações e necessidades das pessoas perante a incerteza.

**Adaptabilidade**

Ajustar estratégias e processos conforme novas informações surgem.

**Transparência**

Tornar informações, decisões e resultados mais compreensíveis.

### Relação entre BANI e Gestão de Projetos

Em ambientes instáveis, um planeamento rígido pode tornar-se inadequado quando surgem mudanças relevantes.

Por isso, as organizações podem beneficiar de:

- Ciclos curtos de planeamento.
- Entregas incrementais.
- Gestão contínua de riscos.
- Feedback frequente.
- Aprendizagem e melhoria.
- Equipas colaborativas e adaptáveis.

Essas necessidades ajudam a compreender a importância das abordagens ágeis.

---

## 2. Agilidade — fundamentos de agilidade

### O que é Agilidade

A **Agilidade (Agility)** é a capacidade de responder a mudanças de forma rápida e eficaz, mantendo o foco na entrega de valor.

Na gestão de projetos e no desenvolvimento de software, envolve práticas que favorecem:

- Colaboração.
- Adaptação.
- Entregas frequentes.
- Feedback.
- Melhoria contínua.
- Foco no cliente.

Ser ágil não significa simplesmente trabalhar mais depressa.

Significa **entregar valor, aprender com os resultados e adaptar o trabalho às necessidades reais**.

### O Manifesto Ágil

Em 2001, um grupo de profissionais de desenvolvimento de software publicou o **Manifesto para Desenvolvimento Ágil de Software (Agile Manifesto)**.

O manifesto apresenta quatro valores fundamentais.

**1. Indivíduos e interações mais que processos e ferramentas.**

**2. Software em funcionamento mais que documentação abrangente.**

**3. Colaboração com o cliente mais que negociação de contratos.**

**4. Responder a mudanças mais que seguir um plano.**

Os elementos da direita continuam a possuir valor, mas os elementos da esquerda são considerados prioritários.

### Os princípios da Agilidade

O Manifesto Ágil também apresenta 12 princípios, relacionados com:

- Satisfação do cliente através de entregas contínuas.
- Aceitação de mudanças nos requisitos.
- Entregas frequentes de software funcional.
- Colaboração entre negócio e desenvolvimento.
- Apoio a profissionais motivados.
- Comunicação eficaz.
- Software funcional como medida importante de progresso.
- Ritmo sustentável.
- Excelência técnica.
- Simplicidade.
- Equipas auto-organizadas.
- Reflexão e melhoria contínua.

### Desenvolvimento tradicional vs. ágil

**Modelo tradicional preditivo**

Procura definir detalhadamente o trabalho antes da execução, sendo adequado a situações com requisitos relativamente estáveis.

**Abordagens ágeis**

Trabalham através de ciclos de desenvolvimento, feedback e adaptação.

| Característica | Tradicional preditivo | Ágil |
|---|---|---|
| Planeamento | Mais detalhado antecipadamente | Progressivo e adaptativo |
| Requisitos | Preferencialmente estáveis | Podem evoluir |
| Entregas | Frequentemente por grandes etapas | Frequentes e incrementais |
| Mudanças | Avaliadas através de controlo formal | Incorporadas conforme prioridades |
| Feedback | Em marcos definidos | Contínuo e frequente |

Nenhuma abordagem é universalmente superior. A escolha depende do contexto do projeto.

### Ciclo de desenvolvimento ágil

```text
        IDENTIFICAR NECESSIDADE
                 |
                 v
          PRIORIZAR TRABALHO
                 |
                 v
             PLANEAR
                 |
                 v
            DESENVOLVER
                 |
                 v
              TESTAR
                 |
                 v
             ENTREGAR
                 |
                 v
          RECOLHER FEEDBACK
                 |
                 v
             ADAPTAR
                 |
                 +----------> NOVO CICLO
```

### Exemplo em Engenharia de Software

Uma equipa precisa de desenvolver uma aplicação de reservas.

Em vez de tentar implementar todas as funcionalidades antes da primeira entrega, decide trabalhar por incrementos:

**Primeiro incremento:** registo e autenticação.

**Segundo incremento:** visualização de horários.

**Terceiro incremento:** realização de reservas.

**Quarto incremento:** cancelamentos e notificações.

A cada entrega, a equipa recolhe feedback e ajusta as próximas prioridades.

### Principais abordagens ágeis

Algumas abordagens utilizadas são:

- **Scrum:** framework para desenvolver soluções através de ciclos iterativos e incrementais.
- **Kanban:** método de gestão do fluxo de trabalho com visualização e limitação do trabalho em curso.
- **Extreme Programming (XP):** práticas de desenvolvimento orientadas para qualidade técnica e feedback frequente.
- **Lean:** princípios orientados para valor, fluxo e eliminação de desperdícios.

---

## 3. Scrum — gestão com Scrum

### O que é Scrum

O **Scrum** é um framework leve utilizado para desenvolver e manter produtos complexos através de soluções adaptativas.

É muito utilizado no desenvolvimento de software.

O Scrum baseia-se em três pilares do empirismo:

1. **Transparência (Transparency).**
2. **Inspeção (Inspection).**
3. **Adaptação (Adaptation).**

### Os cinco valores do Scrum

- **Compromisso (Commitment).**
- **Foco (Focus).**
- **Abertura (Openness).**
- **Respeito (Respect).**
- **Coragem (Courage).**

Estes valores orientam o comportamento e a colaboração da equipa.

### Scrum Team

A **Scrum Team** é formada por três responsabilidades (*accountabilities*).

**Product Owner**

Responsável por maximizar o valor do produto e pela gestão eficaz do Product Backlog.

**Scrum Master**

Responsável por estabelecer o Scrum conforme definido no Scrum Guide e apoiar a eficácia da Scrum Team.

**Developers**

Profissionais responsáveis por criar um incremento utilizável do produto em cada Sprint.

```text
                 SCRUM TEAM
                     |
       +-------------+-------------+
       |             |             |
       v             v             v
 PRODUCT OWNER   SCRUM MASTER   DEVELOPERS
       |             |             |
       v             v             v
   Maximiza       Promove       Desenvolvem
   o valor        o Scrum       o incremento
```

A Scrum Team é auto-gerida e multifuncional.

Isso significa que possui competências para realizar o trabalho e decide internamente como organizá-lo.

### O que é uma Sprint

A **Sprint** é um período de duração fixa, de até um mês, durante o qual a equipa trabalha para alcançar um objetivo definido.

Uma nova Sprint começa imediatamente após o encerramento da anterior.

Durante a Sprint, a equipa:

- Planeia o trabalho.
- Desenvolve funcionalidades.
- Inspeciona o progresso.
- Adapta o plano.
- Produz um incremento utilizável.

### Eventos do Scrum

**1. Sprint Planning**

Define por que a Sprint é valiosa, o que poderá ser concluído e como o trabalho será realizado.

**2. Daily Scrum**

Evento diário de 15 minutos destinado aos Developers para inspecionar o progresso em direção ao Sprint Goal e adaptar o Sprint Backlog.

**3. Sprint Review**

Inspeciona o resultado da Sprint com stakeholders relevantes e discute possíveis adaptações futuras.

**4. Sprint Retrospective**

Permite avaliar como melhorar a qualidade e a eficácia do trabalho da equipa.

A própria Sprint também é considerada um evento do Scrum.

### Ciclo Scrum

```text
                PRODUCT BACKLOG
                       |
                       v
                SPRINT PLANNING
                       |
                       v
                  SPRINT
                       |
              +--------+--------+
              |                 |
              v                 v
          DAILY SCRUM       DESENVOLVIMENTO
              |                 |
              +--------+--------+
                       |
                       v
                  INCREMENTO
                       |
                       v
                 SPRINT REVIEW
                       |
                       v
              SPRINT RETROSPECTIVE
                       |
                       v
                  NOVA SPRINT
```

### Artefactos do Scrum

O Scrum possui três artefactos principais.

**Product Backlog**

Lista ordenada e emergente do trabalho necessário para melhorar o produto.

Compromisso associado: **Product Goal**.

**Sprint Backlog**

Conjunto formado pelo Sprint Goal, pelos itens selecionados e pelo plano de execução.

Compromisso associado: **Sprint Goal**.

**Increment**

Resultado utilizável do trabalho concluído, integrado aos incrementos anteriores e conforme a Definition of Done.

Compromisso associado: **Definition of Done (DoD)**.

### Exemplo de Product Backlog

| Prioridade | Funcionalidade | Estado |
|---|---|---|
| 1 | Autenticação | Concluído |
| 2 | Registo de clientes | Em desenvolvimento |
| 3 | Reservas de aulas | Pendente |
| 4 | Notificações | Pendente |
| 5 | Relatórios | Pendente |

O Product Owner é responsável pela ordenação do backlog, considerando valor, necessidades, riscos e dependências.

### Scrum e qualidade

O Scrum está diretamente relacionado com a qualidade apresentada em `09_concordancia_conformidade.md`.

A **Definition of Done (DoD)** estabelece os critérios necessários para considerar um incremento concluído.

**Exemplo:**

```text
DEFINITION OF DONE

[ ] Código implementado
[ ] Code review realizado
[ ] Testes obrigatórios aprovados
[ ] Critérios de aceitação atendidos
[ ] Documentação necessária atualizada
[ ] Incremento integrado e utilizável
```

Um trabalho que não cumpre a DoD não pode ser considerado parte de um incremento concluído.

### Benefícios e limitações do Scrum

**Benefícios:**

- Feedback frequente.
- Transparência.
- Adaptação às mudanças.
- Colaboração.
- Entregas incrementais.
- Melhoria contínua.

**Desafios:**

- Exige envolvimento dos participantes.
- Necessita de objetivos claros.
- Pode enfrentar dificuldades com dependências externas.
- Não elimina a necessidade de conhecimentos técnicos.
- Não resolve automaticamente problemas organizacionais.

---

## 4. Lean — processo enxuto

### O que é Lean

O **Lean** é uma filosofia de gestão orientada para maximizar o valor entregue ao cliente e reduzir atividades que não contribuem para esse valor.

Possui raízes no **Sistema Toyota de Produção (Toyota Production System — TPS)**, desenvolvido no contexto da indústria japonesa.

O conceito foi posteriormente adaptado a diferentes setores, incluindo serviços, gestão e desenvolvimento de software.

A ideia central é:

**Entregar mais valor com menos desperdício, preservando a qualidade e melhorando continuamente os processos.**

### Os cinco princípios Lean

Uma formulação clássica dos princípios Lean apresenta cinco elementos.

**1. Identificar Valor (Value)**

Compreender aquilo que realmente possui valor para o cliente.

**2. Mapear o Fluxo de Valor (Value Stream)**

Identificar as atividades necessárias para entregar o produto ou serviço.

**3. Criar Fluxo Contínuo (Flow)**

Reduzir interrupções, esperas e gargalos.

**4. Estabelecer Produção Puxada (Pull)**

Executar trabalho conforme a procura e a capacidade, evitando acumulação desnecessária.

**5. Procurar a Perfeição (Perfection)**

Promover melhoria contínua dos processos.

### O ciclo Lean

```text
             IDENTIFICAR VALOR
                     |
                     v
             MAPEAR O PROCESSO
                     |
                     v
            ELIMINAR DESPERDÍCIOS
                     |
                     v
               MELHORAR FLUXO
                     |
                     v
             ENTREGAR CONFORME
                NECESSIDADE
                     |
                     v
              MELHORIA CONTÍNUA
                     |
                     +--------> REAVALIAR
```

### Os desperdícios do Lean

O Lean procura identificar atividades que consomem recursos sem gerar valor proporcional para o cliente.

Uma classificação conhecida apresenta oito desperdícios.

| Desperdício | Exemplo em software |
|---|---|
| Transporte | Transferências desnecessárias de informação entre equipas |
| Inventário | Grande quantidade de funcionalidades iniciadas e não concluídas |
| Movimento | Alternância excessiva entre ferramentas e contextos |
| Espera | Tarefas bloqueadas por aprovações |
| Superprodução | Funcionalidades que ninguém solicitou ou utiliza |
| Processamento excessivo | Documentação ou etapas sem utilidade proporcional |
| Defeitos | Bugs e retrabalho |
| Talento não aproveitado | Competências da equipa subutilizadas |

### Exemplo de desperdício em software

Uma equipa desenvolve cinco funcionalidades ao mesmo tempo.

Nenhuma está completamente testada.

Como consequência:

- Existe demasiado trabalho em curso.
- Surgem conflitos entre alterações.
- A equipa muda frequentemente de contexto.
- As entregas demoram mais tempo.

Uma abordagem Lean procura limitar o trabalho em curso e terminar funcionalidades antes de iniciar outras.

### Lean e Kanban

O **Kanban** é frequentemente utilizado para visualizar e melhorar o fluxo de trabalho.

Um quadro básico pode possuir:

```text
+---------------+---------------+---------------+
|    A FAZER    |   EM CURSO    |   CONCLUÍDO   |
+---------------+---------------+---------------+
| Autenticação  | API Clientes  | Base de dados |
| Relatórios    | Testes E2E    | Configuração  |
| Notificações  |               |               |
+---------------+---------------+---------------+
```

Uma prática importante é limitar o **WIP (Work in Progress — Trabalho em Curso)**.

**Exemplo:**

```text
LIMITE WIP: 2

EM CURSO:

1. API Clientes
2. Testes E2E

Nova tarefa só deverá ser iniciada
quando existir capacidade disponível,
conforme as políticas do fluxo.
```

O objetivo é reduzir acumulação de trabalho, melhorar o fluxo e identificar gargalos.

### Lean vs. Scrum

| Característica | Lean | Scrum |
|---|---|---|
| Natureza | Filosofia e princípios de gestão | Framework |
| Foco | Valor e eliminação de desperdícios | Entrega adaptativa de valor |
| Organização | Melhoria dos fluxos e processos | Sprints e eventos definidos |
| Trabalho | Fluxo conforme a abordagem aplicada | Iterativo e incremental |
| Melhoria | Contínua | Inspeção e adaptação contínuas |

Lean e Scrum não são incompatíveis.

Uma equipa Scrum pode utilizar princípios Lean para reduzir desperdícios e melhorar a execução das Sprints.

### Lean Software Development

O **Lean Software Development** adapta os princípios Lean ao desenvolvimento de software.

Entre as ideias frequentemente associadas estão:

- Eliminar desperdícios.
- Incorporar qualidade.
- Criar conhecimento.
- Adiar decisões irreversíveis até existir informação suficiente.
- Entregar rapidamente.
- Respeitar as pessoas.
- Otimizar o sistema como um todo.

### Exemplo prático — processo de desenvolvimento

**Processo inicial:**

```text
REQUISITO
   |
   v
DESENVOLVIMENTO
   |
   v
ESPERA POR REVISÃO
   |
   v
CORREÇÕES
   |
   v
ESPERA POR TESTES
   |
   v
TESTES
   |
   v
ESPERA POR DEPLOY
   |
   v
ENTREGA
```

A equipa identifica que grande parte do tempo é consumida por esperas.

**Melhorias possíveis:**

- Reduzir o tamanho das alterações.
- Automatizar testes.
- Estabelecer prioridades claras.
- Melhorar revisões de código.
- Limitar tarefas simultâneas.
- Automatizar partes do deploy.

O resultado esperado é um fluxo mais previsível, sem comprometer os critérios de qualidade.

---

## 5. Integração entre BANI, Agilidade, Scrum e Lean

Os quatro conceitos estão relacionados, mas possuem finalidades diferentes.

| Conceito | Principal contribuição |
|---|---|
| **BANI** | Compreender características dos ambientes atuais |
| **Agilidade** | Adaptar-se e entregar valor continuamente |
| **Scrum** | Organizar o desenvolvimento através de ciclos empíricos |
| **Lean** | Reduzir desperdícios e melhorar o fluxo de trabalho |

### Exemplo integrado

Uma empresa desenvolve uma aplicação SaaS num mercado sujeito a mudanças frequentes.

**Mundo BANI**

A equipa reconhece que existem incertezas tecnológicas, dependências e mudanças nas necessidades dos utilizadores.

**Agilidade**

A organização prioriza entregas frequentes e feedback.

**Scrum**

A equipa organiza o trabalho em Sprints, com objetivos e incrementos utilizáveis.

**Lean**

Os profissionais identificam gargalos, reduzem retrabalho e evitam acumular funcionalidades inacabadas.

```text
                 MUNDO BANI
                     |
                     v
             NECESSIDADE DE
              ADAPTAÇÃO
                     |
                     v
                 AGILIDADE
                     |
          +----------+----------+
          |                     |
          v                     v
        SCRUM                  LEAN
          |                     |
          v                     v
    Sprints e feedback    Fluxo e redução
                          de desperdícios
          |                     |
          +----------+----------+
                     |
                     v
             ENTREGA CONTÍNUA
                 DE VALOR
```

### Boas práticas

- Adaptar a abordagem ao contexto do projeto.
- Priorizar necessidades reais dos clientes.
- Trabalhar com objetivos claros.
- Recolher feedback regularmente.
- Evitar excesso de trabalho simultâneo.
- Promover colaboração e autonomia.
- Incorporar qualidade desde o desenvolvimento.
- Avaliar resultados e melhorar continuamente.

A adoção de Scrum ou Lean não torna uma organização automaticamente ágil. A agilidade depende da capacidade efetiva de aprender, colaborar e responder às mudanças.

---

## Resumo em uma frase

> O mundo BANI descreve ambientes frágeis, ansiosos, não lineares e incompreensíveis, nos quais a Agilidade contribui para responder às mudanças através de colaboração, adaptação e entregas frequentes, enquanto o Scrum organiza o desenvolvimento com responsabilidades, Sprints, eventos e artefactos bem definidos, e o Lean promove a eliminação de desperdícios, a melhoria do fluxo de trabalho e a entrega contínua de valor ao cliente.

---

## Conceitos relacionados para estudar a seguir

- **Kanban em profundidade** — compreender os limites de WIP, políticas explícitas, Lead Time, Cycle Time e métricas de fluxo.

- **Extreme Programming (XP)** — estudar Pair Programming, Test-Driven Development (TDD), integração contínua e refatoração.

- **Scrum Avançado** — aprofundar Product Goal, Sprint Goal, Definition of Done, refinamento do backlog e gestão de dependências.

- **Lean Six Sigma** — compreender como eliminar desperdícios e reduzir a variabilidade dos processos.

- **DevOps e CI/CD** — estudar práticas de automatização, integração contínua e entrega contínua no desenvolvimento de software.

- **Agilidade Organizacional** — analisar como as organizações podem adaptar estruturas, estratégias e processos a ambientes complexos.

- **Métricas Ágeis** — estudar Velocity, Lead Time, Cycle Time, Throughput e Burndown Charts.
