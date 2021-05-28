import React from 'react'
import { Baculo } from './armasComponents/lanzaComponents/Baculo'
import { Caza } from './armasComponents/lanzaComponents/Caza'
import { Duelo } from './armasComponents/lanzaComponents/Duelo'
import { EspinaDragon } from './armasComponents/lanzaComponents/EspinaDragon'
import { Estelar } from './armasComponents/lanzaComponents/Estelar'
import { Halcon } from './armasComponents/lanzaComponents/Halcon'
import { LanzaFavonius } from './armasComponents/lanzaComponents/LanzaFavonius'
import { LanzaLitica } from './armasComponents/lanzaComponents/LanzaLitica'
import { LanzaPenasco } from './armasComponents/lanzaComponents/LanzaPenasco'
import { Perdicion } from './armasComponents/lanzaComponents/Perdicion'
import { Perforanubes } from './armasComponents/lanzaComponents/Perforanubes'
import { Pica } from './armasComponents/lanzaComponents/Pica'
import { Pua } from './armasComponents/lanzaComponents/Pua'
import { Footer } from './Footer'
import { Header } from './Header'
import { NavbarUi } from './NavbarUi'


export const LanzaScreen = () => {
	return (
		<>
			<Header />
			<NavbarUi />
				<h1 className="armasScreen-title animate__animated animate__fadeIn">
					Lanzas
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
						<Baculo/> 
						</section>
						<section>
						⭐⭐⭐⭐⭐	
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
						Aumenta la Vida en un 20%. Además, el personaje que lleve esta arma equipada obtendrá un 0.8% de Bono de ATQ en proporción a su Vida Máx. Cuando la vida de dicho personaje esté por debajo del 50%, el ATQ aumentará en un 1% adicional en proporción a su Vida Máx.
						</p>
					</section>
					</div>
				</div>

				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Halcon/> 
						</section>
						<section>
						⭐⭐⭐⭐⭐	
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
						Al atacar un enemigo, aumenta el ATQ en un 3.2% durante 6s y puede acumularse hasta 7 veces. Este efecto sólo puede ocurrir una vez cada 0.3s. Cuando se alcanza el máximo de acumulaciones, el daño aumenta un 12%.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<LanzaLitica/> 
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
						Por cada personaje de Liyue que haya en el equipo, el ATQ del personaje que lleve esta arma equipada aumenta en un 7%, y su Prob. CRIT aumenta en 3%. Este efecto solo puede acumularse un máximo de 4 veces.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Perforanubes/> 
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
						La Protección de Escudo aumenta en un 20%. Durante 8 s después de atacar a un enemigo, el ATQ aumenta en un 4%. Este efecto puede acumularse hasta 5 veces y activarse una vez cada 0.3 s. Además, al estar bajo la protección de un escudo, el efecto de aumento de ATQ aumenta en un 100%.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Caza/> 
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
						<EspinaDragon/> 
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
						Efecto	Costo de refinamiento
1	Al golpear a los enemigos con Ataques Normales y Cargados, hay un 60% de probabilidad de crear un carámbano sobre ellos. Al caer, el carámbano inflige un 80% de daño de ATQ en el AdE. Si los enemigos están afectados por Cryo, el daño de ATQ infligido será del 200%. Este efecto solo puede ocurrir una vez cada 10 s.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<LanzaFavonius/> 
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
						<Duelo/> 
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
						Cuando hay dos o más enemigos cerca, aumenta el ATQ en un 16% y la DEF en un 16%. Cuando haya menos de 2 enemigos, aumenta el ATQ en un 24%.
						</p>
					</section>
					</div>
				</div>

				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<LanzaPenasco/> 
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
						<Perdicion/> 
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
						Aumenta el daño contra los enemigos afectados por Hydro o Pyro un 20%.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Pica/> 
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
						5 s después de obtener una Partícula u Orbe Elemental, los Ataques Normales y Ataques Cargados causan un 20% adicional de Daño de Ataque.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Estelar/> 
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
						Después de usar una Hab. Elemental, aumenta el daño del Ataque Normal y Cargado un 8% durante 12 s. Puede acumularse hasta 2 veces.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Pua/> 
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
						Aumenta la probabilidad crítica un 8% y aumenta la velocidad del ataque normal un 12%. Adicionalmente, los golpes del ataque normal y cargado tienen un 50% de probabilidad de activar una hoja de vacío que inflige 40% del ataque como daño en un área pequeña. Este efecto no puede ocurrir más de una vez cada 2s.
						</p>
					</section>
					</div>
				</div>

				
				
			</div>
			<Footer />
		</>
	);
};
