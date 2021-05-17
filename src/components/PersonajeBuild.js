import React from 'react'
import {
    thumbnailImages,
    elementosImages,
} from "../helpers/images";
import { Barbara } from './personajesComponents/Barbara';
import { Bennett } from './personajesComponents/Bennett';


export const PersonajeBuild = ({location}) => {

    //Obtención de la data proviniente de React Router Dom (path + state)
    const {state} = location
    const {personaje} = state;

    //Los componentes necesitan ser definidos e importados para generarse 
    //DINÁMICAMENTE!
    const Components = {
        Barbara: Barbara,
        Bennett: Bennett,
      };

    const Dynamic = Components[personaje.name]

    return (
        <div>
            <h1>{personaje.name}</h1>
            <h2>{personaje.weapon.toUpperCase()}</h2>
            <h3>Rol principal ... Rol secundario ... </h3>
            <p><i>Recuerda que es recomendable utilizar los personajes en su rol principal pero siempre puedes experimentar con distintas composiciones de equipo</i> 😊</p>
            <img src={thumbnailImages(`./${personaje.name}.png`).default}
                alt={personaje.name}
            />
            <img src={elementosImages(`./${personaje.element}.png`).default}
                alt={personaje.element}
            />         
            <Dynamic />
        </div>
    )
}
