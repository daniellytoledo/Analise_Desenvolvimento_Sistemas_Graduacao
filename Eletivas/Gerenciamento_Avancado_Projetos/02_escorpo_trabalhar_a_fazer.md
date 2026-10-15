# Escopo: O Trabalho a Fazer

---

## 1. De Onde Vêm os Projetos — o processo de criação

### Projetos não surgem do nada

Todo projeto nasce de uma **necessidade ou oportunidade** identificada por uma organização. Entender a origem de um projeto é essencial para o gestor — porque é esta origem que define o propósito real do trabalho e o critério último de sucesso.

### As seis origens mais comuns de projetos (PMBOK®)

O PMBOK® identifica seis categorias de factores que originam projectos:

**1. Requisitos do negócio ou do mercado**
A organização identifica uma oportunidade ou uma necessidade de mercado que exige um novo produto, serviço, ou melhoria. Exemplos: um banco que decide lançar um aplicativo mobile porque os concorrentes já têm; uma empresa que detecta uma nova regulamentação que exige adaptação dos seus sistemas.

**2. Pedidos de clientes ou stakeholders**
Um cliente externo ou interno faz um pedido formal que justifica a criação de um projeto. Exemplos: um cliente empresarial que solicita o desenvolvimento de um sistema personalizado; um departamento interno que pede à TI um novo módulo no ERP.

**3. Requisitos legais, regulatórios ou sociais**
Legislação nova, normas regulatórias, ou pressões sociais obrigam a organização a agir. Exemplos: a implementação da LGPD (Lei Geral de Proteção de Dados) no Brasil obrigou milhares de empresas a criar projectos de adequação; novas normas de acessibilidade digital obrigam actualizações de sistemas.

**4. Avanços tecnológicos**
Uma nova tecnologia cria oportunidades ou torna obsoletas soluções existentes. Exemplos: a adopção de computação em nuvem (como estudado no Módulo 4A) que leva organizações a migrar infraestrutura; o surgimento de IA generativa que cria projectos de integração em produtos existentes.

**5. Necessidades estratégicas da organização**
Projectos criados para executar a estratégia corporativa — fusões, expansão para novos mercados, transformação digital, melhoria de processos. São frequentemente os projectos mais visíveis e com maior patrocínio executivo.

**6. Problemas ou riscos identificados**
Problemas operacionais recorrentes ou riscos identificados que precisam de ser mitigados. Exemplos: sistema legado com alto índice de falhas que exige substituição; processo manual propenso a erros que será automatizado.

### O processo de iniciação de um projecto

Antes de um projecto ser formalmente autorizado, ele passa por um processo de avaliação que pode incluir:

**Business Case (Caso de Negócio)**
Um documento que justifica a existência do projecto do ponto de vista do negócio — responde à pergunta "vale a pena fazer este projecto?". Inclui:
- Descrição do problema ou oportunidade
- Análise das alternativas consideradas (incluindo a opção de não fazer nada)
- Benefícios esperados (financeiros e não financeiros)
- Estimativa de custos e recursos necessários
- Riscos de alto nível
- Recomendação

**Project Selection (Selecção de Projectos)**
Organizações raramente têm apenas um projecto possível — têm mais ideias do que capacidade de execução. A selecção envolve priorizar com base em critérios como:

- *Métodos financeiros*: ROI (Return on Investment), NPV (Net Present Value — Valor Presente Líquido), IRR (Internal Rate of Return), Payback Period
- *Métodos de pontuação*: matrizes de priorização que avaliam projectos por múltiplos critérios (alinhamento estratégico, custo, risco, benefício)
- *Decisão executiva*: em muitos casos, projectos estratégicos são aprovados por decisão da liderança com base em intuição estratégica informada por dados

**Registro de Projectos / Portfólio**
As organizações maduras mantêm um registo central de todos os projectos activos e propostos — gerido por um **PMO (Project Management Office)** — garantindo visibilidade, priorização e evitando conflitos de recursos entre projectos.

---

## 2. Termo de Abertura — Premissas e Restrições

### O que é o Termo de Abertura do Projecto

O **Termo de Abertura do Projecto** (TAP) — em inglês, *Project Charter* — é o documento que **formaliza oficialmente a existência do projecto** e autoriza o gestor de projecto a utilizar os recursos organizacionais para executá-lo.

É o "certidão de nascimento" do projecto. Sem o TAP aprovado, tecnicamente o projecto não existe formalmente na organização — e o PM não tem autoridade para alocar recursos, tomar decisões ou comprometer orçamento.

**Quem emite o Termo de Abertura?**
O TAP é emitido pelo **patrocinador** (sponsor) — normalmente um executivo com autoridade suficiente para comprometer recursos. Não é o PM quem aprova o próprio TAP; é o patrocinador que o assina e delega autoridade ao PM através dele.

### O que o Termo de Abertura contém

```
TERMO DE ABERTURA DO PROJECTO
────────────────────────────────────────────────────────

IDENTIFICAÇÃO
Nome do Projecto:     [nome do projecto]
Código / ID:          [identificador interno]
Data de Aprovação:    [dd/mm/aaaa]
Patrocinador:         [nome e cargo]
Gestor do Projecto:   [nome designado]

PROPÓSITO E JUSTIFICATIVA
[Por que este projecto existe? Que problema resolve
ou que oportunidade aproveita? Referência ao Business Case.]

OBJECTIVOS DO PROJECTO (SMART)
[Objetivos mensuráveis, atingíveis, com prazo definido
— ver `01_habilidades_tecnicas_psicossociais.md`, secção SMART]

DESCRIÇÃO DE ALTO NÍVEL DO PROJECTO
[O que será entregue — sem entrar em detalhes que
cabem na fase de planeamento]

PRINCIPAIS ENTREGÁVEIS (HIGH-LEVEL)
[Lista dos principais produtos/resultados esperados]

MARCOS PRINCIPAIS E CRONOGRAMA DE ALTO NÍVEL
Marco                          Data prevista
────────────────────────────────────────────
Kickoff do projecto            [data]
Conclusão da fase de design    [data]
Lançamento                     [data]

ORÇAMENTO DE ALTO NÍVEL
Estimativa total:  [valor em €/$]
Fonte de recursos: [departamento / linha orçamental]

STAKEHOLDERS IDENTIFICADOS (PRINCIPAIS)
[Lista dos stakeholders-chave identificados inicialmente]

PREMISSAS
[Ver secção abaixo]

RESTRIÇÕES
[Ver secção abaixo]

RISCOS DE ALTO NÍVEL
[Riscos mais óbvios nesta fase inicial]

AUTORIDADE DO GESTOR DE PROJECTO
[Nível de autonomia para decisões de recursos, custo,
e mudanças sem necessidade de aprovação superior]

APROVAÇÃO
Patrocinador: ________________   Data: __________
```

### Premissas (Assumptions)

**Premissas** são factores que, para efeitos de planeamento, são considerados **verdadeiros, reais, ou certos** — embora não tenham sido verificados de forma rigorosa.

Premissas são necessárias porque nenhum projecto começa com informação perfeita. Ao documentá-las explicitamente, o PM:
- Torna visível o que está a ser assumido (em vez de deixar implícito)
- Cria a base para revisão futura — se uma premissa se revelar falsa, é desencadeada uma análise de impacto
- Partilha a responsabilidade — stakeholders que validam as premissas co-responsabilizam-se por elas

**Exemplos de premissas:**
```
✓ O sistema de autenticação existente estará disponível para integração
  até ao início da fase de desenvolvimento

✓ Os utilizadores finais falarão português — não será necessária
  versão em inglês no lançamento inicial

✓ A equipa terá acesso ao ambiente de desenvolvimento até ao final
  do projecto sem interrupções planeadas

✓ O fornecedor externo de APIs entregará a documentação técnica
  até à semana 3 do projecto

✓ Haverá disponibilidade de pelo menos 2 especialistas de negócio
  para as sessões de levantamento de requisitos
```

**O que acontece quando uma premissa é violada?**
Uma premissa não confirmada que se revela falsa torna-se automaticamente um **risco** (se ainda for incerta) ou um **issue** (se já aconteceu). Deve ser tratada imediatamente — avaliando o impacto em escopo, prazo, custo e qualidade, e actualizando o plano em conformidade.

### Restrições (Constraints)

**Restrições** são factores **limitantes** que delimitam as opções disponíveis para a equipa — condições que são dadas como certas e que o projecto tem de respeitar, independentemente do que seria "ideal".

Restrições operam nos três lados da tripla restrição (escopo, prazo, custo) e além:

**Tipos de restrições comuns:**

*Restrições de prazo:*
```
• O sistema precisa de estar operacional até 31 de março — prazo
  regulatório definido por lei, não negociável
• O lançamento do produto deve coincidir com a conferência anual
  do sector em novembro
```

*Restrições de orçamento:*
```
• O orçamento total aprovado é de €150.000 — qualquer trabalho
  adicional requer aprovação do Comité Executivo
• Não há orçamento para contratação de recursos externos —
  o projecto deve ser executado com recursos internos
```

*Restrições de recursos:*
```
• O especialista em bases de dados só está disponível 50% do
  tempo — os outros 50% estão comprometidos com operações
• Apenas uma equipa de desenvolvimento está disponível —
  trabalho paralelo de desenvolvimento não é possível
```

*Restrições tecnológicas:*
```
• A solução deve usar apenas tecnologias já licenciadas pela organização
• O sistema deve ser compatível com o ERP SAP existente
• Não é permitido armazenar dados fora do território nacional
  (restrição legal — ver RGPD, LGPD)
```

*Restrições de qualidade:*
```
• O sistema deve ter disponibilidade mínima de 99,5% (SLA definido)
• Todo código deve passar por revisão de segurança antes do deploy
```

**Premissas vs. Restrições — a distinção:**

| | Premissa | Restrição |
|---|---|---|
| **Natureza** | Algo que *acreditamos ser verdade* mas não confirmámos | Algo que *sabemos ser uma limitação* imposta ao projecto |
| **Origem** | Incerteza — pode ou não ser verdade | Certeza — é uma condição dada |
| **Risco associado** | Sim — se falsa, gera impacto | Não são riscos — são factos a respeitar |
| **Exemplo** | "Assumimos que o cliente aprovará o design em 3 dias" | "O projecto tem de estar concluído até 30 de junho" |

---

## 3. Requisitos — prover o que é necessário para cumprir o projecto

### O que são requisitos

**Requisitos** são as condições ou capacidades que um produto, serviço, ou resultado deve ter ou satisfazer para atender às necessidades dos stakeholders e às condições do contrato ou especificação. São a ponte entre o problema do stakeholder e a solução que o projecto vai criar.

Um requisito mal definido é uma das causas mais comuns de retrabalho, atraso e conflito em projectos. A frase "isto não era o que eu queria" no final de um projecto é quase sempre um sinal de que os requisitos foram mal levantados, mal documentados, ou mal validados.

### Tipos de requisitos

**Requisitos de Negócio**
Descrevem as necessidades de alto nível da organização — o *porquê* do projecto. Respondem à pergunta: "O que o negócio precisa de alcançar?"

```
Exemplo: "O departamento de vendas precisa de reduzir o tempo de
geração de propostas comerciais de 2 dias para 4 horas."
```

**Requisitos de Stakeholders**
Descrevem as necessidades de um grupo específico de partes interessadas. Respondem à pergunta: "O que cada grupo de stakeholders precisa?"

```
Exemplo (equipa de vendas):  "Quero poder gerar uma proposta a partir
                              de um template pré-aprovado, sem precisar
                              de aprovação do marketing para cada proposta."

Exemplo (director financeiro): "Todas as propostas devem incluir
                                automaticamente as condições de pagamento
                                e as margens mínimas aprovadas."
```

**Requisitos de Solução**
Descrevem as características que a solução (produto, sistema, serviço) deve ter para satisfazer os requisitos de negócio e de stakeholders. Dividem-se em:

- *Funcionais*: o que o sistema deve fazer — as funcionalidades, comportamentos e capacidades
  ```
  "O sistema deve permitir ao vendedor seleccionar um template,
  preencher o nome do cliente e o produto, e gerar o PDF da proposta
  em menos de 30 segundos."
  ```

- *Não-funcionais*: como o sistema deve ser — performance, segurança, usabilidade, disponibilidade
  ```
  "O sistema deve estar disponível 99,5% do tempo durante o horário
  de trabalho (08h–20h, segunda a sexta)."
  "O tempo de geração do PDF não deve exceder 30 segundos."
  "O sistema deve ser acessível em dispositivos móveis (WCAG 2.1 AA)."
  ```

**Requisitos de Transição**
Descrevem o que é necessário para mover da situação actual para a nova solução — migração de dados, formação de utilizadores, operação paralela, etc.

```
Exemplo: "Os dados históricos de propostas dos últimos 3 anos devem
         ser migrados para o novo sistema antes do lançamento."
         "Os utilizadores devem receber 4 horas de formação antes
         de acederem ao sistema."
```

**Requisitos de Qualidade**
Critérios que devem ser satisfeitos para que os entregáveis sejam considerados aceitáveis.

```
Exemplo: "O sistema deve passar em todos os testes de segurança
         definidos pela equipa de cibersegurança antes do lançamento."
```

**Requisitos de Conformidade/Regulatórios**
Requisitos impostos por lei, normas, ou regulamentos.

```
Exemplo: "O sistema deve cumprir os requisitos da LGPD/RGPD,
         incluindo o registo de consentimento e o direito ao
         esquecimento dos dados dos clientes."
```

### O Processo de Levantamento de Requisitos

**1. Identificar as fontes de requisitos**
Não são apenas os utilizadores directos — todos os stakeholders têm necessidades potencialmente relevantes: utilizadores finais, gestores, TI, jurídico, conformidade, financeiro, fornecedores, reguladores.

**2. Técnicas de levantamento**

| Técnica | Quando usar | Vantagem |
|---|---|---|
| **Entrevistas individuais** | Stakeholders com necessidades específicas ou sensíveis | Profundidade, privacidade |
| **Workshops (JAD sessions)** | Grupos com necessidades relacionadas | Consenso, eficiência |
| **Questionários / Surveys** | Grupos grandes e geograficamente dispersos | Escala, baixo custo |
| **Observação (Job Shadowing)** | Quando o utilizador não consegue articular as suas necessidades | Comportamento real |
| **Prototipagem** | Quando os requisitos são difíceis de verbalizar | Valida visualmente antes de construir |
| **Análise de documentos** | Sistemas existentes, contratos, legislação | Requisitos já documentados |
| **Benchmarking** | Entender o que as melhores soluções do mercado oferecem | Referências de qualidade |

**3. Documentar os requisitos**

Os requisitos devem ser documentados com clareza suficiente para que possam ser:
- Compreendidos sem ambiguidade
- Testados (verificados) quando implementados
- Rastreados até à sua origem

Um bom requisito é **SMART no sentido de testável**:
```
❌ Mau requisito: "O sistema deve ser rápido."
✅ Bom requisito: "O tempo de resposta do sistema para pesquisas
                   de proposta não deve exceder 2 segundos para
                   95% das consultas, medido em condições normais
                   de utilização (até 50 utilizadores simultâneos)."
```

**4. Validar e aprovar os requisitos**
Os requisitos levantados devem ser revistos com os stakeholders que os originaram — para confirmar que foram compreendidos correctamente — e depois formalmente aprovados. Requisitos aprovados tornam-se a linha de base a partir da qual mudanças serão geridas.

### Matriz de Rastreabilidade de Requisitos (RTM)

A **Matriz de Rastreabilidade de Requisitos** é um documento que liga cada requisito à sua origem (objectivo de negócio), à entrega que o satisfaz (WBS), e aos testes que o validarão — garantindo que nada fica por implementar e que cada implementação serve um propósito claro.

```
ID    │ Requisito          │ Origem          │ WBS    │ Teste    │ Estado
──────┼────────────────────┼─────────────────┼────────┼──────────┼────────
REQ-01│ Gerar PDF em <30s  │ Dir. Vendas     │ 3.1.2  │ TC-05    │ Em Dev
REQ-02│ Disponib. 99,5%    │ SLA contratual  │ 4.2.1  │ TC-12    │ Planeado
REQ-03│ Conformidade LGPD  │ Dept. Jurídico  │ 3.3.1  │ TC-18    │ Planeado
REQ-04│ Formação usuarios  │ RH              │ 5.1.0  │ Avaliação│ Planeado
```

---

## 4. Estrutura de Divisão do Trabalho — Dividir para Conquistar

### O princípio por trás da WBS

"*Como se come um elefante? Aos poucos.*" — este ditado resume o princípio central da **WBS (Work Breakdown Structure)**, chamada em português de **EAP (Estrutura Analítica do Projecto)**.

Projectos complexos são difíceis de estimar, planear e controlar como um todo. Ao decompô-los em componentes menores e progressivamente mais detalhados, até chegar a unidades de trabalho gerenciáveis, o PM ganha:
- Estimativas de prazo e custo mais precisas
- Atribuição clara de responsabilidades
- Capacidade de monitorizar o progresso a um nível granular
- Uma base sólida para o cronograma e o orçamento

### O que é a WBS — e o que não é

**O que a WBS é:**
- Uma decomposição hierárquica de **todo o trabalho** do projecto
- Orientada a **entregáveis** (o que será produzido), não a actividades (o que se vai fazer)
- A base para o planeamento de todos os outros aspectos do projecto (cronograma, custo, recursos)
- 100% do escopo do projecto — nem mais, nem menos

**O que a WBS não é:**
- ❌ Um cronograma — a WBS não tem datas nem sequência temporal
- ❌ Um organograma — não representa a estrutura da equipa
- ❌ Uma lista de tarefas — representa entregáveis, não acções
- ❌ Um fluxograma — não representa processos ou fluxos de trabalho

### A Regra dos 100%

A WBS deve capturar **100% do trabalho do projecto** — cada entregável e sub-entregável incluído no escopo deve aparecer na WBS. Nada deve ficar de fora (subestimação) nem ser incluído além do escopo acordado (scope creep).

Esta regra aplica-se em cada nível da hierarquia: a soma dos filhos deve representar 100% do pai.

```
Projecto Website (100%)
  ├── Gestão do Projecto (100% da gestão)
  │       ├── Iniciação
  │       ├── Planeamento
  │       ├── Controlo
  │       └── Encerramento
  ├── Design (100% do design)
  │       ├── Pesquisa com utilizadores
  │       ├── Wireframes
  │       └── Design visual
  ├── Desenvolvimento (100% do desenvolvimento)
  │       ├── Front-end
  │       ├── Back-end
  │       └── Base de dados
  └── Lançamento (100% do lançamento)
          ├── Testes de QA
          ├── Deploy em produção
          └── Formação de utilizadores
```

### Níveis da WBS

A WBS decompõe-se em níveis progressivos de detalhe:

```
Nível 1 │ PROJECTO (o nome do projecto inteiro)
────────┤
Nível 2 │ FASES ou GRANDES ENTREGÁVEIS
        │ (ex: Design, Desenvolvimento, Lançamento)
────────┤
Nível 3 │ ENTREGÁVEIS
        │ (ex: Wireframes, Design visual, Front-end)
────────┤
Nível 4 │ SUB-ENTREGÁVEIS
        │ (ex: Wireframes mobile, Wireframes desktop)
────────┤
Nível N │ PACOTES DE TRABALHO (Work Packages)
        │ A unidade mais baixa da WBS — pode ser:
        │ estimada, atribuída, monitorizadae controlada
```

**O que é um Work Package?**
O **pacote de trabalho** é o nível mais baixo da WBS — o elemento que pode ser:
- Estimado em custo e duração com razoável precisão
- Atribuído a uma pessoa ou equipa responsável
- Monitorizado e controlado ao longo da execução

Cada pacote de trabalho é depois decomposto, fora da WBS, em **actividades** que compõem o cronograma.

### Como construir uma WBS

**Passo 1 — Definir o nível 1**
O nome do projecto — o entregável raiz que representa 100% do trabalho.

**Passo 2 — Identificar os principais entregáveis (nível 2)**
Quais são as grandes componentes do projecto? Podem ser organizadas por:
- *Fases do ciclo de vida*: Início, Planeamento, Execução, Encerramento
- *Entregáveis principais*: Produto A, Produto B, Documentação, Formação
- *Subprojectos*: Módulo 1, Módulo 2, Módulo 3
- *Localização ou equipa*: Sede, Filial Sul, Equipa Externa

**Passo 3 — Decompor cada entregável até ao nível de pacote de trabalho**
Continuar a decompor cada elemento até chegar a um nível onde:
- A duração pode ser estimada (geralmente entre 8h e 80h de trabalho — a "regra de 8 a 80")
- Pode ser claramente atribuído a um responsável
- O progresso pode ser verificado objectivamente

**Passo 4 — Codificar os elementos**
Atribuir um código único a cada elemento da WBS para facilitar a referência:

```
1.0 Projecto Website
    1.1 Gestão do Projecto
        1.1.1 Planeamento
        1.1.2 Relatórios de status
        1.1.3 Reuniões de acompanhamento
    1.2 Design
        1.2.1 Pesquisa com utilizadores
            1.2.1.1 Entrevistas (5 sessões)
            1.2.1.2 Análise e síntese
        1.2.2 Wireframes
            1.2.2.1 Wireframes mobile (8 ecrãs)
            1.2.2.2 Wireframes desktop (8 ecrãs)
            1.2.2.3 Teste e validação
```

**Passo 5 — Verificar com a Regra dos 100%**
Confirmar que cada nível cobre completamente o seu elemento pai — sem sobreposições nem lacunas.

### WBS Dictionary (Dicionário da WBS)

Para cada pacote de trabalho da WBS, o **Dicionário da WBS** documenta:

```
Código WBS:        1.2.2.1
Nome:              Wireframes mobile (8 ecrãs)
Descrição:         Criação de wireframes mid-fidelidade para as 8 telas
                   principais do aplicativo mobile, em formato Figma,
                   incluindo estados de interação e fluxos de navegação.
Responsável:       UX Designer — [nome]
Entregável:        Ficheiro Figma partilhado + PDF exportado
Critérios de       Aprovação pelo Product Owner após revisão com
aceitação:         2 rondas de feedback máximo
Estimativa:        16 horas de trabalho
Dependências:      1.2.1.2 (Análise e síntese da pesquisa) concluída
Marcos:            Aprovação até [data]
Custo estimado:    €[valor]
```

O Dicionário da WBS elimina a ambiguidade que pode existir nos nomes curtos dos elementos — garantindo que toda a equipa tem a mesma compreensão do que está incluído em cada pacote de trabalho.

### Ferramentas para criar a WBS

| Ferramenta | Vantagem |
|---|---|
| **Post-its numa parede** | Colaborativo, fácil de reorganizar, ideal para workshops |
| **Miro / Mural** | Digital, colaborativo, partilhável remotamente |
| **Microsoft Project** | Integração directa com cronograma |
| **WBS Chart Pro** | Especializado em WBS visual |
| **Notion / Confluence** | Documentação integrada ao restante do projecto |
| **Excel / Google Sheets** | Simples e amplamente disponível |

A escolha da ferramenta é secundária — o que importa é a qualidade da decomposição e a aderência à Regra dos 100%.

---

## Resumo em uma frase

> Projectos nascem de necessidades de negócio, mercado, regulação ou estratégia e são formalizados através do Termo de Abertura (que autoriza o PM e documenta premissas e restrições), conduzidos por requisitos cuidadosamente levantados e rastreados na Matriz de Rastreabilidade, e planeados com precisão através da WBS — a decomposição hierárquica de 100% do trabalho em pacotes gerenciáveis que servem de base para todo o cronograma, orçamento e controlo subsequentes.

---

## Conceitos relacionados para estudar a seguir

- **Técnicas de estimativa de esforço** — estimativa análoga, paramétrica, de três pontos (PERT), e Planning Poker para contextos ágeis
- **Cronograma e CPM** — como transformar a WBS num cronograma com dependências, durações, e identificação do caminho crítico
- **Gestão de Requisitos em projectos ágeis** — como o Product Backlog e as histórias de utilizador substituem (parcialmente) a documentação de requisitos tradicional em contextos ágeis
- **Scope Baseline** — a versão aprovada e congelada do escopo (Declaração de Escopo + WBS + Dicionário) que serve de referência para controlo de mudanças
- **Análise de Requisitos com UML** — como diagramas de casos de uso, diagramas de sequência e outros artefactos UML são usados para documentar requisitos de sistemas complexos