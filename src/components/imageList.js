import React, { useContext } from 'react';
import './imageList.css';
import Image from './image';

import {ImageContext} from './imageContext'

const ImageList = () => {
    const {images} = useContext(ImageContext)
    console.log('images = ', images)
    const listImages = images.map((img) =>
    <Image key={img.id} image={img} />
    );
    return (
        <div className="image__list">            
            {listImages}
        </div>
    )
}

export default ImageList;