# Rotações e momento angular

# Cinemática do corpo rígido 

Definimos como <b>corpo rígido</b> um corpo ideal que é indeformável independentemente das forças aplicadas nele. É claro que não há um corpo na realidade que atenda esta definição, pois até os materiais mais sólidos, como o aço, sofrem deformações, mesmo que microscópicas, em resposta às forças sobre eles aplicadas, entretanto, esse corpo ideal fornece uma boa aproximação para o estudo de vários corpos. 

## Translação e rotação

Um corpo rígido efetua um movimento de <b>translação</b> quando qualquer segmento que une qualquer um dos pontos do corpo não muda de direção durante o movimento. Uma consequência interessante é que todos os seus pontos descrevem trajetórias cujas curvas podem ser sobrepostas e, em qualquer instante, também possuem a mesma velocidade e aceleração. Essas grandezas são assim denominadas <b>velocidade</b> e <b>aceleração</b> do corpo rígido. 

Essas grandezas podem ser assim levadas em conta pois como todos os pontos do corpo se movem de forma conjunta, para estudar o movimento do corpo é necessário apenas estudar o movimento de um ponto. Geralmente esse ponto escolhido é o centro de massa do objeto.

Ao considerarmos rotações de um corpo rígido, temos duas formas possíveis: a <b>rotação em torno de um eixo fixo</b> e a <b>rotação em torno de um ponto fixo</b>. A primeira se dá ao fixarmos um segmento $AB$, com $A$ e $B$ sendo pontos no interior do corpo. Nessas condições, qualquer movimento de qualquer ponto do corpo deve descrever um arco de circunferência cujo raio é a distância do ponto ao eixo $AB$. Assim, todas as partículas percorrem um mesmo ângulo num mesmo intervalo de tempo, com o eixo fixado sendo então denominado <b>eixo de rotação</b>. 

A <b>rotação em torno de um ponto fixo</b> se dá ao considerarmos um ponto $P$ do corpo rígido fixo. Nessas condições, todos os outros pontos descrevem grandes círculos sobre esferas de centro $P$ e raio $r$, a distância entre aquele ponto qualquer e $P$. Como estamos descrevendo posições em esferas, é recorrente a utilização de dois ângulos e a distância ao ponto escolhido.

## Teorema de Chasles e graus de liberdade

O <b>teorema de Mozzi-Chasles</b> ou simplesmente <b>teorema de Chasles</b>, nomeado em homenagem aos matemáticos Giulio Mozzi e Michel Chasles, mostra que o movimento mais geral de um corpo rígido é composto por uma translação e uma rotação, sendo uma <a href="/books/higher_education/math/linear_algebra/internal_product.html">isometria</a> no espaço euclidiano cujos vetores são os pontos do corpo. 

A conclusão de Mozzi e Chasles motiva uma introdução ao conceito de <b>graus de liberdade</b> de um sistema no contexto da mecânica. Dizemos que o grau de liberdade de um sistema é o mínimo de parâmetros necessários para fixar sua posição no espaço. No caso mais geral, um corpo rígido possui ao total seis graus de liberdade (três de rotação e três de translação).

# Representando rotações com vetores

Podemos caracterizar rotações infinitesimais por meio de vetores, o que não pode ser feito para rotações de caráter finito em razão de sua não-comutatividade.

Ao considerar um movimento de rotação em torno de um eixo, adotamos um vetor $\vec{\delta \theta}$ de magnitude $\delta \theta$ (o ângulo infinitesimal rotacionado) e direção do eixo de rotação. Como não há nada físico que motive a definição do sentido deste vetor, adota-se por convenção que roitações anti-horárias possuem o vetor apontando "para cima" ou "para baixo", no caso contrário. 

Imaginando agora um corpo rígido rotacionando em torno de um eixo, sendo possível estudar uma seção do corpo constituída pela intersecção o corpo com um plano perpendicular ao eixo de rotação, temos que o deslocamento infinitesimal de um ponto no corpo, $\vec{\delta S}$ está relacionado com sua distância do eixo ($\vec{r}$) e do vetor $\vec{\delta \theta}$ pela relação 

$$
\vec{\delta S} = \vec{\delta \theta} \times \vec{r}
$$

Para encontrar a magnitude desse deslocamento, basta fazer o módulo deste produto vetorial. Logo, 

$$
|\vec{\delta S}| = |\vec{\delta \theta} \times \vec{r}| = ||\vec{\delta \theta}|| \cdot ||\vec{r}|| \cdot \sin{\phi}
$$

com $\phi$ sendo o ângulo entre $\vec{\delta \theta}$ e $\vec{r}$. 

## Velocidades escalares e angulares 

O vetor velocidade (escalar) instantânea de um ponto $P$ no corpo em rotação pode ser dado pela expressão 

$$
\vec{v} = \lim_{\delta t \to 0} \left(\dfrac{\delta S}{\delta t}\right) = \lim_{\delta t \to 0} \left(\dfrac{\delta \theta}{\delta t}\right) \vec r
$$

Como $\vec{\delta S} = \vec{\delta r}$ — o deslocamento da partícula tomando como base o vetor que a liga à origem no eixo de rotação e o deslocamento infinitesimal no interior do corpo são iguais — é possível, então, escrever 

$$
\vec{v} = \dfrac{d\vec{r}}{dt} = \vec{w} \times \vec{r}
$$

com o vetor $\vec{w}$ sendo denominado <b>velocidade angular (instantânea)</b>, dado por 

$$
\vec{w} = \dfrac{d\vec{\theta}}{dt}
$$

# Referências

1. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 1: mecânica. 5. ed. São Paulo: Blucher, 2013