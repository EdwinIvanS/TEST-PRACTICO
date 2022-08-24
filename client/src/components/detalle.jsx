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
        <div className='Container-detalle-Produt'>
                <div className='container-detalle-img-descripcion'>
                    <div className='container-img'>

                    </div>
                    <div className='container-descripcion'>

                    </div>
                </div>
                <div className='container-detalle-titulo-precio'>
                    <h5>valor</h5>
                    <h3>valor</h3>
                    <h1>valor</h1>
                    <button>Comprar</button>
                </div>
            </div>

        {
            detalleProducto.items  && detalleProducto.items.map((key , i) => {
            console.log(key)
            return(
                <div key={i}> id={key.id}, title={key.title}, currency={key.price.currency}, amount={key.price.amount}, decimals={key.price.decimals}, picture={key.picture}, condition={key.condition}, free_shipping={key.free_shipping}, sold_quantity={key.sold_quantity}, description={key.description}</div>                        
                )
            })
        }
        </React.Fragment>  
    )
}

export default Detalle;