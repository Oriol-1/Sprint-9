// Slider.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './Slider.module.css';

interface SlideProps {
  imageSrc: string;
  title: string;
  description: string;
}

interface SliderProps {
  slides: SlideProps[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4700);

    return () => {
      clearInterval(intervalId);
    };
  }, [slides.length]);

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
       <div key={index} className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}>
       <div className={styles.slideImage}>
         <Image
           src={slide.imageSrc} 
           alt={slide.title} 
           layout="fill"
           objectFit="cover"
         />
       </div>
       <div className={styles.text}>
         <h1>{slide.title}</h1>
         <p>{slide.description}</p>
       </div>
     </div>
      ))}
    </div>
  );
};

export default Slider;
