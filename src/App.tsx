import { View } from 'react-native';
import React from 'react';
import AppNavigator from './navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView className="h-screen">
      <AppNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
