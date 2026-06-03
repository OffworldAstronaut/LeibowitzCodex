# Momento

# Definição



Podemos definir a “quantidade de movimento” intuitivamente como o "quanto ele quer continuar" se movendo. Esse conceito está muito ligado com a energia cinética. 

É importante frisar que a quantidade de movimento (também chamada de **momento**) é uma grandeza abstrata, assim como energia, por isso, pode ser mais difícil de visualizá-la do que uma força, por exemplo.

Podemos calcular o **momento** linear de um objeto por meio da fórmula 

$$
Q = m v
$$

Com $Q$ sendo o momento, $m$ a massa do corpo e $v$ sua velocidade. 

Além disso, é fácil ver que a variação do momento pode ser escrita como

$$
\Delta Q = Q_f - Q_i 
$$

E, no caso específico em que a massa é constante, temos que 

$$
\Delta Q = mv_f - mv_i = m(v_f - v_i) = m \Delta v
$$

## Momento e força

Por análise dimensional, podemos deduzir que a unidade do momento é de $\text{kg} \cdot \text{m}/\text{s}$. 

Essa análise é importante. Perceba a unidade do momento, e a unidade da **força**. Se dividirmos a unidade do momento por tempo novamente, teremos um $\text N$! 

Logo, a partir disso, podemos concluir que 

$$
F=\dfrac{\Delta Q}{\Delta t}
$$

Que é a **escrita original** da definição de força, feita por Newton em seu livro!

A magnitude de uma força é calculada pela **variação do momento no tempo**. 

# Impulso



O **impulso** é uma grandeza vetorial que mede a variação do momento de algum objeto, relacionando nesse processo a força aplicada, o tempo percorrido e a quantidade de movimento. 

Essa grandeza é calculada pela seguinte expressão: 

$$
I = F\Delta t
$$

Nos utilizando da análise dimensional, podemos ver que o impulso é medido em **Newton-segundos**: um impulso com um módulo de 1 Newton-segundo equivale a uma força de 1 newton aplicada durante 1 segundo.

## Teorema do Impulso

O Teorema do Impulso relaciona o impulso com a diferença de momento de um objeto, por meio da seguinte expressão abaixo.

$$
F\Delta t = \Delta Q=I
$$

Podemos encontrar essa expressão apenas multiplicando tambos os lados da definição de força apresentada acima por $\Delta t$. 

$$
F=\dfrac{\Delta Q}{\Delta t} \Rightarrow F \Delta t =\Delta Q \Rightarrow I = \Delta Q
$$

# Colisões



Colisões acontecem quando corpos se chocam, podendo ser de três tipos: **perfeitamente elásticas, parcialmente elásticas** ou **perfeitamente inelásticas**. 

## Colisões perfeitamente elásticas


Nessas colisões, toda a energia cinética, $K$, do sistema é conservada, ou seja, $\Delta K = 0$. 

Como toda a energia é conservada, podemos nos utilizar dessa propriedade para encontrar as velocidades de cada corpo após a colisão $(v_n)$, dadas as velocidades iniciais $(u_n)$ e suas massas $(m_n)$, pelas equações a seguir. 

$$
v_{1} = \dfrac{m_1-m_2}{m_1+m_2}u_1+\dfrac{2m_2}{m_1+m_2}u_2
$$

$$
v_2 = \dfrac{2m_1}{m_1+m_2}u_1+\dfrac{m_2-m_1}{m_1+m_2}u_2
$$

![Exemplo de uma colisão perfeitamente elástica entre massas iguais.](./images/momentum/colisao_elastica1.gif)

![Exemplo de uma colisão perfeitamente elástica entre duas massas diferentes.](./images/momentum/colisao_elastica2.gif)

*Acima: exemplos de colisões perfeitamente elásticas. GIFs retirados [daqui](https://en.wikipedia.org/wiki/Elastic_collision).*

### Dedução das expressões

Pela conservação de momento, encontramos nossa equação $(1)$: 

$$ 
\begin{align*}
    m_1 u_1 + m_2 u_2 &= m_1 v_1 + m_2 v_2 \\\\
    m_1 u_1 - m_1 v_1 &= m_2 v_2 - m_2 u_2 \\\\
    m1 (u_1 - v_1) &= m_2(v_2 - u_2)
\end{align*}
$$

Pela conservação de energia cinética, encontramos nossa equação $(2)$: 

$$
\begin{align*}
    \dfrac{1}{2}m_1 u_1^2 + \dfrac{1}{2} m_2 u_{2}^2 &= \dfrac{1}{2} m_1 v_{1}^2 + \dfrac{1}{2} m_2 v_{2}^2 \\\\
    m_1 u_1^2 + m_2u_2^2 &= m_1v_1^2 + m_2v_2^2 \\\\
    m_1u_1^2 - m_1v_1^2 &= m_2v_2^2 - m_2u_2^2 \\\\
    m_1(u_1^2 - v_1^2) &= m_2(v_2^2 - u_2^2) \\\\
    m_1(u_1 + v_1)(u_1 - v_1) &= m_2(v_2 + u_2)(v_2 - u_2)
\end{align*}
$$

Dividir $(2)$ por $(1)$ nos fornece: 

$$
\begin{align*}
    \dfrac{m_1(u_1+v_1)(u_1-v_1)}{m_1(u_1-v_1)} &= \dfrac{m_2(v_2+u_2)(v_2-u_2)}{m_2(v_2-u_2)} \\\\ 
    u_1 + v_1 &= v_2 + u_2 \\\\
    u_1 - u_2 &= v_2 - v_1 \\\\
    -\Delta u &= \Delta v
\end{align*}
$$

Uma primeira informação interessante. A velocidade de aproximação é igual em módulo à velocidade de afastamento entre os dois objetos.

Podemos encontrar as fórmulas buscadas por meio da resolução de um sistema linear composto pelas equações $(1)$, oriunda da conservação do momento, e a relação de velocidade acima, que iremos chamar de $(3)$, oriunda da conservação da energia cinética. 

$$ 
\begin{cases}
    m_1(u_1 - v_1) = m_2(v_2 - u_2) \\\\
    u_1 + v_1 = u_2 + v_2 
\end{cases}
$$

Podemos resolver esse sistema pelo método da substituição. Escrevendo $v_1 = u_2 + v_2 - u_1$ e substituindo na equação superior, temos: 

$$ 
\begin{align*}
    m_1(u_1 - u_2 - v_2 + u_1) &= m_2(v_2 - u_2) \\\\
    m_1(2u_1 - u_2 - v_2) &= m_2(v_2 - u_2) \\\\
    2u_1m_1 - m_1u_2 - m_1v_2 &= m_2v_2 - m_2u_2 \\\\
    2u_1m_1 &= m_2v_2 + m_1v_2 + m_1u_2 - m_2u_2 \\\\
    2u_1m_1 &= v_2(m_1 + m_2) + u_2(m_1 - m_2) \\\\
    v_2(m_1 + m_2) &= 2u_1m_1 - u_2(m_1 - m_2) \\\\
    v_2 &= \dfrac{2u_1m_1 - u_2(m_1-m_2)}{m_1+m_2} \\\\
    v_2 &= \dfrac{2m_1}{m_1+m_2}u_1 + \dfrac{m_2-m_1}{m_1+m_2}u_2
\end{align*}
$$

Aplicando o método da substituição novamente, desta vez escrevendo $v_2 = u_1 + v_1 - u_2$, encontramos a expressão para $v_1$: 

$$
\begin{align*}
    m_1(u_1 - v_1) &= m_2(u_1 + v_1 - u_2 - u_2) \\\\
    m_1(u_1 - v_1) &= m_2(u_1 + v_1 - 2u_2) \\\\
    m_1u_1 - m_1v_1 &= m_2u_1 + m_2v_1 - 2m_2u_2 \\\\
    -m_1v_1 - m_2v_1 &= -m_1u_1 + m_2u_1 - 2m_2u_2 \\\\
    -v_1(m_1 + m_2) &= u_1(m_2-m_1) - 2m_2u_2 \\\\
    v_1(m_1+m_2) &= 2m_2u_2 - u_1(m_2-m_1) \\\\
    v_1 &= \dfrac{2m_2u_2 - u_1(m_2-m_1)}{m_1+m_2} \\\\
    v_1 &= \dfrac{m_1-m_2}{m_1+m_2}u_1 + \dfrac{2m_2}{m_1+m_2}u_2
\end{align*}
$$

## Colisões inelásticas

Nas colisões inelásticas, a energia cinética do sistema **não** é completamente conservada, sendo convertida em outras formas como **som e calor**, por exemplo. 

Quando uma colisão é **perfeitamente inelástica**, o máximo valor possível de energia cinética é perdido, “colando” os dois corpos num só, com ambos possuindo a mesma velocidade final.

![Exemplo de uma colisão perfeitamente inelástica entre duas massas iguais.](./images/momentum/colisao_inelastica.gif)

*Acima: exemplo de uma colisão perfeitamente inelástica. GIF retirado [daqui](https://en.wikipedia.org/wiki/Inelastic_collision).*

Podemos encontrar as velocidade final dos corpos por meio da expressão abaixo: 

$$
v = \dfrac{m_au_a + m_bu_b}{m_a+m_b}
$$

Para deduzir essa expressão, trabalhe com a **conservação do momento** (e o fato de que os corpos estão como um corpo só depois da colisão) e rearrange a expressão!

### Dedução da expressão

Pela conservação de momento, podemos escrever a igualdade:

$$
\begin{align*}
    m_1u_1 + m_2u_2 &= m_1v_1 + m_2v_2 = P \\\\
    m_1u_1 + m_2u_2 - m_2v_2 &= m_1v_1 = P - m_2v_2 \\\\
    v_1 = \dfrac{P - m_2v_2}{m_1} &= \dfrac{m_1u_1 + m_2u_2 - m_2v_2}{m_1} \\\\
\end{align*}
$$

Substituindo $v_1$ na expressão de energia final do corpo, $K_F$, obtemos: 

$$
\begin{align*}
    K_F &= \dfrac{m_1v_1^2}{2} + \dfrac{m_2v_2^2}{2} \\\\ 
    K_F &= \dfrac{m_1\left(\dfrac{P-m_2v_2}{m_1}\right)^2}{2} + \dfrac{m_2v_2^2}{2} \\\\
    K_F &= \dfrac{m_1(P - m_2v_2)^2}{2m_1^2} + \dfrac{m_2v_2^2}{2} \\\\
    K_F &= \dfrac{(P-m_2v_2)^2}{2m_1} + \dfrac{m_2v_2^2}{2} \\\\
    K_F &= \dfrac{P^2 - 2Pm_2v_2 + m_2^2 v_2^2}{2m_1} + \dfrac{m_2v_2^2}{2} \\\\
\end{align*}
$$

Com a energia cinética em função de $v_2$, podemos derivar em relação a essa variável. 

$$
\begin{align*}
    \dfrac{dK_F}{dv_2} &= \dfrac{d}{dv_2}\left(\dfrac{P^2 - 2Pm_2v_2 + m_2^2v_2^2}{2m_1}\right) + \dfrac{d}{dv_2}\left(\dfrac{m_2v_2^2}{2}\right) \\\\
    &= \dfrac{1}{2m_1} \dfrac{d}{dv_2}(P^2 - 2Pm_2v_2 + m_2^2 v_2^2) + m_2v_2 \\\\ 
    &= \dfrac{2m_2^2 v_2 - 2Pm_2}{2m_1} + m_2v_2 \\\\
    &= \dfrac{2(m_2^2 v_2 - Pm_2)}{2m_1} + m_2v_2 \\\\
    &= \dfrac{m_2^2v_2-Pm_2}{m_1} + \dfrac{m_2v_2}{m_1} \\\\
    &= \dfrac{m_2^2v_2-Pm_2+m_1m_2v_2}{m_1}
\end{align*}
$$

Para encontrar o valor de $v_2$ que fornece o ponto mínimo da função quadrática, igualamos a derivada a zero. 

$$
\begin{align*}
    \dfrac{m_2^2v_2-Pm_2+m_1m_2v_2}{m_1} &= 0 \\\\
    m_2^2v_2-Pm_2+m_1m_2v_2 &= 0 \\\\
    m_2^2v_2 + m_1m_2v_2 &= Pm_2 \\\\
    v_2(m_2^2 + m_1m_2) &= Pm_2 \\\\
    v_2 &= \dfrac{Pm_2}{m_2^2 + m_1m_2} \\\\
    v_2 &= \dfrac{P}{m_1+m_2}
\end{align*}
$$

O mesmo procedimento pode ser realizado substituindo $v_2$ a partir da conservação de momento na equação de energia cinética, derivando a encontrando o valor correspondente de $v_1$ para o mínimo da expressão. 

Após isso, conclui-se que $v_1 = v_2 = \dfrac{P}{m_1+m_2} = \dfrac{m_1u_1 + m_2u_2}{m_1+m_2}$.

## Coeficiente de restituição

Definido como sendo a razão entre as velocidades após a colisão e antes da colisão, o **coeficiente de restituição ($e$**) é expresso pela equação abaixo: 

$$
e=\dfrac{|v_1-v_2|}{|u_1 - u_2|} = \dfrac{|\Delta v|}{|\Delta u|}
$$

Por meio do coeficiente de restituição, é possível montar uma **expressão geral** que abarca todos os cenários de colisões unidimensionais: 

$$
v_1 = \dfrac{m_2e(u_2 - u_1) + m_1v_1 + m_2u_2}{m_1+m_2}
$$

$$
v_2=\dfrac{m_1e(u_1-u_2)+m_1u_1+m_2u_2}{m_1 + m_2}
$$

Quando $e=1$, temos uma colisão **perfeitamente elástica**; caso $e=0$, temos uma colisão **perfeitamente inelástica**.