# Origens da física moderna

# Introdução

<div class="wiki-thumb">

![](https://upload.wikimedia.org/wikipedia/commons/b/b1/Max_Planck_c1910_crop.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Max Ludwig Planck, alemão, foi uma das mentes pioneiras da chamada 'velha teoria quântica', em oposição à física quântica contemporânea. Imagem sob domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Max_Planck_c1910_crop.jpg" target="_blank">Wikimedia Commons</a>.</i>

</div>

No início do século XIX um profundo otimismo científico preenchia os ares mundiais em razão do sucesso das teorias físicas propostas até então: a mecânica newtoniana (aprimorada por Lagrange e Hamilton), a termodinâmica (contando com nomes como Carnot, Joule e Gibbs) e o eletromagnetismo clássico (Maxwell).

Entretanto, problemas e descobertas como a radiação de corpo negro e a radioatividade estilhaçaram a ilusão que a ciência estava próxima de seu estado "completo". 

Toda a física desenvolvida antes da hipótese da quantização de energia proposta por Planck e a relatividade especial de Einstein é classificada como <i>física clássica</i> ou <i>teoria clássica da física</i>. Por outro lado, toda a física posterior a estes monumentais desenvolvimentos recebe o nome de <i>física moderna</i>.

Neste manuscrito nos preocuparemos em dar um tratamento histórico das descobertas e problemas que motivaram o nascimento da era da física da qual hoje fazemos parte. 

# Luz

A natureza da luz foi tópico de debate científico por um tempo considerável. Duas teorias contraditórias por fim dominaram a Academia: a <b>teoria corpuscular</b>, que propunha a luz como uma coleção de partículas, e a <b>teoria ondulatória</b>, que propunha a luz como uma onda. Enquanto a primeira teve como seu primeiro promotor pós-Renascimento Isaac Newton, a segunda contou com desenvolvimentos realizados por Huygens e, posteriormente, Young e Fresnel. 

![](https://upload.wikimedia.org/wikipedia/commons/c/c2/Single_slit_and_double_slit2.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Um dos experimentos mais conhecidos da teoria ondulatória da luz é o da fenda dupla de Young. Durante a era quântica, foi mostrado que partículas como elétrons também exibem o mesmo comportamento. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Single_slit_and_double_slit2.jpg" target="_blank">Wikimedia Commons</a>.</i>

Os experimentos de Young e Fresnel produziram pesadas evidências em favor da teoria ondulatória da luz, motivando a sua descrição eletromagnética precisa por Maxwell através de seu famoso conjunto de <a href="/books/higher_education/math/calculus_two/differential_equations.html" target="_blank">equações diferenciais</a>. Este embate, entretanto, acrescido de mais alguns experimentos, motivou a categorização da luz em algo especial: sua natureza seria uma espécie de dualidade onda-matéria. Essa constatação floresceu através da teoria quântica, que será tratada nesta série de tomos. 

![](https://upload.wikimedia.org/wikipedia/commons/9/99/EM-Wave.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Representação de uma onda eletromagnética. Animação sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:EM-Wave.gif" target="_blank">Wikimedia Commons</a>.</i>

# Corpo negro

Definimos o <b>corpo negro</b> como um corpo ideal capaz de absorver toda radiação sobre ele incidente. Consequentemente, este é um absorvedor e um emissor perfeito. Embora seja inexistente em nossa realidade, este modelo é uma boa aproximação para as estrelas e, consequentemente, é empregado constantemente na astrofísica. 

Experimentalmente, um corpo negro foi aproximado por uma cavidade isotérmica com uma abertura que permite a entrada e a saída de radiação. Qualquer radiação penetrante possui uma taxa muito alta de absorção e, consequentemente, a uma dada temperatura absoluta $T$ (isto é, mensurada em Kelvin), sua radiação emitida aproxima-se suficientemente de um corpo negro.

Descrita experimentalmente em 1879 por Josef Stefan (1835-1893) e deduzida teoricamente por Ludwig Boltzmann (1844-1906) em 1884, a lei de Stefan-Boltzmann é uma lei empírico-termodinâmica para a emitância espectral de um corpo negro. 

$$
E(T) = \sigma T^4
$$

Nesta relação, $\sigma = 5.670 \cdot 10^{-8} \text{ Wm}^{-2}\text{K}^{-4}$ é a constante de Stefan e $T$ a temperatura do corpo negro, em Kelvin. 

Lumer e Prinsgheim realizaram medições da emitência espectral em diferentes $T$ e observaram que apra cada temperatura há um comprimento de onda $\lambda_\text{máx}$ de emitância máxima, motivando a lei de Wien. 

![](https://upload.wikimedia.org/wikipedia/commons/5/58/Practicalplanckerp.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Um exemplo para o chamado deslocamento de Wien (a mudança do comprimento de onda dominante em função da temperatura) é a cor de uma lâmpada fluorescente. Diferentes lâmpadas possuem diferentes cores para diferentes temperaturas. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Practicalplanckerp.jpg" target="_blank">Wikimedia Commons</a>.</i>

A lei de Wien é uma relação produzida pelo físico alemão Wilhelm Wien (1864-1928) que relaciona este comprimento de onda de emitância máxima e a temperatura do corpo negro. 

$$
\lambda_\text{máx} T = b 
$$

Nesta relação, $b = 2.898 \cdot 10^{-3} \text{mK}$ é a constante de Wien. Deste ponto em diante é conveniente a introdução de uma nova grandeza: a densidade de energia por unidade de volume da radiação emitida a uma dada temperatura $T$, com comprimento de onda no intervalo $[\lambda, \lambda + d\lambda]$. A esta grandeza denotamos por $\rho(\lambda, T)d\lambda$ e a relacionamos com a emitância espectral por: 

$$
\rho(\lambda, T) = \dfrac{4}{c}E(\lambda, T)
$$

Um ano antes de apresentar sua lei (ou seja, em 1893), Wien demonstrou que a função $rho(\lambda, T)$ pode ser escrita da forma 

$$
\rho(\lambda, T) = \dfrac{\phi(\lambda T)}{\lambda^5}
$$

com $\phi(\lambda T)$ uma função monovariável do produto entre o comprimento de onda e a temperatura absoluta. 

John William Strutt, o Lorde Rayleigh (1842-1919), tentou encontrar uma expressão analítica para $\phi(\lambda T)$ através do eletromagnetismo e da termodinâmica conhecida até então. Considerando as paredes da cavidade como completamente opacas, obteve a seguinte expressão, adequada para $\lambda \to \infty$: 

$$
\rho(\lambda, T) = \dfrac{8\pi}{\lambda^4}
$$

Como essa expressão diverge para frequências elevadas, Paul Ehrenfest (1880-1933) designou este problema como <b>catástrofe ultravioleta</b>.

![](https://upload.wikimedia.org/wikipedia/commons/f/f2/PlanckWienRayleigh_linear_150dpi_de.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Espectros de emissão das propostas de Planck (preta, correta), Wien (vermelha) e Rayleigh-Jeans (azul). Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:PlanckWienRayleigh_linear_150dpi_de.png" target="_blank">Wikimedia Commons</a>.</i>

Pouco tempo depois, em 1900, Max Planck (1858-1947) introduziu uma hipótese revolucionária para sua época e solucionou o problema da lei de Rayleigh-Jeans que originou a catástrofe ultravioleta. Planck supôs inicialmente que a energia absorvida ou emitida pelo corpo negro não o seria de forma contínua, mas sim em pequenos pacotes discretos denotados <i>quanta</i> (no singular, <i>quantum</i>). A palavra utilizada por Planck é de origem latina, sendo a flexão neutra de <i>quantus</i> ("Quanto [de algo]").

![](https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/BlackbodySpectrum_lin_150dpi_de.png/960px-BlackbodySpectrum_lin_150dpi_de.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail)

<i>Espectro de emissão de Planck para o corpo negro, concordando com os valores obtidos experimentalmente. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:BlackbodySpectrum_lin_150dpi_de.png" target="_blank">Wikimedia Commons</a>.</i>

Dessa forma, um quantum de energia é dado por $\varepsilon = h\nu$, com $h = 6.62607015 \cdot 10^{-34} \text{ J.s}$ sendo uma constante de proporcionalidade, a <b>constante de Planck</b>, e $\nu$ a frequência da radiação considerada. Essa relação é conhecida por <b>lei de Planck</b>. Fazendo essas considerações, uma nova distribuição espectral é obtida, a distribuição espectral de Planck: 

$$
\rho(\lambda, T) = \dfrac{8\pi hc }{\lambda^5}\dfrac{1}{e^{\frac{hc}{\lambda k T}} - 1}
$$

Perceba que esta expressão concorda para $\lambda \to \infty$ com a lei de Rayleigh-Jeans e elimina a catástrofe para $\lambda \to 0$, em razão do rápido crescimento do termo exponencial. Tomando a condição que $\rho(\lambda, T)$ possui valor máximo, obtemos: 

$$
\lambda_\text{máx} T = \dfrac{hc}{5k} = b 
$$

Uma expressão para o deslocamento de Wien. Como $b$, $c$ e $k$ já eram constantes bem determinadas experimentalmente na época, Planck conseguiu deduzir um valor para $h$ de forma precisa. 

# Calor específico dos sólidos

# Referências 

1. WOLNEY FILHO, Waldemar. <i>Mecânica Quântica</i>. 2. ed. rev. ampl. — Goiânia: Editora UFG, 2014. 