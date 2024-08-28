import React, { useEffect } from "react";
import  { Fragment, useState } from 'react'
import ArrayCarrusel from './ArrayCarrusel.jsx'

function Carrusel(){

    const[indice,setIndice] = useState(0);

    useEffect(() => {

    const aumentarIndice = setInterval( () => {
        
        setIndice((i) => (i + 1) % ArrayCarrusel.length)
    
    }, 2000);

    return () => clearInterval(aumentarIndice);

    },[])


    return(

        <>
        <div className="Carrusel_Contenedor">
        <img className= "Carrusel_img" alt='falta img' src={ArrayCarrusel[indice]}/>
        </div>
        </>
    );
}

export default Carrusel