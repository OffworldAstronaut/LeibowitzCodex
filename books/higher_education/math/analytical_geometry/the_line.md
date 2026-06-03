# A Reta 

# Os números racionais



Dentre os possíveis números, podemos definir os números naturais $\mathbb{N} = \{1, 2, 3, ...\}$, os inteiros $\mathbb{Z} = \{..., -3, -2, -1, 0, 1, 2, 3, ... \}$ e, a partir destes, os <b>números racionais</b>.

São membros do conjunto dos números racionais — denotado por $\mathbb{Q}$ — todos aqueles que podem ser escritos por meio de uma razão $\dfrac{p}{q}$, com $p$ e $q$ sendo números inteiros e, especialmente, $q \neq 0$. É possível denotar o conjunto dos números racionais da seguinte maneira: 

$$ 
\mathbb{Q} = \{x: x = \dfrac{p}{q}, p, q \in \mathbb{Z} \text{ e } q \neq 0\}
$$

## Números irracionais

São membros do conjunto dos números irracionais, denotado pelo símbolo $\mathbb{I}$, todos aqueles que não podem ser representados por uma razão entre dois números inteiros, conforme a definição de $\mathbb{Q}$. Entretanto, estes também podem ser representados na reta real por construções geométricas, por exemplo. 

Entre os números irracionais, a raiz quadrada de dois merece especial destaque pela sua simplicidade de construção e a prova de sua irracionalidade, que se originou na Grécia Antiga com o pensador pitagórico Hípaso, que foi afogado por seus pares após infringir a crença da seita que todo o Universo baseava-se em números racionais. 

Para conduzir o raciocínio que levou Hípaso à morte, vamos supor primeiramente que a raíz é irracional, isto é, que 

$$
\sqrt{2} = \dfrac{p}{q}
$$

com $p$ e $q$ primos entre si. 

Esta igualdade implica que $\dfrac{p^2}{q^2}=2 \Rightarrow 2q^2 = p^2$. Como $p^2$ é par, $p$ também é par. Escrevendo $p = 2k$, com $k \in \mathbb{Z}$: 

$$ 
(2k)^2 = 2q^2 \Rightarrow q^2 = 2k^2
$$

Pelo mesmo argumento, concluímos que $q$ também é par. Ora, a partir de uma suposição que assumimos como verdadeira, chegamos numa contradição em nossas próprias suposições — a raiz quadrada de dois ser racional implica simultaneamente em números que são e não são primos entre si. Dessa forma, nossa suposição não pode ser verdade, mostrando que a raiz quadrada de dois é na verdade irracional. 

<aside>

<b>(REIS & SILVA 2015) Proposição 1.</b> Sejam $a, b \in \mathbb{R}$ com $a < b$. Entre $a$ e $b$ existem infinitos números racionais e irracionais. 

<b>Demonstração</b> — Existem números irracionais arbitrariamente pequenos. Seja então $s$ irracional e positivo tal que $s < b -a$. Seja $n$ o maior inteiro tal que $ns \le a$. Então, o número $(n + 1)
$ satisfaz a equação 

$$ 
a < (n+1)s < b
$$

pois, sendo $n$ o maior inteiro tal que $ns \le a$, segue-se que $a < (n+1)s$ e também que $(n + 1)s = ns + s < a + (b-a) = b$, porque $ns \le a$ e $s \lt b-a$, logo $a \lt (n+1)s \lt b$.

Portanto, o número irracional $(n+1)s$ está entre $a$ e $b$. Fazendo-se $(n+1)s = a_1$ e repetindo o processo, vamos encontrar $a_2 \in \mathbb{I}$ tal que $a_1 \lt a_2 \lt b$. É possível construir quantos números irracionais quisermos entre $a$ e $b$, portanto, há infinitos números irracionais. Este mesmo argumento para a infinidade dos números racionais pode ser realizado supondo $s$ racional. 

</aside>

<aside>

<b>(REIS & SILVA 2015) Proposição 2.</b> Dado um número real $b$, existem próximos dele, arbitrariamente, números racionais e irracionais. 

<b>Demonstração</b> — Escolhemos $a \lt b$ com $a$ tão próximo de $b$ quanto desejarmos. Pela proposição 1, concluímos que entre $a$ e $b$ existem infinitos números racionais e irracionais. Estes números estão mais próximos de $b$ que o próprio $a$, portanto, arbitrariamente próximos de $b$. 

</aside>

# Os números reais 

 

Os números reais, representados pelo símbolo de seu conjunto $(\mathbb{R})$, e seus subconjuntos, os dos números racionais (e naturais, e inteiros, ...) e irracionais podem ser representados por pontos numa reta. Nesta reta, o ponto de origem $(\text{O})$, cuja posição é escolhida arbitrariamente, é geralmente associado ao número zero.

Na reta real, dizemos que um número $a$ é menor que $b$ se este está à esquerda de $b$. Para indicar isto, utilizamos a notação $a < b$. Para indicar que $b$ é menor que $a$, escrevemos $b < a$. Similarmente, podemos escrever $a > b$ ou $b > a$. Se um número for maior (ou menor) ou o próprio número comparado, podemos escrever $a \ge b$ ou $a \le b$. 

Ainda há duas afirmações sustentadas por algumas proposições: entre dois números reais existem infinitos racionais e irracionais; há um número racional arbitrariamente próximo de um irracional. 


Os números reais ainda possuem duas propriedades muito importantes em sua análise, a <b>propriedade dos intervalos encaixantes</b> e a <b>propriedade de Arquimedes</b>.

<aside>

<b>(ICMC-USP 2020, Teorema dos Intervalos Encaixantes [<a href="https://sites.icmc.usp.br/aurichi/exerc/doku.php?id=limites:valorintermediario" target="_blank">Aqui</a>])</b> — Considere $(I_n)_{n \in \mathbb{N}}$ uma familía de intervalos da forma $I_n = [a_n, b_n]$ tal que, para qualquer $n \in \mathbb{N}$, $[a_{n+1}, b_{n+1}] \subset [a_n, b_n]$ (isto é, $a_n \le a_{n+1} \le b_{n+1} \le b_n$). Então existe $x \in \bigcap_{n \in \mathbb{N}} I_n$. 

É visível que a reta real não possui "buracos" — todos os pontos são relacionados a um número real. 

</aside>


<aside>

<b>(GUIDORIZZI 2001, Propriedade de Arquimedes)</b> — Se $x \gt 0$ e $y$ são dois números reais quaisuqer, então existe pelo menos um número natural $n$ tal que $nx \gt y$. 

</aside>

# Referências 

 

1. LIMA, G.; SILVA. Geometria analitica. Rio de Janeiro. 2015.
2. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC