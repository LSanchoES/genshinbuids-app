import React, { useEffect, useRef} from 'react'


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
import { Eula } from './personajesComponents/Eula';
import { Fischl } from './personajesComponents/Fischl';
import { Ganyu } from './personajesComponents/Ganyu';
import { Hu_Tao } from './personajesComponents/Hu_Tao';
import { Jean } from './personajesComponents/Jean';
import { Kaeya } from './personajesComponents/Kaeya';
import { Keqing } from './personajesComponents/Keqing';
import { Klee } from './personajesComponents/Klee';
import { Lisa } from './personajesComponents/Lisa';
import { Mona } from './personajesComponents/Mona';
import { Ningguang } from './personajesComponents/Ningguang';
import { Noelle } from './personajesComponents/Noelle';
import { Qiqi } from './personajesComponents/Qiqi';
import { Razor } from './personajesComponents/Razor';
import { Rosaria } from './personajesComponents/Rosaria';
import { Sacarosa } from './personajesComponents/Sacarosa';
import { Tartaglia } from './personajesComponents/Tartaglia';
import { Venti } from './personajesComponents/Venti';
import { Viajero_Anemo } from './personajesComponents/Viajero_Anemo';
import { Viajero_Geo } from './personajesComponents/Viajero_Geo';
import { Xiangling } from './personajesComponents/Xiangling';
import { Xiao } from './personajesComponents/Xiao';
import { Xingqiu } from './personajesComponents/Xingqiu';
import { Xinyan } from './personajesComponents/Xinyan';
import { Yanfei } from './personajesComponents/Yanfei';
import { Zhongli } from './personajesComponents/Zhongli';


export const PersonajeBuild = (history) => {

    //Obtención de la data proviniente de React Router Dom (path + state)

    const {location} = history
    const {state} = location
    const {personaje} = state;
    

    //Top de cada page

    const ref = useRef()

    useEffect(() => {
        ref.current.scrollIntoView()
    }, [])
    //Referencia a #gosth para llevar alli la vista
      
    
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
        Eula: Eula,
        Fischl: Fischl,
        Ganyu: Ganyu,
        Hu_Tao: Hu_Tao,
        Jean: Jean,
        Kaeya: Kaeya,
        Keqing: Keqing,
        Klee: Klee,
        Lisa: Lisa,
        Mona: Mona,
        Ningguang: Ningguang,
        Noelle: Noelle,
        Qiqi: Qiqi,
        Razor: Razor,
        Rosaria: Rosaria,
        Sacarosa: Sacarosa,
        Tartaglia: Tartaglia,
        Venti: Venti,
        Viajero_Anemo: Viajero_Anemo,
        Viajero_Geo: Viajero_Geo,
        Xiangling: Xiangling,
        Xiao: Xiao,
        Xingqiu: Xingqiu,
        Xinyan: Xinyan,
        Yanfei: Yanfei,
        Zhongli: Zhongli,

      };

    const Dynamic = Components[personaje.name];

      
    return (
        <>
        
        <span className="gosth"ref={ref}></span>
        <Header  />
        <NavbarUi />
  
        <div className="personajeBuild__container animate__animated animate__fadeIn">


            <div className="personajeBuild__card animate__animated animate__slideInDown">
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

         
                <p>Los roles se dividen en:
                DPS (Daño por segundo) 
                SubDPS(Hacen daño estando fuera de combate)
                Nuke (Gran cantidad de daño en muy poco tiempo y rotar) 
                Apoyo (Aportan utilidad a la batalla como más daño, escudos y otras habilidades) 
                Healers (Curanderos)</p>
         

            <p><i>Recuerda que es recomendable utilizar los personajes en su rol principal pero siempre puedes experimentar con distintas composiciones de equipo</i> 😊</p>

            </div>
            <Dynamic personaje = {personaje} />
        </div>
        </>
    )
}
