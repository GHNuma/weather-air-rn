import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '../../../shared/theme/context/ThemeContext.tsx';

const { width } = Dimensions.get('window');

export const CurrentWeather = ({ weather }: { weather: any }) => {
  const theme = useTheme();

  return (
    <View style={styles.card}>
      <Text style={[styles.city, { color: theme.text }]}>{weather.name}</Text>
      <Text style={[styles.temp, { color: theme.text }]}>{Math.round(weather.main.temp)} °C</Text>
      <Text style={[styles.desc, { color: theme.secondaryText }]}>{weather.weather[0].description}</Text>
      <Image
        source={{ uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` }}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: { alignItems: 'center', marginBottom: 20 },
  city: { fontSize: width * 0.08, fontWeight: 'bold', marginBottom: 10 },
  temp: { fontSize: width * 0.07, marginBottom: 8 },
  desc: { fontSize: width * 0.045, marginBottom: 15, textTransform: 'capitalize', textAlign: 'center' },
  icon: { width: width * 0.4, height: width * 0.4, marginBottom: 20 },
});
