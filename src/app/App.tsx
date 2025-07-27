import React from 'react';
import { AppProvider } from './providers/AppProvider';
import AppNavigator from '../navigation/AppNavigator.tsx';

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  );
}
