import Product from "../database/models/Product.model";
import User from "../database/models/User.model";

export const addProduct = async(req, res) =>{
   const userExists = User.findOne({_id: req.body.userID});
   if(!userExists) { res.status(401).json({success: false, message: "Unauthorized"})}
   const product = new Product({
      userID: req.body.userID,
      name: req.body.name,
      quantity: req.body.quantity,
      unitPrice: req.body.unitPrice,
      img: req.body.img
   });
   product.save();
   res.status(200).json({success: true, data: product})
}

export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    return res.status(200).json({success: true, data: products});
}

export const getProductById = async(req, res) => {
    // Product if Product exists first
    const product = await Product.findById({_id: req.params.id})
    if(!product) return res.status(400).json({success: false, message: "product not found"});
    return res.status(200).json({success: true, data: product});
}

 export const getProductByName = async(req, res) => {
    // existence
    const product = await product.findOne({name: req.body.name});
    if(!product) return res.status(400).json({success: false, message: "product not found"});
    return res.status(200).json({success: true, data: product});
 }

 export const deleteProduct = async(req, res) => {
    const product = await Product.findOneAndDelete({_id: req.params.id});
    if(!product) return res.status(400).json({success: false, message: "product not founnd"});
    return res.status(200).json({success: true, data: product});
 }

 export const updateProduct = async(req, res) =>{
   // check product existence
   let product = await Product.findOne({_id: req.params.id});
   if(!product) return res.status(400).json({success: false, message: "product not found"});
//    res.send(product);
   product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
   res.status(200).json({success: true, data: product});
 }

 export const deleteAllProducts = async (req, res) => {
    const rows = await Product.deleteMany({})
    if(!rows) return res.staus(400).json({success: false, message: "something went wrong"});
    return res.status(200).json({success: true, message: `data has been deleted`});
 }

