import { Fragment } from "react";
import logo from './imagenes/TodoTurismo.jpg';

function ImgLogo(){

    return(
        <>
        <img alt = 'logo' src={logo} className="imgLogo"/>
        </>
    )
}

function Menu(){

    return(
        <>
       
        <div className="menuBar">
            <button className="menuBar_boton">Quienes Somos</button>
            <button className="menuBar_boton">Dónde Viajar</button>
            <button className="menuBar_boton">Dónde Quedarse</button>
            <button className="menuBar_boton">Dónde Blog</button>
            <button className="menuBar_boton">Dónde Contacto</button>
        </div>
        </>
    )

}

function Cabecera(){

    return(

        <>
        <div>
            <imgLogo></imgLogo>
            <Menu></Menu>
        </div>
        
        </>
    )
}

export default Cabecera;