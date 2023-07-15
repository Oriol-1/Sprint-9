import { ValidSizes } from './';

export interface ICartProduct {
    _id: string;
    image: string;
    price: number;
    slug: string;
    title: string;
    quantity:number;
    
}

export interface ICartroduct extends ICartProduct {
    size?: ValidSizes; 
}

