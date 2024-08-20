import { Fragment } from "react";
import logo from './imagenes/TodoTurismo.jpg';
import lupa from './imagenes/Lupa.png';

function ImgLogo(){

    return(
        <>
        <img alt = 'logo' src={logo} className="imgLogo"/>
        </>
    )
}

function BarraBusqueda(){

    return(
        <>
        <div className="BarraBusqueda">
            <img className="imgBusqueda" src={lupa} alt="lupa"></img>
        </div>
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

function Nav(){

    return(

        <>
        <div className="cabecera">
            <div className="cabecera_izq">
                <ImgLogo></ImgLogo>
            </div>
            
            <div className="cabecera_der">
                <BarraBusqueda></BarraBusqueda>
                <Menu></Menu>
            </div>
            
        </div>
        
        </>
    )
}

export default Nav;