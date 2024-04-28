import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "../actions/auth.actions";

const initialState = {
  user: {},
  isLoading: false,
  successMessage: '',
  isSuccess: false,
  isError: false,
  errorMessage: '',
  errorStatus: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetToast: state => {
      state.isError = false
      state.isSuccess = false
      state.successMessage = ''
      state.errormessage = ''
    },
    logout: state => {
      state.user = {}
    }
  },
  extraReducers: (builder) => {
    builder

      // signup
      .addCase(signUp.pending, (state) => {
        state.isLoading = true
        state.errorStatus = ''
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
        state.successMessage = 'registered'
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        state.errorMessage = payload.message || 'Server error'
        state.errorStatus = payload.status
      })

      // signin
      .addCase(signIn.pending, (state) => {
        state.isLoading = true
        state.errorStatus = ''
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
        state.successMessage = 'Signed in'
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.isLoading = false
        state.isError = true
        state.errorMessage = payload.message || 'Server error'
        state.errorStatus = payload.status
      })

  }
})

const { actions, reducer } = authSlice
export const {
  resetToast,
  logout
} = actions

export default reducer