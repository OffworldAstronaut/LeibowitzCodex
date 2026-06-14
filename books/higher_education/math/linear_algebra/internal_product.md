# Produto interno

# Produto interno

Durante o aprendizado de Geometria Analítica, em especial quando estudamos sobre o <a href="/books/higher_education/math/analytical_geometry/the_plane_the_space.html" target="_blank">plano e espaço</a> trabalhamos constantemente com as noções de <b>produto escalar</b>, <b>norma</b> de um vetor e a noção de <b>distância</b> entre dois pontos. Daqui em diante, esses conceitos serão generalizados para espaços além do $\mathbb{R}^2$ e do $\mathbb{R}^3$ e das operações que estamos acostumados. 

DE forma geral, podemos definir o <b>produto interno</b> como uma função, denotada por $\langle u, v \rangle$ ("u interno v"), que transforma cada par ordenado $(u, v) \in U \times U$ em um número real. Essa função deve obedecer às seguintes propriedades básicas: 

$$
\begin{align*}
    \langle u + v, w \rangle &= \langle u, w \rangle + \langle v, w \rangle, \forall u, v, w \in U \\ 
    \langle \alpha u, v \rangle &= \alpha \langle u, v \rangle, \forall \alpha \in \mathbb{R} \text{ e } \forall u, v \in U \\ 
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
    \langle u, \alpha v \rangle &= \alpha \langle u, v \rangle, \forall \alpha \in \mathbb{R} \text{ e } u, v \in U \\ 
    \langle u, v + w \rangle &= \langle u, v \rangle + \langle u, w \rangle, \forall u, v, w \in U \\ 
    \left\langle \sum_{i = 1}^m \alpha_i u_i, v \right\rangle &= \sum_{i}^m \alpha_i \langle u_i, v \rangle, m \in \mathbb{Z}^*_+ \\
    \left\langle u, \sum_{j=1}^n \alpha_j v_j \right\rangle &= \sum_{j = 1}^n \alpha_j \langle u, v_j \rangle, n \in \mathbb{Z}^*_+ \\
    \left\langle \sum_{i = 1}^m \alpha_i u_i, \sum_{j = 1}^n \beta_j v_j \right\rangle &= \sum_{i=1}^m \sum_{j=1}^n \alpha_i \beta_j \langle u_i, v_j \rangle
\end{align*}
$$

## Espaços hermitianos

Enquanto espaços vetoriais sobre os reais e dotados de produto interno recebem o nome de <b>euclidianos</b>, espaços vetoriais sobre os complexos dotados de um produto interno são chamados <b>hermitianos</b> ou <b>unitários</b>. Alternativamente, na literatura internacional, estes espaços ainda são chamados simplesmente de <i>complex inner product spaces</i> ("espaços complexos com produto interno"). 

De fato, dado um espaço vetorial $V$ definido sobre o corpo $\mathbb{C}$, um produto interno sobre $V$ é uma função $(u, v) \mapsto \langle u, v \rangle$, de $V \times V$ para $\mathbb{C}$, de forma que vale 

$$
\begin{align*}
    \langle u_1 + u_2, v \rangle &= \langle u_1, v \rangle + \langle u_2, v \rangle, \forall u_1, u_2, v \in V \\ 
    \langle \alpha u, v \rangle &= \alpha \langle u, v \rangle, \forall \alpha \in \mathbb{C} \text{ e } \forall u, v \in V \\ 
    \langle u, v \rangle &= \bar{\langle v, u \rangle}, \forall u, v \in V \\ 
    \forall u \in V, u &\neq o, \langle u, u \rangle \in \mathbb{R} \text{ e } \langle u, u \rangle \gt 0
\end{align*}
$$

Nos espaços hermitianos valem tanto os conceitos fundamentais dos epaços euclidianos (norma, distância, ortogonalidade e bases ortonormais, complmeneto ortonormal e isometria) como os resultados importantes obtidos anteriormente, como a desigualdade de Cauchy-Schwartz, as propriedades da métrica induzida pela norma, a ortonormalização de Gram-Schmidt e a equivalência introduzida na seção sobre isometrias.

Vale mencionar ainda um caso especial dos espaços hermitianos: os <b>espaços de Hilbert</b>  são muito comuns na Física em função de sua essencialidade na descrição da mecânica quântica.

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

Um importante resultado inicial é a <b>desigualdade de Cauchy-Schwartz</b>. Se $U$ é um espaço vetorial euclidiano, então vale 

$$
|\langle u, v \rangle| \le ||u|| \cdot ||v||, \forall u, v \in U
$$

Um corolário notável dessa desigualdade é a chamada <b>desigualdade triangular</b>, uma generalização vetorial da desigualdade entre os lados de um triângulo no plano. 

Para todo vetor $u, v$ em um espaço euclidiano $U$, vale 

$$
||u + v|| \le ||u|| + ||v||
$$

Um exemplo interessante dessa desigualdade é a chamada <b>desigualdade de Lagrange</b>, obtida ao considerarmos $\mathbb{R}^n$ com seu produto interno usual. Sendo $u = (x_1, ..., x_n)$ e $v = (y_1, ..., y_n)$ vetores deste espaço, então vale 

$$
\begin{align*}
    |\langle u, v \rangle| \le ||u|| \cdot ||v|| &\iff \left(\sum_{i=1}^n x_iy_i\right) \le \left(\sum_{i=1}^n x_i^2\right)^{1/2} \left(\sum_{i=1}^n y_i^2\right)^{1/2} \\ 
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
    d(u, v) &\le 0, \forall u, v \in U  \\ 
    d(u, v) &= 0 \iff u = v \\ 
    d(u, v) &= d(v, u), \forall u, v \in U \\ 
    d(u, v) &\le d(u, w) + d(w, v), \forall u, v, w \in U
\end{align*}
$$

Essa função é chamada <b>métrica sobre</b> $U$, com o <b>número</b> $d(u,v)$ sendo a <b>distância</b> entre $u$ e $v$.

Um resultado interessante surge dessa noção de norma e distância num espaço euclidiano. É possível generalizar a expressão usual para <b>ângulos</b> entre vetores para qualquer espaço euclidiano, de forma que 

$$
\cos{\theta} = \dfrac{\langle u, v \rangle}{||u|| \cdot ||v||}
$$

É comum nomear o número $\theta$ como o "ângulo" entre os vetores $u$ e $v$, o que este realmente corresponde ao considerarmos a representação geométrica dos espaços $\mathbb{R}^2$  e $\mathbb{R}^3$ com seus produtos usuais.

# Ortogonalidade 

Vimos na Geometria Analítica que dois vetores são considerados ortogononais (formam um ângulo de 90° quando transladados para a origem) quando seu produto escalar é nulo. De fato, esse resultado é um caso particular de uma definição mais ampla.

Considerando um espaço euclidiano $U$, dizemos que dois vetores $u$ e $v$ são ortogonais se, e somente se, $\langle u, v \rangle = 0$. Além disso, um conjunto de vetores é dito ortonormal se todos são unitários (possuem norma 1) e ortogonais entre si. Vale notar que se esse conjunto é uma base de um espaço vetorial, este é chamado <b>base ortonormal</b> deste espaço. 

Uma proposição interessante que pode ser exposta inicialmente é a de que todo conjunto ortonormal $S = \{v_1, v_2, ..., v_n\} contido num espaço euclidiano é necessariamente L.I. 

## Processo de ortonormalização de Gram-Schmidt

O processo de ortonormalização de Gram-Schmidt, nomeado em homenagem aos matemáticos Jorgen Pedersen Gram e Erhard Schmidt, é um algoritmo que, dado um conjunto de vetores, retorna uma base ortonormal para o espaço (euclidiano) destes vetores. É importante salientar que o espaço deve ser de dimensão finita. O coração deste algoritmo será enunciado por meio do teorema a seguir. 

<aside>

Seja $S = \{v_1, v_2, ..., v_n\}$ um subconjunto ortonormal de um espaço euclidiano $U$. Então, para todo $u \in U$, o vetor $w = u - \langle u, v_1 \rangle v_1 - ... - \langle u, v_n \rangle v_n$ é ortogonal a todo vetor do subespaço gerado pelos vetores de $S$. 

</aside>

Além disso, Gram e Schmidt chegaram à conclusão de que todo espaço vetorial de dimensão finita possui uma base ortonormal. A construção dessa base pode ser realizada pela aplicação sucessiva do teorema enunciado anteriormente.

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
v_2 = u_2 - \langle u_2, g_1 \rangle g_1 = (0, 1, 1) - 0(1, 0, 0) = (0, 1, 1)
$$

é ortogonal a todos os vetores gerados por $B'$, que é uma base ortonormal. Assim, podemos normalizá-lo e adicioná-lo a este novo conjunto. 

$$
g_2 = \dfrac{v_2}{||v_2||} = \left(0, \dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}\right) 
$$

Excelente. Agora temos $B' = \{g_1, g_2\}$, com $g_1 = (1, 0, 0)$ e $g_2 = \left(0, \dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2}\right)$, como uma base ortonormal de um subespaço do $\mathbb{R}^3$ de dimensão 2 — um plano!

Aplicando esse processo novamente, podemos ver que o vetor 

$$
v_3 = u_3 - \langle u_3, g_1 \rangle g_1 - \langle u_3, g_2 \rangle g_2 = \left(0, -\dfrac{1}{2}, \dfrac{1}{2}\right)
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
U^{\perp} = \{v \in V | \langle v, u \rangle = 0, \forall u \in U\}
$$ 

é o complemento ortogonal de $U$. É possível mostrar que este conjunto é também um subespaço de $U$. 

Um resultado notável sobre esse espaço vetorial é o fato de que, sendo $U$ um espaço euclidiano e $V$ um subespaço deste, temos que $U = V \oplus V^{\perp}$, isto é, $U = V + V^{\perp}$ e $V \cap V^{\perp} = \{o\}$.

# Isometrias

Um certo tipo de operador muito interessante existe na Álgebra Linear cuja definição es´ta intimamente ligada ao conceito de distância. Definimos um operador $T \in L(U)$ como uma <b>isometria</b> — também chamado <b>operador ortogonal</b> — sobre $U$ caso valha, para este operador 

$$
||T(u)|| = ||u||, \forall u \in U
$$

De forma concisa, uma isometria é um operador num espaço euclidiano que conserva a norma dos vetores. Notavelmente, temos que o operador rotação conforme definido no $\mathbb{R}^2$, 

$$
T(x, y) = (x \cos{\theta} - y\sin{\theta}, x\sin{\theta} + y\cos{\theta})
$$

e no $\mathbb{R}^3$, 

$$
T(x, y, z) = (x \cos{\theta} - y\sin{\theta}, x\sin{\theta} + y\cos{\theta}, z)
$$

são ambos isometrias. 

Como últimos dois resultados importantes desta seção, é importante apresentar que toda isometria $T: U \to U$ é um isomorfismo e, além disso, que são equivalentes as afirmações: $T$ é isometria; $T$ transforme bases ortonormais de $U$ em bases ortonomais de $U$; $\langle T(u), T(v) \rangle = \langle u, v \rangle, \forall u, v \in U$.

<aside>

<b>Teorema</b> — Toda isometria $T \in L(U)$ é um isomorfismo. 

<b>Demonstração</b> — Podemos demonstrar essa relação ao mostrar que a isometria $T$ é injetora. De fato, temos que, dado um certo $u \in U$:

$$
T(u) = o \implies ||T(u)|| = 0 \implies ||u|| = 0 \implies u = o \implies \ker{T} = \{o\}
$$

Portanto, a isometria $T$ é um isomorfismo.

</aside>

# Operadores autoadjuntos

Definimos como <b>autoadjuntos</b> os operadores que, dado um espaço vetorial $V$ e um operador $F \in L(V)$, vale 

$$
\langle F(u), v \rangle = \langle u, F(v) \rangle
$$

para todo $u, v \in V$. 

Caso $V$ tenha dimensão finita, um operador autoadjunto pode ser representado como uma matriz simétrica, caso esta matriz esteja representando-o em relação a uma base ortonormal. De fato, nessas condições, um oeprador $F$ é autoadjunto se, e somente se, este pode ser representado como uma matriz simétrica em relação a uma base ortonormal.

# Referências

1. CALLIOLI, Carlos Alberto; DOMINGUES, Hygino H.; COSTA, Roberto da. <i>Álgebra Linear e Aplicações</i>. 4ª edição revisada. São Paulo: Atual, 1983.
2. Website da iniciação científica de Alfredo Vitorino, IMECC-UNICAMP, <i>Álgebra Linear e Aplicações</i>. (<a href="https://www.ime.unicamp.br/~marcia/AlgebraLinear/index.html" target="_blank">Acesse aqui</a>)