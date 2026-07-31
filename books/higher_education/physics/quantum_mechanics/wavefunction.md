# A função de onda

# A equação de Schrödinger

Enquanto na física clássica podemos estudar o comportamento de um sistema ou, mais basicamente, de uma partícula por meio do <a href="/books/higher_education/physics/physics_one/newtons_laws.html" target="_blank">princípio fundamental da dinâmica</a> 

$$
\vec{F} = \dfrac{d\vec{P}}{dt}
$$

temos que na mecânica quântica não iremos determinar a posição de uma partícula em função do tempo, mas sim buscar sua <b>função de onda</b> $\psi(x, t)$ que fornece todas as informações necessárias sobre a partícula. 

Encontrar a função de onda de uma partícula implica em resolver a <b>equação de Schrödinger</b> referente a ela. 

$$
i\hbar \dfrac{\partial \psi}{\partial t} = -\dfrac{\hbar^2}{2m}\dfrac{\partial^2 \psi}{\partial x^2} + V\psi
$$

Dessa forma, vemos que esta equação é análoga ao princípio fundaental da dinâmica na mecânica newtoniana. 

Não iremos nos aprofundar tanto inicialmente an equação de Schrödinger, entretanto, vale mencionar que esta equação é uma equação diferencial parcial contendo um <b>termo cinético</b> 

$$
-\dfrac{\hbar^2}{2m}\dfrac{\partial^2 \psi}{\partial x^2}
$$

e um termo potencial $V\psi$. A constante $\hbar$ é chamada <b>constante de Planck reduzida</b>, sendo obtida pela razão entre a constante de Planck ($h = 6.62607015 \cdot 10^{-34} \text { J} \cdot \text{s}$) e $2\pi$, valendo 

$$
\hbar = \dfrac{h}{2\pi} = 1.054572 \cdot 10^{-34} \text{ J} \cdot \text{s}
$$

# A interpretação estatística

É natural então questionar-se sobre a natureza dessa função de onda e como extarir alguma informação dela quando obtida. Pela <b>interpretação estatística de Born</b>, temos que o módulo quadrado da função de onda, denotado por $|\psi(x, t)|^2$, é a probabilidade de encntrar a parrtícula na posição $x$ no instante $t$. 

A razão para o módulo quadrado vem da natureza complexa de $\psi$: a multiplicação da função pelo seu complexo conjungado é um número real não-negativo, como uma probabilidade. Com efeito, a probabilidade de encontrar uma partícula no instante $t$ entre as posições $a$ e $b$ é dada pela integral 

$$
\int_{a}^{b} |\psi(x, t)|^2 \ dx 
$$

A interpretação de Born introduz um certo desconforto no estudo da mecânica quântica: como é possível o conhecimento de tudo que é necessário sobre a partícula (a função de onda) e a impossibilidade de determinação exata de sua posição? Além disso, caso seja efetuada uma medida e a posição da partícula seja determinada, onde estava a partícula antes disso? 

Três interpretações para este problema existiram ao longo do tempo com um grau elevado de adesão na comunidade física: a <b>posição realista</b>, que argumentava que a partícula realmente estava no local onde foi observada, com a indeterminação sendo na realidade um reflexo da imperfeição da teoria quântica; a <b>posição agnóstica</b>, que se recusava a responder à questão, afinal, como querer se preocupar com um "antes" da medida, se somente a medida nos fornece algo sbore o sistema físico? Como enunciou Pauli: "Não devemos nos torturar tentando resolver um problema sobre algo que não sabemos se existe ou não [...]"; e a <b>interpretação de Copenhagen</b>, conhecida também como a <b>posição ortodoxa</b>, que argumenta que a partícula, em verdade, não estava em lugar algum antes da medida: o ato de medir "força" esta a escolher uma posição definida. 

Dados experimentais reforçaram a validade da interpretação de Copenhagen em detrimento das outras, entretanto, muitos problemas filosóficos ainda persistem nos fundamentos da mecânica quântica: o que é de fato <b>medir</b>? Como é possível que uma medida influencie um sistema? Será pela interação de um sistema clássico com um quântico, como argumentou Bohr? Ou pela atuação de um observador consciente, como filosofou Wigner? Muitas perguntas ainda persistem... 

Retornando às consequências da interpretação de Copenhagen, temos que a medida provoca chamado <b>colapso da função de onda</b>. A função de onda $\psi$ torna-se apenas um pico em torno da posição em que a partícula foi encontrada pela medição do sistema. Nos instantes após a medição, a função de onda continua sua evolução normalmente, entretanto, ao realizarmos várias medições seguidas uma da outra, é esperado que o pico seja aproximadamente na mesma posição.

## Normalização

Algo muito importante para toda a teoria quântica é a normalização da função de onda, isto é, a validade da equação 

$$
\int_{-\infty}^{+\infty} |\psi(x, t)^2| \ dx = 1 
$$

pois a probabilidade de encontrar a partícula em algum lugar deve ser certa, pela definição usual de probabilidade.

Quando uma solução é encontrada para a equação de Schrödinger cuja integral não é igual a 1, isto é, a função de onda não está <b>normalizada</b>, devemos multiplicar $\psi(x, t)$ por alguma constante complexa $A$ de forma que seja garantida a normalização. Nos casos em que a integral denotada diverge, dizemos que a solução $\psi(x, t)$ não é <b>quadrado-integrável</b> e, consequentemente, não pode representar partículas.

<aside>

<b>Teorema (Normalização ao longo do tempo, Griffths)</b> — É possível demonstrar que uma função de onda $\psi(x, t)$ normalizada em $t = 0$ continuará normalizada ao longo do tempo. 

</aside>

<aside>

<b>Demonstração</b> — Inicialmente, temos que 

$$
\dfrac{d}{dt}\int_{-\infty}^{\infty} |\psi(x, t)|^2 \ dx = \int_{-\infty}^{+\infty} \dfrac{\partial}{\partial t}|\psi(x, t)|^2 \ dx 
$$

Além disso, pela regra do produto, vale 

$$
\dfrac{\partial}{\partial t}|\psi|^2 = \dfrac{\partial}{\partial t}(\psi^* \psi) = \psi^* \dfrac{\partial \psi}{\partial t} + \dfrac{\partial \psi^*}{\partial t}\psi 
$$

Tomando o complexo conjugado da equação de Schrödinger, obtemos

$$
\dfrac{\partial \psi^*}{\partial t} = -\dfrac{i\hbar}{2m}\dfrac{\partial^2 \psi^*}{\partial x^2} + \dfrac{i}{\hbar}V\psi^*
$$

logo, 

$$
\dfrac{\partial}{\partial t}|\psi|^2 = \dfrac{i\hbar}{2m}\left(\psi^* \dfrac{\partial^* \psi}{\partial x^2} - \dfrac{\partial^2 \psi^*}{\partial x^2}\psi\right) = \dfrac{\partial}{\partial x}\left[\dfrac{i\hbar}{2m}\left(\psi^* \dfrac{\partial \psi}{\partial x} - \dfrac{\partial \psi^*}{\partial x}\psi\right)\right]
$$

Portanto, podemos calcular a integral inicial explicitamente: 

$$
\dfrac{d}{dt}\int_{-\infty}^{\infty} |\psi(x, t)|^2 \ dx = \dfrac{i\hbar}{2m}\left(\psi^* \dfrac{\partial \psi}{\partial x} - \dfrac{\partial \psi^*}{\partial x}\psi\right)
$$

Como $\psi(x, t)$ deve ir a zero quando $x \to \infty$ ou $x \to -\infty$, caso contrário esta não seria normalizável, segue que 

$$
\dfrac{d}{dt}\int_{-\infty}^{\infty} |\psi(x, t)|^2 \ dx = 0
$$

Logo, temos que a integral é constante no tempo, isto é, a função de onda inicialmente normalizada mantém sua normalização durante sua evolução.

</aside>

# Momento 

Antes de começarmos a discutir sobre momento, é interessante discutirmos sobre posição: embora não seja possível determinar uma posição exata da partícula sem efetuar uma medição, é possívle determinar o <b>valor esperado de sua posição</b> (ou, alternativamente, sua <b>posição média</b> ou ainda seu <b>centróide</b>) como 

$$
\langle x \rangle = \int_{-\infty}^{+\infty} x |\psi(x, t)|^2 \ dx 
$$

Vale notar que este valor não significa que ao mensurarmos uma partícula diversas vezes a medida de suas posições irá convergir para $\langle x \rangle$, mas sim que a posição esperada ao mensurar $n$ partículas no estado $\psi$ é $\langle x \rangle$. 

É interessante nos questionar o quão rápido a média das posições se move ao longo do tempo. Por meio da equação do início dessa seção e da reescrita da derivada temporal de $|\psi(x, t)|^2$, podemos escrever 

$$
\dfrac{d \langle x \rangle}{dt} = \int_{-\infty}^{\infty} x \dfrac{\partial}{\partial t}|\psi|^2 \ dx = \dfrac{i \hbar}{2m}\int_{-\infty}^{\infty} x \dfrac{\partial}{\partial x} \left(\psi^* \dfrac{\partial \psi}{\partial x} - \dfrac{\partial \psi^*}{\partial x}\psi\right) \ dx
$$

que pode ser simplifica pela utilização de integração por partes, obtendo:

$$
\dfrac{d \langle x \rangle}{dt} = -\dfrac{i\hbar}{2m}\int_{-\infty}^{+\infty} \left(\psi^2* \dfrac{\partial \psi}{\partial x} - \dfrac{\partial \psi^*}{\partial}\psi\right) \ dx 
$$

Por outra integração por partes, obtemos finalmente: 

$$ 
\dfrac{d \langle x \rangle}{dt} = -\dfrac{i\hbar}{m} \int_{-\infty}^{+\infty} \psi^* \dfrac{\partial \psi}{\partial x} \ dx 
$$

Como estamos falando da velocidade de $\langle x \rangle$, que não é a velocidade da partícula, é suficiente interpretar $\langle v \rangle = \dfrac{d \langle x \rangle}{dt}$ como o <b>valor esperado da velocidade da partícula</b>, num raciocínio análogo ao caso da posição média, $\langle x \rangle$. 

Legal! Conseguimos encontrar uma expressão para $\langle v \rangle$ a partir de $\psi$. Entretanto, costuma-se trabalhar com momento ao invés de velocidade, em razão do momento definir um estado mecânico. Assim, podemos escrever o momento esperado $\langle p \rangle$ da forma: 

$$
\langle p \rangle = m \dfrac{d \langle x \rangle}{dt} = -i\hbar \int_{-\infty}^{+\infty} \left(\psi^* \dfrac{\partial \psi}{\partial x}) \ dx 
$$

De forma bem sugestiva, é possível escrever as expressões para $\langle x \rangle$ e $\langle p \rangle$ das formas 

$$
\begin{align*}
    \langle x \rangle &= \int_{-\infty}^{+\infty} \psi^* \cdot x \cdot \psi \ dx \\ 
    \langle p \rangle &= \int_{-\infty}^{+\infty} \psi^* \left(\dfrac{\hbar}{i}\dfrac{\partial}{\partial x}\right) \psi \ dx 
\end{align*}
$$

com os termos em parênteses denominados <b>operadores</b>. Os operadores em quântica podem ser interpretados como uma espécie de instrução matemática para a determinação de alguma informação de $\psi$. 

Assim, o operador posição indica um produto entre $x$ e $\psi$, enquanto o operador momento indica uma derivação em relação a $x$ e uma multiplicação por $\dfrac{\hbar}{i}$. Portanto, para calcular os valores esperados que queremos, basta encaixar o operador necessário entre $\psi^*$ e $\psi$ e integrar a expressão resultante. 

Como todas as grandezas mecânicas podem ser expressas como uma combinação entre posição e momento, podemos assim calcular o valor esperado de qualquer grandeza $Q(x, p)$ por meio da integral 

$$
\langle Q(x, p) \rangle = \int_{-\infty}^{+\infty} \psi^* Q\left(x, \dfrac{\hbar}{i}\dfrac{\partial}{\partial x}\right) \psi \ dx 
$$

# O princípio da incerteza 

É impossível determinar simultaneamente a posição e o comprimento de onda em qualquer fenômeno ondulatório. Este resultado também é válido para a função de onda na mecânica quântica.

É cômodo introduzir esse resultado intuitivamente pela comparação de dois fenômenos: um único pulso numa onda e uma ondulação contínua. No primeiro caso, a posição da onda é bem definida, enquanto seu comprimento não o é. Por outro lado, no segundo caso, o comprimento de onda é bem definido, mas não sua posição.

Pela fórmula de de Broglie, é possível relacionar o comprimento de onda de $\psi$ com o momento da partícula

$$
p = \dfrac{h}{\lambda} = \dfrac{2\pi \hbar}{\lambda}
$$

consequentemente, quanto mais precisa é a posição da partícula, menos preciso é o seu momento. Quantitativamente, escrevemos 

$$
\sigma_x \sigma_y \ge \dfrac{\hbar}{2}
$$

com $\sigma_x$ e $\sigma_y$ sendo os desvios padrão da posição e do momento, respectivamente. A este resultado damos o nome de <b>princípio da incerteza de Heisenberg</b>.

# Referências 

1. GRIFFITHS, David J. <i>Mecânica quântica</i>. 2ª ed. São Paulo: Pearson Prentice Hall, 2011.