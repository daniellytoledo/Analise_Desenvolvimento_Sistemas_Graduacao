
# Procedimentos com Parâmetros

Os **procedimentos com parâmetros** são estruturas utilizadas para organizar algoritmos em blocos de instruções reutilizáveis, permitindo que diferentes informações sejam fornecidas durante a sua execução.

No estudo anterior, foram apresentados os procedimentos sem parâmetros, que executam tarefas sem receber argumentos diretamente na chamada.

Neste módulo, serão abordados:

1. Diferenças entre procedimentos sem e com parâmetros.
2. Procedimentos com parâmetros, suas características, funcionamento e aplicações.

---

## 1. Diferenças entre Procedimentos Sem e Com Parâmetros

### O que é um procedimento?

Um **procedimento** é um conjunto de instruções organizado para executar uma tarefa específica.

Os procedimentos fazem parte da modularização, técnica que permite dividir um programa em partes menores.

Entre as vantagens estão:

- Organização do código.
- Reutilização de instruções.
- Redução da duplicação.
- Facilidade de manutenção.
- Melhor legibilidade.
- Separação de responsabilidades.

Na lógica de programação tradicional, um procedimento não devolve diretamente um valor de retorno.

Em Python, os procedimentos são representados por funções que não possuem retorno explícito de valor.

### Procedimentos sem parâmetros

Um **procedimento sem parâmetros** executa uma tarefa sem receber argumentos na chamada.

**Exemplo em pseudocódigo:**

```text
Procedimento ExibirMensagem()

    Escrever "Bem-vindo ao sistema!"

FimProcedimento


Início

    ExibirMensagem()

Fim
```

**Exemplo em Python:**

```python
def exibir_mensagem():
    print("Bem-vindo ao sistema!")


exibir_mensagem()
```

**Saída:**

```text
Bem-vindo ao sistema!
```

Nesse exemplo, a mensagem está definida dentro do procedimento.

Sempre que o procedimento for chamado, executará as mesmas instruções.

### Procedimentos com parâmetros

Um **procedimento com parâmetros** recebe informações durante a chamada, permitindo executar a mesma lógica utilizando valores diferentes.

**Exemplo em pseudocódigo:**

```text
Procedimento ExibirMensagem(nome: caractere)

    Escrever "Bem-vindo, ", nome

FimProcedimento


Início

    ExibirMensagem("Ana")
    ExibirMensagem("Carlos")

Fim
```

**Exemplo em Python:**

```python
def exibir_mensagem(nome):
    print(f"Bem-vindo, {nome}!")


exibir_mensagem("Ana")
exibir_mensagem("Carlos")
```

**Saída:**

```text
Bem-vindo, Ana!
Bem-vindo, Carlos!
```

O procedimento recebe um nome diferente em cada chamada, sem necessidade de alterar a sua implementação.

### Comparação

| Sem parâmetros | Com parâmetros |
|---|---|
| Não recebe argumentos na chamada | Recebe argumentos |
| Utiliza valores internos ou de outras fontes | Pode utilizar valores fornecidos pelo código que o chama |
| Indicado para tarefas sem dados de entrada variáveis | Indicado para tarefas que precisam de diferentes valores |
| Menor flexibilidade na personalização | Maior flexibilidade |
| Exemplo: exibir um menu fixo | Exemplo: exibir uma mensagem personalizada |

### Quando utilizar cada tipo?

**Procedimentos sem parâmetros:**

- Apresentar um menu fixo.
- Exibir um título.
- Mostrar instruções padronizadas.
- Executar tarefas que não precisam de argumentos.

**Procedimentos com parâmetros:**

- Apresentar mensagens personalizadas.
- Exibir informações de diferentes usuários.
- Calcular e apresentar resultados.
- Aplicar regras a diferentes valores.
- Processar informações recebidas de outros módulos.

---

## 2. Procedimentos com Parâmetros

### O que são parâmetros?

Os **parâmetros** são variáveis declaradas na definição de um procedimento para receber informações durante a chamada.

Essas informações permitem que o procedimento execute as mesmas instruções utilizando diferentes valores.

### Sintaxe em pseudocódigo

```text
Procedimento NomeProcedimento(parametro: tipo)

    instruções

FimProcedimento
```

### Sintaxe em Python

```python
def nome_procedimento(parametro):
    instrucoes
```

Os parâmetros são declarados entre parênteses.

### Exemplo básico

```python
def apresentar_nome(nome):
    print(f"Nome: {nome}")


apresentar_nome("Maria")
```

**Saída:**

```text
Nome: Maria
```

Nesse exemplo:

- `apresentar_nome` é o nome do procedimento.
- `nome` é o parâmetro.
- `"Maria"` é o argumento fornecido na chamada.

---

## 3. Parâmetros vs. Argumentos

Embora estejam relacionados, os conceitos de parâmetro e argumento são diferentes.

### Parâmetro

É o identificador declarado na definição do procedimento.

```python
def apresentar_nome(nome):
    print(nome)
```

Nesse exemplo, `nome` é um parâmetro.

### Argumento

É o valor ou expressão fornecido durante a chamada.

```python
apresentar_nome("Ana")
```

Nesse exemplo, `"Ana"` é o argumento.

### Comparação

| Parâmetro | Argumento |
|---|---|
| Declarado na definição | Fornecido na chamada |
| Representa a informação que será recebida | Representa o valor enviado |
| Exemplo: `nome` | Exemplo: `"Ana"` |

### Representação

```text
       CHAMADA DO PROCEDIMENTO
       apresentar_nome("Ana")
                 |
                 | Argumento: "Ana"
                 v
       +----------------------+
       | PROCEDIMENTO        |
       |                      |
       | Parâmetro: nome     |
       | Valor recebido: Ana |
       +----------------------+
                 |
                 v
          Exibir "Ana"
```

---

## 4. Procedimentos com Múltiplos Parâmetros

Um procedimento pode receber mais de um parâmetro.

### Exemplo em pseudocódigo

```text
Procedimento ExibirPessoa(nome: caractere, idade: inteiro)

    Escrever "Nome: ", nome
    Escrever "Idade: ", idade

FimProcedimento


Início

    ExibirPessoa("Ana", 20)

Fim
```

### Exemplo em Python

```python
def exibir_pessoa(nome, idade):
    print(f"Nome: {nome}")
    print(f"Idade: {idade}")


exibir_pessoa("Ana", 20)
```

**Saída:**

```text
Nome: Ana
Idade: 20
```

### Passagem de diferentes valores

```python
def exibir_produto(nome, preco):
    print(f"Produto: {nome}")
    print(f"Preço: R$ {preco:.2f}")


exibir_produto("Teclado", 80)
exibir_produto("Mouse", 45)
```

**Saída:**

```text
Produto: Teclado
Preço: R$ 80.00
Produto: Mouse
Preço: R$ 45.00
```

O mesmo procedimento é reutilizado para apresentar informações de produtos diferentes.

---

## 5. Passagem de Parâmetros

A **passagem de parâmetros** corresponde ao mecanismo utilizado para fornecer informações a um procedimento.

Na lógica de programação, dois conceitos importantes são:

1. Passagem por valor.
2. Passagem por referência.

### Passagem por valor

Na **passagem por valor**, o procedimento recebe uma cópia do valor fornecido.

Alterações realizadas no parâmetro não modificam diretamente a variável original.

**Exemplo conceitual em pseudocódigo:**

```text
Procedimento AlterarNumero(numero: inteiro)

    numero <- 100

    Escrever numero

FimProcedimento


Início

    valor <- 10

    AlterarNumero(valor)

    Escrever valor

Fim
```

**Saída esperada com passagem por valor:**

```text
100
10
```

A alteração ocorre apenas no parâmetro local.

### Passagem por referência

Na **passagem por referência**, o procedimento pode acessar e modificar uma variável fornecida pelo código que o chamou.

**Exemplo conceitual em pseudocódigo:**

```text
Procedimento AlterarNumero(var numero: inteiro)

    numero <- 100

FimProcedimento


Início

    valor <- 10

    AlterarNumero(valor)

    Escrever valor

Fim
```

**Saída esperada com passagem por referência:**

```text
100
```

A palavra `var` é utilizada em algumas notações de pseudocódigo para indicar passagem por referência. A sintaxe depende da linguagem.

### Como funciona em Python?

Python utiliza um modelo de passagem de referências a objetos, também conhecido como *passagem por atribuição* (*pass by assignment*).

Isso significa que o parâmetro local passa a referenciar o mesmo objeto fornecido como argumento.

Entretanto, é importante distinguir:

- Reatribuir um parâmetro.
- Modificar um objeto mutável.

### Exemplo com número inteiro

```python
def alterar_numero(numero):
    numero = 100
    print("Dentro:", numero)


valor = 10

alterar_numero(valor)

print("Fora:", valor)
```

**Saída:**

```text
Dentro: 100
Fora: 10
```

A atribuição `numero = 100` altera apenas a referência local.

### Exemplo com lista

```python
def adicionar_numero(numeros):
    numeros.append(40)


lista = [10, 20, 30]

adicionar_numero(lista)

print(lista)
```

**Saída:**

```text
[10, 20, 30, 40]
```

Como as listas são mutáveis, a operação `append()` altera o objeto compartilhado.

**Importante:** Python não utiliza exatamente os modelos clássicos de passagem por valor ou por referência. O seu comportamento depende da associação dos nomes aos objetos e das operações realizadas sobre eles.

---

## 6. Procedimentos com Parâmetros e Operações Matemáticas

Os procedimentos podem receber valores numéricos para realizar cálculos.

### Exemplo — Soma de dois números

**Pseudocódigo:**

```text
Procedimento Somar(a: inteiro, b: inteiro)

    soma <- a + b

    Escrever soma

FimProcedimento


Início

    Somar(10, 5)

Fim
```

**Python:**

```python
def somar(a, b):
    resultado = a + b
    print(f"Soma: {resultado}")


somar(10, 5)
```

**Saída:**

```text
Soma: 15
```

### Exemplo — Calcular média

```python
def exibir_media(nota1, nota2):
    media = (nota1 + nota2) / 2

    print(f"Média: {media:.2f}")


exibir_media(8, 6)
exibir_media(9, 7)
```

**Saída:**

```text
Média: 7.00
Média: 8.00
```

Os valores utilizados no cálculo variam conforme os argumentos fornecidos.

---

## 7. Procedimentos com Estruturas de Decisão

Um procedimento pode receber parâmetros e utilizá-los em estruturas condicionais.

### Exemplo — Verificar idade

```python
def verificar_idade(idade):
    if idade >= 18:
        print("Maior de idade")
    else:
        print("Menor de idade")


verificar_idade(20)
verificar_idade(15)
```

**Saída:**

```text
Maior de idade
Menor de idade
```

### Exemplo — Verificar aprovação

```python
def verificar_aprovacao(nota):
    if nota >= 7:
        print("Aprovado")
    elif nota >= 5:
        print("Recuperação")
    else:
        print("Reprovado")


verificar_aprovacao(8)
verificar_aprovacao(6)
verificar_aprovacao(3)
```

**Saída:**

```text
Aprovado
Recuperação
Reprovado
```

Esse exemplo demonstra como combinar parâmetros e estruturas de decisão.

---

## 8. Procedimentos com Estruturas de Repetição

Os procedimentos também podem utilizar estruturas de repetição para processar diferentes valores.

### Exemplo — Contagem até determinado número

```python
def apresentar_contagem(limite):
    for numero in range(1, limite + 1):
        print(numero)


apresentar_contagem(5)
```

**Saída:**

```text
1
2
3
4
5
```

O parâmetro `limite` determina até que número a contagem será realizada.

### Exemplo — Percorrer uma lista

```python
def apresentar_produtos(produtos):
    for produto in produtos:
        print(produto)


lista_produtos = ["Teclado", "Mouse", "Monitor"]

apresentar_produtos(lista_produtos)
```

**Saída:**

```text
Teclado
Mouse
Monitor
```

O procedimento recebe uma lista e apresenta os elementos através do laço `for`.

---

## 9. Argumentos Posicionais e Nomeados em Python

Python permite fornecer argumentos de diferentes formas.

### Argumentos posicionais

Os valores são associados aos parâmetros conforme a ordem definida.

```python
def apresentar_pessoa(nome, idade):
    print(f"{nome} tem {idade} anos.")


apresentar_pessoa("Ana", 20)
```

**Saída:**

```text
Ana tem 20 anos.
```

### Argumentos nomeados

Os argumentos também podem ser fornecidos através dos nomes dos parâmetros.

```python
def apresentar_pessoa(nome, idade):
    print(f"{nome} tem {idade} anos.")


apresentar_pessoa(idade=20, nome="Ana")
```

**Saída:**

```text
Ana tem 20 anos.
```

### Comparação

| Posicionais | Nomeados |
|---|---|
| Dependem da ordem | Identificam o parâmetro pelo nome |
| Sintaxe mais curta | Podem melhorar a clareza |
| Exemplo: `funcao("Ana", 20)` | Exemplo: `funcao(nome="Ana", idade=20)` |

---

## 10. Parâmetros com Valores Padrão

Em Python, podemos definir valores padrão para determinados parâmetros.

Quando o argumento não é fornecido, o valor padrão é utilizado.

### Exemplo

```python
def apresentar_mensagem(nome="Visitante"):
    print(f"Bem-vindo, {nome}!")


apresentar_mensagem()
apresentar_mensagem("Ana")
```

**Saída:**

```text
Bem-vindo, Visitante!
Bem-vindo, Ana!
```

### Funcionamento

Na primeira chamada, o argumento não é informado, portanto o programa utiliza `"Visitante"`.

Na segunda chamada, o valor `"Ana"` substitui o valor padrão.

### Exemplo com desconto

```python
def exibir_preco_final(preco, desconto=0):
    valor_final = preco - (preco * desconto)

    print(f"Valor final: R$ {valor_final:.2f}")


exibir_preco_final(100)
exibir_preco_final(100, 0.10)
```

**Saída:**

```text
Valor final: R$ 100.00
Valor final: R$ 90.00
```

---

## 11. Procedimentos e Funções com Retorno

Na lógica de programação tradicional, existe uma distinção conceitual entre procedimentos e funções.

Um procedimento executa uma tarefa sem devolver diretamente um resultado.

Uma função pode devolver um valor através de uma instrução de retorno.

### Procedimento

```python
def exibir_soma(a, b):
    print(a + b)


exibir_soma(10, 5)
```

**Saída:**

```text
15
```

### Função com retorno

```python
def calcular_soma(a, b):
    return a + b


resultado = calcular_soma(10, 5)

print(resultado)
```

**Saída:**

```text
15
```

### Diferença

| Procedimento | Função com retorno |
|---|---|
| Executa uma tarefa | Calcula e devolve um resultado |
| Pode apresentar informações | Pode fornecer valores para outras operações |
| Não precisa de `return` com valor | Utiliza `return` para devolver um valor |
| Exemplo: exibir mensagem | Exemplo: calcular média |

Em Python, ambas são funções definidas com `def`, mas possuem diferentes finalidades.

---

## 12. Boas Práticas na Utilização de Parâmetros

### Utilizar nomes descritivos

Evite nomes que não indiquem a finalidade dos parâmetros.

**Menos descritivo:**

```python
def calcular(a, b):
    print(a * b)
```

**Mais descritivo:**

```python
def calcular_total(preco, quantidade):
    total = preco * quantidade

    print(total)
```

### Definir responsabilidades claras

Cada procedimento deve possuir uma finalidade bem definida.

**Exemplo:**

```python
def exibir_cabecalho(titulo):
    print("=" * 30)
    print(titulo)
    print("=" * 30)
```

Esse procedimento concentra-se na apresentação de um cabeçalho.

### Evitar parâmetros desnecessários

Os parâmetros devem representar informações necessárias à execução do procedimento.

Adicionar parâmetros sem necessidade pode dificultar a compreensão.

### Evitar alterações inesperadas em objetos mutáveis

Ao receber listas ou dicionários, é importante compreender que determinadas operações podem modificar os objetos originais.

Quando a alteração não for desejada, pode ser necessário criar uma cópia.

### Facilitar a reutilização

Um procedimento com parâmetros deve ser desenvolvido para funcionar com diferentes valores compatíveis com a sua finalidade.

Isso reduz a necessidade de criar procedimentos muito semelhantes.

---

## 13. Exemplo Integrado — Sistema de Gestão de Produtos

Imagine um sistema que precisa apresentar informações e calcular o valor total de diferentes produtos.

### Procedimentos

```python
def exibir_titulo(titulo):
    print("=" * 30)
    print(titulo)
    print("=" * 30)


def exibir_produto(nome, preco, quantidade):
    total = preco * quantidade

    print(f"Produto: {nome}")
    print(f"Preço unitário: R$ {preco:.2f}")
    print(f"Quantidade: {quantidade}")
    print(f"Total: R$ {total:.2f}")
    print("------------------------------")


def principal():
    exibir_titulo("GESTÃO DE PRODUTOS")

    exibir_produto("Teclado", 80, 2)
    exibir_produto("Mouse", 45, 3)


principal()
```

### Saída

```text
==============================
GESTÃO DE PRODUTOS
==============================
Produto: Teclado
Preço unitário: R$ 80.00
Quantidade: 2
Total: R$ 160.00
------------------------------
Produto: Mouse
Preço unitário: R$ 45.00
Quantidade: 3
Total: R$ 135.00
------------------------------
```

### Conceitos utilizados

| Conceito | Aplicação |
|---|---|
| Modularização | Divisão do programa em procedimentos |
| Parâmetros | Recebimento dos dados dos produtos |
| Argumentos | Valores fornecidos nas chamadas |
| Variáveis locais | Armazenamento do total calculado |
| Operadores | Multiplicação |
| Procedimento principal | Organização das chamadas |
| Saída | Apresentação das informações |

### Organização do programa

```text
              PRINCIPAL
                 |
                 v
           EXIBIR TÍTULO
                 |
                 v
           EXIBIR PRODUTO
                 |
                 v
           EXIBIR PRODUTO
                 |
                 v
                FIM
```

Esse exemplo demonstra como procedimentos com parâmetros permitem reutilizar a mesma lógica para diferentes produtos.

---

## Resumo

Os **procedimentos com parâmetros** permitem receber informações durante a chamada e executar tarefas utilizando diferentes valores.

A principal diferença em relação aos procedimentos sem parâmetros é a possibilidade de personalizar a execução através dos argumentos fornecidos.

Os **parâmetros** são declarados na definição do procedimento, enquanto os **argumentos** são os valores enviados durante a chamada.

Os procedimentos podem receber múltiplos parâmetros, utilizar estruturas de decisão, percorrer listas e realizar operações matemáticas.

Em Python, também existem argumentos posicionais, argumentos nomeados e parâmetros com valores padrão.

A utilização de procedimentos com parâmetros contribui para a modularização, a reutilização e a organização dos programas.

**Em síntese:** os procedimentos com parâmetros permitem criar blocos de código mais flexíveis, reutilizáveis e organizados, facilitando o desenvolvimento de algoritmos que precisam executar operações semelhantes com diferentes informações.

---

## Referências para Estudo

- [Python — Definição de Funções](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)
- [Python — Argumentos Padrão](https://docs.python.org/3/tutorial/controlflow.html#default-argument-values)
- [Python — Argumentos Nomeados](https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments)
- [Python — Modelo de Dados](https://docs.python.org/3/reference/datamodel.html)
- [Portugol Studio](https://univali-lite.github.io/Portugol-Studio/)
- [MDN — Funções em JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
