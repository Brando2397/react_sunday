import React from "react";
import  { Fragment, useState } from 'react'
import Logo from '../imagenes/logoLetra.png'
import LogoPizza from '../imagenes/logoPizza.png'

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
            <img  alt='Logo' src={LogoPizza} className='Logo'
            onMouseOver={imgHover} 
            onMouseLeave={imgNotHover}
            style={{transform: efecto? "rotate(360deg)": "rotate(0deg)",
                transition: 'transform 0.8s'
            }}
            
            />

            <img  alt='Logo' src={Logo} className='Logo'
            onMouseOver={imgHover} 
            onMouseLeave={imgNotHover}
            style={{left: efecto? "30px": "0px",
                transition: 'left 0.5s'
            }}
            
            />
        
        </>
    )

}

export default LogoEfecto