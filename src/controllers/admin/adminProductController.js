const { products} = require('../../data');

module.exports = {
    list: (req, res) => {
        res.render('p/listProduct', {
            titulo: "Listado de productos",
            producto: products
        })
    },
    productAdd: (req, res) => {
        res.render('products/addProduct', {
            titulo: "Agregar producto"
        })
    }
    
    }