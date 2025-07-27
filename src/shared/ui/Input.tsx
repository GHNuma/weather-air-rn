import React from 'react';
import { TextInput, StyleSheet, TextInputProps, Dimensions } from 'react-native';
import { useTheme } from '../theme/context/ThemeContext.tsx';

const { width } = Dimensions.get('window');

export const Input = (props: TextInputProps) => {
  const theme = useTheme();

  return (
    <TextInput
      {...props}
      style={[
        styles.input,
        {
          backgroundColor: theme.background,
          borderColor: theme.border,
          color: theme.text,
        },
        props.style,
      ]}
      placeholderTextColor={theme.secondaryText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: width * 0.045,
    marginBottom: 10,
  },
});
