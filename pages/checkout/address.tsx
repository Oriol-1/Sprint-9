import { CartContext } from "@/components/context/indext";
import { ShopLayout } from "@/components/layouts"
import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";


type FormData = {
    firstName: string;
    lastName : string;
    email : string;
    phone    : string;
    address  : string;
    zip      : string;
  
}

const getAddressFromCookies = ():FormData => {
    return {
        firstName : Cookies.get('firstName') || '',
        lastName  : Cookies.get('lastName') || '',
        email  : Cookies.get('email') || '',
        phone     : Cookies.get('phone') || '',
        address   : Cookies.get('address') || '',
        zip       : Cookies.get('zip') || '',
    }
}

const AddressPage = () => {

    const router = useRouter();
    const { updateAddress} = useContext( CartContext );

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
       defaultValues: getAddressFromCookies() 
    });

    const onSubmitAddress = ( data: FormData ) => {
        updateAddress( data );
        router.push('/checkout/summary');
    }
    
  return (
    <ShopLayout title="Dirección" pageDescription="Confirmar dirección del destino">
        <form onSubmit={ handleSubmit( onSubmitAddress ) }>
            
    <Typography variant='h1' component='h1' sx={{mb:2}}> Dirección </Typography>
    <Grid container spacing={ 2 }>

    <Grid item xs={12} sm={ 6 }>
                    <TextField
                        label='Nombre'
                        variant="filled"
                        fullWidth 
                        { ...register('firstName', {
                            required: 'Este campo es requerido'
                        })}
                        error={ !!errors.firstName }
                        helperText={ errors.firstName?.message }
                    />
                </Grid>

              <Grid item xs={ 12 } sm={ 6 }>
              <TextField 
                label ='Apellido'
                variant="filled"
                fullWidth
                { ...register('lastName', {
                    required: 'Este campo es requerido'
                })}
                error={ !!errors.lastName }
                helperText={ errors.lastName?.message }
               />
              </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                <TextField 
                label ='Correo'
                variant="filled"
                fullWidth
                { ...register('email', {
                    required: 'Este campo es requerido'
                })}
                error={ !!errors.email }
                helperText={ errors.email?.message }


                 />
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                <TextField 
                label ='Teléfono'
                variant="filled"
                fullWidth
                { ...register('phone', {
                    required: 'Este campo es requerido'
                })}
                error={ !!errors.phone }
                helperText={ errors.phone?.message }
                 />
                </Grid>
              
                <Grid item xs={ 12 } sm={ 6 }>
                <TextField 
                label ='Dirección'
                variant="filled"
                fullWidth
                { ...register('address', {
                    required: 'Este campo es requerido'
                })}
                error={ !!errors.address }
                helperText={ errors.address?.message }
                
                 />
                </Grid>
                <Grid item xs={ 12 } sm={ 6 }>
                {/* <TextField label ='Código Postal' variant="filled" fullWidth /> */}
                <TextField 
                label ='Código Postal'
                variant="filled"
                fullWidth
                { ...register('zip', {
                    required: 'Este campo es requerido'
                })}
                error={ !!errors.zip }
                helperText={ errors.zip?.message }

                 />
                </Grid>

        
               
                

    </Grid>

<Box 


sx={{ display:'flex',
    justifyContent:'flex-end',
    mt:3,
    mb:3,
//   cambiar color de hover
    '& .MuiButton-root:hover':{
        backgroundColor:'#3A64D8'
    } 
}}




>
   <Button type="submit" color="secondary" className="circular-btn" size="large">
                    Revisar pedido
                </Button>
</Box>

        </form>

   </ShopLayout>
  )
}

export default AddressPage