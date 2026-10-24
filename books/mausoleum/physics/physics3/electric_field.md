# Campo elétrico

# O que são campos?

Podemos definir <b>campos</b> na física como uma entidade física que permite a interação à distância entre corpos, ou seja, sem que haja nenhum tipo de contato físico entre eles. Matematicamente, podemos descrever campos como funções que recebem coordenadas temporais e no tempo e retornam números (no caso dos <b>campos escalares</b>) ou vetores (no caso dos <b>campos vetoriais</b>). 

## O campo elétrico

Quando estudamos o campo elétrico, vemos que ele é um <b>campo vetorial</b>, assim como o campo gravitacional: cada ponto do espaço ao redor da carga recebe um vetor de <b>força elétrica</b>. 

No caso das cargas positivas, convencionamos que o vetor aponta radialmente “para fora”, enquanto das cargas negativas, o vetor aponta radialmente “para dentro”. 

![image.png](./images/electric_field/campo_eletrico_cargas.png)

<i>Cargas e seus respectivos vetores de força elétrica. Imagem autoral.</i>

Visualmente, podemos “desenhar” o campo elétrico por meio das <b>linhas de força</b>, representações para os vetores de força de cada ponto do espaço considerado: a concatenação de vários vetores forma as linhas de força. Com vetores o suficiente, podemos desenhar “linhas” para representar o campo elétrico. 

Vale deixar claro que embora elas sejam chamadas “linhas de força”, nenhuma força é exercida em lugar nenhum <b>se não houver nenhuma outra carga para interagir com o campo</b>!

![](./images/electric_potential/electric_potential_forcelines.png)

<i>Note como os vetores do campo elétrico mudam de direção de acordo com sua posição! Note também a intensidade do campo elétrico (ela decai de forma inversamente proporcional ao quadrado da distância). (Captura de tela desse <a href="https://icphysweb.z13.web.core.windows.net/simulation.html" target="_blank">simulador</a>).</i>

Essa imagem também evidencia uma informação muito útil se encontrarmos alguma linha de força de forma não muito padronizada: <b>o vetor campo elétrico</b> daquele ponto <b>é sempre tangente às linhas de força</b>, já que elas são formadas de muitos e muitos pequenos vetores de campo elétrico, um para cada ponto do espaço. 

# Intensidade de um campo elétrico

Para um ponto $(x,y,z)$ qualquer do espaço, podemos dizer que a <b>força eletrostática</b> (ou força coulombiana) que será exercida pelo vetor campo elétrico (criado por uma carga de valor $Q_1$) caso exista uma carga de valor $Q_2$ naquele ponto é dada por

$$
\vec{F_C}=k\dfrac{Q_1Q_2}{d^2}\vec{\hat{r}}
$$

Onde $\vec{\hat{r}}$ é o vetor campo elétrico unitário que sai de uma carga puntiforme radialmente.

Podemos plotar essas linhas de força mais complexas da figura acima calculando vários vetores (e subtraindo eles), dois para cada ponto do espaço (correspondente às duas cargas)! 

Uma maneira mais direta seria resolver as equações diferenciais de Maxwell, mas é fora do escopo deste documento.

Além disso, podemos comparar visualmente a intensidade de campos elétricos pela <b>densidade</b> de linhas de força. 

De forma mais geral, podemos medir o campo elétrico $\vec{E}$ pela unidade $\text{N/C}$ (Newtons por Coulomb), ou seja, quantos Newtons de força serão exercidos para cada Coulomb de carga que estiver naquele determinado ponto. Perceba que isso vem da própria definição do campo elétrico.

Dessa forma, podemos ainda encontrar uma segunda equação extremamente útil para a resolução de alguns problemas: 

$$
\vec{E}=\dfrac{\vec{F}}{q}\Rightarrow\vec{F}=q\vec{E}
$$

Também podemos encontrar uma outra equação para o <b>valor</b> do campo elétrico gerado por uma carga por meio de uma segunda adaptação da <b>Lei de Coulomb</b>, utilizando a equação encontrada acima. 

$$
\text {E} = \dfrac{F}{q} = \dfrac{kQq}{qd^2}\Rightarrow E=\dfrac{kQ}{r^2}
$$

Ou seja, podemos saber o <b>valor</b> do campo elétrico em $\text{N/C}$ de uma carga $Q$ em qualquer distância $r$!