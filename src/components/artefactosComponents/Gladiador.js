import React, { useState } from 'react'
import {artefactosImages} from "../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Gladiador = () => {
    const [isFliped, setIsFliped] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={artefactosImages(`./gladiador.png`).default}
                alt="Final del gladiador"
                className="artefactos__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="artefactos__text"
            >
                Final del Gladiador   
            </p>
            </ReactCardFlip>
        </div>
    )
}
