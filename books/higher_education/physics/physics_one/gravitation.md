# Gravitação I

# Mecânica celeste

Como definição inicial, temos que <b>mecânica celeste</b> utiliza princípios físicos e propriedades matemáticas para explicar e prever os movimentos de todo corpo sujeito à ação da gravidade. Vamos começar pelo início.

Nossa história moderna começa entre a Idade Média e a Idade Moderna, no chamado Renascimento. Nesse período, compreendido entre os séculos XV e XVI, também figurou a chamada <b>Revolução Científica</b>, um período de rápida ruptura no modo de investigação do mundo natural, que se tornou mais matemática e empirista e menos filosófica, distanciando-se de suas origens greco-romanas.

O marco para o início da Revolução Científica são os estudos do sacerdote, médico, jurista e matemático polonês <!-- Mais abaixo é mencionado "O sacerdote polonês", sendo o Copérnico não havia sido apresentado com esses detalhes. Então adicionei. Para que não ficasse muito semelhante ao que foi citado abaixo, adicionei os outros cargos dele. --> Nicolau Copérnico, publicados em sua obra prima <i>De Revolutionibus Orbium Cœlestium</i> (Sobre a Revolução das Esferas Celestes). Copérnico argumentou que o modelo heliocêntrico, que colocava o Sol no centro do Universo, seria uma alternativa melhor ao modelo geocêntrico, que prevalecia desde a Antiguidade. 

![](https://upload.wikimedia.org/wikipedia/commons/2/28/Copernican_heliocentrism_diagram-2.jpg)

<i>Diagrama do modelo heliocêntrico por Nicolau Copérnico. Das órbitas mais internas para as mais externas, temos: Mercúrio, Vênus, Terra (com a Lua), Marte, Júpiter, Saturno e as Estrelas Fixas.</i>

O modelo geocêntrico de Ptolomeu vigorava desde o século II AD, baseando-se na noção de que os céus eram perfeitos e imutáveis e, portanto, os movimentos dos planetas seguiriam trajetórias circulares — o círculo era a forma geométrica perfeita para os gregos. Para explicar movimentos como os <b>retrógrados</b>, o modelo recorria aos chamados <b>epiciclos</b>, círculos matemáticos imaginários. <!--esferas cristalinas invisiveis entra na explicação fisica lá do aristóteles-->

![](https://upload.wikimedia.org/wikipedia/commons/c/c6/Epicycles.gif)

<i>Animação ilustrando um planeta orbitando a Terra no modelo ptolemaico. GIF sob domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Epicycles.gif" target="_blank">Wikimedia Commons</a>.</i>

Embora tenha sido satisfatório por muito tempo, o modelo geocêntrico tornou-se cada vez mais complexo para abarcar os comportamentos observados no céu. Copérnico percebeu que colocar o Sol no centro do Universo — ao invés da Terra — simplificava consideravelmente o modelo para o movimento planetário enquanto preservava os comportamentos já observados. O sacerdote polonês faleceu logo depois de publicar seu trabalho, com medo de ser ridicularizado por seus pares, em 1543.

# Tycho e Kepler

Um outro passo importante foi dado pelo astrônomo dinamarquês Tycho Brahe e seu assistente, o matemático oficial da Corte do Sacro Império Romano-Germânico, Johannes Kepler. <!-- Pesquisando aqui, Kepler não foi matemático da corte dinamarquesa, e sim do imperador Rodolfo II. Quem teve esse cargo foi o Tycho. --> Brahe havia observado o céu por cerca de duas décadas, meticulosamente registrando posições de planetas e estrelas ao longo de todo esse tempo. Kepler, então, um proponente fervoroso do heliocentrismo copernicano, se utilizou destes dados na composição de suas leis para o movimento planetário, hoje conhecidas como <b>Leis de Kepler</b>.

As leis de Kepler são três, dispostas abaixo. 

<aside>

<b>1ª Lei de Kepler (Lei das Órbitas)</b> — As trajetórias dos planetas são elipses com o Sol em um de seus focos.

![](https://upload.wikimedia.org/wikipedia/commons/9/97/Ellipitical_orbit_of_planet_with_an_eccentricty_of_0.5.gif)

<i>Animação de um planeta orbitando o Sol numa órbita de excentricidade igual a um meio. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Ellipitical_orbit_of_planet_with_an_eccentricty_of_0.5.gif" target="_blank">Wikimedia Commons</a>.</i>

</aside>

<aside>

<b>2ª Lei de Kepler (Lei das Áreas)</b> — Imagine um segmento de reta conectando um planeta ao Sol. A área varrida por este segmento será igual em intervalos de tempos iguais. Uma consequência desta lei é a constatação de que os planetas não se movem uniformemente, como pensado previamente, mas sim mais rapidamente ou mais lentamente à medida que estão mais próximos ou mais distantes do Sol.

![](https://upload.wikimedia.org/wikipedia/commons/6/69/Kepler-second-law.gif)

<i>Animação demonstrando a Lei das Áreas. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Kepler-second-law.gif" target="_blank">Wikimedia Commons</a>.</i>

</aside>

<aside>

<b>3ª Lei de Kepler (Lei dos Períodos)</b> — Os quadrados dos períodos de dois planetas quaisquer são proporcionais aos cubos dos semieixos maiores de suas respectivas órbitas. Por exemplo, dado um planeta A com período $T_A$ e semieixo maior $S_A$ e um planeta B com período $T_B$ e semieixo maior $S_B$, temos a relação
<!--Alguns conceitos foram misturados-->
$$ 
\dfrac{T_A^2}{T_B^2} = \dfrac{S_A^3}{S_B^3}
$$
Ou também, para um planeta qualquer
$$
\dfrac{T^2}{S^3}=k
$$

com $k$ sendo uma constante de proporcionalidade própria para cada sistema planetário.

![](https://upload.wikimedia.org/wikipedia/commons/9/98/Kepler_laws_diagram.svg)

<i>Diagrama ilustrando a terceira lei de Kepler para dois planetas. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Kepler_laws_diagram.svg" target="_blank">Wikimedia Commons</a>.</i>

</aside>

## Um pouco mais sobre elipses 

Embora as seções cônicas tenham sido suficientemente discutidas em <a href="/books/higher_education/math/analytical_geometry/conics.html" target="_blank"><i>De Sectiones Conicae</i></a>, cabe mencionar daqui em diante algumas informações e resultados interessantes e de verdadeira importância para a mecânica celeste. 

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

Galileu Galilei, físico, engenheiro, astronômo e matemático florentino, nasceu em 15 de fevereiro de 1564 <!-- pobre galileu, aqui estava que ele nasceu no dia da morte dele... --> e foi declarado como o Pai da Física Moderna. Catedrático da Academia de Pisa, desenvolveu as primeiras linhas que viriam a se tornar a mecânica clássica, fundamentando-a com talvez um de seus mais importantes conceitos, a <b>inércia</b>.

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
    \therefore \vec{r} \times \vec{a} &= \vec{r} \times \dfrac{d\vec{v}}{dt} + \dfrac{d\vec{r}}{dt} \times \vec{v} \\ 
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

Dessa forma, pela equação anterior, além de que $\vec{c} = \vec{r} \times \vec{v} = r^2 \dfrac{d\theta}{dt}\hat{r} \times \dfrac{d\hat{r}}{d\theta}$, podemos fazer o produto escalar de ambos os membros da primeira equação por $\vec{c}$ e da segunda equação por $\vec{r}$. 

Reorganizando e igualando ambas expressões resultantes para eliminar o termo $\vec{r} \cdot \vec{v} \times {c}$, chegamos na equação 

$$
GMr(1 + e \cos{\phi}) = c^2
$$

com $e = ||\vec{e}||$, $c = ||\vec{c}||$ e $\phi$ o ângulo entre os vetores $\vec{e}$ e $\vec{r}$. 

Fazendo $d = \dfrac{c^2}{GMe}$, obtemos finalmente 

$$
r = \dfrac{ed}{e\cos{\phi}+1} \iff r = e(d - r\cos{\phi})
$$

Uma equação de uma seção cônica de excentricidade $e$ e foco no sol. Note que $\phi$ é justamente a anomalia verdadeira discutida anteriormente, comparando as duas fórmulas, em que $ed$ corresponde ao $a(1-e^2)$. Assim, está demonstrada a primeira lei de Kepler.

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

Por outro lado, dois casos interessantes colocaram a Gravitação Universal à prova. Vamos começar pelo mais antigo, que ocorreu em 1676, em observações de Júpiter. 

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

<aside>

Clique <a href="/books/higher_education/physics/physics_one/gravitation_two.html" target="_blank" target="_blank">aqui</b> para ir para o segundo volume.

</aside>

# Referências

1. FEYNMAN, Richard P., Matthew L. Sands, and Robert B. Leighton. 1989. The Feynman Lectures on Physics. Reading, Mass: Addison-Wesley. Chapter 07: The Theory of Gravitation (<a target="_blank" href="https://www.feynmanlectures.caltech.edu/I_07.html">Acesse aqui</a>)
2. FITZPATRICK, Richard. Kepler's Third Law (<a target="_blank" href="https://farside.ph.utexas.edu/teaching/336k/Newton/node41.html">Acesse aqui</a>)
3. APOSTOL, Tom M., 2ª ed (1967). John Wiley & Sons. Chapter 14: Calculus of Vector-valued Functions. Unit 14.20: Applications to Planetary Motion.
4. CORREIA, Breno de Carvalho et al. <i>Astronomia Olímpica</i>. 1ª ed. (2021). Núcleo Olímpico de Incentivo ao Conhecimento (NOIC). (<a href="https://noic.com.br/wp-content/uploads/2026/02/Astronomia_Olimpica-1.3.2.pdf" target="_blank">Acesse aqui</a>)
5. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 1: mecânica. 5. ed. São Paulo: Blucher, 2013