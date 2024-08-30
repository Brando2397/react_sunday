import React from 'react';
import './Menu.css'


function Menu(){

    const nombresItems = ['Inicio', 'Artistas', 'Mis top 10', 'Mis top Videos']

    const itemsBarNav = nombresItems.map((item,index) => 
    
    <li key={index} className='itemLista'>
        <a  href='#'>{item}</a>
    </li>

    )
    return(

        <>
            <nav className='barraNav'>
                <ul>
                    {itemsBarNav}
                </ul>
            </nav>


        </>
    )

}

export default Menu