
import type { ReactElement } from 'react'

import DarkLayout from '../components/layouts/DarkLayout'
import { ShopLayout } from '@/components/layouts'

import type { NextPageWithLayout } from './_app'



 const Nosotros: NextPageWithLayout = () => {

    return(
    

      <>
      <ShopLayout title={'Tienda-Shop - Nosotros'} pageDescription={'Mejores Productos '} >
      
        
        <title>Tienda-Shop - servicio1</title>
      </ShopLayout>

      
        <title>servicio1</title>
       
  
          <h1>Nosotros</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>


      
  
  
  
      </>
  
    )


}
Nosotros.getLayout = function getLayout(page: ReactElement) {
  return (

<DarkLayout>
{page}
</DarkLayout>

  )
}





export default Nosotros;
