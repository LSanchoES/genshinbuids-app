import React, { useRef } from 'react'


export const Header = () => {
    
    const heading = useRef()

    return (
		<div className="pS__container"
           ref={heading}
        >
			<h1 className="head__title">GenshinBuilds</h1>
        </div>
    )
}
