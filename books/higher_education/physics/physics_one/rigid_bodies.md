# Corpos rígidos

# Várias partículas

No <a href="/books/higher_education/physics/physics_one/rotations.html" target="_blank">volume anterior</a> consideramos em nossos resultados apenas corpos pontuais, porém, para análise de sistemas mais complexos torna-se necessária a análise de sistemas formados por várias partículas. 

Inicialmente, podemos verificar que, para um sistema de $N$ partículas de massa, posições e velocidades $m_i$, $\vec{r_i}(t)$ e $\vec{v_i}(t)$, o momento angular $\vec{L}$ em relação ao referencial $O$ é da forma 

$$
\vec{L} = \sum_{i = 1}^N \vec{r_i} \times \vec{p_i} = \sum_{i=1}^N m_i\vec{r_i} \times \vec{v_i}
$$

Tomando como referencial o centro de massa $CM$ do sistema — de posição $\vec{R}$ e velocidade $\vec{V}$ —, obtemos inicialmente que, sendo $\vec{r_i}'$ e $\vec{v_i}'$ os vetores posição e velocidade da i-ésima partícula em relação ao $CM$, temos 

$$
\begin{align*}
    \vec{r_i} = \vec{r_i}' + \vec{R} &\implies \sum_{i = 1}^N m_i \vec{r_i}' = 0 \\ 
    \vec{v_i} = \vec{v_i}' + \vec{V} &\implies \sum_{i = 1}^N m_i \vec{v_i}' = \sum_{i = 1}^N \vec{p_i}' = 0 \\ 
    \vec{P} &= M\vec{V}
\end{align*}
$$

Isto é, a soma de todas as posições das partículas em relação ao centro de massa é nula; o momento total em relação ao centro de massa é nulo (todas as partículas se movem em conjunto) e, por fim, que o momento $\vec{P}$ do centro de massa é dado pelo produto entre a massa total do sistema e a velocidade do $CM$.

Substituindo essas relações na expressão para $\vec{L}$, vista anteriormente, obtemos 

$$
\vec{L} = \sum_{i=1}^N m_i(\vec{r_i}' + \vec{R})(\vec{v_i}' + \vec{V}) = \sum_{i=1}^N m_i \vec{r_i}' \times \vec{v_i}' + \vec{R} \times \left(\sum_{i=1}^N m_i \vec{v_i}'\right) + \left(\sum_{i=1}^N m_i \vec{r_i}'\right) \times \vec{V} + \sum_{i=1}^N m_i \vec{R} \times \vec{V}
$$

Como 

$$
\sum_{i=1}^N m_i \vec{v_i}' = \sum_{i=1}^N m_i \vec{r_i}' = 0
$$

podemos simplificar a expressão para obter finalmente a relação 

$$
\vec{L} = \vec{L}' + \vec{R} \times \vec{P}
$$

onde 

$$
\vec{L}' = \sum_{i=1}^N m_i\vec{r_i}' \times \vec{v_i}' = \sum_{i=1}^N \vec{r_i}' \times \vec{p_i}' 
$$

é o momento angular do sistema em relação ao centro de massa é $\vec{R} \times \vec{P}$ é o momento angular do $CM$ em relação ao referencial $O$.

Em questões de nomenclatura, identifica-se também $\vec{L}'$ como o <b>momento angular interno</b> do sistema, enquanto $\vec{R} \times \vec{P}$ é o seu <b>momento angular externo</b>. $\vec{L}$, então, seria o <b>momento angular total</b> do sistema.

# Princípio Fundamental da Dinâmica para rotações

Do <a href="/books/higher_education/physics/physics_one/newtons_laws.html" target="_blank">Princípio Fundamental da Dinâmica</a> (2ª Lei de Newton) é possível deduzir um princípio análogo para os movimentos de revolução, válido tanto para referenciais inerciais como não-inerciais.

$$
\dfrac{d\vec{L}}{dt} = \vec{\tau}_{\text{ext}}
$$

Isto é, a taxa de variação do momento angular de um sistema em relação a um referencial $O$ é o torque resultante sobre este sistema. Uma consequência imediata segue para torque resultante nulo: a conservação do momento angular ao longo do tempo.

# Rotação de um corpo rígido em torno de um eixo fixo

Tomando o limite contínuo de um sistema de muitas partículas, chegamos em um corpo rígido. Inicialmente, considerando a dinâmica do movimento de rotações do corpo em torno de um eixo fixo, em razão deste ser o movimento mais simples, contendo apenas um grau de liberdade, temos que, para um corpo rígido sobre o eixo $Oz$, a componente do momento angular paralela ao eixo de rotação é dada por 

$$
L_z = I\omega
$$

com $I = \int \rho^2 \ dm$. Nestas expressões, $I$ é o momento de inércia do corpo rígido, $\omega$ é sua velocidade angular e $\rho$ é a distância de um elemento de massa $dm$ do corpo ao eixo de rotação. Estamos considerando apenas a componente do momento angular paralela ao eixo de rotação pois apenas esta interessa para a dinâmica. O vetor momento angular para cada elemento do corpo apontará em um certo angulo em razão da escola da origem, porém apenas a componente paralela a $Oz$ influencia na dinâmica.

Pelo princípio fundamental da dinâmica para rotações, temos ainda que 

$$
\dfrac{dL_z}{dt} = \dfrac{d(I\omega)}{dt} = \tau_z^{\text{ext}}
$$

Como num corpo rídigo as distâncias $\rho$ dos elementos de massa ao eixo de rotação são invariáveis, podemos reescrever a equação anterior na forma 

$$
\tau_{z}^{\text{ext}} = I\alpha
$$

com $\alpha$ sendo a <b>aceleração angular</b> do corpo, valendo $\alpha = \dot{w}$. 

De forma análoga oa movoimento de translação de um corpo, a energia cinética de um corpo rígido em rotação é da forma 

$$
T = \dfrac{1}{2}\omega^2 \int \rho^2 \ dm = \dfrac{1}{2}I\omega^2
$$

É possível ainda demonstrar a validade do teorema trabalho-energia cinética para rotações. Com efeito, para uma rotação finita $\phi_0 \to \phi_1$, vale 

$$
W_{\phi_0 \to \phi_1} = \dfrac{1}{2}I\omega_1^2 - \dfrac{1}{2}I\omega_0^2 = T_1 - T_0 = \Delta T
$$

Como ambos os movimentos mais simples da translação e rotação possuem apenas um grau de liberdade, consequentemente as equações correspondentes a cada movimento possuem um elevado grau de semelhança. É interessante relacioná-las por meio de uma tabela, como exposto abaixo. 

# Conservação do momento angular

Se a resultante dos toques externos na direção do eixo se anula, o produto da velocidade angular pelo momento de inércia em relação ao eixo se conserva ao longo do tempo. Podemos representar essa lei de conservação por 

$$
\tau_z^{\text{ext}} = 0 \iff \dfrac{d(I\omega)}{dt} = 0 \iff I\omega \text{ é constante}
$$

Embora no caso de um corpo rígido o momento $I$ seja invariável, esta conservação possui implicações mais interessantes no caso de corpos não-rígidos, que permitem a alteração de seu momento de inércia variando a distância de seus elementos de massa em relação ao eixo de rotação. 

Com efeito, para qualquer dois instantes $t_0$ e $t_1$, vale que 

$$
I(t_1)\omega(t_1) = I(t_0)\omega(t_0)
$$

com alguns exemplos interessantes dessa conservação, além do conhecido exemplo da patinadora do gelo, o chamado <b>regulador de Watt</b>, comum nas máquinas à vapor da Segunda Revolução Industrial, e o ato de abrir ou fechar os braços enquanto rodar sobre uma cadeira de escritório.

# Calculando momentos de inércia

Nem sempre a integral para encontrar o momento de inércia de um corpo é simples de ser solucionada. Entretanto, alguns casos são mais simples, considerando ainda corpos homogêneos. Abaixo estão listados alguns casos destes. 

## Anel circular

Considerando um anel circular de raio $R$ e massa $M$ com eixo de rotação perpendicular ao plano do anel e que o intercepta no centro da circunferência, temos que seu momento de inércia é dado por 

$$
I = MR^2
$$

## Disco e cilindro circular

Considerando agora um disco circular de massa $M$ e raio $R$ com eixo perpendicular ao plano do disco e que intercepta o centro da circunferência que o disco pertence, temos que seu momento de inércia é dado por 

$$
I = \dfrac{1}{2}MR^2
$$

Além disso, esse resultado coincide com o momento de inércia de um cilíndro circular reto sob as mesmas condições, em razão dos termos de volume cancelaram-se durante a integral.

## Barra delgada e placa retangular

Considerando uma barra delgada de massa $M$ e comprimento $L$ com eixo de rotação perpendicular ao plano que pertence sua maior extensão e que intercepta seu ponto médio, temos que seu momento de inércia é da forma 

$$
I = \dfrac{1}{12}ML^2
$$

Este resultado também coincide com o momento de inércia de uma placa retangular, em razão da integral ser indiferente perante a "altura" da barra, assim como esta é indiferente perante o volume no caso anterior.

## Esfera

Considerando uma esfera de massa $M$ e raio $R$ com um eixo de rotação que coincide com um de seus diâmetros, temos que seu momento de inércia é da forma 

$$
I = \dfrac{2}{5}MR^2
$$

Note por fim que todo momento de inércia $I$ calculado é da forma $I = Mk^2$, com $k$ sendo um comprimento. Isto acontece por razões dimensionais, com este comprimento $k$ sendo ainda denominado o <b>raio de giração</b> do objeto em relação ao eixo de rotação escolhido. Note ainda que em todos os casos considerados, o eixo de rotação passa pelo centro de massa do objeto.

## Teorema dos eixos paralelos

O <b>teorema dos eixos paralelos</b>, também conhecido pela denominação <b>teorema de Huygens-Steiner</b> ou simplesmente <b>teorema de Steiner</b>, em homenagem a Christiaan Huygens e Jakob Steiner, relaciona o momento de inércia de um corpo em relação a um eixo qualquer paralelo ao eixo que passa pelo centro de massa de um corpo. 

Com efeito, senod $I$ o momento de inércia em relação a um eixo paralelo qualquer e $I_{CM}$ o momento de inércia em relação ao eixo que passa pelo centro de massa, $M$ a massa do objetivo e $l$ a distância entre os eixos, vale

$$
I = I_{CM} + Ml^2
$$

Este teorema fornece alguns resultados interessantes para o caso de barras delgadas rotacionadas com eixos em suas extremidades e para o caso de cilindros retos. 

No primeiro caso, podemos mostrar que, para a mesma barra de massa $M$ e comprimento $L$ considerada anteriormente, seu momento de inércia em relação a um eixo paralelo ao eixo $Oz$ situado em uma de suas extremidades é de 

$$
I = \dfrac{1}{3}ML^2
$$

ou seja, quatro vezes maior do que caso a barra seja rotacionada em torno de seu centro de massa.

Já para o segundo caso, percebemos que para qualquer geratriz paralela deste cilindro, vale 

$$
I = \dfrac{3}{2}ML^2
$$

esta relação será útil no futuro para o estudo de movimentos compostos, os rolamentos. 

# Movimento plano de um corpo rígido

Dizemos que um corpo rígido executa um <b>movimento plano</b> quando todos os seus pontos traçam trajetórias paralelas a um plano denominado <b>plano de movimento</b>. 

Para que um corpo execute um movimento plano, sua trajetória de translação deve ser paralela ao plano enquanto seu eixo de rotação permaneça perpendicular ao plano de movimento (cf. intuído previamente na <a href="/books/higher_education/physics/physics_one/rotations.html" target="_blank">discussão sobre a 2ª Lei de Kepler</a>).

Para analisar as equações que regem a dinâmica de movimento plano, é conveniente definir como plano de movimento o plano $Oxy$. Dessa forma, tomando-o como referência, temos que o momento linear $\vec{P}$ do corpo pode ser expresso na forma $\vec{P} = P_x \hat{i} + P_y \hat{j}$ e, consequentemente, a força aplicada sobre o corpo também pode ser expressa na forma $\vec{F}^{\text{ext}} = F^{\text{ext}}_x \hat{i} + F^{\text{ext}}_y \hat{j}$.

Como o eixo de rotação permanece fixo e perpendicular ao plano, sabemos então que o vetor <b>velocidade angular</b> é da forma $\vec{\omega} = w \hat{k}$. Além disso, ao tomarmos um corpo rígido simétrico em relação ao eixo de rotação, seu momento angular interno é proporcional ao vetor velocidade angular, isto é 

$$
\vec{L'} = I_{CM} \vec{\omega}
$$

Derivando ambos os lados em relação ao tempo, obtemos ainda 

$$
\vec{\tau'}^{\text{ext}} = I_{CM} \vec{\alpha}
$$

Por fim, considerando a translação do corpo rígido, podemos denotar essa equação de movimento como 

$$
\vec{F}^{\text{ext}} = M\vec{A}
$$

pois não há variação em sua massa. Por questões de precisão, esta equação rege a dinâmica de translação do centro de massa do corpo considerado.

Ao considerarmos o cálculo da energia cinética para um sistema arbitrário de partículas, 

$$
T = \dfrac{1}{2}\sum_{i = 1}^N m_i \vec{v_i}^2 + \dfrac{1}{2}M\vec{V}^2
$$

com o primeiro termo representando a energia cinética <b>interna</b>, proveniente do movimento das partículas em relação ao centro de massa. O segundo termo leva em conta o movimento do próprio centro de massa. Adaptando este cálculo para o movimento de um corpo rígido em um movimento plano, obtendo a expressão 

$$
T = \dfrac{1}{2}I_{CM} \omega^2 + \dfrac{1}{2}M\vec{V}^2
$$

onde o primeiro termo leva em conta a rotação do corpo em torno de seu centro de massa e o segundo termo leva em conta a translação do próprio centro de massa. 

## Rolamento

Como caso particular do movimento plano de corpos rígidos, convém estudar o muito comum movimento de <b>rolamento</b>. 

Ao imaginarmos uma roda (um cilindro circular rígido) rolando sobre uma superfície de forma que todo ponto da circunferência, formada pelo corte transversal da roda, toque a superfície apenas uma vez, dizemos que a roda executa um movimento de <b>rolamento puro</b> ou também dito <b>sem deslizamento</b>.

Além de ser um movimento plano, podemos estudar o rolamento como uma composição de um movimento de translação e de um movimento de rotação. Todo ponto da roda descreve uma trajetória chamada <b>ciclóide</b>. Esta curva é especial por ser a solução para o <a href="" target="">problema da braquistócrona</a>.

É possível ver que a distância $s$ transcorrida pela roda ao rotacionar um ângulo $\phi$ é diretamente proporcional a este, com $s$ sendo numericamente igual ao tamanho do arco de circunferência correspondente ao ângulo $\phi$. 

$$
s = \phi R
$$

Derivando ambos os membros em relação ao tempo, temos ainda que 

$$
\dfrac{ds}{dt} = V = \dfrac{d\phi}{dt}R = \omega R
$$

com estas relações sendo próprias do rolamento puro.

Ao nos debruçarmos mais sobre as velocidades de cada ponto da roda, vemos que estas podem ser escritas como 

$$
\vec{v} = \vec{V} + \vec{\omega} \times \vec{r}
$$

com $\vec{V}$ sendo a velocidade de translação da roda, $\vec{\omega}$ a velocidade angular e $\vec{r}$ o vetor posição com relação ao CM. Essa expressão pode também ser escrita como 

$$
\vec{v} = \vec{V} + \vec{\omega} \times \vec{\rho}
$$

onde $\vec{\rho}$ é a componente de $\vec{r}$ paralela ao plano de movimento. Isso é possível justamente pelas propriedades do produto vetorial.

Uma consequência interessante dessa formulação é que, fixado um instante do movimento, a velocidade de cada ponto é maior à medida que consideramos um mais distante do ponto de contato. Com efeito, este ponto possui velocidade nula, enquanto seu oposto (pelo diâmetro da roda) possui velocidade máxima.

Essa característica do rolamento puro permite sua descrição como uma rotação pura em torno do ponto de contato com o solo em cada instante.

# Referências

1. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 1: mecânica. 5. ed. São Paulo: Blucher, 2013