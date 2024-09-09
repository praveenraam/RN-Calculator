import { View } from 'react-native';
import React from 'react';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return (
    <View className="h-screen">
      <AppNavigator />
    </View>
  );
};

export default App;
