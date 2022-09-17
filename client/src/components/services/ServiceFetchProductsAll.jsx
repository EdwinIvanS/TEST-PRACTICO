
export const ServiceFetchProductsAll = (searchCadena) => {
    return fetch(`http://localhost:3001/api/items?q=:${searchCadena}`)
    .then(response => response.json())
}
