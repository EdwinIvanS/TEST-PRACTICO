import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom'
import logo from  '../assets/images/logo-mercadoLibre.png'
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Content from './content';

function Header(){
    const [productos,setProductos] = useState([]);
    const [busqueda,setBusqueda] = useState("")

    const palabraDigitada = (e)=> { setBusqueda(e.target.value);}

    const searchProducto= ((e)=> {
        e.preventDefault();
		fetch(`http://localhost:3001/api/items?q=:${busqueda}`)        
		.then(response => response.json())
		.then(data => { setProductos(data);});
	})

    return(
        <React.Fragment>
            <header >
                <div className="nav-search">
                    <div className="nav-search-img">
                    <Link to="/" className='mercadoLibre-img'>
                        <img className="mercadoLibre-img" src={logo} alt="Logo de la empresa" width="300"/>
                    </Link>
                    </div>
                    <div className="nav-search-ford">
                     <form className="nav-search-f" onSubmit={searchProducto} >
                        <input type="search" className="nav-search-input" placeholder="    Nunca dejes de buscar" onChange={palabraDigitada}/> 
                            <button type="submit" className="nav-search-btn">                        
                                <FontAwesomeIcon icon={faSearch} />             
                            </button>
                    </form>
                    </div>                     
                </div>
            </header>

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
export default Header;