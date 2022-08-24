import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function Detalle(){
    const {id} = useParams();    
    console.log(id);

    const [detalleProducto , setPetalleProducto] = useState([]);

    const searchProducto= (()=> {
		fetch(`http://localhost:3001/api/items/${id}`)        
		.then(response => response.json())
		.then(data => {
            console.log(data)
            setPetalleProducto(data);});
	})

    useEffect(()=>{console.log(detalleProducto)},[detalleProducto])

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
        </React.Fragment>

    )
}

export default Detalle;