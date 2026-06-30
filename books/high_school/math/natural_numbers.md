# Números naturais

A história dos números se confunde com a história da própria Matemática. Estes objetos são um dos dois conceitos mais fundamentais desde sistema de pensamento. O outro é o espaço e suas figuras geométricas nele contidas. 

Da necessidade do homem primitivo de <b>contar</b> surgiram os chamados números <b>naturais</b>. Vale notar que isso foi algo de muita demora em razão de seu nível de abstração. 

Hoje, na idade contemporânea, podemos descrever esse conjunto de números naturais da forma precisa que a matemática exige por meio dos <b>axiomas de Peano</b>. Estes axiomas foram formalizados pelo italiano Giuseppe Peano no início do século XX. 

Antes de continuar essa discussão, pode ser interessantes nos entreter numa pequena digressão sobre os conceitos de <b>definição</b>, <b>axioma</b>, <b>teorema</b>, <b>lema</b> e <b>corolário</b>

Na linguagem matemática, uma <b>definição</b> é uma sentença breve e não-ambígua (e não-circular) que designa um objeto ou uma propriedade. O conceito de definição é muito explorado pelo matemático e filósofo Blaise Pascal em seu <i>Do Espírito Geométrico</i>.

Assim, em amteática, toda definição é apoiada por outras definições iterativamente até retornarem às proporsições consideradas fundamentais, básicas, auto-explicativas, que não dependem de justificativas anteriores. Essas definições primitivas são chamadas <b>axiomas</b>.

Dessa forma, este método de organização matemática é chamado <b>método axiomático</b>, sendo palco de uma profunda discussão filosófica no interior da matemática, cujos lados são representados por David Hilbert e Kurt Gödel. 

Ambos geniais matemáticos, Kurt e David possuíam visões diametralmente opostas sobre o método axiomático: Hilbert aspirava que, um dia, toda a matemática seria apoiada sobre um conjunto bem determinado de axiomas. Kurt Gödel, no começo do século XX, mostrou que isto era impossível pelo seu famoso Teorema da Incompleteza — para representar a matemática seria necessário um número infinito de axiomas.

Na lógica matemática, as proposições a serem provadas são denominadas <b>teoremas</b> e suas consequências imediatas <b>colorários</b>. Além disso, teoremas menores, auxiliares na demonstração de um teorema mais complexo, são chamados <b>lemas</b>. 

O método axiomático nos motiva a retornar para nosso ponto de partida. A matemática é uma linguagem criada com o objetivo de possibilitar a interpretação e análise precisa do mundo, nos fornecendo modelos para estudá-lo. No nível educacional e de homem leigo, entretanto, ela é um excelente "par de halteres" para o desenvolvimento do raciocínio lógico. 

Finalizando nossa pequena distração, vamos retornar aos números naturais.

# O conjunto dos naturais

Peano, no início do século XX, formalizou o conjunto dos números naturais ($\mathbb{N}$). Este conjunto possui algumas propriedades queo definem, com essas propriedados sendo os <b>axiomas de Peano</b>. 

<aside>

<b>1º Axioma de Peano</b> — Todo número natural tem um único sucessor;

</aside>

<aside>

<b>2º Axioma de Peano</b> — Números naturais diferentes possuem sucessores diferentes;

</aside>

<aside>

<b>3º Axioma de Peano</b> — Existe um único número natural chamado "um", representado pelo símbolo "1", que não é sucessor de nenhum outro.

</aside>

<aside>

<b>4º Axioma de Peano</b> — Seja $X$ um conjunto de números naturais. Se $1 \in X$ e se, além disso, o sucesso de todo elemento de $X$ ainda pertence a $X$, então $X = \mathbb{N}$.

</aside>

Todas as demais propriedades dos números naturais podem ser demonstrados como consequência desses axiomas. Além disso, o <b>sistema de numeração decimal</b> permite a representação de todos os números naturais por meio de símbolos, os chamados <b>algarismos</b>. No Ocidente, é universal a utilização da iteração moderna dos algarismos indo-arábicos.

<aside>

<b>Observação:</b> ainda é um motivo de discussão se o número zero é um número natural. Diversos argumentos existem para sua inclusão ou para sua exclusão. No fim, a resposta depende de quem você pergunta e da sua definição para $\mathbb{N}$.

</aside>

# O Axioma da Indução

O quarto axioma de Peano é conhecido por "axioma da indução". Essa denominação possui fundamentação no fato de que este axioma é base para um método de demonstração muito conhecido, as <b>demonstrações por indução</b>, alternativamente chamadas de <b>demonstrações por recorrência</b>. 

Para demonstrações, esse axioma é geralmente enunciado em termos de propriedades, da seguinte forma: 

<aside>

Seja $P(n)$ uma propriedade relativa ao número natural $n$. Suponha que: i) $P(1)$ é válida; ii) Para todo $n \in \mathbb{N}$, $P(n)$ ser válida implica na validez de $P(n')$, com $n'$ sendo o sucessor de $n$. Logo, $P(n)$ é válida para todo $n$.

</aside>

Para ilustrar esse processo, vamos imaginar um exemplo. Vamos provar que, para todo natural $n$, vale a propriedade 

$$
P(n): 1 + 2 + ... + n = \dfrac{n(n+1)}{2}
$$

Primeiro, temos o chamado <b>caso base</b>: $P(1) = 1 = \dfrac{1(1+1)}{2}$ é verdadeiro. Assim, vamos supor que, para algum $k$ natural, $P$ é válida para o caso $n = k$. Esta é nossa hipótese de indução.

Como $P(k)$ é válida, temos que, por hipótese, é verdadeira a afirmação 

$$
P(k) = 1 + 2 + 3 + ... + k = \dfrac{k(k+1)}{2}
$$

Somando $k+1$ em ambos os lados, temos 

$$
1 + 2 + 3 + ... + k + (k+1) = \dfrac{k(k+1)}{2}+(k+1)
$$

Perceba que o primeiro membro é $P(k+1)$, enquanto o segundo membro pode ser simplificado para finalmente obtermos 

$$
P(k+1) = 1 + 2 + 3 + ... + k + (k+1) = \dfrac{(k+1)((k+1)+1)}{2}
$$

Ou seja, supondo que $P(k)$ é verdade para um natural qualquer, temos que $P(k+1)$ também é verdadeira. Como $P(1)$ é verdadeira, como observado, temos que $P(n)$ é válida para qualquer $n$. Interessante, não? Esse processo é frequentemente comparado com o ato de derrubar dominós alinhados em sequência.

# Adição e multiplicação

Duas importantes operações estão definidas para o conjunto dos números naturais. A primeira é a <b>adição</b>, que liga os números $n, p \in \mathbb{N}$ ao número $n+p$, a <b>soma</b> deles. A <b>multiplicação</b> liga estes números ao seu <b>produto</b>, $np$. 

POdemos definir a operação soma como a aplicação da operação sucessor $p$ vezes a partir de um número inicial $n$. Isso nos possibilita denotar o sucessor de $n$ por $n+1$. 

Em relação à operação produto, definimos $n \cdot 1 = n$ e que, para qualquer $p \neq 1$, o produto $np$ é a soma de $p$ parcelas $n$. 

Por fim, podemos demonstrar a validade dessas opreações para todos os naturais, além de suas propriedades (associatividade, comutatividade e distributividade) por indução. 

## Ordem entre os naturais

No conjunto dos números naturais há uma relação entre dois elementos que chamamos <b>relação de ordem</b>. Essa relação, dados dois naturais $m$ e $n$, é denotada por $m \lt n$ e lida como "m é menor que n" se existe algum $p$ natural tal que $n = m + p$. 

Essa relação, $m \lt n$, ainda tem algumas propriedades. 

<aside>

<b>1ª Propriedade (Transitividade)</b> — Se $m \lt n$ e $n \lt p$, então $m \lt p$. 

</aside>

<aside>

<b>2ª Propriedade (Tricotomia)</b> — Dados $m, n \in \mathbb{N}$, somente uma das seguintes alternativas pode ser verdadeira: $m = n$, $m \lt n$ ou $n \lt m$. 

</aside>

<aside>

<b>3ª Propriedade (Monotonicidade)</b> — Se $m \lt n$, então, para qualquer $p \in \mathbb{N}$, tem-se que $m + p \lt n +p$ e $mp \lt np$. 

</aside>

<aside>

<b>4ª Propriedade (Boa ordenação)</b> — Todo subconjunto não vazio $X \subset \mathbb{N}$ possui um menor elemento.

</aside>


É interessante mencionar que a importância desta quarta propriedade reside na possibilidade de prova de algumas relações de maneira muito mais concisa e rápida em relação ao método de indução. 

# Referências 

1. LIMA, Elon Lages et al. A Matemática do Ensino Médio. 11. ed. Rio de Janeiro: SBM, 2016. v. 1. (Coleção Professor de Matemática; 13). ISBN 978-85-8337-090-1.