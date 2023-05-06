import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { loginReducer } from '@/features'

const rootReducer = combineReducers({
  login: loginReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type AppDispatch = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
