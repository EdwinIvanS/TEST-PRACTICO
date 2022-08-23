import React from 'react';
//import Footer from "./foother";

function Section(){

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
            <div class="contenainer-body-principal">
                <div class="contaniner-ruta">
                    <p>RUTA A PARAMETRIZAR   </p>
                </div>
                <div class="contenainer-body">
                </div>
            </div>
        </section>
        </React.Fragment>
    )

}
export default Section;