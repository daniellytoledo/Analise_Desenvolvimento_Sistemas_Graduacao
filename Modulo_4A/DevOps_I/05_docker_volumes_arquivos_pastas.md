# Docker: Arquivos, Pastas e Volumes

> Este ficheiro dá continuidade a `03_docker_introducao.md` e `04_docker_dockerfile_imagens.md`, focando-se agora em como o Docker lida com ficheiros persistentes através de **volumes** — um dos conceitos mais importantes para trabalhar com aplicações web e bases de dados em contentores.

---

## 1. Retomar o ambiente depois de desligar o computador

Antes de mexer em volumes propriamente ditos, é útil saber como **retomar o trabalho** depois de desligar o computador — já que os contentores criados em sessões anteriores não desaparecem, apenas ficam parados.

### Passo a passo

1. **Abrir o Docker Desktop** — o motor do Docker (Docker Engine) precisa de estar a correr antes de qualquer comando `docker` funcionar no CMD.

2. **Ver todos os contentores existentes, incluindo os parados**, no CMD:
   ```
   docker ps -a
   ```
   Este comando mostra todos os contentores já criados anteriormente (ex: `Nginx2`, `MySQL`), independentemente de estarem a correr ou não, junto com o seu estado (`Up` ou `Exited`).

3. **Reiniciar um contentor já existente**, sem precisar recriá-lo do zero:
   ```
   docker start Nginx2
   ```
   Ao contrário do `docker run` (que cria um contentor novo), o `docker start` volta a ligar um contentor que já existia, mantendo as mesmas configurações (nome, porta, volumes) definidas na primeira vez que foi criado.

4. **Confirmar que o contentor está a correr e em que porta**:
   ```
   docker ps
   ```
   Este comando mostra apenas os contentores atualmente ativos, incluindo o mapeamento de portas (ex: `0.0.0.0:9180->80/tcp`), confirmando que a aplicação já está acessível.

5. **Abrir o VS Code diretamente na pasta do projeto** (a mesma pasta usada como volume, ver ponto 3), através do comando:
   ```
   cd C:\docker\volumes\nginx
   code .
   ```
   O comando `code .` abre o VS Code já posicionado na pasta atual — útil para voltar a editar os ficheiros HTML que estão ligados ao contentor Nginx através do volume.

> Se houver mais do que um contentor a retomar (ex: também o MySQL, ver ponto 4), o mesmo comando `docker start nome-do-contentor` pode ser repetido para cada um.

---

## 2. Volumes — para que servem no Docker

Antes de aplicar volumes na prática, é importante entender o problema que eles resolvem.

### O problema: contentores são efémeros
Por padrão, tudo o que é escrito **dentro** do sistema de ficheiros de um contentor (ex: ficheiros criados, dados guardados numa base de dados) **vive e morre com esse contentor**. Se o contentor for removido (`docker rm`), todos esses dados desaparecem permanentemente — o que é um problema sério para qualquer aplicação que precise de **guardar informação de forma duradoura**, como um site com ficheiros próprios ou uma base de dados.

### O que um volume resolve
Um **volume** é um mecanismo do Docker que permite **ligar uma pasta de fora do contentor** (normalmente uma pasta no computador anfitrião/host) **a uma pasta específica dentro do contentor**. Isto tem dois efeitos importantes:

- **Persistência**: os dados guardados nessa pasta continuam a existir mesmo que o contentor seja parado, removido, ou recriado — porque, na prática, os dados nunca estiveram "só dentro" do contentor, estavam também na pasta do host.
- **Edição em tempo real**: qualquer alteração feita na pasta do host (ex: editar um ficheiro HTML no VS Code) fica **imediatamente refletida dentro do contentor**, sem precisar de reconstruir a imagem ou reiniciar o contentor — o que é extremamente útil durante o desenvolvimento.

### Tipos de volumes no Docker
- **Bind mounts** (o tipo usado nos exemplos deste ficheiro): liga diretamente uma **pasta específica do host**, através do seu caminho completo (ex: `C:\docker\volumes\nginx`), a uma pasta dentro do contentor. Dá controlo total sobre onde os ficheiros ficam guardados na máquina.
- **Named volumes**: geridos pelo próprio Docker, sem precisar de especificar um caminho exato no host — o Docker escolhe e gere a localização automaticamente. Mais indicados quando não é necessário aceder diretamente aos ficheiros a partir do sistema de ficheiros normal do host.
- **tmpfs mounts**: guardam dados apenas em memória, nunca em disco — usados para casos muito específicos onde persistência não é desejada.

Nos exemplos práticos deste ficheiro (Nginx e MySQL), o tipo usado é o **bind mount**, por ligar diretamente a uma pasta conhecida do projeto (`C:\docker\volumes\...`).

---

## 3. "Olá, Mundo" com Nginx usando um volume

Com o conceito de volume entendido, este é o exemplo prático: subir um site simples com Nginx, cujo conteúdo HTML fica ligado a uma pasta local através de um volume.

### O comando usado na aula

```
docker run --name Nginx2 -v /C/docker/volumes/nginx:/usr/share/nginx/html -p 9180:80 -d nginx:latest
```

> **Nota:** `/C/docker/volumes/nginx` foi o caminho específico usado na aula "Mexendo com arquivos/pastas e volumes" — corresponde à pasta `C:\docker\volumes\nginx` no Windows, escrita neste formato (`/C/...`) por ser o padrão de caminho usado em terminais estilo Git Bash/MinGW no Windows. Este caminho é apenas um exemplo do projeto desta aula, e deve ser ajustado para a pasta real de cada projeto.

### Explicação de cada parte do comando

- **`docker run`** — cria e inicia um novo contentor.
- **`--name Nginx2`** — dá o nome `Nginx2` ao contentor, facilitando geri-lo depois (ex: `docker start Nginx2`, como visto no ponto 1).
- **`-v /C/docker/volumes/nginx:/usr/share/nginx/html`** — cria o **volume (bind mount)**: liga a pasta local `C:\docker\volumes\nginx` à pasta `/usr/share/nginx/html` **dentro** do contentor, que é exatamente a pasta padrão onde o Nginx procura os ficheiros do site a servir.
- **`-p 9180:80`** — mapeia a porta 9180 do computador para a porta 80 do contentor (onde o Nginx está à escuta), ver `03_docker_introducao.md`, ponto 7.
- **`-d`** — corre o contentor em modo *detached* (em segundo plano), libertando o terminal para outros comandos, em vez de ficar "preso" a mostrar os logs do contentor.
- **`nginx:latest`** — a imagem oficial do Nginx (do Docker Hub), na sua versão mais recente disponível.

### Criar o ficheiro HTML no VS Code

1. Abrir o VS Code na pasta `C:\docker\volumes\nginx` (ver ponto 1).
2. Criar um novo ficheiro chamado **`index.html`** dentro dessa pasta.
3. Escrever um conteúdo simples de exemplo:
   ```html
   <!DOCTYPE html>
   <html lang="pt">
   <head>
     <meta charset="UTF-8">
     <title>Olá, Mundo</title>
   </head>
   <body>
     <h1>Olá, Mundo!</h1>
     <p>Este ficheiro está a ser servido pelo Nginx através de um volume Docker.</p>
   </body>
   </html>
   ```
4. Guardar o ficheiro.

### Ver o resultado
Com o contentor a correr, basta abrir o navegador em:
```
http://localhost:9180
```
A página `index.html` guardada localmente aparece imediatamente — e, graças ao volume, qualquer alteração feita e guardada neste ficheiro no VS Code fica visível ao atualizar a página no navegador, **sem precisar de reiniciar o contentor nem reconstruir nenhuma imagem**.

---

## 4. Conectar uma base de dados MySQL num contentor

Outro caso de uso muito comum para volumes é uma **base de dados** — mas antes de chegar à persistência dos dados (ver ponto 5), é preciso primeiro criar o contentor MySQL e ligar-lhe uma ferramenta de gestão (o MySQL Workbench).

### Criar o contentor MySQL

```
docker run --name MySQL -p 3306:3306 -e MYSQL_ROOT_PASSWORD=minhasenha -d mysql:latest
```

- **`--name MySQL`** — nome dado ao contentor.
- **`-p 3306:3306`** — mapeia a porta padrão do MySQL (3306) do computador para a mesma porta dentro do contentor.
- **`-e MYSQL_ROOT_PASSWORD=minhasenha`** — a flag **`-e`** define uma **variável de ambiente** dentro do contentor. `MYSQL_ROOT_PASSWORD` é uma variável específica exigida pela imagem oficial do MySQL, usada para definir a password do utilizador administrador (`root`) logo na primeira inicialização da base de dados.
- **`-d mysql:latest`** — corre em segundo plano, usando a imagem oficial mais recente do MySQL.

> Tal como recomendado em `04_docker_dockerfile_imagens.md` (ponto 4, sobre tageamento), o ideal em ambientes reais é substituir `latest` por uma versão específica (ex: `mysql:8.0`), para garantir consistência entre ambientes diferentes.

### Criar a ligação no MySQL Workbench

1. Abrir o **MySQL Workbench**.
2. Clicar no ícone **"+"** ao lado de "MySQL Connections" para criar uma nova ligação.
3. Preencher os campos:
   - **Connection Name**: um nome à escolha (ex: "Docker MySQL Local")
   - **Hostname**: `127.0.0.1` (ou `localhost`)
   - **Port**: `3306`
   - **Username**: `root`
4. Clicar em **"Test Connection"** — o Workbench vai pedir a password definida no comando (`minhasenha`).
5. Introduzir a password e confirmar. Se a ligação for bem-sucedida, aparece uma mensagem de sucesso.
6. Clicar em **"OK"** para guardar a ligação, e depois abri-la a partir da lista principal do Workbench para começar a trabalhar na base de dados.

Neste ponto, já é possível criar bases de dados, tabelas e correr queries SQL diretamente através do Workbench, mesmo a base de dados estando a correr dentro de um contentor Docker.

---

## 5. Manter os dados do MySQL seguros ao excluir e recriar o contentor

Sem nenhuma configuração adicional, o contentor MySQL criado no ponto 4 tem o mesmo problema referido no ponto 2: se for removido (`docker rm MySQL`), **todos os dados criados dentro dele desaparecem** — incluindo bases de dados e tabelas criadas através do Workbench.

### A solução: aplicar o mesmo conceito de volume já usado no Nginx

A imagem oficial do MySQL guarda todos os seus ficheiros de dados internamente na pasta `/var/lib/mysql`. Ao ligar essa pasta a um volume no host (da mesma forma que foi feito com a pasta `/usr/share/nginx/html` do Nginx, no ponto 3), os dados passam a existir **fora** do ciclo de vida do contentor.

### Comando atualizado, já com volume

```
docker run --name MySQL -p 3306:3306 -e MYSQL_ROOT_PASSWORD=minhasenha -v /C/docker/volumes/mysql:/var/lib/mysql -d mysql:latest
```

A única adição face ao comando do ponto 4 é:
```
-v /C/docker/volumes/mysql:/var/lib/mysql
```
Que liga a pasta local `C:\docker\volumes\mysql` (seguindo a mesma lógica de organização de pastas usada na aula, ver ponto 3) à pasta interna `/var/lib/mysql`, onde o MySQL guarda todos os seus ficheiros de dados reais.

### Testando que os dados sobrevivem

1. Com o contentor a correr (usando o comando acima, já com o volume), criar uma base de dados de teste através do MySQL Workbench.
2. Parar e remover completamente o contentor:
   ```
   docker stop MySQL
   docker rm MySQL
   ```
3. Recriar o contentor, usando **exatamente o mesmo comando** (com o mesmo caminho de volume `/C/docker/volumes/mysql:/var/lib/mysql`):
   ```
   docker run --name MySQL -p 3306:3306 -e MYSQL_ROOT_PASSWORD=minhasenha -v /C/docker/volumes/mysql:/var/lib/mysql -d mysql:latest
   ```
4. Abrir novamente a ligação no MySQL Workbench — a base de dados criada no passo 1 **continua lá**, mesmo o contentor tendo sido completamente destruído e recriado.

### Por que isto funciona
O contentor em si tornou-se, na prática, **descartável**: ele pode ser destruído, atualizado para uma nova versão da imagem, ou recriado à vontade, porque os dados reais nunca estiveram "presos" dentro dele — estavam sempre na pasta `C:\docker\volumes\mysql` do computador. Este é o princípio central que torna os volumes indispensáveis para qualquer contentor que lide com dados que precisam de sobreviver a reinícios, atualizações ou recriações do contentor.

---

## Resumo em uma frase

> Volumes no Docker resolvem o problema de os contentores serem efémeros, ligando uma pasta do computador a uma pasta dentro do contentor — permitindo tanto editar ficheiros em tempo real (como no exemplo do Nginx) como garantir que dados importantes, como os de uma base de dados MySQL, sobrevivem mesmo que o contentor seja destruído e recriado.

---

## Conceitos relacionados para estudar a seguir

- **`docker volume create` / `docker volume ls` / `docker volume inspect`** — comandos para gerir *named volumes*, a alternativa aos bind mounts usados neste ficheiro
- **Docker Compose** — como definir contentores, portas e volumes num único ficheiro de configuração, em vez de comandos `docker run` longos e repetidos manualmente
- **Backups de volumes** — como fazer cópias de segurança dos dados guardados em volumes Docker
- **Permissões de ficheiros entre host e contentor** — cuidados a ter quando o utilizador dentro do contentor não tem as mesmas permissões que o utilizador do host sobre a pasta partilhada