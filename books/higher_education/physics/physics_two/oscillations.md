# Oscilações

# Oscilações 

Definimos como <b>oscilação</b> um movimento periódico, geralmente no tempo, em torno de um ponto central, o <b>ponto de equilíbrio</b>. Movimentos oscilatórios são onipresentes na Física, podendo ser observados na mecânica newtoniana, no estudo clássico da luz ou ainda na mecânica quântica.

<div class="wiki-thumb">

![](https://upload.wikimedia.org/wikipedia/commons/6/6f/Pendulum-no-text.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Pêndulo simples executando um movimento oscilatório. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Pendulum-no-text.gif" target="_blank">Wikimedia Commons</a>.</i>

</div>

Podemos classificar as oscilações em <b>simples</b>, caso sejam próprias da natureza do sistema, ocorrendo sem nenhuma atuação de força externa, ou <b>forçadas</b>, caso contrário. Num primeiro momento iremos nos concentrar nas oscilações simples, pois as oscilaçoes forçadas necessitam de uma descrição físico-matemática um pouco mais rebuscada, que leva em conta tanto o regime natural do sistema quanto as oscilações na magnitude da força (resultante) atuante. 

É conveniente, no estudo das oscilações simples, a aproximação da força restauradora atuante como algo linear, seguindo a <b>lei de Hooke</b>. Consequentemente, o poço de potencial associado é aproximadamente parabólico. Esse raciocínio foi conduzido anteriormente no tratamento de <a href="/books/higher_education/physics/physics_one/work_energy.html" target="_blank">gráficos de estabilidade</a>. 

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

com $A$ sendo a <b>amplitude</b> da oscilação, isto é, a distância máxima do móvel de sua posição de equilíbrio. O parâmetro $\phi \in \mathbb{R}$, por outro lado, representa fisicamente a <b>fase do movimento</b>, o desvio inicial da ondulação em $t=0$.

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

<b>Corolário</b> — Se $x_1(t)$ e $x_2(t)$ são soluções de uma equação diferencial ordinária linear homogênea de segunda ordem, a função $x(t) = ax_1(t) + bx_2(t)$, com $a, b \in \mathbb{R}$, também o é.

</aside>

<aside>

<b>Demonstração</b> — Pelo segundo teorema, sabemos que $ax_1(t)$ e $bx_2(t)$ são soluções da equação. Pelo primeiro, portanto, temos que $x(t) = ax_1(t) + bx_2(t)$ é uma solução.

</aside>

Este resultado é uma forma do <b>princípio de superposição</b>, que rege a interferência entre ondas.

## Energia no oscilador harmônico

<div class="wiki-thumb">

![](https://upload.wikimedia.org/wikipedia/commons/3/30/Harmonic_field.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Gráfico de estabilidade do oscilador harmônico. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Harmonic_field.png" target="_blank">Wikimedia Commons</a>.</i>

</div>

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

## Exemplos e aplicações

Em razão de praticamente qualquer sistema conservativo com um grau de liberdade se comportar como um oscilador harmônico, é possível dar uma infinidade de exemplos. Iremos aqui explorar com um pouco mais de detalhe alguns deles e aplicações notáveis. 

### Pêndulo de torção 

<div class="wiki-thumb">

<p>
<iframe src="https://commons.wikimedia.org/wiki/File:Torsion-pendulum.ogv?embedplayer=yes" width="240" height="180" frameborder="0" loading="lazy" allow="autoplay; picture-in-picture" allowfullscreen></iframe>
</p>

<i>Pêndulo de torção. Vídeo sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Torsion-pendulum.ogv" target="_blank">Wikimedia Commons</a>.</i>

</div>

O sistema do pêndulo de torção é formado por uma barra horizontal inicialmente em equilíbrio numa posição suspensa por um fio vertical. Ao defletirmos a barra em um pequeno ângulo $\theta$, teremos um torque hookeriano restaurador de módulo $\tau = -k\theta$. A constante $k$ é chamada <b>módulo de torção</b> do fio empregado e seu valor depende de suas condições físicas (espessura, material, ...). Denotando por $I$ o momento de inércia da barra em relação ao eixo vertical, teremos a equação de movimento 

$$
\tau = I\alpha = I \ddot{\theta} \iff \ddot{\theta} + \omega^2 \theta = 0
$$

com $\omega^2 = \dfrac{k}{I}$. Uma aplicação histórica muito importante desse sistema foi a balança de torção utilizada por Cavendish para aferir experimentalmente a constante universal gravitacional $G$. 

### Pêndulo simples

<div class="wiki-thumb">

![](https://upload.wikimedia.org/wikipedia/commons/2/24/Oscillating_pendulum.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Pêndulo simples com representação de seus vetores de aceleração e velocidade e de seu ângulo de deflexão da sua posição de equilíbrio. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Oscillating_pendulum.gif" target="_blank">Wikimedia Commons</a>.</i>

</div>

Nomeamos como pêndulo simples o sistema físico formado por uma massa puntiforme $m$ presa a uma posição $O$ por um fio de comprimento $l$ inextensível. Esta massa movimenta-se numa circunferência de raio $l$ sofrendo ação de seu peso $m\vec{g}$ e da tensão $\vec{T}$ exercida pelo fio. Suas equações de movimento são, assim: 

$$
\begin{align*}
    ma_r &= -ml\left(\dfrac{d\theta}{dt}\right)^2 = mg \cos{\theta} - T \\ 
    ma_\theta &= ml \dfrac{d^2\theta}{dt^2} = -mg \sin{\theta}
\end{align*}
$$

Onde $a_r$ e $a_\theta$ são, respectivamente, os componentes radial e tangencial da aceleração. O parâmetro $\theta$ é o ângulo do pêndulo em relação a sua posição de equilíbrio.

Da equação para a componente tangencial deduzimos diretamente a equação de movimento do pêndulo simples: 

$$
\dfrac{d^2\theta}{dt^2} = -\dfrac{g}{l}\sin{\theta}
$$

Da equação para a componente radial podemos obter a tensão no fio após a resolução da equação de movimento. 

Ao tomarmos $\theta \ll 1$ (em radianos), podemos aproximar $\sin{\theta} \approx \theta$ e, consequentemente, reduzir a equação de movimento para a equação do oscilador harmônico: 

$$
\ddot{\theta} + \dfrac{g}{l}\theta = 0 \implies \omega^2 = \dfrac{g}{l}
$$

Como $\tau = \dfrac{2\pi}{\omega}$, o período de oscilação do pêndulo simples é da forma $\tau = 2\pi \sqrt{\dfrac{l}{g}}$. 

A constatação de que $\tau$ é invariante para $\theta \ll 1$ é chamada <b>isocronismo</b> das pequenas oscilações de um pêndulo. Este isocronismo foi descoberto por Galileu e relatado no seu tratado "Duas Novas Ciências".

Uma discussão produtiva nasce ao visualizarmos esse sistema sob o ponto de vista energético. A energia cinética $K$ do sistema é dada por: 

$$
K = \dfrac{1}{2}mv^2 = \dfrac{1}{2}ml^2 \left(\dfrac{d\theta}{dt}\right)^2
$$

Tomando como posição referência para a energia potencial (isto é, a posição em que $U = 0$) aquela em que $\theta = 0$, podemos obter uma expressão para $U(\theta)$ através do cálculo do trabalho para mover o pêndulo até uma posição de abertura $\theta$. 

$$
U = -W_{0 \to \theta} = mg \int_{0}^{\theta} \sin{\theta'} \cdot ld\theta' = \eval{-mgl\cos{\theta'}}_0^{\theta} = mgl(1-\cos{\theta})
$$

Tomando $\sin{\theta} \approx \theta$, $U = \dfrac{1}{2}mgl\theta^2 = \dfrac{1}{2}m\omega^2l^2\theta^2$. 

Daqui em diante, executaremos uma análise do sistema enquanto desprezamos a aproximação para pequenas amplitudes de oscilação.

Levando em conta as expressões anteriores, sabemos que a energia total do pêndulo, para qualquer valor de $\theta$, é: 

$$
E = \dfrac{1}{2}ml^2 \left(\dfrac{d\theta}{dt}\right)^2 + mgl(1-\cos{\theta})
$$

Perceba que $U(\theta)$ possui um comportamento periódico de período $\tau = 2\pi$, com a força restauradora valendo $F(\theta) = -\dfrac{dU}{ld\theta} = -mg\sin{\theta}$. Tomando $F=0$, encontramos as posições de equilíbrio: $\theta = 0$ e $\theta = \pi$. 

Por outro lado, tomando $\dfrac{d\theta}{dt} = 0$ na expressão para a energia mecânica, vemos que as energias nas posições de equilíbrio são $E=0$ quando $\theta = 0$ e $E_0 = 2mgl$ para $\theta = \pi$. 

Como esperado, $\theta = 0$ caracteriza uma posição de equilíbrio estável e $\theta = \pi$ uma posição de equilíbrio instável. Tomando uma energia $E \lt 2mgl$, vemos que o pêndulo oscila entre $\theta = \pm \theta_0$, os chamados <b>pontos de inversão</b>, onde $\dfrac{d\theta}{dt} = 0$. Assim, nestes pontos, a energia do pêndulo é $E = mgl(1 - \cos{\theta_0})$. 

Substraindo da expressão geral para energia mecânica, obtemos: 

$$
\dfrac{1}{2}ml^2 \left(\dfrac{d\theta}{dt}\right)^2 + mgl(\cos{\theta_0} - \cos{\theta}) = 0 \implies \dfrac{d\theta}{dt} = \pm \sqrt{\dfrac{2g}{l}(\cos{\theta}-\cos{\theta_0})}
$$

Nesta expressão, cada sinal do radical é válido para metade do período considerado. Por exemplo, poderíamos utilizar $+$ no intervalo $[t_0, t_0 + \tau/2]$ com o pêndulo oscilando entre $-\theta_0$ e $\theta_0$ e $-$ para o retorno. 

Integrando durante a ida do pêndulo, obtemos a expressão geral do período em função da amplitude de oscilação $\theta_0$: 

$$
\int_{t_0}^{t_0 + \tau/2} = \dfrac{\tau}{2} = \sqrt{\dfrac{l}{2g}} \int_{-\theta_0}^{\theta_0} \dfrac{1}{\sqrt{\cos{\theta}-\cos{\theta_0}}} \ d\theta
$$

Tomando a energia mecânica muito menor que $2mgl$, podemos aproximar $\cos{\theta}-\cos{\theta_0} = \dfrac{1}{2}(\theta_0^2 - \theta^2) \implies \tau = 2\pi \sqrt{\dfrac{l}{g}}$, resultado obtido previamente para pequenas oscilações (MHS). 

Para amplitudes de oscilação maiores, o período deve ser obtido pelo cálculo da integral anterior — o que nem sempre é possível, dado que esta é uma <b>integral elíptica</b>. Integrais elípticas não possuem soluções que podem ser escritas em funções elementares, nos restando aproximações.

Uma primeira aproximação que pode ser feita é: 

$$
\tau = 2\pi\sqrt{\dfrac{l}{g}}\left(1 + \dfrac{1}{16}\theta_0^2\right)
$$

Dessa expressão podemos ver que $\tau$ aumenta com $\theta_0$ e, portanto, a isocronia é quebrada. Quando $E \gt 2mgl$, o movimento do pêndulo é dito <b>ilimitado</b>: este possui energia suficiente para manter-se em rotação em torno do ponto de apoio, não mais oscilando em torno do ponto de equilíbrio.

### Pêndulo físico

![](https://upload.wikimedia.org/wikipedia/commons/e/ed/CoO_3_Illustration_an_einer_Stange.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Diagrama de forças de um pêndulo físico. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:CoO_3_Illustration_an_einer_Stange.png" target="_blank">Wikimedia Commons</a>.</i>

Considere um corpo rígido qualquer, suspenso em um ponto $O$, de rotação livre e sem atrito, em torno de um eixo que passa horizontalmente por $O$. A este sistema denominamos <b>pêndulo físico</b>, uma generalização do pêndulo simples. 

Uma distância $l_r$ separa $O$ do ponto $C$, o chamado <b>centro de oscilação</b>: se toda a massa do corpo rígido fosse concentrada nesse ponto e suportada por uma haste inextensível e de massa desprezível, teríamos um pêndulo simples equivalente. <!--CLARIFICAR: equivalente em quê?-->

Por outro lado, o ponto $M$ é chamado <b>centro de gravidade</b> do sistema, situado a uma distância $d$ e posicionando sempre abaixo de $O$ (e na mesma vertical) quando o pêndulo está em equilíbrio. Denotando por $\theta$ o ângulo entre $\overline{OG}$ e a vertical que passa por $O$, $m$ a massa do corpo e $\vec{T}$ o torque em relação a $O$, temos: 

$$
T = -mgd \cdot \sin{\theta}
$$

Se $I$ é o momento de inércia do pêndulo em relação ao eixo de rotação, a equação de movimento do sistema é:

$$
I\alpha = I\dfrac{d^2\theta}{dt^2} = T = -mgd \cdot \sin{\theta}
$$

Perceba que esta é idêntica a equação de movimento de um pêndulo simples de comprimento $l = \dfrac{I}{md}$  Definimos o <b>raio de giração</b> $k$ do pêndulo como $I = mk^2 \iff k = \sqrt{ls}$, ao comparar com a equação para $l$. 

Essa grandeza responde à pergunta: "Se toda a massa do objeto estivesse concentrada num único ponto, qual a distância $k$ necessária para que essa massa tenha o mesmo momento de inércia do objeto inteiro?". 

### Oscilações de um líquido num tubo em U

Considere um líquido ideal de densidade $\rho$ contido num tubo em $U$, como um manômetro. Inicialmente, o líquido possui o mesmo nível nos dois ramos, pois está em equilíbrio estático.

Seja $A$ a seção transversal do tubo e $l$ o comprimento total da coluna de líquido. Logo, a massa total do líquido é $M = \rho Al$. Tomando a linha do nível do fluido em equilíbrio como $z=0$ de forma que $U=0$, elevar a uma altura $z$ o líquido num ramo equivale energeticamente a transportar uma massa igual de líquido do outro ramo para aquela posição. 

Assim, 

$$
U(z) = \rho Az \cdot gz = \rho A gz^2 
$$

Note que o termo $\rho Az$ se refere à massa elevada, com $Az$ sendo o volume de um cilindro de líquido. 

A coluna de líquido entra imediatamente em oscilação com velocidade instantânea $\dfrac{dz}{dt}$ e energia cinética

$$
K = \dfrac{1}{2}\rho Al \left(\dfrac{dz}{dt}\right)^2
$$

Consequentemente, a energia mecânica é: 

$$
E = K + U = \dfrac{1}{2}\rho Al \left(\dfrac{dz}{dt}\right)^2 + \rho Agz^2
$$

Comparando com as equações das energias cinética e mecânica do oscilador harmônico, vemos que $\rho Ag$ corresponde a $\dfrac{1}{2}k = \dfrac{1}{2}M\omega^2$, com $M = \rho Al$. Logo, temos $\rho Ag = \dfrac{1}{2}\rho Al\omega^2 \implies \omega^2 = \dfrac{2g}{l}$. 

Consequentemente, este sistema possui um comportamento equivalente às oscilações de um pêndulo simples de comprimento $l/2$.

![](/books/higher_education/physics/physics_two/pendulo_tubo_u.gif)

<blockquote>
    <p>
    Se a água sobe e desce alternadamente nos ramos de um tubo; e se construirmos um pêndulo cujo comprimento entre o ponto de suspensão e o centro de oscilação é igual a metade do comprimento de água do tubo: digo então que a água subirá e descerá nos mesmos tempos em que o pêndulo oscila.
    </p>
    <cite>Isaac Newton</cite>
</blockquote>

### Oscilações de duas partículas acopladas

Considere um sistema composto por duas partículas de massas $m_1$ e $m_2$ ligadas por uma mola de comprimento $l$ e de massa desprezível. O movimento dessas partículas é unidimensional sobre o eixo $Ox$ e a única força atuante em cada partícula é a força restauradora da mola.

![](/books/higher_education/physics/physics_two/duas_particulas_mola.gif)

<i>No sistema acima, $m_2 = 2m_1$. Perceba que o centro de massa é estacionário enquanto o sistema oscila.</i>

Denotando por $x_1$ e $x_2$ as posições de cada partícula, temos que a deformação da mola será $x = (x_2 - x_1) - l$ e as forças restauradoras serão $F_1 = kx = -F_2$.

Consequentemente, as equações de movimento são: 

$$
\begin{cases}
    m_1\ddot{x_1} = kx \\ 
    m_2\ddot{x_2} = -kx 
\end{cases}
$$

É conhecido que $X = \dfrac{1}{M}(m_1x_1 + m_2x_2)$, com $M = m_1 + m_2$, é a coordenada do centro de massa. Em razão da ausência de forças externas, sabemos imediatamente que $\ddot{X} = 0 \implies \dot{X} = V = \text{cte}$. Multiplicando a primeira equação de movimento por $m_1$, a segunda por $m_2$ e subtraindo membro a membro resulta em $\mu \ddot{x} = -kx$. 

Nesta equação, 

$$
\mu = \dfrac{m_1m_2}{m_1 + m_2}
$$

é a <b>massa reduzida</b> do sistema. A massa reduzida $\mu$ é um artifício matemático cuja utilidade é a transformação de um problema de dois corpos em um problema de um único corpo. Perceba que na equação obtida que emprega $\mu$ descrevemos o movimento de uma partícula de massa $\mu$ mas que sua posição é a mesma de uma partícula ao tomarmos a outra como referência. Ao descobrirmos o comportamento de uma partícula em relação a outra, teremos com oenxergar facilmente o comportamento do sistema apenas realizando uma mudança de referencial.

Além disso, temos que a energia cinética deste sistema é 

$$
K = \dfrac{1}{2}\sum_{i=1}^{2} m_iv_i'^2 + \dfrac{1}{2}MV^2
$$

com $v_1' = -\dfrac{m_2}{M}\dot{x}$ e $v_2' = \dfrac{m_1}{M}\dot{x}$ as velocidades relativas ao centro de massa. Consequentemente, vemos que a energia cinética $T'$ do movimento interno é 

$$
T' = \dfrac{1}{2}\left(\dfrac{m_1m_2^2 + m_2m_1^2}{M^2}\right)\dot{x}^2 = \dfrac{1}{2}\mu \dot{x}^2
$$

Como a energia potencial associada à mola é $\dfrac{1}{2}kx^2$, a enegia mecânica total é $E = E_\text{CM} + E'$, com 

$$
\begin{align*}
    E_\text{CM} &= K_\text{CM} = \dfrac{1}{2}MV^2 \\ 
    E' &= \dfrac{1}{2}\mu\dot{x}^2 + \dfrac{1}{2}kx^2 
\end{align*}
$$

Perceba que a energia do centro de massa e a energia total interna conservam-se sem interferência: a translação do centro de massa não afeta a oscilação. A energia da oscilação é a de um oscilador harmônico de massa $\mu$ e deslocamento $x$. Este modelo é útil para a representação clássica de cadeias atômicas e o transporte fonônico (isto é, de ondas mecânicas). 

# Referências 

1. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 2: Fluidos; oscilações e ondas; calor. 4. ed. rev. São Paulo: Blucher, 2002