import React from 'react';
import { useSelector } from 'react-redux'
import { selectImage } from './state/imageSlice'
import { selectUser } from './state/userSlice'
import Card from 'react-bootstrap/Card';
import  './imageCard.css';


const ImageCard = () => {
    const image = useSelector(selectImage)
    const user = useSelector(selectUser)

    console.log('image= ', image)
    return (
            <Card style={{
                 width: '30rem'               
                }}>
            <Card.Img variant="top" src={image.urls.regular} alt = {image.alt_description} />
            <Card.Body>
                <Card.Text>
                <h3>{user.firstName}&nbsp;{user.surname}</h3>

                </Card.Text>
            </Card.Body>
            </Card>           
        )
    }
export default ImageCard;