# Criação e Gerenciamento de Buckets (Google Cloud) e Recursos no Azure

> Este ficheiro reúne dois blocos de conteúdo trabalhados na mesma aula: gestão de armazenamento e IAM no **Google Cloud** (pontos 1 e 2) e gestão de recursos e armazenamento no **Microsoft Azure** (pontos 3 a 6) — dois fornecedores de nuvem diferentes, mas com conceitos que se comparam diretamente aos já vistos na AWS (ver `01_aws.md`, na pasta de Computação em Nuvem).

---

## Parte A — Google Cloud: Buckets e IAM

## 1. Criar um bucket, torná-lo público, e testar permissões com Python

### O que é um bucket
Um **bucket** no Google Cloud é o equivalente direto ao conceito de bucket S3 já visto na AWS (ver `01_aws.md`) — um contentor lógico para guardar **objetos** (ficheiros) no serviço de armazenamento **Cloud Storage**.

### Criar um bucket

Através da linha de comandos (`gcloud`, disponível no Cloud Shell, ver `02_introducao_docker_google_cloud.md`):
```
gcloud storage buckets create gs://meu-bucket-exemplo --location=europe-west1
```

- **`gs://meu-bucket-exemplo`** — o nome do bucket, que precisa de ser **globalmente único** em todo o Google Cloud (à semelhança dos nomes de imagem no Docker Hub, ver `04_docker_dockerfile_imagens.md`, ponto 5, na pasta DevOps_I).
- **`--location`** — a região onde os dados vão ficar fisicamente armazenados.

### Tornar o bucket público

Por padrão, um bucket é privado. Para o tornar acessível publicamente (ex: para servir ficheiros estáticos de um site), é necessário conceder a permissão de leitura ao grupo especial **`allUsers`**:

```
gcloud storage buckets add-iam-policy-binding gs://meu-bucket-exemplo \
  --member=allUsers \
  --role=roles/storage.objectViewer
```

- **`--member=allUsers`** — representa "qualquer pessoa na internet", não apenas utilizadores autenticados.
- **`--role=roles/storage.objectViewer`** — concede apenas permissão de **leitura** dos objetos, sem permitir escrita ou eliminação — o princípio do menor privilégio (já visto em `01_aws.md`, na secção de boas práticas de segurança) aplica-se igualmente aqui.

### Testar permissões com uma função em Python

O Google Cloud disponibiliza uma biblioteca cliente oficial (`google-cloud-storage`) que permite interagir com buckets diretamente a partir de código Python — útil para testar programaticamente se um determinado acesso está, de facto, a funcionar como esperado.

```python
from google.cloud import storage

def testar_acesso_publico(nome_bucket, nome_ficheiro):
    """
    Testa se um ficheiro num bucket está acessível publicamente,
    tentando lê-lo sem usar nenhuma credencial autenticada.
    """
    cliente = storage.Client.create_anonymous_client()
    bucket = cliente.bucket(nome_bucket)
    blob = bucket.blob(nome_ficheiro)

    try:
        conteudo = blob.download_as_text()
        print(f"Acesso público confirmado. Conteúdo: {conteudo[:100]}")
        return True
    except Exception as erro:
        print(f"Acesso negado ou erro: {erro}")
        return False

testar_acesso_publico("meu-bucket-exemplo", "index.html")
```

**O que este código faz:**
- Cria um cliente **anónimo** (`create_anonymous_client()`), ou seja, sem usar nenhuma credencial de conta — simulando exatamente o que um visitante qualquer da internet conseguiria (ou não) aceder.
- Tenta descarregar o conteúdo do ficheiro especificado.
- Se a permissão pública (`allUsers` + `objectViewer`) estiver corretamente configurada, a leitura funciona; caso contrário, é devolvido um erro de permissão — validando, na prática, se a configuração do ponto anterior funcionou como esperado.

### Gerenciamento de acesso a projetos, pastas e organizações

O IAM do Google Cloud organiza-se numa **hierarquia de recursos**, semelhante em espírito à estrutura de contas da AWS (ver `01_aws.md`, sobre conta root, utilizadores IAM e roles):

```
Organização
   │
   ├── Pasta (Folder)
   │      │
   │      └── Projeto
   │             │
   │             └── Recursos (buckets, VMs, etc.)
   │
   └── Projeto (também pode existir diretamente sob a organização)
```

Permissões atribuídas num nível superior (ex: na organização) são **herdadas automaticamente** por tudo o que está abaixo (pastas, projetos, recursos), a não ser que sejam explicitamente restringidas num nível mais específico.

**Gerir acesso via IAM (consola ou `gcloud`):**
```
gcloud projects add-iam-policy-binding ID-DO-PROJETO \
  --member=user:pessoa@exemplo.com \
  --role=roles/viewer
```

**Gerir o mesmo tipo de permissão via Python**, usando a biblioteca `google-cloud-resource-manager`:
```python
from google.cloud import resourcemanager_v3

def conceder_acesso_projeto(id_projeto, email_utilizador, papel):
    """
    Concede um papel (role) IAM a um utilizador, ao nível do projeto.
    """
    cliente = resourcemanager_v3.ProjectsClient()
    nome_recurso = f"projects/{id_projeto}"

    politica = cliente.get_iam_policy(request={"resource": nome_recurso})
    politica.bindings.add(
        role=papel,
        members=[f"user:{email_utilizador}"]
    )
    cliente.set_iam_policy(request={"resource": nome_recurso, "policy": politica})
    print(f"Papel {papel} atribuído a {email_utilizador} no projeto {id_projeto}")

conceder_acesso_projeto("meu-projeto-123", "pessoa@exemplo.com", "roles/viewer")
```

Este padrão — **ler a política atual, adicionar uma nova atribuição, e voltar a gravar a política** — é comum a praticamente todas as operações de IAM feitas de forma programática no Google Cloud, seja ao nível de um bucket específico, de um projeto, de uma pasta, ou de uma organização inteira.

---

## 2. Atribuição de papéis (roles) a utilizadores

Um **papel (role)** no IAM é um conjunto de permissões específicas, agrupadas de forma a facilitar a sua atribuição — em vez de conceder permissões individuais uma a uma, atribui-se um papel já pronto (ou personalizado) a um utilizador, grupo, ou até a uma aplicação (via *service account*).

### Tipos de papéis
- **Papéis básicos (basic roles)**: `roles/viewer`, `roles/editor`, `roles/owner` — muito amplos, geralmente desaconselhados em produção por concederem acesso demasiado abrangente.
- **Papéis predefinidos (predefined roles)**: mais granulares, focados num serviço específico (ex: `roles/storage.objectViewer`, já usado no ponto 1, ou `roles/compute.instanceAdmin`).
- **Papéis personalizados (custom roles)**: criados à medida, combinando exatamente as permissões necessárias para uma função específica, quando os papéis predefinidos são demasiado amplos ou demasiado restritos.

### Exemplos práticos de atribuição de papéis diferentes

**Exemplo 1 — Um analista de dados que só precisa de ler dados de um bucket:**
```
gcloud storage buckets add-iam-policy-binding gs://meu-bucket-exemplo \
  --member=user:analista@exemplo.com \
  --role=roles/storage.objectViewer
```

**Exemplo 2 — Um developer que precisa de criar e gerir instâncias de computação, mas não deve mexer em faturação:**
```
gcloud projects add-iam-policy-binding meu-projeto-123 \
  --member=user:developer@exemplo.com \
  --role=roles/compute.admin
```

**Exemplo 3 — Uma aplicação (service account) que só precisa de escrever logs, sem qualquer outro acesso:**
```
gcloud projects add-iam-policy-binding meu-projeto-123 \
  --member=serviceAccount:minha-app@meu-projeto-123.iam.gserviceaccount.com \
  --role=roles/logging.logWriter
```

**Exemplo 4 — Um administrador de IAM, que pode gerir permissões de outras pessoas, mas não necessariamente aceder aos dados propriamente ditos:**
```
gcloud projects add-iam-policy-binding meu-projeto-123 \
  --member=user:admin-acessos@exemplo.com \
  --role=roles/resourcemanager.projectIamAdmin
```

### Princípio orientador
Em todos estes exemplos, o princípio é sempre o mesmo já mencionado em `01_aws.md`: **atribuir apenas o papel estritamente necessário para a função de cada pessoa ou serviço** (princípio do menor privilégio), evitando atribuir papéis amplos como `roles/owner` sempre que um papel mais específico resolva o problema.

---

## Parte B — Microsoft Azure: Gestão de Recursos e Armazenamento

## 3. Azure Resource Manager (ARM)

O **Azure Resource Manager (ARM)** é o serviço de gestão central do Microsoft Azure, responsável por **receber, validar e coordenar todos os pedidos de criação, atualização e eliminação de recursos** dentro de uma subscrição Azure — desempenhando um papel equivalente ao **AWS CloudFormation** ou ao próprio conjunto de APIs de gestão da AWS (ver `01_aws.md`).

### Onde o ARM se encaixa no Azure Management
Todos os pedidos feitos ao Azure — seja através do **portal Azure** (interface web), da **CLI do Azure**, do **PowerShell**, ou de SDKs de programação — passam, por trás dos panos, pelo **ARM**, que funciona como uma camada única e consistente de gestão:

```
Portal Azure / CLI / PowerShell / SDKs
                │
                ▼
      Azure Resource Manager (ARM)
                │
                ▼
   Recursos (VMs, Storage, Bases de Dados, Redes, etc.)
```

### Conceitos centrais do ARM

- **Grupo de Recursos (Resource Group)**: um contentor lógico que agrupa recursos relacionados (ex: todos os recursos de uma aplicação específica), facilitando geri-los, monitorizá-los e eliminá-los em conjunto.
- **Modelos ARM (ARM Templates)**: ficheiros em formato **JSON** que descrevem, de forma **declarativa**, que recursos devem existir e com que configuração — o mesmo princípio declarativo já visto no Kubernetes (ver `01_historia_conceitos_basicos_kubernetes.md`, ponto 3), aplicado agora à infraestrutura Azure como um todo. Permitem recriar exatamente a mesma infraestrutura de forma automatizada e repetível, seguindo os mesmos princípios de Infraestrutura como Código já mencionados em `01_eficiencia_operacional_entrega_software.md`, na pasta DevOps_I.
- **RBAC (Role-Based Access Control)**: o sistema de controlo de acesso do Azure, conceptualmente equivalente ao IAM tanto da AWS como do Google Cloud (ver Parte A deste ficheiro) — atribui papéis a utilizadores ou grupos, controlando o que cada um pode fazer sobre os recursos geridos pelo ARM.

### Vantagens de ter um gestor de recursos central como o ARM
- **Consistência**: independentemente de a alteração ser feita pelo portal, pela CLI ou por um script, é sempre o mesmo motor (ARM) que valida e aplica o pedido, garantindo comportamento previsível.
- **Gestão de dependências**: o ARM entende as relações entre recursos (ex: uma VM que depende de uma rede virtual já existente), coordenando a ordem correta de criação.
- **Controlo de acesso unificado**: como todos os pedidos passam pelo ARM, é possível aplicar políticas de segurança e permissões (RBAC) de forma centralizada, sobre qualquer tipo de recurso.

---

## 4. Habilitar o gerenciamento do ciclo de vida (Lifecycle Management) no Azure

Semelhante ao conceito de *lifecycle policies* no Amazon S3, o Azure Storage permite definir **políticas de ciclo de vida** para os dados guardados em contas de armazenamento (Storage Accounts), automatizando ações como mudar o tipo de armazenamento (tier) ou eliminar dados antigos automaticamente.

### Por que isto é útil
Dados guardados em armazenamento têm, tipicamente, um padrão de acesso: são muito acedidos logo após serem criados, e cada vez menos acedidos com o passar do tempo. Manter dados antigos e raramente acedidos no nível de armazenamento mais caro (de acesso rápido) é um desperdício de custo — a gestão do ciclo de vida resolve isto automaticamente.

### Passo a passo para habilitar

1. Aceder à **Storage Account** desejada no portal Azure.
2. No menu lateral, navegar até **"Lifecycle Management"** (dentro da secção de Gestão de Dados).
3. Clicar em **"Add a rule"** (Adicionar uma regra).
4. Definir o **âmbito da regra**: aplicar a todos os blobs (ficheiros) da conta, ou apenas a um subconjunto filtrado por prefixo de nome ou por tipo de blob.
5. Definir as **ações e condições**, por exemplo:
   - Mover blobs para o nível **"Cool"** (acesso pouco frequente, mais barato) após 30 dias sem acesso
   - Mover blobs para o nível **"Archive"** (armazenamento a longo prazo, muito mais barato, mas com tempo de acesso mais lento) após 90 dias
   - **Eliminar** blobs automaticamente após 365 dias, se aplicável às políticas de retenção de dados da organização
6. Guardar a regra — o Azure passa a aplicá-la automaticamente, de forma contínua, sem necessidade de intervenção manual futura.

### Analogia com o já estudado noutros fornecedores
Este mecanismo tem o mesmo objetivo do **S3 Lifecycle** na AWS (mover dados entre S3 Standard, S3 Glacier, etc., ver `01_aws.md`, secção de armazenamento) — cada fornecedor de nuvem oferece uma versão própria deste conceito, mas o princípio de negócio por trás é idêntico: **otimizar custos automaticamente com base em padrões reais de acesso aos dados**.

---

## 5. Ativar o controle de versão (Versioning) no Azure

O **versionamento (blob versioning)** no Azure Storage mantém automaticamente **versões anteriores** de um blob sempre que este é alterado ou substituído, permitindo recuperar uma versão anterior em caso de erro, eliminação acidental, ou substituição indevida.

### Passo a passo para ativar

1. Aceder à **Storage Account** desejada no portal Azure.
2. No menu lateral, navegar até **"Data protection"** (Proteção de Dados).
3. Encontrar a opção **"Enable versioning for blobs"** (Ativar versionamento para blobs).
4. Marcar a opção e guardar a alteração.

### O que acontece depois de ativado
A partir deste momento, sempre que um blob existente for **sobrescrito** ou **eliminado**, o Azure automaticamente guarda a versão anterior em vez de a apagar definitivamente. Cada versão fica identificada por um **ID de versão** único, sendo possível:
- Consultar o histórico completo de versões de um determinado blob
- Restaurar (promover) uma versão anterior para se tornar novamente a versão "atual"
- Eliminar permanentemente versões antigas específicas, se já não forem necessárias (para controlar custos de armazenamento acumulado)

### Por que isto é importante
O versionamento funciona como uma rede de segurança contra erros humanos ou de aplicação (ex: um processo que sobrescreve acidentalmente o ficheiro errado), sem depender de backups manuais separados — sendo, na prática, complementar (não substituto) às políticas de ciclo de vida do ponto 4, e a backups mais estruturados, como os vistos no ponto seguinte.

---

## 6. Criar recursos no Azure após criar um contêiner de backup em armazenamento de dados

Este último ponto junta os conceitos anteriores (ARM, Storage) com o serviço de **Azure Backup**, mostrando como um contentor de armazenamento dedicado a backups se encaixa na criação mais ampla de recursos no Azure.

### Criar um contêiner de armazenamento para backups

1. Dentro de uma **Storage Account**, aceder à secção **"Containers"** (dentro de "Data storage").
2. Clicar em **"+ Container"**.
3. Dar um nome ao contentor (ex: `backups-producao`).
4. Definir o **nível de acesso público** (recomendado: "Private", já que dados de backup não devem, à partida, ser publicamente acessíveis — ao contrário do exemplo de bucket público visto na Parte A deste ficheiro, que era apenas ilustrativo).
5. Confirmar a criação.

### Configurar o Azure Backup a usar esse contêiner

1. Aceder ao serviço **"Recovery Services vaults"** no portal Azure (o "cofre" central onde o Azure Backup organiza e gere todos os backups).
2. Criar um novo **Recovery Services Vault** (ou usar um já existente), associando-o ao grupo de recursos e à região desejada — recapitulando o conceito de Grupo de Recursos já explicado no ponto 3 (ARM).
3. Dentro do vault criado, configurar a política de backup, definindo:
   - Frequência dos backups (ex: diário)
   - Tempo de retenção (quanto tempo cada backup fica guardado antes de ser eliminado automaticamente)
   - O contentor de armazenamento (criado no passo anterior) associado como destino dos dados de backup

### Criar outros recursos dependentes deste fluxo
Com o contentor de backup e o Recovery Services Vault configurados, é possível avançar para criar (ou associar) os recursos que efetivamente vão ser protegidos por este backup — por exemplo:
- Uma **máquina virtual (VM)** no Azure, associada à política de backup já criada
- Uma **base de dados Azure SQL**, configurada para usar o mesmo vault de recuperação

Todos estes recursos, tal como explicado no ponto 3, são criados e geridos, por trás dos panos, através do **Azure Resource Manager**, que garante que a criação de uma VM, por exemplo, já fica corretamente associada ao grupo de recursos, à política de backup e às permissões RBAC configuradas anteriormente — sem necessidade de configurar cada peça de forma completamente isolada.

### Resumo do fluxo completo deste ponto
```
Storage Account criada
        │
        ▼
Contêiner de backup criado ("backups-producao", acesso privado)
        │
        ▼
Recovery Services Vault criado (associado a um Grupo de Recursos)
        │
        ▼
Política de backup configurada (frequência, retenção, destino = contêiner criado)
        │
        ▼
Recursos associados ao backup (ex: VM, base de dados)
        │
        ▼
Tudo orquestrado, por trás dos panos, pelo Azure Resource Manager (ARM)
```

---

## Resumo em uma frase

> A gestão de armazenamento e acesso na nuvem segue princípios semelhantes entre fornecedores — buckets e IAM no Google Cloud (com testes de permissão programáveis via Python) espelham conceitos já vistos na AWS, enquanto no Azure o Resource Manager (ARM) centraliza a criação e gestão de todos os recursos, incluindo políticas de ciclo de vida, versionamento de blobs, e backups organizados através de contêineres de armazenamento dedicados e Recovery Services Vaults.

---

## Conceitos relacionados para estudar a seguir

- **Service Accounts no Google Cloud** — identidades usadas por aplicações (em vez de pessoas) para aceder a recursos de forma programática, mencionadas no ponto 2
- **Bicep** — linguagem mais moderna e simplificada da Microsoft para escrever infraestrutura como código no Azure, como alternativa aos ARM Templates em JSON
- **Azure Policy** — serviço complementar ao ARM/RBAC, que impõe regras de conformidade sobre que tipo de recursos podem ser criados e como devem ser configurados
- **Cross-cloud IAM comparison** — comparar diretamente IAM (AWS), Cloud IAM (Google Cloud) e RBAC (Azure), já que os três fornecedores resolvem o mesmo problema de controlo de acesso de formas ligeiramente diferentes
- **Azure Blob Storage tiers** — aprofundar as diferenças entre os níveis Hot, Cool e Archive mencionados no ponto 4