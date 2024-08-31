import React from 'react'
import imagenes from './Img/arrayImg.jsx'
import './Cuerpo.css'


function presionarImgGrid(id){

console.log('Se ha presionado la imagen numero ' + id) 
   
}

function pasarImg(){




}

function Cuerpo(){

    const imgCuerpo = imagenes.map((item) => 
    
        <div className='contenedorImg' key={item.id} onClick = {() => presionarImgGrid(item.id)} onMouseEnter={() => pasarImg()}>

            <div className='img'
            
            style={{backgroundImage: `url(${item.img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'}}
            
            >

                <div className='textoImg'>

                    

                </div>
            </div>
            
        
        </div>)
            

    return(

        <>
            <div className='contenedorImagenes'>
                {imgCuerpo}
            </div>
        </>
    )

}

export default Cuerpo