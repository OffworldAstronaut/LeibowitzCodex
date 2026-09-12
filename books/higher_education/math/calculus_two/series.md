# Séries numéricas 

# Introdução

Sejam $a_n, n \ge q, q \in \mathbb{N}$ uma sequência numérica. Definimos a sequência de termo geral 

$$
s_n = \sum_{k=q}^n a_k, n \ge q 
$$

como a <b>série numérica</b> associada à sequência $a_n$.

Os números $a_n$ são os termos da série, enquanto $a_n$ é seu termo geral. A expressão anterior também é chamada <b>soma parcial</b> de ordem $n$ da série, enquanto o limite dessa soma quando $n \to \infty$ é chamada <b>soma da série</b>. 

Consequentemente, escrevemos: 

$$
\sum_{k = q}^\infty a_k = \lim_{n \to \infty} \sum_{k=q}^n a_k 
$$

Ou seja, uma série é a soma de uma sequência infinita.

A série é dita <b>convergente</b> se essa soma é finita e <b>divergente</b> caso contrário (ou se o limite não existir). 

De forma muito conveniente, podemos abusar de nossa notação ao utilizar o símbolo 

$$
\sum_{k=q}^\infty a_k
$$

para indicar não somente a soma da série, mas também a própria série. Por clareza, a série cuja soma parcial de ordem $n$ é 

$$
s_n = \sum_{k=q}^n a_k, n \ge q
$$

será denotada por 

$$
\sum_{k=q}^\infty a_k = a_q + a_{q+1} + a_{q+2} + \dots
$$

Além disso, de forma análoga ao que foi discurido no manuscrito sobre <a href="/books/higher_education/math/calculus_two/sequences.html" target="_blank">sequências</a>, trabalhar com a série $\sum_{k=q}^\infty a_k$ é o mesmo que trabalhar com a série $\sum_{k=0}^\infty b_k, b_k = a_{k+q}, k \ge 0$. 

Logo, por questões de simplificação, todos os resultados a seguir serão expostos e demonstrados para séries da forma 

$$
\sum_{k=0}^\infty a_k
$$

## Propriedades 

<aside>

<b>Propriedade I (multiplicação por constante)</b> — Seja $\alpha \in \mathbb{R}$ dado. Se $\sum_{k=0}^\infty a_k$ for convergente, $\sum_{k=0}^\infty \alpha a_k$ será convergente e valerá:

$$
\sum_{k=0}^\infty \alpha a_k = \alpha \sum_{k=0}^\infty a_k
$$

</aside>

<aside>

<b>Demonstração</b> — Por definição, temos: 

$$
\sum_{k=0}^{\infty} \alpha a_k = \lim_{n \to \infty} \sum_{k=0}^n \alpha a_k = \alpha \lim_{n \to \infty} \sum_{k=0}^{n} a_k = \alpha \sum_{k=0}^{\infty} a_k
$$

Demonstrado.

</aside>

<aside>

<b>Propriedade II (soma de séries)</b> — Se $\sum_{k=0}^\infty a_k$ e $\sum_{k=0}^\infty b_k$ forem convergentes, então $\sum_{k=0}^\infty (a_k + b_k)$ será convergente e valerá: 

$$
\sum_{k=0}^\infty (a_k+b_k) = \sum_{k=0}^\infty a_k + \sum_{k=0}^\infty b_k
$$

</aside>

<aside>

<b>Demonstração</b> — Por definição, temos: 

$$
\begin{align*}
    \sum_{k=0}^{\infty} (a_k+b_k) &= \lim_{n \to \infty}\sum_{k=0}^n (a_k+b_k) \\ 
    &= \lim_{n \to \infty} \left(\sum_{k=0}^{n} a_k + \sum_{k=0}^{n} b_k\right) \\ 
    &= \lim_{n \to \infty} \sum_{k=0}^{n} a_k + \lim_{n \to \infty} \sum_{k=0}^{n} b_k \\ 
    &= \sum_{k=0}^{\infty} a_k + \sum_{k=0}^{\infty} b_k
\end{align*}
$$

Demonstrado.

</aside

<aside>

<b>Propriedade III</b> — $\sum_{k=0}^\infty$ será convergente se e somente se $\forall p \in \mathbb{N}$ a série $\sum_{k = p}^{\infty} a_k$ for convergente. Além disso, se $\sum_{k=0}^{\infty}$ for convergente, 

$$
p \ge 1 \implies \sum_{k=0}^{\infty} a_k = \sum_{k=0}^{p-1} a_k + \sum_{k=p}^{\infty} a_k
$$

</aside>

<aside>

<b>Demonstração</b> — Inicialmente, temos que, para $p \ge 1$ e $n \ge p$, vale: 

$$
\sum_{k=0}^n a_k = \sum_{k=0}^{p-1} a_k + \sum_{k=p}^{n} a_k
$$

Fixando $p$: 

$$
\lim_{n \to \infty}\sum_{k=0}^{n} a_k = \sum_{k=0}^{p-1}a_k + \lim_{n \to \infty} \sum_{k=p}^{n} a_k \implies \sum_{k=0}^{\infty} a_k = \sum_{k=0}^{p-1}a_k + \sum_{k=p}^{\infty} a_k
$$

Dede que uma das séries seja convergente. Como consequência imediata, nessas condições, $\sum_{k = 0}^{\infty} a_k$ convergente implica que $\lim_{p \to \infty}\sum_{k=p}^{\infty} a_k = 0$. 

</aside>

Pelo teorema a seguir, podemos estudar uma condição necessária para que uma série seja divergente analisando seu termo geral. 

<aside>

<b>Lema</b> — Se $\sum_{k=0}^{\infty} a_k$ for convergente, então $\lim_{k \to \infty}a_k = 0$. 

</aside>

<aside> 

<b>Teorema (Critério do termo geral para divergência)</b> — Considere a série $\sum_{k=0}^{\infty} a_k$. Se $\lim_{k \to \infty} a_k \neq 0$ ou se $\lim_{k \to \infty}a_k$ não existir, então a série $\sum_{k=0}^{\infty}a_k$ será divergente.

</aside>

# Séries alternadas 

Definimos uma <b>série alternada</b> como uma série da forma 

$$
\sum_{k=0}^{\infty}(-1)^k a_k
$$

com $a_k \gt 0, \forall k \in \mathbb{N}$. Como exemplo de série alternada, podemos citar a seguinte: 

$$
\sum_{k=1}^{\infty}(-1)^{k-1} \dfrac{1}{k} = 1 - \dfrac{1}{2}+\dfrac{1}{3}-\dfrac{1}{5}+\dfrac{1}{7}-\dots 
$$

<aside>

<b>Teorema (Critério de convergência para uma série alternada)</b> — Considere a série alternada $\sum_{k=0}^{\infty}(-1)^k a_k$. Se a sequência $a_k$ for decrescente e $\lim_{k \to \infty}a_k = 0$, então a série alternada $\sum_{k=0}^{\infty}(-1)^k a_k$ será convergente.

</aside>

# Referências 

1. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. Vol. 4. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. LTC. 