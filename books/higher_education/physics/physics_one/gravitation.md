# Gravitação 

# Mecânica celeste

Como definição inicial, temos que <b>mecânica celeste</b> utiliza princípios físicos e propriedades matemáticas para explicar e prever os movimentos de todo corpo sujeito à ação da gravidade. Vamos começar pelo início.

Nossa história moderna começa entre a Idade Média e a Idade Moderna, no chamado Renascimento. Neste período, compreendido entre os séculos XV e XVI, também figurou a chamada <b>Revolução Científica</b>, um período de rápida ruptura no modo de investigação do mundo natural, que se tornou mais matemática e empirista e menos filosófica, distanciando-se de suas origens greco-romanas.

O marco para o início da Revolução Científica são os estudos de Nicolau Copérnico, publicados em sua obra prima <i>De Revolutionibus Orbium Cœlestium</i> (Sobre a Revolução das Esferas Celestes). Copérnico argumentou que o modelo heliocêntrico, que colocava o Sol no centro do Universo, seria uma alternativa melhor ao modelo geocêntrico, que prevalecia desde a Antiguidade. 

![](https://upload.wikimedia.org/wikipedia/commons/2/28/Copernican_heliocentrism_diagram-2.jpg)

<i>Diagrama do modelo helicêntrico por Nicolau Copérnico. Das órbitas mais internas para as mais externas, temos: Mercúrio, Vênus, Terra (com a Lua), Marte, Júpiter, Saturno e as Estrelas Fixas.</i>

O modelo geocêntrico de Ptolomeu vigorava desde o século II AD, baseando-se na noção de que os céus eram perfeitos e imutáveis e, portanto, os movimentos dos planetas seguiriam trajetórias circulares — o círculo era a forma geométrica perfeita para os gregos. Para explicar movimentos como os <b>retrógrados</b>, o modelo recorria aos chamados <b>epiciclos</b>, esferas cristalinas invisíveis. 

![](https://upload.wikimedia.org/wikipedia/commons/c/c6/Epicycles.gif)

<i>Animação ilustrando um planeta orbitando a Terra no modelo ptolemaico. GIF sob domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Epicycles.gif" target="_blank">Wikimedia Commons</a>.</i>

Embora tenha sido satisfatório por muito tempo, o modelo geocêntrico tornou-se cada vez mais complexo para abarcar os comportamentos observados no céu. Copérnico percebeu que colocar o Sol no centro do Universo — ao invés da Terra — simplificava consideravelmente o modelo para o movimento planetário enquanto preservava os comportamentos já observados. O sacerdote polonês faleceu logo depois de publicar seu trabalho, com medo de ser ridicularizado por seus pares, em 1543.

# Tycho e Kepler

Um outro passo importante foi dado pelo astrônomo dinamarques Tycho Brahe e seu assistente, o matemático oficial da Corte Dinamarquesa, Johannes Kepler. Brahe havia observado o céu por cerca de duas décadas, meticulosamente registrando posições de planetas e estrelas ao longo de todo esse tempo. Kepler, então, um proponente fervoroso do heliocentrismo copernicano, se utilizou destes dados na composição de suas leis para o movimento planetário, hoje conhecidas como <b>Leis de Kepler</b>.

As leis de Kepler são três, dispostas abaixo. 

<aside>

<b>1ª Lei de Kepler (Lei das Órbitas)</b> — As trajetórias dos planetas são elipses com o Sol em um de seus focos.

![](https://upload.wikimedia.org/wikipedia/commons/9/97/Ellipitical_orbit_of_planet_with_an_eccentricty_of_0.5.gif)

<i>Animação de um planeta orbitando o Sol numa órbita de excentricidade igual a um meio. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Ellipitical_orbit_of_planet_with_an_eccentricty_of_0.5.gif" target="_blank">Wikimedia Commons</a>.</i>

</aside>

<aside>

<b>2ª Lei de Kepler (Lei das Áreas)</b> — Imagine um segmento de reta conectando um planeta ao Sol. A área varrida por este segmento será igual em intervalos de tempos iguais. Uma consequência desta lei é a constatação de que os planetas não se movem uniformemente, como pensado previamente, mas sim mais rapidamente ou mais lentamente a medida que estão mais próximos ou mais distantes do Sol.

![](https://upload.wikimedia.org/wikipedia/commons/6/69/Kepler-second-law.gif)

<i>Animação demonstrando a Lei das Áreas. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Kepler-second-law.gif" target="_blank">Wikimedia Commons</a>.</i>

</aside>

<aside>

<b>3ª Lei de Kepler (Lei dos Períodos)</b> — Os quadrados dos períodos de dois planetas quaisquer são proporcionais aos cubos dos semieixos maiores de suas respectivas órbitas. Por exemplo, dado um planeta A com período $T_A$ e semieixo maior $S_A$ e um planeta B com período $T_B$ e semieixo maior $S_B$, temos a relação

$$
\dfrac{T_A^2}{T_B^2} = k\dfrac{S_A^3}{S_B^3}
$$

com $k$ sendo uma constante de proporcionalidade própria para cada sistema planetário.

![](https://upload.wikimedia.org/wikipedia/commons/9/98/Kepler_laws_diagram.svg)

<i>Diagrama ilustrando a tarceira lei de Kepler para dois planetas. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Kepler_laws_diagram.svg" target="_blank">Wikimedia Commons</a>.</i>

</aside>

## Um pouco mais sobre elipses 

Embora as seções cônicas foram suficientemente discutidas em <a href="/books/higher_education/math/analytical_geometry/conics.html" target="_blank"><i>De Sectiones Conicae</i></a>, cabe mencionar daqui em diante algumas informações e resultados interessantes e de verdadeira importância para a mecânica celeste. 

Dado um ponto $P$ qualquer de uma elipse, o ângulo formado pelo seu eixo principal e uma reta que conecta $P$ a um dos focos é chamado <b>anomalia verdadeira</b> e é geralmente denotado por $\theta$. 

A forma polar da elipse nos permite relacionar qualquer distância de $P$ até um dos focos em função da anomalia verdadeira, por meio da expressão: 

$$
r = \dfrac{a(1-e^2)}{1 + e\cos{\theta}}
$$

onde $r$ é a distância do ponto $P$ a um dos focos, $a$ é o semieixo maior, $e$ a excentricidade e $\theta$ a anomalia verdadeira.

<aside>

Puramente observacionais, os desenvolvimentos de Kepler não se preocupavam com a dinâmica dos astros, isto é, por quais causas que estes se moviam. Isto mudou a partir dos estudos de Galileu Galilei e Isaac Newton.

</aside>

# Galileu e Newton

Galileu Galilei, físico, engenheiro, astronônomo e matemático florentino, nasceu em 8 de janeiro de 1642 e foi declarado como o Pai da Física Moderna. Catedrático da Academia de Pisa, desenvolveu as primeiras linhas que viriam a se tornar a mecânica clássica, fundamentando-a com talvez um de seus mais importantes conceitos, a <b>inércia</b>.

Isaac Newton, baseando-se em Galileu, argumentou que os planetas não necessitavam de uma força tangencial para continuarem seu movimento ao redor do Sol, mas sim de uma força <b>em direção a ele</b> para que estes não escapassem pela tangente. Denominamos sua lei de <b>Gravitação Universal</b> pois Newton unificou a mecânica celeste com a terrestre, sujeitas às mesmas leis de movimento. 

Na subseção à seguir, iremos dar um tratamento um pouco mais detalhado a este importante marco da história da mecânica.

Algo marcante da mecânica newtoniana é a sua justificativa das leis empíricas escritas por Johannes Kepler. Por exemplo, por qual motivo as órbitas são elipses, ou melhor, por que todas as órbitas são seções cônicas?

<aside>

<b>Demonstração (Apostol, órbitas como seções cônicas)</b> — Suponha um sol fixo de massa $M$ orbita por um planeta de massa $m$, com $m \ll M$. Temos que esta estrela atrai seu planeta por uma força $\vec{F}$ cuja intensidade e direção é dada pela Lei da Gravitação Universal. 

Assim, seja $\vec{r}$ o vetor que liga o Sol ao planeta, $r = ||\vec{r}||$ seu módulo e $\hat{r}$ o vetor unitário na direção de $\vec{r}$, isto é, $\hat{r} = \dfrac{\vec{r}}{r}$. Pela Gravitação Universal, temos 

$$
\vec{F} = -G\dfrac{Mm}{r^2}\hat{r}
$$

com $G$ constante. Pelo Princípio Fundamental da Dinâmica, temos 

$$
\vec{a} = -\dfrac{GM}{r^2}\hat{r}
$$

Isto é, tanto a força como a aceleração são radiais. Sabemos que isso conserva o momento angular e, portanto, é um movimento contido num plano. Entretanto, iremos aqui conduzir essa demonstração de outra maneira para possibilitar a discussão sobre o formato das órbitas.

Introduzindo o vetor $\vec{v} = \dfrac{d\vec{r}}{dt}$, temos 

$$
\begin{align*}
    \vec{r} \times \vec{a} &= \vec{r} \times \dfrac{d\vec{v}}{dt} + \vec{v} \times \vec{v} \\ 
    \therefore \vec{r} \times \vec{a} &= \vec{r} \times \dfrac{d\vec{v}}{dt} + \dfrac{d\vec{r}}{dt} + \vec{v} \\ 
    \therefore \vec{r} \times \vec{a} &= \dfrac{d}{dt}(\vec{r} \times \vec{v})
\end{align*}
$$

Como $\vec{r} \times \vec{a} = o$, temos que $\vec{r} \times \vec{v}$ é constante. Iremos denotá-lo por $\vec{c}$. Perceba que se $\vec{c} = o$, $\vec{r}$ seria paralelo a $\vec{v}$ e, portanto, o planeta se moveria em linha reta. 

Como planetas não se movem em linha reta, temos que $\vec{c} \neq o$. Sabemos que $\vec{r} \cdot \vec{c} = 0$, em razão da relação que produz o vetor $\vec{c}$ (um produto vetorial), logo, o vetor posição pertence a um plano perpendicular ao vetor $\vec{c}$ — aqui concluímos que o movimento é plano.

Considere então o produto $\vec{a} \times \vec{c}$, escrito em coordenadas polares: 

$$
\begin{align*}
    \vec{a} \times \vec{c} &= \left(-\dfrac{GM}{r^2}\hat{r}\right) \times \left(r^2\dfrac{d\theta}{dt}\hat{r}\times \dfrac{d\hat{r}}{d\theta}\right) \\ 
    \therefore \vec{a} \times \vec{c} &= -GM \dfrac{d\theta}{dt}\hat{r} \times \left(\hat{r} \times \dfrac{d\hat{r}}{d\theta}\right) \\ 
    \therefore \vec{a} \times \vec{c} &= GM \dfrac{d\theta}{dt}\dfrac{d\hat{r}}{d\theta}
\end{align*}
$$

Como $\vec{a} = \dfrac{d\vec{v}}{dt}$, podemos reescrever a equação anterior como 

$$
\dfrac{d}{dt}(\vec{v} \times \vec{c}) = \dfrac{d}{dt}(GM\hat{r})
$$

e, portanto, integrando em $t$, obtemos 

$$
\vec{v} \times \vec{c} = GM\hat{r} + \vec{b}
$$

com $\vec{b}$ sendo um vetor constante. Reescrevendo, temos 

$$
\vec{v} \times \vec{c} = GM(\hat{r} + \vec{e})
$$

com $GM\vec{e} = \vec{b}$.

Dessa forma, pela equação anterior, além de que $\vec{c} = \vec{r} \times \vec{v} = r^2 \dfrac{d\theta}{dt}\hat{r} \times \dfrac{d\hat{r}}{d\theta}$, podemos fazer o produto escalar de ambos os membrosa da primeira equação por $\vec{c}$ e da segunda equação por $\vec{r}$. 

Reorganizando e igualando ambas as epxressões resultantes para eliminar o termo $\vec{r} \cdot \vec{v} \times {c}$, chegamos na equação 

$$
GMr(1 + e \cos{\phi}) = c^2
$$

com $e = ||\vec{e}||$, $c = ||\vec{c}||$ e $\phi$ o ângulo entre os vetores $\vec{e}$ e $\vec{r}$. 

Fazendo $d = \dfrac{c^2}{GMe}$, obtemos finalmente 

$$
r = \dfrac{ed}{e\cos{\phi}+1} \iff r = e(d - r\cos{\phi})
$$

Uma equação de uma seção cônica de excentricidade $e$ e foco no sol! Está demonstrada a primeira lei de Kepler.

</aside>

Além disso, sabemos que a constante da Lei dos Períodos é própria de cada sistema. Embora esta possa ser estimada de maneira empírica, Newton deduziu uma expressão para calculá-la. Para um dado sistema cuja massa central é $M$ e a massa do corpo orbitante é $m$, com $m \ll M$, a constante de proporcionalidade vale 

$$
k = \dfrac{4\pi^2}{GM}
$$

<aside>

<b>Demonstração (Apostol, Lei dos Períodos)</b> — Suponha então que a órbita elíptica do nosso planeta imaginário possui um eixo maior medindo $2a$ e um eixo menor cuja medida é $2b$. Dessa forma, temos que a área da elipse é $\pi ab$. Assim, denotando o período orbital por $T$, temos 

$$
\dfrac{1}{2}cT = \pi ab \iff T = \dfrac{2 \pi ab}{c}
$$

pois $\dfrac{1}{2}{c}$ é a velocidade areal. Por outro lado, pelas propriedades da elipse, temos 

$$
\begin{cases}
    b^2 = a^2 (1-e^2) \\ 
    ed = a(1-e^2)
\end{cases}
$$

Assim, 

$$
c^2 = GMed = GMa(1-e^2)
$$

e, portanto, 

$$
T^2 = \dfrac{4\pi^2a^2b^2}{c^2}=\dfrac{4\pi^2a^4(1-e^2)}{GMa(1-e^2)}=\dfrac{4\pi^2}{GM}a^3
$$

Está demonstrada a terceira lei de Kepler.

</aside>

Por fim, a segunda lei de Kepler é uma consequência direta da conservação de momento angular em sistemas de atuação de forças centrais. Sua demonstração foi realizada anteriormente (cf. mencionado) no manuscrito sobre <a href="/books/higher_education/physics/physics_one/rotations.html" target="_blank">rotações</a>.

Por outro lado, dois casos interesssantes colocaram a Gravitação Universal à prova. Vamos começar pelo mais antigo, que ocorreu em 1676, em observações de Júpiter. 

Foi percebido por astrônomos que, em algumas observações, as luas de Júpiter completavam suas órbitas um pouco antes do previsto enquanto em outras atrasavam, demorando um pouco mais do tempo esperado para completarem seu percurso.

![](https://upload.wikimedia.org/wikipedia/commons/6/66/Jupiter_and_the_Galilean_moons_animation.gif)

<i>Imagens feitas pela espaçonave Juno da NASA das chamadas luas galileanas (Io, Europa, Ganimedes e Calisto). Domínio público.</i>

Como isto seria possível? O tempo orbital de cada lua deve ser constante, seguindo a previsão teórica. Uma constatação logo elucidou a razão para este estranho fenômeno: as luas são "mais rápidas" quando Júpiter está mais próximo da Terra e "mais lentas" quando o gigante gasoso está mais distante de nosso planeta. Isso motivou a hipótese que a luz não viaja de forma instantânea e a primeira estimativa de sua velocidade.

O outro caso ocorreu em meados do século XIX. Começou com uma simples pergunta: se o Sol e a Lua afetam a Terra, por exemplo, então a força resultante sobre o nosso planeta não é apenas a do Sol e nossa órbita não é uma elipse perfeita, certo? Este comportamento foi observado nas órbitas de Júpiter e Saturno: de fato, suas órbitas não eram elipses perfeitas, possuindo pequenas perturbações.

Algo, no entanto, estava estranho com Urano. A órbita deste planeta possuia perturbações que não podiam ser explicadas apenas pela influência de Júpiter e Saturno — deveria ter algo a mais. Le Verrier, astrônomo francês, lançou a hipótese da existência de outro planeta, ainda não observado, de órbita ainda mais externa que Urano, que explicasse tais fenômenos. Pouco tempo depois, Johann Galle, astrônomo alemão, observou e identificou Netuno ao apontar os telescópios de Berlim nas coordenadas matematicamente previstas por Verrier. 

![](https://upload.wikimedia.org/wikipedia/commons/d/da/Sternwarte_Berlin_Schinkel.jpg)

<i>Antigo prédio do Observatório de Berlim, onde Netuno foi observado pela primeira vez.</i>

Tudo isto ocorreu em 1846, sendo uma sensação no mundo científico da época. Curiosamente, Galileu já havia observado o planeta no século XVII, mas o confundiu com uma simples estrela fixa.

Essas observações atestavam que, de fato, a força gravitacional atua em distâncias na escala de nosso sistema solar. E na escala interestelar? Entre galáxias? Qual o limite da interação gravitacional entre corpos? Observações como sistemas de estrelas binárias, aglomerados globulares, galáxias e aglomerados de galáxias mostraram que, de fato, não há limite conhecido para a atuação da força gravitacional, embora esta interação se torne desprezível para corpos distantes o suficiente.

# A gravitação universal

A lei da gravitação universal foi, sem dúvida, uma das grandes conquistas da vida acadêmica de Isaac Newton, unindo cientificamente a mecânica terrestre e a mecânica celeste, desde muito tempo separadas pela cosmologia aristotélica. 

Esse importante resultado pode ser derivado novamente por meio de álgebra, suas leis e algumas observações astronômicas. 

Para iniciar, imagine um corpo de massa $M$ na superfície terrestre, sujeito a uma aceleração $\vec{g}$. 

A Lua nos fornece a possibilidade de demonstrar a dimensão universal da força gravitacional, que é experienciada tanto na Terra como no céu. Sabendo-se o raio da Terra e a duração dos eclipses lunares, além da dimensão da lua (a partir dos eclipses solares), é possível deduzir o raio da orbita deste satélite, que assume o valor de $R_L = 3.8 \cdot 10^8 \text{ m}$. 

A partir desses dados, pode-se concluir que a aceleração centrípeta experienciada pela Lua em seu movimento circular uniforme ao redor da Terra é de $a_{cp} = 2.710^{-3} \text{m/s}^2$. 

Newton, em seus estudos, percebeu que $\dfrac{a_{cp}}{g} \approx \dfrac{1}{60^2} \approx \left(\dfrac{R_T}{R_L}\right)^2$ — com $R_T$ sendo o raio terrestre —, indicando uma aceleração gravitacional inversamente proporcional ao quadrado da distância, ou, de forma mais sucinta, que

$$
a_g \propto \dfrac{1}{d^2}
$$

O próximo passo é associar essa aceleração a sua respectiva força explicitamente. Supondo $F_{TM}$ e $F_{TL}$ como a força exercida pela Terra no objeto de massa $M$ e na Lua, respectivamente, podemos montar as seguintes equações: 

$$
\begin{align*}
    F_{TM} &= K_M \cdot \dfrac{M}{R_T^2} \\ 
    F_{TL} &= K_L \cdot \dfrac{M_L}{R_L^2}
\end{align*}
$$

Com $K_M$ e $K_L$ sendo constantes de proporcionalidade. 

Dessa forma, fica estabelecido que podemos utilizar dessa abordagem para encontrar uma lei para a força gravitacional entre dois corpos. Para o próximo passo, então, iremos analisar a Terra e a Lua, através da Terceira Lei de Newton. 

Como a Terra e a Lua são corpos isolados interagindo entre si, a força que os corpos exercem um sobre o outro, $F_{TL}$ e $F_{LT}$, são iguais em módulo e opostas em direção. $F_{LT}$ é a força que a <b>Lua exerce sobre a Terra</b>, enquanto $F_{TL}$ é a força que a <b>Terra exerce sobre a Lua</b>.

Escrevendo $F_{LT} = K_T \cdot \dfrac{M_T}{R_L^2}$ e levando em conta a relação entre as duas forças, podemos ver que $K_T \cdot M_T = K_L \cdot M_L$. Desta equação, podemos identificar uma relação de proporcionalidade direta entre as constantes e as massas dos corpos pacientes. De fato, por manipulação matemática, podemos trabalhar de trás para frente e explicitar uma constante $G$ que explicita essa relação. 

$$
\begin{align*}
K_T \cdot M_T &= K_L \cdot M_L \\ 
\dfrac{K_T}{M_L} &= \dfrac{K_L}{M_T} = G
\end{align*}
$$

Podemos justificar esta constante pela simetria das duas forças, que são iguais em módulo e dependentes do corpo paciente. Dessa forma, a força exercida pelo corpo não depende apenas do próprio corpo, mas também do corpo que está interagindo. 

Dessa última equação concluímos que $K_T = G \cdot M_L$  e $K_L = G \cdot M_T$. 

Ao substituir qualquer uma dessas expressões seja em $F_{LT}$ ou em $F_{TL}$, obtemos a conhecida expressão para a Lei da Gravitação Universal, com seu sinal negativo explicitando seu caráter atrativo e o vetor $r_{12}$ indicando a direção da força, que aponta para o centro dos corpos.

$$
\vec{F} = -G \cdot \dfrac{M_1M_2}{|\vec{r_{12}}|} \cdot \hat{r_{12}}
$$

## Corpos extensos e o teorema das cascas esféricas 

Uma ressalva importante que deve ser levantada é o fato de que a lei da gravitação universal de Isaac Newton em sua forma padrão, vista anteriormente, rege a atração entre duas massas pontuais. Como então, estudar a atração gravitacional de corpos extensos? 

O procedimento é simples conceitualmente mas potencialmente trabalhoso computacionalmente: considerar um diferencial de massa $dm$ no corpo extenso e, consequentemente, considerar o diferencial de força $d\vec{F}$ exercido por ele. Ao integrarmos, obteremos $\vec{F}$. 

Note que a integral que iremos obter será vetorial. Entretanto, como a força gravitacional é <a href="/books/higher_education/physics/physics_one/work_energy.html" target="_blank">conservativa</a>, vale a relação 

$$
\vec{F} = -\nabla U
$$

e, portanto, é possível encontrar uma expressão para força pelo estudo da energia potencial. É importante relembrar também que vale o <b>princípio da superposição</b> para a força gravitacional, com a expressão acima podendo ser adaptada para a interação com vários corpos pela característica linear do gradiente. 

$$
\vec{F} = -\nabla U_1 - \dots - \nabla U_n
$$

Pela maior facilidade de lidar com escalares em comparação com vetores, na maior parte dos problemas, este é o caminho recomendado para se seguir. 

Para continuar nosso raciocínio, é importante mencionar que a conhecida expressão para a energia potencial gravitacional ($U = mgh$) é apenas uma aproximação para campos gravitacionais uniformes, isto é, em situações como nas proximidades da superfície terrestre. 

Para casos mais gerais, a expressão adequada para a energia potencial gravitacional associada a um par de massas $M$ e $m$ separadas por uma distância $r = ||\vec{r}||$ é: 

$$
U = -\dfrac{GMm}{r}
$$

Após essa pequena recapitulação e expansão de conceitos, iremos demonstrar um importante resultado obtido pelo próprio Isaac Newton e publicado pelo físico em seu <i>Principia Mathematica</i>: 

<blockquote>

<i>Um corpo extenso de simetria esférica atrai outro corpo como se toda a sua massa estivesse concentrada em seu centro. Além disso, a força gravitacional resultante no interior de uma casca esférica é nula, em qualquer ponto.</i>

</blockquote>

Considere uma casca esférica de raio $a$ e espessura $h$, de forma que $h \to 0$. Além disso, em razão da simetria e das dimensões do corpo, este possui densidade uniforme. Por fim, considere uma massa teste $m$ num ponto $P$ no exterior da casca. 

Vamos então calcular a energia potencial gravitacional da massa teste $m$. Para tal, é conveniente dividir a casca em muitos anéis de largura infinitesimal de forma que, considerando um anel qualquer, todos os seus pontos são equidistantes de $P$ a uma distância $s$. 

Logo, temos que a diferencial de energia potencial para cada anel é: 

$$
dU_\text{anel} = -\dfrac{Gm}{s}dM
$$

com $dM$ sendo a massa infinitesimal do anel. 

Em razão da densidade constante do corpo, é possível escrever: 

$$
\dfrac{dM}{M} = \dfrac{A_\text{anel}}{4\pi a^2}
$$

Como podemos aproximar cada anel como um fino retângulo, temos que seu raio é $\rho = a\sin{\theta}$ e sua largura é $ad\theta$. Logo:

$$
A_\text{anel} = 2\pi \rho \cdot a d\theta = 2\pi a^2 \sin{\theta}d\theta 
$$

Substituindo na relação de proporção, obtemos: 

$$
dM = \dfrac{1}{2}M\sin{\theta}d\theta 
$$

Finalmente, substituindo na expressão de energia potencial, obtemos: 

$$
dU_\text{anel} = -\dfrac{GMm}{2}\dfrac{\sin{\theta}}{s}d\theta
$$

Integrando sobre todos os anéis, isto é, no intervalo $[0, \pi]$, obtemos: 

$$
U = -\dfrac{GMm}{2}\int_{0}^{\pi} \dfrac{\sin{\theta}}{s}d\theta
$$

Como finalizar nosso cálculo, sabendo que $s$ varia com $\theta$? Podemos explicitar essa relação por meio da leis dos cossenos aplicada no triângulo cujos vértices são o ponto $P$, o centro da casa e um ponto qualquer de um anel. 

$$
s^2 = a^2 + r^2 - 2ar\cos{\theta} \implies 2s\dfrac{ds}{d\theta} = 2ar\sin{\theta} \therefore ar\dfrac{\sin{\theta}}{s}d\theta = ds
$$

Perceba que mudar nossa variável de integração para $s$ nos permite facilitar a operação consideravelmente. 

Assim, encontrando os novos limites de integração: 

$$
\begin{align*}
    \theta &= 0 \implies s^2 = s^2_\text{max} = (r-a)^2 \\ 
    \theta &= \pi \implies s^2 = s^2_\text{min} = (r+a)^2 
\end{align*}
$$

Portanto, podemos reescrever a integral como: 

$$
U = -\dfrac{GMm}{2ar}\int_{s_\text{min}}^{s_\text{max}} ds = -\dfrac{GMm}{2ar}(s_\text{max} - s_\text{min})
$$

Excelente! Como consideração adicional, perceba que todas as nossas deduções matemáticas funcionam perfeitamente mesmo quando a massa teste se encontra <b>no interior da casca</b>. A única modificação necessária é no valor de $s_\text{min}$, que assumirá $a - r$ ao invés de $r-a$. O valor da distância máxima, entretanto, permanece inalterado. 

Consequentemente, temos que $r \gt a \implies s_\text{max} - s_\text{min} = 2a$ e $r \lt a \implies s_\text{max} - s_\text{min} = 2r$. 

Assim, incluindo estes resultados em nossa expressão para $U$, obtemos uma função definida condicionalmente:

$$
U(r) = 
\begin{cases}
    -\dfrac{GMm}{r} & r \ge a \\ 
    -\dfrac{GMm}{a} & r \lt a 
\end{cases}
$$

Veja que a primeira condição evidencia a primeira conclusão do teorema: a energia potencial (e portanto a força, como será visto adiante) possui um comportamento equivalente ao cenário que consideramos toda a massa da casca em seu centro. O segundo caso, por sua vez, mostra que a energia potencial é constante em qualquer ponto no interior da casca: a resultante gravitacional deve ser nula. 

Com efeito, podemos verificar isto analiticamente. Como $\vec{F}(r) = -\nabla U = -\dfrac{dU}{dr}\hat{r} = F(r)\hat{r}$, onde 

$$
F(r) = -\dfrac{GMm}{r^2} \, (r \gt a)
$$

temos que o primeiro caso realmente se verifica. Quando $r \lt a$, $F(r) = 0$ pois $\nabla U = 0$, o que evidencia a segunda conclusão do teorema. 

Interessante, não? Newton justificou este achado geometricamente, de forma bastante elegante: imagine uma seção transversal da casca e uma reta que a atravessa, intersectando-a em dois pontos, $A$ e $B$. Tomando um par de pontos $(A', A'')$ e $(B', B'')$ nas proximidades de $A$ e $B$, de forma que sejam traçadas as retas $\overline{A'B''}$ e $\overline{A''B'}$, formaremos dois triângulos infinitesimais de áreas proporcionais: 

$$
\dfrac{dA}{r_A^2} = \dfrac{dB}{r_B^2}
$$

com $(dA, r_A)$ e $(dB, r_B)$ sendo, respectivamente, as bases e as alturas destes triângulos. 

Como cada membro da equação resulta na magnitude da atração exercida pelos elementos de massa $dA$ e $dB$, após ambos os membros serem multiplicados por uma constante — formada pelo produto entre a densidade, a espessura da casca, a constante gravitacional e a massa da massa teste — vemos que as forças são iguais em módulos e opostas em sentido e, portanto, sua resultante é nula. 

Como é possível repetir este processo para qualquer par de pontos na casca, conclui-se que a atração gravitacional em qualquer ponto no interior da casca esférica é nula. 

## Hooke e a gravidade-mola

Note que nas demonstrações anteriores das leis de Kepler a única característica realmente necessária para essas serem válidas é a característica radial da força. Logo, isso nos permite conduzir um experimento mental interessante: e se a força de atração gravitacional, ao invés de ser como a de Newton, fosse hookeriana? 

$$
\vec{F_H} = -GM_1M_2r\hat{r}
$$

onde $r = ||\vec{r}||$ e $\vec{r}$ é o vetor raio entre as massas $M_1$ e $M_2$. Além disso, $\hat{r} = \dfrac{\vec{r}}{r}$. 

Como primeiro exercício de nossa imaginação, vamos comparar os períodos orbitais de um corpo em torno de outro, seguindo uma trajetória circular. Considere um corpo central de massa $M$, um satélite de massa $m$ e uma órbita de raio $r$. 

Sabemos que o período orbital é simplesmente o período de revolução de um movimento circular uniforme e, consequentemente, possui a forma 

$$
T = \dfrac{2\pi r}{v}
$$

com $v$ sendo a velocidade tangencial do movimento. Pela expressão da aceleração centrípeta no MCU e pelo princípio fundamental da dinâmica, podemos encontrar uma expressão para $v$. 

$$
v = \sqrt{r \cdot \left(\dfrac{F}{m}\right)}
$$

No caso newtoniano, temos que 

$$
v_N = \sqrt{r \cdot \left(\dfrac{GMm}{mr^2}\right)} = \sqrt{\dfrac{GM}{r}}
$$

Por outro lado, temos que no caso hookeriano a velocidade é: 

$$
v_H = \sqrt{r \cdot \left(\dfrac{GMmr}{m}\right)} = r\sqrt{GM}
$$

Logo, temos que no caso hookeriano, a velocidade orbital é maior em relação ao caso newtoniano por um fator de $r\sqrt{r}$. E nos períodos? 

Pela relação do período exposta acima, podemos ver que, no caso newtoniano vale: 

$$
T_N = \dfrac{2\pi r}{v} = \dfrac{2 \pi r}{\sqrt{\dfrac{GM}{r}}} = \dfrac{2\pi r^2 \sqrt{\dfrac{GM}{r}}}{GM}
$$

Por outro lado, o período no caso hookeriano é: 

$$
T_H = \dfrac{2\pi r}{r\sqrt{GM}} = \dfrac{2\pi \sqrt{GM}}{GM}
$$

Já perceba que o periodo orbital no caso hookeriano não depende do raio da órbita: todos os planetas moveriam-se ao redor do Sol com a mesma velocidade angular, completando voltas ao mesmo tempo! 

Qual a razão dos períodos, portanto? 

$$
\dfrac{T_N}{T_H} = r^2 \sqrt{\dfrac{GM}{r}} \iff T_N = r^2 \sqrt{\dfrac{GM}{r}} \cdot T_H
$$

Até as órbitas no caso hookeriano seriam mais velozes! Interessante, não?

# Cavendish

Olhando para os céus conseguimos concluir e verificar muita coisa, entretanto, por ser uma lei <b>universal</b>, poderíamos também verificar sua validade em laboratório? Deste questionamento, surgiu o experimento de Cavendish, ainda no século XVIII.

O experimento de Cavendish foi executado entre 1797 e 1798 pelo físico inglês Henry Cavendish, sendo o primeiro a mensurar o valor da constante gravitacional $G$ e verificar a atração entre duas massas num laboratório, de forma precisa. Além disso, Cavendish conseguiu mensurar de forma indireta a massa da Terra.

Este experimento consiste numa balança de torção com duas bolas metálicas. Na proximidade destas bolas são colocadas esferas muito maiores de chumbo. Ao longo do tempo, a força gravitacional entre os pares de esferas provoca uma rotação minúscula no suporte da balança, até que a força restauradora do suporte se equilibre com o torque provocado pela atração gravitacional. 

![](https://upload.wikimedia.org/wikipedia/commons/9/91/Cavendish_Torsion_Balance_Diagram.svg)

<i>Diagrama simplificado do experimento de Cavendish. Imagem sob domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Cavendish_Torsion_Balance_Diagram.svg" target="_blank">Wikimedia Commons</a>.</i>

## Executando o experimento

Nesta seção iremos realizar uma breve descrição de um método para a condução do experimento que, embora não tenha sido exatamente o que Cavendish seguiu, seria como poderíamos tirar as conclusões desse experimento hoje. 

Da Lei de Hooke, sabemos que o torque sofrido pela balança é proporcional ao ângulo de deflexão $\theta$, sendo da forma $k\theta$. Nesta relação $k$ é o coeficiente de torsão do fio da balança. 

Sabemos também que há torques contrários gerados pela atração gravitacional entre as massas. Considerando o comprimento da haste como $L$, temos que cada bola experiencia uma força $F$ e que estas estão há uma distância $L/2$ do eixo de rotação. Portanto, o torque contrário total é $LF$. 

No ponto de equilíbrio, ambos os torques se igualam em magnitude, o que nos permite escrever 

$$
k\theta = LF
$$

e, por consequência, 

$$
k\theta = L \dfrac{GMm}{r^2}
$$

Note que $M$ é a massa da esfera de chumbo, maior, e $m$ é a massa da esfera metálica menor; $r$ é a distância entre elas.

Para encontrar o coeficiente de torção $k$ do fio, podemos nos utilizar, como Cavendish, do período de oscilação natural do fio da balança, dado por 

$$
T = 2\pi \sqrt{\dfrac{I}{k}}
$$

Supondo que o momento de inércia $I$ da barra que une as bolas seja desprezível, podemos tomar 

$$
I = \dfrac{1}{2}mL^2
$$

Assim, substituindo $I$ na expressão para $T$, reorganizando para $k$ e substituindo na igualdade inicial, podemos rearranjar para $G$, obtendo finalmente 

$$
G = \dfrac{2\pi^2Lr^2\theta}{MT^2}
$$

A partir de $G$, pode-se utilizar de umcorpo qualquer de massa $m$ na superfície terrestre para obter a densidade e a massa da Terra. Dessa forma, denotando por $M_{\oplus}$ a massa terrestre e por $\rho_{\oplus}$ a sua densidade, temos 

$$
mg = \dfrac{GmM_{\oplus}}{R_{\oplus}^2} \iff M_{\oplus} = \dfrac{gR_{\oplus}^2}{G} \iff \rho_{\oplus} = \dfrac{3g}{4\pi GR_{\oplus}}
$$

# Energias

A importância do estudo da energia no contexto da gravitação e da mecânica celeste é, conforme visto ao longo deste documento, de grande porte em razão da simplificação da análise de diversos problemas em comparação com uma abordagem puramente newtoniana, de forças. 

A conservação de energia mecânica no movimento dos astros no modelo newtoniano produz um genêro de equações que relacionam a velocidade dos corpos orbitantes com sua distância do corpo central — as equações <i>vis-viva</i>. 

Para a elipse, a equação correspondente é da forma: 

$$
v^2 = GM\left(\dfrac{2}{r}-\dfrac{1}{a}\right)
$$

Para orbitas parabólicas e hipérbolicas, as equações correspondentes são, respectivamente: 

$$
\begin{align*}
    v^2 &= \dfrac{2GM}{r} \\ 
    v^2 &= GM\left(\dfrac{2}{r}+\dfrac{1}{a}\right)
\end{align*}
$$

Uma outra consequência interessante do estudo de energia no contexto da mecânica celeste é a possibilidade de classificação de um tipo de órbita pela observação do sinal de sua energia mecânica: órbitas elípticas possuem sinal negativo, parabólicas nulo e hiperbólicas positivo. 

Uma última informação sobre trajetórias hiperbólicas é a que  dado uma massa de teste $m$ a uma velocidade inicial $v_0$ colocada a uma distância muito grande de $M$, o corpo central, a energia mecânica do sistema é da forma 

$$
E = \dfrac{mv_0^2}{2}
$$

consequentemente, o semieixo maior da órbita pode ser encontrado: 

$$
a = \dfrac{GM}{v_0^2}
$$

## Velocidade de escape e raio de Schwarzchild

Definimos a <b>velocidade de escape</b> $v_\text{esc}$ como a velocidade mínima necessária para que a órbita de um corpo se torne aberta, isto é, parabólica — o corpo orbitante irá se afastar indefinidamente do corpo central. 

Para encontrar uma relação para essa velocidade, podemos considerar a seguinte situação: imagine um corpo $m$ a uma distância $r$ de $M$ possuindo uma velocidade inicial $v_0$. No caso em que $v_0 = v_\text{esc}$, $m$ irá realizar uma órbita aberta até chegar a uma distância infinitamente longe, com velocidade nula.

Pela conservação de energia, temos então: 

$$
v_\text{esc} = \sqrt{\dfrac{2GM}{r}}
$$

Pela relatividade geral de Albert Einstein, sabemos que a velocidade da luz é a mais alta que pode ser alcançada. Substituindo esta velocidade na equação anterior e resolvendo para $r$, encontramos uma expressão para o chamado <b>raio de Schwarzchild</b>. 

O raio de Schwarzchild é o raio do horizonte de eventos de um buraco negro de massa $M$. Consequentemente, esta expressão fornece o raio mínimo necessário para que um determinado corpo de massa $M$ seja transformado num buraco negro. 

$$
R_\text{sch} = \dfrac{2GM}{c^2}
$$

# Exercícios

## Problemas

<aside>

<b>Problema 1.</b> Considere uma massa teste $m$ posicionada a uma distância $a$ sobre a mediatriz de uma barra uniforme de massa $M$ e comprimento $2L$. Quais as componentes horizontais e verticais da força gravitacional atuando sobre a massa teste? O que acontece quando $a \gg 2L$? 

</aside>

<aside>

<b>Problema 2.</b> Considere a mesma configuração do problema anterior. Como seria a expressão para $\vec{F}$ caso considerássemos uma barra infinita? 

</aside>

<aside>

<b>Problema 3.</b> Considere um anel uniforme de raio $r$, massa $M_\text{anel}$ e densidade superficial $\rho$. Diretamente sobre a perpendicular ao plano do anel que passa pelo seu centro, afastado a uma distância $a$, está uma massa pontual $m$. Qual a atração gravitacional sofrida pela massa $m$ exercida pelo anel? 

</aside>

<aside>

<b>Problema 4.</b> Considere um disco uniforme de massa $M_\text{disco}$, densidade superficial $\rho$ e raio $R$ e uma massa pontual posicionada a uma altura $a$ diretamente sobre a perpendicular ao plano do disco que passa pelo seu centro. Qual a atração gravitacional sofrida pela massa $m$ exercida pelo disco? O que acontece ao considerarmos um disco de raio infinito (isto é, um plano)? O que isso nos diz sobre a queda livre de objetos nas proximidades da Terra? 

</aside>

## Soluções

<aside>

<b>Solução 1.</b> A primeira consideração física que podemos concluir vem da simetria do problema: a componente horizontal da força gravitacional resultante sobre $m$ será nula, pois cada elemento de massa $dM$ em uma metade da barra terá o seu simétrico, que exercerá um elemento de força cuja decomposição horizontal será igual em módulo e oposta em sentido.

Logo, teremos que considerar apenas o módulo da componente vertical da força $\vec{F}$. 

Além disso, como a barra é uniforme, temos a relação: 

$$
\dfrac{dM}{dL} = \lambda \implies dM = \lambda dL
$$

Assim, pela gravitação universal: 

$$
dF = -\dfrac{GmdM\cos^2{\theta}}{a^2}
$$

Logo, 

$$
\begin{align*}
    dF_y &= -\dfrac{GmdM\cos^3{\theta}}{a^2} \\ 
    &= -\dfrac{Gm\lambda \cos{\theta} d\theta}{a}
\end{align*}
$$

Trocamos a dependência da massa pelo ângulo tomando $dM = \lambda dL$ e combinando com $dL = a\sec^2{\theta}d\theta$, relação obtida por trigonometria. 

$$
\begin{align*}
    F_y &= \int_{-\theta_\text{max}}^{\theta_\text{max}} -\dfrac{Gm\lambda \cos{\theta}d\theta}{a} \\ 
    &= -\dfrac{Gm\lambda}{a} \int_{-\theta_\text{max}}^{\theta_\text{max}} \cos{\theta} d\theta \\ 
    &= -\dfrac{2Gm\lambda}{a}\sin{\theta_\text{max}}
\end{align*}
$$

Perceba que para encontrar $F_y$ teremos que integrar num intervalo $[-\theta_\text{max}, \theta_\text{max}]$. Esse ângulo pode ser facilmente determinado também por uma relação trigonométrica num triângulo formado pela massa $m$, pela altura $a$ e uma das extremidades da barra. 

Como $\sin{\theta}_\text{max} = \dfrac{L}{\sqrt{a^2+L^2}}$ , a integral resulta finalmente em: 

$$
F_y = -\dfrac{2Gm\lambda}{a} \cdot \dfrac{L}{\sqrt{a^2+L^2}} = -\dfrac{GMm}{a\sqrt{a^2 + L^2}}
$$

Por fim, note que ao tomarmos $a \to \infty$, será o equivalente físico de $L \to 0$ o que nos fornecerá 

$$
F_y = -\dfrac{GMm}{a^2}
$$

que é a expressão da gravitação universal entre duas massas pontuais. Interessante, não? 

</aside>

<aside>

<b>Solução 2.</b> A resolução deste problema é bem similar ao anterior. Ao invés de introduzir ângulos logo no início, vamos primeiramente tratar a integral em $dL$ e depois introduzir $\theta$ por substituições trigonométricas. 

Pela gravitação universal: 

$$
dF = -\dfrac{GmdM}{L^2 + a^2} = -\dfrac{Gm\lambda dL}{L^2 + a^2}
$$

Como a força resultante será apenas no eixo vertical, fazemos: 

$$
dF_y = dF \cos{\theta} = -\dfrac{Gm\lambda dL}{L^2 + a^2}\cos{\theta}
$$

Logo, 

$$
F_y = \int_{-\infty}^{\infty} -\dfrac{Gm\lambda dL}{L^2 + a^2}\cos{\theta}
$$

Fazendo a substituição trigonométrica $L = a\tan{\theta}$, temos $dL = a\sec^2{\theta}d\theta$. Substituindo na integral anterior e ajustando seus limites de integração em razão da mudança de variável ($L \to \infty \implies \theta \to \pi/2$): 

$$
\begin{align*}
F_y &= -Gm\lambda\int_{-\pi/2}^{\pi/2} \dfrac{a\sec^2{\theta}d\theta}{a^2\tan^2{\theta}+a^2} \\

&= -Gm\lambda \int_{-\pi/2}^{\pi/2} \cos{\theta}d\theta \\

&= \boxed{-\dfrac{2Gm\lambda}{a}}
    
\end{align*}
$$

</aside>

<aside>

<b>Solução 3.</b> Considerando $h$ como a distância de $m$ até um elemento de massa do anel, temos: 

$$
dF = -\dfrac{GmdM_\text{anel}}{h^2} = -\dfrac{Gm\rho dA}{a^2 + r^2}
$$

Como as componentes horizontais de cada elemento de força irão se cancelar — como consequência da simetria do problema — convém levar em conta a projeção vertical de cada $dF$. 

$$
dF_y = -\dfrac{Gm\rho dA}{a^2 + r^2} \cos{\theta} \implies F_y = -\dfrac{Gm\rho\cos{\theta}}{a^2 + r^2}\int_{0}^{A} dA = -\dfrac{GmM_\text{anel}}{a^2 + r^2}\cos{\theta}
$$

Portanto, temos que a magnitude $F = F_y$ exercida sobre a massa $m$ é da forma 

$$
F = -\dfrac{GmM_\text{anel}}{a^2 + r^2} \cos{\theta}
$$

com $\cos{\theta}$ sendo o ângulo formado pela altura da massa e pela reta que une a massa ao anel.

</aside>

<aside>

<b>Solução 4.</b> Dada a expressão para a atração gravitacional exercida por um disco, podemos encontrar a resposta para um disco de raio $R$ pela sua decomposição em muitos pequenos anéis de área $dA = 2\pi r dr$.

Logo: 

$$
\begin{align*}
    F &= \int_{0}^{R} -\dfrac{Gm\rho 2\pi r dr}{a^2 + r^2}\cos{\theta} \\ 
      &= \int_{0}^{R} -\dfrac{Gm\rho 2\pi r dr}{a^2 + r^2} \cdot \dfrac{a}{\sqrt{a^2 + r^2}} \\ 
      &= -Gm\rho a 2\pi \int_{0}^{R} \dfrac{r}{(a^2+r^2)^{3/2}} dr 
\end{align*}
$$

Tomando $u = a^2 + r^2 \implies du = 2rdr \implies dr = \dfrac{du}{2r}$, temos: 

$$
\begin{align*}
    F &= -Gm\rho a \pi \int_{a^2}^{a^2 + R^2} \dfrac{1}{u^{3/2}} \ du \\ 
      &= -Gm\rho a \pi \left[-2u^{-1/2}\right]^{a^2 + R^2}_{a^2} \\ 
      &= -2\pi Gm \rho \left(1 - \dfrac{a}{\sqrt{a^2 + R^2}}\right) 
\end{align*}
$$

Consequente, nas condições do problema, um disco uniforme de raio $R$ exerce uma atração gravitacional $\vec{F}$ vertical de módulo:

$$
F = -2\pi Gm \rho \left(1 - \dfrac{a}{\sqrt{a^2 + R^2}}\right) 
$$

Ao considerarmos um disco de raio infinito, isto é, tomando $R \to \infty$, vemos que a expressão para $F$ se reduz a: 

$$
F = -2\pi Gm\rho
$$

Ou seja, a altura $a$ da massa em relação a superfície torna-se desprezível para a força resultante sobre ela. Esta é a razão pela qual podemos aproximar a aceleração gravitacional como uniforme em situações nas proximidades da superfície terrestre, pois para objetos suficientemente pequenos, a Terra assemelha-se a um plano infinito enquanto os objetos tomam a posição de massas pontuais.

</aside>

# Referências

1. FEYNMAN, Richard P., Matthew L. Sands, and Robert B. Leighton. 1989. The Feynman Lectures on Physics. Reading, Mass: Addison-Wesley. Chapter 07: The Theory of Gravitation (<a target="_blank" href="https://www.feynmanlectures.caltech.edu/I_07.html">Acesse aqui</a>)
2. FITZPATRICK, Richard. Kepler's Third Law (<a target="_blank" href="https://farside.ph.utexas.edu/teaching/336k/Newton/node41.html">Acesse aqui</a>)
3. APOSTOL, Tom M., 2ª ed (1967). John Wiley & Sons. Chapter 14: Calculus of Vector-valued Functions. Unit 14.20: Applications to Planetary Motion.
4. CORREIA, Breno de Carvalho et al. <i>Astronomia Olímpica</i>. 1ª ed. (2021). Núcleo Olímpico de Incentivo ao Conhecimento (NOIC). (<a href="https://noic.com.br/wp-content/uploads/2026/02/Astronomia_Olimpica-1.3.2.pdf" target="_blank">Acesse aqui</a>)
5. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 1: mecânica. 5. ed. São Paulo: Blucher, 2013