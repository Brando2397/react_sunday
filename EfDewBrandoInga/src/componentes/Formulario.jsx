import { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";

function Formulario (){
    const [ nombreApellidos, setNombreApellidos ] = useState('');
    const [ correo, setCorreo ] = useState('');
    const [ pedido, setPedido ] = useState('');

    const regexTexto = /^[a-zA-ZÁÉÍÓÚáéíóúñ\s]+$/;
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const realizandoPedido = (e) => {
        e.preventDefault();
        if (nombreApellidos === '' || correo === '' || pedido === '') {
            alert('Debe ingresar los datos que están solicitando, por favor');
        }
        if ((regexTexto.test(nombreApellidos) === false && nombre != '') || (regexCorreo.test(correo) === false && correo != '') || (regexTexto.test(pedido) === false && pedido != '')) {
            alert('No se ha ingresado datos validos');

        } else {
            alert(`Datos ingresados: { ${nombreApellidos}, ${correo}, ${pedido}}`);
        }

    }

    const agregarNombreApellido = (e) => setNombreApellidos(e.target.value);
    const agregarCorreo = (e) => setCorreo(e.target.value);
    const agregarPedido = (e) => setPedido(e.target.value);

    return(
        <>
        <div className="contenedor_Form">
        <h3 className="Titulo_form">Contáctanos para poder llevar una DeliPizza a tu casa</h3>
        <Form onSubmit={realizandoPedido} className="FormGlobal">
            <Form.Group>
                <p className="Subti_form">Nombres y Apellidos: </p>
                <Form.Control className= "Form" type="text" value={nombreApellidos} onChange={agregarNombreApellido} placeholder="Nombres y Apellidos"></Form.Control>
                <p className="Subti_form">Correo: </p>
                <Form.Control className= "Form"  type="text" value={correo} onChange={agregarCorreo} placeholder="ejemplo@email.com" ></Form.Control>
                <p className="Subti_form">Pedido: </p>
                <Form.Control  className= "Form" type="textarea " value={pedido} onChange={agregarPedido} placeholder="Describe tu pedido aquí"></Form.Control>
            </Form.Group>
            <Button type="submit">Enviar </Button>
        </Form>
        </div>
        </>
    );
}

export default Formulario;