import React from 'react';
import diaEnero from './Img/diaEnero.jpg'
import './Cabecera.css'

function Titulo(){

    return(
        <>
        <h1 className='Titulo'>Mis Canciones Preferidas</h1>
        </>
    )
}

function Cuerpo(){

    return(
        <>
        <div className='cuerpoCabecera'>       
             <img className='imgPrincipal' src={diaEnero} alt="Imagen Principal"/>
        </div>

        </>
    )
}

function Cabecera(){

    return(
        
        <>  
            <div className='Cabecera'>
            <Titulo/>
            <Cuerpo/>
        </div>
        </>

    )
}

export default Cabecera