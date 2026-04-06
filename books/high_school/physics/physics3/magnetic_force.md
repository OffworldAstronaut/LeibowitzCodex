# Força magnética

# Lorentz

---

Quando uma carga elétrica é submetida a um campo magnético, ela sofre influência da chamada **força de Lorentz**, nomeada em homenagem ao grande físico neerlandês **Hendrik Lorentz**. 

Essa força é sempre **ortogonal** tanto a velocidade da carga quanto ao campo magnético.

## Abordagem matemática

Podemos explorar mais essa força por meio de duas abordagens matemáticas, uma considerando um caso mais simples, com um **campo magnético uniforme**, e uma outra mais complexa, se utilizando de **álgebra linear** para demonstrar a diferença de direção gerada pela força de Lorentz. 

### Maneira simplificada


Considerando um caso mais simples, podemos expressar a força de Lorentz, em módulo, como sendo 

$$
F = Bqv \sin \theta
$$

Onde $\theta$ é o **ângulo** entre a **velocidade da partícula** (como vetor) e o **campo magnético** que ela está submetida. 

Dessa equação podemos extrair que quando uma carga se move de forma paralela ao campo, a força é nula, enquanto ao se mover de forma perpendicular, a força atuante sobre ela é **máxima**. 

Por meio da regra da mão direita, podemos saber que, quando $q < 0$, a carga sobre uma força para “fora” (no nosso ponto de vista), enquanto uma carga positiva sofre uma força para “dentro”. 

### Maneira complexa

De forma mais complexa, podemos nos utilizar de álgebra linear para considerar a equação da força de Lorentz de forma vetorial: 

$$
\bf{F} = q(\bf{E} + \bf{v} \times \bf{B})
$$

Assim, escolhendo os vetores velocidade $(\bf{v})$, campo elétrico $(\bf{E})$ e campo magnético $(\bf{B})$, podemos encontrar o vetor da força de Lorentz e ver que ele não muda a magnitude do vetor velocidade, apenas a sua direção. 

## Trajetórias

Um efeito interessante da força de Lorentz em partículas carregadas é a sua mudança de trajetória. 

Se uma carga estiver se movendo de forma perpendicular ao campo magnético, ela entra em uma trajetória de movimento circular uniforme, assim, podemos tirar que: 

$$
F_B=F_C \Rightarrow Bqv \sin \theta = \frac{mv^2}{R}
$$

$$
R=\frac{mv}{qB}
$$

ainda podemos extrair uma expressão matemática para o **período** do movimento

$$
T=\frac{2\pi m}{qB}
$$

Se a carga estiver se movendo de forma oblíqua em relação ao campo magnético, teremos uma [**trajetória helicoidal**](https://www.youtube.com/watch?v=a2_wUDBl-g8), com cada “passo” (projeção horizontal de uma volta da hélice) medindo uma distância de $Tv \cos \theta$. 

![Perceba!](https://upload.wikimedia.org/wikipedia/commons/c/cf/Lorentz_force_on_charged_particles_in_bubble_chamber_-_HD.6D.635_%2812000265314%29.svg)

<i>Ação da Força de Lorentz sobre partículas carregadas. Perceba as trajetórias helicoidais. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Lorentz_force_on_charged_particles_in_bubble_chamber_-_HD.6D.635_(12000265314).svg" target="_blank">Wikimedia Commons</a>.</i>

# Sobre um fio

---

Se tivermos um fio sob efeito de um campo magnético com corrente elétrica passando em seu interior, teremos que a força magnética que age no fio tem intensidade de 

$$
F=BiL\sin \theta
$$

Onde $\theta$ é o ângulo entre o **fio e o campo magnético**. 

# Entre fios

---

Quando temos dois fios retilíneos percorridos por correntes elétricas, saberemos que: 

1. Condutores percorridos por correntes de **mesmo sentido** se **atraem**
2. Condutores percorridos por correntes de **sentido oposto** se **repelem**

Por fim, o módulo da força pode ser calculado pela expressão 

$$
F = \dfrac{\mu I_1 I_2 L}{2 \pi d}
$$

com $L$ sendo o comprimento dos fios interagentes, $I_n$ suas correntes, $\mu$ a permissividade do espaço e $d$ a distância entre eles. 