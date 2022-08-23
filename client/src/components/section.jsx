import React from 'react';
import Nav from './nav';


function Section(props){
    //const {id, title, currency, amount, decimals, picture, condition, free_shipping } = props;
    const {id, title, amount, picture } = props;
    /*
    const [productos,setProductos] = useState([])

     montaje por primera vez del componente
	useEffect(()=> {
		fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&`)
		.then(response => response.json())
		.then(data => {
			if (data.Response=="True"){
				setPeliculas(data.Search)
			}
		});
	},[])
*/
    return(
        <React.Fragment>
        
        <section>        
            <div className="contenainer-body-principal">
                
                <div className="contenainer-body">
                    <div className="section-imag">
                        <img src={picture}/>
                    </div>
                    <div className="section-descripcion">
                        <p className='valores'>{amount}</p>
                        <p className='valores'>{title}</p>
                    </div>
                    <div className="section-cliente">
                        <p className='valores'>{id}</p>
                    </div>
                </div>
            </div>
        </section>
        </React.Fragment>
    )

}
export default Section;