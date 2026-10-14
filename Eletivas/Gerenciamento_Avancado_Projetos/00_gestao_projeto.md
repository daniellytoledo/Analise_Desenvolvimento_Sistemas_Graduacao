# A Aurora da Gestão de Projetos

---

## Sumário

| # | Tema | Relevância |
|---|---|---|
| 1 | Introdução ao Gerenciamento de Projetos | Contextualizar a origem e a evolução da disciplina |
| 2 | Conceitos e Definições Gerais | Dominar o jargão essencial da área |
| 3 | Tipos de Organizações e Fases | Entender como diferentes estruturas gerem projetos e o ciclo de vida |
| 4 | Áreas de Gestão e Processos | Conhecer as áreas de conhecimento que estruturam a disciplina |

### Por que estudar Gestão de Projetos?

Gestão de projetos está em toda parte — construção de pirâmides, missões espaciais, lançamentos de produtos digitais, e implementações de sistemas de nuvem (como os estudados no Módulo 4A) são todos projetos. Dominar a disciplina significa saber **entregar resultados dentro do prazo, do custo e com a qualidade esperada** — uma competência cada vez mais exigida em qualquer área, não apenas em gestão.

Para quem trabalha com tecnologia, análise de dados, DevOps, ou desenvolvimento de produto, o gerenciamento de projetos oferece a linguagem e os processos para organizar o trabalho complexo, alinhar equipes, e comunicar progresso com clareza para todos os stakeholders.

---

## 1. Introdução ao Gerenciamento de Projetos

### Projetos existem há milênios

Antes de qualquer metodologia formalizada, a humanidade já geria projetos de enorme complexidade. As **Pirâmides de Gizé** (c. 2560 a.C.) exigiram coordenação de dezenas de milhares de trabalhadores, abastecimento logístico contínuo, planeamento de recursos e sequenciamento de atividades que levaram décadas. A **Grande Muralha da China** e os **aquedutos romanos** são outros exemplos de empreendimentos que, pela sua escala, já requeriam alguma forma de gestão estruturada — mesmo sem o nome.

O que faltava não era a prática de gerir projetos, mas a **sistematização e o registo dessas práticas** como uma disciplina académica e profissional transmissível.

### Os anos 1950 — o nascimento da disciplina formal

Foi apenas na **segunda metade do século XX** que as organizações começaram a utilizar o gerenciamento de projetos de forma **sistemática, documentada e replicável**. Dois factores principais aceleraram esse movimento:

**A complexidade crescente dos projetos industriais e militares**
O período pós-Segunda Guerra Mundial trouxe projetos de escala sem precedentes: o programa espacial americano, a corrida armamentista, a construção de infraestruturas nacionais. Estes projetos envolviam múltiplas organizações, orçamentos enormes, prazos políticos rígidos, e falhas que tinham consequências geopolíticas — o que tornou urgente desenvolver metodologias formais de planeamento e controlo.

**O surgimento do computador**
A disponibilidade crescente de computadores a partir dos anos 1950–60 permitiu cálculos de planeamento que seriam impossíveis manualmente — como as análises de caminho crítico que veremos mais à frente.

### Os pioneiros e as suas contribuições

**Henry Gantt (1861–1919)**
Engenheiro mecânico americano e consultor de gestão, Gantt é o criador do **gráfico que leva o seu nome** — o Gantt Chart, introduzido por volta de 1910–1915. O diagrama de barras horizontais que representa tarefas ao longo do tempo revolucionou o planeamento visual de projetos e continua sendo uma das ferramentas mais usadas no mundo mais de um século depois (já aplicado em `13_como_trabalhar_projeto_ux.md`, no contexto de UX).

Gantt desenvolveu o seu trabalho aplicando princípios científicos à gestão de fábricas e estaleiros navais, demonstrando que era possível planear e monitorizar o trabalho complexo de forma visual e sistemática.

**Henri Fayol (1841–1925)**
Engenheiro de minas e gestor francês, Fayol é considerado o pai da **teoria clássica da administração**. A sua obra principal, *Administration Industrielle et Générale* (1916), introduziu os **cinco elementos da gestão** que ainda estruturam a disciplina hoje:

```
1. Planear    → definir objectivos e os meios para atingi-los
2. Organizar  → estruturar recursos e responsabilidades
3. Comandar   → dirigir e coordenar actividades
4. Coordenar  → harmonizar esforços e actividades
5. Controlar  → verificar que o plano está a ser executado
```

Fayol foi também o criador dos **14 Princípios de Administração** (incluindo divisão do trabalho, autoridade, disciplina, unidade de comando, entre outros), que influenciaram profundamente as práticas de gestão do século XX.

**Frederick Winslow Taylor (1856–1915)**
Engenheiro americano e fundador da **Administração Científica** (*Scientific Management*), Taylor é talvez a figura mais influente — e controversa — da gestão industrial. A sua obra *Princípios da Administração Científica* (1911) propôs substituir o empirismo e a tradição por métodos científicos na organização do trabalho:

- **Análise científica de tarefas**: decompor cada trabalho nas suas operações elementares e cronometrá-las para encontrar o método mais eficiente
- **Selecção e treino científico dos trabalhadores**: escolher a pessoa certa para cada função e treiná-la sistematicamente
- **Separação entre planeamento e execução**: quem gere planeia; quem trabalha executa — uma divisão que moldou a estrutura das organizações industriais por décadas
- **Cooperação entre gestão e trabalhadores**: incentivos financeiros como mecanismo de alinhamento

As ideias de Taylor foram implementadas nas linhas de montagem da Ford e noutras grandes indústrias, tornando-se a base do que hoje chamamos **produtividade** e **eficiência operacional**.

### Linha do tempo da Gestão de Projetos

```
c. 2560 a.C. → Pirâmides de Gizé — gestão de projetos na prática, sem nome
c. 221 a.C.  → Grande Muralha da China — projecto multi-geração, multi-recursos
c. 50 a.C.   → Aquedutos Romanos — engenharia, logística e coordenação em escala

1911         → Taylor publica "Princípios da Administração Científica"
1916         → Fayol publica "Administration Industrielle et Générale"
1910–1915    → Henry Gantt desenvolve o Gantt Chart
1917         → Gantt Chart usado na Primeira Guerra Mundial (gestão de produção militar)

1950s        → GP começa a ser adoptado sistematicamente pelas organizações
1957         → Criação do CPM (Critical Path Method) — pela DuPont e Remington Rand
1958         → Criação do PERT (Program Evaluation and Review Technique) — pela NASA/Marinha dos EUA,
               para o Programa Polaris (míssil balístico)

1969         → Fundação do PMI (Project Management Institute) nos EUA
1987         → PMI publica a primeira edição do PMBOK® Guide
               (Project Management Body of Knowledge)

1996         → PMBOK® Guide — 1ª edição oficial e amplamente adoptada
1999         → Prince2 formalizado no Reino Unido como metodologia de GP
2001         → Manifesto Ágil — impacto profundo nos projectos de software
2009         → PMBOK® Guide 4ª edição
2017         → PMBOK® Guide 6ª edição (com maior integração de abordagens ágeis)
2021         → PMBOK® Guide 7ª edição — mudança de "processos" para "princípios",
               reconhecendo abordagens híbridas e ágeis como igualmente válidas
```

---

## 2. Conceitos e Definições Gerais — o jargão da área

### O que é um Projecto

O **PMI (Project Management Institute)** — a maior organização global de gestão de projetos — define um projecto como:

> *"Um esforço temporário empreendido para criar um produto, serviço ou resultado único."*

Três características são essenciais nesta definição:

- **Temporário**: tem início e fim definidos — não é uma operação contínua
- **Único**: o resultado é diferente de qualquer coisa que já existiu — mesmo que semelhante a outros projetos
- **Propósito definido**: existe para entregar algo específico — um produto, um serviço, ou um resultado

**Projecto vs. Operação:**

| | Projecto | Operação |
|---|---|---|
| **Duração** | Temporário — tem fim | Contínua — sem fim definido |
| **Resultado** | Único | Repetitivo |
| **Exemplo** | Construir um website | Manter e operar um website |
| **Exemplo** | Implementar um sistema ERP | Processar folha de pagamento mensalmente |

### Jargão essencial da área

**Stakeholders (Partes Interessadas)**
Qualquer pessoa ou organização que possa afectar, ser afectada, ou perceber-se como afectada pelo projecto. Inclui: patrocinador, equipa, cliente, utilizadores finais, fornecedores, reguladores, e comunidade impactada. Identificar e gerir stakeholders é uma das competências mais críticas do gestor de projecto.

**Patrocinador (Sponsor)**
A pessoa ou grupo que fornece recursos financeiros e suporte executivo para o projecto. É o "dono" do projecto do ponto de vista organizacional — a quem o gestor de projecto responde e de quem obtém autoridade para agir.

**Gestor de Projecto (Project Manager — PM)**
A pessoa responsável por liderar a equipa para atingir os objectivos do projecto. Não executa necessariamente o trabalho técnico, mas planeia, organiza, monitoriza, comunica e gere riscos e mudanças.

**Escopo (Scope)**
O trabalho que precisa de ser feito para entregar o projecto — o conjunto de características, funções, e requisitos do produto ou resultado. Definir claramente o escopo é fundamental para evitar o **scope creep** (expansão gradual e não controlada do escopo durante o projecto).

**Tripla Restrição (Iron Triangle)**
O modelo clássico que representa os três constrangimentos fundamentais de qualquer projecto:

```
              ESCOPO
              /\
             /  \
            /    \
           /      \
          /__________\
        TEMPO      CUSTO

"Bom, rápido e barato — escolha dois."
```

Alterar qualquer um dos três lados inevitavelmente afecta pelo menos um dos outros: aumentar o escopo sem aumentar o tempo ou o custo compromete a qualidade; reduzir o prazo sem reduzir o escopo aumenta o custo.

**Deliverable (Entregável)**
Qualquer resultado tangível ou intangível produzido durante o projecto — um relatório, um protótipo, um módulo de software, um documento aprovado. Podem ser internos (usados pela equipa) ou externos (entregues ao cliente).

**Milestone (Marco)**
Um ponto de verificação significativo no calendário do projecto, que marca a conclusão de uma fase, a aprovação de um entregável importante, ou o alcance de um objectivo crítico. Não tem duração — é um ponto no tempo.

**Risco**
Um evento ou condição incerta que, se ocorrer, terá um efeito positivo ou negativo no projecto. Riscos positivos são **oportunidades**; riscos negativos são **ameaças**. A gestão de riscos envolve identificar, analisar, planear respostas, e monitorizar.

**Issue (Problema)**
Um risco que já se materializou — uma condição que já está a afectar o projecto e que requer acção imediata. A distinção entre risco e issue é temporal: risco é potencial (futuro); issue é actual (presente).

**Baseline (Linha de Base)**
A versão aprovada e congelada de um plano (de escopo, de cronograma, de custo) que serve como referência para medir o desempenho e as variações do projecto ao longo do tempo.

**WBS (Work Breakdown Structure — Estrutura Analítica do Projecto / EAP)**
Uma decomposição hierárquica do trabalho total do projecto em componentes menores e mais gerenciáveis, até ao nível de pacotes de trabalho que podem ser atribuídos, estimados e controlados. A WBS não descreve *como* o trabalho será feito, apenas *o quê* precisa de ser feito.

**Caminho Crítico (Critical Path)**
A sequência mais longa de actividades dependentes que determina a duração mínima do projecto. Qualquer atraso numa actividade do caminho crítico atrasa directamente o fim do projecto. Actividades fora do caminho crítico têm "folga" (float) — podem atrasar até certo ponto sem impactar a data final.

---

## 3. Tipos de Organizações, Características e Fases

### Tipos de Estruturas Organizacionais

A forma como uma organização está estruturada tem impacto directo em como os projectos são geridos — especificamente, em quanta autoridade o gestor de projecto tem e como os recursos humanos são partilhados.

**Estrutura Funcional**
A organização está dividida em departamentos por função (financeiro, marketing, TI, RH). Os projectos são executados dentro dos departamentos, e o gestor de projecto tem pouca ou nenhuma autoridade formal — os recursos reportam ao gestor funcional.

```
CEO
├── Departamento de TI
│       └── Projecto A (gerido pelo chefe de TI)
├── Departamento de Marketing
│       └── Projecto B (gerido pelo director de marketing)
└── Departamento Financeiro
```

*Vantagens:* especialização clara, uso eficiente de recursos especializados, carreira técnica definida.
*Desvantagens:* silos entre departamentos, pouca visibilidade do projecto como um todo, gestores de projecto com autoridade limitada.

**Estrutura Projectizada (ou por Projectos)**
A organização existe para executar projectos — as equipes são formadas e desfeitas conforme os projectos. O gestor de projecto tem autoridade total sobre a equipa e os recursos.

```
CEO
├── Projecto A (Gestor de Projecto A — autoridade total)
│       ├── Engenheiro 1
│       ├── Designer
│       └── Analista
└── Projecto B (Gestor de Projecto B — autoridade total)
        ├── Engenheiro 2
        └── Gestor de Contas
```

*Vantagens:* foco total no projecto, autoridade clara do PM, comunicação simplificada.
*Desvantagens:* duplicação de recursos entre projectos, possível ociosidade entre projectos, equipa pode sentir falta de "lar" funcional.

**Estrutura Matricial**
Um híbrido — os membros da equipa têm dois gestores: o funcional (do departamento) e o de projecto. Existe em três variações:

| Tipo | Autoridade do PM | Autoridade do Gestor Funcional |
|---|---|---|
| **Matricial Fraca** | Limitada | Alta |
| **Matricial Equilibrada** | Igual | Igual |
| **Matricial Forte** | Alta | Limitada |

*Vantagens:* uso eficiente de recursos especializados, visibilidade de projecto com manutenção da estrutura funcional.
*Desvantagens:* dois chefes geram conflito de prioridades, maior complexidade de comunicação, o PM precisa de mais habilidades políticas.

**Estrutura Composta (Híbrida)**
Muitas organizações reais combinam diferentes estruturas — uma empresa pode ser funcional na sua maioria, mas ter uma unidade de PMO (Project Management Office) que opera de forma projectizada para iniciativas estratégicas.

### Ciclo de Vida de um Projecto

O **ciclo de vida** de um projecto é a sequência de fases que um projecto percorre desde o início até à conclusão. Embora os nomes variem entre metodologias e indústrias, a maioria dos ciclos de vida inclui quatro fases fundamentais:

```
┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│  INÍCIO  │ → │PLANEAMENTO│→ │EXECUÇÃO  │ → │ENCERRA-  │
│          │   │           │  │& CONTROLO│   │MENTO     │
│Autorizar │   │Planear    │  │Executar  │   │Fechar    │
│o projecto│   │tudo       │  │Monitorar │   │Lições    │
│          │   │           │  │Controlar │   │aprendidas│
└──────────┘   └──────────┘   └──────────┘   └──────────┘
```

**Fase de Início (Initiating)**
Autorizar formalmente o projecto. O principal entregável é o **Termo de Abertura do Projecto (TAP / Project Charter)** — documento que define o propósito, os objectivos de alto nível, o patrocinador, o gestor de projecto designado, e as restrições iniciais.

**Fase de Planeamento (Planning)**
A fase mais densa em documentação — onde o trabalho de "pensar antes de fazer" acontece. Envolve definir o escopo detalhado, criar a WBS, desenvolver o cronograma, estimar custos, planear qualidade, recursos, comunicações, riscos, e aquisições. O principal entregável é o **Plano de Gestão do Projecto**.

**Fase de Execução e Controlo (Executing & Monitoring/Controlling)**
Na prática, estas duas fases ocorrem em paralelo — enquanto a equipa executa o trabalho, o PM monitoriza e controla o progresso, compara com a baseline, e toma acções correctivas quando necessário. É também onde as mudanças são formalmente geridas.

**Fase de Encerramento (Closing)**
Formalizar a conclusão do projecto ou de uma fase: obter aceitação formal dos entregáveis, documentar as lições aprendidas, arquivar os registos, liberar recursos, e comunicar o encerramento a todos os stakeholders.

### Características específicas por tipo de projecto

Projectos diferem também pelo sector e pela natureza do trabalho:

| Tipo de Projecto | Características de Gestão |
|---|---|
| **Construção / Engenharia** | Sequência rígida, caminho crítico dominante, regulamentação intensa |
| **TI / Software** | Alta incerteza de escopo, metodologias ágeis frequentes, mudanças rápidas |
| **Pesquisa e Desenvolvimento** | Resultado incerto, gestão de risco crítica, sprints exploratórios |
| **Eventos** | Data fixa e imóvel, logística complexa, muitos fornecedores externos |
| **Transformação Organizacional** | Gestão da mudança humana como risco principal, longa duração |

---

## 4. Áreas de Gestão e Processos — introdução às áreas de conhecimento

### O PMBOK® Guide e as Áreas de Conhecimento

O **PMBOK® Guide** (Project Management Body of Knowledge), publicado pelo PMI, é a referência mais utilizada globalmente para gestão de projectos. Até à 6ª edição (2017), organizava o conhecimento em **10 Áreas de Conhecimento** e **5 Grupos de Processos**, com 49 processos no total. A 7ª edição (2021) migrou para uma abordagem baseada em **12 Princípios** e **8 Domínios de Desempenho**, mas as 10 áreas de conhecimento continuam sendo amplamente usadas como referência.

### Os 5 Grupos de Processos

Transversais a todas as áreas de conhecimento, os grupos de processos representam *quando* os processos ocorrem no projecto:

| Grupo | Quando ocorre | O que acontece |
|---|---|---|
| **Iniciação** | Início do projecto ou de uma fase | Autorizar, identificar stakeholders |
| **Planeamento** | Antes da execução | Definir como o trabalho será feito |
| **Execução** | Durante o trabalho | Realizar o que foi planeado |
| **Monitorização e Controlo** | Em paralelo com execução | Medir, analisar, e agir sobre desvios |
| **Encerramento** | Final do projecto ou fase | Formalizar conclusão e registar aprendizagens |

### As 10 Áreas de Conhecimento

**1. Gestão da Integração**
A "área mestra" — coordena e unifica todas as outras. Inclui o desenvolvimento do Termo de Abertura, do Plano de Gestão, a gestão do trabalho, o controlo integrado de mudanças, e o encerramento formal. O PM é o integrador por excelência.

**2. Gestão do Escopo**
Garantir que o projecto inclui todo o trabalho necessário — e apenas o trabalho necessário. Envolve definir, verificar e controlar o escopo. A WBS é o principal entregável desta área.

**3. Gestão do Cronograma**
Planear as actividades, sequenciá-las, estimar durações, desenvolver o cronograma, e controlá-lo durante a execução. O Gantt Chart e o CPM (Critical Path Method) são as principais ferramentas.

**4. Gestão dos Custos**
Estimar, orçamentar e controlar os custos para que o projecto termine dentro do orçamento aprovado. Inclui técnicas como EVM (Earned Value Management) para medir o desempenho de custo e prazo simultaneamente.

**5. Gestão da Qualidade**
Garantir que o projecto satisfaz os requisitos de qualidade — tanto no processo (como o trabalho é feito) como no produto (o resultado entregue). Inclui planeamento, garantia, e controlo da qualidade.

**6. Gestão dos Recursos**
Identificar, adquirir, desenvolver e gerir os recursos necessários para o projecto — pessoas, equipamentos, materiais. Inclui também a gestão da equipa: motivação, conflitos, e desenvolvimento.

**7. Gestão das Comunicações**
Planear, executar e monitorizar a comunicação com todos os stakeholders — garantindo que a informação certa chegue às pessoas certas, no momento certo, pelo canal certo. Estudos indicam que PMs passam até 90% do tempo comunicando.

**8. Gestão dos Riscos**
Identificar riscos potenciais, analisá-los (qualitativa e quantitativamente), planear respostas (evitar, transferir, mitigar, aceitar), implementar as respostas, e monitorizar riscos ao longo do projecto.

**9. Gestão das Aquisições**
Planear e executar a compra ou contratação de produtos, serviços, ou resultados externos à equipa do projecto. Inclui gestão de contratos, fornecedores, e encerramento de aquisições.

**10. Gestão dos Stakeholders**
Identificar todas as partes interessadas, analisar as suas expectativas e influências, desenvolver estratégias de engajamento, e monitorizar as relações ao longo do projecto. Uma área separada desde o PMBOK® 5ª edição, reconhecendo a sua importância crítica.

### Visão integrada — como as áreas se relacionam

```
                    INTEGRAÇÃO
                 (coordena todas)
                        │
    ┌──────────┬────────┼────────┬──────────┐
    │          │        │        │          │
 ESCOPO   CRONOGRAMA  CUSTO  QUALIDADE RECURSOS
    │          │        │        │          │
    └──────────┴────────┼────────┴──────────┘
                        │
    ┌──────────┬─────────┴──────┬──────────┐
    │          │                │          │
COMUNI-    RISCOS          AQUISIÇÕES STAKEHOLDERS
CAÇÕES
```

Todas as áreas convergem na Integração — é o PM, como integrador, quem garante que as decisões tomadas numa área são consideradas nas outras.

---

## Resumo em uma frase

> A gestão de projetos é uma disciplina milenar na prática e centenária como ciência, formalizada pelos contributos de Gantt (planeamento visual), Fayol (funções da gestão) e Taylor (administração científica), que hoje se organiza em torno de conceitos universais como escopo, prazo, custo e qualidade, adapta-se a diferentes estruturas organizacionais, e aplica as 10 áreas de conhecimento do PMBOK® ao longo dos cinco grupos de processos para transformar intenções em resultados entregues dentro das restrições definidas.

---

## Conceitos relacionados para estudar a seguir

- **CPM (Critical Path Method)** e **PERT** — as duas grandes técnicas de planeamento de cronograma desenvolvidas nos anos 1950, ainda amplamente usadas
- **Earned Value Management (EVM)** — a técnica de medição integrada de desempenho de custo e prazo que permite saber se o projecto está no caminho certo em termos financeiros
- **PMO (Project Management Office)** — a unidade organizacional responsável por padronizar e suportar práticas de GP numa organização
- **PRINCE2** — metodologia de GP desenvolvida no Reino Unido, amplamente adoptada na Europa e em organizações governamentais, alternativa/complemento ao PMBOK®
- **Diferenças entre Cascata e Ágil em GP** — como as abordagens preditivas (PMBOK® tradicional) e adaptativas (Scrum, Kanban) coexistem e são aplicadas dependendo do tipo e contexto do projecto