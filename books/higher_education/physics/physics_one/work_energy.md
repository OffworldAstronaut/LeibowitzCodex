# Trabalho e Energia

# Definição

---

O que é **trabalho**? Este conceito está intimamente ligado a conceitos como <b>energia</b> ou <b>força</b>. De fato, sempre que nos referimos a um trabalho, consideramos ele como algo atrelado a uma força que o realiza (trabalho "de" uma força). 
Para ilustrar esta grandeza, podemos recorrer a situação de um corpo num plano inclinado. 

De maneira formal, definimos o trabalho realizado por uma força $\vec{F}$ sobre um certo corpo em um deslocamento $\vec{x} = \vec{x_2} - \vec{x_1}$ como a integral 

$$
W = \int_{x_1}^{x_2} \vec{F} \cdot \vec{x} \ dx
$$

que, ao considerarmos $\vec{F}$ constante ao longo do movimento, torna-se simplesmente $W = \vec{F} \cdot \vec{x}$. Pela interpretação geométrica do produto escalar no espaço cartesiano, é possível enxergar o trabalho como sendo uma espécie de quantificação da "contribuição" da força $\vec{F}$ ao deslocamento através de sua componente paralela a este. 

Se nos atermos simplesmente ao caso unidimensional, temos ainda que $W = F \cdot x$. O sinal da grandeza nos fornece a informação se a força está atuando em prol, contra ou indiferentemente ao deslocamento. 

# Teorema Trabalho-Energia Cinética

--- 

O <b>teorema trabalho-energia cinética</b> relaciona o trabalho realizado sobre um corpo, por uma força, com uma nova grandeza denominada <b>energia cinética</b>. Para compreendermos melhor, vamos imaginar que no sopé deste plano inclinado (retratado abaixo) temos um bloquinho que é lançado no trilho por uma mola. Desconsiderando o atrito e todas as outras forças que não sejam a força peso, o bloquinho avança com uma velocidade inicial $\vec{v_0}$ que diminui ao longo do tempo. 

![Plano inclinado](images/work_energy/work_energy_planoinclinado.jpeg)

<i>Acima podemos ver um plano inclinado utilizado em universidades do século XVIII (Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Piano_inclinato_inv_1041_IF_21341.jpg">Wikimedia Commons</a>).</i>

Como este corpo está num estado de movimento retilíneo uniformemente variado, podemos utilizar as equações a seguir para descrever sua dinâmica.

$$
\begin{align*}
x(t) &= x_0 + v_0 \cdot t + \dfrac{at^2}{2} \\\\
v_1 &= v_0 + at
\end{align*}
$$

Escrevendo a variável $t$ em função das outras na segunda equação e substituindo na primeira, podemos encontrar a <b>equação de Torricceli</b>. Rearranjando os termos desta equação, podemos chegar numa expressão que indica que algo se mantém constante ao longo de todo o movimento. Esta nova expressão pode ser rearranjada novamente para uma forma reduzida.

$$
\begin{align*}
    \dfrac{1}{2}v_2^2 - ax_2 &= \dfrac{1}{2}v_1^2 - ax_1 \\\\
    \dfrac{1}{2}(\Delta v)^2 &= a \Delta x 
\end{align*}
$$

Multiplicando ambos os membros da segunda por $m$, a massa do objeto, substituindo $F=ma$ e rearranjando os termos, obtemos: 

$$
F \Delta x = \dfrac{1}{2}mv_1^2 - \dfrac{1}{2}mv_0^2
$$

Perceba que a atuação da força gravitacional enquanto o bloquinho sobe o plano inclinado provoca a variação de uma grandeza que depende apenas da massa e da velocidade deste bloquinho. A esta grandeza damos o nome <b>energia cinética</b> e, geralmente, a denotamos por $K$. Rearranjando esta expressão, podemos exprimi-la em função do momento, chegando na expressão $\dfrac{p^2}{2m}$. 

Perceba ainda que esta atuação, quantificada, corresponde ao <b>trabalho da força $F$</b> pela nossa definição matemática inicial na primeira seção. A este resultado damos o nome de <b>teorema trabalho-energia cinética</b> ou simplesmente <b>teorema trabalho-energia</b> e, por consequência, fundamentamos a noção de que trabalho <i>é</i> energia sendo transferida de um sistema para outro por meio de uma força através de um deslocamento.

com efeito, o teorema trabalho-energia cinética é geralmente escrito combinando estas duas informações numa única equação 

$$
\int_{x_1}^{x_2} \vec{F} \cdot \vec{x} = \Delta K
$$

<aside>

que relaciona o trabalho de uma força e a variação de energia cinética sofrida por um corpo.

O conceito de energia é algo extremamente difícil de se definir de forma fechada em razão de seu elevadíssimo nível de abstração, entretanto, a dedução acima nos dá uma brecha de como enxergá-la: uma propriedade quantitativa de um sistema que pode ser transferida, com esta transferência sendo descrita como "sofrer" ou "exercer trabalho" e podendo ser identificada por meio de fenômenos como irradiação de calor ou emissão de luz. 

</aside>

<aside>

<i>"It is important to realize that in physics today, we have no knowledge of what energy is. We do not have a picture that energy comes in little blobs of a definite amount. It is not that way. However, there are formulas for calculating some numerical quantity, and when we add it all together it gives [...] always the same number. It is an abstract thing in that it does not tell us the mechanism or the reasons for the various formulas." <br><br>(FEYNMAN, Lectures on Physics Vol. 1, Cap. 4)</i>

</aside>

## Energia potencial e conservação de energia

Uma motivação para o conceito de **energia potencial** vem de um dos passos que tomamos para a definição da energia cinética. Vamos revisitá-lo: a **constante de movimento** com ambos os membros multiplicados por $m$. 

$$
\dfrac{1}{2}mv_2^2 - m \cdot ax_2 = \dfrac{1}{2}mv_1^2 - m \cdot ax_1
$$

Perceba que os termos que dependem da velocidade são a nossa conhecida **energia cinética**, mas e os outros dois? Essa nova grandeza não depende da velocidade de um corpo, mas sim de sua **posição**.

Dessa forma, é possível reescrever essa equação em termos de suas funções $T(v)$ e $U(x)$. A essa soma, chamamos **energia mecânica total** do sistema, e à grandeza que depende da posição, **energia potencial**.

$$
T(v_2) + U(x_2) = T(v_1) + U(x_1)
$$

<aside>

O termo energia "potencial", de fato, faz uma referência ao conceito de "ato" e "potência" de Aristóteles. Temos uma energia no sistema que "não se concretizou", mas existe como uma "possibilidade de entrar em ação". 

</aside>

Esse princípio, enunciado na equação acima, é chamado de **conservação da energia**, com os sistemas que o obedecem chamados **sistemas conservativos**. Vale mencionar que em hipótese alguma a energia é "destruída" se ela não for conservada, ela apenas se dissipa para fora do sistema estudado. 

Dessa base também é possível definir o que chamamos de **forças conservativas**, isto é, forças cuja atuação depende apenas da **posição de um corpo** e nunca de sua velocidade. Para essas forças, é possível traçar a relação: 

$$ 
W = \int F \ dx= - \Delta U
$$

<aside>

Podemos justificar essa expressão ao escrever $E = T + U$, derivar a equação em relação ao tempo e reorganizar os termos. 

</aside>

Por exemplo, sabendo que a força peso é escrita da forma $F=mg$, sua energia potencial associada (gravitacional) pode ser encontrada a partir de algumas operações. Vamos dizer que estamos comparando dois pontos, $x_1$ e $x_2$, a uma altura $x$ um do outro.

$$
\begin{align*}
    \int_{x_1}^{x_2} F \ dx &= mg(x_2 - x_1) = -\Delta U \\\\
    &= \Delta U = -mg(x_2 - x_1)
\end{align*}
$$

Dessa forma, definindo $x_2 - x_1 = h$, nossa altura,  conseguimos demonstrar a tão conhecida $U(h) = mgh$. 

Retornando à distinção entre forças conservativas e não-conservativas (também chamadas de forças **dissipativas**), uma diferença notável entre as duas encerra-se no trabalho: o trabalho de uma força conservativa independe do caminho atravessado pelo móvel, mas apenas das suas posições iniciais e finais. O contrário é dito das dissipativas, em que a "trajetória", a "história" do móvel importa. 

Como exemplos de forças conservativas, podemos citar, além da força peso, a força elástica e a força elétrica.

## Potência

---

Definimos a grandeza **potência** como a **taxa da realização de trabalho ao longo do tempo** de uma força. Como foi demonstrado pelo Teorema anterior, é possível também descrevê-la como a **taxa de transferência energética** de uma força.

Durante o ensino médio, entramos em contato com a chamada **potência média**, definida por:

$$
P_{M} = \dfrac{\Delta W}{\Delta t}
$$

Entretanto, a chamada **potência instantânea**, ou simplesmente **potência**, é expressa como a derivada do trabalho em relação ao tempo. Pelas propriedades do Cálculo, podemos também expressar o trabalho como a integral da potência.

$$
P = \dfrac{dW}{dt} \Longleftrightarrow  W = \int P \ dt
$$

## Gráficos de estabilidade

---

É possível representar um sistema físico a partir de um gráfico de sua energia potencial em função de sua posição, com tal representação sendo extremamente útil na análise de algumas situações, permitindo a extração de diversas informações. 

Um exemplo inicial simples é o de um objeto em queda livre (ou lançamento vertical). 

![Gráfico retirado do livro OpenStax University Physics (CC-BY-NC-SA)](images/work_energy/work_energy_potential_energy_freefall.png)

*Gráfico retirado do livro OpenStax University Physics (CC-BY-NC-SA).*

Perceba que o gráfico é uma linha reta de inclinação $mg$, com sua altura sendo sua energia potencial em uma dada posição e a "altura restante" até a reta assinalada sua **energia cinética**, com a soma dos dois comprimentos constante para todo $y \in [y_0, y_{max}]$. 

A partir do gráfico é possível encontrar a altura máxima, por exemplo: 

$$
\begin{align*}
    U(y_{max}) &= E - K(y_{max}) \\\\
    mg y_{max} &= E - \dfrac{1}{2}mv_f^2 \\\\ 
    E &= mg y_{max} \\\\
    \dfrac{E}{mg} &= y_{max}
\end{align*}
$$

Essa mesma relação pode ser explorada para encontrar a velocidade inicial, $v_0$, necessária para alcançar essa altura máxima. Vale notar se $v_0$ é a velocidade necessária para alcançar a altura máxima, $-v_0$ é a velocidade de encontro com o solo.

$$
\begin{align*}
    mgy_0 &= E - \dfrac{1}{2}mv_0^2 \\\\
    E &= \dfrac{1}{2}mv_0^2 \\\\
    v_0 &= \sqrt{\dfrac{2E}{m}}
\end{align*}
$$

Um outro exemplo, um pouco mais complexo, que pode ser analisado é o chamado **sistema massa-'mola'** simples, sem atrito nem qualquer tipo de força dissipativa. 

![Sistema massa mola](images/work_energy/work_energy_spring_mass_system.gif)

<i>Um sistema massa mola. Por Chetvorno, via <a href="https://commons.wikimedia.org/wiki/File:Animated-mass-spring-faster.gif" target="_blank">Wikimedia Commons</a>.</i>

Esse sistema é interessante por nos introduzir pela primeira vez ao chamado **poço de potencial**. Observando seu gráfico de energia potencial em função da posição do objeto conectado à mola, é possível deduzir todas as informações do sistema anterior. 

![](images/work_energy/work_energy_potential_graph_springmass.png)

*Gráfico retirado do livro OpenStax University Physics (CC-BY-NC-SA).*

O "poço de potencial" mencionado é a concavidade do gráfico: um sistema massa-mola com uma energia potencial $E$ nunca irá poder ter uma oscilação maior do que $x_{max}$, com todas as posições possíveis oscilando nessa parábola. 

<aside>
Experimente imaginar um gráfico de potencial diferente e explorar as limitações de movimento de um sistema, com base na sua energia inicial.
</aside>

# Referências 

---

1. <i>Playlist</i> de Física 1 da USP formada por aulas do prof. Dr. Marcelo Martinelli (<a target="_blank" href="https://www.youtube.com/playlist?list=PLAudUnJeNg4vmlyuv__uBgdOkzw4VSrcJ">Acesse aqui</a>).
2. LING, S. J. et al. University physics. Houston, Texas: Openstax, Rice University, 2018. v. 1 (<a target="_blank" href="https://openstax.org/details/books/university-physics-volume-1">Acesse aqui</a>).