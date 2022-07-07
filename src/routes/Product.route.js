import { addProduct, deleteAllProducts, deleteProduct, getAllProducts,getProductById, getProductByName, updateProduct } from "../controllers/Product.controller";
import express from 'express';

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', addProduct);
router.get('/id/:id', getProductById);
router.get('/email', getProductByName);
router.delete('/all/delete', deleteAllProducts)
router.delete('/delete/:id', deleteProduct);
router.put('/:id', updateProduct);
export default router;