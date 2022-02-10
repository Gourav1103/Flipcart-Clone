import {products} from './constants/Products.js';
import Product from './modal/ProductSchema.js';
const DefaultData=async()=>{
try{  
   await Product.deleteMany({});
   await Product.insertMany(products);
   console.log("Data inserted successfully");
    }catch(error){
        console.log("error :",error.message);
    }
}
export default DefaultData;