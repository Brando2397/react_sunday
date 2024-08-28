import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogoEfecto from './componentes/Logo.jsx'
import FechaHora from './componentes/Fecha.jsx'

function App() {

  return (
    <>
      <div className='Cabecera'>
       <LogoEfecto/>
       <FechaHora/>
      </div>
      
    </>
  )
}

export default App
