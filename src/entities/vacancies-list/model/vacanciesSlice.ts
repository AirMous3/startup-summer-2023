import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { api } from '@/shared/api'

interface VacancyInterface {
  profession: string
  firm_name: string
  town: { title: string }
  type_of_work: { title: string }
  payment_to: number
  payment_from: number
  currency: string
  id: number
}

interface InitialStateInterface {
  data: VacancyInterface[]
  status: 'loading' | 'ready'
}

interface VacancyFilterArguments {
  keyword: string
  paymentFrom?: number
  paymentTo?: number
}

const initialState: InitialStateInterface = {
  data: [],
  status: 'ready',
}

export const getVacancies = createAsyncThunk(
  'vacancies/getVacancies',
  async (data: VacancyFilterArguments) => {
    const { keyword, paymentFrom, paymentTo } = data
    try {
      return await api.getVacancies(keyword, paymentFrom, paymentTo)
    } catch (e) {
      console.log(e)
    }
  }
)

const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getVacancies.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getVacancies.fulfilled, (state, action) => {
      state.data = action.payload
      state.status = 'ready'
    })
  },
})

export const vacanciesReducer = vacanciesSlice.reducer
