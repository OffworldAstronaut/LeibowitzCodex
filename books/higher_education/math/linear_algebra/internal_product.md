# Produto interno

# Produto interno

Durante o aprendizado de Geometria Analítica, em especial quando estudamos sobre o <a href="/books/higher_education/math/analytical_geometry/the_plane_the_space.html" target="_blank">plano e espaço</a>, trabalhamos constantemente com as noções de <b>produto escalar</b>, <b>norma</b> de um vetor e a noção de <b>distância</b> entre dois pontos. Daqui em diante, esses conceitos serão generalizados para espaços além do $\mathbb{R}^2$ e do $\mathbb{R}^3$ e das operações que estamos acostumados. 

De forma geral, podemos definir o <b>produto interno</b> como uma função, denotada por $\langle u, v \rangle$ ("u interno v"), que transforma cada par ordenado $(u, v) \in U \times U$ em um número real, sendo $U$ um espaço vetorial sobre $\mathbb{R}$. Essa função deve obedecer às seguintes propriedades básicas: 

$$
\begin{align*}

    \langle u, v + w \rangle &= \langle u, v \rangle + \langle u, w \rangle, \forall u, v, w \in U \\ 
    \langle u, \alpha v \rangle &= \alpha \langle u, v \rangle, \forall \alpha \in \mathbb{R} \text{ e } \forall u, v \in U \\ 
    \langle u, v \rangle &= \langle v, u \rangle, \forall u, v \in U \\ 
    \langle u, u \rangle &\gt 0, \forall u \neq o
\end{align*}
$$

A partir daqui podemos inclusive extrair a definição de <b>espaço euclidiano</b> como um espaço vetorial sobre $\mathbb{R}$ que possui um produto interno. Note que, como é possível definir diversos produtos internos, esta definição vale para diversos conjuntos que não necessariamente são formados por n-uplas reais. 

Um exemplo inicial de espaço euclidiano é o próprio $\mathbb{R}^n$ munido de seu produto interno usual, o produto escalar. Um outro exemplo que pode ser citado de espaço euclidiano é o espaço dos polinômios $P_n (\mathbb{R})$ munido do produto interno 

$$
(f(t), g(t)) \mapsto \langle f(t), g(t) \rangle = \int_0^1 f(t)g(t) \ dt
$$

com $f(t)$ e $g(t)$ polinômios em $P_n (\mathbb{R})$. 

É importante observar que, geralmente, ao referir-se ao $\mathbb{R}^n$ como um espaço euclidiano, estamos considerando o produto interno como o usual produto escalar.

Continuando, da definição de produto interno podemos inclusive extrair algumas propriedades. São elas: 

$$
\begin{align*}
    \langle o, u \rangle &= \langle u, o \rangle = 0, \forall u \in U \\ 
    \langle \alpha u, v \rangle &= \alpha \langle u, v \rangle, \forall \alpha \in \mathbb{R} \text{ e } u, v \in U \\ 
    \langle u + v, w \rangle &= \langle u, w \rangle + \langle v, w \rangle, \forall u, v, w \in U \\ 
    \left\langle \sum_{i = 1}^m \alpha_i u_i, v \right\rangle &= \sum_{i=1}^m \alpha_i \langle u_i, v \rangle, m \in \mathbb{Z}^*_+ \\
    \left\langle u, \sum_{j=1}^n \alpha_j v_j \right\rangle &= \sum_{j = 1}^n \alpha_j \langle u, v_j \rangle, n \in \mathbb{Z}^*_+ \\
    \left\langle \sum_{i = 1}^m \alpha_i u_i, \sum_{j = 1}^n \beta_j v_j \right\rangle &= \sum_{i=1}^m \sum_{j=1}^n \alpha_i \beta_j \langle u_i, v_j \rangle
\end{align*}
$$

Vale mencionar ainda um caso especial dos espaços com produto interno: os <b>espaços de Hilbert</b>.  São muito comuns na Física em função de sua essencialidade na descrição da mecânica quântica, embora sua definição precisa fuja do escopo atual. <!-- movi, conforme explicado abaixo, pois a definição mais precisa de espaço de Hilbert é "Espaço vetorial completo, isto é, em que toda sequência de Cauchy nele é convergente, com norma induzida pelo produto interno", que não envolve Necessariamente a noção de numerios compledxos. Tem mais ver com a métrica de distância, na verdade! --> 

## Espaços hermitianos

Enquanto espaços vetoriais sobre os reais e dotados de produto interno recebem o nome de <b>euclidianos</b>, espaços vetoriais sobre os complexos dotados de um produto interno são chamados <b>hermitianos</b> ou <b>unitários</b>. Alternativamente, na literatura internacional, estes espaços ainda são chamados simplesmente de <i>complex inner product spaces</i> ("espaços complexos com produto interno"). 

De fato, dado um espaço vetorial $V$ definido sobre o corpo $\mathbb{C}$, um produto interno sobre $V$ é uma função $(u, v) \mapsto \langle u, v \rangle$, de $V \times V$ para $\mathbb{C}$, de forma que vale 

$$
\begin{align*}
    \langle u_1 + u_2, v \rangle &= \langle u_1, v \rangle + \langle u_2, v \rangle, \forall u_1, u_2, v \in V \\ 
    \langle \alpha u, v \rangle &= \overline{\alpha} \langle u, v \rangle, \forall \alpha \in \mathbb{C} \text{ e } \forall u, v \in V \\ 
    \langle u, v \rangle &= \overline{\langle v, u \rangle}, \forall u, v \in V \\ 
    \forall u \in V, u &\neq o, \langle u, u \rangle \in \mathbb{R} \text{ e } \langle u, u \rangle \gt 0
\end{align*}
$$

em que a barra em cima indica a operação de complexo conjugado. Ou seja, diferentemente do caso real, o produto interno complexo é linear somente no <b>segundo argumento</b>, pela convenção adotada aqui, e a propriedade simétrica é agora chamada de simetria Hermitiana ou simetria conjugada. Assim, vale que, $\forall u_1, u_2, u, v_1,v_2,v \in V$ e $\forall \alpha,\beta \in \mathbb{C}$,
$$
\begin{aligned}
\langle \alpha u_1 + \beta u_2, v \rangle
&= \langle \alpha u_1, v \rangle + \langle \beta u_2, v \rangle = \overline{\alpha}\,\langle u_1, v \rangle + \overline{\beta}\,\langle u_2, v \rangle\\

\langle u, \alpha v_1 + \beta v_2 \rangle
&= \langle u, \alpha v_1 \rangle + \langle u, \beta v_2 \rangle = \alpha\,\langle u, v_1 \rangle + \beta\,\langle u, v_2 \rangle
\end{aligned}
$$
Nos espaços hermitianos valem tanto os conceitos fundamentais dos espaços euclidianos (norma, distância, ortogonalidade e bases ortonormais, complemento ortogonal e isometria) como os resultados importantes obtidos anteriormente, como a desigualdade de Cauchy-Schwarz, as propriedades da métrica induzida pela norma, a ortonormalização de Gram-Schmidt e a equivalência introduzida na seção sobre isometrias.

<!-- Na verdade um espaço de Hilbert nem sequer precisa ser complexo, então movi esse trecho para a parte de espaços munidos de produto interno -->

# Norma e distância 

Aqui vamos nos concentrar em generalizar o conceito de norma e distância. Podemos definir a <b>norma</b> de um vetor $u \in U$, com $U$ sendo um espaço euclidiano, como a raiz quadrada do produto interno de $u$ com ele mesmo. Isto é, indicando a norma de $u$ por $||u||$, temos que

$$
||u|| = \sqrt{\langle u, u \rangle}
$$

Como propriedades dessa operação, temos que, em todo espaço euclidiano $U$, vale: 

$$
\begin{align*}
    ||\alpha u|| &= |\alpha| ||u||, \forall \alpha \in \mathbb{R} \text{ e } \forall u \in U \\ 
    ||u|| &\ge 0, \forall u \in U \\ 
    ||u|| &= 0 \iff u = o
\end{align*}
$$

Um importante resultado inicial é a <b>desigualdade de Cauchy-Schwarz</b>. Se $U$ é um espaço vetorial euclidiano, então vale 

$$
|\langle u, v \rangle| \le ||u|| \cdot ||v||, \forall u, v \in U
$$

Um corolário notável dessa desigualdade é a chamada <b>desigualdade triangular</b>, uma generalização vetorial da desigualdade entre os lados de um triângulo no plano. 

Para quaisquer vetores $u, v$ em um espaço euclidiano $U$, vale 

$$
||u + v|| \le ||u|| + ||v||
$$

Um exemplo interessante dessa desigualdade é a chamada <b>desigualdade de Lagrange</b>, obtida ao considerarmos $\mathbb{R}^n$ com seu produto interno usual. Sendo $u = (x_1, ..., x_n)$ e $v = (y_1, ..., y_n)$ vetores deste espaço, então vale 

$$
\begin{align*}
    |\langle u, v \rangle| \le ||u|| \cdot ||v|| &\iff \left|\sum_{i=1}^n x_iy_i\right| \le \left(\sum_{i=1}^n x_i^2\right)^{1/2} \left(\sum_{i=1}^n y_i^2\right)^{1/2} \\ 
    &\iff \left(\sum_{i=1}^n x_iy_i\right)^2 \le \left(\sum_{i=1}^n x_i^2\right) \left(\sum_{i=1}^n y_i^2\right)
\end{align*}
$$

A definição de <b>distância</b> pode ser introduzida ao considerar a função $d: U \times U \mapsto \mathbb{R}$, 

$$
d(u, v) = ||u - v||, \forall u, v \in U
$$

com as propriedades 

$$
\begin{align*}
    d(u, v) &\ge 0, \forall u, v \in U  \\ 
    d(u, v) &= 0 \iff u = v \\ 
    d(u, v) &= d(v, u), \forall u, v \in U \\ 
    d(u, v) &\le d(u, w) + d(w, v), \forall u, v, w \in U
\end{align*}
$$

Essa função é chamada <b>métrica sobre</b> $U$, com o <b>número</b> $d(u,v)$ sendo a <b>distância</b> entre $u$ e $v$.

Um resultado interessante surge dessa noção de norma e distância num espaço euclidiano: o produto interno estabelece uma relação entre as magnitudes dos vetores com a componente de um deles na direção do outro. Em particular, quando $u$ e $v$ não são nulos, é possível generalizar a expressão usual para <b>ângulos</b> entre vetores para qualquer espaço euclidiano, de forma que 

$$
\cos{\theta} = \dfrac{\langle u, v \rangle}{||u|| \cdot ||v||}
$$

ou seja, o produto interno pode ser interpretado geometricamente como uma "projeção" de $v$ na direção $u$.

É comum nomear o número $\theta$ como o "ângulo" entre os vetores $u$ e $v$, o que este realmente corresponde ao considerarmos a representação geométrica dos espaços $\mathbb{R}^2$  e $\mathbb{R}^3$ com seus produtos usuais.

# Ortogonalidade 

Vimos na Geometria Analítica que dois vetores são considerados ortogonais (formam um ângulo de 90° quando transladados para a origem) quando seu produto escalar é nulo. De fato, esse resultado é um caso particular de uma definição mais ampla.

Considerando um espaço euclidiano $U$, dizemos que dois vetores $u$ e $v$ são ortogonais se, e somente se, $\langle u, v \rangle = 0$. Além disso, um conjunto de vetores é dito ortonormal se todos são unitários (possuem norma 1) e ortogonais entre si, valendo, portanto, $$\langle v_i, v_j \rangle = \delta_{ij}$$ onde $\delta_{ij}$ é a função delta de Kronecker, sendo $0$ se $i\neq j$ e $1$ se $i=j$. Se esse conjunto é uma base de um espaço vetorial, este é chamado <b>base ortonormal</b> deste espaço. 

Uma proposição interessante que pode ser exposta inicialmente é a de que todo conjunto ortonormal $S = \{v_1, v_2, ..., v_n\}$ contido num espaço euclidiano é necessariamente L.I. 

Com isso, podemos melhor formalizar o que foi discutido na seção "Matriz de uma transformação", em <a href="/books/higher_education/math/linear_algebra/linear_transformations.md" target="_blank">Transformações Lineares</a>, onde um operador linear $T$ aplicado a um vetor no espaço vetorial $V$, de dimensão $d$, pode ser representado como uma matriz com dimensão $d \times d$. 

Explicitamente, fixemos uma base ortonormal $\{v_j\}_{j=1}^d$ no espaço vetorial $V$, agora dotado de produto interno, e definamos os escalares
$$
T_{ij} := \langle v_i, T(v_j) \rangle \quad (i,j = 1, \cdots, d)
$$
O que nos permite organizar os números $T_{ij}$ em uma matriz
$$
[T] = \begin{pmatrix} T_{11} & \dots & T_{1d} \\ \vdots & \ddots & \vdots \\ T_{d1} & \dots & T_{dd} \end{pmatrix}
$$
onde o primeiro índice ($i$) indica a linha do elemento e o segundo índice ($j$) indica a coluna. Para melhor elucidar, suponha que $T$ é o operador identidade $I$. A relação acima, juntamente com a definição de base ortonormal, evidencia que a matriz $I$ formada tem $0$ sempre que $i\neq j$ (elementos fora da diagonal) e $1$ sempre que $i=j$ (elementos da diagonal).

 Do mesmo modo, qualquer vetor $u \in V$ também pode ser representado por uma matriz, bastando definir os números
$$
u_j := \langle v_j, u \rangle \quad (j = 1, \cdots, d)
$$
e os organizar numa matriz $d \times 1$:
$$
[u] = \begin{pmatrix} u_1 \\ \vdots \\ u_d \end{pmatrix}
$$

Por meio disso, a relação abstrata $T(u) = w$ envolvendo o operador $T$ e os vetores $u$ e $w$ em $V$ pode ser transformada numa equação matricial (após fixar uma base ortonormal) da forma
$$
[T]_v [u]_v = [w]_v
$$
onde $[\bullet]_v$ é a representação matricial do objeto $\bullet$ na base $\{v_j\}$. De fato, tomando o produto interno dos vetores $T(u)$ e $w$ com os elementos da base $v_j$, temos
$$
\langle v_j, T(u) \rangle = \langle v_j, w \rangle
$$
Mas como $u$ é uma combinação linear dos elementos da base de $V$, isto é, $u = \sum_{k=1}^{d} u_k v_k$, constata-se que
$$
\langle v_j, T (\sum_{k=1}^{d} u_k v_k )\rangle = \langle v_j, w \rangle
$$
$$
\sum_{k=1}^{d} \langle v_j, T (v_k) \rangle u_k = w_j
$$
$$
\sum_{k=1}^{d} T_{jk} u_k = w_j
$$
que é exatamente a relação onde $w_j = \langle v_j, w \rangle$. Além disso, como $T$ possui d colunas com d elementos cada, concluímos que $\dim L(V) = d^2$ (lembrando que $L(V)$ é o conjunto de todos os operadores lineares de $V$ em $V$).

## Processo de ortonormalização de Gram-Schmidt

O processo de ortonormalização de Gram-Schmidt, nomeado em homenagem aos matemáticos Jorgen Pedersen Gram e Erhard Schmidt, é um algoritmo que, dado um conjunto de vetores, retorna uma base ortonormal para o espaço (euclidiano) destes vetores. É importante salientar que o espaço deve ser de dimensão finita. O coração deste algoritmo será enunciado por meio do teorema a seguir. 

<aside>

<b>Teorema</b> — Seja $S = \{v_1, v_2, ..., v_n\}$ um subconjunto ortonormal de um espaço euclidiano $U$. Então, para todo $u \in U$, o vetor $w = u - \langle v_1, u \rangle v_1 - ... - \langle v_n, u \rangle v_n$ é ortogonal a todo vetor do subespaço gerado pelos vetores de $S$. 

</aside>

Além disso, Gram e Schmidt chegaram à conclusão de que todo espaço euclidiano de dimensão finita possui uma base ortonormal. A construção dessa base pode ser realizada pela aplicação sucessiva do teorema enunciado anteriormente.

![](https://upload.wikimedia.org/wikipedia/commons/e/ee/Gram-Schmidt_orthonormalization_process.gif)

<i>Exemplo de aplicação do processo de ortonormalização de Gram-Schmidt para a produção de uma base ortonormal para o $\mathbb{R}^3$. GIF sob Domínio Público, via <a href="https://commons.wikimedia.org/wiki/File:Gram-Schmidt_orthonormalization_process.gif" target="_blank">Wikimedia Commons</a>.</i>

<aside>

<b>Exemplo (ortonormalização de Gram-Schmidt)</b> — Pelo processo de Gram-Schmidt, crie uma base ortonormal do $\mathbb{R}^3$ a partir da base $B = \{u_1 = (1, 0, 0), u_2 = (0, 1, 1), u_3 = (0, 1, 2)\}$. 

Vamos criar um novo conjunto $B' = \{\}$. Inicialmente, temos que $B' = \{g_1\}$, com 

$$
g_1 = \dfrac{u_1}{||u_1||} = u_1 = (1, 0, 0)
$$

é uma base ortonormal do subespaço de $\mathbb{R}^3$ gerado por $B'$ (uma reta). Pelo teorema que fundamenta este processo, temos que o vetor 

$$
v_2 = u_2 - \langle g_1, u_2 \rangle g_1 = (0, 1, 1) - 0(1, 0, 0) = (0, 1, 1)
$$

é ortogonal a todos os vetores gerados por $B'$, que é uma base ortonormal. Assim, podemos normalizá-lo e adicioná-lo a este novo conjunto. 

$$
g_2 = \dfrac{v_2}{||v_2||} = \left(0, \dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}\right) 
$$

Excelente. Agora temos $B' = \{g_1, g_2\}$, com $g_1 = (1, 0, 0)$ e $g_2 = \left(0, \dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}\right)$, como uma base ortonormal de um subespaço do $\mathbb{R}^3$ de dimensão 2 — um plano!

Aplicando esse processo novamente, podemos ver que o vetor 

$$
v_3 = u_3 - \langle g_1, u_3 \rangle g_1 - \langle g_2, u_3 \rangle g_2 = \left(0, -\dfrac{1}{2}, \dfrac{1}{2}\right)
$$

é ortogonal a todos os vetores gerados por $B'$. Assim, podemos normalizá-lo e adicioná-lo ao conjunto. 

$$
g_3 = \dfrac{v_3}{||v_3||} = \left(0, -\dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}\right)
$$

Logo, temos agora que o conjunto 

$$
B' = \{g_1, g_2, g_3\}
$$

é uma base ortonormal do $\mathbb{R}^3$.

</aside>

Interessante, não? A lógica por trás do processo é progressivamente incrementar seu novo conjunto de vetores com outro vetor ortonormal para formar bases de subespaço de dimensões cada vez maiores.

Por fim, vale notar que há outras maneiras de representar esse processo — esta é a razão pela "discrepância" entre o ilustrado no GIF anteriormente e este exemplo: o processo do GIF não se utiliza da normalização em passos distintos, preferindo normalização enquanto o processo acontece.

## Complementos ortogonais

Um outro tópico interessante que pode ser abordado é o de <b>complementos ortogonais</b>. Considere um espaço $U$ euclidiano. Dado um subespaço $V$ deste espaço, dizemos que o conjunto 

$$
V^{\perp} = \{u \in U | \langle u, v \rangle = 0, \forall v \in V\}
$$ 

é o complemento ortogonal de $V$. É possível mostrar que este conjunto é também um subespaço de $U$. 

Um resultado notável sobre esse espaço vetorial é o fato de que, sendo $U$ um espaço euclidiano de dimensão finita e $V$ um subespaço deste, temos que $U = V \oplus V^{\perp}$, isto é, $U = V + V^{\perp}$ e $V \cap V^{\perp} = \{o\}$.

# Isometrias

Um certo tipo de operador muito interessante existe na Álgebra Linear cuja definição está intimamente ligada ao conceito de distância. Definimos um operador $T \in L(U)$ como uma <b>isometria</b> — também chamado <b>operador ortogonal</b>, ou <b>operador unitário</b> se o espaço for hermitiano — sobre $U$ caso valha, para este operador 
$$
\begin{align*}
d(T(u),T(v)) &= d(u,v), \forall u,v \in U\\
\iff||T(u)|| = d(T&(u),o)=d(u,o)= ||u||
\end{align*}
$$
De forma concisa, uma isometria é um operador num espaço euclidiano que preserva a distância entre os vetores, e portanto suas normas. Notavelmente, temos que o operador rotação conforme definido no $\mathbb{R}^2$,
<!-- É que a propriedade fundamental do operador isometria é conservar a distância, que tem como consequência a conservação da norma -->

$$
T(x, y) = (x \cos{\theta} - y\sin{\theta}, x\sin{\theta} + y\cos{\theta})
$$

e no $\mathbb{R}^3$, 

$$
T(x, y, z) = (x \cos{\theta} - y\sin{\theta}, x\sin{\theta} + y\cos{\theta}, z)
$$

são ambos isometrias. 

Como últimos dois resultados importantes desta seção, é importante apresentar que toda isometria $T: U \to U$ é um isomorfismo e, além disso, que são equivalentes as afirmações: $T$ é isometria; $T$ transforma bases ortonormais de $U$ em bases ortonormais de $U$; $\langle T(u), T(v) \rangle = \langle u, v \rangle, \forall u, v \in U$.

<aside>

<b>Teorema</b> — Toda isometria $T \in L(U)$ é um isomorfismo. 

</aside>

<aside>

<b>Demonstração</b> — Podemos demonstrar essa relação ao mostrar que a isometria $T$ é bijetora. De fato, temos que, dado um certo $u \in U$:

$$
T(u) = o \implies ||T(u)|| = 0 \implies ||u|| = 0 \implies u = o \implies \ker{T} = \{o\} 
$$

O que implica que $T$ é injetora. Como $U$ possui dimensão finita e $T: U \to U$, pelo teorema do núcleo e da imagem, segue que T é também sobrejetora. Portanto, a isometria $T$ é um isomorfismo. 

</aside>

Em dimensão finita, quando $T$ é representado em uma base ortonormal, e portanto tem uma representação matricial como a construída anteriormente, a condição de isometria é equivalente a simples relação: 

$$
T^{-1}=T^T \iff T^TT=I
$$

em que $^T$ é a operação de transposta e $I$ é o operador identidade.
No caso complexo, chamamos de operador unitário (normalmente representado por $U$, mas aqui confundiria com o espaço vetorial) se a inversa do operador for igual a sua <b>adjunta</b>, representada por $^*$ (definida mais adiante). Ou seja,

$$
T^{-1}=T^* \iff T^*T=I
$$

# Operadores autoadjuntos

Definimos como <b>autoadjuntos</b> os operadores, dado um espaço vetorial com $V$ produto interno e um operador $T \in L(V)$, cuja seguinte operação é satisfeita  

$$
\langle T(u), v \rangle = \langle u, T(v) \rangle
$$

para todo $u, v \in V$. 

Caso $V$ esteja sobre $\mathbb{R}$ e tenha dimensão finita, um operador autoadjunto pode ser representado como uma matriz simétrica, caso esta matriz esteja representando-o em relação a uma base ortonormal. De fato, nessas condições, um operador real $F$ é autoadjunto se, e somente se, este pode ser representado como uma matriz simétrica em relação a uma base ortonormal. Equivalentemente

$$
T=T^T
$$

Ainda, caso $V$ esteja sobre $\mathbb{C}$, esse operador é também chamado de <b>operador hermitiano</b>, cuja igualdade é com sua própria adjunta (e por isso o nome "autoadjunto"). Ou seja, é um operador hermitiano se satisfaz

$$
T=T^*
$$

de modo que

$$
\langle u, T(v) \rangle= \langle T^*(u), v \rangle  
$$

é equivalente ao caso real. 

No entanto, essa expressão é mais geral, sendo o que define a operação de adjunta, sendo importante mencionar a adjunta de um operador limitado sempre existe, independente da dimensão do espaço ser finita ou infinita. Para determinar o que significa essa operação matricialmente, suponhamos que o conjunto $\{v_j\}_{j=1}$ forma uma base ortonormal em $V$, então

$$
T_{ij} = \langle v_i, T(v_j) \rangle = \langle T^*(v_i), v_j \rangle = \overline{\langle v_j, T^*(v_i) \rangle} = \overline{(T^*)_{ji}}
$$

(consultar as propriedades de espaços hermitianos, no caso de dúvida) mas como, sendo $F=T^*$, vale que

$$
\langle u, F(v) \rangle= \langle F^*(u), v \rangle \iff \langle u, T^*(v) \rangle= \langle T^{**}(u), v \rangle 
$$

porém a definição de adjunta diz que $\langle u, T^*(v) \rangle =\langle T(u), v \rangle$, então

$$
\langle T^{**}(u), v \rangle = \langle T(u), v \rangle \iff T^{**}=T
$$

portanto,

$$
T_{ij}=\overline{(T^*)_{ji}} \iff (T^*)_{ij}=\overline{(T^{**})_{ji}} \iff (T^*)_{ij}=\overline{T_{ji}}
$$

Assim, de posse da representação matricial $T_{ij}$ de um operador linear $T$, podemos obter diretamente a representação matricial da sua adjunta $T^*$ através da operação de transposta-conjugada, isto é, toma-se a transposta da matriz $[T]$ (construir $T$ invertendo as linhas pelas colunas) junto com a conjugação de todos os números complexos presentes nela. Vale mencionar que físicos utilizam com muita frequência a notação $T^\dagger$ para a adjunta de $T$. 

Se o operador é autoadjunto, $T = T^*$, e $\lambda$ é um <a href="/books/higher_education/math/linear_algebra/eigenvalues.md" target="_blank">autovalor</a> de $T$ com <a href="/books/higher_education/math/linear_algebra/eigenvalues.md" target="_blank">autovetores</a> $v$, (a lembrar, a relação entre autovalor e autovetor é dada por $T(v)=\lambda v$) então $\lambda$ é necessariamente real. Isto é verdade porque, como $\langle v, T(u) \rangle = \langle T(v), u \rangle$ é satisfeito por qualquer par de vetores $v$ e $u$, tome $u = v$: $\langle v, Tv \rangle = \langle Tv, v \rangle$ ou $\langle v, \lambda v \rangle = \langle \lambda v, v \rangle$, e portanto, pela propriedade de simetria conjugada, $\bar\lambda = \lambda$.

Com isso exposto, podemos melhor esclarecer algumas propriedades importantes de operadores unitários.

# Operadores unitários e mudança de base

Se $U$ é um operador unitário e $u, w \in V$, então a aplicação desse operador nesses vetores satisfaz

$$
\langle U(u), U(w) \rangle = \langle u, U^*U(w) \rangle = \langle u, w \rangle.
$$

Ou seja, $U$ preserva produtos internos, e portanto a norma, exatamente como no caso do operador isometria. Isso significa que, se $u$ e $w$ forem ortogonais, então $U(u)$ e $U(w)$ continuam sendo ortogonais. Mas essa propriedade implica diretamente que a representação matricial de $U$ pode ser dada pelo produto interno entre os elementos das duas bases de $V$. De fato, seja $\{a_j\}_{j=1}^d$ e $\{b_j\}_{j=1}^d$ duas bases ortonormais do espaço vetorial $V$ de dimensão $d$, e $U$ um operador "arbitrário" que satisfaz

$$
U(a_j) = b_j \iff a_j=U^{-1}(b_j), \quad j = 1, \cdots, d
$$

isto é, transforma os elementos de uma base na outra base. Mas sendo um operador, $U$ pode ser representado matricialmente na base $\{a_j\}$. Desse modo, 

$$
U_{ij} = \langle a_i, U(a_j) \rangle = \langle a_i, b_j \rangle=\overline{\langle b_j, a_i \rangle}= \overline{\langle b_j, U^{-1}(b_i) \rangle} = \overline{(U^{-1})_{ji}}
$$

onde $(U^{-1})_{ji}$ é a representação matricial de $U^{-1}$ na base $\{b_j\}$. Mas como, 

$$
U_{ij}=\overline{(U^{-1})_{ji}} \iff (U^{-1})_{ij}=\overline{U_{ji}}
$$

temos que

$$
(U^{-1})_{ij}=(U^*)_{ij}
$$

Ou seja, $U$ é uma matriz de mudança de base entre $\{a_j\}$ e $\{b_j\}$ cujos elementos são obtidos diretamente pelo produto interno entre os vetores das duas bases:

$$
[U] =
\begin{pmatrix}
    \langle a_1, b_1 \rangle & \langle a_1, b_2 \rangle & \dots & \langle a_1, b_d \rangle \\
    \langle a_2, b_1 \rangle & \langle a_2, b_2 \rangle & \dots & \langle a_2, b_d \rangle \\
    \vdots & \vdots & \ddots & \vdots \\
    \langle a_d, b_1 \rangle & \langle a_d, b_2 \rangle & \dots & \langle a_d, b_d \rangle
\end{pmatrix}
$$

Essa propriedade é muito utilizada para fundamentar mudanças de bases em operadores. Se $T \in {L}(V)$, então sua representação matricial, dada uma base ortonormal mudada por $U$, é dada por

$$
\langle U(v_i), TU(v_j) \rangle = \langle v_i, U^*TU(v_j) \rangle = \langle v_i, \tilde{T}(v_j) \rangle = \tilde{T}_{ij}
$$

com $\tilde{T} := U^*TU$. Em palavras, a representação de $T$ na "nova" base $\{U(v_j)\}$ é idêntica a representação de $U^*TU$ na base "antiga" $\{v_j\}$. Um caso particular desse resultado é quando $T$ é um operador autoadjunto (hermitiano) e o operador unitário é construido de modo que as colunas sejam os autovetores de $T$. Nesse caso, a matriz $\tilde{T}$ resultante terá os elementos da diagonal correspondendo aos autovalores de $T$, com o restante dos elementos sendo nulos, processo este que é conhecido como diagonalização unitária, como consequência do <a href="/books/higher_education/math/linear_algebra/eigenvalues.md" target="_blank">teorema espectral</a>.

# Referências

1. CALLIOLI, Carlos Alberto; DOMINGUES, Hygino H.; COSTA, Roberto da. <i>Álgebra Linear e Aplicações</i>. 4ª edição revisada. São Paulo: Atual, 1983.
2. Website da iniciação científica de Alfredo Vitorino, IMECC-UNICAMP, <i>Álgebra Linear e Aplicações</i>. (<a href="https://www.ime.unicamp.br/~marcia/AlgebraLinear/index.html" target="_blank">Acesse aqui</a>)
3. Anotações de aula do professor Dr. Paulo Brandão (IF-UFAL) — <i>Óptica Quântica</i>.