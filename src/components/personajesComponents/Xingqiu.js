import React from "react";
import { artefactosComponents } from "../../helpers/artefactosComponents";
import { espadaComponents } from "../../helpers/espadaComponents";
import { Footer } from "../Footer";


export const Xingqiu = (props) => {
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

						{espadaComponents.Cortador}
						{espadaComponents.Hoja}

						</div>
						<div className="buildParticular__armas" >
							<h2>Armas⭐⭐⭐⭐</h2>


						{espadaComponents.EspadaSacrificio}
						{espadaComponents.Deseo}


						</div>

				</div>

				<div className="buildParticular__artefactos-container">
					<h2>Artefactos</h2>
						<div className="buildParticular__artefactos">

							{/* COMPONENTES DE ARTEFACTOS */}

							<div className="buildParticular__artefactos-item">

								{artefactosComponents.Nobleza}x2
								{artefactosComponents.Corazon}x2

							</div>

							<div className="buildParticular__artefactos-item">

							{artefactosComponents.Nobleza}x2
							{artefactosComponents.Gladiador}x2

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

						<p>Recarga de Energía</p>
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


						<p>Recarga de energía</p>
						
						<p>Daño Crítico</p>
						<p>Probabilidad de Crítico</p>
						<p>% Ataque</p>
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
