# Sólidos de revolução: volumes, áreas e comprimentos

# Sólidos de revolução

Chamamos de **sólido de revolução** o sólido gerado pela rotação do gráfico de uma função em torno de um eixo (linha reta). Embora essa rotação seja possível para qualquer eixo, neste documento iremos tratar apenas dos eixos horizontais e verticais, em especial os cartesianos $(x=0; y=0)$.

## Revolução em torno do eixo horizontal

Podemos calcular o **volume desse sólido** por meio de uma adaptação da expressão usual para uma integral, consequência da modificação da soma de Riemann para esse novo cenário: ao invés de somarmos infinitos retângulos, iremos somar infinitos **cilindros**, formados pela rotação desses “retangulinhos”.

Dessa forma, a integral $\int_a^b f(x) \ dx$  se transforma em $\pi \int_a^b \cdot [f(x)]^2 \ dx$. Essa é a expressão necessária para o cálculo do **volume** de qualquer sólido de revolução com rotação em torno do eixo x.

<aside>

Essa noção pode ser adaptada como a integral da área da seção transversal ao longo do intervalo do sólido, se a dimensão dessas áreas dependerem apenas de uma só variável — $\int_a^b A(x) \ dx$. Essa noção é útil para qualquer integral de volume.

</aside>

Se considerarmos outros eixos horizontais que não sejam o eixo das abscissas, podemos adaptar nossa integral para: 

$$
\pi \int_a^b [f(x)-y_R]^2 \ dx
$$

Com $y_R$ sendo a constante da reta horizontal, o eixo de rotação.

## Revolução em torno do eixo vertical

Agora, se a função estiver sendo rotacionada entorno do eixo y, para calcular o volume desse sólido teremos que nos valer da chamada <i>shell integration</i> (”integração em concha”).

![](https://upload.wikimedia.org/wikipedia/commons/3/31/Shell_integral_undergraph_-_around_y-axis.png)

<i>Ilustração da integração em concha. Note a revolução do gráfico em torno do eixo vertical, enquanto a integral calculada tem sua variável de integração no eixo perpendicular. Imagem por Blacklemon67, via <a href="https://commons.wikimedia.org/wiki/File:Shell_integral_undergraph_-_around_y-axis.png" target="_blank">Wikimedia Commons</a>.</i>

De forma mais geral, é um método utilizado para o cálculo do volume de um sólido de revolução quando os limites de integração estão no eixo **perpendicular** ao eixo de revolução.

Considerando uma integração no intervalo $[a,b]$ e $r(x)=x-x_R$, com $x_R$ a constante da reta vertical — o eixo de rotação — podemos escrever: 

$$
V_y = 2 \pi \int_a^b r(x)f(x) \ dx
$$

É importante mencionar que quando $r(x) = x$, temos o caso da revolução em torno do eixo $y$ do espaço cartesiano. 

Perceba que um sólido de revolução possui uma superfície externa, uma **“casca”**, além da própria curva da função $f(x)$. Perguntas naturais a se fazer a partir desse fato são: é possível calcular a área dessas superfícies? É possível calcular o comprimento dessas linhas? A resposta, claro, é sim. 

# Referências 

1. <i>Playlist</i> de cálculo diferencial e integral da USP — Coleção de aulas com o prof. Dr. Alexandre Lymberopoulos (<a target="_blank" href="https://www.youtube.com/playlist?list=PLAudUnJeNg4tr-aiNyYCXE46L3qEZ2Nzx">Acesse aqui</a>);