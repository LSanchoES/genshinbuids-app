import React, { useState } from 'react'
import {catalizadorImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Grimorio = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={catalizadorImages(`./Grimorio_Real.png`).default}
                alt="Grimorio Real"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Grimorio Real
            </p>
            </ReactCardFlip>
        </div>
    )
}
