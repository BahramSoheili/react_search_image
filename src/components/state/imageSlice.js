import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    value: '',
  },
  reducers: {
    addImage: (state, action) => {
        console.log('action= ', action)
        console.log('state before add= ', state.value)
        state.value = action.payload
        console.log('state after add= ', state.value)

      },
    cleanImage: (state) => {
      state.value = ''
    }
  },
})

// Action creators are generated for each case reducer function
export const { addImage, cleanImage } = imageSlice.actions
export const selectImage = (state) => state.image.value

export default imageSlice.reducer