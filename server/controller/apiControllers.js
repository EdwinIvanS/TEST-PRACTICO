const fetch = require("node-fetch");
const apiMainController ={
    consulta : async(req, res)=> {
        try {
            let consultaProducto = req.query.q; 
            const url = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${consultaProducto}`)        
            .then(consulta => consulta.json())
            .then(products =>{
            let categories =[], productos = [];
            let categorie = products.available_filters[0]?.values;
            let count = 0;

            categorie?.map((element)=>{                
                if (count < 5) {
                  categories.push(element.name);
                  count++;
                }
            })

            //console.log(categories);

            products = products.results.map((product, i) => {
                if(i<4){
                    productos.push({
                        id: product.id,
                        title: product.title,
                        price: {
                            currency: product.currency_id,
                            amount: product.price,
                            decimals : 00
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
        .catch(error => console.log(error)); 
        } catch (error) {
            return res.status(500).json({
                message: 'Somethin goes wrong'
            })
        }        
    },

    consultaId : async (req, res) => {
        let id = req.params.id;
        try {
            let response = await fetch(`https://api.mercadolibre.com/items/${id}`);
            let product = await response.json();

            let response2 = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
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
            return res.status(500).json({
                message: 'Somethin goes wrong'
            })
        }
    }
}

module.exports = apiMainController;