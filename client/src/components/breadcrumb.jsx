import React from 'react';


function Breadcrumb(props){
    const { category } = props; 
    console.log(category);

    return(
        <React.Fragment>
            <nav className='Breadcrumb'>
            {   
                category !== undefined ?
                <a href='/'>{category}</a>
                :
                <h1>No hay elementos para mostrar</h1>
            }
            </nav>            
        </React.Fragment>
    )
}

export default Breadcrumb;