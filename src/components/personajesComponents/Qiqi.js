import React from "react";
import { Footer } from "../Footer";
import { artefactosComponents } from "../../helpers/artefactosComponents";
import { espadaComponents } from "../../helpers/espadaComponents";


export const Qiqi = (props) => {
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
						{espadaComponents.Flauta}
						{espadaComponents.EspadaFavonius}
						{espadaComponents.Deseo}


						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">
							

							{artefactosComponents.Doncella}x4						

							</div>

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Doncella}x2
							{artefactosComponents.Gladiador}x2

							</div>

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Geoarmada}x4

							</div>
							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Nobleza}x4

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


						
						<p>Ataque</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>Casco</h3>

						<p>Ataque</p>
						<p>Bono Curación</p>


					</div>	
					<div className="buildParticular__stat-item">
						<h3>SubStats</h3>


						<p>% Ataque</p>
						<p>Ataque</p>
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

						{espadaComponents.Aquila}
						{espadaComponents.Hoja}
						{espadaComponents.Rompemontanas}


						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>

						{espadaComponents.Negra}
						{espadaComponents.PenascoOsucro}
						{espadaComponents.Flauta}
						{espadaComponents.Rencor}


						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.LLamas}x2
							{artefactosComponents.Caballeria}x2
							</div>

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Gladiador}x4

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
