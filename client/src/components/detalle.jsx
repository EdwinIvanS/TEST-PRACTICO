import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './header';


function Detalle(){
    const {id} = useParams();
    const [detalleProducto , setPetalleProducto] = useState([]);

    useEffect(()=> {
		fetch(`http://localhost:3001/api/items/${id}`)        
		.then(response => response.json())
		.then(data => {
            setPetalleProducto(data);});
	},[])

    useEffect(()=>{console.log(detalleProducto.items)},[detalleProducto])

    return(
        <React.Fragment>                  
        <Header></Header> 
        {
            detalleProducto.items  && detalleProducto.items.map((key , i) => {
                return(
                <div className='Container'>
                    <div  key={i} className='Container-detalle-Produt'>
                        <div className='container-detalle-img'>
                            <div className='container-img'>
                                <img src={key.picture}/>
                            </div>
                        </div>
                        <div className='container-detalle-titulo-precio'>
                            <p className="">{key.condition} {key.sold_quantity} Vendidas</p>
                            <h6>{key.title}</h6>
                            <div className='container-detalle-precios'>
                                <h1> $ {key.price.amount}</h1>
                                <h5> {key.price.decimals}</h5>
                            </div>
                            <button>Comprar</button>
                        </div>
                    </div> 
                    <div className='container-detalle-descripcion'>
                        <p>Descripción del producto</p>
                        <h2>{key.description}</h2>
                    </div>
                </div>                                 
                )
            })
        }
        </React.Fragment>  
    )
}

export default Detalle;