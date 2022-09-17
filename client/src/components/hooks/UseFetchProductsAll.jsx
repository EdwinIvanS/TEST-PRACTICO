
import { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { ServiceFetchProductsAll } from '../services/ServiceFetchProductsAll';


export const UseFetchProductsAll = () =>{
    const valorBuscado = new URLSearchParams(useLocation().search);
    const searchCadena = valorBuscado.toString().replace("search=","");
    const [productos,setProductos] = useState([]);
    const [categories,setCategories] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    
    useEffect(()=>{ 
        ServiceFetchProductsAll(searchCadena)    
        .then(data =>{ 
            let containerCategory = [];
            data.categories?.forEach(element => {
                containerCategory.push(element + " / ");                       
            });             
            setCategories(containerCategory);
            setProductos(data);
        })
        .catch(error => console.log(error))
        .finally(()=>{ setIsFetching(false)})
	},[searchCadena])
    return { productos, categories, isFetching};
}