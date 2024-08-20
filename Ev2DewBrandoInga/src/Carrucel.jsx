import { Fragment } from "react";
import { useState } from 'react';
import ImgCarrucel from './IMGCarrucel'

var carrucel = ImgCarrucel;


function Carrucel() {

    return(

        <>
        <div className="banner">
            <img className="carrucel" alt="banner" src={carrucel[4]}></img>
        </div>
        </>

    )
}

export default Carrucel;