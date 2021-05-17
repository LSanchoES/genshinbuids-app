import React, { useState } from 'react'
import {arcoImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Peñasco = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={arcoImages(`./Arco_del_Peñasco_Oscuro.png`).default}
                alt="Arco del Peñasco Oscuro"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Arco del Peñasco Oscuro
            </p>
            </ReactCardFlip>
        </div>
    )
}
