import React, { useState } from 'react';
import { Link} from 'react-router-dom'
import logo from  '../assets/images/logo-mercadoLibre.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Header(){
    
    const [busqueda,setBusqueda] = useState("")
    const palabraDigitada = (e)=> { setBusqueda(e.target.value);}

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
                     <form className="nav-search-f">
                        <input type="search" className="nav-search-input" placeholder="    Nunca dejes de buscar" onChange={palabraDigitada}/> 
                            <Link to={"/items?search="+ busqueda}>
                                <button type="submit" className="nav-search-btn">                        
                                    <FontAwesomeIcon icon={faSearch} />             
                                </button>
                            </Link>                            
                    </form>
                    </div>                     
                </div>
            </header>
            
                        
                
        </React.Fragment>       
    )
}
export default Header;