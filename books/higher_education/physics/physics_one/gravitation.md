# Gravitação 

# Mecânica celeste

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

Puramente observacionais, os desenvolvimentos de Kepler não se preocupavam com a dinâmica dos astros, isto é, por quais causas que estes se moviam. Isto mudou a partir dos estudos de Galileu Galilei e Isaac Newton.

# Galileu e Newton

Galileu Galilei, físico, engenheiro, astronônomo e matemático florentino, nasceu em 8 de janeiro de 1642 e foi declarado como o Pai da Física Moderna. Catedrático da Academia de Pisa, desenvolveu as primeiras linhas que viriam a se tornar a mecânica clássica, fundamentando-a com talvez um de seus mais importantes conceitos, a <b>inércia</b>.

Isaac Newton, baseando-se em Galileu, argumentou que os planetas não necessitavam de uma força tangencial para continuarem seu movimento ao redor do Sol, mas sim de uma força <b>em direção a ele</b> para que estes não escapassem pela tangente. Denominamos sua lei de <b>Gravitação Universal</b> pois, como <a href="/books/higher_education/physics/physics_one/newtons_laws.html" target="_blank">detalhado anteriormente</a>, Newton unificou a mecânica celeste com a terrestre, sujeitas às mesmas leis de movimento. 

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

Tudo isto ocorreu em 1846, sendo uma sensação no mundo científoc da época. Curiosamente, Galileu já havia observado o planeta no século XVII, mas o confundiu com uma simples estrela fixa.

Essas observações atestavam que, de fato, a força gravitacional atua em distâncias na escala de nosso sistema solar. E na escala interestelar? Entre galáxias? Qual o limite da interação gravitacional entre corpos? Observações como sistemas de estrelas binárias, aglomerados globulares, galáxias e aglomerados de galáxias mostraram que, de fato, não há limite conhecido para a atuação da força gravitacional, embora esta interação se torne desprezível para corpos distantes o suficiente. 

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

# Referências

1. FEYNMAN, Richard P., Matthew L. Sands, and Robert B. Leighton. 1989. The Feynman Lectures on Physics. Reading, Mass: Addison-Wesley. Chapter 07: The Theory of Gravitation (<a target="_blank" href="https://www.feynmanlectures.caltech.edu/I_07.html">Acesse aqui</a>)
2. FITZPATRICK, Richard. Kepler's Third Law (<a target="_blank" href="https://farside.ph.utexas.edu/teaching/336k/Newton/node41.html">Acesse aqui</a>)
3. APOSTOL, Tom M., 2ª ed (1967). John Wiley & Sons. Chapter 14: Calculus of Vector-valued Functions. Unit 14.20: Applications to Planetary Motion.