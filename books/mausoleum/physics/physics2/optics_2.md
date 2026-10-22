# Óptica Geométrica II: Refração e Lentes

# Definição

Chamamos <b>refração</b>, do latim *refratare* (”quebrar-se”), o fenômeno óptico da mudança de velocidade de um raio de luz, quando este muda de meio óptico. Uma consequência dessa mudança de velocidade é a mudança também da direção de propagação desse raio. 

# Índice de refração e continuidade óptica

Cada meio possui um certo <b>índice de refração</b>, uma grandeza que exprime o quanto um raio de luz muda de velocidade ao atravessar para aquele meio. Este índice possui duas variações, <b>absoluto</b> ou <b>relativo</b>. 

O índice de refração <b>absoluto</b> exprime a mudança da propagação de luz entre o vácuo e um outro meio, com o índice <b>relativo</b> considerando a mudança de propagação entre dois meios quaisquer. 

De forma matemática, o índice de refração absoluto, $n_{A}$, é dado pela expressão abaixo, onde $c$ é a velocidade da luz no vácuo e $V_M$ a velocidade da luz no material. 

$$
n_A = \dfrac{c}{V_M}
$$

Considerando $n_X$ o índice de refração do meio $X$, estabelecemos que o índice de refração relativo da passagem entre dois meios 1 e 2 como a razão entre seus índices de refração ou, de forma alternativa, entre suas velocidades ou entre seus comprimentos de onda. 

$$
n_{1,2} = \dfrac{n_1}{n_2} = \dfrac{v_2}{v_1} = \dfrac{\lambda _2}{\lambda_1}
$$

Se dois meios possuírem o mesmo índice de refração absoluto, não haverá refração dos raios de luz ao passarem de um meio para o outr. Esse fenômeno é chamado de **continuidade óptica**.

## Reflexão interna total

A <b>reflexão internal total</b> é um fenômeno especial em que, na transição de um meio para o outro, a depender de seus respectivos índices de refração, pode ocorrer de um raio de luz não mais trocar de meio, sendo “refletido” para o interior do seu meio de origem. 

É necessário, para que esse fenômeno ocorra, que o raio esteja saindo do meio mais refringente (de maior índice de refração) para o menos refringente (de menor índice), além do ângulo de incidência ser menor que o chamado <b>ângulo limite</b>, $\theta_L$.

Este fenômeno é o que é utilizado nos cabos de utilização, que permite transmissões de dados em longas distâncias de maneira extremamente rápida, com uma menor perda de dados. 

![](https://upload.wikimedia.org/wikipedia/commons/b/b0/Laser_in_fibre.jpg)

<i>Laser sofrendo reflexão interna total no interior de uma barra de acrílico. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Laser_in_fibre.jpg" target="_blank">Wikimedia Commons</a>.</i>

# Leis da refração

Leis naturais para a descrição do fenômeno da refração foram escritas ao longo dos anos, comc duas leis fundamentais sendo definidas. É importante notar a utilização de termos da <b>óptica geométrica</b>, tratados no <a href="/books/high_school/physics/physics2/optics_1.html">primeiro volume desta série</a>. 

A <b>primeira lei da refração</b> estabelece que tanto a normal, a reta perpendicular entre os dois meios ópticos, como os raios incidente e refratado são coplanares, isto é, pertencem ao mesmo plano no espaço tridimensional.

Já a <b>segunda lei da refração</b>, também conhecida por <b>Lei de Snell-Descartes</b>, ou simplesmente <b>Lei de Snell</b>, enuncia que a razão entre o seno do ângulo do raio incidente e o seno do ângulo do raio refratado é constante e igual à razão entre os índice de refração do meio óptico do raio refratado pelo índice de refração do meio do raio indicente.

$$
\dfrac{\sin\theta_I}{\sin \theta_R} = \dfrac{n_2}{n_1} \iff n_1 \cdot \sin \theta_I = n_2 \cdot \sin \theta_R
$$

A Lei de Snell pode ser utilizada para a demonstração da expressão para encontrar o <b>ângulo limite</b> para a <b>reflexão interna total</b>, mencionada acima. 

![](https://upload.wikimedia.org/wikipedia/commons/3/3f/Snells_law2.svg)

<i>Raio de luz sofrendo refração. Domínio Público, via <a href="https://commons.wikimedia.org/wiki/File:Snells_law2.svg" target="_blank">Wikimedia Commons</a>.</i>

Como estamos buscando o caso limite para a ocorrência da reflexão, definimos $\theta_R = 90°$ — o raio não atravessa para o outro meio, propagando-se paralelamente a ele. Dessa forma, podemos substituir $\theta_I = \theta_L$ e completar a prova.

$$
\begin{align*}
    n_1 \cdot \sin \theta_I &= n_2 \cdot \sin 90° \\
    \therefore n_1 \cdot \sin \theta_I &= n_2 \cdot 1 \\
    \therefore \sin \theta_L &= \dfrac{n_2}{n_1} \\ 
    \therefore \theta_L &= \arcsin \left(\dfrac{n_2}{n_1} \right)
\end{align*}
$$

# Lentes

As lentes são dispositivos ópticos (como os espelhos), geralmente feitos de vidro, que desviam a luz que passa por eles por meio do fenômeno da refração.  

## Convergentes

Uma lente é classificada como convergente quando os raios de luz paralelos incidentes convergem (”passam pelo”) no mesmo ponto, que recebe o nome de <b>foco</b>. O foco das lentes convergentes é chamado de <b>real</b>, por conta que os raios de luz estão realmente indo para lá. 

![](https://upload.wikimedia.org/wikipedia/commons/a/a2/Convergent_lens_diagram_with_focus_point.png)

<i>Representação de uma lente convergente. Os raios de luz incidentes paralelos convergem num mesmo ponto. Imagem autoral, via <a href="https://commons.wikimedia.org/wiki/File:Convergent_lens_diagram_with_focus_point.png" target="_blank">Wikimedia Commons</a>.</i>

## Divergentes

Essas lentes são chamadas assim pelo fato de fazerem os raios de luz paralelos incidentes divergirem (”se espalharem”) para uma área maior. O foco das lentes divergentes não “existe” de fato: os raios de luz não convergem nesse ponto. Por conta disso, ele é classificado como um foco *virtual*. 

Um raciocínio interessante é pensar nos focos dos espelhos côncavos e convexos. Ele é (mais ou menos) o mesmo. 

![](https://upload.wikimedia.org/wikipedia/commons/7/73/Divergent_lens_diagram_with_focus_point.png)

<i>Representação de uma lente divergente. Os raios parecem “fugir” do foco virtual à medida que se afastam. Imagem autoral, via <a href="https://commons.wikimedia.org/wiki/File:Divergent_lens_diagram_with_focus_point.png" target="_blank">Wikimedia Commons</a>.</i>

## Formação de imagens

Os variados caminhos que a luz incidente num espelho ou numa lente pode assumir geram várias possibilidades sobre as imagens formadas por esses instrumentos ópticos. Para classificar essas imagens, nós podemos fazer algumas perguntas: 

- A imagem é <b>real</b> (consegue ser projetada) ou <b>virtual</b> (visível apenas no espelho/lente)?
    - A imagem pode ainda ser <b>imprópria</b>, i.e não ser formada;
- A imagem é <b>direita</b> (mesma orientação) ou <b>invertida</b> (”de cabeça para baixo”)?
- A imagem é <b>ampliada</b>, <b>reduzida</b> ou possui <b>mesmo tamanho</b> que o objeto?

# Sistemas ópticos especiais

## Dioptro plano

Chamamos <b>dioptro</b> (do grego, <i>dióptron</i> — “que serve para ver através”) o sistema óptico formado por dois meios ópticos com diferentes índices de refração, que provoca o fenômeno nos raios de luz.

Os <b>dioptros</b> podem ser <b>planos</b> ou <b>esféricos</b>, com a diferença entre eles sendo a presença ou a ausência de curvatura na divisão entre os meios. Como exemplo de dioptro esférico, temos o olho humano, e no lado dos dioptros planos, uma piscina.

Esta é a razão pela qual temos uma profundidade aparente menor que a profundidade real numa piscina, por exemplo. O recipiente parece “mais raso” do que realmente é.

A partir do diagrama do dioptro, exposto abaixo, é possível demonstrar a relação entre as profundidades real e aparente, além dos índices de refração do meio. 

![](https://upload.wikimedia.org/wikipedia/commons/3/3b/PlaneDiopter.png)

<i>Diagrama geométrico do dioptro plano. Cada seção (superior e inferior) são meios ópticos com diferentes índices de refração. O raio vermelho é a trajetória da luz. O pontilhado, a da imagem. Imagem autoral, via <a href="https://commons.wikimedia.org/wiki/File:PlaneDiopter.png" target="_blank">Wikimedia Commons</a>.</i>

Seja o meio “superior” um meio óptico com um índice de refração $n'$, e o meio “inferior” de índice de refração $n$. 

Pela Lei de Snell, obtemos a relação $\dfrac{n}{n'} = \dfrac{\sin{\theta_I}}{\sin{\theta_R}}$.

Pelas relações trigonométricas nos triângulos formados no meio inferior, obtemos:

$$
\begin{align*}
    \tan(90-\theta_I ) &= \dfrac{p'}{b} \\
    \tan(90 - \theta_R) &= \dfrac{p}{b}
\end{align*}
$$

Desenvolvendo o lado esquerdo das equações $(1)$ e $(2)$, pela propriedade da tangente da diferença de dois arcos, e realizando a multiplicação de meios pelos extremos, chegamos nas equações $(3)$ e $(4)$.

$$
\begin{align*}
    \tan(\theta_I) \cdot p' &= b \\
    \tan(\theta_R) \cdot p &= b
\end{align*}
$$

Igualando, temos que $\tan(\theta_I) \cdot p' = \tan(\theta_R) \cdot p \Rightarrow \dfrac{p}{p'} = \dfrac{\tan(\theta_I)}{\tan(\theta_R)}$

Pela aproximação de pequenos ângulos, podemos substituir $\tan(\theta_I) = \sin(\theta_I)$ e $\tan(\theta_R) = \sin(\theta_R)$. 

Dessa forma, podemos concluir a demonstração, encontrando a conhecida igualdade $\dfrac{p}{p'} = \dfrac{n}{n'}$.

$$
\dfrac{p}{p'} = \dfrac{\sin(\theta_I)}{\sin(\theta_R)}=\dfrac{n}{n'}
$$

### Altura aparente

Um fenômeno relacionado é o denominado **altura aparente** dos astros. As sucessivas camadas da atmosfera possuem diferentes índices de refração, em razão de sua distinta composição e densidade, provocando sucessivas refrações nos raios de luz espaciais e alterando a localização da imagem formada em relação aos nossos olhos. 

Esta ilusão se torna mais evidente a medida que aproximamos nossa observação do horizonte, com os raios recebidos passando por ângulos mais extremos. Esse é o motivo que, na realidade, vemos o sol antes que ele realmente nasça no horizonte, ou que o vemos depois do pôr do sol ter acontecido. 

![](https://upload.wikimedia.org/wikipedia/commons/7/7f/ApparentAltitudeDiagrama.png)

<i>Perceba que a estrela azul (imagem) possui uma altura maior no céu do que a estrela real, vermelha. Para fins didáticos, o diagrama está muito exagerado. Imagem autoral via <a href="https://commons.wikimedia.org/wiki/File:ApparentAltitudeDiagrama.png" target="_blank">Wikimedia Commons</a>.</i>

## Lâmina de faces paralelas

Uma **lâmina de faces parelas** com índice de refração diferente do meio exterior provoca uma mudança momentânea da direção de propagação do raio de luz, que por fim sai da lâmina refringente na mesma direção que propagava originalmente, porém com um desvio lateral $s$. 

![*Raio de luz entra numa lâmina, é refratado e sai pelo outro lado. Note as marcações das dimensões e dos ângulos. Imagem autoral.*](https://upload.wikimedia.org/wikipedia/commons/2/21/LightRayPlanePrism.png)

<i>Raio de luz entra numa lâmina, é refratado e sai pelo outro lado. Note as marcações das dimensões e dos ângulos. Imagem autoral.</i>

De fato, é possível encontrar $s$ em função dos ângulos de incidência e refração, além da largura $d$ da lâmina, por meio de relações trigonométricas — o seno e o cosseno dos ângulos da expressão.

$$
s = d \cdot \dfrac{\sin{ (\theta_I - \theta_{REF})}}{ \cos{ \theta_{REF} }}
$$