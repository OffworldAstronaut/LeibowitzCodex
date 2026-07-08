# Coordenadas polares

# Introdução 

Como discutido no manuscrito sobre <a href="/books/higher_education/math/analytical_geometry/the_plane_the_space.html" target="_blank">o plano e o espaço</a>, um sistema de coordenadas alternativo ao sistema usual (cartesiano) é o <b>sistema de coordenadas polares</b>. 

Nesse sistema, cada ponto do plano possui como coordenadas a distância $r$ até a origem e o ângulo $\theta$ que o segmento que liga o ponto à origem faz com a horizontal. O sistema polar é útil para a análise de problemas com simetria radial.

# Áreas 

O cálculo de áreas em coordenadas polares pode ser definida de forma semelhanbte ao processo regular da soma de Riemann em coordenadas cartesianas. 

Para isso, vamos imaginar uma função $\rho = \rho(\theta)$ contínua e não-negativa, definida no intervalo $[\theta_{i-1}, \theta_{i}]$. O análogo da "área sob a curva" do caso cartesiano para a nossa situação é a área $A_i$ formada por todos os pontos $(\theta, \rho)$ com $\theta \in [\theta_{i-1}, \theta_{i}]$ e $\rho \in [0, \rho(\theta)]$. 

Perceba então que a magnitude da área $A_i$ está entre as áreas dos setores circulares de abertura $\Delta \theta_{i} = \theta_{i-1} - \theta_{i}$ e de raios máximo e mínimo de $\rho(\theta)$. Ao fazemos $\Delta \theta_{i} \to 0$, as áreas dos setores converge para a integral 

$$
\dfrac{1}{2} \int_{\alpha}^{\beta} \rho^2 \ d\theta
$$

que é a nossa expressão para área.

# Comprimentos 

O processo para obter o comprimento de uma área em coordenadas polares também é muito similar ao caso usual. Um processo bem interessante é nos valer de ambos os sistemas coordenados para tal. 

Assim, considere uma curva $\rho(\theta)$ em coordenadas polares com $\theta \in [\alpha, \beta]$. Além disso, $\rho(\theta)$ é diferenciável com sua primeira derivada sendo contínua no intervalo $[\alpha, \beta]$ (isto é, $\rho(\theta)$ é de classe $C_1$). Essa curva paramétrica é dada pelo sistema 

$$
\begin{cases}
    x(\theta) = \rho(\theta) \cdot \cos{\theta} \\ 
    y(\theta) = \rho(\theta) \cdot \sin{\theta}
\end{cases}
$$

Pela fórmula para o <a href="/books/higher_education/math/calculus_two/solids_revolution.html" target="_blank">comprimento de uma curva paramétrica</a>, obtemos

$$
L(\rho) = \int_{\alpha}^{\beta} \sqrt{\left(\dfrac{dx}{d\theta}\right)^2 + \left(\dfrac{dy}{d\theta}\right)^2} \ d\theta
$$

Como 

$$
\left(\dfrac{dx}{d\theta}\right)^2 + \left(\dfrac{dy}{d\theta}\right)^2 = \rho^2 + \left(\dfrac{d\rho}{d\theta}\right)^2
$$

obtemos finalmente 

$$
L(\rho) = \int_{\alpha}^{\beta} \sqrt{\rho^2 + \left(\dfrac{d\rho}{d\theta}\right)^2} \ d\theta
$$

# Referências 

1. GUIDORIZZI, Hamilton Luiz. Um curso de cálculo. 5.ed., reimpr. Rio de Janeiro: LTC, 2011. 530 p. LTC