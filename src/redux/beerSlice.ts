import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Beer } from '../interfaces/beer.interface'
import { fetchBeer, fetchSingleBeer } from './actions'
import { RootState, AppThunk } from './store'

export interface BeerState {
  beer: null | Beer[]
  currentBeer: null | Beer
  status: 'idle' | 'loading' | 'failed'
}

const initialState: BeerState = {
  beer: null,
  status: 'idle',
  currentBeer:null
}

export const beerSlice = createSlice({
  name: 'beer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBeer.fulfilled, (state, action) => {
      state.beer = action.payload
      state.status = 'idle'
    })
    builder.addCase(fetchBeer.pending, (state, action) => {
      state.status = 'loading'
    })

    builder.addCase(fetchSingleBeer.fulfilled, (state, action) => {
      state.currentBeer = action.payload[0]
      state.status = 'idle'
    })
    builder.addCase(fetchSingleBeer.pending, (state, action) => {
      state.status = 'loading'
    })
  },
})

export const {} = beerSlice.actions

export default beerSlice.reducer
