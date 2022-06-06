import React from 'react';
const Image = (key, image) => {
    return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    src={image.urls.regular}
                    alt={image.alt_description} />
            </div>
        )
    }
export default Image;
