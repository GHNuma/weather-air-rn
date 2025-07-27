import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { HomePage } from '../pages/home/ui/HomePage.tsx';
import { WeatherPage } from '../pages/weather/ui/WeatherPage.tsx';

export type RootStackParamList = {
  Home: undefined;
  Weather: { cityName: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Weather" component={WeatherPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
