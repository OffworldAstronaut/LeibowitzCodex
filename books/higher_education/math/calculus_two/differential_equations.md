# Equações Diferenciais

# Introdução 

Dizemos que equações diferenciais são equações cujas incógnitas não são escalares, mas sim funções. Essas equações são formadas por derivadas (por isso <b>diferenciais</b>) em conjunto com outros termos. 

A <b>ordem</b> de uma equação diferencial indica o maior grau de diferenciação presente. Por exemplo, a equação 

$$
\dfrac{dx}{dt} = 2x 
$$

é uma equação diferencial de primeira ordem. Por outro lado, a equação 

$$
\dfrac{d^2}{dt^2} + \dfrac{dx}{dt} = 2x 
$$

é uma equação de segunda ordem. Equações diferenciais ainda podem ser de <b>variáveis separáveis</b> (ou não), <b>lineares</b> (ou não), <b>homogêneas</b> (ou não) e <b>parcais</b> (ou não). Para nossos propósitos, estamos tratando apenas de equações diferenciais <b>ordinárias</b>, isto é, com a derivada regular — a função buscada é de uma única variável. 

Equações deste gênero são praticamente onipresentes em diversas ciências, principalmente a Física ou a Química: o princípio fundamental da dinâmica, a equação de Schrödinger, a lei de Faraday e muitas outras descrições matemáticas de nosso mundo são realizadas por meio de equações diferenciais. Dessa forma, justifica-se o estudo profundo deste gênero de equações matemáticas.

![](https://upload.wikimedia.org/wikipedia/commons/c/cd/James_Clerk_Maxwell_Statue_Equations.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Equações de Maxwell gravadas em uma estátua em sua homenagem, em Edimburgo, Escócia. Estas quatro fundamentais equações diferenciais descrevem toda a teoria eletromagnética clássica. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:James_Clerk_Maxwell_Statue_Equations.jpg" target="_blank">Wikimedia Commons</a>.</i>

# EDOs de 1ª ordem de variáveis separáveis 

Equações diferenciais de 1ª ordem de variáveis separáveis são da forma 

$$
\dfrac{dx}{dt} = g(t)h(x)
$$

com $g$ e $h$ funções definidas nos intervalos $I_1$ e $I_2$, respectivamente. Funções $x(t)$ soluções desta equação são definidas num certo intervalo $I$ contido em $I_1$, de forma que para todo $t \in I$, seja válido que 

$$
x'(t) = g(t)h(x(t))
$$

Equações desta forma podem ter soluções constantes ou não. Para estudo do primeiro caso, considere inicialmente a seguinte função: 

$$
x(t) = a, t \in I_1
$$

Perceba que se $h(a) = 0$, então a função apresentada será solução da EDO. De forma recíproca, se esta função for solução da EDO, deve valer que, para todo $t \in I_1$:

$$
g(t)h(a) = 0 
$$

Como $g(t) \neq 0$ em todo $I_1$, temos que $h(a) = 0$. Logo, podemos notar uma relação de equivalência: uma função $x(t) = a$ com $t \in I_1$ se, e somente se, $a$ for raíz de $h(x) = 0$. 

E no caso de soluções não-constantes? Como poderemos determiná-las? Para continuarmos nosso raciocínio, considere o seguinte teorema: 

<aside>

<b>Teorema</b> — Seja a equação diferencial 

$$
\dfrac{dx}{dt} = g(t)h(x)
$$

com $g: I_1 \to \mathbb{R}$ e $h: I_2 \to \mathbb{R}$. Além disso, $g$ e $h'$ são contínuas em seus respectivos domínios. Logo, se $x = x(t), t \in I$ for solução não-constante da equação diferencial dada, então $h(x(t)) \neq 0, \forall t \in I$.

</aside>

Suponha, então, que $g$ e $h$ satisfaçam as condições impostas neste teorema. COmo poderemos encontrar essas soluções não-constantes? Para isso, imagine uma função $x = x(t)$ solução da equação diferenciam em foco.

Sabemos que 

$$
x'(t) = g(t)h(x(t)) \iff \dfrac{x'(t)}{h(x(t))} = g(t)
$$

Assim, imagine um intervalo $J = \left\{x(t), t \in I \right\}$. Como $h(x) \neq 0$, temos que para todo $x$ em $J$ a função $\dfrac{1}{h(x)}$ é contínua neste intervalo e, consequentemente, admite primitiva. Logo, podemos definir uma função $H(x)$ de forma que 

$$
H'(x) = \dfrac{1}{h(x)}, x \in J
$$

o que implica que 

$$
[H(x(t))]' = g(t), \forall t \in I
$$

Assim, sendo $G(t)$ primitiva de $g$ em $I$, temos pela equação anterior que existe $k$ real tal que, para todo $t$ em $I$, 

$$
H(x(t)) = G(t) + k 
$$

Como $h(x) \neq 0$ em todo o intervalo $J$, além de ser contínua, segue que $\dfrac{1}{h(x)}$ mantém o mesmo sinal neste mesmo intervalo $J$. Consequententemente, $H$ é injetora neste intervalo e, portanto, inversível. Denotando por $\bar{H}$ a função inversa de $H$ em $J$, vemos que é consequência da definição de $H$ como primitiva de $g$ que 

$$
x(t) = \bar{H}(G(t) + k), t \in I 
$$

Além disso, é possível mostrar que toda função desta forma é solução de uma equação diferencial de variáveis separáveis. 

Portanto, dado o que colhemos até aqui, podemos pensar num processo prático para determinar as soluções não-constantes de uma EDO deste tipo. Reorganizando as variáveis, podemos reescrevê-la da seguinte maneira: 

$$
\dfrac{dx}{h(x)} = g(t) \ dt 
$$

Em seguida, integrando em ambos os lados, obtemos: 

$$
\int \dfrac{dx}{h(x)} = \int g(t) \ dt \implies H(x) = G(t) + k
$$

Caso $g$ e $h'$ satisfaçam as restrições do teorema anterior, teremos como resposta direta a família de soluções da EDO dada. 

<aside>

<b>Exemplo</b> — Encontre as soluções da equação diferencial a seguir. 

$$
\dfrac{dx}{dt} = x^2 t 
$$

</aside>

<aside>

<b>Solução</b> — Sendo a equação dada uma EDO de variáveis separáveis, é interessante inicialmente determinar suas soluções constantes e, em seguida, as soluções não constantes. 

Perceba que $h(x) = x^2$ e, portanto, $h(x) = 0 \iff x = 0$. Assim, $x(t) = 0$ é a única solução constante da EDO. 

Para determinar as soluções não-constantes, reescrevemos a equação e aplicamos o nosso método.

$$
\begin{align*}
    \dfrac{dx}{dt} = x^2 t &\iff \dfrac{dx}{x^2} = t \ dt \\ 
                           &\iff \int \dfrac{1}{x^2} \ dx = \int t \ dt \\ 
                           &\iff -\dfrac{1}{x} = \dfrac{t^2}{2} + k \\ 
                           &\iff x = -\dfrac{2}{t^2 + 2k}
\end{align*}
$$

Note que $g(t) = t$ e $h'(x) = 2x$, atendendo aos requerimentos do teorema e consequentemente, a última equivalência é válida, fornecendo a família de soluções não-constantes da EDO.

</aside>

# EDOs lineares de 1ª ordem

São <b>equações diferenciais lineares de 1ª ordem</b> equações da forma 

$$
\dfrac{dx}{dt} = xg(t) + f(t)
$$

com $f$ e $g$ contínuas e definidas num mesmo intervalo $I$. 

Se $f(t) = 0$ no intervalo definido, a equação se reduz a 

$$
\dfrac{dx}{dt} = xg(t)
$$

e, consequentemente, sua solução geral é da forma 

$$
\int \dfrac{dx}{dt} \ dt = \int xg(t) \ dt \iff x = ke^{\int g(t) \ dt}, k \in \mathbb{R}
$$

Caso $f(t) \neq 0$ em $I$, é interessante perceber que 

$$
\begin{align*}
    \dfrac{d}{dt} \left(xe^{-\int g(t) \ dt}\right) &= \dfrac{dx}{dt}\left(e^{-\int g(t) \ dt}\right) - xg(t) e^{-\int g(t) \ dt} \\ 
    &= \left[\dfrac{dx}{dt} - xg(t)\right]e^{-\int g(t) \ dt}
\end{align*}
$$

Reescrevendo nossa equação original, podemos chegar na forma 

$$
\dfrac{dx}{dt} - xg(t) = f(t)
$$

Multiplicando ambos os membros pelo chamado <b>fator integrante</b> $e^{-\int g(t) \ dt}$, obtemos: 

$$
\begin{align*}
    \left[\dfrac{dx}{dt} - xg(t)\right]e^{-\int g(t) \ dt} = f(t) e^{-\int g(t) \ dt} &\iff \dfrac{d}{dt}\left(xe^{-\int g(t) \ dt}\right) = f(t) e^{-\int g(t) \ dt} \\ 
    &\iff x = ke^{\int g(t) \ dt} + e^{\int g(t) \ dt} \cdot \int f(t) e^{-\int g(t) \ dt} \ dt, k \in \mathbb{R}
\end{align*}
$$

<aside>

Um <b>fator integrante</b> é uma função arbitrária escolhida com o intuito de facilitar a resolução de uma equação diferencial dada.

</aside>

# EDOs lineares de 1ª e 2ª ordens com coeficientes constantes

## EDOs lineares de 1ª ordem com coeficientes constantes 

Definimos como equação diferencial linear de primeira ordem com coeficiente constante uma equação da forma 

$$
\dfrac{dx}{dt} + ax = f(t)
$$

com $f: I \to \mathbb{R}$, $x: I \to \mathbb{R}$ e $a \in \mathbb{R}$ constante. 

Multiplicando ambos os membros da equação por $e^{\alpha t}$, obtemos 

$$
e^{\alpha t} \dfrac{dx}{dt} + axe^{\alpha t} = e^{\alpha t} f(t) 
$$

que pode ser reescrito como 

$$
\dfrac{d}{dt}\left(xe^{\alpha t}\right) = e^{\alpha t} f(t) 
$$

Integrando ambos os membros, pois $e^{\alpha t} f(t)$ é contínua no intervalo $I$, obtemos 

$$
xe^{\alpha t} = k + \int e^{\alpha t} f(t) \ dt 
$$

ou, então, 

$$
x = ke^{-\alpha t} + e^{-\alpha t} \int e^{\alpha t} f(t) \ dt, k \in \mathbb{R}
$$

Com efeito, podemos concluir que todas as soluções da EDO dada são desta forma. 

## EDOs lineares e homogêneas de 2ª ordem com coeficientes constantes

Denominamos uma <b>equação diferencial linear com coeficientes constantes</b>, de segunda ordem, como uma equação da forma 

$$
\dfrac{d^2 x }{dt^2} + b \dfrac{dx}{dt} + cx = f(t) 
$$

com $b, c \in \mathbb{R}$ dados e $f(t): I \to \mathbb{R}$. Se $f(t) = 0$, dizemos que a equação é homogênea. Dessa forma, para determinar a solução geral da equação homogênea, será necessário analisar a equação 

$$
\lambda^2 + b\lambda + c = 0
$$

que é a <b>equação característica</b> de equações diferenciais deste tipo. 

<aside>

Uma <b>equação característica</b>, também denominada <b>equação auxiliar</b>, de uma equação diferencial linear e homogênea é uma equação da forma 

$$
a_nr^n + a_{n-1}r^{n-1} + \dots + a_1r + a_0 = 0 
$$

Esta equação é chamada <b>auxiliar</b> foi facilita a resolução da equação diferencial associada a ela. Bom, por que uma equação característica possui essa forma e como determiná-la? Considere uma equação diferencial linear e homogênea 

$$
a_n \dfrac{d^n x}{dt^n} + a_{n-1} \dfrac{d^{n-1} x}{dt^n} + \dots + a_1 \dfrac{dx}{dt} + a_0 x = 0 
$$

Note que, se $x = e^{rt}$, $\dfrac{d^n x}{dt^n} = r^n e^{rt}$. Assim, substituindo esta função na equação, obtemos: 

$$
a_n r^n e^{rt} + a_{n-1}r^{n-1} e^{rt} + \dots + a_1re^{rt} + a_0 e^{rt} = 0 \iff e^{rx}(a_nr^n + a_{n-1}r^{n-1} + \dots + a_0) = 0 
$$

Como $e^{rt} \neq 0$, temos que a única solução é se 

$$
a_n r^n + a_{n-1} r^{n-1} + \dots + a_0 = 0 
$$

Esta é a equação característica. Note que uma solução para esta equação é uma solução da equação diferencial original.

</aside>

<aside>

<b>Teorema</b> — Suponha $\lambda_1$ e $\lambda_2$ raízes reais da equação característica. Logo, se $\lambda_1 \neq \lambda_2$, a solução geral da equação diferencial homogênea correspondente é da forma 

$$
x = Ae^{\lambda_1 t} + Be^{\lambda_2 t}
$$

Caso contrário, teremos que a solução geral será da forma

$$
x = Ae^{\lambda_1 t} + Bte^{\lambda_1 t}
$$

Em ambos os casos, $A$ e $B$ são coeficientes reais.

</aside>

<aside>

<b>Demonstração</b> — Como $\lambda_1$ e $\lambda_2$ são raízes da equação $\lambda^2 + b\lambda + c = 0$, temos que estes valores satisfazem o sistema 

$$
\begin{cases}
    \lambda_1 + \lambda_2 = -b \\ 
    \lambda_1 \lambda_2 = c 
\end{cases}
$$

Logo, 

$$
\dfrac{d^2 x}{dt^2} + b \dfrac{dx}{dt} + cx = 0 \iff \dfrac{d^2 x}{dt^2} - (\lambda_1 + \lambda_2)\dfrac{dx}{dt} + \lambda_1 \lambda_2 = 0 
$$

que, por sua vez, é equivalente a 

$$
\dfrac{d}{dt}\left[\dfrac{dx}{dt} - \lambda_1 x\right] - \lambda_2 \left[\dfrac{dx}{dt} - \lambda_1 x\right] = 0 
$$

Logo, temos que $x = x(t)$ será solução da equação diferencial se, e somente se, $\dfrac{dx}{dt} - \lambda_1 x$ for solução da equação linear de primeira ordem

$$
\dfrac{du}{dt} - \lambda_2 u = 0 
$$

onde $u = \dfrac{dx}{dt} - \lambda_1 x$. Como $u = k_2 e^{\lambda_2 t}$, $x = x(t)$ será solução da equação diferencial de segunda ordem se, e somente se, 

$$
\dfrac{dx}{dt} - \lambda_1 = k_2 e^{\lambda_2 t}
$$

Consequentemente, $x = x(t)$ será solução se, e somente se, for da forma 

$$
x = k_1e^{\lambda_1 t} + e^{\lambda_1 t} \int k_2 e^{(\lambda_2 - \lambda_1)t} \ dt
$$

com $k_1, k_2 \in \mathbb{R}$ constantes.

Finalmente, se $\lambda_1 \neq \lambda_2$, 

$$
x = k_1 e^{\lambda_1 t} + e^{\lambda_1 t} \dfrac{k_2 e^{(\lambda_2 - \lambda_1) t}}{\lambda_2 - \lambda_1}
$$

ou, equivalentemente, 

$$
x = Ae^{\lambda_1 t} + Be^{\lambda_2 t}
$$

com $A = k_1$ e $B = \dfrac{k_2}{\lambda_2 - \lambda_1}$. 

Por outro lado, se $\lambda_1 = \lambda_2$, 

$$
x = k_1 e^{\lambda_1 t} + e^{\lambda_1 t} \int k_2 \ dt  
$$

isto é, 

$$
x = Ae^{\lambda_1 t} + Bte^{\lambda_1 t}
$$

com $A = k_1$ e $B = k_2$. 

</aside>

## Solução geral no caso em que as raízes das equações características são complexas

Considere a equação $\dfrac{d^2 x }{dt^2} + \omega^2 x = 0, \omega \neq 0$, com $\omega \in \mathbb{R}$. 

Temos que a equação característica desta equação diferencial é $\gamma^2 + \omega^2 = 0$, cujas raízes são complexas: $\omega i$ e $- \omega i$. Além disso, perceba que uma função $x: \mathbb{R} \to \mathbb{R}$ será solução se 

$$
x''(t) = -\omega^2 x(t), \forall t
$$

com esta relação sendo obtida pelo rearranjamento dos termos da equação original. Como as funções $\sin{\omega t}$ e $\cos{\omega t}$ satisfazem essa restrição, estas são soluções da equação diferencial. 

Perceba que quaisquer que sejam $A, B \in \mathbb{R}$, 

$$
x(t) = A \cos{\omega t} + B \sin{\omega t} 
$$

também é solução da equação diferencial. De fato, podemos mostrar que <b>toda solução</b> é da forma exposta acima, uma combinação linear entre $\cos{\omega t}$ e $\sin{\omega t}$. 

Convém aqui inicialmente demonstrar a primeira "via" desta equivalência: toda função combinação linear destas funções trigonométricas é uma solução da equação diferencial dada. 

<aside>

<b>Teorema</b> — Seja a equação diferencial: 

$$
\dfrac{d^2 x}{dt^2} + \omega^2 x = 0
$$

Qualquer função $x(t) = A\cos{\omega t} + B\sin{\omega t}$, com $A, B \in \mathbb{R}$, é uma solução.

</aside>

<aside>

<b>Demonstração</b> — Substituindo $x(t)$ na equação, obtemos: 

$$
\begin{align*}
    \dfrac{d^2}{dt^2}\left(A\cos{\omega t} + B \sin{\omega t}\right) + \omega^2 \left(A \cos{\omega t} + B \sin{\omega t}\right) = 0 &\iff A\dfrac{d^2}{dt^2}\left(\cos{\omega t}\right) + B\dfrac{d^2}{dt^2}\left(\sin{\omega t}\right) + \omega^2(A\cos{\omega t} + B \sin{\omega t}) = 0 \\ 
    &\iff A\dfrac{d}{dt}\left(-\omega\sin{\omega t}\right) + B \dfrac{d}{dt}\left(\omega \cos{\omega t}\right) + \omega^2 \left(A \cos{\omega t} + B \sin{\omega t}\right) = 0 \\ 
    &\iff -A\omega^2 \cos{\omega t} - B\omega^2 \sin{\omega t} + A\omega^2 \cos{\omega t} + B\omega^2 \sin{\omega t} = 0 \\ 
    &\iff 0 = 0
\end{align*}
$$

Logo, toda função $x(t)$ formada pela combinação linear entre as funções $\cos{\omega t}$ e $\sin{\omega t}$, com $\omega \in \mathbb{R}$ e não-nulo, é uma solução da equação diferencial $\dfrac{d^2x}{dt^2} + \omega^2 x = 0$.

</aside>

Para começar, temos primeiro que mostrar que, se $x = x(t), t \in \mathbb{R}$ é uma solução, então $\exists k \in mathbb{R}$ constante tal que $\forall t$, 

$$
[x'(t)]^2 + \omega^2 [x(t)]^2 = k
$$

Fisicamente, essa equação é a consequência direta do princípio da conservação de energia, com um múltiplo do primeiro termo identificado com a energia cinética e outro múltiplo do segundo termo identificado com a energia potencial. 

Com efeito, se $x = x(t)$ é solução da equação diferencial em análise, é válido que 

$$
x''(t) + \omega^2 x(t) = 0 
$$

e, consequentemente, vale para todo $t$ que 

$$
\begin{align*}
    \dfrac{d}{dt}\left\{[x'(t)]^2 + \omega^2[x(t)]^2 \right\} &= 2x'(t)x''(t) + 2\omega^2x(t)x'(t) \\ 
    &= 2x'(t)[x''(t) + \omega^2x(t)] \\ 
    &= 0. 
\end{align*}
$$

Assim, $k \in \mathbb{R}$ com $k = [x'(t)]^2 + \omega^2 [x(t)]^2$ é constante. Suponha agora uma solução qualquer da equação diferencial original, $x(t), t \in \mathbb{R}$.

Fazendo $a_0 = x(0)$ e $b_0 = x'(0)$, temos que a função

$$
f(t) = a_0 \cos{\omega t} + \dfrac{b_0}{\omega}\sin{\omega t} 
$$

é solução, conforme demonstrado anteriormente. Além disso, $f(0) = a_0$ e $f'(0) = b_0$. 

Note que se $f(t)$ e $x(t)$ são soluções, então $f(t) - x(t)$ também será. Como visto acima, $\exists k \in \mathbb{R}$ tal que $\forall t \in \mathbb{R}$ vale 

$$
[f'(t) - x'(t)]^2 + \omega^2[f(t) - x(t)] = k
$$

Como $f(0) = x(0)$ e $f'(0) = x'(0)$, podemos ver que $k = 0$. Logo, 

$$
[f'(t) - x'(t)]^2 + \omega^2[f(t) - x(t)]^2 = 0 
$$

e, consequentemente, $x(t) = f(t)$. Isto é, 

$$
x(t) = A\cos{\omega t} + B\sin{\omega t}
$$

com $A = a_0$ e $B = \dfrac{b_0}{\omega}$. Aqui está provada a relação contrária: se $x(t)$ é solução, esta será combinação linear de $\cos{\omega t}$ e $\sin{\omega t}$. 

<aside>

<b>Exemplo (Movimento harmônico simples)</b> — Considere o movimento de uma partícula sobre o eixo das abscissas regido pela equação 

$$
m\dfrac{d^2x}{dt^2} + kx = 0
$$

com $m, k \in \mathbb{R}$ constantes positivas. Como podemos descrever o movimento, isto é, caracterizar sua função horária? 

Perceba que esta equação é equivalente a escrever 

$$
\dfrac{d^2x}{dt^2} + \omega^2 x = 0 
$$

ao tomar $\omega^2 = \dfrac{k}{m}$. Logo, a solução geral é da forma 

$$
x = A\cos{\omega t} + B\sin{\omega t}
$$

Tomando $\phi \in \mathbb{R}$ de forma que $A = \cos{\phi}\sqrt{A^2 + B^2}$ e $B = \sin{\phi}\sqrt{A^2 + B^2}$, podemos reescrever a solução geral numa forma alternativa: 

$$
x = [\cos{\phi}\cos{\omega t} + \sin{\phi} \sin{\omega t}]\sqrt{A^2 + B^2} = \cos{(\omega t - \phi)}\sqrt{A^2 + B^2}
$$

que é a função horária de um <b>movimento harmônico simples</b> de amplitude $\sqrt{A^2 + B^2}$. 

Assim, neste ponto de vista, podemos definir que uma partícula realiza um <b>movimento harmônico simples</b> sobre o eixo x se sua trajetória for descrita por uma função da forma $x = a\cos{(\omega t - \phi_0)}$. Nesta expressão, $a$, $\omega$ e $\phi$ denominam-se, respectivamente, a <b>amplitude</b>, a <b>pulsação</b> e a <b>fase inicial</b> do movimento.

</aside>

Finalmente, após todo este raciocínio preliminar, podemos nos debruçar sobre a determinação da solução geral da equação diferencial ordinária

$$
\dfrac{d^2x}{dt^2} + b\dfrac{dx}{dt} + cx = 0
$$

quando as raízes de sua característica não são mais números reais, mas sim, complexos.

Sabemos que se as raízes $\lambda$ da equação característica forem reais e distintas, isto é, da forma 

$$
\lambda = \dfrac{-b \pm \sqrt{\Delta t}}{2}
$$

a solução geral será da forma 

$$
x = Ae^{\dfrac{-b + \sqrt{\Delta}}{2}} + Be^{\dfrac{-b - \sqrt{\Delta}}{2}}
$$

ou, equivalentemente, 

$$
x = e^{-\dfrac{b}{2}t}\left[Ae^{\dfrac{\sqrt{\Delta}}{2}t} + Be^{-\dfrac{\sqrt{\Delta}}{2}t}\right]
$$

Podemos verificar que, se $\Delta \gt 0$, 

$$
Ae^{\dfrac{\sqrt{\Delta}}{2}t} + Be^{-\dfrac{\sqrt{\Delta}}{2}}
$$

é a solução geral da equação diferencial 

$$
\dfrac{d^2 x}{dt^2} - \dfrac{\Delta}{4}x = 0
$$

<aside>

<b>Teorema</b> — Seja a equação diferencial

$$ 
\dfrac{d^2 x}{dt^2} + b\dfrac{dx}{dt} + cx = 0 
$$ 

Suponha então que as raízes da equação característica $\lambda^2 + b\lambda + c = 0$ sejam complexas, de forma que 

$$
\lambda = \alpha \pm \beta i
$$

com 

$$
\alpha = -\dfrac{b}{2}
$$

e 

$$
\beta = \dfrac{\sqrt{|\Delta|}}{2}
$$

Logo, a solução geral da equação diferencial é da forma 

$$
x = e^{\alpha t}[A\cos{\beta t} + B\sin{\beta t}]
$$

com $A, B \in \mathbb{R}$.

</aside>

<aside>

<b>Demonstração</b> — Considere $f$ e $g$ funções $\mathbb{R} \to \mathbb{R}$ de forma que 

$$
f(t) = e^{-\dfrac{b}{2}t} g(t), \forall t \in \mathbb{R}
$$

Nosso objetivo inicial é mostrar que $f$ será solução se, e somente se, $g$ for solução de

$$
\dfrac{d^2x}{dt^2} + \left(\dfrac{-\Delta}{4}\right)x = 0 
$$

Por um lado, se $f$ for solução, deve valer 

$$
\dfrac{d^2f}{dt^2} + b\dfrac{df}{dt} + cf(t) = 0 
$$

isto é, 

$$
\left[e^{-\dfrac{b}{2}t} g(t)\right]'' + b\left[e^{-\dfrac{b}{2}t} g(t)\right]' + c\left[e^{-\dfrac{b}{2}t} g(t)\right] = 0
$$

Calculando estas derivadas e reorganizando os termos, obtemos: 

$$
e^{-\dfrac{b}{2}t}\left[g''(t)+\left(c-\dfrac{b^2}{4}\right)g(t)\right] = 0
$$

Como $\Delta = b^2 - 4ac$, segue que: 

$$
g''(t) + \left(\dfrac{-\Delta}{4}\right)g(t) = 0
$$

Consequentemente, mostramos que $g(t)$ é solução de $\dfrac{d^2x}{dt^2} + \left(-\dfrac{\Delta}{4}\right)x = 0$. A primeira via da equivalência está provada. Para demonstrar a via contrária, vamos ter como hipótese que $g(t)$ é solução desta equação diferencial.

Calculando $f'(t)$ e $f''(t)$ e substituindo os termos necessários na equação diferencial de segunda ordem, obtemos: 

$$
\left(\dfrac{b^2}{4}e^{-\dfrac{b}{2}t} g(t) - be^{-\dfrac{b}{2}t} g'(t) + e^{-\dfrac{b}{2}t} g'(t)\right) + b\left(e^{-\dfrac{b}{2}t}\left(-\dfrac{b}{2}g(t) + g'(t)\right)\right) + c\left(e^{-\dfrac{b}{2}t} g(t)\right) = 0
$$

que, após simplificações, se reduz à forma 

$$
e^{-\dfrac{b}{2}t}\left[\left(\dfrac{-\Delta}{4}\right)g(t) + g''(t)\right] = 0
$$

Como, por hipótese, 

$$
g''(t) + \left(\dfrac{-\Delta}{4}\right)g(t) = 0
$$

segue que a igualdade é verdadeira e, portanto, $f(t)$ é solução da equação diferencial de segunda ordem. A equivalência está provada. 

Finalmente, sendo $g(t)$ solução, esta é da forma 

$$
g(t) = A\cos{\beta t} + B \sin{\beta t}
$$

com $\beta = \sqrt{\dfrac{-\Delta}{4}}$. Consequentemente, 

$$
f(t) = e^{\alpha t}\left[A\cos{\beta t} + B \sin{\beta t}\right]
$$

com $\alpha = -\dfrac{b}{2}$. 

</aside>

<aside>

<b>Exemplo (Movimentos oscilatórios amortecidos)</b> — Considere uma partícula de massa $m$ deslocando-se ao longo do eixo $x$ sob a ação de uma força elástica $\vec{F_K} = -kx\hat{i}$, com $k \gt 0$ e de uma força de <b>amortecimento</b> proporcional à velocidade dada por $\vec{F_A} = -c\dfrac{dx}{dt}\hat{i}$, com $c \gt 0$. 

Pelo princípio fundamental da dinâmica, temos que 

$$
\begin{align*}
    m\dfrac{d^2x}{dt^2} = -kx - c\dfrac{dx}{dt} &\iff m\dfrac{d^x}{dt^2} + c\dfrac{dx}{dt} + kx = 0 \\ 
    &\iff \dfrac{d^2x}{dt^2} + 2\gamma\dfrac{dx}{dt} + \omega^2x = 0 
\end{align*}
$$

com $\gamma = \dfrac{c}{2m}$ e $\omega^2 = \dfrac{k}{m}$. Assim, as raízes da equação característica são da forma 

$$
\lambda = -\gamma \pm \sqrt{\gamma^2 - \omega^2}
$$

À partir da comparação entre $\gamma^2$ e $\omega^2$, podemos categorizar o movimento resultante em três variedades. 

Caso $\gamma^2 \lt \omega^2$, o movimento é dito <b>oscilatório amortecido</b> (ou <b>oscilatório subcrítico</b>). Como as raízes da equação característica são complexas nesse caso, possuindo a forma 

$$
\lambda = -\gamma \pm \bar{\omega}i
$$

com $\bar{\omega} = \sqrt{\omega^2 - \gamma^2}$, temos que a solução geral da equação do movimento será 

$$
x = e^{-\gamma t}\left[A\cos{\bar{\omega}t} + B\sin{\bar{\omega}t}\right]
$$

ou, então, 

$$
x = Ke^{-\gamma t} \cos{\bar{\omega}t - \phi}
$$

com $K = \sqrt{A^2 + B^2}$ e $\phi$ tal que $A = K\cos{\phi}$ e $B = K\sin{\phi}$. 

Caso $\gamma^2 = \omega^2$, o movimento recebe a denominação de <b>oscilatório de amortecimento crítico</b>, com a equação característica admitindo uma única raiz real, $\lambda = -\gamma$. Assim, a solução geral nesse caso será da forma 

$$
x = Ae^{-\gamma t} + Bte^{-\gamma t} = (A + Bt)e^{-\gamma t}
$$

Por fim, se $\gamma^2 \gt \omega^2$, o movimento é chamado de <b>amortecimento forte</b> ou <b>supercrítico</b>, com as raízes da equação característica sendo reais e distintas: 

$$
\lambda = -\gamma \pm \Omega
$$

com $\Omega = \sqrt{\gamma^2 - \omega^2}$. Dessa forma, a solução geral configura-se por: 

$$
x = e^{-\gamma t}(Ae^{\Omega t} + Be^{-\Omega t})
$$

![](https://upload.wikimedia.org/wikipedia/commons/f/f5/Oscillatory_motion_%28damped%29.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Acima temos uma animação dos gráficos característicos de movimentos oscilatórios amortecidos (azul), críticos (verde) e supercríticos (vermelho). Note que os amortecidos oscilam em torno da posição de equilíbrio até atingi-la, os críticos rapidamente a atingem e os supercríticos nem oscilam em torno da posição de equilíbrio, atingindo-a após de um tempo longo. GIF autoral, feito pelo Geogebra, disponibilizado <a href="https://commons.wikimedia.org/wiki/File:Oscillatory_motion_(damped).gif" target="_blank">aqui</a>.</i>

</aside>

## Equações diferenciais lineares, não-homogêneas, de 2ª ordem

Considere a seguinte equação diferencial, classificada como linear, de 2ª ordem e de coeficientes constantes. 

$$
\dfrac{d^2x}{dt^2} + b\dfrac{dx}{dt} + cx = f(t) 
$$

com $f(t): I \to \mathbb{R}$ contínua. Caso $f(t)$ não seja nula no seu domínio, esta equação é classificada como <b>não-homogênea</b>. Consequentemente, dizemos que a equação 

$$
\dfrac{d^2x}{dt^2} + b\dfrac{dx}{dt} + cx = 0
$$

é a <b>equação homogênea</b> associada a anterior. 

Nosso objetivo agora é mostrar que, caso $x_P = x_P(t), t \in I$ for uma solução particular desta equação não-homogênea, sua solução geral $x = x(t)$ será da forma 

$$
x = x_H + x_P
$$

com $x_h$ sendo a solução geral da equação homogênea associada. Para começarmos, considere $x_P$ conforme escrito anteriormente. Logo, deve valer que 

$$
\dfrac{d^2 x_P}{dt^2} + b\dfrac{dx_P}{dt} + cx_P = f(t)
$$

Suponha então uma solução qualquer desta mesma equação, $x = x(t)$. Como consequência, temos que $x(t) - x_P(t)$ é solução da homogênea associada, pois é válido que 

$$
\dfrac{d^2}{dt^2}[x(t) - x_P(t)] + b\dfrac{d}{dt}[x(t) - x_P(t)] + c[x(t) - x_P(t)] = \left[\dfrac{d^2 x}{dt^2} + b\dfrac{dx}{dt} + cx(t)\right] - \left[\dfrac{d^2x_P}{dt^2} + b\dfrac{dx_P}{dt} + cx_P\right] = f(t) - f(t) = 0
$$

Por outro lado, se $x = x(t), t \in I$ for tal que $x(t) - x_P(t)$ é solução da homogênea correspondente, $x = x(t)$ será solução da equação de segunda ordem. Isto pode ser demonstrado da seguinte maneira: 

$$
\begin{align*}
    \dfrac{d^2}{dt^2}[x(t) - x_P(t)] + b\dfrac{d}{dt}[x(t) - x_P(t)] + c[x(t) - x_P(t)] = 0 &\iff \dfrac{d^2x}{dt^2} - \dfrac{d^2x_P}{dt^2} + b\dfrac{dx}{dt} - b\dfrac{dx_P}{dt} + cx - cx_P = 0 \\ 
    &\iff \dfrac{d^2x}{dt^2} + b\dfrac{dx}{dt} + cx = \dfrac{d^2x_P}{dt^2} + b\dfrac{dx_P}{dt} + cx_P \\ 
    &\iff \dfrac{d^2x}{dt^2} + b\dfrac{dx}{dt} + cx = f(t)
\end{align*}
$$

Logo, $x(t)$ é solução da equação não-homogênea.

Por fim, a solução geral desta equação de segunda ordem, não-homogênea, é realmente da forma 

$$
x = x_H + x_P 
$$

com $x_H$ sendo a solução geral da homogênea correspondente e $x_P$ uma solução partícular da equação não-homogênea.

O problema principal agora está em como encontrar uma solução partícular $x_P$. Felizmente, algumas destas já foram tabeladas para alguns formatos de equações. Abaixo está reproduzida a tabela de GUIDORIZZI (2011).

| $f(t)$               | Solução partícular                                                                                                                                                                                                                                           |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| $a_0 e^{\alpha t}$   | Se $\alpha$ não é raíz da equação característica, $x_P = me^{\alpha t}$<br>Se $\alpha$ é raíz simples, $x_P = mte^{\alpha t}$<br>Se $\alpha$ é raíz dupla, $x_P = mt^2 e^{\alpha t}$                                                                         |
| $P(t)$               | Se $c \neq 0$, $x_P = P_1(t)$ onde $P_1(t)$ é um polinômio de mesmo grau que $P$<br>Se $c = 0$ e $b \neq 0$, $x_P = tP_1(t)$                                                                                                                                 |
| $a_0 \cos{\alpha t}$ | Se $b \neq 0$, $x_P = m\cos{\alpha t} + n\sin{\alpha t}$<br>Se $b = 0$ e se $\cos{\alpha t}$ não for solução da homogênea, $x_P = m\cos{\alpha t}$.<br>Se $b = 0$ e se $\cos{\alpha t}$ for solução da homogênea, $x_P = mt\cos{\alpha t} + nt\sin{\alpha t}$ |

Uma nota importante é que caso $f(t) = a_0 \sin{\alpha t}$, deve-se prosseguir pelo mesmo método da última linha da tabela.

<aside>

<b>Exemplo (princípio da superposição)</b> — Considere a equação diferencial a seguir. 

$$
\dfrac{d^2x}{dt^2} + b\dfrac{dx}{dt} + cx = f_1(t) + f_2(t)
$$

onde $f_1(t)$ e $f_2(t)$ são funções conhecidas, definidas e contínuas num mesmo intervalo $I \in \mathbb{R}$.

Temos, então, que se $x_1 = x_1(t), t \in I$ for uma solução particular de 

$$
\dfrac{d^2x}{dt^2} + b\dfrac{dx}{dt} + cx = f_1(t)
$$

e se $x_2 = x_2(t), t \in I$ for uma solução particular de 

$$
\dfrac{d^2x}{dt^2} + b\dfrac{dx}{dt} + cx = f_2(t)
$$

então $x_P = x_P(t) = x_1(t) + x_2(t)$ será uma solução particular da equação original. Para demonstrar isso, basta substituir as funções soluções e suas respectivas equações e somar estas. 

</aside>

# Referências

1. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed. vol. 1, reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC
2. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed. vol. 2, reimpr. Rio de Janeiro: LTC, 2011. 476 p. LTC