
# Vetores (Arrays)

Os **vetores**, também conhecidos como **arrays unidimensionais**, são estruturas utilizadas para armazenar vários valores de forma organizada.

Até aqui, utilizamos variáveis para armazenar informações individuais. Entretanto, existem situações em que precisamos trabalhar com diversos valores relacionados, como notas de alunos, preços de produtos ou idades de pessoas.

Os vetores permitem reunir esses valores numa única estrutura, facilitando o acesso, a organização e o processamento das informações.

---

## 1. Vetor / Array

### O que é um vetor?

Um **vetor** é uma estrutura de dados que permite armazenar vários elementos organizados numa sequência.

Cada elemento ocupa uma posição, identificada por um **índice**.

Nos algoritmos tradicionais, os vetores geralmente possuem elementos do mesmo tipo e uma quantidade previamente definida de posições.

### Exemplo sem vetor

Imagine que precisamos armazenar cinco notas de alunos.

Utilizando variáveis individuais:

```python
nota1 = 8
nota2 = 7
nota3 = 9
nota4 = 6
nota5 = 10
```

Essa abordagem funciona, mas torna-se pouco prática quando precisamos trabalhar com muitos valores.

### Exemplo com vetor

Podemos armazenar todas as notas numa mesma estrutura:

```python
notas = [8, 7, 9, 6, 10]
```

Nesse exemplo, a variável `notas` referencia uma lista contendo cinco elementos.

Em Python, as **listas (`list`)** são frequentemente utilizadas para representar vetores em exercícios introdutórios.

### Representação de um vetor

```text
Vetor: notas

+-----+-----+-----+-----+-----+
|  8  |  7  |  9  |  6  | 10  |
+-----+-----+-----+-----+-----+
   0     1     2     3     4
             ÍNDICES
```

Cada valor pode ser acessado através do seu índice.

### Elementos e índices

| Índice | Elemento |
|---|---|
| 0 | 8 |
| 1 | 7 |
| 2 | 9 |
| 3 | 6 |
| 4 | 10 |

Em Python, a contagem dos índices começa em `0`.

Isso significa que:

- O primeiro elemento está no índice `0`.
- O segundo está no índice `1`.
- O terceiro está no índice `2`.
- O último elemento de uma lista com cinco valores está no índice `4`.

**Importante:** a posição inicial dos índices pode variar conforme a linguagem ou o ambiente de pseudocódigo utilizado.

---

## 2. Declaração de Vetores

### Vetores em pseudocódigo

Em pseudocódigo, é comum declarar um vetor indicando o tipo e o intervalo de posições.

**Exemplo:**

```text
notas: vetor[1..5] de real
```

Nesse exemplo:

- `notas` representa o nome do vetor.
- `1..5` indica as posições.
- `real` representa o tipo dos elementos.

A sintaxe pode variar conforme a ferramenta utilizada.

### Vetores em Python

Em Python, podemos criar uma lista utilizando colchetes `[]`.

```python
notas = [8, 7, 9, 6, 10]
```

Também podemos armazenar textos:

```python
nomes = ["Ana", "Bruno", "Carlos", "Maria"]
```

Ou valores lógicos:

```python
situacoes = [True, False, True, True]
```

### Vetores tradicionais vs. listas Python

Embora sejam frequentemente estudados em conjunto, existem diferenças.

| Vetor tradicional | Lista Python |
|---|---|
| Normalmente possui tamanho definido | Possui tamanho dinâmico |
| Geralmente armazena um único tipo de dado | Pode armazenar valores de diferentes tipos |
| Possui acesso por índice | Possui acesso por índice |
| Representa uma sequência de elementos | Representa uma sequência mutável de objetos |

Em Python, também existem estruturas especializadas, como `array.array` e arrays da biblioteca NumPy.

Para o estudo inicial de lógica de programação, utilizaremos listas Python como representação prática dos vetores.

---

## 3. Acesso aos Elementos

### Como acessar um elemento?

Para acessar um elemento de um vetor, utilizamos o nome da estrutura seguido do índice entre colchetes.

### Exemplo

```python
numeros = [10, 20, 30, 40, 50]

print(numeros[0])
print(numeros[2])
print(numeros[4])
```

**Saída:**

```text
10
30
50
```

### Acesso por índice

```text
numeros = [10, 20, 30, 40, 50]

Índice 0 → 10
Índice 1 → 20
Índice 2 → 30
Índice 3 → 40
Índice 4 → 50
```

### Índices negativos em Python

Python permite utilizar índices negativos para acessar elementos a partir do final da lista.

```python
numeros = [10, 20, 30, 40, 50]

print(numeros[-1])
print(numeros[-2])
```

**Saída:**

```text
50
40
```

O índice `-1` representa o último elemento.

### Erro de índice

Quando tentamos acessar uma posição inexistente, ocorre um erro.

```python
numeros = [10, 20, 30]

# print(numeros[5])  # IndexError
```

A lista possui apenas três elementos, com índices de `0` a `2`.

---

## 4. Alteração dos Elementos

Os valores de um vetor mutável podem ser modificados através dos índices.

### Exemplo

```python
notas = [8, 7, 9, 6, 10]

notas[1] = 9

print(notas)
```

**Saída:**

```text
[8, 9, 9, 6, 10]
```

O elemento que estava na posição `1` foi alterado de `7` para `9`.

### Representação

**Antes:**

```text
+-----+-----+-----+-----+-----+
|  8  |  7  |  9  |  6  | 10  |
+-----+-----+-----+-----+-----+
```

**Depois:**

```text
+-----+-----+-----+-----+-----+
|  8  |  9  |  9  |  6  | 10  |
+-----+-----+-----+-----+-----+
```

---

## 5. Percorrendo Vetores

Uma das principais vantagens dos vetores é a possibilidade de percorrer os elementos através de estruturas de repetição.

### Utilizando for

```python
numeros = [10, 20, 30, 40, 50]

for numero in numeros:
    print(numero)
```

**Saída:**

```text
10
20
30
40
50
```

O `for` percorre cada elemento da lista.

### Utilizando índices

Também podemos percorrer os elementos através dos índices.

```python
numeros = [10, 20, 30, 40, 50]

for i in range(len(numeros)):
    print(numeros[i])
```

**Saída:**

```text
10
20
30
40
50
```

Nesse exemplo:

- `len(numeros)` retorna a quantidade de elementos.
- `range()` gera os índices.
- `numeros[i]` acessa cada elemento.

### Utilizando while

```python
numeros = [10, 20, 30, 40, 50]

i = 0

while i < len(numeros):
    print(numeros[i])
    i += 1
```

O resultado é equivalente ao dos exemplos anteriores.

### Comparação

| Estrutura | Característica |
|---|---|
| `for elemento in vetor` | Percorre diretamente os elementos |
| `for i in range(len(vetor))` | Percorre os índices |
| `while` | Percorre conforme uma condição |

### Utilizando enumerate()

A função `enumerate()` permite obter o índice e o elemento ao mesmo tempo.

```python
nomes = ["Ana", "Bruno", "Carlos"]

for indice, nome in enumerate(nomes):
    print(indice, nome)
```

**Saída:**

```text
0 Ana
1 Bruno
2 Carlos
```

---

## 6. Operações com Vetores

Os vetores podem ser utilizados para realizar cálculos e processar conjuntos de informações.

### Soma dos elementos

Imagine uma lista de números:

```python
numeros = [5, 10, 15, 20]
```

Podemos calcular a soma utilizando um acumulador.

```python
numeros = [5, 10, 15, 20]

soma = 0

for numero in numeros:
    soma += numero

print(soma)
```

**Saída:**

```text
50
```

### Utilizando sum()

Python disponibiliza a função `sum()` para somar elementos numéricos.

```python
numeros = [5, 10, 15, 20]

print(sum(numeros))
```

**Saída:**

```text
50
```

### Média dos elementos

A média aritmética pode ser calculada através da soma dividida pela quantidade de elementos.

```python
notas = [8, 7, 9, 6, 10]

media = sum(notas) / len(notas)

print(media)
```

**Saída:**

```text
8.0
```

É necessário verificar se a lista não está vazia antes de realizar a divisão.

### Maior e menor valor

Python disponibiliza as funções `max()` e `min()`.

```python
numeros = [12, 45, 7, 32, 18]

print(max(numeros))
print(min(numeros))
```

**Saída:**

```text
45
7
```

### Quantidade de elementos

A função `len()` retorna o número de elementos da lista.

```python
nomes = ["Ana", "Bruno", "Carlos"]

print(len(nomes))
```

**Saída:**

```text
3
```

### Resumo das operações

| Função | Finalidade |
|---|---|
| `len()` | Quantidade de elementos |
| `sum()` | Soma de valores |
| `max()` | Maior valor |
| `min()` | Menor valor |
| `sorted()` | Retorna uma nova lista ordenada |

---

## 7. Adicionando e Removendo Elementos

As listas Python permitem adicionar ou remover elementos dinamicamente.

### Adicionar elementos com append()

O método `append()` adiciona um elemento ao final da lista.

```python
nomes = ["Ana", "Bruno"]

nomes.append("Carlos")

print(nomes)
```

**Saída:**

```text
['Ana', 'Bruno', 'Carlos']
```

### Inserir elementos com insert()

O método `insert()` permite inserir um elemento numa posição específica.

```python
numeros = [10, 20, 40]

numeros.insert(2, 30)

print(numeros)
```

**Saída:**

```text
[10, 20, 30, 40]
```

### Remover elementos com remove()

O método `remove()` remove a primeira ocorrência do valor informado.

```python
nomes = ["Ana", "Bruno", "Carlos"]

nomes.remove("Bruno")

print(nomes)
```

**Saída:**

```text
['Ana', 'Carlos']
```

### Remover elementos com pop()

O método `pop()` remove e retorna um elemento da lista.

Sem um índice, remove o último elemento.

```python
numeros = [10, 20, 30]

numeros.pop()

print(numeros)
```

**Saída:**

```text
[10, 20]
```

### Comparação dos métodos

| Método | Finalidade |
|---|---|
| `append()` | Adicionar ao final |
| `insert()` | Inserir numa posição |
| `remove()` | Remover pela primeira ocorrência do valor |
| `pop()` | Remover e retornar por índice |
| `clear()` | Remover todos os elementos |

Essas operações são características das listas Python e não estão necessariamente disponíveis da mesma forma em vetores de tamanho fixo.

---

## 8. Pesquisa em Vetores

### O que é pesquisa?

A **pesquisa em vetores** consiste em verificar se determinado elemento está presente numa sequência.

### Pesquisa sequencial

A pesquisa sequencial percorre os elementos até encontrar o valor procurado ou chegar ao final da estrutura.

### Exemplo

```python
numeros = [10, 20, 30, 40, 50]

procurado = 30
encontrado = False

for numero in numeros:
    if numero == procurado:
        encontrado = True
        break

print(encontrado)
```

**Saída:**

```text
True
```

### Operador in

Em Python, podemos verificar a presença de um elemento utilizando `in`.

```python
nomes = ["Ana", "Bruno", "Carlos"]

print("Bruno" in nomes)
```

**Saída:**

```text
True
```

### Exemplo de pesquisa por nome

```python
nomes = ["Ana", "Bruno", "Carlos"]

nome_procurado = "Maria"

if nome_procurado in nomes:
    print("Nome encontrado")
else:
    print("Nome não encontrado")
```

**Saída:**

```text
Nome não encontrado
```

---

## 9. Ordenação de Vetores

A **ordenação** consiste em organizar os elementos de uma sequência segundo determinado critério.

Pode ser:

- Crescente.
- Decrescente.
- Alfabética.

### Ordenação crescente

```python
numeros = [30, 10, 50, 20, 40]

ordenados = sorted(numeros)

print(ordenados)
```

**Saída:**

```text
[10, 20, 30, 40, 50]
```

### Ordenação decrescente

```python
numeros = [30, 10, 50, 20, 40]

ordenados = sorted(numeros, reverse=True)

print(ordenados)
```

**Saída:**

```text
[50, 40, 30, 20, 10]
```

### Método sort()

O método `sort()` modifica a própria lista.

```python
numeros = [30, 10, 50, 20, 40]

numeros.sort()

print(numeros)
```

**Saída:**

```text
[10, 20, 30, 40, 50]
```

### sorted() vs. sort()

| `sorted()` | `sort()` |
|---|---|
| Retorna uma nova lista | Modifica a lista original |
| Aceita diferentes iteráveis | É um método de listas |
| Preserva a ordem da lista de origem | Reorganiza os elementos existentes |

---

## 10. Vetores e Estruturas de Repetição

Os vetores são frequentemente utilizados em conjunto com estruturas de repetição e decisão.

### Exemplo — Contagem de números pares

```python
numeros = [2, 5, 8, 11, 14, 17]

quantidade_pares = 0

for numero in numeros:
    if numero % 2 == 0:
        quantidade_pares += 1

print(f"Quantidade de pares: {quantidade_pares}")
```

**Saída:**

```text
Quantidade de pares: 3
```

### Conceitos utilizados

- Vetor.
- Estrutura de repetição.
- Estrutura condicional.
- Operador de módulo.
- Contador.

### Exemplo — Identificação de notas aprovadas

Considere uma lista de notas, com média mínima de aprovação igual a 7.

```python
notas = [8, 5, 9, 6, 7]

for nota in notas:
    if nota >= 7:
        print(f"Nota {nota}: Aprovado")
    else:
        print(f"Nota {nota}: Reprovado")
```

**Saída:**

```text
Nota 8: Aprovado
Nota 5: Reprovado
Nota 9: Aprovado
Nota 6: Reprovado
Nota 7: Aprovado
```

Esse exemplo demonstra como os vetores permitem processar vários valores através de uma única estrutura de repetição.

---

## 11. Vetores em Pseudocódigo

No estudo de algoritmos, os vetores podem ser declarados através de intervalos de posições.

A sintaxe varia conforme o ambiente utilizado.

### Exemplo — Armazenamento de notas

```text
Início

    notas: vetor[1..5] de real

    Para i de 1 até 5 faça
        Ler notas[i]
    FimPara

    Para i de 1 até 5 faça
        Escrever notas[i]
    FimPara

Fim
```

O primeiro laço recebe os valores e o segundo apresenta os elementos armazenados.

### Exemplo — Soma de valores

```text
Início

    numeros: vetor[1..5] de inteiro
    soma: inteiro

    soma <- 0

    Para i de 1 até 5 faça
        Ler numeros[i]
        soma <- soma + numeros[i]
    FimPara

    Escrever soma

Fim
```

Esse algoritmo utiliza um vetor para armazenar números e um acumulador para calcular a soma.

---

## 12. Aplicações dos Vetores no Desenvolvimento de Sistemas

Os vetores são utilizados em diferentes situações relacionadas com a manipulação de conjuntos de informações.

### Sistemas de Gestão

Podem representar:

- Listas de clientes.
- Produtos.
- Preços.
- Quantidades.
- Registos.
- Notas.

### Aplicações Web

Podem ser utilizados para:

- Apresentar listas de produtos.
- Percorrer resultados.
- Organizar menus.
- Armazenar dados temporários.
- Processar respostas de APIs.

### Análise de Dados

Os vetores podem contribuir para:

- Calcular médias.
- Identificar valores máximos e mínimos.
- Filtrar informações.
- Processar sequências numéricas.

### Exemplo — Carrinho de Compras

Imagine um sistema que possui uma lista com os preços dos produtos adicionados ao carrinho.

```python
precos = [49.90, 29.90, 15.00, 89.90]

total = sum(precos)

print(f"Total da compra: R$ {total:.2f}")
```

**Saída:**

```text
Total da compra: R$ 184.70
```

O exemplo utiliza uma lista para armazenar os preços e calcular o valor total.

---

## 13. Vantagens e Limitações dos Vetores

### Vantagens

- Organização de vários valores.
- Acesso através de índices.
- Facilidade de percorrer elementos.
- Redução da necessidade de variáveis individuais.
- Integração com estruturas de repetição.
- Aplicação em diferentes algoritmos.

### Limitações

Em vetores tradicionais de tamanho fixo:

- A quantidade de posições pode precisar ser definida antecipadamente.
- A inserção ou remoção pode exigir deslocamento de elementos.
- O acesso a posições inválidas provoca erros.
- Os elementos geralmente possuem o mesmo tipo.

Nas listas Python, algumas dessas limitações são reduzidas porque a estrutura possui tamanho dinâmico.

### Vetor vs. Variável Simples

| Variável simples | Vetor |
|---|---|
| Referencia um valor | Organiza vários elementos |
| Não precisa de índice para o acesso | Permite acesso por índice |
| Adequada para informações individuais | Adequado para coleções |
| Exemplo: `idade = 20` | Exemplo: `idades = [20, 25, 30]` |

---

## Resumo

Os **vetores (arrays)** são estruturas utilizadas para armazenar vários elementos organizados numa sequência.

Cada elemento pode ser acessado através de um **índice**, permitindo consultar ou modificar valores.

Os vetores são frequentemente utilizados com estruturas de repetição, como `for` e `while`, para percorrer e processar informações.

Entre as operações comuns estão:

- Acesso aos elementos.
- Alteração de valores.
- Pesquisa.
- Ordenação.
- Soma.
- Cálculo de médias.
- Identificação de valores máximos e mínimos.

Em Python, as **listas** são frequentemente utilizadas como representação de vetores no estudo introdutório de algoritmos.

**Em síntese:** os vetores permitem organizar e manipular conjuntos de dados, tornando os algoritmos mais eficientes e facilitando o desenvolvimento de programas que trabalham com múltiplas informações.

---

## Referências para Estudo

- [Python — Estruturas de Dados](https://docs.python.org/3/tutorial/datastructures.html)
- [Python — Tipos de Sequência](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range)
- [Python — Arrays](https://docs.python.org/3/library/array.html)
- [Portugol Studio](https://univali-lite.github.io/Portugol-Studio/)
- [MDN — Arrays em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
