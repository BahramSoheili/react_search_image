import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { addImage } from './state/imageSlice'

const Image = ({image}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const toImageCard = ()=>{
        dispatch(addImage(image))
        navigate('/ImageCard')
    }
    return (
        <div>
            <img 
                src = {image.urls.regular}
                alt = {image.alt_description}
            />
            <Button onClick={()=>toImageCard()}>
                Accept
            </Button>             
        </div>
        )
    }
export default Image;
