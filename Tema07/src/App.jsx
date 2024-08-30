import { useState } from 'react'
import './App.css'
import Menu from './Componentes/Menu/Menu.jsx'
import Cabecera from './Componentes/Cabecera/Cabecera.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu/>
    </>
  )
}

export default App
