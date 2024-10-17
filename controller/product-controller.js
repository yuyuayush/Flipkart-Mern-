import products from '../model/productSchema.js';
import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    } catch (error) {

    }
}

export const addProduct = async (request, response) => {
    try {
        const product = new Product(request.body);
        await product.save();
        response.status(201).json(product);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

export const getProductById = async (request, response) => {
    try {
        const products = await Product.findOne({ 'id': request.params.id });
        response.json(products);
    } catch (error) {

    }
}