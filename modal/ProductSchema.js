import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String
});
const products =mongoose.model('product',ProductSchema);
export default products;