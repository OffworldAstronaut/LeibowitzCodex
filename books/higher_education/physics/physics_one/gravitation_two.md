# Gravitação II

# A gravitação universal

A <b>lei da gravitação universal</b> foi, sem dúvida, uma das grandes conquistas da vida acadêmica de Isaac Newton, unindo cientificamente a mecânica terrestre e a mecânica celeste, desde muito tempo separadas pela cosmologia aristotélica. 

Esse importante resultado pode ser derivado novamente por meio de álgebra, suas leis e algumas observações astronômicas. 

Para iniciar, imagine um corpo de massa $M$ na superfície terrestre, sujeito a uma aceleração $\vec{g}$. 

A Lua nos fornece a possibilidade de demonstrar a dimensão universal da força gravitacional, que é experienciada tanto na Terra como no céu. Sabendo-se o raio da Terra e a duração dos eclipses lunares, além da dimensão da lua (a partir dos eclipses solares), é possível deduzir o raio da orbita deste satélite, que assume o valor de $R_L = 3.8 \cdot 10^8 \text{ m}$. 

A partir desses dados, pode-se concluir que a aceleração centrípeta experienciada pela Lua em seu movimento circular uniforme ao redor da Terra é de $a_{cp} = 2.7\cdot10^{-3} \text{m/s}^2$. 

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

Como finalizar nosso cálculo, sabendo que $s$ varia com $\theta$? Podemos explicitar essa relação por meio da leis dos cossenos aplicada no triângulo cujos vértices são o ponto $P$, o centro da casca e um ponto qualquer de um anel. 

$$
s^2 = a^2 + r^2 - 2ar\cos{\theta} \implies 2s\dfrac{ds}{d\theta} = 2ar\sin{\theta} \therefore ar\dfrac{\sin{\theta}}{s}d\theta = ds
$$

Perceba que mudar nossa variável de integração para $s$ nos permite facilitar a operação consideravelmente. 

Assim, encontrando os novos limites de integração: 

$$
\begin{align*}
    \theta &= 0 \implies s^2 = s^2_\text{min} = (r-a)^2 \\ 
    \theta &= \pi \implies s^2 = s^2_\text{max} = (r+a)^2 
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
\vec{F_H} = -G' M_1M_2r\hat{r}
$$
<!-- G tem dimensões para a gravitação usual, sendo que a força dá sempre em Newton, e portanto uma análise dimensional em ambos os lados deve ser feita. [G']= [G]/m³-->
onde $r = ||\vec{r}||$ e $\vec{r}$ é o vetor raio entre as massas $M_1$ e $M_2$ e $G'$ é uma constante análoga a $G$ para manter a dimensionalidade. Além disso, $\hat{r} = \dfrac{\vec{r}}{r}$. 

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
v_H = \sqrt{r \cdot \left(\dfrac{G'Mmr}{m}\right)} = r\sqrt{G'M}
$$

Logo, temos que no caso hookeriano, a velocidade orbital é maior em relação ao caso newtoniano por um fator proporcional $r\sqrt{r}$. E nos períodos? 

Pela relação do período exposta acima, podemos ver que, no caso newtoniano vale: 

$$
T_N = \dfrac{2\pi r}{v} = \dfrac{2 \pi r}{\sqrt{\dfrac{GM}{r}}} = \dfrac{2\pi r^2 \sqrt{\dfrac{GM}{r}}}{GM}
$$

Por outro lado, o período no caso hookeriano é: 

$$
T_H = \dfrac{2\pi r}{r\sqrt{G'M}} = \dfrac{2\pi \sqrt{G'M}}{G'M}
$$

Já perceba que o periodo orbital no caso hookeriano não depende do raio da órbita: todos os planetas moveriam-se ao redor do Sol com a mesma velocidade angular, completando voltas ao mesmo tempo! 

Qual a razão dos períodos, portanto? 

$$
\dfrac{T_N}{T_H} =\dfrac{\dfrac{2\pi r^2 \sqrt{\dfrac{GM}{r}}}{GM}}{\dfrac{2\pi \sqrt{G'M}}{G'M}} =r^{3/2}\sqrt{\dfrac{G'}{G}} \iff T_N \propto r^{3/2} \cdot T_H
$$ 
<!-- Esqueceu da análise dimensional! -->
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

A partir de $G$, pode-se utilizar de um corpo qualquer de massa $m$ na superfície terrestre para obter a densidade e a massa da Terra. Dessa forma, denotando por $M_{\oplus}$ a massa terrestre e por $\rho_{\oplus}$ a sua densidade, temos 

$$
mg = \dfrac{GmM_{\oplus}}{R_{\oplus}^2} \iff M_{\oplus} = \dfrac{gR_{\oplus}^2}{G} \iff \rho_{\oplus} = \dfrac{3g}{4\pi GR_{\oplus}}
$$

# Energias

A importância do estudo da energia no contexto da gravitação e da mecânica celeste é, conforme visto ao longo deste documento, de grande porte em razão da simplificação da análise de diversos problemas em comparação com uma abordagem puramente newtoniana, de forças. 

A conservação de energia mecânica no movimento dos astros no modelo newtoniano produz um gênero de equações que relacionam a velocidade dos corpos orbitantes com sua distância do corpo central — as equações <i>vis-viva</i>. <!-- Talvez valha reformular esta seção, está muito "simplesmente apresentada", sem demonstrações ou discussões com filosóficas crítica. Por exemplo, poderia ser discutido até "mas de onde vem essa energia? Um corpo realiza trabalho com a força gravitacional sobre outro, mas infinitamente? Nada é gasto (no sentido de transformação) ao realizar esse trabalho? Essa 'energia potencial gravitacional' fica em algum lugar, ou é puramente um artifício para a matemática? 'Porque é uma força de campo, assim como no eletromagnetismo', não é uma resposta convicente, tampouco que responde algo, pois somente define algo que também precisaríamos discutir melhor. Então como se dá essa força, verdadeiramente? O que a massa tem a ver com isso? Talvez a definição de massa tenha que ser debatida (tal da diferença ou igualdade entre a massa inercial e a massa gravitaional)? Por que cai com o quadrado da distancia, falando nisso?". Há muitas questões que poderiam ter sido discutidas aqui, que combinam com o estilo/singularidade autoral. -->

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

## Velocidade de escape e raio de Schwarzschild

Definimos a <b>velocidade de escape</b> $v_\text{esc}$ como a velocidade mínima necessária para que a órbita de um corpo se torne aberta, isto é, parabólica — o corpo orbitante irá se afastar indefinidamente do corpo central. 

Para encontrar uma relação para essa velocidade, podemos considerar a seguinte situação: imagine um corpo $m$ a uma distância $r$ de $M$ possuindo uma velocidade inicial $v_0$. No caso em que $v_0 = v_\text{esc}$, $m$ irá realizar uma órbita aberta até chegar a uma distância infinitamente longe, com velocidade nula.

Pela conservação de energia, temos então: 

$$
v_\text{esc} = \sqrt{\dfrac{2GM}{r}}
$$

Pela relatividade geral de Albert Einstein, sabemos que a velocidade da luz é a mais alta que pode ser alcançada. Substituindo esta velocidade na equação anterior e resolvendo para $r$, encontramos uma expressão para o chamado <b>raio de Schwarzschild</b>. 

O raio de Schwarzschild é o raio do horizonte de eventos de um buraco negro de massa $M$. Consequentemente, esta expressão fornece o raio mínimo necessário para que um determinado corpo de massa $M$ seja transformado num buraco negro. 

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

<aside>

<b>Problema 5.</b> Considere uma massa $m$ posicionada a uma distância $r_0$ de uma das extremidades de uma barra massa $M$, comprimento $L$ e densidade uniforme $\rho$. Qual a força gravitacional que a barra exerce na massa? 

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

Consequentemente, nas condições do problema, um disco uniforme de raio $R$ exerce uma atração gravitacional $\vec{F}$ vertical de módulo:

$$
F = -2\pi Gm \rho \left(1 - \dfrac{a}{\sqrt{a^2 + R^2}}\right) 
$$

Ao considerarmos um disco de raio infinito, isto é, tomando $R \to \infty$, vemos que a expressão para $F$ se reduz a: 

$$
F = -2\pi Gm\rho
$$

Ou seja, a altura $a$ da massa em relação a superfície torna-se desprezível para a força resultante sobre ela. Esta é a razão pela qual podemos aproximar a aceleração gravitacional como uniforme em situações nas proximidades da superfície terrestre, pois para objetos suficientemente pequenos, a Terra assemelha-se a um plano infinito enquanto os objetos tomam a posição de massas pontuais.

</aside>

<aside>

<b>Solução 5.</b> Como a barra é de densidade uniforme, podemos escrever $dM = \rho dr$. Assim, a atração gravitacional exercida sobre a massa $m$ por um elemento de massa $dM$ da barra é de intensidade

$$
dF = -\dfrac{GmdM}{r^2} = -\dfrac{Gm\rho dr}{r^2}
$$

Para encontrar a totalidade da atração, basta integrar no intervalo $[r_0, r_0 + L]$: 

$$
\begin{align*}
    F = \int_{r_0}^{r_0 + L} -\dfrac{Gm\rho dr}{r^2} &= -Gm\rho\int_{r_0}^{r_0 + L} \dfrac{1}{r^2} \ dr \\ 
    &= -Gm\rho \left[-r^{-1}\right]_{r_0}^{r_0 + L} \\ 
    &= -Gm\rho \left(-\dfrac{1}{r_0+L} + \dfrac{1}{r_0} \right) \\ 
    &= -Gm\rho \left(\dfrac{L}{r_0(r_0 + L)}\right) \\ 
    &= -\dfrac{Gm\rho L}{r_0(r_0+L)} \\ 
    &= -\dfrac{GMm}{r_0(r_0+L)}
\end{align*}
$$

</aside>

# Referências

1. FEYNMAN, Richard P., Matthew L. Sands, and Robert B. Leighton. 1989. The Feynman Lectures on Physics. Reading, Mass: Addison-Wesley. Chapter 07: The Theory of Gravitation (<a target="_blank" href="https://www.feynmanlectures.caltech.edu/I_07.html">Acesse aqui</a>)
2. FITZPATRICK, Richard. Kepler's Third Law (<a target="_blank" href="https://farside.ph.utexas.edu/teaching/336k/Newton/node41.html">Acesse aqui</a>)
3. APOSTOL, Tom M., 2ª ed (1967). John Wiley & Sons. Chapter 14: Calculus of Vector-valued Functions. Unit 14.20: Applications to Planetary Motion.
4. CORREIA, Breno de Carvalho et al. <i>Astronomia Olímpica</i>. 1ª ed. (2021). Núcleo Olímpico de Incentivo ao Conhecimento (NOIC). (<a href="https://noic.com.br/wp-content/uploads/2026/02/Astronomia_Olimpica-1.3.2.pdf" target="_blank">Acesse aqui</a>)
5. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 1: mecânica. 5. ed. São Paulo: Blucher, 2013