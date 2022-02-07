import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getZone } from '../../api/Zone'
import IZone from '../../interfaces/IZone'
import type { RootState } from '../store'

// Define a type for the slice state
interface Zone {
  zone: IZone
}

// Define the initial state using that type
const initialState: Zone = {
  zone: null
}

export const worldSlice = createSlice({
  name: 'zone',
  initialState,
  reducers: {
    closeZone: (state) => {
      state.zone = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getZone.fulfilled, (state, action: PayloadAction<IZone>) => {
      state.zone = action.payload
    })
  }
})

// Other code such as selectors can use the imported `RootState` type
export const selectZone = (state: RootState) => state.zone.zone

export const { closeZone } = worldSlice.actions;

export default worldSlice.reducer