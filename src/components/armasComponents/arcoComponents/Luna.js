import React, { useState } from 'react'
import {arcoImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Luna = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={arcoImages(`./Prototipo_Luz_de_Luna.png`).default}
                alt="Prototipo Luz de Luna"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Prototipo Luz de Luna
            </p>
            </ReactCardFlip>
        </div>
    )
}
