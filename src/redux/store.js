import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist'

import rootReducer from "./slices";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV !== 'production'
})

const { dispatch } = store
const persistor = persistStore(store)

export { store, dispatch, persistor }