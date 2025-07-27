import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SearchCityForm } from '../../../features/searchCity/ui/SearchCityForm.tsx';
import { useTheme } from '../../../shared/theme/context/ThemeContext.tsx';

export const HomePage = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <SearchCityForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
});
