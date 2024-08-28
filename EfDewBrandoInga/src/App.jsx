import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogoEfecto from './componentes/Logo.jsx'
import FechaHora from './componentes/Fecha.jsx'
import Carrusel from './componentes/Carrusel.jsx'
import DescripcionPizza from './componentes/DescripPizza.jsx'
import Formulario from './componentes/Formulario.jsx'
import Footer from "./componentes/footer.jsx"

function App() {

  return (
    <>
      <div className='Cabecera'>
       <LogoEfecto/>
       <FechaHora/>
      </div>
      <Carrusel/>
      <div className='Cuerpo2'>
      <DescripcionPizza/>
      <Formulario/>
      </div>
      <Footer/>
    </>
  )
}

export default App
