import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

type SpeedProps = {
  inputValue: string;
};

const Speed = ({ inputValue }: SpeedProps) => {
  const [resultValue, setResultValue] = useState<string>('');
  const [conversionType, setConversionType] = useState<string>('Meters per Second to Kilometers per Hour');

  const speedConversionFunc = (value: number, type: string) => {
    switch (type) {
      case 'Meters per Second to Kilometers per Hour':
        return (value * 3.6).toFixed(2);  // m/s to km/h
      case 'Kilometers per Hour to Meters per Second':
        return (value / 3.6).toFixed(2);  // km/h to m/s

      default:
        return '0';
    }
  };

  useEffect(() => {
    if (inputValue) {
      const numericValue = parseFloat(inputValue);
      if (!isNaN(numericValue)) {
        const convertedValue = speedConversionFunc(numericValue, conversionType);
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
          <Picker.Item label="Meters per Second to Kilometers per Hour" value="Meters per Second to Kilometers per Hour" />
          <Picker.Item label="Kilometers per Hour to Meters per Second" value="Kilometers per Hour to Meters per Second" />
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

export default Speed;
