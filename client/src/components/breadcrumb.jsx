import React from 'react';

function Breadcrumb(props){
    const { category } = props; 

    return(
        <React.Fragment>
        <div className='breadcrumb'>
            <p>{category}</p> 
        </div>                               
        </React.Fragment>
    )
}

export default Breadcrumb;