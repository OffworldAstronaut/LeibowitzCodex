# Integrais impróprias

# Integrais impróprias

Consideramos uma integral como <b>imprópria</b> quando a função integral está definida num intervalo infinito ou quando o integrando possui alguma descontinuidade infinita. Estas integrais, portanto, não encaixam na definição usual como integrais de Riemann. 

Como calculá-las, então? Pode ser útil destrinchar essa pergunta ao longo dessa seção, por meio do estudo de casos e da apresentação de exemplos. Como poderíamos, então, tratar uma integral como a seguinte? 

$$
\int_{a}^{\infty} f(x) \ dx 
$$

Perceba que essa integral é equivalente ao limite 

$$
\lim_{c \to \infty} \int_{a}^{c} f(x) \ dx 
$$

Se esse limite existe, então, a integral imprópria é dita <b>convergente</b>. Caso contrário, recebe a denominação <b>divergente</b>. Isto permanece válido para todos os outros casos que serão apresentados a seguir. 

<aside>

<b>Exemplo</b> — Considere a integral imprópria 

$$
\int_{a}^{\infty} \dfrac{1}{x^p} \ dx
$$

com $a \gt 0$ e $p \in \mathbb{R}$. 

Temos que

$$
\lim_{c \to \infty} \int_{a}^{c} \dfrac{1}{x^p} \ dx = \lim_{c \to \infty} \left[\dfrac{-1}{(p-1)x^{p-1}}\right]_{a}^{c}
$$

com $p \neq 1$. Vemos que o limite existe para $p \gt 1$: 

$$
\lim_{c \to \infty} \left[\dfrac{-1}{(p-1)x^{p-1}}\right]_{a}^{c} = \lim_{c \to \infty} \dfrac{1}{p-1} \left(\dfrac{1}{a^{p-1}} - \dfrac{1}{c^{p-1}}\right) = \dfrac{1}{(p-1)a^{p-1}}
$$

Além disso, o limite não existe para $p \le 1$. Assim, essa integral é convergente para $p \gt 1$.

</aside>

Por outro lado, temos que 

$$
\int_{-\infty}^{b} f(x) \ dx = \lim_{k \to -\infty} \int_{k}^{b} f(x) \ dx 
$$

analogamente. 

<aside>

<b>Exemplo</b> — Considere a integral imprópria 

$$
\int_{-\infty}^{0} e^x \ dx
$$

Temos: 

$$
\int_{-\infty}^{0} e^x \ dx = \lim_{c \to -\infty} \int_{c}^{0} e^x \ dx = \left[\lim_{c \to -\infty} e^x\right]_{c}^{0} = \lim_{c \to -\infty}(1-e^c) = 1
$$

</aside>

Por fim, para ambos os gêneros de integral expostos anteriormente vale 

$$
\begin{align*}
  \int_{a}^{\infty} f(x) \ dx &= \int_{a}^{k} f(x) \ dx + \int_{k}^{\infty} f(x) \ dx \\
  \int_{-\infty}^{b} f(x) \ dx &= \int_{-\infty}^{k} f(x) \ dx + \int_{k}^{b} f(x) \ dx 
\end{align*}
$$

dado que $f(x)$ seja contínua nos intervalos necessários. 

Um outro caso que podemos analisar é aquele em que ambos os limites de integração são infinitos, isto é, o intervalo da função integral é toda a reta real. De fato, uma integral desse tipo é da forma a seguir. 

$$
\int_{-\infty}^{\infty} f(x) \ dx
$$

Perceba que se torna um processo intuitivo ao escolhermos um dado $a \in \mathbb{R}$. Supondo $f$ contínua em $\mathbb{R}$, podemos separar a integral em duas outras. 

$$
\int_{-\infty}^{\infty} f(x) \ dx = \int_{-\infty}^{a} f(x) \ dx + \int_{a}^{\infty} f(x) \ dx
$$

Se ambas as integrais à direita são convergentes, a integral à esquerda também será. Caso contrário, a integral à esquerda será divergente. Podemos visualizar que essa relação é válida para qualquer escolha de $a$. Com efeito, caso escolhermos algum $a'$ de forma que $a' \neq a$, teremos as equações 

$$
\begin{align*}
    \int_{a'}^{\infty} f(x) \ dx &= \int_{a'}^{a} f(x) \ dx + \int_{a}^{\infty} f(x) \ dx \\ 
    \int_{-\infty}^{a'} f(x) \ dx &= \int_{-\infty}^{a} f(x) \ dx + \int_{a}^{a'} f(x) \ dx 
\end{align*}
$$

Somando-as, obtemos 

$$
\int_{-\infty}^{a'} f(x) \ dx + \int_{a'}^{\infty} f(x) \ dx = \int_{-\infty}^{a} f(x) \ dx + \int_{a}^{\infty} f(x) \ dx 
$$

mostrando que, de fato, a relação deduzida anteriormente é válida independentemente do $a$ escolhido. 

<aside>

<b>Exemplo</b> — Considere a integral imprópria à seguir. 

$$
\begin{align*}
    \int_{-\infty}^{\infty} \dfrac{1}{x^2 + 1} \ dx &= \int_{- \infty}^{0} \dfrac{1}{x^2 + 1} + \int_{0}^{\infty} \dfrac{1}{x^2 + 1} \ dx \\ 
    &= \lim_{k \to -\infty} \int_{k}^{0} \dfrac{1}{x^2 + 1} \ dx + \lim_{c \to \infty} \int_{0}^{c} \dfrac{1}{x^2 + 1} \ dx \\ 
    &= \lim_{k \ to -\infty} \left[\arctan{x}\right]_{k}^{0} + \lim_{c \to \infty} \left[\arctan{x}\right]_{0}^{c} \\ 
    &= \lim_{k \to -\infty} -\arctan{k} + \lim_{c \to \infty} \arctan{c} \\ 
    &= \dfrac{\pi}{2} + \dfrac{\pi}{2} = \pi
\end{align*}
$$

</aside>

Temos ainda as últimas formas que as integrais impróprias podem assumir: integrais de funções com descontinuidades infinitas em seu intervalo de integração. Por exemplo, considere uma função $f(x)$ contínua em $a \lt x \le b$ e descontínua em $x = a$. Definimos então 

$$
\int_{a}^{b} f(x) \ dx = \lim_{c \to a^{+}} \int_{c}^{b} f(x) \ dx
$$

se o limite existir.

De forma análoga, considerando uma $f(x)$ contínua em $a \le x \lt b$ e descontínua em $x = b$, definimos 

$$
\int_{a}^{b} f(x) \ dx = \lim_{c \to b^{-}} \int_{a}^{c} f(x) \ dx 
$$

caso o limite exista. 

<aside>

<b>Exemplo</b> — Considere a integral imprópria 

$$
\int_{0}^{b} \dfrac{1}{x^p} \ dx
$$

com $b \gt 0$. 

Podemos ver que o limite $\lim_{c \to 0^{+}} \int_{c}^{b} \dfrac{1}{x^p} \ dx$ existe para $p \lt 1$. De fato, 

$$
\begin{align*}
    \lim_{c \to 0^{+}} \int_{c}^{b} \dfrac{1}{x^p} \ dx &= \lim_{c \to 0^{+}} \dfrac{1}{p-1}\left(\dfrac{1}{c^{p-1}} - \dfrac{1}{b^{p-1}}\right) \\ 
    &= \lim_{c \to 0^{+}} \dfrac{1}{p-1}\left(c^{1-p} - b^{1-p}\right)
\end{align*}
$$

</aside>

Em integrais que sejam uma combinação dos tipos anteriores, basta decompô-las em somas de integrais mais simples e fazer os procedimentos já expostos anteriormente.

# Referências

1. KAPLAN, Wilfred; LEWIS, Donald J. Cálculo e Álgebra Linear. v. 2. Rio de Janeiro: Livros Técnicos e Científicos, 1972