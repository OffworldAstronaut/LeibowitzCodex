# Introdução à Eletrostática

# Carga elétrica

Para iniciarmos os estudos de eletrostática, é fundamental entender o conceito de <b>carga elétrica</b>, e para isso, é importante revisarmos os modelos atômicos, mais especificamente o <b>modelo atômico de Rutherford-Bohr</b>. 

Nesse modelo atômico, o átomo é dividido em duas regiões, o <b>núcleo</b>, formado por prótons e nêutrons, e a <b>eletrosfera</b>, formada por elétrons. Essas partículas possuem uma propriedade chamada <b>carga elétrica</b>, podendo ser positiva (+), negativa (-) ou neutra (0), no caso dos prótons, elétrons e nêutrons, respectivamente. 

<aside>

<i>A carga elétrica é a propriedade básica da matéria realizada por algumas partículas elementares que governam como partículas são afetadas por um campo elétrico ou magnético.</i> 

<br><br>

<a href="https://www.britannica.com/science/electric-charge" target="_blank">Encyclopaedia Brittanica - Electric Charge</a>

</aside>

É interessante mencionarmos ainda que medimos a carga elétrica dos corpos em coulombs ($\text C$), com a do elétron e do próton sendo denominada carga elétrica elementar ($e$), valendo $\pm1.6×10^{−19} \text{ C}$, positiva no caso do próton e negativa no caso do elétron. Por ser a carga elétrica de uma única partícula, é impossível um corpo possuir uma carga elétrica menor que a carga elétrica elementar. 

# Princípios da eletrostática

Além disso, temos dois fenômenos que são fundamentais para toda a eletrostática, fenômenos esses que acontecem em relação às cargas elétricas: o <b>princípio da atração e repulsão</b> e a <b>quantização das cargas elétricas</b>. 

## Princípio da Atração e Repulsão

Esse princípio é muito conhecido pela máxima “os opostos se atraem”.

Cargas elétricas de sinais iguais tendem a se repelir com uma força chamada força coulombiana, que será discorrida sobre mais à frente, enquanto cargas elétricas de sinais opostos tendem a se atrair por ação da mesma força. 

<aside>

Cargas de sinais iguais tendem a ficar o mais longe possível uma da outra. Além disso, cargas de sinais opostos tendem a se aproximar o máximo possível.

</aside>

## Quantização das cargas elétricas

A quantidade de cargas elétricas num corpo não pode ser fracionária, já que não é possível ter meio elétron, ou três quartos de elétron, ou dois prótons e meio, por exemplo. 

Dizemos de forma concisa que a carga elétrica de qualquer corpo é sempre quantizada, ou seja, é sempre um múltiplo natural da carga elementar. 

Podemos representar essa relação pela equação:

$$
Q=en
$$

onde $Q$ é a carga elétrica de um corpo, $e$ é a carga elementar e $n$ é um número natural. 

# Corpos

Os corpos possuem um papel central na Eletrostática, afinal, eles são formados por átomos, com estes sendo formados por partículas que possuem carga elétrica: são eles que armazenam as cargas e as transmitem ou impedem sua passagem para outros corpos. 

## Corpos neutros e eletrizados

Dizemos que um dado corpo é <b>neutro</b> se ele possui a mesma quantidade de cargas negativas e cargas positivas em sua composição, enquanto um corpo <b>eletrizado</b> possui uma assimetria na sua distribuição de cargas: se possui mais cargas negativas, se torna um <b>corpo eletrizado negativamente</b>, caso contrário é um <b>corpo eletrizado positivamente</b>. 

Algo importante de se ter em mente, e <b>consequência do primeiro princípio fundamental</b>, é que <b>corpos neutros sempre são atraídos por corpos carregados</b>.

![](./images/introduction_electrostatics/introducao_eletrostatica_condutor_isolante_eletrizado.png)

<i>O cilindro (+) é um corpo eletrizado positivamente: perceba a reorganização no condutor e o pouco movimento das cargas no isolante! No segundo caso dizemos que as cargas foram **polarizadas** pelo corpo eletrizado. Imagem autoral.</i>

## Condutores e isolantes

De forma bem simples, <b>materiais condutores</b> possuem <b>grande facilidade</b> na <b>transmissão de cargas</b> pelos seus átomos, enquanto <b>materiais isolantes</b> são o caso oposto: cargas elétricas possuem uma certa dificuldade de se mover por corpos formados por esses materiais. 

Podemos citar alguns materiais condutores comuns, como cobre e estanho, e isolantes, como madeira e borracha. 

# Processos de eletrização

Eletrizar um corpo é fazer com que um corpo neutro se torne eletrizado, ou seja, um <b>processo de eletrização</b> é uma maneira de fornecermos ou retirarmos elétrons de um corpo. 

<aside>

É importante frisar que, na eletrostática, sempre consideramos a movimentação de elétrons. 
Não é possível transferir prótons de/para um material tão facilmente. Isto só é possível por meio de reações nucleares, algo extremamente difícil de executar. 

</aside>

## Eletrização por atrito

Ao <b>atritarmos</b> dois corpos neutros de materiais diferentes, um dos corpos irá transferir alguns de seus elétrons para o outro corpo, já que fornecemos energia a eles por meio do atrito! 

Esse acontecimento é chamado de <b>efeito triboelétrico</b>, e por conta disso temos a chamada série triboelétrica, uma tabela com diferentes materiais que pode nos ajudar a prever o comportamento elétrico de dois materiais quando atritados. 

<table>

<tr>
    <td>Pele humana seca</td>
</tr>
<tr>
    <td>Couro</td>
</tr>
<tr>
    <td>Vidro</td>
</tr>
<tr>
    <td>Cabelo humano</td>
</tr>
<tr>
    <td>Náilon</td>
</tr>
<tr>
    <td>Chumbo</td>
</tr>
<tr>
    <td>Seda</td>
</tr>
<tr>
    <td>Papel</td>
</tr>
<tr>
    <td>Madeira</td>
</tr>

</table>

Quanto mais <b>acima</b> na série um material está, ele tem uma maior tendência de <b>perder elétrons</b>, e quanto mais <b>abaixo</b> ele está, ele tem uma maior tendência de <b>ganhar elétrons</b> ao ser atritado. À medida que atritamos materiais cada vez mais distantes entre si na série triboelétrica, mais elétrons vão ser transferidos entre esses corpos. 

## Eletrização por contato

Se tivermos um <b>corpo eletrizado</b> em contato externo com um corpo neutro, cargas irão fluir entre os dois corpos de forma que o corpo anteriormente neutro se torne também um corpo eletrizado.

É interessante saber que a quantidade de carga que irá fluir entre os corpos depende de seu volume: quanto maior um corpo neutro, maior será a sua capacidade de absorver ou ceder carga ao corpo eletrizado. O caso mais simples é o de dois corpos idênticos: a quantidade de carga excedente em cada um será idêntica e metade da carga do corpo eletrizado original. 

![*Duas esferas de metal. Note que as cargas negativas foram distribuídas igualmente entre elas!*](./images/introduction_electrostatics/introducao_eletrostatica_eletrizacao_contato.png)

<i>Duas esferas de metal. Note que as cargas negativas foram distribuídas igualmente entre elas!</i>

Agora, se tivermos um corpo eletrizado em contato interno com um corpo neutro, todas as cargas excedentes irão fluir entre os corpos de forma que o corpo eletrizado se tornará neutro.

![](./images/introduction_electrostatics/introducao_eletrostatica_eletrizacao_contato_interno.png)

<i>Uma esfera de metal em contato interno com uma panela de metal (estamos observando um corte 2D!): note que as cargas excedentes foram todas para a panela, enquanto a esfera se neutralizou!</i>

## Eletrização por indução

Se tivermos um corpo neutro isolado eletricamente (chamado aqui de <b>induzido</b>) e aproximarmos dele um corpo eletrizado (chamado indutor), as cargas irão se redistribuir de forma a serem atraídas ou repulsas a ele. 

Ao aterrarmos esse corpo neutro, ele irá ceder ou devolver elétrons à Terra, conforme as cargas que foram repulsas. Assim, se isolarmos o corpo novamente e depois afastarmos o indutor, veremos que o corpo induzido agora foi eletrizado. 

![](./images/introduction_electrostatics/introducao_eletrostatica_eletrizacao_inducao.png)

<i>Primeiro, aproximamos o corpo indutor positivo da esfera metálica aterrada. Esse corpo atrai os elétrons da esfera, criando regiões de carga positiva (deficiência de elétrons). Essas regiões atraem os elétrons livres da Terra, que sobem para o as regiões positivas do corpo induzido. Depois, ao cortarmos o aterramento e em seguida afastando o corpo indutor da esfera metálica, finalizamos o processo. Eletrizamos negativamente a esfera!</i>

Ainda há uma outra maneira de eletrizarmos um corpo por indução, sem aterramento.

Se colocarmos dois corpos isolados eletricamente da Terra <b>em contato</b>, e aproximarmos um corpo indutor de um deles, as cargas elétricas de um corpo irão ser atraídas ou repulsas para outro. Depois, basta afastarmos os dois corpos e depois afastarmos o indutor.

## Eletroscópio

Um <b>eletroscópio</b> é um instrumento que permite verificar se um corpo está neutro ou eletrizado. 

Seu tipo mais comum, o eletroscópio de folhas, é formado por uma esfera metálica conectada a um bastão metálico, que por sua vez está conectado a duas folhas, também metálicas (ou de qualquer outro material condutor). 

Caso esse instrumento esteja neutro, o ato de aproximar um corpo eletrizado causará uma redistribuição de cargas, afastando as folhas de metal uma da outra. 

Se o eletroscópio estiver eletrizado, a depender da carga do corpo aproximado, as folhas irão se abrir mais ainda ou se fechar, também por conta da redistribuição de cargas.

# Lei de Coulomb

A lei de Coulomb, descrita pelo físico francês Charles Augustin de Coulomb (ele também recebe em homenagem o nome da unidade de carga elétrica), nos permite quantificar a força de atração ou repulsão entre as cargas elétricas, cuja existência é garantida pelo primeiro princípio da eletrostática. 

Coulomb percebeu que a força de repulsão (ou atração) entre essas duas cargas é diretamente proporcional ao produto as cargas e inversamente proporcional ao quadrado da distância entre elas. 

Matematicamente, podemos expressar a Lei de Coulomb, para duas cargas $Q_1$ e $Q_2$, separadas por uma distância $d$ dessa forma: 

$$
F_C=k\dfrac{Q_1Q_2}{d^2}
$$

Além disso, é importante perceber que a constante $k$, da lei de Coulomb, a chamada constante eletrostática, possui o valor de aproximadamente $8.99 × 10^9 \text{ N}\cdot \text{m}^2/\text{C}^2$.