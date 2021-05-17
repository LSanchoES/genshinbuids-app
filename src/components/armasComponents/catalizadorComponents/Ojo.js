import React, { useState } from 'react'
import {catalizadorImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Ojo = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={catalizadorImages(`./Ojo_de_la_Perspicacia.png`).default}
                alt="Ojo de la Perspicacia"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Ojo de la Perspicacia
            </p>
            </ReactCardFlip>
        </div>
    )
}
