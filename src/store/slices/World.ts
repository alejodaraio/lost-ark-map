import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getWorld } from '../../api/World'
import IWorld from '../../interfaces/IWorld'
import type { RootState } from '../store'

// Define a type for the slice state
interface World {
  world: IWorld
}

// Define the initial state using that type
const initialState: World = {
  world: null
}

export const worldSlice = createSlice({
  name: 'world',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWorld.fulfilled, (state, action: PayloadAction<IWorld>) => {
      state.world = action.payload
    })
  }
})

// Other code such as selectors can use the imported `RootState` type
export const selectWorld = (state: RootState) => state.world.world

export default worldSlice.reducer