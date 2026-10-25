
# Riscos

> Este ficheiro dá continuidade ao acompanhamento e controlo de projetos apresentado em `07_acompanhar_atentamente.md`, aprofundando a **Gestão de Riscos (Project Risk Management)**. O objetivo é compreender como identificar incertezas, organizar as suas fontes através da Estrutura Analítica de Riscos (EAR), avaliar a sua prioridade utilizando a Matriz de Probabilidade e Impacto (PxI) e desenvolver planos de resposta que protejam os objetivos do projeto.

---

## 1. Fundamentos — introdução à gestão de riscos em projetos

### O que é um risco

O **risco (Risk)** é um evento ou condição incerta que, caso ocorra, poderá afetar positiva ou negativamente um ou mais objetivos do projeto.

Esses objetivos podem incluir:

- Escopo.
- Cronograma.
- Custos.
- Qualidade.
- Recursos.
- Segurança.
- Satisfação dos stakeholders.
- Entrega de valor ao negócio.

A característica fundamental de um risco é a **incerteza**.

Um risco não representa necessariamente algo que acontecerá. Representa uma possibilidade que precisa de ser considerada durante o planeamento e a execução.

**Exemplo — Projeto de desenvolvimento de software:**

Uma equipa está a desenvolver uma aplicação web que depende de uma API externa para processar pagamentos.

Existe a possibilidade de o fornecedor da API alterar as condições de integração durante o desenvolvimento.

```text
CAUSA:
Dependência de um serviço externo

        |
        v

EVENTO INCERTO:
Alteração inesperada da API

        |
        v

CONSEQUÊNCIA:
Necessidade de adaptar a integração

        |
        +----> Retrabalho
        +----> Custos adicionais
        +----> Atraso no cronograma
```

Enquanto a alteração não ocorrer, trata-se de um **risco**.

Se o fornecedor efetivamente alterar a API e isso afetar o desenvolvimento, teremos um **problema (Issue)** que precisará de ser resolvido.

### Risco vs. Problema (Risk vs. Issue)

Esta distinção é essencial na gestão de projetos.

| Característica | Risco (Risk) | Problema (Issue) |
|---|---|---|
| Natureza | Evento ou condição incerta | Situação já existente |
| Tempo | Pode ocorrer no futuro | Já ocorreu ou está a ocorrer |
| Gestão | Preventiva e proativa | Corretiva e reativa |
| Documento | Registo de riscos | Registo de problemas |
| Exemplo | Possível indisponibilidade do servidor | Servidor está indisponível |

**Exemplo:**

```text
RISCO:
"O servidor de produção poderá ficar
indisponível durante o lançamento."

            |
            v

O EVENTO ACONTECE

            |
            v

PROBLEMA:
"O servidor ficou indisponível
durante o lançamento."
```

A gestão de riscos procura antecipar situações antes que se transformem em problemas.

### Riscos negativos e positivos

Um erro comum é associar riscos exclusivamente a acontecimentos negativos.

Na gestão de projetos, os riscos podem representar tanto **ameaças (Threats)** quanto **oportunidades (Opportunities)**.

**Ameaças**

São riscos que podem prejudicar os objetivos do projeto.

Exemplos:

- Atrasos de fornecedores.
- Falhas de segurança.
- Custos superiores ao orçamento.
- Indisponibilidade de profissionais.
- Problemas na integração de sistemas.

**Oportunidades**

São riscos que podem produzir benefícios ao projeto.

Exemplos:

- Uma ferramenta pode reduzir o esforço de desenvolvimento.
- Um fornecedor pode disponibilizar uma tecnologia mais eficiente.
- A automatização de testes pode acelerar a entrega.
- Uma equipa pode concluir antecipadamente uma atividade crítica.

```text
                  RISCO
                    |
          +---------+---------+
          |                   |
          v                   v
        AMEAÇA           OPORTUNIDADE
          |                   |
          v                   v
    Impacto negativo     Impacto positivo
          |                   |
          v                   v
      Reduzir perdas      Aumentar ganhos
```

**Gerir riscos não significa apenas evitar problemas, mas também aumentar a probabilidade de obter resultados favoráveis.**

### O que é a Gestão de Riscos

A **Gestão de Riscos em Projetos (Project Risk Management)** é o conjunto de processos utilizados para identificar, analisar, planear respostas, implementar ações e monitorizar incertezas que possam afetar os objetivos do projeto.

O objetivo não é eliminar todos os riscos, pois isso seria impossível.

O propósito é **reduzir a exposição às ameaças e aumentar a exposição às oportunidades**, mantendo os riscos dentro de limites aceitáveis para a organização.

Uma gestão de riscos eficaz permite:

- Antecipar acontecimentos desfavoráveis.
- Reduzir perdas financeiras.
- Proteger o cronograma.
- Melhorar a tomada de decisão.
- Evitar retrabalho.
- Identificar oportunidades de melhoria.
- Preparar respostas para situações críticas.
- Aumentar a previsibilidade das entregas.

### Processos de Gestão de Riscos no PMBOK®

Na abordagem por processos do PMBOK® Guide, especialmente na 6ª edição, a gestão de riscos é organizada em sete processos.

**1. Planear a Gestão dos Riscos**

Definir como as atividades de gestão de riscos serão conduzidas, incluindo métodos, responsabilidades, categorias, escalas e critérios de avaliação.

**2. Identificar os Riscos**

Descobrir e documentar riscos individuais e fontes de risco que possam afetar o projeto.

**3. Realizar a Análise Qualitativa dos Riscos**

Avaliar a probabilidade e o impacto dos riscos, classificando-os conforme a sua prioridade.

**4. Realizar a Análise Quantitativa dos Riscos**

Analisar numericamente os efeitos dos riscos sobre os objetivos globais do projeto, utilizando técnicas como simulação Monte Carlo e Valor Monetário Esperado (EMV).

**5. Planear as Respostas aos Riscos**

Definir estratégias e ações para lidar com as ameaças e oportunidades identificadas.

**6. Implementar as Respostas aos Riscos**

Executar as ações previstas nos planos de resposta.

**7. Monitorizar os Riscos**

Acompanhar riscos conhecidos, identificar novos riscos, avaliar a eficácia das respostas e atualizar o registo de riscos.

**Fluxo da gestão de riscos:**

```text
      PLANEAR A GESTÃO DOS RISCOS
                  |
                  v
          IDENTIFICAR RISCOS
                  |
                  v
         ANÁLISE QUALITATIVA
                  |
                  v
        ANÁLISE QUANTITATIVA
             (se aplicável)
                  |
                  v
         PLANEAR RESPOSTAS
                  |
                  v
        IMPLEMENTAR RESPOSTAS
                  |
                  v
         MONITORIZAR RISCOS
                  |
          +-------+-------+
          |               |
          v               v
    Novos riscos?    Resposta eficaz?
          |               |
          +-------+-------+
                  |
                  v
          ATUALIZAR O PLANO
```

A gestão de riscos não termina após a elaboração do plano inicial. É um processo contínuo durante todo o ciclo de vida do projeto.

### Riscos individuais vs. risco geral do projeto

A gestão de riscos considera duas perspetivas complementares.

**Risco individual (Individual Project Risk)**

Um evento ou condição incerta específica.

Exemplo:

> Existe a possibilidade de o fornecedor atrasar a entrega de uma API, afetando o início dos testes de integração.

**Risco geral do projeto (Overall Project Risk)**

A exposição global do projeto à incerteza, considerando o efeito combinado dos riscos individuais e outras fontes de variabilidade.

Exemplo:

> O projeto apresenta elevada incerteza devido à utilização de tecnologias desconhecidas, dependência de fornecedores externos e prazo de entrega restrito.

Um projeto pode possuir vários riscos individuais de baixa prioridade, mas ainda apresentar uma exposição global elevada devido à acumulação de incertezas.

### Apetite, tolerância e limiar de risco

As organizações não possuem necessariamente a mesma disposição para aceitar riscos.

**Apetite ao Risco (Risk Appetite)**

Representa o grau de incerteza que uma organização está disposta a aceitar para alcançar os seus objetivos.

**Tolerância ao Risco (Risk Tolerance)**

Representa o nível de variação que a organização consegue suportar em relação aos objetivos definidos.

**Limiar de Risco (Risk Threshold)**

Representa um limite estabelecido para a exposição ao risco, acima do qual será necessário tomar determinadas medidas.

**Exemplo:**

```text
Projeto: Plataforma SaaS

Apetite:
A empresa aceita experimentar tecnologias
novas para melhorar a produtividade.

Tolerância:
O projeto pode suportar atrasos moderados
em funcionalidades não essenciais.

Limiar:
Qualquer risco que ameace atrasar
o lançamento mais de 10 dias deverá
ser escalado à direção.
```

O limiar deve ser mensurável sempre que possível.

### Técnicas de identificação de riscos

A identificação de riscos deve envolver diferentes fontes de informação.

**Brainstorming**

Reunião colaborativa na qual os membros da equipa identificam possíveis ameaças e oportunidades.

**Entrevistas com especialistas**

Recolha de informação junto de profissionais com experiência no tipo de projeto.

**Análise de documentos**

Revisão do Termo de Abertura, requisitos, contratos, EAP, cronograma, orçamento e premissas.

**Checklists**

Listas de riscos comuns identificados em projetos anteriores.

**Análise SWOT**

Avaliação de:

- Strengths — Forças.
- Weaknesses — Fraquezas.
- Opportunities — Oportunidades.
- Threats — Ameaças.

**Análise de causa raiz (Root Cause Analysis)**

Investigação das causas que podem originar eventos de risco.

**Lições aprendidas (Lessons Learned)**

Utilização de experiências anteriores para antecipar problemas recorrentes.

### Como escrever corretamente um risco

Um risco deve ser descrito de forma clara, incluindo:

1. Causa ou condição.
2. Evento incerto.
3. Consequência para o projeto.

Uma estrutura recomendada é:

```text
DEVIDO A [CAUSA],

EXISTE A POSSIBILIDADE DE [EVENTO],

O QUE PODERÁ RESULTAR EM [CONSEQUÊNCIA].
```

**Exemplo inadequado:**

```text
"Problemas com a API."
```

Esta descrição é vaga e não apresenta informação suficiente para planear uma resposta.

**Exemplo adequado:**

```text
"Devido à dependência de uma API externa,
existe a possibilidade de o fornecedor
alterar os endpoints durante o desenvolvimento,
o que poderá provocar retrabalho e atrasar
os testes de integração."
```

A segunda descrição permite compreender a origem do risco, o evento e os impactos esperados.

### Registo de Riscos (Risk Register)

O **Registo de Riscos** é o documento que reúne as informações sobre os riscos identificados e acompanha a sua evolução.

Um registo pode conter:

| Campo | Descrição |
|---|---|
| ID | Identificador único |
| Risco | Descrição do evento |
| Categoria | Fonte ou tipo do risco |
| Probabilidade | Possibilidade de ocorrência |
| Impacto | Consequência esperada |
| Prioridade | Classificação resultante da avaliação |
| Responsável | Pessoa que acompanha o risco |
| Resposta | Estratégia e ações planeadas |
| Estado | Aberto, em monitorização, encerrado, etc. |

**Exemplo inicial:**

| ID | Risco | Categoria | Estado |
|---|---|---|---|
| R01 | Falha na integração da API | Técnico | Identificado |
| R02 | Atraso de fornecedor | Externo | Identificado |
| R03 | Indisponibilidade de programador | Recursos | Identificado |
| R04 | Aumento do custo cloud | Financeiro | Identificado |
| R05 | Automatização acelerar testes | Oportunidade | Identificado |

O registo será aprofundado após a análise de probabilidade e impacto.

---

## 2. EAR — conhecer a Estrutura Analítica de Riscos

### O que é a EAR

A **Estrutura Analítica de Riscos (EAR)**, conhecida internacionalmente como **Risk Breakdown Structure (RBS)**, é uma representação hierárquica das possíveis fontes de risco de um projeto.

A EAR organiza as fontes de incerteza em categorias e subcategorias, permitindo uma identificação mais sistemática dos riscos.

Ela segue um princípio semelhante ao da EAP, estudada em `03_escopo_a_estrutura.md`.

No entanto, existe uma diferença fundamental:

- A EAP organiza os **entregáveis e o trabalho do projeto**.
- A EAR organiza as **fontes e categorias de risco**.

### EAR vs. EAP

| Característica | EAP — Estrutura Analítica do Projeto | EAR — Estrutura Analítica de Riscos |
|---|---|---|
| Objetivo | Decompor o trabalho | Organizar fontes de risco |
| Orientação | Entregáveis | Incertezas |
| Estrutura | Hierárquica | Hierárquica |
| Aplicação | Planeamento de escopo | Identificação e análise de riscos |
| Resultado | Pacotes de trabalho | Categorias e subcategorias de risco |

A EAR não substitui o Registo de Riscos.

Enquanto a EAR organiza as categorias, o Registo de Riscos documenta os eventos específicos identificados.

### Por que utilizar uma EAR

Sem uma estrutura organizada, uma equipa pode concentrar-se apenas nos riscos mais evidentes.

Por exemplo, uma equipa de desenvolvimento pode identificar vários riscos técnicos, mas esquecer:

- Problemas contratuais.
- Falta de recursos financeiros.
- Mudanças regulatórias.
- Resistência dos utilizadores.
- Dependência de fornecedores.
- Falhas de comunicação.

A EAR ajuda a evitar essas lacunas.

**Principais benefícios:**

- Organização das fontes de risco.
- Identificação sistemática de ameaças e oportunidades.
- Melhor comunicação entre stakeholders.
- Comparação com projetos anteriores.
- Identificação de categorias com maior exposição.
- Apoio à análise qualitativa e quantitativa.
- Facilitação da atribuição de responsáveis.

### Categorias comuns de riscos

Uma EAR pode utilizar diversas classificações.

Em projetos de tecnologia, uma estrutura frequentemente útil inclui:

**1. Riscos Técnicos**

Relacionados com tecnologia, arquitetura, desempenho, segurança e integração.

**2. Riscos Externos**

Relacionados com fornecedores, mercado, legislação e fatores fora do controlo direto da equipa.

**3. Riscos Organizacionais**

Relacionados com recursos, prioridades, financiamento e estrutura interna da organização.

**4. Riscos de Gestão do Projeto**

Relacionados com estimativas, cronograma, escopo, comunicação e planeamento.

### Exemplo de EAR para um sistema web

Considere o desenvolvimento de uma aplicação SaaS destinada à gestão de clientes.

```text
1.0 RISCOS DO PROJETO SaaS
    |
    +-- 1.1 Riscos Técnicos
    |      |
    |      +-- 1.1.1 Falhas de integração
    |      +-- 1.1.2 Problemas de desempenho
    |      +-- 1.1.3 Vulnerabilidades de segurança
    |      +-- 1.1.4 Incompatibilidade tecnológica
    |
    +-- 1.2 Riscos Externos
    |      |
    |      +-- 1.2.1 Atrasos de fornecedores
    |      +-- 1.2.2 Alterações regulatórias
    |      +-- 1.2.3 Indisponibilidade de APIs
    |      +-- 1.2.4 Variação de preços externos
    |
    +-- 1.3 Riscos Organizacionais
    |      |
    |      +-- 1.3.1 Falta de recursos
    |      +-- 1.3.2 Rotatividade da equipa
    |      +-- 1.3.3 Mudança de prioridades
    |      +-- 1.3.4 Restrição orçamental
    |
    +-- 1.4 Riscos de Gestão
           |
           +-- 1.4.1 Estimativas incorretas
           +-- 1.4.2 Scope creep
           +-- 1.4.3 Falhas de comunicação
           +-- 1.4.4 Dependências mal planeadas
```

Esta estrutura é ilustrativa e deve ser adaptada às características reais do projeto.

### Como construir uma EAR

**Passo 1 — Compreender o contexto do projeto**

Analisar:

- Objetivos.
- Escopo.
- EAP.
- Cronograma.
- Orçamento.
- Tecnologias.
- Stakeholders.
- Contratos.
- Premissas e restrições.

**Passo 2 — Definir categorias de risco**

Criar grupos que representem as principais fontes de incerteza.

**Passo 3 — Decompor em subcategorias**

Cada categoria deve ser detalhada até um nível útil para a identificação dos riscos.

**Passo 4 — Identificar riscos específicos**

Utilizar cada categoria como referência para discutir eventos que possam ocorrer.

**Passo 5 — Rever a estrutura com a equipa**

Verificar se as categorias são relevantes, abrangentes e suficientemente claras.

**Passo 6 — Atualizar durante o projeto**

A EAR pode ser ajustada quando surgirem novas fontes de risco.

### Da EAR ao Registo de Riscos

A EAR funciona como uma estrutura de classificação.

A partir dela, são identificados eventos específicos e documentados no Registo de Riscos.

```text
       ESTRUTURA ANALÍTICA DE RISCOS
                    |
                    v
             RISCOS TÉCNICOS
                    |
           +--------+--------+
           |                 |
           v                 v
       Integração         Segurança
           |                 |
           v                 v
  API pode alterar     Falha pode expor
  o contrato           dados sensíveis
           |                 |
           +--------+--------+
                    |
                    v
             REGISTO DE RISCOS
```

### Identificação de concentração de riscos

Uma vantagem da EAR é permitir identificar categorias com maior quantidade ou gravidade de riscos.

**Exemplo:**

| Categoria | Riscos identificados | Riscos de alta prioridade |
|---|---:|---:|
| Técnicos | 8 | 4 |
| Externos | 5 | 2 |
| Organizacionais | 4 | 1 |
| Gestão | 6 | 3 |
| **Total** | **23** | **10** |

Neste exemplo, a categoria técnica merece atenção especial.

Contudo, a quantidade de riscos não é suficiente para determinar a exposição total: a severidade, as dependências e os impactos potenciais também precisam de ser considerados.

### EAR e análise de causa raiz

A EAR também ajuda a distinguir um evento de risco da sua fonte.

**Exemplo:**

```text
FONTE DO RISCO:
Dependência de fornecedores

          |
          v

EVENTO:
Fornecedor atrasa a entrega da API

          |
          v

CONSEQUÊNCIA:
Testes de integração iniciados mais tarde

          |
          v

IMPACTO:
Possível atraso no lançamento
```

Ao compreender a fonte, a organização pode desenvolver respostas mais eficazes, como negociar entregas parciais, utilizar ambientes simulados ou contratar fornecedores alternativos.

---

## 3. Matriz PxI — construção da matriz de probabilidade e impacto

### O que é a Matriz de Probabilidade e Impacto

A **Matriz de Probabilidade e Impacto (Probability and Impact Matrix — PxI)** é uma ferramenta de análise qualitativa utilizada para classificar e priorizar riscos.

A matriz considera duas dimensões:

**Probabilidade (P)**

A possibilidade de o risco ocorrer.

**Impacto (I)**

A consequência que o evento poderá provocar caso aconteça.

A combinação dessas dimensões permite estabelecer a prioridade de cada risco.

### Análise qualitativa vs. quantitativa

A Matriz PxI pertence à análise qualitativa.

| Tipo | Objetivo | Técnicas |
|---|---|---|
| Qualitativa | Classificar e priorizar riscos | Matriz PxI, julgamento especializado, categorização |
| Quantitativa | Estimar numericamente os efeitos dos riscos | EMV, Monte Carlo, árvores de decisão |

A análise qualitativa utiliza escalas previamente definidas para apoiar decisões de prioridade.

A análise quantitativa utiliza modelos numéricos para avaliar possíveis impactos nos objetivos do projeto.

### Definir a escala de probabilidade

Antes de construir a matriz, a equipa deve estabelecer critérios consistentes.

Um exemplo de escala de cinco níveis é:

| Nível | Probabilidade | Referência percentual |
|---|---|---:|
| 1 | Muito baixa | 0% a 10% |
| 2 | Baixa | Acima de 10% até 30% |
| 3 | Média | Acima de 30% até 50% |
| 4 | Alta | Acima de 50% até 70% |
| 5 | Muito alta | Acima de 70% até 100% |

Estas faixas são ilustrativas e não representam uma escala universal do PMBOK®.

Cada organização pode estabelecer intervalos adequados ao seu contexto.

### Definir a escala de impacto

O impacto deve ser avaliado considerando os objetivos relevantes do projeto.

Uma escala simplificada poderá ser:

| Nível | Impacto | Critério geral |
|---|---|---|
| 1 | Muito baixo | Consequência praticamente insignificante |
| 2 | Baixo | Pequena alteração facilmente absorvida |
| 3 | Moderado | Exige ajustes relevantes |
| 4 | Alto | Compromete objetivos importantes |
| 5 | Muito alto | Pode inviabilizar objetivos essenciais |

### Exemplo de critérios mensuráveis

Considere um projeto de desenvolvimento de software.

| Nível | Impacto no custo | Impacto no prazo |
|---|---|---|
| 1 | Aumento inferior a 2% | Atraso inferior a 2 dias |
| 2 | Aumento de 2% a menos de 5% | Atraso de 2 a 4 dias |
| 3 | Aumento de 5% a menos de 10% | Atraso de 5 a 9 dias |
| 4 | Aumento de 10% a menos de 20% | Atraso de 10 a 19 dias |
| 5 | Aumento igual ou superior a 20% | Atraso igual ou superior a 20 dias |

Os intervalos apresentados são exemplos de critérios definidos para um projeto hipotético.

Para riscos que afetem vários objetivos, a organização deve definir como consolidar os impactos. Uma opção é utilizar o nível mais grave entre os objetivos avaliados, mas esta escolha precisa de ser documentada.

### Cálculo da pontuação PxI

Uma forma simples de priorização utiliza:

```text
Pontuação do Risco = P × I
```

Onde:

- P = Nível de probabilidade.
- I = Nível de impacto.

**Exemplo:**

```text
Risco: Atraso na entrega de uma API

Probabilidade = 4 (Alta)

Impacto = 5 (Muito alto)

Pontuação = 4 × 5

Pontuação = 20
```

Quanto maior a pontuação, maior a prioridade segundo este modelo.

**Importante:** numa matriz qualitativa de 1 a 5, o produto P × I é um índice de classificação, não uma probabilidade matemática nem uma estimativa financeira.

### Construção da Matriz 5×5

Uma matriz simples pode utilizar as seguintes pontuações:

```text
                  IMPACTO (I)

              1    2    3    4    5
            +----+----+----+----+----+
         5  |  5 | 10 | 15 | 20 | 25 |
            +----+----+----+----+----+
         4  |  4 |  8 | 12 | 16 | 20 |
            +----+----+----+----+----+
P        3  |  3 |  6 |  9 | 12 | 15 |
R           +----+----+----+----+----+
O        2  |  2 |  4 |  6 |  8 | 10 |
B           +----+----+----+----+----+
.        1  |  1 |  2 |  3 |  4 |  5 |
            +----+----+----+----+----+
```

As classificações podem ser definidas como:

| Pontuação | Prioridade | Orientação |
|---|---|---|
| 1–4 | Baixa | Acompanhamento periódico |
| 5–9 | Média | Definir resposta proporcional |
| 10–16 | Alta | Planear e acompanhar ações prioritárias |
| 17–25 | Crítica | Avaliação e intervenção urgente |

Estes limites são definidos para o exemplo. A matriz e os critérios de classificação devem ser aprovados pela organização.

### Matriz PxI com níveis de prioridade

```text
LEGENDA:

B = Baixa
M = Média
A = Alta
C = Crítica


                IMPACTO

          1    2    3    4    5
        +----+----+----+----+----+
     5  | M  | A  | A  | C  | C  |
        +----+----+----+----+----+
     4  | B  | M  | A  | A  | C  |
        +----+----+----+----+----+
P    3  | B  | M  | M  | A  | A  |
        +----+----+----+----+----+
     2  | B  | B  | M  | M  | A  |
        +----+----+----+----+----+
     1  | B  | B  | B  | B  | M  |
        +----+----+----+----+----+
```

Na prática, ferramentas de gestão podem utilizar cores para representar os níveis, como verde, amarelo, laranja e vermelho.

### Aplicação da Matriz PxI

Considere cinco riscos identificados no projeto SaaS.

| ID | Risco | P | I | P×I | Prioridade |
|---|---|---:|---:|---:|---|
| R01 | Falha de integração da API | 4 | 5 | 20 | Crítica |
| R02 | Aumento de custos cloud | 3 | 3 | 9 | Média |
| R03 | Saída de programador-chave | 3 | 4 | 12 | Alta |
| R04 | Atraso na aprovação do cliente | 4 | 3 | 12 | Alta |
| R05 | Indisponibilidade pontual de ferramenta | 2 | 2 | 4 | Baixa |

A matriz permite estabelecer uma ordem inicial de atenção.

Neste exemplo:

1. R01 deve receber prioridade imediata.
2. R03 e R04 exigem respostas planeadas.
3. R02 precisa de acompanhamento e resposta proporcional.
4. R05 pode ser monitorizado com menor intensidade.

### A prioridade não depende apenas da pontuação

A Matriz PxI é uma ferramenta de apoio, não um substituto do julgamento profissional.

Outros fatores podem influenciar a prioridade:

**Urgência**

Quanto tempo existe antes que o risco possa ocorrer?

**Proximidade**

Em que momento do cronograma o risco poderá manifestar-se?

**Detetabilidade**

É possível identificar sinais de alerta antes do evento?

**Capacidade de gestão**

A equipa possui recursos e autoridade para responder?

**Interdependência**

O risco pode provocar outros riscos?

**Impacto regulatório ou de segurança**

Alguns riscos podem exigir tratamento obrigatório, independentemente da pontuação.

**Exemplo:**

Um risco de exposição de dados pessoais pode possuir probabilidade baixa, mas consequências jurídicas e de segurança graves.

Mesmo que a pontuação não seja a maior da matriz, poderá exigir medidas específicas de proteção.

### Limitações da Matriz PxI

A ferramenta apresenta vantagens, mas também limitações.

- A classificação pode depender da perceção dos avaliadores.
- Escalas diferentes podem produzir prioridades diferentes.
- Riscos com igual pontuação podem apresentar características muito distintas.
- O modelo não representa diretamente perdas financeiras.
- Dependências entre riscos podem não ser identificadas.
- A pontuação não substitui a análise de cenários críticos.

Por isso, riscos significativos podem exigir uma análise quantitativa complementar.

### EMV — Expected Monetary Value

O **Valor Monetário Esperado (EMV)** foi introduzido em `06_orcamento.md` como técnica para apoiar o cálculo de reservas de contingência.

Quando a probabilidade é representada por um valor percentual e o impacto por uma quantia monetária:

```text
EMV = Probabilidade × Impacto financeiro
```

**Exemplo:**

Um risco apresenta:

```text
Probabilidade: 30%

Impacto financeiro: €10.000
```

```text
EMV = 0,30 × 10.000

EMV = €3.000
```

O resultado representa uma exposição monetária esperada de €3.000.

Para ameaças, pode-se utilizar uma convenção de perdas negativas; para oportunidades, benefícios positivos. A convenção escolhida deve permanecer consistente.

### Matriz PxI vs. EMV

| Ferramenta | Tipo | Resultado |
|---|---|---|
| Matriz PxI | Análise qualitativa | Índice de prioridade |
| EMV | Análise quantitativa | Valor monetário esperado |
| Monte Carlo | Análise quantitativa | Distribuição de resultados possíveis |

As técnicas são complementares.

Uma matriz ajuda a identificar os riscos mais importantes; uma análise quantitativa pode apoiar decisões sobre reservas financeiras, prazos e alternativas de resposta.

---

## 4. Plano de Respostas aos Riscos — criação do plano de resposta aos riscos mapeados

### O que é um Plano de Respostas aos Riscos

O **Plano de Respostas aos Riscos (Risk Response Plan)** define as estratégias e ações necessárias para lidar com os riscos identificados e analisados.

Após construir a EAR e avaliar os riscos pela Matriz PxI, a equipa deve determinar:

- O que será feito em relação a cada risco.
- Quem será responsável.
- Quando as ações serão executadas.
- Quais recursos serão necessários.
- Que sinais indicarão a aproximação do evento.
- O que fazer se o risco ocorrer.
- Como avaliar a eficácia da resposta.

O objetivo é transformar a análise de riscos em **ações concretas de gestão**.

### Estratégias de resposta para ameaças

As ameaças representam riscos de impacto negativo.

Existem cinco estratégias principais frequentemente apresentadas na abordagem do PMBOK®.

### 1. Evitar (Avoid)

Consiste em eliminar a ameaça ou proteger o projeto contra ela, frequentemente alterando a estratégia, o plano ou as condições de execução.

**Exemplo:**

Uma equipa pretende utilizar uma biblioteca experimental que ainda não possui suporte estável.

Para evitar o risco de incompatibilidade, decide utilizar uma biblioteca consolidada e devidamente testada.

```text
AMEAÇA:
Incompatibilidade de biblioteca experimental

          |
          v

RESPOSTA:
Substituir por solução estável

          |
          v

RESULTADO:
Remoção da fonte específica do risco
```

**Quando usar:** riscos cuja ocorrência teria consequências inaceitáveis e cuja fonte pode ser eliminada.

### 2. Mitigar (Mitigate)

Consiste em reduzir a probabilidade de ocorrência ou o impacto da ameaça.

**Exemplo:**

Risco de falhas críticas na aplicação durante o lançamento.

Medidas de mitigação:

- Testes automatizados.
- Code review.
- Testes de integração.
- Monitorização.
- Testes de carga.
- Ambiente de staging.

```text
RISCO:
Falhas em produção

       |
       v

MITIGAÇÃO:
Testes + Revisões + Monitorização

       |
       v

REDUÇÃO DA PROBABILIDADE
E/OU DO IMPACTO
```

A mitigação não garante que o risco desapareça.

### 3. Transferir (Transfer)

Consiste em transferir para um terceiro determinadas consequências ou responsabilidades associadas à ameaça.

Exemplos:

- Contratos de seguro.
- Garantias.
- Contratação de serviços especializados.
- Acordos contratuais de responsabilidade.

**Exemplo:**

Uma empresa contrata um fornecedor especializado para executar testes de segurança, com responsabilidades e obrigações contratualmente definidas.

A transferência não elimina automaticamente a responsabilidade da organização pelo sucesso do projeto.

### 4. Aceitar (Accept)

Consiste em reconhecer o risco sem implementar uma ação preventiva específica, mantendo uma estratégia de acompanhamento ou preparação.

Existem duas formas:

**Aceitação passiva**

O risco é registado e monitorizado, mas não existe uma ação antecipada específica.

**Aceitação ativa**

São estabelecidas reservas ou planos de contingência para o caso de ocorrência.

**Exemplo:**

Uma ferramenta interna pode ficar temporariamente indisponível durante alguns minutos.

A organização aceita o risco porque o impacto é reduzido e o custo de prevenção seria desproporcional.

### 5. Escalar (Escalate)

Consiste em encaminhar a responsabilidade pela gestão do risco para uma autoridade ou nível organizacional apropriado, quando ele ultrapassa o alcance da equipa ou do gestor do projeto.

**Exemplo:**

Uma alteração regulatória ameaça inviabilizar uma funcionalidade estratégica do produto.

A equipa encaminha o risco à direção e ao departamento jurídico, que possuem autoridade para decidir sobre a estratégia empresarial.

### Comparativo das estratégias para ameaças

| Estratégia | Objetivo | Exemplo |
|---|---|---|
| Evitar | Eliminar a ameaça específica | Abandonar tecnologia incompatível |
| Mitigar | Reduzir probabilidade ou impacto | Implementar testes automatizados |
| Transferir | Transferir consequências ou responsabilidades acordadas | Seguro ou contrato especializado |
| Aceitar | Reconhecer e acompanhar | Monitorizar risco de baixo impacto |
| Escalar | Encaminhar a autoridade apropriada | Risco regulatório estratégico |

### Estratégias de resposta para oportunidades

Os riscos positivos também precisam de ser geridos.

### 1. Explorar (Exploit)

Consiste em tomar medidas para garantir que uma oportunidade aconteça.

**Exemplo:**

Uma automatização comprovada pode reduzir significativamente o tempo de execução de testes.

A equipa decide implementar a solução imediatamente e integrá-la no pipeline de CI/CD.

### 2. Melhorar (Enhance)

Consiste em aumentar a probabilidade ou o impacto positivo de uma oportunidade.

**Exemplo:**

Uma equipa identifica que o uso de componentes reutilizáveis poderá acelerar o desenvolvimento.

Para aumentar essa possibilidade, investe na criação de uma biblioteca interna e na formação dos programadores.

### 3. Partilhar (Share)

Consiste em envolver terceiros capazes de aproveitar melhor uma oportunidade, distribuindo responsabilidades e benefícios.

**Exemplo:**

Uma empresa estabelece uma parceria tecnológica para desenvolver uma funcionalidade inovadora, partilhando os recursos e os resultados comerciais.

### 4. Aceitar (Accept)

Consiste em reconhecer a oportunidade sem investir recursos adicionais para a provocar.

Caso aconteça, a equipa aproveita os benefícios.

### 5. Escalar (Escalate)

Consiste em encaminhar a oportunidade para um nível organizacional com autoridade para a explorar.

**Exemplo:**

Durante o projeto, a equipa identifica a possibilidade de transformar uma ferramenta interna num produto comercial.

A oportunidade é encaminhada à direção para avaliação estratégica.

### Comparativo das respostas para oportunidades

| Estratégia | Objetivo | Exemplo |
|---|---|---|
| Explorar | Garantir a oportunidade | Implementar automatização comprovada |
| Melhorar | Aumentar probabilidade ou benefício | Investir em reutilização de componentes |
| Partilhar | Aproveitar oportunidade em parceria | Cooperação tecnológica |
| Aceitar | Aproveitar se acontecer | Benefício adicional não planeado |
| Escalar | Encaminhar a decisão | Nova oportunidade comercial |

### Como elaborar um plano de resposta

O planeamento deve ser proporcional à prioridade e à natureza de cada risco.

**Passo 1 — Selecionar os riscos prioritários**

Utilizar o Registo de Riscos e os resultados da Matriz PxI.

**Passo 2 — Identificar a causa**

Compreender a origem para escolher ações eficazes.

**Passo 3 — Escolher a estratégia**

Selecionar evitar, mitigar, transferir, aceitar, explorar, melhorar, partilhar ou escalar, conforme a natureza do risco.

**Passo 4 — Definir ações específicas**

Descrever atividades concretas, verificáveis e executáveis.

**Passo 5 — Atribuir um responsável**

Designar o **Risk Owner**, responsável por acompanhar o risco e garantir que a resposta seja gerida.

Quando necessário, podem existir responsáveis distintos pela execução das ações, denominados **Risk Action Owners**.

**Passo 6 — Definir prazos e recursos**

Identificar quando as ações devem ocorrer e quanto custarão.

**Passo 7 — Definir gatilhos (Triggers)**

Estabelecer sinais observáveis que indiquem a aproximação ou ocorrência do risco.

**Passo 8 — Estabelecer planos de contingência**

Definir o que será feito caso a ameaça se materialize.

**Passo 9 — Monitorizar**

Verificar se as medidas foram implementadas e se a exposição ao risco foi reduzida.

### Exemplo completo — Plano de Respostas aos Riscos

Considere os riscos identificados anteriormente no projeto SaaS.

| ID | Risco | Prioridade | Estratégia | Resposta planeada |
|---|---|---|---|---|
| R01 | Falha de integração da API | Crítica | Mitigar | Criar testes de contrato e ambiente mock |
| R02 | Aumento de custos cloud | Média | Mitigar | Configurar budgets e alertas |
| R03 | Saída de programador-chave | Alta | Mitigar | Documentação e partilha de conhecimento |
| R04 | Atraso de aprovação do cliente | Alta | Mitigar | Definir calendário e prazos de validação |
| R05 | Indisponibilidade pontual de ferramenta | Baixa | Aceitar | Monitorizar e usar alternativa se necessário |

### Exemplo detalhado — risco de integração da API

```text
REGISTO DE RISCO

ID: R01

Categoria EAR:
1.1.1 — Falhas de integração

Descrição:
Devido à dependência de uma API externa,
existe a possibilidade de alterações
incompatíveis durante o desenvolvimento,
provocando retrabalho e atrasos.

Probabilidade:
4 — Alta

Impacto:
5 — Muito alto

Pontuação PxI:
20 — Crítica

Estratégia:
Mitigar

Responsável:
Tech Lead

Ações preventivas:
1. Validar contrato da API.
2. Criar testes automatizados.
3. Implementar mocks.
4. Acompanhar documentação do fornecedor.
5. Testar alterações num ambiente de staging.

Gatilho:
Comunicação de mudança incompatível da API
ou falha dos testes de contrato.

Plano de contingência:
Utilizar integração temporária compatível,
avaliar adaptação e replanear a entrega.

Estado:
Em monitorização.
```

### Plano de Contingência (Contingency Plan)

O **Plano de Contingência** define ações específicas para executar quando determinadas condições ou eventos ocorrerem.

**Exemplo:**

```text
RISCO:
Falha do fornecedor de pagamentos

          |
          v

GATILHO:
Indisponibilidade superior a 2 horas

          |
          v

PLANO DE CONTINGÊNCIA:
1. Ativar mecanismo alternativo.
2. Informar equipa de suporte.
3. Monitorizar transações pendentes.
4. Comunicar situação aos stakeholders.
5. Validar recuperação do serviço.
```

O plano deve ser definido antes da ocorrência, sempre que possível.

### Plano Alternativo (Fallback Plan)

O **Fallback Plan** é utilizado quando a resposta principal ou o plano de contingência não apresenta o resultado esperado.

**Exemplo:**

```text
RISCO:
API externa indisponível

        |
        v

RESPOSTA PRINCIPAL:
Aguardar recuperação dentro do SLA

        |
        v

CONTINGÊNCIA:
Utilizar integração alternativa

        |
        v

ALTERNATIVA TAMBÉM FALHA
        |
        v

FALLBACK:
Suspender temporariamente a funcionalidade,
proteger os dados e replanear a entrega
```

O fallback funciona como uma alternativa de último recurso para situações previamente consideradas.

### Risco Residual (Residual Risk)

O **risco residual** é o risco que permanece após a implementação de uma resposta.

**Exemplo:**

Uma equipa implementa testes automatizados para reduzir a possibilidade de falhas em produção.

Antes da resposta:

```text
Probabilidade = 4
Impacto       = 5

PxI = 20 — Crítica
```

Depois da implementação das medidas, a equipa reavalia:

```text
Probabilidade = 2
Impacto       = 5

PxI = 10 — Alta
```

A probabilidade diminuiu, mas a consequência potencial continua elevada.

O risco permanece e precisa de acompanhamento.

### Risco Secundário (Secondary Risk)

Um **risco secundário** é um novo risco criado como consequência da implementação de uma resposta a outro risco.

**Exemplo:**

A organização decide contratar um fornecedor alternativo para reduzir a dependência de uma API.

Essa decisão diminui a exposição ao risco original, mas pode introduzir:

- Custos contratuais adicionais.
- Complexidade de integração.
- Dificuldades de manutenção.
- Dependência de outro fornecedor.

```text
RISCO ORIGINAL
Dependência de API externa
        |
        v
RESPOSTA
Contratar fornecedor alternativo
        |
        v
NOVO RISCO
Maior complexidade e custo operacional
```

O risco secundário deve ser identificado e acompanhado no Registo de Riscos.

### Reservas de Contingência e Gestão

A gestão de riscos está diretamente relacionada com o orçamento desenvolvido em `06_orcamento.md`.

**Reserva de Contingência**

Destinada a riscos identificados e analisados.

**Reserva de Gestão**

Destinada a trabalho imprevisto dentro do escopo do projeto, de acordo com as políticas organizacionais.

```text
             ORÇAMENTO TOTAL
                    |
           +--------+--------+
           |                 |
           v                 v
     LINHA DE BASE       RESERVA DE
        DE CUSTOS          GESTÃO
           |
      +----+----+
      |         |
      v         v
   CUSTOS    RESERVA DE
 ESTIMADOS   CONTINGÊNCIA
```

### Integração entre riscos, cronograma e orçamento

Os riscos podem afetar simultaneamente várias dimensões do projeto.

**Exemplo:**

Uma integração externa apresenta elevada probabilidade de atraso.

A equipa decide criar uma camada de abstração e testes com mocks.

Essa resposta:

- Reduz a dependência imediata do fornecedor.
- Consome horas adicionais de desenvolvimento.
- Pode alterar atividades do cronograma.
- Aumenta determinados custos preventivos.
- Pode reduzir custos futuros de retrabalho.

O gestor deve comparar o custo da resposta com a redução de exposição ao risco.

### Análise de custo-benefício da resposta

Considere:

```text
RISCO ORIGINAL

Probabilidade: 40%
Impacto financeiro: €10.000

EMV = 0,40 × 10.000

EMV = €4.000
```

A equipa considera implementar uma medida preventiva que custará €1.000.

Estima-se que essa ação reduza a probabilidade para 10%, mantendo o mesmo impacto potencial.

```text
RISCO APÓS A RESPOSTA

Probabilidade: 10%
Impacto financeiro: €10.000

EMV residual = 0,10 × 10.000

EMV residual = €1.000
```

**Análise:**

```text
EMV inicial:              €4.000

EMV residual:             €1.000

Redução da perda esperada: €3.000

Custo da resposta:        €1.000

Benefício líquido esperado: €2.000
```

Segundo as premissas apresentadas, a medida preventiva possui benefício económico esperado positivo.

Este cálculo não considera outros impactos, como reputação, qualidade ou segurança.

### Monitorização contínua dos riscos

Depois de implementar as respostas, o gestor deve verificar regularmente:

- O risco continua relevante?
- A probabilidade mudou?
- O impacto potencial aumentou ou diminuiu?
- A resposta foi executada?
- A resposta produziu o resultado esperado?
- Surgiram riscos secundários?
- Existem novos riscos?
- As reservas continuam adequadas?
- Algum risco se transformou em problema?

### Indicadores de acompanhamento de riscos

Alguns indicadores úteis são:

**Quantidade de riscos por prioridade**

Permite verificar a distribuição de riscos baixos, médios, altos e críticos.

**Riscos sem responsável**

Identifica falhas na atribuição de responsabilidades.

**Respostas em atraso**

Mostra ações preventivas que não foram executadas no prazo previsto.

**Riscos materializados**

Regista quantos eventos efetivamente ocorreram.

**Exposição residual**

Compara a avaliação dos riscos antes e depois das respostas.

**Consumo de contingência**

Acompanha quanto da reserva financeira foi utilizado.

### Exemplo de painel de riscos

| Indicador | Resultado |
|---|---:|
| Riscos identificados | 20 |
| Riscos críticos | 3 |
| Riscos altos | 6 |
| Riscos médios | 7 |
| Riscos baixos | 4 |
| Riscos sem responsável | 0 |
| Respostas em atraso | 2 |
| Riscos materializados | 1 |

Os indicadores permitem acompanhar a evolução dos riscos, mas precisam de ser analisados juntamente com as informações qualitativas.

### Boas práticas de Gestão de Riscos

**1. Identificar riscos desde o início**

A identificação deve começar ainda durante o planeamento.

**2. Envolver diferentes stakeholders**

Perspetivas técnicas, financeiras, operacionais e comerciais ajudam a identificar fontes de incerteza.

**3. Utilizar a EAR**

A estrutura hierárquica evita que categorias importantes sejam esquecidas.

**4. Definir escalas consistentes**

As avaliações PxI devem seguir critérios documentados.

**5. Priorizar adequadamente**

Riscos críticos exigem maior atenção e respostas proporcionais.

**6. Atribuir responsáveis**

Cada risco relevante deve possuir alguém responsável pelo seu acompanhamento.

**7. Preparar planos de contingência**

Eventos importantes devem possuir respostas antecipadamente definidas.

**8. Avaliar riscos residuais e secundários**

As respostas nem sempre eliminam a exposição e podem introduzir novas incertezas.

**9. Atualizar o Registo de Riscos**

Probabilidades, impactos, prioridades e estratégias podem mudar ao longo do projeto.

**10. Integrar riscos com as outras áreas**

A gestão de riscos deve influenciar decisões de escopo, prazo, orçamento, qualidade, recursos e aquisições.

### Erros comuns na Gestão de Riscos

**Confundir riscos com problemas**

Registar acontecimentos já materializados como se fossem incertezas futuras.

**Considerar apenas ameaças**

Ignorar oportunidades que poderiam melhorar os resultados do projeto.

**Construir a matriz sem critérios**

Atribuir valores de probabilidade e impacto sem uma escala consistente.

**Identificar riscos sem planear respostas**

Produzir um registo extenso que não orienta ações concretas.

**Não atribuir responsáveis**

Deixar riscos importantes sem acompanhamento.

**Não considerar os custos das respostas**

Propor ações de mitigação sem avaliar o impacto no orçamento.

**Acreditar que a mitigação elimina totalmente o risco**

Desconsiderar a exposição residual.

**Não atualizar os riscos durante a execução**

Manter classificações iniciais mesmo quando o contexto do projeto mudou.

### Visão integrada da Gestão de Riscos

```text
              OBJETIVOS DO PROJETO
                       |
                       v
              IDENTIFICAR RISCOS
                       |
                       v
             ORGANIZAR PELA EAR
                       |
                       v
               REGISTAR RISCOS
                       |
                       v
              AVALIAR PELA PxI
                       |
                       v
              DEFINIR PRIORIDADES
                       |
                       v
               PLANEAR RESPOSTAS
                       |
             +---------+---------+
             |                   |
             v                   v
          AMEAÇAS           OPORTUNIDADES
             |                   |
             v                   v
       Evitar, Mitigar      Explorar, Melhorar
       Transferir,          Partilhar,
       Aceitar, Escalar     Aceitar, Escalar
             |                   |
             +---------+---------+
                       |
                       v
              IMPLEMENTAR AÇÕES
                       |
                       v
              MONITORIZAR RISCOS
                       |
                       v
               REAVALIAR A PxI
                       |
                       v
               ATUALIZAR O PLANO
```

A gestão de riscos é eficaz quando se transforma num processo contínuo de antecipação, avaliação, resposta e aprendizagem.

---

## Resumo em uma frase

> A Gestão de Riscos em Projetos é um processo contínuo de identificação e tratamento de incertezas que podem representar ameaças ou oportunidades, utilizando a Estrutura Analítica de Riscos (EAR) para organizar as suas fontes, a Matriz de Probabilidade e Impacto (PxI) para avaliar e priorizar os eventos, e o Plano de Respostas aos Riscos para definir estratégias como evitar, mitigar, transferir, aceitar, explorar, melhorar, partilhar ou escalar, assegurando que as respostas sejam implementadas, os riscos residuais e secundários sejam monitorizados e os objetivos de escopo, prazo, custo e qualidade sejam protegidos ao longo do ciclo de vida do projeto.

---

## Conceitos relacionados para estudar a seguir

- **Análise Quantitativa de Riscos** — aprofundar o Valor Monetário Esperado (EMV), árvores de decisão e técnicas probabilísticas para estimar os efeitos financeiros das incertezas.

- **Simulação Monte Carlo** — utilizar simulações computacionais para avaliar milhares de cenários possíveis e estimar a probabilidade de cumprir prazos e orçamentos.

- **Gestão de Reservas de Contingência** — relacionar riscos identificados com reservas financeiras, consumo de contingência e revisões do orçamento.

- **Análise de Causa Raiz (Root Cause Analysis)** — aplicar técnicas como os 5 Porquês e o Diagrama de Ishikawa para identificar fatores que originam problemas e eventos de risco.

- **FMEA — Failure Mode and Effects Analysis** — estudar a análise dos modos de falha e seus efeitos, utilizando critérios de severidade, ocorrência e deteção para priorizar medidas preventivas.

- **Gestão de Incidentes em TI** — compreender como acontecimentos materializados são detetados, classificados, tratados e resolvidos em operações e serviços de tecnologia.

- **Gestão de Riscos em DevOps e Cloud** — explorar práticas de segurança, disponibilidade, disaster recovery, backups, observabilidade e continuidade operacional em infraestruturas modernas.

- **Gestão de Riscos em Metodologias Ágeis** — analisar como Scrum e Kanban permitem identificar, acompanhar e responder a riscos por meio de ciclos iterativos, revisões frequentes e feedback contínuo.
