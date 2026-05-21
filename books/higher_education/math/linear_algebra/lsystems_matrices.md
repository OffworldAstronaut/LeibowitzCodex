# Sistemas lineares e Matrizes

# Sistemas lineares

---

Para compreendermos os conceitos sobre os <b>sistemas lineares</b>, é necessário primeiro nos debruçar sobre a noção de <b>equação linear</b>.

Dizemos que uma equação da forma

$$
\alpha_1x_1 + \alpha_2x_2 + ... + \alpha_nx_n = \beta, \text{com }\alpha, \beta \in \mathbb{R}, \text{e } n \ge 1
$$

é uma <b>equação linear</b>. Além disso, se a n-upla $(b_1, b_2, ..., b_n) \in \mathbb{R}^N$ satisfizer a relação ao fazermos $x_1 = b_1$, $x_2 = b_2$, ..., $x_n = b_n$, dizemos que esta n-upla é uma <b>solução</b> da equação linear.

Definimos um sistema de equações $S$ de $m$ equações e $n$ incógnitas, com $m, n \ge 1$, como um conjunto de equações lineares da forma

$$
S:
\begin{cases}
\alpha_{11}x_1 + ... + \alpha_{1n}x_n &= \beta_1 \\
\alpha_{21}x_1 + ... + \alpha_{2n}x_n &= \beta_2 \\
\dots \\
\alpha_{m1}x_1 + ... + \alpha_{mn}x_n &= \beta_m \\
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

<aside>

<b>Teorema</b> — As operações elementares preservam o conjunto solução de um sistema linear.

<b>Demonstração</b> — Considere um sistema linear $S$.

1. Permutar duas equações não altera o conjunto solução, pois a ordem das equações é irrelevante para a simultaneidade das condições impostas.

2. Multiplicar uma equação por $\lambda \neq 0$ produz uma equação equivalente, pois

$$
a_1x_1 + ... + a_nx_n = b
$$

é satisfeita se, e somente se,

$$
\lambda a_1x_1 + ... + \lambda a_nx_n = \lambda b
$$

também o é.

3. Se substituímos uma equação pela soma dela com outra, qualquer solução do sistema original continua satisfazendo a nova equação, pois a soma de igualdades válidas permanece válida. Reciprocamente, como a operação pode ser revertida pela subtração da equação adicionada, o conjunto solução permanece inalterado.

Logo, todas as operações elementares preservam o conjunto solução do sistema.

</aside>

<aside>

<b>Teorema</b> — A relação de equivalência entre sistemas lineares é reflexiva, simétrica e transitiva.

<b>Demonstração</b> — Considere os seguintes raciocínios para cada propriedade.

1. Reflexividade: todo sistema possui o mesmo conjunto solução que ele próprio, portanto $S_1 \sim S_1$.

2. Simetria: se $S_1 \sim S_2$, então ambos possuem o mesmo conjunto solução. Logo, $S_2$ possui o mesmo conjunto solução que $S_1$, isto é, $S_2 \sim S_1$.

3. Transitividade: se $S_1 \sim S_2$ e $S_2 \sim S_3$, então os três sistemas possuem o mesmo conjunto solução. Portanto, $S_1 \sim S_3$.

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
a_{21} + b_{21} & a_{22} + b_{22} & ... & a_{2n} + b_{2n} \\
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

<aside>

<b>Teorema</b> — A adição de matrizes é associativa.

<b>Demonstração</b> — Sejam $A=(a_{ij}), B=(b_{ij})$ e $C=(c_{ij})$. Então,

$$
[A+(B+C)]_{ij} = a_{ij} + (b_{ij}+c_{ij})
$$

e

$$
[(A+B)+C]_{ij} = (a_{ij}+b_{ij})+c_{ij}
$$

Como a adição em $\mathbb{R}$ é associativa,

$$
a_{ij} + (b_{ij}+c_{ij}) = (a_{ij}+b_{ij})+c_{ij}
$$

para todos os índices $i,j$. Portanto,

$$
A+(B+C) = (A+B)+C.
$$

</aside>

<aside>

<b>Teorema</b> — A adição de matrizes é comutativa.

<b>Demonstração</b> — Temos

$$
(A+B)_{ij} = a_{ij}+b_{ij}
$$

e

$$
(B+A)_{ij} = b_{ij}+a_{ij}.
$$

Como a adição de números reais é comutativa,

$$
a_{ij}+b_{ij}=b_{ij}+a_{ij},
$$

segue que

$$
A+B=B+A.
$$

</aside>

<aside>

<b>Teorema</b> — Existe matriz neutra para a adição.

<b>Demonstração</b> — Considere a matriz nula

$$
O=(0)_{m \times n}.
$$

Então,

$$
(A+O)_{ij}=a_{ij}+0=a_{ij}.
$$

Logo,

$$
A+O=A.
$$

</aside>

<aside>

<b>Teorema</b> — Toda matriz possui elemento oposto.

<b>Demonstração</b> — Dada $A=(a_{ij})$, definimos

$$
-A=(-a_{ij}).
$$

Então,

$$
(A+(-A))_{ij}=a_{ij}+(-a_{ij})=0.
$$

Portanto,

$$
A+(-A)=O.
$$

</aside>

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

<aside>

<b>Teorema</b> — Valem as propriedades do produto por escalar.

<b>Demonstração</b> — Todas seguem diretamente das propriedades dos números reais.

Por exemplo,

$$
[(\alpha+\beta)A]_{ij}=(\alpha+\beta)a_{ij}
$$

e

$$
(\alpha A+\beta A)_{ij}=\alpha a_{ij}+\beta a_{ij}.
$$

Como

$$
(\alpha+\beta)a_{ij}=\alpha a_{ij}+\beta a_{ij},
$$

segue que

$$
(\alpha+\beta)A=\alpha A+\beta A.
$$

As demais propriedades demonstram-se analogamente.

</aside>

### Produto entre duas matrizes

Dadas duas matrizes $A_{m \times n}$ e $B_{n \times p}$, definimos o produto $A \cdot B$ (também denotado por $AB$) como uma operação que produz uma matriz $C_{m \times p}$ com termo geral

$$
c_{ik} = \sum_{j = 1}^n a_{ij} \cdot b_{jk} = a_{i1} \cdot b_{1k} + ... + a_{in} \cdot b_{nk}
$$

De forma mais visual, temos que cada elemento $c_{ik}$ da nova matriz é formado a partir da multiplicação (e soma) elemento a elemento da linha $i$ da matriz $A$ e da coluna $k$ da matriz $B$.

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

1. $A(BC) = (AB)C$
2. $A(B+C) = AB + AC$

<aside>

<b>Teorema</b> — O produto de matrizes é associativo.

<b>Demonstração</b> — Considere o elemento $(i,k)$ de $A(BC)$:

$$
[A(BC)]_{ik}
=
\sum_{j=1}^n a_{ij}(BC)_{jk}
=
\sum_{j=1}^n a_{ij}\left(\sum_{r=1}^p b_{jr}c_{rk}\right).
$$

Logo,

$$
[A(BC)]_{ik}
=
\sum_{j=1}^n\sum_{r=1}^p a_{ij}b_{jr}c_{rk}.
$$

Por outro lado,

$$
[(AB)C]_{ik}
=
\sum_{r=1}^p (AB)_{ir}c_{rk}
=
\sum_{r=1}^p\left(\sum_{j=1}^n a_{ij}b_{jr}\right)c_{rk}.
$$

Assim,

$$
[(AB)C]_{ik}
=
\sum_{r=1}^p\sum_{j=1}^n a_{ij}b_{jr}c_{rk}.
$$

Como as somas finitas podem ser reordenadas,

$$
[A(BC)]_{ik}=[(AB)C]_{ik}.
$$

Portanto,

$$
A(BC)=(AB)C.
$$

</aside>

<aside>

<b>Teorema</b> — O produto de matrizes é distributivo em relação à adição.

<b>Demonstração</b> — Temos

$$
[A(B+C)]_{ik}
=
\sum_{j=1}^n a_{ij}(b_{jk}+c_{jk}).
$$

Pela distributividade dos números reais,

$$
[A(B+C)]_{ik}
=
\sum_{j=1}^n a_{ij}b_{jk}
+
\sum_{j=1}^n a_{ij}c_{jk}.
$$

Logo,

$$
[A(B+C)]_{ik}=(AB)_{ik}+(AC)_{ik}.
$$

Portanto,

$$
A(B+C)=AB+AC.
$$

</aside>

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

<aside>

<b>Teorema</b> — A matriz identidade é elemento neutro da multiplicação matricial.

<b>Demonstração</b> — Seja $A=(a_{ij})$. Então,

$$
(AI_n)_{ij} = \sum_{k=1}^n a_{ik}(I_n)_{kj}.
$$

Como $(I_n)_{kj}=1$ quando $k=j$ e $0$ caso contrário, resta apenas o termo $k=j$:

$$
(AI_n)_{ij}=a_{ij}.
$$

Logo,

$$
AI_n=A.
$$

De maneira análoga prova-se que

$$
I_nA=A.
$$

</aside>

Dizemos ainda que certa matriz $A$ é <b>inversível</b> se, e somente se, existe uma matriz $B$ tal que $AB = BA = I_n$. Se esta matriz existe, $B$ é denominada <b>matriz inversa de $A$</b> e denotada por $A^{-1}$.

<aside>

<b>Teorema</b> — Se uma linha ou coluna de uma matriz é nula, esta matriz não é inversível.

<b>Demonstração</b> — Suponha que a linha $i$ de $A$ seja nula. Então, para qualquer matriz $B$, a linha $i$ de $AB$ também será nula, pois

$$
(AB)_{ij}=\sum_{k=1}^n a_{ik}b_{kj}
$$

e todos os $a_{ik}$ são iguais a zero.

Logo, $AB$ não pode ser igual à matriz identidade, pois a identidade possui todos os elementos da diagonal principal iguais a $1$. Portanto, $A$ não é inversível.

O caso de coluna nula é análogo.

</aside>

<aside>

<b>Teorema</b> — Se $A$ e $B$ são inversíveis, então $AB$ também é inversível e

$$
(AB)^{-1}=B^{-1}A^{-1}.
$$

<b>Demonstração</b> — Temos que

$$
(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AI_nA^{-1} = AA^{-1} = I_n
$$

Além disso,

$$
(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}I_nB = B^{-1}B = I_n
$$

Logo, $B^{-1}A^{-1}$ é a inversa de $AB$.

</aside>

<aside>

<b>Teorema</b> — Se $A$ é inversível, então

$$
(A^{-1})^{-1}=A.
$$

<b>Demonstração</b> — Pela definição da matriz inversa,

$$
AA^{-1}=A^{-1}A=I_n.
$$

Assim, $A$ é inversa de $A^{-1}$. Portanto,

$$
(A^{-1})^{-1}=A.
$$

</aside>

Se uma matriz $A$ é inversível, é possível determinar sua inversa por meio da aplicação de <b>operações elementares em suas linhas</b>, embora estas operações também estejam definidas para suas colunas.

De fato, essas operações são idênticas às operações elementares definidas para sistemas lineares. Como será visto adiante, sistemas lineares podem ser representados por matrizes, ou seja, podem ser escritos em uma <b>forma matricial</b>.

São operações elementares de uma matriz $A$ qualquer:

1. Permutar duas de suas linhas
2. Multiplicar uma linha por um $\lambda \in \mathbb{R}$, com $\lambda \neq 0$
3. Somar uma linha em outra

De forma semelhante, se uma matriz $B$ pode ser obtida a partir de um número finito de operações elementares em $A$, dizemos que $A$ é <b>semelhante</b> a $B$ e denotamos esta relação por $A \sim B$. Valem as mesmas propriedades para a semelhança entre sistemas lineares.

<aside>

<b>Teorema</b> — Uma matriz $A$ é inversível se, e somente se, $A \sim I_n$. As mesmas operações que transformam $A$ em $I_n$ transformam $I_n$ em $A^{-1}$.

<b>Demonstração</b> — Cada operação elementar sobre as linhas de uma matriz corresponde à multiplicação à esquerda por uma matriz elementar inversível.

Se uma sequência de operações transforma $A$ em $I_n$, então existem matrizes elementares $E_1,\dots,E_k$ tais que

$$
E_k \cdots E_1 A = I_n.
$$

Logo, temos que $A^{-1}=E_k \cdots E_1.$ Assim, $A$ é inversível.

Reciprocamente, se $A$ é inversível, podemos aplicar eliminação de Gauss-Jordan para reduzir $A$ à identidade por operações elementares. Portanto, $A \sim I_n$. 

Além disso, aplicando as mesmas operações à matriz identidade obtemos precisamente $A^{-1}$. 

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

Por sua vez, um <b>sistema de equações de Cramer</b> é um sistema linear tal que $A$ seja inversível. Portanto, nesses sistemas de solução única, temos que

$$
X=A^{-1}B
$$

<aside>

<b>Teorema</b> — Um sistema de Cramer possui solução única dada por

$$
X=A^{-1}B
$$

<b>Demonstração</b> — Considere o sistema matricial

$$
AX=B
$$

Como $A$ é inversível, multiplicamos ambos os lados por $A^{-1}$:

$$
A^{-1}AX=A^{-1}B
$$

Pela associatividade do produto matricial,

$$
(A^{-1}A)X=A^{-1}B
$$

Como $A^{-1}A=I_n$,

$$
I_nX=A^{-1}B
$$

Logo,

$$
X=A^{-1}B
$$

A unicidade segue da unicidade da matriz inversa.

</aside>

# Referências

---

1. CALLIOLI, Carlos Alberto; DOMINGUES, Hygino H.; COSTA, Roberto da. <i>Álgebra Linear e Aplicações</i>. 4ª edição revisada. São Paulo: Atual, 1983.