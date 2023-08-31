
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import AppNavigator from './navigation/AppNavigator';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          <AppNavigator />
        </SafeAreaView>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;