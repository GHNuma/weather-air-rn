import { combineReducers } from '@reduxjs/toolkit';
import { weatherApi } from '../../shared/api/weatherApi.ts';

export const rootReducer = combineReducers({
  [weatherApi.reducerPath]: weatherApi.reducer,
});

