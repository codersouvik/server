import { products } from "./costants/data.js"
import product from "./model/product-schema.js";

const Defaultdata=async ()=>{
   try{
      await product.insertMany(products);
      console.log('Data imported successfully');
   }
   catch(error){
    console.log('Error while inserting default data',error.message);
   }
}

export default Defaultdata;