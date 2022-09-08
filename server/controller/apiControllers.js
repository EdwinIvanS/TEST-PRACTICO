const fetch = require("node-fetch");
const apiMainController ={
    consulta : async(req, res)=> {        
        let consultaProducto = req.query.q; 
        const url = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${consultaProducto}`)        
        .then(consulta => consulta.json())
        .then(products =>{
            let categories =[];
            let productos = [];
            let categorie = products.filters[0]?.values[0].path_from_root;
            categorie?.map((element)=>{ categories.push(element.name);})

            products = products.results.map((product, i) => {
                if(i<4){
                    productos.push({
                        id: product.id,
                        title: product.title,
                        price: {
                            currency: product.currency_id,
                            amount: product.price,
                            decimals : product.prices.prices[0].regular_amount
                        },
                        picture: product.thumbnail,
                        condition: product.condition,
                        free_shipping: product.shipping.free_shipping
                    })
                }
            })

            res.status(200).json({
                autor: {
                    name: "Edwin Ivan",
                    lastname: "Saboya Echeverry"
                },
                categories,
                items: productos
            })   
        })
        .catch((error)=>{
            console.log(error);
        });           
        
    },

    consultaId : async (req, res) => {
        let id = req.params.id;
        const url = `https://api.mercadolibre.com/items/${id}`;
        const urlDesc = `https://api.mercadolibre.com/items/${id}/description`;
        
        try {
            let response = await fetch(url);
            let product = await response.json();

            let response2 = await fetch(urlDesc);
            let description = await response2.json();

            const urlcategoty = `https://api.mercadolibre.com/categories/${product.category_id}`;
            let response3 = await fetch(urlcategoty);
            let categories = await response3.json();
            categories = categories.path_from_root;
            categories = categories?.map(category => category.name)
            
            product = {
                id: product.id,
                title: product.title,
                price: {
                    currency: product.currency_id,
                    amount: product.price,
                    decimals: 0
                },
                picture: product.thumbnail,
                condition: product.condition,
                free_shipping: product.shipping.free_shipping,
                sold_quantity: product.sold_quantity,
                description: description.plain_text,
            };
            res.status(200).json({
                author: {
                    name: "Edwin Ivan",
                    lastname: "Saboya Echeverry"
                },
                categories,
                item: product,
            })     
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = apiMainController;