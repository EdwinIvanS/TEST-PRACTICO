import React from 'react';


function Breadcrumb(props){
    const { Variable } = props;
    console.log(Variable);

    return(
        <React.Fragment>
            <nav className='Breadcrumb'>
            <h1>barra breadcrumb</h1>
            </nav>            
        </React.Fragment>
    )
}

export default Breadcrumb;