# Integração 

# Introdução

Quando estudamos o estudo das <b>integrais</b> em uma única variável, estamos normalmente nos referindo a um tipo específico de integral, chamada <b>Integral de Riemann</b>, nomeada em homenagem ao matemático alemão Bernhard Riemann. 

Embora o conceito de uma função que nos fornecesse a área sob o gráfico de uma determinada função já existisse desde Newton e Leibnitz, o matemático ao lado foi o primeiro a fornecer uma definição verdadeiramente rigorosa para essa função, a partir de conceitos prévios na matemática, como <b>limites</b> e <b>partições</b> de conjuntos.

![](https://upload.wikimedia.org/wikipedia/commons/7/76/Bernhard_Riemann_3.jpg)

<i>Riemann mostrando que ser matemático não implica em postura ruim. Domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Bernhard_Riemann_3.jpg" target="_blank">Wikimedia Commons</a>.</i>

Riemann também é famoso por outras contribuções igualmente monumentais nos campos da análise real, análise complexa. geometria não-euclideana e muitos outros, pavimentando inclusive a matemática necessária para descrever a Relatividade Geral de Einstein. Ele também era bastante tímido e ficava doente com facilidade.

Dessa forma, para compreendermos a definição exposta por Riemann para esse importante objeto matemático, precisamos ter em mente alguns conceitos fundamentais, a saber, a <b>partição de um intervalo</b> e a <b>soma de Riemann</b>.

## Partição de um intervalo

Definimos a partição de um intervalo da seguinte maneira: 

<aside>

<b>Definição (partição de um intervalo)</b> — Dado um intervalo fechado $I=[a,b]$, chamamos <b>partição de $I$</b> o conjunto de $n+1$ pontos no intervalo $I$ de forma que o valor de cada um seja estritamente maior que o outro. Os valores extremos dessse conjunto $P$ são os extremos do intervalo. 

</aside>

![](images/integration_intro/integration_intro_partition.png)

<i>Um exemplo de partição do intervalo $[0,3]$.</i>

A partição de um intervalo o subdivide em $n$ subintervalos, com o tamanho do maior intervalo sendo chamado <b>norma da partição</b> $P$. Em termos mais restritos, podemos definir essa norma pela expressão

$$
|P| = \max{(t_i - t_{i-1})}
$$

Com $i$ referindo-se a cada ponto na partição. No exemplo acima, a norma da partição seria a distância entre os pontos $\text{C}$ e $\text{D}$, ou seja, o tamanho do intervalo formado por esses pontos. 

## Soma de Riemann

A soma de Riemann é uma das maneiras de construir a <b>integral de Riemann</b>, talvez a mais conhecida. Definimos-a da seguinte maneira: 

<aside>

<b>Definição (soma de Riemann)</b> — Dados $f: [a,b] \rightarrow \mathbb{R}$ limitada e contínua; $P$ uma partição de $[a,b]$ e números $c_i \in [a,b]$ de forma que $t_{i - 1} < c_i < t_i$ — isto é, cada número $c_i$ pertencendo ao respectivo subintervalo de mesmo índice — definimos a <b>soma de Riemann referente à partição $P$ e à escolha dos $c_i$</b> por

$$
S(f, P, \{c_i\}^n_{i=1}) = \sum_{i=1}^nf(c_i) \cdot \Delta t_i
$$

onde $\Delta t_i = t_i - t_{i-1}$
</aside>

![](https://upload.wikimedia.org/wikipedia/commons/1/19/Riemann_sum_%28leftbox%29.gif)

<i>Exemplo visual do que está acontecendo ao definirmos uma soma de Riemann para uma determinada partição do domínio de uma função. Estamos calculando a área de diversos retângulos e aproximando a área sob o gráfico. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Riemann_sum_(leftbox).gif" target="_blank">Wikimedia Commons</a>.</i>

# Definindo integrais (de Riemann)

Por fim, chegamos à definição de integral chegada por Bernhard Riemann, que se utiliza dos conceitos expostos anteriormente, a <b>soma de Riemann</b> e a <b>partição de um intervalo</b>. Ela é definida da seguinte forma:

<aside>

<b>Definição (integral de Riemann)</b> — Seja $f: [a,b] \rightarrow \mathbb{R}$. Dizemos que $f$ é integrável se existe $L \in \mathbb{R}$ tal que $L = \lim_{|P| \rightarrow 0} S(f, P, \{c_i\})$ para toda escolha possível dos $c_i$ numa partição $P$.

</aside>

Ou seja, de forma mais palatável, uma função é <b>integrável</b> se, ao analisarmos todas as partições possíveis de seu domínio com normas cada vez menores (mais subintervalos), as somas de Riemann consideradas se aproximam do mesmo número, a mesma área sob o gráfico.

Por fim, escrevemos esse limite por uma notação resumida,

$$
L = \int_{a}^{b} f(x) \ dx
$$

para nos referir à área $L$ sob o gráfico da função $f(x)$ entre os valores $a$ e $b$ do domínio. 

## Propriedades da integral

Dada essa definição inicial da integral, podemos encontrar algumas de suas propriedades, decorrentes do fato de que elas são, na verdade, limites. 

Assim, dadas funções $f,g:[a,b] \rightarrow \mathbb{R}$  integráveis, temos que:

$$
\begin{align*}
    \int_a^bf(x)+g(x) \ dx &= \int_a^b f(x) \ dx + \int_a^b g(x) \ dx \\\\
    \int_a^b kf(x) \ dx &= k \int_a^b f(x) \ dx, k \in \mathbb{R} \\\\ 
    f(x) \ge 0, \forall x \in [a,b] &\Rightarrow \int_a^b f(x) \ dx \ge 0 \\\\ 
    c \in [a,b] &\Rightarrow \int_a^c f(x) \ dx + \int_c^b f(x) \ dx
\end{align*}
$$

Além disso, temos que toda função <b>contínua</b> é <b>integrável</b>, embora algumas funções descontínuas preservem a propriedade de integração. Encontrar todas as condições que tornam uma função integrável está fora do escopo deste documento.

# Calculando integrais

Até aqui, conseguimos definir integrais, operações que nos fornecem a área sob o gráfico de uma determinada função, mas não temos ainda um método eficiente de calculá-las: seguir a definição de Riemann seria um trabalho descomunalmente intensivo. 

Dessa forma, vamos introduzir alguns conceitos, a saber os conceitos de <b>primitivas</b> e por fim o <b>Teorema Fundamental do Cálculo</b>, que irão nos ajudar a calcular integrais de maneiras um pouco mais rápidas. 

## Primitivas

Definimos <b>primitivas</b>, também conhecidas como <b>antiderivadas</b>, da seguinte maneira:

<aside>

<b>Definição (primitiva de fuma função)</b> — Seja $f: \mathbb{R} \rightarrow \mathbb{R}$ uma função. Uma <b>primitiva</b> de $f$ é uma função $F: \mathbb{R} \rightarrow \mathbb{R}$ derivável tal que $F'(X) = f(x)$.

</aside>

Uma consequência imediata dessa definição é a constatação de que <b>se uma função $f$ possui uma primitiva</b>, ela possui <b>infinitas</b>. Demonstrando essa afirmação:

<aside>

<b>Demonstração (existência de infinitas primitivas)</b> — Se $F(x)$ e $G(x)$ são primitivas de uma função $f(x)$, então:

$$
\begin{align*}
    F'(x) &= G'(x) \\
    F'(x)-G'(x) &= 0 \\
    (F-G)'(x) &= 0
\end{align*}
$$

Perceba que, pelo <a href="/books/higher_education/math/calculus_one/derivatives_applications.html">teorema do valor médio</a>, $F(x)$ e $G(x)$ diferem apenas por uma constante real, logo:

$$
F(x) = G(x) + k, k \in \mathbb{R}
$$

</aside>

Disso decorre a existência de infinitas primitivas para uma mesma função, diferindo entre si por apenas uma constante real. Dessa forma, podemos denotar o conjunto de <b>todas as possíveis primitivas de $f$</b> por meio da notação a seguir. 

$$
\int f(x) \ dx
$$

Por fim, é importante ter em mente outro teorema importante: <b>toda função contínua possuí primitiva</b>.

<aside>

<b>Demonstração (toda função contínua possui primitiva)</b> — Seja $f: \mathbb{R} \rightarrow \mathbb{R}$ contínua. Tome $F(x) = \int_{a}^{x} f(t) \ dt$ e $a \in D_f$. 

$$
\begin{align}
  F'(x)&=\lim_{h \rightarrow 0} \dfrac{F(x+h)-F(x)}{h} \\ 
  &= \lim_{h \rightarrow 0}\dfrac{\int  _a^{x+h} f(t) \ dt - \int_{a}^x f(t) \ dt}{h} \\ 
  &= \lim_{h \rightarrow 0} \dfrac{\int_x^{x+h} f(t) \ dt}{h}
\end{align}
$$

Por meio do teorema do valor médio para integrais (visto ao fim deste documento), podemos reescrever $\int_{x}^{x+h} f(t) \ dt = f(c) \cdot h$, com $c \in [x, x+h]$. 

$$
\lim_{h \rightarrow 0} \dfrac{f(c) \cdot h}{h}=\lim_{h \rightarrow 0} f(c) = f(x)
$$

Podemos afirmar essa última igualdade em razão da afirmação que $f$ é uma função contínua. 

Quando $h \rightarrow 0$, o intervalo se estreita e colocamos $c$ arbitrariamente próximo de $x$. Como $f$ é contínua, $\lim_{c \rightarrow x} f(c)=f(x)$.
Dessa forma, $F'(x)=f(x)$, que era o que queríamos demonstrar.

</aside>

# Teorema do valor médio para integrais

Podemos adaptar o <b>teorema do valor médio</b>, originalmente definido para a operação de derivação, para a integração.

<aside>

<b>Teorema (do valor médio para integrais)</b> — Sejam $\phi, f: [a,b] \rightarrow \mathbb{R}$ contínuas com $\phi \ge 0, \forall x \in [a, b]$. Então existe $c \in [a,b]$ tal que $\int_{a}^{b} f(x) \phi(x) \ dx = f(c) \cdot \int_{a}^{b} \phi(x) \ dx$.

</aside>

<aside>

<b>Demonstração</b> — O teorema de Weierstrass (também conhecido pela alcunha <b>teorema dos valores extremos</b>) expõe que $\exists m, M \in \mathbb{R}$ tais que $m \le f(x) \le M, \forall x \in [a,b]$. Como $\phi \ge 0, \forall x \in [a,b]$, temos que: 

$$
\begin{align*}
  &\Rightarrow m \cdot \phi(x) \le f(x) \cdot \phi(x) \le M \cdot \phi(x) \\
  &\Rightarrow \int_a^b m \cdot \phi(x) \ dx \le \int_a^b f(x) \cdot \phi (x) \ dx \le \int_a^b M \cdot \phi(x) \ dx \\ 
  &\Rightarrow m \int_a^b \phi(x) \ dx \le \int_a^b f(x) \cdot \phi(x) \ dx \le M \cdot \int_a^b \phi (x) \ dx
\end{align*}
$$

Substituindo $\int_{a}^{b} \phi(x) \ dx = I$ por brevidade, encontramos: 

$$ 
\begin{align*}
m \cdot I \le \int_a^b f(x) \cdot \phi(x) \ dx \le M \cdot I \\
m \le \dfrac{\int_a^b f(x) \cdot \phi(x) \ dx}{I} \le M
\end{align*}
$$

Por fim, pelo teorema do valor intermediário regular, concluímos que $\exists c \in [a,b]$ tal que $f(c) = \dfrac{\int_{a}^{b}f(x) \cdot \phi(x) \ dx}{I}$, logo, $\int_{a}^{b} f(x) \cdot \phi(x) \ dx = f(c) \cdot \int_{a}^{b} \phi(x) \ dx$, que era o que queríamos demonstrar. 

</aside>

Uma interessante interpretação geométrica é possível quando $\phi(x) = 1$. 

$$ 
\phi(x) = 1 \Rightarrow \int_{a}^{b} f(x) \ dx = f(c)(b-a)
$$

Calcular essa última expressão é o equivalente de encontrar a área do retângulo com base no tamanho dos limites de integração e da altura $f(c)$, além de demonstrarmos que a área desse retângulo possui a mesma área que a integral da função. 

# Referências 

1. <i>Playlist</i> de cálculo diferencial e integral da USP — Coleção de aulas com o prof. Dr. Alexandre Lymberopoulos (<a target="_blank" href="https://www.youtube.com/playlist?list=PLAudUnJeNg4tr-aiNyYCXE46L3qEZ2Nzx">Acesse aqui</a>);
2. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC