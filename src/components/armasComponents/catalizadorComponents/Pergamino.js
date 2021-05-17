import React, { useState } from 'react'
import {catalizadorImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Pergamino = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={catalizadorImages(`./Pergamino_Celestial.png`).default}
                alt="Pergamino Celestial"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Pergamino Celestial
            </p>
            </ReactCardFlip>
        </div>
    )
}
