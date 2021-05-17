import React, { useState } from 'react'
import {catalizadorImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Oracion = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={catalizadorImages(`./Oración_Perdida_a_los_Vientos_Sagrados.png`).default}
                alt="Oración Perdida a los Vientos Sagrados"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Oración Perdida a los Vientos Sagrados
            </p>
            </ReactCardFlip>
        </div>
    )
}
