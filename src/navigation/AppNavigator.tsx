import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from '../Calculator';
import About from '../screens/About';
import ConversionsList from '../screens/ConversionsList';

export type RootStackParamList = {
  Calculator: undefined;
  About: undefined;  // Add other screens here if necessary
};

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Calculator" component={Calculator} />
            <Stack.Screen name="About" component={About} />
            <Stack.Screen name="ConversionsList" component={ConversionsList} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigator;
