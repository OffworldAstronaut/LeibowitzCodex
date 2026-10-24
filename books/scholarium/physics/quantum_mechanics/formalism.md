# Formalismo 

# Espaço de Hilbert 

Como toda teoria científica, a mecânica quântica é construída sobre um sólido formalismo matemático, cuja linguagem é a álgebra linear. Neste formalismo, temos que as funções de onda são vetores num <a href="/books/scholarium/math/linear_algebra/vector_spaces.html" target="_blank">espaço vetorial</a>, enquanto os operadores são <a href="/books/scholarium/math/linear_algebra/linear_transformations.html" target="_blank">transformações lineares</a>. 

As funções de onda da mecânica quântica pertencem ao chamado <b>espaço das funções quadrado-integráveis</b>, denominado a rigor por $L_2(a, b)$ e definido por: 

$$
L_2(a, b) = \left\{f(x) | \int_{a}^{b} |f(x)|^2 \ dx \lt \infty \right\}
$$

Dentre os físicos, este é geralmente chamado <b>espaço de Hilbert</b>, embora esta nomenclatura não esteja de todo correta. De fato, apoiando-nos na subseção "espaços hermitianos" do manuscrito de <a href="/books/scholarium/math/linear_algebra/internal_product.html" target="_blank">produto interno</a>, podemos definir um <b>espaço de Hilbert</b> como um espaço hermitiano (ou seja, um espaço vetorial sobre os complexos que possui um produto interno) completo, isto é, em que toda sequência de Cauchy converge para alguma função no espaço (logo, um espaço de Hilbert não possui "buracos"). 

Dessa forma, o espaço $L_2(a,b)$ que fundamenta a mecânica quântica não é <b>o</b> espaço de Hilbert, rigorosamente falando, mas sim <b>um</b> espaço de Hilbert. 

É importante destacar o produto interno usual para o $L_2(a, b)$ que será utilizado em nossos estudos de mecânica quântica, além de algumas de suas propriedades. 

Dadas $f, g \in L_2(a, b)$ funções, o produto interno entre elas é dado por 

$$
\braket{f}{g} = \int_{a}^{b} f(x)^* g(x) \ dx 
$$

com o pequeno asterisco indicando que estamos tomando o complexo conjugado da função $f(x)$, isto é, o complexo conjugado de qualquer elemento de seu produto imagem ao considerar essa integral. 

Das propriedades de produto interno satisfeitas por essa definição, são especialmente importantes as seguintes: $\braket{g}{f} = \braket{f}{g}^*$ e

$$
\begin{align*}
    \braket{f}{f} &= \int_{a}^{b} |f(x)|^2 \ dx \ge 0 \\ 
    \braket{f}{f} = 0 &\iff f(x) = 0
\end{align*}
$$

Além disso, dizemos que uma função $f$ é normalizada caso o produto interno desta função com si própria seja igual a 1. Seguindo a nomenclatura usual dos estudos de produto interno, duas funções são ortogonais caso o produto interno entre elas seja nulo. 

É importante salientar que um conjunto de funções será dito <b>completo</b> se qualquer outra função no espaço de Hilbert puder ser expressa como uma combinação linear delas, ou seja, um conjunto de funções é dito completo se este for uma base do espaço de Hilbert. 

Se as funções $\{f_n(x)\}$ são ortonormais, os coeficientes são dados pelo truque de Fourier: 

$$
c_n = \braket{f_n}{f}
$$

# Observáveis 

## Operadores hermitianos 

Sabemos que o valor esperado de um observável $Q(x, p)$ pode ser expresso por um produto interno 

$$
\langle Q \rangle = \int \psi^* \hat{Q} \psi \ dx = \braket{\psi}{\hat{Q}\psi}
$$

Como o resultado de qualquer medição deve ser um número real, temos que todo operador válido deve gozar da propriedade da hermiticidade, isto é, que seja válido escrever 

$$
\braket{f}{\hat{Q}f} = \braket{\hat{Q}f}{f}, \forall f(x) \in L_2(a, b)
$$

Assim, nessas condições, o operador $\hat{Q}$ é chamado <b>hermitiano</b>. 

## Estados determinados 

Uma característica fundamental da mecânica quântica é sua <b>indeterminância</b>: ao medir o mesmo observável $Q$ de um conjunto de sistemas no estado $\psi$, nem sempre o mesmo resultado será obtido. 

Entretanto, alguns estados especiais são chamados <b>determinados</b> em relação a um observável $Q$, pois estes sempre retornarão o mesmo valor. Estes estados $\psi$ são <b>autovetores</b> do operador $\hat{Q}$. 

<aside>

<b>Teorema</b> — Se $\psi$ é um estado determinado para $Q$, este é um autovetor de $\hat{Q}$. 

</aside>

<aside>

<b>Demonstração</b> — Seja $Q$ um operador, $\psi$ um estado e $q$ um valor medido para $Q$. Se $\psi$ é um estado determinado para $Q$, então toda medição retornará $q$ e, consequentemente, seu desvio será nulo. 

Logo: 

$$
\begin{align*}
    \sigma^2 &= \langle (\hat{Q} - \langle Q \rangle)^2\rangle \\ 
             &= \braket{\psi}{(\hat{Q}-q)^2\psi} \\ 
             &= \braket{(\hat{Q}-q)^2\psi}{(\hat{Q}-q)^2\psi} \\ 
             &= 0
\end{align*}
$$

Como a única função cujo produto interno entre ela e ela mesma anula-se é a função nula, temos que: 

$$
\hat{Q}\psi - q\psi = 0 \implies \hat{Q}\psi = q\psi
$$

Logo, $\psi$ é uma autofunção do operador $\hat{Q}$ com um autovalor $q$.

</aside>

Denominamos <b>espectro</b> o conjunto de todos os autovalroes de um operador. Caso duas ou mais autofunções linearmente independentes possuam o mesmo autovalor, dizemos que seus espectros são degenerados.

Como exemplo desta análise, podemos citar que os estados determinados do operador energia são autofunções do hamiltoniano. A consequência disto é a definição da <b>equação de Schrödinger independente do tempo</b>:

$$
\hat{H}\psi = E\psi
$$

Esta equação descreve estados estacionários — isto é, invariantes temporalmente — de um sistema quântico.

## Autofunções de um operador hermitiano

Ao analisar o espectro de um operador hermitiano, podemos classificá-lo como <b>contínuo</b> ou <b>discreto</b>. No caso de um espectro discreto, os autovetores pertencem ao espaço de Hilbert e representam estados físicos. Espectros contínuos possuem autofunções não-normalizáveis e, consequentemente, não representam estados físicos. Suas combinações lineares podem representar estados físicos, entretanto.

Como exemplos notáveis, podemos citar o oscilador harmônico quântico (que possui um espectro discreto), o sistema de uma partícula livre (que possui um espectro contínuo) ou o poço quadrado infinito (parte discreto parte contínuo).

<aside>

<b>Teorema</b> — As autofunções normalizáveis de um operador hermitiano possuem autovalores reais.

</aside>

<aside>

<b>Demonstração</b> — Seja $\hat{Q}$ um operador com $f$ sua autofunção e $q$ seu autovalor correspondente.

Logo, vale que $\hat{Q}f = qf$. Se $\hat{Q}$ é hermitiano, então é válido que 

$$
\braket{f}{\hat{Q}f} = \braket{\hat{Q}f}{f} \iff q\braket{f}{f} = q^* \braket{f}{f}
$$

Esta equivalência justifica-se pelo fato de que $f$ pode sair do interior da integral por ser um escalar e, como a primeira função é um completo conjugado, seu autovalor também o é. Note que $\braket{f}{f} \neq 0$ pois $f(x) \neq 0$ e, portanto, $q = q^*$.

</aside>

Uma consequência física desse teorema é que a medição de um estado determinado em relação a determinado observável sempre produzirá valores reais (com significado físico). 

<aside>

<b>Teorema</b> — Autofunções de autovalores distintos são ortogonais. 
 
</aside>

<aside>

<b>Demonstração</b> — Sejam $\hat{Q}$ um operador, $f$ e $g$ autofunções de autovalores $q$ e $q'$, respectivamente. Além disso, $\hat{Q}$ é hermitiano. Logo, é válido que: 

$$
\braket{f}{\hat{Q}g} = \braket{\hat{Q}f}{g} \iff q' \braket{f}{g} = q^* \braket{f}{g}
$$

Como $q \in \mathbb{R}$ (pelo teorema anterior), temos que $q \neq q' \implies \braket{f}{g} = 0$.

</aside>

<aside>

<b>Axioma</b> — As autofunções de um operador observável são <i>completas</i>, isto é, qualquer função no espaço de Hilbert pode ser expressa como uma combinação linear delas.

</aside>

## Espectros contínuos

Quando partimos para o caso de <b>espectros contínuos</b>, o produto interno entre as autofunções pode não existir (isto é, a integral diverge), assim, não podemos aplicar os teoremas anteriores. Para expor os resultados para esse gênero de espectros, convém fazê-lo por meio de exemplos. 

<aside>

<b>Exemplo</b> — Calcule as autofunções e os autovalores do operador momento. 

</aside>

<aside>

<b>Solução</b> — Sejam $f_p(x)$ a autofunção e $p$ o autovalor correspondente. Logo, vale: 

$$
\dfrac{\hbar}{i}\dfrac{d}{dx}f_p(x) = pf_p(x)
$$

Para esta equação diferencial, temos que a solução geral é:

$$
f_p(x) = Ae^{ipk/\hbar}
$$

Como esta função não é quadrado-integrável para qualquer $p$, temos que o operador momento não tem autofunções no espaço de Hilbert. 

Entretanto, podemos ver que:

$$
\begin{align*}
    \braket{f_{p'}}{f_p} &= \int_{-\infty}^{+\infty} f_{p'}^*(x) f_p(x) \ dx \\ 
    &= |A|^2 \int_{-\infty}^{+\infty} e^{i(p-p')x/\hbar} \ dx \\ 
    &= |A|^2 2\pi k \delta (p - p') 
\end{align*}
$$

Escolhendo $A = \dfrac{1}{\sqrt{2\pi\hbar}}$, temos $f_p(x) = \dfrac{1}{\sqrt{2\pi\hbar}}e^{ipx/\hbar}$ ou, então, $\braket{f_{p'}}{f_p} = \delta(p-p')$. 

Assim, o delta de Kronecker se torna um delta de Dirac, de forma que $p - p' = 0 \iff p = p' \iff \braket{f_{p'}}{f_p} = \infty$. Por outro lado, $p \neq p' \iff \braket{f_{p'}}{f_p} = 0$ (ortogonalidade). 

Como as autofunções continuam sendo completas, temos que qualquer função quadrado-integrável pode ser escrita como 

$$
f(x) = \int_{-\infty}^{+\infty} c(p) f_p(x) \ dp = \dfrac{1}
{\sqrt{2\pi\hbar}} \int_{-\infty}^{+\infty} c(p) e^{ipx/\hbar} \ dp
$$

Pelo truque de Fourier, obtemos os coeficientes $c(p)$: 

$$
\braket{f_{p'}}{f_p} = \int_{-\infty}^{+\infty} c(p) \braket{f_{p'}}{f_p} \ dp = \int_{-\infty}^{\infty} c(p) \delta (p-p') \ dp = c(p')
$$

É interessante perceber que as autofunções do momento[^1] possuem forma de seno, possuindo comprimento de onda $\lambda = \dfrac{2\pi\hbar}{p}$ (a fórmula de de Broglie).

</aside>

<aside>

<b>Exemplo</b> — Calcule as autofunções e os autovalores do operador posição.

</aside>

<aside>

<b>Soluções</b> — Sejam $g_y(x)$ e $y$ a autofunção e o autovelor correspondente. Logo, é válido que $xg_y(x) = yg_y(x)$ com $y$ fixo para cada autofunção e $x$ variável contínua. Estamos então procurando uma função de $x$ que, ao ser multiplicada por $x$, resulte no mesmo valor que teria se fosse multiplicada por $y$. Curiosamente, essa função é a delta de Dirac! 

$$
g_y(x) = A\delta(x-y)
$$

Sabemos que as autofunções não são quadrado-integráveis mas satisfazem a ortonormalidade de Dirac. 

$$
\int_{-\infty}^{\infty} g_y^* (x) g_y(x) \ dx = |A|^2 \int_{-\infty}^{+\infty} \delta(x-y')\delta(x-y) \ dx = |A|^2 \delta(y-y')
$$

Tomando $A=1$: 

$$
g_y(x) = \delta(x-y) \iff \braket{g_y'}{g_y} = \delta(y-y')
$$

Além disso, essas autofunções também são completas.

$$
f(x) = \int_{-\infty}^{+\infty} c(y) g_y(x) \ dy = \int_{-\infty}^{\infty} c(y) \delta (x-y) \ dy
$$

com $c(y) = f(y)$.

</aside>

Como nota geral, temos que um espectro de um operador hermitiano ser contínuo implica em autofunções não-normalizáveis. Por outro lado, autofunções com autovalores reais são ortonormalizáveis de Dirac e completas.

# Intepretação estatística generalizada

<!--TODO: Adicionar essa seção-->

# Referências 

1. GRIFFITHS, David J. <i>Mecânica quântica</i>. 2ª ed. São Paulo: Pearson Prentice Hall, 2011.

[^1]: Nenhuma das autofunções de $\hat{p}$ existe no $L_2$, mas as que possuem autovalores reais podem nos ajudar matematicamente em algumas situações.