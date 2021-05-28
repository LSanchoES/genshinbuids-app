import React from 'react'
import { Agata } from './armasComponents/catalizadorComponents/Agata'
import { Candado } from './armasComponents/catalizadorComponents/Candado'
import { Carta } from './armasComponents/catalizadorComponents/Carta'
import { Codice } from './armasComponents/catalizadorComponents/Codice'
import { Cuentos } from './armasComponents/catalizadorComponents/Cuentos'
import { Frio } from './armasComponents/catalizadorComponents/Frio'
import { Grimorio } from './armasComponents/catalizadorComponents/Grimorio'
import { Memorias } from './armasComponents/catalizadorComponents/Memorias'
import { Ojo } from './armasComponents/catalizadorComponents/Ojo'
import { Oracion } from './armasComponents/catalizadorComponents/Oracion'
import { Pergamino } from './armasComponents/catalizadorComponents/Pergamino'
import { Perla } from './armasComponents/catalizadorComponents/Perla'
import { Prototipo } from './armasComponents/catalizadorComponents/Prototipo'
import { Sinfonia } from './armasComponents/catalizadorComponents/Sinfonia'
import { Vino } from './armasComponents/catalizadorComponents/Vino'
import { Footer } from './Footer'
import { Header } from './Header'
import { NavbarUi } from './NavbarUi'


export const CatalizadoresScreen = () => {
	return (
		<>
			<Header />
			<NavbarUi />
				<h1 className="armasScreen-title animate__animated animate__fadeIn">
					Catalizadores
				</h1>
				<div className="artefactosScreen__tip animate__animated animate__fadeIn">
					<p>
						Solo se muestran las armas 5⭐y 4⭐ (y cuento de cazadores de dragones 3⭐)
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
						<Agata/> 
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
						<Candado/> 
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
						<Carta/> 
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
						a activación de una Reacción Elemental otorga un 8% adicional de Daño Elemental durante 10 s, y puede acumularse hasta 2 veces.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Codice/> 
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
						Los Golpes CRIT tienen un 60% probabilidad de generar una pequeña cantidad de Partículas Elementales, que regenerarán 6 de Energía para el personaje. Solo puede ocurrir una vez cada 12 s.
						</p>
					</section>
					</div>
				</div>
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Grimorio/> 
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
						Al dañar a un enemigo, aumenta la Prob. CRIT en un 8%. Puede acumularse hasta 5 veces. Una vez asestado un golpe CRIT, las acumulaciones de Concentración se reiniciarán						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Cuentos/> 
						</section>
						<section>
						⭐⭐⭐
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
						Vida
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Al cambiar de personaje, el ATQ del nuevo personaje aumenta en un 24% durante 10s. Este efecto ocurre una vez cada 20s.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Frio/> 
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
						Al golpear a los enemigos con Ataques Normales y Cargados, hay un 60% de probabilidad de crear un carámbano sobre ellos. Al caer, el carámbano inflige un 80% de daño de ATQ en el AdE. Si los enemigos están afectados por Cryo, el daño de ATQ infligido será del 200%. Este efecto solo puede ocurrir una vez cada 10 s.
						</p>
					</section>
					</div>
				</div>
				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Memorias/> 
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
						Al hacer daño por medio de una Habilidad Elemental, hay un 40% de probabilidad de restablecer el TdE de esta habilidad. Este efecto puede activarse una vez cada 30 s.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Ojo/> 
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
						Los Ataques Normales y Ataques Cargados tienen un 50% de probabilidad de lanzar un Ojo de la Perspicacia que inflige 240% de ATQ como Daño. El Ojo de la Perspicacia puede rebotar entre enemigos un máximo de 4 veces. Este efecto puede ocurrir una vez cada 12 s.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Oracion/> 
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
						Aumenta la Vel. Movimiento en un 10%. Mientras estés en combate, obtienes un 8% de Bono de Daño Elemental cada 4 segundos, pudiéndose acumular hasta 4 veces. Dura hasta que el personaje es derrotado o al abandonar el combate.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Pergamino/> 
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
						Incrementa el el bono de Daño Elemental en un 12%. Al lanzar un Ataque Normal, hay un 50% de prob. de conseguir la gracia de las nubes. Estas buscarán durante 15 s oponentes a los que atacar, infligiendo un 160% de Daño de ATQ. Este efecto solo puede ocurrir una vez cada 30 s
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Perla/> 
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
						Dentro de los 6s después de realizar un Ataque Normal, el Daño de Hab. Elemental y Hab. Definitiva aumenta en un 20%. Dentro de los 6 s después de lanzar una Hab. Elemental o Definitiva, el Daño de Ataque Normal aumenta un 20%.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Prototipo/> 
						</section>
						<section>
						⭐⭐⭐⭐	
						</section>
					<section>
						<h3>Stat principal</h3>
						<p>
						Vida
						</p>
					</section>
					<section>
						<h3>Efecto</h3>
						<p>
						Durante los 6 s. después de lanzar una Habilidad Definitiva, recuperará 4 puntos de Energía Elemental cada 2 s. Todos los miembros del equipo recuperarán 4% de Vida cada 2 s
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Sinfonia/> 
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
						Al entrar en combate, el personaje obtiene una canción aleatoria durante 10 s. Puede ocurrir una vez cada 30 s. Recital: aumenta el ATQ en un 60%; Aria: aumenta todo el Daño elemental en un 48; Interludio: aumenta la Maestría Elemental en 240.
						</p>
					</section>
					</div>
				</div>

				
				
				
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
						<Vino/> 
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
						Al atacar a un enemigo con un Ataque Normal, el consumo de Aguante al esprintar o al usar una habilidad que sustituye a esprintar se reduce en un 14% durante 5 segundos. Además, después de esprintar o de usar una habilidad que sustituye a esprintar, el ATQ aumenta en un 20% durante 5 segundos.
						</p>
					</section>
					</div>
				</div>

				
			</div>
			<Footer />
		</>
	);
};
