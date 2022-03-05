import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { donators } from '../../shared/projectData';

import styles from './Slider.module.css'

export const Slider = () => {
  return (
    <Carousel
      showIndicators={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000}
      width={500}
      showThumbs={false}
      showStatus={false}
    >
      {
        donators.map((item) => {
          return(
            <div className=''> 
              <img className={styles.image} src={item.img} />
              <p className={styles.legend}>{item.name} - {item.donation}</p>
            </div>
          )
        })
      }
    </Carousel>
);
}
