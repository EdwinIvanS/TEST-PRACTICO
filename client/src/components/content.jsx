import React from "react";
import Breadcrumb from "./breadcrumb";
import SectionProducts from "./sectionProducts";

function Content(props){
    const {id, title, amount, picture, category} = props;
    return(
        <div className="Container-general">
            <React.Fragment>
                {/*<Breadcrumb category={category}/>*/}
                <SectionProducts id={id} title={title} amount={amount} picture={picture} category={category}/>
            </React.Fragment>

        </div>
    )
}

export default Content;