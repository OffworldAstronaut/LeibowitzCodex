# Números binomiais 

# Triângulo de Pascal

---

Antes de entendermos o que são os números binomiais, precisamos conhecer a construção do <b>Triângulo de Pascal</b>.

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

<i>Animação ilustrando a construção do triângulo de Pascal. Domínio público, via <a href="https://commons.wikimedia.org/wiki/File:PascalTriangleAnimated2.gif" target="_blank">Wikimedia Commons</a>.</i>

Quando contamos as linhas e as colunas dele começando a partir de zero, podemos ver que o elemento da linha $n$ e da coluna $k$ é $\binom{n}{k}$. 

Assim, cada número do triângulo é chamado <b>número binomial</b> ou <b>coeficiente binomial</b>, por conta de ser gerado por essas duas “coordenadas” e de possuir uma conexão muito próxima com o <b>Binômio de Newton</b>, que será falado adiante. 

Por meio desse triângulo podemos visualizar várias relações importantes, como a <b>relação de Stiefel</b>, a <b>relação das combinações complementares</b>, o <b>teorema das linhas</b>, o <b>teorema das Colunas</b> e, finalmente, o <b>Teorema das Diagonais</b>.

## As relações combinatórias no Triângulo

Como dito anteriormente, o Triângulo de Pascal nos mostra várias relações combinatórias de uma maneira relativamente simples de serem vistas. Abaixo, elas estão enumeradas e explicadas.

### Relação de Stiefel

Relembrando a relação, temos que: 

$$
\binom{n}{k}+\binom{n}{k+1}=\binom{n+1}{k+1}
$$

Transportando isso para o Triângulo de Pascal, podemos ver que a soma de dois números adjacentes é igual ao número abaixo da última parcela, da esquerda para a direita.

### Relação das Combinações Complementares

A relação nos fornece a equação: 

$$
\binom{n}{k} = \binom{n}{n-k}
$$

Ou seja, ao transportarmos isso para o Triângulo, temos a informação que de os elementos de uma mesma linha que estão à uma mesma distância do triângulo são iguais. 

### Teorema das Linhas

O teorema das linhas recebe esse nome pelo fato de afirmar que a soma dos elementos de uma determinada linha $n$ do Triângulo é sempre igual a $2^n$.

Algebricamente, escrevemos: 

$$
\sum^n_{k=0} \binom{n}{k}=\binom{n}{0} + \binom{n}{1} + \binom{n}{2} + ... + \binom{n}{n} = 2^n
$$

### Teorema das Colunas

Assim como o teorema das linhas, o teorema das colunas recebe seu nome por conta de sua relação com o Triângulo de Pascal, afirmando que, ao somarmos os elementos de uma coluna, começando pelo seu primeiro elemento, o resultado será o elemento que está na próxima linha e na próxima coluna em relação à última parcela da soma. 

Matematicamente, escrevemos: 

$$
\sum^p_{k=0}\binom{n+k}{n}=\binom{n}{n}+\binom{n+1}{n}+\binom{n+2}{n}+...+\binom{n+p}{n}=\binom{n+p+1}{n+1}
$$

Ou seja, somando $\binom{n+p}{n}$ de $p=0$ até um $p\in \mathbb{N}$ qualquer, obtemos $\binom{n+p+1}{n+1}$.

### Teorema das Diagonais

Seguindo o mesmo esquema de nomenclatura dos dois teoremas anteriores, o Teorema das Diagonais diz respeito à soma das diagonais do Triângulo de Pascal, que afirma que a soma dos elementos de uma determinada diagonal do Triângulo (partindo do primeiro elemento) é igual ao número binomial logo abaixo da última parcela da soma. 

Algebricamente, escrevemos: 

$$
\sum^p_{k=0}\binom{n+k}{k} = \binom{n}{0}+\binom{n+1}{1}+\binom{n+2}{2}+...+\binom{n+p}{p}=\binom{n+p+1}{p}
$$

## Desenvolvendo somas polinomiais

Podemos nos utilizar desses teoremas e dessas relações para resolver problemas que envolvem a soma de polinômios de uma maneira relativamente fácil. 

Por exemplo, vamos resolver o seguinte problema: “Qual a soma dos $n$ primeiros quadrados?” 

Esse problema se transforma na seguinte expressão: 

$$
\sum^n_{k=1}k^2=1^2+2^2+3^2+...+ n^2
$$

Para resolver isso, podemos nos aproveitar de uma coisa, escrevendo $k²$ como sendo a soma do produto de inteiros consecutivos, numa forma polinomial. Assim, $k²$ se transforma em 

$$
k^2=Ak(k+1)+Bk+C
$$

Assim, desenvolvendo o polinômio… 

$$
k²=Ak²+Ak+Bk+C
$$

$$
k²=Ak²+(A+B)k+C
$$

Finalmente, temos que $A=1$, logo $B=-1$ e $C=0$, assim, substituindo no original: 

$$
k^2=k(k+1)-k
$$

Pronto, temos uma expressão diferente para $k²$ que podemos tirar proveito. 

Substituindo no somatório: 

$$
\sum^n_{k=1}k(k+1)-k
$$

E assim, por meio das propriedades de somatório… 

$$
\sum^n_{k=1}k(k+1)-\sum^n_{k=1}k
$$

Agora perceba o motivo de nos utilizarmos lá em cima dos números consecutivos: o produto de dois números consecutivos parece *muito* com uma combinação. 

$$
k(k+1)=k^2+k
$$

$$
\binom{k+1}{2}=\dfrac{(k+1)k}{2}
$$

Assim, para transformar esse produto numa combinação, precisamos multiplicar e dividir por 2. 

Logo, temos que: 

$$
\sum^n_{k=1}2\dfrac{k(k+1)}{2!} \Longrightarrow 2\sum^n_{k=1}\binom{k+1}{2}
$$

Agora, temos a expressão completa: 

$$
\sum^n_{k=1}k^2=2\sum^n_{k=1}\binom{k+1}{2}-\sum^n_{k=1}\binom{k}{1}
$$

Por fim, aplicando o Teorema das Colunas em cada um dos somatórios, temos, finalmente, que: 

$$
\sum^n_{k=1}k^2=2\binom{n+2}{3}-\binom{n+1}{2}=\dfrac{n(n+1)(2n+1)}{6}
$$

Podemos resolver as mais variadas somas se utilizando desse método. 

# Binômio de Newton

---

O Binômio de Newton é uma expressão matemática na forma $(a+b)^n$, com $a,b\in \R$ e $n \in \N$ que pode ser escrita da seguinte forma: 

$$
(a+b)^n=\sum^n_{k=0}\binom{n}{k}a^{n-k}b^k=
\sum^n_{k=0}\binom{n}{k}a^kb^{n-k}
$$

Que pode ser expandido assim: 

$$
(a+b)^n=\binom{n}{0}a^nb⁰+\binom{n}{1}a^{n-1}b^1+...+\binom{n}{n}a^0b^n
$$

## Por que os coeficientes são assim?

Os coeficientes do Binômio são números no formato $\binom{n}{k}$, mas, por quê? 

Primeiro, temos que saber que, obviamente, $(a+b)^n$ é a mesma coisa que o produto de $(a+b)$ com ele mesmo $n$ vezes. Assim, para obtermos $a^nb⁰$, precisamos escolher $a$ em cada produto $n$ vezes, o que nos dá $\binom{n}{0}$. Esse raciocínio é repetido para cada monômio da expressão: precisamos escolher um dos dois números $k$ vezes para formar aquele monômio em específico, o que nos acaba por gerar coeficientes no formato binomial. 

<aside>

Note que os coeficientes do Binômio são números que estão no Triângulo de Pascal!

</aside>

## Encontrando um coeficiente específico

Imaginemos o seguinte problema: Qual o coeficiente do termo $a^3b^2$ do binômio $(a+b)^{10}$?

Como podemos encontrar o número no formato $\binom{n}{k}$ que acompanha a parte literal $a^6b^4$ desse monômio que está dentro desse Binômio de Newton?

A resposta é clara: primeiro, precisamos achar uma expressão que nos dê o **termo genérico** da expressão, i.e que pode nos fornecer qualquer termo que está dentro do binômio. 

Vamos nos lembrar da expressão do binômio: 

$$
\sum^n_{k=0}\binom{n}{k}a^{n-k}b^k=\sum^n_{k=0}\binom{n}{k}a^kb^{n-k}
$$

Agora, substituindo $n=10$… 

$$
\sum^{10}_{k=0}\binom{10}{k}a^kb^{10-k}
$$

Essa expressão nos dá qualquer termo do binômio $(a+b)^{10}$. 

Para respondermos a questão, precisamos notar uma coisa: comparando as informações dadas (a parte literal) e a expressão encontrada, temos que $k=6$, logo, o coeficiente será $\binom{10}{6}$, que é: 

$$
\dfrac{10!}{6!(10-6)!}=\dfrac{10!}{6!4!}=210
$$

Ou seja, o coeficiente que estávamos procurando é 210! O termo resultante será $210a^6b^4$.