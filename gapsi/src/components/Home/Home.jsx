import React from 'react';
import Logo from './logo.png';

export default function Home(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12" style={{background: '#F9FAFB', padding: '20px'}}>
                    <img src={Logo} alt="GATSBI - Ejercicio" title="GATSBI - Ejercicio" style={{maxWidth: '200px'}} />
                    <h1 className="p-2">Bienvenido Candidato 01</h1>
                    <a href="/productos" class="btn btn-primary">CONTINUAR</a>
                </div>
            </div>
        </div>
    )
}