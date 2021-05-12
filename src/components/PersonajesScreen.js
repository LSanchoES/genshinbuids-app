import React, { useState } from "react";
import { armasBasicosArray, elementosArray } from "../data/dataArrays";
import { personajes } from "../data/personajes";
import {
	basicosImages,
	elementosImages,
	portraitImages,
	thumbnailImages,
} from "../helpers/images";


export const PersonajesScreen = () => {
  
	//Importando imagenes dinámicas:
	//IMPORTANTE PONER .default porque se encuentra misteriosamente dentro de un array Module....
	// console.log(portraitImages('./Albedo.jpg').default)

	//Estados

	const [listaPersonajes, setListaPersonajes] = useState(personajes);
	const [activeClass, setactiveClass] = useState(""); //active

	//Buscador

	const handleInputChange = (e) => {
		const value = e.target.value.toLowerCase();
		const result = personajes.filter((item) =>
			item.name.toLowerCase().includes(value)
		);

		setListaPersonajes(result);
	};

	//Selectores

	//Selector de elementos
	const handleElementSelector = (e) => {
		setListaPersonajes(
			personajes.filter((item) => item.element.includes(e.target.alt))
		);
	};
	//Selector de armas

	const handleWeaponSelector = (e) => {
		setListaPersonajes(
			personajes.filter((item) => item.weapon.includes(e.target.alt))
		);
	};


	return (
		<>	
		<div className="pS__container">
			<h1>PersonajesScreen</h1>

			<div className="pS__form">
				<input
					onChange={handleInputChange}
					type="text"
					placeholder="Busca un personaje"
				/>
			</div>

			<div className="pS__div-selector">
				{elementosArray.map((items) => (
					<div className="pS__selector-elementos">
						<img
							key={items}
							className={activeClass}
							onClick={handleElementSelector}
							src={elementosImages(`./${items}.png`).default}
							alt={items}
						/>
					</div>
				))}

				{armasBasicosArray.map((items) => (
					<div className="pS__selector-armas">
						<img
							key={items}
							className={activeClass}
							onClick={handleWeaponSelector}
							src={basicosImages(`./${items}.png`).default}
							alt={items}
						/>
					</div>
				))}
			</div>

			<div className="pS__personajes-div">
				{listaPersonajes.map((personaje) => (
					<div className="pS__personaje-card" 
						 key={personaje.id}>
						{/* <p>{personaje.element}</p>
						<p>{personaje.weapon}</p> */}
						<h2>{personaje.name}</h2>
						<img
							src={elementosImages(`./${personaje.element}.png`).default}
							alt={personaje.element}
							className="pS__personaje-element"
							/>
						<img
							src={portraitImages(`./${personaje.name}.jpg`).default}
							alt={personaje.name}
							className="pS__personaje-thumbnail"
							/>
					</div>
				))}
			</div>
		</div>	
		</>
	);
};
