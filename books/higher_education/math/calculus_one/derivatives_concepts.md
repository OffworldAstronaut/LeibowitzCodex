# Derivadas I — Conceitos 

# Introdução



![São Paulo Metro](https://upload.wikimedia.org/wikipedia/commons/0/00/Metro_de_S%C3%A3o_Paulo%2C_Luz_Station%2C_Brazil.jpg)

<i><span title="botão metrô" style="cursor:pointer" onclick="const a = this._a || (this._a = new Audio('/books/higher_education/math/calculus_one/images/metro-sao-paulo.mp3')); a.paused ? a.play() : a.pause();">🎶🎹🎶🎹</span>Próxima estação, next station, Butantã... (Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Metro_de_S%C3%A3o_Paulo,_Luz_Station,_Brazil.jpg" target="_blank">Wikimedia Commons</a>)</i>

A linha 1-Azul do metrô de São Paulo, também conhecida como Linha Norte-Sul, é a mais antiga linha do sistema do metrô, inaugurada em 1974. Também é uma das maiores e mais movimentadas, com milhões de passageiros atravessando os 20 quilômetros de trilhos todos os dias pelos mais variados motivos. A capital não poderia viver sem ela. 

Sua extensão tem um preço: ela consegue ser extremamente lenta em horários de pico, mas incrivelmente rápida fora do <i>rush</i> — alguns minutos separam a "Liberdade" do "Paraíso".

Vamos imaginar que a coordenação do sistema mediu a **velocidade média** da linha, em horário de pico, como sendo aproximadamente 32 km/h. Por padrão, calculamos essa grandeza pela expressão:

$$
V_m=\dfrac{\text{Espaço percorrido}}{\text{Tempo gasto}}
$$

Podemos nos perguntar: seria essa medida realmente precisa? Ela realmente representa a velocidade do trem analisado pelo percurso? Bom, não necessariamente. O trem poderia estar mais devagar no começo, ou mais rápido no fim, ou o contrário, ou ainda ter demorado demais numa estação pela dificuldade em fechar as portas. 

A velocidade média é uma péssima medida se quisermos medir a velocidade do sistema em tempos específicos. 

Mas perceba que podemos tornar nossa medida cada vez melhor ao subdividir nossa medida em várias medidas com espaços de tempo cada vez menores: quanto menor o espaço de tempo considerado, mais próximos estaremos da velocidade real em torno de um instante específico. 

Essa visualização de uma **taxa de mudança** em tempos cada vez menores nos leva naturalmente ao conceito de **derivada**, que veremos adiante.

# Definição



Definimos derivada como o limite da **taxa de variação média** de uma função quando o intervalo $h$entre os valores da nossa variável (tempo, espaço, …) se torna cada vez mais próximo de zero, ou seja, estamos medindo o quão “sensível” a função é em resposta a uma pequena mudança no seu valor de entrada. 

De maneira mais formal, podemos definir que a derivada de uma certa função $f(x)$, denotada por $f'(x)$, é dada por:

$$
f'(x)=\lim_{h \rightarrow 0} \dfrac{f(x+h) - f(x)}{h}
$$

Perceba que esse limite nos retornará uma função cuja variável ainda é $x$:  no nosso exemplo acima, podemos calcular a velocidade da ferrovia em qualquer instante que quiséssemos.

Uma propriedade notável é que **toda função que é diferenciável**, isto é, possui uma derivada, é uma função contínua. O oposto, no entanto, nem sempre é verdade — muitas funções são contínuas mas não possuem derivadas, como por exemplo as **funções modulares**, que possuem limites laterais diferentes no ponto do “bico”.

<aside>

É importante salientar que é perfeitamente possível que a derivada de uma função seja também diferenciável. A derivada da derivada é chamada “derivada segunda” de $f$, denotada por $f''$ ou $f^{(2)}$. A derivada dessa derivada é a “derivada terceira” e assim por diante. 

</aside>

De forma geral, as três razões possíveis de uma função deixar de ser diferenciável num dado ponto são a presença de “bicos”, a descontinuidade de uma função naquele ponto ou ainda que a reta tangente no ponto analisado é uma reta vertical — razão que será justificada na seção seguinte.

## Interpretação geométrica

Ainda é possível uma interpretação geométrica da derivada — uma função que nos fornece o coeficiente angular da reta tangente à nossa função original em qualquer ponto que quisermos. Esse relacionamento pode ser deduzido a partir do próprio cálculo de um coeficiente angular dada uma reta e dois pontos: 

$$
m=\dfrac{y-y_0}{x-x_0}=\dfrac{\Delta y}{\Delta x}
$$

Percebe que o cálculo do coeficiente angular é uma taxa de variação entre $y$ e $x$?

## Interpretando o sinal da derivada

Dessa forma, se em um dado ponto $a$ temos $f'(a)>0$, podemos concluir que a função $f$ é **crescente em torno desse ponto**, pois a taxa de variação entre $y$ e $x$ é **positiva** — quando aumentamos $x$, aumentamos $y$.

O oposto acontece quando $f'(a)<0$, com $f$ decrescente em torno daquele ponto, característica indicada pela sua taxa de variação **negativa** — quando aumentamos $x$, diminuímos $y$.

O último caso, $f'(a)=0$, marca um ponto de **máximo**, **mínimo** ou ainda de **inflexão** — a mudança de $x$ não afeta $y$ nas proximidades daquele ponto. Veremos isso com mais detalhes adiante.

## Exemplos

Por fim, vamos a um exemplo! Qual seria a derivada da função $f(x)=x^2$? 

Nos utilizando da definição dada, podemos calcular o limite. 

$$
\begin{align*}
f'(x)&=\lim_{h \rightarrow 0} \dfrac{(x+h)^2 - x^2}{h}\\\\
f'(x)&=\lim_{h \rightarrow 0}\dfrac{x^2+2xh+h²-x²}{h}\\\\
f'(x)&=\lim_{h \rightarrow 0}\dfrac{h(2x + h)}{h}\\\\
f'(x)&=\lim_{h \rightarrow 0}2x+h\\\\
f'(x)&=2x
\end{align*}
$$

Esse padrão irá se repetir muitas vezes ao derivarmos pela definição — rearranjar a expressão com o objetivo de nos livrar do denominador $h$ e chegar numa expressão que, no final, podemos ignorar completamente essa variável, afinal, **ela tente à zero**, torna-se infinitamente pequena.

Que tal um outro exemplo, mais aplicado à realidade? Vamos dizer que numa vidraria é produzida uma certa quantidade $Q(t)$ (em kg) de vidro temperado, em função de um dado tempo $t$, em horas, aproximada pela função

$$
Q(t)=3t^2-10t
$$

Qual seria a **velocidade de produção** da fábrica? Podemos calcular a velocidade de produção em torno de um dado tempo derivando a função pela definição:

$$
\begin{align*}
Q'(t)&=\lim_{h \rightarrow 0} \dfrac{3(t+h)^2-10(t+h)-3t²+10t}{h}\\\\
Q'(t)&=\lim_{h \rightarrow0}\dfrac{3(t^2+2th+h^2)−10t−10h−3t^2+10t}{h}\\\\
Q'(t)&=\lim_{h \rightarrow 0}\dfrac{6ht+3h^2-10h}{h}\\\\
Q'(t)&=\lim_{h \rightarrow 0}6t-10+3h\\\\
Q'(t)&=6t-10
\end{align*}
$$

Ou seja, poderíamos dizer que a velocidade de produção é de $6t-10$ **quilogramas de vidro por hora** em um dado instante $t$. Por exemplo, quando $t=3$, temos que a velocidade é de

$$
Q'(3)=6 \times 3 - 10 = 8 \text{kg/h}
$$

Em outro instante, por exemplo, quando $t=1$,

$$
Q'(1)=-4 \text{kg/h}
$$

Uma produção que na verdade perde quilos de vidros a cada hora, indicando, talvez, perda de material ou uma paralisação por algum outro motivo.

# Regras de derivação



É perceptível que se utilizar da definição de derivação sempre que se fazer necessário calcular uma derivada é algo trabalhoso e demorado. Por isso, podemos nos utilizar das **regras de derivação**, propriedades do cálculo de derivadas — muitas delas derivadas das propriedades de limites — que facilitam nosso trabalho e diminuem nosso esforço.

## Derivada de uma função constante

A primeira dessas propriedades, e provavelmente a mais direta, é que a derivada de uma função constante é nula.

<aside>

<b>Demonstração (derivada de uma função constante)</b> — Seja $f: \mathbb{R} \to \mathbb{R}$ uma função constante com lei de formação $f(x) = c, \forall c$. 

Pela definição de derivada, temos: 

$$
\begin{align*}
    \lim_{h \to 0}\left(\dfrac{f(x + h) - f(x)}{h}\right) &= \lim_{h \to 0}\left(\dfrac{c-c}{h}\right) \\\\ 
    &= \lim_{h \to 0}\left(\dfrac{0}{h}\right) \\\\ 
    &= 0.
\end{align*}
$$

Note que a divisão do segundo passo é possível pois $h \neq 0$. 

</aside>

## Função potência

Dada uma função $f(x)=x^n$, sua derivada será $f'(x)=nx^{n-1}$ para todo $n \in \mathbb{R}$. 

Por exemplo, dada uma função $f(x)=x^4$, sua derivada será $f'(x)=4x^3$. 

É possível demonstrar a validade dessa afirmação para $n \in \mathbb{N}$ pelo binômio de Newton e jogos de álgebra, tanto para $n \in \mathbb{R}$ por meio da **diferenciação implícita** e da **diferenciação logarítmica**, mostradas mais adiante. 

### Prova 1 — Binômio de Newton

<aside>

Seja $f(x)=x^n$ uma função. Por definição, temos que sua derivada $f'(x)$ é dada pelo limite:

$$
f'(x)=\lim_{h \rightarrow 0} \dfrac{(x + h)^n - x^n}{h}
$$

Expandindo o minuendo do numerador por meio do binômio de Newton, temos que: 

$$
\begin{align*}
    (x+h)^n &= {n \choose 0}x^n + {n \choose 1}x^{n-1} \cdot h + {n \choose 2} x^{n-2} \cdot h^2 + ... + {n \choose n} h^n \\\\ 
    &= \dfrac{n!}{0!(n-0)!} x^n + \dfrac{n!}{1!(n-1)!}x^{n-1}\cdot h + \dfrac{n!}{2!(n-2)!}
    \cdot h^2 + ...+ \dfrac{n!}{n!(n-n)!} \cdot h^n \\\\ 
    &= \dfrac{n!}{n!} x^n + \dfrac{n!}{(n-1)!} x^{n-1} \cdot h + \dfrac{n!}{2(n-2)!} \cdot h^2 + ... + h^n \\\\ 
    &= x^n + nhx^{n-1} + \dfrac{n!}{2(n-2)!} \cdot h^2 + ... + h^n
\end{align*}
$$

Substituindo a expansão no numerador do limite original, temos: 

$$
\begin{align*} 
    (x+h)^n - x^n &= x^n + nhx^{n-1} + \dfrac{n!}{2(n-2)!} \cdot h^2 + ... + h^n - x^n \\\\
    &= nhx^{n-1} + \dfrac{n!}{2(n-2)!} \cdot h^2 + ... + h^n
\end{align*}
$$

Colocando $h$ em evidência e simplificando a fração, chegamos no limite: 

$$
\lim_{h \rightarrow 0} nx^{n-1} = nx^{n-1}
$$

Como queríamos demonstrar.

</aside>

### Prova 2 — Diferenciação implícita e logarítmica

<aside>

Seja $f(x)=y=x^n$. Logo, temos que: 

$$
\begin{align*}
\ln y &= \ln x^n \\\\
\ln y &= n \ln x \\\\ 
\dfrac{y'}{y} &= n\cdot \dfrac{1}{x} \\\\ 
y' &= y \cdot \dfrac{n}{x} \\\\  
y' &= nx^{n-1}
\end{align*}
$$

Como queríamos demonstrar. Os conceitos de derivação implícita e derivação logarítmica estão descritos mais adiante nesta seção.

</aside>

## Multiplicação por uma constante

Dadas duas funções $g(x)$ e $f(x)$ e uma constante $c \in \mathbb{R}$, de forma que $g(x)=cf(x)$, a derivada de $g(x)$ é dada pelo produto entre $c$  e $f'$. 

Essa propriedade pode ser demonstrada de forma relativamente simples. 

<aside>

$$
\begin{align*}
g'(x)&=\lim_{h \rightarrow 0} \dfrac{g(x+h)-g(x)}{h}=\lim_{h \rightarrow 0} \dfrac{cf(x+h) - cf(x)}{h}\\\\
&= \lim_{h \rightarrow 0}\dfrac{c[f(x+h) - f(x)]}{h}=c\lim_{h \rightarrow 0} \dfrac{f(x+h)-f(x)}{h}=cf'(x)
\end{align*}
$$

</aside>

O último passo é justificado por meio das propriedades de limites (limite do produto entre uma função e uma constante).


## Regra da soma ou da diferença

Ao derivarmos uma função formada pela soma de duas outras funções, sua derivada será a soma das derivadas das funções que a formam, isto é

$$
F(x)=f(x) + g(x) \implies F'(x)=f'(x) + g'(x)
$$

<aside>

<b>Demonstração (derivada da soma de duas funções)</b> — Sejam $f(x)$ e $g(x)$ funções diferenciáveis. Temos, pela definição de derivada: 

$$
\begin{align*}
    \lim_{h \to 0}\left(\dfrac{f(x+h)+g(x+h)-f(x)-g(x)}{h}\right) &= \lim_{h \to 0}\left(\dfrac{f(x+h)-f(x)+g(x+h)-g(x)}{h}\right) \\\\
    &= \lim_{h \to 0}\left(\dfrac{f(x+h)-f(x)}{h} + \dfrac{g(x+h)-g(x)}{h}\right)
\end{align*}
$$

Como $f$ e $g$ são ambas diferenciáveis, temos que os limites $\lim_{h \to 0}\left(\dfrac{f(x+h)-f(x)}{h}\right)$ e $\lim_{h \to 0}\left(\dfrac{g(x+h)-g(x)}{h}\right)$ existem. Logo, pela propriedade do limite da soma, segue que 

$$
\begin{align*}
    \lim_{h \to 0}\left(\dfrac{f(x+h)-f(x)}{h} + \dfrac{g(x+h)-g(x)}{h}\right) &= \lim_{h \to 0}\left(\dfrac{f(x+h)-f(x)}{h}\right) + \lim_{h \to 0}\left(\dfrac{g(x+h)-g(x)}{h}\right) \\\\
    &= f'(x) + g'(x) 
\end{align*}
$$

Como queríamos demonstrar.

</aside>

## Regra do produto

Quando derivamos uma certa função $F(x)$ composta pelo produto de outras duas funções, a saber, $f(x)$ e $g(x)$, podemos dizer: 

$$
F'(x)=f'(x)g(x)+f(x)g'(x)
$$

<aside>

<b>Demonstração (derivada do produto de duas funções)</b> — Sejam $f$ e $g$ diferenciáveis. Pela definição de derivada, temos: 

$$
\begin{align*}
    \lim_{h \to 0}\left(\dfrac{f(x+h)g(x+h)-f(x)g(x)}{h}\right) &= \lim_{h \to 0}\left(\dfrac{f(x+h)g(x+h)-f(x)g(x+h)+f(x)g(x+h)-f(x)g(x)}{h}\right) \\\\
    &= \lim_{h \to 0}\left(\dfrac{g(x+h)[f(x+h)-f(x)]+f(x)[g(x+h)-g(x)]}{h}\right) \\\\
    &= \lim_{h \to 0}\left(g(x+h) \cdot \dfrac{f(x+h)-f(x)}{h} + f(x) \cdot \dfrac{g(x+h)-g(x)}{h}\right)
\end{align*}
$$

Como $f$ e $g$ são diferenciáveis e portanto, também contínuas, segue que 

$$
\begin{align*}
    \lim_{h \to 0}\left(g(x+h) \cdot \dfrac{f(x+h)-f(x)}{h} + f(x) \cdot \dfrac{g(x+h)-g(x)}{h}\right) &= f'(x)g(x) + f(x)g'(x) \\\\ 
    &\therefore (fg)'=f'g + fg'
\end{align*}
$$

</aside>

## Regra do quociente

Para encontrar a derivada de uma certa função $F(x)=\dfrac{f(x)}{g(x)}, g(x) \neq 0$, temos que 

$$
F'(x)=\dfrac{g(x)f'(x)-f(x)g'(x)}{[g(x)]^2}
$$

<aside>

<b>Demonstração (derivada do quociente de duas funções)</b> — Sejam $f$ e $g$ diferenciáveis com $g \neq 0$. Pela definição de derivada: 

$$
\begin{align*}
    \lim_{h \to 0}\left(\dfrac{\dfrac{f(x+h)}{g(x+h)} - \dfrac{f(x)}{g(x)}}{h}\right) &= \lim_{h \to 0}\left(\dfrac{g(x)f(x+h)-f(x)g(x+h)}{hg(x)g(x+h)}\right) \\\\
    &= \lim_{h \to 0}\left(\dfrac{g(x)f(x+h)-f(x)g(x+h)}{h} \cdot \dfrac{1}{g(x)g(x+h)}\right) \\\\
    &= \lim_{h \to 0}\left(\dfrac{g(x)f(x+h)-g(x)f(x)+g(x)f(x)-f(x)g(x+h)}{h} \cdot \dfrac{1}{g(x)g(x+h)}\right) \\\\
    &= \lim_{h \to 0}\left(\dfrac{g(x)[f(x+h)-f(x)]-f(x)[g(x+h)-g(x)]}{h} \cdot \dfrac{1}{g(x)g(x+h)}\right) \\\\
    &= \lim_{h \to 0}\left(\left[g(x) \cdot \dfrac{f(x+h)-f(x)}{h} - f(x) \cdot \dfrac{g(x+h)-g(x)}{h}\right] \cdot \dfrac{1}{g(x)g(x+h)}\right)
\end{align*}
$$

Como $f$ e $g$ são diferenciáveis e, portanto, contínuas, vale que: 

$$
\begin{align*}
    \lim_{h \to 0}\left(\left[g(x) \cdot \dfrac{f(x+h)-f(x)}{h} - f(x) \cdot \dfrac{g(x+h)-g(x)}{h}\right] \cdot \dfrac{1}{g(x)g(x+h)}\right) &= \dfrac{f'g-fg'}{g^2}
\end{align*}
$$

</aside>

## Regra da cadeia

A regra da cadeia possui uma demonstração matemática mais complexa, mas uma utilidade imensa, servindo de base para a resolução de problemas como por exemplo a derivação de funções exponenciais, explorada mais adiante — essa propriedade nos permite encontrar a derivada de funções compostas.

Dada uma função $F(x)=(f \circ g)(x) = f(g(x))$, temos que sua derivada é dada por

$$
F'(x)=f'(g(x)) \cdot g'(x)
$$

<aside>

Daqui em diante é interessante a utilização da notação de Leibnitz em algumas — várias — situações pela sua maior densidade informacional. Se não estiver familiarizado com a notação batizada em sua homenagem, vá para o apêndice ao final desse documento e depois retorne aqui.

</aside>

Ou ainda, de forma provavelmente mais didática: 

$$
\dfrac{dy}{dx}=\dfrac{dy}{du} \cdot \dfrac{du}{dx}
$$

Com $y$ sendo minha função original, $u$ sendo a minha função “interna”, tratada como variável, e finalmente $x$, a minha verdadeira variável. 

<aside>

<b>Exemplo</b> — Definindo a função $y=f(x)=\sqrt{5x-8}$, podemos encontrar sua derivada através da regra da cadeia. 

Neste exemplo, chamamos $u=5x-8$. Assim, pela regra da cadeia: 

$$
\begin{align*}
\dfrac{dy}{dx}=\dfrac{dy}{du} \cdot \dfrac{du}{dx} &= \dfrac{1}{2}u^{-1/2} \cdot 5 \\\\ 
&= \dfrac{1}{2} \cdot \dfrac{1}{\sqrt{5x - 8}} \cdot 5 \\\\ 
&= \dfrac{5}{2\sqrt{5x-8}}
\end{align*}
$$

</aside>

### Demonstrações

<aside>

<b>Demonstração (regra da cadeia, adaptada de MathStackExchange)</b> — Sejam $f$ e $g$ funções e $a \in \mathbb{R}$. Definimos uma função $\phi : \mathbb{R} \to \mathbb{R}$ tal que: 

$$
\phi(t)=
\begin{cases}
    \dfrac{f(t) - f(g(a))}{t-g(a)} & t \neq g(a) \\\\
    f'(g(a)) & t = g(a)
\end{cases}
$$

Por construção, $\phi$ é contínua em $g(a)$. Além disso, $g$ é contínua em $a$ por ser diferenciável em $a$. Dessa forma, $\phi(g)$ é contínua em $a$. 

Perceba que, $\forall x \neq a$ vale 

$$
\dfrac{f(g(x)) - f(g(a))}{x-a} = \phi(g(x)) \cdot \dfrac{g(x)-g(a)}{x-a}
$$

e, portanto, 

$$
\begin{align*}
    (f(g))'(a) &= \lim_{x \to a}\left(\dfrac{f(g(x)) - f(g(a))}{x-a}\right) \\\\
    &= \lim_{x \to a}\left(\phi(g(x))\right) \cdot \lim_{x \to a}\left(\dfrac{g(x)-g(a)}{x-a}\right) \\\\ 
    &= \phi(g(a)) \cdot g'(a) \\\\ 
    &= f'(g(a)) \cdot g'(a)
\end{align*}
$$

Como queríamos demonstrar.

</aside>

<aside>

<b>Demonstração (regra da cadeia, alternativa)</b> — Sejam $f$ e $g$ contínuas, com $g$ diferenciável em $x$ e $f$ diferenciável em $g(x)$. Definimos a função $F(x) = (f \circ g)(x)$. Dessa forma, pela definição de derivada, temos que 

$$
\begin{align*}
    F'(x) = \lim_{h \to 0} \dfrac{F(x+h) - F(x)}{h} &= \lim_{h \to 0} \dfrac{f(g(x+h)) - f(g(x))}{h} \\\\ 
    \therefore F'(x) &= \lim_{h \to 0} \dfrac{f(g(x+h)) - f(g(x))}{h} \cdot \dfrac{g(x+h) - g(x)}{g(x+h)-g(x)} \\\\ 
    \therefore F'(x) &= \lim_{h \to 0} \dfrac{f(g(x+h)) - f(g(x))}{g(x+h) - g(x)} \cdot \dfrac{g(x+h)-g(x)}{h} \\\\ 
    \therefore F'(x) &= f'(g(x)) \cdot g'(x)
\end{align*}
$$

</aside>

# Derivando funções exponenciais



As funções exponenciais formam um problema único no estudo do cálculo, pois obter sua derivada mostra-se algo um pouco mais complexo, que iremos abordar ao longo dessa seção.

Antes de tudo, chamamos função exponencial toda função $f(x)=b^x$, com $b > 0$ e $b \neq 1$. 

Tendo isso em mente, vamos tentar derivá-la por meio da definição. Assim, temos que: 

$$
\begin{align*}
    f'(x)&=\lim_{h \rightarrow 0} \dfrac{b^{x + h} - b^x}{h}\\
    &=\lim_{h \rightarrow 0} \dfrac{b^x \cdot b^h - b^x}{h}\\
    &=b^x \cdot \lim_{h \rightarrow 0}\dfrac{b^h - 1}{h}
\end{align*}
$$

Perceba que não temos informação o suficiente para derivar uma função exponencial de base qualquer pois ainda não sabemos como calcular o último limite — só temos uma única informação, **ele é uma constante**, o limite não depende de $x$. 

Chegamos ao fato de que o limite dessa função é proporcional a uma constante que não sabemos, ainda, seu valor. Chegamos a uma barreira.

Para derrubá-la, vamos primeiro imaginar duas bases, a saber, $b_1 = 2$ e $b_2 = 3$. Iremos substituí-las na função do interior do limite que não conseguimos resolver. 

Assim, definimos duas funções, $p(h)$ e $g(h)$, com $b=b_1$ e $b=b_2$, respectivamente. 

Note que quando calculamos o limite dessas duas funções, $\lim_{h \rightarrow 0} p(h)$ e $\lim_{h \rightarrow 0} g(h)$, ambos são bem próximos de 1, sugerindo a existência de uma base cujo limite é exatamente esse valor. 

Vamos batizar essa base **especial** chamando-a $e$.

Na matemática, esse número é conhecido por **número de Euler** ou **número neperiano**, em homenagem aos matemáticos Leonhard Euler e John Napier.

![](images/limits/limits_super_convenient.png)

<i>Seria super conveniente...</i>

Seria conveniente utilizar $e$ como nossa base, pois nossa expressão original, complicada, se tornaria algo simples e prático. 

Dessa forma, quando $b=e$, o limite se torna:

$$
\begin{align*}
    f'(x)&=e^x \cdot \lim_{h \rightarrow 0} \dfrac{e^h-1}{h} \\
    &=e^x
\end{align*}
$$

Ou seja, a derivada da **função exponencial natural** — $f(x)=e^x$ — é ela própria. 

<aside>

<b>Demonstração do limite "conveniente"</b> — Para encontrar o limite $\lim_{h \to 0}\left(\dfrac{e^h-1}{h}\right)$, iremos nos utilizar do limite exponencial fundamental. 

Dessa forma, fazendo $t = \dfrac{1}{e^h-1}$, segue que $\dfrac{1}{t} = e^h - 1$. Realizando a mudança de variável no limite, de $h$ para $t$: 

$$
\begin{align*}
    \lim_{t \to \infty} \left(\dfrac{\dfrac{1}{t}}{\ln\left({1 + \dfrac{1}{t}}\right)}\right) &= \lim_{t \to \infty} \left(\dfrac{1}{t\ln\left({1 + \dfrac{1}{t}}\right)}\right) \\\\
    &= \lim_{t \to \infty} \left(\dfrac{1}{\ln\left(\left(1+\dfrac{1}{t}\right)^t\right)}\right)
\end{align*}
$$

Por definição, sabe-se que $\lim_{t \to \infty} \left(1 + \dfrac{1}{t}\right)^{t} = e$. Além disso, pela continuidade da função logarítmica em todo seu domínio: 

$$
\begin{align*}
    \lim_{t \to \infty} \left(\dfrac{1}{\ln\left(\left(1+\dfrac{1}{t}\right)^t\right)}\right) &= \lim_{t \to \infty} \left(\dfrac{1}{\ln{e}}\right) = \dfrac{1}{1} = 1.
\end{align*}
$$

</aside>

“Mas e as outras bases?”, alguém pode se questionar, mas não se preocupe, pois esse número que encontramos é justamente a chave que irá permitir a superação de nossa barreira no cálculo da derivada de uma exponencial qualquer. 

E se reescrevêssemos nossa função exponencial de base geral **mudando a sua base** para nosso número especial? Isso pode ser feito da seguinte maneira:

$$
b^x=(e^{\log_e{b}})^x
$$

Lembrando que isso pode ser feito por uma propriedade fundamental dos logaritmos: $p^{\log_p{k}}=p$.

Voltando a nossa igualdade original, podemos continuar a simplificá-la:

$$
\begin{align*}
b^x&=(e^{\log_e{b}})^x\\\\
&=e^{x \cdot \log_e{b}}\\\\
&=e^{x \cdot \ln{b}}
\end{align*}
$$

<aside>

Podemos reescrever $\log_e$ como $\ln$ — o logaritmo natural. 

</aside>

Todo esse processo de reescrita foi para possibilitar a aplicação da regra da cadeia em nossa função. Assim, derivando $b^x$ pela regra da cadeia, nós obtemos que: 

$$
\begin{align*}
    \dfrac{d}{dx}(b^x) &=\dfrac{d}{dx}(e^{x \cdot \ln{b}}) \\
    &= e^{x \cdot \ln{b}} \cdot \ln b \\
    &= b^x \cdot \ln b
\end{align*}
$$

Conseguimos o que queríamos! 

Por fim, é importante salientar que este resultado é também válido para qualquer função $b^{f(x)}$, isto é:

$$
\dfrac{d}{dx}b^{f(x)}=b^{f(x)} \cdot  \ln{b} \cdot f'(x)
$$

Essa regra será bastante útil em situações de funções exponenciais compostas. 

# Derivando funções logarítmicas



Podemos denominar **função logaritmo** toda função $f(x)=\log_bx$, com todas as restrições numéricas necessárias para que o logaritmo exista, como por exemplo, que $b>0$ e $b\neq 1$. Em especial, podemos calcular a derivada da função logaritmo natural como base para o caso geral. 

<aside>

<b>Demonstração (derivada da função logaritmo)</b> — Pela definição de derivada, temos: 

$$
\begin{align*}
    \lim_{h \to 0}\left(\dfrac{\ln{(x+h)}-\ln{x}}{h}\right) &= \lim_{h \to 0}\left(\dfrac{\ln{\left(\dfrac{x+h}{x}\right)}}{h}\right) \\\\
    &= \lim_{h \to 0}\left(\dfrac{\ln{\left(1 + \dfrac{h}{x}\right)}}{h}\right)
\end{align*}
$$

Fazendo $t = \dfrac{h}{x}$, temos: 

$$
\begin{align*}
    \lim_{h \to 0}\left(\dfrac{\ln{\left(1 + \dfrac{h}{x}\right)}}{h}\right) &= \lim_{t \to 0}\left(\dfrac{\ln\left(1 + t\right)}{xt}\right) \\\\
    &= \lim_{t \to 0}\left(\dfrac{1}{xt}\ln\left(1 + t\right)\right) \\\\
    &= \dfrac{1}{x} \cdot \lim_{t \to 0} \left(\left(1 + t\right)^{1/t}\right)
\end{align*}
$$

Como a função $\ln(1+t)^{1/t}$ é contínua em todo o seu domínio, podemos escrever: 

$$
\dfrac{1}{x} \cdot \lim_{t \to 0} \left(\left(1 + t\right)^{1/t}\right) = \dfrac{1}{x} \cdot \ln\left(\lim_{t \to 0}\left(1+t\right)^{1/t}\right)
$$

Note que o limite $\lim_{t \to 0}\left(1+t\right)^{1/t}$ é um limite fundamental, valendo $\lim_{t \to 0}\left(1+t\right)^{1/t} = e$. Portanto: 

$$
\begin{align*}
    \dfrac{1}{x} \cdot \lim_{t \to 0} \left(\left(1 + t\right)^{1/t}\right) &= \dfrac{1}{x} \cdot \ln{e} \\\\
    &=\dfrac{1}{x}
\end{align*}
$$

</aside>

<aside>

<b>Corolário (derivada da função logaritmo, base qualquer)</b> — Pela propriedade da mudança de base de logaritmos, segue-se que: 

$$
\begin{align*}
\log_ax = \dfrac{\ln x}{\ln a} \implies \dfrac{d}{dx}(\log_a{x}) &= \dfrac{d}{dx}\left(\dfrac{\ln{x}}{\ln{a}}\right) \\\\    
&= \dfrac{1}{\ln{a}} \dfrac{d}{dx}\ln{x} \\\\
&= \dfrac{1}{x\ln{a}}
\end{align*}
$$

</aside>

# Derivadas de funções trigonométricas



Todas as funções trigonométricas podem ser reconstruídas por meio de recombinações das funções seno e cosseno. Tendo isso em vista, abaixo estarão as suas derivadas pela definição e em seguida uma lista das derivadas das outras funções.

## Derivando a função seno

<aside>

<b>Demonstração (derivada da função seno)</b> — Pela definição de derivada, temos: 

$$
\lim_{h \to 0}\left(\dfrac{\sin{(x+h)}-\sin{x}}{h}\right)
$$

Em seguida, pela identidade do seno da soma de dois arcos, segue que: 

$$
\begin{align*}
    \lim_{h \to 0}\left(\dfrac{\sin{(x+h)}-\sin{x}}{h}\right) &= \lim_{h \to 0}\left(\dfrac{\sin{x}\cos{h} + \cos{x}\sin{h}-\sin{x}}{h}\right) \\\\
    &= \lim_{h \to 0}\left(\dfrac{\sin{x}(\cos{h}-1) + \cos{x} \sin{h}}{h}\right) \\\\
    &= \lim_{h \to 0}\left(\sin{x} \cdot \dfrac{\cos{h}-1}{h} + \cos{x} \cdot \dfrac{\sin{h}}{h}\right)
\end{align*}
$$

Pela continuidade das funções trigonométricas, pelo limite fundamental e pelo limite acima calculado, portanto, podemos escrever, através da propriedade do limite da soma: 

$$
\begin{align*}
    \lim_{h \to 0}\left(\sin{x} \cdot \dfrac{\cos{h}-1}{h} + \cos{x} \cdot \dfrac{\sin{h}}{h}\right) &= \lim_{h \to 0}\left(\sin{x}\cdot\dfrac{\cos{h}-1}{h}\right) + \lim_{h \to 0}\left (\cos{x} \cdot \dfrac{\sin{h}}{h}\right) \\\\
    &= \sin{x} \cdot \lim_{h \to 0}\left(\dfrac{\cos{h} - 1}{h}\right) + \cos{x} \cdot \lim_{h \to 0}\left(\dfrac{\sin{h}}{h}\right) \\\\
    &= \sin{x} \cdot 0 + \cos{x} \cdot 1 \\\\
    &= \cos{x}
\end{align*}
$$

</aside>


## Derivando a função cosseno

Antes de derivar a função cosseno, precisamos ter em mente o <b>limite trigonométrico fundamental</b>, <a href="/books/higher_education/math/calculus_one/limits.html" target="_blank">visto anteriormente</a>, e o seguinte limite: 

$$
\lim_{h \to 0} \left(\dfrac{\cos{h} - 1}{h}\right) = 0
$$

<aside>

<b>Demonstração</b> — Pela definição de derivada, temos: 

$$
\begin{align*}
    \lim_{h \to 0}\left(\dfrac{\cos{h} - 1}{h}\right) &= \lim_{h \to 0}\left(\dfrac{\cos^2{h}-1}{h \cdot (\cos{h} +1)}\right) \\\\
    &= \lim_{h \to 0}\left(\dfrac{-\sin^2{h}}{h \cdot (\cos{h} + 1)}\right) \\\\
    &= -\lim_{h \to 0}\left(\dfrac{\sin{h}}{h} \cdot \dfrac{\sin{h}}{\cos{h} + 1}\right)
\end{align*}
$$

Como as funções trigonométricas são contínuas, o limite direito existe e pode ser calculado por substituição direta. O limite no lado esquerdo da multiplicação é o limite trigonométrico fundamental.

Dessa forma, pela propriedade do limite do produto: 

$$
\begin{align*}
    -\lim_{h \to 0}\left(\dfrac{\sin{h}}{h} \cdot \dfrac{\sin{h}}{\cos{h} + 1}\right) &= -\left[\lim_{h \to 0}\left(\dfrac{\sin{h}}{h}\right) \cdot \lim_{h \to 0} \left(\dfrac{\sin{h}}{\cos{h} + 1}\right) \right] \\\\
    &= -\left[1 \cdot 0\right] \\\\
    &= 0.
\end{align*}
$$

</aside>

<aside>

<b>Demonstração (derivada da função cosseno)</b> — Pela definição de derivada, temos: 

$$
\lim_{h \to 0} \left(\dfrac{\cos{(x+h)}-\cos{x}}{h}\right)
$$

Pela identidade do cosseno da soma, segue que: 

$$
\begin{align*}
    \lim_{h \to 0} \left(\dfrac{\cos{(x+h)}-\cos{x}}{h}\right) &= \lim_{h \to 0} \left(\dfrac{\cos{x}\cos{h}-\sin{x}\sin{h}-\cos{x}}{h}\right) \\\\ 
    &= \lim_{h \to 0}\left(\dfrac{\cos{x}(\cos{h}-1)-\sin{x}\sin{h}}{h}\right) \\\\
    &= \lim_{h \to 0}\left(\cos{x}\cdot\dfrac{\cos{h}-1}{h}-\sin{x}\cdot\dfrac{\sin{h}}{h}\right)
\end{align*}
$$

Pelos mesmos motivos vistos na prova da derivada da função seno, podemos utilizar a propriedade do limite da soma e logo em seguida utilizar as identidades associadas aos limites. Além disso, iremos nos utilizar do limite fundamental do cosseno, visto anteriormente.

$$
\begin{align*}
    \lim_{h \to 0}\left(\cos{x}\cdot\dfrac{\cos{h}-1}{h}-\sin{x}\cdot\dfrac{\sin{h}}{h}\right) &= \lim_{h \to 0}\left(\cos{x}\cdot\dfrac{\cos{h}-1}{h}\right) - \lim_{h \to 0}\left(\sin{x}\cdot\dfrac{\sin{h}}{h}\right) \\\\
    &= \cos{x} \cdot \lim_{h \to 0}\left(\dfrac{\cos{h}-1}{h}\right) - \sin{x} \cdot \lim_{h \to 0}\left(\dfrac{\sin{h}}{h}\right) \\\\
    &= -\sin{x}
\end{align*}
$$

</aside>

## Derivando a função tangente

A função tangente pode ser derivada tanto por primeiros princípios como pela regra do quociente.

<aside>

<b>Demonstração (derivada da função tangente, regra do quociente)</b> — Tome $f(x) = \tan(x) = \dfrac{\sin{x}}{\cos{x}}$. 

Portanto, pela regra do quociente, temos: 

$$
\begin{align*}
    f'(x) &= \dfrac{\cos{x}\cos{x}-\sin{x}(-\sin{x})}{\cos^2{x}} \\\\
    \therefore f'(x) &= \dfrac{\cos^2{x} + \sin^2{x}}{\cos^2{x}} = \dfrac{1}{\cos^2{x}} \\\\
    \therefore f'(x) &= \sec^2{x}
\end{align*}
$$

</aside>

<aside>

<b>Demonstração (derivada da função tangente, primeiros princípios)</b> — Pela definição de derivada, temos: 

$$
\begin{align*}
    f'(x) &= \lim_{h \to 0} \dfrac{\tan{(x+h)-\tan{x}}}{h}
\end{align*}
$$

Pela identidade trigonométrica da tangente da diferença de dois arcos, temos que $\tan{(x+h)}-\tan{x} = \tan{h} \cdot (1 + \tan{(x+h)}\cdot \tan{x})$.

Dessa forma, substituindo no limite, obtemos: 

$$
\begin{align*}
    f'(x) &= \lim_{h \to 0} \dfrac{\tan{h}(1 + \tan{(x+h)}\cdot \tan{x})}{h} \\\\
    \therefore f'(x) &= \lim_{h \to 0}\dfrac{\tan{h}}{h} \cdot \lim_{h \to 0} [1 + \tan{(x+h)}\cdot \tan{x}]
\end{align*}
$$

A propriedade do limite do produto pode ser aplicada pois $\lim_{h \to 0}\dfrac{\tan{h}}{h} = 1$ e $\lim_{h \to 0} [1 + \tan{(x+h)}\cdot \tan{x} = 1 + \tan^2{x}$.

Portanto, obtemos: 

$$
\begin{align*}
    f'(x) &= 1 \cdot (1 + \tan^2{x}) \\\\ 
    \therefore f'(x) &= \sec^2{x}
\end{align*}
$$

Como queríamos demonstrar.

<i>Observação: o limite $\lim_{h \to 0}\dfrac{\tan{h}}{h} = 1$ possui demonstração geométrica de forma similar ao limite fundamental.</i> 

</aside>

## Derivando a função cossecante 

<aside>

<b>Demonstração (derivada da cossecante, regra do quociente)</b> — Pela regra do quociente, obtemos: 

$$
\begin{align*}
    (\csc{x})' &= \left(\dfrac{1}{\sin{x}}\right)' \\\\
    \therefore (\csc{x})' &= -\dfrac{\cos{x}}{\sin^2{x}} \\\\ 
    \therefore (\csc{x})' &=  -\cot{x} \cdot \csc{x}
\end{align*}
$$

Como queríamos demonstrar.

</aside>


## Derivando a função secante

<aside>

<b>Demonstração (derivada da secante, regra do quociente)</b> — Pela regra do quociente, obtemos: 

$$
\begin{align*}
    (\sec{x})' &= \left(\dfrac{1}{\cos{x}}\right)' \\\\
    \therefore (\sec{x})' &= \dfrac{\sin{x}}{\cos^2{x}} \\\\
    \therefore (\sec{x})' &= \tan{x} \cdot \sec{x}
\end{align*}
$$

</aside>

## Derivando a função cotangente 

<aside>

<b>Demonstração (derivada da cotangente, regra do quociente)</b> — Pela regra do quociente, obtemos: 

$$
\begin{align*}
    (\cot{x})' &= \left(\dfrac{1}{\tan{x}}\right)' \\\\
    \therefore (\cot{x})' &= -\dfrac{\sec^2{x}}{\tan^2{x}} \\\\
    \therefore (\cot{x})' &= -\csc^2{x}
\end{align*}
$$

</aside>

# Práticas, regras e técnicas úteis 



Esta seção servirá como um compêndio de algumas regras, técnicas e práticas que podem ser úteis em algumas situações, acelerando o processo de derivação e economizando tempo e esforço. 

## Derivação implícita

A **derivação implícita** é uma técnica muito útil para derivar funções oriundas de equações que relacionam $x$ e $y$, pois nem sempre é fácil escrever $y$ diretamente em função de $x$. Quando isso acontece, precisamos usar a derivação implícita: derivamos os dois membros da equação em relação a $x$ enquanto tratamos $y$ como uma função de $x$ ainda desconhecida.

Por exemplo, considere a equação $x^2+y^2=1$, a equação de um círculo. É fácil ver que podemos explicitar $y=f(x)$ por meio de uma simples reescrita: 

$$
x^2+y^2 = 1 \Rightarrow y = \sqrt{1-x^2}
$$

Mas e se tivermos uma equação como $\sin{(x+y})=y²\cos{x}$? Nesse caso, como encontrar a derivada de $y$? Começaremos derivando ambos os membros em relação a $x$.

$$
\begin{align*}
\dfrac{d}{dx}(\sin{(x+y)})&=\dfrac{d}{dx}(y^2 \cos x)\\\\
\cos{(x+y)} \cdot (1 + y') &= 2y \cdot y' \cos{x} + y^2 (- \sin x)\\\\
\cos{(x+y)} + \cos{(x+y)}y' &= 2y \cos{x} \cdot y' - y^2 \sin{x}\\\\
\end{align*}
$$

Perceba que sempre aplicamos a regra da cadeia ao derivarmos uma expressão que envolve $y$, pois ela é uma função de $x$. 

$$
\begin{align*}
[\cos{(x+y)} - 2y \cos{x}]y' &= -y^2 \sin{x} - \cos{(x+y)}\\\\
y'&=\dfrac{y^2 \sin{x} + \cos{(x+y)}}{2y\cos{x} - \cos{(x+y)}}
\end{align*}
$$

Essa estratégia de derivação se mostra muito útil em problemas das mais variadas áreas, como Física, Química e Economia — quando sabemos a relação entre as variáveis de forma implícita, e seria trabalhoso demais colocar uma em função da outra. 

Se quisermos encontrar a expressão original de $y$, poderemos nos utilizar das técnicas de integração e equações diferenciais, que veremos no decorrer dos próximos cursos — livretos — de Cálculo.

## Derivação logarítmica

A **derivação logarítmica** é uma prática muito eficiente quando se mostra necessário derivar funções formadas por uma grande quantidade de expressões, mais comumente produtos, quocientes e potências. 

Ela consiste apenas em aplicar o logaritmo natural na equação da função, simplificar e derivar implicitamente, extraindo a derivada ao final. 

Por exemplo, vamos encontrar a derivada da função $f(x)=\dfrac{x²\sqrt[3]{5x-10}}{(x-2)^2}$.

Primeiro, vamos aplicar o logaritmo natural nos dois lados da equação e simplificar: 

$$
\begin{align*}
    \ln|y|&=\ln\left|\dfrac{x^2 \sqrt[3]{5x-10}}{(x-2)^2}\right|\\
    &=\ln|x² \cdot \sqrt[3]{5x-10}| - \ln|(x-2)^2|
\end{align*}
$$

Perceba que estamos considerando o **módulo da expressão** pois a função logaritmo não está definida para números negativos. Além disso, pode-se demonstrar que $(\ln{|x|})' = (\ln{x})' = \dfrac{1}{x}$. 

$$
\begin{align*}
    \ln |y|&= \ln |x²|+\ln|\sqrt[3]{5x-10}| - 2\ln|x-2|\\
    \ln |y|&= 2\ln|x| + \dfrac{1}{3} \ln |5x-10| - 2\ln|x-2|\\
\end{align*}
$$

Com a expressão simplificada, derivamos ambos os lados da equação em relação a $x$. 

$$
y' \cdot \dfrac{1}{y}=2 \cdot \dfrac{d}{dx} \ln x + \dfrac{1}{3} \cdot \dfrac{d}{dx} \ln(5x-10) - 2 \cdot \dfrac{d}{dx}\ln (x-2)
$$

Perceba que ignoramos completamente a função módulo necessária depois da derivada: o motivo está na derivação de $\ln|y|$.

Ao derivar $\ln |y|$, a regra da cadeia nos dá:

$$
\dfrac{d}{dx}\ln |y| = \dfrac{1}{|y|} \cdot \text{sgn}(y) \cdot y'
$$

Mas como $\dfrac{1}{|y|} \cdot \text{sgn}(y)=\dfrac{1}{y}$, temos que o resultado final simplifica para $\dfrac{1}{y} \cdot y'$.

Essa relação é válida para os casos de $y > 0$ e $y < 0$ — quando $y=0$, a derivada não existe.

Finalizando essa observação importante e retornando ao objetivo principal, podemos pela regra da cadeia encontrar as derivadas procuradas e continuar a simplificação.

$$
\begin{align*}
    y' \cdot \dfrac{1}{y} &= 2 \cdot \dfrac{1}{x} + \dfrac{1}{3} \cdot \dfrac{1}{5x-10} \cdot 5 - 2 \cdot \dfrac{1}{x-2}\\\\
    &= \dfrac{2}{x} + \dfrac{1}{3(x-2)} - \dfrac{2}{x-2}\\\\
    &= \dfrac{2}{x} - \dfrac{5}{3(x-2)}\\\\
\end{align*}
$$

Por fim, multiplicando ambos os lados por $y$: 

$$
\begin{align*}
    y'&=\left(\dfrac{x^2 \sqrt[3]{5x-10}}{(x-2)^2}\right)\left(\dfrac{2}{x} - \dfrac{5}{3(x-2)}\right)\\\\
    y'&= \dfrac{2x \sqrt[3]{5x-10}}{(x-2)^2} - \dfrac{5x^2 \sqrt[3]{5x-10}}{3(x-2)^3} \\\\
    y'&= \dfrac{(6x^2-12x) \cdot \sqrt[3]{5x-10}-5x² \sqrt[3]{5x-10}}{3(x-2)^3}\\\\
    y'&= \dfrac{(x^2-12x) \cdot \sqrt[3]{5x-10}}{3(x-2)^3}
\end{align*}
$$

Veja como essa técnica poupou tempo ao evitar que aplicássemos repetidas vezes as regras do produto, quociente e da cadeia! 

## Regra de L’Hôpital

Enquanto o simples rearranjo algébrico pode levantar indeterminações em alguns limites, a **regra de L’Hôpital** nos ajuda a tratar de forma simples dois tipos de indeterminações, a saber, as de tipos $\dfrac{0}{0}$ ou $\dfrac{\infty}{\infty}$. 

A regra estabelece que, se supormos duas funções, $f(x)$ e $g(x)$, diferenciáveis em um intervalo aberto $I$, com $g'(x) \neq 0$ — exceto em um dado $a \in I$, possivelmente —, e uma das seguintes situações ocorrerem,

$$
\begin{array}{ccc}
    \lim_{x \rightarrow a} f(x) = 0 & \text{e} &\lim_{x \rightarrow a} g(x)=0\\
    \\
    & \text{ou} &
    \\
    \\
    \lim_{x \rightarrow a} f(x) = \pm \infty & \text{e} &\lim_{x \rightarrow a} g(x)= \pm\infty,
\end{array}
$$

podemos concluir que $\lim_{x \rightarrow a} \dfrac{f(x)}{g(x)} = \lim_{x \rightarrow a} \dfrac{f'(x)}{g'(x)}$.

Para fins ilustrativos, vamos cálcular o seguinte limite: $\lim_{x \rightarrow 2} \dfrac{x - 2}{x^2 - 4}$. 

Podemos perceber que se substituirmos diretamente, teremos uma indeterminação do tipo $\dfrac{0}{0}$. O próximo passo é derivar o numerador e o denominador, para levantar essa indeterminação. Derivando-os, chegamos em: 

$$
\begin{align*}
\lim_{x \rightarrow 2} \dfrac{1 - 0}{2x - 0} &= \lim_{x \rightarrow 2} \dfrac{1}{2x}\\\\
&= \dfrac{1}{2(2)}\\\\
&=\dfrac{1}{4}
\end{align*}
$$

Simples, prático, eficiente. Essa regra é extremamente útil, e irá nos poupar horas de trabalho.

# Derivando funções inversas



<aside>

<b>(GUIDORIZZI, 2001)</b> — Dizemos que $f$ é uma <b>função injetora</b> se, para qualquer $s$ e $t$ pertencentes ao domínio de $f$ vale 

$$
s \neq t \implies f(s) \neq f(t)
$$

</aside>

<aside>

<b>(GUIDORIZZI, 2001)</b> — Suponha uma função $f$ injetora. Como para cada $x \in \text{Im}f$ existe um único $y \in D_f$ tal que $f(y) = x$, é possível definir uma função $g$ injetora tal que

$$
g(x) = y \iff f(y) = x
$$

Se $f$ é tal que construir uma $g$ é possível, $f$ é denominada <b>inversível</b> e $g$ é a <b>função inversa de $f$</b>. Além disso, podemos denotá-la por $f^{-1}$. 

</aside>

<aside>

<b>(GUIDORIZZI, 2001)</b> — Seja $f$ uma função inversível, com função inversa $g$. Se $f$ for derivável em $q = g(p)$, com $f'(q) \neq 0$, e se $g$ for contínua em $p$, então $g$ será derivável em $p$. 

<b>Demonstração</b> — Note que vale a igualdade 

$$
\dfrac{g(x)-g(p)}{x-p} = \dfrac{g(x)-g(p)}{f(g(x)) - f(g(p))} = \dfrac{1}{\dfrac{f(g(x)) - f(g(p))}{g(x)-g(p)}}, x \neq p
$$

Fazendo $u = g(x)$, pela continuidade de $g$ em $p$, $u \to q$ para $x \to p$. Então, 

$$
\lim_{x \to p} \dfrac{g(x)-g(p)}{x-p} = \lim_{u \to q} \dfrac{1}{\dfrac{f(u)-f(q)}{u-q}}
$$

Como $\lim_{u \to q} \dfrac{f(u)-f(q)}{u-q} = f'(q)=f'(g(p))$, resulta

$$
g'(p) = \lim_{x \to p} \dfrac{g(x)-g(p)}{x-p} = \dfrac{1}{f'(g(p))}
$$

Portanto, $g$ é derivável em $p$ e $g'(p) = \dfrac{1}{f'(g(p))}$. 


<b>Demonstração alternativa</b> — Derivando implicitamente a equação, podemos, por meio da cadeia, alcançar a expressão desejada.

$$
\begin{align*}
    [f(g(x))]' &= x' \\\\
    f'(g(x)) \cdot g'(x) &= 1 \\\\
    g'(x) &= \dfrac{1}{f'(g(x))}
\end{align*}
$$

</aside>

## Derivando as funções inversas trigonométricas

Para encontrar as funções inversas trigonométricas, podemos tanto aplicar o método da derivação implicita diretamente como utilizar o teorema exposto previamente. 

### Derivando a função arco seno

<aside>

<b>(Demonstração, derivada do arco seno)</b> — Pelo teorema anterior, podemos escrever

$$
\begin{align*}
    (\arcsin{x})' &= \dfrac{1}{\sin{(\arcsin{x})'}} \\\\
    \therefore (\arcsin{x})' &= \dfrac{1}{\cos{(\arcsin{x})}}
\end{align*}
$$

Pela relação fundamental da trigonometria, podemos concluir que 

$$
(\arcsin{x})' = \dfrac{1}{\sqrt{1 - x^2}}
$$

</aside>

### Derivando a função arco cosseno 

<aside>

<b>(Demonstração, derivada do arco cosseno)</b> — Pelo teorema anterior, podemos escrever

$$
\begin{align*}
    (\arccos{x})' &= \dfrac{1}{(\cos{\arccos{x}})'} \\\\
    (\arccos{x})' &= -\dfrac{1}{\sin{\arccos{x}}}
\end{align*}
$$

Pela relação fundamental da trigonometria, podemos concluir que 

$$
(\arccos{x})' = -\dfrac{1}{\sqrt{1 - x^2}}
$$

</aside>

### Derivando a função arco tangente

<aside>

<b>(Demonstração, derivada do arco tangente)</b> — Pelo teorema anterior, podemos escrever 

$$
\begin{align*}
    (\arctan{x})' &= \dfrac{1}{(\tan \arctan{x})'} \\\\
    \therefore (\arctan{x})' &= \dfrac{1}{\sec^2\arctan{x}}
\end{align*}
$$

Pela relação fundamental da trigonometria, concluimos que

$$
(\arctan{x})' = \dfrac{1}{x^2 + 1}
$$

</aside>

### Derivando a função arco secante

<aside>

<b>(Demonstração, derivada do arco secante)</b> — Pelo teorema anterior, podemos escrever: 

$$
\begin{align*}
    (\text{arcsec }{x})' &= \dfrac{1}{(\sec{\text{arcsec }x})'} \\\\
    \therefore (\text{arcsec }{x})' &= \dfrac{1}{(\sec{\text{arcsec }{x}})(\tan{\text{arcsec }{x}})} \\\\
    \therefore (\text{arcsec }{x})' &= \dfrac{1}{|x| \sqrt{x^2 - 1}}
\end{align*}
$$

Este último passo é possível pela simplificação da primeira parcela e da aplicação da identidade fundamental trigonométrica. Note que o módulo é necessário nessa expressão para manter o sinal positivo na fração, pois é verificável que a taxa de variação do arco secante é estritamente positiva em seu domínio.

</aside>

### Derivando a função arco cossecante 

<aside>

<b>(Demonstração, derivada do arco cossecante)</b> — Pelo teorema anterior, podemos escrever: 

$$
\begin{align*}
    (\text{arccsc }{x})' &= \dfrac{1}{(\csc \text{arccsc }x)'} \\\\
    \therefore (\text{arccsc }{x})' &= -\dfrac{1}{|x|\sqrt{x^2 - 1}} \\\\
\end{align*}
$$

Este último passo é realizado após a aplicação da regra da cadeia e da identidade fundamental trigonométrica. Após simplificar e rearranjar os termos ao final, vale a pena notar o módulo no denominador. Este módulo possui a mesma justificativa da derivada anterior: manter o sinal <b>negativo</b> por todo o domínio, como é possível verificar na prática.

</aside>

### Derivando a função arco cotangente

<aside>

<b>(Demonstração, derivada do arco cotangente)</b> — Pelo teorema anterior, podemos escrever 

$$
\begin{align*}
    (\text{arccot }{ x})' &= -\dfrac{1}{\csc^2{\text{arccot }{ x}}} \\\\
    \therefore (\text{arccot }{ x})' &= \dfrac{1}{1 + x^2}
\end{align*}
$$

Esta conclusão pode ser feita a partir da identidade trigonométrica $\csc^2{x} = 1 + \cot^2{x}$. Basta substituir, simplificar e organizar os termos. 

</aside>

# Apêndice: notações para derivada



Ao longo dos anos, diversas notações para representar a função derivada foram desenvolvidas, com as mais conhecidas sendo as de **Newton**, **Leibnitz** e **Lagrange**. Enquanto a primeira é utilizada mais nos campos da Física, as duas últimas são mais gerais, podendo ser encontradas em uma variedade de contextos.

A notação de Newton, nomeada em homenagem a Isaac Newton, físico inglês, é comumente utilizada na física para representar as funções derivadas de uma função cujo domínio é o tempo. 

Por exemplo, sendo $y(t)$ uma função da altura de um corpo no decorrer do tempo, $\dot{y}$ seria sua primeira derivada — a velocidade — e $\ddot{y}$ sua segunda derivada, a aceleração. Por praticidade, essa notação não é muito utilizada para derivadas de ordem superior. 

Uma notação um pouco mais explícita é a de Lagrange. Para uma certa função $f(x)$, escrevemos sua derivada de primeira ordem como $f'$ ou $f^{(1)}$, a de segunda ordem como $f''$  ou $f^{(2)}$ e assim por diante. É um meio termo entre as notações de Newton e Leibnitz. 

Por sua vez, a notação de Leibnitz é a mais explícita e detalhada de todas as comumente utilizadas, identificando inclusive a variável que a função está sendo derivada. Para uma certa função $f(x)$, podemos denotar sua derivada em relação à variável $x$ por $\dfrac{df}{dx}$ ou $\dfrac{d}{dx}f(x)$.

# Referências 



1. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC
2. STEWART, James. Cálculo. Volume 1. 6. ed. São Paulo: Cengage Learning, 2009.