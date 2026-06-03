# Momento linear e colisões

# Momento



Chamamos <b>momento (linear)</b> $(\vec{p})$ a grandeza associada ao movimento de um corpo, dependente de sua massa e velocidade. Originalmente, ao definí-la, Newton a chamou de "quantidade de movimento". Temos ainda que, ao definir o momento para uma partícula ou um corpo, é natural definir o momento de um sistema como o total da soma do momento de todos os corpos pertencentes ao sistema considerado.

A grandeza do momento pode ser compreendida como a "inércia" da mudança de movimento de um corpo. Essa "dificuldade" é classicamente ilustrada pelo exemplo do automóvel e do carrinho de bebê — é infinitamente mais fácil parar um carrinho de bebê com as mãos do que o automóvel. 

# Centro de massa

 

Num sistema com mais de uma partícula, chamamos <b>forças internas</b> ao sistema as forças de interação entre essas partículas. Essas forças internas são chamadas ainda <b>newtonianas</b> quando formam pares ação e reação e, como consequência, conservam o momento total ao longo do tempo, conforme <a href="/books/higher_education/physics/physics_one/newtons_laws.html">visto anteriormente</a>.

Um resultado interessante que podemos demonstrar daqui é que, em um sistema de duas partículas com forças internas newtonianas, a variação do momento total do sistema é a força resultante externa sobre o sistema. Para demonstrar isso, vamos por passos. Primeiro, veja que as equações de movimento deste sistema são: 

$$
\begin{align*}
    \dfrac{d\vec{p_1}}{dt} &= \vec{F_{12}} + \vec{F_1^{\text{ext}}} \\ 
    \dfrac{d\vec{p_2}}{dt} &= \vec{F_{21}} + \vec{F_2^{\text{ext}}} \\ 
\end{align*}
$$

Somando-as, obtemos:

$$
\dfrac{d}{dt}(\vec{p_1} + \vec{p_2}) = \vec{F_{12}} + \vec{F_{21}} + \vec{F_1^{\text{ext}}} + \vec{F_2^{\text{ext}}}
$$

Perceba que, como estamos considerando forças internas newtonianas, $\vec{F_{12}} + \vec{F_{21}} = 0$, com a equação tornando-se 

$$
\dfrac{d}{dt}(\vec{p_1} + \vec{p_2}) = \vec{F_1^{\text{ext}}} + \vec{F_2^{\text{ext}}}
$$

que podemos simplificar para 

$$
\dfrac{d\vec{P}}{dt} = \vec{F^{\text{ext}}}
$$

com $\vec{P} = \vec{p_1} + \vec{p_2}$ e $F^{\text{ext}} = \vec{F_1^{\text{ext}}} + \vec{F_2^{\text{ext}}}$. Note ainda que $\vec{P}$ é constante se, e somente se, $F^{\text{ext}} = 0$.

Este resultado nos motiva a entrar num raciocínio interessante. Perceba que a equação produzida para o sistema como um todo é equivalente a uma equação de movimento para uma "partícula" que contém todo o momento do sistema sob ação de uma resultante, soma de todas as forças externas impressas sobre as partículas. À esta "partícula" denominamos por <b>centro de massa</b> (ou <b>centro de momento</b>) do sistema, que o resume a um único ponto representativo.

![](https://upload.wikimedia.org/wikipedia/commons/b/b3/Bird_toy_showing_center_of_gravity.jpg)

<i>Um homem equilibra um pequeno modelo de pássaro em seu centro de massa. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Bird_toy_showing_center_of_gravity.jpg" target="_blank">Wikimedia Commons</a>.</i>

Dado que agora definimos um ponto no espaço, como localizá-lo? Considerando duas partículas de massa constante, $m_1$ e $m_2$, temos inicialmente que o momento do sistema é dado por

$$
P = m_1 \dfrac{d \vec{r_1}}{dt} + m_2 \dfrac{d \vec{r_2}}{dt}
$$

Desenvolvendo esta expressão, obtemos:

$$
\begin{align*}
    P &= m_1 \dfrac{d \vec{r_1}}{dt} + m_2 \dfrac{d \vec{r_2}}{dt} \\
    \therefore P &= \dfrac{d}{dt}(m_1 \vec{r_1} + m_2 \vec{r_2}) \\ 
    \therefore P &= \dfrac{d}{dt}\left(m_1 \vec{r_1} + m_2 \vec{r_2} \cdot \dfrac{m_1 + m_2}{m_1 + m_2}\right) \\ 
    \therefore P &= (m_1 + m_2) \cdot \dfrac{d}{dt}\left(\dfrac{m_1 \vec{r_1} + m_2 \vec{r_2}}{m_1 + m_2}\right) \\ 
    \therefore P &= M \cdot \dfrac{d \vec{R}}{dt}
\end{align*}
$$

Ou seja, podemos ver que o momento desde centro de massa é dado pela sua massa — a massa total do sistema — e a sua velocidade, a derivada temporal de sua posição. Observando os cálculos, é possível ver que a posição deste ponto especial é dada por uma média ponderada das posições das partículas do sistema. Os pesos são as massas de cada partícula.

$$
\vec{R} = \dfrac{m_1 \vec{r_1} + m_2 \vec{r_2}}{m_1 + m_2}
$$

Perceba que estes mesmos raciocínios podem ser conduzidos para $N$ partículas, mas que não o foram aqui por questões didáticas. Com efeito, para um sistema de $N$ partículas de massas $m_1, ..., m_n$ e posições $\vec{r_1}, ..., \vec{r_n}$, a posição de seu centro de massa é dada por 

$$
\vec{R} = \dfrac{1}{M} \sum_{i = 1}^N m_i \vec{r_i} = \dfrac{m_1 \vec{r_1} + m_2 \vec{r_2} + ... + m_n \vec{r_n}}{m_1 + m_2 + ... + m_n}
$$

Se explicitarmos as coordenadas no sistema cartesiano, podemos ainda escrever 

$$
\vec{R}(x, y, z) = \dfrac{1}{M} \cdot \left(\sum_{i=1}^n m_i x_i, \sum_{i=1}^n m_i y_i, \sum_{i=1}^n m_i z_i\right)
$$

## Corpos extensos

Chamamos <b>corpos extensos</b> (ou ainda corpos <b>rídigos</b> ou <b>extensos</b>) aqueles cujas dimensões são relevantes para sua dinâmica, corpos que não podem ser considerados como pontos no espaço. Note que podemos imaginar estes corpos como infinitos pontos materiais de massa infinitesimal. Assim, adaptando a expressão regular para a posição do centro de massa, obtemos 

$$
\dfrac{1}{M} \sum_{i = 1}^N m_i \vec{r_i} \overset{N \to \infty \text{, }m_i \to 0}{=} \dfrac{1}{M} \int_0^M \vec{r} \ dm
$$

No particular de um corpo extenso <b>uniforme</b>, isto é, de densidade constante em todos os seus pontos, podemos realizar uma mudança de variável na integral, substituindo os limites de integração da massa para o volume. Dessa forma, a integral anterior torna-se 

$$
\dfrac{\rho}{M} \int_{0}^V \vec{r} \ dv
$$

Por fim, é notável mencionar que caso o corpo uniforme considerado possua um centro geométrico, este será o centro de massa do objeto. 

# Sistemas de massa variável



É possível impulsionar um corpo em sistemas de massa variável por meio da atuação de forças internas. Esta possibilidade se origina da conservação de momento do sistema e, para ilustrar esse fenômeno, podemos recorrer a um experimento mental: imagine um astronauta, um revólver e uma bala. 

![](https://en.meming.world/images/en/6/62/Always_has_been_%28without_Earth%29.jpg)

<i>Embora nenhum homicídio por arma de fogo tenha ocorrido no espaço (ainda), cosmonautas soviéticos levaram consigo pistolas TP-82 por anos para se proteger de ursos ou lobos caso caíssem nas extensas florestas siberianas.</i>

Neste nosso sistema, um astronauta segura um revólver em sua mão — com ambos possuindo conjuntamente uma massa de $m$ — executando um movimento retilíneo uniforme, em relação a um referencial inercial $Oxyz$, com velocidade $\vec{v}$. 

No instante $t + \Delta t$, este astronauta dispara com seu revólver uma bala de massa $\delta m$ na direção contrária de $\vec{v}$. Como esta bala possui velocidade $-\vec{v_e}$ em relação ao revólver, esta possui velocidade $\vec{v} + \vec{v_e}$ em relação ao referencial inercial $O$. 

Além disso, após o disparo, o astronauta começa a se mover com uma velocidade $\vec{v} + \Delta \vec{v}$. Note que, por hipótese, o momento do nosso sistema se conserva. Assim, podemos escrever 

$$
\begin{align*}
    P(t + \delta t) - P(t) &= 0 \\ 
    \therefore m(\vec{v} - \Delta \vec{v}) + \delta m(\vec{v} - \vec{v_e}) - \vec{v}(m - \delta m) &= 0 \\ 
    \therefore m\vec{v} + m \Delta \vec{v} + \delta m \vec{v} - \delta m \vec{v_e} - m \vec{v} - \delta m \vec{v} &= 0 \\ 
    \therefore m \Delta \vec{v} - \delta m \vec{v_e} &= 0 
\end{align*}
$$

e resolver para $\Delta \vec{v}$, obtendo:

$$
\Delta \vec{v} = \dfrac{\delta m}{m}\vec{v_e}
$$

Como a bala foi ejetada, temos que a variação da massa ($\Delta m$) foi de $-\delta m$. Assim, podemos substituir $\Delta m = -\delta m$ na equação acima para reescrevê-la na forma 

$$
\Delta \vec{v} = -\dfrac{\Delta m}{m}\vec{v_e}
$$

Note que esta velocidade $\Delta \vec{v}$ é justamente a velocidade de recuo experimentada por franco-atiradores, por exemplo, ao efetuarem um disparo.

![](https://upload.wikimedia.org/wikipedia/commons/2/28/UpshotKnotholeGrable.gif)

<i>Teste nuclear de Upshot-Knothole Grable. Perceba o recuo do canhão ao disparar a ogiva nuclear, que detona 19 segundos depois. GIF sob domínio público, via <a href="https://commons.wikimedia.org/wiki/File:UpshotKnotholeGrable.gif" target="_blank">Wikimedia Commons</a>.</i>

Perceba ainda que a velocidade de ejeção da bala do interior do revólver é uma característica interna do revólver (por exemplo, a carga de pólvora). Caso uma segunda bala fosse disparada, ela ainda teria velocidade $-\vec{v_e}$ em relação ao revólver, porém $\vec{v} + \Delta \vec{v} - \vec{v_e}$ em relação ao referencial inercial. 

Imagine agora que, ao invés de balas, o astronauta dispara continuamente um gás. Teríamos, então, que levar em conta sua massa variável em cada instante para descrever corretamente sua dinâmica. Podemos utilizar a equação para $\Delta \vec{v}$ para deduzir uma equação de movimento para o conjunto astronauta-revólver,

$$
\Delta \vec{v} = -\dfrac{\Delta m}{m}\vec{v_e} \implies m\dfrac{\Delta \vec{v}}{\Delta t} = \dfrac{Delta m}{\Delta t} \vec{v_{rel}}
$$

com $\vec{v_{rel}} = -\vec{v_e}$ sendo a velocidade relativa entre o jato de gás e a pistola. Assim, fazendo $\Delta t \to 0$, obtemos finalmente: 

$$
m \dfrac{d \vec{v}}{dt} = \dfrac{dm}{dt}\vec{v_{rel}}
$$

É importante notar que esta expressão não fornece a variação de momento do astronauta. Com efeito, pela regra da derivação do produto de duas funções, temos que a derivada da função momento $\vec{P}(t) = m(t) \cdot \vec{v}(t)$ é dada por 

$$
\dfrac{d\vec{P}}{dt} = m \dfrac{d\vec{v}}{dt} + \dfrac{dm}{dt}\vec{v}
$$

Assim, comparando a equação obtida com a anterior, temos que 

$$
\begin{align*}
    m\dfrac{d\vec{v}}{dt} &= -\dfrac{dm}{dt}\vec{v_e} = \dfrac{dm}{dt}\vec{v_{rel}} \\ 
    \therefore m\dfrac{d\vec{v}}{dt} + \dfrac{dm}{dt}\vec{v} &= -\dfrac{dm}{dt}\vec{v_e} + \dfrac{dm}{dt}\vec{v} = \dfrac{dm}{dt}\vec{v_{rel}} + \dfrac{dm}{dt}\vec{v} \\  
    \therefore m\dfrac{d\vec{v}}{dt} + \dfrac{dm}{dt}\vec{v} &= \dfrac{dm}{dt}(\vec{v} - \vec{v_e}) = \dfrac{dm}{dt}(\vec{v} + \vec{v_{rel}}) \\ 
    \therefore \dfrac{d\vec{P}}{dt} &= \dfrac{dm}{dt}(\vec{v} - \vec{v_e}) = \dfrac{dm}{dt}(\vec{v} + \vec{v_{rel}})

\end{align*}
$$

## Foguetes

O exemplo mais comum de sistema de massa variável conforme o estudado nesta seção são os foguetes. Considerando um foguete se movnedo no vácuo e numa região de aceleração gravitacional desprezível, teremos $F^{\text{ext}} = 0$.

Suponha que nosso foguete comece a queimar combustível quando sua velocidade em relação a um referencial inercial é $\vec{v_i}$ e sua massa é $m_i$ e termine sua queima ao atingir uma massa final $m_f$. Como determinar a sua velocidade final, $\vec{v_f}$? 

Como sabemos que $dv = -\dfrac{dm}{m}\vec{v_e}$, com $\vec{v_e}$ constante, basta integrar ambos os membros da equação em $\vec{v}$. Assim, obtemos: 

$$
\int_{v_i}^{v_f} d \vec{v} = v_f - v_i = - \vec{v_e} \int_{m_i}^{m_f} \dfrac{dm}{m} = \vec{v_e} \cdot \ln{\left(\dfrac{m_i}{m_f}\right)}
$$

Ou seja, de forma mais limpa, temos que: 

$$
v_f - v_i = v_e \cdot \ln{\left(\dfrac{m_i}{m_f}\right)}
$$

Com $||\vec{v_f}|| = v_f$, $||\vec{v_i}|| = v_i$ e $||\vec{v_e}|| = v_e$.

Esta equação é conhecida por <b>equação do foguete ideal</b> ou <b>equação de Tsiolkovsky</b> em homenagem ao pioneiro russo, pai da Astronáutica, Konstantin Tsiolkovsky. 

![](https://upload.wikimedia.org/wikipedia/commons/a/a8/%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD_%D0%A6%D0%B8%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9.jpg)

<i>Konstantin Tsiolkovsky no começo do século XX. O pai da astronáutica passou grande parte de sua vida morando em modestas cabanas de madeira em pacífica solitude. Domínio público, via <a href="https://commons.wikimedia.org/wiki/File:%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD_%D0%A6%D0%B8%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9.jpg" target="_blank">Wikimedia Commons</a></i>

Perceba que a razão $\dfrac{m_i}{m_f}$ possui uma relação exponencial com a velocidade final. Para alcançar velocidades cada vez maiores, precisamos de foguetes com quantidades exponencialmente maiores de combustível. Esta é a razão, portanto, que foguetes possuem estágios: é mais eficiente largar estágios vazios para trás à medida em que se acelera, pois a razão no interior do logaritmo torna-se maior em comparação com estágios anteriores. 

# Referências 



1. <i>Playlist</i> de Física 1 da USP formada por aulas do prof. Dr. Marcelo Martinelli (<a target="_blank" href="https://www.youtube.com/playlist?list=PLAudUnJeNg4vmlyuv__uBgdOkzw4VSrcJ">Acesse aqui</a>).
2. LING, S. J. et al. University physics. Houston, Texas: Openstax, Rice University, 2018. v. 1 (<a target="_blank" href="https://openstax.org/details/books/university-physics-volume-1">Acesse aqui</a>).
3. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 1: mecânica. 5. ed. São Paulo: Blucher, 2013