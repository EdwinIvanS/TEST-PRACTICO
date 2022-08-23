import React, { useEffect, useState } from 'react';
//import Section from "./section";
//import {Link, Route, Router} from 'react-router-dom';
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
		.then(data => {setProductos(data);});
	})

    useEffect(()=>{console.log(productos)},[productos])

    return(
        <React.Fragment>
            <header >
                <div className="nav-search">
                    <div className="nav-search-img">
                    <img className="mercadoLibre-img" src={logo} alt="Logo de la empresa" width="300"/>
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
            <div className='resultados'>
            

            </div>
            
        </React.Fragment>       
    )
}
export default Header;