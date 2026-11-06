# Coordenadas Polares

# Introdução

Como discutido no manuscrito sobre <a href="/books/scholarium/math/analytical_geometry/the_plane_the_space.html" target="_blank">o plano e o espaço</a>, um sistema de coordenadas alternativo ao sistema usual (cartesiano) é o <b>sistema de coordenadas polares</b>. 

Nesse sistema, cada ponto do plano possui como coordenadas a distância $r$ até a origem (também chamada de <b>polo</b>) e o ângulo $\theta$ que o segmento que liga o ponto à origem faz com a horizontal. O sistema polar é útil para a análise de problemas radialmente simétricos. 

Essa definição das coordenadas como pares $(r, \theta)$ pode nos levar a pensar que $r$ é um número não-negativo sempre, o que não é verdade: é possível tomar $r$ negativo, sim. Nesses casos, nota-se que o ponto $(-r, \theta)$ é o espelho do ponto $(r, \theta)$ , de fora que $r \gt 0$ implica num ponto com o mesmo quadrante de $\theta$ e $r \lt 0$ num ponto situado num quadrante oposto do ângulo $\theta$. 

Consequentemente, isto expõe uma diferença fundamental entre as coordenadas polares e as coordenadas cartesianas: se no plano cartesiano há uma única coordenada para cada ponto, no plano polar há infinitas coordenadas para um mesmo ponto. Por exemplo, o mesmo ponto $(r, \theta)$ pode ser expresso pelas coordenadas $(r, \theta + 2\pi n)$ e $(-r, \theta + (2n+1)\pi)$. Curiosamente, isto implica que as coordenadas do polo são da forma $(0, \theta)$, para qualquer $\theta$.

A conversão entre os sistemas polar e cartesiano é relativamente simples. Traçando um triângulo retângulo cujos vértices são a origem, um ponto qualquer — de coordenadas $(r, \theta)$ ou $(x, y)$ — e sua projeção no eixo horizontal, é possível deduzir as relações

$$
\begin{cases}
    x = r\cos{\theta} \\ 
    y = r\sin{\theta}
\end{cases}
$$

e 

$$
\begin{cases}
    r = \sqrt{x^2 + y^2} \\ 
    \theta = \arctan{\left(\dfrac{y}{x}\right)}
\end{cases}
$$

# Áreas 

O cálculo de áreas em coordenadas polares pode ser definida de forma semelhante ao processo regular da soma de Riemann em coordenadas cartesianas. 

<div class="wiki-thumb">

![](https://upload.wikimedia.org/wikipedia/commons/4/4c/Polar_coordinates_integration_region.svg)

<i>Uma área que pode ser integrada em coordenadas polares. Imagem sob domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Polar_coordinates_integration_region.svg" target="_blank">Wikimedia Commons</a>.</i>

</div>

Para isso, vamos imaginar uma função $\rho = \rho(\theta)$ contínua e não-negativa, definida no intervalo $[\theta_{i-1}, \theta_{i}]$. O análogo da "área sob a curva" do caso cartesiano para a nossa situação é a área $A_i$ formada por todos os pontos $(\theta, \rho)$ com $\theta \in [\theta_{i-1}, \theta_{i}]$ e $\rho \in [0, \rho(\theta)]$. 

Perceba então que a magnitude da área $A_i$ está entre as áreas dos setores circulares de abertura $\Delta \theta_{i} = \theta_{i} - \theta_{i-1}$ e de raios máximo e mínimo de $\rho(\theta)$. Ao fazemos $\Delta \theta_{i} \to 0$, as áreas dos setores convergem para a integral 

$$
\dfrac{1}{2} \int_{\alpha}^{\beta} \rho^2 \ d\theta
$$

que é a nossa expressão para área.

# Comprimentos 

O processo para obter o comprimento de uma curva em coordenadas polares também é muito similar ao caso usual.

![](https://upload.wikimedia.org/wikipedia/commons/8/86/Logarithmic_spiral_arc_length.gif)

<i>Exemplo do cálculo de uma espiral logarítmica em coordenadas polares. Animação sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Logarithmic_spiral_arc_length.gif" target="_blank">Wikimedia Commons</a>.</i>

Considere uma curva $\rho(\theta)$ em coordenadas polares com $\theta \in [\alpha, \beta]$. Além disso, $\rho(\theta)$ é diferenciável com sua primeira derivada sendo contínua no intervalo $[\alpha, \beta]$ (isto é, $\rho(\theta)$ é de classe $C^1[a,b]$). Essa curva paramétrica é dada pelo sistema 

$$
\begin{cases}
    x(\theta) = \rho(\theta) \cdot \cos{\theta} \\ 
    y(\theta) = \rho(\theta) \cdot \sin{\theta}
\end{cases}
$$

Pela fórmula para o <a href="/books/scholarium/math/calculus_two/solids_revolution.html" target="_blank">comprimento de uma curva paramétrica</a>, obtemos

$$
L(\rho) = \int_{\alpha}^{\beta} \sqrt{\left(\dfrac{dx}{d\theta}\right)^2 + \left(\dfrac{dy}{d\theta}\right)^2} \ d\theta
$$

Como 

$$
\left(\dfrac{dx}{d\theta}\right)^2 + \left(\dfrac{dy}{d\theta}\right)^2 = \rho^2 + \left(\dfrac{d\rho}{d\theta}\right)^2
$$

obtemos finalmente 

$$
L(\rho) = \int_{\alpha}^{\beta} \sqrt{\rho^2 + \left(\dfrac{d\rho}{d\theta}\right)^2} \ d\theta
$$

# Curvas em coordenadas polares

A representação de curvas em coordenadas polares a partir do plano cartesiano pode ser feita naturalmente pela mudança de coordenadas exposta no começo deste documento. Um motivo para realizá-la é a considerável simplificação de algumas equações quando adota-se um outro sistema coordenado. Nesta seção iremos comentar sobre algumas curvas básicas em coordenadas polares e, posteriormente, curvas especiais como limaçons e cardioides.

Como representar retas em coordenadas polares? 

Curvas de equação $\theta = \alpha$ são retas que cruzam o polo e formam um ângulo $\alpha$ com o eixo horizontal, o eixo polar. Por outro lado, curvas das formas $r(\theta) = a\sec{\theta}$ e $r(\theta) = b\csc{\theta}$ são retas verticais (de equação cartesiana $x = a$) e horizontais ($y = b$), respectivamente. 

Uma circunferência de raio $\sqrt{a^2 + b^2}$ centrada num ponto qualquer $(a, b)$ é representada por uma equação $r = 2a\cos{\theta} + 2b\sin{\theta}$. Em particular, a equação $r=a$ representa uma circunferência de raio $a$ centrada no polo.

## Simetrias

Três simetrias básicas existem ao considerarmos coordenadas polares. Manter essas propriedades em mente é de grande ajuda ao gravar funções no plano polar. 

Em primeiro lugar, temos que uma curva é simétrica em relação ao eixo polar (horizontal) se $f(\theta) = f(-\theta), \forall \theta \in [0, 2\pi]$. Isto é se, $f(\theta)$ for uma função par. 

Por outro lado, uma curva é simétrica em relação ao polo se $f(\theta) = -f(\theta), \forall \theta \in [0, 2\pi]$. 

Por fim, uma curva é simétrica em relação à reta vertical $\theta = \pi/2$ se $f(\theta) = f(\pi - \theta), \forall \theta$. 

## Retas tangentes 

Dada uma curva polar qualquer, é possível encontrar a equação de uma reta tangente a um ponto dado? Sim. 

De fato, o coeficiente angular pode ser facilmente encontrado ao considerar uma mudança de coordenadas e a regra da cadeia. 

Sabemos que vale:

$$
\begin{cases}
    x = r\cos{\theta} = f(\theta)\cos{\theta} \\ 
    y = r\sin{\theta} = f(\theta)\sin{\theta}
\end{cases}
$$

Logo, é válido também que

$$
\dfrac{dy}{dx} = \dfrac{dy}{d\theta} \cdot \dfrac{1}{\dfrac{dx}{d\theta}} \implies \dfrac{dy}{dx} = \dfrac{f'(\theta) \sin{\theta} + f(\theta) \cos{\theta}}{f'(\theta)\cos{\theta}-f(\theta)\sin{\theta}}
$$

Assim, o valor $m = \dfrac{dy}{dx}$ é o coeficiente angular de uma reta tangente à curva num ponto de ângulo $\theta$. Dado o coeficiente angular e um ponto, a equação cartesiana de uma reta é encontrada de forma direta.

## Cardioides 

<div class="wiki-thumb">

![](https://upload.wikimedia.org/wikipedia/commons/d/d0/Cardiod_animation.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Construção de um cardioide através da rotação de uma circunferência. A curva pode ser construída em coordenadas euclidianas ao considerar a rotação de uma roda sobre um plano. Animação sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Cardiod_animation.gif" target="_blank">Wikimedia Commons</a>.</i>

</div>

Cardioides (do latim <i>cardio</i>, "coração") são figuras cujo nome foi primeiramente atribuído por Johann Castillon (1708-1791) em 1741, numa publicação na <i>Philosophical Transactions of the Royal Society</i>.

No plano cartesiano, a equação geral para um cardioide é:

$$
(x^2 + y^2 - 2ax)^2 = 4a^2(x^2 + y^2)
$$

Por outro lado, em coordenadas polares, a equação geral de um cardioide reduz-se a 

$$
r = 2a(1 + \cos{\theta})
$$

O termo $2a$, nesta equação, é a distância do mais distante ponto do cardioide, em relação a origem. 

Nota-se que, embora a equação acima seja a forma canônica de um cardioide — com sua direção de crescimento voltada para o eixo polar —, qualquer rotação da função continuará sendo uma forma válida para um cardioide. Em particular, as funções $r = 2a(1 + \sin{\theta})$, $r = 2a(1 - \cos{\theta})$ e $r = 2a(1 - \sin{\theta})$ são rotações de $n\pi/2$ sobre o cardioide canônico.

<aside>

<b>Teorema</b> — Seja $r(\theta) = 2a(1+\cos{\theta})$ um cardioide qualquer. O comprimento total da curva será de $16a$.

</aside>

<aside>

<b>Demonstração</b> — Podemos verificar isso facilmente através da expressão deduzida anteriormente. Substituindo a função do cardioide na integral, obtemos: 

$$
\begin{align*}
    L &= \int_{0}^{\pi} \sqrt{4a^2 + 8a^2\cos{\theta} + 4a^2\cos^2{\theta} + 4a^2\sin^2{\theta}} \\ 
      &= a\sqrt{8}\int_{0}^{\pi} \sqrt{1 + \cos{\theta}} \\ 
      &= 4a \int_{0}^{\pi} \cos{\left(\dfrac{\theta}{2}\right)} \\ 
      &= 8a
\end{align*}
$$

Note que integramos no intervalo $[0, \pi]$ em razão da simetria do cardioide em relação ao eixo polar. Para encontrar o comprimento total, basta tomar o dobro do valor encontrado: $16a$.

Provado.

</aside>

O mesmo raciocínio pode ser empregado para encontrar a área de um cardioide qualquer.

<aside>

<b>Teorema</b> — Seja $r(\theta) = 2a(1+\cos{\theta})$ um cardioide qualquer. A área total do interior da curva será de $6\pi a^2$.

</aside>

<aside>

<b>Demonstração</b> — É conhecido que a área de uma figura em coordenadas polares — isto é, a área da região entre a curva dada e o polo — é calculada a partir da integral 

$$
A = \dfrac{1}{2}\int_{\alpha}^{\beta} r(\theta)^2 \ d\theta
$$

Assim, tomando como intervalo de integração $[0, \pi]$ e substituindo a expressão para o cardioide na integral, obtemos: 

$$
\begin{align*}
    A &= \dfrac{1}{2}\int_{0}^{\pi} 4a^2 + 8a^2 \cos{\theta} + 4a^2 \cos^2{\theta} d\theta \\ 
    &= 2a^2 \int_{0}^{\pi} 1 + 2\cos{\theta} + \cos^2{\theta} d\theta \\ 
    &= 2a^2 \left(\int_{0}^{\pi} 1 d\theta + \int_{0}^{\pi} 2\cos{\theta} d\theta + \int_{0}^{\pi} \cos^2{\theta} d\theta\right) \\ 
    &= 3\pi a^2
\end{align*}
$$

Por simetria, basta dobrar o valor obtido para encontrar a área total, $6\pi a^2$.

</aside>

Podemos encontrar as retas tangentes a um cardioide pela expressão acima deduzida. Substituindo a expressão canônica dessas figuras na equação para o coeficiente angular da reta tangente, obtemos:

$$
m = -\dfrac{\cos{2\theta}+\cos{\theta}}{\sin{2\theta}+\sin{\theta}}
$$

Em especial, quando $\theta \to \pi$, $m \to 0$. Quando um cardioide é vertical, seu coeficiente angular irá tender a infinito à medida que se aproximar da cúspide.

<div class="wiki-thumb">

![](https://upload.wikimedia.org/wikipedia/commons/7/74/Caustic_in_pan.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Cardioide no interior de uma panela. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Caustic_in_pan.png" target="_blank">Wikimedia Commons</a>.</i>

</div>

No cotidiano, podemos encontrar cardioides no interior de canecas ou outros recipientes cilíndricos cujo interior seja suficientemente reflexivo. A razão para este fenômeno é que a <b>cáustica</b> de um círculo toma a forma de um cardioide. Chamamos cáusticas as zonas de concentração de luz criadas por causa de reflexão ou refração provocada por algum corpo.[^1]

## Limaçons

Limaçons, também chamados de caracóis de Pascal em homenagem ao matemático francês Etienne Pascal (pai de Blaise Pascal), foram nomeados em 1650 por Gilles-Persone Roberval, embora estes tenham sido descobertos muito antes, por Dürer, em 1525. 

Estas curvas especiais possuem equação cartesiana canônica 

$$
(x^2 + y^2 - 2ax)^2 = b^2(x^2 + y^2)
$$

que simplifica-se para a equação polar $r = b + 2a\cos{\theta}$. 

Caso $b \ge 4a$, o limaçon fora uma figura convexa. Caso $4a \gt b \gt 2a$, o limaçon possui uma covinha que degenera-se numa cúspide quando $b = 2a$. Nesta mesma condição, o caracol degenera-se numa cardioide. Por fim, caso $b \lt 2a$, o limançon possui um laço interno.

![](https://upload.wikimedia.org/wikipedia/commons/c/c2/Limacons.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Diferentes caracois: o primeiro possui uma covinha; o segundo é um cardioide; o terceiro possui um laço interno. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Limacons.svg" target="_blank">Wikimedia Commons</a>.</i>

# Referências 

1. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC
2. <i>Johann Castillon</i>. Biographies. MacTutor. University of Saint Andrew (<a href="https://mathshistory.st-andrews.ac.uk/Biographies/Castillon/" target="_blank">Acesse aqui</a>)
3. <i>Cardioid</i>. MacTutor. University of Saint Andrew (<a href="https://mathshistory.st-andrews.ac.uk/Curves/Cardioid/" target="_blank">Acesse aqui</a>)
4. <i>Polar Coordinates</i>. Misericordia University. LibreTexts Mathematics. (<a href="https://math.libretexts.org/Courses/Misericordia_University/MTH_171-172%3A_Calculus_-_Early_Transcendentals_(Stewart)/10%3A_Parametric_Equations_And_Polar_Coordinates/10.03%3A_Polar_Coordinates" target="_blank">Acesse aqui</a>)
5. <i>Limacon</i>. MacTutor. University of Saint Andrew (<a href="https://mathshistory.st-andrews.ac.uk/Curves/Limacon/" target="_blank">Acesse aqui</a>)
6. <i>Limacon</i>. Wolfram MathWorld. (<a href="https://mathworld.wolfram.com/Limacon.html" target="_blank">Acesse aqui</a>)

[^1]: Se formos bastante precisos, um cardioide só é formado quando a fonte de luz for pontual e estiver a uma distância infinita. Em situações ordinárias, a metade de um nefroide é formada (embora estes sejam bem parecidos).