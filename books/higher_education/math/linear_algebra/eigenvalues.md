# Autovalores e autovetores

# Autovalores e autovetores

Os conceitos de <b>autovalores</b> (ou <i>valores próprios</i>) e <b>autovetores</b> (ou <i>vetores próprios</i>) são muito importantes no estudo da Álgebra Linear e em suas aplicações.

Podemos defini-los da seguinte maneira:

<aside>

<b>Definição (Calliolli, Autovalores e Autovetores)</b> — Seja $U$ um espaço vetorial sobre um corpo $K$ e seja $T \in L(U)$. Um vetor $u \in U$ não-nulo é um <b>vetor próprio</b> de $T$ se existe um escalar $\lambda$ tal que $T(u) = \lambda u$. Neste caso, $\lambda$ é um <b>valor próprio</b> de $T$ associado a $u$.

</aside>

Podemos ainda analisar essa definição sob o ponto de vista matricial.

Considere uma matriz $A$ de ordem $n$, representando um operador linear em $U$. Sendo $\lambda \in \mathbb{R}$ um escalar e $u \in U$ um vetor não-nulo, dizemos que $\lambda$ é um <b>autovalor</b> de $A$ e $u$ é um <b>autovetor</b> de $A$ caso estes satisfaçam 

$$
Au = \lambda u \iff (A - \lambda I)u = o
$$

Essa equivalência nos mostra que, dado um certo valor $\lambda$, o conjunto formado por todos os autovetores (e o vetor nulo) é precisamente o núcleo do operador $(A - \lambda I)$. Esse conjunto é denominado <b>autoespaço</b> de $A$ <b>associado com $\lambda$</b> (ou então <b>subespaço próprio de $\lambda$</b>).

Podemos ainda denotar este subespaço por 

$$
S_\lambda = V(\lambda) = \{u \in U | Au = \lambda u\}
$$

Além disso, todos os possíveis pares $(\lambda, u)$ são chamados <b>autopares</b> de $A$.

Tomando o determinante dessa matriz, obtemos um polinômio em $\lambda$ de grau $n$, o <b>polinômio característico</b> da matriz $A$. 

$$
\det{(A - \lambda I)} = p_A(\lambda) = (-1)^n \lambda^n + ... + \det{A}
$$

As raízes desse polinômio são os autovalores de $A$ (demonstrado abaixo). Além disso, como matrizes semelhantes representam o mesmo operador sobre bases diferentes, convém mencionar o polinômio característico <b>de uma matriz</b>, sem referir à sua base, como feito acima. Essa propriedade será demonstrada adiante.

<aside>

<b>Teorema</b> — Os autovalores de $A$ são as raízes do polinômio característico.

</aside>

<aside>

<b>Demonstração</b> — Temos por definição que $\lambda$ é autovalor de de $A$ se, e somente se, $\ker{(A - \lambda I_n)} \neq \{o\}$. Isto equivale a dizer que a matriz $A - \lambda I_n$ não é inversível, isto é, que $\det{(A - \lambda I_n)} = 0$. Como o polinômio característico de $A$ é precisamente o determinante de $A - \lambda I_n$, o teorema está provado.

</aside>

<aside>

<b>Teorema</b> — Se $A$ e $B$ forem matrizes semelhantes, então $A$ e $B$ possuem os mesmos autovalores.

</aside>

<aside>

<b>Demonstração</b> — Considere duas matrizes semelhantes $A$ e $B$. Logo, existe uma matriz inversível $M$ tal que $B = M^{-1}AM$. Portanto, vale 

$$
\begin{align*}
    p_B(\lambda) &= \det{(B - \lambda I_n)}\\
    \therefore p_B(\lambda) &= \det{(M^{-1}AM - \lambda I_n)} \\
    \therefore p_B(\lambda) &= \det{(M^{-1}AM - \lambda M^{-1}I_n M)} \\ 
    \therefore p_B(\lambda) &= \det{(M^{-1}(A - \lambda I_n)M)} \\ 
    \therefore p_B(\lambda) &= \det{(M^{-1})} \cdot \det{(A - \lambda I_n)} \cdot \det{M} \\ 
    \therefore p_B(\lambda) &= \det{(A - \lambda I_n)} = p_A(\lambda)
\end{align*}
$$

</aside>

Como os autovalores de $A$ são as raízes de um polinômio de grau $n$, temos que uma matriz $A$ de ordem $n$ possui no máximo $n$ autovalores, como enunciado no teorema à seguir.

<aside>

<b>Teorema</b> — Seja $A$ uma matriz de ordem $n$ com entradas reais ou complexas. Então, $A$ tem no máximo $n$ autovalores distintos $\lambda_1, ..., \lambda_k$. Além disso, os autovetores $u_1, ... u_n$ associados a esses autovalores formam um conjunto linearmente independente.

</aside>

<aside>

<b>Corolário</b> — Se $A \in L(U)$ possui $n$ autovetores distintos, estes formam uma base do espaço vetorial $U$.

</aside>

Além disso, temos alguns resultados que podem ser listados, relacionados aos autovalores de uma matriz. 

<aside>

<b>Teorema</b> — Se $A$ é a soma direta das matrizes $B$ e $C$, então o polinômio característico de $A$ é o produto entre os polinômios de $B$ e $C$, e seus autovetores são os elementos do conjunto união dos autovetores de $B$ e $C$. 

</aside>

<aside>

<b>Teorema</b> — Seja $T: V \to V$ uma transformação linear de forma que $Tv = \lambda v$ com $v$ não-nulo (isto é, $\lambda$ e $v$ formam um autopar de $T$). Logo, $T^k v = \lambda^k v, \forall k \ge 1$ e, para qualquer polinômio $q$, $q(T)v = q(\lambda)v$. 

</aside>

<aside>

<b>Demonstração</b> — Vamos demonstrar a primeira afirmação. Sabemos inicialmente que $Tv = \lambda v$. Suponha, então, que valha $T^n v = \lambda^n v$ para algum $n \in \mathbb{N}$. Logo, vale: 

$$
\begin{align*}
    T^{n+1}v = T(T^nv) = T(\lambda^n v) = \lambda^n T(v) = \lambda^{n+1} v 
\end{align*}
$$

Como a validade para $n$ implica na validade de $n+1$, temos que a relação vale para todo $n$ natural. 

Considere então um polinômio qualquer $q(x) = a_nx^n + a_{n-1}x^{n-1} + \dots + a_1x + a_0$. Temos que $q(T) = a_nT^n + a_{n-1}T^{n-1} + \dots + a_1T + a_0$ e, consequentemente: 

$$
\begin{align*}
    q(T)v &= (a_nT^n + a_{n-1}T^{n-1} + \dots + a_1T + a_0)v \\ 
    &= a_nT^n v + a_{n-1}T^{n-1}v + \dots + a_1Tv + av \\ 
    &= a_n \lambda^n v + a_{n-1} \lambda^{n-1} v + \dots + a_1 \lambda v + av \\ 
    &= q(\lambda)v 
\end{align*}
$$

Como queríamos demonstrar. O que este resultado nos diz em termos práticos é que, caso tenhamos uma matriz $B$ que seja um polinômio de $A$, cada autovalor $\lambda$ de $A$ terá um escalar correspondente $\lambda' = q(\lambda)$ autovalor de $B$. 

</aside>

<aside>

<b>Corolário</b> — Se $T$ for invertível nas condições anteriores, vale que $\lambda \neq 0$ e $T^{-1}v = \lambda^{-1} v$.

</aside>

<aside>

<b>Demonstração</b> — Se $T$ for invertível, existe $T^{-1}$ tal que $T^{-1}T = I$. Assim, 

$$
\begin{align*}
    Tv &= \lambda v \\ 
    T^{-1}Tv &= T^{-1}\lambda v \\ 
    v &= \lambda T^{-1} v \\ 
    T^{-1}v &= \lambda^{-1} v
\end{align*}
$$

Como queríamos demonstrar. Note que $\lambda \neq 0$.

</aside>

<aside>

<b>Teorema</b> — Uma matriz $A$ é não singular se, e somente se, todos os seus autovalores forem não-nulos. Além disso, os autovalores de $A^{-1}$ são os inversos dos autovalores para $A$.

</aside>

# Diagonalização 

## Multiplicidade algébrica e geométrica 

Definimos a <b>multiplicidade algébrica</b> de um autovalor $\lambda$ como sendo a quantidade de vezes que este é raiz do polinômio característico. Por sua vez, a <b>multiplicidade geométrica</b> de $\lambda$ é a dimensão do subespaço $S_\lambda$. 

<aside>

<b>Exemplo</b> — Determine os autovalores do operador a seguir e suas multiplicidades algébrica e geométrica.

$$
O = 
\begin{pmatrix}
    1 & 0 \\ 
    2 & 1 
\end{pmatrix}
$$

Temos que o polinômio característico de $O$ é dado por 

$$
p_O(\lambda) = (1-\lambda)^2 
$$

e, portanto, sua única raíz é $\lambda = 1$. Note que $\lambda = 1$ é raíz duas vezes do polinômio característico de $O$ e, portanto, sua multiplicidade algébrica é igual a 2. 

Vamos analisar agora os autovetores de $O$ associados ao autovalor $\lambda = 1$. 

$$
\begin{pmatrix}
    1 & 0 \\ 
    2 & 1 
\end{pmatrix}
\begin{pmatrix}
    x \\ y 
\end{pmatrix}
= 
\begin{pmatrix}
    x \\ y   
\end{pmatrix}
\iff 
\begin{pmatrix}
    x \\ 2x + y
\end{pmatrix}
=
\begin{pmatrix}
    x \\ y 
\end{pmatrix}
\iff 
x = 0
$$

Logo, os autovetores são da forma 

$$
X = 
y
\begin{pmatrix}
    0 \\ 1 
\end{pmatrix}
$$

Logo, temos que a dimensão do subespaço $V(1)$ é 1 e, portanto, multiplicidade geométrica de $\lambda = 1$ é 1.

</aside>

## Diagonalizando operadores

Dado um espaço vetorial $U$ sobre um corpo qualquer $K$, considere um operador $A \in L(U)$. Dizemos que $A$ é <b>diagonalizável</b> se existe uma base $B$ na qual a matriz $(A)_B$ é uma matriz diagonal. Com efeito, essa base $B$ é formada por autovetores do operador $A$.

Esta relação motiva um teorema. 

<aside>

<b>Teorema</b> — Uma matriz $A$ de ordem $n$ é diagonalizável se, e somente se, $A$ possui $n$ autovetores linearmente independentes.

</aside>

Isto é, a matriz do operador $A$ é semelhante a uma matriz diagonal $D$, havendo uma matriz inversível $M$ de forma que $A = MDM^{-1}$. A matriz $M$ é denominada <b>matriz diagonalizante</b> de $A$.

As colunas da matriz diagonalizante são os autovetores de $A$, enquanto os elementos da matriz diagonal $D$ são os autovalores de $A$. Para ilustrar isso, vamos tomar um exemplo:

<aside>

<b>Exemplo</b> — Diagonalize a matriz abaixo 

$$
H = 
\begin{pmatrix}
    1 & 2 \\ 
    0 & -2
\end{pmatrix}
$$

O polinômio característico dessa matriz é dado por 

$$
p_H(\lambda) = \det{(H - \lambda I_2)} = (1-\lambda)(-2-\lambda)
$$

e suas raízes são $\lambda_1=1$ e $\lambda_2=-2$. Dessa forma, os autovetores de $H$ associados ao autovalor $\lambda_1$ são da forma: 

$$
HX = \lambda_1X_1 \iff 
\begin{pmatrix}
    1 & 2 \\ 
    0 & -2
\end{pmatrix}
\begin{pmatrix}
    x \\ y 
\end{pmatrix}
=
\begin{pmatrix}
    x \\ y 
\end{pmatrix}
\iff 
y = 0 
\iff 
X_1 = x
\begin{pmatrix}
    1 \\ 0 
\end{pmatrix}
$$

Pelo mesmo processo, obtemos que os autovetores de $H$ associados ao autovalor $\lambda_2$ são da forma: 

$$
HX = \lambda_2X_2 \iff 
\begin{pmatrix}
    1 & 2 \\ 
    0 & -2
\end{pmatrix}
\begin{pmatrix}
    x \\ y 
\end{pmatrix}
=
-2
\begin{pmatrix}
    x \\ y 
\end{pmatrix}
\iff 
y = -\frac{3}{2}x
\iff 
X_2=
x
\begin{pmatrix}
    1 \\ -\frac{3}{2}
\end{pmatrix}
$$

Como estes autovetores são linearmente independentes, temos, pelo teorema anterior, que o operador $H$ é diagonalizável e sua matriz diagonalizante $M$ é formada pelos seus autovetores. Com efeito, é possível ver que, sendo 

$$
M =
\begin{pmatrix}
    1 & 1 \\ 
    0 & -\frac{3}{2}    
\end{pmatrix}
$$

e 

$$
D = 
\begin{pmatrix}
    1 & 0 \\ 
    0 & -2
\end{pmatrix}
$$

temos que 

$$
H = 
\begin{pmatrix}
    1 & 2 \\ 
    0 & -2
\end{pmatrix} =
MDM^{-1} =
\begin{pmatrix}
    1 & 1 \\ 
    0 & -\frac{3}{2}    
\end{pmatrix}
\begin{pmatrix}
    1 & 0 \\ 
    0 & -2
\end{pmatrix}
\begin{pmatrix}
    1 & \frac{2}{3} \\ 
    0 & -\frac{2}{3}
\end{pmatrix}
$$

</aside>

Além do exposto anteriormente, alguns teoremas úteis podem ser enunciados.

<aside>

<b>Teorema</b> — Um operador $T$ é diagonalizável se, e somente se, o polinômio característico de $T$ possui todas as suas raízes em $K$; a multiplicidade geométrica de cada autovalor de $T$ é igual a sua multiplicidade algébrica. 

</aside>

<aside>

<b>Teorema</b> — Autovetores de matrizes simétricas que estejam associados a autovetores distintos são sempre ortogonais entre si.

</aside>

<aside>

<b>Teorema (Espectral)</b> — Um operador linear $A$ de um espaço euclidiano $V$, de dimensão finita $n \ge 1$, é auto-adjunto se, e somente se, existe uma base ortonormal de $V$ formada por autovetores de $A$.

</aside>

Como uma pequena nota final, é interessante mencionar que o conjunto dos autovalores de uma matriz complexa é denominado seu <b>espectro</b>. Isso é fundamental para ferramentas matemáticas como a <b>análise espectral</b> de operadores.

Uma aplicação interessante da diagonalização de matrizes é a diminuição de operações computacionais no processo de realizar a potência de uma dada matriz. A potenciação de matrizes é necessária em alguns processos, como <b>cadeias de Markov</b>. 

É facilmente perceptível que multiplicar matrizes é algo extremamente laborioso, entretanto, ao diagonalizarmos uma matriz, percebemos que a potência de uma matriz diagonal é simplesmente a potência dos elementos da diagonal. De forma geral, vale 

$$
A^P = M D^P M^{-1}
$$

bastando apenas calcular $D^P$ e depois realizar a mudança de base da matriz para recuperar $A^P$.

<aside>

<b>Exemplo</b> — Calcule uma expressão geral para $A^P$, sendo 

$$
A=
\begin{pmatrix}
    4 & 4 \\ 
    1 & 4
\end{pmatrix}
$$

Dado que a matriz

$$
M = 
\begin{pmatrix}
    2 & 2 \\ 
    -1 & 1
\end{pmatrix}
$$

diagonaliza a matriz $A$, de forma que 

$$
A = M
\begin{pmatrix}
    2 & 0 \\ 
    0 & 6
\end{pmatrix}
M^{-1}
$$

temos que 

$$
A^P = \dfrac{1}{4}
\begin{pmatrix}
    2^{P+1} + 2 \cdot 6^P & -2^{P+2} + 4 \cdot 6^P \\ 
    -2^P + 6^P & 2^{P+1} + 2 \cdot 6^P
\end{pmatrix}
$$

Esta matriz geral é obtida por simplificação da expressão original.

</aside>

## Formas de Jordan

Embora nem todo operador seja diagonalizável, poderemos sempre reescrevê-lo numa forma quasi-diagonal dadas algumas condições especiais. 

De fato, se $T: V \to V$ for um operador linear e $V$ um espaço vetorial sobre os complexos, sempre haverá uma base $B$ de $V$ tal que ao escrevermos $T$ nesta base, sua matriz assumirá a <b>forma canônica de Jordan</b>. 

Matrizes na forma canônica de Jordan são formadas pelo chamados <b>blocos</b>, submatrizes das formas

$$
\begin{array}{ccc}
    \begin{pmatrix}
        \lambda_i
    \end{pmatrix}
    &
    \begin{pmatrix}
        \lambda_i & 1 \\ 
        0 & \lambda_i
    \end{pmatrix}
    &
    \begin{pmatrix}
        \lambda_i & 1 & 0 \\ 
        0 & \lambda_i & 1 \\ 
        0 & 0 & \lambda_i
    \end{pmatrix}
    & 
    \dots 
\end{array}
$$

ao longo da diagonal principal. Fora dessas regiões, todos os elementos são nulos.

# Exercícios 

## Problemas 

<aside>

<b>Problema 1.</b> Considere a seguinte matriz: 

$$
A = \begin{pmatrix}
    1 & 2 & -1 \\ 
    0 & 2 & 0 \\ 
    -2 & 3 & 0 
\end{pmatrix}
$$

Determine os autovalores de $A$ e seus autovetores associados, além de todos os subespaços $S_\lambda$ e suas dimensões.

</aside>

<aside>

<b>Problema 2.</b> Seja $T: P_2 \to P_2$ o operador linear dado por $T(p(x)) = xp'(x) + p(1)$. Denotamos por $P_2$ o espaço vetorial dos polinômios reais de grau $\le 2$. 

Escreva a matriz de $T$ na base canônica $\alpha = \{1, x, x^2\}$ e determine seus autovalores e autovetores. Em seguida, escreva a matriz dessa transformação na base $\beta = \{1, 1+x, 1+x^2\}$  e realize o mesmo procedimento.

Os polinômios característicos são os mesmos? Por quê? 

</aside>

<aside>

<b>Problema 3.</b> Seja $A = \begin{pmatrix}1 & 0 \\ 0 & 2\end{pmatrix}$ e defina $T: M_2(\mathbb{R}) \to M_2(\mathbb{R})$ por $T(X) = AX - XA$.

Verifique que $T$ é linear e escreva sua matriz na base $\{E_{11}, E_{12}, E_{21}, E_{22}\}$ de $M_2(\mathbb{R})$, onde $E_{ij}$ possui 1 na posição $(i, j)$ e 0 nas demais.

Em seguida, determine os autovalores e autovetores de $T$, além de suas multiplicidades algébricas e geométricas.

</aside>

<aside>

<b>Problema 4.</b> Para $k \in \mathbb{R}$, seja $B_k = \begin{pmatrix}1 & k \\ 1 & 1\end{pmatrix}$. Calcule o polinômio característico de $B_k$ e determine, em função de $k$, quantos autovalores reais $B_k$ possui. Após isso, determine os autovetores de $B_k$ para $k \gt 0$. 

</aside>

## Soluções 

<aside>

<b>Solução 1.</b>

</aside>

<aside>

<b>Solução 2.</b>

</aside>

<aside>

<b>Solução 3.</b>

</aside>

<aside>

<b>Solução 4.</b>

</aside>

# Referências

1. CALLIOLI, Carlos Alberto; DOMINGUES, Hygino H.; COSTA, Roberto da. <i>Álgebra Linear e Aplicações</i>. 4ª edição revisada. São Paulo: Atual, 1983.
2. Website da iniciação científica de Alfredo Vitorino, IMECC-UNICAMP, <i>Álgebra Linear e Aplicações</i>. (<a href="https://www.ime.unicamp.br/~marcia/AlgebraLinear/index.html" target="_blank">Acesse aqui</a>)
3. KAPLAN, Wilfred; LEWIS, Donald J. Cálculo e Álgebra Linear. v. 3. Rio de Janeiro: Livros Técnicos e Científicos, 1972