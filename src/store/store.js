import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import postSlice from "./reducers/posts/postSlice";
import userSlice from "./reducers/users/userSlice";
import storage from 'redux-persist/lib/storage' 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  posts:postSlice,
  user:userSlice       
 });
 
const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export default store;