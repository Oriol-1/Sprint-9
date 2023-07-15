import { FC } from 'react';
import { Slide } from 'react-slideshow-image';

import styled from './ProductSlideshow.module.css';
interface Props{
images:string[]
}

const ProductSlideshow: FC<Props> = ({images}) => {
  return (
   <Slide
    easing="ease"
    transitionDuration={500}
    indicators
   >
    {
        images.map((image =>{
            const url = `/products/${ image }`;
            return(
                <div className={ styled['each-slide']} key={image}>
                    <div style={{'backgroundImage': `url(${ url })`,
                    backgroundSize: 'cover'
                }}>
                       
                    </div>
                </div>
            )
        }))
    }
   </Slide>
  )
}

export default ProductSlideshow