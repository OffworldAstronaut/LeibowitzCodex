# Calorimetria

# Introdução



Chamamos **calorimetria** a área da termologia preocupada em estudar as <a href="/books/high_school/physics/physics2/termology_fundaments.html">trocas de calor</a>, energia térmica, entre corpos. 

Podemos classificar o calor em duas categorias, segundo seus efeitos: o calor **sensível** — que provoca o aumento de temperatura — e o calor **latente**, que provoca mudança de estado físico.

# Capacidade térmica e calor específico



A **capacidade térmica $(\text C)$** é uma grandeza física que exprime a quantidade de calor necessária para provocar uma mudança de $\Delta \theta$ na temperatura de um corpo. Essa grandeza é geralmente expressa em unidades de $\text{cal} / \text{°C}$ ou em $\text{J} / \text{K}$. 

$$
C = \dfrac{Q}{\Delta \theta}
$$

Dessa forma, o **calor específico** $(\text c)$ pode ser compreendido como a quantidade de calor necessária para provocar uma mudança de $\Delta \theta$ na temperatura de uma quantidade fixa de uma substância. Ou seja, enquanto a capacidade térmica varia com o **corpo**, sendo uma propriedade **extensiva**, o calor específico é algo da própria **substância**, uma propriedade **intensiva**.

$$
c=\dfrac{C}{m}=\dfrac{Q}{m \cdot \Delta \theta}
$$

Perceba que, ao reorganizar essa expressão, é possível encontrar uma equação que relaciona a quantidade de calor necessária para provocar uma dada variação de temperatura num corpo. 

$$
\begin{align*}
Q &= m \cdot c \cdot \Delta \theta \\\\ &= C \cdot \Delta  \theta
\end{align*} 
$$

# Mudanças de fase e calor latente



A partir do momento em que um corpo atinge uma temperatura de **mudança de fase**, todo calor recebido a ou cedido por esse corpo não alterará sua temperatura, sendo assim classificado como **calor latente**. 

A razão da inalteração em sua temperatura vem do fenômeno de que essa energia cedida ou recebida está sendo utilizada para enfraquecer ou fortalecer as **ligações eletrostáticas** entre as partículas do corpo. 

Cada mudança de fase associada a uma substância possui uma constante relacionada, o **calor latente específico** $(L)$. Essa constante exprime a quantidade de calor necessária para que uma quantidade fixa de uma substância passe por aquela mudança de fase. Geralmente, é expressa em $\text{cal/g}$. 

Dessa forma, para soubermos a quantidade necessária de calor para que uma certa quantidade de substância mude de fase, podemos usar a expressão abaixo. 

$$
Q=mL
$$

# Trocas de calor



Baseado no **princípio das trocas de calor**, sabemos que os corpos tendem a trocar calor, fluindo do mais quente para o mais frio, até que seja atingido o equilíbrio térmico. Existem diferentes formas que essa troca pode acontecer, chamadas **formas de transmissão**.

## Condução, convecção e irradiação

Chamamos de **condução** a transmissão de energia térmica que ocorre pelo contato entre corpos. Dessa forma, ela é a predominante entre corpos sólidos. Um exemplo de transmissão por condução seria, por exemplo, de um ferro quente para uma roupa que está sendo passada.

O fundamento da condução está na natureza da energia térmica — a vibração das partículas — que, por ser cinética, consegue afetar as partículas de corpos vizinhos. 

A segunda maneira, a **convecção**, é típica dos fluidos, com a transmissão energética ocorrendo de forma conjunta com a transferência de material. Por exemplo, ao derramar café quente num copo de leite frio, as partículas do café se misturam com as de leite, transmitindo sua energia a medida que se movimentam na nova mistura. 

Por fim, a **irradiação** é efetuada por todos os corpos, com a característica notável de não precisar de nenhum material para ser transmitida. Na irradiação, a energia térmica é transmitida na forma de ondas eletromagnéticas, no infravermelho, que podem ser transmitidas inclusive no vácuo. 

O fundamento físico desse fenômeno está na própria natureza da **radiação** — energia liberada pela movimentação de cargas — e da temperatura, o movimento vibracional dos átomos (formados por **cargas**)

## Modelagem física

Em modelos simples de trocas de calor, vistos no ensino médio, podemos nos valer das expressões acima para responder algumas perguntas de cenários que podemos nos questionar, como nos exemplos abaixo. Perceba que nesses modelos estamos desprezando completamente as trocas de calor com o ambiente.

<aside>

**Exemplo 1:** Qual a quantidade de calor necessária para aquecer 200g de água $(c = 1 \text{cal/°C)}$ de 10 °C para 100 °C? 

Sabendo esses dados, podemos apenas substituir alguns dados e encontrar nossa grandeza desejada. 

$$
\begin{align*}
Q &= mc \cdot \Delta \theta \\\\ 
&= 200 \cdot 1 \cdot (100 - 10) \\\\ 
&= 200 \cdot 90 = 18.000 \text{ cal}
\end{align*}
$$

</aside>

<aside>

**Exemplo 2:** 140 gramas de gelo derreteram e a água resultante aqueceu 20 graus Celcius. Qual a quantidade de calor absorvida do ambiente? Considere que o calor latente específico de fusão da água é de $80 \text{ cal/g}$. 

Primeiramente, temos que encontrar a quantidade de calor absorvida pelo gelo para que ele derretesse por inteiro. Assim,

$$
\begin{align*}
Q &= mL \\\\ 
&= 140 \cdot 80 \\\\ 
&= 11.200 \text{ cal}
\end{align*}
$$

Dessa forma, 11.200 calorias são necessárias para derreter 140 gramas de gelo. Considerando agora o aumento da temperatura da água resultante, podemos escrever: 

$$
\begin{align*} 
Q &= mc \cdot \Delta \theta \\\\ 
&= 140 \cdot (20-0) \\\\ 
&= 140 \cdot 20 \\\\ 
&= 2.800 \text{ cal}
\end{align*}
$$

Assim, no total, temos que foram absorvidas 14.000 calorias do ambiente para que o gelo derretesse e a água esquentasse.

</aside>

<aside>

**Exemplo 3:** Ao misturarmos 200g de água a 100 °C, com 400g de água a 20 °C, qual a temperatura no equilíbrio térmico? 

Pelo princípio das trocas de calor, e da **conservação de energia**, sabemos que a quantidade de calor cedida pela água mais quente deve ser a mesma que a quantidade de calor recebida pela água mais fria. Assim, temos que: 

$$
Q_1 + Q_2 = 0
$$

Desenvolvendo essa relação, considerando o índice 1 como a água quente e 2 como a água fria: 

$$
\begin{align*}
    m_1 c_1 \cdot \Delta \theta_1 + m_2c_2 \cdot \Delta \theta_2 &= 0 \\\\
    200 \cdot \Delta \theta_1 + 400 \cdot \Delta \theta _2 &= 0 \\\\
    200(\theta_{1_f} - 100) + 400(\theta_{2_f} - 20) &= 0
\end{align*}
$$

Como estamos considerando o equilíbrio térmico, podemos assumir $\theta_{1_f} = \theta_{2_f} = \theta_f$. 

$$
\begin{align*}
    200(\theta_f - 100) + 400(\theta_f - 20) &= 0 \\\\
    2(\theta_f - 100) &= -4(\theta_f - 20) \\\\
    \theta_f - 100 &= -2 \theta_f + 40 \\\\
    3 \theta_f &= 140 \\\\
    \theta_f &= 46.\bar{6} \text{°C} \approx 46.7 \text{°C}
\end{align*}
$$

Ou seja, no equilíbrio térmico, a mistura terá a temperatura de aproximadamente, 46.7 °C.

</aside>