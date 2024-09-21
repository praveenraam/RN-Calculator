import { Linking, Pressable, Image, Text, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const About = () => {
  return (
    <ScrollView contentContainerStyle="flex-grow p-5" className="bg-black">

      <View className="mb-6 m-2">
        <Text className="text-white text-2xl font-bold mb-3">Purpose</Text>
        <Text className="text-gray-300 text-base">
          This calculator app is designed to provide a simple and efficient way to perform basic arithmetic operations such as addition, subtraction, multiplication, and division, along with other conversions. It's an easy-to-use tool for quick calculations with a clean and user-friendly interface.
        </Text>
      </View>

      <View className="mb-6 m-2">
        <Text className="text-white text-2xl font-bold mb-3">Features</Text>
        <Text className="text-gray-300 text-base mb-1 ml-3">- Basic arithmetic functions (add, subtract, multiply, divide)</Text>
        <Text className="text-gray-300 text-base mb-1 ml-3">- Memory function to store results</Text>
        <Text className="text-gray-300 text-base mb-1 ml-3">- Supports backspace, reset, and brace operations</Text>
        <Text className="text-gray-300 text-base mb-1 ml-3">- History of recent calculations</Text>
      </View>

      <View className="mb-6 m-2">
        <Text className="text-white text-2xl font-bold mb-3">Conversions Included</Text>
        <Text className="text-gray-300 text-base mb-1 ml-3">- Area</Text>
        <Text className="text-gray-300 text-base mb-1 ml-3">- Currency</Text>
        <Text className="text-gray-300 text-base mb-1 ml-3">- Length</Text>
        <Text className="text-gray-300 text-base mb-1 ml-3">- Power</Text>
        <Text className="text-gray-300 text-base mb-1 ml-3">- Speed</Text>
        <Text className="text-gray-300 text-base mb-1 ml-3">- Temperature</Text>
        <Text className="text-gray-300 text-base mb-1 ml-3">- Weight</Text>
      </View>

      <View className="mb-6 m-2">
        <Text className="text-white text-2xl font-bold mb-3">Technology Used</Text>
        <Text className="text-gray-300 text-base">
          This calculator app was developed by PraveenRaam, a passionate software developer with a focus on mobile app development using modern frameworks like React Native.
        </Text>
      </View>

      <View className="mb-20 m-2">
        <Text className="text-white text-2xl font-bold mb-3">Contact</Text>
        <View className="flex-row justify-start items-center space-x-4 mt-3">
          <Pressable onPress={() => Linking.openURL('mailto:ckpraveenraam@example.com')}>
            <Image source={require('../../assets/img/about/email.png')} className="w-10 h-10" />
          </Pressable>
          <Pressable onPress={() => Linking.openURL('https://github.com/praveenraam')}>
            <Image source={require('../../assets/img/about/github.png')} className="w-10 h-10" />
          </Pressable>
          <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/praveenraam')}>
            <Image source={require('../../assets/img/about/linkedin.png')} className="w-10 h-10" />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
