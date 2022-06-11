import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: '',
  },
  reducers: {
    addUser: (state, action) => {
        console.log('action= ', action)
        console.log('state before add= ', state.value)
        state.value = action.payload
        console.log('state after add= ', state.value)

      },
    cleanuser: (state) => {
      state.value = ''
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, cleanUser } = userSlice.actions
export const selectUser = (state) => state.user.value

export default userSlice.reducer