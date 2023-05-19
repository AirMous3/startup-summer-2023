import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface InitialStateInterface {
  category: string
  price: {
    from?: number
    to?: number
  }
}

const initialState: InitialStateInterface = {
  category: '',
  price: { from: 0, to: 0 },
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilters: (state, action: PayloadAction<InitialStateInterface>) => {
      return action.payload
    },
  },
})

export const filterReducer = filterSlice.reducer
export const { changeFilters } = filterSlice.actions
