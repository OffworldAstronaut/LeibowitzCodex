# Resistência elétrica

# Resistência elétrica e resistores

---

Como dito no <a href="/books/high_school/physics/physics3/introduction_electrodynamics.md">livro introdutório</a>, a **resistência elétrica** é uma propriedade de um dado corpo que o faz demonstrar uma certa dificuldade à passagem de eletricidade.

Matematicamente, a resistência de um dado corpo que **permite** a passagem de **$i$ ampères** sob uma **tensão de $U$ volts** é dada pela razão $R=\dfrac{U}{i}$, com a unidade de medida sendo $\text{V/A}$, ou seja, **ohms** $(\Omega)$! 

Daí nós chegamos nos componentes eletrônicos conhecidos como **resistores**, que possuem a função de **dissipar energia elétrica** transformando-a em energia **térmica**.

Dependendo de como estiverem associados, esses componentes conseguem, por exemplo, **limitar a corrente** e funcionar como mecanismos de **segurança** em circuitos (como **fusíveis**)!

Uma **lâmpada** (incandescente) também é tratada como um **resistor**, sendo denotada pelo símbolo **usual** ou por um símbolo **especial: ⨂**

# Leis de Ohm

---

As **Leis de Ohm** são leis formuladas pelo físico alemão **Georg Simons Ohm** (1789-1854), tratando-se do fenômeno da resistência elétrica. 

## Primeira Lei de Ohm

Enunciada da seguinte forma…

<blockquote>

“Mantendo-se a temperatura de um resistor constante, a tensão aplicada em seus extremos é diretamente proporcional a corrente que o percorre.”

</blockquote>

…essa lei pode ser resumida na expressão: 

$$
V = IR
$$

Onde $V$ é a tensão aplicada, $I$  é a corrente e $R$ é a resistência do resistor, que funciona como a constante de proporcionalidade da relação. 

Foi descoberto posteriormente que nem todos os resistores obedecem à Primeira Lei, por isso, foram criadas as categorias de **resistores ohmicos** (que a obedecem) e **resistores não-ohmicos**, cuja resistência é alterada pela corrente de forma não-linear. 

## Segunda Lei de Ohm

A Segunda Lei é enunciada da seguinte forma: 

<blockquote>

“A resistência de um material é diretamente proporcional ao seu comprimento e inversamente proporcional a área de sua seção transversal.”

</blockquote>

Ou, de forma matemática: 

$$
R = \dfrac{\rho L}{A}
$$

Com $R$ sendo a resistência elétrica, medida em ohms, $L$ sendo o comprimento do material, em metros, $A$ sendo a área da seção transversal, em metros quadrados, e $\rho$ (lê-se “rô”) a **resistividade elétrica** do material, medida em **ohm-metros**. 

<aside>

A <b>resistividade elétrica</b> de um material é uma <b>resistência elétrica intrínseca</b>, que não depende da forma do resistor.

</aside>

# Associação de resistores

---

Resistores podem ser utilizados de forma conjunta num circuito, o que chamamos de **associação**. Essa associação pode ser feita em **série** ou em **paralelo**, com o objetivo de obter diferentes efeitos em relação à tensão e a corrente. 

Quando formarmos uma associação de resistores é interessante ter em mente a ideia do **resistor equivalente**: geralmente representado por $R_{EQ}$, é o resistor que, ao substituir a associação, produz o mesmo efeito no circuito.

## Em série

---

![image.png](https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Resistors_in_series.svg/3840px-Resistors_in_series.svg.png)

<i>Resistores em série. CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Resistors_in_series.svg" target="_blank">Wikimedia Commons</a>.</i>

Acima temos uma representação de resistores **associados em série** ou simplesmente **em série**. 

A tensão total do circuito é distribuída em cada resistor, ou seja, por meio da associação em série construímos um **“divisor de tensão”**. 

Nessa construção temos as seguintes relações: 

$$
\begin{align*}    
    i_{T}&=i_1=i_2=...=i_N   \\\\ 
    U_{T}&=U_1 + U_2 + ... + U_N
\end{align*}
$$

Ou seja, a corrente continua idêntica em qualquer ponto do circuito, enquanto a tensão é distribuída entre os resistores.

O resistor equivalente de uma associação em série tem como sua resistência a soma das resistências dos componentes da associação, ou seja: 

$$
R_{EQ}=R_1 + R_2 + ... + R_N
$$

## Em paralelo

![image.png](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Resistors_in_Parallel.svg/3840px-Resistors_in_Parallel.svg.png)

Agora, os resistores estão em **paralelo**: o nome é meio autoexplicativo, com os componentes conectados de forma adjacente por fios ligados paralelamente. 

Nessa composição, a tensão no circuito não é alterada, porém a corrente elétrica é distribuída pelos componentes. 

Ou seja: 

$$
\begin{align*}
    i_{T} &= i_1+...+i_n \\\\ 
    U_{T} &= U_1 = ... = U_n
\end{align*}
$$

O resistor equivalente a $N$ resistores em paralelo possui a seguinte relação: 

$$
\dfrac{1}{R_{EQ}}=\dfrac{1}{R_1 + ... + R_N}
$$

No caso de **apenas dois resistores**, podemos chegar numa expressão alternativa para $R_{EQ}$: 

$$
R_{EQ}=\dfrac{R_1 R_2}{R_1+R_2}
$$

## Ponte de Wheatstone

A **ponte de Wheatstone**, nomeada em homenagem ao físico inglês <a href="https://en.wikipedia.org/wiki/Charles Wheatstone" target="_blank">Charles Wheatstone</a>, responsável por sua popularização, é um caso especial de arranjos de resistores. 

Seus resistores não podem ser classificados unicamente como em série ou paralelo, por conta de suas conexões em forma de diamante (são de associação mista). O circuito possui uma importante utilidade na **medição de resistências** por meio do **galvanômetro** conectado no meio dos resistores. 

![Uma ponte de Wheatstone. O galvanômetro conecta os pontos B e D.](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Wheatstone_Bridge.svg/3840px-Wheatstone_Bridge.svg.png)

Uma ponte de Wheatstone. O galvanômetro conecta os pontos B e C.

<aside>

Um galvanômetro é um amperímetro de baixa intensidade: ambos medem correntes, mas o galvanômetro é mais sensível a pequenas quantidades. 

</aside>

Como visto no diagrama, o resistor $R_2$ é um **potenciômetro**, ou seja, podemos variar a sua resistência, e o resistor $R_x$ possui uma resistência desconhecida. 

Podemos determinar a resistência $R_x$ ao variarmos a resistência de $R_2$ até que nenhuma corrente esteja passando pelo galvanômetro. Perceba que, neste <a target="_blank" href="/books/high_school/physics/physics3/kirchhoff_laws.html">ponto de equilíbrio</a>, a corrente que chega em C é a mesma que sai deste nó $(I_{AC} = I_{CD})$, com algo idêntico ocorrendo na outra metade do circuito $(I_{AB} = I_{BD})$. Isto ocorre pois não há diferença de potencial entre os pontos C e B $(V_C = V_B)$.

Dessa forma, como $V_C = V_B$, temos que $V_{AC} = V_{AB}$ e $V_{CD} = V_{BD}$: como a tensão nestes nós é igual, a diferença de potencial entre os nós "espelhados" deve ser também igual. 

Portanto, podemos escrever: 

$$
\dfrac{V_{CD}}{V_{AC}} = \dfrac{V_{BD}}{V_{AB}} \Rightarrow \dfrac{I_2R_2}{I_1R_1} = \dfrac{I_x R_x}{I_3R_3} \therefore \boxed{R_x = \dfrac{R_2}{R_1} R_3}
$$

## Curtos-circuitos

Quando estamos analisando alguns circuitos, principalmente aqueles de associação mista, é possível de encontrarmos o fenômeno do **curto-circuito**. 

Para entender o famoso “curto”, a passagem anormal de corrente elétrica por uma seção do circuito, e qual o seu perigo, vamos para um exemplo! 

![image.png](./images/electric_resistance/electric_resistance_short_circuit.png)

No circuito acima, desconsiderando o fio ideal de resistência nula, temos um circuito com uma corrente de $i=2 \text { A}$, porém, ao adicionarmos o fio no circuito, a energia elétrica irá seguir o caminho de **menor resistência**, ignorando completamente o resistor de $6 \text{ }\Omega$ e aumentando o fluxo de corrente para $i = 5 \text { A}$. 

Isso é o curto-circuito. A corrente está desviando do caminho que queríamos que ela seguisse (pelo resistor). 

Por que ele é tão perigoso? Lembra do Efeito Joule? Mais corrente significa **mais liberação de energia térmica**: alguns materiais podem não aguentar e começar um incêndio!