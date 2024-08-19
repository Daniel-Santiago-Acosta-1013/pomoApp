import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { TimerProvider } from './src/context/TimerContext';
import { SettingsProvider } from './src/context/SettingsContext';

const App = () => {
  return (
    <SettingsProvider>
      <TimerProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          <HomeScreen />
        </SafeAreaView>
      </TimerProvider>
    </SettingsProvider>
  );
};

export default App;
