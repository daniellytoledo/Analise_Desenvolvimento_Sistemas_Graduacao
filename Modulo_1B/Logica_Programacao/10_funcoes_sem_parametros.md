
# Funções sem Parâmetros

A **modularização** é uma técnica de programação que permite dividir um algoritmo em partes menores, organizadas e reutilizáveis.

Uma das principais formas de aplicar a modularização é através das **funções**, que representam blocos de instruções responsáveis por executar determinadas operações e, quando necessário, devolver resultados.

As funções contribuem para melhorar a organização, a manutenção e a reutilização do código.

Neste módulo, serão abordados:

1. **Modularização por funções:** necessidade, importância e principais características.
2. **Funções sem parâmetros:** declaração, chamada, retorno de valores e exemplos de utilização.

---

## 1. Modularização por Funções

### O que é modularização?

A **modularização** consiste em dividir um programa em módulos menores, cada um responsável por determinada tarefa.

Essa abordagem permite organizar melhor as instruções e reduzir a repetição de código.

Em vez de desenvolver todas as operações dentro de um único bloco, podemos criar funções específicas para diferentes responsabilidades.

### Exemplo sem modularização

Imagine um programa que precisa calcular a área de dois quadrados.

```python
lado1 = 5
area1 = lado1 * lado1

print(f"Área do primeiro quadrado: {area1}")

lado2 = 8
area2 = lado2 * lado2

print(f"Área do segundo quadrado: {area2}")
```

Nesse exemplo, a lógica do cálculo aparece duas vezes.

Em programas maiores, essa repetição pode dificultar a manutenção.

### Exemplo com modularização

```python
def calcular_area(lado):
    return lado * lado


area1 = calcular_area(5)
area2 = calcular_area(8)

print(f"Área do primeiro quadrado: {area1}")
print(f"Área do segundo quadrado: {area2}")
```

**Saída:**

```text
Área do primeiro quadrado: 25
Área do segundo quadrado: 64
```

Agora, a operação foi organizada numa função reutilizável.

Esse exemplo utiliza um parâmetro para demonstrar a modularização. As funções sem parâmetros serão aprofundadas na segunda parte.

### Necessidade da modularização

A modularização torna-se especialmente importante quando os programas possuem:

- Muitas instruções.
- Operações repetidas.
- Diferentes responsabilidades.
- Regras de negócio complexas.
- Necessidade de manutenção.
- Necessidade de testes.

### Importância das funções

As funções contribuem para:

- **Reutilização:** executar a mesma lógica em diferentes partes do programa.
- **Organização:** separar responsabilidades.
- **Legibilidade:** facilitar a compreensão.
- **Manutenção:** concentrar alterações num único local.
- **Testabilidade:** permitir verificar partes específicas do programa.
- **Abstração:** utilizar uma operação sem precisar conhecer todos os detalhes da implementação.

### Representação da modularização

```text
              PROGRAMA PRINCIPAL
                      |
          +-----------+-----------+
          |           |           |
          v           v           v
      FUNÇÃO A    FUNÇÃO B    FUNÇÃO C
          |           |           |
          v           v           v
       TAREFA A    TAREFA B    TAREFA C
```

Cada função pode representar uma responsabilidade específica.

---

### O que é uma função?

Uma **função** é um bloco de instruções identificado por um nome, que pode ser chamado para executar determinada operação.

No estudo tradicional de algoritmos, as funções são frequentemente diferenciadas dos procedimentos pela capacidade de devolver um valor ao programa que realizou a chamada.

### Exemplo em pseudocódigo

```text
Função CalcularDobro(): inteiro

    numero <- 5

    Retorne numero * 2

FimFunção


Início

    resultado <- CalcularDobro()

    Escrever resultado

Fim
```

### Exemplo em Python

```python
def calcular_dobro():
    numero = 5
    return numero * 2


resultado = calcular_dobro()

print(resultado)
```

**Saída:**

```text
10
```

Nesse exemplo:

1. A função `calcular_dobro()` é definida.
2. A variável `numero` recebe o valor `5`.
3. O cálculo é realizado.
4. O comando `return` devolve o resultado.
5. O programa principal apresenta o valor.

---

### Diferença entre função e procedimento

Na lógica de programação tradicional, existe uma distinção conceitual entre funções e procedimentos.

| Procedimento | Função |
|---|---|
| Executa uma tarefa | Executa uma operação e pode produzir um resultado |
| Não devolve diretamente um valor | Pode devolver um valor |
| Frequentemente apresenta ou modifica informações | Frequentemente calcula e retorna informações |
| Pode possuir parâmetros | Pode possuir parâmetros |
| Exemplo: apresentar um menu | Exemplo: calcular uma média |

### Exemplo de procedimento

```python
def exibir_mensagem():
    print("Bem-vindo ao sistema!")


exibir_mensagem()
```

### Exemplo de função com retorno

```python
def obter_mensagem():
    return "Bem-vindo ao sistema!"


mensagem = obter_mensagem()

print(mensagem)
```

Ambos os exemplos apresentam a mesma mensagem, mas possuem comportamentos diferentes.

No primeiro, a mensagem é apresentada diretamente.

No segundo, a função devolve a mensagem para que o programa possa utilizá-la.

**Importante:** em Python, procedimentos e funções são definidos com `def`. Quando não existe um retorno explícito, a função devolve automaticamente `None`.

---

## 2. Funções sem Parâmetros

### O que são funções sem parâmetros?

Uma **função sem parâmetros** é um bloco de instruções que pode ser chamado sem receber argumentos.

Ela executa suas operações utilizando valores internos ou informações disponíveis no ambiente do programa.

No estudo tradicional de algoritmos, normalmente é utilizada para calcular ou obter um resultado e devolvê-lo através de uma instrução de retorno.

### Sintaxe em pseudocódigo

```text
Função NomeFuncao(): tipo

    instruções

    Retorne resultado

FimFunção
```

### Sintaxe em Python

```python
def nome_funcao():
    return resultado
```

Os parênteses vazios `()` indicam que a função não declara parâmetros.

### Exemplo básico

```python
def obter_numero():
    return 10


numero = obter_numero()

print(numero)
```

**Saída:**

```text
10
```

A função devolve o valor `10`, que é armazenado na variável `numero`.

---

## 3. Declaração e Chamada de Funções

### Declaração

A **declaração ou definição** corresponde à criação da função.

Em Python, utilizamos a palavra-chave `def`.

```python
def obter_saudacao():
    return "Olá, mundo!"
```

A definição não executa imediatamente o corpo da função.

### Chamada

A **chamada** solicita a execução da função.

```python
obter_saudacao()
```

Se o objetivo for apresentar o valor devolvido:

```python
print(obter_saudacao())
```

**Saída:**

```text
Olá, mundo!
```

### Armazenando o retorno

Também podemos armazenar o resultado numa variável.

```python
def obter_saudacao():
    return "Olá, mundo!"


mensagem = obter_saudacao()

print(mensagem)
```

### Fluxo de execução

```text
          INÍCIO
             |
             v
       PROGRAMA PRINCIPAL
             |
             v
        CHAMAR FUNÇÃO
             |
             v
      +----------------+
      |     FUNÇÃO     |
      |                |
      | Executar       |
      | instruções     |
      +----------------+
             |
             v
       RETORNAR VALOR
             |
             v
       PROGRAMA PRINCIPAL
             |
             v
            FIM
```

---

## 4. O Comando return

### O que é return?

O comando **`return`** permite encerrar a execução de uma função e devolver um resultado ao ponto em que ela foi chamada.

### Exemplo

```python
def calcular_soma():
    a = 10
    b = 20

    return a + b


resultado = calcular_soma()

print(resultado)
```

**Saída:**

```text
30
```

### Diferença entre print() e return

As funções `print()` e a instrução `return` possuem finalidades diferentes.

| `print()` | `return` |
|---|---|
| Apresenta informações na saída padrão | Devolve um valor ao código que chamou a função |
| Não encerra a função por si só | Encerra a execução da função |
| Utilizado para exibir resultados | Utilizado para disponibilizar resultados |
| Retorna `None` | Pode retornar diferentes tipos de dados |

### Exemplo com print()

```python
def calcular_soma():
    soma = 10 + 5
    print(soma)


resultado = calcular_soma()

print(resultado)
```

**Saída:**

```text
15
None
```

A função apresenta o valor `15`, mas não possui um retorno explícito.

Por isso, a variável `resultado` recebe `None`.

### Exemplo com return

```python
def calcular_soma():
    soma = 10 + 5
    return soma


resultado = calcular_soma()

print(resultado)
```

**Saída:**

```text
15
```

Nesse caso, a variável recebe o valor calculado.

---

## 5. Funções sem Parâmetros com Operações Matemáticas

### Exemplo 1 — Calcular o quadrado de um número

**Pseudocódigo:**

```text
Função CalcularQuadrado(): inteiro

    numero <- 5

    Retorne numero * numero

FimFunção


Início

    resultado <- CalcularQuadrado()

    Escrever resultado

Fim
```

**Python:**

```python
def calcular_quadrado():
    numero = 5
    return numero ** 2


resultado = calcular_quadrado()

print(resultado)
```

**Saída:**

```text
25
```

### Exemplo 2 — Calcular uma média

```python
def calcular_media():
    nota1 = 8
    nota2 = 6

    media = (nota1 + nota2) / 2

    return media


resultado = calcular_media()

print(f"Média: {resultado:.2f}")
```

**Saída:**

```text
Média: 7.00
```

### Exemplo 3 — Calcular a área de um retângulo

```python
def calcular_area():
    base = 10
    altura = 5

    area = base * altura

    return area


print(f"Área: {calcular_area()}")
```

**Saída:**

```text
Área: 50
```

Esses exemplos utilizam valores definidos dentro das próprias funções.

---

## 6. Funções sem Parâmetros com Entrada de Dados

Uma função sem parâmetros também pode receber informações diretamente do usuário através de `input()`.

Isso não significa que ela possui parâmetros, pois os valores não são fornecidos como argumentos na chamada.

### Exemplo — Calcular a idade futura

```python
def calcular_idade_futura():
    idade = int(input("Digite sua idade: "))

    return idade + 5


idade_futura = calcular_idade_futura()

print(f"Idade daqui a 5 anos: {idade_futura}")
```

**Exemplo de execução:**

```text
Digite sua idade: 20
Idade daqui a 5 anos: 25
```

### Funcionamento

1. A função é chamada sem argumentos.
2. O programa solicita a idade.
3. O valor é convertido para inteiro.
4. A função soma cinco anos.
5. O resultado é devolvido através de `return`.

### Exemplo — Calcular total de compra

```python
def calcular_total():
    preco = float(input("Digite o preço: "))
    quantidade = int(input("Digite a quantidade: "))

    return preco * quantidade


total = calcular_total()

print(f"Total: R$ {total:.2f}")
```

**Exemplo de execução:**

```text
Digite o preço: 25
Digite a quantidade: 4
Total: R$ 100.00
```

Esse exemplo demonstra como uma função sem parâmetros pode combinar entrada, processamento e retorno de dados.

---

## 7. Funções sem Parâmetros e Estruturas Condicionais

As funções podem utilizar estruturas de decisão para produzir diferentes resultados.

### Exemplo — Verificar aprovação

```python
def verificar_aprovacao():
    nota = 8

    if nota >= 7:
        return "Aprovado"
    else:
        return "Reprovado"


resultado = verificar_aprovacao()

print(resultado)
```

**Saída:**

```text
Aprovado
```

### Múltiplos retornos

Uma função pode possuir diferentes instruções `return`, dependendo das condições.

```python
def classificar_numero():
    numero = -5

    if numero > 0:
        return "Positivo"
    elif numero < 0:
        return "Negativo"
    else:
        return "Zero"


print(classificar_numero())
```

**Saída:**

```text
Negativo
```

Quando um `return` é executado, a função é encerrada.

Por isso, não é necessário utilizar `else` após todos os retornos, embora ele possa melhorar a clareza em determinados casos.

---

## 8. Funções sem Parâmetros com Estruturas de Repetição

Uma função pode utilizar laços para processar dados antes de devolver um resultado.

### Exemplo — Soma de números

```python
def calcular_soma():
    soma = 0

    for numero in range(1, 6):
        soma += numero

    return soma


print(calcular_soma())
```

**Saída:**

```text
15
```

### Exemplo — Contar números pares

```python
def contar_pares():
    numeros = [2, 5, 8, 11, 14]

    quantidade = 0

    for numero in numeros:
        if numero % 2 == 0:
            quantidade += 1

    return quantidade


print(f"Quantidade de pares: {contar_pares()}")
```

**Saída:**

```text
Quantidade de pares: 3
```

Esse exemplo utiliza:

- Função sem parâmetros.
- Lista.
- Estrutura de repetição.
- Estrutura condicional.
- Contador.
- Retorno de valor.

---

## 9. Tipos de Retorno das Funções

Uma função pode devolver diferentes tipos de dados.

### Retorno inteiro

```python
def obter_idade():
    return 20


print(obter_idade())
```

### Retorno real

```python
def obter_altura():
    return 1.65


print(obter_altura())
```

### Retorno string

```python
def obter_nome():
    return "Ana"


print(obter_nome())
```

### Retorno booleano

```python
def verificar_disponibilidade():
    return True


print(verificar_disponibilidade())
```

### Retorno de uma lista

```python
def obter_numeros():
    return [10, 20, 30]


print(obter_numeros())
```

### Resumo dos tipos

| Tipo | Exemplo de retorno |
|---|---|
| `int` | `10` |
| `float` | `1.65` |
| `str` | `"Ana"` |
| `bool` | `True` |
| `list` | `[10, 20, 30]` |

Em Python, uma função também pode devolver tuplas, dicionários, objetos e outros tipos de valores.

---

## 10. Variáveis Locais e Escopo

### O que é escopo?

O **escopo** representa a região do programa em que determinado identificador pode ser utilizado.

As variáveis criadas dentro de uma função geralmente pertencem ao seu escopo local.

### Exemplo

```python
def calcular_total():
    preco = 50
    quantidade = 2

    total = preco * quantidade

    return total


resultado = calcular_total()

print(resultado)
```

**Saída:**

```text
100
```

A variável `total` foi criada dentro da função.

O programa principal recebe o seu valor através de `return`.

### Acesso a variáveis locais

```python
def calcular_total():
    total = 100
    return total


resultado = calcular_total()

print(resultado)

# print(total)  # NameError
```

A variável local `total` não pode ser acessada diretamente fora da função.

### Importância do escopo

A utilização adequada de variáveis locais contribui para:

- Evitar conflitos entre nomes.
- Reduzir dependências.
- Melhorar a organização.
- Facilitar a manutenção.
- Tornar o comportamento das funções mais previsível.

---

## 11. Reutilização de Funções sem Parâmetros

Uma função pode ser chamada várias vezes durante a execução de um programa.

### Exemplo

```python
def obter_valor():
    return 50


valor1 = obter_valor()
valor2 = obter_valor()

total = valor1 + valor2

print(total)
```

**Saída:**

```text
100
```

### Limitação das funções sem parâmetros

Quando uma função utiliza valores fixos internamente, diferentes chamadas podem produzir sempre o mesmo resultado.

**Exemplo:**

```python
def calcular_dobro():
    numero = 10
    return numero * 2


print(calcular_dobro())
print(calcular_dobro())
```

**Saída:**

```text
20
20
```

Nesse caso, o valor utilizado no cálculo está definido dentro da própria função.

Para que o mesmo cálculo receba diferentes valores diretamente na chamada, podemos utilizar parâmetros.

### Comparação

| Função sem parâmetros | Função com parâmetros |
|---|---|
| Não recebe argumentos | Recebe argumentos |
| Pode utilizar valores internos | Pode utilizar valores fornecidos na chamada |
| Pode receber dados através de outras fontes | Recebe diretamente os argumentos definidos |
| Indicada para operações que não exigem argumentos | Indicada para operações personalizáveis |

---

## 12. Boas Práticas na Criação de Funções

### Utilizar nomes descritivos

É importante escolher nomes que indiquem a finalidade da função.

**Pouco descritivo:**

```python
def f():
    return 10 + 5
```

**Mais descritivo:**

```python
def calcular_soma():
    return 10 + 5
```

### Definir responsabilidades específicas

Cada função deve possuir uma responsabilidade clara.

Por exemplo:

- `calcular_media()`
- `obter_nome()`
- `verificar_aprovacao()`
- `calcular_total()`

### Evitar repetição de código

Quando determinada operação é utilizada em diferentes partes do programa, podemos organizá-la numa função.

### Utilizar return adequadamente

Quando o objetivo é disponibilizar um resultado para outras operações, é recomendado devolver o valor através de `return`, em vez de apenas apresentá-lo com `print()`.

### Evitar dependências desnecessárias

Funções que dependem excessivamente de variáveis globais podem ser mais difíceis de compreender, testar e reutilizar.

---

## 13. Exemplo Integrado — Sistema de Notas

Imagine um programa que utiliza funções sem parâmetros para calcular a média de um aluno e determinar a sua situação.

### Implementação em Python

```python
def calcular_media():
    nota1 = 8
    nota2 = 6

    return (nota1 + nota2) / 2


def verificar_aprovacao():
    media = calcular_media()

    if media >= 7:
        return "Aprovado"
    else:
        return "Reprovado"


def principal():
    media = calcular_media()
    situacao = verificar_aprovacao()

    print(f"Média: {media:.2f}")
    print(f"Situação: {situacao}")


principal()
```

**Saída:**

```text
Média: 7.00
Situação: Aprovado
```

### Organização do programa

```text
              PRINCIPAL
                 |
          +------+------+
          |             |
          v             v
     CALCULAR       VERIFICAR
       MÉDIA        APROVAÇÃO
          |             |
          |             v
          |        CALCULAR MÉDIA
          |             |
          +------+------+
                 |
                 v
        APRESENTAR RESULTADOS
```

### Conceitos utilizados

| Conceito | Aplicação |
|---|---|
| Modularização | Separação das operações |
| Funções | Organização dos cálculos e verificações |
| Ausência de parâmetros | Chamadas sem argumentos |
| `return` | Devolução dos resultados |
| Estrutura condicional | Verificação da aprovação |
| Variáveis locais | Armazenamento dos valores |
| Função principal | Organização do programa |

Nesse exemplo, a função `verificar_aprovacao()` utiliza o resultado devolvido por `calcular_media()`.

Essa organização demonstra como diferentes funções podem colaborar na execução de um programa.

**Observação:** como a média utiliza valores fixos, o programa realiza o mesmo cálculo em ambas as chamadas. Em sistemas maiores, uma solução com parâmetros ou com armazenamento do resultado pode evitar cálculos repetidos.

---

## Resumo

A **modularização por funções** consiste em dividir um programa em blocos menores, organizados e reutilizáveis.

As **funções** permitem executar operações e devolver resultados ao programa que realizou a chamada.

As **funções sem parâmetros** não recebem argumentos diretamente, podendo utilizar valores internos ou informações obtidas de outras fontes.

O comando **`return`** permite devolver um resultado e encerrar a execução da função.

Em Python, as funções são definidas através da palavra-chave `def` e podem devolver diferentes tipos de dados.

A modularização contribui para melhorar a organização, a reutilização, a manutenção e a legibilidade do código.

**Em síntese:** as funções sem parâmetros permitem organizar operações em módulos independentes, facilitando a construção de algoritmos estruturados e a reutilização de instruções.

---

## Referências para Estudo

- [Python — Definição de Funções](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
- [Python — Instrução return](https://docs.python.org/3/reference/simple_stmts.html#the-return-statement)
- [Python — Escopos e Namespaces](https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces)
- [Python — Documentação Oficial](https://docs.python.org/3/)
- [Portugol Studio](https://univali-lite.github.io/Portugol-Studio/)
- [MDN — Funções em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
