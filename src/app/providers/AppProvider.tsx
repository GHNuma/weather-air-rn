import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '../../shared/theme/context/ThemeContext.tsx';
import { ErrorBoundary } from './ErrorBoundary.tsx';

export const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <ErrorBoundary>
  <Provider store={store}>
    <ThemeProvider>
      <SafeAreaProvider>
        {children}
      </SafeAreaProvider>
    </ThemeProvider>
  </Provider>
  </ErrorBoundary>
);
