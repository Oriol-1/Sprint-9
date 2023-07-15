import Link from "next/link"
import { ShopLayout } from '@/components/layouts'

export default function HomePage() {
  return (
    <>
    <ShopLayout title={'Tienda-Shop - Home'} pageDescription={'Nosotros '}>

    </ShopLayout>

        <h1> Home page</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>

      <h2>Ir  
        <Link href="/servicios/servicio1">
         servicio1
        </Link>
      </h2>
        
        
</>
    


  )
}
