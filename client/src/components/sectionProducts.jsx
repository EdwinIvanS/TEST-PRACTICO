import React from 'react';
import Products from './products';

function SectionProducts(props){
    const {id, title, amount, picture, category} = props;
    return(
        <div className="contenedores-body">
            <div className="Container-general">
                <React.Fragment>
                    <Products id={id} title={title} amount={amount} picture={picture} category={category}/>
                </React.Fragment>
            </div>
        </div>
    )
}
export default SectionProducts;