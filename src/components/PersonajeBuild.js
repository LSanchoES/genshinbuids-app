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
        <div className="personajBuild__container">
            <div className="personajeBuild__card">
                <h1 className=" personajBuild__name">{personaje.name}</h1>

                <img src={thumbnailImages(`./${personaje.name}.png`).default}
                    alt={personaje.name}
                    className="personajBuild__thumbnail"
                />
                <img src={elementosImages(`./${personaje.element}.png`).default}
                    alt={personaje.element}
                    className="personajBuild__element"
                    />         
                <h3>{personaje.weapon.toUpperCase()}</h3>
                <p>Rol principal: <b> {personaje.rol1}</b></p>
                <p> Rol secundario: <b>{personaje.rol2}</b> </p>
            </div>
            <div className="personajBuild__tip">
            <p><i>Recuerda que es recomendable utilizar los personajes en su rol principal pero siempre puedes experimentar con distintas composiciones de equipo</i> 😊</p>
            <p><i>Los roles se dividen en DPS (Daño por segundo) / Apoyo (Ayudan a que el DPS haga más daño) / Nuke (Gran cantidad de daño en muy poco tiempo y rotar) y Healers (Curanderos) </i></p>
            </div>
            <Dynamic />
        </div>
    )
}
