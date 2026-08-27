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
    \int_a^bf(x)+g(x) \ dx &= \int_a^b f(x) \ dx + \int_a^b g(x) \ dx \\
    \int_a^b kf(x) \ dx &= k \int_a^b f(x) \ dx, k \in \mathbb{R} \\ 
    f(x) \ge 0, \forall x \in [a,b] &\implies \int_a^b f(x) \ dx \ge 0 \\ 
    c \in [a,b] &\implies \int_a^c f(x) \ dx + \int_c^b f(x) \ dx
\end{align*}
$$

Além disso, temos que toda função <b>contínua</b> é <b>integrável</b>, embora algumas funções descontínuas preservem a propriedade de integração. Encontrar todas as condições que tornam uma função integrável está fora do escopo deste documento.

<aside>

<b>Teorema</b> — Seja $f: [-a, a] \to \mathbb{R}$ contínua e par. Logo, 

$$
\int_{-a}^{a} f(x) \ dx = 2 \int_{0}^{a} f(x) \ dx 
$$

</aside>

<aside>

<b>Demonstração</b> — Se $f$ é par, $f(x) = f(-x), \forall x \in [-a, a]$. Dessa forma: 

$$
\begin{align*}
  \int_{-a}^{a} f(x) \ dx &= \int_{-a}^{0} + \int_{0}^{a} f(x) \ dx \\ 
                          &= \int_{0}^{-a} -f(x) \ dx + \int_{0}^{a} f(x) \ dx \\ 
                          &= - \int_{0}^{-a} f(x) \ dx + \int_{0}^{a} f(x) \ dx \\ 
                          &= - \int_{0}^{-a} f(-x) \ dx + \int_{0}^{a} f(x) \ dx \\ 
\end{align*}
$$

Fazendo então $u = -x \iff dx = -du$: 

$$
\begin{align*}
  \int_{-a}^{a} f(x) \ dx &= - \int_{0}^{a} -f(-u) du \int_{0}^{a} f(x) \ dx \\ 
                          &= \int_{0}^{a} f(x) \ dx + \int_{0}^{a} f(x) \ dx \\ 
                          &= 2 \int_{0}^{a} f(x) \ dx 
\end{align*}
$$

Provado.

</aside>

<aside>

<b>Teorema</b> — Seja $f: [-a, a] \to \mathbb{R}$ uma função ímpar. Logo, 

$$
\int_{-a}^{a} f(x) \ dx = 0 
$$

</aside>

<aside>

<b>Demonstração</b> — Se $f$ é ímpar, $f(-x) = -f(x), \forall x \in [-a, a]$. Assim, 

$$
\begin{align*}
  \int_{-a}^{a} f(x) \ dx &= \int_{-a}^{0} f(x) \ dx + \int_{0}^{a} f(x) \ dx \\ 
                          &= \int_{0}^{-a} -f(x) \ dx + \int_{0}^{a} f(x) \ dx \\ 
                          &= - \int_{0}^{-a} f(x) \ dx + \int_{0}^{a} f(x) \ dx 
\end{align*}
$$

Fazendo $u = -x \iff dx = -du$: 

$$
\begin{align*}
  \int_{-a}^{a} f(x) \ dx &= -\int_{0}^{a} -f(-u) \ du + \int_{0}^{a} f(x) \ dx \\ 
                          &= \int_{0}^{a} f(-u) \ du + \int_{0}^{a} f(x) \ dx \\ 
                          &= - \int_{0}^{a} f(u) \ du + \int_{0}^{a} f(x) \ dx \\ 
                          &= 0
\end{align*}
$$

Provado.

</aside>

# Calculando integrais

Até aqui, conseguimos definir integrais, operações que nos fornecem a área sob o gráfico de uma determinada função. Nesta seção, iremos nos concentrar em aprender como podemos <b>calcular</b> de fato estas integrais.

Dessa forma, iremos primeiro apresentar como podemos calcular a integral de uma função por uma soma de Riemann e, em seguida, introduzir o conceito de <b>função primitiva</b> e, finalmente, o <b>teorema fundamental do Cálculo</b>.

## Soma de Riemann

Podemos calcular a integral de uma função a partir da definição pelo processo da <b>soma de Riemann</b>. Embora seja excessivamente laborioso, é útil reproduzirmos este processo aqui por questões de aprendizado e solidifificação conceitual. Qual seria o valor da integral a seguir? 

$$
\int_{0}^{1} x^2 \ dx 
$$

Seguindo o processo da soma de Riemann, podemos fazer uma aproximação inicial dividindo o intervalo de integração em dez partes. Dessa forma, cada retângulo terá como base uma dimensão de $\dfrac{1 - 0}{10} = \dfrac{1}{10}$. Tomando os $c_i$ como os valores mais a direita das partições, teremos a seguinte aproximação para a integral: 

$$
S = 0.1(0.1^2 + 0.2^2 + 0.3^2 + \dots + 1^2) = 0.385
$$

E num caso mais geral? E se quisessemos encontrar uma expressão para $n$ partições? Conforme  discorrido anteriormente, esta decisão é útil para encontrar de fato o valor da integral, e não apenas uma aproximação.

Perceba que ao subdividirmos o intervalo de integração em $n$ subintervalos, cada partição terá como norma $\dfrac{1}{n}$. Tomando assim nossos $c_i$ como os valores mais a direita das partições, como anteriormente, teremos que $c_i = \dfrac{i}{n}$ e, consequentemente, $f(c_i) = \left(\dfrac{i}{n}\right)^2$. 

Portanto, a soma de Riemann para esta integral torna-se: 

$$
\begin{align*}
  \sum_{i=1}^n \dfrac{1}{n} \dfrac{i^2}{n^2} &= \dfrac{1}{n^3} \sum_{i=1}^n i^2 \\ 
  \therefore \sum_{i=1}^n \dfrac{1}{n} \dfrac{i^2}{n^2} &= \dfrac{1}{n^3} \dfrac{2n^3+3n^2 + n}{6} \\ 
  \therefore \sum_{i=1}^n \dfrac{1}{n} \dfrac{i^2}{n^2} &= \dfrac{2 + \dfrac{3}{n} + \dfrac{1}{n^2}}{6}
\end{align*}
$$

Tomando o limite dessa soma quando $n \to \infty$, obtemos: 

$$
\lim_{n \to \infty} \left(\dfrac{2 + \dfrac{3}{n} + \dfrac{1}{n^2}}{6}\right) = \dfrac{1}{3}
$$

Que é de fato o valor da integral $\int_{0}^1 x^2 \ dx$. 

## Primitivas

Definimos <b>primitivas</b>, também conhecidas como <b>antiderivadas</b>, da seguinte maneira:

<aside>

<b>Definição (primitiva de uma função)</b> — Seja $f: \mathbb{R} \rightarrow \mathbb{R}$ uma função. Uma <b>primitiva</b> de $f$ é uma função $F: \mathbb{R} \rightarrow \mathbb{R}$ derivável tal que $F'(X) = f(x)$.

</aside>

Uma consequência imediata dessa definição é a constatação de que <b>se uma função $f$ possui uma primitiva</b>, ela possui <b>infinitas</b>. Demonstrando essa afirmação:

<aside>

<b>Demonstração (existência de infinitas primitivas)</b> — Se $F(x)$ e $G(x)$ são primitivas de uma função $f(x)$, então:

$$
\begin{align*}
    \therefore F'(x) &= G'(x) \\
    \therefore F'(x)-G'(x) &= 0 \\
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
  F'(x) &=\lim_{h \rightarrow 0} \dfrac{F(x+h)-F(x)}{h} \\ 
  \therefore F'(x) &= \lim_{h \rightarrow 0}\dfrac{\int  _a^{x+h} f(t) \ dt - \int_{a}^x f(t) \ dt}{h} \\ 
  \therefore F'(x) &= \lim_{h \rightarrow 0} \dfrac{\int_x^{x+h} f(t) \ dt}{h}
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

Consequentemente, convém registrar aqui algumas primitivas recorrentes e, por isso, úteis de se ter em mente. Em todos os casos abaixo, $C \in \mathbb{R}$ é a constante de integração.

$$
\begin{align*}
  \int k \ dx &= kx + C \\ 
  \int x^n \ dx &= \dfrac{x^{n+1}}{n+1} + C, \forall n \neq 1 \\ 
  \int \dfrac{1}{x} \ dx &= \ln{|x|} + C \\ 
  \int e^x \ dx &= e^x + C \\ 
  \int a^x \ dx &= \dfrac{a^x}{\ln{|a|}} + C \\ 
  \int \sin{x} \ dx &= -\cos{x} + C \\ 
  \int \cos{x} \ dx &= \sin{x} + C \\ 
  \int \tan{x} \ dx &= \ln{|\sec{x}|} + C = -\ln{|\cos{x}|} + C \\ 
  \int \cot{x} \ dx &= -\ln{|\csc{x}|} + C = \ln{|\sin{x}|} + C \\
  \int \sec{x} \ dx &= \ln{|\sec{x} + \tan{x}|} + C = \ln{|\tan{\left(\dfrac{x}{2} + \dfrac{\pi}{4}\right)}} + C \\ 
  \int \csc{x} \ dx &= -\ln{|\csc{x} + \cotg{x}|} + C = \ln{|\csc{x} - \cot{x}|} + C = \ln{|\tan{\left(\dfrac{x}{2}\right)}|} + C \\ 
  \int \sec^2{x} \ dx &= \tan{x} + C \\ 
  \int \csc^2{x} \ dx &= -\cot{x} + C \\ 
  \int \sec{x} \tan{x} \ dx &= \sec{x} + C \\ 
  \int \csc{x} \cot{x} \ dx &= -\csc{x} + C \\ 
  \int \sinh{x} \ dx &= \cosh{x} + C \\ 
  \int \cosh{x} \ dx &= \sinh{x} + C 
\end{align*}
$$

Além disso, nota-se que para extrair a primitiva de uma função composta por um módulo, isto é, $f(x) = |g(x)|$, é útil realizar um estudo de sinal de $g(x)$ e, após isso, definir $f(x)$ por partes de acordo com este estudo de sinal e, consequentemente, encontrar a antiderivada em cada uma dessas partes.

## O teorema fundamental do Cálculo

O <b>teorema fundamental do Cálculo</b>, geralmente dividido em duas partes, é de fato um dos resultados mais importantes da análise real. Esta conclusão matemática unifica o chamado "cálculo diferencial" com o "cálculo integral", estabelecendo que a derivação e a integração são como operações inversas.

<aside>

<b>Lema</b> — Seja $f: [a, b] \to \mathbb{R}$ e $F: [a, b] \to \mathbb{R}$ uma primitiva de $f$. Além disso, seja $P: a = t_0 \lt t_1 \lt t_2 \lt \dots \lt t_n = b$ uma partição de $[a,b]$. 

Logo, existe uma escolha conveniente para os $c_i$, denotados por $\bar{c_i}$, em $[t_{i-1}, t_{i}]$, de forma que 

$$
F(b) - F(a) = \sum_{i = 1}^n f(\bar{c_i}) \cdot \Delta t_i
$$

com $\Delta t_i = t_i - t_{i-1}$. 

</aside>

<aside>

<b>Demonstração</b> — Inicialmente, sabemos que: 

$$
F(b) - F(a) = \sum_{i = 1}^{n} \left[F(t_i) - F(t_{i-1})\right]
$$

Assim, pelo TVM, sabemos que existem $\bar{c_i}$ em $[t_{i-1}, t_i]$ de forma que: 

$$
F(x_i) - F(x_{i-1}) = F'(\bar{c_i})(t_i - t_{i-1})
$$

como $F$ é primitiva de $f$ e $\Delta t_i = t_i - t_{i-1}$, temos 

$$
F(b) - F(a) = \sum_{i=1}^{n} f(\bar{c_i}) \Delta t_i 
$$

</aside>

<aside>

<b>Teorema (fundamental do Cálculo, parte I)</b> — Seja $f: [a, b] \to \mathbb{R}$ integrável e $F(x)$ sua primitiva. Logo, 

$$
\int_{a}^{b} f(x) \ dx = F(b) - F(a)
$$

</aside>

<aside>

<b>Demonstração</b> — Pelo lema anterior, sabemos que para uma partição $P$ qualquer de $[a,b]$, há uma escolha conveniente de $\bar{c_i}$ em cada subintervalo de forma que 

$$
F(b) - F(a) = \sum_{i = 1}^{n} f(\bar{c_i}) \Delta t_i
$$

Assim, ao escolhermos $\bar{c_i}$ conforme essa escolha conveniente para <b>todas</b> as partições de $P$, é válido que 

$$
\lim_{|P| \to 0} \sum_{i = 1} f(\bar{c_i}) \cdot \Delta t_i = F(b) - F(a)
$$

e, portanto, 

$$
\int_{a}^{b} f(x) \ dx = F(b) - F(a)
$$

Como uma nota final, é importante mencionar que toda função contínua é integrável, além de possuir primitiva.

</aside>

<aside>

<b>Teorema (fundamental do Cálculo, parte II)</b> — Seja $g: I \to \mathbb{R}$, com $I \subset \mathbb{R}$, contínua e $a \in I$ fixo. Assim, para cada $x \in I$, $\int_{a}^{x} g(x) \ dx$ existe. Além disso, $\int_{a}^{x} g(x) \ dx$ é uma primitiva de $g(x)$, isto é, vale 

$$
\dfrac{d}{dx} \int_{a}^{x} g(x) \ dx = g(x)
$$

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
  m \cdot \phi(x) \le f(x) \cdot \phi(x) \le M \cdot \phi(x) \\
  &\implies \int_a^b m \cdot \phi(x) \ dx \le \int_a^b f(x) \cdot \phi (x) \ dx \le \int_a^b M \cdot \phi(x) \ dx \\ 
  &\implies m \int_a^b \phi(x) \ dx \le \int_a^b f(x) \cdot \phi(x) \ dx \le M \cdot \int_a^b \phi (x) \ dx
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
\phi(x) = 1 \implies \int_{a}^{b} f(x) \ dx = f(c)(b-a)
$$

Calcular essa última expressão é o equivalente de encontrar a área do retângulo com base no tamanho dos limites de integração e da altura $f(c)$, além de demonstrarmos que a área desse retângulo possui a mesma área que a integral da função. 

# Exercícios 

## Problemas 

<aside>

<b>Problema 1.</b> Encontre as primitivas: 

$$
\begin{align*}
    a. &\int \dfrac{\sin{(2x)}}{\sin{x}} \ dx 
    b. &\int \sin{x} + \sinh{x} \ dx \\ 
    c. &\int 1 + \tan^2{x} \ dx \\ 
    d. &\int x - \csc{x}\cotg{x} \ dx \\ 
    e. &\int (x+4)(2x+1) \ dx \\
\end{align*}
$$

</aside>

## Resoluções

<aside>

<b>Problema 1 (primeiro item).</b>

$$
\begin{align*}
    \int \dfrac{\sin{(2x)}}{\sin{x}} \ dx &= \int \dfrac{2\sin{x}\cos{x}}{\sin{x}} \ dx \\ 
                                            &= \int 2\cos{x} \ dx \\ 
                                            &= 2\sin{x} + C
\end{align*}
$$

</aside>

<aside>

<b>Problema 1 (segundo item).</b>

$$
\begin{align*}
    \int \sin{x} + \sinh{x} \ dx &= \int \sin{x} \ dx + \int \sinh{x} \ dx \\ 
                                 &= -\cos{x} + \cosh{x} + C \\ 
\end{align*}
$$

</aside>

<aside>

<b>Problema 1 (terceiro item).</b>

$$
\begin{align*}
    \int 1 + \tan^2{x} \ dx &= \int \sec^2{x} \ dx = \tan{x} + C
\end{align*}
$$

</aside>

<aside>

<b>Problema 1 (quarto item).</b>

$$
\begin{align*}
    \int x - \csc{x}\cotg{x} \ dx &= \int x \ dx - \int \csc{x}\coth{x} \ dx \\ 
                             &= \dfrac{x^2}{2} + \csc{x} + C 
\end{align*}
$$

</aside>

<aside>

<b>Problema 1 (quinto item).</b>

$$
\begin{align*}
    \int (x+4)(2x+1) \ dx &= \int 2x^2 + 9x + 4 \ dx \\ 
                          &= 2 \int x^2 \ dx + 9 \int x \ dx + \int 4 \ dx \\ 
                          &= \dfrac{2}{3}x^3 + \dfrac{9}{2}x^2 + 4x + C 
\end{align*}
$$

</aside>

# Referências 

1. <i>Playlist</i> de cálculo diferencial e integral da USP — Coleção de aulas com o prof. Dr. Alexandre Lymberopoulos (<a target="_blank" href="https://www.youtube.com/playlist?list=PLAudUnJeNg4tr-aiNyYCXE46L3qEZ2Nzx">Acesse aqui</a>);
2. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC