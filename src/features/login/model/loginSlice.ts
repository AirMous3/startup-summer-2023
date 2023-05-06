import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootStateType } from '@/app/store'
import { api } from '@/shared/api'

interface InitialStateInterface {
  isLogged: boolean
}

const initialState: InitialStateInterface = {
  isLogged: false,
}

export const login = createAsyncThunk('login/login', async () => {
  const { access_token } = await api.login()
  return access_token
})

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (state: InitialStateInterface, action: PayloadAction<string>) => {
        if (action.payload) {
          state.isLogged = true
        }
      }
    )
  },
})

export const loginReducer = loginSlice.reducer

//selectors
export const loginSelector = (state: RootStateType) => state.login.isLogged
