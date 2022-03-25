import { StatusBar} from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Dashboard} from './src/pages/Dashboard';

export default function App() {
  return (
      <ThemeProvider theme={theme}>
        <Dashboard/>
        <StatusBar style="auto" />
      </ThemeProvider>
  );
}
