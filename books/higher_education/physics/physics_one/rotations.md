# Rotações e momento angular

# Cinemática do corpo rígido 

Definimos como <b>corpo rígido</b> um corpo ideal que é indeformável independentemente das forças aplicadas nele. É claro que não há um corpo na realidade que atenda esta definição, pois até os materiais mais sólidos, como o aço, sofrem deformações, mesmo que microscópicas, em resposta às forças sobre eles aplicadas, entretanto, esse corpo ideal fornece uma boa aproximação para o estudo de vários corpos. 

Neste volume iremos nos debruçar inicialmente sobre a cinemática desse corpo, seguindo para a dinâmica rotacional de partículas (corpos pontuais). Em seu volume irmão, sobre a <a href="/books/higher_education/physics/physics_one/rigid_bodies.html" target="_blank">dinâmica de corpos rígidos</a>, iremos nos debruçar inicialmente sobre a dinâmica de sistemas de muitas partículas e, em seguida, em corpos rígidos.

## Translação e rotação

Um corpo rígido efetua um movimento de <b>translação</b> quando qualquer segmento que une qualquer um dos pontos do corpo não muda de direção durante o movimento. Uma consequência interessante é que todos os seus pontos descrevem trajetórias cujas curvas podem ser sobrepostas e, em qualquer instante, também possuem a mesma velocidade e aceleração. Essas grandezas são assim denominadas <b>velocidade</b> e <b>aceleração</b> do corpo rígido. 

Essas grandezas podem ser assim levadas em conta pois como todos os pontos do corpo se movem de forma conjunta, para estudar o movimento do corpo é necessário apenas estudar o movimento de um ponto. Geralmente esse ponto escolhido é o centro de massa do objeto.

Ao considerarmos rotações de um corpo rígido, temos duas formas possíveis: a <b>rotação em torno de um eixo fixo</b> e a <b>rotação em torno de um ponto fixo</b>. A primeira se dá ao fixarmos um segmento $AB$, com $A$ e $B$ sendo pontos no interior do corpo. Nessas condições, qualquer movimento de qualquer ponto do corpo deve descrever um arco de circunferência cujo raio é a distância do ponto ao eixo $AB$. Assim, todas as partículas percorrem um mesmo ângulo num mesmo intervalo de tempo, com o eixo fixado sendo então denominado <b>eixo de rotação</b>. 

A <b>rotação em torno de um ponto fixo</b> se dá ao considerarmos um ponto $P$ do corpo rígido fixo. Nessas condições, todos os outros pontos descrevem grandes círculos sobre esferas de centro $P$ e raio $r$, a distância entre aquele ponto qualquer e $P$. Como estamos descrevendo posições em esferas, é recorrente a utilização de dois ângulos e a distância ao ponto escolhido.

## Teorema de Chasles e graus de liberdade

O <b>teorema de Mozzi-Chasles</b> ou simplesmente <b>teorema de Chasles</b>, nomeado em homenagem aos matemáticos Giulio Mozzi e Michel Chasles, mostra que o movimento mais geral de um corpo rígido é composto por uma translação e uma rotação, sendo uma <a href="/books/higher_education/math/linear_algebra/internal_product.html">isometria</a> no espaço euclidiano cujos vetores são os pontos do corpo. 

A conclusão de Mozzi e Chasles motiva uma introdução ao conceito de <b>graus de liberdade</b> de um sistema no contexto da mecânica. Dizemos que o grau de liberdade de um sistema é o mínimo de parâmetros necessários para fixar sua posição no espaço. No caso mais geral, um corpo rígido possui ao total seis graus de liberdade (três de rotação e três de translação). Uma consequência interessante disto é a observação do MCU e do MRU, por exemplo: ambos possuem expressões análogas para sua descrição (velocidade, aceleração, ...) por possuírem apenas um grau de liberdade.

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

# Torque e momento angular

Dado que no movimento de rotação tivemos até agora grandezas análogas às mensuradas em movimentos de translação (aceleração, velocidade e deslocamento lineares e angulares), é razoável imaginar a existência de uma grandeza análoga à força tal que sua impressão ao longo de um dado deslocamento angular infinitesimal faça este ente realizar trabalho. 

A essa grandeza análoga nomeamos como <b>torque</b>, dada pelo produto vetorial entre a força $\vec{F}$ impressa sobre o corpo e o vetor distância $\vec{r}$, que liga o eixo de rotação ao ponto onde a força está atuando.

$$
\vec{\tau} = \vec{r} \times \vec{F}
$$

A componente perpendicular, ao vetor força, de $\vec{r}$ é chamada <b>braço de alavanca da $\vec{F}$</b>. Quanto maior for esse braço de alavanca, maior será a eficácia de $\vec{F}$ em produzir rotação, em razão da natureza do torque como um produto vetorial.

Considerando o análogo da força, temos também um análogo para o momento linear para movimentos de revolução, chamado <b>momento angular</b>. Sua definição matemática pode ser motivada através da segunda lei de Newton e da definição do torque, vista acima. 

Como $\vec{F} = \dfrac{d\vec{P}}{dt}$ e $\vec{\tau} = \vec{r} \times \vec{F}$, temos que 

$$
\begin{align*}
    \vec{\tau} &= \vec{r} \times \dfrac{d\vec{P}}{dt} \\ 
    \therefore \vec{\tau} &= \dfrac{d}{dt}(\vec{r} \times \vec{p}) - \dfrac{d\vec{r}}{dt}\times\vec{p} \\ 
    \therefore \vec{\tau} &= \dfrac{d}{dt}(\vec{r} \times \vec{p}) \\ 
    \therefore \vec{\tau} &= \dfrac{d\vec{l}}{dt}, \vec{l} = \vec{r} \times \vec{p}
\end{align*}
$$

Esta grandeza, $\vec{l}$, é o momento angular da partícula em relação ao referencial escolhido. Uma consequência imediata é a sua conservação quando o torque resultante impresso sobre corpo é nulo, um análogo direto à conservação de momento linear quando a força resultante é nula.

## Forças centrais

Dizemos que uma partícula está sob ação de uma <b>força central</b> — numa dada região do espaço — quando, para toda $\vec{F}$ exercida em qualquer ponto $P$ dessa região, tem-se que a direção dessa força está definida segundo um vetor $\vec{OP}$, com o ponto $O$ fixo, chamado de <b>centro de forças</b>. Além disso, a magnitude dessa força $\vec{F}$ deve depender apenas do módulo do vetor $\vec{OP}$, isto é, apenas da distância entre a partícula e o centro de forças. 

Em geral, toda força central, ao tomar a origem do sistema de coordenadas no ponto $O$, pode ser escrita na forma 

$$
\vec{F} = F(r) \hat{r}
$$

com $\hat{r}$ sendo o vetor unitário na direção de $\vec{OP}$ (isto é, sua normalização). $F(r)$ é a magnitude da força $\vec{F}$, podendo ser negativa (força atrativa) ou positiva (força repulsiva).

Destes conceitos iniciais podemos verificar alguns resultados interessantes ao considerarmos o torque e o momento angular em corpos sob ação dessas forças.

Tomando como referencia o centro de forças $O$, podemos perceber que $\vec{\tau} = \vec{r} \times \vec{F} = 0$ sempre, pois a força sempre será paralela ao vetor distância $\vec{r}$. Portanto, podemos dizer: forças centrais não produzem rotação em relação ao centro de forças.

Voltando nossos olhos agora ao momento angular, note que, como uma partícula sob ação de forças centrais possui toque nulo, seu momento angular é constante durante todo o tempo de duração da atuação dessa força. Uma implicação dessa conservação é a de que partículas sob a ação de forças centrais possuem trajetórias <b>planas</b>, com este plano que contém a trajetória chamado <b>plano de órbita</b>. 

Como o vetor $\vec{l}$ se conserva ao longo de todo o movimento, e este é dado pelo produto vetorial $\vec{l} = \vec{r} \times \vec{p}$ — isto é, sempre perpendicular ao plano gerado por $\vec{r}$ e $\vec{p}$ — temos que se $\vec{l}$ não se conservasse, um dos vetores teria que apontar para uma direção fora do plano gerado por este par. Como isso não acontece, temos que a trajetória do corpo é plana.

Um caso particular muito interessante da conservação de momento angular sob a ação de forças centrais é a <a href="/books/higher_education/physics/physics_one/gravitation.html" target="_blank">segunda lei de Kepler para o movimento planetário</a>. Vamos construí-la passo a passo. 

Imagine um corpo sob a ação de uma força central inicialmente num ponto $\vec{P}$. Considere agora um trecho infinitesimal de sua trajetória, correspondendo a um deslocamento $\vec{dr}$ a partir deste ponto inicial para um ponto $\vec{P'}$. Temos que a área $dA$ do triângulo formado pelos vetores $\vec{r} = \vec{OP}$, $\vec{OP'}$ e $\vec{dr}$ é dada por 

$$
dA = \dfrac{1}{2}||\vec{r} \times \vec{dr}||
$$

Portanto, temos que a taxa de variação da área varrida por esse vetor $\vec{r}$, a chamada <b>velocidade areolar</b> é dada por 

$$
\dfrac{dA}{dt} = \dfrac{1}{2}||\vec{r} \times \vec{v}|| = \dfrac{1}{2m}||\vec{r} \times \vec{p}|| = \dfrac{||\vec{l}||}{2m}
$$

Como esta grandeza é constante no tempo, dado que sob a ação de forças centrais o momento angular é constante, temos que o vetor $\vec{r}$ percorre <b>áreas iguais em tempos iguais</b>, esta é a segunda lei de Kepler. 

Como última consequência, podemos ver que a velocidade do corpo possui extremos nos pontos de periélio e afélio. Como os vetores velocidade do corpo são perpendiculares ao vetor $\vec{r}$ nesses pontos, temos as relações 

$$
||\vec{l}|| = mv_{P}r_{P} = mv_{A}r_{A} \implies \dfrac{v_P}{v_A} = \dfrac{r_A}{r_P}
$$

Como $r_A \gt r_P$, temos que $v_P \lt v_A$.

# Momento de inércia

Introduzir o conceito de <b>momento de inércia</b> é mais interessante se o fizemos enquanto analisamos um sistema físico. Considere um corpo de massa $m$ deslizando sem atrito sobre uma mesa em uma trajetória circular cujo centro é o ponto $O$, central, da mesa. Este corpo mantém seu movimento ao ser puxado por um fio através da mesa, por meio de um pequeno orifício no ponto $O$, com uma força de magnitude $F$. 

Desta situação, já podemos extrair que a força $F$ é a resultante centrípeta do movimento, tendo como módulo 

$$
F = \dfrac{mv^2}{r}
$$

com $r$ sendo o raio da trajetória e $v$ a velocidade tangencial do corpo. Perceba que ao aumentarmos um pouco a força exercida sobre o fio, o raio da trajetória diminuirá para um valor $r + \Delta r$ (com $\Delta r \lt 0$) e a velocidade deste corpo sofrerá um acréscimo para $v + \Delta v$. 

Pelo <a href="/books/higher_education/physics/physics_one/work_energy.html" target="_blank">teorema trabalho-energia cinética</a>, sabemos que esta variação $\Delta T$ de energia deve ser igual ao trabalho $W$ realizado. Portanto, temos que 

$$
\Delta T = \dfrac{1}{2}m(v + \Delta v)^2 - \dfrac{1}{2}mv^2 \approx mv \Delta v
$$

e assim, 

$$
W = -\dfrac{mv^2}{r}\Delta r
$$

Além disso, temos que 

$$
\begin{align*}
    -mv\dfrac{\Delta r}{r} = m \Delta v &\iff mr \Delta v + mv \Delta r = 0 \\ 
    &\iff \Delta (mvr) = 0 \\
    &\iff \Delta l = 0
\end{align*}
$$

Ou seja, o momento angular se conserva. A consequência disso é que, à medida que o raio diminui, a velocidade de rotação aumenta. Um clássico exemplo desse resultado é uma patinadora no gelo que, ao fechar os braços, gira mais rapidamente do que quando está com os braços estendidos. 

Experimindo o momento angular em termos da velocidade angular das partículas, como $v = \omega r$, temos $l = mvr = mr^2 \omega = I \omega$, com a grandeza 

$$
I = mr^2
$$

denominada o <b>momento de inércia</b> da partícula em relação ao referencial $O$. Essa grandeza é o análogo da massa para movimentos de rotação, aferindo a dificuldade de mudar o estado rotacional de um corpo. Podemos também expressar a energia cinética adquirida da rotação com essa grandeza, por meio da expressão 

$$
T = \dfrac{1}{2}I\omega^2
$$

também análoga à expressão ordinária para a movimentos translacionais.

# Referências

1. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 1: mecânica. 5. ed. São Paulo: Blucher, 2013