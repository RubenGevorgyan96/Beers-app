import { createAsyncThunk } from '@reduxjs/toolkit'
import { Api } from '../Api'

export const fetchBeer = createAsyncThunk('beers/fetchBeer', async (count:number) => {
  const { data } = await Api.get(`beers?per_page=${count}`)
  return data
})

export const fetchSingleBeer = createAsyncThunk('beers/fetchSingleBeer', async (id:unknown) => {
  const { data } = await Api.get('beers/'+id)
  return data
})
