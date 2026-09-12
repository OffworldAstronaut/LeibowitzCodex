# Elasticidade

# Introdução

Durante todos os manuscritos de Physica I, especialmente no estudo de rotações, uma característica fundamental de nosso corpo analisado permanece constante: este é <b>rígido</b>. 

Conforme mencionado nestes mesmos manuscritos, esta é uma aproximação suficiente para a maioria dos sólidos de nosso cotidiano, entretanto, seria possível um estudo, mesmo que introdutório, da <b>elasticidade</b>? 

Como campo de estudo, podemos definir a <b>elasticidade</b> como o ramo da Física e da Engenharia cujo objeto de pesquisa é a deformação dos corpos quando estes são submetidos a forças, isto é, a <b>tensões</b>. Para uma abordagem mais detalhada sobre tensões, convém a consulta do documento <a href="/books/higher_education/physics/physics_two/hydrostatics.html"><i>De Hydrostatica</i></a>.

# Calculando deformações

Uma aproximação razoável para o regime elástico de corpos sólidos é aquela em que a deformação produzida por uma tensão é diretamente proporcional a esta. Essas duas grandezas são relacionadas por uma constante própria de cada material. 

Assim, a equação geral para as seguintes tensões é da forma: 

$$
\tau = \mu \delta 
$$

onde $\tau$ é o valor da tensão (mensurado em $\text{N/m}^2$, isto é, pascais), $\mu$ é o <b>módulo de elasticicidade</b> do material (também mensurado em pascais) e $\delta$ é a deformação do material, uma proporção adimensional. 

Para tensões de tração e compressão, escrevemos: 

$$
\tau = \dfrac{F}{A} = \mu_T \left(\dfrac{\Delta L}{L_0}\right)
$$

$F$ é a magnitude da força aplicada sobre a área $A$, $\mu$ é o chamado <b>módulo de Young</b> e o termo $\dfrac{\Delta L}{L_0}$ indica a deformação da amostra: $L_0$ é seu comprimento original, enquanto $\Delta L$ é a variação deste. 

No caso de cisalhamentos, escrevemos: 

$$
\tau = \dfrac{F}{A} = \mu_C \left(\dfrac{\Delta x}{L}\right)
$$

Enquanto $F$ é aplicada paralelamente à área $A$, o sólido se deforma lateralmente por um comprimento $\Delta x$, formando um triângulo retângulo imaginário de catetos $L$ (o comprimento vertical original) e $\Delta x$. A deformação também pode ser indicada pelo ângulo $\theta$, de forma que 

$$
\theta = \tan^{-1}\left(\dfrac{\Delta x}{L}\right)
$$

Por fim, $\mu_C$ é chamado <b>módulo de cisalhamento</b>. 

No caso de um corpo submerso num fluido, sua deformação é dada pela expressão: 

$$
\tau = p = \mu_V \left(\dfrac{\Delta V}{V_0}\right)
$$

onde $p$ é a pressão exercida pelo fluido, $\mu_V$ é o chamado <b>módulo de elasticidade volumétrica</b>, $\Delta V$ é a variação de volume do corpo submetido à pressão $p$ e $V_0$ é seu volume original.

# Exercícios 

## Problemas

<aside>

<b>Problema 1.</b> Uma força de módulo $F$ é aplicada no eixo de uma roda (de massa $M$) que está na iminência de subir um degrau de altura $h$, de modo que esta permanece em equilíbrio estático. A partir do diagrama da situação, exposto abaixo, deduza uma expressão para $F$ com base em $M$, $g$, $r$ e $h$. 

![](/books/higher_education/physics/physics_one/drawing.svg)

</aside>

<aside>

## Soluções

<b>Solução 1.</b> Como um rolamento infinitesimal pode ser modelado como uma rotação em torno do ponto de contato, precisaremos encontrar o torque exercido na roda em relação a este ponto. 

Dessa forma, temos que o torque exercido pelo peso possui módulo $r_p \cdot Mg$, enquanto a força $\vec{F}$ exerce um torque de módulo $r_F \cdot F$. Estes resultados são obtidos através da definição de torque (cf. <a href="/books/higher_education/physics/physics_one/rotations.html" target="_blank">Rotações</a>). 

Por trigonometria, temos que $r_F = r - h$ e $r_p = \sqrt{h(2r-h)}$. Logo, substituindo na expressão para os torques e considerando que estes possuem mesmo módulo: 

$$
Mg \sqrt{h(2r-h)} = F(r-h) \implies F = \dfrac{Mg\sqrt{h(2r-h)}}{r-h}
$$

</aside>

# Referências

1. Anotações autorais das aulas de Física II, ministradas pelo prof. Dr. Pedro Valentim dos Santos (IF-UFAL), 2026
2. HALLIDAY, D.; RESNICK, R.; WALKER, J. Fundamentos de física, v. 1: mecânica. 10. ed. Rio de Janeiro: LTC, 2016;