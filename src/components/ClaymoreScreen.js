import React from 'react'
import { Arcaico } from './armasComponents/claymoreComponents/Arcaico'
import { Argento } from './armasComponents/claymoreComponents/Argento'
import { Desidia } from './armasComponents/claymoreComponents/Desidia'
import { GranFavonius } from './armasComponents/claymoreComponents/GranFavonius'
import { GranPenasco } from './armasComponents/claymoreComponents/GranPenasco'
import { GranSacrificio } from './armasComponents/claymoreComponents/GranSacrificio'
import { Lapida } from './armasComponents/claymoreComponents/Lapida'
import { Litica } from './armasComponents/claymoreComponents/Litica'
import { Medula } from './armasComponents/claymoreComponents/Medula'
import { Orgullo } from './armasComponents/claymoreComponents/Orgullo'
import { Pinos } from './armasComponents/claymoreComponents/Pinos'
import { Segadora } from './armasComponents/claymoreComponents/Segadora'
import { Sombra } from './armasComponents/claymoreComponents/Sombra'
import { GranReal } from './armasComponents/claymoreComponents/GranReal'
import { Tiempo } from './armasComponents/claymoreComponents/Tiempo'
import { Footer } from './Footer'
import { Header } from './Header'
import { NavbarUi } from './NavbarUi'



export const ClaymoreScreen = () => {
	return (
		<>
			<Header />
			<NavbarUi />
				<h1 className="armasScreen-title animate__animated animate__fadeIn">
					Claymores
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
						<Argento/> 
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
						Al golpear a los enemigos con Ataques Normales y Cargados, hay un 60% de probabilidad de crear un carámbano sobre ellos. Al caer, el carámbano inflige un 80% de daño de ATQ en el AdE. Si los enemigos están afectados por Cryo, el daño de ATQ infligido será del 200%. Este efecto solo puede ocurrir una vez cada 10 s.						</p>
					</section>
					</div>
				</div>

				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Litica/> 
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
						<Desidia/> 
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
						Aumenta en un 20% la Protección de Escudo. Tras atacar a un enemigo, el ATQ aumenta en un 4% durante 8 s. Este efecto puede acumularse hasta 5 veces y activarse una vez cada 0.3 s. Además, al estar bajo la protección de un escudo, el efecto de aumento de ATQ aumenta en un 100%.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Tiempo/> 
						</section>
						<section>
						⭐⭐⭐⭐
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
						Al recibir Daño, genera un escudo que absorbe Daño hasta el 20% de la Vida Máx.. Este escudo dura 10 s o hasta que se rompe, y solo puede ser activado una vez cada 45 s. Mientras esté protegido por el escudo, el personaje aumenta su Daño de ATQ en un 12%.
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>

						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<GranReal/> 
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
						<GranFavonius/> 
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
						Los Golpes CRIT tienen un 60% probabilidad de generar una pequeña cantidad de Partículas Elementales, las cuales regenerarán 6 pts. de Energía para el personaje. Solo puede ocurrir una vez cada 12 s.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<GranSacrificio/> 
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
						<GranPenasco/> 
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
						<Lapida/> 
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
						Aumenta el ATQ en un 20%. Al atacar a enemigos con menos del 30% de su Vida, aumenta el ATQ de todos los miembros del equipo en un 40% durante 12 s. Este efecto solo puede ocurrir una vez cada 30 s.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Medula/> 
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
						Cuando el personaje esté en combate, aumenta el daño que inflige en un 6% y el Daño que recibe en un 3% cada 4s. Este efecto puede acumularse un máximo de 5 veces, y no se reiniciará si el personaje se retira de combate, sino que, cada vez que reciba daño, perderá una de las cargas acumuladas.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Pinos/> 
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
						Una parte del «Gran concierto milenario» que flota por los vientos. Aumenta el ATQ en un 16%. Al atacar a un enemigo con un Ataque Normal o Cargado, el personaje obtiene un talismán susurrante que puede adquirirse una vez cada 0.3 s como máximo. Al obtener 4 talismanes susurrantes, estos se consumirán y otorgarán a todos los miembros del equipo cercanos el efecto de «Gran concierto milenario: Canción de la revelación» durante 12 s, el cual aumenta la Vel. de Ataque de los Ataques Normales en un 12% y el ATQ en un 20%. Tras activarse, no podrán obtenerse talismanes susurrantes durante 20 s. Los efectos de «Gran concierto milenario» no se acumularán con otros efectos del mismo tipo.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Orgullo/> 
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
						Aumenta todo Daño en un 8%. Al realizar Ataques Normales o Cargados después de usar la Habilidad Definitiva, se crea una hoja de vacío que inflige un 80% de Daño Físico a todos los enemigos cercanos. Tiene una duración de 20 s u 8 ataques de hoja.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Arcaico/> 
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
						Al lanzar un Ataque Normal o Cargado, hay un 50% de prob. de causar un 240% de daño adicional en ATQ en un área pequeña. Este efecto solo puede ocurrir una vez cada 15 s.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Segadora/> 
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
						Aumenta el daño contra los enemigos afectados por Hydro o Electro un 20%.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Sombra/> 
						</section>
						<section>
						⭐⭐⭐⭐
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
Defensa
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Después de lanzar un Ataque Normal o Cargado, el ATQ y DEF aumentan en un 6% en 6s y pueden ser acumulados hasta 4 veces (24% en total). Este efecto puede activarse una vez cada 0.5s.
						</p>
					</section>
					</div>
				</div>

				
			</div>
			<Footer />
		</>
	);
};
