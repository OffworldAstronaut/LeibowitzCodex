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

A hipótese de Planck, inicialmente pensada por ele como um artifício matemático consolidou-se ao longo do tempo pelo seu sucesso em explicar outros fenômenos, como demonstrado por Einstein na análise do calor específico dos sólidos. 


<div class="wiki-thumb">

![](https://upload.wikimedia.org/wikipedia/commons/2/23/Thermally_Agitated_Molecule.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Modelo de uma molécula cujos átomos estão vibrando em razão de sua temperatura. GIF sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Thermally_Agitated_Molecule.gif" target="_blank">Wikimedia Commons</a>.</i>

</div>

Em um sólido, os átomos oscilam naturalmente em torno de suas posições de equilíbrio e, portanto, é razoável modelá-los como osciladores harmônicos tridimensionais. Estas oscilações harmônicas terão uma energia média $\varepsilon_m = 3kT$ e, consequentemente, a energia por átomo-grama será $U = 3N_A kT$, com $N_A = 6.02 \cdot 10^{23}$ átomos por mol (número de Avogadro). 
Por essa abordagem clássica podemos verificar que o calor específico de um sólido (com volume constante) é 

$$
c_V = \dfrac{\partial U}{\partial T} = 3N_A k = 3R
$$

com $R = 8.314 \text{ JK}^{-1} \text{mol}^{-1}$ a constante universal dos gases. Este resultado é válido para temperaturas elevadas mas progressivamente impreciso em baixas temperaturas: foi verificado experimentalmente qeu $c_V \to 0$ quando $T \to 0$. Einstein postulou então que as oscilações atômicas só poderiam ocorrer em níveis discretos, isto é, quqe a energia média $\varepsilon_m$ associada a cada grau de liberdade pudesse assumir apenas valores discretos $\varepsilon = nh\nu$. 

Dessas considerações conseguiu-se explicar teoricamente a constatação experimental. 

# Efeito fotoelétrico 

Efeito fotoelétrico é o nome dado ao fenômeno de emissão de elétrons de metais (especialmente os metais alcalinos) ao sofrerem incidência de luz: os elétrons absorvem energia suficiente para serem arrancados do metal. Este fenômeno foi descoberto por Heinrich Hertz (1857-1894) em 1887, com Lenard verificando a produção de corrente elétrica experimentalmente em 1900.

![](https://upload.wikimedia.org/wikipedia/commons/7/72/Nuclear_Medicine_6-2.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Animação ilustrando a ejeção de um elétron de um átomo pela incidência de um raio gama. Domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Nuclear_Medicine_6-2.gif" target="_blank">Wikimedia Commons</a>.</i>

Impossível de ser explicado pela teoria clássica da física, sua análise teórica também foi realizada por Einstein em 1905 (seu <i>annus mirabilis</i>). Einstein propôs que a absorção da luz de frequência $\nu$ pelos elétrons do metal ocorre em pacotes discretos de energia (isto é, <i>quanta</i>) de magnitude $h \nu$.[^1] 

Caso $h\nu \gt W$, com $W$ sendo a energia necessária para arrancar um elétron do material — e, portanto, própria de cada material —, a energia cinética máxima que um elétron ejetado poderia assumir é

$$
E_\text{máx} = h\nu - W 
$$

Esta e outras constatações não possuem explicação na teoria clássica, como a dependência da intensidade da corrente elétrica gerada em relação à frequência da luz, mas não em relação a sua intensidade. De fato, foi verificado que a emissão de elétrons ocorre quase instantaneamente mesmo sob luz muito fraca, enquanto a teoria clássica previa um tempo médio de 100 segundos pós-estímulo. 

Esta proposta corpuscular de Einstein evidenciou ainda mais o embate entre as teorias adversárias sobre a natureza da luz naquele ano.

# Efeito Compton 

<div class="wiki-thumb">

![](https://upload.wikimedia.org/wikipedia/commons/c/c0/Arthur_Compton_1927.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Arthur Holly Compton em fotografia de 1927, ano que recebeu o Nobel de física. Imagem sob domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Arthur_Compton_1927.jpg" target="_blank">Wikimedia Commons</a>.</i>

</div>

Denominamos efeito Compton, em homenagem ao físico americano Arthur Compton (1892-1962), a mudança do comprimento de onda dos raios-X espalhados por um feixe de elétrons. Embora fosse conhecida a natureza ondulatória dos raios-X desde sua descoberta por Wilhelm Röntgen (1845-1923) e as fotografias de Max von Laue (1879-1960) da estrutura de cristais, a explicação deste fenômeno só foi possível pela hipótese (levantada por Compton) que raios-X de comprimento $\lambda$ eram quanta de energia 

$$
E = \dfrac{hc}{\lambda}
$$

Isto é, que os raios-X também eram sujeitos à nova versão da teoria corpuscular da luz, proposta por Einstein.

![](https://upload.wikimedia.org/wikipedia/commons/4/4a/Compton_Effect.gif?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Um raio gama sofrendo espalhamento ao interagir com um elétron de valência. Animação sob domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Compton_Effect.gif" target="_blank">Wikimedia Commons</a>.</i>

No pensamento de Compton, a colisão desses corpúsculos com elétrons livres provocavam um recúo destes elétrons, deixando o raio-X espalhado com uma energia $E' \lt E$ e, consequentemente, com uma frequência $\nu' \lt \nu$ e, portanto, um comprimento de onda $\lambda' \gt \lambda$. 

Dessas considerações, seria possível o cálculo de $\Delta \lambda = \lambda' - \lambda$ pelas leis de conservação de momento e energia.

<aside>

<b>Problema</b> — 

</aside>

<aside>

<b>Solução</b> —

</aside>

Pouco tempo depois, o próprio Compton e seus colaboradores verificaram experimentalmente a validade dessa relação. 

![](https://upload.wikimedia.org/wikipedia/commons/5/5c/Compton_scattering-de.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Diagrama do efeito Compton. A onda eletromagnética espalhada é espalhada com um ângulo $\phi$ e comprimento de onda maior. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Compton_scattering-de.svg" target="_blank">Wikimedia Commons</a>.</i>

Quando $\theta = \dfrac{\pi}{2}$, isto é, 90°, temos 

$$
\Delta \lambda = \lambda_C = \dfrac{h}{m_0 c}
$$

o chamado <i>comprimento de onda de Compton</i>. Esta é uma grandeza característica de cada partícula que provoca o espalhamento: para o elétron, vale $\lambda_C = 2.426 \cdot 10^{-12} \text{ m}$. 

# Postulados de Bohr

<div class="wiki-thumb">

![](https://upload.wikimedia.org/wikipedia/commons/4/4b/Niels_Bohr_-_LOC_-_ggbain_-_35303.jpg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Niels Bohr em fotografia de aproximadamente 1910. O físico dinamarquês receptor do prêmio nobel de 1922 foi orientando de doutorado de Ernest Rutherford, também nobelista. Imagem sob domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Niels_Bohr_-_LOC_-_ggbain_-_35303.jpg" target="_blank">Wikimedia Commons</a>.</i>

</div>

Enquanto o modelo atômico de Rutherford descarta qualquer possibilidade do eletromagnetismo clássico de explicar a estrutura atômica, os desenvolvimentos de seu orientando Niels Bohr (1885-1962) solidificavam o modelo atômico na nascente teoria quântica, em detrimento do eletromagnetismo conhecido até então. 

São os seguintes os postulados para o átomo publicados por Bohr em 1913:

<aside>

<b>1º Postulado de Bohr (discretização da energia)</b> — Os átomos não podem possuir um nível energético contínuo e arbitrário, conforme estipulado classicamente, mas sim apenas certos níveis de energia são permitidos ao sistema próton(s)-elétron(s). Nesses estados, nenhuma radiação eletromagnética é emitida.

</aside>

<aside>

<b>2º Postulado de Bohr (frequência de emissão)</b> — Radiação eletromagnética é emitida apenas quando o átomo assume um estado de energia $E_n$ ao sair de um estado de energia $E_m$, com $E_n \lt E_m$. A frequência dessa emissão será: 

$$
\nu = \dfrac{\Delta E}{h} = \dfrac{E_m - E_n}{h}
$$

</aside>

<div class="wiki-thumb">

![](https://upload.wikimedia.org/wikipedia/commons/9/93/Bohr_atom_model.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>O modelo atômico de Bohr foi uma evolução do modelo de Rutherford, adaptando-o com base na hipótese da quantização da energia. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Bohr_atom_model.svg" target="_blank">Wikimedia Commons</a>.</i>

</div>

Enquanto o primeiro postulado estende os <i>quanta</i> de Planck para o universo atômico, o segundo aproveita a ideia de Einstein da relação entre energia e frequência. 

A consequência desses dois postulados é a explicação das linhas espectrais dos átomos, bastante conhecidas experimentalmente com os trabalhos de Johannes Rydberg (1854-1919) e Walter Ritz (1878-1909). Após a sua publicação, estes postulados foram verificados experimentalmente por James Franck (1882-1964) e Gustav Hertz (1887-1975) — sobrinho de Heinrich Hertz — lhes rendendo o prêmio Nobel de física de 1925.

![](https://upload.wikimedia.org/wikipedia/commons/5/52/Emission_spectrum-Fe.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original)

<i>Espectro de emissão do átomo de ferro. Nota-se que caso um único átomo estivesse presente, apenas uma linha seria observada por vez. A presença de diversos átomos em diversos estados energéticos permite a visualização de diversas linhas de emissão ao mesmo tempo. Imagem sob domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Emission_spectrum-Fe.svg" target="_blank">Wikimedia Commons</a>.</i>

# Teoria de Bohr

# Referências 

1. WOLNEY FILHO, Waldemar. <i>Mecânica Quântica</i>. 2. ed. rev. ampl. — Goiânia: Editora UFG, 2014. 
2. Britannica Editors. <i>Photoeletric Effect</i>. Encyclopedia Britannica, 24 de setembro de 2026. (<a href="https://www.britannica.com/science/photoelectric-effect" target="_blank">Acesse aqui</a>)

[^1]: Consequentemente, temos aqui a criação de uma nova teoria corpuscular da luz. Segundo Einstein, a luz seria formada de pequenas partículas — fótons — que permitiriam a interação luz-matéria.