# Dinâmica de corpos rígidos

# Momento angular de um sistema de várias partículas

No <a href="/books/higher_education/physics/physics_one/rotations.html" target="_blank">volume anterior</a> consideramos em nossos resultados apenas corpos pontuais, porém, para análise de sistemas mais complexos torna-se necessária a análise de sistemas formados por várias partículas. 

Inicialmente, podemos verificar que, para um sistema de $N$ partículas de massa, posições e velocidades $m_i$, $\vec{r_i}(t)$ e $\vec{v_i}(t)$, o momento angular $\vec{L}$ em relação ao referencial $O$ é da forma 

$$
\vec{L} = \sum_{i = 1}^N \vec{r_i} \times \vec{p_i} = \sum_{i=1}^N m_i\vec{r_i} \times \vec{v_i}
$$

Tomando como referencial o centro de massa $CM$ do sistema — de posição $\vec{R}$ e velocidade $\vec{V}$ —, obtemos inicialmente que, sendo $\vec{r_i}'$ e $\vec{v_i}'$ os vetores posição e velocidade da i-ésima partícula em relação ao $CM$, temos 

$$
\begin{align*}
    \vec{r_i} = \vec{r_i}' + \vec{R} &\implies \sum_{i = 1}^N m_i \vec{r_i}' = 0 \\ 
    \vec{v_i} = \vec{v_i}' + \vec{V} &\implies \sum_{i = 1}^N m_i \vec{v_i}' = \sum_{i = 1}^N \vec{p_i}' = 0 \\ 
    \vec{P} &= M\vec{V}
\end{align*}
$$

Isto é, a soma de todas as posições das partículas em relação ao centro de massa é nula; o momento total em relação ao centro de massa é nulo (todas as partículas se movem em conjunto) e, por fim, que o momento $\vec{P}$ do centro de massa é dado pelo produto entre a massa total do sistema e a velocidade do $CM$.

Substituindo essas relações na expressão para $\vec{L}$, vista anteriormente, obtemos 

$$
\vec{L} = \sum_{i=1}^N m_i(\vec{r_i}' + \vec{R})(\vec{v_i}' + \vec{V}) = \sum_{i=1}^N m_i \vec{r_i}' \times \vec{v_i}' + \vec{R} \times \left(\sum_{i=1}^N m_i \vec{v_i}'\right) + \left(\sum_{i=1}^N m_i \vec{r_i}'\right) \times \vec{V} + \sum_{i=1}^N m_i \vec{R} \times \vec{V}
$$

Como 

$$
\sum_{i=1}^N m_i \vec{v_i}' = \sum_{i=1}^N m_i \vec{r_i}' = 0
$$

podemos simplificar a expressão para obter finalmente a relação 

$$
\vec{L} = \vec{L}' + \vec{R} \times \vec{P}
$$

onde 

$$
\vec{L}' = \sum_{i=1}^N m_i\vec{r_i}' \times \vec{v_i}' = \sum_{i=1}^N \vec{r_i}' \times \vec{p_i}' 
$$

é o momento angular do sistema em relação ao centro de massa é $\vec{R} \times \vec{P}$ é o momento angular do $CM$ em relação ao referencial $O$.

Em questões de nomenclatura, identifica-se também $\vec{L}'$ como o <b>momento angular interno</b> do sistema, enquanto $\vec{R} \times \vec{P}$ é o seu <b>momento angular externo</b>. $\vec{L}$, então, seria o <b>momento angular total</b> do sistema.

# Princípio Fundamental da Dinâmica para rotações

Do <a href="/books/higher_education/physics/physics_one/newtons_laws.html" target="_blank">Princípio Fundamental da Dinâmica</a> (2ª Lei de Newton) é possível deduzir um princípio análogo para os movimentos de revolução, válido tanto para referenciais inerciais como não-inerciais.

$$
\dfrac{d\vec{L}}{dt} = \vec{\tau}_{\text{ext}}
$$

Isto é, a taxa de variação do momento angular de um sistema em relação a um referencial $O$ é o torque resultante sobre este sistema. Uma consequência imediata segue para torque resultante nulo: a conservação do momento angular ao longo do tempo.

# Referências

1. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 1: mecânica. 5. ed. São Paulo: Blucher, 2013