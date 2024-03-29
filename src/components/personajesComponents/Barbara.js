import React from "react";
import { artefactosComponents } from "../../helpers/artefactosComponents";
import { catalizadorComponents } from "../../helpers/catalizadorComponents";
import { Footer } from "../Footer";



export const Barbara = (props) => {
	//Desestructurando props ya sabes... llegan del Link Dynamico (PersonajesBuild)
	const {personaje} = props;

	return (
		<>
			<div className="buildParticular__container">
				<h1>{personaje.rol1}</h1>

					{/* COMPONENTES DE ARMAS */}
					<div className="buildParticular__armas-container">

						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

						{catalizadorComponents.Cuentos} (3⭐)
						{catalizadorComponents.Prototipo}

						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Doncella} x4

							</div>

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Nobleza}	x4

							</div>

						</div>
				</div>

				<div className="buildParticular__stats-container">
					<h2>Stats</h2>
					<div className="buildParticular__stat-wrap">
					<div className="buildParticular__stat-item">

						{/* INTRODUCIR STATS  <P> */}
						<h3>Reloj</h3>

						<p>Recarga de Energía</p>
						<p>Vida</p>


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>


						
						<p>Vida</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Bono Curación</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>


						<p>Vida</p>
						<p>% Vida</p>
						<p>Recarga de energía</p>
						
					</div>
					</div>	
				</div>
			</div>
			
			{/* BUILD 2 */}

			<div className="buildParticular__container">
				<h1>{personaje.rol2}</h1>

					{/* COMPONENTES DE ARMAS */}
					<div className="buildParticular__armas-container">

						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐⭐</h2>

							{catalizadorComponents.Candado}
							{catalizadorComponents.Oracion}

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

							{catalizadorComponents.Sinfonia}
							{catalizadorComponents.Perla}
							{catalizadorComponents.Agata} 
							{catalizadorComponents.Carta} 
							{catalizadorComponents.Frio }
						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Corazon}  x4

							</div>

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Errante} 	x4

							</div>
							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Corazon} x2
							{artefactosComponents.Gladiador} x2

							</div>
							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Errante} 	x2
							{artefactosComponents.Gladiador}  x2


							</div>

						</div>
				</div>

				<div className="buildParticular__stats-container">
					<h2>Stats</h2>
					<div className="buildParticular__stat-wrap">
					<div className="buildParticular__stat-item">

						{/* INTRODUCIR STATS  <P> */}
						<h3>Reloj</h3>


						<p>Ataque</p>


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>


						<p>Bono daño Hydro</p>
						


					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Daño Crítico</p>
						<p>Probabilidad de Crítico</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>


						<p>Daño Crítico</p>
						<p>Probabilidad de Crítico</p>
						<p>% Ataque</p>
						<p>Maestría elemental</p>
						<p>Ataque</p>
						
					</div>
					</div>	
				</div>
			</div>

			<Footer />
		</>
	);
};
