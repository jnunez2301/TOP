const express = require('express');
const router = express.Router();
const Product = require('../../model/productsSchema');


router.get('/', (req, res) =>{
    Product.find({})
    .then(msgs => {
        res.status(200).json(msgs);
    })
    .catch(error => {
        console.error(error);
        res.status(404).json({msg: 'An error ocurred'})
    })
})

router.post('/', (req, res) =>{
    const body = req.body;
    try{
        const newProduct = new Product({
            model: body.model,
            brand: body.brand,
            description: body.description,
            imgURL: body.imgURL,
        })
    
        newProduct.save()
            .then(savedProduct => {
                res.status(200).json({
                    msg: 'saved successfully',
                    savedProduct: savedProduct
                })
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({
                    msg: 'bad request'
                })
            })
    }catch(error){
        console.log(error);
        res.status(500).json({msg: 'bad request'})
    }
})

module.exports = router;