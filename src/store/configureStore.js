import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../module/reducer';  // รวม reducer หลายตัวไว้


const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Load state failed", e);
        return undefined;
    }
};

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    } catch (e) {
        console.warn("Save state failed", e);
    }
};

const persistedState = loadFromLocalStorage();


const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState,
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;
