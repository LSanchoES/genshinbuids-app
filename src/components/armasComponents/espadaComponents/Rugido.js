import React, { useState } from 'react'
import {espadaImages} from "../../../helpers/images";
import ReactCardFlip from 'react-card-flip';

export const Rugido = () => {
    const [isFliped, setIsFliped] = useState(false)
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsFliped(!isFliped);
      }
    return (
        <div>
            <ReactCardFlip isFlipped={isFliped} flipDirection="vertical">
            <img src={espadaImages(`./Rugido_del_Leon.png`).default}
                alt="Rugido del Leon"
                className="armas__image"
                onClick={handleClick}
            />
            <p onClick={handleClick}
                className="armas__text"
            >
                Rugido del Leon
            </p>
            </ReactCardFlip>
        </div>
    )
}
