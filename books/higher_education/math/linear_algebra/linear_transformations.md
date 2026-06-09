# Transformações lineares 

# Funções

Antes de definirmos o que são transformações lineares, talvez seja interessante revisitar algumas definições importantes sobre funções. 

Dados dois conjuntos $U$ e $V$, dizemos que $F: U \to V$ é uma função (ou aplicação) se existe um único elemento de $V$ correspondente para cada elemento de $U$, com essa relação sendo $F$. Aos elementos $v \in V$ associados a um certo $u \in U$, estes podem ser escritos pela notação $F(u)$. 

Nessas condições, chamamos os conjuntos $U$ e $V$ de <b>domínio</b> e <b>contradomínio</b> de $F$, respectivamente. Ao subconjunto de $V$ formado por todos os $F(u)$ dá-se o nome <b>imagem</b> de $F$, geralmente denotada por $\text{Im}(F)$. 

As funções podem ser classificadas entre <b>injetoras</b>, <b>sobrejetoras</b> e <b>bijetoras</b>. Dizemos que uma função é injetora se $\forall u_1, u_2 \in U, F(u_1) = F(u_2) \implies u_1 = u_2$. Isto é, uma função $F$ é injetora se, para qualquer elemento escolhido no domínio, há um elemento único correspondente no conjunto imagem. 

Uma função é classificada como sobrejetora se, e somente se, $\text{Im}(F) = V$. Ou seja, se todo elemento do conjunto imagem de $F$ está contido em $V$ e vice-versa. 

Por fim, uma função é classificada como bijetora se esta é simultaneamente injetora e sobrejetora. 

# Transformações lineares

Dizemos que uma certa função $F: U \to V$, com $U$ e $V$ sendo espaços vetoriais, é uma <b>transformação linear</b> de $U$ em $V$ se vale 

<aside>

$$
\begin{align*}
    F(\alpha u) &= \alpha F(u), \forall u \in U, \alpha \in \mathbb{R} \\ 
    F(u_1 + u_2) &= F(u_1) + F(u_2), \forall u_1, u_2 \in U
\end{align*}
$$

</aside>

Em especial, quando $U = V$, esta função recebe o nome de <b>operador linear</b>.

Desta definição e das noções anteriores sobre espaços vetoriais decorrem algumas propriedades. Dentre elas, podemos listar que 

<aside>

$$
\begin{align*}
    F(0) &= 0 \\ 
    F(-u) &= -F(u), \forall u \in U \\ 
    F(u_1 - u_2) &= F(u_1) - F(u_2), \forall u_1, u_2 \in U \\ 
    W \text{ é subespaço de } U &\implies \text{Im}(F) \subset W \text{ é um subespaço de } V \\
    F\left(\sum_{i = 1}^n a_i u_i\right) &= \sum_{i = 1}^n a_i F(u_1)
\end{align*}
$$

</aside>

Isto é — da primeira afirmação para a última —, vale que uma transformação linear leva o vetor nulo de um espaço ao vetor nulo de outro espaço; que uma transformação linear de um oposto leva ao oposto da transformação linear do vetor; que a transformação linear da diferença entre dois vetores é a diferença das transformações lineares de cada vetor; que uma transformação linear leva de subespaço em subespaço e que, finalmente, a imagem da combinação linear de $n$ vetores é a combinação linear das imagens de $n$ vetores.

# Núcleo e imagem

Dados dois espaços vetoriais $U$ e $V$ e uma transformação linear entre eles, definimos o <b>núcleo</b> dessa transformação como o conjunto de todos os elementos $u \in U$ tais que $F(u) = 0$. Em notação de conjuntos, escrevemos 

$$
\ker{F} = \{u \in U | F(u) = 0\}
$$

Desta definição inicial decorre que o núcleo de uma transformação linear é um subespaço vetorial de $U$ e que $F$ é injetora se, e somente se, seu núcleo conter apenas o vetor nulo. 

## Teorema do núcleo e da imagem 

Dados dois espaços vetoriais $U$ e $V$ sobre $\mathbb{R}$, ambos com dimensão finita, então, para uma transformação linear qualquer $F: U \to V$, vale 

$$
\dim{U} = \dim{\ker{F}} + \dim{\text{Im}(F)}
$$

Como corolário deste teorema, temos que as seguintes afirmações são equivalentes: $F$ é sobrejetora; $F$ é bijetora; $F$ é injetora$; $F$ transforma uma base de $U$ em uma base de $V$. 

## Isomorfismo e automorfismo

Um <b>isomorfismo</b> de $U$ em $V$ é uma transformação linear $F: U \to V$ tal que $F$ seja bijetora. Se $F: U \to U$ for bijetora, dizemos que $F$ é um <b>automorfismo</b> em $U$. 

Desta definição decorrem duas importantes propriedades. Em primeiro lugar, se $F$ é um isomorfismo de $U$ em $V$, então $F^{-1}: V \to U$ também é um isomorfismo (de $V$ em $U$), denominado <b>isomorfismo inverso</b> de $F$. Além disso, dizemos de $U$ e $V$ são espaços <b>isomorfos</b> entre si. 

Por fim, dados dois espaços de dimensão finita $U$ e $V$, temos que estes são isomorfos se, e somente se, $\dim{U} = \dim{V}$.

# Operações com transformações lineares

Algo interessante é que podemos realizar operações lineares para formar novas transformações lineares. Nesta seção iniciaremos a utilização de $L(U,V)$ para denotador o conjunto de todas as transformações lineares que levam de $U$ em $V$. Dessa forma, dados $F, G \in L(U,V)$, definimos a <b>soma</b> $F + G$, denotada por $F+G: U \to V$, da forma 

$$
(F+G)(u)=F(u)+G(u), \forall u \in U
$$

Esta soma é comutativa, associativa e possui elemento neutro. Além disso, podemos afirmar a existência da <b>transformação oposta</b> $(-F)$ tal que $F + (-F) = 0$. 

Podemos ainda definir uma <b>multiplicação por escalar</b> entre $F \in L(U,V)$ e um $\alpha in \mathbb{R}$. O produto $\alpha F: U \to V$  é definido por 

$$
(\alpha F)(u) = \alpha F(u), \forall u \in U
$$

possuindo as propriedades de associatividade, distributividade relativa à adição, distributividade relativa à adição de escalares e a existência de elemento neutro. 

Dadas estas verificações, temos que $L(U, V)$ é um espaço vetorial sobre $\mathbb{R}$. 

Podemos definir ainda a <b>transformação composta</b> de $F$ e $G$ (denotada por $G \circ F: U \to W$) como 

$$
(G \circ F)(u) = G(F(u)), \forall u \in U
$$

Note que para esta transformação estar definida, é necessária a existência de três espaços vetoriais sobre $\mathbb{R}$ — $U$, $V$ e $W$ — tanto como a existência das transformações lineares $F: U \to V$ e $G: V \to W$. 

No caso especial em que $U = V = W$, essa transformação composta se torna uma operação do conjunto $L(U)$, o conjunto de todos os operadores lineares do espaço $U$. Essa operação é associativa, distributiva e admite elemento neutro (chamado <b>operador idêntico</b>), valendo as relações para todo $H, G, F \in L(U)$:

$$
\begin{align*}
    (H \circ G)\circ F &= H \circ (G \circ F) \\
    H \circ (F + G) &= H \circ F + H \circ G \\ 
    (F+G)\circ H &= F \circ H + G \circ H
\end{align*}
$$

# Matriz de uma transformação

Sejam $U$ e $V$ dois espaços vetoriais sobre $\mathbb{R}$ de dimensão finita. Além disso, sejam $B = \{u_1, u_2, ..., u_n\}$ e $C = \{v_1, v_2, ..., v_m\}$ bases de $U$ e $V$, respectivamente. 

Note que o vetor genérico $F(u) \in V$ pode ser escrito como $F$ aplicada a uma combinação linear dos vetores de $B$. 

$$
\begin{align*}
    F(u) &= F(\beta_1u_1 + \beta_2u_2 + ... + \beta_nu_n) \\ 
    \therefore F(u) &= F(\beta_1u_1) + F(\beta_2u_2) + ... + F(\beta_nu_n) \\ 
    \therefore F(u) &= \beta_1 F(u_1) + \beta_2 F(u_2) + ... + \beta_n F(u_n)
\end{align*}
$$

Como os vetores $F(u_1), F(u_2), ..., F(u_n)$ pertencem ao espaço $V$, estes podem ser escritos como combinações lineares dos vetores de $C$. 

$$
\begin{align*}
    F(u_1) &= \alpha_{11} v_1 + \alpha_{12} v_2 + ... + \alpha_{1m}v_m \\ 
    F(u_2) &= \alpha_{21} v_1 + \alpha_{22} v_2 + ... + \alpha_{2m}v_m \\ 
    ... \\ 
    F(u_n) &= \alpha_{n1} v_1 + \alpha_{n2} v_2 + ... + \alpha_{nm}v_m
\end{align*}
$$

Perceba então que, ao considerarmos o vetor formado pelas coordenadas do vetor $u \in U$ genérico, 

$$
X =
\begin{pmatrix}
    \beta_1 \\ \beta_2 \\ ... \\ \beta_n 
\end{pmatrix}_{n \times 1}
$$

podemos construir uma matriz 

$$
\begin{pmatrix}
    \alpha_{11} & \alpha_{21} & ... & \alpha_{n1} \\ 
    \alpha_{12} & \alpha_{22} & ... & \alpha_{n2} \\ 
    ... & ... & ... & ... \\ 
    \alpha_{1m} & \alpha_{2m} & ... & \alpha_{nm}
\end{pmatrix}_{m \times n}
$$

de forma que 

$$
\begin{pmatrix}
    \alpha_{11} & \alpha_{21} & ... & \alpha_{n1} \\ 
    \alpha_{12} & \alpha_{22} & ... & \alpha_{n2} \\ 
    ... & ... & ... & ... \\ 
    \alpha_{1m} & \alpha_{2m} & ... & \alpha_{nm}
\end{pmatrix}_{m \times n}
\begin{pmatrix}
    \beta_1 \\ \beta_2 \\ ... \\ \beta_n 
\end{pmatrix}_{n \times 1}
=
\begin{pmatrix}
    \alpha_{11} \beta_1 + \alpha_{21} \beta_2 + ... + \alpha_{n1} \beta_n \\ 
    \alpha_{12} \beta_1 + \alpha_{22} \beta_2 + ... + \alpha_{n2} \beta_n \\ 
    ... \\ 
    \alpha_{1m} \beta_1 + \alpha_{2m} \beta_2 + ... + \alpha_{nm} \beta_n
\end{pmatrix}
$$

Perceba que a i-ésima linha da matriz no membro direito da equação corresponde à coordenada associada ao i-ésimo vetor de $C$. Isto pode ser verificado fazendo a substituição de $F(u_1), F(u_2), ..., F(u_n)$ na expressão para $F(u)$, obtendo

$$
\begin{align*}
    F(u) &= \beta_1 F(u_1) + \beta_2 F(u_2) + ... + \beta_n F(u_n) \\ 
    \therefore F(u) &= \beta_1 (\alpha_{11} v_1 + \alpha_{12} v_2 + ... + \alpha_{1m} v_m) + \beta_2 (\alpha_{21} v_1 + \alpha_{22} v_2 + ... + \alpha_{2m} v_m) + ... + \beta_n(\alpha_{n1} v_1 + \alpha_{n2} v_2 + ... + \alpha_{nm} v_m) \\ 
    \therefore F(u) &= v_1(\beta_1 \alpha_{11} + \beta_2 \alpha_{21} + ... + \beta_n \alpha_{n1}) + v_2(\beta_1 \alpha_{12} + \beta_2 \alpha_{22} + ... + \beta_n \alpha_{n2}) + ... + v_m(\beta_1 \alpha_{1n} + \beta_2 \alpha_{2m} + ... + \beta_n \alpha_{nm})
\end{align*}
$$

Perceba que os escalares associados aos vetores $v_1, v_2, ..., v_m$ são precisamente as linhas da matriz que produzimos. 

Dessa forma, a matriz 

$$
\begin{pmatrix}
    \alpha_{11} & \alpha_{21} & ... & \alpha_{n1} \\ 
    \alpha_{12} & \alpha_{22} & ... & \alpha_{n2} \\ 
    ... & ... & ... & ... \\ 
    \alpha_{1m} & \alpha_{2m} & ... & \alpha_{nm}
\end{pmatrix}_{m \times n}
$$

é denominada <b>matriz de $F$ em relação às bases $B$ e $C$</b>, sendo denotada como $(F)_{B,C}$. Por questões de notação, quando $B = C$ podemos omitir uma das bases ou então, quando a base considerada for inambígua pelo contexto, podemos omiti-la da notação totalmente. 

Ao considerarmos um espaço vetorial $U$ de bases $B$ e $C$, verificamos que a matriz do operador idêntico $I \in L(U)$ escreve as coordenadas de um vetor $u$ qualquer, inicialmente em relação a uma base $B$, em relação a uma outra base $C$. Este é um caso particular da definição considerada anteriormente, e pode ser verificada ao substituir $F$ geral acima pelo operador idêntico $I$.

Por fim, vemos que, caso fixarmos as bases para $U$ e $V$, podemos associar a cada $F \in L(U, V)$ uma matriz $M \in M_{m \times n} (\mathbb{R})$. Ou seja, definimos uma função 

$$
F \to (F): L(U,V) \to M_{m \times n} (\mathbb{R})
$$ 

bijetora e, portanto, um isomorfismo entre $L(U,V)$ e $M_{m \times n} (\mathbb{R})$. Toda transformação linear possui uma matriz associada e vice-versa.

## Matriz de uma transformação composta 

Dados três espaços vetoriais, $U$, $V$ e $W$ sobre $\mathbb{R}$ de dimensões $m$, $n$ e $p$ e bases $B = \{u_1, u_2, ..., u_n\}$, $C = \{v_1, v_2, ..., v_m\}$ e $D = \{w_1, w_2, ..., w_p\}$, além de duas transformações lineares $F: U \to V$ e $G: V \to W$, a matriz correspondente à 

$$
(G \circ F)_{B, D}
$$

é dada por

$$
(G)_{C,D} \cdot (F)_{B, C}
$$

Esta igualdade pode ser verificada comparando o termo geral de $(G \circ F)_{B, D}$ com o termo geral da multiplicação das duas matrizes. 

Como consequência direta da existência de matrizes de transformações compostas, além das noções básicas de mais anteriormente nesta seção, é possível definir a <b>matriz da transformação inversa</b> de uma transformação linear $F: U \to V$.

De fato, se temos dois espaços vetoriais, $U$ e $V$, sobre $\mathbb{R}$ de mesma dimensão $n$ e bases $B$ e $C$, respectivamente, temos que

$$
(F)_{B, C}
$$

é uma matriz inversível e sua inversa é

$$
(F^{-1})_{B, C}
$$

representando essa transformação linear inversa. É importante lembrar que para esta função inversa estar definida, é necessário que $F$ seja bijetora, isto é, que $F: U \to V$ seja um isomorfismo entre $U$ e $V$. 

Para visualizar uma outra consequência dessa definição, perceba que

$$
\begin{align*}
    (F)_{B, C} \cdot (F^{-1})_{C, B} &= (F \circ F^{-1})_C = I_n \\ 
    (F^{-1})_{C, B} \cdot (F)_{B,C} &= (F^{-1} \circ F)_B = I_n
\end{align*}
$$

e, portanto, $I_n$ é a matriz do operador idêntico tanto de $U$ como de $V$.

Destas conclusões podemos explorar um problema interessante. Considere um espaço vetorial $U$ sobre $\mathbb{R}$ de dimensão $n$ e duas bases deste espaço, $B = \{u_1, u_2, ..., u_n\}$ e $C = \{v_1, v_2, ..., v_n\}$. Considere ainda um operador linear de $U$, $T$. Dado duas matrizes $(T)_B$ e $(T)_C$, como relacioná-las por meio de uma expressão? Em outras palavras, como a matriz de um operador linear modifica-se ao considerarmos uma outra base, e como podemos obtê-la? 

De início, sabemos que a matriz de mudança de base de $B$ para $C$ é da forma 

$$
M = (I)_{C, B}
$$

e, portanto 

$$
M^{-1} = (I^{-1})_{B, C} = (I)_{B, C}
$$

assim, podemos escrever, finalmente:

$$
M(T)_B M^{-1}=(I)_{C, B} (T)_B (I)_{B, C} = (I)_{C, B}(T)_{B, C} = (T)_C
$$

## Matrizes semelhantes 

Considere duas matrizes quadradas de ordem $n$, $P$ e $Q$. Dizemos que $P$ é <b>semelhante</b> a $Q$ se, e somente se, existe uma matriz inversível $M_{n \times n}$ de forma que seja possível afirmar

$$
P = M^{-1}QM
$$

Essa relação é importante no estudo da álgebra linear pois, caso $P$ e $Q$ sejam semelhantes, elas representam o mesmo operador linear, porém em bases diferentes. É interessante mencionar que a recíproca também é verdadeira: duas matrizes de um mesmo operador linear são semelhantes. 

Dessa descrição é perceptível que $M$ é a <b>matriz de mudança de base</b> do operador linear.

# Espaço dual

Dado um espaço vetorial $U$ sobre $\mathbb{R}$, denominamos por <b>espaço dual</b> de $U$ (e denotamos por $U^*$) o espaço de todas as transformações lineares $F: U \to \mathbb{R}$. Dessa forma, podemos escrever $L(U, \mathbb{R}) = U^*$. Cada transformação $F \in U^*$ é chamada <b>forma linear</b> ou <b>funcional linear</b> sobre $U$. 

Um exemplo interessante que nos estimula a pensar em técnicas que nos irão ajudar a validar um importante resultado é a forma geral de um funcional linear sobre $\mathbb{R}^n$. 

Imagine uma forma linear $F$ sobre o $\mathbb{R}^n$. Seja então $\{e_1, e_2, ..., e_n\}$ a <b>base canônica</b> do $\mathbb{R}^n$, isto é, 

$$
\begin{align*}
    e_1 &= (1, 0, ..., 0) \\ 
    e_2 &= (0, 1, ..., 0) \\ 
    ... \\ 
    e_n &= (0, 0, ..., 1)
\end{align*}
$$

Dado então $u = (x_1, ..., x_n) \in \mathbb{R}^n$, temos que $u = x_1e_1 + ... + x_ne_n$. Assim, aplicando $F$, obtemos $F(u) = x_1F(e_1) + ... + x_nF(e_n) = x_1k_1 + ... + x_nk_n$. Note que indicamos os escalares $F(e_1), ..., F(e_n)$ por $k_1, ..., k_n$. 

Como a aplicação $F: \mathbb{R}^n \to \mathbb{R}$, com $F(x_1, ..., x_n) = k_1x_1 + ... + k_nx_n$ é uma forma linear sobre $\mathbb{R}^n$, podemos afirmar então que 

$$
F \in (\mathbb{R}^n)^* \iff \exists k_1, ..., k_n \in \mathbb{R} | F(x_1, ..., x_n) = k_1x_1 + ... + k_nx_n \forall (x_1, ..., x_n) \in \mathbb{R}^n
$$

Isto é, que uma aplicação $F$ é um funcional linear de $\mathbb{R}^n$ se, e somente se, existem escalares $k_1, ..., k_n$ reais tais que, para todo vetor pertencente ao $\mathbb{R}^n$, a aplicação desse vetor resulte na combinação linear de suas coordenadas e dos escalares $k_1, ..., k_n$. 

Agora, o importante resultado previamente mencionado. Se $B = (u_1, ..., u_n)$ é uma base do espaço vetorial $U$, então as aplicações $F_1, ..., F_n$ que associam a cada $u = x_1u_1 + ... + x_nu_n \in U$ os elementos $x_1, ..., x_n$, respectivamente (isto é, cada $F_i$ retorna a i-ésima coordenada do vetor), constituem uma base desse espaço. Logo, se $\dim{U} = n$, então $\dim{U} = \dim{U^*} = n$.

Para demonstrá-lo, vamos supor um espaço vetorial $U$ sobre $\mathbb{R}$ com um conjunto base $B = {u_1, ..., u_n}$. Dessa forma, todo vetor $u$ é da forma $u = x_1u_1 + ... + x_nu_n, x_i \in \mathbb{R}$. 

Ao definirmos aplicações $F_1, ..., F_n$ de forma que 

$$
F_i: U \to \mathbb{R} \\ 
F_i(u) = x_i (i = 1, 2, ..., n)
$$

é possível verificar que estas pertencem a $U^*$.

Dado um funcional linear $F$ sobre $U$, vamos supor que $F(u_1) = k_1, ..., F(u_n) = k_n$. Consequentemente, temos que 

$$
\begin{align*}
F(u) &= x_1F(u_1) + ... + x_nF(u_n) \\
\therefore F(u) &= k_1x_1 + ... + k_nx_n \\ 
\therefore F(u) &= k_1F_1(u)+...+k_nF_n(u) \\ 
\therefore F(u) &=(k_1F_1 + ... + k_nF_n)(u) 
\end{align*}
$$

Como $u$ é um vetor qualquer, mostramos que $F = k_1F_1 + ... + k_nF_n$ e que, portanto, $[F_1, ..., F_n] = U^*$ (o conjunto formado pelas $F_i$ gera o espaço dual).

Por outro lado, se supormos $\alpha_1 F_1 + ... + \alpha_n F_n = 0$, teremos 

$$
\begin{align*}
    \alpha_1 F_1(u_1) + ... + \alpha_n F_n (u_1) &= \alpha_1 = 0 \\ 
    ... \\ 
    \alpha_1 F_1(u_n) + ... + \alpha_n F_n (u_n) &= \alpha_n = 0
\end{align*}
$$

e, portanto, o conjunto $\{F_1, ..., F_n\}$ é linearmente independente em $U^*$. Como este conjunto é L.I. e gera $U^*$, vemos que este é uma base do espaço dual de $U$.

# Referências

1. CALLIOLI, Carlos Alberto; DOMINGUES, Hygino H.; COSTA, Roberto da. <i>Álgebra Linear e Aplicações</i>. 4ª edição revisada. São Paulo: Atual, 1983.
2. Website da iniciação científica de Alfredo Vitorino, IMECC-UNICAMP, <i>Álgebra Linear e Aplicações</i>. (<a href="https://www.ime.unicamp.br/~marcia/AlgebraLinear/index.html" target="_blank">Acesse aqui</a>)