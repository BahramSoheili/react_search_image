import React from 'react';
import { useSelector } from 'react-redux'
import { selectImage } from './state/imageSlice'
import { selectUser } from './state/userSlice'


const ImageCard = () => {
    const image = useSelector(selectImage)
    const user = useSelector(selectUser)

    console.log('image= ', image)
    return (
        <div>
            <img className="image"
                src = {image.urls.regular}
                alt = {image.alt_description}
            /> 
            <h3>{user.firstName}&nbsp;{user.surname}</h3>
        </div>
        )
    }
export default ImageCard;