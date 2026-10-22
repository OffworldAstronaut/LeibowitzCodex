# Oscilações II 

# Oscilações amortecidas 

Podemos introduzir como motivação para o estudo das chamadas <i>oscilações amortecidas</i> a constatação de que sistemas conservativos são impossíveis na realidade: sempre haverá dissipação energética. Num pêndulo, esta dissipação surge da resistência do ar. Num fluido em oscilação, de sua própria viscosidade. 

![](https://upload.wikimedia.org/wikipedia/commons/2/27/Damped_Spring_Simulation.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Animação comparando as oscilações de um sistema massa-mola não-amortecido (preto) e amortecido (azul). GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Damped_Spring_Simulation.gif" target="_blank">Wikimedia Commons</a>.</i>

Ao modelarmos forças dissipativas, é razoável adotar um termo linear de dissipação energética (isto é, proporcional à velocidade do móvel) para pequenos valores de $\dot{x}$, que corresponde às pequenas oscilações que estão dentro do escopo da física básica.

Assim, para um oscilador unidimensional, a equação de movimento assume a forma 

$$
m\ddot{x} = -kx - \rho \dot{x}
$$

com $-\rho \dot{x}$ (e $\rho \gt 0$) modelando essa resistência dissipativa. Dividindo ambos os membros por $m$, obtemos

$$
\ddot{x} + \gamma \dot{x} + \omega_0^2 x = 0
$$

com $\omega_0^2 = \dfrac{k}{m}$ e $\gamma = \dfrac{\rho}{m}$. Note que esta é uma <a href="/books/higher_education/math/calculus_two/differential_equations.html" target="_blank">equação diferencial linear homogênea de segunda ordem e coeficientes constantes</a>.

Sua equação característica é 

$$
p^2 + \gamma p + \omega_0^2 = 0
$$

cujas raízes são $p_\pm = -\dfrac{\gamma}{2} \pm \sqrt{\dfrac{\gamma^2}{4} - \omega_0^2}$. 

Caso $\dfrac{1}{2}\gamma \lt \omega_0$, o amortecimento é chamado <i>subcrítico</i>. Inicialmente este será nosso principal cenário de análise.

Como há uma raiz quadrada cujo radicando é negativo, podemos reescrever a equação da forma 

$$
\begin{align*}
    p_\pm &= -\dfrac{1}{2}\gamma \pm i\omega \\ 
    \omega &= \sqrt{\omega_0^2 - \dfrac{\gamma^2}{4}}
\end{align*}
$$

Para possibilitar a adaptação de nossa solução às condições iniciais, precisamos de uma solução com constantes reais arbitrárias. Assim, tomando a combinação linear das soluções da equação característica, temos para o amortecimento subcrítico:

$$
z(t) = \exp\left(-\dfrac{1}{2}\gamma t\right) (ae^{i\omega t} + be^{-i\omega t})
$$

Tomando a parte real, obtemos: 

$$
x(t) = \exp\left(-\dfrac{1}{2}\gamma t\right)[a\cos{(\omega t)} + b\sin{(\omega t)}]
$$

Esta é a equação geral para as oscilações amortecidas, análoga a $x(t) = a\cos{(\omega t)} + b\sin{(\omega t)}$ deduzida para o oscilador harmônico (cf. <a href="/books/higher_education/physics/physics_two/oscillations.html" target="_blank">Oscilações I</a>).[^1]

Alternativamente, podemos empregar a notação complexa, tomar a parte real e simplificar, obtendo

$$
x(t) = A\exp\left(-\dfrac{1}{2}\gamma t\right) \cos{(\omega t+ \phi)}
$$

cujas constantes arbitrárias são $A$ e $\phi$. Esta forma é apenas válida para o amortecimento subcrítico.

Para ajustar a solução geral às condições iniciais, basta encontrar 

$$
\dot{x}(t) = -\dfrac{1}{2}\gamma x(t) + \exp\left(-\dfrac{1}{2}\gamma t\right) [-\omega a \sin{(\omega t) + \omega b\cos{(\omega t)}}]
$$

e, consequentemente, teremos as condições iniciais: 

$$
\begin{cases}
    x(0) = x_0 = a \\ 
    \dot{x}(0) = v_0 = -\dfrac{1}{2}\gamma a + \omega b 
\end{cases}
\implies 
b = \dfrac{1}{\omega}\left(v_0 + \dfrac{1}{2}\gamma x_0\right)
$$

Por fim, dadas essas novas quantias, podemos reescrever a equação de movimento de uma forma alternativa: 

$$
x(t) = \exp\left(-\dfrac{1}{2}\gamma t\right)\left[x_0\cos{(\omega t)} + \left(\dfrac{v_0}{\omega} + \dfrac{\gamma x_0}{2\omega}\right)\sin{(\omega t)}\right]
$$

## Amortecimento subcrítico

Nesta subseção e nas próximas iremos realizar análises um pouco mais detalhadas dos cenários de amortecimento, dando continuidade inicialmente ao amortecimento subcrítico (quando $\dfrac{1}{2}\gamma \lt \omega_0$). 

Um oscilador em regime de amortecimento subcrítico obedece à equação de movimento 

$$
x(t) = A\exp\left(-\dfrac{1}{2}\gamma t\right)\cos(\omega t + \phi)
$$

com o termo $A\exp\left(-\dfrac{1}{2}\gamma t\right)$ podendo ser considerado a amplitude (lentamente variável) do movimento para amortecimentos fracos, isto é, na aproximação em que $\gamma \ll \omega_0$. 

Além disso, as curvas $\pm A\exp\left(-\dfrac{1}{2}\gamma t\right)$ definem o chamado <b>envoltório</b> das oscilações. 

![](/books/higher_education/physics/physics_two/images/oscillations_underdamped.gif)

<i>Oscilações sob amortecimento subcrítico. Note o "envelope" tracejado.</i>

Mesmo que as oscilações não sejam mais peródicas, por uma certa conveniência (e falta de opção) é mantida a denominação "período" para o intervalo $\tau = \dfrac{2\pi}{\omega}$. 

Num ponto de vista energético, é possível mostrar que para o caso de um oscilador fracamente amortecido, sua energia mecânica $E(t)$ decai exponencialmente ao longo do tempo. 

Vamos começar do início.

É conhecido que a energia mecânica do oscilador no instante $t$ é

$$
E(t) = \dfrac{1}{2}m\dot{x}(t)^2 + \dfrac{1}{2}kx(t)^2
$$

Como esta grandeza não é mais conservada, podemos agora determinar sua taxa (não-nula) de variação:

$$
\dfrac{dE}{dt} = m\dot{x}\ddot{x} + kx\dot{x} = \dot{x}(m\ddot{x} + kx)
$$

Esta, no nosso caso, é equivalente (pela equação de movimento original) à equação:

$$
\dfrac{dE}{dt} = -\rho\dot{x}^2 = -m\gamma\dot{x}^2 
$$

A taxa de variação energética instanânea é propocional ao quadrado da velocidade! 

Substituindo na equação de energia os valores de $x(t)$ e $\dot{x}(t)$ previamente deduzidos, obtemos: 

$$
E(t) = \dfrac{1}{2}mA^2 e^{-\gamma t} \left[\left(\omega_0^2 + \dfrac{\gamma^2}{4}\right)\cos^2{(\omega t+\phi)} + \omega^2 \sin^2{(\omega t + \phi) + \dfrac{1}{2}\gamma \omega \sin{[2(\omega t + \phi)]}}\right]
$$

Tomando $\omega \ll \omega_0$, vemos que o fator $e^{-\gamma t}$ irá variar muito pouco ao longo do movimento de oscilação. Logo, poderemos tratá-lo como uma constante no raciocínio que se segue. 

Como podemos encontrar o valor médio da energia mecânica durante um período? O cálculo do valor médio é conveniente pois elimina a preocupação com as oscilações (de fato, o valor real de $E(t)$ sempre oscilará em torno do valor médio). Podemos definir essa grandeza pela integral 

$$
\bar{E}(t) = \dfrac{1}{\tau}\int_{t}^{t+\tau} E(t_*) dt_*
$$

Retirando o fator exponencial do interior da integral e fazendo as substituições

$$
\begin{cases}
    \overline{\cos^2{\omega t + \phi}} + \overline{\sin^2{\omega t + \phi}} = \dfrac{1}{2} \\ 
    \overline{\sin[2(\omega t + \phi)]} = 0
\end{cases}
$$

chegamos em $\bar{E}(t) = \dfrac{1}{2}m\omega_0^2A^2e^{-\gamma t} = \bar{E}(0) \cdot e^{-\gamma t}$, que indica um decaimento exponencial da energia do oscilador ao longo do tempo, como queríamos demonstrar.

![](/books/higher_education/physics/physics_two/images/energia_oscilador_underdamped.png)

<i>Energia mecânica de um oscilador amortecido subcriticamente ao longo do tempo. A curva vermelha é a energia mecânica média $\bar{E}(t)$, enquanto a curva pontilhada azul é a energia real $E(t)$.</i>

Como indicativa de um decaimento exponencial, é importante explicitar que $\bar{E}(t)$ é solução da equação diferencial 

$$
\dfrac{d\bar{E}}{dt} = -\gamma \bar{E}
$$

Para caracterizar este comportamento, podemos definir o chamado <b>tempo de decaimento</b> $\tau_d$, o tempo necessário para que a grandeza se reduza a $1/e$ de seu valor inicial[^2].

Isto é, vale: 

$$
\bar{E}(\tau_d) = \dfrac{1}{e}\bar{E}(0)
$$

Esta grandeza é apenas uma das utilizadas na análise de um decrescimento exponencial, com a outra utilizada sendo a <b>meia-vida</b>.

Definimos a meia-vida $\tau_m$ como o tempo necessário para que uma grandeza reduza-se a metade de seu valor.

Consequentemente, é possível escrever a relação entre o tempo de decaimento, a constante $\gamma$ de decaimento e a meia-vida:

$$
\tau_m = \dfrac{\ln(2)}{\gamma} = \tau_d \ln(2)
$$

Uma outra grandeza interessante para a análise do movimento submetido ao amortecimento subcrítico é o <b>fator de mérito</b>, também chamado "fator $Q$".

A origem dessa grandeza está na análise da dissipação da energia por ciclo de oscilação, que pelos desenvolvimentos anteriores pode ser deduzida como:

$$
\Delta \bar{E} = -\tau\left(\dfrac{d\bar{E}}{dt}\right) = \gamma \tau\bar{E}
$$

Nesta equação $\bar{E}$ é a energia mecânica no oscilador no instante $t$ considerado. Perceba que esta equação é o resultado da integração no intervalo $[t, t + \tau]$. 

Assim, o fator de mérito é definido como a razão (multiplicada por $2\pi$) entre a quantidade de energia presente no oscilador num dado instante $t$ e a quantidade de energia dissipada por ciclo de oscilação. 

$$
Q = 2\pi \left(\dfrac{\bar{E}}{\Delta \bar{E}}\right) = \dfrac{2\pi}{\gamma \tau} = \dfrac{\omega_0}{\gamma}
$$

Além de facilitar o tratamento matemático, o fator $2\pi$ introduz a interpretação de que $Q$ quantifica o número de ciclos para dissipar toda a energia do oscilador a partir de um tempo $t$. 

Dessa forma, quanto maior $Q$, menor o amortecimento por oscilação. Comparando com a equação para o decaimento exponencial da energia, ainda é possível escrever: 

$$
Q = 2\pi\left(\dfrac{\tau_d}{\tau}\right)
$$

## Amortecimento supercrítico

Para o caso do amortecimento supercrítico, isto é, quando $\dfrac{1}{2}\gamma \gt \omega_0$, podemos utilizar diretamente as raízes da equação característica (pois não há raiz com radicandos negativos) e produzir a solução geral 

$$
x(t) = \exp\left(-\dfrac{1}{2}\gamma t\right) (ae^{\beta t} + be^{-\beta t})
$$

com $\beta = \sqrt{\dfrac{\gamma^2}{4} - \omega_0^2}$. Consequentemente, temos: 

$$
x(t) = a \exp\left[-\left(\dfrac{1}{2}\gamma - \beta\right)t\right] + b\exp\left[-\left(\dfrac{1}{2}\gamma + \beta\right)t\right]
$$

Perceba que ambas as exponenciais são decrescentes. Note ainda que como a segunda exponencial decai mais rapidamente, a tempos longos o decaimento segue a forma da primeira e o movimento perde sua periodicidade.

## Amortecimento crítico

Finalmente, quando o amortecimento é considerado como crítico, isto é, quando $\dfrac{1}{2} = \omega_0$, as parcelas independentes da solução geral colapsam em

$$
x(t) = \exp\left(-\dfrac{1}{2}\gamma t\right)(a + bt)
$$

que decai mais rapidamente que o decaimento supercrítico. De fato, um amortecimento crítico retorna o sistema à posição de equilíbrio no menor intervalo de tempo comparado com outros amortecimentos. Consequentemente, este é amplamente utilizado em aparelhos de precisão, como balanças.

![](https://upload.wikimedia.org/wikipedia/commons/f/f5/Oscillatory_motion_%28damped%29.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Acima temos uma animação dos gráficos característicos de movimentos oscilatórios amortecidos (azul), críticos (verde) e supercríticos (vermelho). Note que os amortecidos oscilam em torno da posição de equilíbrio até atingi-la, os críticos rapidamente a atingem e os supercríticos nem oscilam em torno da posição de equilíbrio, atingindo-a após de um tempo longo. GIF autoral, feito pelo Geogebra, disponibilizado <a href="https://commons.wikimedia.org/wiki/File:Oscillatory_motion_(damped).gif" target="_blank">aqui</a>.</i>

# Oscilações forçadas



# Referências 

1. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 2: Fluidos; oscilações e ondas; calor. 4. ed. rev. São Paulo: Blucher, 2002

[^1]: A razão para o emprego do caso subcrítico vem da utilização de números complexos: como estes contém os Reais, é possível uma solução mais geral que abarca todos os cenários de amortecimento, isto é, a escolha do caso subcrítico não provoca perda de generalidade.

[^2]: A definição para esta grandeza torna-se mais natural ao considerarmos uma variável discreta: $\tau_d$ é o tempo médio de permanência de um elemento num conjunto caso caso sua quantidade de elementos esteja sujeita a um decaimento exponencial.