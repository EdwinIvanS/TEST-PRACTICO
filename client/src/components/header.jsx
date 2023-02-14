import React, { useState } from 'react';
import { Link} from 'react-router-dom'
import logo from  '../assets/images/logo-mercadoLibre.png'
import SearchIcon from "@mui/icons-material/Search";

function Header(){
    
    const [busqueda,setBusqueda] = useState("")
    const palabraDigitada = (e)=> { setBusqueda(e.target.value);}

    return (
      <React.Fragment>
        <header>
          <div className="nav-search">
            <div className="nav-search-img">
              <Link to="/" className="mercadoLibre-img">
                <img
                  className="mercadoLibre-img"
                  src={logo}
                  alt="Logo de la empresa"
                  width="300"
                />
              </Link>
            </div>
            <div className="nav-search-ford">
              <form className="nav-search-f">
                <input
                  type="search"
                  className="nav-search-input"
                  placeholder="    Nunca dejes de buscar"
                  onChange={palabraDigitada}
                />
                <Link to={"/items?search=" + busqueda}>
                  {/*<SearchIcon className="icon-search" />*/}
                  <button type="submit" className="nav-search-btn">
                    <SearchIcon className="icon-search" />
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
}
export default Header;