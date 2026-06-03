# Colisões

# Conceitos básicos



Definimos a <b>colisão</b> entre duas partículas como o processo de interação decorrente de uma ser lançada contra a outra. Durante esta interação, pode houver troca de energia e momento como consequência.

Com efeito, diferentes resultados podem emergir: duas partículas podem simplesmente interagir e mudar de direção (espalhamento), fundir-se em uma única partícula, quebrar-se em diversas partículas (fragmentação) ou ainda se tornarem partículas diferentes, como em reações químicas ou nucleares, por exemplo. 

Ao estudarmos colisões, usualmente dividimos o processo em três etapas. Inicialmente, as duas partículas possuem interação desprezível entre si, até entrarem numa região de interação por um tempo muito menor do que o tempo total de observação do sistema. Após essa interação rápida — a colisão — as duas partículas (ou o que vier após) interagem de forma desprezível pelo retstante do tempo considerado. Estes três estágios são, na ordem de acontecimento, a <b>configuração inicial</b>, a <b>configuração intermediária</b> e a <b>configuração final</b>. 

Na teoria das colisões, o problema mais fundamental é determinar a configuração final de um sistema a partir de sua configuração inicial. 

# Impulso 



Podemos motivar a definição de uma nova grandeza, o <b>impulso</b> ($\vec{I}$) associada a uma força $\vec{F}$ a partir do estudo de caso de uma colisão frontal entre duas esferas.
Note que, para este sistema, temos as seguintes equações de movimento

$$
\dfrac{d\vec{P_1}}{dt} = \vec{F_{12}} = -\vec{F_{21}} = -\dfrac{d\vec{P_2}}{dt}
$$

pois as forças $\vec{F_{12}}$ e $-\vec{F_{21}}$ formam um par ação-reação. Considerando que as forças atuam durante um curto intervalo $(t_i, t_f)$, podemos integrar ambos os membros obtendo

$$
\int_{t_i}^{t_f} \dfrac{d\vec{P_2}}{dt} \ dt = \int_{P_{1i}}^{P_{1f}} d\vec{P_1} = \vec{P_{1f}} - \vec{P_{1i}} = \Delta \vec{P_1} = \int_{t_i}^{t_f} F_{12} \ dt = - \int_{t_i}^{t_f} \vec{F_{21}} = -\Delta \vec{P_2}
$$

Assim, de forma geral, temos que para uma força $\vec{F}$ qualquer, a expressão 

$$
\int_{t_i}^{t_f} \vec{F} \ dt = \int_{t_i}^{t_f} \dfrac{d\vec{P}}{dt} \ dt = \int_{p_i}^{p_f} d \vec{P} = \vec{p_f} - \vec{p_i} = \Delta \vec{p} = \vec{I}
$$

fornece o <b>impulso</b> da força $\vec{F}$ durante o instante $(t_i, t_f)$, com esse resultado sendo denominado por <b>teorema do impulso-momento</b> ou simplesmente <b>teorema do impulso</b>.

# Colisões elásticas e inelásticas 

 

Chamamos colisões <b>elásticas</b> aquelas em que a energia cinética dos corpos é invariante durante o processo de colisão, isto é, os corpos possuem a mesma energia cinética antes e depois de colidirem. Qualquer outro cenário possui, portanto, dissipação de parte dessa energia (luz, calor, ...)  e é classificado como <b>inelástico</b>. 

## Colisões unidimensionais elásticas

O caso inicial mais simples que podemos estudar é a colisão frontal unidimensional e elástica entre duas partículas. Além disso, daqui em diante, consideraremos um sistema sem a atuação de forças externas e, portanto, cujo momento total é conservado ao longo do tempo. 

Dessa forma, valem as equações

$$
P_i = p_{1i} + p_{2i} = p_{1f} + p_{2f} = P_f
$$

e 

$$
T_i = \dfrac{p_{1i}^2}{2m_1} + \dfrac{p_{2i}^2}{2m_2} = \dfrac{p_{1f}^2}{2m_1} + \dfrac{p_{2f}^2}{2m_2} = T_f
$$

pois, por hipótese, toda a energia cinética do sistema se conserva ao longo do tempo. É importante ressaltar que escrever a energia cinética em função do momento, ao invés de explicitar as massas e as velocidades dos corpos, pode facilitar deduções e manipulações algébricas consideravelmente.

Para encontarmos a configuração final, basta resolvermos o sistema de equações encontradas, que possui duas equações e duas incógnitas e, portanto, solução única. Assim, reescrevendo as relações dadas nas formas 

$$
\begin{cases}
    p_{2f} - p_{2i} = p_{1i} - p_{1f} \\ 
    p_{2f}^2 - p_{2i}^2 = \lambda (p_{1i}^2 - p_{1f}^2) \\ 
    \lambda = \dfrac{m_2}{m_1}
\end{cases}
$$

e dividindo membro a membro a segunda equação pela primeira, obtemos 

$$
p_{2f} + p_{2i} = \lambda(p_{1i} + p_{1f})
$$

Pausando nossa demonstração, podemos reescrever essa expressão explicitando as massas e as velocidades das partículas para obter a relação 

$$
v_{2f} - v_{1f} = -(v_{2i} - v_{1i})
$$

que mostra uma característica interessante das colisões elásticas unidimensionais: a velocidade relativa entre as partículas se inverte após a colisão. 

Retornando ao nosos caminho, podemos resolver o sistema 

$$
\begin{cases}
    p_{2f} + p_{2i} = \lambda(p_{1i} + p_{1f}) \\ 
    p_{2f} - p_{2i} = p_{1i} - p_{1f}
\end{cases}
$$

para obter finalmente 

$$
\begin{cases}
    p_{1f} = \left(\dfrac{1 - \lambda}{1 + \lambda}\right)p_{1i} + \dfrac{2}{1 + \lambda}p_{2i} \\ 
    p_{2f} = \dfrac{2 \lambda}{1 + \lambda}p_{1i} - \left(\dfrac{1 - \lambda}{1 + \lambda}\right)p_{2i} 
\end{cases}
$$

cujas relações também podem ser escritas em função das massas e das velocidades. 

$$
\begin{cases}
    v_{1f} = \left(\dfrac{m_1 - m_2}{m_1 + m_2}\right)v_{1i} + \dfrac{2m_2}{m_1 + m_2}v_{2i} \\ 
    v_{2f} = \dfrac{2m_1}{m_1 + m_2}v_{1i} - \left(\dfrac{m_1 - m_2}{m_1 + m_2}\right)v_{2i}
\end{cases}
$$

Ainda pode ser interessante o estudo de dois casos particulares. No primeiro caso particular, teremos corpos de massas iguais, isto é, $m_1 = m_2 = m$. Substituindo esses dados nas equações acima, obtemos então

$$
\begin{cases}
    p_{1f} = p_{2i} \\ 
    p_{2f} = p_{1i}
\end{cases}
$$

e 

$$
\begin{cases}
    v_{1f} = v_{2i} \\ 
    v_{2f} = v_{1i}    
\end{cases}
$$

ou seja, as partículas trocam entre si seus momentos e suas velocidades. 

Um outro caso interessante é o de considerarmos uma partícula como um "alvo" em repouso. Esta situação ocorre quando $v_{2i} = p_{2i} = 0$, com sua análise tornando-se interessante ao considerarmos dois casos extremos. 

Quando $m_1 \ll m_2$, temos que 

$$
\begin{cases}
    v_{1f} \approx -v_{1i} \\ 
    v_{2f} \approx \dfrac{m_1}{m_2}v_{1i} \ll v_{1i}
\end{cases}
$$

isto é, quando um corpo muito leve colide com outro muito mais pesado, ele é ricocheteado, refletido, com a mesma velocidade para trás, enquanto o corpo alvo sofre um recuo mínimo para frente. Ao considerarmos o outro cenário extremo, quando $m_1 \gg m_2$, temos que $v_{1f} \approx v_{1i}$ e $v_{2f} \approx 2v_{1i}$: a partícula alvo é lançada para frente com o dobro da velocidade do projétil, enquanto este sofre uma alteração desprezível em sua velocidade. 

## Colisões unidimensionais perfeitamente inelásticas

As colisões perfeitamente inelásticas são o extremo oposto das condições elásticas: o máximo possível de energia cinética é dissipada durante o processo de colisão. É importante salientar que a <i>totalidade</i> de energia cinética não é perdida, com uma parte "residual" restante correspondendo à velocidade do centro de massa do sistema. 

A razão desta correspondência vem de uma de nossas suposições. Como o momento do sistema está sendo conservado, temos como consequência que o centro de massa deve estar em repouso ou em movimento retilíneo uniforme. Além disso, segue que neste estado pós-colisão não deve haver movimentos internos ao sistema, pois isso implicaria numa energia cinética maior, mas sim uma movimentação conjunta das partículas com o centro de massa. 

Dessa forma, com estas restrições, podemos concluir que, em colisões perfeitamente inelásticas, duas partículas de massa $m_1$ e $m_2$ e velocidades $v_{1i}$ e $v_{2i}$ tornam-se após a colisão uma só partícula de massa $m = m_1 + m_2$ e velocidade final $v_f$. 

Pela conservação de momento, obtemos 

$$
P_i = m_1v_{1i} + m_2v_{2i} = (m_1 + m_2)v_f = P_f
$$

e, portanto 

$$
v_f = \dfrac{m_1v_{1i}+m_2v_{2i}}{m_1+m_2} = v_{CM}
$$

## Colisões bidimensionais elásticas

É conveniente estudar colisões bidimensionais considerando um dos objetos como um alvo em repouso. Essa informação pode ser suposta sem perda de generalidade, pois basta escolher um referencial no corpo alvo. 

Dessa forma, temos que, na configuração inicial deste sistema, seu momento é 

$$
\vec{P_i} = \vec{p_{1i}} = m_1 \vec{v_{1i}}
$$

É interessante mencionar que apenas o momento da partícula alvo não é mais suficiente para caracterizar a condição inicial do sistema: é necessário um outro parâmetro, chamado <b>parâmetro de choque</b>. O parâmetro de choque é a distância da qual a partícula incidente (o projétil) passaria da outra caso não houvesse colisão.

Diferentes parâmetros de choque produzem diferentes resultados, entretanto, em nossos estudos, iremos desconsiderar essa nova grandeza, imaginando colisões apenas entre corpos pontuais. Assim, considerando $\vec{p_{1f}}$ e $\vec{p_{2f}}$ os momentos finais das partículas, o momento é conservado e, portanto, podemos escrever 

$$
\vec{P_f} = \vec{p_{1f}} + \vec{p_{2f}} = \vec{P_{1i}}
$$

Essa relação nos mostra que os vetores de momento das partículas são coplanares, com este plano sendo denominado <b>plano de colisão</b>. Caso adotemos neste plano um sistema de coordenadas com origem no ponto inicial do alvo e seu eixo $Ox$ paralelo ao vetor $\vec{p_{1i}}$, veremos que a configuração final é caracterizada por $||\vec{p_{1f}}|| = p_{1f}$ e $||\vec{p_{2f}}|| = p_{2f}$ além dos ângulos $\theta_1$ e $\theta_2$, que formam um triângulo no plano de colisão. 

Deste triângulo, podemos nos utilizar de trigonometria para obter as relações 

$$
\begin{cases}
    p_{1f} \cos{\theta_1} + p_{2f} \cos{\theta_2} = p_{1i} \\ 
    p_{1f} \sin{\theta_1} - p_{2f} \sin{\theta_2} = 0
\end{cases}
$$

Além disso, como a energia cinética é conservada, por hipótese, temos que 

$$
\dfrac{p_{1i}^2}{2m_1} = \dfrac{p_{1f}^2}{2m_1} + \dfrac{p_{2f}^2}{2m_2}
$$

Note que neste nosso problema temos três equações e quatro incógnitas e, portanto, não poderemos determinar a condição final do sistema sem adicionar mais alguma restrição. Sem considerar o parâmetro de choque, isto pode ser feito ao fixarmos o valor de alguma das variáveis, como algum dos ângulos $\theta_1$ e $\theta_2$, chamados <b>ângulos de deflexão</b>. 

Continuando a análise desse cenário, podemos pensar no caso particular quando os corpos possuem massas iguais.

$$
p_{1i}^2 = p_{1f}^2 + p_{2f}^2
$$

Por outro lado, elevando a primeira equação desta seção ao quadrado, obtemos

$$
p_{1i}^2 = p_{1f}^2 + p_{2f}^2 + 2(\vec{p_{1f}} \cdot \vec{p_{2f}})
$$

Assim, comparando as duas equações, vemos que $\vec{p_{1f}} \cdot \vec{p_{2f}} = 0$ e, portanto, $\theta_1 = \theta_2 = \dfrac{\pi}{2}$.

Indo para um caso mais geral, considerando massas distintas, é possível escrever

$$
p_{2f}^2 = \lambda(p_{1i}^2 - p_{1f}^2)
$$

com $\lambda = \dfrac{m_1}{m_2}$, como definido anteriormente. Por outro lado, podemos escrever 

$$
p_{2f}^2 = p_{1i}^2 + p_{1f}^2 - p_{1i}p_{1f} \cos{\theta_1}
$$

Igualando ambas as expressões, obtemos 

$$
(1 + \lambda)p_{1f}^2 - 2p_{1i}\cos{\theta_1}p_{1f} + (1 - \lambda)p_{1i}^2 = 0 
$$

Observe que caso definirmos um valor para $\theta_1$, teremos uma equação do segundo grau cuja incógnita é $p_{1f}$. Como precisamos que as raízes sejam reais para que o resultado tenha sentido físico, temos que 

$$
4p_{1i}^2 [\cos^2{\theta_1} - (1 - \lambda^2)] \ge 0 \implies \cos^2 \theta_1 - 1 + \lambda^2 \ge 0 \implies \lambda^2 - \sin^2{\theta_1} \ge 0
$$

Assim, as raízes desta equação são da forma 

$$
p_{1f} = \dfrac{p_{1i}}{1 + \lambda}\left[\cos{\theta_1} \pm \sqrt{\cos^2{\theta_1 - (1 - \lambda^2)}}\right]
$$

com $pi_{1f} \ge 0$ sempre. Uma raíz negativa também não possui sentido físico. 

Caso $m_2 \gt m_1$, temos que esta equação é sempre satisfeita para todo $\theta_1 \in [0, \pi]$: quando o alvo é mais massivo que o projétil, este pode ricochetear para todos os ângulos entre 0 e $\pi$. Quando $m_1 \gt m_2$, temos que 

$$
\sin{\theta_1} \le \sin{\theta_{1_\text{max}}} = \lambda = \dfrac{m_2}{m_1} \lt 1
$$

Ou seja, há um ângulo máximo de deflexão que uma partícula pesada pode sofrer ao colidir com uma partícula leve.

## Colisões bidimensionais inelásticas

<aside>

<i>A partir daqui o manuscrito possui ainda muitos danos. Parece ser prudente esperar mais um pouco para que os copistas terminem sua restauração. Que tal retornar para <a href="/public/bookshelves.html">as estantes</a> e consultar outro material?</i>

</aside>

# Referências 

 

1. <i>Playlist</i> de Física 1 da USP formada por aulas do prof. Dr. Marcelo Martinelli (<a target="_blank" href="https://www.youtube.com/playlist?list=PLAudUnJeNg4vmlyuv__uBgdOkzw4VSrcJ">Acesse aqui</a>).
2. NUSSENZVEIG, Herch Moysés. Curso de física básica, v. 1: mecânica. 5. ed. São Paulo: Blucher, 2013