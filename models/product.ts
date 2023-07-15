import { IProduct } from "@/components/interfaces";
import mongoose, {Schema, model, Model} from "mongoose";

const productSchema = new Schema({
    description:{ type: String, required:true},
    images: [{ type: String, }],
    inStock: { type: Number, required:true, default:0},
    price: { type: Number, required:true,default:0 },
    platform: [{ type: String,
        enum:{
            values:[
                'Sega Game Gear',
                'Sony PSP 2000',
                'Game Boy',
                'Game Boy Classic',
                'Retro Console',
                
            ] ,
            message: 'Platform'
        }
    }],

    slug: { type: String, required:true},
    tags: [{ type: String, required:true}],
    title: { type: String, required:true},
    type: [{ 
        type: String,
        enum:{
            values: ['console', 'art'],
            message: 'Type is either: console or art'
            }}],
    size: [{
        type: String,
        enum:{
            values: ['small', 'medium', 'large'],
            message: 'Size is either: small, medium or large'

        }
       
    }],
  
},{
    timestamps:true,
});

productSchema.index({title:'text', tags: 'text'});
   
const Product: Model <IProduct>= mongoose.models.Product || model('Product', productSchema);

export default Product;