import mongoose from "mongoose";

const Schema = mongoose.Schema({
    userID: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    unitPrice: {
        type: Number,
        require: true,
    },
    img: {
        type: String,
        require: true
    }
}, 
{
    timestamps: true
})

const Product = mongoose.model("Product", Schema);

export default Product;