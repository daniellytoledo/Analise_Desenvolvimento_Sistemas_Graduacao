
# Mudanças

> Este ficheiro dá continuidade ao estudo da Prototipagem apresentado em `14_prototipagem.md`, aprofundando a **Gestão de Mudanças (Change Management)** em projetos. O objetivo é compreender os fatores que provocam alterações, a importância dos testes ágeis para aprender rapidamente, o processo de **GMUD (Gestão de Mudanças)** para realizar alterações de forma controlada e a cultura **DevOps**, que integra desenvolvimento e operações para melhorar a entrega e sustentação de software.

---

## 1. Fatores de Mudanças — não há projeto sem mudanças

### O que é uma mudança num projeto

Uma **mudança (Change)** é qualquer alteração em relação ao que foi inicialmente definido ou aprovado num projeto.

Pode afetar:

- Escopo.
- Cronograma.
- Orçamento.
- Requisitos.
- Recursos.
- Tecnologias.
- Qualidade.
- Riscos.
- Processos.

As mudanças são naturais porque os projetos estão inseridos em ambientes dinâmicos.

**Exemplo — Desenvolvimento de Software:**

Uma equipa está a desenvolver um sistema de reservas para ginásios.

Durante a execução, o cliente solicita uma funcionalidade de pagamento online que não estava incluída no escopo original.

```text id="jaqbkt"
ESCOPO ORIGINAL
      |
      v
Sistema de reservas
      |
      v
NOVA NECESSIDADE
      |
      v
Pagamento online
      |
      v
ANÁLISE DE IMPACTO
      |
  +---+---+---+
  |       |   |
  v       v   v
Prazo   Custo Risco
  |       |   |
  +---+---+---+
      |
      v
DECISÃO SOBRE A MUDANÇA
```

A mudança pode ser positiva para o produto, mas precisa de ser avaliada antes da implementação.

### Principais fatores que provocam mudanças

**1. Alteração nas necessidades do cliente**

Novas funcionalidades, requisitos ou expectativas.

**2. Evolução tecnológica**

Surgimento de tecnologias, ferramentas ou soluções mais adequadas.

**3. Mudanças no mercado**

Novos concorrentes, comportamentos dos consumidores ou oportunidades de negócio.

**4. Alterações legais e regulatórias**

Necessidade de cumprir novas regras ou obrigações.

**5. Problemas técnicos**

Descoberta de limitações que exigem alterações na arquitetura ou implementação.

**6. Restrições financeiras**

Redução do orçamento ou necessidade de reorganizar recursos.

**7. Riscos materializados**

Eventos que exigem medidas corretivas ou adaptações do projeto.

**8. Feedback dos utilizadores**

Informações obtidas durante demonstrações, testes ou utilização do produto.

### Mudanças internas vs. externas

| Mudanças internas | Mudanças externas |
|---|---|
| Alteração da equipa | Nova legislação |
| Revisão de prioridades | Evolução do mercado |
| Problemas técnicos | Mudança de fornecedor |
| Alteração de processos | Novas necessidades dos clientes |

### Controlo Integrado de Mudanças

O **Integrated Change Control**, apresentado em `12_motivacao_compromisso.md`, procura garantir que as alterações sejam avaliadas considerando o projeto como um todo.

Um fluxo simplificado é:

```text id="ch5jcp"
SOLICITAÇÃO DE MUDANÇA
         |
         v
REGISTAR PEDIDO
         |
         v
ANALISAR IMPACTO
         |
         v
AVALIAR ALTERNATIVAS
         |
         v
APROVAR OU REJEITAR
         |
    +----+----+
    |         |
    v         v
APROVADA   REJEITADA
    |
    v
ATUALIZAR PLANOS
    |
    v
IMPLEMENTAR
    |
    v
VALIDAR RESULTADOS
```

### Gestão de Mudanças vs. Gestão da Mudança Organizacional

É importante distinguir dois conceitos.

**Controlo de Mudanças do Projeto**

Foca alterações em requisitos, escopo, cronograma, orçamento ou outras linhas de base.

**Gestão da Mudança Organizacional (Organizational Change Management)**

Foca a preparação e adaptação das pessoas e da organização às transformações provocadas pelo projeto.

**Exemplo:**

Implementar um novo ERP exige controlar as alterações técnicas, mas também preparar colaboradores, oferecer formação e adaptar processos de trabalho.

> O objetivo da gestão de mudanças não é impedir alterações, mas garantir que sejam necessárias, compreendidas, autorizadas e implementadas com controlo adequado.

---

## 2. Teste Ágil — errar rápido e aprender rápido

### O conceito de testes ágeis

Os **Testes Ágeis (Agile Testing)** são práticas de verificação e validação integradas ao desenvolvimento iterativo e incremental.

Ao contrário de uma abordagem em que os testes são concentrados apenas no final, nas equipas ágeis a qualidade é acompanhada continuamente.

O objetivo é identificar problemas antecipadamente e utilizar o feedback para melhorar o produto.

### Errar rápido e aprender rápido

A expressão **Fail Fast, Learn Fast** representa a ideia de identificar hipóteses incorretas e falhas o mais cedo possível, reduzindo o custo da aprendizagem.

Isso não significa desenvolver software sem qualidade ou aceitar erros deliberadamente em produção.

Significa realizar experimentos controlados, testes e validações antes de comprometer recursos elevados.

**Exemplo:**

Uma equipa pretende desenvolver um novo processo de reserva.

Em vez de implementar toda a funcionalidade imediatamente, cria um protótipo no Figma e realiza testes com utilizadores.

Durante os testes, descobre que o fluxo possui etapas desnecessárias.

A equipa ajusta a solução antes de iniciar o desenvolvimento completo.

### Ciclo de aprendizagem rápida

```text id="c4v0me"
        CRIAR HIPÓTESE
              |
              v
        DESENVOLVER TESTE
              |
              v
          EXECUTAR
              |
              v
        RECOLHER DADOS
              |
              v
       ANALISAR RESULTADOS
              |
              v
          APRENDER
              |
              v
           ADAPTAR
              |
              +--------> NOVO CICLO
```

### Shift Left Testing

O **Shift Left Testing** consiste em antecipar atividades de qualidade para etapas mais iniciais do desenvolvimento.

Em vez de descobrir problemas apenas depois da implementação, a equipa procura preveni-los ou identificá-los durante a definição dos requisitos, o design e a programação.

**Exemplos:**

- Revisão antecipada dos requisitos.
- Definição de critérios de aceitação.
- Testes unitários.
- Análise estática.
- Revisão de código.
- Testes de integração automatizados.

### Principais testes no desenvolvimento ágil

| Tipo de teste | Objetivo |
|---|---|
| Unitário | Verificar funções ou componentes isolados |
| Integração | Validar comunicação entre componentes |
| Funcional | Confirmar requisitos funcionais |
| Regressão | Verificar se mudanças afetaram funcionalidades existentes |
| E2E | Testar fluxos completos |
| Aceitação | Confirmar critérios de aceitação |
| Exploratório | Investigar comportamentos e possíveis falhas |

### Test-Driven Development (TDD)

O **TDD (Desenvolvimento Orientado por Testes)** é uma prática que utiliza um ciclo curto:

1. **Red:** escrever um teste que falha.
2. **Green:** implementar o código mínimo para o teste passar.
3. **Refactor:** melhorar a estrutura do código mantendo os testes aprovados.

```text id="ojca0j"
            RED
      Criar teste
       que falha
           |
           v
          GREEN
      Implementar
      solução mínima
           |
           v
        REFACTOR
       Melhorar código
           |
           +----------> REPETIR
```

O TDD pode contribuir para a criação de código testável e para a identificação rápida de erros, mas não substitui todos os outros tipos de testes.

### Benefícios dos testes ágeis

- Identificação antecipada de defeitos.
- Redução de retrabalho.
- Feedback frequente.
- Melhor comunicação entre QA e desenvolvimento.
- Maior confiança nas alterações.
- Apoio à entrega contínua.

### Exemplo com CI/CD

```text id="h2vgsz"
ALTERAÇÃO NO CÓDIGO
        |
        v
       COMMIT
        |
        v
     PIPELINE CI
        |
        v
   ANÁLISE ESTÁTICA
        |
        v
   TESTES UNITÁRIOS
        |
        v
  TESTES DE INTEGRAÇÃO
        |
        v
     BUILD
        |
        v
    RESULTADO
        |
   +----+----+
   |         |
   v         v
APROVADO    FALHA
   |         |
   v         v
PROSSEGUIR  CORRIGIR
             |
             +----> NOVO TESTE
```

A automatização permite obter feedback mais rápido e consistente sobre alterações realizadas no código.

---

## 3. GMUD — mudar de forma incremental e controlada

### O que é GMUD

**GMUD (Gestão de Mudanças)** é uma expressão muito utilizada na gestão operacional de TI no Brasil, especialmente em contextos de ITSM (*IT Service Management*).

Refere-se ao processo de registar, avaliar, autorizar, implementar e rever alterações em sistemas, serviços e infraestruturas tecnológicas.

A GMUD procura reduzir riscos associados a mudanças operacionais.

**Exemplos:**

- Atualização de uma aplicação em produção.
- Alteração de configurações de servidores.
- Migração de bases de dados.
- Atualização de dependências críticas.
- Modificação de regras de firewall.
- Alteração de infraestrutura cloud.

### GMUD vs. Mudança de Escopo

| Mudança de escopo | GMUD operacional |
|---|---|
| Altera o trabalho ou requisitos do projeto | Altera serviços ou ambientes de TI |
| Pode exigir revisão das linhas de base | Exige avaliação do risco operacional |
| Exemplo: novo módulo | Exemplo: deploy em produção |
| Foco no projeto | Foco na operação e no serviço |

Os processos podem estar relacionados.

Uma funcionalidade aprovada no projeto pode exigir uma GMUD para ser colocada em produção.

### Tipos de mudanças em ITIL

Em práticas modernas de **ITIL Change Enablement**, são frequentemente utilizados três tipos.

**1. Mudança Padrão (Standard Change)**

Mudança de baixo risco, repetível, documentada e previamente autorizada.

**Exemplo:** operação de rotina realizada por um procedimento aprovado.

**2. Mudança Normal (Normal Change)**

Mudança que necessita de avaliação e autorização apropriadas.

**Exemplo:** migração significativa de uma base de dados.

**3. Mudança de Emergência (Emergency Change)**

Mudança que precisa de ser realizada rapidamente para resolver ou prevenir uma situação crítica.

**Exemplo:** aplicação urgente de uma correção para uma vulnerabilidade de segurança explorada ativamente.

### Comparativo

| Tipo | Risco e contexto | Autorização |
|---|---|---|
| Padrão | Baixo risco e repetível | Previamente autorizada |
| Normal | Variável conforme o impacto | Avaliada conforme o modelo definido |
| Emergência | Necessidade urgente | Processo acelerado com controlo apropriado |

Mudanças de emergência não significam ausência de controlo ou documentação.

### Etapas de uma GMUD

Um processo simplificado pode incluir:

1. Solicitação.
2. Registo.
3. Avaliação de riscos e impactos.
4. Planeamento.
5. Autorização.
6. Implementação.
7. Validação.
8. Revisão e encerramento.

### Fluxo de GMUD

```text id="ofk810"
       SOLICITAÇÃO DE GMUD
                |
                v
          REGISTO
                |
                v
      ANÁLISE DE IMPACTO
                |
                v
      PLANO DE IMPLEMENTAÇÃO
                |
                v
        PLANO DE ROLLBACK
                |
                v
          AUTORIZAÇÃO
                |
                v
         IMPLEMENTAÇÃO
                |
                v
           VALIDAÇÃO
                |
         +------+------+
         |             |
         v             v
       SUCESSO        FALHA
         |             |
         v             v
     ENCERRAR       CONTINGÊNCIA/
                    ROLLBACK
```

### Plano de Rollback

O **Rollback Plan** é um plano de reversão utilizado quando uma mudança apresenta falhas ou resultados inaceitáveis.

**Exemplo:**

Uma nova versão de uma API é publicada em produção.

Após o deploy, surgem erros críticos.

O plano de rollback pode prever:

- Reversão para a versão anterior.
- Restauro de configurações.
- Verificação de compatibilidade de dados.
- Reexecução de testes.
- Comunicação do incidente.

A reversão nem sempre é simples, especialmente quando existem alterações irreversíveis nos dados.

Por isso, o plano deve ser validado antes de mudanças críticas.

### Mudanças incrementais

Uma estratégia importante é realizar alterações pequenas e controladas.

**Exemplo:**

Em vez de disponibilizar uma nova funcionalidade imediatamente a todos os utilizadores, a equipa pode utilizar:

- Feature Flags.
- Canary Releases.
- Blue-Green Deployment.
- Rolling Updates.

Essas técnicas permitem controlar a exposição às mudanças e reduzir determinados riscos.

### Benefícios da GMUD

- Maior rastreabilidade.
- Redução de falhas operacionais.
- Melhor comunicação.
- Avaliação de impacto.
- Responsabilidades definidas.
- Planeamento de contingência.
- Maior controlo sobre ambientes de produção.

---

## 4. DevOps — unir desenvolvimento e sustentação

### O que é DevOps

**DevOps** é uma abordagem cultural e organizacional que procura melhorar a colaboração entre desenvolvimento de software (**Development**) e operações de TI (**Operations**).

O objetivo é reduzir barreiras entre equipas e tornar a entrega, implantação e operação do software mais confiáveis e eficientes.

DevOps não é apenas uma ferramenta, uma tecnologia ou um cargo.

Envolve:

- Cultura de colaboração.
- Automatização.
- Integração contínua.
- Entrega contínua.
- Monitorização.
- Feedback.
- Responsabilidade partilhada.

### Desenvolvimento vs. Operações

Tradicionalmente, as equipas podiam possuir objetivos distintos.

**Desenvolvimento**

Procura implementar novas funcionalidades e entregar alterações.

**Operações**

Procura manter os sistemas disponíveis, seguros e estáveis.

Sem colaboração, pode surgir um conflito:

```text id="05zf72"
DESENVOLVIMENTO
      |
      v
"Precisamos entregar
novas funcionalidades."


OPERAÇÕES
      |
      v
"Precisamos manter
o sistema estável."
```

O DevOps procura harmonizar esses objetivos.

### Cultura DevOps

```text id="0t2ur0"
           DESENVOLVIMENTO
                  |
                  v
               DEVOPS
                  |
       +----------+----------+
       |          |          |
       v          v          v
  COLABORAÇÃO  AUTOMAÇÃO   FEEDBACK
       |          |          |
       +----------+----------+
                  |
                  v
               OPERAÇÕES
                  |
                  v
          ENTREGA CONFIÁVEL
```

### O ciclo DevOps

Uma representação comum apresenta as seguintes atividades:

1. Plan — Planear.
2. Code — Programar.
3. Build — Construir.
4. Test — Testar.
5. Release — Preparar a versão.
6. Deploy — Implantar.
7. Operate — Operar.
8. Monitor — Monitorizar.

```text id="eh2uwy"
PLAN
  |
  v
CODE
  |
  v
BUILD
  |
  v
TEST
  |
  v
RELEASE
  |
  v
DEPLOY
  |
  v
OPERATE
  |
  v
MONITOR
  |
  +----------> FEEDBACK
                  |
                  v
                 PLAN
```

O ciclo representa a continuidade entre desenvolvimento, entrega e operação.

### Integração Contínua (CI)

A **Continuous Integration** consiste em integrar alterações de código frequentemente e executar verificações automatizadas.

Exemplos:

- Build.
- Lint.
- Testes unitários.
- Testes de integração.
- Análise de segurança.

### Entrega Contínua e Implantação Contínua

**Continuous Delivery**

Mantém o software em condições de ser implantado, podendo existir uma aprovação antes da publicação.

**Continuous Deployment**

Automatiza também a implantação das alterações que cumprem os critérios estabelecidos, sem exigir aprovação manual para cada publicação.

### CI/CD na prática

```text id="z3tu9k"
PROGRAMADOR
     |
     v
GIT COMMIT
     |
     v
REPOSITÓRIO
     |
     v
PIPELINE CI
     |
     +--> LINT
     +--> TESTES
     +--> BUILD
     |
     v
ARTEFACTO VALIDADO
     |
     v
PIPELINE CD
     |
     v
STAGING
     |
     v
PRODUÇÃO
     |
     v
MONITORIZAÇÃO
```

### Ferramentas DevOps

| Ferramenta | Utilização |
|---|---|
| Git | Controlo de versões |
| Forgejo / GitLab / GitHub | Gestão de repositórios e colaboração |
| Docker | Containers |
| Kubernetes | Orquestração de containers |
| GitLab CI/CD / Forgejo Actions | Automatização de pipelines |
| Terraform | Infraestrutura como código |
| Prometheus | Recolha de métricas |
| Grafana | Visualização e monitorização |

### DevOps e GMUD

DevOps e GMUD não são abordagens necessariamente opostas.

A GMUD procura garantir que mudanças sejam avaliadas e controladas.

O DevOps procura tornar as mudanças menores, frequentes, automatizadas e confiáveis.

A integração pode ocorrer através de:

- Testes automatizados.
- Aprovações baseadas no risco.
- Registos de deploy.
- Auditoria de alterações.
- Monitorização.
- Rollback.
- Políticas de segurança.

**Exemplo:**

Uma alteração simples e previamente aprovada pode seguir um pipeline automatizado.

Uma alteração crítica na infraestrutura pode exigir uma avaliação adicional antes da implantação.

O nível de controlo deve ser proporcional ao risco.

### Benefícios do DevOps

- Menor tempo entre desenvolvimento e entrega.
- Maior colaboração entre equipas.
- Redução de tarefas manuais.
- Feedback mais rápido.
- Melhor rastreabilidade.
- Maior capacidade de recuperação.
- Melhoria contínua da operação.

### DevOps e sustentação

A **sustentação de software** envolve atividades necessárias para manter um sistema operacional depois da sua disponibilização.

Pode incluir:

- Correção de defeitos.
- Monitorização.
- Gestão de incidentes.
- Atualizações.
- Backups.
- Segurança.
- Otimização de desempenho.
- Suporte técnico.

O DevOps aproxima a equipa responsável pelo desenvolvimento das necessidades de operação, incentivando a consideração de requisitos operacionais desde as primeiras fases.

---

## 5. Integração entre Mudanças, Testes Ágeis, GMUD e DevOps

Os quatro conceitos contribuem para gerir mudanças de forma adaptativa e controlada.

| Conceito | Contribuição |
|---|---|
| **Gestão de Mudanças** | Avaliar e controlar alterações |
| **Testes Ágeis** | Identificar falhas e aprender rapidamente |
| **GMUD** | Controlar alterações operacionais |
| **DevOps** | Integrar desenvolvimento, entrega e operação |

### Exemplo integrado — atualização de uma aplicação

Uma empresa pretende implementar uma nova funcionalidade.

```text id="71809a"
       NECESSIDADE DE MUDANÇA
                  |
                  v
          AVALIAR IMPACTO
                  |
                  v
           APROVAR ALTERAÇÃO
                  |
                  v
             DESENVOLVER
                  |
                  v
            TESTES ÁGEIS
                  |
                  v
           PIPELINE CI/CD
                  |
                  v
          CONTROLO DE GMUD
                  |
                  v
           DEPLOY CONTROLADO
                  |
                  v
             MONITORIZAR
                  |
                  v
             RECOLHER FEEDBACK
                  |
                  v
            MELHORIA CONTÍNUA
```

Este fluxo representa uma possível integração. O processo exato depende do contexto, das políticas e do risco da mudança.

### Boas práticas

- Aceitar que mudanças fazem parte dos projetos.
- Avaliar impactos antes de alterar planos.
- Comunicar decisões aos stakeholders.
- Utilizar testes para obter feedback antecipado.
- Automatizar verificações repetitivas.
- Implementar mudanças pequenas quando possível.
- Preparar mecanismos de recuperação.
- Monitorizar os resultados após o deploy.
- Documentar incidentes e lições aprendidas.

---

## Resumo em uma frase

> A Gestão de Mudanças permite adaptar projetos a novas necessidades sem perder o controlo dos objetivos, utilizando testes ágeis para identificar erros e aprender rapidamente, processos de GMUD para avaliar e implementar alterações operacionais com segurança e práticas DevOps para integrar desenvolvimento e sustentação através de colaboração, automatização, CI/CD, monitorização e melhoria contínua.

---

## Conceitos relacionados para estudar a seguir

- **ITIL 4 — Change Enablement** — aprofundar os princípios de gestão e autorização de mudanças em serviços de TI.

- **Gestão de Incidentes (Incident Management)** — compreender a identificação, classificação e resolução de falhas operacionais.

- **Feature Flags e Canary Releases** — estudar estratégias para disponibilizar funcionalidades de forma gradual.

- **Blue-Green Deployment e Rolling Updates** — compreender técnicas de implantação com menor interrupção dos serviços.

- **Site Reliability Engineering (SRE)** — explorar práticas de fiabilidade, observabilidade e resposta a incidentes.

- **DevSecOps** — integrar segurança às práticas de desenvolvimento, operações e automatização.

- **Infraestrutura como Código (IaC)** — estudar a gestão de infraestrutura através de ficheiros e processos versionados.

- **Métricas DORA** — conhecer indicadores relacionados com desempenho de entrega e estabilidade operacional.
