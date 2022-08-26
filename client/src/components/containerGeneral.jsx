import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import Content  from './content'
import Breadcrumb from "./breadcrumb";


function ContainerGeneral(){
    const valorBuscado = new URLSearchParams(useLocation().search);
    const searchCadena = valorBuscado.toString().replace("search=","");
    const [productos,setProductos] = useState([]);
    const [categories,setCategories] = useState([]);

    React.useEffect(()=>{
        fetch(`http://localhost:3001/api/items?q=:${searchCadena}`)        
        .then(response => response.json())
        .then(data =>{ 
            let containerCategory = [];
            data.categories?.forEach(element => {
            containerCategory.push(element.replace("_", " ") + " / ");            
            });
            setCategories(containerCategory);
            setProductos(data);});
	})  

    return(
        <React.Fragment>
        <Header></Header>

            {             
                categories ? <Breadcrumb category={categories}/> : <h1>No hay categorias para estos productos</h1>
            }
            { 
                productos.items  && productos.items.map((key , i) => {               
                    return(                   
                        <Content key={i} id={key.id} title={key.title} currency={key.price.currency} amount={key.price.amount} decimals={key.price.decimals} picture={key.picture} condition={key.condition} free_shipping={key.free_shipping} category={productos.categories}/>
                    )
                })
            } 
        </React.Fragment>        
    )          
}


export default ContainerGeneral;