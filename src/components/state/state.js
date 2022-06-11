import { configureStore } from '@reduxjs/toolkit'
import imageSlice from './imageSlice'
import userSlice from './userSlice'


export default configureStore({
  reducer: {
      image: imageSlice,
      user: userSlice
  },
})