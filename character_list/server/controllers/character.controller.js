const Product = require("../models/character.model.js");

module.exports = {
    createProduct: (req, res) => { 
        Product.create(req.body) 
            .then((newProduct) => res.json(newProduct)) 
            .catch((err) => console.log(err));
    }
};