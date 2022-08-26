import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './header';


function Detalle(props){
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
        <Header/> 
        {
            detalleProducto.items  && detalleProducto.items.map((key , i) => {
                return(
                    <div className='Container'>
                        <div className="Container-detalle-producto1"></div>
                        <div className="Container-detalle-producto2">
                            <div  key={i} className='Container-detalle-Produt'>
                                <div className='container-detalle-img'>
                                    <div className='container-img'>
                                        <img src={key.picture} alt=""/>
                                    </div>
                                    <div className='container-detalle-descripcion'>
                                        <h6>Descripción del producto</h6>
                                        {
                                            key.description ?
                                            <p>{key.description}</p>
                                            :
                                            <p>It only takes a minute tod sign up and our free starter tier is extremely generous. If you have any questions, our support team wold be happy to help you.</p>
                                        }
                                    </div>
                                </div>
                                <div className='container-detalle-titulo-precio'>
                                    <p className='unidades-vendidas'>{key.condition} {key.sold_quantity} Vendidas</p>
                                    <h6 className='titulo-product'>{key.title}</h6>
                                    <h2> $ {key.price.amount}</h2>
                                    <button>Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div className="Container-detalle-producto3"></div> 
                    </div>                               
                )
            })
        }
        </React.Fragment>  
    )
}

export default Detalle;