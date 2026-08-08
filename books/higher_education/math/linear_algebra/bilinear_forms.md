# Formas bilineares e quadráticas reais

# Formas bilineares 

Dizemos que as <b>formas bilineares</b>, também chamadas de <b>funcionais bilineares</b> são uma generalização dos <a href="/books/higher_education/math/linear_algebra/linear_transformations.html" target="_blank">funcionais lineares</a> para dois vetores. POdemos defini-las da seguinte maneira. 

<aside>

<b>Definição (formas bilineares)</b> — Sejam $U$ e $V$ espaços vetoriais sobre $\mathbb{R}$. Uma função $U \times V \to \mathbb{R}$ é uma forma bilinear se, e somente se, 

$$
\begin{align}
    f(u_1 + u_2, v) &= f(u_1, v) + f(u_2, v) \\ 
    f(au, v) &= f(u, av) = af(u, v) \\ 
    f(u, v_1 + v_2) &= f(u, v_1) + f(u, v_2)
\end{align}
$$

para todos os vetores $u, u_1, u_2 \in U$, $v, v_1, v_2 \in V$ e escalares $a \in \mathbb{R}$.

</aside>

De forma análoga às formas lineares, podemos denotar o conjunto de todas as formas bilineares de $U \times V$ em $\mathbb{R}$ por $B(U, V)$. Se $U = V$, é válido escrever apenas $B(U)$.

Além disso, também é correto afirmar que $B(U, V)$ é um espaço vetorial sobre $\mathbb{R}$. Para citar algum exemplo de forma bilinear, podemos mencionar qualquer produto interno de um espaço vetorial sobre o corpo dos reais.

## Matriz de uma forma bilinear

Dados dois espaços vetoriais $U$ e $V$ sobre $\mathbb{R}$ de dimensões $m$ e $n$, respectivamente, e suas bases $B = \{u_1, \dots, u_m\}$ e $C = \{v_1, \dots, v_m\}$, temos que a matriz $m \times n$ 

$$
(f(u_i, v_j)) = 
\begin{pmatrix}
    f(u_1, v_1) & f(u_1, v_2) & \dots & f(u_1, v_n) \\ 
    \vdots & \vdots & & \vdots \\ 
    f(u_m, v_1) & f(u_m, v_2) & \dots f(u_m, v_n)
\end{pmatrix}
$$

<aside>

<b>Proposição</b> — Fixadas as bases $B$ e $C$ dos espaços $U$ e $V$, a correspondência entre cada forma bilinear $f \in B(U, V)$ e sua respectiva matriz é um isomorfismo entre $B(U, V)$ e $M_{m \times n}(\mathbb{R})$. 

</aside>

<aside>

<b>Corolário</b> — Se $\dim{U} = m$ e $\dim{V} = n$, então $\dim{B(U, V)} = \dim{M_{m \times n}(\mathbb{R})}$

</aside>

# Referências 

1. CALLIOLI, Carlos Alberto; DOMINGUES, Hygino H.; COSTA, Roberto da. <i>Álgebra Linear e Aplicações</i>. 4ª edição revisada. São Paulo: Atual, 1983.