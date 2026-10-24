# Sequências

# Sequências

Uma <b>sequência</b> (também chamada <b>sucessão</b>) é uma função $f: D_f \to \mathbb{R}$ com a restrição de que $D_f \sub \mathbb{N}$. 

Daqui em diante, iremos considerar sequências cujo domínio é da forma 

$$
D_f = \{n \in \mathbb{R} | n \ge q\}
$$

com $q$ natural fixo. 

Denotamos por $a_n$ o n-ésimo elemento da sequência $a_1, \dots, a_n$.

Por exemplo, qual a sequência de termo geral $a_n = 2^n$? 

$$
\begin{align*}
    n &= 1 &\implies a_1 = 2^1 = 2 \\ 
    n &= 2 &\implies a_2 = 2^2 = 4 \\ 
   &\vdots 
\end{align*}
$$

<aside>

<b>Definição (convergência e divergência, Guidorizzi)</b> — Considere uma sequência de termo geral $a_n$ e $a \in \mathbb{R}$ qualquer. 

Temos que: 

$$
\begin{align*}
    \lim_{n \to \infty} a_n &= a \iff \forall \varepsilon \gt 0, \exists n_0 \in \mathbb{N} \, | n \gt n_0 \implies a - \varepsilon \lt a_n \lt a + \varepsilon \\ 

    \lim_{n \to \infty} a_n &= \infty \iff \forall \varepsilon \gt 0, \exists n_0 \in \mathbb{N} \, | n \gt n_0 \implies a_n \gt \varepsilon \\ 

    \lim_{n \to \infty} a_n &= -\infty \iff \forall \varepsilon, \exists n_0 \in \mathbb{N} \, | n \gt n_0 \implies a_n \lt -\varepsilon
\end{align*}
$$

Se $\lim_{n \to \infty} a_n$ for finito, dizemos que a sequência $a_n$ é <b>convergente</b>. Caso contrário, esta é <b>divergente</b>. 

É intuitivo perceber que todas as propriedades de limite no infinito de funções monovariáveis reais aplicam-se aqui. 

</aside>

<aside>

<b>Exemplo</b> — Avalie o limite no infinito da sequência cujo termo geral é dado por:

$$
a_n = \dfrac{n^2 + 3n - 1}{2n^2 + 5}
$$

Assim, tomando o limite da sequência no infinito, obtemos: 

$$
\begin{align*}
    \lim_{n \to \infty} \left(\dfrac{n^2 + 3n - 1}{2n^2 + 5} \right) &= \lim_{n \to \infty} \left(\dfrac{1 + 3/n - 1/n^2}{2 + 5/n^2}\right) \\ 
    &= \dfrac{1}{2}
\end{align*}
$$

</aside>

Um resultado notável é a validade do teorema do confronto para sequências. 

<aside>

<b>Teorema (do confronto)</b> — Dado um natural $n_1$ tal que $\forall n \ge n_1, a_n \le b_n \le c_n$ e um $\alpha \in \mathbb{R}$, 

$$
\lim_{n \to \infty} a_n = L = \lim_{n \to \infty} \implies \lim_{n \to \infty} b_n = L
$$

</aside>

<aside>

<b>Demonstração</b> — Como $\lim_{n \to \infty} a_n = L = \lim_{n \to \infty} c_n$, dado $\varepsilon \gt 0, \exists n_0 \in \mathbb{R}$ maior que $n_1$ tal que: 

$$
n \gt n_0 \implies 
\begin{cases}
    L - \varepsilon \lt a_n \lt L + \varepsilon \\ 
    L - \varepsilon \lt c_n \lt L + \varepsilon
\end{cases}
$$

Por hipótese, vale $n \gt n_0 \implies L - \varepsilon \lt a_n \le b_n \le c_n \lt L + \varepsilon$ e, portanto, $n \gt n_0 \implies L - \varepsilon \lt b_n \lt L + \varepsilon$, isto é: 

$$
\lim_{n \to \infty} b_n = L
$$

Provado.

</aside>

<aside>

<b>Lema</b> — Dada uma sequência de termo geral 

$$
s_n = \sum_{k = 0}^n t^k
$$

com $t \in [0, 1]$, temos que $s_n = \dfrac{1 - t^{n+1}}{1 - t}$. 

</aside>

<aside>

<b>Demonstração</b> — Temos que $s_n = 1 + t + t^2 + \dots + t^{n-1} + t^n$. 

Multiplicando ambos os membros por $t$: 

$$
ts_n = t + t^2 + \dots + t^n + t^{n+1}
$$

Subtraindo membro a membro, obtemos: 

$$
s_n(1-t) = 1-t^{n+1}
$$

E, consequentemente: 

$$
s_n = \dfrac{1-t^{n+1}}{1-t}
$$

Perceba que $s_n$ é precisamente a soma dos termos da progressão geométrica $1, t, t^2, \dots, t^n$. 

</aside>

<aside>

<b>Teorema</b> — Dada uma sequência de termo geral $t^k, t \in [0, 1]$, é válido que 

$$
\lim_{n \to \infty}\sum_{k=1}^n t^k = \dfrac{t}{1-t}
$$

</aside>

<aside>

<b>Demonstração</b> — Temos que: 

$$
\sum_{k=1}^n t^k = 1 + t + t^2 + \dots + t^n = t(1 + t + \dots + t^{n-1})
$$

Pelo lema anterior, vale: 

$$
\sum_{k=1}^n t^k = t\left(\dfrac{1-t^n}{1-t}\right)
$$

Além disso, como $t \in [0,1]$, $\lim_{n \to \infty}t^n = 0$. 

Segue que: 

$$
\lim_{n \to \infty} \sum_{k=1}^n t^k = \dfrac{t}{1-t}
$$

Provado.

</aside>

<aside>

<b>Teorema</b> — Seja $a_n$ uma sequência de forma que

$$
\lim_{n \to \infty} a_n = a
$$

Logo, $\lim_{n \to \infty} \dfrac{a_1 + \dots + a_n}{n} = a$. 

</aside>

<aside>

<b>Demonstração</b> — Precisamos mostrar que $\forall \varepsilon \gt 0, \exists n_0 \in \mathbb{N}$ tal que 

$$
n \gt n_0 \implies \left|\dfrac{a_1 + \dots + a_n}{n}\right| \lt \varepsilon 
$$

Por hipótese, sabemos que $\lim_{n \to \infty} a_n = a$. Segue que $\forall \varepsilon \gt 0, \exists p \in \mathbb{N}$ tal que 

$$
n \gt p \implies a - \dfrac{\varepsilon}{2} \lt a_n \lt a + \dfrac{\varepsilon}{2} \iff n \gt p \implies -\dfrac{\varepsilon}{2} \lt a_n - a \lt \dfrac{\varepsilon}{2}
$$

Tomemos então $n \gt p$. Consequentemente, teremos as $(n-p)$ desigualdades: 

$$
\begin{align*}
    -\dfrac{\varepsilon}{2} \lt a_{p+1} &- a \lt \dfrac{\varepsilon}{2} \\ 
    &\vdots \\ 
    -\dfrac{\varepsilon}{2} \lt a_n &- a \lt \dfrac{\varepsilon}{2}
\end{align*}
$$

Somando-as membro a membro, obtemos: 

$$
n \gt p \implies -\dfrac{\varepsilon}{2} \lt \dfrac{(a_{p+1} - a) + \dots + (a_n - a)}{n-p} \lt \dfrac{\varepsilon}{2}
\iff n \gt p \implies \left|\dfrac{(a_{p+1} - a) + \dots + (a_n - a)}{n-p}\right| \lt \dfrac{\varepsilon}{2}
$$

Como $p$ é um natural fixo, resulta: 

$$
\lim_{n \to \infty} \dfrac{(a_1-a)+(a_2-a)+\dots+(a_p-a)}{n} = 0
$$

Logo, $\exists q \in \mathbb{N}$ tal que: 

$$
n \gt q \implies \left|\dfrac{(a_1-a)+\dots+(a_p-a)}{n}\right| \lt \dfrac{\varepsilon}{2}
$$

Assim, defina $n_0 = \max{\{p, q\}}$. Das duas expressões anteriores segue que $\forall n \gt n_0$, 

$$
\left|\dfrac{a_1 + a_2 + \dots + a_n}{n}-a\right| \le \left|\dfrac{(a_1 - a) + (a_2 - a) + \dots + (a_p - a)}{n}\right| + \left|\dfrac{(a_{p+1}-a)+(a_{p+2}-a)+\dots+(a_n-a)}{n}\right| \lt \dfrac{\varepsilon}{2} + \left|\dfrac{(a_{p+1}-a)+(a_{p+2}-a)+\dots+(a_n-a)}{n-p}\right|\dfrac{n-p}{n} \lt \varepsilon
$$

(Note que $n \gt p \implies \dfrac{n-p}{n} \lt 1$)

Logo, $n \gt n_0 \implies \left|\dfrac{a_1 + a_2 + \dots + a_n}{n} - a \right| \lt \varepsilon$ 

e, portanto, 

$$
\lim_{n \to \infty} \dfrac{a_1 + a_2 + \dots + a_n}{n} = a
$$

Uma interpretação para esse resultado é que a média aritmética dos $n$ primeiros termos de uma sequência $a_n$ converge para $a$ se a sequência também converge para $a$. 

</aside>

<aside>

<b>Observação</b> — Seja $f(x): [q, +\infty] \to \mathbb{R}, q \in \mathbb{N}$. Além disso, seja a sequência de termo geral 

$$
a_n = f(x), n \ge q
$$

Verifica-se que $\lim_{n \to \infty}a_n = \lim_{x \to \infty} f(x)$. Desde que o limite do segundo membro exista (finito ou infinito).

</aside>

## Sequências crescentes e sequências decrescentes 

Como ressalva inicial, todos os resultados desta seção em diante serão expressos para sequências $a_n, n \ge 0$. Isto se deve à constatação de que trabalhar com uma sequência $a_n, n \ge q, q \in \mathbb{N}$ fixo é equivalente a trabalhar com uma sequência $a_{n+q}, n \ge 0$. 

Assim, seja $a_n$ uma sequência. Dizemos que $a_n$ é crescente se, dados $m, n \in \mathbb{N}$, vale

$$
m \lt n \implies a_m \le a_n
$$

Caso $m \lt n \implies a_n \le a_m$, dizemos que a sequênica $a_n$ é decrescente. 

Sequências <b>monótonas</b> são crescentes ou decrescentes em todo o seu domínio. Sequências limitadas <b>superiormente</b> possuem um teto: $\exists \beta \in \mathbb{R}$ tal que $\forall n \in \mathbb{N}, a_n \le \beta$. Por outro lado, sequências limitadas <b>inferiormente</b> possuem um piso: $\exists \alpha \in \mathbb{R}$ tal que $\forall n \in \mathbb{N}, a_n \ge \alpha$. 

Uma sequência é dita <b>limitada</b> se esta for limitada superiormente e inferiormente.

<aside>

<b>Teorema</b> — Seja $a_n$ uma sequência crescente. 

Logo, se $a_n$ for uma sequência limitada superiormente, $a_n$ é convergente. Por outro lado, se $a_n$ não é limitada superiormente, $a_n$ diverge para $\infty$.

</aside>

<aside>

<b>Demonstração</b> — Inicialmente, vamos provar a primeira afirmação. Considere o conjunto $\{a_n | n \ge 0\}$. Perceba que este é não-vazio e limitado superiormente. Consequentemente, admite supremo. Vamos denotá-lo por $a = \sup{\{a_n, n \ge 0\}}$. 

Nosso objetivo será mostrar que $\lim_{n \to \infty}a_n = a$. 

Como $a$ é o supremo deste conjunto, $\forall \varepsilon \gt 0$ existe pelo menos um $n_0 \in \mathbb{N}$ tal que 

$$
a - \varepsilon \lt a_n \le a 
$$

(Se não existisse $n_0$ que satisfizesse esta condição, $a$ não seria supremo do conjunto e estaríamos caindo em contradição)

Como $a_n$ é crescente, por hipótese: 

$$
n \gt n_0 \implies a - \varepsilon \lt a_n \implies a - \varepsilon \le a \lt a + \varepsilon
$$

Consequentemente, $\lim_{n \to \infty} a_n = a$. 

Para a segunda afirmação, perceba que $a_n$ não é limitada superiormente e, portanto, $\forall \varepsilon \gt 0$, existe pelo menos um natural $n_0$ tal que $a_{n_0} \gt \varepsilon$. Como $a_n$ é crescente por hipótese, 

$$
n \gt n_0 \implies a_n \ge \varepsilon
$$

Isto é, $\lim_{n \to \infty} a_n = \infty$. Para uma sequência crescente só há dois caminhos: convergir ou divergir para $\infty$.

</aside>

# Referências 

1. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. Vol. 4. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. LTC. 