const fetch = require("node-fetch");
const apiMainController ={
    consulta : ((req, res)=> {        
        let resultConsulta = req.query.q; 
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${resultConsulta}`)
        .then(consulta => consulta.json())
        .then(resultado =>{
            const data = JSON.parse(JSON.stringify(resultado));
            let array=[] , mostradorDeProducts=[];
            for (i of data.results) { array.push({id : i.id ,title : i.title, price : { currency : i.prices.prices[0].currency_id, amount : i.prices.prices[0].amount, decimals : i.prices.prices[0].regular_amount}, picture : i.thumbnail, condition : i.condition, free_shipping : i.shipping.free_shipping})};                 
            
            for (let i = 0; i < 1; i++) {
                for (let z = 0; z < 4; z++) {
                    mostradorDeProducts.push(array[z]);
                }                
            }

            let respuesta = {
                autor: {
                    name: "Edwin Ivan",
                    lastname: "Saboya Echeverry"
                },
                items: mostradorDeProducts
            }
            res.json(respuesta);
        })
        
    }),

    consultaId : ((req, res) => { 
        let varlorId = req.params.id;        
        fetch(`https://api.mercadolibre.com/items/${varlorId}`)
        .then(consulta => consulta.json())
        .then(resultado =>{ 
            let producto=[];
            const data = JSON.parse(JSON.stringify(resultado));            
            producto.push({id : data.id ,title : data.title, price : { currency : data.currency_id, amount : data.price, decimals : 0}, picture : data.secure_thumbnail, condition : data.condition, free_shipping : data.shipping.free_shipping, sold_quantity : data.sold_quantity, descriptions : data.descriptions}); 
            
            let respuesta = {
                autor: {
                    name: "Edwin Ivan",
                    lastname: "Saboya Echeverry"
                },
                items: producto
            }
            res.json(respuesta);            
        })
    })
}

module.exports = apiMainController;