import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '../theme/context/ThemeContext.tsx';

const { width } = Dimensions.get('window');

export const BackButton = ({ onPress }: { onPress: () => void }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={[styles.backButton, { backgroundColor: theme.buttonBackground }]}>
      <Text style={[styles.backButtonText, { color: theme.buttonText }]}>Вернуться</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: { marginTop: 20, paddingHorizontal: 24, paddingVertical: 10, borderRadius: 6 },
  backButtonText: { fontSize: width * 0.04 }
});
