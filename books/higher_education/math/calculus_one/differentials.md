# Diferenciais 

# Diferenciais

A interpretação geométrica da derivada permite o estudo do Cálculo sob a ótica dos chamados <b>diferenciais</b>, incluindo a interpretação da notação $\dfrac{dy}{dx}$ como um quociente. 

Para melhor ilustrar e facilitar nosso entendimento desse conceito, vamos considerar a função $y = f(x) = x^2 + 3x$. Podemos relacionar os incrementos $\Delta y$ e $\Delta x$ por meio da equação 

$$
\Delta y = f(x + \Delta x) = \Delta x(2x+3) + (\Delta x)^2 
$$

Note que, quando fazemos $\Delta x \to 0$, o termo $(\Delta x)^2$ torna-se desprezível. Com efeito, para qualquer função $f(x)$, o incremento $\Delta y$ é da forma 

$$
\Delta y = m\Delta x + q(\Delta x)
$$

com $q(\Delta x)$ sendo uma função composta de termos quadráticos e de ordens superiores, que se tornam desprezíveis quando fazemos o incremento em $x$ tender para zero. O termo linear que resta, $m Delta x$, é chamado <b>diferencial de $y$</b> ou <b>diferencial de $f$ em $x$</b>. Denotamos esse termo por $dy$ ou $df$. Quando $\Delta x \to 0$, representamos esse termo por $dx$. 

De fato, temos que o coeficiente $m$ da equação linear é $f'(x)$, a derivada da função $f$. Logo, isso motiva a escrita 

$$
dy = f'(x) \cdot dx \iff \dfrac{dy}{dx}=f'(x)
$$

O ato de tomar incrementos finitos e analisar sua razão para escalas infinitesimais é a clásica interpretação geométrica da derivada num ponto, com uma reta secante se tornando a reta tangente.

# Regras de derivação

De forma bem interessante, é possível escrever as conhecidas regras de derivação na notação de diferenciais.    

<aside>

Sejam $f$ e $g$ funções definidas em um intervalo fechado $[a, b]$ possuindo diferenciais em um $x \in [a,b]$. Logo, $f + g$, $f-g$, $fg$ e $f/g$ possuem diferenciais nesse mesmo $x$, valendo

$$
\begin{align*}
    
\end{align*}
$$

</aside>


# Referências 

1. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC
2. KAPLAN, Wilfred; LEWIS, Donald J. Cálculo e Álgebra Linear. v. 1. Rio de Janeiro: Livros Técnicos e Científicos, 1972