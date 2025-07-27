import React from 'react';
import { ScrollView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useTheme } from '../../../shared/theme/context/ThemeContext.tsx';
import { useGetForecastByCityQuery, useGetWeatherByCityQuery } from '../../../shared/api/weatherApi.ts';
import { ErrorBlock } from '../../../shared/ui/ErrorBlock.tsx';
import { BackButton } from '../../../shared/ui/BackButton.tsx';
import { CurrentWeather } from '../../../entities/weather/ui/CurrentWeather.tsx';
import { ForecastList } from '../../../entities/weather/ui/ForecastList.tsx';

export const WeatherPage = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const theme = useTheme();
  const { cityName } = route.params;

  const { data: weather, isLoading, isError, error } = useGetWeatherByCityQuery(cityName);
  const {
    data: forecastData,
    isLoading: isForecastLoading
  } = useGetForecastByCityQuery(cityName);

  if (isLoading) {
    return (
      <View style={[styles.center, { backgroundColor: theme.background }]}>
        <ActivityIndicator size="large" color={theme.text} />
      </View>
    );
  }

  if (isError || !weather) {
    const notFound = (error as any)?.data?.message === 'city not found';
    return (
      <ErrorBlock
        message={notFound ? 'Город не найден. Проверьте название.' : 'Ошибка загрузки. Повторите позже.'}
      >
        <BackButton onPress={() => navigation.goBack()} />
      </ErrorBlock>
    );
  }

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}>
      <CurrentWeather weather={weather} />
      <BackButton onPress={() => navigation.goBack()} />
      <ForecastList forecast={forecastData?.list || []} isLoading={isForecastLoading} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }
});
