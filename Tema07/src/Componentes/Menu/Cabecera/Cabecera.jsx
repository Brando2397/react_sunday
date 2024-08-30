import React from 'react';
import diaEnero from './Img/diaEnero.jpg'

function Titulo(){

    return(
        <>
        <h1>Mis Canciones Preferidas</h1>
        </>
    )
}

function Cuerpo(){

    return(
        <>
        <img className='imgPrincipal' src={diaEnero} alt="Imagen Principal"/>
        </>
    )
}

function Cabecera(){

    return(
        
        <>
            <Titulo/>
            <Cabecera/>
        </>

    )
}

export default Cabecera