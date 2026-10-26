
# Concordância e Conformidade

> Este ficheiro dá continuidade à Gestão de Riscos apresentada em `08_riscos.md`, aprofundando a **Gestão da Qualidade em Projetos (Project Quality Management)**. O objetivo é compreender o significado da qualidade, estabelecer padrões e critérios de aceitação, estruturar o planeamento da qualidade e conhecer sete ferramentas fundamentais para identificar problemas, analisar causas, monitorizar processos e promover a melhoria contínua.

---

## 1. O que é Qualidade? — fundamentação da qualidade

### O conceito de qualidade

A **qualidade (Quality)** representa o grau em que um conjunto de características inerentes a um produto, serviço, processo ou resultado satisfaz os requisitos estabelecidos.

Na gestão de projetos, a qualidade não significa necessariamente produzir o resultado mais sofisticado, caro ou tecnologicamente avançado.

Um produto apresenta qualidade quando **cumpre os requisitos acordados e é adequado à finalidade para a qual foi desenvolvido**.

**Exemplo — Desenvolvimento de Software:**

Uma empresa contrata o desenvolvimento de uma aplicação web para gerir reservas de um ginásio.

Os principais requisitos são:

- Permitir o registo de utilizadores.
- Apresentar horários disponíveis.
- Permitir reservas de aulas.
- Impedir reservas acima da capacidade.
- Garantir a segurança dos dados.
- Funcionar corretamente em dispositivos móveis.

Se a aplicação implementar essas funcionalidades de forma confiável, segura e conforme os critérios definidos, estará a cumprir os requisitos de qualidade.

Por outro lado, adicionar funcionalidades complexas que não foram solicitadas não significa necessariamente aumentar a qualidade.

### Qualidade vs. Grau (Quality vs. Grade)

Uma distinção importante é a diferença entre **qualidade** e **grau**.

**Qualidade (Quality)**

Refere-se ao cumprimento dos requisitos e à adequação ao uso.

**Grau (Grade)**

Representa uma categoria ou classificação atribuída a produtos com a mesma finalidade, mas com diferentes características técnicas ou funcionalidades.

**Exemplo:**

Considere duas aplicações de gestão de tarefas.

| Característica | Aplicação A | Aplicação B |
|---|---|---|
| Funcionalidades | Básicas | Avançadas |
| Integrações externas | Poucas | Muitas |
| Público-alvo | Pequenas equipas | Grandes organizações |
| Cumprimento dos requisitos | Completo | Completo |
| Defeitos críticos | Nenhum conhecido | Nenhum conhecido |
| Grau | Simples | Avançado |
| Qualidade | Adequada | Adequada |

A aplicação A pode possuir um grau inferior e, ainda assim, apresentar elevada qualidade.

**Baixo grau não significa baixa qualidade.**

Uma aplicação simples, estável e adequada às necessidades do utilizador pode ter mais qualidade do que uma aplicação sofisticada, mas repleta de defeitos.

### Qualidade e conformidade

O termo **conformidade (Conformance)** representa o cumprimento de requisitos, especificações, normas ou padrões previamente definidos.

Em projetos, a conformidade verifica se os entregáveis apresentam as características estabelecidas.

**Exemplo:**

```text
REQUISITO:

"O sistema deve permitir autenticação
utilizando e-mail e palavra-passe."

                |
                v

IMPLEMENTAÇÃO:

Autenticação desenvolvida e integrada.

                |
                v

VERIFICAÇÃO:

Testar se a autenticação funciona
conforme os critérios definidos.

                |
                v

RESULTADO:

Conforme / Não conforme
```

Uma **não conformidade (Nonconformity)** ocorre quando um requisito estabelecido não é cumprido.

### Qualidade e concordância

No contexto da gestão da qualidade, a ideia de concordância relaciona-se com o alinhamento entre:

- Necessidades dos stakeholders.
- Requisitos documentados.
- Critérios de aceitação.
- Processos de desenvolvimento.
- Resultados entregues.

A equipa e o cliente precisam de possuir uma compreensão comum sobre o que constitui uma entrega aceitável.

**Exemplo:**

O cliente solicita um sistema de relatórios "rápido".

Para o cliente, rápido significa menos de 2 segundos.

Para a equipa, rápido significa menos de 10 segundos.

Embora ambos utilizem a mesma palavra, não existe concordância sobre o requisito.

Uma especificação adequada seria:

```text
REQUISITO NÃO MENSURÁVEL:

"O sistema deve apresentar relatórios rapidamente."


REQUISITO MENSURÁVEL:

"O sistema deve apresentar o relatório
em até 2 segundos para 95% das consultas,
sob uma carga de até 100 utilizadores
simultâneos no ambiente de teste definido."
```

A segunda formulação permite verificar objetivamente a conformidade.

### Qualidade do Produto vs. Qualidade do Projeto

A gestão da qualidade envolve duas dimensões complementares.

**Qualidade do Produto (Product Quality)**

Avalia as características do produto ou serviço desenvolvido.

Em software, pode envolver:

- Funcionalidade.
- Desempenho.
- Segurança.
- Usabilidade.
- Fiabilidade.
- Manutenibilidade.
- Compatibilidade.

**Qualidade do Projeto e dos Processos**

Avalia como o trabalho é planeado, executado, monitorizado e melhorado.

Pode envolver:

- Processos documentados.
- Critérios de revisão.
- Comunicação entre equipas.
- Gestão de mudanças.
- Testes sistemáticos.
- Rastreabilidade dos requisitos.
- Cumprimento de procedimentos.

| Perspetiva | Pergunta principal |
|---|---|
| Qualidade do produto | O resultado atende aos requisitos? |
| Qualidade do processo | O trabalho é realizado de forma controlada e eficaz? |

Uma equipa pode seguir processos bem definidos e ainda entregar um produto inadequado se os requisitos estiverem incorretos.

Da mesma forma, um produto pode funcionar satisfatoriamente no início, mas ter sido desenvolvido através de processos frágeis que dificultam a manutenção.

### Os principais autores da Gestão da Qualidade

A evolução da qualidade moderna foi influenciada por diferentes especialistas.

**William Edwards Deming (1900–1993)**

Estatístico e consultor norte-americano, Deming destacou a importância da melhoria contínua, da compreensão da variação dos processos e da responsabilidade da gestão na criação de sistemas de qualidade.

O seu trabalho está associado à popularização do ciclo de melhoria contínua conhecido como PDCA ou Ciclo de Deming, inspirado no ciclo de Shewhart.

**Joseph M. Juran (1904–2008)**

Juran contribuiu para a compreensão da qualidade como adequação ao uso (*Fitness for Use*).

Desenvolveu a conhecida **Trilogia de Juran**:

1. Planeamento da Qualidade.
2. Controlo da Qualidade.
3. Melhoria da Qualidade.

**Philip B. Crosby (1926–2001)**

Crosby destacou a importância da conformidade com os requisitos e da prevenção de defeitos.

Defendeu o princípio de **Zero Defeitos (Zero Defects)** como uma orientação para prevenir falhas, em vez de aceitar defeitos como inevitáveis.

**Kaoru Ishikawa (1915–1989)**

Especialista japonês que contribuiu para a difusão das ferramentas de controlo da qualidade e popularizou o **Diagrama de Causa e Efeito**, também conhecido como Diagrama de Ishikawa.

### A Trilogia de Juran

A qualidade pode ser organizada através de três processos complementares.

```text
               GESTÃO DA QUALIDADE
                       |
          +------------+------------+
          |            |            |
          v            v            v
      PLANEAMENTO   CONTROLO      MELHORIA
          |            |            |
          v            v            v
       Definir       Medir e       Aperfeiçoar
      requisitos    comparar       processos
          |            |            |
          +------------+------------+
                       |
                       v
               RESULTADOS
                CONFIÁVEIS
```

**Planeamento:** determinar os requisitos, critérios, recursos e processos necessários.

**Controlo:** verificar os resultados e identificar desvios.

**Melhoria:** identificar causas de problemas e aperfeiçoar continuamente o sistema de trabalho.

### Gestão da Qualidade no PMBOK®

Na abordagem por processos do PMBOK® Guide, especialmente na 6ª edição, a Gestão da Qualidade está organizada em três processos fundamentais.

**1. Planear a Gestão da Qualidade (Plan Quality Management)**

Identificar os requisitos e padrões de qualidade aplicáveis ao projeto e definir como o seu cumprimento será demonstrado.

**2. Gerir a Qualidade (Manage Quality)**

Transformar o plano em atividades executáveis, analisar os processos e promover a melhoria contínua.

Este processo está relacionado com práticas de garantia da qualidade.

**3. Controlar a Qualidade (Control Quality)**

Monitorizar e registar os resultados das atividades, verificando se os entregáveis e processos cumprem os requisitos definidos.

```text
         REQUISITOS DO PROJETO
                  |
                  v
       PLANEAR A QUALIDADE
                  |
                  v
        GERIR A QUALIDADE
                  |
                  v
       CONTROLAR A QUALIDADE
                  |
          +-------+-------+
          |               |
          v               v
       CONFORME       NÃO CONFORME
          |               |
          v               v
       Validar         Investigar
       entrega         e corrigir
                          |
                          v
                    Melhorar processo
```

### Garantia da Qualidade vs. Controlo da Qualidade

Embora estejam relacionados, **Quality Assurance (QA)** e **Quality Control (QC)** possuem focos diferentes.

**Quality Assurance (QA) — Garantia da Qualidade**

É orientada principalmente para os processos utilizados na produção dos entregáveis.

Procura aumentar a confiança de que os requisitos de qualidade serão cumpridos.

**Quality Control (QC) — Controlo da Qualidade**

É orientado para verificar e avaliar os resultados obtidos.

Procura identificar não conformidades e confirmar se os produtos atendem aos critérios definidos.

| Característica | QA | QC |
|---|---|---|
| Foco principal | Processos | Resultados |
| Objetivo | Prevenir falhas | Identificar não conformidades |
| Abordagem | Preventiva | Verificação e deteção |
| Exemplo | Definir padrões de código | Executar testes de software |
| Momento | Ao longo do processo | Durante e após a produção dos entregáveis |

**Exemplo em Engenharia de Software:**

```text
QUALITY ASSURANCE

- Definir padrões de desenvolvimento.
- Estabelecer critérios para code review.
- Criar uma estratégia de testes.
- Padronizar pipelines de CI/CD.
- Melhorar os processos de entrega.

                 |
                 v

QUALITY CONTROL

- Executar testes unitários.
- Executar testes de integração.
- Verificar critérios de aceitação.
- Registar defeitos.
- Validar funcionalidades.
```

Na prática, QA e QC complementam-se e contribuem conjuntamente para a qualidade do produto.

### Prevenção vs. Inspeção

Existem duas formas fundamentais de lidar com defeitos.

**Prevenção**

Criar condições para evitar a ocorrência dos defeitos.

Exemplos:

- Formação da equipa.
- Revisão de requisitos.
- Padronização de processos.
- Análise estática do código.
- Automatização de verificações.

**Inspeção**

Verificar os resultados para identificar defeitos existentes.

Exemplos:

- Inspeção de entregáveis.
- Testes funcionais.
- Auditorias.
- Verificação de conformidade.
- Testes de aceitação.

A prevenção tende a reduzir a necessidade de correções posteriores.

Contudo, inspeção e testes continuam necessários, porque nenhum processo elimina completamente a possibilidade de defeitos.

### Custo da Qualidade (Cost of Quality — CoQ)

O **Custo da Qualidade** representa os custos associados à prevenção, avaliação e ocorrência de falhas na qualidade.

É normalmente dividido em quatro categorias.

**1. Custos de Prevenção**

Investimentos realizados para evitar defeitos.

Exemplos:

- Formação de profissionais.
- Planeamento da qualidade.
- Padronização de processos.
- Revisões preventivas.

**2. Custos de Avaliação**

Custos relacionados com a verificação da conformidade.

Exemplos:

- Testes de software.
- Auditorias.
- Inspeções.
- Validação de entregáveis.

**3. Custos de Falhas Internas**

Custos associados a defeitos identificados antes da entrega ao cliente.

Exemplos:

- Correção de bugs.
- Retrabalho.
- Reexecução de testes.
- Refatoração necessária para corrigir problemas.

**4. Custos de Falhas Externas**

Custos associados a defeitos identificados após a entrega.

Exemplos:

- Incidentes em produção.
- Suporte corretivo.
- Penalizações contratuais.
- Perda de clientes.
- Danos reputacionais.

### Estrutura do Custo da Qualidade

```text
              CUSTO DA QUALIDADE
                       |
          +------------+------------+
          |                         |
          v                         v
    CONFORMIDADE              NÃO CONFORMIDADE
          |                         |
     +----+----+               +----+----+
     |         |               |         |
     v         v               v         v
 Prevenção  Avaliação       Falhas      Falhas
                             Internas    Externas
```

**Exemplo:**

| Categoria | Custo |
|---|---:|
| Prevenção | €2.000 |
| Avaliação | €3.000 |
| Falhas internas | €1.500 |
| Falhas externas | €4.000 |
| **Custo total da qualidade** | **€10.500** |

```text
CoQ = Prevenção + Avaliação
    + Falhas Internas + Falhas Externas

CoQ = 2.000 + 3.000 + 1.500 + 4.000

CoQ = €10.500
```

O objetivo não é necessariamente minimizar cada categoria isoladamente, mas encontrar um equilíbrio que reduza o custo total e garanta os padrões de qualidade.

### Qualidade e Gestão de Riscos

A qualidade está diretamente relacionada com o conteúdo estudado em `08_riscos.md`.

Uma falha de qualidade pode constituir uma consequência de um risco identificado.

**Exemplo:**

```text
RISCO:
A equipa pode não executar testes
de integração suficientes.

          |
          v

EVENTO:
Falhas de integração não identificadas.

          |
          v

CONSEQUÊNCIA:
Defeitos no ambiente de produção.

          |
          v

IMPACTOS:
- Retrabalho.
- Custos adicionais.
- Insatisfação do cliente.
- Possível atraso na entrega.
```

Um plano de qualidade adequado pode funcionar como resposta de mitigação para diversos riscos técnicos.

---

## 2. Planejamento — padronização da qualidade

### O que é o planeamento da qualidade

O **Planeamento da Qualidade (Quality Planning)** é o processo de identificar quais requisitos, normas, métricas e procedimentos deverão ser aplicados ao projeto para garantir que os entregáveis cumpram as expectativas definidas.

O seu principal resultado é o **Plano de Gestão da Qualidade (Quality Management Plan)**.

Este plano estabelece:

- Objetivos de qualidade.
- Normas e padrões aplicáveis.
- Critérios de aceitação.
- Métricas e indicadores.
- Responsabilidades.
- Procedimentos de verificação.
- Ferramentas de qualidade.
- Processos de tratamento de não conformidades.
- Mecanismos de melhoria contínua.

### Por que padronizar processos

A **padronização (Standardization)** consiste em estabelecer práticas e critérios comuns para executar atividades de forma consistente.

Sem padronização, diferentes membros de uma equipa podem realizar a mesma atividade utilizando critérios incompatíveis.

**Exemplo:**

Numa equipa de desenvolvimento, cada programador utiliza convenções diferentes para escrever código.

Isso pode provocar:

- Dificuldade de leitura.
- Manutenção mais complexa.
- Inconsistência entre módulos.
- Revisões demoradas.
- Maior probabilidade de determinados erros.

Ao definir padrões comuns, a organização procura reduzir a variabilidade desnecessária.

```text
SEM PADRONIZAÇÃO

Dev A --> Convenção A
Dev B --> Convenção B
Dev C --> Convenção C
                  |
                  v
         INCONSISTÊNCIAS


COM PADRONIZAÇÃO

          PADRÃO COMUM
                |
       +--------+--------+
       |        |        |
       v        v        v
      Dev A    Dev B    Dev C
       |        |        |
       +--------+--------+
                |
                v
        MAIOR CONSISTÊNCIA
```

A padronização não significa eliminar toda a flexibilidade.

Os padrões devem ser adequados ao contexto e permitir melhorias quando necessário.

### Normas e modelos de referência

Existem diversas normas e modelos que apoiam a gestão da qualidade.

**ISO 9001 — Quality Management Systems**

Norma internacional que estabelece requisitos para sistemas de gestão da qualidade.

Enfatiza aspetos como:

- Orientação para o cliente.
- Liderança.
- Abordagem por processos.
- Melhoria contínua.
- Decisões baseadas em evidências.
- Gestão das relações com partes interessadas.

**ISO 9000**

Apresenta fundamentos e vocabulário relacionados com sistemas de gestão da qualidade.

**ISO/IEC 25010**

Apresenta um modelo de qualidade para produtos de software e sistemas de informação.

É uma referência relevante para avaliar características como desempenho, segurança, fiabilidade e manutenibilidade.

**ISO/IEC/IEEE 29119**

Família de normas relacionada com processos e documentação de testes de software.

**CMMI — Capability Maturity Model Integration**

Modelo utilizado para avaliar e melhorar a capacidade e maturidade dos processos organizacionais.

> A escolha das normas depende do tipo de projeto, do setor, dos requisitos contratuais e das obrigações regulatórias. Nem todas as normas precisam de ser aplicadas simultaneamente.

### Características de Qualidade de Software

A qualidade de software pode ser avaliada através de diferentes características.

Entre as dimensões relevantes encontram-se:

**Adequação Funcional**

O sistema disponibiliza funcionalidades corretas e adequadas às necessidades?

**Eficiência de Desempenho**

O sistema apresenta tempos de resposta e utilização de recursos adequados?

**Compatibilidade**

O sistema consegue coexistir e interagir com outros sistemas?

**Capacidade de Interação**

Os utilizadores conseguem utilizar o sistema de forma eficaz e compreensível?

**Fiabilidade**

O sistema mantém o funcionamento esperado sob condições definidas?

**Segurança**

O sistema protege dados e recursos contra acessos e ações não autorizados?

**Manutenibilidade**

O software pode ser analisado, corrigido e modificado de forma eficiente?

**Flexibilidade**

O sistema pode adaptar-se a diferentes ambientes e necessidades?

**Segurança Operacional (Safety)**

O sistema evita ou reduz riscos de danos a pessoas, propriedades ou ao ambiente?

Estas características estão alinhadas com a evolução dos modelos de qualidade da família ISO/IEC 25010.

### Como elaborar um Plano de Gestão da Qualidade

Vamos utilizar como exemplo um projeto de desenvolvimento de uma aplicação web de reservas.

**Passo 1 — Identificar os requisitos**

A equipa analisa os requisitos funcionais e não funcionais.

Exemplos:

- Registar utilizadores.
- Permitir reservas.
- Impedir duplicação de reservas.
- Proteger informações pessoais.
- Oferecer interface responsiva.

**Passo 2 — Estabelecer critérios de qualidade**

Definir condições mensuráveis.

| Requisito | Critério de qualidade |
|---|---|
| Autenticação | Credenciais inválidas não podem permitir acesso |
| Reservas | Não permitir ultrapassar a capacidade das aulas |
| Desempenho | 95% das requisições abaixo de 2 segundos sob carga definida |
| Responsividade | Interfaces funcionais nas resoluções suportadas |
| Integridade | Uma reserva deve possuir referência válida a utilizador e aula |

**Passo 3 — Definir métricas**

Selecionar indicadores que permitam medir o cumprimento dos critérios.

**Passo 4 — Definir procedimentos**

Estabelecer como as verificações serão realizadas.

**Passo 5 — Atribuir responsabilidades**

Definir quem executa, verifica e aprova as atividades.

**Passo 6 — Definir tratamento de não conformidades**

Estabelecer como defeitos serão registados, priorizados e corrigidos.

**Passo 7 — Aprovar e comunicar o plano**

Garantir que os stakeholders relevantes conheçam os critérios de qualidade.

### Exemplo simplificado de Plano de Qualidade

```text
PLANO DE GESTÃO DA QUALIDADE

Projeto:
Sistema Web de Reservas

Objetivo:
Garantir a conformidade dos requisitos
funcionais e não funcionais.

Padrões:
- Convenções de código da equipa.
- Critérios de revisão de Pull Requests.
- Requisitos de segurança definidos.
- Estratégia de testes documentada.

Métricas:
- Defeitos críticos abertos.
- Taxa de aprovação de testes.
- Tempo de resposta.
- Cobertura de testes nas áreas críticas.

Ferramentas:
- ESLint.
- Prettier.
- Test Runner.
- Pipeline CI/CD.
- Sistema de registo de issues.

Responsáveis:
- Tech Lead: padrões técnicos.
- QA: estratégia e execução de testes.
- Developers: qualidade da implementação.
- Product Owner: aceitação funcional.

Critérios de entrega:
- Testes obrigatórios aprovados.
- Ausência de defeitos críticos conhecidos.
- Requisitos de segurança cumpridos.
- Validação dos critérios de aceitação.
```

Os critérios apresentados são exemplos e devem ser adaptados a cada projeto.

### Métricas de Qualidade

As métricas permitem transformar requisitos em indicadores observáveis.

**Taxa de Aprovação de Testes**

```text
                         Testes aprovados
Taxa de aprovação = ------------------------- × 100
                         Testes executados
```

**Exemplo:**

```text
Testes executados = 200

Testes aprovados = 190

Taxa = (190 / 200) × 100

Taxa = 95%
```

**Densidade de Defeitos**

Relaciona o número de defeitos identificados com uma medida do tamanho do software.

```text
                       Número de defeitos
Densidade de defeitos = --------------------
                       Tamanho do software
```

Exemplo:

```text
Defeitos encontrados: 12

Tamanho do software: 6 KLOC
(milhares de linhas de código)

Densidade = 12 / 6

Densidade = 2 defeitos/KLOC
```

Esta métrica requer cuidado, pois linhas de código não representam necessariamente complexidade, qualidade ou produtividade.

**Taxa de Retrabalho**

Pode relacionar o esforço dedicado a correções com o esforço total.

```text
                     Horas de retrabalho
Taxa de retrabalho = --------------------- × 100
                     Horas totais
```

**Exemplo:**

```text
Horas totais: 400

Horas de retrabalho: 40

Taxa = (40 / 400) × 100

Taxa = 10%
```

### O Ciclo PDCA

O **PDCA (Plan, Do, Check, Act)** é um modelo de melhoria contínua.

O ciclo é composto por quatro etapas.

**Plan — Planear**

Identificar o problema, estabelecer objetivos e definir ações.

**Do — Executar**

Implementar as ações planeadas, preferencialmente de forma controlada.

**Check — Verificar**

Medir os resultados e comparar com os objetivos estabelecidos.

**Act — Agir**

Padronizar melhorias bem-sucedidas ou ajustar a abordagem quando necessário.

```text
                 PLAN
               (Planear)
                   |
                   v
                  DO
               (Executar)
                   |
                   v
                 CHECK
               (Verificar)
                   |
                   v
                  ACT
                (Agir)
                   |
                   +----------+
                              |
                              v
                       NOVO CICLO
```

### Exemplo de PDCA aplicado ao software

**Problema:** aumento de erros durante o deploy.

**Plan**

Investigar os erros e definir um processo de validação automática.

**Do**

Implementar testes no pipeline de CI/CD.

**Check**

Comparar a frequência de falhas antes e depois da alteração.

**Act**

Se os resultados forem favoráveis, incorporar a verificação como padrão permanente.

### Padronização e melhoria contínua

A padronização não deve ser confundida com imutabilidade.

Uma organização pode estabelecer um processo padrão e aperfeiçoá-lo sempre que novas evidências demonstrarem oportunidades de melhoria.

```text
PADRONIZAR
     |
     v
EXECUTAR
     |
     v
MEDIR
     |
     v
IDENTIFICAR MELHORIAS
     |
     v
ATUALIZAR PADRÃO
     |
     +-----------------> NOVO CICLO
```

O padrão representa a melhor forma de trabalho conhecida e aprovada naquele momento.

---

## 3. Ferramentas da Qualidade I — apresentação de três ferramentas

### O que são as ferramentas da qualidade

As **Ferramentas da Qualidade (Quality Tools)** são técnicas utilizadas para recolher, organizar, visualizar e analisar informações sobre processos, produtos e problemas.

Ajudam as organizações a tomar decisões baseadas em evidências, em vez de depender exclusivamente da intuição.

As sete ferramentas básicas tradicionalmente associadas ao controlo da qualidade são frequentemente apresentadas com pequenas variações entre referências.

Neste módulo, serão estudadas:

**Ferramentas da Qualidade I:**

1. Diagrama de Ishikawa.
2. Diagrama de Pareto.
3. Folha de Verificação.

**Ferramentas da Qualidade II:**

4. Histograma.
5. Gráfico de Controlo.
6. Diagrama de Dispersão.
7. Fluxograma.

> Algumas classificações das sete ferramentas tradicionais incluem a **Estratificação** no lugar do Fluxograma. Ambas são utilizadas na análise e melhoria da qualidade.

### 3.1 Diagrama de Ishikawa — Causa e Efeito

O **Diagrama de Ishikawa**, também conhecido como:

- Diagrama de Causa e Efeito.
- Fishbone Diagram.
- Diagrama Espinha de Peixe.

É uma ferramenta utilizada para identificar e organizar possíveis causas de um problema.

Foi popularizado por **Kaoru Ishikawa** e tornou-se uma das ferramentas mais reconhecidas da Gestão da Qualidade.

### Como funciona

O problema é colocado na extremidade principal do diagrama.

As possíveis causas são distribuídas em categorias, formando uma estrutura semelhante à espinha de um peixe.

O objetivo é compreender os fatores que podem contribuir para um determinado efeito.

### O modelo dos 6M

Na indústria, uma classificação comum utiliza seis categorias:

1. **Método (Method)** — procedimentos de trabalho.
2. **Máquina (Machine)** — equipamentos e tecnologia.
3. **Mão de obra (Manpower)** — competências e execução humana.
4. **Material (Material)** — insumos e recursos utilizados.
5. **Medição (Measurement)** — instrumentos e métricas.
6. **Meio ambiente (Mother Nature/Environment)** — condições do ambiente.

### Diagrama de Ishikawa

```text
       MÉTODO            MÁQUINA           MATERIAL
          \                 \                  \
           \                 \                  \
            \                 \                  \
-------------\-----------------\------------------\----> PROBLEMA
             /                 /                  /
            /                 /                  /
           /                 /                  /
     MÃO DE OBRA          MEDIÇÃO            AMBIENTE
```

### Exemplo aplicado ao desenvolvimento de software

**Problema:** elevada quantidade de bugs encontrados após o deploy.

Possíveis causas:

**Método**
- Ausência de revisão de código.
- Testes insuficientes.
- Requisitos mal definidos.

**Máquina / Tecnologia**
- Ambiente de staging diferente da produção.
- Falhas nas ferramentas de CI/CD.
- Infraestrutura mal configurada.

**Mão de obra**
- Falta de experiência com a tecnologia.
- Formação insuficiente.
- Comunicação deficiente.

**Material**
- Bibliotecas incompatíveis.
- Dados de teste inadequados.
- Dependências desatualizadas.

**Medição**
- Ausência de métricas de qualidade.
- Falta de monitorização de erros.
- Cobertura de testes desconhecida.

**Ambiente**
- Mudanças frequentes de prioridade.
- Pressão excessiva por entregas.
- Interrupções constantes.

### Como construir o Diagrama de Ishikawa

**Passo 1 — Definir o problema**

Descrever o efeito de forma objetiva.

**Passo 2 — Identificar categorias**

Utilizar os 6M ou categorias adaptadas ao contexto.

**Passo 3 — Identificar possíveis causas**

Reunir a equipa e utilizar brainstorming.

**Passo 4 — Aprofundar as causas**

Investigar fatores específicos dentro de cada categoria.

**Passo 5 — Validar as hipóteses**

Utilizar dados e evidências para verificar quais causas realmente contribuem para o problema.

**Passo 6 — Definir ações corretivas**

Atuar sobre as causas confirmadas.

### Vantagens e limitações

**Vantagens:**

- Organização visual de causas.
- Estimula a participação da equipa.
- Ajuda a evitar conclusões precipitadas.
- Facilita análises de causa raiz.

**Limitações:**

- Não comprova causalidade.
- Pode gerar muitas hipóteses.
- Depende da qualidade das informações disponíveis.
- Exige investigação complementar.

**Quando usar:** durante a análise de defeitos recorrentes, falhas operacionais, problemas de produtividade ou dificuldades de qualidade.

---

### 3.2 Diagrama de Pareto

O **Diagrama de Pareto (Pareto Chart)** é uma ferramenta utilizada para identificar quais categorias de problemas possuem maior contribuição para um determinado resultado.

Baseia-se no princípio de Pareto, frequentemente associado à relação aproximada **80/20**.

A ideia central é que uma parcela relativamente pequena das causas pode representar uma parcela significativa dos efeitos.

A relação 80/20 não é uma regra matemática obrigatória.

### O Princípio de Pareto

Em determinados contextos:

- Uma pequena quantidade de tipos de defeitos concentra grande parte das ocorrências.
- Poucas causas explicam uma parcela relevante das reclamações.
- Determinadas categorias concentram a maior parte do retrabalho.

O Diagrama de Pareto permite identificar essas prioridades.

### Exemplo — Bugs encontrados numa aplicação

Uma equipa registou 100 defeitos durante os testes.

| Categoria | Quantidade |
|---|---:|
| Validação de formulários | 40 |
| Autenticação | 25 |
| Interface | 15 |
| Base de dados | 10 |
| Relatórios | 6 |
| Outros | 4 |
| **Total** | **100** |

### Calcular a percentagem acumulada

| Categoria | Defeitos | Percentagem | Acumulado |
|---|---:|---:|---:|
| Validação de formulários | 40 | 40% | 40% |
| Autenticação | 25 | 25% | 65% |
| Interface | 15 | 15% | 80% |
| Base de dados | 10 | 10% | 90% |
| Relatórios | 6 | 6% | 96% |
| Outros | 4 | 4% | 100% |

### Representação visual

```text
DEFEITOS POR CATEGORIA

Validação      ████████████████████████████████████████ 40
Autenticação   █████████████████████████                25
Interface      ███████████████                          15
Base de dados  ██████████                               10
Relatórios     ██████                                    6
Outros         ████                                      4
```

As três primeiras categorias representam 80% das ocorrências.

**Interpretação:**

A equipa poderá investigar prioritariamente os problemas de validação, autenticação e interface, pois estes concentram a maior parte dos defeitos registados.

Contudo, a frequência não deve ser o único critério.

Um defeito de segurança raro pode ser mais crítico do que dezenas de defeitos visuais.

### Como construir um Diagrama de Pareto

**Passo 1 — Definir o problema**

Escolher o fenómeno a analisar.

**Passo 2 — Recolher dados**

Registar a frequência ou o impacto dos diferentes tipos de problemas.

**Passo 3 — Agrupar por categorias**

Organizar os dados em grupos consistentes.

**Passo 4 — Ordenar**

Colocar as categorias da maior para a menor contribuição.

**Passo 5 — Calcular percentagens**

Determinar a participação individual e acumulada.

**Passo 6 — Representar graficamente**

Criar barras ordenadas e, quando possível, uma linha de percentagem acumulada.

**Passo 7 — Identificar prioridades**

Selecionar as categorias mais relevantes para investigação.

### Vantagens e limitações

**Vantagens:**

- Facilita a priorização.
- Utiliza dados objetivos.
- É relativamente simples de construir.
- Ajuda a concentrar esforços de melhoria.

**Limitações:**

- Não identifica automaticamente as causas raiz.
- Depende da classificação correta dos dados.
- Pode desvalorizar problemas raros, mas graves.
- Os resultados dependem do período analisado.

**Quando usar:** na priorização de bugs, incidentes, reclamações, desperdícios ou fontes de retrabalho.

---

### 3.3 Folha de Verificação (Check Sheet)

A **Folha de Verificação (Check Sheet)** é uma ferramenta estruturada utilizada para recolher e registar dados de forma consistente.

O seu objetivo é facilitar a identificação de padrões, frequências e comportamentos.

É importante distinguir a Folha de Verificação de uma checklist simples.

Uma **checklist** confirma se determinados itens foram realizados.

Uma **Check Sheet**, no contexto das ferramentas da qualidade, é normalmente utilizada para registar ocorrências ou dados que serão analisados.

### Exemplo de Folha de Verificação

Uma equipa acompanha os defeitos encontrados durante cinco dias de testes.

| Categoria | Seg | Ter | Qua | Qui | Sex | Total |
|---|---:|---:|---:|---:|---:|---:|
| Autenticação | 3 | 2 | 1 | 2 | 2 | 10 |
| Interface | 2 | 3 | 2 | 1 | 2 | 10 |
| API | 1 | 2 | 3 | 2 | 2 | 10 |
| Base de dados | 0 | 1 | 1 | 2 | 1 | 5 |
| **Total** | **6** | **8** | **7** | **7** | **7** | **35** |

A tabela permite identificar a distribuição das ocorrências por categoria e por dia.

### Como construir uma Folha de Verificação

**Passo 1 — Definir o objetivo**

Determinar quais informações precisam de ser recolhidas.

**Passo 2 — Definir categorias**

Estabelecer classificações claras.

**Passo 3 — Criar o formulário**

Organizar campos para registar ocorrências de forma simples.

**Passo 4 — Definir o período**

Determinar durante quanto tempo os dados serão recolhidos.

**Passo 5 — Registar informações**

Preencher a folha durante a execução do processo.

**Passo 6 — Analisar resultados**

Identificar frequências e padrões.

### Aplicações em software

A Folha de Verificação pode ser utilizada para acompanhar:

- Frequência de bugs por módulo.
- Falhas em pipelines.
- Erros de autenticação.
- Incidentes em produção.
- Reprovações em testes.
- Tipos de reclamações de utilizadores.

### Vantagens e limitações

**Vantagens:**

- Simplicidade.
- Padronização da recolha.
- Facilita análises posteriores.
- Pode ser utilizada com outras ferramentas.

**Limitações:**

- Não identifica causas por si só.
- Depende de registos consistentes.
- Pode produzir dados incompletos se as categorias forem inadequadas.

**Quando usar:** quando é necessário recolher dados antes de aplicar ferramentas como Pareto, Histograma ou Gráficos de Controlo.

---

## 4. Ferramentas da Qualidade II — apresentação de quatro ferramentas

### 4.1 Histograma

O **Histograma (Histogram)** é uma representação gráfica utilizada para visualizar a distribuição de valores numéricos.

Ao contrário de um gráfico de barras categórico, o histograma agrupa medições em intervalos.

Permite analisar:

- Frequência.
- Dispersão.
- Concentração.
- Assimetria.
- Valores extremos.
- Comportamento geral das medições.

### Exemplo — Tempo de resposta de uma API

Uma equipa recolheu 100 medições do tempo de resposta de uma API.

| Intervalo de resposta | Frequência |
|---|---:|
| 0–100 ms | 10 |
| 100–200 ms | 25 |
| 200–300 ms | 35 |
| 300–400 ms | 20 |
| 400–500 ms | 10 |
| **Total** | **100** |

### Representação visual

```text
FREQUÊNCIA

0–100 ms     ██████████                          10
100–200 ms   █████████████████████████           25
200–300 ms   ███████████████████████████████████ 35
300–400 ms   ████████████████████                20
400–500 ms   ██████████                          10
```

**Interpretação:**

A maior concentração de medições está entre 200 e 300 ms.

Contudo, o histograma também mostra que existem respostas mais lentas, próximas de 500 ms.

Essa distribuição pode indicar a necessidade de investigar situações específicas de maior latência.

### Como construir um Histograma

1. Recolher medições numéricas.
2. Determinar o intervalo dos valores.
3. Definir classes ou intervalos.
4. Contar os valores em cada classe.
5. Representar as frequências.
6. Analisar a distribuição.

### Histograma vs. Gráfico de Barras

| Histograma | Gráfico de Barras |
|---|---|
| Representa distribuições numéricas | Representa categorias |
| Valores agrupados em intervalos | Categorias independentes |
| Barras normalmente contíguas | Barras geralmente separadas |
| Exemplo: tempo de resposta | Exemplo: defeitos por módulo |

### Aplicações em software

- Distribuição de latências.
- Tempo de execução de testes.
- Duração de builds.
- Consumo de memória.
- Tempo de resolução de incidentes.
- Volume de transações.

### Vantagens e limitações

**Vantagens:**

- Facilita a visualização da variabilidade.
- Identifica concentrações.
- Pode revelar distribuições inesperadas.
- Permite avaliar dispersão.

**Limitações:**

- Não mostra a sequência temporal.
- Depende da escolha dos intervalos.
- Não demonstra causalidade.
- Pode ocultar diferenças entre grupos de dados.

**Quando usar:** quando é necessário compreender como os valores de uma variável numérica estão distribuídos.

---

### 4.2 Gráfico de Controlo (Control Chart)

O **Gráfico de Controlo** é uma ferramenta estatística utilizada para acompanhar o comportamento de um processo ao longo do tempo.

Foi desenvolvido a partir dos trabalhos de **Walter A. Shewhart**, pioneiro do controlo estatístico de processos.

O objetivo é avaliar se a variação observada é compatível com um processo estável ou se existem sinais de causas especiais.

### Variação comum vs. variação especial

**Causas comuns (Common Causes)**

São fontes de variação inerentes ao funcionamento habitual do processo.

**Causas especiais (Special Causes)**

São acontecimentos ou condições específicas que produzem variações fora do comportamento esperado.

**Exemplo:**

Uma API apresenta pequenas variações normais de latência.

Contudo, depois de um deploy, o tempo médio de resposta aumenta significativamente.

Essa alteração pode constituir um sinal de causa especial que precisa de investigação.

### Componentes do Gráfico de Controlo

Um gráfico de controlo apresenta geralmente:

- **CL — Center Line:** linha central.
- **UCL — Upper Control Limit:** limite superior de controlo.
- **LCL — Lower Control Limit:** limite inferior de controlo.

```text
VALOR
  ^
  |
  |-------------------------------- UCL
  |
  |          *       *
  |    *          *       *
  |       *    *
  |-------------------------------- CL
  |  *                  *
  |         *     *
  |
  |-------------------------------- LCL
  |
  +------------------------------------> TEMPO
```

Os limites de controlo são calculados com base no comportamento estatístico do processo.

Não devem ser confundidos com limites de especificação definidos pelo cliente.

### Limites de controlo vs. limites de especificação

**Limites de Controlo**

Representam limites estatísticos utilizados para avaliar a estabilidade do processo.

**Limites de Especificação**

Representam os valores aceitáveis definidos por requisitos técnicos, contratuais ou de negócio.

Um processo pode apresentar estabilidade estatística e, ainda assim, produzir resultados fora da especificação.

### Exemplo de aplicação

Uma equipa monitoriza o tempo médio diário de execução de uma pipeline.

| Dia | Tempo médio |
|---|---:|
| 1 | 6,1 min |
| 2 | 6,3 min |
| 3 | 6,0 min |
| 4 | 6,4 min |
| 5 | 6,2 min |
| 6 | 9,8 min |
| 7 | 6,3 min |

O aumento no sexto dia merece investigação.

Possíveis causas:

- Alteração na infraestrutura.
- Novo conjunto de testes.
- Falha de cache.
- Contenção de recursos.
- Alteração no pipeline.

Para determinar se existe um sinal estatístico de causa especial, seriam necessários um gráfico adequado, dados suficientes e limites calculados corretamente.

### Como construir um Gráfico de Controlo

1. Definir o processo a monitorizar.
2. Selecionar a métrica.
3. Recolher medições ao longo do tempo.
4. Escolher o tipo de gráfico adequado.
5. Calcular a linha central.
6. Determinar os limites de controlo.
7. Representar as observações.
8. Investigar sinais de instabilidade.

### Vantagens e limitações

**Vantagens:**

- Monitorização contínua.
- Identificação de variações anormais.
- Apoio ao controlo estatístico.
- Redução de decisões baseadas em flutuações normais.

**Limitações:**

- Exige dados e métodos estatísticos adequados.
- Não identifica diretamente a causa do problema.
- Limites incorretos podem gerar conclusões erradas.
- A interpretação depende do tipo de processo.

**Quando usar:** na monitorização de processos recorrentes, desempenho de sistemas, tempos de execução e indicadores operacionais.

---

### 4.3 Diagrama de Dispersão (Scatter Diagram)

O **Diagrama de Dispersão** é uma ferramenta utilizada para investigar a possível relação entre duas variáveis numéricas.

Cada ponto representa um par de valores.

A ferramenta ajuda a identificar tendências e correlações.

### Tipos de relação

**Correlação positiva**

Quando uma variável aumenta, a outra tende também a aumentar.

**Correlação negativa**

Quando uma variável aumenta, a outra tende a diminuir.

**Ausência de correlação evidente**

Não existe uma tendência clara entre as variáveis observadas.

### Representação conceptual

```text
CORRELAÇÃO POSITIVA

Y
^
|               *
|           *
|        *
|     *
|  *
+-------------------> X


CORRELAÇÃO NEGATIVA

Y
^
|  *
|     *
|        *
|           *
|               *
+-------------------> X


SEM PADRÃO EVIDENTE

Y
^
|      *      *
|  *       *
|         *
|    *          *
+-------------------> X
```

### Exemplo — Carga de utilizadores vs. latência

Uma equipa pretende investigar se existe relação entre o número de utilizadores simultâneos e o tempo de resposta de uma aplicação.

| Utilizadores simultâneos | Latência média |
|---|---:|
| 10 | 100 ms |
| 20 | 120 ms |
| 30 | 150 ms |
| 40 | 190 ms |
| 50 | 250 ms |

Os dados sugerem uma relação positiva: conforme aumenta a quantidade de utilizadores, a latência tende a aumentar.

Isso pode indicar a necessidade de avaliar a capacidade da infraestrutura.

Contudo, **correlação não implica causalidade**.

Outras variáveis podem influenciar os resultados, como:

- Tipo de operação.
- Volume de dados.
- Configuração do servidor.
- Utilização de cache.
- Consultas ao banco de dados.

### Como construir um Diagrama de Dispersão

**Passo 1 — Selecionar as variáveis**

Definir quais fatores serão comparados.

**Passo 2 — Recolher dados emparelhados**

Cada observação deve possuir os valores das duas variáveis.

**Passo 3 — Construir os eixos**

Representar uma variável no eixo X e outra no eixo Y.

**Passo 4 — Marcar os pontos**

Adicionar cada par de valores.

**Passo 5 — Analisar o padrão**

Verificar se existe relação positiva, negativa ou ausência de tendência evidente.

**Passo 6 — Investigar**

Realizar análises complementares antes de concluir que existe uma relação causal.

### Vantagens e limitações

**Vantagens:**

- Permite investigar relações entre variáveis.
- Facilita a identificação de tendências.
- Pode revelar valores extremos.
- Apoia hipóteses de investigação.

**Limitações:**

- Não demonstra causalidade.
- Pode ser influenciado por variáveis externas.
- Relações não lineares podem ser difíceis de interpretar.
- Amostras pequenas podem produzir conclusões frágeis.

**Quando usar:** para investigar relações entre carga e desempenho, experiência da equipa e defeitos, esforço e produtividade, ou outras variáveis mensuráveis.

---

### 4.4 Fluxograma (Flowchart)

O **Fluxograma** é uma representação visual das etapas e decisões de um processo.

É utilizado para compreender como o trabalho acontece, identificar falhas e melhorar processos.

Na gestão da qualidade, ajuda a descobrir:

- Atividades desnecessárias.
- Gargalos.
- Retrabalho.
- Etapas sem verificação.
- Falhas de comunicação.
- Ausência de critérios de decisão.

### Símbolos mais utilizados

| Símbolo | Representação | Significado |
|---|---|---|
| Oval | Início/Fim | Delimita o processo |
| Retângulo | Atividade | Representa uma ação |
| Losango | Decisão | Representa uma condição |
| Seta | Fluxo | Indica a sequência |
| Paralelogramo | Entrada/Saída | Representa dados de entrada ou saída |

### Exemplo — Processo de aprovação de código

```text
           INÍCIO
              |
              v
       DESENVOLVER CÓDIGO
              |
              v
       EXECUTAR TESTES
              |
              v
      +------------------+
      | TESTES PASSARAM? |
      +------------------+
          |          |
         NÃO        SIM
          |          |
          v          v
      CORRIGIR    ABRIR PULL
       CÓDIGO       REQUEST
          |          |
          |          v
          |      CODE REVIEW
          |          |
          |          v
          |    +----------------+
          |    | FOI APROVADO?  |
          |    +----------------+
          |       |         |
          |      NÃO       SIM
          |       |         |
          |       v         v
          |    AJUSTAR     MERGE
          |     CÓDIGO       |
          |       |          v
          |       |         FIM
          |       |
          +-------+
           Retornar
           aos testes
```

### Como utilizar o Fluxograma na qualidade

Considere uma equipa que apresenta elevada frequência de bugs após o deploy.

Ao desenhar o processo atual, identifica que:

1. O programador conclui a funcionalidade.
2. O código é enviado diretamente para produção.
3. Não existe revisão obrigatória.
4. Os testes são executados manualmente apenas em algumas entregas.

O fluxograma torna evidente a ausência de etapas importantes.

Uma possível melhoria seria:

```text
DESENVOLVIMENTO
       |
       v
ANÁLISE ESTÁTICA
       |
       v
TESTES AUTOMATIZADOS
       |
       v
CODE REVIEW
       |
       v
AMBIENTE DE STAGING
       |
       v
VALIDAÇÃO
       |
       v
DEPLOY EM PRODUÇÃO
       |
       v
MONITORIZAÇÃO
```

A representação facilita o entendimento do processo e a definição de pontos de controlo.

### Como construir um Fluxograma

1. Definir o processo a representar.
2. Identificar o início e o fim.
3. Listar as atividades.
4. Identificar decisões e condições.
5. Organizar as etapas sequencialmente.
6. Representar o fluxo com símbolos.
7. Validar o desenho com os participantes.
8. Identificar oportunidades de melhoria.

### Vantagens e limitações

**Vantagens:**

- Facilita a comunicação.
- Torna processos complexos compreensíveis.
- Ajuda a identificar gargalos.
- Permite documentar padrões operacionais.
- Apoia a melhoria contínua.

**Limitações:**

- Processos muito complexos podem gerar diagramas extensos.
- Pode desatualizar-se quando o fluxo muda.
- Não quantifica automaticamente o desempenho.
- Depende da representação fiel do processo real.

**Quando usar:** para documentar fluxos de desenvolvimento, testes, aprovação, atendimento de incidentes e outros processos operacionais.

---

## 5. Integração das Sete Ferramentas da Qualidade

### Como as ferramentas se complementam

As ferramentas não devem ser utilizadas necessariamente de forma isolada.

Cada uma responde a uma pergunta diferente.

| Ferramenta | Principal pergunta |
|---|---|
| **Folha de Verificação** | Quais problemas estão a ocorrer e com que frequência? |
| **Pareto** | Quais problemas merecem prioridade? |
| **Ishikawa** | Quais podem ser as causas do problema? |
| **Histograma** | Como os valores estão distribuídos? |
| **Gráfico de Controlo** | O processo apresenta estabilidade estatística? |
| **Dispersão** | Existe relação entre duas variáveis? |
| **Fluxograma** | Como funciona o processo e onde pode ser melhorado? |

### Exemplo integrado — melhoria da qualidade numa aplicação

Uma empresa identifica um aumento de incidentes após novas versões de uma aplicação.

**Etapa 1 — Folha de Verificação**

Registar os incidentes por tipo e período.

**Etapa 2 — Diagrama de Pareto**

Identificar quais categorias representam a maior parte das ocorrências.

**Etapa 3 — Diagrama de Ishikawa**

Investigar possíveis causas dos principais incidentes.

**Etapa 4 — Fluxograma**

Analisar como o processo de desenvolvimento, revisão e deploy está organizado.

**Etapa 5 — Diagrama de Dispersão**

Investigar possíveis relações entre variáveis, como volume de alterações por deploy e quantidade de incidentes.

**Etapa 6 — Histograma**

Analisar a distribuição de métricas de desempenho ou tempos de recuperação.

**Etapa 7 — Gráfico de Controlo**

Acompanhar a estabilidade do processo após as melhorias.

### Fluxo integrado de melhoria

```text
          PROBLEMA DE QUALIDADE
                   |
                   v
           RECOLHER INFORMAÇÕES
                   |
                   v
          FOLHA DE VERIFICAÇÃO
                   |
                   v
           IDENTIFICAR PRIORIDADES
                   |
                   v
            DIAGRAMA DE PARETO
                   |
                   v
          INVESTIGAR POSSÍVEIS CAUSAS
                   |
                   v
          DIAGRAMA DE ISHIKAWA
                   |
                   v
             ANALISAR PROCESSO
                   |
                   v
                FLUXOGRAMA
                   |
                   v
             ANALISAR OS DADOS
                   |
             +-----+-----+
             |           |
             v           v
        HISTOGRAMA    DISPERSÃO
             |           |
             +-----+-----+
                   |
                   v
             IMPLEMENTAR MELHORIAS
                   |
                   v
             GRÁFICO DE CONTROLO
                   |
                   v
            AVALIAR ESTABILIDADE
                   |
                   v
             MELHORIA CONTÍNUA
```

A seleção e a sequência das ferramentas dependem do problema e dos dados disponíveis.

### Qualidade em projetos ágeis e DevOps

A gestão da qualidade também está presente em abordagens ágeis e em práticas de DevOps.

Em Scrum, por exemplo, a qualidade está relacionada com:

- Definition of Done (DoD).
- Critérios de aceitação.
- Revisão de incrementos.
- Testes contínuos.
- Feedback dos stakeholders.
- Retrospectivas.

Em DevOps, a qualidade pode ser reforçada através de:

- Integração contínua (CI).
- Testes automatizados.
- Análise estática.
- Revisão de código.
- Entrega contínua (CD).
- Monitorização.
- Observabilidade.
- Gestão de incidentes.

**Exemplo de pipeline com verificações de qualidade:**

```text
       ALTERAÇÃO NO CÓDIGO
                |
                v
             COMMIT
                |
                v
          PIPELINE CI/CD
                |
        +-------+-------+
        |               |
        v               v
      LINT          TESTES UNITÁRIOS
        |               |
        +-------+-------+
                |
                v
        TESTES DE INTEGRAÇÃO
                |
                v
          BUILD DA APLICAÇÃO
                |
                v
         AMBIENTE DE STAGING
                |
                v
          VALIDAÇÃO / QA
                |
                v
         DEPLOY EM PRODUÇÃO
                |
                v
           MONITORIZAÇÃO
```

O objetivo é incorporar a qualidade ao processo de desenvolvimento, em vez de tratá-la apenas como uma verificação realizada no final.

### Gestão da Qualidade e Testes de Software

Os testes de software constituem uma das principais práticas de controlo da qualidade em projetos de desenvolvimento.

Alguns tipos de testes são:

**Testes Unitários (Unit Tests)**

Verificam unidades isoladas do código, como funções e métodos.

**Testes de Integração (Integration Tests)**

Verificam a interação entre componentes, serviços ou módulos.

**Testes Funcionais (Functional Tests)**

Avaliam se as funcionalidades cumprem os requisitos estabelecidos.

**Testes End-to-End (E2E)**

Verificam fluxos completos de utilização do sistema.

**Testes de Desempenho (Performance Tests)**

Avaliam tempos de resposta, capacidade e comportamento sob carga.

**Testes de Segurança (Security Tests)**

Identificam vulnerabilidades e verificam requisitos de proteção.

**Testes de Aceitação (Acceptance Tests)**

Confirmam se o sistema satisfaz os critérios necessários para aceitação pelo cliente ou pelas partes interessadas autorizadas.

### Verificação vs. Validação

Esta distinção também é fundamental.

**Verificação (Verification)**

Avalia se o produto foi construído de acordo com especificações e requisitos.

Pergunta:

**"Estamos a construir o produto corretamente?"**

**Validação (Validation)**

Avalia se o produto satisfaz as necessidades reais e o uso pretendido.

Pergunta:

**"Estamos a construir o produto certo?"**

| Conceito | Foco | Exemplo |
|---|---|---|
| Verificação | Conformidade com especificações | Testar se a API devolve o formato definido |
| Validação | Adequação às necessidades | Confirmar se o fluxo de reservas atende ao ginásio |

A verificação e a validação são complementares.

Um sistema pode cumprir rigorosamente os requisitos documentados e, ainda assim, não resolver adequadamente o problema do utilizador caso os requisitos tenham sido mal definidos.

### Boas práticas para a Gestão da Qualidade

**1. Definir qualidade desde o planeamento**

Os critérios de aceitação não devem ser estabelecidos apenas no final do projeto.

**2. Escrever requisitos mensuráveis**

Sempre que possível, utilizar critérios objetivos de conformidade.

**3. Envolver os stakeholders**

A qualidade precisa refletir as necessidades reais do cliente e dos utilizadores.

**4. Padronizar processos importantes**

Estabelecer procedimentos comuns para atividades críticas.

**5. Priorizar a prevenção**

Reduzir a possibilidade de defeitos antes que produzam retrabalho.

**6. Utilizar dados para tomar decisões**

Aplicar métricas e ferramentas de qualidade adequadas.

**7. Monitorizar resultados continuamente**

Não limitar as verificações ao encerramento do projeto.

**8. Investigar causas, não apenas sintomas**

Utilizar ferramentas como Ishikawa e análise de causa raiz.

**9. Promover melhoria contínua**

Rever e aperfeiçoar os processos com base nas evidências.

**10. Integrar qualidade com escopo, prazo, custos e riscos**

A qualidade deve ser considerada nas decisões de planeamento e execução.

### Erros comuns na Gestão da Qualidade

**Confundir qualidade com quantidade de funcionalidades**

Adicionar funcionalidades não garante maior adequação ao uso.

**Ignorar os requisitos não funcionais**

Um sistema pode funcionar corretamente e ainda apresentar problemas graves de desempenho, segurança ou usabilidade.

**Executar testes apenas no final**

A identificação tardia de defeitos pode aumentar o retrabalho.

**Não definir critérios de aceitação**

Sem critérios claros, a avaliação da conformidade torna-se subjetiva.

**Utilizar métricas sem contexto**

Indicadores isolados podem produzir conclusões inadequadas.

**Confundir correlação com causalidade**

Relações observadas nos dados precisam de investigação antes de justificar decisões.

**Corrigir sintomas sem investigar causas**

O problema pode reaparecer se a causa raiz permanecer.

**Não atualizar padrões**

Processos podem tornar-se inadequados quando o contexto tecnológico ou organizacional muda.

### Visão integrada da Gestão da Qualidade

```text
                PROJETO
                   |
                   v
               REQUISITOS
                   |
                   v
          PLANEAR A QUALIDADE
                   |
          +--------+--------+
          |                 |
          v                 v
       PADRÕES           MÉTRICAS
          |                 |
          +--------+--------+
                   |
                   v
           GERIR A QUALIDADE
                   |
                   v
             EXECUTAR PROCESSOS
                   |
                   v
           CONTROLAR A QUALIDADE
                   |
                   v
             RECOLHER DADOS
                   |
                   v
         FERRAMENTAS DA QUALIDADE
                   |
          +--------+--------+
          |                 |
          v                 v
        ANÁLISE           CONTROLO
          |                 |
          +--------+--------+
                   |
                   v
          IDENTIFICAR DESVIOS
                   |
                   v
           AÇÕES CORRETIVAS
                   |
                   v
           MELHORIA CONTÍNUA
                   |
                   v
          ENTREGAS CONFORMES
```

A qualidade deve acompanhar todo o ciclo de vida do projeto, desde a identificação das necessidades até à entrega e avaliação dos resultados.

---

## Resumo em uma frase

> A Gestão da Qualidade em Projetos procura garantir que os processos e entregáveis satisfaçam os requisitos e sejam adequados ao uso, através do planeamento e da padronização, da distinção entre Garantia da Qualidade (QA) e Controlo da Qualidade (QC), da aplicação de normas e métricas, e da utilização de ferramentas como Ishikawa, Pareto, Folha de Verificação, Histograma, Gráfico de Controlo, Diagrama de Dispersão e Fluxograma, promovendo a identificação de problemas, a análise de causas, a prevenção de defeitos e a melhoria contínua dos resultados.

---

## Conceitos relacionados para estudar a seguir

- **Gestão da Qualidade Total (TQM — Total Quality Management)** — compreender a qualidade como uma responsabilidade de toda a organização, baseada na orientação para o cliente e na melhoria contínua.

- **Lean Six Sigma** — estudar a combinação dos princípios Lean com técnicas estatísticas Six Sigma para reduzir desperdícios, defeitos e variabilidade dos processos.

- **DMAIC (Define, Measure, Analyze, Improve, Control)** — compreender a metodologia estruturada de melhoria de processos utilizada em iniciativas Six Sigma.

- **ISO 9001 em profundidade** — explorar os requisitos de um Sistema de Gestão da Qualidade (SGQ), incluindo abordagem por processos, auditorias e melhoria contínua.

- **ISO/IEC 25010 — Qualidade de Software** — aprofundar as características e subcaracterísticas utilizadas para avaliar a qualidade de produtos de software e sistemas.

- **Testes de Software e Estratégias de QA** — estudar testes unitários, de integração, funcionais, E2E, regressão, desempenho e segurança.

- **Test-Driven Development (TDD)** — compreender a prática de escrever testes antes da implementação, seguindo o ciclo Red, Green, Refactor.

- **Automação da Qualidade em CI/CD** — implementar pipelines com análise estática, testes automatizados, verificações de segurança e critérios de aprovação antes do deploy.

- **Métricas e Indicadores de Qualidade de Software** — estudar densidade de defeitos, cobertura de testes, taxa de falhas, tempo médio de recuperação (MTTR) e outros indicadores de qualidade e fiabilidade.

- **Gestão de Não Conformidades e Ações Corretivas** — compreender como identificar, registar, investigar e corrigir desvios, evitando a recorrência dos problemas.
