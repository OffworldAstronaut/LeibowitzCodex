# Técnicas de integração

# Técnicas de integração

Neste manuscrito estão listadas e discorridas sobre diversas técnicas que podem auxiliar no cálculo de integrais de diversos tipos de funções.

# Mudança de variável

A propriedade da mudança de variável nos permite mudar a variável da função que está sendo integrada, permitindo uma maior facilidade. A ideia por trás dessa propriedade é uma espécie de “inversão” da regra da cadeia.

<aside>

<b>Teorema (Guidorizzi, mudança de variável de integração)</b> — Seja $f$ contínua num intervalo $I$ e sejam $a$ e $b$ dois números reais quaisquer em $I$. Seja $g: [c,d] \rightarrow I$, com $g'$ contínua em $[c,d]$, tal que $g(c) = a$ e $g(d) = b$. Nestas condições:

$$
\int_{a}^{b} f(x) \ dx = \int_{c}^{d} f(g(u)) \cdot g'(u) \ du
$$

</aside>

Por exemplo, na integração $\int_{2}^{3} (x-2)^8 \ dx$, podemos substituir $u = x-2$ e, consequentemente, $du = dx$. Os limites de integração mudarão de acordo com a nova variável, com $x = 2 \rightarrow u = 0, x = 3 \rightarrow u = 1$. 

Por fim, a integral se torna $\int_{0}^{1} u^8 \ du$, tremendamente simplificando sua avaliação: 

$$ 
\int_{0}^{1} u^8 \ du = \left[\dfrac{u^9}{9}\right]_{0}^{1} = \dfrac{1^9}{9} - \dfrac{0^9}{9} = \dfrac{1}{9}
$$

<aside>

Perceba que a derivada entre os colchetes com os limites de integração é uma notação condensada para a subtração entre as antiderivadas. Lemos <b>avaliada entre</b> $a$ e $b$, com estes dois números sendo os limites de integração.

</aside>

Por fim, qual o motivo da origem de $du = dx$, e como essa substituição funciona? 

Nesse exemplo, definimos $u = g(x) = x-2$. Pela diferenciação, temos que $\dfrac{du}{dx} = \dfrac{d}{dx}(x-2) = 1 \rightarrow du = dx$. Curiosamente, isso <b>não funcionaria</b>, já que notações de derivadas são apenas notações, não "frações" de fato. Entretanto, isso pode ser provado de forma rigorosa, também. 

# Integração por partes

A <b>integração por partes</b> é uma maneira de “reverter” a regra do produto. 

De fato, podemos provar a propriedade: 

$$
\int f'(x) g(x) \ dx = f(x)g(x) - \int f(x) g'(x) \ dx
$$

A demonstração é bem direta. Basta apenas encontrar a primitiva de $(fg)'$ e rearranjar os termos.

Um bom e simples exemplo para essa regra é a integral $\int x \cos{x} \ dx$. Por meio da integração por partes, podemos definir $f(x)=x$ e $g'(x) = \cos{x}$. Aplicando a regra: 

$$
\int x \cos{x} \ dx = x \sin{x} - \int 1 \cdot \sin{x} = x \sin{x} + \cos{x} + k
$$

Com $k$ sendo a constante de integração, qualquer número real. 

# Integração por frações parciais

A <b>integração por funções parciais</b> é uma excelente técnica para o auxílio do cálculo de primitivas de funções racionais, isto é, funções da forma 

$$
\dfrac{P(x)}{Q(x)}
$$

com $P(x)$ e $Q(x)$ ambos polinômios. Há uma restrição de grau entre esses polinômios, que será discorrida adiante. 

## Primeiro tipo

Para calcular primitivas da forma

$$
\int \dfrac{P(x)}{(x - \alpha)(x - \beta)} \ dx
$$

com $P(x)$ um polinômio e $\alpha, \beta \in \mathbb{R}$, o que podemos fazer? 

Para isso, considere o teorema a seguir: 

<aside>

<b>Teorema (Guidorizzi, Um caso de decomposição de funções racionais)</b> — Sejam $\alpha, \beta, m, n \in \mathbb{R}$. Além disso, $\alpha \neq \beta$. Logo, $\exists A, B \in \mathbb{R}$ tais que 

$$
\begin{align*}
    \dfrac{mx + n}{(x - \alpha)(x - \beta)} &= \dfrac{A}{x - \alpha} + \dfrac{B}{x - \beta} \\ 
    \dfrac{mx + n}{(x - \alpha)^2} &= \dfrac{A}{x-\alpha} + \dfrac{B}{(x - \alpha)^2}
\end{align*}
$$

</aside>

<aside>

<b>Demonstração</b> — Como vale

$$
\dfrac{A}{x - \alpha} + \dfrac{B}{x - \beta} = \dfrac{(A+B)x - A \beta - \alpha B}{(x-\alpha)(x - \beta)}
$$

basta mostrar que existem $A, B \in \mathbb{R}$ tais que 

$$
\begin{cases}
    A + B = m \\ 
    \beta A + \alpha B = -n
\end{cases}
$$

É possível ver que esse sistema admite solução única dada por 

$$
\begin{array}{cc}
    A = \dfrac{\alpha m + n}{\alpha - \beta} & B = -\dfrac{\beta m + n}{\alpha - \beta}
\end{array}
$$

Para o segundo caso, note que 

$$
\begin{align*}
    \dfrac{xm + n}{(x - \alpha)^2} &= \dfrac{mx - m \alpha}{(x - \alpha)^2} + \dfrac{m \alpha + n}{(x - \alpha)^2} \\ 
    \therefore \dfrac{xm + n}{(x - \alpha)^2} &= \dfrac{m(x - \alpha)}{(x - \alpha)^2} + \dfrac{m \alpha + n}{(x - \alpha)^2} \\ 
\end{align*}
$$

assim, basta tomar $A = m$ e $B = m\alpha + n$. 

</aside>

Caso, em nosso integrando, tivermos $P(x) \lt 2$, poderemos aplicar o teorema e, por consequência, obter 

$$
\begin{align*}
    \int \dfrac{P(x)}{(x - \alpha)(x - \beta)} \ dx &= \int \dfrac{A}{x - \alpha} + \dfrac{B}{x - \beta} \\ 
    \therefore \int \dfrac{P(x)}{(x - \alpha)(x - \beta)} \ dx &= A \ln{|x-\alpha|} + B\ln{|x - \beta|} + k, k \in \mathbb{R}
\end{align*}
$$

Perceba que como este teorema é válido somente se o grau de $P(x)$ for menor do que o polinômio denominador, caso tivermos em mãos um integrando em que isto não aconteça, é necessário efetuar uma divisão de polinômios. De fato, após essa divisão teremos algo na forma 

$$
\dfrac{P(x)}{(x - \alpha)(x - \beta)} = Q(x) + \dfrac{R(x)}{(x - \alpha)(x - \beta)}
$$

<aside>

<b>Exemplo (Guidorizzi)</b> — Calcule a primitiva a seguir. 

$$
\int \dfrac{x+3}{x^2 - 3x + 2} \ dx 
$$

Inicialmente, note que 

$$
\int \dfrac{x+3}{x^2 - 3x + 2} \ dx = \int \dfrac{x+3}{(x-1)(x-2)} \ dx 
$$

Assim, pelo primeiro caso do teorema, temos que 

$$
\begin{align*}
    \int \dfrac{x+3}{(x-1)(x-2)} \ dx &= \int -\dfrac{4}{x-1} \ dx + \int \dfrac{5}{x-2} \ dx \\ 
    \therefore \int \dfrac{x+3}{(x-1)(x-2)} \ dx &= -4\ln{|x-1|} + 5\ln{|x-2|} + k
\end{align*}
$$

</aside>

## Segundo tipo

O que pode ser feito para o cálculo de primitivas da forma 

$$
\int \dfrac{P(x)}{(x - \alpha)(x - \beta)(x - \gamma)}
$$

com $P(x)$ polinômio e $\alpha, \beta, \gamma \in \mathbb{R}$? 

De forma semelhante, há um teorema que nos pode ser útil. 

<aside>

<b>Teorema (Guidorizzi, Um caso de decomposição de funções racionais)</b> — Sejam $\alpha, \beta, \gamma, m, n, p \in \mathbb{R}$ com $\alpha \neq \beta \neq \gamma$. Logo, $\exists A, B, C \in \mathbb{R}$ tais que 

$$
\begin{align*}
    \dfrac{mx^2 + nx + p}{(x - \alpha)(x - \beta)(x - \gamma)} &= \dfrac{A}{x - \alpha} + \dfrac{B}{x - \beta} + \dfrac{C}{x - \gamma} \\ 
    \dfrac{mx^2 + nx + p}{(x - \alpha)(x - \beta)^2} &= \dfrac{A}{x - \alpha} + \dfrac{B}{x - \beta} + \dfrac{C}{(x - \beta)^2}
\end{align*}
$$

</aside>

Assim como o caso anterior, a aplicação do teorema é condicionada ao grau do numerador, que deve ser menor que o do denominador. Caso esta condição não seja atendida, uma divisão de polinômios deve ser efetuada. 

Para o fim dessa discussão sobre frações parciais, uma nota: quando uma função racional possui em seu denominador um polinômio que não pode ser decomposto como nos casos anteriores, uma estratégia interessante a se seguir pode ser escrever esse denominador como uma soma de quadrados e, posteriormente, efetuar uma mudança de variável.

# Substituição pela tangente da metade de um arco

A mudança de variável

$$
u = \tan{\dfrac{\alpha x}{2}}
$$

pode ser útil sempre que o integrando for uma função racional cujas variáveis do numerador e do denominador são, respectivamente, $\sin{\alpha x}$ e $\cos{\alpha x}$.

Durante esse processo é importante a consideração de duas identidades trigonométricas: 

$$
\begin{align*}
    \sin{\alpha x} &= \dfrac{2 \tan{\dfrac{\alpha x}{2}}}{1 + \tan^2{\dfrac{\alpha x}{2}}} \\ 
    \cos{\alpha x} &= \dfrac{1 - \tan^2{\dfrac{\alpha x}{2}}}{1 + \tan^2{\dfrac{\alpha x}{2}}}
\end{align*}
$$

Para ilustrar isso, vamos recorrer a um exemplo. 

<aside>

<b>Exemplo</b> — Calcule a primitiva a seguir. 

$$
\int \dfrac{1}{\cos{x}} \ dx 
$$

Note que 

$$
\int \dfrac{1}{\cos{x}} \ dx  = \int \dfrac{1 + \tan^2{\dfrac{x}{2}}}{1 - \tan^2{\dfrac{x}{2}}} \ dx 
$$

Assim, fazendo $u = \tan{\dfrac{x}{2}}$, temos que $du = \dfrac{1}{2}\left(1 + \tan^2{\dfrac{x}{2}}\right) \ dx$, obtemos

$$
\int \dfrac{1}{\cos{x}} \ dx = \int \dfrac{1+u^2}{1 - u^2} \cdot \dfrac{2 du}{1 + u^2} = \int \dfrac{2}{1-u^2} \ du
$$

Como $\dfrac{2}{1 - u^2} = \dfrac{1}{1-u} + \dfrac{1}{1 + u}$, temos então que 

$$
\int \dfrac{1}{\cos{x}} \ dx = - \ln{|1-u|} + \ln{|1+u|} + k = \ln{\left|\dfrac{1 + u}{1 - u}\right|} + k
$$

E, portanto 

$$
\int \dfrac{1}{\cos{x}} \ dx = \ln{\left|\dfrac{1 + \tan{\dfrac{x}{2}}}{1 - \tan{\dfrac{x}{2}}}\right|} + k, k \in \mathbb{R}
$$

Por outro lado, como $\dfrac{1 + \tan{\dfrac{x}{2}}}{1 - \tan{\dfrac{x}{2}}} = \sec{x} + \tan{x}$, temos, finalmente, que 

$$
\int \dfrac{1}{\cos{x}} \ dx = \ln{|\sec{x} + \tan{x}|} + k, k \in \mathbb{R}
$$

</aside>

# Primitivas de potências de trigonométricas

É possível encontrar algumas propriedades que facilitam o cálculo das primitivas de produtos de funções trigonométricas e em especial suas potências, inclusive por <b>fórmulas de recorrência</b>. 

O primeiro caso notável é o da integral $\int \sin^n{x} \cdot \cos^m{x} \ dx$.

Caso $n$ seja ímpar, um atalho rápido é substituir $u = \cos{x}$. Caso $m$ seja ímpar, um outro atalho é substituir $u=\sin{x}$. Se ambos forem pares, a decisão mais prática é rescrever 

$$
\begin{align*} 
\sin^2{x} &= \dfrac{1 - \cos{2x}}{2} \\\\ 
\cos^2{x} &= \dfrac{1 - \cos{2x}}{2}
\end{align*}
$$

Além disso, temos o caso da integral $\int \sec^n{x} \tan^m{x} \ dx$, que pode ser da maneira:

$$
\int \sec^n{x} \tan^m{x} \ dx = \begin{cases}
\int \sec^{n-1}{x} \cdot (\sec^2{x} - 1)^{\dfrac{m-1}{2}} \sec{x} \tan{x} \ dx & m\text{ ímpar} \\ 
\int \sec^n{x} \cdot (\sec^2{x} - 1)^\dfrac{m}{2} \ dx & m \text{ par}
\end{cases}
$$

No primeiro caso de paridade, ainda é útil a substituição $u=\sec{x}$. 

## Fórmulas de recorrência

Abaixo estão listadas algumas expressões de recorrência para o cálculo das primitivas das potências de diversas funções trigonométricas. 

$$
\begin{align*}
\int \sin^n{x} \ dx &= -\dfrac{1}{n} \sin^{n-1} x \cos x + \dfrac{n-1}{n} \int \sin^{n-2}{x} \ dx \\ 
\\
\int \cos^n{x} \ dx &= \dfrac{1}{n} \cos^{n-1}{x} \sin{x} + \dfrac{n-1}{n} \int \cos^{n-2}{x} \ dx \\ 
\\
\int \tan^n{x} \ dx &= \dfrac{\tan^{n-1}{x}}{n-1} - \int \tan^{n-2}{x} \ dx \\ 
\\
\int \sec^n{x} \ dx &= \dfrac{\sec^{n-2}{x}  \tan{x}}{n-1} + \dfrac{n-2}{n-1} \int \sec^{n-2}{x} \ dx \\
\end{align*}
$$

# Referências 

1. <i>Playlist</i> de cálculo diferencial e integral da USP — Coleção de aulas com o prof. Dr. Alexandre Lymberopoulos (<a target="_blank" href="https://www.youtube.com/playlist?list=PLAudUnJeNg4tr-aiNyYCXE46L3qEZ2Nzx">Acesse aqui</a>);
2. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC