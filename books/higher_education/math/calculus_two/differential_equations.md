# Equações diferenciais

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

com $g: I_1 \to \mathbb{R}$ e $\h: I_2 \to \mathbb{R}$. Além disso, $g$ e $h'$ são contínuas em seus respectivos domínios. Logo, se $x = x(t), t \in I$ for solução não-constante da equação diferencial dada, então $h(x(t)) \neq 0, \forall t \in I$.

</aside>

Suponha, então, que $g$ e $h$ satisfaçam as condições impostas neste teorema. COmo poderemos encontrar essas soluções não-constantes? Para isso, imagine uma função $x = x(t)$ solução da equação diferenciam em foco.

Sabemos que 

$$
x'(t) = g(t)h(x(t)) \iff \dfrac{x'(t)}{h(x(t))} = g(t)
$$

Assim, imagine um intervalo $J = \left{x(t), t \in I \right}$. Como $h(x) \neq 0$, temos que para todo $x$ em $J$ a função $\dfrac{1}{h(x)}$ é contínua neste intervalo e, consequentemente, admite primitiva. Logo, podemos definir uma função $H(x)$ de forma que 

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
\dfrac{d^2 x}{dt^2} + b \dfrac{dx}{dt} + cx = 0 \iff \dfrac{d^2 x}{dt^2} - (\lambda_1 + \lambda_2)\dfrac{dx}{dt} + \lamda_1 \lambda_2 = 0 
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
    &\iff -A\omega^2 \cos{\omega t} - B\omega^2 \sin{\omega t} + A\omega^2 \cos{\omega t} + B\omega^2 \sin{\omega t} = 0 
    &\iff 0 = 0
\end{align*}
$$

Logo, toda função $x(t)$ formada pela combinação linear entre as funções $\cos{\omega t}$ e $\sin{\omega t}$, com $\omega \in \mathbb{R}$ e não-nulo, é uma solução da equação diferencial $\dfrac{d^2x}{dt^2} + \omega^2 x = 0$.

</aside>

# Referências

1. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC