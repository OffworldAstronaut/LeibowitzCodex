# Trabalho e energia

# Definição

O que é <b>trabalho</b>? Esta pergunta está intimamente ligada a conceitos como <b>energia</b>[^1] e <b>força</b>. De fato, sempre que nos referimos a um trabalho, consideramos ele como algo atrelado a uma força que o realiza (trabalho "de" uma força). 

De maneira formal, definimos o trabalho realizado por uma força $\vec{F}$ sobre um certo corpo em um deslocamento $\vec{x} = \vec{x_2} - \vec{x_1}$ como a integral 

$$
W = \int_{x_1}^{x_2} \vec{F} \cdot \vec{x} \ dx
$$

que, ao considerarmos $\vec{F}$ constante ao longo do movimento, torna-se simplesmente $W = \vec{F} \cdot \vec{x}$. Pela interpretação geométrica do produto escalar no espaço cartesiano, é possível enxergar o trabalho como sendo uma espécie de quantificação da contribuição da força $\vec{F}$ ao deslocamento através de sua componente paralela a este. 

![](https://upload.wikimedia.org/wikipedia/commons/9/95/Men_pushing_a_car_carrying_water_melons.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Uma consequência desse princípio pode ser visualizada no cotidiano: é bem mais fácil empurrar um carro por trás do que pelos lados. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Men_pushing_a_car_carrying_water_melons.jpg" target="_blank">Wikimedia Commons</a>.</i>

Se nos atermos simplesmente ao caso unidimensional, temos ainda que $W = F \cdot x$. O sinal da grandeza nos fornece a informação se a força está atuando em prol, contra ou indiferentemente ao deslocamento. 

# Teorema trabalho-energia cinética

O <b>teorema trabalho-energia cinética</b> relaciona o trabalho realizado sobre um corpo, por uma força, com uma nova grandeza denominada <b>energia cinética</b>. Para compreendermos melhor, vamos imaginar que no sopé deste plano inclinado (retratado abaixo) temos um bloquinho que é lançado no trilho por uma mola. Desconsiderando o atrito e todas as outras forças que não sejam a força peso, o bloquinho avança com uma velocidade inicial $\vec{v_0}$ que diminui ao longo do tempo. 

![Plano inclinado](https://upload.wikimedia.org/wikipedia/commons/7/76/Piano_inclinato_inv_1041_IF_21341.jpg)

<i>Acima podemos ver um plano inclinado utilizado em universidades do século XVIII (Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Piano_inclinato_inv_1041_IF_21341.jpg">Wikimedia Commons</a>).</i>

Como este corpo está num estado de movimento retilíneo uniformemente variado, podemos utilizar as equações a seguir para descrever sua dinâmica.

$$
\begin{align*}
x(t) &= x_0 + v_0 \cdot t + \dfrac{at^2}{2} \\
v_1 &= v_0 + at
\end{align*}
$$

Escrevendo a variável $t$ em função das outras na segunda equação e substituindo na primeira, podemos encontrar a <b>equação de Torricceli</b>. Rearranjando os termos desta equação, podemos chegar numa expressão que indica que algo se mantém constante ao longo de todo o movimento. Esta nova expressão pode ser rearranjada novamente para uma forma reduzida.

$$
\begin{align*}
    \dfrac{1}{2}v_2^2 - ax_2 &= \dfrac{1}{2}v_1^2 - ax_1 \\
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

que relaciona o trabalho de uma força e a variação de energia cinética sofrida por um corpo. Medimos esta nova grandeza por uma unidade derivada da unidade de força e de deslocamento, o <b>Joule</b> $(\text{J})$. O Joule é definido como o produto entre Newton e metro, com seu nome homenageando o físico inglês James Joule.

<blockquote>
  <p>É importante perceber que na Física da atualidade não temos conhecimento algum do que é energia. Não temos uma fotografia que nos diga que a energia vêm em pequenas bolinhas de tamanho definido — não é dessa maneira. Entretanto, existem fórmulas que nos permitem calcular alguma quantia numérica [...] que sempre nos fornece o mesmo número. [A energia] é algo abstrato no sentido de que esta não nos fornece nenhuma justificativa ou informação sobre o mecanismo subjacente às fórmulas.[^2]</p>
  <cite>Richard Feynman</cite>
</blockquote>

## Energia potencial e conservação de energia

Uma motivação para o conceito de <b>energia potencial</b> vem de um dos passos que tomamos para a definição da energia cinética. 

Vamos revisitar a <b>constante de movimento</b> com ambos os membros multiplicados por $m$:

$$
\dfrac{1}{2}mv_2^2 - max_2 = \dfrac{1}{2}mv_1^2 - max_1
$$

Perceba que os termos que dependem da velocidade são a nossa conhecida <b>energia cinética</b>, mas e os outros dois? Essa nova grandeza não depende da velocidade de um corpo, mas sim de sua <b>posição</b>.

Dessa forma, é possível reescrever essa equação em termos de suas funções $T(v)$ e $U(x)$. A essa soma, chamamos <b>energia mecânica total</b> do sistema, e à grandeza que depende da posição, <b>energia potencial</b>[^4].

$$
T(v_2) + U(x_2) = T(v_1) + U(x_1)
$$

Esse princípio, enunciado na equação acima, é chamado de <b>conservação da energia</b>, com os sistemas que o obedecem chamados <b>sistemas conservativos</b>. Vale mencionar que em hipótese alguma a energia é "destruída" se ela não for conservada, ela apenas se dissipa para fora do sistema estudado. 

Dessa base também é possível definir o que chamamos de <b>forças conservativas</b>, isto é, forças cuja atuação depende apenas da <b>posição de um corpo</b> e nunca de sua velocidade. Para essas forças, é possível traçar a relação: 

$$ 
W = \int F \ dx  = - \Delta U
$$

Por fim, perceba que desta relação é possível escrever a energia potencial num ponto $P$ por meio da integral 

$$
U(P) = - \int_{P_0}^{P} F \ dx
$$

com $U(P_0) = 0$. De fato, a energia potencial de um corpo num ponto é apenas o trabalho necessário para movê-lo de uma dada posição de referência até este ponto. Podemos justificar essa expressão ao escrever $E = T + U$, derivar a equação em relação ao tempo e reorganizar os termos. 

Por exemplo, sabendo que a força peso é escrita da forma $F=mg$, sua energia potencial associada (gravitacional) pode ser encontrada a partir de algumas operações. Vamos dizer que estamos comparando dois pontos, $x_1$ e $x_2$, a uma altura $x$ um do outro.

$$
\begin{align*}
    \int_{x_1}^{x_2} F \ dx &= mg(x_2 - x_1) = -\Delta U \\
    &= \Delta U = -mg(x_2 - x_1)
\end{align*}
$$

Dessa forma, definindo $x_2 - x_1 = h$, nossa altura,  conseguimos demonstrar a tão conhecida $U(h) = mgh$. 

Retornando à distinção entre forças conservativas e não-conservativas (também chamadas de forças <b>dissipativas</b>), uma diferença notável entre as duas encerra-se no trabalho: o trabalho de uma força conservativa <b>independe</b> do caminho atravessado pelo móvel, mas apenas das suas posições iniciais e finais. O contrário é dito das dissipativas: a trajetória do móvel importa. 

Numa maneira mais formal, conforme exposta por Nussenzveig, podemos dizer que uma condição necessaria e suficiente para que uma força $\vec{F}$ seja conservativa é: 

$$
\oint_C \vec{F} \cdot \vec{dl} = 0 
$$

para qualquer caminho fechado $C$.

Como exemplos de forças conservativas, podemos citar, além da força peso, a força elástica e a força elétrica.

## Potência

Definimos a grandeza <b>potência</b> como a <b>taxa temporal de realização de trabalho</b> de uma força. Como foi demonstrado pelo teorema anterior, é possível também descrevê-la como a <b>taxa de transferência energética</b> de uma força.

Durante o ensino médio, entramos em contato com a chamada <b>potência média</b>, definida por:

$$
\bar{P} = \dfrac{\Delta W}{\Delta t}
$$

Entretanto, a chamada <b>potência instantânea</b>, ou simplesmente <b>potência</b>, é expressa como a derivada temporal do trabalho. O <a href="/books/higher_education/math/calculus_two/integration.html" target="_blank">teorema fundamental do Cálculo</a> nos garante que o trabalho é a integral da potência.

$$
P(t) = \dfrac{dW}{dt} \Longleftrightarrow  W(t) = \int P(t) \ dt
$$

## Gráficos de estabilidade

É possível representar um sistema físico a partir de um gráfico de sua energia potencial em função de sua posição, com tal representação sendo extremamente útil na análise de algumas situações, permitindo a extração de diversas informações. 

Um exemplo inicial simples é o de um objeto em queda livre (ou lançamento vertical). 

![Gráfico retirado do livro OpenStax University Physics (CC-BY-NC-SA)](images/work_energy/work_energy_potential_energy_freefall.png)

<i>Gráfico retirado do livro OpenStax University Physics (CC-BY-NC-SA).</i>

Perceba que o gráfico é uma linha reta de inclinação $mg$, com sua altura $U_A$ sendo sua energia potencial em uma dada posição e a "altura restante" $K_A$ até a reta assinalada sua energia cinética, com a soma dos dois comprimentos constante para todo $y \in [y_0, y_{max}]$. 

A partir do gráfico é possível encontrar a altura máxima, por exemplo: 

$$
\begin{align*}
    U(y_{\text{max}}) &= E - K(y_{\text{max}}) \\
    mg y_{\text{max}} &= E - \dfrac{1}{2}mv_f^2 \\ 
    E &= mg y_{\text{max}} \\
    \dfrac{E}{mg} &= y_{\text{max}}
\end{align*}
$$

Essa mesma relação pode ser explorada para encontrar a velocidade inicial, $v_0$, necessária para alcançar essa altura máxima. Vale notar se $v_0$ é a velocidade necessária para alcançar a altura máxima, $-v_0$ é a velocidade de encontro com o solo.

$$
\begin{align*}
    mgy_0 &= E - \dfrac{1}{2}mv_0^2 \\
    E &= \dfrac{1}{2}mv_0^2 \\
    v_0 &= \sqrt{\dfrac{2E}{m}}
\end{align*}
$$

<div class="columns-2">
<div class="col">

![](https://upload.wikimedia.org/wikipedia/commons/9/9d/Simple_harmonic_oscillator.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Um sistema massa mola unidimensional. GIF sob domínio público via <a href="https://commons.wikimedia.org/wiki/File:Simple_harmonic_oscillator.gif" target="_blank">Wikimedia Commons</a>.</i>

</div>
<div class="col">

Um outro exemplo, um pouco mais complexo, que pode ser analisado é o chamado sistema massa-mola simples, sem atrito nem qualquer tipo de força dissipativa.

Esse sistema é interessante por nos introduzir pela primeira vez ao chamado <b>poço de potencial</b>. Observando seu gráfico de energia potencial (abaixo) em função da posição do objeto conectado à mola, é possível deduzir todas as informações do sistema anterior. 

</div>
</div>

![](images/work_energy/work_energy_potential_graph_springmass.png)

<i>Gráfico retirado do livro OpenStax University Physics (CC-BY-NC-SA).</i>

O poço de potencial mencionado é a concavidade do gráfico: um sistema massa-mola com uma energia potencial $E$ nunca irá poder ter uma oscilação maior do que $x_{\text{max}}$, com todas as posições possíveis estando sobre uma mesma parábola.[^3]

# Referências 

1. <i>Playlist</i> de Física 1 da USP formada por aulas do prof. Dr. Marcelo Martinelli (<a target="_blank" href="https://www.youtube.com/playlist?list=PLAudUnJeNg4vmlyuv__uBgdOkzw4VSrcJ">Acesse aqui</a>).
2. LING, S. J. et al. University physics. Houston, Texas: Openstax, Rice University, 2018. v. 1 (<a target="_blank" href="https://openstax.org/details/books/university-physics-volume-1">Acesse aqui</a>).
3. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 1: mecânica. 5. ed. São Paulo: Blucher, 2013

<!--NOTAS DE RODAPÉ-->

[^1]: O conceito de energia é algo extremamente difícil de se definir de forma fechada em razão de seu elevadíssimo nível de abstração, entretanto, a dedução acima nos dá uma brecha de como enxergá-la: uma propriedade quantitativa de um sistema que pode ser transferida, com esta transferência sendo descrita como "sofrer" ou "exercer trabalho" e podendo ser identificada por meio de fenômenos como irradiação de calor ou emissão de luz. 

[^2]: Adaptado de <i>Lectures on Physics</i>, vol. 4.

[^3]: Experimente imaginar um gráfico de potencial diferente e explorar as limitações de movimento de um sistema, com base na sua energia inicial.

[^4]: O termo energia "potencial", de fato, faz uma referência ao conceito de "ato" e "potência" de Aristóteles. Temos uma energia no sistema que "não se concretizou", mas existe como uma "possibilidade de entrar em ação". 