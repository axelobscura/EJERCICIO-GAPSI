import React from 'react';
import Logo from './logo.png';

export default function Home(props){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-12" style={{background: '#F9FAFB', padding: '20px'}}>
                    <img src={Logo} alt="GATSBI - Ejercicio" title="GATSBI - Ejercicio" style={{maxWidth: '200px'}} />
                    <h1 className="p-2">Bienvenido Candidato 01</h1>
                    <a href="/productos" className="btn btn-primary">CONTINUAR</a>
                </div>
                <div className="col-12">
                    <div className="alert alert-primary" role="alert">
                        {props.version}
                    </div>
                </div>
            </div>
        </div>
    )
}