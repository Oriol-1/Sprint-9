import type { NextPage, GetServerSideProps } from 'next';
import { Typography,Box, Link } from '@mui/material';

import { ShopLayout } from '../../components/layouts';

import ProductList from '@/components/products/ProductList';
import { dbProducts } from '../../database';
import { IPproduct } from '@/components/interfaces';


interface Props {
    products: IPproduct[];
    foundProducts: boolean;
    query: string;
}


const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {


  return (
    <ShopLayout title={'Teslo-Shop - Search'} pageDescription={'Encuentra los mejores productos de Teslo aquí'}>
        <Typography variant='h1' component='h1'>Buscar productos</Typography>

        {
            foundProducts 
                ? <Typography variant='h2' sx={{ mb: 1 }} textTransform="capitalize">Término: { query }</Typography>
                : (
                    <Box 
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            height: 'calc(100vh - 300px)',
                            textAlign: 'center',
                           

                            
                        }}  


                    >
                        {/* <Typography variant='h2' sx={{ mb: 1 }}>No encontramos ningún produto 
                        <Typography variant='h2' sx={{ ml: 1 }} color="secondary" textTransform="capitalize">{ query } </Typography> Regresa a tienda a la
                        <Link href='/'> Tienda</Link>
                        
                        </Typography> */}
                        <Typography variant='h2' sx={{ mb: 1 }}>No encontramos ningún produto
                       
                        </Typography>

                        <Typography variant='h2' sx={{ ml: 1 }} color="secondary" textTransform="capitalize">{ query } </Typography> Regresa a tienda la
                        <Link color={
                            (theme) => theme.palette.secondary.main


                        } href='/'> Tienda</Link>

                       
                    </Box>
                )
        }

        

        
        <ProductList products={ products } />
        
    </ShopLayout>
  )
}



// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    
    const { query = '' } = params as { query: string };

    if ( query.length === 0 ) {
        return {
            redirect: {
                destination: '/',
                permanent: true
            }
        }
    }

    // y no hay productos
    let products = await dbProducts.getProductsByTerm( query );
    const foundProducts = products.length > 0;

    // TODO: retornar otros productos
    if ( !foundProducts ) {
        // products = await dbProducts.getAllProducts(); 
        products = await dbProducts.getProductsByTerm('Consolas' && 'Arte');
     
    }

    return {
        props: {
            products,
            foundProducts,
            query
        }
    }
}


export default SearchPage
