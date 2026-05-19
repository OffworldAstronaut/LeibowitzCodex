# Sistemas lineares e Matrizes 

# Sistemas lineares 

---

Para compreendermos os conceitos sobre os <b>sistemas lineares</b>, é necessário primeiro nos debruçar sobre a noção de <b>equação linear</b>. 

Dizemos que uma equação da forma 

$$
\alpha_1x_1 + \alpha_2x_2 + ... + \alpha_nx_n = \beta, \text{com }\alpha, \beta \in \mathbb{R}, \text{e } n \ge 1
$$

é uma <b>equação linear</b>. Além disso, se a n-upla $(b_1, b_2, ..., b_n) \in \mathbb{R}^N$ satisfazer a relação ao fizermos $x_1 = b_1$, $x_2 = b_2$, ..., $x_n = b_n$, dizemos que esta n-upla é uma <b>solução</b> da equação linear.

Definimos um sistema de equações $S$ de $m$ equações e $n$ incógnitas, com $m, n \ge 1$, como um conjunto de equações lineares da forma 

$$
S: 
\begin{cases}
    \alpha_{11}x_1 + ... + \alpha_{1n}x_n &= \beta_1 \\\\ 
    \alpha_{21}x_1 + ... + \alpha_{2n}x_n &= \beta_2 \\\\ 
    \dots \\\\
    \alpha_{m1}x_1 + ... + \alpha_{mn}x_n &= \beta_m \\\\ 
\end{cases}
$$

Se $m = n$, podemos dizer que $S$ é um <i>sistema linear de ordem $n$</i>. Além disso, uma n-upla $(b_1, b_2, ..., b_n) \in \mathbb{R}^N$ é <b>solução</b> do sistema $S$ se esta é solução de cada uma das $m$ equações simultaneamente. 

## Sistemas equivalentes

Dizemos que dois sistemas $S_1$ e $S_2$ são <b>equivalentes</b> (denotado por $S_1 \sim S_2$) se seus conjuntos de soluções são iguais. De fato, um sistema $S_2$ equivalente a um sistema $S_1$ pode ser obtido por meio de uma sequência de aplicações das seguintes operações: 

<aside>

1. Permutar duas equações de $S_1$
2. Multiplicar uma das equações de $S_1$ por $\lambda \in \mathbb{R}, \lambda \neq 0$
3. Somar uma das equações deste sistema a outra equação deste mesmo sistema

</aside>

Estas operações são chamadas <b>operações elementares</b>. 

Dados três sistemas lineares $S_1, S_2, S_3$, valem ainda as propriedades:

<aside>

1. $S_1 \sim S_1$ (reflexividade) 
2. $S_1 \sim S_2 \implies S_2 \sim S_1$ (simetria) 
3. $S_1 \sim S_2$ e $S_2 \sim S_3 \implies S_1 \sim S_3$ (transitividade)

</aside>

Por estas operações podemos simplificar sistemas complexos para outros mais simples e de mais fácil resolução.

# Matrizes 

--- 

Matrizes (reais) são objetos matemáticos formados por uma dupla sequência de números reais arranjados em uma tabela de $m$ linhas e $n$ colunas. Estas matrizes são assim chamadas "matrizes $m \times n$" (lê-se "m por n"), sendo escritas como uma tabela entre parênteses ou colchetes. 

$$
A_1 = 
\begin{pmatrix}
    a & b & c \\
    d & e & f \\ 
    g & h & i
\end{pmatrix}
$$

Numa matriz, cada número é denominado <b>elemento</b>, <b>termo</b> ou <b>entrada</b> da matriz, podendo ser representado de forma genérica por, por exemplo, $a_{ij}$ — o termo $a$ da linha $i$ e coluna $j$. Esta representação dos elementos de forma genérica estende-se para matrizes também. Por exemplo, podemos escrever $A = (a_{ij})_{m \times n}$ se quisermos representar uma matriz $A$ com $m$ linhas e $n$ colunas. 

$$
A_2 = 
\begin{pmatrix}
    a_{11} & a_{12} & a_{13} \\ 
    a_{21} & a_{22} & a_{23} \\ 
    a_{31} & a_{32} & a_{33}
\end{pmatrix}
$$

É importante mencionar que $(a_{ij})$ é denominado <b>termo geral</b> da matriz $A$, além de que as matrizes são comumente denotadas por letras maiúsculas do nosso alfabeto latino. Por fim, é interessante ainda ressaltar que matrizes com mesmo número de linhas e colunas são chamadas <b>quadradas</b> e, caso contrário, <b>retangulares</b>. Particularmente, quando $m = 1$ ou $n = 1$, recebem a denominação de <b>matrizes linha</b> e <b>matrizes coluna</b>, respectivamente. 

Note ainda que podemos tratar matrizes $1 \times 1$ como números reais. Na notação matemática usual, representamos o conjunto das matrizes reais $m \times n$ por $M_{m \times n}(\mathbb{R})$. Como exemplo, podemos afirmar que

$$
A = 
\begin{pmatrix}
    1 & 2 \\ 
    3 & 4 
\end{pmatrix}
\in M_{2 \times 2} (\mathbb{R})
$$

## Operações com matrizes 

Dentro do conjunto $M_{m \times n} (\mathbb{R})$ estão definidas algumas operações, sendo elas <b>adição</b>, <b>multiplicação por um número real (escalar)</b> e a <b>multiplicação entre duas matrizes</b>. Antes de descrevermos essas operações, pode ser interessante destacar que duas matrizes $A$ e $B$ são iguais se, e somente se, seus elementos são iguais. 

### Adição

Sejam $A$ e $B$ matrizes $m \times n$. Denotamos a matriz soma por $C = A + B$, valendo, por definição:

$$
A + B = 
\begin{pmatrix}
    a_{11} + b_{11} & a_{12} + b_{12} & ... & a_{1n} + b_{1n} \\ 
    a_{21} + b_{21} & a_{22} + b_{22} & ... & a_{1n} + b_{1n} \\ 
    ... & ... & ... & ... \\ 
    a_{m1} + b_{m1} & a_{m2} + b_{m2} & ... & a_{mn} + b_{mn}
\end{pmatrix}
$$

Ou seja, para somar duas matrizes, basta somar elemento a elemento. 

Para essa operação valem algumas propriedades. Considere $A, B, C \in M_{m \times n} (\mathbb{R})$.

1. $A + (B+C) = (A+B)+C$ (propriedade associativa)
2. $A + B = B + A$ (propriedade comutativa)
3. $\exists O \in M_{m \times n} | A + O = A, \forall A$ (existência de elemento neutro)
4. $\exists (-A) | A+(-A)=O, \forall A$ (existência do elemento oposto para qualquer matriz)

### Produto por escalar 

Dada uma matriz $A_{m \times n}$ e um $\lambda \in \mathbb{R}$, o produto entre $A$ e $\lambda$ é denotado por $\lambda \cdot A$ ou ainda $\lambda A$ e é definido por

$$
\lambda A =
\lambda 
\begin{pmatrix}
    a_{11} & a_{12} & ... & a_{1n} \\ 
    a_{21} & a_{22} & ... & a_{2n} \\ 
    ... & ... & ... & ... \\ 
    a_{m1} & a_{m2} & ... & a_{mn}
\end{pmatrix}
= 
\begin{pmatrix}
    \lambda a_{11} & \lambda a_{12} & ... & \lambda a_{1n} \\ 
    \lambda a_{21} & \lambda a_{22} & ... & \lambda a_{2n} \\ 
    ... & ... & ... & ... \\ 
    \lambda a_{m1} & \lambda a_{m2} & ... & \lambda a_{mn}
\end{pmatrix}
$$

Isto é, o produto entre uma matriz e um número real $\lambda$ retorna uma matriz em que os elementos da matriz original foram multiplicados por $\lambda$. 

Para esta operação valem as seguintes propriedades: 

1. $(\alpha \beta) A = \alpha(\beta A)$ 
2. $(\alpha + \beta)A = \alpha A + \beta A$ 
3. $\alpha (A + B) = \alpha A + \alpha B$ 
4. $1A = A$ 

### Produto entre duas matrizes

Dadas duas matrizes $A_{m \times n}$ e $B_{n \times p}$, definimos o produto $A \cdot B$ (também denotado por $AB$) como uma operação que produz uma matriz $C_{m \times p}$ com termo geral 

$$
c_{ik} = \sum_{j = 1}^n a_{ij} \cdot b_{jk} = a_{i1} \cdot b_{ik} + ... + a_{in} \cdot b_{nk}
$$

De forma mais visual, temos que cada elemento $c_{ik}$ da nova matriz é formado a partir da multiplicação (e soma) elemento a elemento da linha $i$ da matriz $A$ e da coluna $j$ da matriz $B$. 

Como exemplo, observe o produto abaixo. 

$$
\begin{pmatrix}
    1 & 2 \\ 
    3 & 4 
\end{pmatrix}_{2 \times 2}
\cdot 
\begin{pmatrix}
    5 & 4 \\ 
    2 & 1 
\end{pmatrix}_{2 \times 2}
=
\begin{pmatrix}
    1 \cdot 5 + 2 \cdot 2 & 1 \cdot 4 + 2 \cdot 1 \\ 
    3 \cdot 5 + 4 \cdot 2 & 3 \cdot 4 + 4 \cdot 1
\end{pmatrix}_{2 \times 2}
$$

No produto entre matrizes valem as seguintes propriedades. Considere $A_{m \times n}, B_{n \times p}, C_{p \times q}$. 

1. $A(BC) = AB(C)$ 
2. $A(B+C) = AB + AC$

Note que a multiplicação entre matrizes não é comutativa, ao contrário do produto usual entre números reais. De fato, $A \cdot B \neq B \cdot A$ de forma geral. 

## Matrizes inversíveis 

Para fins de concisão, nesta seção serão consideradas apenas matrizes quadradas de ordem $n$. 

Perceba que o produto entre matrizes possui um elemento neutro. Esta matriz especial é denominada <b>matriz identidade</b>, possuindo a forma 

$$
I_n = 
\begin{pmatrix}
    1 & 0 & 0 & ... & 0 \\ 
    0 & 1 & 0 & ... & 0 \\ 
    0 & 0 & 1 & ... & 0 \\ 
    ... & ... & ... & ... & ... \\ 
    0 & 0 & 0 & ... & 1
\end{pmatrix}_{n \times n}
$$

Por ser elemento neutro dessa operação, esta matriz satisfaz a relação $AI_n = I_nA = A, \forall A$. 

Dizemos ainda que certa matriz A é <b>inversível</b> se, e somente se, existe uma matriz $B$ tal que $AB = BA = I_n$. Se esta matriz existe, $B$ é denominada <b>matriz inversa de $A$</b> e denotada por $A^{-1}$. 

<aside>

<b>Teorema — </b> Se uma linha ou coluna de uma matriz é nula, esta matriz não é inversível.

</aside>

<aside>

<b>Teorema — </b> Se $A$ e $B$ são inversíveis, então $AB$ também é inversível e $(AB)^{-1}$ e vale a equação $(AB)^{-1} = A^{-1} \cdot B^{-1}$.

</aside>

<aside>

<b>Teorema — </b> Se $A$ é inversível, então vale $(A^{-1})^{-1} = A$. 

</aside>

Se uma matriz $A$ é inversível, é possível determinar sua inversa por meio da aplicação de <b>operações elementares em suas linhas</b>, embora estas operações também estejam definidas para suas colunas. 

De fato, essas operações são idênticas às operações elementares definidas para sistemas lineares. Como será visto adiante, sistemas lineares podem ser representados por matrizes, ou seja, podem ser escritos em uma <b>forma matricial</b>. 

São operações elementares de uma matriz $A$ qualquer: 

1. Permutar duas de suas linhas 
2. Multiplicar uma linha por um $lambda \in \mathbb{R}$, com $\lambda \neq 0$ 
3. Somar uma linha em outra

De forma semelhante, se uma matriz $B$ pode ser obtida a partir de um número finito de operações elementares em $A$, dizemos que $A$ é <b>semelhante</b> a $B$ e denotamos esta relação por $A \sim B$. Valem as mesmas propriedades para a semelhança entre sistemas lineares. 

<aside>

<b>Teorema — </b> Uma matriz $A$ é inversível se, e somente se, $I_n \sim A$. As mesmas operações que transformam $A$ em $I_n$ transformam $I_n$ em $A^{-1}$. 

</aside>

## Sistemas de Cramer

Considere um sistema linear $S$ de $m$ equações e $n$ incógnitas, da forma

$$ 
S : 
\begin{cases}
    a_{11}x_1 + ... + a_{1n}x_n = b_1 \\ 
    ... \\ 
    a_{m1}x_1 + ... + a_{mn}x_n = b_m 
\end{cases}
$$

Note que, se formarmos as matrizes 

$$
A =
\begin{pmatrix}
    a_{11} & a_{12} & ... & a_{1n} \\
    a_{21} & a_{22} & ... & a_{2n} \\
    ... & ... & ... & ... \\ 
    a_{m1} & a_{m2} & ... & a_{mn} \\
\end{pmatrix} \text{ } \text{ }
X = 
\begin{pmatrix}
    x_1 \\ x_2 \\ ... \\ x_n
\end{pmatrix} \text{ } \text{ }
B = 
\begin{pmatrix}
    b_1 \\ b_2 \\ ... \\ b_m
\end{pmatrix}
$$

podemos escrever $S$ na sua <b>forma matricial</b>, sendo uma equação $AX = B$. Nesta equação $A$ é denominada <b>matriz de coeficientes</b> do sistema $S$. 

Por sua vez, um <b>sistema de equações de Cramer</b> é um sistema linear tal que $A$ seja inversível. Portanto, nesses sistemas de solução única, temos que $X = A^{-1} \cdot B$. 

# Referências 

--- 

1. CALLIOLI, Carlos Alberto; DOMINGUES, Hygino H..; COSTA, Roberto da  Álgebra Linear e Aplicações. 4ª Edição revisada. São Paulo: Atual, 1983