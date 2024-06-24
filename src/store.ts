import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../src/WeatherSlice';

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});

