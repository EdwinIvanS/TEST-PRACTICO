import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function Detalle(){
    const {id} = useParams();

    const [detalleProducto , setPetalleProducto] = useState([]);

    useEffect(()=> {
		fetch(`http://localhost:3001/api/items/${id}`)        
		.then(response => response.json())
		.then(data => {
            setPetalleProducto(data);});
	},[])

    useEffect(()=>{        
        console.log("AQUI ESTOY - EJECUTANDO LA API")
        console.log(detalleProducto.items)},[detalleProducto])

    return(
        <React.Fragment>
        {
            detalleProducto.items  && detalleProducto.items.map((key , i) => {
                return(
                <div  key={i} className='Container-detalle-Produt'>
                    <div className='container-detalle-img-descripcion'>
                        <div className='container-img'>
                            <img src={key.picture}/>
                        </div>
                        <div className='container-descripcion'>
                            <h2>Descripción del producto</h2>
                            <p>{key.description}</p>
                        </div>
                    </div>
                    <div className='container-detalle-titulo-precio'>
                        <h5>{key.condition} {key.sold_quantity} Vendidas</h5>
                        <h3>{key.title}</h3>
                        <h1>{key.price.amount}</h1>
                        <button>Comprar</button>
                    </div>
                </div>                                    
                )
            })
        }
        </React.Fragment>  
    )
}

export default Detalle;