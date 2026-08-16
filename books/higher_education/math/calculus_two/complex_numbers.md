# Números complexos 

# Números complexos

O conjunto dos números complexos possui como base a unidade imaginária, $i$, definida de forma que $i^2 = -1$. Dessa forma, representamos um número complexo qualquer por uma expressão 

$$
z = a + bi 
$$

onde $a$ e $b$ são números reais. Consequentemente, representamos o conjunto de todos os números complexos por 

$$
\mathbb{C} = \{a + bi | a,b \in \mathbb{R} \}
$$

Neste conjunto, definimos a soma e o produto entre dois números complexos quaisquer $z_1 = a_1 + b_1i$ e $z_2 = a_2 + b_2i$, respectivamente, como: 

$$
\begin{align*}
    z_1 + z_2 &= (a_1 + b_1i) + (a_2 + b_2i) = (a_1 + a_2) + (b_1 + b_2)i \\ 
    z_1 \cdot z_2 &= (a_1 + b_1i)(a_2 + b_2i) = (a_1a_2 - b_1b_2) + (a_1b_2 + a_2b_1)i
\end{align*}
$$

Denominamos $z = a + bi$ como um número complexo <b>real</b> se $b = 0$. Por outro lado, se $a = 0$ e $b \neq 0$, $z$ é dito um número complexo <b>puro</b>. Perceba que se $b=0$, $z$ é um número real: os números reais podem ser vistos como um subconjunto dos complexos. 

Assim como os números reais, os números complexos dotados das operações de soma e multiplicação previamente definidas formam um <b>corpo</b>, possuindo as propriedades a seguir: 

<aside>

1. $(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$
2. $z_1 + z_2 = z_2 + z_1$
3. $\forall z \in \mathbb{C}, z + 0 = z$ 
4. $\forall z \in \mathbb{C}, \exists w \in \mathbb{C}$ único, tal que $z + w = 0$
5. $(z_1z_2)z_3 = z_1(z_2z_3)$ 
6. $z_1z_2=z_2z_1$
7. $\forall z \in \mathbb{C}, 1z = z$
8. $\forall z \in \mathbb{C}, z \neq 0, \exists w \in \mathbb{C}$ único, tal que $zw = 1$
9. $z_1(z_2 + z_3) = z_1z_2 + z_1z_3$

</aside>

Assim como os reais, podemos representar os números complexos com pontos num plano, com estes pontos também denominados <b>afixos</b>. Dessa forma, um número complexo $z = a + bi$ é associado ao ponto $(a, b)$. O eixo horizontal coordenado do plano é chamado <b>eixo real</b>, enquanto o eixo vertical é chamado <b>eixo imaginário</b>. 

Definimos o conjugado de um número complexo $z = a + bi$, representado por $\bar{z}$, como o número $\bar{z} = a - bi$. 

<aside>

<b>Teorema</b> — Dados dois números complexos, o conjugado de seu produto é o produto de seus conjugados. 

</aside>

<aside>

<b>Demonstração</b> — Sejam $z_1 = a_1 + b_1i$ e $z_2 = a_2 + b_2i$ números complexos. Temos que $\bar{z_1} = a_1 - b_1i$ e $\bar{z_2} = a_2 - b_2i$ e, assim,

$$
\begin{align*}
    \bar{z_1} \cdot \bar{z_2} &= (a_1 - b_1i)(a_2 - b_2i) \\ 
                              &= a_1a_2 - a_1b_2i - b_1ia_2 + b_1b_2i^2 \\ 
                              &= a_1a_2 - a_1b_2i - b_1a_2i - b_1b_2 \\ 
                              &= a_1a_2 - b_1b_2 - (a_1b_2 + b_1a_2)i
\end{align*}
$$

Por outro lado, o produto $z_1z_2$ é dado por:

$$
\begin{align*}
    z_1z_2 &= (a_1 + b_1i)(a_2 + b_2i) \\ 
           &= a_1a_2 + a_1b_2i + a_2b_1i - b_1b_2 \\ 
           &= a_1a_2 - b_1b_2 + (a_1b_2 + a_2b_1)i
\end{align*}
$$

e, consequentemente, 

$$
\bar{z_1z_2} = a_1a_2 - b_1b_2 - (a_1b_2 + a_2b_1)i = \bar{z_1} \cdot \bar{z_2}
$$

como queríamos demonstrar.

</aside>

<aside>

<b>Teorema</b> — Dado um número complexo qualquer, este é o conjugado de seu conjugado.

</aside>

<aside>

<b>Demonstração</b> — Seja $z = a + bi$ um número complexo. Logo, temos que $\bar{z} = a - bi$ e $\bar{\bar{z}} = a + bi = z$.

</aside>

<aside>

<b>Teorema</b> — Dados dosi números complexos $z_1 = a_1 + b_1i$ e $z_2 = a_2 + b_2i$, o conjugado de sua soma é a soma de seus conjugados.

</aside>

<aside>

<b>Demonstração</b> — Tomando o conjugado de ambos os números, somando e reorganizando os termos, obtemos: 

$$
\bar{z_1} + \bar{z_2} = a_1 + a_2 - b_1i - b_2i = a_1 + a_2 - (b_1 + b_2)i 
$$

Por outro lado, temos que $z_1 + z_2 = a_1 + a_2 + (b_1 + b_2)i$ e, consequentemente, $\bar{z_1 + z_2} = a_1 + a_2 - (b_1 + b_2)i = \bar{z_1} + \bar{z_2}$.

</aside>

Pelos conjugados é possível agora introduzir a noção de <b>norma</b> no conjunto dos números complexos. Assim, o módulo de $z$ é dado por 

$$
|z| = \sqrt{z \cdot \bar{z}} = \sqrt{a^2 + b^2}
$$

Podemos ainda representar $z$ na chamada <b>forma polar</b> tomando $\theta$ de forma que $a = |z|\cos{\theta}$ e $b = |z|\sin{\theta}$:

$$
z = |z|(\cos{\theta} + i\sin{\theta})
$$

Nesse contexto, $\theta$ é denominado o <b>argumento</b> de $z$.

# Referências

1. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC