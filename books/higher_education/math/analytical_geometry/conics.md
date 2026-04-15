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

![](https://upload.wikimedia.org/wikipedia/commons/2/2e/Ellipse_Animation_Small.gif)

<i>Construção geométrica de uma elipse a partir de pontos fixos. Animação sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Ellipse_Animation_Small.gif" target="_blank">Wikimedia Commons</a>.</i>

Os pontos $F_1$ e $F_2$ são chamados <b>focos</b> da elipse, com os pontos formados pela intersecção da reta que passa por eles com a elipse e pela intersecção da reta perpendicular a esta e que passa pelo ponto médio entre os focos sendo denominados <b>vértices</b>. Sendo os dois primeiros pontos $D$ e $B$ e os dois últimos $A$ e $C$, temos o segmento $\bar{BD}$ de comprimento $a$ (o <b>eixo maior</b>) e o segmento $\bar{AC}$ de comprimento $b$ (o <b>eixo menor</b>). 

A equação reduzida da elipse no plano cartesiano, centrada na origem com seus focos sobre o eixo das abscissas, é dada por: 

$$
\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1
$$

## Hipérboles 

Dados dois pontos $F_1$ e $F_2$ e um número $r \lt d(F_1, F_2)$, a hipérbole é o conjunto de todos os pontos $P(x,y)$ tais que $|d(F_1, P) - d(F_2, P)| = r$. Enquanto os pontos $F_1$ e $F_2$ ainda possuem a denominação de "focos", a distância $r$ recebe a nomenclatura de "eixo" da hipérbole. 

De forma similar a elipse, os pontos $A_1$ e $A_2$ formados pela intersecção da hipérbole com o segmento de reta que une os seus focos são chamados de <b>vértices</b> da hipérbole. 

Uma hipérbole centrada na origem com focos sobre o eixo das abscissas é dada pela equação reduzida

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

são chamadas <b>assíntotas</b> da hipérbole, sendo os casos extremos das retas secantes à hipérbole que passam pela origem, com estas possuindo coeficientes angulares $m \in \left[-\dfrac{b}{a}, \dfrac{b}{a}\right]$.

## Parábolas 

Dados um ponto $F$ e uma reta $r$, chamamos de <b>parábola de foco $F$ e diretriz $r$</b> o conjunto de pontos que satisfaz $d(P, F) = d(P, r)$. Perceba que a reta diretriz <i>direciona</i> a orientação da parábola no plano. 

Quando consideramos as posições de uma parábola com seu vértice na origem, há quatro casos especiais que podem ser analisados: concavidade para cima, concavidade para baixo, concavidade para a direita e concavidade para a esquerda. Respectivamente, suas equações são: 

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

Numa interpretação física, modificar o meu sistema de coordenadas (mais usualmente por meio de translação) é a chamada <b><a href="/books/higher_education/physics/physics_one/kinematics.html" target="_blank">mudança de referencial</a></b>, tornando possível a análise de um sistema físico a partir de outro "ponto de vista".

</aside>

## Rotação 

Ao rotacionar os eixos coordenados em um ângulo $\theta$, mensurado no sentido usual (anti-horário), criamos um outro sistema de coordenadas em que todos os pontos $P(x,y)$ do sistema usual recebem novas coordenadas $(x_1, y_1) = (x\cos{\theta} - y\sin{\theta}, x\sin{\theta} + y\cos{\theta})$.

De fato, qualquer ponto (vetor) $(x, y)$ no plano pode ser rotacionado em $\theta$ graus para um ponto (vetor) $(x_1, y_1)$ por meio de sua multiplicação por uma <b>matriz de rotação</b>. 

$$
\begin{bmatrix}
    \cos \theta & -\sin \theta \\\\ 
    \sin \theta & \cos \theta     
\end{bmatrix}
\begin{bmatrix}
    x \\\\ y
\end{bmatrix}
= 
\begin{bmatrix}
    x_1 \\\\ y_1
\end{bmatrix}
$$

# Equação geral do segundo grau

---

É conhecido dos nossos estudos anteriores que uma equação do segundo grau em $x$ e em $y$ pode nos fornecer elipses, parábolas e hipérboles. Entretanto, o conjunto das seções cônicas possíveis de serem obtidas por equações do segundo grau é maior. Isso pode ser justificado por meio do seguinte raciocínio. 

Imagine duas retas, $r$ e $s$, com suas respectivas equações cartesianas $ax+by+c=0$ e $a_1x+b_1y+c_1=0$. Vamos indicar o subconjunto do plano formado por estas duas retas pela notação $r \cup s$. Perceba que um dado ponto $P(x_0, y_0)$ pertence a este subconjunto se, e somente se este ponto satisfaz uma equação ou outra. 

Isto implica que este ponto pertence a este conjunto se, e somente se, este satisfaz a equação oriunda do produto das equações de ambas as retas, ou seja, a equação 

$$
(ax + by + c)(a_1x + b_1y + c_1) = 0
$$

É fácil ver que esta equação é uma equação do segundo grau em $x$ e em $y$. Além disso, é notável que as retas podem ser coincidentes, com seu conjunto solução sendo uma reta, concorrentes, fornecendo um único ponto, ou paralelas, com o conjunto solução sendo o conjunto vazio. 

Concluímos que uma equação da forma 

$$
Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0
$$

com $A \neq 0$ ou $C \neq 0$ é uma cônica e o número $\Delta = B^2 - 4AC$ é invariante por rotação e denominado <b>discriminante</b>. Se $\Delta < 0$, a cônica formada é uma elipse ou um ponto; se $\Delta = 0$, uma parábola, uma única reta ou um par de retas paralelas e, por fim, se $\Delta > 0$, uma hipérbole ou um par de retas concorrentes. 

Como dito anteriormente, a rotação de eixos pode ser uma técnica especialmente útil para simplificação de equações. De fato, é possível provar que eliminaremos o termo $xy$ da equação se rotacionarmos os eixos em um ângulo de 

$$
\begin{cases}
    \dfrac{1}{2}\arctan{\dfrac{B}{A-C}} & A \neq C \\\\ 
    \dfrac{\pi}{4} & A = C
\end{cases}
$$

com raciocínios semelhantes podendo ser utilizados para simplificar uma determinada equação dada. 

# Definição unificada das cônicas

---