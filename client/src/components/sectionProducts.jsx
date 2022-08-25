import React from 'react';
import Products from './products';

function SectionProducts(props){
    const {id, title, amount, picture, category} = props;

    return(
        <React.Fragment> 
            <Products id={id} title={title} amount={amount} picture={picture} category={category}/>        
        </React.Fragment> 
    )

}
export default SectionProducts;