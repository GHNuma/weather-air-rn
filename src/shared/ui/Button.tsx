import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '../theme/context/ThemeContext.tsx';

const { width } = Dimensions.get('window');

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export const Button = ({ title, onPress, disabled }: Props) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor:
            disabled ? theme.border : theme.buttonBackground,
        },
      ]}
    >
      <Text style={[styles.text, { color: theme.buttonText }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    fontSize: width * 0.045,
  },
});
