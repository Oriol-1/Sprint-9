// dbProducts.ts
import { db } from './';
import { Product } from '../models';
import { IPproduct } from '@/components/interfaces';

export const getProductBySlug = async(slug: string): Promise<IPproduct | null> =>{
    // console.log("Buscando producto con slug: ", slug); // Esta línea imprimirá el valor de "slug" 

    await db.connect();
    const product = await Product.findOne({ slug });
    await db.disconnect();

    if (!product){
        // console.log("No se encontró producto con slug: ", slug); // Esta línea imprimirá un mensaje si no se encontró el producto
        return null;
    }

    // console.log("Producto encontrado: ", product); // Esta línea imprimirá el producto encontrado

    return JSON.parse(JSON.stringify(product));
}




interface ProductSlug {
    slug: string;
}
export const getAllProductSlugs = async(): Promise<ProductSlug[]>  => {


    await db.connect();
    const slugs = await Product.find().select('slug -_id').lean();
    await db.disconnect();

    return slugs;
}

export const getProductsByTerm = async ( term:string): Promise<IPproduct[]> => {
    
    term = term.toString().toLowerCase();

    await db.connect();
    const products = await Product.find({
        $text: { $search: term }
    })
    .select('title images price inStock slug -_id')
    .lean();

    await db.disconnect();

    return products;
}


export const getAllProducts = async(): Promise<IPproduct[]> => {

    await db.connect();
    const products = await Product.find().lean();
    await db.disconnect();


    return JSON.parse( JSON.stringify( products ) );
}

