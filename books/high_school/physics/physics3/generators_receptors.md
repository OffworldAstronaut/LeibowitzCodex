# Geradores e receptores

# Energia e potência elétrica



Antes de entrarmos nos tópicos de geradores e receptores, é importante darmos uma breve introdução sobre **energia e potência elétrica**. 

A definição base de potência é a mesma, a energia fornecida (ou recebida) por uma máquina ou equipamento num dado tempo. Em equipamentos elétricos, isso não se altera. 

Podemos medir a potência elétrica de um dado equipamento de várias formas: 

$$
P=Ui=Ri^2=\dfrac{U^2}{R}
$$

Com $R$ sendo a **resistência** do aparelho, $U$ sendo a **tensão** que ele está submetido e $i$ a **corrente** que ele está submetido no circuito. 

Cotidianamente, e no Sistema Internacional, nós medimos a potência de nossos equipamentos em Watts ou Kilowatts, e a energia utilizada por eles em uma hora em Kilowatts-hora (KWh), o que é uma unidade meio estranha para energia do ponto de vista do SI, mas que funciona no cotidiano. 

<aside>

Se simplificarmos tudo, iremos ver que $1 \text { KWh} = 3.600.000 \text { J}$ de energia!

</aside>

Ou seja, no dia a dia, se quisermos encontrar a energia utilizada por um dado equipamento, basta multiplicar sua potência (em KW) pela quantidade de horas utilizadas. 

# Geradores



Na teoria de circuitos, **geradores** são componentes elétricos que **transformam** outras formas de energia (térmica, cinética, …) em energia **elétrica**. 

<aside>

Ou seja, pilhas e baterias podem ser consideradas geradores também! 
Elas transformam energia química em eletricidade. 

</aside>

Um gerador **ideal** não possui **perdas** em funcionamento, porém, na realidade, **nem toda energia** é convertida em eletricidade. Isso nos leva à **equação característica de um gerador**:

$$
U = \varepsilon - ri
$$

Onde $U$ é a **tensão útil**, a que realmente é aplicada no circuito, $\varepsilon$ é a **tensão gerada**, também chamada de **força eletromotiva, $r$** é a chamada **resistência interna** enquanto $i$ é a corrente do circuito. 

Enquanto $\varepsilon$ representa a tensão total possível de ser gerada, $ri$ representa a tensão **dissipada** internamente pelos processos físicos da geração de energia elétrica, como por exemplo a liberação em forma de energia térmica pelo efeito Joule. 

Levando em conta essa tensão dissipada, podemos modelar um gerador de forma esquemática da seguinte forma: 

![image.png](./images/generators_receptors/generators_receptors_generator.png)

Ou seja, temos uma fonte de tensão elétrica $U$ e um pequeno resistor, $r$, responsável por representar a dissipação no gerador. 

Podemos dizer que um gerador ideal é formado quando a resistência de $r$ é nula. Quando isso acontece, nenhuma dissipação consequência da geração acontece, e podemos voltar a representar um gerador da forma usual, apenas com o símbolo de $U$. 

Podemos formar um curto-circuito conectando por um fio os terminais do gerador, **forçando eles a terem a mesma energia potencial $(U=0)$** num curto período de tempo.

De forma matemática, podemos adaptar a equação: 

$$
0=\varepsilon-ri \Rightarrow i_{cc}=\dfrac{\varepsilon}{r}
$$

Ou seja, a corrente do curto circuito é limitada apenas pela resistência elétrica interna do gerador, sendo também a mais intensa corrente elétrica possível. A medida que nos aproximamos do caso ideal $(r \rightarrow \infty)$, **a corrente irá se aproximar do infinito**, o que não é fisicamente possível. 

## Potência de geradores

Anteriormente, vimos que $P=iU$. 

Podemos modificar a equação de um gerador (vista acima), a multiplicando por $i$, para assim encontrarmos uma maneira de obtermos a potência de um dado gerador. 

$$
U=\varepsilon-ri \Rightarrow Ui=\epsilon i-ri²
$$

Onde $Ui$ é a **potência fornecida**, $\varepsilon i$ é a **potência gerada** e $ri²$ a **potência dissipada**. 

Analisando a função do segundo grau, encontramos que a potência é máxima quando

$$
i=\dfrac{1}{2}i_{cc}
$$

## Associação de geradores

Por fim, podemos **associar geradores** como associamos resistores e outros componentes elétricos, tanto em **série** como em **paralelo**. 

Se associarmos geradores em série, teremos uma maior tensão, porém uma maior perda por resistência interna: 

$$
\varepsilon_S=\varepsilon_1+...+\varepsilon_N \\ 
r_S = r_1 + ... + r_N
$$

Porém, se associarmos em paralelo, a tensão gerada não será alterada, porém teremos menores perdas por dissipação: 

$$
\varepsilon_S=\varepsilon_1 = ... = \varepsilon_N \\ 
r_S = \dfrac{r_n}{N}
$$

# Receptores



Consideramos um **receptor** qualquer equipamento elétrico que transforma energia elétrica em outras que não sejam necessariamente calor. Equipamentos como liquidificadores e LEDs são receptores. 

De forma análoga aos geradores, a equação característica de um receptor é 

$$
U=\varepsilon + ri
$$

Com $U$ sendo a **tensão total** fornecida, $\varepsilon$ sendo a **tensão utilizada** realmente e $ri$ a **tensão dissipada** de forma interna. 

<aside>

Em **circuitos com geradores e receptores**, a corrente elétrica sempre parte do polo positivo do gerador e chega no polo positivo do receptor. 
O motivo? [**Convenção matemática**](https://en.wikipedia.org/wiki/Passive_sign_convention)! 

</aside>

Por fim, é válida a relação abaixo: 

$$
\varepsilon_{Ger} > \varepsilon_{Rec}
$$