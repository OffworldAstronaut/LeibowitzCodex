# Formas bilineares e quadráticas

# Formas bilineares 

De forma lacônica, podemos entender as formas bilineares como <a href="/books/higher_education/math/linear_algebra/linear_transformations.html" target="_blank">funcionais lineares</a> em que cada termo do funcional é linear em relação ao outro.

<aside>

<b>Definição (Formas bilineares, Boldrini)</b> — Uma forma bilinear é uma aplicação $B: V \times V \to \mathbb{R}$ definida por $(v, w) \mapsto B(v, w)$ de forma que, para todo $w, v \in V \times V$: 

$$
\begin{align*}
    B(v_1 + v_2, w) &= B(v_1, w) + B(v_2, w) \\ 
    B(v, w_1 + w_2) &= B(v, w_1) + B(v, w_2) \\ 
    B(av, w) &= B(v, aw) = aB(v, w) \\ 
\end{align*}
$$

</aside>

<aside>

<b>Exemplo</b> — Mostre que o produto escalar usual do $\mathbb{R}^N$, definido por $P: \mathbb{R}^N \times \mathbb{R}^N \to \mathbb{R}$, com $(u, v) \mapsto u_1v_1 + \dots + u_nv_n$.

</aside>

<aside>

<b>Solução</b> — Para a primeira parte deste exemplo, considere dois vetores $u, v \in \mathbb{R}^N$: 

$$
\begin{array}{cc}
    u =
    \begin{pmatrix}
        u_1 \\
        \vdots \\
        u_n
    \end{pmatrix}
    &v =
    \begin{pmatrix}
        v_1 \\
        \vdots \\
        v_n
    \end{pmatrix}
\end{array}
$$

É válido que $B(au, v) = B(u, av) = aB(u, v)$? 

Calculando o primeiro termo, obtemos:

$$
\begin{align*}
    B(au, v) &= au_1v_1 + \dots + au_nv_n \\ 
             &= a(u_1v_1 + \dots + u_nv_n) \\ 
             &= aB(u, v)
\end{align*}
$$

Calculando o segundo termo, obtemos: 

$$
\begin{align*}
    B(u, av) &= u_1av_1 + \dots u_nav_n \\ 
             &= a(u_1v_1 + \dots + u_nv_n) \\ 
             &= aB(u, v)
\end{align*}
$$

Logo, é sim válido afirmar que $B(au, v) = B(u, av) = aB(u, v)$.

Para a segunda parte deste exemplo, vamos considerar mais dois vetores pertencentes ao $\mathbb{R}^N$. 

$$
\begin{array}{cc}
    U =
    \begin{pmatrix}
        U_1 \\
        \vdots \\
        U_n
    \end{pmatrix}
    &V =
    \begin{pmatrix}
        V_1 \\
        \vdots \\
        V_n
    \end{pmatrix}
\end{array}
$$

Dito isso, é válido que $B(U + u, v) = B(U, v) + B(u, v)$? 

$$
\begin{align*}
    B(U + u, v) &= (U_1 + u_1)v_1 + \dots + (U_n + u_n)v_n \\ 
                &= U_1v_1 + u_1v_1 + \dots + U_nv_n + u_nv_n \\ 
                &= U_1v_1 + \dots + U_nv_n + u_1v_1 + \dots + u_nv_n \\ 
                &= B(U, v) + B(u, v)
\end{align*}
$$

Sim.

É válido que $B(u, V + v) = B(u, V) + B(u, v)$? 

$$
\begin{align*}
    B(u, V + v) &= u_1(V_1 + v_1) + \dots + u_n(V_n + v_n) \\ 
                &= u_1V_1 + u_1v_1 + \dots + u_nV_n + u_nv_n \\ 
                &= u_1V_1 + \dots + u_nV_n + u_1v_1 + \dots + u_nv_n \\ 
                &= B(u, V) + B(u, v)
\end{align*}
$$

Sim. Logo, concluímos que o produto escalar usual do $\mathbb{R}^N$ é uma forma bilinear.

</aside>

## Matriz de uma forma bilinear

Toda forma bilinear pode ser associada uma matriz de forma similar ao que pode ser realizado com transformações lineares. De fato, dado um espaço vetorial $V$ e uma forma bilinear $B: V \times V \to \mathbb{R}$, podemos escrever sua matriz em relação a base $\alpha = \{v_1, \dots, v_n\}$ — denotada por $(B)_{\alpha}^{\alpha}$ — por: 

$$
\begin{align*}
    B(v, w) &= B(x_1v_1 + \dots + x_nv_n, y_1v_1 + \dots + y_nv_n) \\ 
            &= \sum_{i, j}^n x_iy_i B(v_i, v_j) \\ 
            &= \begin{pmatrix}x_1 & \dots & x_n\end{pmatrix}
            \begin{pmatrix}
                B(v_1, v_1) & \dots & B(v_1, v_n) \\ 
                \vdots & \ddots & \vdots \\ 
                B(v_n, v_1) & \dots & B(v_n, v_n)
            \end{pmatrix}
            \begin{pmatrix}
                y_1 \\ \vdots \\ y_n
            \end{pmatrix} \\ 
            &= (v)^T_{\alpha} (B)^{\alpha}_{\alpha} (w)_{\alpha}
\end{align*}
$$

<aside>

<b>Exemplo (Boldrini)</b> — Seja $B: \mathbb{R}^2 \times \mathbb{R}^2 \to \mathbb{R}$ uma forma bilinear dada por $B(v, w) = -x_1y_1 + 2x_2y_1 + 5x_2y_2$ com $v = (x_1, x_2)$ e $w = (y_1, y_2)$. Considere então a base canônica de $\mathbb{R}^2$, $\alpha = \{e_1, e_2\}$. Logo, temos: 

$$
(B)^{\alpha}_{\alpha} =
\begin{pmatrix}
    B(e_1, e_1) & B(e_1, e_2) \\ 
    B(e_2, e_1) & B(e_2, e_2)    
\end{pmatrix}
= 
\begin{pmatrix}
    -1 & 0 \\ 
    2 & 5 
\end{pmatrix}
$$

Logo, a forma bilinear $B$ em sua escrita matricial é dada por: 

$$
B(v, w) = \begin{pmatrix}x_1 & x_2\end{pmatrix}
\begin{pmatrix}
-1 & 0 \\ 
2 & 5     
\end{pmatrix}
\begin{pmatrix}
    y_1 \\ y_2
\end{pmatrix} = (v)^T_{\alpha}(B)^{\alpha}_{\alpha}(w)_{\alpha}
$$

</aside>

Ainda podemos classificar as formas bilineares como <b>simétricas</b> ou não, de acordo com a definição a seguir. 

<aside>

<b>Definição (Forma bilinear simétrica, Boldrini)</b> — A forma bilinear $B: V \times V \to \mathbb{R}$ é simétrica se $B(v, w) = B(w, v) \forall v, w \in V$.

</aside>

<aside>

<b>Teorema</b> — Uma forma bilinear $B: V \times V \to \mathbb{R}$ é simétrica se, e somente se, $(B)_{\alpha}^{\alpha}$ é uma matriz simétrica.

</aside>

# Formas quadráticas 

<aside>

<b>Definição (formas quadráticas, Boldrini)</b> — Seja $V$ um espaço vetorial sobre $\mathbb{R}$ e $B: V \times V \to \mathbb{R}$ uma forma bilinear simétrica. A função $Q: V \times \mathbb{R}$ definida por $Q(v) = B(u, v)$ é chamada <b>forma quadrática</b> associada a $B$.

</aside>

Como consequência do último teorema da seção anterior, percebe-se que qualquer forma quadrática pode ser expressa da forma: 

$$
Q(v) = (v)_{\alpha}^T (B)_{\alpha}^{\alpha} (v)_{\alpha}
$$

dada uma base $\alpha$ de $V$. Nesta expressão, $(B)_{\alpha}^{\alpha}$ é uma matriz simétrica.

Um exemplo interessante pode ser explorado a partir da consideração de um cenário comum na Física. Imagine um corpo pontual de massa $m$ que se desloca pelo espaço com uma velocidade $\vec{v} = (v_x, v_y, v_z)$. É conhecido que sua energia cinética será dada pela expressão:

$$
\begin{align*}
    E_c &= \dfrac{1}{2}m||v||^2 \\
        &= \dfrac{1}{2}m(v_x^2 + v_y^2 + v_z^2) \\ 
        &= \dfrac{m}{2}v_x^2 + \dfrac{m}{2}v_y^2 + \dfrac{m}{2}v_z^2 \\
        &= \begin{pmatrix}v_x & v_y & v_z\end{pmatrix}
        \begin{pmatrix}
            m/2 & 0 & 0 \\ 
            0 & m/2 & 0 \\ 
            0 & 0 & m/2
        \end{pmatrix}
        \begin{pmatrix}
            v_x \\ 
            v_y \\ 
            v_z 
        \end{pmatrix}
\end{align*}
$$

Perceba que esta é a escrita matricial de uma forma quadrática.

<aside>

<b>Teorema</b> — Seja $Q: \mathbb{R}^2 \to \mathbb{R}$ uma forma quadrática definida por $Q(x, y) = Ax^2 + Bxy + Cy^2$. Logo, sua forma matricial é dada por: 

$$
Q(x, y) = \begin{pmatrix}x & y\end{pmatrix}\begin{pmatrix}A & B/2 \\ B/2 & C\end{pmatrix}\begin{pmatrix}x \\ y\end{pmatrix}
$$

</aside>

<aside>

<b>Teorema</b> — Seja $Q: \mathbb{R^3} \to \mathbb{R}$ uma forma quadrática definida por $Q(x, y, z) = Ax^2 + By^2 + Cz^2 + Dxy + Eyz + Fxz$. Logo, sua forma matricial é dada por: 

$$
Q(x, y, z) = \begin{pmatrix}x & y & z\end{pmatrix}
             \begin{pmatrix}
                 A & D/2 & F/2 \\ 
                 D/2 & B & E/2 \\ 
                 F/2 & E/2 & C
             \end{pmatrix}
             \begin{pmatrix}x \\ y \\ z\end{pmatrix}
$$

</aside>

<aside>

<b>Teorema (generalização para $n$ termos)</b> — Seja $Q: \mathbb{R}^n \to \mathbb{R}$ uma forma quadrática definida por:

$$
Q(\mathbf{x}) = Q(x_1, \dots, x_n) = \sum_{r_1 + \dots + r_n = 2} a_{r_1, \dots, r_n} x_1^{r_1} \dots x_n^{r_n}
$$

com $r_k \in \{0, 1, 2\}$ para todo $k \in \{1, \dots, n\}$. Isto é, um polinômio homogêneo de segundo grau e $n$ termos.

Logo, existe uma única matriz real simétrica $M \in \mathcal{M}_{n \times n}(\mathbb{R})$ tal que:

$$
Q(\mathbf{x}) = \mathbf{x}^T M \mathbf{x}
$$

Dessa forma, os elementos $M_{ij}$ da matriz $M$ são dados por:

$$
M_{ij} =
\begin{cases}
    a_{r_1, \dots, r_n}, & \text{se } i = j \quad (\text{onde } r_i = 2 \text{ e } r_k = 0 \text{ para } k \neq i) \\
    
    \dfrac{1}{2} a_{r_1, \dots, r_n}, & \text{se } i \neq j \quad (\text{onde } r_i = 1, \, r_j = 1 \text{ e } r_k = 0 \text{ para } k \notin \{i, j\})
\end{cases}
$$

</aside>

<aside>

<b>Demonstração</b> — Sejam $\mathbf{x} = \begin{pmatrix}x_1 & \dots & x_n\end{pmatrix}^T$ um vetor e $B = [b_{ij}]_{n \times n}$ uma matriz qualquer. 

Temos então que o produto $B\mathbf{x}$ é dado por:

$$
(B\mathbf{x})_i = \sum_{j=1}^n b_{ij}x_j
$$

Multiplicando à esquerda por $\mathbf{x}^T$, obtemos: 

$$
\mathbf{x}^T(B\mathbf{x}) = \sum_{i=1}^n x_i (B\mathbf{x})_i = \sum_{i=1}^n \left(x_i \sum_{j=1}^n b_{ij} x_j\right) = \sum_{i=1}^n \sum_{j=1}^n b_{ij}x_ix_j
$$

Note que podemos separar essa soma em duas parcelas: quando $i = j$ e quando $i \neq j$: 

$$
\mathbf{x}^T B \mathbf{x} = \sum_{i=1}^n b_{ii}x_i^2 + \sum_{i \neq j} b_{ij}x_ix_j
$$

Perceba que, no caso da segunda parcela, ao expandirmos a soma, teremos no par de índices $(i, j)$ o termo $b_{ij}x_ix_j$. Por outro lado, teremos no par $(j, i)$ o termo $b_{ji}x_jx_i$. Em razão dos reais serem um corpo e, portanto, sua multiplicação usual ser comutativa, é válido escrever $b_{ij}x_ix_j + b_{ji}x_jx_i = (b_{ij} + b_{ji})x_ix_j$. 

Aqui podemos concluir que qualquer produto $\mathbf{x}^T B \mathbf{x}$ resulta em um polinômio homogêneo de grau 2 e $n$ termos. 

Note, então, que $(\mathbf{x}^T B \mathbf{x})^T = \mathbf{x}^T B^T \mathbf{x}$. Simultaneamente, como $\mathbf{x}^T B \mathbf{x}$ é um escalar, este é transposto de si próprio. 

Somando as equações resultantes dessas duas relações obtemos então 

$$
2(\mathbf{x}^T B \mathbf{x}) = \mathbf{x}^T B^T \mathbf{x} + \mathbf{x}^T B \mathbf{x} \implies \mathbf{x}^T B \mathbf{x} = \dfrac{1}{2}(\mathbf{x}^TB^T\mathbf{x} + \mathbf{x}^T B \mathbf{x}) = \mathbf{x}^T \left(\dfrac{B^T + B}{2}\right)\mathbf{x}
$$

Definindo $M = \left(\dfrac{B^T + B}{2}\right)$, percebemos que esta matriz é simétrica, pois 

$$
M^T = \dfrac{1}{2}(B^T + B)^T = \dfrac{1}{2}(B + B^T) = M
$$

Consequentemente, para a mesma forma quadrática, a matriz $M$ possui entradas $M_{ii} = b_{ii}$ e $M_{ij} = M_{ji} = \dfrac{b_{ij} + b_{ji}}{2}$. 

Nesta última parte da demonstração, iremos mostrar que essa matriz simétrica é única. Imagine duas matrizes simétricas distintas $M_1$ e $M_2$ tais que $\mathbf{x}^TM_1\mathbf{x} = \mathbf{x}^TM_2\mathbf{x}, \forall \mathbf{x} \in \mathbb{R}^n$.

Assim, definimos a matriz simétrica $D = M_1 - M_2$ de forma que $\mathbf{x}^T D \mathbf{x} = 0, \forall \mathbf{x} \in \mathbb{R}^n$. Tomando então $\mathbf{x} = e_i$, um vetor da base canônica, vemos que $e_i^T D e_i = D_{ii} = 0$. Tomando $\mathbf{x} = e_i + e_j$, com $i \neq j$, temos que $D_{ii} + D_{jj} + D_{ij} + D_{ji} = 0$. Como $D_{ii} = D_{jj} = 0$ e $D$ é uma matriz simétrica, podemos concluir que $D$ é uma matriz nula e, portanto, $M_1 = M_2$. 

Logo, juntando todos os resultados dessa demonstração, podemos afirmar que uma forma quadrática 

$$
Q(\mathbf{x}) = \mathbf{x}^T M \mathbf{x}
$$

é um polinômio de segundo grau com $n$ termos, com $M$ sendo uma matriz simétrica. Substituindo a expressão para $M_{ii}$ e $M_{ij} = M_{ji}$  obtidas anteriormente no somatório prévio, obtemos:

$$
Q(\mathbf{x}) = \sum_{i=1}^n M_{ii}x_i^2 + \sum_{1 \le i \lt j \le n} 2M_{ij} x_ix_j
$$

Daqui é relativamente fácil perceber que na matriz o elemento $M_{ij}$ será metade do respectivo coeficiente no polinômio.

</aside>

## Diagonalização de formas quadráticas

<aside>

<b>Teorema</b> — Seja $Q(v) = B(v, v)$ uma forma quadrática em $V$. Logo, existe uma base ortonormal $\beta$ de $V$ de forma que, dado 

$$
(v)_{\beta} = \begin{pmatrix}y_1 \\ \vdots \\ y_n\end{pmatrix}
$$

teremos

$$
\begin{align*}
    Q(v) = \begin{pmatrix}y_1 \dots y_n\end{pmatrix}
    \begin{pmatrix}
        \lambda_1 & \dots & 0 \\ 
        \vdots & \ddots & \vdots \\ 
        0 & \dots & \lambda_n
    \end{pmatrix}
    \begin{pmatrix}
        y_1 \\ \vdots \\ y_n
    \end{pmatrix}
\end{align*}
$$

</aside>

<aside>

<b>Demonstração</b> — Imagine uma base $\alpha$, ortonormal, qualquer de $V$, Logo, teremos que $Q(v) = B(v, v) = (v)_{\alpha}^T (B)_{\alpha}^{\alpha} (v)_{\alpha}$.

Como a matriz $(B)_{\alpha}^{\alpha}$ é simétrica, esta corresponde a um operador auto-adjunto $T: V \to V$ de forma que sua matriz é a mesma da forma bilinear $B$, isto é, vale $(T)_{\alpha}^{\alpha} = B_{\alpha}^{\alpha}$.

Sabemos que um operador autoadjunto pode ser diagonalizado mediante uma base $\beta$ de vetores ortonormais. Logo, 

$$
\begin{align*}
    (B)_{\alpha}^{\alpha} = (T)_{\alpha}^{\alpha} &= (I)_{\alpha}^{\beta} \begin{pmatrix}
        \lambda_1 & \dots & 0 \\ 
        \vdots & \ddots & \vdots \\ 
        0 & \dots & \lambda_n
    \end{pmatrix} (I)_{\beta}^{\alpha} \\ 
    &= ([I]_{\beta}^{\alpha})^{-1} \begin{pmatrix}
        \lambda_1 & \dots & 0 \\ 
        \vdots & \ddots & \vdots \\ 
        0 & \dots & \lambda_n
    \end{pmatrix} (I)_{\beta}^{\alpha} \\ 
    &= ([I]_{\beta}^{\alpha})^T \begin{pmatrix}
        \lambda_1 & \dots & 0 \\ 
        \vdots & \ddots & \vdots \\ 
        0 & \dots & \lambda_n
    \end{pmatrix} (I)_{\beta}^{\alpha}
\end{align*}
$$

Isto justifica-se por $\alpha$ e $\beta$ serem bases ortonormais e, consequentemente, $(I)_{\alpha}^{\beta}$ ser uma matriz ortogonal.

</aside>

# Referências 

1. BOLDRINI, J. L.; COSTA, S. I. R.; FIGUEIREDO, V. L.; WETZLER, H. G. <i>Álgebra Linear</i>. 3. ed. São Paulo: Harbra, 1980