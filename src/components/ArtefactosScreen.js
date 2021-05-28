import React from "react";
import { Bruja } from "./artefactosComponents/Bruja";
import { Caballeria } from "./artefactosComponents/Caballeria";
import { Corazon } from "./artefactosComponents/Corazon";
import { Corredor } from "./artefactosComponents/Corredor";
import { Domador } from "./artefactosComponents/Domador";
import { Doncella } from "./artefactosComponents/Doncella";
import { Errante } from "./artefactosComponents/Errante";
import { Furia } from "./artefactosComponents/Furia";
import { Geoarmada } from "./artefactosComponents/Geoarmada";
import { Gladiador } from "./artefactosComponents/Gladiador";
import { Llamas } from "./artefactosComponents/Llamas";
import { Nobleza } from "./artefactosComponents/Nobleza";
import { Nomada } from "./artefactosComponents/Nomada";
import { Petra } from "./artefactosComponents/Petra";
import { Retroceso } from "./artefactosComponents/Retroceso";
import { Sombraverde } from "./artefactosComponents/Sombraverde";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavbarUi } from "./NavbarUi";


export const ArtefactosScreen = () => {
	return (
		<>
			<Header />
			<NavbarUi />
			<h1 className="artefactosScreen-title animate__animated animate__fadeIn">Artefactos</h1>

				<div className="artefactosScreen__tip animate__animated animate__fadeIn">
					<p>
						Solo se muestran los artefactos que pueden llegar a ser legendarios (5⭐)
						ya que son estos los que mayor potencial tienen (pueden llegar a nivel 20) 
						y los que se usan en las builds más eficaces.
					</p>
				</div>

			<div className="artefactosScreen__container animate__animated animate__fadeIn">

				
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Gladiador/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						ATQ +18%
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Si el portador usa una espada, mandoble o lanza, incrementa el daño de su ataque normal un 35%
						</p>
					</section>
					</div>
				</div>
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Doncella/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Efectividad de la Curación del personaje +15%
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Usar una habilidad elemental o habilidad definitiva incrementa la curación recibida por todos los miembros del equipo un 20% durante 10s
						</p>
					</section>
					</div>
				</div>
				
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Nobleza/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Daño de la habilidad definitiva +20%
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Usar una habilidad definitiva aumenta el ataque de los miembros del equipo un 20% durante 12s. Este efecto no es acumulable

						</p>
					</section>
					</div>
				</div>
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Caballeria/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Daño físico +25%	
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Tras derrotar a un oponente, aumenta el daño del ataque cargado un 50% y reduce su costo a 0 durante 10s

						</p>
					</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Llamas/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Daño Físico +25%			
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Cuando una Habilidad Elemental golpea al enemigo, el ATQ de todos los miembros del equipo cercanos aumenta 9% durante 7 s. Este efecto puede acumularse hasta 2 veces y puede ser activado cada 0.3 s. Cuando se llega a aplicar 2 veces, el efecto del conjunto de 2 piezas aumenta un 100%
						</p>
					</section>
					</div>
				</div>

				
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Errante/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Maestría Elemental +80	
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Aumenta el daño del ataque cargado un 35% si el personaje usa un catalizador o arco

						</p>
					</section>
					</div>
				</div>
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Geoarmada/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Vida +20%	
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Cuando una Habilidad Elemental golpea a un enemigo, el ATQ de todos los personajes del equipo cercanos aumenta en un 20% y su Protección de Escudo aumenta en un 30% durante 3 . Este efecto puede tener lugar cada 0.5 s y se activa incluso cuando el personaje que lleva equipado este conjunto de artefactos está en tu equipo pero no en combate.

						</p>
					</section>
					</div>
				</div>
				
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Sombraverde/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Bonificación de daño Anemo +15%	
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Incrementa el daño por remolino un 60%. Reduce al oponente la Resistencia Elemental del elemento del remolino un 40% durante 10s

						</p>
					</section>
					</div>
				</div>
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Furia/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Bonificación de daño Electro +15%	
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Aumenta el daño causado por reacciones elementales que involucran al elementl Electro un 40%. Activar tales efectos disminuye el tiempo de reutilización de la habilidad elemental por 1s. Sólo puede ocurrir una vez cada 0.8s

						</p>
					</section>
					</div>
				</div>
				
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Domador/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Aumenta la RES Electro un 40%	
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Aumenta el daño contra enemigos afectados por Electro un 35%

						</p>
					</section>
					</div>
				</div>
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Bruja/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Bonificación de daño Pyro +15%
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Aumenta el daño de Sobrecargado y En llamas un 40%. Aumenta el daño de Vaporizar y Derretir un 15%. Usar una habilidad elemental potencia los efectos de conjuntos de 2 piezas un 50% durante 10s. Se puede acumular hasta 3 veces

						</p>
					</section>
					</div>
				</div>
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Corredor/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Aumenta la Resistencia Pyro un 40%	
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Aumenta el daño contra enemigos afectados por Pyro un 35%

						</p>
					</section>
					</div>
				</div>
				
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Petra/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Bonificación de daño Geo +15%	
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Al obtener un fragmento elemental creado a partir de una reacción de cristalización, todos los miembros del equipo ganan 35% de daño a ese elemento en particular durante 10s. Sólo puede tenerse una bonificación de daño a un elemento obtenida de esta manera a la vez

						</p>
					</section>
					</div>
				</div>
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Retroceso/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Aumenta la fuerza del escudo un 35%
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Al estar protegido por un escudo, gana 40% de daño para el ataque normal y cargado

						</p>
					</section>
					</div>
				</div>
				
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Corazon/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Bonificación de Daño Hydro +15%	
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Tras usar la Habilidad Elemental, aumenta el daño de Ataque Normal y Ataque Cargado en un 30% durante 15 segundos.

						</p>
					</section>
					</div>
				</div>
				<div className="artefactosScreen__card">
					<div className="artefactosScreen__sections">
						<section>
						<Nomada/>
						</section>
					<section>
						<h3>2 Piezas</h3>
						<p>
						Bonificación de Daño Cryo +15%
						</p>
					</section>
					<section>
						<h3>4 Piezas</h3>
						<p>
						Aumenta en un 20% la Probabilidad de Crítico contra enemigos afectados por Cryo. Si el enemigo está Congelado, la Probabilidad de Crítico aumentará en un 20% adicional.

						</p>
					</section>
					</div>
				</div>

			</div>
			<Footer />
		</>
	);
};
