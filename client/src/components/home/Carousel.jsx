import styles from './Carousel.module.css'
import { useState, useEffect } from 'react';
import img1 from '../../img/carousel/img1.jpg'
import img2 from '../../img/carousel/img2.jpg'
import img3 from '../../img/carousel/img3.jpg'

const Carousel = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
  }, []);

  return (
    <div className={styles.carousel}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image${index}`}
          className={index === currentIndex ? styles.active : styles.inactive}
        />
      ))}
    </div>
  );
};

export default Carousel;