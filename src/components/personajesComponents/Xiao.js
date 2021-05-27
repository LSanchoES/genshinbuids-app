import React from "react";
import { Footer } from "../Footer";
import { artefactosComponents } from "../../helpers/artefactosComponents";
import { lanzaComponents } from "../../helpers/lanzaComponents";

export const Xiao = (props) => {
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

						{lanzaComponents.Halcon}
						{lanzaComponents.Baculo}
						{lanzaComponents.Perforanubes}
						{lanzaComponents.Pua}

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

						{lanzaComponents.Duelo}
						{lanzaComponents.LanzaPenasco}
						{lanzaComponents.LanzaFavonius}
						{lanzaComponents.LanzaLitica}
						{lanzaComponents.Estelar}

						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Sombraverde}x2
							{artefactosComponents.Gladiador}x2
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

						
						<p>Bono daño Anemo </p>


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
