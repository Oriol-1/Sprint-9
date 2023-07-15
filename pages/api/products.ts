import type { NextApiRequest, NextApiResponse } from 'next'

import { db } from '@/database';
import Product from '../../models/product'
import { IProduct } from '../../components/interfaces';
import { SHOP_CONSTANTS } from '@/database/constants';



type Data = |
   { message: string}
   | IProduct[]


export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method){
        case 'GET':
            return getProducts(req, res);
        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}
   
const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const {type = 'all' } = req.query;

    let condition = {};

    if ( type !== 'all' && SHOP_CONSTANTS.validType.includes(`${type}`)){
        condition = { type };
    }

    await db.connect();
    const products = await Product.find(condition)
                                    .select('title images price inStock -_id')
                                    .lean();
    await db.disconnect();

    return res.status(200).json(products);
 

   
}

function lean() {
    throw new Error('Function not implemented.');
}

