import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '../theme/context/ThemeContext.tsx';

const { width } = Dimensions.get('window');

export const ErrorBlock = ({ message, children }: { message: string; children?: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.error }]}>{message}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  text: { fontSize: width * 0.045, marginBottom: 12, textAlign: 'center' }
});
