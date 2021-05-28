import React from "react";
import { Acorde } from "./armasComponents/arcoComponents/Acorde";
import { Alas } from "./armasComponents/arcoComponents/Alas";
import { Amos } from "./armasComponents/arcoComponents/Amos";
import { Cazador } from "./armasComponents/arcoComponents/Cazador";
import { Elegia } from "./armasComponents/arcoComponents/Elegia";
import { Esmeralda } from "./armasComponents/arcoComponents/Esmeralda";
import { Favonius } from "./armasComponents/arcoComponents/Favonius";
import { Herrumbre } from "./armasComponents/arcoComponents/Herrumbre";
import { Luna } from "./armasComponents/arcoComponents/Luna";
import { Oda } from "./armasComponents/arcoComponents/Oda";
import { Penasco } from "./armasComponents/arcoComponents/Penasco";
import { Real } from "./armasComponents/arcoComponents/Real";
import { Sacrificio } from "./armasComponents/arcoComponents/Sacrificio";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavbarUi } from "./NavbarUi";
import { Compuesto } from "./armasComponents/arcoComponents/Compuesto";


export const ArcoScreen = () => {
	return (
		<>
			<Header />
			<NavbarUi />
			<h1 className="armasScreen-title animate__animated animate__fadeIn">
				Arcos
			</h1>
			<div className="artefactosScreen__tip animate__animated animate__fadeIn">
				<p>
					Solo se muestran las armas 5⭐y 4⭐ (y cuento de dragones 3⭐) ya que son
					estas son las que mayor potencial tienen y las que se usan en las builds
					más poderosas. (Recuerda que los valores de los efectos de las armas
					aumentan cuando las refinas)
				</p>
			</div>

			<div className="artefactosScreen__container animate__animated animate__fadeIn">
				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Compuesto />
						</section>
						<section>⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Bono daño Físico</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								Al golpear con Ataque Normal y Ataque Cargado, aumenta el ATQ en un 4% y
								la Vel. de Ataque Normal en un 1.2% durante 6 s. Este efecto puede
								acumularse hasta 4 veces y activarse una vez cada 0.3 s.{" "}
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Alas />
						</section>
						<section>⭐⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Probabilidad de Crítico</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								Aumenta el Daño CRIT en un 20%. Al golpear a un enemigo, hay un 60% de
								probabilidad de infligir un 125% de Daño Físico en una pequeña AdE. Este
								efecto solo puede ocurrir una vez cada 4 segundos.
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Real />
						</section>
						<section>⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Ataque</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								Al dañar a un enemigo, aumenta la Prob. CRIT en un 8%. Puede acumularse
								hasta 5 veces. Una vez asestado un golpe CRIT, las acumulaciones de
								Concentración se reiniciarán.
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Amos />
						</section>
						<section>⭐⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Ataque</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								El daño infligido con Ataques Normales y Cargados aumenta en un 12%.
								Tras disparar un Ataque Normal o Cargado, el daño aumenta en un 8% por
								cada 0.1 s que la flecha permanece en el aire. Este efecto puede
								acumularse hasta cinco veces.
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Favonius />
						</section>
						<section>⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Recarga de Energía</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								Los Golpes CRIT tienen un 60% probabilidad de generar una pequeña
								cantidad de Partículas Elementales, que regenerarán 6 de Energía para el
								personaje. Solo puede ocurrir una vez cada 12 s.
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Esmeralda />
						</section>
						<section>⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Probabilidad de Crítico</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								Al golpear con un Ataque Normal o Ataque Cargado, hay un 50% de
								probabilidad de crear un ciclón que atrae a los enemigos cercanos de
								forma continua, infligiendo un 40% del ATQ como Daño cada 0.5s durante
								4s. Este efecto puede ocurrir una vez cada 14 s.
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Penasco />
						</section>
						<section>⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Daño Crítico</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								Al derrotar a un enemigo, aumenta el ATQ en 12% durante 30s, pudiéndose
								acumular hasta 3 veces. La duración de cada acumulación es
								independiente.
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Sacrificio />
						</section>
						<section>⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Recarga de Energía</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								Al hacer daño por medio de una Habilidad Elemental, hay un 40% de
								probabilidad de restablecer el TdE de esta habilidad. Este efecto puede
								activarse una vez cada 30 s.
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Cazador />
						</section>
						<section>⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Ataque</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								Cuando el personaje que lleva esta arma equipada está en tu equipo pero
								no en combate, el daño de dicho personaje aumenta en un 2% cada 1s. Como
								máximo, solo se puede obtener un aumento del 20% de esta manera. 4s
								después de que dicho personaje esté en uso, el aumento de daño irá
								reduciéndose en un 4% cada 1s hasta llegar al 0%.
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Elegia />
						</section>
						<section>⭐⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Recarga de Energía</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								Una parte del «Gran concierto milenario» que flota por los vientos.
								Aumenta 60 puntos la Maestría Elemental. Cuando el personaje que lleva
								esta arma equipada ataca a un enemigo con una Habilidad Elemental o
								Definitiva, dicho personaje obtiene un talismán de reminiscencia que
								puede adquirirse una vez cada 0.2 segundos como máximo. Este efecto
								también puede ocurrir cuando el personaje que lleva equipada esta arma
								está en tu equipo pero no en combate. Al obtener 4 talismanes de
								reminiscencia, estos se consumirán y otorgarán a todos los miembros del
								equipo cercanos el efecto de «Gran concierto milenario: Canción del
								adiós» durante 12 segundos, el cual aumenta en 100 puntos la Maestría
								Elemental y el Ataque en un 20%. Tras activarse este efecto, no podrán
								obtenerse talismanes de reminiscencia durante 20 segundos. Los efectos
								de «Gran concierto milenario» no se acumularán con otros efectos del
								mismo tipo.
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Herrumbre />
						</section>
						<section>⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Ataque</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								El Daño de Ataque Normal aumenta un 40%, y el Daño de Ataque Cargado
								disminuye un 10%.
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Oda />
						</section>
						<section>⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Maestría Elemental</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								Al usar una Habilidad Elemental, obtienes la gracia de las flores de
								viento, que aumenta el Ataque en un 16% durante 6 segundos.
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Luna />
						</section>
						<section>⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Ataque</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								Al golpear con Ataque Cargado los puntos débiles del enemigo, aumenta la
								Vel. Movimiento en 10% y ATQ 36% durante 10 s.
							</p>
						</section>
					</div>
				</div>

				<div className="artefactosScreen__card">
					<div className="armasScreen__sections">
						<section>
							<Acorde />
						</section>
						<section>⭐⭐⭐⭐</section>
						<section>
							<h3>Stat principal</h3>
							<p>Maestría Elemental</p>
						</section>
						<section>
							<h3>Efecto</h3>
							<p>
								Incrementa el daño de la habilidad elemental y la explosión elemental un
								24%.
							</p>
						</section>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
