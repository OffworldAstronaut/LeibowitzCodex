# Comprimentos, Superfícies e Volumes

# Comprimentos

Dada uma função $f: \mathbb{R} \to \mathbb{R}$ qualquer, diferenciável, como podemos encontrar o comprimento de seu gráfico num dado intervalo? Com efeito, este problema pode ser solucionado de forma relativamente direta ao adotarmos um raciocínio semelhante à soma de Riemann tradicional que nos forneceu a definição de integral. 

Assim, imagine $y = f(x)$ diferenciável com derivada contínua num intervalo $[a,b]$ e, além disso, considere uma partição $P: a = x_0 \lt x_1 \lt x_2 \lt ... \lt x_n = b$ desse intervalo.

Ao indicarmos por $L(P)$ o comprimento da poligonal formada pelos vértices $P_i = (x_0, f(x_i))$ com $i = 1, 2, ..., n$, temos: 

$$
L(P) = \sum_{i = 1}^n \sqrt{(x_i - x_{i-1})^2 + (f(x_i) - f(x_{i-1}))^2}
$$

Pelo TVM, sabemos que para todo intervalo $[x_{i-1}, x_{i}]$ existe um $c_i$ tal que 

$$
f(x_i) - f(x_{i-1}) = f'(c_i) \cdot \Delta x_i
$$

com $\Delta x_i = x_i - x_{i-1}$. 

Segue então que 

$$
L(P) = \sum_{i=1}^{n} \sqrt{\Delta x_i^2 + (f'(c_i) \cdot \Delta x_i)^2} = \sum_{i=1}^{n} \sqrt{1 + (f'(c_i))^2}\Delta x_i
$$

Fazendo então $\Delta x_i \to 0$, temos que $L$ é precisamente o comprimento do gráfico de $f$. 

$$
L= \lim_{|P|\rightarrow 0}L(P) = \int_{a}^{b} \sqrt{1 + \left(\dfrac{dy}{dx}\right)^2} \ dx 
$$

Ao considerarmos ainda uma curva em $\mathbb{R}^2$ dada em função de um parâmetro $t$, isto é, de forma que cada um de seus pontos são da forma $(x(t), y(t))$ com $t \in I$, um intervalo, vemos que seu comprimento $L$ pode ser dado por 

$$
L = \int_{a}^{b} \sqrt{\left(\dfrac{dx}{dt}\right)^2 + \left(\dfrac{dy}{dt}\right)^2} \ dt 
$$

<!--TODO: Adicionar a demonstração para esse caso-->

# Superfícies 

Estamos acostumados com o tratamento de superfícies e suas respectivas áreas por meio de integrais em razão de sua própria definição (cf. <a href="/books/higher_education/math/calculus_two/integration.html" target="_blank">Integração</a>).

Nesta seção, iremos expor alguns outros problemas relacionados ao tópico de áreas e superfícies que podem ser solucionados por meio da operação de integração. 

## Áreas entre curvas 

Como determinar a área da região delimitada por duas curvas $y=f(x)$ e $y=g(x)$? Considerando $f(x)$ e $g(x)$ funções reais contínuas num intervalo $[a,b]$ de forma que $f(x) \ge g(x) \ \forall x \in [a,b]$, temos que a área de um retângulo infinitesimal contido na região delimitada é de $[f(x)-g(x)]dx$. 

Consequentemente, a área da região pode ser determinada pela integral: 

$$
A = \int_{a}^{b} f(x)-g(x) \ dx 
$$

Nota-se que em situações usuais, será necessário encontrar os extremos de integração pela determinação dos pontos de intersecção entre as curvas. Além disso, será necessário determinar $f(x)$ (isto é, a função "maior ou igual" naquele intervalo) para que a integral seja determinada corretamente. 

Ainda, caso as curvas cruzem-se mais de uma vez, será necessário analisar cada intervalo provocado pelas intersecções separadamente. 

<aside>

<b>Exemplo.</b> Qual a área da região entre as curvas $y_1 = x^2$ e $y_2 = 2x-x^2$? 

Primeiro, precisamos encontrar os limites de integração, isto é, os pontos de intersecção entre as curvas. Igualando as funções e resolvendo-as, encontramos os pontos $(0,0)$ e $(1,1)$. Logo, nossa integral está definida no intervalo $[0,1]$. 

Como $y_2 \gt y_1$  no intervalo considerado, temos que a integral será: 

$$
\begin{align*}
    \int_{0}^{1} y_2(x) - y_1(x) \ dx &= \int_{0}^{1} 2x - 2x^2 \ dx \\ 
    &= 2 \int_{0}^{1} x - x^2 \ dx \\ 
    &= 2\left[\dfrac{x^2}{2} - \dfrac{x^3}{3}\right]_{0}^{1} \\ 
    &= 2\left(\dfrac{1}{2} - \dfrac{1}{3}\right) \\ 
    &= \dfrac{1}{3}
\end{align*}
$$

</aside>

<!--Adicionar exemplo de áreas entre curvas quando as curvas se cruzam mais de uma vez-->

## Superfícies de revolução 

Uma <b>superfície de revolução</b> é obtida pela rotação de uma curva no espaço tridimensional em torno de algum eixo de rotação, uma reta neste mesmo espaço. Como exemplo podemos citar os parabolóides, os hiperbolóides e os elipsóides, conforme vistos nos manuscritos de <a href="/books/higher_education/math/analytical_geometry/quadrics.html" target="_blank">Geometria Analythica</a>. 

## Área de uma superfície de revolução

Um questionamento imediato que pode surgir é o seguinte: se podemos descrever uma superfície a partir de rotação de uma curva, podemos construir um método para determinar sua área? A resposta, claramente, é afirmativa. 

Considere uma função $f(x)$ de classe $C_1$ (isto é, diferenciável com derivada contínua) não-negativa num intervalo $[a,b]$. Considere ainda uma partição deste mesmo intervalo $[a,b]$ de forma que $P: a = x_0 \lt x_1 \lt x_2 \lt ... \lt x_n = b$ e, além disso, os números $c_i = \dfrac{1}{2}(x_i + x_{i-1})$ são os pontos médios dos intervalos $[x_{i-1}, x_i]$. 

Temos então que $f'(c_i) = \tan{\alpha_i}$; o segmento $\overline{M_{i-1}M_i}$ é tangente no ponto $(c_i, f(c_i))$. Logo, 

$$
\overline{M_{i-1}M_i} = \dfrac{\Delta x_i}{|\cos{\alpha_i}|} = |\sec{\alpha_i}| \Delta x_i = \sqrt{1 + [f'(c_i)]^2} \cdot \Delta x_i
$$

<!--TODO: Elaborar mais aqui pelo Guidorizzi e outros materiais-->

Assim, efetuando a rotação e a soma de Riemann, chegamos na expressão final 

$$
A_x = 2\pi \int_{a}^{b} |f(x)| \sqrt{1 + [f'(x)]^2} \ dx 
$$

para a área da superfície de revolução em torno do eixo $x$. Para uma revolução em torno do eixo $y$, obtemos (tomando $y = f(x)$): 

$$
A_y = 2 \pi \int_{a}^{b} |x| \sqrt{1 + \left(\dfrac{dy}{dx}\right)^2} \ dx 
$$

# Volumes

Nesta última seção iremos nos concentrar no conceito de <b>volume</b>.

## Volumes por seções transversais 

Assim como podemos utilizar a integração para encontrar comprimentos e áreas, pela mesma operação podemos encontrar volumes ao integrar sobre <b>elementos de volume</b>. Esta é a chave para encontrar volumes por seções transversais.

Considere um sólido qualquer $S$ situado na origem do espaço cartesiano. É possível subdividi-lo em infinitos cilindros de base de área $A(x)$ — a área da seção transversal obtida pela intersecção do sólido com o plano perpendicular ao eixo que passa por $x$ — e altura infinitesimal $dx$. Supondo que este sólido está estendido sobre o eixo $x$ no intervalo $[-l, l]$, seu volume será: 

$$
V = \int_{-l}^{l} A(x) \ dx 
$$

Nota-se que aqui estamos fazendo algumas considerações. Por exemplo, $A(x)$ é contínua no intervalo considerado (o sólido não tem "falhas"). 

<aside>

<b>Exemplo (Volume de uma esfera)</b>. Considere uma esfera de raio $r$ centrada na origem. A área de um disco formado pela intersecção de um plano que intersecta o eixo das abscissas em $x$ e é perpendicular a este eixo, com $x \in [-r, r]$, é da forma 

$$
A(x) = \pi y^2 = \pi(r^2-x^2)
$$

Essa relação de $y$ com $r$ e $x$ é obtida pela aplicação do teorema de Pitágoras no triângulo formado pela origem, pelo centro do disco considerado e pelo ponto na extremidade do disco diretamente acima do centro. 

Assim, integrando por toda a esfera, temos: 

$$
\begin{align*}
    V = \int_{-r}^{r} A(x) \ dx &= \int_{-r}^{r} \pi (r^2 - x^2) \ dx \\ 
    &= 2\pi \int_{0}^{r} (r^2-x^2) \ dx \\ 
    &= 2\pi \left[r^2 x - \dfrac{x^3}{3}\right]_{0}^{r} \\ 
    &= 2\pi \left(r^3 - \dfrac{r^3}{3}\right) \\ 
    &= \dfrac{4}{3}\pi r^3 
\end{align*}
$$

</aside>

## Sólidos de revolução

Nesta última seção iremos nos preocupar com o cálculo de volume dos sólidos gerados pela revolução de curvas em torno de algum eixo, de forma análoga às superfícies de revolução, comentadas anteriormente. 

Ao executarmos a revolução de uma curva em torno de algum eixo, seja ele vertical ou horizontal, temos a nossa disposição duas abordagens para executar nosso cálculo de volume: a <b>integração por discos</b> ou a <b>integração por cilindros</b>, também chamada <b>integração por cascas</b>. 

Escolher <b>integrar por discos</b> significa integrar o volume do sólido através da soma de infinitos discos (isto é, cilindros retos de altura infinitesimal). Esta abordagem é especialmente útil em cenários em que precisamos encontrar o volume do sólido formado pela rotação de uma região entre uma curva e um eixo. 

![](https://upload.wikimedia.org/wikipedia/commons/a/a8/Disc_integration.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Exemplo de uma integração em discos de uma função $f(y)$ rotacionada em torno do eixo $y$. Neste caso, cada disco possui volume $dV = \pi x^2dy$. Imagem sob domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Disc_integration.svg" target="_blank">Wikimedia Commons</a>.</i>

A expressão geral para a integração por discos de sólidos de revolução produzidos pela rotação de uma curva $y=f(x): [a, b] \to \mathbb{R}$ em torno de um eixo horizontal $y=k$ é da forma 

$$
V = \pi \int_{a}^{b} r(x)^2 \ dx 
$$

com $r(x) = f(x) - k$ se $f(x) \ge k$ e $r(x) = k - f(x)$, caso contrário. 

Ao considerarmos uma rotação em torno de um eixo vertical $x = k$, a integração por discos deste sólido de revolução retornará uma expressão da forma 

$$
V = \pi \int_{a}^{b} (x-k)^2 \cdot f'(x) \ dx 
$$

A <b>integração por cascas</b>, por outro lado, consiste em somar infinitos cilindros ocos de largura infinitesimal. Esta técnica é útil para encontrar o volume da região entre um dado gráfico e um eixo na orientação oposta à integração de discos. 

![](https://upload.wikimedia.org/wikipedia/commons/8/89/Shell_integration.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Exemplo de uma integração por cascas de uma função $y=f(x)$ rotacionada em torno do eixo $y$. Neste caso, cada cilindro terá volume $dV= 2\pi x f(x) \ dx$. Imagem sob domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Shell_integration.svg" target="_blank">Wikimedia Commons</a>.</i>

Dessa forma, a expressão geral para a integração por cascas de sólidos de revolução obtidos pela rotação de uma curva $y=f(x)$ em torno de um eixo horizontal $y=k$ é da forma 

$$
V = 2\pi \int_{a}^{b} (x-k)f(x) \ dx 
$$

Por fim, nota-se que embora estas expressões sejam úteis para consulta nestes casos em específico, na maior parte dos casos o ato de intuir a integral necessária com base nestas duas abordagens (ao invés de simplesmente memorizar as diferentes possibilidades) prova-se mais eficaz.

# Referências 

1. <i>Playlist</i> de cálculo diferencial e integral da USP — Coleção de aulas com o prof. Dr. Alexandre Lymberopoulos (<a target="_blank" href="https://www.youtube.com/playlist?list=PLAudUnJeNg4tr-aiNyYCXE46L3qEZ2Nzx">Acesse aqui</a>);
2. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC
3. STEWART, James. Cálculo, vol.1. 9a. ed. São Paulo, Cengage Learning.