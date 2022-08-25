import React from "react";
import {Link} from "react-router-dom";

function Products(props){
    const {id, title, amount, picture, category} = props;
    return(
        <React.Fragment>   
        <section>              
            <div className="contenainer-body-principal">
                <div className='container-section'> 
                    <div className="container-body">
                        <div className="section-imag">
                            <Link to={"/items/"+ id} className='section-imag'>
                                <img src={picture} alt=""/>
                            </Link>
                        </div>
                        <div className="section-descripcion">
                            <p className='letter-prince'>$  {amount}</p>
                            <p className='letter-title'>{title}</p>
                        </div>
                        <div className="section-cliente">
                            <p className='letter-inf'>{id}</p>
                        </div>
                    </div>
                </div>
            </div>            
        </section>

        </React.Fragment> 

    )
}

export default Products;