# Quântica em Seis Passos <br> Volume I: Luz e Polarização

# Prefácio

Concebido originalmente em 2010 AD pelo físico neo-romano Valerio Scarani, o tratado <i>Six Quantum Pieces: A First Course in Quantum Physics</i>, traduzido para o vernacular eclesiástico como <i>Sex Fragmenta Quantica</i> e aqui, originalmente para a língua dos lusíadas, como <i>Quântica em Seis Passos</i>, possui o objetivo de apresentar os básicos da teoria quântica e de suas principais aplicações de forma palatável para as mentes jovens, que ainda não entraram na Schola Suprema.

Esta série de volumes foi produzida de forma conjunta a partir das notas de aula de Lourenço Agostinho, professor titular da Universidade Albertiana desde 2862 AD.

# Definições e medições básicas 

Classicamente, na Física moderna, o comportamento da luz, como radiação eletromagnética, é descrito pelas equações de Maxwell, formuladas no final do século XIX pelo brilhante físico escocês James Clerk Maxwell.

De fato, na teoria clássica, este ente físico consiste na oscilação combinada de dois campos vetoriais, o campo elétrico e o campo magnético. As oscilações dos campos são simultaneamente perpendiculares entre si e perpendiculares à direção de propagação da luz. 

Neste estudo, então, podemos introduzir uma grandeza chamada <b>polarização</b>. Esta grandeza descreve a direção da oscilação do campo elétrico da luz considerada. Uma maneira de medir essa grandeza por meio de um material chamado <b>polarizador</b>. 

Os polarizadores são materiais que possuem um <i>eixo preferencial</i> para a oscilação do campo elétrico, em razão de sua estrutura molecular. De ampla aplicação na indústria, diversos tipos e formatos de polarizadores existem, como aqueles empregados nas lentes de óculos de sol ou em fumês de carros.

Esse comportamento dos polarizadores induz o comportamento destes materiais como filtos que permitem apenas a passagem de luz cuja polarização aponta em uma determinada direção. Embora uma analogia comum para esse fenômeno seja visualizar o polarizador como um filtro composto por diversas grades unidimensionais e a luz composta por diversos segmentos rígidos como barras de ferro, ela não é eficaz para abranger todos os possíveis acontecimentos. 

Convém, então, a imaginar a luz como uma série de vetores viajando pelo espaço e incidindo no polarizador. Estes vetores são filtrados de sua componente perpendicular à direção do filtro, que é refletida ou dissipada na forma de calor, com apenas sua componente paralela sendo transmitida. 

## Lei de Malus

Um resultado inicial muito importante é a chamada <b>Lei de Malus</b>. Para determiná-la, vamos considerar um sistema simples composto por um polarizador vertical e uma luz incidente. 

Temos então que esse feixe de luz possui uma certa intensidade $I$ inicial e uma polarização $\alpha$, mensurada em relação à vertical. Podemos ainda denotar a intensidade das porções transmitidas e refletidas por $I_T$ e $I_R$, respectivamente. Nesta situação, conforme o discutido previamente, teremos que a porção transmitida será polarizada verticalmente e a refletida, horizontalmente. 

Pela conservação de energia — pois a intensidade é uma medida de energia — podemos escrever: 

$$
I = I_T + I_R
$$

Além disso, intuitivamente, podemos perceber que $I_T$ e $I_R$ são grandezas diretamente proporcionais a $I$, isto é, dados $k_1, k_2 \in \mathbb{R}$, podemos escrever 

$$
\begin{cases}
    I_T = k_1 I \\ 
    I_R = k_2 I
\end{cases}
$$

Substituindo essas relações na equação de conservação de energia, podemos extrair que $k_1 + k_2 = 1$. Como sempre é possível escrever a soma de dois números reais não-negativos como a soma entre o quadrado do seno e o quadrado do cosseno, temos, portanto: 

$$
\begin{cases}
    k_1 = \cos^2{\alpha} \\ 
    k_2 = \sin^2{\alpha}
\end{cases}
\iff
\begin{cases}
    I_T = I \cos^2{\alpha} \\ 
    I_R = I \sin^2{\alpha}
\end{cases}
$$

Esta lei é nomeada em homenagem ao físico, engenheiro, matemático e militar francês Étienne-Louis Malus.

Malus viveu durante a Era Napoleônica na frança, formando-se na Academia de Engenharia Militar e servindo sob Napoleão durante a Campanha do Egito; descreveu matematicamente a polarização da luz, a refração dupla no interior de cristais e entre outros feitos. Faleceu de tuberculose em fevereiro de 1812, aos 36 anos. Foi eternizado como um dos 72 nomes gravados na Torre Eiffel.

## Polarizadores em série

Imagine dois polarizadores horizontais posicionados de tal forma que um feixe de luz incide no primeiro, com sua parte transmitida alcançando o segundo polarizador. É razoável imaginar que a intensidade da luz transmitida pelo primeiro e pelo segundo polarizador são iguais, o que realmente acontece.

Ao rotacionarmos o segundo polarizador de forma que este esteja orientado na  vertical, também é intuitivo pensar que nenhuma luz passará, o que de fato é o que ocorre. 

Mas, e se adicionarmos um terceiro polarizador com uma orientação diferente dos outros dois, entre estes? Pela nossa intuição, seria esperado que a intensidade da luz final seria menor, ou nula, entretanto, o que é verificado experimentalmente é justamente o contrário! Como é possível que mais luz transmitida? 

Esse aparente paradoxo surge precisamente da redução, em nossa imaginação, do polarizador a um mero filtro de luz. Embora seu comportamento <i>lembre</i> um filtro, este não atua como tal sempre. De fato, esse resultado contraintuitivo é esperado pela lei de Malus. 

Imagine então um cenário em que o primeiro polarizador está em uma posição inicial arbitrária e a orientação do segundo e do terceiro polarizador é dada por ângulos $\alpha$ e $\beta$ em relação à orientação do primeiro. Como a intensidade $I_{T3}$ será afetada pela variação de $\alpha$ e $\beta$?

Esse raciocínio é relativamente simples. Pela lei de Malus sabemos que o segundo polarizador irá transmitir uma parcela $I_{T2} = I_{T1}\cos^2{\alpha}$. Assim, como o terceiro polarizador está posicionado num ângulo $\beta - \alpha$ em relação ao anterior, temos que $I_{T3} = I_{T2} \cos^2{(\beta - \alpha)}$. Esta é uma ocasião importante para salientar que a verdadeira importância está na orientação relativa entre os polarizadores, e não numa orientação absoluta em relação a um referencial escolhido. 

## Vetores

Assim como na Mecânica, nos vemos na necessidade de representar <b>direções</b>, em nosso caso, direções de polarização da luz que estamos estudando e dos polarizadores que estamos empregando. Portanto, torna-se conveniente a introdução de um <b>sistema de coordenadas</b> e vetores para a representação da polarização de forma particularmente eficaz.

Considere então um sistema de coordenadas cartesiano, formado por dois eixos coordenados ortogonais entre si. Tomamos como base desse sistema de coordenadas um conjunto ortonormal formados pelos versores $\hat{e_H}$ e $\hat{e_V}$ nas direções horizontal e vertical, respectivamente. 

Portanto, a direção da polarização de um feixe de luz qualquer cujo campo elétrico faz um ângulo $\alpha$ com a horizontal é dada pelo vetor 

$$
\hat{e_\alpha} = \cos{\alpha} \cdot \hat{e_H} + \sin{\alpha} \cdot \hat{e_V}
$$

<aside>

<b>Nota</b> — Este sistema de coordenadas é satisfatório para descrever o tipo de polarização que estamos implicitamente abordando: a <b>polarização linear</b>. Utilizado pela primeira vez por Fresnel em 1822, o termo descreve o regime em que o vetor campo elétrico descreve uma reta num dado plano perpendicular à direção de propagação. Em outros casos, como na polarização elíptica, o vetor campo elétrico não descreve uma reta, e sim uma elipse. Nestes casos especiais, modificações devem ser realizadas para descrever corretamente a polarização da luz.

</aside>

Esta maneira de representar a polarização, portanto, torna-se muito útil pela sua concisão. Por exemplo, a polarização 

$$
\hat{e_\alpha} = \sin{\alpha} \cdot \hat{e_H} + \cos{\alpha} \cdot \hat{e_V}
$$

é perpendicular à polarização 

$$
\hat{e_{\alpha + \frac{\pi}{2}}} = -\sin{\alpha} \cdot \hat{e_H} + \cos{\alpha} \cdot \hat{e_V}
$$

## Medições com divisores de feixe

Embora a polarização possa ser mensurada com polarizadores, como vimos até aqui, uma outra conveniente maneira existe. Os chamados <b>divisores de feixe polarizadores</b> (<i>polarizing beam-splitters</i>) dividem um feixe de luz em parcelas de acordo com sua polarização. Um ponto de vantagem da utilização desses dispositivos é que apenas uma parte desprezível da luz é refletida para trás (<i>backscattering</i>) ou dissipada em forma de calor em relação aos polarizadores usuais. 

Um caso-exemplo para um dispositivo como este é um que permite a passagem de luz polarizada horizontalmente e a reflexão de uma luz polarizada verticalmente. Embora diversas configurações para esses pequenos prismas existam, esta é uma bem usual. 

Nota-se que, como não é possível geralmente rotacionar o próprio dispositivo para mensurar a polarização em relação a um eixo arbitrário, cuja orientação difere do eixo do dispositivo por um ângulo $\alpha$, comumente utiliza-se um rotador de polarização antes do divisor de feixe. Os rotadores são dispositivos ópticos que rotacionam a polarização do feixe em um ângulo $\alpha$ de forma que 

$$
\begin{align*}
    \hat{e_\alpha} &\mapsto \hat{e_H} \\ 
    \hat{e_{\alpha^\perp}} &\mapsto \hat{e_V}
\end{align*}
$$

isto é, a polarização em relação a um eixo $\alpha$ é rotacionada para a horizontal enquanto a polarização perpendicular ao eixo original acompanha essa rotação, preservando sua ortogonalidade. 

Por exemplo, considerando o divisor de feixes usual mencionado anteriormente (transmissão horizontal e reflexão vertical), podemos imaginar um cenário. Um feixe de luz polarizado de transmissão completa pelo divisor de feixes indica sua polarização ao longo de $\hat{e_H}$ e, consequentemente, ao longo de $\hat{e_\alpha}$ antes de sua passagem pelo rotador.

## Tomografia

Perceba que nos sistemas de medição mencionados até o momento, so é possível mensurar o quanto uma polarização está alinhada ou ortogonal em relação a um dado eixo. 

Como poderíamos fazer para executar uma medição que completamente determinasse o vetor $\hat{e_\alpha}$? No caso da polarização linear, basta dividir o feixe sem alterar sua polarização (por meio de espelhos semitransparentes, por exemplo) e efetuar uma medição ao longo de um eixo em cada feixe. Em outras polarizações (como a elíptica), mais medições podem ser necessárias. 

Esse processo que compreende a divisão de feixes e a medição da polarização dos sub-feixes em relação a eixos diferentes é chamado <b>tomografia</b>. 

# Polarização de fótons

A origem da Física Moderna por meio de problemas como o efeito fotoelétrico e a catástrofe do infravermelho/do ultravioleta foi marcada pela introdução de uma nova visão sobre a natureza da luz. Nesta nova análise, a luz não era apenas radiação eletromagnética, mas também se comportava como quantidades discretas (quânticas) de energia. Estas pequenas partículas de luz foram denominadas <b>fótons</b>. 

Essa mudança de paradigma nos motiva a reconsiderarmos nossa descrição ao tratarmos dos fótons inviduais, incluindo nossa notação para polarização. Até o momento, a notação empregada se refere à polarização <b>de um feixe</b>. Ao descreveremos a polarização de um único fóton, utilizamos uma escrita alternativa, a chamada <b>notação bra-ket</b> ou <b>notação de Dirac</b>, batizada em homenagem ao físico Paul Dirac. 

Nesta notação, por exemplo, um <b>estado de polarização</b> de um fóton num ângulo $\alpha$ em relação à horizontal é escrito como 

$$
\ket{\alpha} = \cos{\alpha} \ket{H} + \sin{\theta} \ket{V}
$$

Temos que nessa notação, os objetos $\ket{.}$ ("kets") são vetores-coluna. Assim, é válido escrever 

$$
\begin{align*}
    \ket{H} &= 
    \begin{pmatrix}
        1 \\ 0 
    \end{pmatrix} \\ 
    \ket{V} &= 
    \begin{pmatrix}
        0 \\ 1
    \end{pmatrix}
\end{align*}
$$

e, consequentemente, 

$$
\ket{\alpha} = \cos{\alpha} \ket{H} + \sin{\alpha} \ket{V} = 
\begin{pmatrix}
    \cos{\alpha} \\ 
    \sin{\alpha}
\end{pmatrix}
$$

Como o coeficiente $\cos{\alpha}$ é o produto escalar entre os vetores $\ket{\alpha}$ e $\ket{H}$, podemos denotar este produto por 

$$
\begin{align*}
    \braket{\alpha | H} = \cos{\alpha}
    \braket{\alpha | \ket{V}}
\end{align*}
$$

Uma consequência imediata disso é que é valido escrever 

$$
\begin{align*}
    \braket{H | H} &= 1 
    \braket{V | V} &= 1 
    \braket{H | V} &= 0
\end{align*}
$$

sendo ainda importante mencionar que o conjunto $\{\ket{H}, \ket{V}\}$ é uma base ortonormal do $\mathbb{R}^2$ e, consequentemente, uma "base" para todos os vetores $\hat{e_\alpha}$.

<aside>

<b>Exercício resolvido</b> — Mostre que o conjunto $\{\ket{\alpha}, \ket{\alpha^\perp}\}$ com

$$
\begin{align*}
    \ket{\alpha} &= \cos{\alpha}\ket{H} + \sin{\alpha}\ket{V} \\ 
    \ket{\alpha^\perp} &= \sin{\alpha}\ket{H} - \cos{\alpha}\ket{V}
\end{align*}
$$

é uma "base" para todos os vetores $\hat{e_\beta}$, para qualquer $\alpha \in mathbb{R}$.

</aside>

<aside>

<b>Solução</b> — Dados $k_1, k_2 \in mathbb{R}$, temos que todos os vetores formados pela combinação linear de $\ket{\alpha}$ e $\ket{\alpha^\perp}$ são da forma

$$
k_1 
\begin{pmatrix}
    \cos{\alpha} \\ \sin{\alpha}
\end{pmatrix}
+ k2 
\begin{pmatrix}
    \sin{\alpha} \\ -\cos{\alpha}
\end{pmatrix}
$$

Podemos verificar que $\braket{\alpha \ket{\alpha^\perp}} = 0$ (os vetores são ortogonais) e, portanto, linearmente independentes. Como estes vetores são linearmente independentes, formam uma base para o $\mathbb{R}^2$.

Basta então determinar o conjunto de vetores do plano que formam o círculo unitário. Isto é, precisamos determinar $k_1$ e $k_2$ de forma que 

$$
\left|
\begin{pmatrix}
    k_1 \cos{\alpha} + k_2 \sin{\alpha} \\ 
    k_1 \sin{\alpha} - k_2 \cos{\alpha}
\end{pmatrix}
\right|
= 1 
$$

Desenvolvendo essa equação, obtemos

$$
\begin{align*}
    (k_1 \cos{\alpha} + k_2 \sin{\alpha})^2 + (k_1 \sin{\alpha} - k_2 \cos{\alpha})^2 &= 1 \\ 
    \therefore k_1^2 \cos^2{\alpha} + k_2^2 \sin^2{\alpha} + 2k_1k_2\sin{\alpha}\cos{\alpha} + k_1^2\sin^2{\alpha} + k_2^2\cos^2{\alpha} - 2k_1k_2\sin{\alpha}\cos{\alpha} &= 1 \\ 
    \therefore k_1^2(\sin^2{\alpha} + \cos^2{\alpha}) + k_2^2(\sin^2{\alpha} + \cos^2{\alpha}) &= 1 \\ 
    \therefore k_1^2 + k_2^2 &= 1
\end{align*}
$$

Assim, podemos escrever $k_1 = \cos{\beta}$ e $k_2 = \sin{\beta}$, com $\beta$ sendo o ângulo de polarização em relação ao sistema formado pelos vetores $\ket{\alpha}$ e $\ket{\alpha^\perp}$. Logo, temos que estes vetores formam uma "base" de representação dos ângulos de polarização. 

Isto é, mostramos que é possível rotacionar os eixos em qualquer ângulo e consequentemente, mensurar a polarização de um fóton em relação a qualquer eixo.

</aside>

Um outro ponto para continuar nossa discussão sobre é o análogo da fração transmitida de um feixe através de um polarizador, por exemplo, para o nível dos fótons. Como estas particulas fundamentais são indivisíveis, é impossível pensar em termos de "partes de fóton" ou algo similar. Como prosseguir? 

Uma solução para isto é a interpretação desta grandeza como a <b>probabilidade</b> de um fóton ser transmitido. Dessa forma, ao analisarmos um feixe, estaríamos na verdade observando o comportamento médio de muitos fótons. Portanto, as probabilidades de um fóton passar por polarizadores horizontais e verticais, dado um ângulo de polarização inicial arbitrário $\alpha$ é de, respectivamente, 

$$
\text{P(H dado $\alpha$)} = P(H|\alpha) = \cos^2{\alpha} = |\braket{H | \alpha}|^2 \\ 
\text{P(V dado $\alpha$)} = P(V|\alpha) = \sin^2{\alpha} = |\braket{V | \alpha}|^2 \\ 
$$

De forma mais geral, temos que, dados dois estados de polarização quaisquer $\ket{\psi_1}$ e $\ket{\psi_2}$, vale 

$$
\text{P($\psi_1$ dado $\psi_2$)} = |\braket{\psi_1 | \psi_2}|^2
$$

com essa relação denominada <b>regra de Born</b> em homenagem ao físico alemão Max Born.

<aside>

Uma leve digressão sobre <b>probabilidades</b> na mecânica quântica possui grande valor. Previamente conseguimos determinar a probabilidade de cada fóton ser transmitido, ou não, por um polarizador. Consequentemente, é possível mensurar corretamente a intensidade do feixe transmitido. 

Entretanto, é possível saber se cada fóton individual será transmitido ou não? A resposta é, surpreendentemente, <b>não</b>. O máximo que podemos saber é a probabilidade, a chance, da partícula passar pelo obstáculo. Essa natureza probabilística intrínseca da mecânica quântica contrasta fortemente com o determinismo clássico e, inicialmente, provocou um grande ceticismo em alguns cientistas: Einstein, celebremente, declarou que "Deus não joga dados". 

</aside>

Uma nota a se fazer é que a escrita 

$$
\ket{\alpha} = \cos{\alpha} \ket{H} + \sin{\alpha} \ket{V}
$$

não indica que parte dos fótons possui polarização $\ket{H}$ enquanto outra parte está polarizada em $\ket{V}$, mas sim que <b>todos os fótons</b> estão no mesmo estado de polarização $\ket{\alpha}$, possuindo $\cos^2{\alpha}$ de chance de transmissão e $\sin^2{\alpha}$ de reflexão/dissipação. 

É importante também mencionar que a discussão anterior sobre <b>ângulos relativos</b> continua válida. Dado um feixe polarizado num ângulo $\alpha$ interagindo com um polarizador de orientação $\beta$, com ambos os ângulos medidos em relação a horizontal, as probabilidades de transmissão e reflexão dos fótons incididos são, respectivamente $P(T) = \cos^2{(\alpha - \beta)}$ e $P(R) = \sin^2{(\alpha - \beta)}$.

# Descrevendo dois fótons

Temos como foco a partir daqui um cenário um pouco mais complexo: um sistema de dois fótons que vão de encontro a um polarizador. 

O que desenvolvemos até aqui foi suficiente para descrever o comportamento de um único fóton, relacionando o resultado estatístico com a intensidade do feixe. Porém, veremos que ao considerarmos um par de fótons, efeitos puramente quânticos, sem analogia clássica, surgem.

Para darmos início a nessa análise, primeiro temos que discorrer um pouco sobre o que são <b>sistemas compostos</b>. Classicamente, dizemos que um dado sistema físico é composto se este pode ser dividido em dois ou mais subsistemas. Um exemplo simples para tal é o sistema Terra-Lua. 

Considerando ambos os corpos celestes como corpos pontuais, podemos representar os estados físicos de ambos os corpos — posições e velocidades — por meio de tuplas de vetores. Com efeito, podemos escrever a tupla de vetores $(\vec{x_T}, \vec{v_T})$ para representar o estado da Terra e a tupla $(\vec{x_L}, \vec{v_L})$ para representar o estado da Lua. Com estes estados definidos, é possível escrever uma quadra $(\vec{x_T}, \vec{v_T}, \vec{x_L}, \vec{v_L})$ que representa um estado do sistema como um todo.

Perceba que em sistemas clássicos sempre será possível dividir o estado de um sistema em subsistemas, entretanto, na escala quântica, isso nem sempre é possível. É o que veremos no decorrer dessa seção. 

## Produto tensorial

Antes de analisarmos um sistema formado por dois fótons, convém introduzir a operação matemática conhecida como <b>produto tensorial</b>.

Dados dois vetores arbitrários $\ket{\psi_1}$ e $\ket{\psi_2}$, com 

$$
\begin{align*}
    \ket{\psi_1} &=
    \begin{pmatrix}
        a \\ b     
    \end{pmatrix} \\ 
    \ket{\psi_2} &= 
    \begin{pmatrix}
        c \\ d 
    \end{pmatrix}
\end{align*}
$$

o <b>produto tensorial</b> entre $\ket{\psi_1}$ e $\ket{\psi_2}$, denotado por $\ket{\psi_1} \otimes \ket{\psi_2}$ ou, alternativamente, $\ket{\psi_1 \psi_2}$ ou ainda $\ket{\psi_1, \psi_2}$ é dado por

$$
\begin{align*}
    \ket{\psi_1} \otimes \ket{\psi_2} &=
    \begin{pmatrix}
        a \\ b 
    \end{pmatrix} 
    \otimes 
    \begin{pmatrix}
        c \\ d
    \end{pmatrix} 
    =
    \begin{pmatrix}
        a \begin{pmatrix}
            c \\ d 
        \end{pmatrix} \\ 
        b \begin{pmatrix}
            c \\ d 
        \end{pmatrix}
    \end{pmatrix} 
    = 
    \begin{pmatrix}
        ad \\ ac \\ bc \\ bd
    \end{pmatrix}
\end{align*}
$$

Note que essa operação não é comutativa.

Em nosso contexto quântico, o produto tensorial permite representar o estado de um sistema de dois fótons. Por exemplo, se o primeiro fóton estivesse polarizado verticalmente, o segundo poderia estar polarizado horizontalmente, ou o contrário; ambos poderiam estar polarizados verticalmente ou horizontalmente. 

Estes quatro possíveis estados são representados, respectivamente, pelos produtos tensoriais $\ket{V} \otimes \ket{H}$, $\ket{H} \otimes \ket{V}$, $\ket{V} \otimes \ket{V}$ e $\ket{H} \otimes \ket{H}$. Alternativamente, podemos denotá-los pela notação de Dirac, introduzida anteriormente: $\ket{V,H}; \ket{H,V}; \ket{V,V}; \ket{H,H}$.

Dessa forma, assim como a expressão geral para o estado de polarização $\ket{\alpha}$ de um fóton é 

$$
\ket{\alpha} = \cos{\alpha} \ket{H} + \sin{\alpha} \ket{V}
$$

temos que, para o caso de dois fótons, o caso mais geral possui a forma 

$$
\ket{\psi} = a\ket{H,H} + b\ket{H,V} + c\ket{V,H} + d\ket{V,V}
$$

com $|a^2|+|b^2|+|c^2|+|d^2| = 1$. Esta restrição é chamada <b>condição de normalização</b>, sendo necessária para garantir a interpretação destes coeficientes como probabilidades. 

Para explorar a limitação mencionada anteriormente sobre sistemas compostos nos casos clássico e quântico, considere o estado de polarização $\ket{\alpha}$, com 

$$
\ket{\alpha} = \dfrac{1}{\sqrt{2}}(\ket{H,H}+\ket{V,V})
$$

Podemos assim tentar expandir essa expressão e rearranjar os termos para escrever este estado como o produto de dois estados (um de cada fóton). 

$$
\begin{align*}
    \ket{\alpha} = \dfrac{1}{\sqrt{2}}(\ket{H,H}+\ket{V,V}) &= (\cos{\alpha} \ket{H} + \sin{\alpha} \ket{V}) \otimes (\cos{\beta} \ket{H} + \sin{\beta} \ket{V}) \\ 
    \ket{\alpha} &= \cos{\alpha}\cos{\beta} \ket{H, H} + \cos{\alpha} \sin{\beta} \ket{H, V} + \sin{\alpha} \cos{\beta} \ket{V, H} + \sin{\alpha} \sin{\beta} \ket{V, V}
\end{align*}
$$

Simultaneamente, temos que $\ket{\alpha} = \dfrac{1}{\sqrt{2}}\ket{H, H} + \dfrac{1}{\sqrt{2}}\ket{V, V}$, logo, deve valer a igualdade 

$$
\dfrac{1}{\sqrt{2}}\ket{H, H} + \dfrac{1}{\sqrt{2}}\ket{V, V} = \cos{\alpha}\cos{\beta} \ket{H, H} + \cos{\alpha} \sin{\beta} \ket{H, V} + \sin{\alpha} \cos{\beta} \ket{V, H} + \sin{\alpha} \sin{\beta} \ket{V, V}
$$

Entretanto, perceba que isso implica que devem valer, ao mesmo tempo, as igualdades 

$$
\begin{align*}
    \cos{\alpha} \cos{\beta} &= \sin{\alpha} \sin{\beta} = \dfrac{1}{\sqrt{2}} \\ 
    \cos{\alpha}\sin{\beta} &= \sin{\alpha} \cos{\beta} = 0 
\end{align*}
$$

o que é impossível. Como que isso pôde acontecer? Não podemos escrever os estados indivuais de cada fóton, embora saibamos o estado do sistema como um todo! Estes estados são chamados <b>emaranhados</b> ou <b>entrelaçados</b>, sendo, na verdade, a maior parte dos estados quânticos possíveis. 

## Emaranhamento

É extremamente difícil dar alguma explicação intuitiva sobre o significado físico do emaranhamento, em razão de ser algo completamente removido de nosso cotidiano; nosso mundo newtoniano. 

Entretanto, as medições desses fótons emaranhados mostram que estes estão sempre no mesmo estado de polarização no momento da medida. Isto, no entanto, não provém do estado de cada fóton individual. Dizemos que fótons emaranhados são <b>correlacionados</b>, possuindo propriedades correlatas. Por exemplo, ao medimos o primero e registrarmos uma polarização $\ket{H}$, sabemos imediatamente que o segundo também terá o mesmo estado de polarização.

# Transformações de estados

Dado um estado de polarização $\ket{\alpha}$, este pode ser <b>rotacionado</b> para um estado $\ket{\beta}$ e vice-versa. Esta reversibilidade, no caso dos vetores de polarização, está associada apenas às transformações lineares que representam rotações.

De forma mais geral, o <b>teorema de Wigner</b>, formulado por Eugene Wigner, mostra que, no tratamento matemático da física quântica, todas as transformações devem ser <b>lineares</b> e <b>unitárias</b>.

Dizemos que uma certa transformação $T: U \to V$ é linear se, dados dois vetores $\ket{\psi_1}$ e $\ket{\psi_2}$ e um $\alpha$ escalar, valem as relações 

$$
\begin{align*}
    T(\alpha \ket{\psi_1}) &= \alpha T(\ket{\psi_1}) \\ 
    T(\ket{\psi_1} + \ket{\psi_2}) &= T(\ket{\psi_1}) + T(\ket{\psi_2}) 
\end{align*}
$$

Uma transformação $T: U \to V$ é dita unitária se esta preserva o produto interno entre os dois vetores considerados. Isto é, se vale

$$
\braket{\psi_1, \psi_2} = \braket{T(\psi_1), T(\psi_2)}
$$

A razão para a propriedade da unitariedade pode ser intuída por uma consequência da regra de Born. Dois estados são perfeitamente distinguíveis se estes são ortogonais entre si (produto interno nulo) e são o mesmo estado se são colineares (produto interno igual a 1). 

Se este produto interno não fosse preservado, isso implicaria na possibilidade de executarmos alguma transformação em nosso sistema para, assim, extrair uma medição mais acurada. Como estamos supondo medições com equipamentos perfeitos, isto é uma contradição.