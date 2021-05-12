import React, { useState } from "react";
import { armasBasicosArray, elementosArray } from "../data/dataArrays";
import { personajes } from "../data/personajes";
import {
	basicosImages,
	elementosImages,
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

	elementosArray.map((items) => console.log(items));
	return (
		<>
			<h1>PersonajesScreen</h1>

			<div>
				<input
					onChange={handleInputChange}
					type="text"
					placeholder="Busca un personaje"
				/>
			</div>

			<div>
				{elementosArray.map((items) => (
					<div>
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
					<div>
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
			{listaPersonajes.map((personaje) => (
				<div key={personaje.id}>
					<p>{personaje.name}</p>
					<p>{personaje.element}</p>
					<p>{personaje.weapon}</p>

					<img
						src={thumbnailImages(`./${personaje.name}.png`).default}
						alt={personaje.name}
					/>
					<img
						src={elementosImages(`./${personaje.element}.png`).default}
						alt={personaje.element}
					/>
				</div>
			))}
		</>
	);
};
