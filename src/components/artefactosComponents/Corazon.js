import React, { useState } from 'react'
import {artefactosImages} from "../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Corazon = () => {
    const [isFliped, setIsFliped] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={artefactosImages(`./corazon.png`).default}
                alt="Corazon de las profundidades"
                className="artefactos__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="artefactos__text"
            >
                Corazón de las pro- fundidades  
            </p>
            </ReactCardFlip>
        </div>
    )
}
