import { Fragment } from "react";
import img03 from './imagenes/imgSeccion03.jpg'

function Seccion3(){

    return(
        <>
            <div className="seccion3">
                <div className="seccion3_izq">
                    <h3>Conoce los lugares Sorprendentes</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe tempore expedita alias nam distinctio placeat, necessitatibus inventore, optio earum sed voluptatem iste consectetur ratione sint incidunt obcaecati quis. Nobis, asperiores?</p>
                </div>

                <div className="seccion3_der">
                    <img src={img03} alt="img03"></img>
                </div>
            </div>
        </>
    )
}
export default Seccion3