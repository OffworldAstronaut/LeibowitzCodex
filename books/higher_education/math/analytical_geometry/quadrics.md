# Quádricas 

# Quádricas 

--- 

De forma simples, podemos entender as <b>quádricas</b> como o análogo tridimensional das <b><a href="/books/higher_education/math/analytical_geometry/conics.html" target="_blank">cônicas</a></b>. Com efeito, dizemos que todas as figuras geométricas formadas pelas soluções das equações da forma 

$$
Ax^2 + By^2 + Cz^2 + Dxy + Exz + Fyz + Gx + Hy + Jz = R
$$

são chamadas <b>superfícies quádricas</b> ou, simplesmente, quádricas.

As equações de boa parte destas superfícies podem ser obtidas a partir da rotação de uma cônica em torno de um eixo. Esta é a razão de algumas superfícies serem conhecidas por <b>superfícies de revolução</b>. 

Uma informação importante para se ter em mente é a noção da intersecção destas superfícies com planos no espaço e, em especial, com os planos formados pelos versores da base canônica. Estas intersecções fornecerão cônicas ou outros objetos no plano que facilitarão a identificação da superfície a partir da equação.

## Elipsoide de revolução 

Um elipsoide de revolução (ou esferoide) é uma quádrica obtida a partir da rotação de uma elipse em torno de algum de seus eixos principais. Por questões de simplicidade, iremos considerar que a elipse (e todas as cônicas originárias daqui em diante) está centrada na origem.

Dessa forma, a equação geral (e canônica) de um esferoide é da forma

$$
\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} = 1
$$

com $a, b, c \neq 0$. Note que se $a = b= c$, temos uma esfera.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ellipsoid-rot-ax.svg/1280px-Ellipsoid-rot-ax.svg.png)

<i>Elipsoides centrados na origem do espaço cartesiano com seus eixos demarcados. Note que neste caso $z$ é o eixo de rotação. Imagem sob CC-BY-SA, via <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Ellipsoid-rot-ax.svg">Wikimedia Commons</a>.</i>

Quando $z$ é o eixo de rotação ($a = b$), a equação simplifica-se para 

$$
\dfrac{x^2 + y^2}{a^2} + \dfrac{z^2}{c^2} = 1
$$

## Hiperboloide de revolução 

---

Um hiperboloide de revolução é obtido pela rotação de uma hipérbole em torno de algum de seus eixos principais.

Os hiperboloides podem ser classificados como <b>de uma folha</b> ou <b>de duas folhas</b>. Os hiperboloides de uma folha são produzidos a partir da rotação da hiperbole em torno de seu eixo conjugado (ou imaginário), com os hiperboloides de duas folhas sendo produzidos a partir da rotação em torno do eixo tranversal (ou real), onde ficam os focos.

![](https://upload.wikimedia.org/wikipedia/commons/2/20/Hyperboloid_sections.gif)

<i>Hiperboloide de uma folha sendo seccionado por um plano em diversos ângulos e posições. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Hyperboloid_sections.gif" target="_blank">Wikimedia Commons</a>.</i>

Os hiperboloides de uma folha são expressos por equações da forma

$$
\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} - \dfrac{z^2}{c^2} = 1
$$

Por sua vez, os hiperboloides de duas folhas são expressos por equações da forma 

$$
- \dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} + \dfrac{z^2}{c^2} = 1
$$

com $a, b, c \neq 0$ em ambos os casos. Perceba ainda que os sinais das frações que compõem o lado esquerdo das equações são "trocados" e que o sinal "diferente" ($-$ na primeira equação, $+$ na segunda) indica o eixo do plano cartesiano que é o eixo de rotação originário da quádrica (nas equações acima, o eixo $Oz$).

É importante notar que estas quádricas só podem ser chamadas "de revolução" quando $a = b$, pois neste caso ele pode ser formado por uma rotação ao entorno de um dos eixos principais de uma hipérbole. Os hiperboloides (e todas as outras quádricas que não são "de revolução") com $a \neq b$ podem ser construídos geometricamente ao reescalar um dos eixos coordenados.

Isto é facilmente perceptível ao analisar os traços ("cortes") das hipérboles por planos paralelos ao plano $xy$: circunferências são formadas em hiperboloides de revolução, enquanto elipses são formadas em todos os outros.

Por fim, é interessante mencionar que os hiperboloides (de uma folha) pertencem à classe das chamadas <b>superfícies regradas</b>, superfícies que podem ser formadas por meio de infinitas retas. A esta classe também pertencem superfícies como os hiperboloides hiperbólicos, os cilindros (descritos abaixo), os cones e os planos. 

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/Hyperboloid_ruled_surface_animation_v2.gif)

<i>Visualização da construção de um hiperboloide de uma única folha por meio da movimentação de uma reta (ou da junção de infinitas retas) no espaço. GIF sob Domínio Público, via <a href="https://commons.wikimedia.org/wiki/File:Hyperboloid_ruled_surface_animation_v2.gif" target="_blank">Wikimedia Commons</a>.</i>

## Paraboloides

Os paraboloides são quádricas que merecem uma classificação um pouco mais criteriosa. Inicialmente, podemos descrever estas superfícieis por equações (reduzidas) da forma 

$$
\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = z
$$

com $a, b \neq 0$. Quando $a = b$, estes paraboloides podem ser chamados "de revolução" pelo mesma razão dos hiperboloides, vista anteriormente. Nos outros casos, dizemos que estes paraboloides são "elípticos". 

![](https://upload.wikimedia.org/wikipedia/commons/1/12/Paraboloid_of_Revolution.svg)

<i>Acima: um paraboloide de revolução. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Paraboloid_of_Revolution.svg" target="_blank">Wikimedia Commons</a>.</i>

Na verdade, ainda há um outra categoria que os paraboloides podem estar inseridos, os paraboloides hiperbólicos. Dizemos que uma quádrica é um paraboloide hiperbólico se esta é descrita por uma equação da forma 

$$
-\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = z
$$

com $a, b \neq 0$. Ao cortarmos esta superfície por diversos planos, teremos como resultado hipérboles ou parábolas. É fácil ver a origem do outro nome desta superfície, <b>sela</b>, observando sua plotagem abaixo. 

![](https://upload.wikimedia.org/wikipedia/commons/8/87/Hyperbolic_Paraboloid_Quadric.png)

<i>Acima: um paraboloide hiperbólico, também conhecido por "sela". Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Hyperbolic_Paraboloid_Quadric.png" target="_blank">Wikimedia Commons</a></i>.

## Superfícies cilíndricas

Dizemos que uma quádrica é <b>cilíndrica</b> ou uma <b>superfície cilíndrica</b> se ela pode ser representada uma equação de uma das seguintes formas: 

$$
\begin{align*}
    \dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} &= 1 \\ 
    \dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} &= 1 \\ 
    y^2 &= cx
\end{align*}
$$

Note que estas superfícies possuem em comum a característica de possuir uma das coordenadas livres, podendo assumir qualquer valor. As quádricas representadas pelas equações acima são respectivamente denominadas <b>quádricas cilíndricas elípticas</b>, <b>quádricas cilíndricas hiperbólicas</b> e <b>quádricas cilíndricas parabólicas</b>. 

Alternativamente, como mencionado acima, podemos compreender como <b>cilindros</b> todas as superfícies geradas por uma reta $s$ paralela a uma outra reta $r$ a medida que $g$ se move por todos os pontos de intersecção possíveis com uma curva $C$ no espaço. Por consequência, temos que todos os cilindros são superfícies regradas.

![](https://upload.wikimedia.org/wikipedia/commons/6/64/Elliptic_Cylinder_Quadric.png)

<i>Acima: um cilindro elíptico. Perceba que este pode ser formado por infinitas retas paralelas ao eixo $z$ que intersectam com uma elipse no plano $Oxy$. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Elliptic_Cylinder_Quadric.png" target="_blank">Wikimedia Commons</a>.</i>
 
## Superfícies cônicas

As <b>superfícies</b> ou <b>quádricas cônicas</b> são quádricas descritas por equações da forma 

$$
\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = z^2
$$

formando cones centrados na origem. Ainda temos que, se $a = b$, os cones são chamados <b>de revolução</b> e <b>elípticos</b>, caso contrário. Quando intersectados por planos verticais, os cones formam hipérboles e, quando intersectados por planos horizontais, elipses ou, nos casos particulares dos cones de revolução, circunferências. 

![](https://upload.wikimedia.org/wikipedia/commons/3/36/Quadrics.gif)

<i>Acima: animação ilustrando todas as cônicas de revolução. O cone pode ser observado no canto superior direito. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Quadrics.gif" target="_blank">Wikimedia Commons</a>.</i>

# Construindo superfícies de revolução

---

Podemos construir superfícies de revolução ao rotacionar qualquer curva em torno de um dado eixo coordenado. Por exemplo, qual a superfície resultante da rotação da curva $z = y^2$ em torno do eixo $z$? 

![](/books/higher_education/math/analytical_geometry/images/paraboloide_y=0.png)

Perceba que rotacionar esta curva implica que cada ponto irá descrever uma circunferência de centro $(0,0,z)$ e raio $r = \sqrt{y^2 + x^2}$. Note ainda que este raio é justamente a distância entre o eixo $z$ e um ponto da parábola original e, portanto, $r = |y| \implies r^2 = y^2$, assim, podemos substituir $y^2$ por $y^2 + x^2$ na equação original para escrever a equação desta quádrica, um paraboloide cujo eixo de simetria é o eixo $z$.

![](/books/higher_education/math/analytical_geometry/images/paraboloide.png)

# Referências 

--- 

1. LIMA, G.; SILVA. Geometria analitica 2ª ed. Rio de Janeiro. 2015.
2. WINTERLE, Paulo. Vetores e geometria analítica. 2ª ed. São Paulo: Pearson, 2014.
3. CAMARGO, Ivan de; BOULOS, Paulo. Geometria analítica: um tratamento vetorial. 3ª ed. rev. e ampl. Sâo Paulo: Prentice Hall, 2005.
4. <i>Paul's Online Math Notes — Calculus III — Quadric Surfaces</i> (2022) [<a target="_blank" href="https://tutorial.math.lamar.edu/classes/calciii/quadricsurfaces.aspx">Acesse aqui!</a>]