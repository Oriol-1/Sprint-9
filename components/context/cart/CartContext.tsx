import { createContext} from 'react';
import { ShippingAddress } from './';
import { ICartroduct } from '@/components/interfaces';


interface ContextProps{
    isLoaded: boolean;
    cart: ICartroduct[];
    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;

    shippingAddress?: ShippingAddress,
   //Methods
    addProductToCart: (product: ICartroduct) => void;
    updateCartQuantity: (product: ICartroduct) => void;
    removeCartProduct: (product: ICartroduct) => void;
    updateAddress: (address: ShippingAddress) => void;


}


export const CartContext = createContext ( {} as ContextProps);


