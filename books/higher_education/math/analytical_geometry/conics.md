# Cônicas 

# Definições 

---

Algumas construções geométricas (como a elipse, a parábola e a hipérbole) recebem o nome de "cônicas" ou ainda "seções cônicas" em razão de sua construção tradicional ser realizada a partir do corte de cones de maneiras particulares. Entretanto, outras maneiras de construção e definição existem, que serão exploradas ao longo deste documento. 

## Elipses 

Dados dois pontos $F_1$ e $F_2$ e um terceiro ponto $P$ no plano, além de um número $r$ de forma que $r \gt d(F_1, F_2)$,definimos a elipse como o conjunto de todos os pontos $P(x,y)$ tais que 

$$
d(P, F_1) + d(P, F_2) = r
$$

Dessa definição extrai-se a popular construção de elipses com dois pontos fixos, um lápis e um barbante amarrado nos pontos fixos. Apoia-se o lápis no barbante e desenha-se de forma que o barbante mantenha-se esticado. O traçado final é uma elipse. 

!()[https://upload.wikimedia.org/wikipedia/commons/2/2e/Ellipse_Animation_Small.gif]

<i>Construção geométrica de uma elipse a partir de pontos fixos. Animação sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Ellipse_Animation_Small.gif" target="_blank">Wikimedia Commons</a>.</i>

Os pontos $F_1$ e $F_2$ são chamados <b>focos</b> da elipse, com os pontos formados pela intersecção da reta que passa por eles com a elipse e pela intersecção da reta perpendicular a esta e que passa pelo ponto médio entre os focos sendo denominados <b>vértices</b>. Sendo os dois primeiros pontos $D$ e $B$ e os dois últimos $A$ e $C$, temos o segmento $\bar{BD}$ de comprimento $a$ (o <b>eixo maior</b>) e o segmento $\bar{AC}$ de comprimento $b$ (o <b>eixo menor</b>). 

A equação da elipse no plano cartesiano, centrada na origem, é dada por: 

$$
\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1
$$

## Hipérboles 

Dados dois pontos $F_1$ e $F_2$ e um número $r \lt d(F_1, F_2)$, a hipérbole é o conjunto de todos os pontos $P(x,y)$ tais que $|d(F_1, P) - d(F_2, P)| = r$. Enquanto os pontos $F_1$ e $F_2$ ainda possuem a denominação de "focos", a distância $r$ recebe a nomenclatura de "eixo" da hipérbole. 

De forma similar a elipse, os pontos $A_1$ e $A_2$ formados pela intersecção da hipérbole com o segmento de reta que une os seus focos são chamados de <b>vértices</b> da hipérbole. 

Uma hipérbole centrada na origem é dada pela equação 

$$ 
\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1
$$

Além disso, as retas 

$$ 
\begin{align*}
    y &= \dfrac{b}{a}x \\\\ 
    y &= -\dfrac{b}{a}x
\end{align*}
$$

São chamadas <b>assíntotas</b> da hipérbole, sendo os casos extremos das retas secantes à hipérbole que passam pela origem, com estas possuindo coeficientes angulares $m \in \left[-\dfrac{b}{a}, \dfrac{b}{a}\right]$.

## Parábolas 

Dados um ponto $F$ e uma reta $r$, chamamos de <b>parábola de foco $F$ e diretriz $r$</b> o conjunto de pontos que satisfaz $d(P, F) = d(P, r)$. Perceba que a reta "diretriz" "direciona" a orientação da parábola no plano. 

Quando consideramos as posições de uma parábola no plano, há quatro casos especiais que podem ser analisados: concavidade para cima, concavidade para baixo, concavidade para a direita e concavidade para a esquerda. Respectivamente, suas equações são: 

$$ 
\begin{align*}
    y &= \dfrac{1}{4a}x^2 \\\\ 
    y &= -\dfrac{1}{4a}x^2 \\\\ 
    x &= \dfrac{1}{4a}y^2 \\\\
    x &= -\dfrac{1}{4a}y^2 
\end{align*}
$$

Nestes quatro casos especiais, $a = \dfrac{1}{2}d(F,r)$. 

# Translação e rotação de eixos

---

Utilizar novos sistemas de coordenadas originados de translações (movimentos) e/ou rotações do sistema de coordenada usual no plano cartesiano pode se mostrar algo extremamente útil para simplificar equações e problemas.

## Translação 

Podemos transladar, mover, os eixos coordenados de forma que a origem se encontre num outro determinado ponto $O'$ ao invés do usual $(0, 0)$ por meio de simples operações de subtração. 
Dado um outro sistema de coordenadas com origem em $O'= (a,b)$, as coordenadas de um ponto $P(x, y)$ neste novo sistema serão $P(x - a, y - b)$. 

Esta relação pode ser demonstrada/visualizada por meio de um diagrama contendo ambos os sistemas de coordenadas. 

<aside>

Numa interpretação física, modificar o meu sistema de coordenadas (mais usualmente por meio de translação) é a chamada "mudança de referencial", tornando possível a análise de um sistema físico a partir de outro "ponto de vista".

</aside>

## Rotação 

Ao rotacionar os eixos coordenados em um ângulo $\theta$, mensurado no sentido usual (anti-horário), criamos um outro sistema de coordenadas em que todos os pontos $P(x,y)$ do sistema usual recebem novas coordenadas $(x_1, y_1) = (x\cos{\theta} + y\sin{\theta}, -x\sin{\theta} + y\cos{\theta})$.

De fato, essa conversão pode ser facilmente feita entre os dois sistemas seguindo as equações: 

$$
\begin{align*}
    x &= x_1 \cos{\theta} - y_1 \sin{\theta} \\\\
    y &= x_1 \sin{\theta} + y_1 \cos{\theta} \\\\
    x_1 &= x \cos{\theta} + y \sin{\theta} \\\\
    y_1 &= -x\sin{\theta} + y \cos{\theta}
\end{align*}
$$

# Equação geral do segundo grau

---

É possível representar todas as cônicas por meio de uma única equação da forma:

$$
\begin{align*}
ax^2 + by^2 + cxy + dx + ey + f &= 0 \\\\
a, b \text{ ou } c &\neq 0
\end{align*}
$$

De fato, não apenas as cônicas usuais (elipses, parábolas e hipérboles) podem ser representadas por uma equação desta forma, mas também outros subconjuntos do plano, como duas retas, uma única reta ou um único ponto. Também é um caso possível que o subconjunto do plano representado seja o conjunto vazio, quando nenhum ponto do plano satisfaça a equação apresentada. 

Para explorar estes outros subconjuntos, podemos começar pela indicação do conjunto de pontos formado por duas retas $r$ e $s$. Como estamos considerando os pontos de ambas as retas, estamos considerando o conjunto união, denotado por $r \cup s$. 

Dessa forma, dado um ponto $(x_0, y_0)$ qualquer do plano, este só pertence ao conjunto união se, e somente se, ele satisfaz pelo menos uma das equações das retas.

$$ 
\begin{align*}
    r&: ax_0 + by_0 + c = 0 \\\\
    s&: a_1x_0 + b_1y_0 + c_1 = 0
\end{align*}
$$

Também é verdadeiro que, se o ponto considerado pertence a uma das retas e a equação correspondente é satisfeita, a equação do segundo grau formada pelo produto das equações de ambas as retas também é satisfeita, ou seja, a equação formada pelo produto de ambas as equações é a equação cujo conjunto de soluções é o conjunto $r \cup s$. 

$$
(ax_0 + by_0 + c)(a_1x_0 + b_1y_0 + c_1) = 0
$$

Perceba que esta equação é claramente uma equação do segundo grau. 

Caso aconteça que $r$ e $s$ sejam coincidentes (a mesma reta), a equação do segundo grau formada irá representar apenas essa reta. É possível ainda que um único ponto do plano seja solução, ou nenhum. 

Todas as opções apresentadas nesta seção também podem ser inclusas na categoria de "cônicas", menos o conjunto vazio. De fato, duas retas, uma única reta e um único ponto também podem ser representados como seções cônicas. 

Retornando à equação apresentada no início da seção, a <b>equação geral do segundo grau</b>, podemos nos utilizar da translação e da rotação de eixos para simplificá-la em casos mais simples. Perceba que podemos rotacionar o sistema de coordenadas de acordo com seus coeficientes pelas relações 

$$
\begin{align*}
\theta &= \dfrac{1}{2}\arctan\left(\dfrac{c}{a-b}\right), a \neq b \\\\
\theta &= \dfrac{\pi}{4}, a = b
\end{align*}
$$

de forma que a equação seja reduzida para um formato 

$$
\begin{align*}
Ax_1^2 + By_1^2 + Dx_1 + Ey_1 + F &= 0 \\\\
A \neq 0 &\text{ ou } B \neq 0
\end{align*}
$$