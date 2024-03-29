import React from "react";
import { Footer } from "../Footer";
import { arcoComponents } from "../../helpers/arcoComponents";
import { artefactosComponents } from "../../helpers/artefactosComponents";

export const Fischl = (props) => {
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
							{arcoComponents.Acorde}
							{arcoComponents.Esmeralda}
							{arcoComponents.Luna}
							{arcoComponents.Herrumbre}
						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">
								{artefactosComponents.Gladiador}x2
								{artefactosComponents.Furia}x2

							</div>

							<div className="buildParticular__artefactos-item">

								{artefactosComponents.Domador}x4
							</div>

							<div className="buildParticular__artefactos-item">

								{artefactosComponents.Furia}x4
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
						<p>Recarga de Energía</p>


					</div>	
					<div className="buildParticular__stat-item">

						<h3>Copa</h3>


						
						<p>Bono daño Electro</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Daño Crítico</p>
						<p>Probabilidad de Crítico</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>


						<p>% Ataque</p>
						<p>Ataque</p>
						<p>Recarga de energía</p>
						<p>Maestría Elemental</p>
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

						{arcoComponents.Alas}
						{arcoComponents.Amos}

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

						{arcoComponents.Esmeralda}
						{arcoComponents.Luna}
						{arcoComponents.Herrumbre}
						{arcoComponents.Penasco}
						{arcoComponents.Compuesto}


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

								{artefactosComponents.LLamas}x2
								{artefactosComponents.Caballeria}x2

							</div>

							<div className="buildParticular__artefactos-item">

								{artefactosComponents.LLamas}x2
								{artefactosComponents.Gladiador}x2

							</div>

							<div className="buildParticular__artefactos-item">

								{artefactosComponents.Furia}x2
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


						
						<p>Bono daño Físico </p>


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
						<p>Ataque</p>
						<p>Recarga de energía</p>
						<p>Maestría Elemental</p>
						
					</div>
					</div>	
				</div>
			</div>
			<Footer />
		</>
	);
};
