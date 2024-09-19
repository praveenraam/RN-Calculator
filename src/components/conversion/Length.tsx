import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

type LengthProps = {
  inputValue: string;
};

const Length = ({ inputValue }: LengthProps) => {
  const [resultValue, setResultValue] = useState<string>('');
  const [conversionType, setConversionType] = useState<string>('Meters to Centimeters');

  // Conversion logic for length
  const lengthConversionFunc = (value: number, type: string) => {
    switch (type) {
      case 'Meters to Centimeters':
        return (value * 100).toFixed(6);  // 1 m = 100 cm
      case 'Centimeters to Meters':
        return (value / 100).toFixed(6);  // 1 cm = 0.01 m

      case 'Meters to Kilometers':
        return (value / 1000).toFixed(6);  // 1 m = 0.001 km
      case 'Kilometers to Meters':
        return (value * 1000).toFixed(6);  // 1 km = 1000 m

      case 'Meters to Millimeters':
        return (value * 1000).toFixed(6);  // 1 m = 1000 mm
      case 'Millimeters to Meters':
        return (value / 1000).toFixed(6);  // 1 mm = 0.001 m

      case 'Centimeters to Kilometers':
        return (value / 100000).toFixed(6);  // 1 cm = 0.00001 km
      case 'Kilometers to Centimeters':
        return (value * 100000).toFixed(6);  // 1 km = 100000 cm

      case 'Centimeters to Millimeters':
        return (value * 10).toFixed(6);  // 1 cm = 10 mm
      case 'Millimeters to Centimeters':
        return (value / 10).toFixed(6);  // 1 mm = 0.1 cm

      case 'Kilometers to Millimeters':
        return (value * 1000000).toFixed(6);  // 1 km = 1000000 mm
      case 'Millimeters to Kilometers':
        return (value / 1000000).toFixed(6);  // 1 mm = 0.000001 km

      case 'Inches to Centimeters':
        return (value * 2.54).toFixed(6);  // 1 in = 2.54 cm
      case 'Centimeters to Inches':
        return (value / 2.54).toFixed(6);  // 1 cm = 0.3937 in

      case 'Feet to Meters':
        return (value * 0.3048).toFixed(6);  // 1 ft = 0.3048 m
      case 'Meters to Feet':
        return (value / 0.3048).toFixed(6);  // 1 m = 3.28084 ft

      case 'Yards to Meters':
        return (value * 0.9144).toFixed(6);  // 1 yd = 0.9144 m
      case 'Meters to Yards':
        return (value / 0.9144).toFixed(6);  // 1 m = 1.09361 yd

      case 'Miles to Kilometers':
        return (value * 1.60934).toFixed(6);  // 1 mi = 1.60934 km
      case 'Kilometers to Miles':
        return (value / 1.60934).toFixed(6);  // 1 km = 0.621371 mi

      default:
        return '0';
    }
  };

  useEffect(() => {
    if (inputValue) {
      const numericValue = parseFloat(inputValue);
      if (!isNaN(numericValue)) {
        const convertedValue = lengthConversionFunc(numericValue, conversionType);
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
          <Picker.Item label="Meters to Centimeters" value="Meters to Centimeters" />
          <Picker.Item label="Centimeters to Meters" value="Centimeters to Meters" />
          <Picker.Item label="Meters to Kilometers" value="Meters to Kilometers" />
          <Picker.Item label="Kilometers to Meters" value="Kilometers to Meters" />
          <Picker.Item label="Meters to Millimeters" value="Meters to Millimeters" />
          <Picker.Item label="Millimeters to Meters" value="Millimeters to Meters" />
          <Picker.Item label="Inches to Centimeters" value="Inches to Centimeters" />
          <Picker.Item label="Centimeters to Inches" value="Centimeters to Inches" />
          <Picker.Item label="Feet to Meters" value="Feet to Meters" />
          <Picker.Item label="Meters to Feet" value="Meters to Feet" />
          <Picker.Item label="Yards to Meters" value="Yards to Meters" />
          <Picker.Item label="Meters to Yards" value="Meters to Yards" />
          <Picker.Item label="Miles to Kilometers" value="Miles to Kilometers" />
          <Picker.Item label="Kilometers to Miles" value="Kilometers to Miles" />
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

export default Length;
