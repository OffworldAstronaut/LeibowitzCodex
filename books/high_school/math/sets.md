# Conjuntos 

# Introdução aos conjuntos

A utilidade de estudarmos com mais cuidado os conjuntos durante o Ensino Médio é a sua importância fundamental na escrita da Matemática como conhecemos. De fato, toda a Matemática moderna é escrita nesta linguagem. 

É claro que, embora exista uma chamada <b>teoria dos conjuntos</b>, não iremos tratar dela aqui, preferindo uma abotdagem mais intuitiva. 

Podemos introduzir a noção de conjuntos como uma coleção de objetos matemáticos, com estes objetos chamados <b>elementos</b> de um conjunto. Geralmente denotamos os conjuntos por letras maiúsculas, com os objetos mencionados préviamente <b>pertencendo</b> ($\in$) ou <b>não-pertencendo</b> ($\notin$) a um conjunto, isto é, sendo, ou não, um elemento deste. 

A matemática moderna é escrita nessa linguagem por esta permitir tanto a precisão como a concisão necessárias. Por exemplo, ao invés de escrever "$x$ tal que $x$ é par", basta apenas escrever $x \in P$, com $P$ sendo o conjunto cujos elementos gozam da propriedade de serem pares, isto é, de serem divisíveis por dois. 

Ou seja, podemos representar as propriedades e as condições satisfeitas (ou não) de diversos objetos matemáticos com poucos símbolos! Além disso, os conjuntos possuem certas operações lógicas entre eles, como a <b>união</b> ou a <b>intersecção</b>, que permitem a administração e o estudo dessas propriedades e condições de forma cômoda.

Como exemplo adicional de um conjunto, podemos citar o conjunto das soluções da equação $y^2 - 3y + 2 = 0$, ou, de outro modo, o conjunto de todos os números reais $y$ que satisfazem a condição imposta pela equação. Em linguagem de conjuntos, escrevemos 

$$
S = \{y \in \mathbb{R}|y^2 - 3y + 2 = 0\} = \{1, 2\}
$$

De tipos de conjuntos interessantes que valem nossa atenção inicial, podemos citar dois: os conjuntos unitários e o conjunto vazio. Chamamos <b>unitários</b> os conjuntos que possuem apenas um elemento, enquanto o conjunto <b>vazio</b> não possui elementos.

Podemos facilmente representá-los pela propriedade lógica da <b>identidade</b> e pela <b>contradição</b>, respectivamente. Por exemplo, o conjunto de todos os elementos $x$ que são iguais a $x$ é unitário (pois apenas o próprio elemento matemático é igual a si próprio), enquanto o conjunto de todos os números que são pares e ímpares simultanemente é vazio, pois sua condição é uma contradição.

# Inclusão

Assim como podemos relacionar números ou outros objetos simples com conjuntos por uma relação de <b>pertencimento</b>, podemos relacionar conjuntos com outros conjuntos por uma relação de <b>inclusão</b>.

Para introduzir a noção desta relação, vamos imaginar dois conjuntos $A$ e $B$. Se todo elemento de $A$ também for elemento de $B$, dizemos que $A$ <b>está contido em</b> ou então <b>é subconjunto de</b> $B$. Denotamos esta relação (de inclusão) por $A \sub B$. Por outro lado, quando $A$ não está contido em $B$, representados por $A \not\sub B$. 

Desta relação podemos extrair algumas propriedades importantes. Dados três conjuntos $A$, $B$ e $C$, vale que: $A \sub A$, para todo $A$; se $A \sub B$ e $B \sub A$, então $A = B$; se $A \sub B$ e $B \sub C$, então $A \sub C$.

Além disso, para todo conjunto $A$ temos que $\empty \sub A$ (o conjunto vazio é um subconjunto de qualquer outro). Esta propriedade motiva a definição de um chamado <b>subconjunto próprio</b>. Dizemos que um conjunto $A$ é um subconjunto próprio de um conjunto $B$ se, simultaneamente, $A \sub B$, $A \neq \empty$ e $A \neq B$.

<aside>

<b>Demonstração (o conjunto vazio é subconjunto de qualquer conjunto)</b> — Suponha, por hipótese, que isto é falso. Portanto, deve existir um conjunto tal que este não contenha o conjunto vazio. Logo, isso implica que há algum elemento do conjunto vazio que não pertence a um certo conjunto, entretanto, o conjunto vazio não possui elementos. Logo, temos que o conjunto vazio é subconjunto de qualquer conjunto, por absurdo.

</aside>

# Complementares

Para começarmos a falar de complementares, temos que primeiro introduzir a noção de <b>conjunto universo</b>, geralmente denotado por $U$. Dizemos que o conjunto universo é um conjunto que fixamos e que contém todos os possíveis conjuntos e elementos de nossa consideração (por isso "Universo").

Dessa forma, considere um conjunto $A \sub U$. Definimos o <b>conjunto complementar de $A$</b> ou simplesmente o <b>complementar</b> de $A$ como o conjunto formado por todos os elementos de $U$ que não estão em $A$. Podemos denotá-lo por $A^C$.

Da complementaridade podemos verificar duas propriedades: todo conjunto é complementar de seu complementar; se um conjunto está contido em outro, seu complementar contém o complementar desse outro. 

Se utilizarmos da simbologia lógica, podemos expressar a primeira propriedade por $(A^C)^C = A$ e a segunda propriedade pela equivalência 

$$
A \sub B \iff B^C \sub A^C
$$

Essa equivalência pode ser interepretada sob a visão das proposições lógicas. Sendo $P$ e $Q$ proposições, temos que vale 

$$
P \implies Q \iff Q' \implies P'
$$

A afirmação $Q' \implies P'$ é chamada <b>contrapositiva</b> de $P \implies Q$. A utilização de contrapositiva pode ser útil na confecção de provas e visualização de teoremas. Por fim, como curiosidade, temos que $U^C = \empty$ e $\empty^C = U$.

# Reunião e intersecção

Dados dois conjuntos $A$ e $B$, temos que a <b>reunião</b> ou <b>união</b> de $A$ e $B$ é o conjunto, denotado por $A \cup B$ que é formado por todos os elementos de $A$ e de $B$. Por outro lado, temos que o conjunto <b>intersecção</b> $A \cap B$ é formado por todos os elementos que estão simultaneamente em $A$ e em $B$. 

É visível, portanto, que a união e a intersecção de conjuntos correspondem aos conectivos lógicos "ou" e "e". Como exemplo dessa relação, podemos construir o conjunto de todos os números naturais primos que também satisfazem $x^2 = 4$. 

$$
\begin{align*}
    P &= \text{conjunto dos naturais primos} = \{1, 2, 3, 5, 7, 11, 13, 17, ...\} \\ 
    Q &= \text{conjunto dos naturais que satisfazem a equação dada} = \{2\} \\
    P \cap Q &= \{2\}
\end{align*}
$$

Discorrendo um pouco sobre as propriedades das operações de união e intersecção, podemos ver que elas são comutativas e também associativas, valendo as relações 

$$
\begin{align*}
    A \cap B &= B \cap A \\ 
    A \cup B &= B \cup A \\ 
    (A \cup B) \cup C &= A \cup (B \cup C) \\
    (A \cap B) \cap C &= A \cap (B \cap C)
\end{align*}
$$

Cada operação também é distributiva em relação a outra, valendo 

$$
\begin{align*}
    A \cap (B \cup C) &= (A \cap B) \cup (A \cap C) \\ 
    A \cup (B \cap C) &= (A \cup B) \cap (A \cup C) 
\end{align*}
$$

Além disso, valem a equivalência

$$
A \cup B = B \iff A \sub B \iff A \cap B = A
$$

e as implicações 

$$
\begin{align*}
    A \sub B &\implies A \cup C \sub B \cup C \\ 
    A \sub B &\implies A \cap C \sub B \cap C
\end{align*}
$$

para todo conjunto $C$.

Por fim, temos as chamadas <b>relações de De Morgan</b>, formalizadas pelo matemático inglês Augustus De Morgan. Sendo $A$ e $B$ conjuntos contidos no conjunto universo $U$, valem as relações 

$$
\begin{align*}
    (A \cup B)^C &= A^C \cap B^C \\ 
    (A \cap B)^C &= A^C \cup B^C
\end{align*}
$$

que, na lógica proposicional, equivalem às proposições

$$
\begin{align*}
    \neg(P \lor Q) &\iff \neg P \land \neg Q \\ 
    \neg(P \land Q) &\iff \neg P \lor \neg Q
\end{align*}
$$

# Igualdade 

Por fim, é interessante discorrer um pouco sobre a noção de igualdade. Dos axiomas da lógica matemática, sabemos que um objeto é somente igual a si próprio. Logo, quando escrevemos algo do tipo $a = b$, estamos indicando que $a$ e $b$ são apenas símbolos diferentes para expressar o mesmo objeto.

Embora possa parecer pedantismo, tal esclarecimento é importante por questões de clareza de raciocínio. Por exemplo, dizer que dois ângulos são <b>iguais</b> indica na verdade que os "ângulos" na verdade são o mesmo, enquanto dizer que dois ângulos são <b>congruentes</b> indica que estes possuem a mesma medida.

Dessa relação de igualdade temos também algumas propriedades. A primeira é a chamada <b>reflexividade</b>, em que um objeto $a$ é igual a ele mesmo, sempre ($a = a$). A segunda é chamada simetria, expressa pela implicação $a = b \implies b = a$. Por fim, a última é chamada <b>transitividade</b>, expressa por $a = b$ e $b = c \implies a = c$; se um objeto é igual a outro e este outro é igual a um terceiro, então o primeiro é igual ao terceiro. 

A transitividade foi expressa como uma das noções básicas (axiomas) da geometria por Euclides, em seu famoso livro <i>Os Elementos</i>, escrito há mais de 2.000 anos.

# Referências 

1. LIMA, Elon Lages et al. A Matemática do Ensino Médio. 11. ed. Rio de Janeiro: SBM, 2016. v. 1. (Coleção Professor de Matemática; 13). ISBN 978-85-8337-090-1.