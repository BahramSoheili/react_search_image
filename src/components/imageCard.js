import React, { useState} from 'react';
const ImageCard = (image) => {
    return (
        <div>
            <img
                src= {image.urls.regular}
                alt= {image.alt_description}
            />
        </div>
        )
    }
export default ImageCard;