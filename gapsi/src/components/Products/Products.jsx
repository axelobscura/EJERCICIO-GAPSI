import React from 'react';
import {Link} from "react-router-dom";
import './Products.css';

export default function Products(props) {
    let productos = JSON.parse(props.data.item[0].response[0].body);
    let productosUno = JSON.parse(props.data.item[0].response[1].body);
    let productosDos = JSON.parse(props.data.item[0].response[2].body);
    console.log(props.data);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>{props.data.item[0].name}</h1>
                        <div className="row">
                        {productos.data.products.map((product, index) => (
                            <div className="col-3" key={product.ID}>
                                <div className="card" style={{width: '18vw'}}>
                                <img src={product.IMAGE} className="card-img-top" alt="..." style={{maxHeight: '200px'}} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.NAME}</h5>
                                    <h1>$ {product.PRICE}</h1>
                                    <p className="card-text">{product.DESCRIPTION}</p>
                                </div>
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className="row">
                        {productosUno.data.products.map((product, index) => (
                            <div className="col-3" key={product.ID}>
                                <div key={index} className="card" style={{width: '18vw'}}>
                                <img src={product.IMAGE} className="card-img-top" alt="..." style={{maxHeight: '200px'}} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.NAME}</h5>
                                    <h1>$ {product.PRICE}</h1>
                                    <p className="card-text">{product.DESCRIPTION}</p>
                                </div>
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className="row">
                        {productosDos.data.products.map((product, index) => (
                            <div className="col-3" key={product.ID}>
                                <div key={index} className="card" style={{width: '18vw'}}>
                                <img src={product.IMAGE} className="card-img-top" alt="..." style={{maxHeight: '200px'}} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.NAME}</h5>
                                    <h1>$ {product.PRICE}</h1>
                                    <p className="card-text">{product.DESCRIPTION}</p>
                                </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
    )
}