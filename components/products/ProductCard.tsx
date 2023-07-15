import { initialData } from "@/database/seed-data"
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link, Chip } from "@mui/material"
import { FC, useMemo, useState } from "react"
import NextLink from 'next/link';
import { IPproduct } from "../interfaces"

interface Props {
  product: IPproduct;
}

const ProductCard: FC<Props> = ({ product }) => {
  // Crear un slug a partir del título del producto
  const productSlug = product.title.toLowerCase().replace(/ /g, '-');





  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images.length > 1 ? product.images[1] : product.images[0]}`
      : `/products/${product.images[0]}`
  }, [isHovered, product.images]);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <NextLink href={`/product/${productSlug}`} passHref prefetch={false}>
        <Link component="div">



          <Card>
            <CardActionArea>

              {

                (product.inStock === 0) && (

                  // si no hay productos mostrar mensaje
                  <Chip
                    color="primary"
                    label="No hay disponible"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      zIndex: 99,

                    }}

                  />
                )
              }


              <CardMedia
                component='img'
                className='fadeIn'
                image={productImage}
                alt={product.title}
                onLoad={() => setIsImageLoaded(true)}
              />
            </CardActionArea>
          </Card>
          <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className='fadeIn'>
            <Typography fontWeight={700}>{product.title}</Typography>
            <Typography fontWeight={500} color='primary'>
              {product.price} Euros
            </Typography>
          </Box>
        </Link>
      </NextLink>
    </Grid>
  )
}

export default ProductCard
