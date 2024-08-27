import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer.ts';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: reducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
