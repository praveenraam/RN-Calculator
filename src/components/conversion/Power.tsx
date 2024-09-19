import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

type PowerProps = {
  inputValue: string;
};

const Power = ({ inputValue }: PowerProps) => {
  const [resultValue, setResultValue] = useState<string>('');
  const [conversionType, setConversionType] = useState<string>('Watts to Kilowatts');

  const powerConversionFunc = (value: number, type: string) => {
    switch (type) {
      case 'Watts to Kilowatts':
        return (value / 1000).toFixed(2);  // W to kW
      case 'Kilowatts to Watts':
        return (value * 1000).toFixed(2);  // kW to W

      case 'Watts to Horsepower (metric)':
        return (value / 735.5).toFixed(2);  // W to HP (metric)
      case 'Horsepower (metric) to Watts':
        return (value * 735.5).toFixed(2);  // HP (metric) to W

      case 'Watts to Horsepower (US)':
        return (value / 745.7).toFixed(2);  // W to HP (US)
      case 'Horsepower (US) to Watts':
        return (value * 745.7).toFixed(2);  // HP (US) to W

      case 'Kilowatts to Horsepower (metric)':
        return (value * 1.35962).toFixed(2);  // kW to HP (metric)
      case 'Horsepower (metric) to Kilowatts':
        return (value / 1.35962).toFixed(2);  // HP (metric) to kW

      case 'Kilowatts to Horsepower (US)':
        return (value * 1.34102).toFixed(2);  // kW to HP (US)
      case 'Horsepower (US) to Kilowatts':
        return (value / 1.34102).toFixed(2);  // HP (US) to kW

      default:
        return '0';
    }
  };

  useEffect(() => {
    if (inputValue) {
      const numericValue = parseFloat(inputValue);
      if (!isNaN(numericValue)) {
        const convertedValue = powerConversionFunc(numericValue, conversionType);
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
          <Picker.Item label="Watts to Kilowatts" value="Watts to Kilowatts" />
          <Picker.Item label="Kilowatts to Watts" value="Kilowatts to Watts" />
          <Picker.Item label="Watts to Horsepower (metric)" value="Watts to Horsepower (metric)" />
          <Picker.Item label="Horsepower (metric) to Watts" value="Horsepower (metric) to Watts" />
          <Picker.Item label="Watts to Horsepower (US)" value="Watts to Horsepower (US)" />
          <Picker.Item label="Horsepower (US) to Watts" value="Horsepower (US) to Watts" />
          <Picker.Item label="Kilowatts to Horsepower (metric)" value="Kilowatts to Horsepower (metric)" />
          <Picker.Item label="Horsepower (metric) to Kilowatts" value="Horsepower (metric) to Kilowatts" />
          <Picker.Item label="Kilowatts to Horsepower (US)" value="Kilowatts to Horsepower (US)" />
          <Picker.Item label="Horsepower (US) to Kilowatts" value="Horsepower (US) to Kilowatts" />
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

export default Power;
