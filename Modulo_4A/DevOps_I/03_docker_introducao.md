# Docker: Introdução

---

## 1. O que é o Docker

O **Docker** é uma plataforma que permite **criar, distribuir e correr aplicações dentro de contentores (containers)** — ambientes isolados e leves que empacotam uma aplicação junto com tudo o que ela precisa para funcionar (bibliotecas, dependências, configurações), sem precisar de um sistema operativo completo próprio (ver `00_eficiencia_escalabilidade_infraestrutura_ti.md`, onde os contentores são comparados em detalhe com máquinas virtuais).

### Por que o Docker existe
Antes do Docker, um dos maiores problemas no desenvolvimento de software era a famosa frase: **"na minha máquina funciona"**. Isto acontecia porque diferentes computadores (o do developer, o do servidor de testes, o servidor de produção) tinham versões diferentes de bibliotecas, configurações diferentes de sistema operativo, ou dependências em falta — fazendo com que uma aplicação que funcionava perfeitamente num sítio, falhasse noutro.

O Docker resolve isto ao **empacotar a aplicação com absolutamente tudo o que ela precisa para correr**, de forma que o mesmo pacote (chamado *imagem*, ver ponto 3) funcione **exatamente da mesma forma**, seja no portátil de um developer, num servidor da empresa, ou na nuvem.

### Principais características do Docker
- **Portabilidade**: um contentor Docker corre da mesma forma em qualquer máquina que tenha o Docker instalado, independentemente do sistema operativo por baixo.
- **Leveza**: ao contrário de uma máquina virtual, um contentor Docker não precisa de um sistema operativo completo próprio, apenas do necessário para correr a aplicação — o que o torna muito mais rápido a iniciar e a ocupar muito menos espaço.
- **Isolamento**: cada contentor corre isolado dos outros, mesmo que partilhem o mesmo sistema operativo por baixo (o do computador ou servidor anfitrião).
- **Repetibilidade**: como tudo o que a aplicação precisa está descrito e empacotado, é possível recriar o mesmo ambiente quantas vezes for necessário, de forma idêntica.

---

## 2. O que é o Docker Hub

O **Docker Hub** é o **repositório oficial e público de imagens Docker** — funciona de forma semelhante a como o GitHub funciona para código-fonte (ver `01_eficiencia_operacional_entrega_software.md`), mas em vez de guardar código, guarda **imagens prontas a usar**.

### Para que serve
- **Descobrir imagens já criadas por outras pessoas ou empresas**: em vez de criar uma imagem do zero para, por exemplo, correr uma base de dados MySQL, é possível simplesmente descarregar a imagem oficial do MySQL já pronta no Docker Hub.
- **Publicar as suas próprias imagens**: depois de criar uma imagem personalizada (com a sua própria aplicação), é possível enviá-la (*push*) para o Docker Hub, tornando-a disponível para outras pessoas, outros servidores, ou outros ambientes descarregarem (*pull*).
- **Imagens oficiais e verificadas**: muitas tecnologias populares (Ubuntu, Nginx, Python, Node.js, MySQL, PostgreSQL, etc.) têm imagens **oficiais**, mantidas e verificadas, disponíveis gratuitamente no Docker Hub.

### Exemplo prático
Quando se corre um comando como `docker pull ubuntu`, o Docker vai automaticamente ao Docker Hub, procura a imagem oficial do Ubuntu, e descarrega-a para a máquina local — sem que seja preciso ir a lado nenhum manualmente para a obter.

---

## 3. Do que é feita uma imagem Docker

Uma **imagem Docker** é o "molde" a partir do qual um contentor é criado — pode ser vista como um **pacote fechado e imutável** que contém tudo o que é necessário para correr uma aplicação.

### Componentes típicos de uma imagem Docker
- **Sistema base (base image)**: normalmente uma versão mínima de um sistema operativo Linux (ex: Ubuntu, Alpine, Debian), que serve de fundação para tudo o resto.
- **Dependências e bibliotecas**: tudo o que a aplicação precisa para funcionar (ex: um interpretador Python, o Node.js, bibliotecas específicas).
- **Código da aplicação**: os ficheiros da própria aplicação que se quer correr.
- **Configurações**: variáveis de ambiente, ficheiros de configuração, definições específicas de como a aplicação deve correr.
- **Instruções de execução**: o comando que deve ser executado automaticamente quando um contentor é criado a partir desta imagem (ex: "arrancar o servidor web").

### Camadas (layers)
Uma característica importante das imagens Docker é que são construídas em **camadas (layers)**: cada instrução usada para construir a imagem (normalmente escrita num ficheiro chamado `Dockerfile`) cria uma nova camada, empilhada sobre a anterior. Isto traz vantagens práticas:

- **Reutilização**: se várias imagens partilham a mesma camada base (ex: o mesmo sistema operativo Ubuntu), o Docker só precisa de guardar essa camada uma vez, poupando espaço.
- **Eficiência ao atualizar**: se só uma pequena parte da aplicação mudar, apenas as camadas afetadas precisam de ser reconstruídas e transferidas novamente, não a imagem inteira.

### Imagem vs. Contentor
É importante não confundir os dois conceitos:
- **Imagem** = o molde estático, guardado em disco (ou no Docker Hub), que nunca muda depois de criado.
- **Contentor** = uma instância "viva" e em execução dessa imagem — é possível criar vários contentores diferentes a partir da mesma imagem, cada um a correr de forma independente (este conceito é aprofundado no ponto 6).

---

## 4. Instalar o Ubuntu no Windows para usar o Docker via CMD

Em máquinas Windows, o Docker depende de um subsistema Linux por baixo para funcionar corretamente (já que os contentores partilham o kernel Linux). A forma mais simples de garantir esta base é instalar o **WSL (Windows Subsystem for Linux)** com uma distribuição Ubuntu.

### Passo a passo simplificado

1. Abrir o **CMD (Prompt de Comando)** ou o **PowerShell** como **Administrador**.
2. Executar o comando que instala o WSL com o Ubuntu como distribuição padrão:
   ```
   wsl --install -d Ubuntu
   ```
3. Reiniciar o computador, se solicitado.
4. Ao reiniciar, o Ubuntu vai concluir a instalação automaticamente e pedir para **criar um utilizador Linux e uma password** — este utilizador é independente da conta do Windows.
5. Confirmar que o WSL está corretamente instalado, executando no CMD:
   ```
   wsl -l -v
   ```
   Este comando deve mostrar o Ubuntu instalado, com a versão do WSL (idealmente WSL 2, mais rápida e compatível com o Docker).
6. Com o WSL/Ubuntu pronto, instalar o **Docker Desktop para Windows** (disponível no site oficial do Docker), garantindo, durante a instalação, que a opção de usar o **backend WSL 2** está ativada.
7. Após a instalação, o Docker Desktop passa a integrar-se automaticamente com o Ubuntu instalado via WSL, permitindo correr comandos Docker diretamente no CMD, no PowerShell, ou no terminal do Ubuntu.

> Esta etapa é semelhante, em espírito, à criação de uma máquina virtual Ubuntu explicada em `04_ec2_escalabilidade_trafego_virtualbox.md` (na pasta de Computação em Nuvem), mas o WSL é uma alternativa mais leve e integrada ao Windows do que uma VM tradicional, sendo a base recomendada para correr o Docker neste sistema operativo.

---

## 5. Instalar um contentor através do CMD

Depois do Docker instalado e a correr (verificável com o comando `docker --version` no CMD), é possível descarregar e correr contentores diretamente através da linha de comandos.

### Comando básico para descarregar uma imagem
```
docker pull nome-da-imagem
```
Exemplo, para descarregar a imagem oficial do Ubuntu:
```
docker pull ubuntu
```

Este comando vai ao **Docker Hub** (ver ponto 2), procura a imagem `ubuntu`, e descarrega-a para a máquina local, ficando disponível para criar contentores a partir dela.

### Onde encontrar mais contentores/imagens
Além de pesquisar diretamente no CMD (ex: `docker search nome`), todas as imagens disponíveis também podem ser exploradas visualmente no **site oficial do Docker Hub** ([hub.docker.com](https://hub.docker.com)), onde é possível ver:
- Descrição da imagem
- Número de downloads e popularidade
- Tags disponíveis (diferentes versões da mesma imagem, ver ponto 7)
- Instruções específicas de utilização, fornecidas por quem publicou a imagem

### Confirmar imagens descarregadas
Para ver todas as imagens já descarregadas na máquina local:
```
docker images
```

---

## 6. Como criar um contentor — o que é e como funciona

### O que é um contentor, na prática
Um **contentor** é uma **instância em execução de uma imagem Docker** — é o ambiente isolado, "vivo", onde a aplicação efetivamente corre. Pode-se pensar na imagem como uma "receita" e no contentor como o "prato pronto e a ser servido" a partir dessa receita.

### Como um contentor funciona por dentro
- Corre como um **processo isolado** no sistema operativo anfitrião (host), mas com a sensação de ser uma máquina própria e independente.
- Partilha o **kernel do sistema operativo do host**, em vez de ter o seu próprio sistema operativo completo (diferença central face às máquinas virtuais, ver `00_eficiencia_escalabilidade_infraestrutura_ti.md`).
- Tem o seu próprio sistema de ficheiros isolado, as suas próprias variáveis de ambiente e, normalmente, a sua própria rede virtual isolada (a não ser que seja explicitamente configurado para partilhar a rede do host).
- É, por padrão, **efémero**: se for parado e removido, tudo o que foi alterado dentro dele (sem ser guardado de forma persistente) é perdido — o que reforça a boa prática de manter dados importantes fora do próprio contentor (ex: em volumes Docker ou em bases de dados externas).

### Comando básico para criar e correr um contentor
```
docker run nome-da-imagem
```
Exemplo simples, criando um contentor a partir da imagem Ubuntu já descarregada:
```
docker run ubuntu
```

Este comando:
1. Verifica se a imagem `ubuntu` já existe localmente (se não existir, descarrega-a automaticamente do Docker Hub, como se fosse um `docker pull` implícito).
2. Cria um **novo contentor** a partir dessa imagem.
3. Executa o comando padrão definido na imagem (no caso do Ubuntu puro, isto normalmente resulta apenas em iniciar e terminar de imediato, já que não há nenhum processo contínuo definido por padrão).

### Outros comandos úteis relacionados
```
docker ps          → lista os contentores atualmente em execução
docker ps -a        → lista todos os contentores, incluindo os já parados
docker stop <id>     → para um contentor em execução
docker rm <id>       → remove um contentor parado
```

---

## 7. Usar o contentor com portas abertas — `docker run -p`

Muitos contentores correm aplicações que precisam de **ser acedidas através da rede** (ex: um servidor web, uma API, uma base de dados). Para isso, é necessário expor uma porta do contentor para fora dele, tornando-a acessível a partir da máquina anfitriã (ou até da internet, dependendo da configuração de rede).

### O comando `docker run -p`
```
docker run -p porta_host:porta_container nome-da-imagem
```

Exemplo prático, correndo um servidor web Nginx e tornando-o acessível na porta 8080 da máquina local:
```
docker run -p 8080:80 nginx
```

Neste exemplo:
- `80` é a porta **dentro do contentor**, onde o Nginx está efetivamente à escuta (esta é uma configuração da própria imagem, não algo à escolha livre).
- `8080` é a porta **na máquina anfitriã (host)**, através da qual se vai aceder à aplicação (ex: abrindo `http://localhost:8080` no navegador).

### Qual é a diferença entre usar `-p` e não usar?

- **Com `-p`**: a porta interna do contentor fica **mapeada e acessível** a partir de fora do contentor — ou seja, é possível aceder à aplicação a partir do navegador, de outra aplicação, ou de outro dispositivo na rede (dependendo da configuração adicional de rede).
- **Sem `-p`**: o contentor continua a correr normalmente por dentro (ex: o Nginx continua ativo na porta 80 *dentro* do seu próprio ambiente isolado), mas **não há nenhuma forma de aceder a essa porta a partir de fora do contentor** — a aplicação fica, na prática, isolada e inacessível ao mundo exterior, mesmo estando "a funcionar".

Ou seja: `-p` não liga nem desliga a aplicação lá dentro — apenas cria a **ponte de comunicação** entre o mundo exterior e a porta interna onde a aplicação já está à escuta.

### Versões no comando (tags de imagem)

É possível (e recomendado) especificar a **versão exata** de uma imagem através de uma **tag**, usando o formato `nome-da-imagem:tag`:

```
docker run -p 8080:80 nginx:1.25
```

- Se **nenhuma tag** for especificada (ex: apenas `nginx`), o Docker assume automaticamente a tag `latest` — ou seja, a versão mais recente disponível daquela imagem no momento em que foi descarregada.
- Especificar uma tag concreta (ex: `nginx:1.25`, `ubuntu:22.04`, `python:3.11`) garante que se está sempre a usar **exatamente a mesma versão**, o que é importante para consistência entre ambientes diferentes (ex: garantir que o ambiente de testes usa exatamente a mesma versão que a produção).
- Usar sempre `latest` em produção é geralmente desaconselhado, já que essa tag pode apontar para versões diferentes ao longo do tempo, tornando os ambientes menos previsíveis e mais difíceis de reproduzir de forma idêntica.

### Exemplo final juntando tudo
```
docker run -p 8080:80 nginx:1.25
```
Este comando cria um contentor a partir da versão **1.25** da imagem oficial do **Nginx** (disponível no Docker Hub), tornando-o acessível através da porta **8080** da máquina anfitriã, mesmo o Nginx estando internamente configurado para escutar na porta **80**.

---

## Resumo em uma frase

> O Docker permite empacotar aplicações em imagens leves e portáveis, disponíveis para partilha através do Docker Hub, e correr essas aplicações em contentores isolados através de comandos simples como `docker run`, sendo possível controlar o acesso externo com `-p` (mapeamento de portas) e garantir consistência entre ambientes especificando versões exatas através de tags.

---

## Conceitos relacionados para estudar a seguir

- **Dockerfile** — o ficheiro de instruções usado para construir imagens Docker personalizadas
- **Docker Compose** — ferramenta para definir e correr aplicações com múltiplos contentores (ex: back-end + base de dados) através de um único ficheiro de configuração
- **Volumes Docker** — como persistir dados fora do ciclo de vida efémero de um contentor
- **Redes Docker** — como vários contentores podem comunicar entre si de forma isolada e controlada
- **Kubernetes** — orquestração de muitos contentores em produção, além do que o Docker sozinho consegue gerir (ver `00_eficiencia_escalabilidade_infraestrutura_ti.md`)