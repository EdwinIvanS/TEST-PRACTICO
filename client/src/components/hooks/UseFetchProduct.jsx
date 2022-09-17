import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceFetchProduct } from '../services/ServiceFetchProduct';

export const UseFetchProduct = () => {
    const {id} = useParams();
    const [detalleProducto , setPetalleProducto] = useState([]);    
    const [categories,setCategories] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(()=> {
        ServiceFetchProduct(id)
		.then(data => {
            let containerCategory = [];
            data.categories?.forEach(element => {
                containerCategory.push(element + " / ");            
            });
            setCategories(containerCategory);
            setPetalleProducto([data]);
        })
        .catch(error => console.log(error))       
        .finally(()=>{ setIsFetching(false)}) 
	})

    return { detalleProducto, categories , isFetching } 
}