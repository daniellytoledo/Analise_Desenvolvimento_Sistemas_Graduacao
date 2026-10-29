
# Matrizes

As **matrizes** são estruturas de dados utilizadas para armazenar informações organizadas em linhas e colunas.

Enquanto os vetores permitem representar uma sequência unidimensional de valores, as matrizes permitem trabalhar com dados em duas dimensões.

São utilizadas em diferentes situações, como:

- Tabelas de notas.
- Tabuleiros de jogos.
- Mapas.
- Organização de dados.
- Processamento de imagens.
- Cálculos matemáticos.
- Representação de informações em linhas e colunas.

---

## 1. Matriz

### O que é uma matriz?

Uma **matriz** é uma estrutura de dados bidimensional composta por elementos organizados em linhas e colunas.

Cada elemento é identificado por dois índices:

1. Índice da linha.
2. Índice da coluna.

Nos algoritmos tradicionais, uma matriz geralmente possui dimensões definidas e elementos do mesmo tipo.

### Exemplo de matriz

Considere a seguinte matriz:

```text
+-----+-----+-----+
|  1  |  2  |  3  |
+-----+-----+-----+
|  4  |  5  |  6  |
+-----+-----+-----+
|  7  |  8  |  9  |
+-----+-----+-----+
```

Essa matriz possui:

- 3 linhas.
- 3 colunas.
- 9 elementos.

Portanto, é uma matriz de dimensão **3 × 3**.

### Vetor vs. Matriz

| Vetor | Matriz |
|---|---|
| Estrutura unidimensional | Estrutura bidimensional |
| Possui uma dimensão principal | Possui linhas e colunas |
| Utiliza um índice | Utiliza dois índices |
| Exemplo: lista de notas | Exemplo: tabela de notas |
| Acesso: `vetor[i]` | Acesso: `matriz[i][j]` |

### Representação dos índices

Em Python, os índices começam em zero.

Considere a matriz:

```text
           COLUNAS
          0   1   2
        +---+---+---+
Linha 0 | 1 | 2 | 3 |
        +---+---+---+
Linha 1 | 4 | 5 | 6 |
        +---+---+---+
Linha 2 | 7 | 8 | 9 |
        +---+---+---+
```

Para acessar o elemento `5`, utilizamos:

```python
matriz[1][1]
```

Isso acontece porque o elemento está na linha de índice `1` e na coluna de índice `1`.

---

## 2. Declaração de Matrizes

### Matrizes em pseudocódigo

Em pseudocódigo, uma matriz pode ser declarada indicando os intervalos de linhas e colunas.

**Exemplo:**

```text
notas: vetor[1..3, 1..2] de real
```

Nesse exemplo:

- A matriz possui 3 linhas.
- A matriz possui 2 colunas.
- Os elementos são do tipo real.

A sintaxe exata pode variar conforme o ambiente de pseudocódigo.

### Matrizes em Python

Em Python, podemos representar matrizes através de **listas de listas**.

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
```

Cada lista interna representa uma linha da matriz.

### Representação da estrutura

```text
matriz = [
    [1, 2, 3],  ← Linha 0
    [4, 5, 6],  ← Linha 1
    [7, 8, 9]   ← Linha 2
]
```

### Matriz com diferentes dimensões

Uma matriz não precisa ter a mesma quantidade de linhas e colunas.

**Exemplo — Matriz 2 × 3:**

```python
matriz = [
    [10, 20, 30],
    [40, 50, 60]
]
```

Representação:

```text
+-----+-----+-----+
| 10  | 20  | 30  |
+-----+-----+-----+
| 40  | 50  | 60  |
+-----+-----+-----+
```

Essa matriz possui 2 linhas e 3 colunas.

**Observação:** listas de listas em Python também podem ter linhas de tamanhos diferentes. Para representar uma matriz retangular convencional, utilizamos linhas com a mesma quantidade de elementos.

---

## 3. Acesso aos Elementos da Matriz

### Como acessar elementos?

Para acessar um elemento, utilizamos dois índices:

```python
matriz[linha][coluna]
```

### Exemplo

```python
matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

print(matriz[0][0])
print(matriz[1][2])
print(matriz[2][1])
```

**Saída:**

```text
10
60
80
```

### Explicação

| Acesso | Linha | Coluna | Valor |
|---|---|---|---|
| `matriz[0][0]` | 0 | 0 | 10 |
| `matriz[1][2]` | 1 | 2 | 60 |
| `matriz[2][1]` | 2 | 1 | 80 |

### Acesso a uma linha inteira

Podemos acessar uma linha utilizando apenas o primeiro índice.

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matriz[1])
```

**Saída:**

```text
[4, 5, 6]
```

### Índices negativos

Assim como nas listas, Python permite utilizar índices negativos.

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matriz[-1][-1])
```

**Saída:**

```text
9
```

O índice `-1` representa o último elemento da dimensão correspondente.

---

## 4. Alteração de Elementos

Os elementos de uma matriz representada por listas podem ser modificados através dos índices.

### Exemplo

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

matriz[1][1] = 50

print(matriz)
```

**Saída:**

```text
[[1, 2, 3], [4, 50, 6], [7, 8, 9]]
```

### Representação

**Antes:**

```text
1  2  3
4  5  6
7  8  9
```

**Depois:**

```text
1  2  3
4 50  6
7  8  9
```

O elemento da segunda linha e segunda coluna foi alterado de `5` para `50`.

---

## 5. Percorrendo Matrizes

Para percorrer uma matriz, normalmente utilizamos **estruturas de repetição aninhadas**.

Um laço percorre as linhas e outro percorre as colunas.

### Exemplo com for

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for linha in matriz:
    for elemento in linha:
        print(elemento)
```

**Saída:**

```text
1
2
3
4
5
6
7
8
9
```

### Como funciona?

1. O primeiro `for` percorre as linhas.
2. O segundo `for` percorre os elementos de cada linha.
3. A função `print()` apresenta os valores.

### Percorrendo através dos índices

Também podemos percorrer a matriz utilizando `range()` e `len()`.

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for i in range(len(matriz)):
    for j in range(len(matriz[i])):
        print(matriz[i][j])
```

Nesse exemplo:

- `i` representa o índice da linha.
- `j` representa o índice da coluna.
- `len(matriz)` representa a quantidade de linhas.
- `len(matriz[i])` representa a quantidade de elementos da linha atual.

### Apresentando a matriz formatada

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for linha in matriz:
    for elemento in linha:
        print(elemento, end=" ")
    print()
```

**Saída:**

```text
1 2 3
4 5 6
7 8 9
```

O argumento `end=" "` impede a quebra de linha após cada elemento, utilizando um espaço como separador.

O `print()` vazio realiza a quebra de linha após cada linha da matriz.

---

## 6. Criando Matrizes Dinamicamente

Em Python, podemos construir uma matriz através de estruturas de repetição.

### Exemplo — Matriz preenchida com zeros

```python
linhas = 3
colunas = 3

matriz = []

for i in range(linhas):
    linha = []

    for j in range(colunas):
        linha.append(0)

    matriz.append(linha)

print(matriz)
```

**Saída:**

```text
[[0, 0, 0], [0, 0, 0], [0, 0, 0]]
```

### Utilizando compreensão de listas

Podemos criar a mesma matriz de forma mais resumida.

```python
matriz = [
    [0 for j in range(3)]
    for i in range(3)
]

print(matriz)
```

### Cuidado ao criar matrizes

A seguinte expressão pode provocar comportamentos inesperados:

```python
matriz = [[0] * 3] * 3
```

Isso acontece porque as linhas internas fazem referência à mesma lista.

Se um elemento for alterado, a alteração poderá aparecer em várias linhas.

**Exemplo:**

```python
matriz = [[0] * 3] * 3

matriz[0][0] = 1

print(matriz)
```

**Saída:**

```text
[[1, 0, 0], [1, 0, 0], [1, 0, 0]]
```

### Forma recomendada

```python
matriz = [[0] * 3 for _ in range(3)]

matriz[0][0] = 1

print(matriz)
```

**Saída:**

```text
[[1, 0, 0], [0, 0, 0], [0, 0, 0]]
```

Cada linha é criada como uma lista independente.

---

## 7. Operações Básicas com Matrizes

As matrizes podem ser utilizadas para diferentes operações matemáticas e de processamento de dados.

### Soma de todos os elementos

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

soma = 0

for linha in matriz:
    for elemento in linha:
        soma += elemento

print(soma)
```

**Saída:**

```text
45
```

### Soma por linha

```python
matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

for linha in matriz:
    print(sum(linha))
```

**Saída:**

```text
60
150
240
```

### Soma por coluna

```python
matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

for coluna in range(3):
    soma = 0

    for linha in range(3):
        soma += matriz[linha][coluna]

    print(soma)
```

**Saída:**

```text
120
150
180
```

### Maior valor da matriz

```python
matriz = [
    [10, 25, 30],
    [45, 15, 60],
    [20, 80, 50]
]

maior = matriz[0][0]

for linha in matriz:
    for elemento in linha:
        if elemento > maior:
            maior = elemento

print(maior)
```

**Saída:**

```text
80
```

O exemplo pressupõe uma matriz não vazia.

### Média dos elementos

```python
matriz = [
    [8, 7],
    [9, 6],
    [10, 8]
]

soma = 0
quantidade = 0

for linha in matriz:
    for elemento in linha:
        soma += elemento
        quantidade += 1

media = soma / quantidade

print(media)
```

**Saída:**

```text
8.0
```

---

## 8. Diagonal Principal e Secundária

Em matrizes quadradas, podemos identificar duas diagonais importantes.

### Matriz quadrada

Uma **matriz quadrada** possui a mesma quantidade de linhas e colunas.

Exemplos:

- 2 × 2.
- 3 × 3.
- 4 × 4.

### Diagonal principal

A **diagonal principal** contém os elementos cujos índices de linha e coluna são iguais.

Numa matriz 3 × 3:

```text
+-----+-----+-----+
| [1] |  2  |  3  |
+-----+-----+-----+
|  4  | [5] |  6  |
+-----+-----+-----+
|  7  |  8  | [9] |
+-----+-----+-----+
```

Os elementos são:

```text
1, 5, 9
```

### Exemplo em Python

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for i in range(len(matriz)):
    print(matriz[i][i])
```

**Saída:**

```text
1
5
9
```

### Diagonal secundária

A **diagonal secundária** apresenta os elementos da extremidade superior direita até à inferior esquerda.

```text
+-----+-----+-----+
|  1  |  2  | [3] |
+-----+-----+-----+
|  4  | [5] |  6  |
+-----+-----+-----+
| [7] |  8  |  9  |
+-----+-----+-----+
```

Os elementos são:

```text
3, 5, 7
```

### Exemplo em Python

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

n = len(matriz)

for i in range(n):
    print(matriz[i][n - 1 - i])
```

**Saída:**

```text
3
5
7
```

### Comparação

| Diagonal | Regra |
|---|---|
| Principal | `linha == coluna` |
| Secundária | `coluna == n - 1 - linha` |

Essas regras consideram uma matriz quadrada de ordem `n`, com índices iniciados em zero.

---

## 9. Transposição de Matrizes

### O que é matriz transposta?

A **matriz transposta** é obtida através da troca das linhas pelas colunas de uma matriz.

Se a matriz original possui dimensão 2 × 3, a transposta terá dimensão 3 × 2.

### Exemplo

**Matriz original:**

```text
1 2 3
4 5 6
```

**Matriz transposta:**

```text
1 4
2 5
3 6
```

### Implementação em Python

```python
matriz = [
    [1, 2, 3],
    [4, 5, 6]
]

transposta = []

for coluna in range(len(matriz[0])):
    nova_linha = []

    for linha in range(len(matriz)):
        nova_linha.append(matriz[linha][coluna])

    transposta.append(nova_linha)

for linha in transposta:
    print(linha)
```

**Saída:**

```text
[1, 4]
[2, 5]
[3, 6]
```

Esse exemplo considera uma matriz retangular não vazia.

---

## 10. Matrizes em Pseudocódigo

No estudo de algoritmos, podemos utilizar matrizes para organizar informações através de linhas e colunas.

### Exemplo — Leitura de matriz

```text
Início

    matriz: vetor[1..2, 1..3] de inteiro

    Para i de 1 até 2 faça
        Para j de 1 até 3 faça
            Ler matriz[i, j]
        FimPara
    FimPara

    Para i de 1 até 2 faça
        Para j de 1 até 3 faça
            Escrever matriz[i, j]
        FimPara
    FimPara

Fim
```

Nesse algoritmo:

- O primeiro conjunto de laços recebe os valores.
- O segundo percorre e apresenta os elementos.
- `i` representa as linhas.
- `j` representa as colunas.

### Exemplo — Soma dos elementos

```text
Início

    matriz: vetor[1..3, 1..3] de inteiro
    soma: inteiro

    soma <- 0

    Para i de 1 até 3 faça
        Para j de 1 até 3 faça
            Ler matriz[i, j]
            soma <- soma + matriz[i, j]
        FimPara
    FimPara

    Escrever soma

Fim
```

Esse exemplo utiliza estruturas de repetição aninhadas e um acumulador para calcular a soma.

---

## 11. Aplicações das Matrizes no Desenvolvimento de Sistemas

As matrizes são utilizadas em diferentes situações da programação.

### Sistemas de Gestão

Podem representar tabelas de informações.

**Exemplo:**

Uma matriz de notas em que:

- Cada linha representa um aluno.
- Cada coluna representa uma avaliação.

```python
notas = [
    [8, 7, 9],
    [6, 8, 7],
    [9, 10, 8]
]
```

### Jogos Digitais

As matrizes podem representar tabuleiros.

**Exemplo — Jogo da Velha:**

```python
tabuleiro = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["", "", "X"]
]
```

Cada posição representa uma célula do tabuleiro.

### Processamento de Imagens

Imagens digitais podem ser representadas através de estruturas multidimensionais.

Numa imagem em tons de cinza, uma matriz pode representar os valores de intensidade dos pixels.

**Exemplo simplificado:**

```python
imagem = [
    [0, 50, 100],
    [150, 200, 255],
    [100, 50, 0]
]
```

### Mapas

As matrizes podem ser utilizadas para representar regiões e posições.

**Exemplo:**

```python
mapa = [
    [0, 0, 1],
    [1, 0, 1],
    [0, 0, 0]
]
```

Numa representação simplificada:

- `0` representa uma posição livre.
- `1` representa um obstáculo.

### Análise de Dados

As matrizes podem ser utilizadas para organizar:

- Informações numéricas.
- Tabelas.
- Dados estatísticos.
- Resultados de cálculos.
- Conjuntos de características.

Bibliotecas como NumPy disponibilizam estruturas especializadas para realizar operações eficientes com arrays multidimensionais.

---

## 12. Vantagens e Limitações das Matrizes

### Vantagens

- Organização dos dados em linhas e colunas.
- Acesso através de índices.
- Facilidade de percorrer informações.
- Integração com estruturas de repetição.
- Aplicação em cálculos e tabelas.
- Representação de problemas bidimensionais.

### Limitações

Em matrizes tradicionais:

- As dimensões podem precisar ser definidas antecipadamente.
- O acesso a índices inválidos provoca erros.
- A inserção ou remoção de elementos pode exigir reorganização.
- Grandes matrizes podem consumir muitos recursos.
- Operações complexas podem exigir algoritmos especializados.

### Vetores vs. Matrizes

| Característica | Vetor | Matriz |
|---|---|---|
| Dimensões | Uma | Duas |
| Organização | Sequência | Linhas e colunas |
| Índices | Um | Dois |
| Exemplo | Lista de preços | Tabela de preços |
| Acesso em Python | `vetor[i]` | `matriz[i][j]` |

---

## 13. Exemplo Integrado — Notas dos Alunos

Imagine um sistema que armazena as notas de três alunos, cada um com duas avaliações.

### Matriz de notas

```python
notas = [
    [8, 7],
    [6, 9],
    [10, 8]
]
```

### Objetivo

Calcular a média de cada aluno.

### Implementação em Python

```python
notas = [
    [8, 7],
    [6, 9],
    [10, 8]
]

for indice, notas_aluno in enumerate(notas):
    media = sum(notas_aluno) / len(notas_aluno)

    print(f"Aluno {indice + 1}: média {media:.2f}")
```

**Saída:**

```text
Aluno 1: média 7.50
Aluno 2: média 7.50
Aluno 3: média 9.00
```

### Conceitos utilizados

| Conceito | Aplicação |
|---|---|
| Matriz | Armazenamento das notas |
| Índices | Identificação dos alunos |
| Estrutura de repetição | Percorrer as linhas |
| `sum()` | Soma das notas |
| `len()` | Quantidade de avaliações |
| Variável | Armazenamento da média |
| Saída | Apresentação dos resultados |

Esse exemplo demonstra como as matrizes podem organizar informações e facilitar o processamento de dados relacionados.

---

## Resumo

As **matrizes** são estruturas bidimensionais utilizadas para armazenar dados organizados em linhas e colunas.

Cada elemento pode ser identificado através de dois índices, permitindo acessar e modificar valores.

As matrizes são frequentemente percorridas através de **laços de repetição aninhados**, como `for` e `while`.

Entre as principais operações estão:

- Acesso aos elementos.
- Modificação de valores.
- Soma de linhas e colunas.
- Cálculo de médias.
- Pesquisa de valores.
- Identificação de diagonais.
- Transposição de matrizes.

Em Python, as matrizes podem ser representadas através de **listas de listas**, enquanto bibliotecas especializadas, como NumPy, disponibilizam estruturas próprias para operações multidimensionais.

**Em síntese:** as matrizes permitem representar e manipular informações organizadas em duas dimensões, sendo fundamentais para algoritmos que trabalham com tabelas, jogos, imagens e dados numéricos.

---

## Referências para Estudo

- [Python — Estruturas de Dados](https://docs.python.org/3/tutorial/datastructures.html)
- [Python — Tipos de Sequência](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range)
- [NumPy — Documentação Oficial](https://numpy.org/doc/stable/)
- [Portugol Studio](https://univali-lite.github.io/Portugol-Studio/)
- [MDN — Arrays em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
