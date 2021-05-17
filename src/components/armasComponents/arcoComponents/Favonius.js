import React, { useState } from 'react'
import {arcoImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Favonius = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={arcoImages(`./Arco_de_Favonius.png`).default}
                alt="Arco de Favonius"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Arco de Favonius
            </p>
            </ReactCardFlip>
        </div>
    )
}
