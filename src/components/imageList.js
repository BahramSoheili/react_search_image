import React, { useContext, useState } from 'react';
import Image from './image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import {ImageContext} from './imageContext'

const ImageList = () => {
    const {images} = useContext(ImageContext)
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    console.log('images = ', images)
    const listImages = images.map((img) =>
    <Image key = {img.id} image = {img} />
    );      
        return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {listImages}
        </Carousel>
    )
}
export default ImageList;