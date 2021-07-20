import React from "react";
import { Footer } from "../Footer";
import { espadaComponents } from "../../helpers/espadaComponents";
import { artefactosComponents } from "../../helpers/artefactosComponents";

export const Kazuha = (props) => {
	//Desestructurando props ya sabes... llegan del Link Dynamico (PersonajesBuild)
	const {personaje} = props;

	return (
		<>
			<div className="buildParticular__container">
				<h1>{personaje.rol1}</h1>

					{/* COMPONENTES DE ARMAS */}
					<div className="buildParticular__armas-container">

						<div className="buildParticular__armas" >
						<h2>Armas⭐⭐⭐⭐⭐</h2>

							{espadaComponents.Hoja}


						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

							{espadaComponents.EspadaSacrificio}
							{espadaComponents.EspadaFavonius}
							{espadaComponents.Deseo}
							{espadaComponents.Espina}
						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">

								{artefactosComponents.Sombraverde}x4
							</div>


						</div>
				</div>

				<div className="buildParticular__stats-container">
					<h2>Stats</h2>
					<div className="buildParticular__stat-wrap">
					<div className="buildParticular__stat-item">

						{/* INTRODUCIR STATS  <P> */}
						<h3>Reloj</h3>

						<p>Maestría Elemental</p>
						<p>Recarga de Energía</p>


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>
						
						<p>Maestría Elemental</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Maestría Elemental</p>
						

					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>

						<p>Maestría Elemental</p>
						<p>Recarga de energía</p>
						<p>% Ataque</p>
						<p>Daño Crítico</p>
						<p>Probabilidad de Crítico</p>
						
					</div>
					</div>	
				</div>
			</div>
			
			{/* BUILD 2 */}
			<Footer />
		</>
	);
};
