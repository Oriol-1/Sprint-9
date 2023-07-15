import { ShopLayout } from '../../components/layouts'
import { Box, Typography, Link as MuiLink } from '@mui/material'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import Link from 'next/link';
import NextLink from 'next/link';

const EmptyPage = () => (
  <ShopLayout title="Carrito vacío" pageDescription='No hay artículos en el carrito de compras'>
    <Box 
      display='flex' 
      justifyContent='center' 
      alignItems='center'
      sx={{ 
        height: { xs: '50vh', sm: '100vh' }, 
        fontSize: { xs: '20px', sm: '50px' },
        mt: 2, 
        mb: 3
      }} 
      fontSize={50}
      fontWeight="fontWeightBold"
      color="primary.main"
      textAlign="center"
    >
      <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
      <Box 
        display='flex' 
        flexDirection='column' 
        alignItems='center'
      >
        <Typography color='primary' fontWeight='bold' 
        variant={'h4'} style={{marginTop:'8%', fontSize:'80%' }}

  
        >
          Carrito vacío
        </Typography>
        <NextLink href='/' passHref className='linkPersonal'
        style={{marginTop:'0', fontSize:'80%' }}
        >
            Ir a la tienda
        </NextLink>
       
      </Box>
    </Box>
  </ShopLayout>
)

export default EmptyPage
