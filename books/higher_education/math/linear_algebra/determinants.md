# Determinantes 

# Permutações

Inicialmente, temos que a função <b>determinante</b> associa um número real à uma matriz $A \in M_{n \times n} (\mathbb{R})$. A esse número damos o nome de <b>determinante de $A$</b>. Para verificarmos a lei de associação desta função, isto é, como podemos calcular o determinante de uma matriz, precisamos primeiro explorar um pouco sobre <a href="/books/high_school/math/probability_statistics/permutations.html">permutações</a> e <a href="/books/higher_education/math/calculus_two/sequences.html">sequências</a>.

Podemos definir uma <b>permutação</b> de um conjunto (finito) como um rearranjo de seus elementos. A estas permutações podemos associar noções de <b>paridade</b> e <b>sinal</b>: uma permutação é <b>par</b> quando o número de trocas necessárias para se retornar à configuração inicial for par, com uma configuração dita <b>ímpar</b> caso contrário. 

Uma permutação possui um dado <b>sinal</b> a depender da sua paridade, com um valor numérico sendo atribuído a ela através da <b>função sinal</b>, denotada por $\text{sgn}$ ou $\sigma$. Dessa forma, uma permutação possui sinal $+1$ caso seja par, e $-1$ caso contrário. Sendo $p = \{j_1, j_2, ..., j_n\}$ uma permutação, denotamos seu sinal como a aplicação desta função sinal: 

$$
\sigma(p) = \text{sgn}(p) = \pm 1
$$

# Produtos elementares 

Considere agora uma matriz quadrada $A$ de ordem $n$. Dizemos que um <b>produto elementar</b> de $A$ é um produto onde cada fator pertence a uma linha ou a uma coluna única, isto é, não pertencem ao mesmo produto elementar elementos da mesma linha ou coluna — só há um elemento da linha 1, um elemento da linha 2, um elemento da coluna 1 e assim por diante. 

Uma observação interessante que pode ser feita é que como cada produto deve ter $n$ fatores, com cada um sendo de uma linha diferente, é possível escrever um produto elementar da forma 

$$
a_{1j_1}a_{2j_2}a_{3j_3} ... a_{nj_n} 
$$

com cada $j_1, ..., j_n$ indicando um índice distinto das colunas. Como mantermos a ordem das "coordenadas" das linhas dos elementos, podemos permutar as n "coordenadas" das colunas. Disso é visível que temos ao total $n!$ permutações possíveis e, portanto, uma matriz $n \times n$ possui $n!$ produtos elementares distintos. 

Quando associamos ao produto elementar o sinal da permutação, realizamos um <b>produto elementar com sinal</b>. Essa definição será importante para a definição da função determinante. 

# Determinantes

Dada uma matriz quadrada $A$ de ordem $n$ e o conjunto $\triangle$ formado por todas as permutações de $(1, 2, ..., n)$, definimos por <b>determinante</b> (e denotamos por $\det$) a função que associa a matriz $A$ a um número real $\det{A}$. Esse número é obtido pelo somatório de todos os produtos elementares de $A$ com sinal, isto é, 

$$
\det{A} = \sum_{p \in \triangle} \sigma(p) \cdot (a_{1j_1}a_{2j_2}a_{3j_3} ... a_{nj_n})
$$

Alternativamente, podemos denotar $\det{A}$ como $|A|$. 

## Matrizes 2x2 

O caso mais simples para o cálculo de um determinante é o de matrizes quadradas de ordem 2. Por exemplo, considere a matriz 

$$
\begin{pmatrix}
    a_{11} & a_{12} \\ 
    a_{21} & a_{22}
\end{pmatrix}
$$

Seus produtos elementares são da forma 

$$
a_{1j_1}a{2j_2}
$$

Como cada elemento vemd e uma linha diferente, temos $2! = 2$ permutações distintas nas colunas. Logo, temos os produtos elementares 

$$
\begin{array}{c}
    a_{11}a_{22} \\ 
    a_{12}a_{21}
\end{array}
$$

Note que no primeiro produto a permutação das colunas associada a ele é $(1, 2)$ e, no segundo produto, a permutação associada é $(2, 1)$. Dessa forma, o primeiro produto é par com sinal +1 e o segundo é ímpar, com sinal -1.

Portanto, pela definição de determinante, temos que 

$$
\det{A} = a_{11}a_{22} - a_{12} - a{21}
$$

# Propriedades

<aside>

A função determinante possui algumas propriedades notáveis. São elas: 

1. O determinante de uma matriz é igual ao determinante de sua transposta, isto é, $\det{A} = \det{A^t}$;
2. O determinante de uma matriz diagonal, ou de uma matriz triangular, é o produto dos elementos de sua diagonal principal;
3. Caso uma matriz possua uma linha ou coluna nula, seu determinante é nulo;
4. Caso uma matriz possua linhas ou colunas proporcionais, seu determinante é nulo;
5. Permutar duas linhas de uma matriz $A$ inverte o sinal de seu determinante;
6. Multiplicar uma única linha por um escalar $\alpha$ multiplica seu determinante por $\alpha$;
7. Somar um múltiplo não nulo de uma linha em outra não altera o determinante da matriz;
8. Uma matriz quadrada possui inversa se, e somente se, seu determinante for não-nulo;
9.  O determinante da matriz elementar que representa a permuta duas linhas é igual a -1;
10. O determinante da matriz elementar que representa o produto de uma linha por um escalar $\alpha \neq 0$ é igual a $\alpha$;
11. O determinante da matriz elementar que representa a operação de somar um múltiplo não nulo de uma linha em outra é igual a 1;
12. O determinante do produto de duas matrizes quaisquer é o produto entre seus determinantes.

</aside>

Vale mencionar que a <b>transposta</b> de uma matriz, conforme mencionada na primeira propriedade, é a matriz produzida ao escrever as linhas de uma matriz como as colunas de outra (ou as colunas de uma matriz como as linhas de outra). Por exemplo, a transposta da matriz

$$
\begin{pmatrix}
    2 & 3 \\ 
    1 & 2
\end{pmatrix}
$$

é a matriz

$$
\begin{pmatrix}
    2 & 1 \\ 
    3 & 2 \\
\end{pmatrix}
$$

Além disso, a oitava propriedade é possívelmente uma das mais importantes da Álgebra Linear, interligando a resolução de sistemas lineares (e se estes possuem solução única) com o estudo de suas matrizes correspondentes.

De fato, ao escalonarmos um <a href="/books/higher_education/math/linear_algebra/lsystems_matrices.html" target="_blank">sistema linear de Cramer</a> com $n$ equações, vemos que sua matriz de coeficientes é a matriz identidade, $I_n$. Como esta matriz é escalonada por meio da multiplicação da matriz de coeficientes original por diversas matrizes elementares, sabemos que o determinante da matriz original é não-nulo, pois os determinantes das matrizes elementares são sempre não-nulos e a matriz identidade possui $\det{I_n} = 1$.

Além disso, da ligação entre sistemas lineares e determinantes é imprescindível discorrer um pouco sobre a regra de Cramer, e para falar sobre a regra de Cramer, é necessário explorar os conceitos de cofator e matriz adjunta. 

É crucial saber como podemos calcular determinantes de matrizes de qualquer ordem $n$.

# Calculando determinantes

## Cofatores

Dada uma matriz $A \in M_{n \times n} (\mathbb{R})$ temos que seu determinante pode ser calculado por meio do somatório 

$$
\det{A} = \sum_{i = 1}^n a_{ij} A_{ij}
$$

com cada $A_{ij}$ sendo igual ao determinante da matriz de ordem $n - 1$ criada ao eliminarmos a i-ésima linha e a j-ésima coluna de $A$, multiplicado por $(-1)^{i+j}$. Algebricamente, podemos escrever 

$$
A_{ij} = |M_{ij}| \cdot (-1)^{i+j}
$$

com $M_{ij}$ sendo a <b>matriz menor</b> obtida de $A$ ao eliminar a linha $i$ e a coluna $j$. 

Como podemos utilizar esta forma de cálculo de determinante para qualquer $n ge 1$, a <b>expansão por cofatores</b>, é um excelente caminho para o cálculo de determinantes de forma algorítmica. 

## Redução a uma matriz triangular

Pelas propriedades (2), (9), (10), (11) e (12) é possível ainda definir um outro método para o cálculo de determinantes de uma matriz. Caso possamos reduzir uma matriz $A$ por meio de operações elementares a uma matriz $A'$ diagonal, saberemos que 

$$
\begin{align*}
    \det{A'} &= \det{(E_1E_2 ... E_nA)} \\ 
    \det{A'} &= \det{E_1}\det{E_2}...\det{E_n}\det{A} \\ 
\end{align*}
$$

e, portanto, 

$$
\det{A} = \dfrac{\det{A'}}{\det{E_1}\det{E_2}...\det{E_n}}
$$

como $\det{A'}$ é facilmente calculado e os determinantes das matrizes elementares são conhecidos, basta efetuar a razão para encontrar $\det{A}$. 

# Matrizes adjuntas

Dada uma matriz $A \in M_{n \times n} (\mathbb{R})$ de entradas $(a_{ij})$, com o cofator do elemento $(a_{ij})$ denotado por $(A_{ij})$, temos que a matriz 

$$
\text{Adj}(A) = 
\begin{pmatrix}
    A_{11} & A_{21} & ... & A_{n1} \\ 
    A_{12} & A_{22} & ... & A_{n2} \\ 
    ... & ... & ... & ... \\ 
    A_{1n} & A_{2n} & ... & A_{nn}
\end{pmatrix}
$$

isto é, a transposta da matriz dos cofatores de $A$, é chamada <b>adjunta de $A$</b>. 
Curiosamente, temos que vale sempre a igualdade 

$$
A(\text{Adj}(A)) = (\text{Adj}(A))A = (\det{A}) \cdot I_n
$$

que, consequentemente, motiva o teorema a seguir. 

<aside>

<b>Teorema</b> — Uma matriz quadrada $A$ de determinante não-nulo é inversível e sua inversa é dada por 

$$
A^{-1} = \dfrac{1}{\det{A}}\text{Adj}(A)
$$

</aside>

## Regra de Sarrus

Para matrizes quadradas de ordem 3, uma forma rápida para o cálculo de seus determinantes existem, a <b>regra de Sarrus</b>, nomeada em homenagem ao matemático francês Pierre Fréderic Sarrus. 

Para calcular o determinante de uma matriz quadrada de ordem 3, da forma

$$
\begin{pmatrix}
    a & b & c \\ 
    d & e & f \\ 
    g & h & i
\end{pmatrix}
$$

podemos escrever as duas primeiras colunas logo após a última, formando uma matriz com cinco colunas

$$
\begin{pmatrix}
    a & b & c & a & b\\ 
    d & e & f & d & e\\ 
    g & h & i & g & h
\end{pmatrix}
$$

Agora, para encontrar o determinante, é preciso somar os produtos das diagonais que estão no mesmo "sentido" da diagonal principal e subtrair os produtos das diagonais que estão no sentido "oposto". 

Assim, o determinante da matriz é 

$$
\left|
\begin{matrix}
    a & b & c \\ 
    d & e & f \\ 
    g & h & i
\end{matrix}
\right|
= aei + bfg + cdh - gec - hfa - idb
$$

esse determinismo permite uma rápida implementação em algoritmo, evitando todos os trabalhos com cofatores, por exemplo. 

# Regra de Cramer

Agorta, munidos com esses novos conceitos, podemos nos debruçar sobre a Regra de Cramer. Foi visto anteriormente que um sistema de Cramer, em sua forma matricial $AX = B$ possui como solução a matriz $X = A^{-1}B$. Levando em conta o resultado do teorema anterior, podemos concluir que 

$$
X = \left(\dfrac{1}{\det{A}} \text{Adj}(A)\right)B
$$

# Referências

1. CALLIOLI, Carlos Alberto; DOMINGUES, Hygino H.; COSTA, Roberto da. <i>Álgebra Linear e Aplicações</i>. 4ª edição revisada. São Paulo: Atual, 1983.
2. Website da iniciação científica de Alfredo Vitorino, IMECC-UNICAMP, <i>Álgebra Linear e Aplicações</i>. (<a href="https://www.ime.unicamp.br/~marcia/AlgebraLinear/index.html" target="_blank">Acesse aqui</a>)