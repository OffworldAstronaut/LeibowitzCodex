# O Oscilador Harmônico

# Oscilações 

Definimos como <b>oscilação</b> um movimento periódico, sendo estes muito presentes na física, descrevendo sistemas como pêndulos, cordas e corrente alternada em nosso circuitos elétricos. 

Podemos classificar as oscilações em simples, caso sejam próprias da natureza do sistema, ocorrendo sem nenhuma atuação de força externa, ou forçadas, caso contrário. Num primero momento iremos nos concentrar nas oscilações simples, pois as oscilaçoes forçadas necessitam de uma descrição físico-matemática um pouco mais rebuscada, que leva em conta tanto o regime natural do sistema quanto as oscilaççoes na própria força (resultante) atuante. 

É conveniente inicialmente, no estudo das oscilações simples, a aproximação da força restauradora atuante como algo linear, seguindo a lei de Hooke. Consequentemente, o poço de potencial associado é aproximadamente parabólico. Esse raciocínio foi conduzido anteriormente no tratamento de <a href="/books/higher_education/physics/physics_one/work_energy.html" target="_blank">gráficos de estabilidade</a>. 

Imagine um sistema composto por uma massa $m$ ligada por uma mola de massa desprezível e constante $k$, suspensa verticalmente. Para esse sistema, a equação de movimento newtoniana é 

$$
F(x) = m\dfrac{d^2x}{dt^2} = -kx 
$$

e, portanto, 

$$
m\dfrac{d^2 x}{dt^2} = -\omega^2 x
$$

com 

$$
\omega = \sqrt{\dfrac{k}{m}}
$$

Este sistema é denominado como <b>oscilador harmônico</b>, com todo sistema oscilatório obedecendo a esta dinâmica para oscilações suficientemente pequenas. Caso escolhamos oscilações maiores, devemos adicionar termos de correção não-lineares.

# Oscilações harmônicas

Podemos verificar que a equação de movimento do oscilador harmônico (chamado <b>movimento harmônico simples</b> - MHS) é uma <a href="/books/higher_education/math/calculus_two/differential_equations.html" target="_blank">equação diferencial ordinária de segunda ordem</a>, cuja incógnita é $x(t)$. 

Embora possamos aproximar essa solução numericamente com o auxílio de algoritmos como o de Euler ou de Runge-Kutta, é possível encontrar $x(t)$ analiticamente, como será demonstrado a seguir

<aside>

<b>Solução analítica do oscilador harmônico simples (equação característica)</b> — Há diversas maneiras para solucionar a equação de movimento do oscilador harmônico, com uma das mais básicas sendo pela equação característica.

Propondo uma solução $x(t)$ proporcional a uma exponencial $e^{rt}$, com $r \in \mathbb{C}$, chegamos a uma função horária

$$
x(t) = \alpha e^{i\omega t} + \beta e^{-i \omega t}
$$

com $\alpha, \beta \in \mathbb{C}$. Alternativamente, pela fórmula de Euler, podemos escrever 

$$
x(t) = (\alpha + \beta)\cos(\omega t) + i(\alpha - \beta)\sin{\omega t}
$$

e, consequentemente, 

$$
x(t) = a \cos{\omega t} + b \sin{\omega t}
$$

que é a solução usual e geral para o oscilador harmônico. Como constante própria do movimento, $\omega$ é a <b>frequência angular</b> do MHS.

Uma escrita alternativa é da forma 

$$
x(t) = A\cos{\omega t + \phi}
$$

com $A$ sendo a <b>amplitude</b> da oscilação, isto é, a distância máxima do móvel de sua posição de equilíbrio. O parâmetro $\phi \in mathbb{R}$, por outro lado, representa fisicamente a <b>fase do movimento</b>, o desvio inicial da ondulação em $t=0$.

</aside>

## Linearidade e princípio da superposição

Em sua forma mais geral, equações diferenciais ordinárias lineares de segunda ordem são da forma 

$$
A \dfrac{d^2x}{dt^2} + B\dfrac{dx}{dt} + Cx = F
$$

com $A, B, C, F \in \mathbb{R}$. Caso $F = 0$, dizemos que é uma equação também <b>homogênea</b>. É perceptível que a equação de movimento do oscilador harmônico é uma EDO linear de segunda ordem homogênea. 

Equações desse tipo possuem duas propriedades extremamente importantes para nossos propósitos, que serão demonstradas abaixo. 

<aside>

<b>Teorema</b> — Dada uma equação diferencial ordinária linear de segunda ordem e homogênea, que possui forma geral 

$$
A\dfrac{d^2x}{dt} + B \dfrac{dx}{dt} + Cx = 0
$$

e duas soluções $x_1(t)$ e $x_2(t)$ para esta equação, temos que $x_1(t) + x_2(t)$ é também solução para esta equação.

</aside>

<aside>

<b>Demonstração</b> — Como $x_1(t)$ e $x_2(t)$ são soluções, temos: 

$$
\begin{align*}
    A \dfrac{d^2x_1(t)}{dt^2} + B \dfrac{dx_1(t)}{dt} + Cx_1(t) = 0 &\iff A \dfrac{d^2x_1(t)}{dt^2} + B \dfrac{dx_1(t)}{dt} + Cx_1(t) + A \dfrac{d^2x_2(t)}{dt^2} + B \dfrac{dx_2(t)}{dt} + Cx_2(t) = A \dfrac{d^2x_2(t)}{dt^2} + B \dfrac{dx_2(t)}{dt} + Cx_2(t) \\ 
    &\iff A\left(\dfrac{d^2x_1(t)}{dt^2} + \dfrac{d^2x_2(t)}{dt^2}\right) + B\left(\dfrac{dx_1(t)}{dt} + \dfrac{dx_2(t)}{dt}\right) = 0 \\ 
    &\iff A\left(\dfrac{d^2(x_1(t) + x_2(t))}{dt^2}\right) + B\left(\dfrac{d(x_1(t) + x_2(t))}{dt}\right) = 0
\end{align*}
$$

Portanto, $x_1(t) + x_2(t)$ também é solução da equação.

</aside>

<aside>

<b>Teorema</b> — Dada uma equação diferencial linear de segunda ordem e homogênea e uma solução $x(t)$, temos que $ax(t)$ também é solução, com $a \in \mathbb{R}$.

</aside>

<aside>

<b>Demonstração</b> — Como $x(t)$ é solução, temos: 

$$
\begin{align*}
    A\dfrac{d^2x(t)}{dt} + B \dfrac{dx(t)}{dt} + Cx(t) = 0 &\iff a\left(A\dfrac{d^2x(t)}{dt} + B \dfrac{dx(t)}{dt} + Cx(t)\right) = 0 \\ 
    &\iff A\dfrac{d^2ax(t)}{dt} + B \dfrac{dax(t)}{dt} + Cax(t) = 0
\end{align*}
$$

portanto, $ax(t)$ é solução.

</aside>

<aside>

<b>Corolário</b> — Se $x_1(t)$ e $x_2(t)$ são soluções de uma equação diferencial ordinária linear homogênea de segunda ordem, a função $x(t) = ax_1(t) + bx_2(t)$, com $a, b \in mathbb{R}$, também o é.

</aside>

<aside>

<b>Demonstração</b> — Pelo segundo teorema, sabemos que $ax_1(t)$ e $bx_2(t)$ são soluções da equação. Pelo primeiro, portanto, temos que $x(t) = ax_1(t) + bx_2(t)$ é uma solução.

</aside>

Este resultado é uma forma do <b>princípio de superposição</b>, que rege a interferência entre ondas.

# Energia no oscilador harmônico

Conhecendo a função horária do movimento harmônico simples, temos que sua velocidade é da forma

$$
v(t) = \dfrac{dx}{dt} = -\omega A \sin{(\omega t + \phi)}
$$

logo, a energia cinética do oscilador no instante $t$ é 

$$
T(t) = \dfrac{1}{2}m\dfrac{dx}{dt} + \dfrac{1}{2}m\omega^2A^2\sin{(\omega t + \phi)} 
$$

com a energia potencial correspondente sendo 

$$
U(x) = \dfrac{1}{2}kx^2 = \dfrac{1}{2}m\omega^2 x^2 = \dfrac{1}{2}m \omega^2 A^2 \cos^2{\omega t + \phi} = U(t)
$$

Além disso, somando membro a membro, obtemos a energia mecânica $E$, conservada ao longo do tempo:

$$
E = T + U = \dfrac{1}{2}\left(\dfrac{dx}{dt}\right)^2 + \dfrac{1}{2}kx^2 = \dfrac{1}{2}m\omega^2 A^2
$$

Como previamente discutido em <a href="/books/higher_education/physics/physics_one/work_energy.html" target="_blank">gráficos de estabilidade</a>, temos que um máximo de $T$ é uma raíz de $U$ e vice-versa. 

Uma consequência interessante dessas relações é a possibilidade de determinação da energia cinética em função da posição do oscilador: 

$$
T = \dfrac{1}{2}m\left(\dfrac{dx}{dt}\right)^2 = E - U(x) = \dfrac{1}{2}m\omega^2 (A^2 - x^2)
$$

Podemos ainda encontrar a velocidade instantânea em função de $x$: 

$$
v(x) = \dfrac{dx}{dt} = \pm \omega \sqrt{A^2 - x^2}
$$

# Referências 

1. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 2: Fluidos; oscilações e ondas; calor. 4. ed. rev. São Paulo: Blucher, 2002