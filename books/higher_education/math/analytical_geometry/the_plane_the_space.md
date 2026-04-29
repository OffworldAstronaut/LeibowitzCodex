# O Plano e o Espaço

# Sistema de coordenadas 

--- 

Ao escolher um plano formado por retas perpendiculares entre si, comumente chamadas de $x$ e $y$, 
e muni-lo com uma métrica, definindo uma certa distância da origem sobre as retas — intersecção das retas, denominadas eixos — como a unidade, formamos um <b>sistema de coordenadas</b> para este plano escolhido, formando um <b>plano cartesiano</b>. A construção recebe este nome em homenagem a René Descartes, filósofo e matemático francês, um dos fundadores da Geometria Analítica. 

A partir dos números $x$ e $y$, chamados de <b>coordenadas</b>, é possível construir duas retas cuja intersecção é um ponto $P$ no plano construído. Representando $P = (x,y)$, formamos uma 
correspondência entre os padres ordenados dos números reais — cujo conjunto é o $\mathbb{R}^2$ — e os pontos do plano. 

Dados dois pontos $P(x_2,y_2)$ e $Q(x_2,y_2)$, é possível construir um triângulo retângulo e 
mostrar que, por meio do Teorema de Pitágoras, a distância entre esses dois pontos escolhidos é de 

$$ 
d(P, Q) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}
$$

O ponto médio, que situa-se equidistante de dois pontos $A$ e $B$ é, por sua vez, encontrado a partir da média aritmética das coordenadas dos dois pontos considerados, isto é: 

$$
C = \left(\dfrac{x_1 + x_2}{2}, \dfrac{y_1 + y_2}{2}\right)
$$

Ao considerarmos o espaço tridimensional cartesiano, as mesmas expressões continuarão sendo válidas, porém sendo necessária a sua adaptação para a inclusão da terceira coordenada. Com efeito, o plano cartesiano pode ser interpretado como uma "seção" do espaço cartesiano, obtida ao considerarmos a altura $z$ como nula. 

Dessa forma, todos os pontos no espaço são representados por coordenadas $P = (x, y, z)$. A expressão para a distância entre dois pontos $P = (x_1, y_1, z_1)$ e $Q = (x_2, y_2, z_2)$ no espaço também é encontrada a partir de uma aplicação do teorema de Pitágoras, resultando na expressão 

$$
d(P, Q) = \sqrt{(x_1-x_2)^2 + (y_1 - y_2)^2 + (z_1 - z_2)^2}
$$

e, por fim, o ponto médio entre dois pontos no espaço também é o ponto cujas coordenadas são a média aritmética das coordenadas dos pontos considerados. 

$$
C = \left(\dfrac{x_1+x_2}{2},\dfrac{y_1+y_2}{2},\dfrac{z_1+z_2}{2}\right)
$$

# Vetores 

---

Podemos interpretar os pontos do plano como vetores, definindo com isto a grandeza do <b>módulo</b> do vetor (também conhecida como intensidade, magnitude...) denotada por $|\vec{v}|$ ou $||\vec{v}||$. Dessa forma, dado um vetor $\vec{P} = (x,y)$, temos que $||\vec{P}|| = \sqrt{x^2 + y^2}$. 

No caso do espaço tridimensional, a norma de um dado vetor $\vec{Q} = (x, y, z)$ seria $||\vec{Q}|| = \sqrt{x^2 + y^2 + z^2}$. Note que, em ambos os casos, a norma de um vetor é numericamente igual a distância de um ponto à origem, salientando a facilidade de interpretação entre pontos no espaço/plano como vetores e vice-versa.

Duas operações com vetores podem ser inicialmente definidas, a <b>soma</b> e a <b>multiplicação por escalar</b>. Sendo $\vec{a} = (a_x, a_y)$ e $\vec{b} = (b_x, b_y)$, com $k \in \mathbb{R}$: 

$$
\begin{align*}
    \vec{a} + \vec{b} &= (a_x, a_y) + (b_x, b_y) = (a_x + b_x, a_y + b_y) \\\\
    k\vec{a} &= k(a_x, a_y) = (ka_x, ka_y)
\end{align*}
$$

A operação da soma de vetores possui algumas propriedades. São elas: 

$$ 
\begin{align*}
    \vec{a} + \vec{b} &= \vec{b} + \vec{a} \\\\
    \vec{a} + (\vec{b} + \vec{c}) &= (\vec{a} + \vec{b}) + \vec{c} \\\\
    \vec{a} + \vec{0} &= \vec{a} ; \vec{0} = (0,0)
\end{align*}
$$

A operação de multiplicação por escalar também possui algumas propriedades. São elas: 

<aside>

$$ 
\begin{align*}
    k_1(\vec{a} + \vec{b}) &= k_1\vec{a} + k_1\vec{b} \\\\
    (k_1 + k_2) \vec{a} &= k_1\vec{a} + k_2\vec{a} \\\\
    k_1(k_2\vec{a}) &= (k_1k_2)\vec{a} \\\\
    1 \cdot \vec{a} &= \vec{a} \\\\
    0 \cdot \vec{a} &= \vec{0}
\end{align*}
$$

</aside>

Ainda podemos denominar $(-1) \cdot \vec{a} = -\vec{a}$ como o vetor <b>oposto</b> de $\vec{a}$. Possuem módulos iguais e sentidos opostos, de forma que sua soma é o vetor nulo. 

Além disso, todo vetor que possui magnitude um é chamado "vetor unitário" ou "versor", podendo ser denotado por um "circunflexo", por exemplo, $\hat{n}$.

Por fim, perceba que, embora as relações demonstradas foram para vetores no plano, estas também funcionam para vetores no espaço tridimensional. 

## Produto escalar e projeção de vetores

O produto escalar entre dois vetores $\vec{a}$ e $\vec{b}$, também chamado "produto interno", é denotado por $\vec{a} \cdot \vec{b}$ e lido como "'a' interno 'b'". Uma notação alternativa pode ser escrita utilizando parênteses estilizados: $\vec{a} \cdot \vec{b} = \langle \vec{a}, \vec{b} \rangle$. 

Esta operação é definida como  a soma do produto coordenada a coordenada dos vetores. Em notação de somatório, podemos escrever: 

$$
\vec{a} \cdot \vec{b} = \langle \vec{a}, \vec{b} \rangle = \sum_{i=1}^{N}a_ib_i = a_1b_1 + a_2b_2 + ... + a_nb_n
$$

<aside>

Perceba que essa definição não permite apenas o cálculo do produto escalar no plano, mas também entre vetores do espaço tridimensional ou, mais ainda, N-dimensional.

</aside>

Esta operação também pode ser escrita alternativamente como:

$$ 
\vec{a} \cdot \vec{b} = ||a||\cdot ||b|| \cdot \cos{\theta}
$$

Com $||a||$ e $||b||$ sendo as magnitudes de cada vetor e $\cos{\theta}$ o ângulo formado entre os dois vetores considerados.

Esta escrita alternativa origina-se da <b>desigualdade de Cauchy-Schwartz</b>, 

$$ 
\vec{a} \cdot \vec{b} \le ||\vec{a}|| \cdot ||\vec{b}||,
$$

que, ao adaptada, produz a desigualdade 

$$
-1 \le \dfrac{\vec{a} \cdot \vec{b}}{||\vec{a}|| \cdot ||\vec{b}||} \le 1.
$$

De fato, como existe apenas um único ângulo $\theta$ tal que o valor de seu cosseno esteja entre $-1$ e $1$, pode-se escrever 

$$
\cos{\theta} = \dfrac{\vec{a} \cdot \vec{b}}{||\vec{a}|| \cdot ||\vec{b}||}.
$$

Multiplicar ambos os membros por $||\vec{a}|| \cdot ||\vec{b}||$ produz a expressão que queríamos encontrar. Aplicar $\cos^{-1}$ em ambos os membros também produz uma maneira de encontrar o ângulo entre dois vetores a partir de seu produto interno e de suas normas. 

Esta operação, o produto escalar, possui algumas propriedades: 

<aside>

$$
\begin{align*}
    \vec{a} \cdot \vec{a} &= ||\vec{a}||^2 \\\\
    \vec{a} \cdot \vec{b} &= \vec{b} \cdot \vec{a} \\\\
    \vec{a} \cdot (\vec{b} + \vec{c}) &= \vec{a} \cdot \vec{b} + \vec{a} + \vec{c} \\\\
    (k\vec{a})\vec{b} &= \vec{a} \cdot (k\vec{b}) = k(\vec{a} \cdot \vec{b})
\end{align*}
$$

</aside>

Além disto, é possível projetar um vetor sobre o outro por meio da operação de produto interno. Projetar um vetor sobre o outro, neste caso, é encontrar a "sombra" de um vetor $\vec{a}$ num vetor $\vec{b}$, a componente deste vetor que se encontra sobre o outro que, ao adicionada a outro componente <b>perpendicular</b>, produz o vetor $\vec{a}$. 

De fato, a projeção de $\vec{a}$ sobre $\vec{b}$ caso $\theta \lt 90°$ é dada por 

$$
\vec{a_b} = ||\vec{a}|| \cdot \cos{\theta} \cdot \dfrac{\vec{b}}{||\vec{b}||},
$$

com a expressão precisando ser adaptada para $\theta \ge 90°$. Sua forma mais geral, válida para qualquer $\theta$, é: 

$$
\vec{a_b} = \left(\dfrac{\vec{a} \cdot \vec{b}}{||\vec{b}||^2}\right)\vec{b}
$$

Uma outra consequência da desigualdade de Cauchy-Schwartz é a chamada <b>desigualdade triangular</b>, 

$$
||\vec{a} + \vec{b}|| \le ||\vec{a}|| + ||\vec{b}||.
$$

## Produto vetorial

A operação de produto vetorial entre dois vetores $\vec{u} = (u_1, u_2, u_3)$ e $\vec{v} = (v_1, v_2, v_3)$, denotada por $\vec{u} \times \vec{v}$, produz um novo vetor $w = (w_1, w_2, w_3)$ que é simultâneamente perpendicular ao vetor $\vec{u}$ e ao vetor $\vec{v}$. 

Essa propriedade é intrínseca à operação, sendo utilizada para definí-la. Como $\vec{w} \cdot \vec{u} = \vec{w} \cdot \vec{v} = 0$, temos que

$$
\begin{cases}
    u_1w_1 + u_2w_2 + u_3w_3 = 0 \\\\
    v_1w_1 + v_2w_2 + v_3w_3 = 0 
\end{cases}
$$

com o sistema acima possuindo uma infinidade de soluções. Isto ocorre pois dado um vetor $w$ fixo, há infinitos vetores $\vec{u}$ e $\vec{v}$ que são ortogonais a este.

Tomando uma única solução destas infinitas,

$$
\begin{align*}
    w_1 = u_1v_3 - v_2u_3 \\\\
    w_2 = v_1u_3 - u_1z_3 \\\\
    w_3 = u_1v_2 - v_1u_2 
\end{align*}
$$

vemos que o vetor $w$ pode ser escrito da forma $w = (u_1v_3 - v_2u_3, v_1u_3 - u_1v_3, u_1v_2 - v_1u_2)$. 

Embora seja possível encontrar o vetor resultante da operação por meio desta laboriosa expressão, podemos nos utilizar de algo interessante para facilitar o trabalho. Note que, ao realizarmos o determinante da matriz abaixo, considerando os vetores $\hat{i}$, $\hat{j}$, $\hat{k}$ como números reais, chegamos mesma expressão. 

$$
\det
\begin{bmatrix}
    \hat{i} & \hat{j} & \hat{k} \\\\
    u_1 & u_2 & u_3 \\\\ 
    v_1 & v_2 & v_3
\end{bmatrix}
= 
(u_1v_3-v_2u_3)\hat{i} + (v_1u_3 - u_1v_3)\hat{j} + (u_1v_2 - v_1u_2)\hat{k}
$$

Vale mencionar que, ao contrário do produto escalar, o produto vetorial não é comutativo, valendo a igualdade $\vec{u} \times \vec{v} = -(\vec{u} \times \vec{v})$.

Considerando três vetores quaisquer do espaço, valem ainda as propriedades: 

<aside>

$$
\begin{align*}
    (\vec{u} + \vec{v}) \times \vec{w} &= \vec{u} \times \vec{w} + \vec{v} \times \vec{w} \\\\
    \vec{w} \times (\vec{u} + \vec{v}) &= \vec{w} \times \vec{u} + \vec{w} \times \vec{v} \\\\
    \vec{u} \times (\vec{v} \times \vec{w}) &= (\vec{w} \cdot \vec{u})\vec{v} - (\vec{u} \cdot \vec{v})\vec{w} \\\\
    (\vec{u} \times \vec{v}) \times \vec{w} &= (\vec{w} \cdot \vec{u})\vec{v} - (\vec{w} \cdot \vec{v})\vec{u}
\end{align*}
$$

</aside>

Interessantemente, a norma do produto vetorial entre dois vetores é numericamente igual à área de um paralelogramo formado por estes mesmos vetores (verifique!). De fato, pode-se demonstrar que 

$$
||\vec{u} \times \vec{v}||^2 = ||\vec{u}||^2 ||\vec{v}||^2 - (u \cdot v)^2 \Rightarrow ||\vec{u} \times \vec{v}|| = ||\vec{u}|| \cdot ||\vec{v}|| \sin{\theta}
$$

por meio do desenvolvimento dos termos de ambos os membros da igualdade e a verificação de sua simplificação. 

## Produto misto

Dados três vetores do espaço, denominamos $(\vec{u} \times \vec{v}) \cdot \vec{w}$ como o <b>produto misto</b> destes vetores. Pode-se ainda verificar a seguinte igualdade: 

$$
(\vec{u} \times \vec{v}) \cdot \vec{w} = \det 
\begin{bmatrix}
    a_1 & b_1 & c_1 \\\\
    a_2 & b_2 & c_2 \\\\ 
    a_3 & b_3 & c_3 \\\\
\end{bmatrix}
$$

Vale notar ainda que em relação ao produto misto vale $(\vec{u} \times \vec{v}) \cdot \vec{w} = (\vec{v} \times \vec{w}) \cdot \vec{u} = \vec{u} \cdot (\vec{v} \times \vec{w})$. 

Por fim, é possível mostrar que o módulo do produto misto entre três vetores do espaço é numericamente igual ao volume do paralelepípedo definido por eles. 

<aside>

<b>Demonstração</b> — Dados três vetores $\vec{u}, \vec{v}, \vec{w} \in \mathbb{R}^3$, vemos que o paralelepípedo formado por eles possui base de área $||\vec{u} \times \vec{v}||$ e altura $h = ||\vec{w}|| \cdot \cos(\alpha)$, com $\alpha$ sendo o ângulo formado entre o vetor $\vec{w}$ e a altura do paralelepípedo ou entre este e o vetor oriundo do produto vetorial entre $\vec{u}$ e $\vec{v}$. 

Note que 

$$
\begin{align*}
    h &= ||\vec{w}|| \cdot |\cos(\alpha) \\\\
    \therefore h &= ||\vec{w}|| \cdot \left|\dfrac{(\vec{u} \times \vec{v})\cdot \vec{w}}{||\vec{u} \times \vec{v}|| ||\vec{w}||}\right| \\\\
    \therefore h&= \dfrac{|(\vec{u} \times \vec{v}) \cdot \vec{w}|}{||\vec{u} \times \vec{v}||}
\end{align*}
$$

e, pela definição do volume de um paralelepípedo (produto entre a área da base a altura): 

$$
\begin{align*}
    V &= ||\vec{u} \times \vec{v}|| \cdot \dfrac{|(\vec{u} \times \vec{v}) \cdot \vec{w}|}{||\vec{u} \times \vec{v}||} \\\\
    \therefore V &= ||\vec{u} \times \vec{v}|| \cdot \vec{w}
\end{align*}
$$

</aside>

# Retas 

---

Sendo $\vec{v} = (a,b)$ um vetor não-nulo e $A = (x_0, y_0)$ um ponto do plano cartesiano, podemos dizer que um ponto $P(x, y)$ só pertence à reta que contém $A$, na direção de $\vec{v}$, se

$$
\vec{AP} = t\vec{v}, t \in \mathbb{R}.
$$

Esta equação é conhecida como a <b>equação vetorial da reta</b>, podendo também ser expressa em forma de coordenadas,

$$
(x-x_0, y-y_0) = (ta, tb),
$$

com esta igualdade correspondendo a um sistema de equações, cujas equações são denominadas <b>equações paramétricas da reta</b>. 

$$
\begin{cases}
    x = x_0 + at \\\\ 
    y = y_0 + bt
\end{cases}
$$

Por exemplo, as equações 

$$
\begin{cases}
    x = 1 + 2t \\\\ 
    y = 2 - 3t
\end{cases}
$$

são as equações paramétricas da reta que passa pelo ponto $(1,2)$ e possui a direção do vetor $(2, -3)$. Dessa forma, todos os pontos $(1+2t, 2-3t)$, com $t \in \mathbb{R}$ pertencem à reta imaginada. 

O mesmo raciocínio pode ser aplicado para o caso tridimensional. De fato, basta apenas considerar que o ponto e o vetor dados possuem agora três coordenadas.

<aside>

Dadas duas retas, é possível encontrar o ângulo entre elas a partir da equação do produto interno apresentada anteriormente, com os vetores considerados sendo os vetores que dão a direção de cada uma das retas. Por essa razão, eles recebem o nome de <b>vetores diretores</b> das retas.

</aside>

## Equações cartesiana, geral, simétrica e reduzida 

Dadas as equações paramétricas apresentadas anteriormente, podemos eliminar o parâmetro $t$ ao multiplcar a primeira equação por $b$ e a segunda por $a$ e, logo após, subtraindo as duas, produzindo: 

$$
ay - bx = ay_0 - bx_0
$$

Perceba que o segundo membro da equação é constante e, portanto, podemos reescrever esta equação:

$$
ay - bx = c
$$

Esta equação produzida após a eliminação do parâmetro $t$ é chamada de <b>equação cartesiana da reta</b> que, por sua vez, pode ser adaptada tomando $A = b$, $B = -a$ e $C = -c$ para formar a <b>equação geral da reta</b>: 

$$ 
Ax + By + C = 0
$$

A expressão recebe este nome por poder exprimir qualquer reta no plano cartesiano e de que qualquer reta no plano poder ser escrita por meio de uma equação geral. 

Considerando um ponto $A = (x_0, y_0)$ que satisfaça a equação geral de uma reta, podemos adaptá-la para o formato 

$$
A(x - x_0) + B(y - y_0) = 0
$$

que é a equação geral de uma reta que passa pelo ponto $A$ e possui a direção do vetor $(-B, A)$.

Uma outra adaptação da equação cartesiana é a chamada <b>equação reduzida</b>, produzida após reescrever $m = \dfrac{b}{a}$: 

$$ 
y = mx + k
$$

Por fim, uma outra adaptação para a equação original produz a <b>equação simétrica</b> da reta. 

$$
\dfrac{x - x_0}{a} = \dfrac{y - y_0}{b}
$$

Notavelmente, $m$ nesta equação equivale a $\tan{\theta}$, com $\theta$ sendo o ângulo de intersecção entre a reta e o eixo das abscissas. Em razão disto, o parâmetro $m$ é denominado <b>coeficiente angular</b> ou <b>declividade</b> da reta, com $k$ recebendo a alcunha de <b>coeficiente linear</b>. 

Quando analisamos o caso tridimensional, vemos uma situação análoga. Ao eliminarmos o parâmetro $t$ das equações paramétricas e reorganizando seus termos, produzimos a equação simétrica no caso tridimensional: 

$$
\dfrac{x - x_0}{a} = \dfrac{y - y_0}{b} = \dfrac{z - z_0}{c}
$$

Ao contrário do caso bidimensional, uma única equação geral não pode ser confeccionada para representar uma reta. O que pode ser feito é um sistema de duas equações no formato

$$
\begin{cases}
    A_1x + B_1y + C_1z + D_1 = 0 \\
    A_2x + B_2y + C_2z + D_2 = 0
\end{cases}
$$

produzindo uma reta no espaço tridimensional. A razão para esta diferença será explicitada em mais detalhes na seção sobre planos.

## Distância entre um ponto e uma reta 

Dados um ponto $P(x_0, y_0)$ e uma reta $r$ de equação $y = mx + k$, a distância entre o ponto $P$ e a reta $r$, denotada por $d(P, r)$, é definida como o comprimento da perpendicular que une $P$ a $r$. 

$$ 
d(P, r) = \dfrac{|-y_0 + mx_0 + k|}{\sqrt{1 + m^2}}
$$

Alternativamente, por meio da equação geral de uma reta, é possível encontrar a expressão: 

$$
d(P, r) = \dfrac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}
$$

No caso tridimensional, é possível determinar a distância entre um ponto e uma reta por meio de <b>planos</b>. Basta construir um plano que passa pelo ponto dado e que, simultaneamente, é perpendicular a reta dada. A norma do segmento de reta procurado é, dessa forma, a distância entre o ponto dado e o ponto de intersecção entre a reta dada e o plano construído.

Uma solução alternativa é escrever a distância de $P$ a todos os outros pontos da reta em função de um parâmetro $t$ — por meio das equações vetorial/paramétricas — e seguir por meio de derivadas.

<aside>

<b>Demonstração (Distância entre ponto e reta, método do plano)</b> — Sejam uma reta $r$ delimitada por um ponto $A(x_a, y_a, z_a)$ e um vetor diretor $\vec{v} = (v_1, v_2, v_3)$ e um ponto $P(x_0, y_0, z_0) \in \mathbb{R^3}$. 

Podemos construir um plano a partir do vetor diretor da reta e do ponto $P$ dado. Além disso, podemos construir as equações paramétricas da reta $r$ dada. Para encontrar o ponto de intersecção entre a reta e o plano construído, basta solucionar o sistema abaixo. 

$$
\begin{cases}
    v_1(x - x_0) + v_2(y - y_0) + v_3(z - z_0) = 0 \\\\
    x = x_a + tv_1 \\\\
    y = y_a + tv_2 \\\\
    z = z_a + tv_3 
\end{cases}
$$

Substituindo as três últimas equações na primeira e rearranjando os termos, podemos encontrar o valor de $t$ que fornece o ponto de intersecção entre a reta e o plano. 

$$
\begin{align*}
    &v_1(x_a + tv_1 - x_0) + v_2(y_a + tv_2 - y_0) + v_3(z_a + tv_3 - z_0) = 0 \\\\
    &\implies v_1x_a + v_1^2t^2 - v_1x_0 + v_2y_a + v_2^2t - v_2y_0 + v_3z_a + tv_3^2 - v_3z_0 = 0 \\\\
    &\implies v_1^2t + v_2^2t + v_3^2t = -v_1x_a + v_1x_0 - v_2y_a + v_2y_0 + v_3z_a + v_3z_0 \\\\
    &\implies t(v_1^2 + v_2^2 + v_3^2) = v_1(x_0 - x_a) + v_2(y_0 - y_a) + v_3(z_0-z_a) \\\\
    &\therefore t = \dfrac{v_1(x_0 - x_a) + v_2(y_0 - y_a) + v_3(z_0 - z_a)}{v_1^2 + v_2^2 + v_3^2}
\end{align*}
$$

Substituindo este valor nas equações paramétricas da reta, obtemos: 

$$
\begin{align*}
    x &= \dfrac{x_a(v_1^2 + v_2^2 + v_3^2) + v_1^2(x_0 - x_a) + v_1v_2(y_0 - y_a) + v_1v_3(z_0 - z_a)}{v_1^2 + v_2^2 + v_3^2} \\\\
    y &= \dfrac{y_a(v_1^2 + v_2^2 + v_3^2) + v_1v_2(x_0 - x_a) + v_2^2 (y_0 - y_a) + v_2v_3(z_0 - z_a)}{v_1^2 + v_2^2 + v_3^2} \\\\
    z &= \dfrac{z_a(v_1^2 + v_2^2 + v_3^2) + v_1v_3(x_0 - x_a) + v_2v_3 (y_0 - y_a) + v_3^2(z_0 - z_a)}{v_1^2 + v_2^2 + v_3^2}
\end{align*}
$$

Podemos reescrever essas expressões numa forma mais compacta, obtendo:

$$
\begin{align*}
    x &= \dfrac{x_a \langle \vec{v}, \vec{v} \rangle + \langle \vec{v}, v_1(x_0 - x_a, y_0 - y_a, z_0 - z_a) \rangle}{\langle \vec{v}, \vec{v} \rangle} \\\\
    y &= \dfrac{y_a \langle \vec{v}, \vec{v} \rangle + \langle \vec{v}, v_2(x_0 - x_a, y_0 - y_a, z_0 - z_a) \rangle}{\langle \vec{v}, \vec{v} \rangle} \\\\
    z &= \dfrac{z_a \langle \vec{v}, \vec{v} \rangle + \langle \vec{v}, v_3(x_0 - x_a, y_0 - y_a, z_0 - z_a) \rangle}{\langle \vec{v}, \vec{v} \rangle}
\end{align*}
$$

Assim, pela expressão da distância entre dois pontos, temos que a distância entre o ponto $P(x_0, y_0, z_0)$ dado e o ponto de intersecção $I$ encontrado é

$$
\begin{align*}
d(P, I) &= \sqrt{\langle \vec{X}, \vec{X} \rangle + \dfrac{2\langle \vec{v}, \vec{X} \rangle^2}{\langle \vec{v}, \vec{v} \rangle}} \\\\
\vec{X} &= (x_0 - x_a, y_0 - y_a, z_0 - z_a)
\end{align*}
$$

e, portanto, esta é a distância entre o ponto e a reta dados.

</aside>

<aside>

<b>Demonstração (Distância entre ponto e reta, método por produto vetorial)</b> — Sejam $r$ uma reta definida pelo ponto $A(x_a, y_a, z_a)$ e pelo vetor diretor $\vec{v} = (v_1, v_2, v_3)$ e $P(x_0, y_0, z_0)$ um ponto qualquer do espaço. 

Note que a altura do paralelogramo formado pelos vetores $\vec{v}$ e $\vec{AP}$ é igual a 

$$
h = d(P, r) = \dfrac{||\vec{AP} \times \vec{v}}{||\vec{v}||}
$$

como visto anteriormente na exploração da interpretação geométrica do produto vetorial. 

</aside>

## Distância entre duas retas no mesmo plano

Num plano, podemos encontrar a distância entre duas retas $r: y = m_1x + b_2$ e $s: y = m_2x + b_2$ por meio da expressão: 

$$
\begin{cases}
    0 & \text{se } m_1 \neq m_2 \\\\
    \dfrac{|b_1 - b_2|}{\sqrt{m^2 + 1}} & \text{se } m_1 = m_2 = m
\end{cases}
$$

É fácil ver a razão por trás da primeira condição: coeficientes angulares distintos implica em que as retas são concorrentes e, portanto, possuem um ponto em comum. Dessa forma, sua distância é zero. Para o caso em que as retas são paralelas, isto será demonstrado a seguir. 

<aside>

<b>Demonstração — </b> Sejam duas retas paralelas $r: y = mx + b_1$ e $s: y = mx + b_2$ e uma perpendicular $g: -\dfrac{1}{m}x$. Encontrar a distância $d(r,s)$ implica em encontrar a distância entre os pontos de interseção da reta perpendicular com as paralelas dadas, isto é, os pontos $P(x_p, y_p)$ e $Q(x_q, y_q)$. Os pontos marcam, respectivamente, a interseção da perpendicular com as retas $r$ e $s$. 

Para encontrar as coordenadas do ponto $P(x_p, y_p)$, basta resolver o sistema

$$
\begin{cases}
    y = mx + b_1 \\\\ 
    y = -\dfrac{1}{m}x
\end{cases}
$$

por quaisquer métodos. Substituindo de forma direta para encontrar $x$ e substituindo novamente para encontrar $y$, vemos que o ponto $P$ possui coordenadas $P\left(\dfrac{-b_1m}{m^2+1},\dfrac{b_1}{m^2+1}\right)$. 

Seguindo o mesmo processo para o ponto $Q$, encontramos as coordenadas $P\left(\dfrac{-b_2m}{m^2+1},\dfrac{b_2}{m^2+1}\right)$.

Assim, pela expressão para a distância entre dois pontos num plano, temos: 

$$
\begin{align*}
    d(P,Q) &= \sqrt{\left(\dfrac{-b_2m + b_1m}{m^2 + 1}\right)^2 + \left(\dfrac{b_2 - b_1}{m^2 + 1}\right)^2} \\\\
    \therefore d(P,Q) &= \sqrt{\dfrac{m^2(b_1 - b_2)^2}{(m^2 + 1)^2} + \dfrac{(b_2 - b_1)^2}{(m_2 + 1)^2}} \\\\
    \therefore d(P,Q) &= \sqrt{\dfrac{(b_1-b_2)^2(m^2+1)}{(m^2+1)^2}} \\\\
    \therefore d(P,Q) &= \dfrac{|b_1 - b_2|}{\sqrt{m^2 + 1}}
\end{align*}
$$

</aside>

# Circunferências e esferas

---

Assim como retas, também podemos representar circunferências por equações. Desta forma, considerando um ponto $C = (x_0, y_0)$ — o centro da circunferência — e um vetor $A = (x_0 + r, y_0)$ com $r$ sendo o raio da construção geométrica e $t$ o ângulo formado entre um certo ponto $P$ pertencente à circunferência e o vetor $A$, podemos escrever que todo ponto $P$ cujas coordenadas satisfaçam o sistema

$$
\begin{cases}
    x = x_0 + r \cos{t} \\\\
    y = y_0 + r \sin{t}
\end{cases}
$$

pertence à circunferência. Essas equações, por sua vez, são chamadas de <b>equações paramétricas da circunferência</b>. Adaptando-a, de forma semelhante ao que foi feito no caso das linhas retas, podemos escrever a chamada <b>equação cartesiana da circunferência</b>: 

$$
(x - x_0)^2 + (y - y_0)^2 = r^2
$$

Por fim, de forma ainda mais ampla, a <b>equação geral da circunferência</b> é dada por: 

$$ 
x^2 + y^2 + Dx + Ey + F = 0 
$$

Com $D, E, F \in \mathbb{R}$.

Em notação de conjunto, podemos definir a circunferência como o conjunto de todos os pontos que estão à uma mesma distância $r$ de um centro $C$. 

Estas mesmas definições estendem-se para a definição de esferas no espaço tridimensional. Para uma esfera centrada em $C(x_0, y_0, z_0)$ de raio $r$, sua <b>equação cartesiana</b> é dada por 

$$
(x-x_0)^2 + (y-y_0)^2 + (z-z_0)^2 = r^2
$$

Expandindo e rearranjando os termos, chegamos na equação geral da esfera: 

$$
x^2 + y^2 + z^2 + Dx + Ey + Fz + G = 0
$$

Por fim, também podemos escrever as <b>equações paramétricas da esfera</b> por meio do centro $C(x_0, y_0, z_0)$ e um raio $r$ dados e os ângulos $\theta$, na horizontal, e $\phi$, vertical. 

$$
\begin{cases}
    x = x_0 + r \cos{\theta} \\\\
    y = y_0 + r \sin{\theta} \\\\
    z = z_0 + r \sin{\phi}
\end{cases}
$$


# Planos

---

Elevar o nosso ponto de vista para o espaço tridimensional permite analisar os <b>planos</b> como subconjuntos desse espaço. De fato, dado um ponto $P(x_0, y_0, z_0)$ e um vetor $\vec{v} = (v_1, v_2, v_3)$, é possível ver que só existe um único plano $\alpha$ perpendicular ao vetor $\vec{v}$ que contém o ponto $P$. 

De forma alternativa, podemos dizer que um dado ponto $Q(x, y, z)$ somente pertence ao plano mencionado se, e somente se, 

$$
\vec{PQ} \cdot \vec{v} = 0
$$

Além disso, já que $\vec{PQ} = (x - x_0, y - y_0, z - z_0)$, podemos expandir a expressão acima para formar a chamada <b>equação cartesiana do plano</b>. 

$$
v_1(x-x_0) + v_2(y - y_0) + v_3(z - z_0) = 0
$$

Perceba que esta equação pode ser expandida e reorganizada para algo da forma 

$$
Ax + By + Cz + D = 0
$$

com $A, B, C, D \in \mathbb{R}$. Esta equação é denominada <b>equação geral do plano</b>. Perceba que o sistema de duas equações que origina uma reta no espaço é formado por duas equações desse formato. Isso deve-se ao fato de que <b>a intersecção de dois planos determina uma reta</b>. 

É possível visualizar isso de forma mais detalhada ao introduzir o conceito de graus de liberdade. Num espaço bidimensional, a equação da forma $Ax + By + C = 0$ permite deixar uma variável livre enquanto outra é definida pela equação. 

Fazer a mesma coisa no espaço seria permitir duas variáveis livres — é possível assumir quaisquer valores em duas direções — gerando um plano. Enquanto isso, ao intersectar dois planos, estamos restringindo uma outra variável por meio de um sistema de equações. Este sistema pode ter infinitas soluções (uma reta) ou nenhuma — os planos são paralelos.

## Distância de um ponto a um plano 

Dados um plano $\alpha : Ax + By + Cz + D = 0$ e um ponto $P_0(x_0, y_0, z_0)$, temos que a distância entre eles é dada pela expressão 

$$
d(P, \alpha) = \dfrac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}
$$

<aside>

<b>Demonstração</b> — Note que os três primeiros coeficientes da equação do plano são as coordenadas de seu vetor normal. Dessa forma, o vetor $\vec{v} = (A, B, C)$ é o vetor normal ao plano e o vetor diretor da reta perpendicular a este e que passa pelo ponto $P$. Dito isso, encontrar a distância entre o ponto $P$ e o ponto de intersecção da perpendicular com o plano solucionará nosso problema. 

Para encontrar o ponto procurado, precisamos solucionar o sistema de equações formado pelas equações paramétricas da reta e a equação do plano dado. 

$$
\begin{cases}
    Ax + By + Cz + D = 0 \\\\ 
    x = x_0 + tA \\\\
    y = y_0 + tB \\\\ 
    z = z_0 + tC 
\end{cases}
$$

Substituindo as três últimas equações na primeira equação e resolvendo para encontrar $t$, obtemos: 

$$
\begin{align*}
    A(x_0 + tA) + B(y_0 + tB) + C(z_0 + tC) + D &= 0 \\\\
    \therefore Ax_0 + tA^2 + By_0 + tB^2 + Cz_0 + tC^2 + D &= 0 \\\\
    \therefore t(A^2 + B^2 + C^2) &= -Ax_0 - By_0 - Cz_0 - D \\\\
    \therefore t \langle \vec{v}, \vec{v} \rangle &= -(Ax_0 + By_0 + Cz_0 + D) \\\\
    \therefore t &= \dfrac{-(\langle \vec{v}, P \rangle + D)}{\langle \vec{v}, \vec{v} \rangle}
\end{align*}
$$

Substituindo $t$ nas equações paramétricas da perpendicular, obtemos o ponto $I(x_I, y_I, z_I)$, de coordenadas

$$
\begin{align*}
    x_I &= \dfrac{x_0 \langle \vec{v}, \vec{v} \rangle - A(\langle v, P \rangle + D)}{\langle \vec{v}, \vec{v} \rangle} \\\\
    y_I &= \dfrac{y_0 \langle \vec{v}, \vec{v} \rangle - B(\langle v, P \rangle + D)}{\langle \vec{v}, \vec{v} \rangle} \\\\
    z_I &= \dfrac{z_0 \langle \vec{v}, \vec{v} \rangle - C(\langle v, P \rangle + D)}{\langle \vec{v}, \vec{v} \rangle} \\\\
\end{align*}
$$

Assim, pela expressão da distância entre dois pontos: 

$$
\begin{align*}
    d(P, I) &= \sqrt{\dfrac{A^2(\langle \vec{v}, P \rangle + D)^2}{\langle \vec{v}, \vec{v} \rangle^2} + \dfrac{B^2(\langle \vec{v}, P \rangle + D)^2}{\langle \vec{v}, \vec{v} \rangle^2} + \dfrac{C^2(\langle \vec{v}, P \rangle + D)^2}{\langle \vec{v}, \vec{v} \rangle^2}} \\\\
    d(P, I) &= \sqrt{\dfrac{(A^2 + B^2 + C^2)(\langle \vec{v}, P \rangle + D)^2}{\langle \vec{v}, \vec{v} \rangle^2}} \\\\
    d(P, I) &= \sqrt{\dfrac{(\langle \vec{v}, P \rangle + D)^2}{\langle \vec{v}, \vec{v} \rangle}} \\\\
    d(P, I) &= \dfrac{|\langle \vec{v}, P \rangle + D|}{||\vec{v}||}
\end{align*}
$$

Como queríamos demonstrar.

</aside>

### Distância entre dois planos 

Uma consequência interessante da propriedade interior é a capacidade de encontrar a distância entre dois planos paralelos. De fato, considere os planos $\alpha: Ax + By + Cz + D_1 = 0$ e $\beta: Ax + By + Cz + D_2 = 0$ e os pontos $P(x_0, y_0, z_0) \in \alpha$ e $Q(x_1, y_1, z_1) \in \beta$. O vetor diretor dos planos é $\vec{v} = (A, B, C)$.

Pelo que encontrarmos anteriormente, temos que $d(P, \beta) = \dfrac{|\langle \vec{v}, P \rangle + D_2|}{||\vec{v}||}$ e $d(P, \alpha) = \dfrac{|\langle \vec{v}, Q \rangle + D_1|}{||\vec{v}||}$. Note que $d(P, \beta) = d(Q, \alpha)$ para quaisquer pontos $P$ e $Q$ e, portanto: 

$$
d(\alpha, \beta) = |\langle \vec{v}, P \rangle + D_2| = |\langle \vec{v}, Q \rangle + D_1|
$$


## Distância entre retas reversas 

Dizemos que duas retas são <b>reversas</b> se elas não se intersectam por pertencerem ao mesmo plano no espaço. Para encontrar a distância entre essas retas, nos utilizamos dos conceitos de produto misto e sua interpretação geométrica. 

<aside>

<b>Demonstração</b> — Sejam as retas $r$ e $s$, definidas, respectivamente, pelos pontos $P(x_0, y_0, z_0)$ e $Q(x_1, y_1, z_1)$ e vetores diretores $\vec{u} = (u_1, u_2, u_3)$ e $\vec{v} = (v_1, v_2, v_3)$ retas reversas. Note que, pela interpretação geométrica do produto misto como o volume de um paralelepípedo, a distância $d(r, s)$ será a altura $h$ desse sólido definido pelos vetores $\vec{u}$, $\vec{v}$ e $\vec{PQ}$ e, portanto: 

$$
d(r,s) = \dfrac{|(\vec{u} \times \vec{v}) \cdot \vec{PQ}|}{||\vec{u} \times \vec{v}||}
$$

</aside>

# Referências 

--- 

1. LIMA, G.; SILVA. Geometria analitica. Rio de Janeiro. 2015.
2. STEINBRUCH, Alfredo; WINTERLE, Paulo. Geometria Analítica. 2. ed. São Paulo: Makron Books, 2004.