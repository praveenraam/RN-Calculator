import { Pressable, Text, View, Image } from 'react-native';
import React from 'react';

const ConversionNumPad = ( { onPressKey }) => {
  return (
    <View className="grid grid-rows-4 grid-flow-row gap-4">

        <View className="flex flex-row justify-center items-center mx-auto">
            <Pressable className="m-1.5 mx-7 w-20 h-20 bg-red-400 rounded-full flex items-center justify-center" onPress={() => onPressKey('Reset')}>
                <Text className="text-center text-white">Reset</Text>
            </Pressable>
            <Pressable className="m-1.5 mx-7 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center" onPress={() => onPressKey('backSpace')}>
                <Image source={require('../../assets/img/backspace.png')} className="w-5 h-5"  />
            </Pressable>
            <Pressable className="m-1.5 mx-7 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center" onPress={() => onPressKey('+/-')}>
                <Text className="text-center text-white">+/-</Text>
            </Pressable>
        </View>

        <View className="flex flex-row justify-center items-center mx-auto">
                {['1','2','3'].map((char) => (
                    <Pressable key={char} onPress={() => onPressKey(char)} className="m-1.5 mx-7 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                        <Text className="text-white text-lg">{char}</Text>
                    </Pressable>
                ))}
        </View>

        <View className="flex flex-row justify-center items-center mx-auto">
                {['4','5','6'].map((char) => (
                    <Pressable key={char} onPress={() => onPressKey(char)} className="m-1.5 mx-7 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                        <Text className="text-white text-lg">{char}</Text>
                    </Pressable>
                ))}
        </View>

        <View className="flex flex-row justify-center items-center mx-auto">
                {['7','8','9'].map((char) => (
                    <Pressable key={char} onPress={() => onPressKey(char)} className="m-1.5 mx-7 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                        <Text className="text-white text-lg">{char}</Text>
                    </Pressable>
                ))}
        </View>

        <View className="flex flex-row justify-center items-center mx-auto">
                {['00','0','.'].map((char) => (
                    <Pressable key={char} onPress={() => onPressKey(char)} className="m-1.5 mx-7 w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center">
                        <Text className="text-white text-lg">{char}</Text>
                    </Pressable>
                ))}
        </View>

    </View>
  );
};

export default ConversionNumPad;
