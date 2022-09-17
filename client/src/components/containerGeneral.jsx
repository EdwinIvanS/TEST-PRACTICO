import React from 'react';
import Header from './header';
import SectionProducts from "./sectionProducts";
import Breadcrumb from "./breadcrumb";
import { UseFetchProductsAll } from './hooks/UseFetchProductsAll';

function ContainerGeneral(){
    const { productos, categories , isFetching} = UseFetchProductsAll();
    if(isFetching) return console.log("Loadding Products........")

    return(
        <React.Fragment>
        <Header></Header>
        <Breadcrumb category={categories}/> 
            { 
                productos.items  && productos.items.map( (key , i) => {     
                    return(                   
                        <SectionProducts key={i} id={key.id} title={key.title} currency={key.price.currency} amount={key.price.amount} decimals={key.price.decimals} picture={key.picture} condition={key.condition} free_shipping={key.free_shipping} category={productos.categories}/>
                    )
                })
            } 
        </React.Fragment>        
    )          
}

export default ContainerGeneral;