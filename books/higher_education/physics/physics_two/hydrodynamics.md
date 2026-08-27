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

Dada uma partícula de volume $\Delta V$ num fluido, temos pelo <a href="/books/higher_education/physics/physics_one/newtons_laws.html" target="_blank">princípio fundamental da dinâmica</a> que 

$$
\Delta m \vec{a} = \rho \vec{a} \Delta V = \Delta \vec{F}_V + \vec{F}_S 
$$

onde $\Delta m$ é o elemento de massa, $\Delta V$ é o elemento de volume associado, $\rho$ é a densidade, $\vec{a}$ é a aceleração e $\Delta \vec{F}_V$ e $\Delta \vec{F}_S$ são as resultantes volumétricas e superficiais, respectivamente. 

Algo a se notar é que, além das forças volumétricas externas que atuam sobre o fluido, como a força gravitacional, a viscosidade, uma <b>força interna</b>, também atua. 

Dizemos que a força de viscosidade corresponde ao atrito das camadas de líquido entre si, uma espécie de cisalhamento, que provoca tensões tangenciais. 

Fluidos ideais com escoamento perfeito não possuem viscoidade alguma, ou seja, não possuem tensões tangenciais internas. Nestes fluidos continua válida a demonstração de que a pressão no interior do fluido independe da orientação do elemento de superfície considerado. Além disso, considerando um fluido em equilíbrio, esse resultado (que a pressão só depende da posição) é válido tanto para fluidos perfeitos como reais.

Quando consideramos a viscosidade num fluido, dizemos que este fluido é real, contrastando com os fluidos ideais. Esta viscosidade — resistência ao escoamento — pode ser maior ou menor, a depender da composição do fluido: mel escoa mais lentamente que água, por exemplo. Embora seu comportamento seja distinto, a aproximação para fluidos ideais é suficiente para fluidos reais com viscosidade suficientemente baixa.

Assim, temos que a resultante das forças volumétricas e superficiais (decorrentes da pressão) para um fluido em movimento possui a mesma expressão para um fluido em repouso (cf. <a href="/books/higher_education/physics/physics_two/hydrostatics.html" target="_blank">Hidrostática</a>): 

$$
\vec{F}_V + \vec{F}_S = (\vec{f} - \nabla p)\Delta V
$$

Substituindo a equação anterior na anterior a essa, obtemos a chamada <b>equação de movimento para um fluido perfeito</b>. 

$$
\rho \vec{a} = \vec{f} - \nabla p
$$

Salientamos que a relação entre $\vec{a}$ e $\vec{v}$ não é tão simples assim, pois $\vec{v}$ se refere a um ponto fixo ao longo do tempo (cf. a abordagem euleriana, comentada no início deste códice) enquanto $\vec{a}$ está relacionada a uma partícula no fluido.

O caso mais importante na prática é aquele que $\vec{f}$ é a densidade de força gravitacional em um campo uniforme — como nas proximidades da superfície terrestre. Neste cenário, temos que 

$$
\vec{f} = -\nabla (\rho gz)
$$

e, portanto, a equação de movimento torna-se

$$
\rho \vec{a} = -\nabla (p + \rho gz)
$$

demonstrando que a pressão age como uma espécie de densidade de energia potencial, conforme visto anteriormente na relação 

$$
p = -u + k, k \in \mathbb{R}
$$

que demonstra que superfícies isobáricas são superfícies equipotenciais ao considerarmos um campo gravitacional uniforme.

Como exemplo, podemos imaginar um tubo horizontal com uma parede móvel. Esta parede é empurrada em razão da pressão exercida pelo fluido, decorrente de suas forças superficiais internas. A situação simétrica, mais comumente analisada, seria a compressão do fluido por uma pressão exercida pela parede móvel.

Como nota final, é importante perceber que as equações originais da estática dos fluidos podem ser obtidas tomando $\vec{a} = 0$. 

# Equação de Bernoulli 

A equação de Bernoulli, publicada pelo matemático suíço Daniel Bernoulli (1700-1782) em seu tratado <i>Hidrodinâmica</i>, é uma consequência da aplicação do <a href="/books/higher_education/physics/physics_one/work_energy.html" target="_blank">princípio da conservação de energia</a> a um fluido ideal, da mesma forma que a equação de continuidade é uma consequência da aplicação do principio da conservação da massa.

Para deduzirmos esta importante equação, é importante primeiro frisar que estamos considerando um fluido ideal, incompressível, sob escoamento estacionário. Como consequência disto, o fluido também é isotérmico ao longo de todo o tempo e ao longo de toda a sua extensão.

Considere então um tubo de corrente de espessura infinitesimal limitado por duas seções transversais de área $A_1$ e $A_2$, respectivamente. A este tubo especial dada a denominação <b>filete de corrente</b>. 

Imagine então que num tempo infinitesimal o fluido no interior deste filete movimenta-se, com a porção compreendida entre as áreas $A_1$ e $A_2$ indo para uma nova região limitada entre $A_1'$ e $A_2'$. Pelas restrições que colocamos sobre as características do líquido, para a conservação de energia basta analisar o sistema como se a porção de fluido entre $A_1$ e $A_1'$ fosse transportada para a região entre $A_2$ e $A_2'$. 

Como a massa dessas porções são iguais (pelo princípio da conservação da massa), ou seja, 

$$
\Delta m_1 = \rho_1 A_1 v_1 \Delta t = \rho_2 A_2 v_2 \Delta t = \Delta m_2 
$$

a variação de energia correspondente a essa movimentação é 

$$
\Delta T = \dfrac{1}{2}\Delta m_2v_2^2 - \dfrac{1}{2}\Delta m_1 v_1^2 
$$

Como a variação de energia cinética é igual ao trabalho das forças que atuam sobre o sistema, podemos deduzir que, no nosso caso, esta variação é devida ao trabalho das forças gravitacional e de pressão.

Perceba que o deslocamento $1 \to 1'$ é no mesmo sentido que a resultante das forças de pressão externas à seção considerada, enquanto no deslocamento $2 \to 2'$ o fluido que está à frente (fora do tubo) resiste ao deslocamento. Logo, no primeiro deslocamento há um trabalho positivo da pressão enquanto no segundo deslocamento há um trabalho negativo.

Portanto, o trabalho total das forças de pressão é: 

$$
p_1 A_1 v_1 \Delta t - p_2 A_2 v_2 \Delta t
$$

Por outro lado, o trabalho realizado pela força gravitacional equivale à variação de energia potencial gravitacional 

$$
-g(\Delta m_2 z_2 - \Delta m_1 z_1)
$$

onde $z_1, z_2$ são as alturas em relação a um referencial escolhido para o sistema considerado. 

Somando estes trabalhos e substituindo na expressão de conservação de energia cinética, obtemos: 

$$
\dfrac{1}{2}\Delta m_2 v_2^2 - \dfrac{1}{2}\Delta m_1v_1^2 = p_1A_1v_1\Delta t - p_2A_2v_2 \Delta t - g(\Delta m_2 z_2 - \Delta m_1 z_1)
$$

Como $\Delta m_1 = \Delta m_2$, temos: 

$$
\dfrac{1}{2}v_2^2 + gz_2 + \dfrac{p_2}{\rho} = \dfrac{1}{2}v_1^2 + gz_1 + \dfrac{p_1}{\rho}
$$

Esta expressão nos fornece a conservaçao de energia por unidade de massa no volume do filete. Como consideramos um fluido incompressível e, portanto, isotérmico, podemos considerar a densidade $\rho$ constante. Multiplicando toda a equaçã por esta variável, obtemos 

$$
\dfrac{1}{2}\rho v^2 + p + \rho gz = C
$$

que é a equação de Bernoulli. Nesta equação, $C$ é uma constante própria do filete considerado. No caso usual de aplicação desta relação, um escoamento estacionário de um líquido, cuja superfície está em contato com a atmosfera, de um grande reservatório, vale 

$$
C = p_0 + \rho gz_0
$$

Neste caso, esta constante possui o mesmo valor para todas as linhas de corrente do escoamento. Quando fazemos $v \to 0$, a equação de Bernoulli simplifica-se para 

$$
p(z_2) - p(z_1) = -\rho g(z_2 - z_1)
$$

que é a <b>lei de Stevin</b>.

Caso efetuemos a divisão de todos os termos da equação por $\rho g$, obtemos uma forma equivalente: 

$$
z + \dfrac{v^2}{2g} + \dfrac{p}{\rho g} = C'
$$

onde $C' = \dfrac{C}{\rho g}$.

Interessantemente, todos os termos do primeiro membro da equação acima podem ser interpretados sob a ótica de alturas. O termo $z$ é chamado <b>altura geométrica</b>, representando a distância vertical do filete em relação ao referencial. 

O termo $\dfrac{v^2}{2g}$ é chamado <b>altura cinética</b>, indicando a altura necessária para que um corpo em queda livre, liberado a partir do repouso, atinja o solo com velocidade de módulo $v$. 

Por último, o termo $\dfrac{p}{\rho g}$ é chamado <b>altura piezométrica</b>, representando a altura necessária de uma coluna de fluido de densidade $\rho$ para que o fundo da coluna sofra a ação de uma pressão $p$. 

A partir desta visão, a equação de Bernoulli pode ser realizada da maneira a seguir (NUSSENZVEIG 2002):

<aside>

<i>
    A soma das alturas geométrica, cinética e piezométrica permanece constante ao longo de cada linha de corrente no escoamento estacionário de um fluido incompressível no campo gravitacional.
</i>

</aside>

# Aplicações 

## Fórmula de Torricelli

A <b>fórmula de Torricelli</b>, deduzida pelo físico e matemático italiano Evangelista Torricelli (1608-1647) em 1636 estabelece que a velocidade de escoamento de um fluido escoando por um orifício lateral num recipiente é de 

$$
v = \sqrt{2 gh}
$$

Isto é, a mesma velocidade de um corpo em queda livre de uma altura $h$ ao atingir o chão. Podemos deduzir essa relação como um caso particular da equação de Bernoulli, considerando um dos pontos na superfície do fluido no recipiente (em contato com a atmosfera) e o outro ponto no orifício de escoamento. 

$$
z + \dfrac{v^2}{2g} + \dfrac{p_0}{\rho g} = z_0 + \dfrac{v_0^2}{2g} + \dfrac{p_0}{\rho g}
$$

Nesta expressão, $z$ é a altura do orifício, $v$ é a velocidade de escoamento, $p_0$ é a pressão atmosférica e $v_0$ é a velocidade inicial das correntes de fluido. Como $z - z_0 = h$, a altura da superfície do recipiente até o orifício, a expressão reduz-se a sua forma familiar: $v = \sqrt{2gh}$. 

## Tubo de Pitot

Um <b>tudo de Pitot</b> é um sistema físico utilizado para aferir a velocidade de aviões. Este sistema consiste numa massa aerodinâmica no interior de um tubo repleto de fluido em escoamento estacionário, de forma que uma das regiões sofra uma colisão frontal com o fluido enquanto em outras a interferência da massa com o escoamento seja desprezível.

Este ponto de colisão frontal é chamado <b>ponto de estagnação</b>, com $v_O \approx 0$ neste ponto. Pela equação de Bernoulli, tomando $p$ como a pressão num ponto $A$ (que não sofre interferência da massa) e $p_O$ como a pressão em $O$: 

$$
p_O = p + \dfrac{1}{2}\rho v^2
$$

Em questões de nomenclatura, denominamos $p_O$ como a <b>pressão dinâmica</b>. Além dessa massa, o tubo de Pitot consiste num manômetro diferencial acoplado nessa região $O$ de contato. Considerando como $\rho_O$ a densidade do fluido no manomêtro e $h$ como a diferença de altura entre os dois níveis de fluido do manômetro, vale a relação: 

$$
p_O - p = \rho_O gh = \dfrac{1}{2}\rho v^2
$$

e, consequentemente, 

$$
v = \sqrt{2\dfrac{p_O}{p}gh}
$$

que é o cálculo efetuado para determinar a velocidade de aviões.

## Fenômeno de Venturi 

Denominamos <b>fenômeno de Venturi</b> o comportamento de que, dado um tubo com um fluido incompressível em escoamento estacionário em seu interior com uma região mais delgada ao logo de seu comprimento, a pressão do fluido diminui nas regiões de menor espessura enquanto a velocidade do fluido aumenta. 

Essa constatação foi feita pelo italiano Giovanni Venturi (1746-1822) e noemada em sua homenagem. 

Podemos analisar este fenômeno imaginando este tubo com vasos nas seções mais ou menos espessoas. No primeiro e no terceiro tubo, o fluido eleva-se a uma altura $h_1$, enquanto no segundo tubo, sobre a região mais estreita, o líquido eleva-se a uma altura $h_2$, de forma que $h_2 \lt h_1$. 

Considerando ainda $A_1$ e $A_2$ as áreas das respectivas seções transversais e $(p_1, v_1), (p_2, v_2)$ as pressões e velocidades, pela equação de Bernoulli temos: 

$$
p_1 + \dfrac{1}{2}\rho v_1^2 = p_2 + \dfrac{1}{2}\rho v_2^2 
$$

Além disso, a equação de continuidade resultará em 

$$
v_2 = \dfrac{A_1}{A_2}v_1 
$$

e, consequentemente, $v_2 \gt v_1 \implies p_2 \lt p_1$. 

Ainda, pelos manômetros adicionados (os tubos), podemos mensurar a diferença de pressão $p_1 - p_2$: 

$$
p_1 - p_2 = (p_0 + \rho gh_1) - (p_0 + \rho gh_2) = \rho g(h_1 - h_2) = \rho gh
$$

Caso seja necessário obter a velocidade $v_1$, este sistema forma o chamado <b>medidor de Venturi</b>. Combinando as equações obtidas e resolvendo para $v_1$, encontramos: 

$$
v_1 = A_2 \sqrt{\dfrac{2gh}{A_1^2 - A_2^2}}
$$

O fenômeno de Venturi tem como uma de suas aplicações a aspiração de fluidos e a produção de vácuo e, por isso, também conhecido como o <b>princípio das bombas aspirantes</b>: a diferença de pressã oprovoca a movimentação de fluido e, consequentemente, das partículas a serem aspiradas.

# Referências

1. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 2: Fluidos; oscilações e ondas; calor. 4. ed. rev. São Paulo: Blucher, 2002