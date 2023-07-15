import type { NextPage } from 'next';
import { ShopLayout } from '@/components/layouts';
import ProductList from '../../components/products/ProductList';

import { useProducts } from '@/hooks';
import { Typography } from '@mui/material';


const ArtePage: NextPage = () => {

 

  // Agrega esta línea para imprimir los datos recibidos.
 const{ products, isLoading }= useProducts('/products?type=art');

  return (
    <>
      <ShopLayout title={'Tienda-Shop - Consola'} pageDescription={'tu cuadro '}>
        <Typography variant='h1' component='h1'>Arte</Typography>
        <Typography variant='h2' sx={{ mb:1}}>Cuadros </Typography>
        

        {
          isLoading 
          ? <p>Cargando...</p>
          :   <ProductList products={ products } />

        }
      
      </ShopLayout>
      
    </>
  );
}

export default ArtePage;
