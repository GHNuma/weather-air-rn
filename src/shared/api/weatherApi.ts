import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WEATHER_API_KEY } from '@env';
import { WeatherResponse, ForecastResponse } from './types';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openweathermap.org/data/2.5/'
  }),
  endpoints: builder => ({
    getWeatherByCity: builder.query<WeatherResponse, string>({
      query: cityName => ({
        url: 'weather',
        params: {
          q: cityName,
          appid: WEATHER_API_KEY,
          units: 'metric',
          lang: 'ru'
        }
      }),
      keepUnusedDataFor: 3600
    }),
    getForecastByCity: builder.query<ForecastResponse, string>({
      query: cityName => ({
        url: 'forecast',
        params: {
          q: cityName,
          appid: WEATHER_API_KEY,
          units: 'metric',
          lang: 'ru'
        }
      }),
      keepUnusedDataFor: 3600
    })
  })
});

export const {
  useGetWeatherByCityQuery,
  useGetForecastByCityQuery
} = weatherApi;
