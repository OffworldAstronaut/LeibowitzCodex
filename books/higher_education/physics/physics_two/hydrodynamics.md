# Noções de hidrodinâmica 

# Descrevendo fluidos em movimento

Duas abordagens mais usuais para a representação matemática do movimento de um fluido são devidas, respectivamente, a Lagrange e Euler.

O matemático francês Joseph-Louis Lagrange (1736-1813) teve como ponto de partida a análise das trajetórias dos pontos materiais de um fluido, formada por todos os vetores posição $r_i(t)$. A determinação destes vetores ao longo do tempo é útil para a análise de alguns sistemas, mas excessivamente laboriosa, o que a deixou em segundo plano perante a abordagem de Euler. 

O genial suíço Leonhard Euler (1707-1783) desenhou outra abordagem baseando-se nas <b>velocidades</b> em cada ponto, fixo, do fluido. Dessa forma, analiza-se um campo vetorial, chamado <b>campo de velocidades</b>, que atribui a cada ponto do fluido um vetor velocidade, indicando a velocidade das partículas que passam por aquela região, ao longo do tempo. 

Na modelagem de Euler, as chamadas <b>linhas de corrente</b> são análogas às <b>linhas de força</b> no <a href="/books/high_school/physics/physics3/electric_field.html" target="_blank">campo elétrico</a>. Estas linhas são uma família de curvas cujos vetores tangentes formam o campo de velocidades supracitado. Uma consequência interessante é que as linhas de corrente são as trajetórias que um ponto material percorreria caso estivesse no interior do fluido.

De forma similar podemos definir os chamados <b>tubos de corrente</b>, superfícies formadas num dado instante por todos as linhas decorrente num fluido que intersectam uma curva fechada qualquer $C$.

A abstração matemática do campo de velocidades permite a classificação de <b>tipos de escoamento</b> que um líquido pode sofrer. Temos assim duas grandes categorias: o escoamento <b>estacionário</b> e o escoamento <b>não-estacionário</b>. 

Fluidos em escoamento <b>estacionário</b> possuem um capo de velocidade constante ao longo do tempo, enquanto isto não acontece em escoamentos não-estacionários. O caso extremo destes últimos são os escoamentos <b>turbulentos</b>, em que cada vetor do campo de velocidades varia bruscamente e de forma irregular ao longo do tempo.

## Conservação da massa e a equação de continuidade

Podemos enunciar os princípios básicos da hidrodinâmica a partir das leis de conservação. Num primeiro momento, é interessante analisar a conservação da massa. 

Considere um tubo de corrente com uma seção transversal de área $A$. Podemos determinar a massa $\Delta m$ de fluido que atravessa esta área pelo estudo de um cilindro de base de área $A$ e altura infinitesimal $v\Delta t$, com $v = |\vec{v}|$. Como $\rho$ é a densidade do fluido na vizinhança do elemento de área considerado (cf. <a href="/books/higher_education/physics/physics_two/hydrostatics.html" target="_blank">Hidrostática</a>), temos que 

$$
\Delta m = \rho Av \Delta t 
$$

Considere então duas seções de um tubo de corrente de áreas $A_1$ e $A_2$, respectivamente. Além disso, o fluido que escoa por estas seções possuem densidades $\rho_1$ e $rho_2$ e velocidades $v_1$ e $v_2$. Supondo nosso escoamento como estacionário, temos que a mesma quantidade de fluido deve passar pelas áreas $A_1$ e $A_2$ num mesmo intervalo de tempo $\Delta t$, em razão da conservação da massa. 

Consequentemente, temos que 

$$
\Delta m_1 = \rho_1 A_1 v_1 \Delta t = \Delta m_2 = \rho_2 A_2 v_2 \Delta t 
$$

e, portanto, 

$$
\rho_1 A_1 v_1 = \rho_2 A_2 v_2
$$

Isto é, este produto é constante ao longo do tempo para quaisquer seções transversais de um dado tubo de corrente, consequência direta do princípio de conservação da massa: a mesma quantidade de fluido por unidade de tempo que massa pela mesma seção transversal deve passar pela segunda seção escolhida. 

Considerando um fluido de densidade constante (isto é, incompressível), a equação é reduzida para a forma 

$$
A_1 v_1 = A_2 v_2 
$$

com a quantidade $Av$ sendo denominada <b>vazão do tubo</b> e mensurada, no Sistema Internacional, em metros cúbicos por segundo.

Dado que não podemos analisar o princípio de conservação da massa por este mesmo método em fluidos escoando de forma não-estacionária, em razão da constante mudança das linhas de corrente, teremos que recorrer a outra abordagem.

Considere um volume $V$ do fluido, fixo, quie é limitado por uma superfície fechada $S$, com $\hat{n}$ sendo o versor da normal externa para cada ponto considerado de $S$. 

Podemos perceber que a massa $\Delta m$ do fluido que perpassa $\Delta S$ num intervalo de tempo $\Delta t$ está no interior de um cilindro de base $\Delta S$ e geratriz $\vec{v}\Delta t$, com $\vec{v}$ sendo a velocidade do fluido no entorno da superfície no instante considerado. 

Assim, é possível escrever: 

$$
\Delta m = \rho \vec{v} \cdot \hat{n}\Delta t \Delta S
$$

com $\rho \vec{v} \cdot \hat{n}\Delta S$ representando o fluxo de massa por unidade de tempo que sai do volume $V$. Caso o sinal fosse oposto (isto é, caso $\vec{v} \cdot \hat{n} \lt 0$), não haveria prejuízo quanto à analise física do problema: estaríamos apenas indicando que o fluido se dirige para "fora" do elemento de superfície $\Delta S$.

Consequentemente, temos que a massa total de fluido no interior de todo o volume $V$ num dado instante $t$ é 

$$
m = \int_{V} \rho \, dV 
$$

com $dV$ sendo o elemento de volume e $\rho$ a densidade pontual do fluido. A integral é estendida ao volume $V$, isto é, estamos integrando sobre todos seus elementos de volume. 

Nota-se que essa massa varia ao longo do tempo, geralmente. Em razão do princípio da conservação da massa (ela não pode criada nem destruída), temos que essa variação possui origem no fluxo resultante através de $S$: $m$ aumenta se a variação líquida de fluido para o interior de $S$ é positiva e diminui caso contrário. 

Dessa forma, temos que 

$$
\oint_S \rho \vec{v} \cdot \hat{n} \ dS
$$

expressa o fluxo resultante por unidade de tempo, isto é, o decréscimo por unidade de tempo da massa de fluido contida em $V$. Consequentemente, 

$$
\oint_S \rho \vec{v} \cdot \hat{n} \ dS = -\dfrac{dm}{dt} = -\dfrac{d}{dt}\int_V \rho \ dV 
$$

com esta expressão sendo chamada <b>equação de continuidade</b>. Eis a maneira que enunciamos o princípio da conservação da massa num caso mais geral! A forma anterior é obitda ao considerar o volume de um tubo fixo de corrente e, num escoamento estacionário, $\rho$ independe do tempo e $-\dfrac{dm}{dt} = 0$, consequentemente. 

## Forças num fluido em movimento



# Referências

1. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 2: Fluidos; oscilações e ondas; calor. 4. ed. rev. São Paulo: Blucher, 2002