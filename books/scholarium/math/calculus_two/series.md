# Séries

# Introdução e definição

Na Antiguidade Clássica, o filósofo pré-Socrático Zenão de Eleia (490 AC — 430 AC), discípulo de Parmênides, deixou diversos paradoxos relacionados ao conceito de movimento e mudança. Embora seus escritos originais tenham sido perdidos ao longo do tempo, suas ideias chegaram até nós pelos numerosos comentários sobre sua obra realizados por filósofos posteriores, como Aristóteles (384 AC — 322 AC), Platão (428 AC — 348 AC), Diógenes Laércio e Simplício da Cilícia (480 AD — 540 AD).  

Em um dos paradoxos, Aquiles aposta uma corrida contra uma tartaruga: no instante inicial, o herói da Fítia começa no início do caminho, enquanto a tartaruga inicia da metade. Depois de um certo tempo, Aquiles alcança a posição original da tartaruga, enquanto esta se moveu metade do caminho restante. Isto se repete indefinidamente. Aquiles, então, alcança a tartaruga? O guerreiro chega ao final do caminho? Sabemos pela experiência que sim, embora nossa história sugira que não. Zenão defendia a posição de seu mestre que o movimento era uma ilusão dos sentidos.

Esta narrativa motiva a definição de <b>série numérica</b>.

<aside>

<b>Definição (série numérica)</b> — Sejam $a_n, n \ge q, q \in \mathbb{N}$ uma sequência numérica. Definimos a sequência de termo geral 

$$
s_n = \sum_{k=q}^n a_k, n \ge q 
$$

como a <b>série numérica</b> associada à sequência $a_n$.

</aside>

Os números $a_n$ são os termos da série, enquanto $a_n$ é seu termo geral. A expressão anterior também é chamada <b>soma parcial</b> de ordem $n$ da série, enquanto o limite dessa soma quando $n \to \infty$ é chamada <b>soma da série</b>. 

Consequentemente, escrever: 

$$
\sum_{k = q}^\infty a_k = \lim_{n \to \infty} \sum_{k=q}^n a_k 
$$

Ou seja, uma série é a soma de uma sequência infinita. A série é dita <b>convergente</b> se essa soma é finita e <b>divergente</b> caso contrário (ou se o limite não existir).[^1]

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

Além disso, de forma análoga ao que foi discutido no manuscrito sobre <a href="/books/scholarium/math/calculus_two/sequences.html" target="_blank">sequências</a>, trabalhar com a série $\sum_{k=q}^\infty a_k$ é o mesmo que trabalhar com a série $\sum_{k=0}^\infty b_k, b_k = a_{k+q}, k \ge 0$. 

Retornando a Aquiles, podemos modelar o paradoxo como uma série numérica de tempo geral $a_n = \dfrac{1}{2^n}$. Esta série é convergente? Podemos dar um argumento geométrico para a soma

$$
\sum_{n=0}^{\infty} \dfrac{1}{2^n} = \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \dots
$$

que resulta numa soma de exatamente 1. Para isso, considere um quadrado de lado 1. Prencha o quadrado pela metade, depois a metade da metade restante e assim sucessivamente. Perceba que iremos gradualmente preencher todo o quadrado se repetirmos esse processo infinitamente. Este paradoxo em especial retrata uma <b>série geométrica</b>.

![](https://upload.wikimedia.org/wikipedia/commons/4/46/Geometrische_reihe.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Ilustração do argumento geométrico dado acima. Perceba que estamos aproximando a área da figura cada vez mais. CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Geometrische_reihe.svg" target="_blank">Wikimedia Commons</a>.</i>

Séries geométricas são séries da forma

$$
\sum_{n=1}^{\infty} ar^{n-1} = a + ar + ar^2 + \dots + ar^{n-1} + \dots
$$

com $a, r \in \mathbb{R}$ e $a \neq 0$. O número $r$ em especial é chamado <b>razão comum</b> da série, com esta divergindo para $r = 1$. Caso $r \neq 1$, podemos definir a soma parcial $s_n = a + ar + ar^2 + \dots + a^{n-1}$ para um termo $n$ arbitrário. Daí temos $rs_n = ar + ar^2 + \dots + ar^{n-1} + ar^n$ e segue que 

$$
s_n - rs_n = a - ar^n \implies s_n = \dfrac{a(1-r^n)}{1-r}
$$

e

$$
\lim_{n \to \infty} s_n = \lim_{n \to \infty}\left(\dfrac{a(1-r^n)}{1-r}\right) = \dfrac{a}{1-r}
$$

Portanto, qualquer série geométrica convergirá se $r \in (-1, 1)$.[^2]

# Propriedades iniciais

Algumas propriedades iniciais podem ser deduzidas com base na definição de séries, e serão apresentadas a seguir. Por questões de simplificação, todos os resultados a seguir serão expostos e demonstrados para séries da forma 

$$
\sum_{k=0}^\infty a_k
$$

<aside>

<b>Propriedade I (multiplicação por constante)</b> — Seja $\alpha \in \mathbb{R}$ dado. Se $\sum_{k=0}^\infty a_k$ for convergente, $\sum_{k=0}^\infty \alpha a_k$ será convergente e valerá:

$$
\sum_{k=0}^\infty \alpha a_k = \alpha \sum_{k=0}^\infty a_k
$$

</aside>

<aside>

<b>Propriedade II (soma de séries)</b> — Se $\sum_{k=0}^\infty a_k$ e $\sum_{k=0}^\infty b_k$ forem convergentes, então $\sum_{k=0}^\infty (a_k + b_k)$ será convergente e valerá: 

$$
\sum_{k=0}^\infty (a_k+b_k) = \sum_{k=0}^\infty a_k + \sum_{k=0}^\infty b_k
$$

</aside>

<aside>

<b>Propriedade III (subdivisões)</b> — $\sum_{k=0}^\infty$ será convergente se e somente se $\forall p \in \mathbb{N}$ a série $\sum_{k = p}^{\infty} a_k$ for convergente. Além disso, se $\sum_{k=0}^{\infty}$ for convergente, 

$$
p \ge 1 \implies \sum_{k=0}^{\infty} a_k = \sum_{k=0}^{p-1} a_k + \sum_{k=p}^{\infty} a_k
$$

</aside>

<aside>

<b>Demonstração I (multiplicação por constante)</b> — Por definição, temos: 

$$
\sum_{k=0}^{\infty} \alpha a_k = \lim_{n \to \infty} \sum_{k=0}^n \alpha a_k = \alpha \lim_{n \to \infty} \sum_{k=0}^{n} a_k = \alpha \sum_{k=0}^{\infty} a_k
$$

Demonstrado.

</aside>

<aside>

<b>Demonstração II (soma de séries)</b> — Por definição, temos: 

$$
\begin{align*}
    \sum_{k=0}^{\infty} (a_k+b_k) &= \lim_{n \to \infty}\sum_{k=0}^n (a_k+b_k) \\ 
    &= \lim_{n \to \infty} \left(\sum_{k=0}^{n} a_k + \sum_{k=0}^{n} b_k\right) \\ 
    &= \lim_{n \to \infty} \sum_{k=0}^{n} a_k + \lim_{n \to \infty} \sum_{k=0}^{n} b_k \\ 
    &= \sum_{k=0}^{\infty} a_k + \sum_{k=0}^{\infty} b_k
\end{align*}
$$

Demonstrado.

</aside>

<aside>

<b>Demonstração III (subdivisões)</b> — Inicialmente, temos que, para $p \ge 1$ e $n \ge p$, vale: 

$$
\sum_{k=0}^n a_k = \sum_{k=0}^{p-1} a_k + \sum_{k=p}^{n} a_k
$$

Fixando $p$: 

$$
\lim_{n \to \infty}\sum_{k=0}^{n} a_k = \sum_{k=0}^{p-1}a_k + \lim_{n \to \infty} \sum_{k=p}^{n} a_k \implies \sum_{k=0}^{\infty} a_k = \sum_{k=0}^{p-1}a_k + \sum_{k=p}^{\infty} a_k
$$

Desde que uma das séries seja convergente. Como consequência imediata, nessas condições, $\sum_{k = 0}^{\infty} a_k$ convergente implica que $\lim_{p \to \infty}\sum_{k=p}^{\infty} a_k = 0$. 

</aside>

## Convergência e divergência

Pelo teorema a seguir, podemos estudar uma condição necessária para que uma série seja divergente analisando seu termo geral. 

<aside> 

<b>Teorema (critério do termo geral para divergência)</b> — Considere a série $\sum_{k=0}^{\infty} a_k$. Se $\lim_{k \to \infty} a_k \neq 0$ ou se $\lim_{k \to \infty}a_k$ não existir, então a série $\sum_{k=0}^{\infty}a_k$ será divergente.

</aside>

<aside>

<b>Demonstração (critério do termo geral para divergência)</b> — Por questões de simplicidade, este teorema é normalmente provado em sua forma contrapositiva, isto é, que se $\sum_{n=1}^{\infty} a_n$ converge, $\lim_{n \to \infty} a_n = 0$. 

Se $s_n$ é a n-ésima soma parcial, pelo pressuposto que a série converge temos 

$$
\lim_{n \to \infty} s_n = L
$$

e, portanto, 

$$
\lim_{n \to \infty} a_n = \lim_{n \to \infty} (s_n - s_{n-1}) = \lim_{n \to \infty} s_n - \lim_{n \to \infty} s_{n-1} = L - L = 0
$$

Como queríamos demonstrar.

</aside>

Note que a recíproca do teorema anterior não é verdadeira. Um exemplo notável para isso é a <b>série harmônica</b>, definida por:

$$
\sum_{n=1}^{\infty} \dfrac{1}{n} = 1 + \dfrac{1}{2} + \dfrac{1}{3} + \dots
$$

Perceba que embora $\lim_{n \to \infty} \dfrac{1}{n} = 0$, a série diverge. Para demonstrar essa afirmação, um meio esperto é a comparação entre a série harmônica e a integral imprópria

$$
\int_{1}^{\infty} \dfrac{1}{x} \ dx
$$

Note que a série harmônica é a aproximação superior desta integral, com os retângulos excedendo a área da curva. Como esta integral diverge (cf. <a href="/books/scholarium/math/calculus_two/improper_integrals.html" target="_blank">Integrais impróprias</a>), a série também deve divergir. Essa argumentação é um exemplo do chamado <b>teste da integral</b>: se conseguirmos comparar a série com uma integral imprópria, podemos muitas vezes determinar se esta converge ou diverge.

<aside>

<b>Teorema (teste da integral)</b> — Seja $f$ uma função contínua, positiva e decrescente em $[1, \infty)$ e seja $a_n = f(n)$. Logo, a série $\sum_{n=1}^{\infty} a_n$ é convergente se, e somente se, a integral imprópria 

$$
\int_{1}^{\infty} f(x) \ dx 
$$

for convergente. 

</aside>

Uma aplicação direta desse teste é a análise das séries das quais a série harmônica é um caso particular, as <b>séries-p</b>. Estas séries possuem a forma 

$$
\sum_{n=1}^{\infty} \dfrac{1}{n^p} = \dfrac{1}{1^p} + \dfrac{1}{2^p} + \dots
$$

Para quais valores de $p$ há convergência? Perceba que se $p \gt 0$ ou se $p = 1$, o limite de seus termos é não nulo e, consequentemente, a série diverge (cf. teste do termo geral para divergência). Se $p \gt 0$, podemos ver que a função $f(x) = \dfrac{1}{x^p}$ satisfaz as condições da versão do teste da integral exposta anteriormente, com 

$$
\int_{1}^{\infty} \dfrac{1}{x^p} \ dx 
$$

convergente para $p \gt 1$ e divergente para $p \le 1$ (cf. <a href="/books/scholarium/math/calculus_two/improper_integrals.html" target="_blank">Integrais impróprias</a>). Segue que a série analisada converge para $p \gt 1$ e diverge se $p \le 1$.

# Estimando somas

É claro que conseguimos tomar aproximações de uma soma de uma série convergente — as somas parciais. Entretanto, como podemos avaliar a precisão de uma determinada aproximação? Um meio para realizar isso é o cálculo do resto $R_n$: o erro da soma parcial $s_n$ em relação ao valor total da série.

Seguindo as mesmas restrições impostas no teste da integral, podemos comparar as áreas dos retângulos sob a curva $y = f(x)$ e sobre a curva (ao mudarmos o modo da aproximação da integral, de forma semelhante ao que fizermos anteriormente, cf. <a href="/books/scholarium/math/calculus_two/integration.html" target="_blank">Integração</a>). Realizando isto, obtemos a desigualdade

$$
\int_{n + 1}^{\infty} f(x) \ dx \le R_n \le \int_{n}^{\infty} f(x) \ dx 
$$

De modo mais formal, escrevemos: 

<aside>

<b>Teorema (estimativa de erro de uma soma parcial)</b> — Suponha uma função $f(k) = a_k$ contínua, positiva e decrescente para $x \ge n$ e $\sum a_n$ convergente. Se $R_n = s - s_n$, então 

$$
\int_{n + 1}^{\infty} f(x) \ dx \le R_n \le \int_{n}^{\infty} f(x) \ dx 
$$

</aside>

<aside>

<b>Exemplo (Stewart 2013)</b> — Aproxime a soma da série $\sum 1/n^3$ usando a soma dos 10 primeiros termos e estime o erro envolvido nesta aproximação. Além disso, responda quantos termos são necessários para garantir uma precisão de 0,0005.

<b>Solução</b> — Inicialmente, temos que $\sum_{n=1}^{\infty} \dfrac{1}{n^3} \approx s_10 = \sum_{n=1}^{\infty} \dfrac{1}{n^3} = 1.1975$. Pela desigualdade sobre o resto obtida anteriormente, temos $R_{10} \le \int_{10}^{\infty} \dfrac{1}{x^3} \ dx = 1/200$. Portanto, o resto é de no máximo, 0.005. Para encontrar quantos termos são necessários para que $R_n \le 0.0005$, podemos empregar a mesma desigualdade: 

$$
\begin{align*}
    R_n \le \int_{n}^{\infty} \dfrac{1}{x^3} \ dx = \dfrac{1}{2n^2} &\implies \dfrac{1}{2n^2} \le 0.0005 \\ 
    &\implies n \gt \sqrt{1000} \approx 31.6 
\end{align*}
$$

Portanto, precisaremos de pelo menos 32 termos para obter a precisão necessária. Por fim, perceba que, ao acrescentarmos $s_n$ em todos os membros da desigualdade, obtemos

$$
s_n + \int_{n+1}^{\infty} f(x) \ dx \le s \le s_n + \int_{n}^{\infty} f(x) \ dx 
$$

que é uma estimativa mais precisa para a soma da série $s = s_n + R_n$.

</aside>

# Testes de comparação 

Chamamos <b>testes de comparação</b> os testes para convergência ou divergência que se fundamentam na comporação entre séries ou termos de séries. 

<aside>

<b>Teorema (teste de comparação)</b> — Suponha que $\sum a_n$ e $\sum b_n$ séries de termos positivos. Logo, se $\sum b_n$ for convergente e $a_n \le b_n \forall n$, então $\sum a_n$ também será convergente. Além disso, se $\sum b_n$ for divergente e $a_n \ge b_n \forall n$, então $\sum a_n$ também será divergente.

</aside>

<aside>

<b>Teorema (teste de comparação de limite)</b> — Suponha $\sum a_n$ e $\sum b_n$ séries com termos positivos. Se 

$$
\lim_{n \to \infty} \dfrac{a_n}{b_n} = 0
$$

com $c$ finito e positivo, ambas as séries convergem ou divergem.

</aside>

Uma consequência interessante desses testes é a possibilidade de estimativa de erros de somas parciais com base na comparação dos restos de duas séries. De fato, sejam duas séries $\sum a_n$ e $\sum b_n$ convergentes, com a primeira tendo sua convergência determinada pela comparação com a segunda. 

Como 

$$
R_n = s - s_n = a_{n+1} + a_{n+2} + \dots 
$$

e 

$$
T_n = t - t_n = b_{n+1} + b_{n+2} + \dots 
$$

e, além disso, $a_n \le b_n$ para todo $n$, implicando em $R_n \le T_n$. 

<aside>

<b>Exemplo</b> — Calcule o erro da soma parcial dos 100 primeiros termos da série $\sum 1 / (n^3 + 1)$. Como 

$$
\dfrac{1}{n^3 + 1} \lt \dfrac{1}{n^3}
$$

e

$$
T_n \le \int_{n}^{\infty} \dfrac{1}{x^3} \ dx = \dfrac{1}{2n^2}
$$

temos que $R_n \le T_n \le \dfrac{1}{2n^2}$. Para $n=100$, temos 

$$
R_{100} \le \dfrac{1}{2(100)^2} = 0.00005
$$

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

De forma similar ao que investigamos anteriormente, podemos avaliar o erro de somas parciais em séries alternadas. 

<aside>

<b>Teorema (da estimativa de séries alternadas)</b> — Se $s = \sum (-1)^{n-1} a_n$ for a soma de uma série alternada que seja decrescente e $\lim_{n \to \infty} a_k = 0$, então $|R_n| = |s - s_n| \le b_{n+1}$.

</aside>

Por fim, o estudo de séries alternadas motiva os conceitos de <b>convergência absoluta</b> e <b>convergência condicional</b>. Dada qualquer série $\sum a_n$, se a série correspondente $\sum |a_n|$ for convergente, a série original é dita <i>absolutamente convergente</i>. Por outro lado, se uma série converge mas não converge absolutamente, está é dita <i>condicionalmente convergente</i>.

<aside>

<b>Teorema</b> — Se uma série $\sum a_n$ for absolutamente convergente, esta é convergente.

</aside>

Dois testes relacionados a estes tipos de convergência são úteis de se ter em mente. 

<aside>

<b>Teorema (teste da razão)</b> — Dada uma série $\sum a_n$, temos que: 

<ul>

<li>Se $\lim_{n \to \infty} \left|\dfrac{a_{n+1}}{a_n}\right| = L \lt 1$, então a série $\sum_{n=1}^{\infty} a_n$ é absolutamente convergente.</li>

<li>Se $\lim_{n \to \infty} \left|\dfrac{a_{n+1}}{a_n}\right| = L \gt 1$ ou $\lim_{n \to \infty} \left|\dfrac{a_{n+1}}{a_n}\right| = \infty$, a série $\sum_{n=1}^{\infty} a_n$ é divergente.</li>

<li>Se $\lim_{n \to \infty} \left|\dfrac{a_{n+1}}{a_n}\right| = 1$, o teste é inconclusivo.</li>

</ul>

</aside>

<aside>

<b>Teorema (teste da raiz)</b> — Dada uma série $\sum a_n$, temos que: 

<ul>

<li>Se $\lim_{n \to \infty} \sqrt[n]{|a_n|} = L \lt 1$, então a série $\sum_{n=1}^{\infty} a_n$ é absolutamente convergente.</li>

<li>Se $\lim_{n \to \infty} \sqrt[n]{|a_n|} = L \gt 1$ ou $\lim_{n \to \infty} \sqrt[n]{|a_n|} = \infty$, então a série $\sum_{n=1}^{\infty} a_n$ é divergente.</li>

<li>Se $\lim_{n \to \infty} \sqrt[n]{|a_n|} = 1$, o teste é inconclusivo.</li>

</ul>

</aside>

# Série de potências 

Definimos uma série de potências como uma série da forma 

$$
\sum_{n = 0}^{\infty} c_n x^n = c_0 + c_1x + c_2x^2 + \dots 
$$

onde $x$ é uma variável e $c_n$ são os <b>coeficientes</b> da série, constantes reais. Ao fixarmos $x$, a série se reduz a uma soma infinita de constantes que podemos averiguar sua convergência. Dessa forma, é perfeitamente possível que esta convirja para alguns valores e não convirja para outros. 

Assim, a soma da série é uma função $f(x) = c_0 + c_1x + c_2x^2 + \dots$ cujo domínio são todos os valores de $x$ para os quais a série converge.

Em geral, séries da forma 

$$
\sum_{n=0}^{\infty} c_n(x-a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \dots 
$$

são denominadas <b>séries de potências em $(x-a)$</b>, <b>séries de potências centradas em $a$</b> ou ainda <b>séries de potências em torno de $a$</b>. 

<aside>

<b>Teorema</b> — Para uma série de potências $\sum_{n=0}^{\infty} c_n(x-a)^n$, três possibilidades existem: 

<ul>

<li>A série converge apenas em $x=a$;</li>

<li>A série converge para toda a reta real;</li>

<li>Existe $R \gt 0$ tal que a série converge se $|x - a| \lt R$ e diverge se $|x - a| \gt R$</li>

</ul>

</aside>

No terceiro caso, denominamos $R$ como o <b>raio de convergência</b> da série, enquanto o intervalo de todos os valores que a série converge é chamado <b>intervalo de convergência</b>. Convencionalmente, dizemos que $R=0$ no primeiro caso e $R = \infty$ no segundo.

## Representando funções como séries de potências

A representação de uma função como uma série de potências é de notável importância em diversas ciências: é assim que computadores tratam o cálculo de algumas funções, graficamente ou não, fundamentados em otimização. É ótimo realizar esse procedimento num ponto de vista de eficiência em razão da facilidade das unidades de processamento central executarem operações de soma repetidamente. 

Das séries geométricas, perceba que ao tomar $a=1$ e $r=x$, 

$$
\sum_{n=1}^{\infty} x^{n-1} = x + x^2 + x^3 + \dots 
$$

cuja soma é $\lim_{n \to \infty} s_n = \lim_{n \to \infty} \left(\dfrac{1-x^n}{1-x}\right) = \dfrac{1}{1-x}$. Ou seja, podemos representar a função $f(x) = \dfrac{1}{1-x}$ como uma série de potências de $x$. Deste caso inicial já é possível representar diversas funções apenas com manipulações algébricas. 

<aside>

<b>Exemplo (Stewart 2013)</b> — Expresse $f(x) = \dfrac{1}{1+x^2}$ como uma série de potências e encontre o intervalo de convergência. 

<b>Solução</b> — Ao trocar $x$ por $-x^2$ na expressão da soma da progressão geométrica, obtemos: 

$$
\dfrac{1}{1+x^2} = \dfrac{1}{1-(-x^2)} = \sum_{n = 0}^{\infty} (-x^2)^n = \sum_{n=0}^{\infty} (-1)^n x^{2n} = 1 - x^2 + x^4 - x^6 + x^8 - \dots
$$

Em razão de também ser uma série geométrica, esta converge em $r \in (-1, 1)$.

</aside>

## Derivação e integração de séries de potências

Como ilustrado no estudo de oscilações de uma corda (cf. <a href="/books/scholarium/physics/physics_two/oscillations_two.html" target="_blank">Oscilações II</a> e <a href="/books/scholarium/physics/physics_two/waves.html" target="_blank">Ondas</a>) pela representação de seu movimento através da combinação linear de seus modos normais, é possível derivar e integrar alguns tipos de séries. Este tratamento matemático é válido para as séries trigonométricas.

<aside>

<b>Teorema</b> — Se a série de potências $\sum c_n(x-a)^N$ tiver um raio de convergência $R \gt 0$, então 

$$
f(x) = \sum_{n=0}^{\infty} c_n(x-a)^n
$$

é diferenciável no intervalo $(a-R, a+R)$ e vale[^3]

<ol type="I">

<li>$f'(x) = \sum_{n=1}^{\infty} nc_n(x-a)^{n-1}$</li>

<li>$$\int f(x) \ dx = C + c_0(x-a) + c_1 \dfrac{(x-a)^2}{2} + \dots = C + \sum_{n=0}^{\infty} c_n \dfrac{(x-a)^{n+1}}{n+1}$$</li>

</ol>

Alternativamente, as expressões podem ser reescritas, respectivamente, como 

$$
\dfrac{d}{dx}\left[\sum_{n=0}^{\infty} c_n(x-a)^n\right] = \sum_{n=0}^{\infty} [c_n(x-a)^n]
$$

e

$$
\int \sum \left[\sum_{n=0}^{\infty} c_n(x-a)^n\right] \ dx = \sum_{n=0}^{\infty} \int c_n (x-a)^n \ dx 
$$

</aside>

Como nota final, é interessante perceber que as séries de potências podem ser somadas, subtraídas, multiplicadas ou divididas umas pelas outras como se fossem polinômios. 

# Séries de Taylor e MacLaurin

<aside>

<b>Teorema</b> — Se $f$ tiver uma representação em série de potência em $a$, isto é, se 

$$
f(x) = \sum_{n=0}^{\infty} c_n (x-a)^n, |x - a| \lt R 
$$

então seus coeficientes são dados pela fórmula 

$$
c_n = \dfrac{f^{(n)} (a)}{n!}
$$

ou seja, 

$$
f(x) = \sum_{n=0}^{\infty} \dfrac{f^{(n)} (a)}{n!}(x-a)^n
$$

</aside>

A última equação do teorema anterior é batizada como <b>série de Taylor</b> da função $f$ em $a$ (ou, alternativamente, <i>em torno de </i> $a$ ou <i>centrada</i> em $a$). Quando $a=0$, denomina-se pela nomenclatura especial de <b>série de MacLaurin</b>. Além disso, as somas parciais (polinômios) são chamados polinômios de Taylor (ou MacLaurin) de n-ésimo grau de $f$ em $a$.

<aside>

<b>Teorema</b> — Se $f(x) = T_n(x) + R_n(x)$, onde $T_n$ é o polinômio de Taylor de n-ésimo grau de $f$ em $a$ e 

$$
\lim_{n \to \infty} R_n(x) = 0
$$

para $|x-a| \lt R$, então $f$ é igual à soma de sua série de Taylor no intervalo $|x - a| \lt R$. 

</aside>

<aside>

<b>Teorema (desigualdade de Taylor)</b> — Se $|f^{(n+1)} (x)| \le M$ para $|x-a| \le d$, então o resto $R_n(x)$ da série de Taylor satisfaz a desigualdade 

$$
|R_n(x)| \le \dfrac{M}{(n+1)!}|x-a|^{n+1}, |x-a| \le d 
$$

</aside>

Ao utilizar estes dois teoremas em conjunto, é util ter em mente a identidade $\lim_{n \to \infty} \dfrac{x^n}{n!} = 0$.

## Aproximando funções

Vimos anteriormente (cf. <a href="/books/scholarium/math/calculus_one/derivatives_applications.html" target="_blank">Derivadas: Aplicações</a>) que é possível aproximar funções pelos polinômios de Taylor. Entretanto, diferentemente do caso anterior, necessitamos de novas ferramentas para estimar a precisão da aproximação por polinômios de graus maiores que 1 (isto é, lineares). De fato, isso é possível pela aplicação da desigualdade de Taylor (enunciada anteriormente) em conjunto com o teorema anterior a esta. 

Abaixo, temos um exemplo. 

<aside>

<b>Exemplo (Stewart 2013)</b> — Aproxime a função $\sqrt[3]{x}$ por um polinômio de Taylor de grau 2 em $a = 8$. Qual a precisão dessa aproximação quando $x \in [7, 9]$? 

<b>Solução</b> — Temos que $f(x) = x^{1/3}$, o que implica em $f'(x) = \dfrac{1}{3}x^{-2/3}$, $f''(x) = -\dfrac{2}{9}x^{-5/3}$ e $f'''(x) = \dfrac{10}{27}x^{-8/3}$. Além disso, $f(8) = 2$, $f'(8) = 1/12$ e $f''(8) = -1/144$. Portanto, o polinômio de Taylor de grau 2 é 

$$
T_2(x) = f(8) + \dfrac{f'(8)}{1!} (x-8) + \dfrac{f''(8)}{2!} (x-8)^2 = 2 + \dfrac{1}{12}(x-8) - \dfrac{1}{288}(x-8)^2
$$

que é a aproximação desejada. O quão precisa é esta aproximação no intervalo dado? Pela desigualdade de Taylor com $n=2$ e $a=8$, 

$$
|R_2(x)| \le \dfrac{M}{3!}|x-8|^3
$$

com $|f'''(x)| \le M$. Note que, como $x \ge 7$, $x^{8/3} \ge 7^{8/3}$ e, portanto, 

$$
f'''(x) = \dfrac{10}{27} \cdot \dfrac{1}{x^{8/3}} \le \dfrac{10}{27} \cdot \dfrac{1}{7^{8/3}} \lt 0.0021
$$

Assim, podemos tomar $M = 0.0021$. Além disso, $7 \le x \le 9 \implies -1 \le x - 8 \le 1 \iff |x-8| \le 1$. A desigualdade de Taylor então dá 

$$
|R_2(x)| \le \dfrac{0.0021}{3!} \cdot 1^3 = \dfrac{0.0021}{6} \lt 0.0004
$$

que é a precisão de nossa aproximação de Taylor no intervalo dado.

</aside>

# Referências 

1. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. Vol. 4. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. LTC. 
2. STEWART, James. Cálculo. Volume 2. 7. ed. São Paulo: Cengage Learning, 2013.
3. <i>Representing functions as power series</i>. Departamento de Matemática da Universidade Estadual do Óregon. Acesso em 27 de novembro de 2026. (<a href="https://sites.science.oregonstate.edu/math/home/programs/undergrad/CalculusQuestStudyGuides/SandS/PowerSeries/series_as_functions.html" target="_blank">Acesse aqui</a>)


[^1]: Perceba que as somas parciais da séries formam uma sequência. A série convergir é equivalentemente a esta sequência convergir. 
[^2]: É evidente que se $r \ge $, a série irá divergir para infinito. Por outro lado, se $r \le -1$, a série irá oscilar entre diversos valores, nunca convergindo para um único valor. 
[^3]: No caso II, $\int c_0 \ dx = c_0 x + c_1$ é escrito como $c_0(x-a) + C$, com $C = c_1 + ac_0$ para que assim a escrita da expressão se torne mais limpa.