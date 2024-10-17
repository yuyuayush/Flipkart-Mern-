import express from 'express';
import { userLogIn, userSignUp } from '../controller/user-controller.js';
import { addProduct, getProductById, getProducts } from '../controller/product-controller.js';
import { addItemInCart } from '../controller/cart-controller.js';


const router = express.Router();

router.post('/signup',userSignUp);
router.post('/login',userLogIn);

router.get('/products',getProducts);
router.get('/product/:id',getProductById);
router.post('/addProduct',addProduct);

router.post('/cart/add', addItemInCart);

// router.post('/payment', addPaymentGateway);
// router.post('/callback', paymentResponse);
export default router;