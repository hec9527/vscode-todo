import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import layoutStore from './layout-store';

import logger from '../utils/redux-logger';

export const store = configureStore({
    reducer: {
        layout: layoutStore,
    },
    middleware: [logger],
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppSelect: TypedUseSelectorHook<AppState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
