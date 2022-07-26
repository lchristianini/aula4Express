const express = require('express');
const products = require('../api');
const productsRoute = express.Router();

productsRoute.post('/', (req, res) => {
    const newProducts = req.body;
    newProducts.forEach((product) => products.push(product));
    return res.status(201).json(products);
})

productsRoute.put('/:id', (req, res) => {
    const { id } = req.params;
    const newProduct = req.body;
    products.forEach((product, i) => {
        if (product.id === Number(id)) (
            products.splice(i, 1, newProduct)
        );
    });
    return res.status(200).json(products);
})

productsRoute.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { name, price, quantity, colors } = req.body;

    const newProduct = { id: Number(id), name, price, quantity, colors };

    products.forEach((product, i) => {
        if (product.id === Number(id)) (
            products.splice(i, 1, newProduct)
        );
    });
    return res.status(200).json(products);
})

productsRoute.delete('/:id', (req, res) => {
    const { id } = req.params;
    products.forEach((product, i) => {
        if (product.id === Number(id)) (
            products.splice(i, 1)
        );
    });
    return res.status(200).json(products);
})

productsRoute.get('/', (_req, res) => {
    return res.status(201).json(products);
})

module.exports = productsRoute;
