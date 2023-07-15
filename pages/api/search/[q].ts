import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../database/db';
import { db } from '@/database';
import { Product } from '@/models';
import { IProduct } from '@/components/interfaces';

type Data = 
 |  { message: string}
    |  IProduct[]


export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch( req.method){
        case 'GET':
            return getSearch(req, res);
        default:
            return res.status(400).json({
                message: 'Bad request'
            })
            };
            

    

}

async function getSearch(req: NextApiRequest, res: NextApiResponse<Data>) {
 let { q = ''} = req.query;

 if (q.length == 0 ){
        return res.status(400).json({
            message: 'especifica el query que búscas'
        })
 }

 q = q.toString().toLowerCase();
//  lo pasamos a minuscula

await db.connect();
const products = await Product.find({

    $text: { $search: q }
})
.select('title images price inStock -_id')//solo lo que yo quiero mostrar
.lean();


await db.disconnect();



 return res.status(200).json(products);
}
