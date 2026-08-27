# Formalismo 

# Espaço de Hilbert 

Como toda teoria científica, a mecânica quântica é construída sobre um sólido formalismo matemático, cuja linguagem é a álgebra linear. Neste formalismo, temos que as funções de onda são <b>vetores</b> num <a href="/books/higher_education/math/linear_algebra/vector_spaces.html" target="_blank">espaço vetorial</a>, enquanto os operadores são <a href="/books/higher_education/math/linear_algebra/linear_transformations.html" target="_blank"><b>transformações lineares</b></a>. 

As funções de onda da mecânica quântica pertencem ao chamado <b>espaço das funções quadrado-integráveis</b>, denominado a rigor por $L_2(a, b)$ e definido por: 

$$
L_2(a, b) = \left\{f(x) | \int_{a}^{b} |f(x)|^2 \ dx \lt \infty \right\}
$$

Dentre os físicos, este é geralmente chamado <b>espaço de Hilbert</b>, embora esta nomenclatura não esteja de todo correta. De fato, apoiando-nos na subseção "espaços hermitianos" do manuscrito de <a href="/books/higher_education/math/linear_algebra/internal_product.html" target="_blank">produto interno</a>, podemos definir um <b>espaço de Hilbert</b> como um espaço hermitiano (ou seja, um espaço vetorial sobre os complexos que possui um produto interno) completo, isto é, em que toda sequência de Cauchy converge para alguma função no espaço (logo, um espaço de Hilbert não possui "buracos"). 

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



# Referências 

1. GRIFFITHS, David J. <i>Mecânica quântica</i>. 2ª ed. São Paulo: Pearson Prentice Hall, 2011.