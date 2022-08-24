import React, { useEffect, useState } from 'react';
import Section from "./section";
import { Link} from 'react-router-dom'
import logo from  '../assets/images/logo-mercadoLibre.png'
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header(){
    
    const [productos,setProductos] = useState([]);
    const [busqueda,setBusqueda] = useState("")

    const palabraDigitada = (e)=> {  // Guardo la palabra del imput
        setBusqueda(e.target.value);
        console.log(e.target.value);
	}

    const searchProducto= ((e)=> {
        e.preventDefault();
		fetch(`http://localhost:3001/api/items?q=:${busqueda}`)        
		.then(response => response.json())
		.then(data => {
            console.log(data)
            setProductos(data);});
	})

    useEffect(()=>{console.log(productos)},[productos])

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
                        <input className="nav-search-input" placeholder="Nunca dejes de buscar" onChange={palabraDigitada}/>                         
                        <button type="submit" className="nav-search-btn">                        
                        <FontAwesomeIcon icon={faSearch} />             
                        </button>
                    </form>
                    </div>                     
                </div>
            </header>          
            
                {
                productos.items  && productos.items.map((key , i) => {
                console.log(key)
                    return(
                        <Section key={i} id={key.id} title={key.title} currency={key.price.currency} amount={key.price.amount} decimals={key.price.decimals} picture={key.picture} condition={key.condition} free_shipping={key.free_shipping} />                        )
                    })
                }   
                
        </React.Fragment>       
    )
}
export default Header;