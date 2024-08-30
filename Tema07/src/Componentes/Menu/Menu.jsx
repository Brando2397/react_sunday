import React from 'react';
import './Menu.css'


function Menu(){

    const nombresItems = ['Inicio', 'Tradicion', 'Gastronomia', 'Plato Bandera']

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