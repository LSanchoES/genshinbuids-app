import React from "react";
import { arcoComponents } from "../../helpers/arcoComponents";
import { artefactosComponents } from "../../helpers/artefactosComponents";
import { Footer } from "../Footer";



export const Amber = (props) => {
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
			
						{arcoComponents.Amos}
						{arcoComponents.Alas}
						

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>
						{arcoComponents.Luna}
						{arcoComponents.Penasco}
						{arcoComponents.Compuesto}

						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Errante}x4			

							</div>

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Bruja}x2{artefactosComponents.Errante}x2	

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


						
						<p>Bono daño Pyro </p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Daño Crítico</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>

						<p>Daño Crítico</p>
						<p>% Ataque</p>
						<p>Ataque</p>
						<p>Maestría Elemental</p>
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

							{arcoComponents.Elegia}


						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

							{arcoComponents.Cazador}
							{arcoComponents.Acorde}
							{arcoComponents.Favonius}
							{arcoComponents.Sacrificio}


						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">


							{artefactosComponents.Nobleza}x4

							</div>

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Nobleza}x2{artefactosComponents.Bruja}x2

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
						<p>Ataque</p>
						<p>Maestría Elemental</p>


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>


						
						<p>Bono daño Pyro</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Daño Crítico</p>
						<p>Probabilidad de Crítico</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>


						<p>Recarga de energía</p>
						<p>% Ataque</p>
						<p>Probabilidad/ Daño Crítico</p>
						<p>Maestría Elemental</p>
						<p>Ataque</p>
						
					</div>
					</div>	
				</div>
			</div>
			<Footer />
		</>
	);
};
