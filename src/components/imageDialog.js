import React, { useContext } from 'react'
import ImageContext from './imageContext'
import ImageList from './imageList'
import Button from 'react-bootstrap/Button'
const ImageDialog = () => {
  const {images, setReject} = useContext(ImageContext)
  return (
    <>
        <div className ='modalContainer'>
          <span>Found: {images.length} images</span>
          <div className='images'>
            <ImageContext.Provider value = {{images}}>
                  <ImageList />
            </ImageContext.Provider>
          </div>
          <div>     
            <Button className='btn' onClick={()=> setReject(true)}>
              Reject
            </Button>
          </div>
        </div>
    </>
  )
}
export default ImageDialog;
