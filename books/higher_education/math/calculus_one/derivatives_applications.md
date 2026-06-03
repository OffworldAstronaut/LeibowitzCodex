# Derivadas II — Aplicações

# Teorema de Rolle



O teorema de Rolle é um importante teorema da análise real que permite a identificação dos máximos e mínimos de uma função. Esta identificação é realizada por meio dos pontos em que a função derivada possui um valor nulo: qualquer ponto fora deste "equilíbrio" terá uma tendência de acréscimo ou decréscimo, a menos que a função seja constante em todo o intervalo.

<aside>

<b>(GUIDORIZZI 2001, Teorema de Rolle)</b> — Se $f$ for contínua em $[a, b]$, derivável em $(a, b)$ e $f(a)=f(b)$, então existirá pelo menos um $c \in (a, b)$ tal que $f'(c) = 0$. 

<b>Demonstração</b> — Se $f$ for constante em $[a, b]$, então $f'(x)=0$ em $(a,b)$; logo, existirá $c \in (a, b)$ tal que $f'(c)=0$. Suponhamos então, que $f$ não seja constante em $[a, b]$. Como $f$ é contínua no intervalo fechado $[a,b]$, pelo teorema de Weierstrass, existem $x_1$ e $x_2$ em $[a,b]$ tais que $f(x_1)$ e $f(x_2)$ são, respectivamente, os valores máximo e mínimo de $f$ em $[a,b]$. Como $f(x_1) \neq f(x_2)$, pois estamos supondo $f$ não-constante em $[a,b]$, segue que $x_1$ ou $x_2$ pertence a $(a,b)$. Portanto, existe $c \in (a,b)$ tal que $f'(c) = 0$. 

</aside>

Como a prova acima baseia-se no teorema de Weierstrass, também conhecido pela denominação <b>teorema dos valores extremos</b>, ele também está exposto abaixo segundo formulado por Guidorizzi em seu Curso de Cálculo.

<aside>

<b>(GUIDORIZZI 2001, Teorema de Weierstrass)</b> — Se $f$ for contínua em $[a,b]$, então existirão $x_1$ e $x_2$ em $[a,b]$ tais que $f(x_1) \le f(x) \le f(x_2)$ para todo $x \in [a,b]$. 

<b>Demonstração</b> — Sendo $f$ contínua em $[a,b]$, $f$ será limitada em $[a,b]$, daí o conjunto 

$$
A = \{f(x) | x \in [a,b]\}
$$

admitirá supremo e ínfimo. Sejam 

$$
\begin{align*}
    M &= \sup\{f(x) | x \in [a,b]\} \\\\
    m &= \inf\{f(x) | x \in [a,b]\}
\end{align*}
$$

Assim, para todo $x$ em $[a,b]$, $m \le f(x) \le M$. 

Provaremos, a seguir, que $M = f(x_2)$ para algum $x_2$ em $[a,b]$. Se tivéssemos $f(x) \lt M$ para todo $x$ em $[a,b]$, a função 

$$
g(x) = \dfrac{1}{M - f(x)}, x \in [a,b]
$$

seria contínua em $[a,b]$, mas não limitada em $[a,b]$, que é uma contradição. 

Se $g$ fosse limitada em $[a,b]$, então existiria um $\beta \gt 0$ tal que para todo $x$ em $[a,b]$ 

$$
0 \lt \dfrac{1}{M - f(x)} \lt \beta
$$

e, portanto, para todo $x$ em $[a,b]$, 

$$
f(x) \lt M - \dfrac{1}{\beta}
$$

e assim $M$ não seria supremo de $A$. 

Segue que $f(x) \lt M$ para todo $x \in [a,b]$ não pode ocorrer, logo, devemos ter $M = f(x_2)$ para algum $x_2$ em $[a,b]$. Com raciocínio análogo, prova-se que $f(x_1) = m$ para algum $x_1$ em $[a,b]$. 

</aside>

Perceba que para demonstrar o teorema de Weierstrass foram necessárias noções de <b>limitação de funções</b>. Por questões de completude, o teorema da limitação também está exposto abaixo, conforme Guidorizzi.

<aside>

<b>(GUIDORIZZI 2001, Definição de função limitada)</b> — Dizemos que $f$ é <i>limitada</i> em $A \subset D_f$ se existir $M > 0$ tal que, para todo $x$ em $A$

$$
|f(x)| \le M
$$

Da definição acima, segue que, se $f$ não for limitada em $B \subset D_f$, para todo natural $n$, existe $x_n \in B$, com $|f(x_n)| \gt n$.

</aside>

<aside>

<b>(GUIDORIZZI 2001, Teorema da limitação)</b> — Se $f$ for contínua no intervalo fechado $[a,b]$, então $f$ será limitada em $[a,b]$. 

<b>Demonstração</b> — Suponhamos, por absurdo, que $f$ não seja limitada em $[a,b]$. Façamos $a = a_1$ e $b = b_1$; existe, então, $x_1 \in [a_1,b_1]$ tal que $|f(x_1) > 1$. Seja $c_1$ o ponto médio de $[a_1, b_1]$; $f$ não será limitada em um dos intervalos $[a_1, c_1]$ ou $[c_1, b_1]$; suponhamos que não seja limitada em $[c_1, b_1]$ e façamos $a_2 = c_1$ e $b_2 = b_1$. Não sendo $f$ limitada em $[a_2, b_2]$, existirá $x_2 \in [a_2, b_2]$ tal que $|f(x_2)| \gt 2$. Prosseguindo com este raciocínio, construiremos uma sequência de intervalos

$$
[a_1, b_1] \subset [a_2, b_2] \subset [a_3, b_3] \subset ... \subset [a_n, b_n]
$$

satisfazendo as condições da propriedade dos intervalos encaixantes e tal que, para todo natural $n \gt 0$, existe $x_n \in [a_n, b_n]$ com 

$$
|f(x_n)| \gt n
$$

Segue desta informação que $\lim_{n \to \infty} |f(x_n)| = +\infty$. Seja, agora, $c$ o único real tal que, para todo $n \gt 0$, 

$$
c \in [a_n, b_n]
$$

Como a sequência $x_n$ converge para $c$ e $f$ é contínua em $c$, resulta que $lim_{n \to \infty} |f(x_n)| = |f(c)|$ que está em contradição com $\lim_{n \to \infty} |f(x_n)| = +\infty$. Fica provado que a suposição de $f$ não ser limitada em $[a,b]$  nos leva a uma contradição. Portanto, $f$ é limitada em $[a,b]$. 

</aside>

## Teorema do Valor Médio

O **teorema do valor médio** (**de Lagrange**) é tido como um dos mais importantes teoremas da análise real. 

<aside>

<b>(GUIDORIZZI 2001, Teorema do Valor Médio)</b> — Seja $f$ uma função real definida no intervalo fechado $[a,b]$ e diferenciável no intervalo aberto $(a,b)$. Logo, existirá pelo menos um $c \in (a,b)$ tal que 

$$
f'(c) = \dfrac{f(b)-f(a)}{b-a}
$$

<b>Demonstração</b> — Seja $g$ a função dada por 

$$
\begin{align*}
    g(x) &= f(x) - S(x), x \in [a,b] \\\\
    S(x) &= f(a) + \dfrac{f(b)-f(a)}{b-a}(x-a)
\end{align*}
$$

Como $g$ é contínua no intervalo $[a,b]$, derivável em $(a,b)$ e $g(a)=g(b)$, pelo teorema de Rolle, existe $c \in (a,b)$ tal que $g'(c) = 0$. Temos: 

$$
g'(x) = f'(x) - S'(x) \text{ e } S'(x) = \dfrac{f(b)-f(a)}{b-a}
$$

Assim, 

$$
g'(x)=f'(x) - \dfrac{f(b) - f(a)}{b-a}
$$

Daí, 

$$
g'(c) = f'(c) - \dfrac{f(b) - f(a)}{b-a} = 0
$$

Portanto, 

$$
f(b) - f(a) = f'(c) \cdot (b-a) \implies f'(c) = \dfrac{f(b)-f(a)}{b-a}
$$

</aside>

Esse teorema pode ser compreendido como uma generalização do teorema de Rolle, além de suas interpretações geométricas e físicas. 

Geometricamente, o Teorema do Valor Médio nos fornece as retas tangentes paralelas à secante entre os dois pontos $f(a)$ e $f(b)$; fisicamente, ele afirma que existe pelo menos um ponto em que a taxa de variação instantânea de uma quantidade foi igual a sua variação média.

Desse último caso, um exemplo de fácil visualização é o velocímetro de um carro. Se, numa viagem, um automóvel obter uma velocidade média de 60 km/h, o TVM estabelece que houve pelo menos um instante em que o velocímetro marcou <b>exatamente</b> 60 km/h.

## Teorema de Cauchy

Um outro teorema ainda mais geral pode ser deduzido, sendo de boa utilidade. De fato, o teorema de Cauchy é uma generalização do teorema do valor médio, com este podendo ser obtido ao definir $g(x) = x$ no enunciado abaixo. 

<aside>

<b>(GUIDORIZZI 2001, Teorema de Cauchy)</b> — Se $f$ e $g$ forem contínuas em $[a,b]$ e deriváveis em $(a,b)$, então existirá pelo menos um $c \in (a,b)$ tal que

$$
[f(b) - f(a)]g'(c) = [g(b)-g(a)]f'(c)
$$

ou, então

$$
\dfrac{f(b)-f(a)}{g(b)-g(a)} = \dfrac{f'(c)}{g'(c)}, \text{se } g(b) \neq g(a) \text{ e } g'(c) \neq 0
$$

<b>Demonstração</b> — Seja $h(x) = [f(b)-f(a)]g(x) - [g(b)-g(a)]f(x), x \in [a,b]$. 

Temos que $h$ é contínua em $[a,b]$ e derivável em $(a,b)$ e, além disso, que $h(a) = h(b)$. 

Pelo teorema de Rolle, existe $c \in (a,b)$ tal que $h'(c) = 0$, daí 

$$
[f(b)-f(a)]g'(c)-[g(b)-g(a)]f'(c) = 0
$$

ou seja, 

$$
[f(b)-f(a)]g'(c) = [g(b)-g(a)]f'(c)
$$

</aside>

# Regras de L'Hôpital 



As regras de L'Hôpital, nomeadas em homenagem ao matemático francês Guillaume François Antoine, o <a href="https://en.wikipedia.org/wiki/Guillaume de l'Hôpital">Marquês de l'Hôpital</a>, são duas propriedades matemáticas que permitem a simplificação de alguns limites de funções racionais. 

Esta simplificação, com efeito, permite a solução de indeterminações de tipo $\dfrac{0}{0}$ e $\dfrac{\infty}{\infty}$. 

<aside>

<b>(GUIDORIZZI 2001, Primeira regra de L'Hôpital)</b> — Sejam $f$ e $g$ deriváveis em $(p - r, p)$ e em $(p, p+r)$ com $r \gt 0$. Além disso, $g'(x) \neq 0$ para $0 \lt |x - p| \lt r$. Nestas condições, se 

$$
\begin{align*}
    \lim_{x \to p}f(x) &= 0 \\\\
    \lim_{x \to p}g(x) &= 0
\end{align*}
$$

e se $\lim_{x \to p} \dfrac{f'(x)}{g'(x)}$ existir (finito ou infinito), então $\lim_{x \to p}\dfrac{f(x)}{g(x)}$ existirá e 

$$
\lim_{x \to p} \dfrac{f(x)}{g(x)} = \lim_{x \to p} \dfrac{f'(x)}{g'(x)}
$$

Note que esta regra continua válida caso $x \to p$ seja substituido por $x \to p^+$ ou $x \to p^-$ ou $x \to \pm \infty$. 

</aside>

<aside>

<b>(GUIDORIZZI 2001, Segunda regra de L'Hôpital)</b> — Sejam $f$ e $g$ deriváveis em $(m, p)$ com $g'(x)\neq 0$ em $(m, p)$. Nestas condições, se 

$$
\begin{align*}
    \lim_{x \to p^-}f(x) &= +\infty \\\\
    \lim_{x \to p^-}g(x) &= +\infty
\end{align*}
$$

e se $\lim_{x \to p^-} \dfrac{f'(x)}{g'(x)}$ existir (finito ou infinito) então $lim_{x \to p^-} \dfrac{f(x)}{g(x)}$ existirá e 

$$
\lim_{x \to p^-}\dfrac{f(x)}{g(x)} = \lim_{x \to p^-}\dfrac{f'(x)}{g'(x)}
$$

Perceba que esta regra continua válida caso $x \to p^-$ seja substituido por $x \to p^+$ ou $x \to p$ ou $x \to \pm \infty$. Além disso, os limites das condições iniciais podem ser ambos $- \infty$ ou um $+\infty$ e outro $-\infty$. 

</aside>

# Montando gráficos



Podemos esboçar gráficos de diversas funções reais utilizando consequências dos conceitos de derivadas e limites. O objetivo desta seção é esboçar algumas técnicas para que esse esboço se torne possível. Talvez não seja possível realmente desenhar o gráfico em todos os seus detalhes, mas a *noção* do comportamento da função estará no alcance de suas mãos. 

## Determinando porções crescentes e decrescentes

Como visto anteriormente, a interpretação geométrica da derivada é a inclinação da reta tangente a curva num determinado ponto. Se essa inclinação é negativa, significa que a função é **decrescente** naquela região; inclinações positivas implicam em funções crescentes num dado intervalo. Essa utilização é chamada geralmente de **teste da primeira derivada**.

![](images/derivatives_applications/derivatives_applications_first_derivative_test.png)

<i>Perceba que $f'(x)$ é positiva quando a função está subindo e negativa quando o valor de $f(x)$ está caindo.</i>

## Pontos críticos

Chamamos **pontos críticos** os pontos do gráfico de uma dada função $f$ cuja derivada é nula ou inexistente. Uma derivada nula num determinado ponto implica num ponto de **mínimo** ou **máximo**. 

Os pontos de máximo ou mínimo podem ser locais ou globais. Os chamamos de locais quando estamos delimitando um subconjunto do domínio da função, enquanto os globais (também chamados **absolutos**) referem-se a todo o domínio.

Pontos de derivada inexistente implicam regiões de assíntotas verticais, quebras ou então cúspides.

![](images/derivatives_applications/derivatives_applications_critical_points.png)

<i>Uma assíntota vertical separa as duas "metades" das funções $(1/x)$. Em $x = 0$, a derivada não existe.</i>

## Teste da segunda derivada

Ao analisarmos a **segunda derivada** de uma função, podemos perceber que ela nos fornece o comportamento da primeira derivada. Por exemplo, vamos analisar a função $f(x)=x^3$ e suas duas primeiras derivadas.

![](images/derivatives_applications/derivative_applications_second_derivative.png)

<i>A primeira derivada é 3x^2, a segunda é 6x. Uma parábola e uma reta, respectivamente.</i>

Perceba que a segunda derivada é negativa enquanto a primeira está caindo e positiva enquanto a primeira está subindo. Além disso, existe um ponto, chamado **ponto de inflexão**, em que $f''(x)=0$, implicando na mudança de direção da primeira derivada. 

A partir dessas observações, podemos ver que as duas derivadas nos fornecem algumas informações sobre o comportamento da função $f$, como a categorização entre **crescente** e **decrescente** e se seu comportamento de crescimento ou decrescimento está acelerando ou retardando. Na Física, conhecemos a segunda derivada da função espaço vs tempo como **aceleração**.

# Taxas relacionadas



Os problemas de **taxas relacionadas** são problemas de cálculo relativamente comuns. Nesses problemas, temos taxas de variação produtos da mesma causa e, por isso, relacionadas entre si. 

Podemos citar como exemplo a questão abaixo, formulada pelo prof. Dr. José Carlos de Lima, do Instituto de Matemática da UFAL: 

<aside>

Bombeando o ar para dentro de um balão esférico, observamos que seu volume aumenta a uma taxa de $100 \text{ m}^3 \text{/s}$. Quão rápido o raio do balão está aumentando quando o diâmetro do balão por 25 cm?

</aside>

Vamos anotar algumas informações. 

$$
\begin{align*}
    V(R)&=\dfrac{4}{3}\pi R^3 \\\\ 
    \dfrac{dV}{dt}&=100 m^3 \text{/s} \\\\ 
    \dfrac{dR}{dt} &= \text{ ?}
\end{align*}
$$

A chave para a resolução desse problema e outros do mesmo tipo é o estabelecimento de relação entre essas taxas, explicitando a taxa procurada.

Derivando $(1)$ em relação a $t$, chegamos na expressão $\dfrac{dV}{dt}=4 \pi R^2 \dfrac{dR}{dt}$.

Como estamos procurando a taxa $\dfrac{dR}{dt}$ e já sabemos os outros dados na situação apresentada, podemos apenas substituir e encontrá-la. 

$$
\dfrac{dR}{dt}=\dfrac{100^3}{4\pi 25^2} = \dfrac{400}{\pi}
$$

Ou seja, quando o diâmetro do balão for 50 cm, seu raio está crescendo numa taxa de $400 \text{/} \pi$ centímetros por segundo.

# Referências 



1. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC
2. STEWART, James. Cálculo. Volume 1. 6. ed. São Paulo: Cengage Learning, 2009.