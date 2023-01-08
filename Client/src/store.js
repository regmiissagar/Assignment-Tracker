import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from 'redux-logger' //logger is used in console , we can see prev state action and next state 
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userSlice from "./reducers/userSlice"; //importing this from reducers

const reducer = combineReducers({  //we create tukra tukra slice , later we can create product slice so that we can have multilple 
  user: userSlice
});

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store)
