# Eficiência Operacional em Entrega de Software

---

## 1. Build, Deploy, Run — entendendo as preocupações para entregar valor

Antes de falar de ferramentas e automação, é preciso entender **as três grandes etapas** pelas quais qualquer software passa entre "ter código escrito" e "estar a gerar valor real para quem o usa": **build, deploy e run**.

### Build (construção)
É a etapa em que o **código-fonte é transformado num artefacto executável**. Dependendo da linguagem/tecnologia, isto pode envolver:
- Compilar o código (ex: transformar código Java em bytecode, ou código C em binário)
- Instalar dependências (bibliotecas de terceiros necessárias)
- Empacotar tudo num formato distribuível (ex: um `.jar`, um contentor Docker, um pacote `.zip`)
- Correr verificações automáticas de qualidade (ex: linters, testes unitários)

**Principal preocupação nesta etapa**: garantir que o resultado do build é **consistente e reproduzível** — ou seja, que o mesmo código-fonte gera sempre o mesmo artefacto, independentemente de quem ou onde o build é executado.

### Deploy (implantação)
É a etapa em que o **artefacto construído é colocado no ambiente onde vai correr** — seja um servidor de testes, um ambiente de homologação (staging) ou o ambiente de produção (onde os utilizadores finais realmente acedem ao sistema).

**Principais preocupações nesta etapa**:
- **Minimizar o tempo de indisponibilidade (downtime)** durante a atualização
- Garantir que a nova versão pode ser **revertida rapidamente (rollback)** caso algo corra mal
- Assegurar que as configurações do ambiente (variáveis de ambiente, credenciais, ligações a bases de dados) estão corretas para aquele ambiente específico

### Run (execução)
É a etapa em que o software está **efetivamente a correr e a ser usado**, gerando valor real para o negócio e para quem o utiliza.

**Principais preocupações nesta etapa**:
- **Monitorização** — saber se o sistema está saudável, com que performance, e ser alertado rapidamente se algo falhar (ver `05_computacao_sem_servidor.md`, secção sobre CloudWatch e SNS, na pasta de Computação em Nuvem)
- **Escalabilidade** — garantir que o sistema aguenta a carga real de utilização, ajustando recursos conforme necessário
- **Segurança contínua** — o sistema continua exposto a ameaças enquanto estiver em execução, exigindo vigilância constante, não apenas no momento da implantação

### Por que este ciclo importa
Entregar valor não é apenas "escrever código que funciona" — é garantir que esse código **chega de forma fiável e rápida** ao utilizador final (build + deploy), e que **continua a funcionar bem depois de lá chegar** (run). Uma falha em qualquer uma destas três etapas pode significar que todo o esforço de desenvolvimento não se traduz em valor real entregue — por exemplo, código excelente que demora semanas a chegar à produção, ou que falha silenciosamente sem ninguém perceber.

É exatamente para tornar este ciclo **mais rápido, confiável e repetível** que surgiram as ferramentas e práticas descritas nos pontos seguintes.

---

## 2. Colaboração no código — como era antes?

Antes de existirem ferramentas modernas de controlo de versões e colaboração, escrever código em equipa era um processo **lento, arriscado e propenso a erros**.

### Como era feito antigamente
- **Cópias manuais de ficheiros**: era comum enviar ficheiros de código por e-mail, ou copiá-los para uma pasta partilhada na rede da empresa, com nomes como `projeto_final_v2_ultimaversao_definitiva.zip`.
- **Edição sequencial**: para evitar que duas pessoas editassem o mesmo ficheiro ao mesmo tempo (e uma sobrescrevesse o trabalho da outra), era necessário um processo manual de "bloqueio" — por exemplo, avisar a equipa por chat ou e-mail: "estou a mexer no ficheiro X, ninguém mexa até eu avisar".
- **Falta de histórico confiável**: não havia forma fácil de saber quem tinha alterado o quê, quando, e porquê — a não ser através de comentários deixados manualmente no próprio código (ex: `// alterado por João em 12/03`).
- **Fusão manual de alterações (merge manual)**: quando duas pessoas trabalhavam em partes diferentes do mesmo ficheiro, juntar essas alterações era um processo manual, lento e com alto risco de introduzir erros ou perder trabalho de uma das pessoas.

### Os problemas que isto criava
- **Perda de trabalho**: era fácil uma pessoa sobrescrever, sem querer, o trabalho de outra.
- **Dificuldade em reverter erros**: se uma alteração introduzisse um problema, não havia forma simples de "voltar atrás" para uma versão anterior estável.
- **Falta de rastreabilidade**: era difícil (ou impossível) saber exatamente o que tinha mudado entre duas versões do sistema, ou quem era responsável por uma alteração específica.
- **Colaboração lenta e não escalável**: este processo funcionava (com muita dificuldade) para equipas muito pequenas, mas tornava-se praticamente inviável à medida que mais pessoas trabalhavam no mesmo projeto ao mesmo tempo.

### O que motivou a inovação
Foi exatamente para resolver estes problemas — perda de trabalho, falta de histórico, dificuldade de colaborar em paralelo — que surgiram os **sistemas de controlo de versões (Version Control Systems)**, e mais tarde os sistemas de **controlo de versões distribuído**, como o **Git**, que possibilitaram exatamente o oposto do cenário descrito acima: várias pessoas a trabalhar no mesmo código, em paralelo, com histórico completo e capacidade de reverter ou combinar alterações de forma segura e automatizada.

---

## 3. SCM (Source Control Management) — gestão de código-fonte

O **SCM (Source Control Management)**, também chamado de **controlo de versões (Version Control)**, é a categoria de ferramentas e práticas responsáveis por **gerir as alterações ao código-fonte ao longo do tempo**, resolvendo diretamente os problemas descritos no ponto anterior.

### O que um sistema de SCM permite fazer
- **Guardar o histórico completo de alterações**: cada mudança no código fica registada, com informação sobre quem a fez, quando, e uma mensagem a explicar o porquê.
- **Trabalhar em paralelo, sem conflitos destrutivos**: várias pessoas podem alterar partes diferentes (ou até a mesma parte) do código ao mesmo tempo, e o sistema ajuda a combinar (*merge*) essas alterações de forma controlada.
- **Reverter para versões anteriores**: se uma alteração introduzir um erro, é possível voltar facilmente a uma versão anterior estável do código.
- **Criar ramos (branches) de desenvolvimento paralelos**: permite que uma nova funcionalidade seja desenvolvida isoladamente, sem afetar a versão principal do código, até estar pronta para ser combinada.
- **Rastreabilidade e auditoria**: é possível saber exatamente que linha de código foi alterada, por quem, e em que contexto (útil tanto para depuração de erros como para auditorias de segurança).

### Git — o sistema de SCM mais usado atualmente
O **Git** é hoje o sistema de controlo de versões **distribuído** mais utilizado no mundo. "Distribuído" significa que cada pessoa tem uma **cópia completa do histórico do projeto** na sua própria máquina, e não apenas uma cópia dos ficheiros mais recentes — o que torna o trabalho possível mesmo sem ligação constante a um servidor central, e reduz o risco de um único ponto de falha.

Conceitos centrais do Git:
- **Repositório (repository)** — o "projeto" completo, com todo o seu histórico de alterações
- **Commit** — um "ponto de gravação" no histórico, representando um conjunto de alterações específicas
- **Branch (ramo)** — uma linha paralela de desenvolvimento, isolada da principal
- **Merge** — o processo de combinar as alterações de um branch com outro
- **Pull Request / Merge Request** — um pedido formal para que as alterações de um branch sejam revistas e depois combinadas com o branch principal, geralmente com revisão de código por outras pessoas da equipa antes de ser aceite

O SCM é, portanto, a **base fundamental** sobre a qual se constroem processos mais avançados de automação, como o CI/CD explicado no ponto seguinte.

---

## 4. GitLab: SCM + CI + CD

O **GitLab** é uma plataforma que combina, num único produto, três funções que tradicionalmente exigiriam ferramentas separadas: **gestão de código-fonte (SCM)**, **integração contínua (CI)** e **entrega/implantação contínua (CD)**.

### GitLab como SCM
Na sua base, o GitLab funciona como um serviço de alojamento de repositórios **Git**, oferecendo:
- Repositórios privados ou públicos
- Gestão de branches e merge requests
- Revisão de código colaborativa (comentários, aprovações antes de fundir alterações)
- Gestão de permissões de acesso por utilizador ou equipa
- Rastreamento de issues (tarefas, bugs, pedidos de funcionalidade)

### GitLab como CI (Continuous Integration / Integração Contínua)
**Integração Contínua** é a prática de **integrar (juntar) as alterações de código de vários desenvolvedores com muita frequência** (várias vezes ao dia, idealmente), correndo **automaticamente** testes e verificações de qualidade a cada nova alteração enviada ao repositório.

No GitLab, isto é feito através de **pipelines CI**, definidas num ficheiro de configuração (`.gitlab-ci.yml`) dentro do próprio repositório, que descreve, por exemplo:
- Correr testes automatizados sempre que há uma nova alteração
- Verificar a qualidade do código (linters, análise estática)
- Fazer o **build** da aplicação (ver ponto 1) automaticamente

### GitLab como CD (Continuous Delivery/Deployment / Entrega ou Implantação Contínua)
**Entrega Contínua (Continuous Delivery)** garante que o código está sempre num estado pronto a ser implantado em produção, mesmo que a implantação final ainda exija uma aprovação manual. **Implantação Contínua (Continuous Deployment)** vai um passo além: cada alteração que passa em todos os testes é **automaticamente implantada em produção**, sem intervenção manual.

O GitLab permite configurar qualquer um destes modelos dentro da mesma pipeline, estendendo o processo de CI (build + testes) até ao **deploy** automático em diferentes ambientes (ex: staging, depois produção).

### Por que ter tudo numa única plataforma é vantajoso
- **Menos ferramentas para gerir**: em vez de usar um serviço para código-fonte, outro para CI, e outro para CD, tudo fica integrado e configurado no mesmo lugar.
- **Rastreabilidade ponta a ponta**: é possível seguir uma alteração desde o commit original, passando pelos testes automáticos, até à implantação final em produção, tudo dentro da mesma interface.
- **Menor fricção para as equipas**: reduz a curva de aprendizagem e a complexidade de configurar integrações entre ferramentas diferentes.

---

## 5. Automação com pipelines — benefícios de automatizar a entrega em produção

Uma **pipeline** é a sequência automatizada de etapas — build, testes, e deploy — que o código percorre desde que é escrito até chegar (ou não, se falhar algures no caminho) à produção.

### Estrutura típica de uma pipeline
```
Novo código enviado (commit/push)
        │
        ▼
   Etapa de Build (compilar, empacotar)
        │
        ▼
   Etapa de Testes (unitários, integração)
        │
        ▼
   Etapa de Análise de Qualidade/Segurança
        │
        ▼
   Etapa de Deploy em Staging (ambiente de testes)
        │
        ▼
   Etapa de Deploy em Produção (manual ou automática)
```

Se qualquer etapa falhar (ex: um teste não passa), a pipeline para automaticamente **antes** de o código chegar à produção, evitando que erros cheguem aos utilizadores finais.

### Benefícios de automatizar este processo

- **Redução de erro humano**: passos repetitivos (correr testes, empacotar a aplicação, copiar ficheiros para o servidor certo) deixam de depender de alguém se lembrar de os fazer corretamente, sempre da mesma forma.
- **Velocidade de entrega**: o que antes podia levar horas ou dias de processos manuais passa a levar minutos, permitindo entregar valor ao utilizador final com muito mais frequência.
- **Feedback rápido para os desenvolvedores**: se uma alteração introduzir um problema, a equipa é avisada quase imediatamente (a pipeline falha), em vez de o problema só ser descoberto muito mais tarde, quando já é mais caro e difícil de corrigir.
- **Consistência entre ambientes**: a mesma sequência automatizada de passos corre sempre da mesma forma, eliminando a variação que existia quando o deploy era feito manualmente por pessoas diferentes, cada uma "à sua maneira".
- **Rastreabilidade e auditoria**: cada execução da pipeline fica registada, sendo possível saber exatamente o que foi testado, quando, e o que foi implantado em cada ambiente.
- **Redução do medo de fazer deploy**: quando o processo é confiável e automatizado, entregar código em produção deixa de ser um evento raro e stressante ("vamos fazer o deploy grande de sexta à noite") e passa a ser um evento comum, pequeno e de baixo risco — o que, por sua vez, incentiva entregas mais frequentes e incrementais.

### Ligação com a eficiência de infraestrutura
Vale notar que a automação de pipelines se torna ainda mais poderosa quando combinada com os conceitos de infraestrutura eficiente já vistos anteriormente (ver `00_eficiencia_escalabilidade_infraestrutura_ti.md`, na mesma pasta): uma pipeline pode, por exemplo, criar contentores automaticamente a cada novo deploy, escalando-os conforme necessário, sem qualquer intervenção manual — unindo eficiência operacional de entrega de código com eficiência de infraestrutura.

---

## Resumo em uma frase

> A eficiência operacional na entrega de software depende de entender bem o ciclo build-deploy-run, de ferramentas de controlo de código-fonte (SCM) como o Git — que resolveram os problemas de colaboração manual do passado — e de plataformas como o GitLab, que unem SCM, CI e CD para permitir pipelines automatizadas que tornam a entrega de código em produção mais rápida, confiável e frequente.

---

## Conceitos relacionados para estudar a seguir

- **Git em profundidade** — comandos essenciais (`clone`, `commit`, `push`, `pull`, `branch`, `merge`, `rebase`)
- **GitFlow e Trunk-Based Development** — estratégias diferentes de organizar branches numa equipa
- **Testes automatizados** — unitários, de integração e end-to-end, e o seu papel dentro de uma pipeline
- **Infraestrutura como Código (IaC)** — Terraform, CloudFormation — como a infraestrutura em si também pode ser versionada e automatizada, aplicando os mesmos princípios de SCM ao ambiente e não só ao código da aplicação
- **Monitorização e Observabilidade** — como saber se um deploy correu bem depois de chegar à produção (etapa "Run")