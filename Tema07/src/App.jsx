import { useState } from 'react'
import './App.css'
import Menu from './Componentes/Menu/Menu.jsx'
import Cabecera from './Componentes/Cabecera/Cabecera.jsx'
import Cuerpo from "./Componentes/Cuerpo/Cuerpo.jsx"

function App() {


  return (
    <>
      <Menu/>
      <Cabecera/>
      <Cuerpo/>
    </>
  )
}

export default App
