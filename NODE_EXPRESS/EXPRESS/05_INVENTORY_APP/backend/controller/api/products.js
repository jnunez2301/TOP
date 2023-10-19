const express = require('express');
const router = express.Router();
const Product = require('../../model/productsSchema');


router.get('/', (req, res) => {
    Product.find({})
        .then(products => {
            res.status(200).json(products);
        })
        .catch(error => {
            console.error(error);
            res.status(404).json({ msg: 'An error ocurred' })
        })
})

router.get('/:id', (req, res) => {
    const paramID = req.params.id;
    Product.find({ _id: paramID })
        .then(selectedProduct => {
            res.status(200).json(selectedProduct);
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({ msg: 'product not found' })
        })
})

router.get('/brand/:brand', (req, res) => {
    const searchedBrand = req.params.brand;
    Product.find({ brand: searchedBrand })
        .then(selectedBrand => {
            res.status(200).json(selectedBrand);
        })
        .catch(error => {
            console.log(error);
            res.status.json({ msg: 'brand not found' });
        })
})

router.post('/', (req, res) => {
    const body = req.body;
    try {
        const newProduct = new Product({
            model: body.model,
            brand: body.brand,
            description: body.description,
            imgURL: body.imgURL,
            price: body.price
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
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'bad request' })
    }
})

router.put('/id/:id', (req, res) => {
    const paramID = req.params.id;

    const updatedProduct = {
        model: req.body.model,
        brand: req.body.brand,
        description: req.body.description,
        imgURL: req.body.imgURL,
        price: req.body.price
    }

    Product.findOne({ _id: paramID })
        .then(selectedProduct => {

            if (!selectedProduct) {
                res.status(404).json({ msg: 'Product not found' })
            }

            selectedProduct.model = updatedProduct.model;

            selectedProduct.brand = updatedProduct.brand;

            selectedProduct.description = updatedProduct.description;

            selectedProduct.imgURL = updatedProduct.imgURL;

            return selectedProduct.save();
        })
        .then(updatedProduct => {
            res.status(200).json(updatedProduct);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ msg: 'bad request' })
        })
})

router.delete('/id/:id', (req, res) => {
    const paramID = req.params.id;

    Product.findByIdAndDelete(paramID)
        .then(deletedProduct => {
            res.status(200).json({
                msg: 'Successfully deleted',
                deletedProduct: deletedProduct
            })
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({msg: 'Could not find the object to delete'})
        })
})


module.exports = router;