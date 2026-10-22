# Introdução à Termodinâmica

# Introdução

Termodinâmica é o estudo de como o <b>calor</b> consegue realizar trabalho (isto é, transferir energia) e por consequência ser utilizado para os mais variados propósitos, como mover máquinas. Ao longo do tempo, diferentes estudos e as famosas <a href="/books/high_school/physics/physics2/laws_thermodynamics.html" target="_blank">leis da termodinâmica</a> foram desenvolvidas.

Esse exemplo foi uma das grandes razões pelo desenvolvimento acelerado da termodinâmica na ciência nos últimos séculos, começando pela Revolução Industrial, que foi impulsionada por máquinas à vapor. 

![](https://upload.wikimedia.org/wikipedia/commons/f/f0/Steam_engine_in_action.gif)

<i>Um motor à vapor, provavelmente o exemplo clássico da termodinâmica. A pressão exercida pelo vapor exerce uma força que move os pistões. GIF sob CC-BY, via <a href="https://commons.wikimedia.org/wiki/File:Steam_engine_in_action.gif" target="_blank">Wikimedia Commons</a>.</i>

Para darmos inicio ao estudo da termodinâmica, iremos primeiro discorrer sobre gases, o gás ideal e as transformações gasosas, o meio mais comum e prático de trabalho termodinâmico que temos à disposição. 

# Gases

Chamamos <b>gases</b> os corpos físicos formados por partículas em movimento, com grande quantidade de energia cinética que, ao contrário dos <b>vapores</b>, não conseguem ser condensados com facilidade a partir de mudanças em sua temperatura e pressão. 

No estudo dos gases, a <b>teoria cinética</b> dos gases nos fornece o conceito de <b>gás ideal</b>, um gás hipotético cujas partículas estão sempre em um movimento aleatório e constante. A velocidade dessas partículas está relacionada com a temperatura desse gás. 

Embora nenhum gás real possua essas características, o gás ideal se torna uma aproximação cada vez melhor da realidade a medida que aumentamos a temperatura e diminuímos a pressão sobre o gás analisado.

Geralmente em nossos estudos, utilizamos como aproximação o gás ideal, pela facilidade que isso nos oferece, embora em pesquisas mais sérias, essa aproximação se torna tão eficaz e novos métodos devem ser adotados.

![](https://upload.wikimedia.org/wikipedia/commons/6/6d/Translational_motion.gif)

<i>Se você pudesse ver um gás bem de perto, veria várias partículas “voando” livremente em colisões perfeitamente elásticas. Essa visão é explicada pela teoria cinética dos gases. Domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Translational_motion.gif" target="_blank">Wikimedia Commons</a>.</i>

A formulação dessa <b>teoria cinética dos gases</b> iniciou-se nos princípios da termodinâmica, que surgiu da <b>mecânica estatística</b> e suas formulações a partir do modelo de gás mencionado anteriormente permitu grandes avanços na compreensão física de seus comportamentos. 

## A lei dos gases ideais

A chamada <b>lei dos gases ideais</b> foi enunciada no começo do século XIX pelo físico francês Émile Clapeyron, a partir da combinação das leis empíricas de Boyle, Charles, Avogadro e Gay-Lussac e, posteriormente, derivada por dois alemães, August Krönig e Rudolf Clausius, que utilizaram-se da mecânica estatística.

A relação, conhecida por ser uma <b>equação de estado</b>, — pois relaciona as variáveis do gás num instante específico —  é enunciada geralmente nas formas abaixo, com $k_B$ se referindo à <b>constante de Boltzmann</b> $(k_B \approx 1.38 \cdot 10^{-23} \text{ J/K})$, $N_A$ ao <b>número de Avogadro</b> $(N_A \approx 6.02 \cdot 10^{23})$ e $R$ a chamada <b>constante do gás ideal</b> $(R = k_B \cdot N_A \approx 8.314 \text{ J / mol K})$. Além das constantes, temos como variáveis a <b>pressão</b>, o <b>volume</b> e a <b>temperatura</b> do gás.

$$
PV=nRT=nk_BT=nk_BN_AT
$$

Essas variações existem em consideração dos diferentes objetivos que uma medição ou um cálculo pode ter, com a constante do gás ideal mais utilizada em escala macroscópica e a constante de Boltzmann empregada em análises na escala de partículas, como será exemplificado na próxima seção. 

Um efeito dessa mudança de constante empregada surtido nos cálculos é o cuidado devido com a consistência das unidades. 

## Pressão, velocidade e energia

Conceitualmente, a grandeza <b>pressão</b> é definida como a razão entre a magnitude de uma força e a área que esta afeta. No caso dos fluidos (gases e líquidos), ela pode ser compreendida como uma medida da “força” que suas partículas aplicam ao colidirem com seu recipiente.

$$
P=\dfrac{m \cdot v_m^2}{3 \cdot V}
$$

À partir da TCG, a relação acima pode ser derivada para gases monoatômicos, com $m$ sendo a massa do gás, $v_m$ a <b>velocidade média das partículas</b> do gás e $V$ seu volume.

<aside>

A unidade no Sistema Internacional de Unidades para a pressão é o <b>Pascal</b> (Pa).

$$
\text{1 Pa} = \dfrac{\text{N}}{\text{m²}}
$$

</aside>

![](https://upload.wikimedia.org/wikipedia/commons/6/6b/Pressure_cooker_-_Hawkins%2C_Contura_Model_-_3_litres_-_4.jpg)

<i>As panelas de pressão se utilizam dessa propriedade, e seu efeito nos pontos de ebulição, para economizar gás durante o cozimento. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Pressure_cooker_-_Hawkins,_Contura_Model_-_3_litres_-_4.jpg" target="_blank">Wikimedia Commons</a>.</i>

Diferentes maneiras existem para calcular a velocidade das partículas de um gás — cada uma com uma nuance diferente. 

De início, temos a <b>velocidade mais provável</b> $(v_p)$ de ser possuída por qualquer molécula, calculada a partir da expressão abaixo, considerando $R$ a constante geral dos gases, $T$ a temperatura em Kelvin e $M$ a massa molar da substância. 

$$
v_p=\sqrt{\dfrac{2RT}{M}}
$$

Uma outra grandeza, a <b>velocidade média</b> $(v_m)$ é definida como o <b>valor esperado</b> (”média”) da distribuição estatística de velocidades. Em uma das formas de calcular, temos $m$ como a massa de uma partícula do gás.

$$
v_m = \dfrac{2}{\sqrt{\pi}}v_p = \sqrt{\dfrac{8RT}{\pi M}} = \sqrt{\dfrac{8 k_B T}{ \pi m}}
$$

Por fim, outra grandeza é a <b>raiz da velocidade quadrática média</b>, que fornece a velocidade de uma partícula que possui o valor médio de energia cinética dentre as partículas do gás. 

$$
v_{rms} = v_p\sqrt{\dfrac{3}{2}}= \sqrt{\dfrac{3RT}{M}}=\sqrt{\dfrac{3k_BT}{m}}
$$

Uma curiosidade dessa última forma de medir é sua relação íntima com a velocidade do som num gás. Abaixo, $f$ representa os <b>graus de liberdade</b> de uma única partícula — quantidade de maneiras que ela pode se movimentar, incluindo translação, rotação e vibração.

$$
v_\text{som} = v_\text{rms}\cdot \sqrt{\dfrac{f + 2}{3f}}
 = v_p \cdot \sqrt{\dfrac{f + 2}{2f}}
$$

Quando voltamos os olhares para a <b>energia cinética</b> das partículas de um gás, é possível calcular a partir da expressão $E_C = \dfrac{3}{2}pV=\dfrac{3}{2}nRT$, para uma soma da energia cinética de todas as partículas, ou $E_C=\dfrac{3}{2}k_BT$, para a energia cinética média associada a uma única partícula.

# Transformações gasosas

Chamamos <b>transformação gasosa</b> todo processo físico caracterizado pela mudança do <b>estado inicial</b> de um gás, ou seja, em seu <b>volume</b>, <b>pressão</b> ou <b>temperatura</b>. Em sistemas fechados (sem alteração do número de partículas do gás), são identificáveis três tipos de transformações: <b>isobáricas</b>, <b>isovolumétricas</b> e <b>isotérmicas</b>. 

A importância do estudo das transformações gasosas está na sua aplicação, central para a termodinâmica, mencionada no início do documento — pelas transformações gasosas é possível extrair trabalho do gás.

Nas transformações chamadas <b>isobáricas</b> (do grego para “peso”, que originou o prefixo para pressão), temos a conservação da pressão do começo ao fim do processo. A conservação da pressão implica na mudança do volume e da temperatura do gás.

Considerando o índice 1 como o estado inicial e o índice 2 como após o processo, é possível ver o estabelecimento de uma relação linear entre o volume e a temperatura de um gás. 

$$
\dfrac{V_1}{V_2} = \dfrac{T_1}{T_2}
$$

Nas transformações chamadas <b>isovolumétricas</b> ou <b>isocóricas</b> (do grego <i>khorus</i>, “espaço”), o volume do gás permanece constante ao longo do tempo, enquanto sua pressão e sua temperatura sofrem variação. De forma similar, é estabelecida uma relação linear entre a pressão e a temperatura. 

$$
\dfrac{P_1}{P_2} = \dfrac{T_1}{T_2}
$$

Finalmente, nas transformações conhecidas por <b>isotérmicas</b>, temos a conservação da temperatura do gás ao longo do tempo e a variação de seu volume e de sua pressão. Diferentemente das outras duas transformações, é estabelecida uma relação hiperbólica entre as grandezas variáveis. 

$$
P_1V_1 = P_2V_2 \iff \dfrac{P_1}{V_2}=\dfrac{P_2}{V_1}
$$

## Energia interna

Definimos a <b>energia interna de um gás</b> como a energia total do gás, a soma da energia cinética de suas partículas (além das interações intra e intermoleculares), quando seu centro de massa está em repouso. Seguindo nosso padrão de aproximação, calculamos a energia interna pela expressão abaixo. 

$$
U = \dfrac{3}{2}nRT=\dfrac{3}{2}pV
$$

Uma característica notável é a possibilidade de classificar as transformações gasosas, vistas acima, a partir da <b>mudança de energia interna</b> do gás. Pela dependência da energia interna na temperatura, podemos ver que enquanto ela permanece constante em transformações <b>isotérmicas</b>, o mesmo não acontece nas restantes. 

$$
\Delta U = \dfrac{3}{2}nR \cdot \Delta T
$$

## Trabalho termodinâmico

O <b>trabalho termodinâmico</b>, também conhecido pela denominação <b>trabalho volume-pressão</b>, é o trabalho exercido pela compressão ou expansão de fluidos, e acontece sempre em transformações isobáricas. 

Durante a execução desse trabalho por máquinas, tanto a compressão quanto a expansão do fluido pode ocorrer. Nos momentos de compressão, o gás ganha energia (com trabalho sendo realizado <b>sobre ele</b>). Nos momentos de expansão, o gás cede energia <b>realizando trabalho</b>.

A expressão matemática para encontrar o trabalho realizado pode ser deduzida por meio de uma análise relativamente simples, apoiada pela figura ao lado. 

Partindo de que a expressão para o trabalho de uma força paralela ao deslocamento do corpo é $\tau = Fd$, é possível reescrever a equação de diferentes maneiras. 

$$
\tau = Fd = PAd = P \Delta V
$$

Dessa forma, percebemos que o trabalho realizado (ou sofrido) pelo gás está diretamente relacionado com a variação de seu volume, em pressões constantes.

Em casos mais gerais, em que essa expressão pode não se aplicar, o trabalho é dado como a “área sob a curva” de um gráfico pressão vs volume, a <b>integral</b>.

![](./images/introduction_thermodynamics/introduction_thermodynamics_pvwork.png)

<i>Figura ilustrando o processo do trabalho volume-pressão. Imagem licensiada sob CC-BY, via <a href="https://openstax.org/books/physics/pages/12-2-first-law-of-thermodynamics-thermal-energy-and-work" target="_blank">OpenStax Physics</a>.</i>

# Ciclos termodinâmicos

Chamamos <b>ciclos termodinâmicos</b> as sequências de processos termodinâmicos exercidos num sistema que, após um certo número de processos, retornam o sistema ao estado original. Ciclos termodinâmicos são comuns em motores, com alguns destacando-se pela sua utilização na indústria moderna ou no estudo científico. São eles os ciclos de <b>Carnot</b>, <b>Otto</b> e <b>Diesel</b>.

## Ciclo de Carnot

O <b>ciclo de Carnot</b>, nomeado em homenagem ao seu idealizador, o físico francês Sadi Carnot (1796 — 1832), é um ciclo termodinâmico ideal executado pela máquina de Carnot, a mais eficiente máquina térmica possível fisicamente, mas impossível de ser plenamente construída: o físico idealizou sua máquina como um padrão ideal para mensurar a eficiência de máquinas térmicas reais. 

![](https://upload.wikimedia.org/wikipedia/commons/8/86/Single_Acting_Oscillating_cylinder_steam_engine.gif)

<i>Carnot, ao desenhar seu ciclo, tinha em mente primariamente as máquinas térmicas dominantes de seu tempo — motores à vapor. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Single_Acting_Oscillating_cylinder_steam_engine.gif" target="_blank">Wikimedia Commons</a>.</i>

A máquina ideal de Carnot é dividida entre uma <b>fonte quente</b>, que fornece energia térmica ao gás (uma lareira, um aquecedor elétrico, ...) e uma <b>fonte fria</b>, que absorve a energia térmica do gás. O gás está situado entre essas duas fontes e pode ser exposto ou isolado delas por barreiras adiabáticas. Sobre o gás está situado um pistão, que terá trabalho exercido sobre ele.

O ciclo é dividido em quatro etapas — duas expansões e duas compressões — isotérmicas e adiabáticas. Todos os diagramas do ciclo abaixo foram confeccionados por BlyumJ, sob CC-BY-SA, disponíveis no repositório da Wikimedia Commons.

<aside>

![](https://upload.wikimedia.org/wikipedia/commons/0/09/Carnot_Cycle_Figure_-_Step_1.jpg)

<b>1ª etapa (expansão isotérmica)</b> — O gás sofre uma expansão isotérmica ao ser exposto à fonte quente. Nesse passo, o gás possui uma temperatura infinitesimalmente menor que essa fonte, permitindo uma absorção de calor com uma mudança negligível da temperatura do gás.

</aside>

<aside>

![](https://upload.wikimedia.org/wikipedia/commons/1/17/Carnot_Cycle_Figure_-_Step_2.png)

<b>2ª etapa (expansão adiabática)</b> — O gás é isolado da fonte quente e continua a se expandir num processo adiabático, exercendo trabalho no pistão. Esse trabalho causa o resfriamento do gás, que neste passo é resfriado até atingir uma temperatura infinitesimalmente maior que a temperatura da fonte fria.

</aside>

<aside>

![](https://upload.wikimedia.org/wikipedia/commons/4/46/Carnot_Cycle_Figure_-_Step_3.png)

<b>3ª etapa (compressão isotérmica)</b> — O gás cede calor para a fonte fria, estando isolado termicamente da fonte quente. Perdendo energia, sofre uma compressão isotérmica de forma semelhante ao passo 1. 

</aside>

<aside>

![](https://upload.wikimedia.org/wikipedia/commons/8/80/Carnot_Cycle_Figure_-_Step_4.png)

<b>4ª etapa (compressão adiabática)</b> — O gás é isolado termicamente das duas fontes, com o exterior continuando a realizar trabalho sobre o gás, comprimindo-o num processo adiabático. Sua energia interna aumenta até os níveis iniciais, retornando o sistema para o estado inicial e concluindo o ciclo.

Neste ciclo o trabalho exercido pelo gás está nas etapas de expansão, com os limites da eficiência do motor estando nas temperaturas das fontes. De fato, podemos mensurar a eficiência da máquina de Carnot pela expressão a seguir.

$$
\nu = 1 - \dfrac{T_F}{T_Q}
$$

</aside>

## Ciclo de Otto

O <b>ciclo de Otto</b> também é um ciclo termodinâmico ideal, porém com um propósito diferente.

Nomeado em homenagem ao engenheiro alemão Nicolaus Otto (1832 — 1891), o ciclo descreve o funcionamento ideal de um motor de combustão interna de ignição à vela, como os encontrados em automóveis.

![](https://upload.wikimedia.org/wikipedia/commons/4/4a/Nikolaus_August_Otto.png)

<i>Nicolaus Otto, c. 1868. O engenheiro fundou a Deutz, que fabrica motores até hoje. Seu filho, Gustav Otto, fundou uma das empresas precursoras da BMW. Domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Nikolaus_August_Otto.png" target="_blank">Wikimedia Commons</a>.</i>

Embora ele também possa ser descrito para motores “de dois tempos”, o ciclo abaixo descrito será o de quatro tempos.

1. <b>Compressão adiabática:</b> a mistura ar-combustível é comprimida pelo pistão, aumentando sua temperatura, num processo adiabático;
2. <b>Ignição:</b>> o combustível é denotado pela vela do motor, gerando uma mistura gasosa altamente pressurizada e com alta energia inteira. Essa etapa pode ser descrita como um processo isocórico;
3. <b>Expansão adiabática:</b> o gás exerce trabalho sobre o pistão do motor ao expandir-se sem trocar calor com o ambiente; 
4. <b>Expulsão do calor e do combustível residual:</b> a energia térmica residual do processo, além do restante da mistura ar-combustível não detonada, é expulsa, com novo ar entrando no motor. O motor está de volta ao estado inicial pronto para voltar ao passo 1.

![](https://upload.wikimedia.org/wikipedia/commons/a/a6/4-Stroke-Engine.gif)

<i>Animação demonstrando o funcionamento de um motor de quatro tempos. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:4-Stroke-Engine.gif" target="_blank">Wikimedia Commons</a>.</i>

## Ciclo de Diesel

O <b>ciclo de Diesel</b>, nomeado em homenagem ao inventor franco-alemão Rudolf Diesel (1858 — 1913), é bem similar ao <b>ciclo de Otto</b>, porém com uma diferença chave: a ausência do detonador presente nos motores à gasolina. Os motores Diesel são arquitetados com a autodetonação do combustível em mente, sendo mais eficientes, embora mais difíceis de construir e manter.

Este ciclo termodinâmico pode ser descrito de forma didática em seis passos.

1. <b>Entrada de ar</b> no motor; 
2. <b>Compressão adiabática</b> do ar pelo pistão;
3. <b>Injeção de combustível</b>, que se mistura com o ar comprimido, detonando-se e empurrando o pistão numa expansão isobárica;
4. Com o fim da combustão de todo o combustível, <b>o gás</b> quente <b>continua</b> <b>expandindo-se abiabaticamente</b>; 
5. <b>Válvula de escape aberta</b>, queda abrupta da pressão no interior do cilindro, que equaliza-se com a pressão atmosférica; 
6. <b>Expulsão de resíduos</b> e do gás do interior do cilindro;

![](https://upload.wikimedia.org/wikipedia/commons/8/89/Diesel_Engine_%284_cycle_running%29.gif)

<i>Animação de um motor de quatro tempos em um ciclo Diesel. GIF sob CC-BY, via <a href="https://commons.wikimedia.org/wiki/File:Diesel_Engine_(4_cycle_running).gif" target="_blank">Wikimedia Commons</a>.</i>