import { Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const About = () => {
  return (
    <View contentContainerStyle="flex-grow p-5 bg-gray-700" style={{backgroundColor:'rgb(21, 21, 21)'}}>

      <View>
        <Text className="text-white">Purpose</Text>
        <Text className="text-white">
          This calculator app is designed to provide a simple and efficient way to perform basic arithmetic operations such as addition, subtraction, multiplication, and division and other conversions. It's an easy-to-use tool for quick calculations with a clean and user-friendly interface.
        </Text>
      </View>

      <View>
        <Text className="text-white">Features</Text>
        <Text className="text-white">
          - Basic arithmetic functions (add, subtract, multiply, divide)
        </Text>
        <Text className="text-white">
          - Memory function to store results
        </Text>
        <Text className="text-white">
          - Supports backspace, reset, and brace operations
        </Text>
        <Text className="text-white">
          - History of recent calculations
        </Text>
      </View>

      <View>
        <Text className="text-white">Conversion Included</Text>
        <Text className="text-white">
          - Area
        </Text>
        <Text className="text-white">
          - Currency
        </Text>
        <Text className="text-white">
          - Length
        </Text>
        <Text className="text-white">
          - Power
        </Text>
        <Text className="text-white">
          - Speed
        </Text>
        <Text className="text-white">
          - Temperature
        </Text>
        <Text className="text-white">
          - Weight
        </Text>
      </View>

      <View>
        <Text className="text-white">
          Technology Used
        </Text>
        <Text className="text-white">
          This calculator app was developed by PraveenRaam, a passionate software developer with a focus on mobile app development using modern frameworks React Native.
        </Text>
      </View>

      <View>
        <Text>Contact</Text>
        <View>
          
        </View>
      </View>

    </View>
  );
};

export default About;
