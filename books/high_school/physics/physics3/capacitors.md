# Capacitores

# Criando um capacitor

---

Imagine que você tem duas placas metálicas separadas por uma distância $d$, isoladas de tudo e de todos, e uma bateria com seus terminais positivos e negativos. 

Ao conectar uma das placas no terminal positivo e outra placa no terminal negativo, uma placa irá ficar deficiente em elétrons (com carga líquida positiva) e outra irá ficar excedente em elétrons (com carga líquida negativa): um campo elétrico uniforme de uma placa para outra irá surgir! 

Perceba que se desconectarmos nosso conjunto de placas da bateria e o conectarmos num circuito elétrico, os elétrons acumulados vão fluir e completar o circuito, *descarregando* as placas até que elas estejam neutras novamente. As placas formaram um **capacitor**. 

Os capacitores são componentes elétricos que guardam energia com efeito parecido com uma bateria, somente com a exceção de que eles guardam cargas fornecidas a eles, enquanto as baterias fornecem cargas com base em reações químicas. 

## Capacitância

Essa seção é sobre um conceito importante que têm origens na eletrostática mas será muito importante na eletrodinâmica: a **capacitância**.

Continue explorando na sua imaginação a ideia das duas placas conectadas na bateria. Vamos para o começo de tudo, analisando de perto a placa que irá receber elétrons da bateria. 

Nos instantes iniciais, quando a placa está eletricamente neutra, é muito fácil transferir um elétron da bateria para a placa, ou seja, **pouco trabalho é necessário** pois há uma grande diferença de potencial entre a placa e a bateria. À medida que a placa vai recebendo elétrons, eles repelem novos elétrons que podem querer entrar, ou seja, o potencial da placa **aumenta** e a DDP entre a bateria e a placa fica cada vez menor. 

Eventualmente, a placa não irá mais receber elétrons: o capacitor está **carregado**. 

Podemos medir essa capacidade de armazenamento de carga num condutor pela **capacitância**, que é dada pela expressão matemática

$$
\text C = \dfrac{\text Q}{\text V}
$$

<aside>

A unidade da capacitância é o <b>Farad</b> $(\text{F})$ em homenagem a <a href="https://en.wikipedia.org/wiki/Michael Faraday" target="_blank">Michael Faraday</a>.

</aside>

Ou seja, quanto de carga é possível guardar nesse condutor para cada **1 volt** de aumento do potencial elétrico? Se podemos guardar muita carga nesse capacitor com pouco aumento do potencial, esse condutor possui uma capacitância **alta**. 

Levando em conta **ambas as placas**, podemos dizer que $V$ é a DDP entre uma placa e outra — lembre-se que enquanto uma fica eletrizada negativamente, outra se torna carregada positivamente.

Embora seja possível encontrar a capacitância de um dado capacitor carregado pela equação acima, ela não é realmente dependente da DDP entre os dois condutores, e sim somente da geometria do capacitor e da sua composição: no caso mais comum, com duas placas metálicas de área $A$ separadas por uma distância $d$, a **capacitância** é dada por

$$
\text C_0 = \dfrac{A}{d}\epsilon_0
$$

onde $\epsilon_0$ é a **constante de permissividade do vácuo**, valendo 

$$
e_0=8.85 \times 10^{-12} \text{ F/m}
$$

Agora, se entre as duas placas do capacitor houver um material **dielétrico**, ou seja, um material que, embora isolante, seja **polarizável** (seus elétrons conseguem se mover um pouco, influenciados por um campo elétrico), a capacitância é dada por 

$$
\text C = \kappa \epsilon_0 \left(\dfrac{A}{d}\right)=\kappa C_0
$$

onde $\kappa$ é a **constante dielétrica** do material.

<aside>
    <ol>
        <li>Todo material isolante é dielétrico, porém alguns são melhores dielétricos que outros;</li>
        <li>Colocar um dielétrico entre as placas permite maior capacitância pois diminui a diferença de potencial entre as duas placas! (As cargas polarizadas “forçam” o campo elétrico a alcançá-las ao invés da outra placa).</li>
    </ol>
</aside>

### Energia potencial num capacitor

Por meio da capacitânica, ainda é possível encontrar a energia potencial guardada num capacitor carregado por meio da expressão 

$$
U_E=\dfrac{1}{2}CV^2
$$

ou seja, quantos $J$ de energia potencial um capacitor de capacitância $C$ consegue armazenar ao ser submetido a uma DDP de $V$? 

<aside>

<b>Demonstração</b> — Considere um capacitor de capacitância $C$ submetido a uma voltagem $V$. Perceba que carregá-lo em uma carga $dq$ exige uma certa quantidade de energia. Dessa forma, temos que 

$$
dU = dqV
$$

com $dU$ sendo uma quantidade infinitesimal de energia que deve ser gasta para mover esta carga e, por consequência, a energia que está sendo armazenada no interior do capacitor.

Note que, para deduzirmos a quantidade total de energia de uma carga $Q$, precisamos somar todos os pacotes $dq$ por meio de uma integração. 

$$
U = \int_0^Q Vdq = \dfrac{1}{C}\int_0^Qqdq = \dfrac{1}{C} \dfrac{q^2}{2}\biggr\rvert_0^Q = \dfrac{1}{2}\dfrac{Q^2}{C}
$$

Como $Q = CV$, temos ainda que $\dfrac{1}{2}\dfrac{Q^2}{C} = \dfrac{1}{2}QV = CV^2$.

</aside>

## Numa esfera condutora

Um caso específico mas bem explorado no estudo da capacitânica é o de uma esfera condutora, funcionando de forma parecida com a placa metálica conectada a um dos polos da bateria das seções anteriores. 

Podemos fazer algumas manipulações algébricas para chegarmos num resultado interessante: 

$$
\text C=\dfrac{\text Q}{\text V}=\dfrac{\text Q}{\dfrac{kQ}{R}}=\dfrac{R}{k}
$$

onde $R$ é o **raio da esfera** e $k$  é a **constante eletrostática**. 

Ou seja, temos uma conclusão que nos leva ao que já estava lá em cima: a capacitância de um dado capacitor só depende de sua **área**, não da quantidade de carga armazenada. 

<aside>

Lembra que num condutor eletrizado em equilíbrio eletrostático o potencial elétrico em seu interior é constante em todos os pontos, valendo $\dfrac{kQ}{R}$?

</aside>

### Na eletrização por contato

Agora, vamos analizar um caso interessante. 

Se temos uma esfera $E_1$ eletrizada (aqui, negativamente) e uma esfera $E_2$ eletricamente neutra, e as conectarmos por meio de um fio, por exemplo, as cargas irão fluir, correto? 

![image.png](./images/capacitors/capacitores_esferas.png)

Ok, nós já estudamos isso antes, lá nos [**processos de eletrização**](/books/high_school/physics/physics3/introduction_electrostatics.html), porém lá não tínhamos uma informação importante: **as cargas fluem de acordo com a diferença de potencial** (DDP). 

Eventualmente, as **voltagens** de cada esfera serão iguais e o fluxo de cargas irá parar, ou seja, $V_1 = V_2$. 

Agora, vamos expandir essa equação! 

$$
\dfrac{kQ_1}{R_1}=\dfrac{kQ_2}{R_2}\Rightarrow
\dfrac{Q_1}{R_1}=\dfrac{Q_2}{R_2} \Rightarrow \dfrac{R_2}{R_1} = \dfrac{Q_2}{Q_1}
$$

Interessante! 

# Associação de capacitores

---

Num circuito, podemos **associar** capacitores, ou seja, conectá-los em proximidade para que funcionem em conjunto. Existem duas formas de **associar** esses componentes: em **série** e em **paralelo**. 

## Capacitores em série

Associar em série significa colocar-los em “linha reta” no circuito elétrico. 

![Um circuito com três capacitores em série!](https://upload.wikimedia.org/wikipedia/commons/6/6f/Series_capacitors.png)

<i>Um circuito com três capacitores em série! (Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Series_capacitors.png" target="_blank">Wikimedia Commons</a>)</i>

Essa organização permite que o circuito seja submetido à uma maior DDP, já que a voltagem será distribuída entre os capacitores, prevenindo curtos-circuitos. 

De fato, podemos calcular a **voltagem total** do “grande capacitor” formado pela expressão 

$$
V_T = \sum_{i=1}^N V_i = V_1 + V_2 + ... + V_N
$$

Além disso, a **capacitância total** é dada pela expressão 

$$
\dfrac{1}{C_T}=\sum_{i=1}^N\dfrac{1}{C_i} = \dfrac{1}{C_1}+\dfrac{1}{C_2}+...+\dfrac{1}{C_N}
$$

Finalmente, podemos ver que a **carga** em cada capacitor é a **mesma** pois eles estão submetido à mesma corrente elétrica, ou seja… 

$$
\begin{align*}
    Q_1 &= Q_2 = ... = Q_N \\\\
    Q_T &= \sum_{i=1}^N Q_i \\\\
\end{align*}
$$

Cada capacitor nesse caso possui a voltagem inversamente proporcional à sua capacitância: 

$$
V_i = \dfrac{Q}{C_i}
$$

## Capacitores em paralelo

Associar em paralelo significa que estamos colocando os componentes “lado a lado”, dessa forma: 

![Um circuito com capacitores em paralelo!](https://upload.wikimedia.org/wikipedia/commons/a/af/Parallel_series_capacitors.png)

<i>Um circuito com capacitores em paralelo! (Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Parallel_series_capacitors.png" target="_blank">Wikimedia Commons</a>)</i>

Essa organização permite que mais energia seja armazenada no circuito: essa é a origem dos grandes capacitores industriais. 

Nesse caso, a DDP em cada capacitor é **a mesma**, ou seja

$$
V_1 = V_2 = ...=V_N
$$

Também, podemos dizer que a **capacitância total** nesse caso é 

$$
C_T = C_1 + C_2 + ... + C_N = \sum_{i=1}^N C_i
$$

Nesse caso, cada capacitor armazena uma quantidade de carga **proporcional à sua capacitância:**

$$
Q_i=C_iV
$$

E, por fim, a **carga total** é dada por: 

$$
Q_T = VC_T
$$