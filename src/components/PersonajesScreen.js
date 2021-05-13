import React, { useEffect, useState } from "react";
import { armasBasicosArray, elementosArray } from "../data/dataArrays";
import { personajes } from "../data/personajes";
import {
	basicosImages,
	elementosImages,
	portraitImages,
	thumbnailImages,
} from "../helpers/images";


export const PersonajesScreen = () => {
  
	const [listaPersonajes, setListaPersonajes] = useState(personajes);
	const [isActive, setIsActive] = useState(false); 
	const activeClass = document.querySelector('.active')

//BUSCADOR
	const handleInputChange = (e) => {
		const value = e.target.value.toLowerCase();
		const result = personajes.filter((item) =>
			item.name.toLowerCase().includes(value)
		);

		setListaPersonajes(result);
	};
//ELEMENTOS
	const handleElementSelector = (e) => {
		setIsActive(!isActive);

		if(e.target.className === 'active'){
			e.target.classList.remove('active')
			setListaPersonajes(personajes)

		}else{
		activeClass !== null ?
		activeClass.classList.remove('active')
		: console.log('');

		e.target.classList.add('active');

		setListaPersonajes(
		personajes.filter((item) => item.element.includes(e.target.alt))
		)}
	}
//ARMAS
	const handleWeaponSelector = (e) => {
		setIsActive(!isActive);

		if(e.target.className === 'active'){
			e.target.classList.remove('active')
			setListaPersonajes(personajes)

		}else{
		activeClass !== null ?
		activeClass.classList.remove('active')
		: console.log('no hay clases activas');

		e.target.classList.add('active');

		setListaPersonajes(
		personajes.filter((item) => item.weapon.includes(e.target.alt))
		)}
	};
//EFECTO PARA REFRESH DE CLASES 
	useEffect(() => {
	}, [isActive])


	return (
		<>	
		<div className="pS__container ">
			<h1>GenshinBuilds</h1>

			<div className="pS__form">
				<input
					onChange={handleInputChange}
					type="text"
					placeholder="Busca un personaje"
				/>
			</div>

			
				{elementosArray.map((items) => (
					<div className="pS__selector-elementos" key={items}>
						<img	
							onClick={handleElementSelector}
							src={elementosImages(`./${items}.png`).default}
							alt={items}
						/>
					</div>
				))}

				{armasBasicosArray.map((items) => (
					<div className="pS__selector-armas" key={items}>
						<img	
		
							onClick={handleWeaponSelector}
							src={basicosImages(`./${items}.png`).default}
							alt={items}
						/>
					</div>
				))}
		

			<div className="pS__personajes-div">
				{listaPersonajes.map((personaje) => (
					<div className="pS__personaje-card animate__animated animate__fadeIn animate__slow" 
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
