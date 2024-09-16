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
