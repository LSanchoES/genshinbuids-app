import React, { useRef } from 'react'


export const Header = () => {
    
    const heading = useRef()

    return (
		<div className="pS__container animate__animated animate__fadeIn"
           ref={heading}
        >
			<h1 className="head__title">GenshinBuilds</h1>
        </div>
    )
}
