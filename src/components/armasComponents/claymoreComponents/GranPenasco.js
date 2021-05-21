import React, { useState } from 'react'
import {claymoreImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const GranPenasco = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={claymoreImages(`./Gran_Hoja_del_Penasco_Oscuro.png`).default}
                alt="Gran Hoja del Peñasco Oscuro"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Gran Hoja del Peñasco Oscuro
            </p>
            </ReactCardFlip>
        </div>
    )
}
