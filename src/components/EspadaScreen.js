import React from 'react'
import { Aquila } from './armasComponents/espadaComponents/Aquila'
import { Cortador } from './armasComponents/espadaComponents/Cortador'
import { Descenso } from './armasComponents/espadaComponents/Descenso'
import { EspadaFavonius } from './armasComponents/espadaComponents/EspadaFavonius'
import { EspadaSacrificio } from './armasComponents/espadaComponents/EspadaSacrificio'
import { Espina } from './armasComponents/espadaComponents/Espina'
import { Flauta } from './armasComponents/espadaComponents/Flauta'
import { Hoja } from './armasComponents/espadaComponents/Hoja'
import { Negra } from './armasComponents/espadaComponents/Negra'
import { PenascoOscuro } from './armasComponents/espadaComponents/PenascoOscuro'
import { Rencor } from './armasComponents/espadaComponents/Rencor'
import { Rompemontanas } from './armasComponents/espadaComponents/Rompemontanas'
import { Rugido } from './armasComponents/espadaComponents/Rugido'
import { Deseo } from './armasComponents/espadaComponents/Deseo'
import { Destello } from './armasComponents/espadaComponents/Destello'
import { Footer } from './Footer'
import { Header } from './Header'
import { NavbarUi } from './NavbarUi'

import { Agata } from './armasComponents/catalizadorComponents/Agata'
import { RealLarga } from './armasComponents/espadaComponents/RealLarga'

export const EspadaScreen = () => {
	return (
		<>
			<Header />
			<NavbarUi />
				<h1 className="armasScreen-title animate__animated animate__fadeIn">
					Espadas
				</h1>
				<div className="artefactosScreen__tip animate__animated animate__fadeIn">
					<p>
						Solo se muestran las armas 5⭐y 4⭐
						ya que son estas son las que mayor potencial tienen 
						y las que se usan en las builds más poderosas.
						(Recuerda que los valores de los efectos de las armas aumentan
						cuando las refinas)
					</p>
				</div>

			<div className="artefactosScreen__container animate__animated animate__fadeIn">
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Aquila/> 
						</section>
						<section>
						⭐⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
						Bono Daño Físico
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Aumenta el ATQ en un 20%. Al recibir daño, se activa el alma del Halcón del Oeste, izando el estandarte de la resistencia, la cual regenera Vida equivalente al 100% del ATQ, y hace daño equivalente al 200% del ATQ a los enemigos cercanos. Este efecto solo puede ocurrir una vez cada 15 s.						</p>
					</section>
					</div>
				</div>

				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Cortador/> 
						</section>
						<section>
						⭐⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Probabilidads de Crítico
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Aumenta la Vida en un 20%. Además, el personaje que lleve esta arma equipada obtendrá un 1.2% de Bono de ATQ en proporción a su Vida Máx.		
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Deseo/> 
						</section>
						<section>
						⭐⭐⭐⭐
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Recarga de Energía
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Aumenta el daño de la habilidad elemental un 16% y la probabilidad crítica de la habilidad elemental un 6%.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Destello/> 
						</section>
						<section>
						⭐⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Maestría Elemental
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Aumenta en un 12% el daño infligido. Al recibir daño, este aumento de daño perderá su efecto durante 5 segundos.
						</p>
					</section>
					</div>
				</div>
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Descenso/> 
						</section>
						<section>
						⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Ataque
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Golpear a los enemigos con Ataques Normales y Cargados otorga un 50% de probabilidad de infligir 200% de ATQ como Daño de Área pequeña. Este efecto solo puede ocurrir una vez cada 10 s. Además, si el Viajero equipa la Espada del Descenso, su ATQ aumenta en 66 pts.						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<PenascoOscuro/> 
						</section>
						<section>
						⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Daño Crítico
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Al derrotar a un enemigo, aumenta el ATQ en 12% durante 30s, pudiéndose acumular hasta 3 veces. La duración de cada acumulación es independiente.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Negra/> 
						</section>
						<section>
						⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Probabilidad de Crítico
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Aumenta el daño de ATQ Normal y ATQ Cargado en un 20%; además, al hacer CRIT con Ataque Normal o Ataque Cargado, recuperas vida equivalente al 60% del ATQ. Este efecto puede activarse una vez cada 5s.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<RealLarga/> 
						</section>
						<section>
						⭐⭐⭐⭐
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Ataque
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Al dañar a un enemigo, aumenta la Prob. CRIT en un 8%. Puede acumularse hasta 5 veces. Una vez asestado un golpe CRIT, las acumulaciones de Concentración se reiniciarán.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<EspadaFavonius/> 
						</section>
						<section>
						⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Recarga de Energía
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Los Golpes CRIT tienen un 60% probabilidad de generar una pequeña cantidad de Partículas Elementales, que regenerán 6 de Energía para el personaje. Solo puede ocurrir una vez cada 12 s.
						</p>
					</section>
					</div>
				</div>

								
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<EspadaSacrificio/> 
						</section>
						<section>
						⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Recarga de Energía
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Al hacer daño por medio de una Habilidad Elemental, hay un 40% de probabilidad de restablecer el TdE de esta habilidad. Este efecto puede activarse una vez cada 30 s.
						</p>
					</section>
					</div>
				</div>

								
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Agata/> 
						</section>
						<section>
						⭐⭐⭐⭐
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Ataque
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Golpear a los enemigos con Ataques Normales y Cargados otorga un 50% de probabilidad de infligir 200% de ATQ como Daño de Área pequeña. Este efecto solo puede ocurrir una vez cada 10 s. Además, si el Viajero equipa la Espada del Descenso, su ATQ aumenta en 66 pts
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Espina/> 
						</section>
						<section>
						⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Maestría Elemental
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Después de 6s de causar Daño Elemental, aumenta todo el Daño un 6%. Este efecto puede acumularse hasta 2 veces y puede activarse una vez cada 1s.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Flauta/> 
						</section>
						<section>
						⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Ataque
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Al golpear, los ATQ Normales o Cargados obtendrán un Armónico. 5 Armónicos activan el poder de la música, que inflige un 100% de Daño ATQ a los oponentes de alrededor. Los Armónicos duran hasta 30 segundos, y se puede 1 Armónico cada 0.5 s.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Hoja/> 
						</section>
						<section>
						⭐⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Recarga de Energía
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Aumenta la Probabilidad Crítica en un 4%. Al lanzar una Habilidad Definitiva, obtienes la fuerza perforacielos, que aumenta la Velocidad de Movimiento y la Velocidad de Ataque en un 10%, y los Ataques Normales y Cargados infligen un daño adicional equivalente al 20% del Ataque. Este efecto dura 12 segundos.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Rencor/> 
						</section>
						<section>
						⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Bono Daño Físico
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Al golpear, los Ataques Normales o Cargados aumentan el ATQ y DEF en 4% durante 6 s. Máximo 4 acumulaciones. Puede ocurrir una vez cada 0.3 s.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Rompemontanas/> 
						</section>
						<section>
						⭐⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Ataque
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Aumenta en un 20% la Protección de Escudo. Tras atacar a un enemigo, el ATQ aumenta en un 4% durante 8 s. Este efecto puede acumularse hasta 5 veces y activarse una vez cada 0.3 s. Además, al estar bajo la protección de un escudo, el efecto de aumento de ATQ aumenta en un 100%.
						</p>
					</section>
					</div>
				</div>
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Rugido/> 
						</section>
						<section>
						⭐⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Ataque
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Aumenta en un 20% el daño contra los enemigos afectados por Pyro o Electro.
						</p>
					</section>
					</div>
				</div>

				
			</div>
			<Footer />
		</>
	);
};
