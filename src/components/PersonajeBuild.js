import React from 'react'
import {
    thumbnailImages,
    elementosImages,
} from "../helpers/images";
import { Header } from './Header';
import { NavbarUi } from './NavbarUi';
import { Albedo } from './personajesComponents/Albedo';
import { Amber } from './personajesComponents/Amber';
import { Barbara } from './personajesComponents/Barbara';
import { Beidou } from './personajesComponents/Beidou';
import { Bennett } from './personajesComponents/Bennett';
import { Chongyun } from './personajesComponents/Chongyun';
import { Diluc } from './personajesComponents/Diluc';
import { Diona } from './personajesComponents/Diona';
import { Hu_Tao } from './personajesComponents/Hu_Tao';


export const PersonajeBuild = ({location}) => {

    //Obtención de la data proviniente de React Router Dom (path + state)
    const {state} = location
    const {personaje} = state;

    //Los componentes necesitan ser definidos e importados para generarse 
    //DINÁMICAMENTE!
    const Components = {
        Albedo: Albedo,
        Amber: Amber,
        Barbara: Barbara,
        Bennett: Bennett,
        Beidou: Beidou,
        Chongyun: Chongyun,
        Diluc: Diluc,
        Diona: Diona,
        Hu_Tao: Hu_Tao,

      };

    const Dynamic = Components[personaje.name]

    return (
        <>
        <Header />
        <NavbarUi />
        <div className="personajeBuild__container animate__animated animate__fadeIn">


            <div className="personajeBuild__card">
                <h1 className=" personajeBuild__name">{personaje.name}</h1>

                <div className="personajeBuild__images">
                <img src={thumbnailImages(`./${personaje.name}.png`).default}
                    alt={personaje.name}
                    className="personajeBuild__thumbnail"
                />

                <img src={elementosImages(`./${personaje.element}.png`).default}
                    alt={personaje.element}
                    className="personajeBuild__element"
                    /> 
                </div>
                <div className="personajeBuild__description">
                    <h3>{personaje.weapon.toUpperCase()}</h3>
                    <p><b>{personaje.rol1}</b></p>
                    <p><b>{personaje.rol2}</b> </p>
                </div>
            </div>
            <div className="personajeBuild__tip">
            <p><b>Las armas y artefactos están ordenados de mejor a peor opción(izquierda a derecha y arriba abajo)</b></p>
            <p><i>Recuerda que es recomendable utilizar los personajes en su rol principal pero siempre puedes experimentar con distintas composiciones de equipo</i> 😊</p>
            <p><i>Los roles se dividen en DPS (Daño por segundo) 
                Apoyo (Ayudan a que el DPS haga más daño) 
                Nuke (Gran cantidad de daño en muy poco tiempo y rotar) 
                Healers (Curanderos) </i></p>
            </div>
            <Dynamic personaje = {personaje} />
        </div>
        </>
    )
}
