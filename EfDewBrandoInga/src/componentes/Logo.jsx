import React from "react";
import  { Fragment, useState } from 'react'
import Logo from '../imagenes/logo.jpg'

function LogoEfecto(){

    const [efecto,setEfecto] = useState(false);

    const imgHover = () => {
        setEfecto(true)
    }

    const imgNotHover = () => {
        setEfecto(false)
    }


    return(
        
        <>
            <img  alt='Logo' src={Logo} className='Logo'
            onMouseOver={imgHover} 
            onMouseLeave={imgNotHover}
            style={{transform: efecto? "rotate(180deg)": "rotate(0deg)" }}
            />

        
        </>
    )

}

export default LogoEfecto