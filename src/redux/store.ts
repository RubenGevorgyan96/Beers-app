import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import beerSlice from './beerSlice'
import shoppingCartSlice from './shoppingCartSlice'


export const store = configureStore({
  reducer: {
    beer: beerSlice,
    cart: shoppingCartSlice
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
