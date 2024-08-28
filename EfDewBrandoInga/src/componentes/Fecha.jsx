import React, {Component} from "react";

class FechaHora extends Component {


    state = {
        fecha : null,
        hora : null
    };


    componentDidMount() {
        
        let f = new Date();
       

        this.setState ({
            fecha : f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()
        });

        this.interval = setInterval(() => {

            let f = new Date();
            let h = f.getHours();
            let m = f.getMinutes() < 10 ? "0" + f.getMinutes() : f.getMinutes();
            let s = f.getSeconds() < 10 ? "0" + f.getSeconds() : f.getSeconds();
            
            this.setState({
                hora: h + ":" + m  + ":" + s
            });

        },1000)

    }

    render(){

        return (

            <>
            
            <div className="FechaHora">
                <div className="Fecha">Fecha: {this.state.fecha}</div>
                <div className="Hora">Hora: {this.state.hora}</div>

            </div>
            
            </>

        )
 
    }
}

export default FechaHora;