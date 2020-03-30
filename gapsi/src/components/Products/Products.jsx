import React from 'react';
import {Link} from "react-router-dom";
import './Products.css';

export default function Products(props) {
    let productos = JSON.parse(props.data.item[0].response[0].body);
    console.log(productos);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>{props.data.item[0].name}</h1>
                    <div className="row">
                    {productos.data.products.map((product, index) => (
                        <div className="col-3">
                            <div key={index} className="card" style={{width: '18vw'}}>
                            <img src={product.IMAGE} className="card-img-top" alt="..." />
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