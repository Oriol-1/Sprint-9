/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useContext, useState, useEffect } from "react";
import { ShopLayout } from "@/components/layouts";
import { CartContext } from "@/components/context/cart/CartContext";
import ProductSlideshow from "@/components/products/ProductSlideshow";
import SizeSelector from "@/components/products/SizeSelector";
import { ItemCounter } from "@/components/ui";
import { dbProducts } from "@/database";
import { ICartroduct, IProduct, ValidSizes } from "@/components/interfaces";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";


interface Props{
  product: IProduct;
}

const ProductPage:NextPage<Props> = ({product}) => {
  const router = useRouter();
  const { addProductToCart } = useContext( CartContext )
  
  const [tempCartProduct, setTempCartProduct] = useState<ICartroduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined, 
    slug: product.slug,
    title:product.title,
    quantity:1,
  })
  
  const [error, setError] = useState<string | null>(null);

  const selectedSize = ( size: ValidSizes ) => {
    setTempCartProduct( currentProduct => ({
      ...currentProduct,
      size
    }));
  }

  const onUpdateQuantity = ( quantity: number ) => {
    setTempCartProduct( currentProduct => ({
      ...currentProduct,
      quantity
    }));
  }

  const onAddProduct = () => {
    if ( product.type === 'art' && !tempCartProduct.size ) {
        setError('Por favor, selecciona una talla antes de agregar al carrito. tempCartProduct.size is currently ' + tempCartProduct.size);
        return;
    }

    setError(null);
    addProductToCart(tempCartProduct);
    router.push('/cart');
  }

  useEffect(() => {
    console.log(tempCartProduct.size);
  }, [tempCartProduct.size]);

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid item xs={12} md={5}>
          <Box display='flex' flexDirection='column'>
            <Typography variant="h1" component='h1'>{product.title}</Typography>
            <Typography variant="subtitle1" component='p'>{product.description}</Typography>
            <Typography variant="h2" component='h2'>{product.price} €</Typography>

            {/* cantidad */}
            <Box sx={{my:2}}>
              <Typography variant="subtitle2" component='h3'>Cantidad</Typography>
              <ItemCounter 
              currentValue={ tempCartProduct.quantity }
                updatedQuantity={ onUpdateQuantity  }
                maxValue={ product.inStock > 10 ? 10: product.inStock } />
              <SizeSelector
                sizes= {product.size}
                onSelectedSize={ selectedSize }
              />
            </Box>

            {/* Mensaje de error */}
            {
                error && (
                    <div className="error-message">{error}</div>
                )
            }

            {/* agregar carrito */}
            {
              (product.inStock > 0)
               ? (
                  <Button 
                    color="secondary" 
                    className='circular-btn'
                    onClick={ onAddProduct }
                  >
                    {
                      tempCartProduct.size
                        ? 'Agregar al carrito'
                        : 'Selecciona'
                    }
                  </Button>
               )
               : (
                 <Chip label="No hay disponibles" color="error" variant='outlined' />
               )
            }


            {/* Descripcion */}
            <Box sx={{my:2}}>
              <Typography variant="subtitle2" component='h3'>Descripcion</Typography>
              <Typography variant="body2">{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async (ctx)=>{
    const productSlugs = await dbProducts.getAllProductSlugs();

    return {
        paths: productSlugs.map( ({ slug }) => ({
            params: {
                slug
            }
        })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
    const { slug = '' } = params as { slug: string };
    const product = await dbProducts.getProductBySlug( slug );

    if ( !product ) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 24
    }
}

export default ProductPage;
