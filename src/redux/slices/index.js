


import { combineReducers } from "@reduxjs/toolkit";
import authSlice from './auth.slice'

import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer"

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'],
  blacklist: ['isLoading', 'successMessage', 'isSuccess','isError']
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authSlice),
})

export default rootReducer