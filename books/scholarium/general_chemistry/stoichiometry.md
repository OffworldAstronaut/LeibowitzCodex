# Estequiometria

# Mensurando átomos e moléculas

Denominamos <b>estequiometria</b> (do grego <i>stoichion</i>, elemento e <i>metron</i>, medida) a subárea da química que lida com os aspectos quantitativos das chamadas reações químicas. Neste manuscrito, iremos nos concentrar sobre os aspectos essenciais deste tópico.

Como determinar a massa de um átomo? Dada a dimensão do nosso problema, isto parece algo quase impossível: uma estratégia inicial, portanto, é comparar a massa de um átomo em relação a outro átomo, escolhido como padrão. 

Dessa ideia surgiu o <b>Dalton</b>, representado pelo símbolo $\text{Da}$. Alternativamente, essa grandeza é chamada pelo nome bem menos interessante de <b>unidade de massa atômica</b>, representada pelo símbolo $\text{u}$. Definimos esta grandeza como $1/12$ avos da massa de um átomo de carbono-12, o isótopo mais comum do carbono. 

Assim, experimentalmente, é possível determinar o quão massivo outros átomos são em relação ao átomo de carbono-12 e, consequentemente, determinar suas massas em daltons. 

A noção da existência de diferentes isótopos de um mesmo elemento motiva a definição da <b>massa atômica média</b>, também chamada (de forma errônea do ponto de vista físico) de <i>peso atômico</i>, definida como a média aritmética das massas atômicas dos isótopos de um elemento, ponderada pela sua abundância natural relativa. Por exemplo, naturalmente temos 98,9% de carbono-12 (de massa atômica 12) e 1,1% de carbono-13 (de massa 13,00335) na Terra, o que nos dá uma massa atômica média do elemento carbono de $0.989 \cdot 12 + 0.011 \cdot 13.00335 = 12,01 \text{ Da}$. 

## Número de Avogradro e massa molar

<div class="wiki-thumb">

![](https://upload.wikimedia.org/wikipedia/commons/4/40/Amadeo_Avogadro.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Amedeo Avogadro (1776-1856) retratado em antiga gravura. O químico italiano também foi um revolucionário, lutando no Risorgimento italiano em 1821 na Revolta Piemontesa.</i>

</div>

Como efetuar então a conversão entre daltons e unidades convencionais de massa como o grama ou o quilograma? É evidente que a esclaa do nosso problema continua sendo importante, pois não é possível construir e calibrar uma balança na escala atômica. 

Para tal cenário introduziu-se o <b>mol</b> (do latim <i>molem</i>, matéria). O mol é uma grandeza similar ao que utilizamos como dúzia (grupo de 12 unidades) ou grosa (grupo de 12 dúzias), de forma que 1 mol de algo implica em $N_A$ de alguma coisa. Nessa definição, o número 

$$
N_A = 6.0221415 \cdot 10^{23} \approx 6.022 \cdot 10^{23}
$$

é chamado <b>número de Avogrado</b>, batizado em homenagem ao químico italiano Amedeo Avogrado (1776-1856). A origem dessa quantidade ainda está no carbono: 12 gramas de carbono-12 contém tantos átomos quanto o número de Avogadro. Dessa forma, podemos dizer que 1 mol de átomos de carbono-12 possuem uma massa de 12 gramas. Segue daqui a definição de <b>massa molar</b>, a massa (em gramas) de 1 mol de determinado elemento. Em razão da proporcionalidade direta entre quantidade de matéria e massa, o valor numérico da massa molar e da massa atômica de um mesmo elemento coincidem. 

Uma consequência imediata da definição de massa molar é a determinação da massa de um único átomo. Por exemplo, se 12 gramas de carbono-12 contém $6.022 \cdot 10^{23}$ átomos, temos que um átomo possui uma massa de $1.993 \cdot 10^{-23}$ gramas. Diversas outras conversões entre massa, massa atômica e número de átomos podem ser feitas a partir do que já foi apresentado. 

## Massa molecular

A <b>massa molecular</b> é apenas a massa de uma determinada molécula. Como esta é determinada pela soma das massas atômicas dos átomos constituintes, a massa molecular também é mensurada em daltons e é numericamente igual à massa molar dessa molécula.

<aside>

Um <b>espectômetro de massa</b> é um dispositivo utilizado para a determinação das massas de átomos e moléculas no processo de espectrometria de massa.

De forma geral, estes instrumentos funcionam da seguinte maneira: uma amostra gasosa é bombardeada por elétrons de alta energia (e portanto, ionizada) e acelerada por placas carregadas. Um ímã (através da força de Lorentz) induz os íons a tomarem um caminho curvo, cujo raio depende da razão carga-massa das partículas. Diferentes íons de mesma carga executam trajetórias distintas, o que nos permite determinar a abundância relativa dos isótopos presentes na amostra. 

O primeiro espectômetro de massa surgiu na década de 1920 pelo físico inglês F. W. Aston (1891-1945). Através de seus experimentos, Aston levantou as primeiras evidências empíricas da existência de isótopos de elementos químicos e, por isso, ganhou o prêmio Nobel de Química de 1922.

</aside>

## Composição percentual e pureza de uma amostra 

Definimos a composição percentual como a porcentagem (de massa) de cada elemento num composto, isto é, a proporção que um dado elemento contribui para a massa do composto.

Denotando-a por $\%_M$, temos:

$$
\%_M = 100 \cdot \dfrac{n \cdot \text{MM}}{\text{MM}_C}
$$

Nesta equação, $n$ é o número de mols de um elemento presente em um mol do composto (ou seja, o número de átomos presentes em uma única molécula). $\text{MM}$ é a massa molar do elemento e $\text{MM}_C$ é a massa molar do composto.

Por exemplo, qual a composição percentual do hidrogênio e do oxigênio na água oxigenada, $\ce{H2O2}$? 

$$
\begin{align*}
    \%_M (H) &= 100 \cdot \dfrac{2 \cdot 1.008}{34.02} = 5.926 \% \\ 
    \%_M (O) &= 100 \cdot \dfrac{2 \cdot 16}{34.02} = 94.06 \%
\end{align*}
$$

Uma aplicação interessante é a determinação da pureza de uma amostra ao comparar as composições percentuais experimental e teórica. Por exemplo, considere uma amostra de NaCl que necessita da determinação de sua pureza antes de seu uso. Teoricamente, conseguimos determinar as porcentagens de cada elemento no cloreto de sódio como 39,34% para o sódio e 60,66% para o cloro.

Experimentalmente, podemos separar os elementos puros da amostra e realizar o mesmo procedimento de determinação das composições percentuais. Caso as porcentagens sejam diferentes das determinadas teoricamente, isso indica uma amostra impura. Quantitativamente, podemos determinar o grau de pureza realizando a razão entre as porcentagens experimental e teórica para cada elemento. 

## Determinando fórmulas empíricas

Uma consequência imediata da nossa capacidade de determinar a proporção de massa num composto que pertence a dado elemento é a determinação das <b>fórmulas empíricas</b> das substâncias de forma experimental.[^1]

Por exemplo, imagine que experimentalmente dividimos 11,5 gramas de etanol em 22 gramas de CO<sub>2</sub> e 13,5 gramas de H<sub>2</sub>O. Por estequiometria, podemos deduzir que 11,5 gramas de etanol contém 6 gramas de carbono e 1,5 gramas de hidrogênio, além de 4 gramas de oxigênio. Segue que 11,5 gramas de etanol contém 0,5 mol de carbono, 1,5 mol de hidrogênio e 0,25 mol de oxigênio e a fórmula empírica do etanol é $\ce{C_{0.5}H_{1.5}O_{0.25}}$ ou, em notação adequada, $\ce{C2H6O}$.[^2]

Como, então, determinar a fórmula molecular num caso geral? Basta conhecer (experimentalmente) a massa molar do composto em mols e comparar com a massa molar da fórmula empírica. 

$$
k = \dfrac{\text{MM}_C}{\text{MM}_E}
$$

O número $k$ sempre será um inteiro, aproximadamente. A fórmula molecular, assim, poderá ser acuradamente prevista com a ajuda do estudo das <a href="/books/scholarium/general_chemistry/chemical_bonds.html" target="_blank">ligações químicas</a>. 

# Reações químicas e equações químicas

Definimos como <b>reação química</b> o processo em que uma substância transforma-se em outra (ou mais de outra) substância. Estas reações podem ocorrer pelas mais variadas causas e das mais variadas formas, que deverão exploradas em mais detalhes no estudo da termoquímica. 

Representamos uma reação química de forma padronizada por meio de <b>equações químicas</b>. Seus símbolos constituintes transmitem ao leitor o que está ocorrendo na reação química. 

Vamos tomar como exemplo a reação química da formação da água pela reação de combustão do hidrogênio. 

$$
\ce{H2 + O2 -> H2O}
$$

Lemos: "hidrogênio molecular reage com oxigênio molecular para formar água". O sinal "+" simboliza "reage com", enquanto a seta "$\rightarrow$" indica "forma" ou "para formar". Perceba, entretanto, que a quantidade de átomos em cada lado da equação não é a mesma: ela está <b>desbalanceada</b>. Podemos corrigi-la adicionando os <b>coeficientes estequiométricos</b>, balanceando-a para a forma: 

$$
\ce{2H2 + O2 -> H2O}
$$

Esta equação assim pode ser lida como "duas moléculas de hidrogênio molecular reagem com uma molécula de hidrogênio molecular para uma formar uma molécula de água". Como a proporção entre o número de moléculas é igual a proporção entre o número de mols, podemos trocar "moléculas" na frase por "mols" tranquilamente. Além disso, convertendo as quantidades em sua massa correspondente, poderíamos ler "4,04 gramas de $\ce{H2}$ reagem com 32 gramas de $\ce{O2}$ para formar 36 gramas de $\ce{H2O}$". 

Adicionalmente, denominamos os compostos no lado esquerdo da equação de <i>reagentes</i> e no lado direito de <i>produtos</i>. Subscritos ou parênteses (ou uma combinação de ambos) muitas vezes são utilizados para indicar o estado físico dos compostos envolvidos, com as letras s, l e g representando, respectivamente, os estados sólido, líquido e gasoso. A abreviação "aq" também é utilizada para indicar um composto soluto em água. 

Por essas combinações, podemos escrever, por exemplo: 

$$
\begin{align*}
    &\ce{2CO_\text{(g)} + O2_\text{(g)} -> 2CO2_\text{(g)}} \\ 
    &\ce{NaCl_\text{(s)} + H2O_\text{(l)} -> NaCl_\text{(aq)}} \\ 
    &\ce{NaCl_\text{(s)} ->[H2O] NaCl_\text{(aq)}}
\end{align*}
$$

Nota-se que as duas últimas equações são equivalentes.

Diversos métodos para balancear equações existem, incluindo até o uso de <a href="/books/scholarium/math/linear_algebra/lsystems.html" target="_blank">sistemas lineares</a>. Usa maneira bastante simples, no entanto, é o uso de tabelas para número de átomos presentes nos reagentes e nos produtos. Cada mudança de coeficiente implica numa atualização das linhas das tabelas. O balanceamento está completo quando ambas as linhas forem iguais.

# Reagentes limitantes e rendimento

A noção de reagente limitante e, consequentemente, de rendimento de uma reação, parte do reconhecimento que é difícil ter as quantidades exatas de todos os reagentes para que estes sejam plenamente consumidos. 

Assim, dizemos que um reagente <i>limitante</i> é aquele que acaba primeiro durante uma reação. Quando este acaba, a reação para e os reagentes que sobrarem são denominados <i>excedentes</i>. 

Considere a seguinte reação, a síntese do metanol à partir de monóxido de carbono e gás hidrogênio: 

$$
\ce{CO_\text{(g)} + 2H2_\text{(g)} -> CH3OH_\text{(g)}}
$$

Imagine que inicialmente estejam presentes 4 mols de CO e 6 mols de hidrogênio molecular. Como determinar qual é o reagente limitante? Perceba que o reagente limitante irá fornecer a menor quantidade de produto, pois a reação será interrompida. Assim, vemos que 4 mols de CO produzem 4 mols de metanol e 6 mols de hidrogênio produzem, por outro lado, 3 mols. Consequentemente, o hidrogênio molecular é o reagente limitante (e o monóxido de carbono é o excedente). 

De forma geral, basta analisar as quantidades de reagente disponíveis e a proporção reagente-produto para determinar aquele que será consumido primeiro por este mesmo procedimento. 

O rendimento $R_\%$ de uma reação é, portanto, a proporção entre qaunto de um produto foi gerado experimentalmente e quando deveria ser gerado pela teoria, em porcentagem. 

$$
R_\% = 100 \cdot \dfrac{Q_E}{Q_T}
$$

# Referências

1. CHANG, Raymond. General Chemistry: The Essencial Concepts, 6ª ed. Nova Iorque: McGraw-Hill, 2008

[^1]: As fórmulas empíricas são representações de compostos que indicam a proporção (de forma que os números sejam os menores inteiros possíveis) entre os átomos de cada elemento num composto. Consequentemente, multiplicar todos os índices por algum número inteiro retorna a fórmula molecular, que indica a quantidade real de átomos num composto.

[^2]: Coincidentemente, a fórmula molecular do etanol é idêntica a sua fórmula empírica.