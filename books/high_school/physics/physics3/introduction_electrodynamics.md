# Introdução à Eletrodinâmica

# Conceitos iniciais

---

A **eletrodinâmica** é o estudo das cargas elétricas em movimento, dessa maneira, precisamos nos familiarizar com alguns conceitos e termos para compreendermos essa área da Física bem. 

## Corrente elétrica

Primeiramente, o que é uma **corrente elétrica**? 

A definimos como sendo o **movimento ordenado de cargas elétricas**, no nosso caso, elétrons! Esse movimento é causado pela **diferença de potencial** (DDP) entre pontos diferentes do circuito, lembra do estudo de capacitores?

<aside>

Por convenções de sinal, o movimento da corrente elétrica num circuito segue a direção oposta ao movimento dos elétrons. Esta convenção possui raízes nos primórdios da eletrodinâmica, pela <a href="https://en.wikipedia.org/wiki/History_of_electromagnetic_theory" target="_blank">Teoria de Fluídos</a>.

</aside>

O movimento da corrente elétrica por um dado corpo pode ser percebido pela geração de fenômenos **térmicos** (efeito Joule), **luminosos**, **magnéticos** (isso será visto com mais detalhes em eletromagnetismo!), **fisiológicos** (contrações musculares) e/ou **químicos** (eletrodiposição).

### Intensidade de uma corrente

Dessa forma, como podemos medir a **intensidade** de uma corrente elétrica? 

Vimos acima que uma corrente é o movimento de cargas de forma ordenada por um material, ou seja, medir sua intensidade seria como medir a sua **velocidade** pelos fios: quantas cargas passam por aquele material, num dado tempo? 

Dessa forma, chegamos na definição da **intensidade**, $I$, que estávamos procurando. 

$$
I=\dfrac{Q}{\Delta t}
$$

Fazendo a análise dimensional, chegamos na unidade de medida de **coulombs por segundo** $(\text{C/s})$: surge o **ampère** $(\text A)$!

Considerando a corrente constante, podemos rearranjar os termos para chegarmos na expressão $Q=I\Delta t$, que nos pode fornecer a quantidade total de carga num circuito. 

Essa quantidade também pode ser encontrada pela área do gráfico $i \times t$, com esse segundo método sendo a única possibilidade se a corrente for variável ao longo do tempo.

### Amperímetros e voltímetros

Experimentalmente, podemos medir a intensidade de uma corrente por meio de um **amperímetro**, ligado **em série** num circuito. O amperímetro ideal possui uma resistência elétrica nula. 

De forma análoga, podemos medir a tensão elétrica entre dois pontos por meio de um **voltímetro**, que deve ser ligado **em paralelo** num circuito e que, idealmente, possui uma resistência que tende ao infinito. 

### Relação entre corrente e tensão

Enquanto uma tensão contínua, isto é, de mesmo sinal ao longo do tempo, fornece uma corrente contínua, que possui um único sentido ao longo do tempo, uma tensão alternada — que varia de sinal em intervalos regulares — fornece uma corrente alternada, com seu sentido invertendo-se periodicamente.

## Resistência elétrica

Como visto no primeiro livreto de eletrostática, alguns materiais, os **isolantes**, impõem uma certa dificuldade à passagem de carga (corrente) elétrica, enquanto os **condutores** exibem uma certa facilidade. 

Damos o nome de <b>resistência elétrica</b> (ou simplesmente **resistência**) a essa propriedade, com ela sendo medida em <b>Ohms</b> $( \Omega)$: materiais condutores possuem baixa resistência, enquanto isolantes possuem uma alta resistência elétrica. A denominação dessa unidade foi feita em homenagem ao físico alemão <a href="https://en.wikipedia.org/wiki/Georg_Ohm" target="_blank">Georg Ohm</a>.

# Somando tensões

---

Suponha que temos um circuito com algumas baterias, com voltagens diferentes, em série, e não necessariamente na mesma orientação. 

![Perceba que algumas baterias estão com o polo positivo (o de duas barrinhas) em orientações diferentes! ](./images/introduction_electrodynamics/introduction_electrodynamics_tensions.png)

<i>Perceba que algumas baterias estão com o polo positivo (sinalizado por duas barras) em orientações diferentes.</i>

Qual seria a bateria equivalente a essas quatro? Ou seja, que pudessemos substituir no circuito e ter o mesmo efeito? Podemos saber isso pela soma de tensões. 

Para somar as tensões corretamente, podemos “ler” o circuito da esquerda para a direita e somarmos ou subtrairmos os valores de acordo com a ordem dos polos que aparecem. Por exemplo, no circuito-exemplo fornecido, temos: 

$$
B_{EQ}=20-40+20-10=-10 \text { V}
$$

Ou seja, todas essas baterias são equivalentes a apenas uma bateria de 10 volts conectada com seu polo negativo virado para a esquerda.