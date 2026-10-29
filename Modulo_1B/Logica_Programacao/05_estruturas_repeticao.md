
# Estruturas de Repetição

As **estruturas de repetição**, também conhecidas como **laços de repetição** ou *loops*, permitem executar um conjunto de instruções várias vezes, de acordo com uma condição ou uma sequência de valores.

Essas estruturas são fundamentais na lógica de programação porque evitam a repetição desnecessária de código e permitem automatizar tarefas.

São utilizadas em diferentes situações, como:

- Apresentar sequências numéricas.
- Processar listas de informações.
- Calcular somatórios.
- Percorrer coleções de dados.
- Validar entradas.
- Repetir operações enquanto uma condição for verdadeira.
- Processar registos de um sistema.

---

## 1. Estruturas de Repetição

### O que são estruturas de repetição?

Uma **estrutura de repetição** é um mecanismo que permite executar um bloco de instruções repetidamente.

A repetição pode depender de:

- Uma condição lógica.
- Um número definido de iterações.
- Uma sequência de elementos.
- Um evento que determina o encerramento do laço.

Cada execução do bloco é chamada de **iteração**.

### Exemplo sem repetição

Imagine um programa que precisa apresentar os números de 1 a 5.

Sem utilizar uma estrutura de repetição:

```python
print(1)
print(2)
print(3)
print(4)
print(5)
```

Embora funcione, essa abordagem torna-se pouco prática quando precisamos repetir muitas instruções.

### Exemplo com repetição

```python
for numero in range(1, 6):
    print(numero)
```

**Saída:**

```text
1
2
3
4
5
```

O resultado é o mesmo, mas o código é mais simples e reutilizável.

### Principais estruturas

| Estrutura | Funcionamento |
|---|---|
| `while` | Repete enquanto uma condição for verdadeira |
| `for` | Percorre uma sequência ou um intervalo de valores |
| `do...while` | Executa o bloco pelo menos uma vez e depois verifica a condição |

Em Python, existem as estruturas `while` e `for`. A linguagem não possui um comando `do...while` nativo, mas é possível reproduzir esse comportamento.

---

## 2. Estrutura Enquanto — while

### O que é while?

A estrutura **`while`** executa um bloco de instruções enquanto determinada condição for verdadeira.

A condição é avaliada antes de cada iteração.

Se inicialmente for falsa, o bloco não será executado.

### Sintaxe em pseudocódigo

```text
Enquanto condição faça
    instruções
FimEnquanto
```

### Exemplo em pseudocódigo

```text
Início

    contador <- 1

    Enquanto contador <= 5 faça
        Escrever contador
        contador <- contador + 1
    FimEnquanto

Fim
```

### Implementação em Python

```python
contador = 1

while contador <= 5:
    print(contador)
    contador += 1
```

**Saída:**

```text
1
2
3
4
5
```

### Funcionamento do algoritmo

1. A variável `contador` recebe o valor 1.
2. O programa verifica se `contador <= 5`.
3. Se a condição for verdadeira, apresenta o valor.
4. Incrementa o contador.
5. Repete a verificação.
6. Encerra o laço quando a condição for falsa.

### Fluxo de execução

```text
          INÍCIO
             |
             v
      contador = 1
             |
             v
       +-----------+
       | contador  |
       |   <= 5?   |
       +-----------+
        /         \
      SIM         NÃO
       |           |
       v           |
  Exibir valor     |
       |           |
       v           |
 Incrementar       |
   contador        |
       |           |
       +----->-----+
       |           |
       |           v
       |          FIM
       |
       +-- Retorna à condição
```

### Exemplo — Contagem regressiva

```python
contador = 5

while contador >= 1:
    print(contador)
    contador -= 1

print("Fim da contagem!")
```

**Saída:**

```text
5
4
3
2
1
Fim da contagem!
```

### Quando utilizar while?

O `while` é especialmente útil quando não sabemos antecipadamente quantas vezes o bloco precisará ser executado.

**Exemplos:**

- Repetir uma operação até receber uma entrada válida.
- Continuar um processo enquanto existirem elementos pendentes.
- Executar um menu até o usuário escolher sair.
- Acompanhar uma condição de funcionamento.

---

## 3. Estrutura Para — for

### O que é for?

A estrutura **`for`** é utilizada para percorrer elementos de uma sequência ou intervalo de valores.

Em muitas representações de pseudocódigo, o `Para` controla um contador com valor inicial, final e incremento.

Em Python, o `for` percorre os elementos de um objeto iterável.

### Sintaxe em pseudocódigo

```text
Para contador de inicio até fim faça
    instruções
FimPara
```

### Exemplo em pseudocódigo

```text
Início

    Para contador de 1 até 5 faça
        Escrever contador
    FimPara

Fim
```

### Implementação em Python

```python
for contador in range(1, 6):
    print(contador)
```

**Saída:**

```text
1
2
3
4
5
```

### A função range()

Em Python, a função `range()` permite gerar uma sequência de números inteiros para iteração.

Pode ser utilizada de três formas principais.

```python
range(fim)
range(inicio, fim)
range(inicio, fim, passo)
```

O valor final não é incluído.

### Exemplo — range com um argumento

```python
for numero in range(5):
    print(numero)
```

**Saída:**

```text
0
1
2
3
4
```

### Exemplo — range com início e fim

```python
for numero in range(2, 7):
    print(numero)
```

**Saída:**

```text
2
3
4
5
6
```

### Exemplo — range com passo

```python
for numero in range(0, 11, 2):
    print(numero)
```

**Saída:**

```text
0
2
4
6
8
10
```

O terceiro argumento determina o incremento.

### Exemplo — Contagem decrescente

```python
for numero in range(5, 0, -1):
    print(numero)
```

**Saída:**

```text
5
4
3
2
1
```

### Percorrendo strings

O `for` também permite percorrer os caracteres de uma string.

```python
palavra = "Python"

for letra in palavra:
    print(letra)
```

**Saída:**

```text
P
y
t
h
o
n
```

### Percorrendo listas

Uma lista permite armazenar diferentes valores.

```python
linguagens = ["Python", "Java", "JavaScript"]

for linguagem in linguagens:
    print(linguagem)
```

**Saída:**

```text
Python
Java
JavaScript
```

### Quando utilizar for?

O `for` é especialmente útil quando:

- Precisamos percorrer uma coleção.
- Conhecemos o intervalo de repetição.
- Desejamos processar elementos de uma lista.
- Precisamos executar uma operação um número definido de vezes.

---

## 4. Estrutura Repita — do...while

### O que é do...while?

A estrutura **`do...while`** é uma forma de repetição em que a condição é avaliada depois da execução do bloco.

Dessa forma, as instruções são executadas pelo menos uma vez.

### Estrutura conceitual

```text
Faça
    instruções
Enquanto condição
```

Em muitos materiais de pseudocódigo, também encontramos a estrutura `Repita...Até`, que repete o bloco até que uma condição de encerramento seja verdadeira.

### Exemplo em pseudocódigo

```text
Início

    contador <- 1

    Repita
        Escrever contador
        contador <- contador + 1
    Até contador > 5

Fim
```

**Saída:**

```text
1
2
3
4
5
```

### Diferença entre while e do...while

| while | do...while |
|---|---|
| Verifica a condição antes | Verifica a condição depois |
| Pode executar zero vezes | Executa pelo menos uma vez |
| Repete enquanto a condição for verdadeira | Repete enquanto a condição for verdadeira |
| Existe em Python | Não existe nativamente em Python |

### Simulando do...while em Python

Podemos utilizar `while True` e `break`.

```python
contador = 1

while True:
    print(contador)
    contador += 1

    if contador > 5:
        break
```

**Saída:**

```text
1
2
3
4
5
```

### Exemplo — Validação de entrada

```python
while True:
    idade = int(input("Digite uma idade válida: "))

    if idade >= 0:
        break

    print("Idade inválida.")

print(f"Idade informada: {idade}")
```

Nesse exemplo, o programa continua solicitando uma idade enquanto o valor informado for negativo.

A conversão pressupõe que o usuário digite um número inteiro válido; entradas não numéricas exigiriam tratamento adicional.

---

## 5. Contadores e Acumuladores

### O que é um contador?

Um **contador** é uma variável utilizada para acompanhar a quantidade de ocorrências ou iterações.

Normalmente é incrementado ou decrementado.

### Exemplo

```python
contador = 0

while contador < 5:
    contador += 1

print(contador)
```

**Saída:**

```text
5
```

### O que é um acumulador?

Um **acumulador** é uma variável utilizada para armazenar resultados parciais de operações sucessivas.

É comum em cálculos de somas e totais.

### Exemplo — Somatório

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

O programa realiza:

```text
1 + 2 + 3 + 4 + 5 = 15
```

### Diferença entre contador e acumulador

| Contador | Acumulador |
|---|---|
| Conta ocorrências | Acumula resultados |
| Geralmente incrementa uma unidade | Soma valores variáveis |
| Exemplo: número de alunos | Exemplo: soma das notas |

### Exemplo — Média de notas

```python
notas = [8, 7, 9, 6]

soma = 0

for nota in notas:
    soma += nota

media = soma / len(notas)

print(f"Média: {media:.2f}")
```

**Saída:**

```text
Média: 7.50
```

A função `len()` devolve a quantidade de elementos da lista.

---

## 6. Comandos break e continue

### Comando break

O comando **`break`** permite interromper imediatamente a execução do laço mais interno.

### Exemplo

```python
for numero in range(1, 11):

    if numero == 5:
        break

    print(numero)
```

**Saída:**

```text
1
2
3
4
```

Quando `numero` recebe o valor 5, o laço é encerrado.

### Comando continue

O comando **`continue`** interrompe a iteração atual e passa para a próxima iteração do laço.

### Exemplo

```python
for numero in range(1, 6):

    if numero == 3:
        continue

    print(numero)
```

**Saída:**

```text
1
2
4
5
```

O número 3 não é apresentado porque a instrução `continue` ignora o restante daquela iteração.

### Comparação

| Comando | Funcionamento |
|---|---|
| `break` | Encerra o laço |
| `continue` | Passa para a próxima iteração |

---

## 7. Laços de Repetição Aninhados

### O que são laços aninhados?

Os **laços aninhados** acontecem quando existe uma estrutura de repetição dentro de outra.

São utilizados quando precisamos percorrer diferentes dimensões ou combinações de valores.

### Exemplo

```python
for linha in range(1, 4):
    for coluna in range(1, 4):
        print(f"Linha {linha}, Coluna {coluna}")
```

**Saída:**

```text
Linha 1, Coluna 1
Linha 1, Coluna 2
Linha 1, Coluna 3
Linha 2, Coluna 1
Linha 2, Coluna 2
Linha 2, Coluna 3
Linha 3, Coluna 1
Linha 3, Coluna 2
Linha 3, Coluna 3
```

O laço externo controla as linhas, enquanto o laço interno percorre as colunas.

### Aplicações

Laços aninhados podem ser utilizados para:

- Percorrer matrizes.
- Gerar tabelas.
- Processar dados organizados em linhas e colunas.
- Comparar combinações.
- Trabalhar com estruturas multidimensionais.

### Atenção ao desempenho

Laços aninhados podem aumentar significativamente a quantidade de operações.

Por exemplo, dois laços que executam `n` iterações cada podem realizar aproximadamente `n²` combinações.

Por isso, é importante avaliar a necessidade de utilizar repetições aninhadas.

---

## 8. Laços Infinitos

### O que é um laço infinito?

Um **laço infinito** acontece quando a condição de encerramento nunca é atingida.

Pode ocorrer por erro lógico ou ser utilizado intencionalmente em programas que precisam permanecer ativos.

### Exemplo de laço infinito

```python
# Exemplo de laço infinito:

# contador = 1

# while contador <= 5:
#     print(contador)
```

Nesse caso, a variável `contador` nunca é atualizada, portanto a condição permanece verdadeira.

### Exemplo corrigido

```python
contador = 1

while contador <= 5:
    print(contador)
    contador += 1
```

### Uso intencional de while True

O `while True` pode ser utilizado quando o encerramento depende de uma condição verificada dentro do bloco.

```python
while True:
    comando = input("Digite 'sair' para encerrar: ")

    if comando == "sair":
        break

print("Programa encerrado.")
```

### Cuidados importantes

- Garantir uma condição de encerramento.
- Atualizar corretamente as variáveis de controlo.
- Evitar repetições desnecessárias.
- Verificar o comportamento de `break` e `continue`.
- Considerar o desempenho do algoritmo.

---

## 9. Comparação das Estruturas de Repetição

| Estrutura | Verificação | Execução mínima | Utilização |
|---|---|---|---|
| `while` | Antes do bloco | Zero vezes | Repetição condicionada |
| `for` | Percorre um iterável em Python | Zero vezes | Sequências e intervalos |
| `do...while` | Depois do bloco | Uma vez | Repetição com execução inicial obrigatória |

### Exemplo equivalente

Apresentar os números de 1 a 5.

**while:**

```python
numero = 1

while numero <= 5:
    print(numero)
    numero += 1
```

**for:**

```python
for numero in range(1, 6):
    print(numero)
```

**Simulação de do...while:**

```python
numero = 1

while True:
    print(numero)
    numero += 1

    if numero > 5:
        break
```

As três implementações produzem o mesmo resultado.

---

## 10. Aplicações no Desenvolvimento de Sistemas

As estruturas de repetição são utilizadas em diferentes áreas da programação.

### Sistemas Web

- Percorrer resultados de consultas.
- Apresentar listas de produtos.
- Processar informações recebidas.
- Gerar tabelas.
- Validar coleções de dados.

### Bancos de Dados

- Processar registos.
- Percorrer resultados.
- Realizar operações em lotes.
- Organizar informações.

### Aplicações de Gestão

- Calcular totais.
- Processar pagamentos.
- Atualizar informações.
- Percorrer listas de clientes.
- Gerar relatórios.

### Exemplo — Processamento de Pedidos

Imagine uma aplicação que precisa calcular o valor total de uma compra.

```python
precos = [25.0, 40.0, 15.0, 20.0]

total = 0

for preco in precos:
    total += preco

print(f"Total da compra: R$ {total:.2f}")
```

**Saída:**

```text
Total da compra: R$ 100.00
```

### Exemplo — Verificação de Alunos Aprovados

```python
notas = [8, 5, 9, 6, 7]

aprovados = 0

for nota in notas:
    if nota >= 7:
        aprovados += 1

print(f"Alunos aprovados: {aprovados}")
```

**Saída:**

```text
Alunos aprovados: 3
```

Esse exemplo combina:

- Lista.
- Estrutura de repetição.
- Estrutura de decisão.
- Contador.

---

## Resumo

As **estruturas de repetição** permitem executar blocos de instruções várias vezes, evitando duplicação de código e facilitando a automatização de processos.

O **`while`** repete instruções enquanto determinada condição for verdadeira.

O **`for`** permite percorrer sequências, intervalos e coleções de dados.

O **`do...while`** executa o bloco pelo menos uma vez antes de verificar a condição, podendo ser simulado em Python através de `while True` e `break`.

Os **contadores** acompanham a quantidade de ocorrências, enquanto os **acumuladores** armazenam resultados parciais.

Os comandos **`break`** e **`continue`** permitem controlar o comportamento dos laços.

**Em síntese:** as estruturas de repetição são essenciais para desenvolver algoritmos capazes de processar grandes quantidades de informações, realizar operações sucessivas e automatizar tarefas.

---

## Referências para Estudo

- [Python — Estruturas de Controle](https://docs.python.org/3/tutorial/controlflow.html)
- [Python — Função range()](https://docs.python.org/3/library/stdtypes.html#range)
- [Python — Instruções Compostas](https://docs.python.org/3/reference/compound_stmts.html)
- [Portugol Studio](https://univali-lite.github.io/Portugol-Studio/)
- [MDN — Loops e Iteração em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
