import React from "react";
import { Footer } from "../Footer";
import { arcoComponents } from "../../helpers/arcoComponents";
import { artefactosComponents } from "../../helpers/artefactosComponents";

export const Venti = (props) => {
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

							{arcoComponents.Alas}
							{arcoComponents.Amos}
							{arcoComponents.Elegia}

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

							{arcoComponents.Cazador}
							{arcoComponents.Esmeralda}
							{arcoComponents.Acorde}
							{arcoComponents.Oda}
							{arcoComponents.Luna}
							{arcoComponents.Herrumbre}
						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">

								{artefactosComponents.Sombraverde}x4
							</div>


							<div className="buildParticular__artefactos-item">

								{artefactosComponents.Nobleza}x4
							</div>
							<div className="buildParticular__artefactos-item">
								{artefactosComponents.Nobleza}x2
								{artefactosComponents.Sombraverde}x2

							</div>
							<div className="buildParticular__artefactos-item">
								{artefactosComponents.Gladiador}x2
								{artefactosComponents.Sombraverde}x2

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
						<p>Maestría Elemental</p>
						<p>Recarga de Energía</p>


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>


						
						<p>Bono daño Anemo</p>


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
						<p>Recarga de energía</p>
						<p>Maestría Elemental</p>
						<p>Ataque</p>
					</div>
					</div>	
				</div>
			</div>
			
			{/* BUILD 2 */}
			<Footer />
		</>
	);
};
