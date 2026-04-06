# Trabalho e Energia

# As origens do trabalho 

--- 

O que é **trabalho**? O conceito de trabalho na Física está intimamente ligado aos conceitos de **energia** e **força**, também. Para ilustrar a origem dessa curiosa grandeza, vamos imaginar uma situação simples: um bloquinho num plano inclinado. 

![Plano inclinado](images/work_energy/work_energy_planoinclinado.jpeg)

<i>Acima podemos ver um plano inclinado utilizado em universidades do século XVIII (Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Piano_inclinato_inv_1041_IF_21341.jpg">Wikimedia Commons</a>).</i>

Vamos imaginar que no sopé deste plano inclinado temos um bloquinho que é lançado por uma mola. Desconsiderando o atrito e todas as outras forças que não sejam a força peso, o bloquinho avança com uma velocidade inicial $\overrightarrow{v_o}$ que diminui ao longo do tempo. 

É possível ver que este corpo está em um movimento retilíneo uniformemente variado e, por isso, podemos utilizar as equações:

$$
\begin{align*}
x(t) &= x_0 + v_o \cdot t + \dfrac{at^2}{2} \\\\
v_f &= v_o + at
\end{align*}
$$

Deduzindo a Equação de Torricceli pela substituição da segunda equação na primeira e rearranjando os termos, chegamos em duas expressões bastante úteis. A primeira é o que chamamos de **constante do movimento**, uma quantidade que não varia ao longo do tempo de execução do movimento, que pode ser útil na resolução de alguns problemas. Já a segunda, mais interessante para nosso objetivo, é uma relação entre a variação da velocidade e a variação do espaço. 

$$
\dfrac{1}{2}(\Delta v)^2 = a \Delta x 
$$

Multiplicando por $m$ em ambos os lados, a massa do objeto, chegamos numa segunda relação. 

$$
\begin{align*}
ma \Delta x &= \dfrac{1}{2}m(\Delta v)^2 \\\\ 
F \Delta x &= \dfrac{1}{2}m(\Delta v)^2 \\\\ 
&= \boxed{\dfrac{1}{2}mv_2^2} - \dfrac{1}{2}mv_1^2 \\\\ 
\end{align*}
$$

Uma grandeza relacionada diretamente com a força aplicada sobre o objeto e seu deslocamento está ligada com a variação de uma quantidade nova que depende tanto da massa quanto do módulo de sua velocidade. Essa grandeza chama-se **trabalho de uma força**.

De fato, essa quantidade própria do movimento do corpo que é variada pelo trabalho é chamada **energia cinética** $(K)$, podendo ser também escrita em função do momento: $\dfrac{p^2}{2m}$.

Perceba que, ao montar um gráfico $P \times x$, essa grandeza corresponde à área sob a curva. Isso será de especial motivação para o teorema a seguir.

# Teorema Trabalho-Energia Cinética

--- 

O **teorema trabalho-energia cinética** declara que o trabalho realizado por uma força é a variação da energia cinética de um corpo, exatamente o que acabamos de vislumbrar, com um único diferencial: essa conclusão é válida para **qualquer força**, inclusive uma força variável, ao contrário do caso base que exploramos, com uma força constante no tempo. 

Supondo o trabalho $W$ de uma força $F$ como a seguinte integral, podemos desenvolvê-la para encontrar o resultado esperado. 

$$
\begin{align}
W &= \int_{x_1}^{x_2} F \ dx \\\\ 
&= \int_{x_1}^{x_2} m \dfrac{dv}{dt} \ dx \\\\
&= \int_{x_1}^{x_2} mv \dfrac{dv}{dx} \ dx \\\\
&= \int_{v_1}^{v_2} mv \ dv \\\\
&= \dfrac{1}{2}mv_2^2 -\dfrac{1}{2}mv_1^2
\end{align}
$$

Perceba que o passo $(2)$ foi possível por uma aplicação direta do princípio fundamental da dinâmica (2ª Lei de Newton) e a substituição da variável de integração (espaço para velocidade) foi indispensável. 

<aside>
Vale mencionar aqui que estas demonstrações podem ser feitas para duas ou três dimensões, mas este documento se atém a primeira dimensão por uma questão de simplicidade.
</aside>

Por fim, perceba que ao final chegamos numa expressão em que estamos **integrando o momento** ao longo da variação da velocidade. Esse fato levanta a denominação do Teorema como a "forma integral" da Segunda Lei de Newton.

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

# Energia Potencial e a Conservação da Energia

---

Uma motivação para o conceito de **energia potencial** vem de um dos passos que tomamos para a definição da energia cinética. Vamos revisitá-lo, mais precisamente, a **constante de movimento**. 

$$
\dfrac{1}{2}v_2^2 - ax_2 = \dfrac{1}{2}v_1^2 - ax_1
$$

Ao multiplicarmos ambos os membros pela massa do corpo, $m$, chegamos na expressão: 

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