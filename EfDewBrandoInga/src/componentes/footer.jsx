import React from "react";
import  { Fragment, useState } from 'react'
import fb from "../imagenes/fb.png"
import ig from "../imagenes/ig.png"
import yt from "../imagenes/yt.png"

function Footer(){

    const [efecto,setEfecto] = useState(false);
    const [efecto1,setEfecto1] = useState(false);
    const [efecto2,setEfecto2] = useState(false);

    const imgHover = () => {
        setEfecto(true)
    }

    const imgNotHover = () => {
        setEfecto(false)
    }

    const imgHover1 = () => {
        setEfecto1(true)
    }

    const imgNotHover1 = () => {
        setEfecto1(false)
    }

    const imgHover2 = () => {
        setEfecto2(true)
    }

    const imgNotHover2 = () => {
        setEfecto2(false)
    }


    return(

        <>
        
        <div className="contenedor_footer">

            <div className="footer1">
                <p>www.delipizza.com</p>
                <p>Síguenos en Facebook</p>
            </div>

            <div className="footer2">
                <img  className= "img_footer" src={fb}
                onMouseOver={imgHover} 
                onMouseLeave={imgNotHover}
                
                style={{transform: efecto? "scale(1.5)": "scale(1)",
                    transition: 'transform 1s'
                }}

                />
                <img className= "img_footer" src={ig}
                onMouseOver={imgHover1} 
                onMouseLeave={imgNotHover1}
                
                style={{transform: efecto1? "scale(1.5)": "scale(1)",
                    transition: 'transform 1s'                
                }}
                    />
                <img  className= "img_footer" src={yt}
                onMouseOver={imgHover2} 
                onMouseLeave={imgNotHover2}
                
                style={{transform: efecto2? "scale(1.5)": "scale(1)",
                    transition: 'transform 1s'
                }}
                    />
             </div>


        </div>

        </>



    )


}

export default Footer