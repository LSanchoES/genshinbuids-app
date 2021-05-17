import React, { useState } from 'react'
import {espadaImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Hoja = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={espadaImages(`./Hoja_Afilada_Celestial.png`).default}
                alt="Hoja Afilada Celestial"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Hoja Afilada Celestial
            </p>
            </ReactCardFlip>
        </div>
    )
}
