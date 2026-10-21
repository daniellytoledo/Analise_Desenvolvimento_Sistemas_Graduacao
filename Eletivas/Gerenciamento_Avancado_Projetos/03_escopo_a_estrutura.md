# Escopo: A Estrutura

> Este ficheiro aprofunda a estruturação do escopo, partindo dos fundamentos da divisão do trabalho introduzidos em `02_escopo_trabalho_a_fazer.md` e expandindo para a sinergia entre a estrutura do trabalho (EAP) e a estrutura da organização (EOP).

---

## 1. Estrutura de Divisão do Trabalho — fundamentar o fracionamento de tarefas

### Por que fracionar é necessário

A natureza humana tem dificuldade em lidar com complexidade em bloco. Quando um projecto é apresentado como uma única tarefa de seis meses, a mente tende a:
- Subestimar o esforço total (a "falácia do planeamento", estudada por Daniel Kahneman)
- Não identificar o que realmente precisa de ser feito em cada momento
- Não conseguir detectar desvios a tempo de os corrigir

O fracionamento — a decomposição progressiva do trabalho em unidades menores — é a resposta estrutural a este problema. Não é apenas uma técnica de planeamento; é uma forma de **tornar o invisível visível**, transformando uma ideia abstracta ("lançar um novo sistema") em trabalho concreto e gerenciável.

### Os fundamentos do fracionamento de tarefas

**Princípio da decomposição progressiva**
O trabalho é decomposto de forma hierárquica — do geral para o específico, do abstracto para o concreto. Cada nível da hierarquia oferece uma visão com nível diferente de detalhe para diferentes audiências:
- **Nível 1–2**: adequado para executivos e patrocinadores — visão de alto nível
- **Nível 3–4**: adequado para gestores e líderes de equipa — planeamento táctico
- **Nível 5+**: adequado para membros da equipa — execução diária

**Princípio da orientação a entregáveis, não a actividades**
A decomposição deve sempre produzir **o quê** (entregáveis, produtos, resultados) — nunca **como** (acções, verbos, processos). Esta distinção é fundamental:

```
❌ Orientado a actividades (ERRADO para WBS):
   1.1 Reunir com stakeholders
   1.2 Escrever documento de requisitos
   1.3 Revisar com o cliente

✅ Orientado a entregáveis (CORRECTO para WBS):
   1.1 Documentação de Requisitos
       1.1.1 Requisitos funcionais aprovados
       1.1.2 Requisitos não-funcionais aprovados
       1.1.3 Matriz de Rastreabilidade
```

Por que importa? Porque actividades são meios, entregáveis são fins. Se o entregável está definido, a equipa tem liberdade para escolher as actividades mais eficientes para produzi-lo.

**Princípio da verificabilidade**
Cada elemento da decomposição deve ser **verificável** — deve existir um critério objectivo para dizer se está concluído ou não. Entregáveis vagos geram ambiguidade; entregáveis verificáveis geram clareza.

```
❌ Não verificável: "Design concluído"
✅ Verificável: "Ficheiro Figma com design hi-fi de 12 ecrãs,
                aprovado pelo Product Owner e exportado para
                entrega ao desenvolvimento"
```

**Princípio da responsabilidade única**
Cada pacote de trabalho (o nível mais baixo da decomposição) deve ter **um único responsável** — uma pessoa ou equipa que se comprometem com a sua entrega. Responsabilidade partilhada sem clareza de quem lidera tende a resultar em ninguém a assumir a responsabilidade efectiva.

**Regra prática do nível de detalhe**
Aprofundar até ao ponto em que:
- A duração pode ser estimada com precisão razoável
- A responsabilidade pode ser atribuída claramente
- O progresso pode ser verificado sem ambiguidade
- O custo pode ser estimado separadamente

A "regra de 8 a 80 horas" é uma referência prática: pacotes de trabalho com menos de 8h são demasiado fragmentados; com mais de 80h são difíceis de controlar. Em contextos ágeis com sprints de 2 semanas, o tecto é frequentemente 1 sprint (40–80h de equipa).

### Erros comuns no fracionamento

**Decomposição demasiado superficial**
Poucos níveis, pacotes de trabalho muito grandes — difícil de estimar, atribuir e controlar. O gestor perde a visibilidade sobre o progresso real até que seja tarde demais para corrigir.

**Decomposição excessiva**
Demasiados níveis, micro-tarefas de 1–2h — o overhead de gestão supera o valor. A equipa passa mais tempo a actualizar o plano do que a trabalhar.

**Mistura de entregáveis e actividades no mesmo nível**
Inconsistência na estrutura que confunde a equipa e dificulta a estimativa.

**WBS incompleta (viola a Regra dos 100%)**
Trabalho omitido na WBS que emerge depois como surpresa — geralmente ao custo de estouro de prazo ou orçamento.

**WBS "fotocópia"**
Reutilizar a WBS de um projecto anterior sem adaptação ao contexto actual. Cada projecto é único (ver `00_gestao_projeto.md`) — a WBS deve reflectir esse projeto específico.

---

## 2. Estrutura Analítica do Projeto (EAP) — apresentar a estrutura de trabalho

### A EAP como artefacto central do projecto

A **Estrutura Analítica do Projecto (EAP)** — o equivalente em português da WBS (Work Breakdown Structure) — é muito mais do que uma ferramenta de planeamento. É o **artefacto integrador** do projecto: a representação visual e estruturada de tudo o que precisa de ser feito, que serve de referência comum para toda a equipa, todos os stakeholders, e todas as fases do projecto.

```
EAP como artefacto central:

         ESCOPO            →  A EAP define e comunica o escopo
            │
         CRONOGRAMA        →  As actividades derivam dos pacotes de trabalho da EAP
            │
         CUSTO             →  Os custos são estimados ao nível dos pacotes de trabalho
            │
         QUALIDADE         →  Os critérios de aceitação são definidos por entregável
            │
         RECURSOS          →  A responsabilidade é atribuída por pacote de trabalho
            │
         COMUNICAÇÕES      →  O progresso é reportado pelos elementos da EAP
            │
         RISCOS            →  Os riscos são identificados ao nível dos entregáveis
```

### Formas de representar a EAP

A EAP pode ser representada de várias formas — a escolha depende do contexto, da audiência, e da ferramenta disponível.

**Diagrama em árvore (Tree Diagram)**
A forma mais intuitiva e amplamente usada — hierarquia visual de cima para baixo:

```
                    ┌──────────────────────┐
                    │  1.0 SISTEMA CRM     │
                    └──────────┬───────────┘
                               │
         ┌─────────────────────┼─────────────────────┐
         │                     │                     │
┌────────┴───────┐   ┌─────────┴──────┐   ┌─────────┴──────┐
│ 1.1 GESTÃO GP  │   │  1.2 SOFTWARE  │   │ 1.3 LANÇAMENTO │
└────────┬───────┘   └────────┬───────┘   └────────┬───────┘
         │                    │                    │
    ┌────┴────┐         ┌──────┴──────┐      ┌─────┴──────┐
    │1.1.1 TAP│         │1.2.1 Backend│      │1.3.1 Testes│
    └─────────┘         └─────────────┘      └────────────┘
    ┌─────────┐         ┌─────────────┐      ┌────────────┐
    │1.1.2 PM │         │1.2.2 Frontend│     │1.3.2 Deploy│
    └─────────┘         └─────────────┘      └────────────┘
                        ┌─────────────┐      ┌────────────┐
                        │1.2.3 BD     │      │1.3.3 Formação│
                        └─────────────┘      └────────────┘
```

**Lista hierárquica com indentação (Outline)**
Mais adequada para documentação e ferramentas de gestão de projectos:

```
1.0 Sistema CRM
    1.1 Gestão do Projecto
        1.1.1 Termo de Abertura
        1.1.2 Plano de Gestão do Projecto
        1.1.3 Relatórios de Progresso (mensais)
        1.1.4 Encerramento do Projecto
    1.2 Software
        1.2.1 Backend
            1.2.1.1 API de autenticação
            1.2.1.2 Módulo de clientes
            1.2.1.3 Módulo de oportunidades
        1.2.2 Frontend
            1.2.2.1 Interface web (desktop)
            1.2.2.2 Interface mobile (responsiva)
        1.2.3 Base de Dados
            1.2.3.1 Modelo de dados
            1.2.3.2 Migrações
            1.2.3.3 Backups e recuperação
    1.3 Lançamento
        1.3.1 Testes de Aceitação do Utilizador (UAT)
        1.3.2 Deploy em Produção
        1.3.3 Formação de Utilizadores
        1.3.4 Suporte Pós-Lançamento (30 dias)
```

**Tabela (Spreadsheet)**
Útil quando se quer associar directamente informação adicional a cada elemento (responsável, estimativa, datas):

| Código | Entregável | Nível | Responsável | Estimativa | Estado |
|---|---|---|---|---|---|
| 1.0 | Sistema CRM | 1 | PM | — | — |
| 1.1 | Gestão do Projecto | 2 | PM | — | — |
| 1.1.1 | Termo de Abertura | 3 | PM | 4h | Concluído |
| 1.2 | Software | 2 | Tech Lead | — | — |
| 1.2.1 | Backend | 3 | Dev Backend | — | — |
| 1.2.1.1 | API de autenticação | 4 | Dev A | 40h | Em curso |

### A EAP como instrumento de comunicação

Além do planeamento, a EAP serve como **ferramenta de comunicação** com diferentes audiências:

- **Para o patrocinador**: o nível 2 mostra as grandes componentes do projecto e confirma o alinhamento com o Business Case
- **Para a equipa**: os pacotes de trabalho definem claramente o que cada um precisa de entregar
- **Para o cliente**: a EAP é a forma mais clara de mostrar exactamente o que está incluído no projecto — e o que não está
- **Para novos membros da equipa**: a EAP é a forma mais rápida de um novo membro perceber a estrutura do projecto

---

## 3. EAP vs. EOP — a sinergia entre estrutura do trabalho e estrutura operacional

### O que é a EOP

A **EOP (Estrutura Organizacional do Projecto)** — em inglês *OBS (Organizational Breakdown Structure)* — é a representação hierárquica da organização do projecto: quem são as pessoas e equipas envolvidas, como se organizam, e quais as suas relações de reporte e responsabilidade dentro do contexto do projecto.

```
EOP — Exemplo:
                     ┌─────────────────┐
                     │   Patrocinador   │
                     └────────┬────────┘
                              │
                     ┌────────┴────────┐
                     │ Gestor Projecto  │
                     └────────┬────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
┌────────┴───────┐   ┌────────┴───────┐   ┌────────┴───────┐
│  Tech Lead     │   │  UX Lead       │   │  PMO / Suporte │
└────────┬───────┘   └────────┬───────┘   └────────┬───────┘
         │                    │                    │
    ┌────┴────┐          ┌────┴────┐         ┌────┴────┐
    │ Dev A   │          │Designer │         │ Analista│
    │ Dev B   │          │ UX      │         │ de dados│
    │ Dev C   │          │         │         │         │
    └─────────┘          └─────────┘         └─────────┘
```

### EAP vs. EOP — duas perspectivas complementares

A EAP e a EOP respondem a perguntas diferentes, mas profundamente relacionadas:

| | EAP (Estrutura Analítica do Projecto) | EOP (Estrutura Organizacional do Projecto) |
|---|---|---|
| **Responde a** | O quê precisa de ser feito? | Quem está disponível para fazer? |
| **Organiza** | Trabalho (entregáveis e pacotes) | Pessoas e equipas |
| **Perspectiva** | Do produto/resultado | Da organização/recursos |
| **Orientação** | Entregas | Responsabilidades |
| **Nível mais baixo** | Pacote de trabalho | Pessoa ou equipa |

Nenhuma das duas é suficiente por si só: a EAP sem a EOP é um plano sem executores; a EOP sem a EAP é uma equipa sem trabalho definido.

### A Matriz RAM — onde EAP e EOP se encontram

A **RAM (Responsibility Assignment Matrix — Matriz de Atribuição de Responsabilidades)** é o artefacto que **cruza a EAP com a EOP** — ligando cada pacote de trabalho às pessoas ou equipas responsáveis por ele.

A versão mais conhecida da RAM é a **Matriz RACI**:

| Papel | Significado |
|---|---|
| **R — Responsible** | Quem executa o trabalho — pode haver mais de um por tarefa |
| **A — Accountable** | Quem é responsável final pelo resultado — deve haver apenas um por tarefa |
| **C — Consulted** | Quem deve ser consultado antes das decisões — contribuição bidirecional |
| **I — Informed** | Quem deve ser informado dos resultados — comunicação unidirecional |

```
Matriz RACI — Exemplo (Projecto CRM):

                        │ PM  │ Tech Lead │ Dev A │ UX Designer │ Cliente │
────────────────────────┼─────┼───────────┼───────┼─────────────┼─────────┤
Termo de Abertura       │  A  │     C     │       │      C      │    I    │
Requisitos funcionais   │  A  │     C     │   C   │      R      │    C    │
Arquitectura de BD      │  I  │     A     │   R   │             │         │
Wireframes              │  I  │     C     │       │      A/R    │    C    │
API de autenticação     │  I  │     A     │   R   │             │         │
Testes de aceitação     │  A  │     C     │   C   │      C      │    R    │
Deploy em produção      │  A  │     R     │   R   │             │    I    │
```

**Regras para uma boa matriz RACI:**
- Cada linha deve ter exactamente **um A** — sem A é ninguém responsável; dois A é responsabilidade diluída
- Cada linha deve ter pelo menos **um R** — senão o trabalho não será feito
- Evitar excesso de C e I — se todos são consultados e informados em tudo, a comunicação torna-se ruído
- O R e o A podem ser a mesma pessoa (especialmente em equipas pequenas)

### A sinergia EAP + EOP na prática

A combinação EAP–EOP–RAM cria um sistema coerente de planeamento que responde a três questões fundamentais em gestão de projectos:

```
EAP responde:  "O QUÊ precisa de ser feito?"
               → Estrutura hierárquica de todos os entregáveis

EOP responde:  "QUEM está disponível para fazer?"
               → Estrutura da equipa do projecto

RAM responde:  "QUEM faz O QUÊ?"
               → Cruzamento que atribui responsabilidade clara
               a cada pacote de trabalho

Cronograma:    "QUANDO será feito?"
               → Sequência e duração das actividades derivadas da EAP

Orçamento:     "COM QUE CUSTO será feito?"
               → Estimativas por pacote de trabalho da EAP
```

Em conjunto, estes cinco elementos formam o núcleo do plano de gestão do projecto — e todos derivam ou dependem da EAP como artefacto central.

### Outros tipos de estruturas analíticas

Além da EAP (trabalho) e da EOP (organização), a gestão de projectos usa outras estruturas analíticas para diferentes propósitos:

**RBS (Risk Breakdown Structure — Estrutura Analítica de Riscos)**
Decomposição hierárquica das fontes de risco do projecto — por categoria (técnico, externo, organizacional, de gestão de projectos), facilitando a identificação sistemática de riscos em cada área.

```
RBS — Exemplo:
1.0 Riscos do Projecto CRM
    1.1 Riscos Técnicos
        1.1.1 Integração com sistemas legados
        1.1.2 Performance e escalabilidade
        1.1.3 Segurança de dados
    1.2 Riscos Externos
        1.2.1 Mudanças de requisitos do cliente
        1.2.2 Disponibilidade de fornecedores
    1.3 Riscos Organizacionais
        1.3.1 Rotatividade da equipa
        1.3.2 Conflito de prioridades
    1.4 Riscos de GP
        1.4.1 Estimativas imprecisas
        1.4.2 Scope creep
```

**CBS (Cost Breakdown Structure — Estrutura Analítica de Custos)**
Decomposição dos custos do projecto por categorias — mão de obra, material, equipamento, serviços externos, reservas de contingência — alinhada com a estrutura da EAP para permitir controlo de custo por entregável.

---

## 4. Ferramental e Saídas — reflectir sobre a escolha da ferramenta

### A armadilha da ferramenta

Um erro comum em gestão de projectos é escolher a ferramenta primeiro e tentar adaptar o processo a ela. A lógica correcta é inversa: **definir o problema, entender as necessidades da equipa e do projecto, e então escolher a ferramenta mais adequada**.

Uma EAP criada em post-its numa parede, em conjunto com a equipa, frequentemente produz melhores resultados do que uma EAP tecnicamente perfeita criada individualmente num software sofisticado. A ferramenta serve o processo — não o substitui.

### Critérios para escolher a ferramenta de EAP

**Tamanho e complexidade do projecto**
Para um projecto de 3 pessoas e 6 semanas, uma lista hierárquica no Notion ou num documento de texto é suficiente e mais ágil. Para um projecto de 50 pessoas e 18 meses, uma ferramenta dedicada como MS Project ou Primavera pode ser necessária.

**Nível de colaboração necessário**
Se a EAP será construída e mantida por múltiplas pessoas em simultâneo, ferramentas colaborativas (Miro, ClickUp, Notion) são superiores. Se for um artefacto gerido centralmente pelo PM, ferramentas individuais (Excel, MS Project) são suficientes.

**Integração com cronograma e custo**
Se a EAP precisa de se integrar directamente com o cronograma e o orçamento, ferramentas de PM profissionais (MS Project, Primavera P6) oferecem esta integração nativa. Se são geridos separadamente, a integração pode ser feita manualmente.

**Maturidade da equipa em GP**
Uma equipa nova em gestão de projectos beneficia de ferramentas simples e visuais (post-its, Miro, FigJam) que tornam o processo tangível. Uma equipa experiente pode tirar partido de ferramentas mais poderosas e complexas.

### Ferramentas por categoria e contexto

**Criação e visualização da EAP**

| Ferramenta | Tipo | Melhor para | Integração EAP→Cronograma |
|---|---|---|---|
| **Post-its + parede** | Físico | Workshops colaborativos, equipas co-localizadas | Manual |
| **Miro / Mural / FigJam** | Digital colaborativo | Equipas remotas, workshops visuais | Manual |
| **Microsoft Project** | PM profissional | Projectos grandes, integração nativa com cronograma | Automática |
| **Primavera P6** | PM enterprise | Projectos de engenharia e construção de grande porte | Automática |
| **WBS Chart Pro** | EAP dedicada | Visualização e impressão profissional de EAPs | Via MS Project |
| **ProjectLibre** | PM open-source | Alternativa gratuita ao MS Project | Automática |
| **Excel / Google Sheets** | Spreadsheet | Projectos simples, ampla disponibilidade | Manual |
| **Notion / Confluence** | Knowledge management | Documentação integrada ao plano do projecto | Manual |

**Gestão ágil (adaptada para EAP)**

| Ferramenta | Tipo | Adaptação à EAP |
|---|---|---|
| **Jira** | Agile PM | Epics → Stories → Tasks espelha EAP Nível 2 → 3 → Work Packages |
| **Linear** | Agile PM moderno | Projectos → Milestones → Issues como estrutura análoga à EAP |
| **ClickUp** | All-in-one PM | Spaces → Folders → Lists → Tasks como hierarquia EAP |
| **Asana** | Task management | Portfolios → Projectos → Secções → Tarefas |
| **Monday.com** | Visual PM | Grupos e sub-items para estrutura hierárquica |

### As saídas do processo de criação do escopo

O processo completo de gestão do escopo (ver `02_escopo_trabalho_a_fazer.md`) produz um conjunto de documentos que em conjunto formam a **Linha de Base do Escopo** — a referência imutável (salvo mudanças formalmente aprovadas) contra a qual o projecto será controlado:

**1. Declaração do Escopo do Projecto**
Documento narrativo que descreve:
- O que o projecto vai entregar (escopo do produto)
- O trabalho que precisa de ser feito (escopo do projecto)
- O que está **fora** do escopo (exclusões explícitas)
- Critérios de aceitação dos principais entregáveis
- Premissas e restrições (transferidas do Termo de Abertura e refinadas)

**2. EAP (a estrutura em si)**
A decomposição hierárquica completa — em qualquer das representações escolhidas (árvore, lista, tabela) — com codificação de todos os elementos.

**3. Dicionário da EAP**
Definição detalhada de cada pacote de trabalho — descrição, critérios de aceitação, responsável, estimativa, dependências (ver `02_escopo_trabalho_a_fazer.md`, secção Dicionário da WBS).

**Em conjunto: a Scope Baseline**

```
SCOPE BASELINE (Linha de Base do Escopo):
┌─────────────────────────────────────────────────────┐
│                                                       │
│  Declaração do Escopo   +   EAP   +   Dicionário EAP │
│                                                       │
│  → Versão aprovada e congelada                        │
│  → Qualquer alteração requer processo formal de       │
│    controlo de mudanças                               │
│  → Base de comparação para todo o controlo futuro     │
│                                                       │
└─────────────────────────────────────────────────────┘
```

### Reflexão sobre ferramentas vs. processos — a lição mais importante

A proliferação de ferramentas de gestão de projectos — e a tendência de muitas organizações de adoptar uma nova ferramenta como solução para problemas de GP — esconde uma verdade incómoda: **ferramentas não resolvem problemas de processo**.

Uma organização sem cultura de definição de escopo vai criar EAPs incompletas em qualquer ferramenta. Uma equipa que não sabe escrever bons requisitos vai ter um Jira cheio de histórias de utilizador vagas independentemente de quantas funcionalidades o Jira tenha. Um PM que não comunica bem vai ter relatórios confusos em qualquer dashboard.

```
Ordem correcta de adopção:
1. Definir o processo claro (o quê fazer e porquê)
2. Treinar a equipa no processo
3. Escolher a ferramenta que melhor suporta esse processo
4. Adaptar a ferramenta ao processo (não o contrário)

Ordem errada (comum):
1. Comprar/adoptar uma ferramenta
2. Tentar descobrir como usá-la
3. Adaptar o processo às limitações da ferramenta
4. Culpar a ferramenta quando os resultados não melhoram
```

A melhor ferramenta de gestão de projectos é aquela que a equipa **realmente usa** — o que implica que seja simples o suficiente para ser adoptada sem resistência, poderosa o suficiente para dar visibilidade ao que importa, e flexível o suficiente para se adaptar ao contexto específico de cada projecto.

---

## Resumo em uma frase

> A estrutura do escopo de um projecto é construída pelo fracionamento progressivo do trabalho em entregáveis verificáveis (EAP), pela organização das pessoas e equipas que os executarão (EOP), e pela sua integração numa Matriz de Responsabilidades (RAM/RACI) que torna explícito quem faz o quê — tudo isso documentado na Scope Baseline e suportado pela ferramenta mais adequada ao contexto, lembrando sempre que ferramentas servem processos e nunca os substituem.

---

## Conceitos relacionados para estudar a seguir

- **Técnicas de estimativa de pacotes de trabalho** — como transformar os pacotes de trabalho da EAP em estimativas de duração e custo: análoga, paramétrica, de três pontos (PERT), e bottom-up
- **Caminho Crítico (CPM)** — como sequenciar as actividades derivadas da EAP, identificar dependências, e calcular o caminho que determina a duração mínima do projecto
- **Controlo integrado de mudanças** — o processo formal pelo qual pedidos de alteração ao escopo (e consequentemente à EAP e à Scope Baseline) são avaliados, aprovados ou rejeitados
- **Ágil e EAP — como coexistem** — como o Product Backlog e a estrutura de Épicos → Histórias → Tarefas do Scrum se relacionam com (e por vezes substituem) a EAP tradicional em contextos ágeis
- **Dicionário da EAP em profundidade** — como documentar critérios de aceitação, premissas técnicas, e métricas de desempenho para cada pacote de trabalho, de forma a eliminar ambiguidade durante a execução