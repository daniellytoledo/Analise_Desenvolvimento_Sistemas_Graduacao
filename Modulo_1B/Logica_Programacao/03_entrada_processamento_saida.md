
# Entrada, Processamento e Saída de Dados

Os conceitos de **entrada, processamento e saída de dados** representam uma das bases fundamentais da lógica de programação.

Um algoritmo pode receber informações, executar operações sobre elas e produzir resultados.

Esse modelo é frequentemente representado pela sequência:

**Entrada → Processamento → Saída**

Compreender essas etapas permite desenvolver algoritmos organizados, identificar quais informações são necessárias e determinar como os resultados serão apresentados.

---

## 1. Introdução, Conceitos e Entrada de Dados

### O que é entrada, processamento e saída?

Na lógica de programação, esses conceitos representam três etapas utilizadas para compreender o funcionamento de muitos algoritmos.

| Etapa | Descrição |
|---|---|
| Entrada | Recebimento das informações |
| Processamento | Execução das operações |
| Saída | Apresentação ou disponibilização dos resultados |

### Representação do funcionamento

```text
+-------------------+
|      ENTRADA      |
|                   |
| Dados recebidos   |
+-------------------+
          |
          v
+-------------------+
|   PROCESSAMENTO   |
|                   |
| Operações e       |
| cálculos          |
+-------------------+
          |
          v
+-------------------+
|       SAÍDA       |
|                   |
| Resultado         |
+-------------------+
```

### Exemplo do cotidiano

Imagine uma calculadora que realiza a soma de dois números.

**Entrada:**

```text
Número 1 = 10
Número 2 = 5
```

**Processamento:**

```text
Soma = 10 + 5
```

**Saída:**

```text
Resultado = 15
```

Esse exemplo demonstra como as três etapas estão relacionadas.

### O que são dados?

Os **dados** representam informações que podem ser armazenadas e manipuladas por um algoritmo.

Exemplos:

- Nomes.
- Idades.
- Preços.
- Quantidades.
- Notas.
- Datas.
- Valores lógicos.

Os dados podem possuir diferentes tipos, como inteiro, real, string e booleano.

### O que é entrada de dados?

A **entrada de dados** é a etapa em que um algoritmo recebe informações necessárias para executar uma tarefa.

Essas informações podem ser fornecidas pelo usuário ou obtidas através de outros sistemas.

### Principais fontes de entrada

| Fonte | Exemplo |
|---|---|
| Teclado | Digitação de um nome |
| Formulário | Cadastro num website |
| Arquivo | Leitura de dados CSV |
| Banco de dados | Consulta de informações armazenadas |
| API | Recebimento de dados de outro sistema |
| Sensor | Leitura de temperatura |

### Entrada de dados em pseudocódigo

Em pseudocódigo, é comum utilizar a instrução `Ler`.

**Exemplo:**

```text
Início

    nome: caractere

    Ler nome

Fim
```

A instrução indica que o algoritmo deve receber um valor e associá-lo à variável `nome`.

### Entrada de dados em Python

Em Python, podemos utilizar a função `input()` para receber informações digitadas pelo usuário.

```python
nome = input("Digite seu nome: ")
```

A função apresenta uma mensagem e recebe o texto informado.

### Exemplo completo

```python
nome = input("Digite seu nome: ")

print(f"Olá, {nome}!")
```

**Exemplo de execução:**

```text
Digite seu nome: Ana
Olá, Ana!
```

### A função input()

A função `input()` retorna o valor informado como uma string (`str`).

Isso significa que, mesmo quando o usuário digita um número, o valor inicialmente recebido é textual.

**Exemplo:**

```python
idade = input("Digite sua idade: ")

print(type(idade))
```

**Saída:**

```text
<class 'str'>
```

### Conversão de dados de entrada

Quando precisamos realizar cálculos, geralmente é necessário converter os valores recebidos para tipos numéricos.

As funções mais utilizadas são:

| Função | Finalidade |
|---|---|
| `int()` | Converter para inteiro |
| `float()` | Converter para número de ponto flutuante |
| `str()` | Converter para string |
| `bool()` | Converter para booleano |

### Entrada de números inteiros

```python
idade = int(input("Digite sua idade: "))

print(idade)
```

Nesse exemplo:

1. `input()` recebe o texto.
2. `int()` converte o texto para inteiro.
3. O resultado é atribuído à variável `idade`.

### Entrada de números reais

```python
altura = float(input("Digite sua altura: "))

print(altura)
```

**Exemplo de execução:**

```text
Digite sua altura: 1.65
1.65
```

Em Python, a representação de números decimais utiliza normalmente o ponto (`.`).

### Entrada de múltiplos dados

Um programa pode receber diferentes informações.

```python
nome = input("Digite seu nome: ")
idade = int(input("Digite sua idade: "))
altura = float(input("Digite sua altura: "))

print(nome)
print(idade)
print(altura)
```

Cada valor é armazenado numa variável.

### Validação de entrada

A **validação de dados** consiste em verificar se as informações recebidas estão de acordo com os requisitos esperados.

**Exemplo:**

Um sistema solicita uma idade.

Se o usuário informar um valor negativo, esse dado poderá ser considerado inválido para a finalidade do programa.

```python
idade = int(input("Digite sua idade: "))

if idade < 0:
    print("Idade inválida.")
else:
    print(f"Idade informada: {idade}")
```

### Erros de conversão

Quando um programa tenta converter um texto incompatível com o tipo solicitado, pode ocorrer um erro.

**Exemplo:**

```python
numero = int("abc")
```

A instrução provoca um `ValueError`, pois `"abc"` não representa um número inteiro válido.

### Importância da entrada de dados

A entrada de dados permite que os programas:

- Recebam informações dos usuários.
- Utilizem valores diferentes durante a execução.
- Interajam com outros sistemas.
- Consultem dados armazenados.
- Executem operações conforme as informações recebidas.

**Importante:** nem todo algoritmo precisa receber dados diretamente do usuário. As informações podem estar previamente definidas ou ser obtidas através de outras fontes.

---

## 2. Processamento e Saída de Dados

### O que é processamento de dados?

O **processamento de dados** corresponde ao conjunto de operações realizadas sobre as informações recebidas ou armazenadas pelo programa.

Essas operações permitem transformar os dados iniciais em resultados úteis.

O processamento pode envolver:

- Cálculos matemáticos.
- Comparações.
- Operações lógicas.
- Validação de informações.
- Organização de dados.
- Pesquisas.
- Transformações.
- Aplicação de regras de negócio.

### Exemplo de processamento

Imagine um programa que calcula a média de duas notas.

**Entrada:**

```text
Nota 1 = 8
Nota 2 = 6
```

**Processamento:**

```text
Média = (8 + 6) / 2
```

**Resultado:**

```text
Média = 7
```

### Processamento em pseudocódigo

```text
Início

    nota1: real
    nota2: real
    media: real

    Ler nota1
    Ler nota2

    media <- (nota1 + nota2) / 2

    Escrever media

Fim
```

A instrução:

```text
media <- (nota1 + nota2) / 2
```

representa o processamento dos dados.

### Processamento em Python

```python
nota1 = 8
nota2 = 6

media = (nota1 + nota2) / 2

print(media)
```

**Saída:**

```text
7.0
```

### Operações utilizadas no processamento

O processamento pode utilizar diferentes categorias de operadores.

| Categoria | Finalidade | Exemplo |
|---|---|---|
| Aritméticos | Realizar cálculos | `10 + 5` |
| Relacionais | Comparar valores | `idade >= 18` |
| Lógicos | Combinar condições | `a and b` |
| Atribuição | Associar valores | `resultado = 10` |

### Processamento aritmético

```python
preco = 50
quantidade = 3

total = preco * quantidade

print(total)
```

**Saída:**

```text
150
```

### Processamento com comparação

```python
idade = 20

maior_de_idade = idade >= 18

print(maior_de_idade)
```

**Saída:**

```text
True
```

### Processamento com estruturas condicionais

As estruturas condicionais permitem executar instruções diferentes conforme determinada condição.

**Exemplo:**

```python
nota = 8

if nota >= 7:
    resultado = "Aprovado"
else:
    resultado = "Reprovado"

print(resultado)
```

**Saída:**

```text
Aprovado
```

### Processamento com repetição

As estruturas de repetição permitem executar determinadas instruções várias vezes.

**Exemplo:**

```python
soma = 0

for numero in range(1, 6):
    soma += numero

print(soma)
```

**Saída:**

```text
15
```

Nesse exemplo, o programa calcula:

```text
1 + 2 + 3 + 4 + 5 = 15
```

---

### O que é saída de dados?

A **saída de dados** corresponde à apresentação ou disponibilização das informações produzidas pelo algoritmo.

A saída pode acontecer através de diferentes meios.

### Principais formas de saída

| Meio | Exemplo |
|---|---|
| Ecrã | Mensagem apresentada ao usuário |
| Arquivo | Relatório guardado em CSV |
| Banco de dados | Registo de informações |
| Impressora | Emissão de documento |
| API | Envio de dados para outro sistema |
| Interface gráfica | Apresentação de informações num website |

### Saída em pseudocódigo

Em pseudocódigo, podemos utilizar a instrução `Escrever`.

```text
Início

    Escrever "Olá, mundo!"

Fim
```

### Saída em Python

Em Python, utilizamos frequentemente a função `print()` para apresentar informações na consola.

```python
print("Olá, mundo!")
```

**Saída:**

```text
Olá, mundo!
```

### Saída de variáveis

```python
nome = "Ana"
idade = 20

print(nome)
print(idade)
```

**Saída:**

```text
Ana
20
```

### Saída com texto e variáveis

```python
nome = "Ana"
idade = 20

print("Nome:", nome)
print("Idade:", idade)
```

**Saída:**

```text
Nome: Ana
Idade: 20
```

### Formatação com f-strings

As **f-strings** permitem inserir valores diretamente em cadeias de caracteres.

```python
nome = "Ana"
idade = 20

print(f"{nome} tem {idade} anos.")
```

**Saída:**

```text
Ana tem 20 anos.
```

### Formatação de números decimais

Podemos utilizar especificadores de formatação para controlar a apresentação de valores.

**Exemplo:**

```python
preco = 49.9

print(f"Preço: R$ {preco:.2f}")
```

**Saída:**

```text
Preço: R$ 49.90
```

O especificador `:.2f` apresenta o valor com duas casas decimais.

### Diferença entre processamento e saída

| Processamento | Saída |
|---|---|
| Executa operações | Apresenta resultados |
| Pode utilizar cálculos e comparações | Pode utilizar mensagens e relatórios |
| Transforma informações | Disponibiliza informações |
| Exemplo: `total = preco * quantidade` | Exemplo: `print(total)` |

---

## 3. Exemplo Completo: Entrada, Processamento e Saída

Imagine um sistema que calcula o valor total de uma compra.

### Objetivo

Receber o preço de um produto e a quantidade adquirida, calcular o valor total e apresentar o resultado.

### Algoritmo em pseudocódigo

```text
Início

    preco: real
    quantidade: inteiro
    total: real

    Ler preco
    Ler quantidade

    total <- preco * quantidade

    Escrever total

Fim
```

### Implementação em Python

```python
preco = float(input("Digite o preço do produto: "))
quantidade = int(input("Digite a quantidade: "))

total = preco * quantidade

print(f"Valor total: R$ {total:.2f}")
```

### Exemplo de execução

```text
Digite o preço do produto: 25
Digite a quantidade: 4

Valor total: R$ 100.00
```

### Identificação das etapas

**Entrada:**

```python
preco = float(input("Digite o preço do produto: "))
quantidade = int(input("Digite a quantidade: "))
```

**Processamento:**

```python
total = preco * quantidade
```

**Saída:**

```python
print(f"Valor total: R$ {total:.2f}")
```

### Representação do funcionamento

```text
              INÍCIO
                 |
                 v
        RECEBER O PREÇO
                 |
                 v
      RECEBER A QUANTIDADE
                 |
                 v
      CALCULAR VALOR TOTAL
                 |
                 v
       APRESENTAR RESULTADO
                 |
                 v
                FIM
```

---

## 4. Exemplo Prático em Desenvolvimento de Sistemas

Os conceitos de entrada, processamento e saída estão presentes em praticamente todas as aplicações.

### Exemplo: Sistema de Login

Imagine um sistema que permite autenticar usuários.

**Entrada:**

- Nome de usuário.
- Senha.

**Processamento:**

- Verificação das credenciais.
- Consulta às informações de autenticação.
- Aplicação das regras de acesso.

**Saída:**

- Acesso autorizado.
- Mensagem de erro.

### Representação simplificada

```text
           ENTRADA
       Usuário e senha
              |
              v
        PROCESSAMENTO
    Verificar credenciais
              |
              v
            SAÍDA
   Autorizado ou recusado
```

Em sistemas reais, as credenciais devem ser tratadas através de mecanismos seguros de autenticação, sem armazenar senhas em texto simples.

### Exemplo: Sistema de Reservas

Imagine uma aplicação que permite reservar horários.

**Entrada:**

- Identificação do cliente.
- Data.
- Horário pretendido.

**Processamento:**

- Verificação da disponibilidade.
- Aplicação das regras de reserva.
- Registo da reserva, quando possível.

**Saída:**

- Confirmação.
- Mensagem de indisponibilidade.

### Exemplo: Sistema de Gestão Financeira

**Entrada:**

- Receitas.
- Despesas.

**Processamento:**

```text
Saldo = Receitas - Despesas
```

**Saída:**

- Saldo calculado.
- Relatórios financeiros.
- Indicadores.

### Comparação das aplicações

| Sistema | Entrada | Processamento | Saída |
|---|---|---|---|
| Calculadora | Números | Operação matemática | Resultado |
| Login | Credenciais | Validação | Estado do acesso |
| Reservas | Data e horário | Verificação de disponibilidade | Confirmação |
| Gestão financeira | Receitas e despesas | Cálculo do saldo | Relatório |
| Loja virtual | Produtos e quantidades | Cálculo do pedido | Valor total |

---

## 5. Importância da Organização dos Dados

Para que um algoritmo funcione corretamente, é importante definir:

1. Quais dados serão recebidos.
2. Quais tipos serão utilizados.
3. Quais operações serão realizadas.
4. Quais resultados deverão ser apresentados.

### Exemplo

Um programa precisa calcular a área de um retângulo.

| Elemento | Informação |
|---|---|
| Entrada | Base e altura |
| Tipo de dados | Real |
| Processamento | Multiplicação |
| Saída | Área calculada |

### Implementação

```python
base = float(input("Digite a base: "))
altura = float(input("Digite a altura: "))

area = base * altura

print(f"Área: {area:.2f}")
```

A organização das etapas facilita:

- A compreensão do algoritmo.
- A identificação de erros.
- A manutenção do código.
- A validação dos resultados.
- O desenvolvimento de soluções mais complexas.

---

## Resumo

A **entrada de dados** permite que um algoritmo receba informações provenientes do usuário ou de outras fontes.

O **processamento** corresponde às operações realizadas sobre os dados, incluindo cálculos, comparações e aplicação de regras.

A **saída de dados** representa a apresentação ou disponibilização dos resultados produzidos pelo programa.

Em pseudocódigo, as instruções `Ler` e `Escrever` são frequentemente utilizadas para representar entrada e saída.

Em Python, as funções `input()` e `print()` permitem realizar essas operações através da consola.

**Em síntese:** compreender o modelo **Entrada → Processamento → Saída** é fundamental para estruturar algoritmos, pois permite identificar quais informações são necessárias, como serão manipuladas e quais resultados deverão ser produzidos.

---

## Referências para Estudo

- [Python — Funções Integradas](https://docs.python.org/3/library/functions.html)
- [Python — Entrada e Saída](https://docs.python.org/3/tutorial/inputoutput.html)
- [Python — Tipos de Dados](https://docs.python.org/3/library/stdtypes.html)
- [Portugol Studio](https://univali-lite.github.io/Portugol-Studio/)
- [MDN — JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
