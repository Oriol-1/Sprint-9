import { ShopLayout } from "@/components/layouts"
import { Box } from '@mui/material';

const Custom404 = () => {
  return (
    <>
    <ShopLayout
    title={'Tienda-Shop - 404'}
    pageDescription={'404 '}
    >
        <Box display='flex' justifyContent='center' alignItems='center' 
        sx={{ height: {xs:'50vh', sm:'100vh'}, fontSize:{xs:'20px', sm:'50px'}}} fontSize={50} 
        fontWeight="fontWeightBold"
        color="primary.main"
        textAlign="center"
        mt={"2rem"} mb={"3rem"}

        
        >
            <h5>404 | Page Not Found</h5>
        </Box>
    </ShopLayout>


    </>
  )
}

export default Custom404