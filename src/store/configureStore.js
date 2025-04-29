import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../module/reducer';  // รวม reducer หลายตัวไว้

const store = configureStore({
    reducer: rootReducer,
});

export default store;
