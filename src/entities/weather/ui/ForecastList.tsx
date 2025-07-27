import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '../../../shared/theme/context/ThemeContext.tsx';

export const ForecastList = ({ forecast, isLoading }: {
  forecast: any[];
  isLoading?: boolean;
}) => {
  const theme = useTheme();
  const forecastByDay = forecast.filter((item) => item.dt_txt.includes('12:00:00'));

  return (
    <View style={styles.container}>
      <Text style={[styles.forecastTitle, { color: theme.text }]}>Прогноз на 5 дней:</Text>

      {isLoading ? (
        <ActivityIndicator size="small" color={theme.text} />
      ) : (
        forecastByDay.map((item) => (
          <View key={item.dt} style={styles.forecastItem}>
            <Text style={{ color: theme.text }}>
              {new Date(item.dt_txt).toLocaleDateString('ru-RU', {
                weekday: 'short',
                day: 'numeric',
                month: 'short'
              })}
            </Text>
            <Text style={{ color: theme.secondaryText }}>
              {item.main.temp}°C | {item.weather[0].description}
            </Text>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  forecastTitle: { fontSize: 18, fontWeight: '600', marginBottom: 10, textAlign: 'center' },
  forecastItem: { marginBottom: 8, alignItems: 'center' },
  container: { marginTop: 30 }
});
