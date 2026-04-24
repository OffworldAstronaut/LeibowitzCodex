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

Interessantemente, a norma do produto vetorial entre dois vetores é numericamente igual à área de um paralelogramo formado por estes mesmos vetores. De fato, pode-se demonstrar que 

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

<b>Demonstração</b> — Dados três vetores $\vec{u}, \vec{v}, \vec{w} \in \mathbb{R}^3$, vemos que o paralelogramo formado por eles possui base de área $||\vec{u} \times \vec{v}||$ e altura $h = ||\vec{w}|| \cdot |\cos(\alpha)$, com $\alpha$ sendo o ângulo formado entre o vetor $\vec{w}$ e a altura do paralelepípedo ou entre este e o vetor oriundo do produto vetorial entre $\vec{u}$ e $\vec{v}$. 

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
    \therefore V &= |(\vec{u} \times \vec{v})| \cdot \vec{w}
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

<aside>

Dadas duas retas, é possível encontrar o ângulo entre elas a partir da equação do produto interno apresentada anteriormente, com os vetores considerados sendo os vetores que dão a direção de cada uma das retas. Por essa razão, eles recebem o nome de <b>vetores diretores</b> das retas.

</aside>

## Equações cartesiana, geral e reduzida 

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

Notavelmente, $m$ nesta equação equivale a $\tan{\theta}$, com $\theta$ sendo o ângulo de intersecção entre a reta e o eixo das abscissas. Em razão disto, o parâmetro $m$ é denominado <b>coeficiente angular</b> ou <b>declividade</b> da reta, com $k$ recebendo a alcunha de <b>coeficiente linear</b>. 

## Distância entre um ponto e uma reta 

Dados um ponto $P(x_0, y_0)$ e uma reta $r$ de equação $y = mx + k$, a distância entre o ponto $P$ e a reta $r$, denotada por $d(P, r)$, é definida como o comprimento da perpendicular que une $P$ a $r$. 

$$ 
d(P, r) = \dfrac{|-y_0 + mx_0 + k|}{\sqrt{1 + m^2}}
$$

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

# Planos

---



# Referências 

--- 

1. LIMA, G.; SILVA. Geometria analitica. Rio de Janeiro. 2015.