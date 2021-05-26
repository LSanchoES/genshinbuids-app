import React from "react";
import { Footer } from "../Footer";
import { artefactosComponents } from "../../helpers/artefactosComponents";
import { lanzaComponents } from "../../helpers/lanzaComponents";

export const Zhongli = (props) => {
	//Desestructurando props ya sabes... llegan del Link Dynamico (PersonajesBuild)
	const {personaje} = props;

	return (
		<>
		
			{/* BUILD 2 */}
			<div className="buildParticular__container">
				<h1>{personaje.rol1}</h1>

					{/* COMPONENTES DE ARMAS */}
					<div className="buildParticular__armas-container">

						<div className="buildParticular__armas" >
						<h2>Armas⭐⭐⭐⭐⭐</h2>

						{lanzaComponents.Baculo}
						{lanzaComponents.Halcon}
						{lanzaComponents.Perforanubes}
						{lanzaComponents.Pua}

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>
						{lanzaComponents.Duelo}
						{lanzaComponents.LanzaFavonius}
						{lanzaComponents.LanzaLitica}
						{lanzaComponents.LanzaPenasco}
						{lanzaComponents.Estelar}
						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Geoarmada}x4
							</div>

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Petra}x2
							{artefactosComponents.Nobleza}x2

							</div>

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Nobleza}x4

							</div>	

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Gladiador}x4
							{artefactosComponents.Petra}x4

							</div>
							
							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Petra}x4

							</div>	
						</div>
				</div>

				<div className="buildParticular__stats-container">
					<h2>Stats</h2>
					<div className="buildParticular__stat-wrap">
					<div className="buildParticular__stat-item">

						{/* INTRODUCIR STATS  <P> */}
						<h3>Reloj</h3>

						<p>Vida</p>
						<p>Ataque</p>
						<p>Recarga de Energía</p>


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>


						
						<p>Bono daño Geo</p>
						<p>Vida</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Vida</p>
						<p>Daño Crítico</p>
						<p>Probabilidad de Crítico</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>


						<p>Daño Crítico</p>
						<p>Probabilidad de Crítico</p>

						<p>Vida</p>

						<p>Recarga de energía</p>
						<p>% Ataque</p>
						<p>Ataque</p>
						
					</div>
					</div>	
				</div>
			</div>

			{/* Build 2 */}

			<div className="buildParticular__container">
				<h1>{personaje.rol2}</h1>

					{/* COMPONENTES DE ARMAS */}
					<div className="buildParticular__armas-container">

						<div className="buildParticular__armas" >
						<h2>Armas⭐⭐⭐⭐⭐</h2>

						{lanzaComponents.Baculo}
						{lanzaComponents.Halcon}
						{lanzaComponents.Perforanubes}
						{lanzaComponents.Pua}

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

						{lanzaComponents.Pica}
						{lanzaComponents.Duelo}
						{lanzaComponents.EspinaDragon}
						{lanzaComponents.LanzaPenasco}
						{lanzaComponents.Estelar}
						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.LLamas}x4
							</div>

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Gladiador}x2
							{artefactosComponents.Caballeria}x2

							</div>
							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Retroceso}x4

							</div>
							
							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Gladiador}x2
							{artefactosComponents.Nobleza}x2

							</div>
							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Petra}x2
							{artefactosComponents.Nobleza}x2

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


						
						<p>Bono daño Físico</p>


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
			
			<Footer />
		</>
	);
};
