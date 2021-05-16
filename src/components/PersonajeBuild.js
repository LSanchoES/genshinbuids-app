import React from 'react'
import {
    thumbnailImages,
    elementosImages,
    artefactosImages,
    arcoImages,
    catalizadorImages,
    claymoreImages,
    espadaImages,
    lanzaImages
} from "../helpers/images";
import { Barbara } from './personajes/Barbara';


export const PersonajeBuild = ({location}) => {

    //Obtención de la data proviniente de React Router Dom (path + state)
    const {state} = location
    const {personaje} = state;

    const Components = {
        Barbara: Barbara,
      };

    const Dynamic = Components[personaje.name]

    console.log( Dynamic);
    return (
        <div>
            <h1>{personaje.name}</h1>
            <h2>{personaje.weapon.toUpperCase()}</h2>
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
