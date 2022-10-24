import { createSlice } from '@reduxjs/toolkit'
import { Beer } from '../interfaces/beer.interface'

export interface ShoppingCartSliceState {
  cart: Beer[]
}

const initialState: ShoppingCartSliceState = {
  cart: (localStorage.cart && JSON.parse(localStorage.cart)) || [],
}

export const shoppingCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      const itemInCart: Beer = state.cart.find(
        (item) => item.id === action.payload.id
      ) as Beer
      if (itemInCart) {
        itemInCart.count += action.payload.count
      } else {
        state.cart.push(action.payload)
      }
      localStorage.cart = JSON.stringify(state.cart)
    },
    remove: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.beer.id
      )
      if (itemInCart && action.payload.type === '/checkout') {
        if (itemInCart.count - action.payload.count < 1) {
          state.cart.splice(state.cart.indexOf(itemInCart), 1)
        } else {
          itemInCart.count -= action.payload.count
        }
      } else {
        const itemInCart = state.cart.find(
          (item) => item.id === action.payload.beer.id
        )
        if (itemInCart) {
          state.cart.splice(state.cart.indexOf(itemInCart), 1)
        }
      }

      localStorage.cart = JSON.stringify(state.cart)
    },
  },
})

export const { add, remove } = shoppingCartSlice.actions

export default shoppingCartSlice.reducer
