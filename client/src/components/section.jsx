import React from 'react';
//import Footer from "./foother";

function Section(props){
    const {id, title, currency, amount, decimals, picture, condition, free_shipping } = props;
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
                <div className="contaniner-ruta">
                    <p>RUTA A PARAMETRIZAR   </p>
                </div>
                <div className="contenainer-body">
                    <p className='valores'>{id}</p>
                    <p className='valores'>{title}</p>
                    <p className='valores'>{currency}</p>
                    <p className='valores'>{amount}</p>
                    <p className='valores'>{decimals}</p>
                    <p className='valores'>{picture}</p>
                    <p className='valores'>{condition}</p>
                    <p className='valores'>{free_shipping}</p>
                </div>
            </div>
        </section>
        </React.Fragment>
    )

}
export default Section;