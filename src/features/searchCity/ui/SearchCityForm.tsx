import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../../../shared/theme/context/ThemeContext.tsx';
import { RootStackParamList } from '../../../navigation/AppNavigator.tsx';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
const { width } = Dimensions.get('window');

export const SearchCityForm = () => {
  const navigation = useNavigation<NavigationProp>();
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const theme = useTheme();

  const handleInputChange = (value: string) => {
    setCity(value);
    const isValid = /^[a-zA-Zа-яА-ЯёЁ\s-]+$/.test(value.trim());
    if (!isValid && value.trim()) {
      setError('Название города должно содержать только буквы');
    } else {
      setError('');
    }
  };

  const handleSearch = () => {
    if (!error && city.trim()) {
      navigation.navigate('Weather', { cityName: city.trim() });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <Text style={[styles.title, { color: theme.text }]}>Введите город</Text>

      <TextInput
        value={city}
        onChangeText={handleInputChange}
        placeholder="Например: Алматы"
        placeholderTextColor={theme.secondaryText}
        style={[
          styles.input,
          {
            backgroundColor: theme.background,
            borderColor: theme.border,
            color: theme.text,
          },
        ]}
        returnKeyType="done"
      />

      {error ? (
        <Text style={[styles.errorText, { color: theme.error }]}>{error}</Text>
      ) : null}

      <TouchableOpacity
        onPress={handleSearch}
        style={[
          styles.button,
          {
            backgroundColor:
              error || !city.trim() ? theme.border : theme.buttonBackground,
          },
        ]}
        disabled={!!error || !city.trim()}
      >
        <Text style={{ color: theme.buttonText, fontSize: width * 0.045 }}>
          Найти
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: width * 0.07,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: width * 0.045,
    marginBottom: 10,
  },
  errorText: {
    fontSize: width * 0.035,
    marginBottom: 10,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
});
