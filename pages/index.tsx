// index.tsx
import type { NextPage } from 'next';
import { ShopLayout } from '@/components/layouts';
import ProductList from '../components/products/ProductList';
import Slider from '@/components/Slider';
import { useProducts } from '@/hooks';

const Home: NextPage = () => {
  const { products, isLoading } = useProducts('/products');

  const slides = [
    {
      imageSrc: '/products/consola-1.jpg',
      title: 'Game Boy',
      description: 'La Game Boy de Nintendo es una consola portátil.',
    

    },
    {
      imageSrc: '/products/consola-2.jpg',
      title: 'Game Boy Classic',
      description: 'La Game Boy Classic de Nintendo es una consola portátil.',
    },
    {
      imageSrc: '/products/cuadro-3.jpg',
      title: 'Game Boy Color',
      description: 'El nuevo colorido de la familia Nintendo Switch.',
    },
    {
      imageSrc: '/products/consola-4.jpg',
      title: 'Game Boy Advance',
      description: "Con el potente procesador gráfico ",
    },
  ];

  return (
    <>
      <ShopLayout title={'Tienda-Shop - Home'} pageDescription={'Nosotros '}>
        <Slider slides={slides} 
        />
        {
          isLoading 
          ? <p>Cargando...</p>
          : <ProductList products={products} />
        }
      </ShopLayout>
    </>
  );
}

export default Home;
