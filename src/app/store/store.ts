import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { weatherApi } from '../../shared/api/weatherApi.ts';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});
