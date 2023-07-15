import CarList from "@/components/cart/CarList"
import OrderSummary from "@/components/cart/OrderSummary"
import { CartContext } from "@/components/context/cart";
import { ShopLayout } from "@/components/layouts"
import { countries } from "@/utils";
import { Link, Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material"
import NextLink from 'next/link';
import { useContext } from "react";



const SummaryPage = () => {

    const { shippingAddress, numberOfItems } = useContext( CartContext );
    console.log(shippingAddress);
    if ( !shippingAddress ) {
        return <></>;
    }

    const { firstName, lastName, email, phone,  address, zip } = shippingAddress;

  return (
    <ShopLayout title='Resumen de orden' pageDescription={'Resumen de la orden'}>
        <Typography variant='h1' component='h1'>Resumen de la orden</Typography>

        <Grid container>
            <Grid item xs={ 12 } sm={ 7 }>
                <CarList />
            </Grid>
            <Grid item xs={ 12 } sm={ 5 }>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Resumen ({numberOfItems} { numberOfItems === 1 ? 'producto':'productos' })</Typography>
                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <NextLink href='/checkout/address' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        
                        <Typography>{ firstName } { lastName }</Typography>
                        <Typography>{ email }</Typography>
                        <Typography>{ phone }</Typography>
                        <Typography>{ address }</Typography>
                        <Typography>{ zip }</Typography>
                        
                        
                       
                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' passHref>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary />

                        <Box sx={{ mt: 3 }}>
                            <Button color="secondary" className='circular-btn' fullWidth>
                                Confirmar Orden
                            </Button>
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>


    </ShopLayout>
  )
}

export default SummaryPage;