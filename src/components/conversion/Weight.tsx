import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

type WeightProps = {
  inputValue: string;
};

const Weight = ({ inputValue }: WeightProps) => {
  const [resultValue, setResultValue] = useState<string>('');
  const [conversionType, setConversionType] = useState<string>('Kilograms to Pounds');

  const weightConversionFunc = (value: number, type: string) => {
    switch (type) {
      case 'Kilograms to Pounds':
        return (value * 2.20462).toFixed(2);  // kg to lb

      case 'Pounds to Kilograms':
        return (value / 2.20462).toFixed(2);  // lb to kg

      case 'Kilograms to Grams':
        return (value * 1000).toFixed(2);  // kg to g

      case 'Grams to Kilograms':
        return (value / 1000).toFixed(2);  // g to kg

      case 'Pounds to Ounces':
        return (value * 16).toFixed(2);  // lb to oz

      case 'Ounces to Pounds':
        return (value / 16).toFixed(2);  // oz to lb

      case 'Kilograms to Milligrams':
        return (value * 1000000).toFixed(2);  // kg to mg

      case 'Milligrams to Kilograms':
        return (value / 1000000).toFixed(2);  // mg to kg

      case 'Grams to Milligrams':
        return (value * 1000).toFixed(2);  // g to mg

      case 'Milligrams to Grams':
        return (value / 1000).toFixed(2);  // mg to g

      case 'Stones to Pounds':
        return (value * 14).toFixed(2);  // st to lb

      case 'Pounds to Stones':
        return (value / 14).toFixed(2);  // lb to st

      case 'Ounces to Grams':
        return (value * 28.3495).toFixed(2);  // oz to g

      case 'Grams to Ounces':
        return (value / 28.3495).toFixed(2);  // g to oz

      default:
        return '0';
    }
  };

  useEffect(() => {
    if (inputValue) {
      const numericValue = parseFloat(inputValue);
      if (!isNaN(numericValue)) {
        const convertedValue = weightConversionFunc(numericValue, conversionType);
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
      <View className="h-12 bg-gray-800 rounded-lg justify-center items-center mb-3">
        <Picker
          dropdownIconColor={'#fff'}
          selectedValue={conversionType}
          style={{ height: 50, width: 250, color: 'white' }}
          onValueChange={(itemValue) => setConversionType(itemValue)}
        >
          <Picker.Item label="Kilograms to Pounds" value="Kilograms to Pounds" />
          <Picker.Item label="Pounds to Kilograms" value="Pounds to Kilograms" />
          <Picker.Item label="Kilograms to Grams" value="Kilograms to Grams" />
          <Picker.Item label="Grams to Kilograms" value="Grams to Kilograms" />
          <Picker.Item label="Pounds to Ounces" value="Pounds to Ounces" />
          <Picker.Item label="Ounces to Pounds" value="Ounces to Pounds" />
          <Picker.Item label="Kilograms to Milligrams" value="Kilograms to Milligrams" />
          <Picker.Item label="Milligrams to Kilograms" value="Milligrams to Kilograms" />
          <Picker.Item label="Grams to Milligrams" value="Grams to Milligrams" />
          <Picker.Item label="Milligrams to Grams" value="Milligrams to Grams" />
          <Picker.Item label="Stones to Pounds" value="Stones to Pounds" />
          <Picker.Item label="Pounds to Stones" value="Pounds to Stones" />
          <Picker.Item label="Ounces to Grams" value="Ounces to Grams" />
          <Picker.Item label="Grams to Ounces" value="Grams to Ounces" />
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

export default Weight;
