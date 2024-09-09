import { View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from '../Calculator';
import About from '../About';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Calculator" component={Calculator} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigator;
