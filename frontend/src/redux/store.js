import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


import authReducer from "./authSlice";
import postReducer  from './postSlice';



const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  user:authReducer,
  posts:postReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});