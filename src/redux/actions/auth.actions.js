import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../services/axios.services"
import { showToast } from "../../utils/helpers"

const BASE_URL_API = process.env.BASE_URL_API

// signup
export const signUp = createAsyncThunk(
  'auth/signup', async (data, thunkAPI) => {
    try {
      const res = await axiosInstance.post(`${BASE_URL_API}/auth/signup`, data)
      const status = res?.status
      const message = res?.data.message
      if (status === 201) {
        showToast('success', message)
        return res.data.userInfo
      } else {
        return thunkAPI.rejectWithValue(res.data)
      } 
    } catch (err) {
      console.log('err`', err)
      const status = err?.response?.status
      const message = err?.response?.data.message
      if (status === 409) {
        showToast('error', message)
        return thunkAPI.rejectWithValue({message, status})
      } else {
        return thunkAPI.rejectWithValue({message})
      }
    }
  }
)

// signin
export const signIn = createAsyncThunk(
  'auth/signin', async (data, thunkAPI) => {
    try {
      const res = await axiosInstance.post(`${BASE_URL_API}/auth/signin`, data)
      const status = res?.status
      const message = res?.data.message
      if (status === 200) {
        showToast('success', message)
        return res.data.userInfo
      } else {
        return thunkAPI.rejectWithValue(res.data)
      } 
    } catch (err) {
      console.log('err`', err)
      const status = err?.response?.status
      const message = err?.response?.data.message
      if (status === 403) {
        showToast('error', message)
        return thunkAPI.rejectWithValue({message, status})
      } else {
        return thunkAPI.rejectWithValue({message})
      }
    }
  }
)
