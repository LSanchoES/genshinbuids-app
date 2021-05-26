import React from "react";
import { Footer } from "../Footer";
import { catalizadorComponents } from "../../helpers/catalizadorComponents";
import { artefactosComponents } from "../../helpers/artefactosComponents";

export const Sacarosa = (props) => {
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

						{catalizadorComponents.Memorias}
						{catalizadorComponents.Cuentos}(3⭐)
						{catalizadorComponents.Carta}
						{catalizadorComponents.Oracion}
						{catalizadorComponents.Codice}

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

						<p>Recarga de energía</p>
						<p>Maestría Elemental</p>
						<p>% Ataque</p>

						
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

						{catalizadorComponents.Oracion}
						{catalizadorComponents.Candado}
						{catalizadorComponents.Pergamino}

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

						{catalizadorComponents.Sinfonia}
						{catalizadorComponents.Perla}
						{catalizadorComponents.Carta}
						{catalizadorComponents.Agata}
						{catalizadorComponents.Frio}


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
						<p>Maestría Elemental</p>

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
