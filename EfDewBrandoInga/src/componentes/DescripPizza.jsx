import React from "react";
import Pizza from '../imagenes/pizza.jpg'

function DescripcionPizza (){

    return(

        <>
            <div className="Pizza_Lateral">

                <img className= "Pizza_Lateral_img" src= {Pizza} />
                <div className="Pizza_Lateral_Descripcion">
                    <h3>Pizza Americana</h3>
                    <p>Lorem Lorem</p>
                </div>

            </div>
        
        </>
    )


}

export default DescripcionPizza