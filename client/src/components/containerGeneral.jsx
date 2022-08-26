import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import Content  from './content'


function ContainerGeneral(){
    const valorBuscado = new URLSearchParams(useLocation().search);
    const searchCadena = valorBuscado.toString().replace("search=","");

    const [productos,setProductos] = useState([]);

    React.useEffect(()=>{
        fetch(`http://localhost:3001/api/items?q=:${searchCadena}`)        
        .then(response => response.json())
        .then(data =>{ setProductos(data);});
	})  

    React.useEffect(()=>{},[productos])

    return(
        <React.Fragment>
        <Header></Header>
            { 
                productos.items  && productos.items.map((key , i) => {               
                    return(                   
                        <Content key={i} id={key.id} title={key.title} currency={key.price.currency} amount={key.price.amount} decimals={key.price.decimals} picture={key.picture} condition={key.condition} free_shipping={key.free_shipping} category={productos.categories}/>
                    )
                }
                )
            } 
        </React.Fragment>        
    )          
}


export default ContainerGeneral;