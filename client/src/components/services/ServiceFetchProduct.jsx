export const ServiceFetchProduct = (id) => {
    return fetch(`http://localhost:3001/api/items/${id}`)        
	.then(response => response.json())
}