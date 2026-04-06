# Potencial elétrico

# O que é um potencial elétrico?

---

Enquanto o **campo elétrico** é um **campo vetorial**, o **potencial elétrico** é um **campo escalar**, ou seja, quando tivermos uma carga no espaço, cada ponto ao redor dela irá receber uma **energia potencial elétrica** atrelada a ele. 

Assim, o **potencial elétrico** gerado por uma dada carga é medido em $\text{J/C}$, respondendo à pergunta **“Quantos joules de energia potencial elétrica por coulomb de carga uma carga teria se colocada nesse ponto?”**. 

<aside>

Podemos reescrever essa unidade no SI, formando o Volt $(V)$

</aside>

Assim como a energia potencial **gravitacional**, a energia potencial elétrica pode ser transformada em energia cinética.

Quanto mais longe da carga geradora, menor é a energia potencial elétrica associada àquele ponto.

<aside>

Podemos calcular a **energia potencial elétrica** $(U_E)$ num dado ponto por meio da expressão abaixo, onde $q$ é a carga teste e $V$ é o valor do **potencial elétrico**.

$$
U_E=qV
$$

Também podemos calcular o **potencial elétrico** numa dada **distância** $r$ da **carga geradora** (do campo) $Q$ pela expressão

$$
V=\dfrac{kQ}{r}
$$

</aside>

# Superfícies equipotenciais

---

Como o nome sugere, uma **superfície equipotencial** é uma superfície, uma região, onde todos os seus pontos possuem o mesmo potencial elétrico. 

Pela expressão matemática acima, podemos concluir que as superfícies equipotenciais estão **sempre perpendiculares** às linhas de força:  sempre à mesma distância da carga geradora!

Por exemplo, na imagem da carga positiva acima: você percebe as circunferências cinzas? São regiões de mesmo potencial! 

![Todos os pontos em cada uma das linhas (de cada cor) possuem o mesmo potencial! Perceba que as linhas equipotenciais são perpendiculares às linhas de força!](./images/electric_potential/electric_potential_forcelines.png)

<i>Todos os pontos em cada uma das linhas (de cada cor) possuem o mesmo potencial. Perceba que as linhas equipotenciais são perpendiculares às linhas de força (Captura de tela deste <a href="https://icphysweb.z13.web.core.windows.net/simulation.html" target="_blank">simulador</a>).</i>

# Várias cargas puntiformes

---

E se formos calcular o potencial elétrico num dado ponto que está próximo de várias (mais de uma) cargas puntiforme, como no caso abaixo? 

![Como calcular o potencial elétrico no ponto branco? ](./images/electric_potential/electric_potential_multiple_potentials.png)

<i>Como calcular o potencial elétrico no ponto branco? (Captura de tela deste <a href="https://icphysweb.z13.web.core.windows.net/simulation.html" target="_blank">simulador</a>).</i>

Precisamos apenas calcular os potenciais elétricos em relação à cada carga e depois somá-los.

Ou seja, no caso acima, nomeando as cargas positivas como $Q_1$ e $Q_2$ e a negativa como $Q_3$, o potencial elétrico no ponto amarelo seria

$$
V=V_1+V_2+V_3=k\dfrac{Q_1}{r_1}+k\dfrac{Q_2}{r_2}+k\dfrac{Q_3}{r_3} \Rightarrow k \left(\dfrac{Q_1}{r_1}+\dfrac{Q_2}{r_2}+\dfrac{Q_3}{r_3}\right)
$$

# Diferença de potencial (DDP)

---

A **diferença de potencial** (DDP) entre dois pontos, chamada também de **tensão elétrica** ou ainda, coloquialmente, de **“voltagem”**, é exatamente o que o nome nos dá indícios: $\Delta V =V_1 - V_0$. 

Uma partícula irá perder energia potencial $(\Delta V <0)$ ao partir de uma região de maior potencial para uma de menor potencial, com $\Delta V > 0$ indicando o contrário. 

Essa noção será muito importante à medida que entramos na transição entre eletrostática e eletrodinâmica, quando começaremos a discutir sobre energia, trabalho e **força elétrica**. 

Por exemplo, se a carga geradora do campo for positiva, as cargas negativas vão naturalmente ganhar energia potencial enquanto são atraídas pela carga geradora: distanciar elas dela vai necessitar de **trabalho**. 

Uma aplicação interessante, no dia a dia, da DDP é a medida da “voltagem” das tomadas: tomadas de 220V indicam que, para cada coulomb de carga que passa ali, 220 joules de energia estão sendo fornecidos ao aparelho conectado. 

## Num campo elétrico uniforme

Agora, e se estivermos numa situação como a abaixo? 

![Duas barras metálicas com cargas opostas, com um campo elétrico uniforme!](./images/electric_potential/electric_potential_bars.png)

Duas barras metálicas com cargas opostas, com um campo elétrico uniforme.

Como saber a **diferença de potencial** entre os pontos $A$ e $B$? 

Bom, para isso, temos uma equação simples, 

$$
Ed=\Delta V
$$

ou seja, a DDP, $\Delta V$, é igual ao **produto entre a distância entre as regiões e o valor do campo elétrico** (medido em $V/m$)! 

Como provar isso? 

Bom, sabemos que a diferença de potencial entre dois pontos é dada por $\Delta V = V_2 - V_1$, mas lembre-se que o potencial elétrico é na verdade a razão entre a **energia potencial elétrica** de um ponto **por unidade de carga**, ou seja: 

$$
\begin{align*}
    \Delta V &= V_2 - V_1 \\\\
    \Delta V &= \dfrac{U_2}{q}-\dfrac{U_1}{q} = \dfrac{U_2 - U_1}{q} \\\\    
\end{align*}
$$

Lembre-se que a **diferença de energia potencial** num corpo depois de um deslocamento é a mesma coisa que o **trabalho** executado: energia foi transferida! 

Assim: 

$$
\dfrac{U_2-U_1}{q}=\dfrac{Fd\cos(\theta)}{q}
$$

Onde $F$ é a **força eletrostática** exercida pelo campo. Mas… perceba que como estamos tratando da movimentação na direção das linhas de força, e num campo elétrico, podemos reescrever $|\vec{F}|=q|\vec{E}|$ e $\cos(\theta)=\cos(0)=1$. Logo: 

$$
\begin{align*}
    \dfrac{U_2-U_1}{q} &= \dfrac{qdE}{q} \\\\
    \Delta V &= dE \\\\
    Ed &= \Delta V    
\end{align*}
$$

Perceba que $\Delta U$ é o **trabalho**, por isso que $Fd\cos(\theta)$ é dividido por $q$ também para termos a **diferença de energia potencial**. 
Ou seja, $\Delta U =\tau_E = Eqd=q\Delta V$. 

Feito! Provado! Vale lembrar que essa dedução só vale para o caso dado, ok? Campo elétrico uniforme, uniforme! Além disso, movimento na mesma direção que as linhas de força.