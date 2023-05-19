import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { vacanciesReducer } from '@/entities'
import { filterReducer, loginReducer } from '@/features'

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['vacancies', 'filter'],
}

const tokenPersistConfig = {
  key: 'access_token',
  storage,
}

const rootReducer = combineReducers({
  login: persistReducer(tokenPersistConfig, loginReducer),
  vacancies: vacanciesReducer,
  filter: filterReducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type AppDispatch = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
