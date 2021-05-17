import React, { useState } from 'react'
import {artefactosImages} from "../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Furia = () => {
    const [isFliped, setIsFliped] = useState(false)
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={artefactosImages(`./furia.png`).default}
                alt="Furia del Trueno"
                className="artefactos__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="artefactos__text"
            >
                Furia del Trueno   
            </p>
            </ReactCardFlip>
        </div>
    )
}
