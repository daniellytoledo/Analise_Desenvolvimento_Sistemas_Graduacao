
# Partes Interessadas

> Este ficheiro dá continuidade à Gestão da Qualidade apresentada em `09_concordancia_conformidade.md`, aprofundando os aspetos humanos e organizacionais da gestão de projetos. O objetivo é compreender os fundamentos da comunicação, a importância da motivação e da autonomia das equipas, as estratégias para identificar e envolver as partes interessadas (*stakeholders*) e as ferramentas utilizadas para garantir um fluxo de informação claro, consistente e eficaz.

---

## 1. Comunicação — fundamentos do gerenciamento de comunicação

### A importância da comunicação na gestão de projetos

A **comunicação (Communication)** é o processo de transmitir, receber, interpretar e compreender informações entre pessoas, equipas e organizações.

Na gestão de projetos, a comunicação é uma competência fundamental porque os resultados dependem da coordenação entre profissionais com diferentes responsabilidades, conhecimentos e expectativas.

Um projeto pode possuir:

- Escopo bem definido.
- Cronograma detalhado.
- Orçamento adequado.
- Recursos tecnológicos disponíveis.
- Profissionais tecnicamente qualificados.

Ainda assim, poderá enfrentar dificuldades se as informações não forem transmitidas de maneira correta e no momento adequado.

**Exemplo — Desenvolvimento de Software:**

Uma equipa recebe a tarefa de implementar um módulo de autenticação.

O cliente pretende que os utilizadores possam entrar utilizando e-mail e palavra-passe, além de autenticação através de uma conta Google.

Contudo, o requisito relacionado com a autenticação externa não é comunicado aos programadores.

```text
CLIENTE
   |
   v
Define os requisitos
   |
   v
GESTOR DO PROJETO
   |
   v
Comunicação incompleta
   |
   v
EQUIPA DE DESENVOLVIMENTO
   |
   v
Implementa apenas e-mail e palavra-passe
   |
   v
ENTREGA INCOMPLETA
   |
   +--> Retrabalho
   +--> Atraso
   +--> Custos adicionais
   +--> Insatisfação do cliente
```

O problema não surgiu necessariamente de uma falha técnica, mas de uma **falha de comunicação**.

### O que é a Gestão das Comunicações

A **Gestão das Comunicações do Projeto (Project Communications Management)** envolve os processos necessários para garantir que as informações sejam planeadas, produzidas, distribuídas, armazenadas, recuperadas, monitorizadas e disponibilizadas adequadamente.

O objetivo é assegurar que:

- As pessoas certas recebam as informações necessárias.
- As mensagens sejam compreensíveis.
- Os canais de comunicação sejam adequados.
- As informações sejam disponibilizadas no momento correto.
- As decisões importantes sejam documentadas.
- Os stakeholders conheçam o estado real do projeto.

A comunicação eficaz não consiste em transmitir a maior quantidade possível de informações.

Consiste em **transmitir a informação necessária, ao público adequado, no momento oportuno e através do canal correto**.

### Os processos de comunicação no PMBOK®

Na abordagem por processos do PMBOK® Guide, especialmente na 6ª edição, a Gestão das Comunicações é organizada em três processos fundamentais.

**1. Planear a Gestão das Comunicações (Plan Communications Management)**

Determinar quais informações devem ser comunicadas, para quem, quando, como e por quem.

O principal resultado é o **Plano de Gestão das Comunicações**.

**2. Gerir as Comunicações (Manage Communications)**

Executar as atividades de comunicação previstas.

Inclui produzir, distribuir, armazenar e recuperar informações sobre o projeto.

**3. Monitorizar as Comunicações (Monitor Communications)**

Avaliar se as necessidades de comunicação dos stakeholders estão a ser atendidas e realizar ajustes quando necessário.

```text
       IDENTIFICAR STAKEHOLDERS
                  |
                  v
       ANALISAR NECESSIDADES
          DE INFORMAÇÃO
                  |
                  v
        PLANEAR COMUNICAÇÕES
                  |
                  v
         GERIR COMUNICAÇÕES
                  |
                  v
       MONITORIZAR EFICÁCIA
                  |
          +-------+-------+
          |               |
          v               v
      EFICAZ?          INEFICAZ?
          |               |
          v               v
       Manter           Ajustar
       processo         estratégia
```

### Os elementos do processo de comunicação

Um modelo básico de comunicação envolve:

**Emissor (Sender)**

Pessoa ou entidade responsável por transmitir uma mensagem.

**Mensagem (Message)**

Informação que será comunicada.

**Codificação (Encoding)**

Transformação da informação numa forma comunicável, como palavras, símbolos ou gráficos.

**Canal (Channel)**

Meio utilizado para transmitir a mensagem.

**Recetor (Receiver)**

Pessoa ou grupo que recebe a informação.

**Descodificação (Decoding)**

Processo de interpretação da mensagem recebida.

**Feedback**

Resposta do recetor, que permite verificar se a mensagem foi compreendida.

**Ruído (Noise)**

Qualquer interferência que dificulte a transmissão ou compreensão da informação.

### Modelo de comunicação

```text
                EMISSOR
                   |
                   v
              CODIFICAÇÃO
                   |
                   v
                MENSAGEM
                   |
                   v
                 CANAL
                   |
                   v
              DESCODIFICAÇÃO
                   |
                   v
                RECETOR
                   |
                   v
                FEEDBACK
                   |
                   +--------------+
                                  |
                                  v
                                EMISSOR

        RUÍDO PODE INTERFERIR EM
        QUALQUER ETAPA DO PROCESSO
```

### Barreiras à comunicação

As **barreiras de comunicação** são fatores que prejudicam a transmissão ou interpretação das mensagens.

**Barreiras Linguísticas**

Diferenças de idioma, terminologia ou interpretação de palavras.

**Barreiras Técnicas**

Utilização de linguagem especializada que nem todos os participantes compreendem.

**Barreiras Culturais**

Diferenças de comportamento, valores, expectativas e estilos de comunicação.

**Barreiras Organizacionais**

Hierarquias excessivas, processos burocráticos ou falta de clareza sobre responsabilidades.

**Barreiras Tecnológicas**

Problemas de conexão, ferramentas inadequadas ou informações distribuídas em múltiplas plataformas.

**Barreiras Psicológicas**

Conflitos, falta de confiança, receio de comunicar problemas ou resistência a determinadas decisões.

### Exemplo de barreira técnica

Um programador comunica ao cliente:

```text
"A API está a devolver HTTP 500 devido
a uma exceção não tratada no middleware
que utiliza o ORM."
```

Embora tecnicamente correta, a mensagem poderá ser incompreensível para um stakeholder sem conhecimentos de programação.

Uma comunicação adaptada seria:

```text
"Identificámos um erro no servidor
que está a impedir a utilização
de determinada funcionalidade.

A equipa está a analisar a causa
e irá comunicar quando existir
uma previsão confiável de resolução."
```

O conteúdo técnico é adaptado ao público sem ocultar o problema.

### Tipos de comunicação em projetos

A comunicação pode ser classificada segundo diferentes critérios.

**Comunicação Formal**

Utilizada para informações oficiais e decisões importantes.

Exemplos:

- Relatórios de progresso.
- Atas de reuniões.
- Documentos de aprovação.
- Registos de decisões.
- Comunicações contratuais.

**Comunicação Informal**

Utilizada em interações quotidianas.

Exemplos:

- Conversas rápidas entre membros da equipa.
- Mensagens sobre dúvidas técnicas.
- Discussões espontâneas.
- Feedback informal.

**Comunicação Vertical**

Ocorre entre diferentes níveis hierárquicos.

```text
DIREÇÃO
   |
   v
GESTOR DO PROJETO
   |
   v
EQUIPA
```

Pode ser descendente ou ascendente.

**Comunicação Horizontal**

Ocorre entre profissionais ou departamentos de níveis hierárquicos semelhantes.

```text
DESENVOLVIMENTO <---> QA <---> DEVOPS
```

**Comunicação Diagonal**

Ocorre entre pessoas de diferentes departamentos e níveis hierárquicos.

Exemplo: um programador comunica diretamente com um responsável financeiro para esclarecer um requisito de faturação.

### Métodos de comunicação

O PMBOK® tradicional apresenta três métodos principais.

**Comunicação Interativa (Interactive Communication)**

Permite troca de informações em tempo real entre duas ou mais pessoas.

Exemplos:

- Reuniões presenciais.
- Videoconferências.
- Chamadas telefónicas.
- Workshops.

**Comunicação Push**

A informação é enviada diretamente aos destinatários.

Exemplos:

- E-mails.
- Notificações.
- Relatórios enviados.
- Comunicados.

O envio não garante que a mensagem tenha sido lida ou compreendida.

**Comunicação Pull**

A informação é disponibilizada num local para consulta quando necessário.

Exemplos:

- Wikis.
- Repositórios de documentação.
- Intranet.
- Dashboards.
- Bases de conhecimento.

### Comparativo dos métodos

| Método | Característica | Melhor utilização |
|---|---|---|
| Interativo | Comunicação bidirecional | Decisões, discussões e conflitos |
| Push | Informação enviada aos destinatários | Avisos e relatórios |
| Pull | Informação disponível para consulta | Documentação e conhecimento |

### Número de canais de comunicação

O número potencial de canais de comunicação aumenta conforme o número de participantes.

A fórmula clássica é:

```text
          n × (n - 1)
Canais = -----------
               2
```

Onde:

- `n` representa o número de participantes.
- O resultado representa o número máximo de relações bilaterais distintas.

**Exemplo — Equipa com 5 pessoas:**

```text
Canais = 5 × (5 - 1) / 2

Canais = 5 × 4 / 2

Canais = 10
```

**Exemplo — Equipa com 10 pessoas:**

```text
Canais = 10 × 9 / 2

Canais = 45
```

| Participantes | Canais potenciais |
|---|---:|
| 3 | 3 |
| 5 | 10 |
| 8 | 28 |
| 10 | 45 |
| 15 | 105 |
| 20 | 190 |

O crescimento dos canais ajuda a explicar por que equipas maiores exigem maior estruturação da comunicação.

A fórmula representa relações possíveis, não significa que todas as pessoas necessitem de comunicar diretamente entre si.

### O Plano de Gestão das Comunicações

O **Communications Management Plan** estabelece como a comunicação será organizada durante o projeto.

Pode incluir:

- Informação a transmitir.
- Objetivo da comunicação.
- Público destinatário.
- Responsável.
- Canal.
- Frequência.
- Formato.
- Nível de confidencialidade.
- Critérios de escalonamento.

**Exemplo — Projeto de Software:**

| Informação | Destinatário | Frequência | Canal | Responsável |
|---|---|---|---|---|
| Progresso do sprint | Equipa | Diário | Daily Scrum | Developers |
| Estado do projeto | Patrocinador | Semanal | Relatório | Project Manager |
| Defeitos críticos | Tech Lead e QA | Imediata | Issue + alerta | QA |
| Alterações de escopo | Cliente e PM | Quando necessário | Reunião formal | PM |
| Documentação técnica | Equipa técnica | Contínua | Wiki/repositório | Developers |
| Entregas concluídas | Stakeholders relevantes | Por incremento | Demonstração | Equipa |

### Boas práticas de comunicação

- Adaptar a linguagem ao público.
- Evitar excesso de mensagens desnecessárias.
- Documentar decisões importantes.
- Garantir acesso à informação.
- Confirmar a compreensão de assuntos críticos.
- Comunicar problemas antecipadamente.
- Definir responsáveis e canais.
- Manter consistência nos relatórios.
- Utilizar feedback para melhorar os processos.

> A comunicação eficaz não elimina todos os conflitos ou erros, mas reduz a ambiguidade e melhora a capacidade da equipa para coordenar o trabalho e tomar decisões.

---

## 2. Recursos Humanos — motivação e autonomia

### O papel dos recursos humanos nos projetos

A **Gestão dos Recursos Humanos**, tratada de forma mais abrangente como **Gestão dos Recursos do Projeto (Project Resource Management)** no PMBOK® 6ª edição, envolve planear, adquirir, desenvolver e gerir os recursos necessários para executar o projeto.

Esses recursos incluem pessoas, equipamentos, materiais e infraestrutura.

Neste módulo, o foco está na dimensão humana.

Mesmo com tecnologias avançadas e processos automatizados, os resultados dependem das decisões, competências, colaboração e motivação das pessoas.

### A importância da motivação

A **motivação (Motivation)** corresponde ao conjunto de fatores internos e externos que influenciam o comportamento, o esforço, a persistência e o envolvimento de uma pessoa.

Em projetos, a motivação pode influenciar:

- Produtividade.
- Qualidade do trabalho.
- Colaboração.
- Criatividade.
- Comprometimento.
- Aprendizagem.
- Retenção de profissionais.

Uma equipa motivada não significa necessariamente uma equipa que trabalha mais horas.

Significa uma equipa com condições e razões para contribuir de forma consistente para os objetivos.

### Motivação intrínseca vs. extrínseca

**Motivação Intrínseca (Intrinsic Motivation)**

Ocorre quando a pessoa realiza uma atividade pelo interesse, satisfação ou significado associado à própria atividade.

Exemplos:

- Interesse em resolver problemas.
- Satisfação ao aprender uma tecnologia.
- Orgulho pela qualidade do trabalho.
- Interesse em desenvolver competências.

**Motivação Extrínseca (Extrinsic Motivation)**

Ocorre quando o comportamento está relacionado com incentivos ou consequências externas.

Exemplos:

- Salário.
- Bónus.
- Promoções.
- Reconhecimento formal.
- Benefícios profissionais.

| Característica | Intrínseca | Extrínseca |
|---|---|---|
| Origem | Interesse pessoal | Incentivos externos |
| Exemplo | Aprender por curiosidade | Estudar para obter promoção |
| Relação com o trabalho | Satisfação com a atividade | Recompensa associada ao resultado |

Ambas podem coexistir e influenciar o comportamento profissional.

### A Hierarquia das Necessidades de Maslow

Abraham Maslow propôs uma teoria da motivação baseada em diferentes categorias de necessidades humanas.

O modelo é frequentemente representado como uma pirâmide.

```text
                 /\
                /  \
               /AUTO\
              /REALIZ.\
             /--------\
            /  ESTIMA  \
           /------------\
          / PERTENÇA E   \
         / RELACIONAMENTO  \
        /------------------\
       /     SEGURANÇA      \
      /----------------------\
     / NECESSIDADES BÁSICAS   \
    /__________________________\
```

**1. Necessidades Fisiológicas**

Condições fundamentais para a sobrevivência e bem-estar.

No contexto profissional: remuneração que permita satisfazer necessidades básicas e condições adequadas de trabalho.

**2. Segurança**

Estabilidade, proteção e previsibilidade.

No trabalho: segurança física, regras claras e condições contratuais adequadas.

**3. Pertencimento**

Relações sociais, colaboração e integração.

No projeto: sentimento de fazer parte da equipa.

**4. Estima**

Reconhecimento, respeito e valorização.

No trabalho: reconhecimento pelas contribuições e oportunidades de assumir responsabilidades.

**5. Autorrealização**

Desenvolvimento do potencial e realização de objetivos pessoais.

No projeto: desafios relevantes, aprendizagem e crescimento profissional.

**Limitação:** a hierarquia não deve ser tratada como uma sequência rígida ou universal. Pessoas diferentes podem valorizar necessidades de formas distintas.

### Teoria dos Dois Fatores de Herzberg

Frederick Herzberg apresentou uma teoria que distingue fatores associados à insatisfação e fatores relacionados com a satisfação no trabalho.

**Fatores Higiênicos**

Relacionados com o contexto do trabalho.

Exemplos:

- Salário.
- Condições de trabalho.
- Políticas organizacionais.
- Segurança.
- Relações profissionais.
- Supervisão.

A ausência ou inadequação desses fatores pode contribuir para a insatisfação.

**Fatores Motivacionais**

Relacionados com o conteúdo do trabalho.

Exemplos:

- Realização.
- Reconhecimento.
- Responsabilidade.
- Desenvolvimento.
- Crescimento profissional.
- Desafios.

### Comparativo de Herzberg

| Fatores Higiênicos | Fatores Motivacionais |
|---|---|
| Remuneração | Reconhecimento |
| Condições de trabalho | Realização |
| Políticas internas | Responsabilidade |
| Segurança | Crescimento |
| Supervisão | Trabalho significativo |

Segundo essa teoria, melhorar apenas as condições externas pode reduzir a insatisfação, sem necessariamente produzir elevado envolvimento.

### Teoria X e Teoria Y de McGregor

Douglas McGregor apresentou duas perspetivas sobre as crenças dos gestores em relação ao comportamento humano.

**Teoria X**

Parte de pressupostos como:

- As pessoas evitam o trabalho.
- Precisam de supervisão constante.
- Preferem receber ordens.
- Necessitam de controlo rígido.

**Teoria Y**

Parte de pressupostos como:

- O trabalho pode ser fonte de satisfação.
- As pessoas podem assumir responsabilidades.
- A autonomia favorece o comprometimento.
- A criatividade pode estar presente em diferentes níveis da organização.

| Teoria X | Teoria Y |
|---|---|
| Controlo centralizado | Delegação e autonomia |
| Supervisão intensa | Confiança com acompanhamento |
| Decisões concentradas | Participação nas decisões |
| Motivação baseada em controlo | Motivação baseada em responsabilidade |

Em equipas modernas de desenvolvimento, práticas inspiradas na Teoria Y podem contribuir para maior autonomia e colaboração.

Contudo, a autonomia deve ser acompanhada por objetivos claros, competências adequadas e mecanismos de responsabilização.

### A Teoria da Autodeterminação

A **Self-Determination Theory**, desenvolvida por Edward Deci e Richard Ryan, destaca três necessidades psicológicas relevantes para a motivação:

**Autonomia (Autonomy)**

Perceção de possuir capacidade de escolha e participação nas decisões.

**Competência (Competence)**

Perceção de possuir e desenvolver capacidade para executar atividades.

**Relacionamento (Relatedness)**

Sentimento de ligação, apoio e pertencimento.

```text
             MOTIVAÇÃO
                 |
       +---------+---------+
       |         |         |
       v         v         v
   AUTONOMIA  COMPETÊNCIA  RELACIONAMENTO
       |         |         |
       +---------+---------+
                 |
                 v
          ENVOLVIMENTO
          E DESENVOLVIMENTO
```

### Autonomia nas equipas de projetos

A **autonomia (Autonomy)** representa a capacidade de tomar decisões dentro de limites de responsabilidade previamente definidos.

Em equipas de software, pode incluir:

- Escolher abordagens técnicas.
- Organizar tarefas.
- Propor melhorias.
- Estimar esforço.
- Identificar soluções.
- Participar nas decisões de arquitetura.

**Exemplo:**

O Product Owner define:

> O utilizador precisa de recuperar a palavra-passe através do e-mail.

A equipa técnica determina a abordagem de implementação, respeitando os requisitos de segurança, arquitetura e qualidade.

```text
PRODUCT OWNER
      |
      v
DEFINE NECESSIDADE
      |
      v
EQUIPA TÉCNICA
      |
      v
ANALISA ALTERNATIVAS
      |
      v
SELECIONA SOLUÇÃO
      |
      v
IMPLEMENTA E TESTA
      |
      v
ENTREGA RESULTADO
```

A autonomia não significa ausência de regras ou responsabilidades.

### Autonomia vs. falta de gestão

| Autonomia | Falta de gestão |
|---|---|
| Objetivos claros | Objetivos indefinidos |
| Responsabilidades atribuídas | Responsabilidades ambíguas |
| Liberdade dentro de limites | Ausência de orientação |
| Feedback contínuo | Falta de acompanhamento |
| Decisões transparentes | Decisões descoordenadas |

Uma equipa autónoma continua a necessitar de comunicação, prioridades e critérios de qualidade.

### Empowerment — capacitação e delegação

O **Empowerment** corresponde a práticas que aumentam a capacidade de participação, responsabilidade e decisão dos membros da equipa.

Pode envolver:

- Delegação de autoridade.
- Acesso à informação.
- Formação.
- Participação nas decisões.
- Reconhecimento.
- Oportunidades de desenvolvimento.

**Exemplo:**

Uma equipa de QA identifica que determinados testes manuais são repetitivos.

Em vez de exigir autorização para cada pequena melhoria, a liderança estabelece limites e permite que a equipa proponha e implemente automatizações aprovadas tecnicamente.

Isso pode aumentar a eficiência, a motivação e a responsabilidade pelos resultados.

### Liderança situacional

A **Liderança Situacional (Situational Leadership)** propõe adaptar o estilo de liderança às características da pessoa e da situação.

Diferentes profissionais podem necessitar de níveis distintos de orientação e apoio.

**Direcionar**

Adequado quando existe necessidade de instruções claras e acompanhamento próximo.

**Orientar ou Treinar**

Combina direcionamento com explicações, feedback e desenvolvimento.

**Apoiar**

Prioriza colaboração e participação nas decisões.

**Delegar**

Atribui maior autonomia a profissionais com competência e capacidade de assumir responsabilidades.

### Exemplo em desenvolvimento de software

| Situação | Abordagem possível |
|---|---|
| Estagiário a aprender uma tecnologia | Direcionar e orientar |
| Programador júnior com conhecimentos básicos | Treinar e acompanhar |
| Programador experiente numa nova responsabilidade | Apoiar |
| Tech Lead experiente numa atividade conhecida | Delegar |

O estilo deve ser ajustado às necessidades reais, não apenas ao cargo ou tempo de experiência.

### Gestão de conflitos

Conflitos podem surgir devido a:

- Prioridades diferentes.
- Recursos limitados.
- Divergências técnicas.
- Problemas de comunicação.
- Ambiguidade nas responsabilidades.
- Pressões relacionadas com prazos.

O modelo de Thomas-Kilmann apresenta cinco estilos de gestão de conflitos:

1. Competir.
2. Colaborar.
3. Comprometer.
4. Evitar.
5. Acomodar.

**Exemplo:**

Dois programadores discordam sobre qual arquitetura utilizar.

Uma abordagem colaborativa consiste em:

- Identificar os requisitos técnicos.
- Apresentar alternativas.
- Avaliar vantagens e limitações.
- Comparar custos e riscos.
- Selecionar a solução mais adequada.

O objetivo é resolver o problema técnico sem transformar a divergência num conflito pessoal.

### Boas práticas na gestão de pessoas

- Definir responsabilidades.
- Criar objetivos realistas.
- Promover segurança psicológica.
- Oferecer feedback construtivo.
- Incentivar aprendizagem.
- Reconhecer contribuições.
- Evitar sobrecarga contínua.
- Apoiar a resolução de conflitos.
- Delegar decisões adequadamente.
- Desenvolver competências técnicas e comportamentais.

---

## 3. Partes Interessadas — influenciar os stakeholders

### O que são stakeholders

As **Partes Interessadas (Stakeholders)** são pessoas, grupos ou organizações que podem afetar, ser afetados ou perceber-se como afetados por decisões, atividades ou resultados de um projeto.

Os stakeholders podem possuir diferentes:

- Interesses.
- Expectativas.
- Níveis de influência.
- Responsabilidades.
- Necessidades de informação.
- Atitudes perante o projeto.

A gestão dessas relações é essencial porque o sucesso não depende apenas da entrega técnica.

Também depende da aceitação e do alinhamento entre os resultados e as necessidades dos envolvidos.

### Exemplos de stakeholders

Num projeto de desenvolvimento de uma plataforma para ginásios, os stakeholders podem incluir:

**Internos**

- Patrocinador.
- Gestor do projeto.
- Product Owner.
- Programadores.
- Designers.
- Equipa de QA.
- DevOps.
- Direção da empresa.

**Externos**

- Proprietários dos ginásios.
- Personal trainers.
- Clientes dos ginásios.
- Fornecedores.
- Prestadores de serviços.
- Autoridades regulatórias.

```text
                 PROJETO
                    |
        +-----------+-----------+
        |                       |
        v                       v
  STAKEHOLDERS              STAKEHOLDERS
     INTERNOS                 EXTERNOS
        |                       |
   +----+----+             +----+----+
   |         |             |         |
   v         v             v         v
 Gestão    Equipa        Clientes  Fornecedores
```

### Gestão das Partes Interessadas no PMBOK®

Na abordagem por processos do PMBOK® 6ª edição, a Gestão dos Stakeholders possui quatro processos.

**1. Identificar as Partes Interessadas**

Identificar as pessoas e organizações envolvidas e analisar os seus interesses, influência e potenciais impactos.

**2. Planear o Envolvimento das Partes Interessadas**

Desenvolver estratégias para envolver os stakeholders de acordo com as suas necessidades e expectativas.

**3. Gerir o Envolvimento das Partes Interessadas**

Comunicar, colaborar, resolver conflitos e promover a participação adequada.

**4. Monitorizar o Envolvimento das Partes Interessadas**

Avaliar as relações, o nível de participação e a eficácia das estratégias utilizadas.

### Identificação dos stakeholders

O primeiro passo é construir um **Stakeholder Register (Registo de Partes Interessadas)**.

Este documento pode incluir:

- Nome ou grupo.
- Papel no projeto.
- Interesse.
- Influência.
- Expectativas.
- Necessidades de comunicação.
- Nível de envolvimento.
- Estratégia de relacionamento.

### Exemplo de Registo de Stakeholders

| Stakeholder | Interesse principal | Influência | Expectativa |
|---|---|---|---|
| Patrocinador | Retorno do investimento | Alta | Entrega dentro das restrições |
| Product Owner | Valor do produto | Alta | Requisitos priorizados |
| Programadores | Viabilidade técnica | Média | Requisitos claros |
| QA | Qualidade das entregas | Média | Critérios testáveis |
| Cliente | Utilização do sistema | Alta | Funcionalidades adequadas |
| Utilizadores finais | Facilidade de utilização | Variável | Boa experiência |
| Fornecedor cloud | Prestação de serviço | Variável | Cumprimento contratual |

### Poder vs. Interesse — Power/Interest Grid

A **Matriz de Poder e Interesse (Power/Interest Grid)** é uma ferramenta utilizada para classificar stakeholders conforme:

- **Poder (Power):** capacidade de influenciar decisões e resultados.
- **Interesse (Interest):** grau de preocupação ou envolvimento com o projeto.

A matriz possui quatro quadrantes.

```text
                    INTERESSE
              BAIXO          ALTO
           +--------------+--------------+
           |              |              |
      ALTO | MANTER       | GERIR DE     |
           | SATISFEITO   | PERTO        |
PODER      |              |              |
           +--------------+--------------+
           |              |              |
     BAIXO | MONITORIZAR  | MANTER       |
           |              | INFORMADO    |
           |              |              |
           +--------------+--------------+
```

### Quadrante 1 — Alto Poder e Alto Interesse

**Estratégia: Gerir de Perto (Manage Closely)**

São stakeholders com capacidade significativa de influenciar o projeto e interesse direto nos resultados.

Exemplos:

- Patrocinador ativo.
- Cliente principal.
- Product Owner com autoridade de decisão.

Ações recomendadas:

- Comunicação frequente.
- Participação em decisões relevantes.
- Apresentação de riscos e desvios.
- Alinhamento contínuo das expectativas.

### Quadrante 2 — Alto Poder e Baixo Interesse

**Estratégia: Manter Satisfeito (Keep Satisfied)**

Possuem poder para influenciar o projeto, mas não necessitam de acompanhar todos os detalhes.

Exemplos:

- Diretores de departamentos.
- Executivos não envolvidos na execução diária.

Ações recomendadas:

- Relatórios executivos.
- Comunicação de decisões estratégicas.
- Escalonamento de situações importantes.
- Evitar excesso de detalhes operacionais.

### Quadrante 3 — Baixo Poder e Alto Interesse

**Estratégia: Manter Informado (Keep Informed)**

São interessados nos resultados, mas possuem menor autoridade formal.

Exemplos:

- Utilizadores finais.
- Parte da equipa operacional.
- Profissionais diretamente afetados pela mudança.

Ações recomendadas:

- Demonstrações.
- Recolha de feedback.
- Divulgação de alterações.
- Comunicação de benefícios e limitações.

### Quadrante 4 — Baixo Poder e Baixo Interesse

**Estratégia: Monitorizar (Monitor)**

Necessitam de acompanhamento proporcional à sua relação com o projeto.

Exemplos:

- Áreas com participação indireta.
- Grupos pouco afetados.

Não significa ignorar esses stakeholders.

A sua influência e interesse podem mudar ao longo do projeto.

### Influenciar stakeholders

**Influenciar stakeholders** significa desenvolver relações e estratégias de comunicação capazes de promover compreensão, colaboração e decisões alinhadas com os objetivos do projeto.

A influência deve ser exercida de forma ética e transparente.

Pode envolver:

- Negociação.
- Argumentação fundamentada.
- Escuta ativa.
- Comunicação clara.
- Construção de confiança.
- Gestão de expectativas.
- Participação nas decisões.
- Demonstração de benefícios.

### Técnicas de influência

**Escuta Ativa (Active Listening)**

Compreender as preocupações e necessidades antes de apresentar soluções.

**Negociação**

Buscar acordos viáveis entre necessidades e restrições diferentes.

**Gestão de Expectativas**

Explicar claramente o que será entregue, quando e dentro de quais limitações.

**Comunicação Baseada em Evidências**

Utilizar dados, protótipos, métricas e resultados para apoiar decisões.

**Construção de Confiança**

Cumprir compromissos, comunicar problemas e manter consistência.

**Envolvimento Antecipado**

Incluir stakeholders relevantes antes que decisões importantes estejam concluídas.

### Exemplo de influência em projetos de software

Um cliente solicita uma funcionalidade que poderá atrasar o lançamento.

O gestor apresenta:

```text
SOLICITAÇÃO DO CLIENTE
          |
          v
NOVA FUNCIONALIDADE
          |
          v
ANÁLISE DE IMPACTO
          |
     +----+----+----+
     |         |    |
     v         v    v
   ESCOPO    PRAZO CUSTO
     |         |    |
     +----+----+----+
          |
          v
APRESENTAR ALTERNATIVAS
          |
     +----+----+
     |         |
     v         v
 Implementar  Adiar para
 agora        versão futura
     |         |
     +----+----+
          |
          v
DECISÃO INFORMADA
```

A influência ocorre através da apresentação de informações relevantes e alternativas, e não pela imposição de uma decisão.

### Matriz de Avaliação do Envolvimento

A **Stakeholder Engagement Assessment Matrix** permite comparar o nível atual e o nível desejado de envolvimento.

Os níveis comuns são:

**Desconhecedor (Unaware)**

Não conhece o projeto ou os seus impactos.

**Resistente (Resistant)**

Conhece o projeto, mas apresenta resistência.

**Neutro (Neutral)**

Conhece o projeto, mas não apoia nem se opõe ativamente.

**Apoiador (Supportive)**

Compreende e apoia os resultados.

**Líder (Leading)**

Participa ativamente e contribui para o sucesso.

### Exemplo de Matriz de Envolvimento

Legenda:

- `C` = Current (Atual).
- `D` = Desired (Desejado).

| Stakeholder | Desconhecedor | Resistente | Neutro | Apoiador | Líder |
|---|---|---|---|---|---|
| Patrocinador | | | | C | D |
| Cliente | | | C | D | |
| Equipa técnica | | | | C/D | |
| Utilizadores | C | | | D | |

A matriz ajuda a identificar onde é necessário desenvolver ações para melhorar o envolvimento.

### Stakeholders resistentes

A resistência pode surgir devido a:

- Receio de mudanças.
- Falta de informação.
- Experiências negativas anteriores.
- Perceção de perda de autonomia.
- Custos adicionais.
- Incerteza sobre benefícios.
- Impactos nos processos existentes.

**Exemplo:**

Uma organização substitui um processo manual por uma aplicação.

Alguns colaboradores apresentam resistência porque estão habituados ao sistema anterior.

Uma estratégia adequada pode incluir:

1. Compreender as preocupações.
2. Explicar o motivo da mudança.
3. Demonstrar os benefícios.
4. Oferecer formação.
5. Recolher feedback.
6. Implementar melhorias quando justificadas.

A resistência não deve ser interpretada automaticamente como falta de colaboração.

Pode revelar problemas reais no projeto ou necessidades que ainda não foram consideradas.

### Relação entre stakeholders e comunicação

A gestão das partes interessadas depende fortemente da Gestão das Comunicações.

Contudo, os dois processos possuem finalidades distintas.

| Gestão das Comunicações | Gestão dos Stakeholders |
|---|---|
| Organiza o fluxo de informação | Gere relações e envolvimento |
| Define canais e frequência | Analisa interesses e influência |
| Procura comunicação eficaz | Procura participação adequada |
| Produz e distribui informações | Desenvolve estratégias de relacionamento |

**A comunicação é um dos principais instrumentos utilizados para gerir o envolvimento dos stakeholders.**

---

## 4. Como se Comunicar — ferramentas úteis para comunicação

### A importância de escolher ferramentas adequadas

As ferramentas de comunicação permitem organizar a troca de informações, documentar decisões e facilitar a colaboração entre profissionais.

Contudo, a escolha da ferramenta deve considerar:

- Objetivo da comunicação.
- Quantidade de participantes.
- Necessidade de registo.
- Frequência.
- Confidencialidade.
- Complexidade da informação.
- Localização das equipas.
- Integração com outros processos.

Uma ferramenta sofisticada não garante comunicação eficaz.

A qualidade depende também dos processos e das práticas adotadas.

### Ferramentas de comunicação síncrona

A **comunicação síncrona (Synchronous Communication)** ocorre quando os participantes interagem em tempo real.

Exemplos:

- Reuniões presenciais.
- Chamadas de voz.
- Videoconferências.
- Workshops.
- Sessões de programação em conjunto.

**Ferramentas:**

- Microsoft Teams.
- Google Meet.
- Zoom.
- Slack Huddles.
- Discord.

**Quando utilizar:**

- Resolver questões complexas.
- Negociar decisões.
- Discutir impedimentos.
- Realizar alinhamentos.
- Resolver conflitos.

### Ferramentas de comunicação assíncrona

A **comunicação assíncrona (Asynchronous Communication)** não exige a participação simultânea dos envolvidos.

Exemplos:

- E-mails.
- Mensagens em canais.
- Comentários em issues.
- Documentos partilhados.
- Relatórios.

**Vantagens:**

- Permite respostas em momentos diferentes.
- Facilita o trabalho distribuído.
- Reduz interrupções.
- Favorece o registo de decisões.
- Permite consultar informações posteriormente.

**Limitações:**

- Pode atrasar decisões urgentes.
- Algumas mensagens podem ser interpretadas incorretamente.
- A ausência de respostas pode criar bloqueios.

### Comunicação síncrona vs. assíncrona

| Critério | Síncrona | Assíncrona |
|---|---|---|
| Interação | Tempo real | Em momentos diferentes |
| Feedback | Geralmente imediato | Pode ser posterior |
| Registo | Exige documentação adicional | Frequentemente disponível |
| Interrupções | Pode interromper atividades | Maior flexibilidade |
| Melhor aplicação | Discussões e decisões complexas | Atualizações e documentação |

### Ferramentas de Gestão de Tarefas

As ferramentas de gestão de tarefas permitem organizar trabalho e comunicar o seu estado.

Exemplos:

- Jira.
- Trello.
- Asana.
- ClickUp.
- GitHub Issues.
- GitLab Issues.
- Forgejo Issues.

### Exemplo de quadro Kanban

```text
+--------------+--------------+--------------+--------------+
|   BACKLOG    |   A FAZER    |  EM CURSO    |   CONCLUÍDO  |
+--------------+--------------+--------------+--------------+
| Relatórios   | Login        | API Clientes | Base de dados|
| Notificações | Dashboard    | Testes E2E   | Configuração |
+--------------+--------------+--------------+--------------+
```

O quadro permite visualizar:

- Atividades pendentes.
- Trabalho em execução.
- Responsáveis.
- Prioridades.
- Bloqueios.
- Progresso.

### GitHub, GitLab e Forgejo na comunicação técnica

Plataformas de alojamento e gestão de repositórios Git também desempenham um papel importante na comunicação entre programadores.

Podem disponibilizar:

**Issues**

Registo de bugs, tarefas, pedidos de melhoria e discussões técnicas.

**Pull Requests / Merge Requests**

Propostas de alteração ao código que permitem revisão e discussão antes da integração.

**Code Review**

Processo de análise de código realizado por outros membros da equipa.

**Wikis**

Documentação técnica e operacional.

**Actions / CI/CD**

Automatização de verificações e disponibilização de informações sobre builds, testes e deploys.

### Exemplo de comunicação através de Pull Request

```text
PROGRAMADOR
     |
     v
DESENVOLVE FUNCIONALIDADE
     |
     v
ABRE PULL REQUEST
     |
     v
DESCREVE AS ALTERAÇÕES
     |
     v
REVISOR ANALISA O CÓDIGO
     |
     +----> Solicita alterações
     |             |
     |             v
     |        Programador corrige
     |             |
     |             v
     |        Nova revisão
     |
     +----> Aprova
                  |
                  v
                 MERGE
```

Este processo integra comunicação, documentação, colaboração e controlo da qualidade.

### Ferramentas de Documentação

A documentação permite preservar conhecimento e reduzir a dependência de comunicação verbal.

Ferramentas utilizadas incluem:

- Confluence.
- Notion.
- Google Docs.
- Microsoft SharePoint.
- Nextcloud.
- GitHub Wiki.
- Markdown em repositórios Git.

### Markdown como ferramenta de comunicação

O **Markdown** é uma linguagem de marcação leve utilizada para criar documentação estruturada.

Pode ser utilizado para:

- README.
- Documentação técnica.
- Guias de instalação.
- Registo de decisões.
- Relatórios.
- Especificações.
- Tutoriais.

**Exemplo:**

```markdown
# Documentação da API

## Endpoint

`POST /api/users`

## Objetivo

Criar um novo utilizador.

## Requisitos

- Nome obrigatório.
- E-mail válido.
- Palavra-passe segura.

## Respostas

- 201: Utilizador criado.
- 400: Dados inválidos.
- 409: E-mail já registado.
```

Documentação clara facilita a comunicação entre programadores, QA, DevOps e outros stakeholders técnicos.

### Reuniões de acompanhamento

As reuniões são instrumentos importantes de comunicação, desde que possuam objetivos definidos.

**Kickoff Meeting**

Reunião inicial utilizada para alinhar objetivos, responsabilidades, escopo e expectativas.

**Daily Scrum**

Evento do Scrum destinado aos Developers, utilizado para inspecionar o progresso em direção ao Sprint Goal e adaptar o plano de trabalho.

**Sprint Review**

Evento utilizado para inspecionar os resultados do sprint com stakeholders relevantes e discutir adaptações futuras.

**Sprint Retrospective**

Evento destinado a avaliar como melhorar a qualidade e a eficácia do trabalho da equipa Scrum.

**Status Meeting**

Reunião de acompanhamento do estado geral do projeto.

### Reuniões eficazes

Uma reunião deve possuir:

- Objetivo claro.
- Participantes necessários.
- Agenda.
- Duração adequada.
- Informação relevante.
- Decisões documentadas.
- Responsáveis pelas ações.
- Prazos definidos quando aplicável.

**Exemplo de ata:**

```text
ATA DE REUNIÃO

Projeto: Sistema CRM

Data: 15/10/2026

Participantes:
- Project Manager
- Tech Lead
- QA
- Product Owner

Assuntos:
1. Estado do desenvolvimento.
2. Defeitos identificados.
3. Dependências externas.

Decisões:
- Priorizar correção da autenticação.
- Adiar funcionalidade secundária.
- Rever cronograma de testes.

Ações:
- Dev Backend: corrigir autenticação.
- QA: executar testes de regressão.
- PM: atualizar cronograma.

Próxima revisão:
Data acordada pela equipa.
```

### Matriz RACI como ferramenta de comunicação

A **Matriz RACI**, apresentada em `03_escopo_a_estrutura.md`, também contribui para melhorar a comunicação.

Define quatro tipos de participação:

- **R — Responsible:** executa o trabalho.
- **A — Accountable:** responde pelo resultado.
- **C — Consulted:** deve ser consultado.
- **I — Informed:** deve ser informado.

### Exemplo de Matriz RACI

| Atividade | PM | Tech Lead | Developer | QA | Cliente |
|---|---|---|---|---|---|
| Aprovar requisitos | R | C | I | C | A |
| Definir arquitetura | I | A | R | C | |
| Implementar API | I | A | R | C | |
| Executar testes | I | C | C | R/A | |
| Aprovar entrega | R | C | I | C | A |

A matriz reduz dúvidas sobre responsabilidades e sobre quem deve participar nas decisões.

### Dashboards de acompanhamento

Os **dashboards** apresentam indicadores importantes de forma visual e centralizada.

Podem incluir:

- Percentagem de conclusão.
- Atividades em atraso.
- Custos planeados e reais.
- CPI e SPI.
- Riscos críticos.
- Quantidade de bugs.
- Estado das entregas.

**Exemplo:**

```text
DASHBOARD DO PROJETO

-----------------------------------

PROGRESSO GERAL
████████████████░░░░ 80%

-----------------------------------

CRONOGRAMA

SPI: 0,92

-----------------------------------

CUSTOS

CPI: 1,05

-----------------------------------

QUALIDADE

Bugs críticos abertos: 2

-----------------------------------

RISCOS

Riscos críticos: 1

-----------------------------------
```

O dashboard facilita a comunicação com stakeholders que necessitam de uma visão rápida do estado do projeto.

Os indicadores devem ser apresentados com contexto e atualizados regularmente.

### Comunicação de problemas e riscos

Uma comunicação adequada deve distinguir:

**Risco**

Situação incerta que poderá ocorrer.

**Problema**

Situação já materializada.

**Decisão**

Escolha realizada entre alternativas.

**Ação**

Atividade que precisa de ser executada.

Uma abordagem útil consiste em utilizar registos separados ou um modelo conhecido como **RAID Log**.

### RAID Log

O termo RAID é frequentemente utilizado para organizar:

- **R — Risks:** Riscos.
- **A — Assumptions:** Premissas.
- **I — Issues:** Problemas.
- **D — Dependencies:** Dependências.

Algumas organizações utilizam adaptações em que determinadas letras representam ações ou decisões.

### Exemplo de RAID Log

| Tipo | Descrição | Responsável | Estado |
|---|---|---|---|
| Risk | Possível atraso do fornecedor | PM | Monitorização |
| Assumption | API estará disponível até à semana 3 | Tech Lead | Por validar |
| Issue | Erro de autenticação identificado | Developer | Em correção |
| Dependency | Testes dependem da conclusão da API | QA | Bloqueado |

O RAID Log facilita a comunicação de fatores que podem afetar o progresso.

### Critérios para escolher ferramentas

| Necessidade | Ferramenta adequada |
|---|---|
| Discussão urgente | Chamada ou videoconferência |
| Comunicação formal | E-mail e documento aprovado |
| Gestão de tarefas | Jira, Trello, Forgejo Issues |
| Revisão de código | Pull Request |
| Documentação técnica | Markdown ou Wiki |
| Partilha de ficheiros | Nextcloud, SharePoint, Google Drive |
| Acompanhamento executivo | Dashboard ou relatório |
| Decisões importantes | Ata e registo de decisões |

A organização deve evitar a utilização desnecessária de múltiplas ferramentas para a mesma finalidade.

### Excesso de comunicação também pode prejudicar

A comunicação excessiva pode produzir:

- Sobrecarga de informação.
- Interrupções frequentes.
- Dificuldade para identificar prioridades.
- Reuniões improdutivas.
- Perda de tempo.
- Duplicação de mensagens.

O objetivo é encontrar o equilíbrio entre informação suficiente e eficiência operacional.

### Boas práticas para comunicação em equipas de software

**1. Definir uma fonte única de informação**

Evitar que a mesma tarefa possua estados contraditórios em ferramentas diferentes.

**2. Documentar decisões importantes**

Garantir rastreabilidade das decisões técnicas e de negócio.

**3. Priorizar comunicação assíncrona quando adequada**

Reduzir interrupções desnecessárias.

**4. Utilizar comunicação síncrona para problemas complexos**

Discussões difíceis podem ser resolvidas de forma mais eficiente em tempo real.

**5. Comunicar bloqueios rapidamente**

Evitar que impedimentos permaneçam desconhecidos.

**6. Adaptar a linguagem**

Utilizar diferentes níveis de detalhe para stakeholders técnicos e não técnicos.

**7. Criar critérios de escalonamento**

Definir quando determinado problema precisa de ser comunicado à liderança.

**8. Manter ferramentas organizadas**

Evitar tarefas sem responsáveis, documentos desatualizados e informações duplicadas.

**9. Solicitar feedback**

Verificar se os canais utilizados estão a atender às necessidades da equipa.

**10. Rever continuamente os processos**

A comunicação deve evoluir conforme as necessidades e a complexidade do projeto.

---

## 5. Integração entre Comunicação, Recursos Humanos e Stakeholders

### As três dimensões são complementares

A Gestão das Comunicações, a Gestão dos Recursos Humanos e a Gestão dos Stakeholders estão profundamente relacionadas.

A comunicação permite transmitir informações e coordenar decisões.

A gestão de pessoas procura desenvolver competências, motivação e colaboração.

A gestão dos stakeholders procura alinhar interesses, expectativas e participação.

```text
              SUCESSO DO PROJETO
                      ^
                      |
          +-----------+-----------+
          |           |           |
          |           |           |
     COMUNICAÇÃO   PESSOAS    STAKEHOLDERS
          |           |           |
          v           v           v
     Informação   Motivação    Envolvimento
     e decisões   e autonomia  e influência
          |           |           |
          +-----------+-----------+
                      |
                      v
               COLABORAÇÃO
                      |
                      v
             ENTREGAS ALINHADAS
```

### Exemplo integrado — desenvolvimento de uma aplicação

Considere uma empresa que está a desenvolver uma aplicação de gestão para ginásios.

**Comunicação**

A equipa utiliza um sistema de issues para organizar tarefas, reuniões para discutir decisões e documentação para registar regras de negócio.

**Recursos Humanos**

O Tech Lead distribui responsabilidades conforme as competências e promove autonomia na implementação técnica.

**Stakeholders**

O Product Owner recolhe necessidades dos gestores de ginásios, personal trainers e utilizadores finais.

**Resultado esperado**

As funcionalidades são desenvolvidas com maior alinhamento entre requisitos, decisões técnicas e necessidades dos utilizadores.

### Problemas causados pela falta de integração

**Comunicação sem envolvimento**

A equipa envia relatórios, mas os stakeholders não participam nas decisões importantes.

**Motivação sem objetivos claros**

Os profissionais estão empenhados, mas não compreendem as prioridades do projeto.

**Stakeholders sem informação**

O cliente possui interesse elevado, mas não recebe informações sobre mudanças e riscos.

**Autonomia sem coordenação**

Os programadores tomam decisões isoladas que provocam inconsistências na arquitetura.

Por isso, é necessário integrar as três dimensões.

### O papel do Project Manager

O **Gestor de Projeto (Project Manager)** atua como um elemento de coordenação entre pessoas, objetivos, recursos e expectativas.

Entre as suas responsabilidades encontram-se:

- Identificar stakeholders.
- Organizar o planeamento das comunicações.
- Facilitar decisões.
- Acompanhar o desempenho.
- Gerir conflitos.
- Promover colaboração.
- Comunicar riscos e problemas.
- Apoiar o desenvolvimento da equipa.
- Negociar recursos e prioridades.
- Garantir o alinhamento com os objetivos do projeto.

O PM não precisa de executar todas as atividades técnicas.

A sua principal responsabilidade é coordenar as condições necessárias para que o projeto alcance os resultados definidos.

### Visão integrada do módulo

```text
                INÍCIO DO PROJETO
                        |
                        v
              IDENTIFICAR STAKEHOLDERS
                        |
                        v
              ANALISAR EXPECTATIVAS
                        |
                        v
              PLANEAR COMUNICAÇÕES
                        |
                        v
             ORGANIZAR RESPONSABILIDADES
                        |
                        v
             DESENVOLVER A EQUIPA
                        |
              +---------+---------+
              |                   |
              v                   v
          MOTIVAÇÃO            AUTONOMIA
              |                   |
              +---------+---------+
                        |
                        v
                EXECUTAR O PROJETO
                        |
                        v
              COMUNICAR PROGRESSO
                        |
                        v
           GERIR ENVOLVIMENTO E CONFLITOS
                        |
                        v
              RECOLHER FEEDBACK
                        |
                        v
              AJUSTAR ESTRATÉGIAS
                        |
                        v
                 ENTREGAR VALOR
```

O sucesso dos projetos depende tanto da qualidade do planeamento técnico quanto da capacidade de coordenar pessoas e interesses.

---

## Resumo em uma frase

> A Gestão das Partes Interessadas integra os fundamentos da comunicação, a motivação e autonomia dos recursos humanos e o envolvimento estratégico dos stakeholders, utilizando processos estruturados de planeamento e monitorização das comunicações, teorias de motivação como Maslow, Herzberg, McGregor e Autodeterminação, ferramentas de análise como a Matriz de Poder e Interesse e a Matriz de Envolvimento, além de plataformas colaborativas, documentação, reuniões, dashboards e sistemas de gestão de tarefas, para alinhar expectativas, promover colaboração, reduzir conflitos e assegurar que as decisões e entregas do projeto respondam às necessidades dos envolvidos.

---

## Conceitos relacionados para estudar a seguir

- **Gestão de Mudanças Organizacionais (Change Management)** — compreender como preparar pessoas e organizações para mudanças provocadas por projetos, utilizando modelos como ADKAR e os oito passos de Kotter.

- **Liderança Situacional e Liderança Servidora** — aprofundar estilos de liderança e compreender como a atuação do líder pode adaptar-se às necessidades e à maturidade das equipas.

- **Inteligência Emocional na Gestão de Projetos** — estudar autoconsciência, autorregulação, empatia e competências sociais aplicadas à liderança e à resolução de conflitos.

- **Negociação e Gestão de Conflitos** — aprofundar técnicas de negociação, análise de interesses e o modelo Thomas-Kilmann.

- **Matriz de Stakeholders em Profundidade** — explorar modelos de classificação baseados em poder, interesse, influência, impacto e saliência.

- **Comunicação em Equipas Remotas e Distribuídas** — analisar práticas de comunicação assíncrona, documentação, colaboração e coordenação entre profissionais em diferentes localizações e fusos horários.

- **Scrum e Gestão de Equipas Ágeis** — compreender a colaboração entre Product Owner, Scrum Master, Developers e stakeholders ao longo dos eventos do Scrum.

- **Gestão do Conhecimento (Knowledge Management)** — estudar estratégias para documentar, partilhar e preservar conhecimentos técnicos e organizacionais.

- **Cultura DevOps e Colaboração entre Equipas** — analisar como práticas DevOps promovem comunicação entre desenvolvimento, operações, segurança e qualidade.

- **Dashboards e Relatórios Executivos** — desenvolver formas eficazes de comunicar indicadores de escopo, cronograma, custos, qualidade, riscos e desempenho aos stakeholders.
