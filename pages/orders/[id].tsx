import CarList from "@/components/cart/CarList"
import OrderSummary from "@/components/cart/OrderSummary"
import { ShopLayout } from "@/components/layouts"
import { CreditCardOffOutlined, CreditScoreRounded } from "@mui/icons-material";
import { Link, Box, Button, Card, CardContent, Divider, Grid, Typography, Chip } from "@mui/material"
import NextLink from 'next/link';


const OrderPage = () => {
    return (
        <ShopLayout title='Resumen de compra 123456' pageDescription={'Resumen del carrito de compras de la tienda'}>
            <Typography variant='h1' component='h1'>
           Compra : ABC123
            </Typography>

            {/* <Chip 
            sx={{my: 2 }}
            label="Pendiente de pago"
            icon={<CreditCardOffOutlined />}
            color="error"
            variant="outlined"
            /> */}

            <Chip 
            sx={{my: 2 }}
            label=" Pedido pagado"
            icon={<CreditScoreRounded />}
            color="success"
            variant="outlined"
           
            />

            <Grid container>
                <Grid item xs={12} sm={7}>
                 <CarList />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant="h2">Resumen (productos)</Typography>
                            <Divider sx={{ my: 1 }} />
                            
                            <Box sx={
                                {
                                    display:'flex',
                                    justifyContent:'space-between',
                                    mb:2
                                  
                        
                                }
                            }>
                                <Typography variant="subtitle1">Direccion de entrega</Typography>
                                <NextLink href='/checkout/address'passHref>
                                    {/* <Link underline='always'>Editar
                                    </Link> */}
                                    <Button variant="outlined" color="primary" size="small" >Editar entrega</Button>
                                    
                                </NextLink>
                            </Box>
                          <Box sx={
                                {
                                    mb:2
                                }

                          }>
                         
                          <Typography>nombre</Typography>
                          <Typography>lugar</Typography>
                         <Typography>telefono</Typography>
                        <Typography>calle</Typography>

                        <Divider sx={{ my: 1 }} />
                          </Box>

                          <Box sx={
                                {
                                    display:'flex',
                                    justifyContent:'flex-end',
                                    mb:2
                                }
                            }>
                                <NextLink href='/cart'passHref>
                                    {/* <Link underline='always'>Editar
                                    </Link> */}
                                    <Button variant="outlined" color="primary" size="small" >Editar carrito</Button>
                                    
                                </NextLink>
                            </Box>

                          <OrderSummary />

                            <Box sx={{mt:3}} display='flex' justifyContent='space-between'> 
                               
                            <h1>Pagar</h1>

                            
            <Chip 
            sx={{my: 4 }}
            label=" Pedido pagado"
            icon={<CreditScoreRounded />}
            color="success"
            variant="outlined"
           
            />
                            
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>


            


      
    </ShopLayout >
   
  )
}



export default OrderPage
