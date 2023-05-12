import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { api } from '@/shared/api'

interface InitialStateInterface {
  access_token: string | null
}

const initialState: InitialStateInterface = {
  access_token: '',
}

export const login = createAsyncThunk('login/login', async () => {
  try {
    const { access_token } = await api.login()

    if (access_token) return access_token
  } catch (e) {
    console.log(e)
  }
})

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.access_token = action.payload || null
    })
  },
})

export const loginReducer = loginSlice.reducer
