import React from "react";
import SectionProducts from "./sectionProducts";

function Content(props){
    const {id, title, amount, picture, category} = props;
    return(
        <div className="contenedores-body">
            <div className="Container-general">
                <React.Fragment>
                    <SectionProducts id={id} title={title} amount={amount} picture={picture} category={category}/>
                </React.Fragment>
            </div>
        </div>
    )
}

export default Content;