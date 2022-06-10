import React, { useContext } from 'react'
import ImageContext from './imageContext'
import ImageList from './imageList'
import Button from 'react-bootstrap/Button'
const ImageDialog = () => {
  const {images, setImages, setOpenModal, setTopic} = useContext(ImageContext)
  const close = () => {
    setOpenModal(false)
    setImages([])
    setTopic('')
  }
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
            <Button className='btn' onClick={close}>
              Reject
            </Button>
          </div>
        </div>
    </>
  )
}
export default ImageDialog;
