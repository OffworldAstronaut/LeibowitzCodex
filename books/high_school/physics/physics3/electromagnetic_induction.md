# Indução eletromagnética

# Indução

---

A indução eletromagnética é o fenômeno físico que provoca a **geração** de **força eletromotriz** (diferença de potencial) num dado **material condutor** quando este é submetido à **influência de um campo magnético variável**. 

Um exemplo da aplicação do conceito de indução é o forno elétrico, que combina a indução eletromagnética com o efeito Joule para produzir calor sem utilizar combustíveis fósseis. 

![Imagem retirada da Wikipédia](https://upload.wikimedia.org/wikipedia/commons/b/b8/Induktionsh%C3%A4ll.JPG)

<i>Você sabia que só é possível utilizar panelas especiais nos fogões de indução? O motivo vem do efeito Joule provocado pela movimentação de cargas: o alumínio possui baixa resistividade, diminuindo o calor emitido e reduzindo a eficácia da panela. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Induktionsh%C3%A4ll.JPG" target="_blank">Wikimedia Commons</a>.</i>

Legal, né? 

As próximas seções deste página servirão para a melhor compreensão desse conceito, passando por fluxo magnético e pelas leis de **Faraday** e **Lenz**.

# Fluxo magnético

---

Chamamos de **fluxo magnético** $(\Phi)$ de uma superfície a intensidade de um campo magnético por unidade de área $A$, ou seja 

$$
\Phi = B \cdot A \cos \theta
$$

Com $\theta$ sendo o **ângulo** entre o **campo magnético $(B)$ e a reta normal daquele ponto específico da superfície do corpo induzido.**

O fluxo magnético é medido pela unidade **Weber** $(\text {Wb})$. 

# Lei de Faraday-Lenz

---

Duas leis, comumente interpretadas em conjunto, que formam a base dos **transformadores** da atualidade são a Lei de Indução de Faraday e a Lei de Lenz; a segunda pode ser vista como um aprimoramento da primeira.

Faraday primeiro declara que: 

<blockquote>

<i>A força eletromotriz de um circuito fechado é igual a taxa de variação do campo magnético no tempo.</i>

</blockquote>

E Lenz completa que: 

<blockquote>

<i>A variação do fluxo magnético numa espira fechada faz surgir uma corrente elétrica induzida. Essa corrente induzida gera um campo magnético induzida que se opõe a variação do fluxo magnético.</i>

</blockquote>

Levando essas duas afirmações em conjunto, chegamos na expressão matemática $\varepsilon = -\dfrac{\Delta \phi}{\Delta t}$. O sinal negativo vem justamente dessa oposição do campo induzido em relação ao campo indutor. 

![Originalmente na Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/7/72/Electromagnetic_induction_-_solenoid_to_loop_-_animation.gif)

<i>Animação ilustrando a Lei de Faraday-Lenz. Um campo magnético oscilatório produzido pelo solenoide causa a geração de uma corrente alternada na espira. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Electromagnetic_induction_-_solenoid_to_loop_-_animation.gif" target="_blank">Wikimedia Commons</a>.</i>

## Condutor elétrico imerso num campo magnético


Um caso interessante é quando imergimos um condutor elétrico num campo magnético, e fazemos ele se mover numa dada velocidade $v$ perpendicular a esse campo. 

Ao fazermos isso, poderemos ver que o **campo magnético induz uma diferença de potencial** no condutor, fazendo com que cargas negativas se acumulem em um dos seus terminais. 

Essa **diferença de potencial** pode ser medida por meio da equação

$$
U = BvL
$$

# Transformadores

---

Os **transformadores** são componentes elétricos que alteram a tensão elétrica enquanto mantém a potência constante. 

Esses componentes são formados pela indução de um dado núcleo ferromagnético por dois solenoides, o primeiro ligado numa fonte de corrente alternada, que causa da mudança constante de campo magnético nas proximidades do núcleo ferromagnético. 

![Transformador](https://upload.wikimedia.org/wikipedia/commons/6/64/Transformer3d_col3.svg)

<i>Esquema de um transformador ideal. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Transformer3d_col3.svg" target="_blank">Wikimedia Commons</a>.</i>

Por sua vez, essa mudança provoca uma corrente elétrica de sentido variável, que acaba fazendo o efeito inverso na solenoide da outra ponta. Dependendo da diferença do número de voltas das solenoides, é possível aumentar ou diminuir a tensão entre os terminais de um transformador. 

De forma matemática, podemos dizer que entre os dois solenoides, temos que 

$$
\dfrac{U_1}{N_1}=\dfrac{U_2}{N_2}
$$

onde $N_E$ é o número de voltas do solenoide $E$. 

Em transformadores, temos que $U_1I_1=U_2I_2$, ou seja, a potência é constante - consequência da conservação de energia.

A utilidade desses componentes vem do fato que a potência dissipada em transmissões elétricas é regida pelo quadrado da corrente. Transformadores são utilizados para aumentar a tensão, consequentemente diminuindo a corrente, em transmissões de longa distância.