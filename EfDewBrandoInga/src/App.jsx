import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogoEfecto from './componentes/Logo.jsx'
import FechaHora from './componentes/Fecha.jsx'
import Carrusel from './componentes/Carrusel.jsx'
import DescripcionPizza from './componentes/DescripPizza.jsx'

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
      </div>
    </>
  )
}

export default App
