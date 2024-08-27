import { Fragment } from "react"

import 'bootstrap/dist/css/bootstrap.min.css'
import Menu from "./componente/Menu";
import Carrusel from './componente/carrusel'
import PreguntasFrecuentes  from './componente/Acordion'

function App() {
  return (
    <>
      <Menu />
      <Carrusel />
      <PreguntasFrecuentes />
    </>
  );
}

export default App;