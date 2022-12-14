import React from 'react';
import Header from './header';
import Breadcrumb from "./breadcrumb";
import { UseFetchProduct } from './hooks/UseFetchProduct';

function Detalle(){
    const { detalleProducto, categories , isFetching } = UseFetchProduct();    
    if(isFetching) return console.log("Loadding Detail Product........")

    return(
        <React.Fragment>        
        <Header/> 
        <Breadcrumb category={categories}/> 

        {
            detalleProducto[0] !==''  && detalleProducto.map((key , i) => {
                return(
                    <div key={key.id + i} className='Container'>
                        <div className="Container-detalle-producto1"></div>
                        <div className="Container-detalle-producto2">
                            <div  className='Container-detalle-Produt'>
                                <div  className='container-detalle-img'>
                                    <div className='container-img'>
                                        <img src={key.item.picture} alt=""/>
                                    </div>
                                    <div className='container-detalle-descripcion'>
                                        <h6>Descripción del producto</h6>
                                        <p>{key.item.description}</p>
                                    </div>
                                </div>
                                <div className='container-detalle-titulo-precio'>
                                    <p className='unidades-vendidas'>{key.item.condition} {key.item.sold_quantity} Vendidas</p>
                                    <h6 className='titulo-product'>{key.item.title}</h6>
                                    <h2> $ {key.item.price.amount}</h2>
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