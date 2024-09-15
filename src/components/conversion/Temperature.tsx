import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

type TemperatureProps = {
  inputValue: string;
};

const Temperature = ({ inputValue }: TemperatureProps) => {
  const [resultValue, setResultValue] = useState<string>('');
  const [conversionType, setConversionType] = useState<string>('Celsius to Fahrenheit');

  const temperatureConversionFunc = (value: number, type: string) => {
    switch (type) {
      case 'Celsius to Fahrenheit':
        return ((value * 9/5) + 32).toFixed(2);  // Formula: (°C × 9/5) + 32 = °F
      case 'Fahrenheit to Celsius':
        return ((value - 32) * 5 / 9).toFixed(2);  // Formula: (°F − 32) × 5/9 = °C

      default:
        return '0';
    }
  };

  useEffect(() => {
    if (inputValue) {
      const numericValue = parseFloat(inputValue);
      if (!isNaN(numericValue)) {
        const convertedValue = temperatureConversionFunc(numericValue, conversionType);
        setResultValue(convertedValue);
      } else {
        setResultValue('');
      }
    } else {
      setResultValue('');
    }
  }, [inputValue, conversionType]);

  return (
    <View className="flex flex-col justify-center items-center">
      <View className="h-12 bg-gray-800 rounded-lg justify-center items-center mb-3 ">
        <Picker
          dropdownIconColor={'#fff'}
          selectedValue={conversionType}
          style={{ height: 50, width: 250, color: 'white' }}
          onValueChange={(itemValue) => setConversionType(itemValue)}
        >
          <Picker.Item label="Celsius to Fahrenheit" value="Celsius to Fahrenheit" />
          <Picker.Item label="Fahrenheit to Celsius" value="Fahrenheit to Celsius" />
        </Picker>
      </View>

      <View className="bg-gray-800 w-4/5 p-4 my-3 rounded-lg">
        <Text className="text-white text-2xl text-center">{inputValue}</Text>
      </View>

      <View className="bg-gray-800 w-4/5 p-4 my-3 rounded-lg">
        <Text className="text-white text-2xl text-center">{resultValue}</Text>
      </View>
    </View>
  );
};

export default Temperature;
