import React from 'react';
import { Link } from 'react-router-dom';


function Section(props){
    //const {id, title, currency, amount, decimals, picture, condition, free_shipping } = props;
    const {id, title, amount, picture } = props;

    return(
        
        <section>  
             
            <div className="contenainer-body-principal">
                <div className='container-section'> 
                    <div className="container-body">
                        <div className="section-imag">
                            <Link to={"/items/"+ id} className='section-imag'>
                                <img src={picture}/>
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
    )

}
export default Section;