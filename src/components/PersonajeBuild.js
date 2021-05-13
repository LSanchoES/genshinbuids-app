import React, { useState } from 'react'
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

export const PersonajeBuild = ({location}) => {
    //Obtención de la data proviniente de React Router Dom (path + state)
    const {state} = location
    const {personaje} = state;


    console.log(espadaImages("./Destello.png"))


    return (
        <div>
            <h1>{personaje.name}</h1>
            <h2>{personaje.weapon}</h2>
            <img src={thumbnailImages(`./${personaje.name}.png`).default}
                alt={personaje.name}
            />
            <img src={elementosImages(`./${personaje.element}.png`).default}
                alt={personaje.element}
            />            
        </div>
    )
}
