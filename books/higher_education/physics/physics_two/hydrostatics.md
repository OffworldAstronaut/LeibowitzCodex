# Hidrostática 

# Propriedades dos fluidos

## O que é um fluido?

Dizemos que os líquidos e os gases são <b>fluidos</b>, pois estes não possuem nem forma nem volume definido, ao contrário dos sólidos. Mais especificamente, os líquidos possuem volume bem definido mas não forma, assumindo a do recipiente. Por outro lado, os gases não possuem nem volume nem forma definidos, expandindo até ocupar todo o recipiente. Uma outra definição intuitiva é que os fluidos são corpos com capacidade de <b>escoar</b>.

Uma definição mais precisa para estes entes físicos requer a introdução do conceito de <b>tensão</b>.

Denominamos <b>tensão</b> uma grandeza que mensura a razão entre a força aplicada e a área que sofre a atuação dessa força. Dependendo da direção da força aplicada, classificamos a tensão como uma <b>tração</b>, uma <b>compressão</b> (ou simplesmente <b>pressão</b>) ou um <b>cisalhamento</b>. As tensões de traça e compressão são ambas normais à superfície considerada, enquanto a tensão de cisalhamento é tangencial.

Consequentemente, isso nos permite redesenhar nossa definição de fluidos como corpos que não resistema a tensões de cisalhamento e, por isso, começam a se mover. Sólidos diferenciam-se destes por produzirem tensões internas que balanceiam a tensão da força externa, até um ponto de deformação ou rompimento.

Uma consequência dessa definição é que um fluido com velocidade nula (isto é, <b>em equilíbrio</b>) não possui tensões tangenciais atuantes sobre ele, embora possa possuir tensões normais.
s

# Pressão num fluido

## O modelo de meio contínuo

Na escala macroscópica, as propriedades físicas de um fluido são aproximadamente uniformes em toda a sua extensão. Essa constatação motiva a criação do chamado <b>modelo de meio contínuo</b>, que despreza as características microscópicas deste fluido. 

Como esperado, esse modelo possui limitações ao se aproximar da escala molecular ou em gases extremamente rarefeitos. 

Este modelo motiva assim uma reinterpretação física de um infinitésimo de volume, que deve ser visto como uma espécie de "infinitésimo físico", um elemento de volume de dimensões muito menores que a escala macroscópica, porém muito maiores que as distâncias interatômicas. 

## Densidade num ponto particular

Com essas considerações, podemos definir a densidade $\rho$ num ponto $P$ de um fluido pela expressão 

$$
\rho = \lim_{\Delta V \to 0} \dfrac{\Delta m}{\Delta V} = \dfrac{dm}{dV}
$$

com $\Delta m$ sendo a massa do eleemnto de volume $\Delta V$ em torno do ponto $P$. Pela análise dimensional no Sistema Internacional, temos que a unidade da densidade é o quilograma por metro cúbico (kg/m³).

## Forças volumétricas e forças superficiais

Ao classificarmos forças que agem sobre um fluido, temos duas categorias a se considerar: as <b>forças superficiais</b> e as <b>forças volumétricas</b>.

As forças volumétricas são forças de longo alcance que atuam em todos os pontos do fluido. Além disso, a magnitude dessas forças sobre um elemento do fluido é proporcional ao seu volume. As forças superficiais, por outro lado, são forças de interação de curto alcance entre uma porção do meio limitada por uma superfície $S$ e porções adjacentes.

Vale notar que essa definição de força superficial não se restringe apenas ao contexto de fluidos. Com efeito, a reação de contato entre corpos sólidos é um exemplo de força superficial, atuando como interação entre a região do corpo limitada pela superfície de contato e o outro sólido.

Enquanto as forças volumétricas são proporcionais ao volume de um elemento de volume, as forças superficiais são proporcionais à área de um elemento de área. Além disso, geralmente essas forças dependem da orientação do elemento de superfície considerado: num plano inclinado, por exemplo, a inclinação do plano modifica o módulo da força de reação normal. De forma geral, é útil convencionar um versor normal à superfície, $\hat{n}$, para definir a orientação desta superfície.

Logo, se o sentido do versor $\hat{n}$ é o da normal externa, dizemos que uma tensão nessa orientação é uma tração e, caso esteja orientada no sentido oposto, denominamos como uma compressão (ou simplesmente pressão).

## Pressão num fluido em equilíbrio

Considerando um fluido em equilíbrio, isto é, sem tensões tangenciais, temos que a força superficial sobre um elemento de superfície $dS$ corresponde a uma pressão $p$. Dessa forma, podemos escrever

$$
d\vec{F} = -p\hat{n}dS \iff \dfrac{d\vec{F}}{dS} = -p\hat{n}
$$

com 

$$
p = \left|\dfrac{d\vec{F}}{dS}\right| = \lim_{\Delta S \to 0} \left|\dfrac{\Delta F}{\Delta S}\right|
$$

Vemos que a pressão $p$ é uma grandezaz escalar sempre positiva. O sinal negativo indica que a orientação do vetor de força está "para dentro", seguindo a orientação da normal interna. 

# Equilíbrio num campo de forças

Considere um fluido em equilíbrio num campo de forças. Considere ainda um elemento cilíndrico de volume com altura $dz$ e base(s) $dS$ e dois pontos $P(x, y, z)$ e $P(x, y, z + dz)$. 

Por definição, temos que a força volumétrica que atua sobre esse elemento de volume cilíndrico é da forma 

$$
\Delta \vec{F} = \vec{f} \cdot \Delta V
$$

com $\vec{f}$ sendo a chamada <b>densidade de força</b> do campo (isto é, a grandeza de "força por unidade de volume") e $\Delta V = dSdz$ o volume deste elemento de volume considerado.

Temos ainda que, ao restringirmo-nos ao eixo $z$, a força volumétrica que atual sobre o elemento de volume é da forma

$$
f_z dSdz
$$

Pelos resultados anteriores, temos que a contribuição das forças superficiais sobre esse elemento de volume é 

$$
[-p(x, y, z + dz) + p(x, y, z)]dS 
$$

além disso, note que 

$$
p(x, y, z + dz) - p(x, y, z) = \dfrac{\partial p}{\partial z}(x, y, z) \ dz \iff -p(x, y, z + dz) + p(x, y, z) = -\dfrac{\partial p}{\partial z}(x, y, z) \ dz 
$$

Portanto, somando as contribuições das forças volumétricas e superficiais, temos que a condição de equilíbrio é da forma 

$$
\begin{align*}
    dS\left[-\dfrac{\partial p}{\partial z}(x, y, z) \ dz\right] + f_z dSdz = 0
    &\iff \left[f_z - \dfrac{\partial p}{\partial z}(x, y, z)\right]dSdz = 0 \\ 
    &\iff f_z = \dfrac{\partial p}{\partial z}
\end{align*}
$$

Isto é, a componente vertical da densidade de força do campo é igual a taxa de variação da pressão no eixo vertical. Nota-se que a escolhemos a normal $\hat{n}$ paralela ao eixo $z$. Caso outros eixos fosem escolhidos, equações análogas seriam produzidas — estas equações são chamadas <b>equações básicas da hidrostática</b>. 

$$
\begin{array}{ccc}
    f_x = \dfrac{\partial p}{\partial x} & f_y = \dfrac{\partial p}{\partial y} & f_z = \dfrac{\partial p}{\partial z}
\end{array}
$$

Uma consequência disso é que podemos escrever 

$$
\vec{f} = \nabla p 
$$

Ou seja, a densidade de força volumétrica é o vetor gradiente da pressão, sendo perpendicular às superfícies isobáricas e apontando na direção em que a pressão cresce mais rapidamente. 

Adotando o campo de força gravitacional, de forma que $\vec{f} = \rho \vec{g}$ e $f_x = f_y = 0$ e, portanto, $\vec{f} = \vec{f_k} = -\rho g \hat{k}$, temos 

$$
\dfrac{dp}{dz} = -\rho g
$$

Isto é, a pressão aumenta conforme a profundidade, como esperado.

# Fluido incompressível no campo gravitacional

É possível verificar experimentalmente que a densidade de um líquido é aproximadamente constante independentemente da pressão sofrida por ele. Assim, é razoável na hidrostática adotar o modelo de um <b>fluido incompressível</b>, que possui densidade constante em todos os seus pontos. 

Integrando a equação anterior com respeito a $z$, obtemos a chamada <b>lei de Stevin</b>, nomeada em homenagem ao físico e engenheiro neerlandês Simon Stevin (1548-1620):

$$
\int \dfrac{dp}{dz} \ dz = \int -\rho g \ dz \iff p = -\rho gz + k, k \in \mathbb{R}
$$

Tomando duas altitudes $z_1$ e $z_2$, temos $p(z_1) = \rho gz_1 + k$ e $p(z_2) = \rho gz_2 + k$ e, consequentemente, 

$$
p(z_2) - p(z_1) = \rho gz2 - \rho gz_1 + k - k = \rho g(z_2 - z_1)
$$

Assim, tomando $p(z_1) = p_0$, $z_2 - z_1 = h$ e $p(z_2) = p$, temos

$$
p - p_0 = \rho gh \iff p = \rho gh + p_0
$$

Isto é, a pressão abaixo de um líquido aumenta linearmente com a profundidade. Está demonstrada a lei de Stevin em sua forma mais usual.

Esse resultado também pode ser demonstrado de uma outra maneira, considerando as forças que o líquido está sujeito como <b>forças conservativas</b>. Como <a href="/books/higher_education/physics/physics_one/newtons_laws.html" target="_blank">visto anteriormente</a>, isso implica em 

$$
\vec{F} = -\nabla U
$$

com $\vec{F}$ sendo a força atuante e $U$ a energia potencial. Introduzindo $u$ como a densidade de energia potencial (isto é, a grandeza que mensura a energia potencial por unidade de volume), podemos escrever 

$$
\vec{f} = \nabla p = - \nabla u 
$$

Consequentemente, temos que $p$ e $(-u)$ podemos apenas diferir por uma constante, pois suas derivadas parciais são iguais. Segue que as superfícies isobáricas são superfícies equipotenciais. 

Limitando a uma escala próxima da superfície terrestrem temos que $u$ = \rho gz$, com $z$ sendo a altitude. Logo, temos $p(z) = -\rho gz + k$. Realizando as substituições e os rearranjamentos algébricos realizados anteriormente, deduzimos a lei de Stevin em sua forma padrão.

## Líquido em rotação

Um caso interessante para análise é o de um líquido em rotação num recipiente. Considere um recipiente em rotação em torno do eixo vertical $z$, que intersecta o recipiente no centro de sua base (portanto o recipiente possui simetria radial em relação a este eixo). 

Sabemos que após um certo tempo, o líquido gira rapidamente junto com o recipiente, ou seja, em relação a um referencial não inercial $S'$ que rotaciona juntamente com o recipiente, o fluido está em equilíbrio. Dessa forma, além da força gravitacional, o líquido sofre a influência de forças centrífugas da forma 

$$
\vec{F_c} = \Delta m \omega^2 r \hat{r}
$$

em cada um de seus elementos de massa $\Delta m = \rho \Delta V$. Estes elementos estão a uma distância $r$ do eixo, com vetor $\hat{r}$ apontando radialmente para $\Delta V$, com origem no eixo de rotação.

Consequentemente, a densidade de força centrígura é da forma 

$$
\vec{f_c} = \rho \omega^2 r \hat{r} = -\nabla u_c = -\dfrac{du_c}{dr} \hat{r}
$$

COm o termo $u_c(r)$ sendo a densidade de energia potencial associada a força centrífuga. 

$$
u_c(r) = -\dfrac{1}{2}\rho \omega^2 r^2 
$$

Substituindo a densidade total de energia potencial

$$
u = -\dfrac{1}{2}\rho \omega^2 r^2 + \rho gz 
$$

na relação entre pressão e densidade de energia potencial, obtemos: 

$$
p = \dfrac{1}{2}\rho \omega^2 r^2 - \rho gz + k, k \in \mathbb{R}
$$

Tomando como origem o ponto $O$, o ponto de insersecção entre o eixo de rotação e o fluido, vemos que podemos fazer $k = p_0$, a pressão atmosférica, ao tomar $r = z = 0$.

Assim, a relação de pressão no líquido é dada por 

$$
p = p_0 + \dfrac{1}{2}\rho \omega^2 r^2 - \rho gz 
$$

e, consequentemente, a equação de superfície é dada por 

$$
z = \dfrac{\omega^2}{2g}r^2 
$$

obtida ao tomar $p = p_0$. Perceba que essa é uma equação de um paraboloide de revolução. Como aplicação industrial, essa propriedade foi utilizada para a fabricação de espelhos parabólicos, úteis para telescópios de grande porte.

# Aplicações

## Princípio de Pascal

O <b>princípio de Pascal</b> é uma consequência da lei de Stevin> como a diferença de pressão entre dois pontos num líquido homogêneo em equilíbrio depende apenas da diferença entre suas respectivas profundidades, uma variação da pressão em um ponto do líquido é transmitida, tornando-se uma variação de pressão em todo o fluido. 

Dessa forma, dados duas áreas $A_1$ e $A_2$ sobre um líquido com forças de módulo $F_1$ e $F_2$ aplicadas sobre elas, vale a relação

$$
\dfrac{F_1}{A_1} = \dfrac{F_2}{A_2}
$$

Esse princípio permite o funcionamento de prensas e macacos hidráulicos, por exemplo.

## Vasos comunicantes

Caso tenhamos um recipiente formado por vasos conexos, a lei de Stein garante que o nível d'água em cada vaso é de mesma altura, com esta constatação sendo chamada de <b>princípio dos vasos comunicantes</b>. 

Uma consequência interessante desse princípio é que, caso tivermos dois líquidos imiscíveis com densidades diferentes, estes se elevarão a alturas diferentes em seus recipientes em relação a um plano horizontal $AB$.

Tomando $p$ como a pressão sobre essa superfície, temos, pela lei de Stevin: 

$$
\begin{align*}
    p = p_0 + \rho gh_1 = p_0 + \rho_2 gh_2
    &\iff \rho_1 gh_1 = \rho_2 gh_2 \\ 
    &\iff \boxed{\dfrac{h_1}{h_2} = \dfrac{\rho_2}{\rho_1}}
\end{align*}
$$

## Manômetros e a pressão atmosférica

A motivação para o conceito de pressão atmosférica surgiu na época de Galileu, durante a Itália renascentista. Uma fonte foi projetada para o duque da Toscana, entretanto, foi observado que a água não conseguia subir mais do que dez metros.

Evangelista Torricelli, estudante da Academia de Florença e posteriormente sucessor de Galileu como seu catedrático, justificou o acontecimento como uma demonstração do peso que a atmosfera possui, exercendo uma pressão sobretudo na Terra — a <b>pressão atmosférica</b>.

<aside>

<i>Vivemos no fundo de um oceano de ar que, conforme mostra a experiência, sem dúvida tem peso.</i> <br><br> Evangelista Torricelli, conforme descrito por Nussenzveig [1].

</aside>

Esta constatação foi de certa forma revolucionária para o estudo dos fluidos, pois acreditava-se na época, seguindo a física aristotélica, que a natureza possuía uma espécie de "horror ao vácuo", fazendo de tudo para que este não fosse realizado.

Dado que a pressão exercida pela atmosfera foi o suficioente para deter a água em dez metros, Torricelli supôs que uma coluna de mercúrio, um material cerca de 13 vezes mais denso que a água, iria elevar-se a uma altura 13 vezes menor (em torno de 76 centímetros). Essa experiência foi executada por seu colega, Vincenzo Viviani, mostrando que a intuição de Torricelli estava correta. 

A experiência de Viviani motivou a criação da unidade de pressão <b>milímetros de mercúrio</b> (mmHg), Duas outras personalidades, Blaise Pascal (e seu cunhado Périer) e Otto von Guerricke produziram, respectivamente, duas experiências notáveis.

Pascal e seu cunhado verificaram que a pressão atmosférica de fato diminuía de acordo com o aumento de altitude, como esperado, ao levar o aparato do experimento de Viviani ao topo do monte Puy de Dome, que possuía uma elevação de, aproximadamente, um quilômetro.

Otto von Guerricke, por outro lado, realizou a proeza de, ao provocar um vácuo no interior de uma esfera metálica formada por dois hemisférios separáveis, conduzir uma tentativa de separá-las com um conjunto de cavalos, sem sucesso. Seu feito demonstrou o poder da pressão atmosférica sobre os objetos de nosso cotidiano.

Os <b>manômetros de tubo aberto</b> são dispositivos compostos por uma câmara que contém gás em seu interior, exercendo uma pressão $p$ sobre um fluido no interior de um tubo que é aberto em sua outra extremidade. Tomando um ponto C no fundo do tubo, é possível escrever sua pressão como 

$$
p_C = p + \rho gz = p_0 + \rho g (h + z)
$$

com $p$ sendo a pressão do recipiente do manômetro, $\rho$ a densidade do líquido, $g$ a aceleração gravitacional e $z$ a altura entre o plano $AB$ e o fundo do recipiente. Esse plano é formado pela linha divisória entre o líquido do tubo e ogás da câmara manométrica. Além disso, $p_0$ é a pressão atmosférica e $h$ é a distância entre o plano $AB$ e a extermidade do líquido próxima à abertura do tubo. 

Reorganizando a equação anterior, obtemos uma expressão semelhante a lei de Stevin: 

$$
p - p_0 = \rho gh
$$

Com as grandezas $p - p_0$ e $p$ conhecidas, respectivamente, como pressões manométrica e absoluta.

## Princípio de Arquimedes

O <b>princípio de Arquimedes</b>, nomeado em homenagem ao genial filósofo e matemático grego Arquimedes de Siracusa (287 a.C - 212 a.C), estabelece que um corpo sólido imerso em um fluido sobre a atuação de uma força vertical chamada <b>empuxo</b>, de módulo proporcional ao volume submerso do sólido.

Podemos demonstrar esse princípio considerando uma situação mais específica que nos permitirá introduzir uma generalização a partir de um princípio enunciado por Stevin em 1586, o <b>princípio da solidificação</b>.

Considere assim um recipiente repleto de fluido. Neste fluido está imerso um corpo cilíndrico de altura $h$ e base de área $A$. Temos que as pressões laterais sobre o corpo anulam-se. Entretanto, pela lei de Stevin, vemos que a pressão do líquido sob o corpo é maior que a pressão na porção superior, valendo a relação 

$$
p_2 - p_1 = \rho gh 
$$

Assim, temos que a resultante das forças superficiais será uma força $\vec{E}$ dirigida para cima

$$
\vec{E} = E \hat{k}
$$

de forma que, pela definição de pressão, temos 

$$
E = p_2A - p_1A = \rho gh A = \rho Vg = mg
$$

logo, 

$$
\vec{E} = mg\hat{k} = -\vec{P_f}
$$

com $\vec{P_f}$ sendo o peso da porção de fluido deslocada pelo sólido.

Stevin e seu princípio entram através de um pouco de imaginação: caso o corpo sóldi fosse completamente substituído pelo fluido, o volume deslocado por este corpo estaria em equilíbrio com o resto do fluido. Consequententemente, a resultante das forças superficiais que atuam sobre a superfície do volume do sólido deve ser igual e contrária a resultante volumétrica (o peso do fluido deslocado). Como as pressões superficiais não se alteram se imaginarmos a superfície do volume "solidificada", temos que a resultante das forças superficiais sobre o sólido é igual e contrária ao peso do fluido deslocado.

A generalização nasce da constatação que $\vec{E}$ e $\vec{P_f}$ possuem suas expressões presevadas independentemente do formado do corpo submerso (como pode ser imaginado pelo princípio de solidificação de Stevin). 

Como nota final desta primeira parte, vale mencionar que no princípio de Arquimedes está contida a condição necessária e suficiente para flutuar, isto é, um corpo não estar plenamente submerso: a densidade média do sólido deve ser menor qeu a densidade do líquido.

## Equilíbrio dos corpos flutuantes

Quando corpos flutuantes estão em sua posição de equilíbrio, não apenas a resultante de $\vec{E}$ e $\vec{P}$ é nula, como também o torque resultante. Consequentemente, o centro de empuxo $C$ (o centro de gravidade da porção submersa do sólido) e o centro de gravidade de todo o corpo devem ambos pertencer a uma mesma vertical. Uma nota importante sobre o centro de empuxo é que neste ponto está aplicada a força de empuxo $\vec{E}$.

Como diferenciar se este equilíbrio é <b>estável</b> ou <b>instável</b>? Para tal, é necessária a definição do <b>metacentro</b> do corpo flutuante. 

Definimos o metacentro $M$ como o ponto resultante da intersecção entre a reta formada por $G$ e $C$ e a reta que passa pelo ponto $C'$ com direção do vetor $\vec{E'}$. O ponto $C'$ é o centro de empuxo deslocado para uma nova posição em decorrência da rotação do corpo, enquanto $\vec{E'}$ é o novo vetor de empuxo decorrente da mesma rotação, que produz uma alteração no volume de fluido deslocado.

Quando $M$ está acima de $G$, o torque resultante reestabelece a posição de equilíbrio. Se $G$ sobre acima de $M$, o equilíbrio se torna instável em razão do torque aumentar ainda mais o desvio rotacional do corpo. Tomando como exemplo um pequeno barco, ele pode virar de ponta-cabeça caso seja rotacionado em graus o suficiente, por exemplo, no momento de embarque.

## Paradoxo hidrostático

O nascimento do chamado <b>paradoxo hidrostático</b> vem da formulação da lei de Stevin. Perceba que, como deduzido por nós, a pressão no fundo de um recipiente depende apenas de sua profundidade, independentemente do volume de líquido que estiver acima. 

Este aparente paradoxo pode ser solucionado do ponto de vista físico ao introduzir a percepção de que a força nas paredes dos recipientes "contraditórios" pode ser decomposta, produzindo componentes que apontam verticalmente para cima ou para baixo. Estes componentes compensam a diferença de volume (e consequentemente, peso do fluido) entre cada recipiente, solucionando o paradoxo.

## Variação da pressão atmosférica com a altitude

Com nossas ferramentas até o momento é muito interessante analisarmos como a pressão atmosférica varia com a altitude, deduzido a chamada <b>lei de Halley</b>. 

Imagine uma atmosfera isotérmica — uma aproximação razoável para altitudes de até um quilômetro. Temos, pela lei dos gases ideais, que a densidade é diretamente proporcional à pressão.

$$
\dfrac{\rho(z)}{p(z)} = \dfrac{\rho(0)}{p(0)} = \dfrac{\rho_0}{p_0}
$$

com $z=0$ sendo o nível do mar. Substituindo a equação anterior na relação $\dfrac{dp}{dz} = -\rho g$, obtemos 

$$
\dfrac{dp}{p} = -\dfrac{\rho_0 g}{p_0} dz = -\lambda dz
$$

com $\lambda = \dfrac{\rho_0 g}{p_0}$. Perceba que essa equação é análoga à <a href="/books/higher_education/physics/physics_one/momentum.html" target="_blank">equação da variação da velocidade de um foguete</a>. Esta também pode ser integrada de forma análoga.

Dessa forma, integrando em $p$, obtemos 

$$
\int_{p_0}^{p} \dfrac{dp}{p} = \eval{\ln{p}}_{p_0}^p = \ln{p} - \ln{p_0} = \ln{\dfrac{p}{p_0}} = -\lambda \int_0^z = -\lambda z
$$

que por fim nos conduz à lei de Halley

$$
p(z) = p_0e^{-\lambda z}
$$

uma aproximação da queda exponencial da pressão com a altitude.

# Referências 

1. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 2: Fluidos; oscilações e ondas; calor. 4. ed. rev. São Paulo: Blucher, 2002