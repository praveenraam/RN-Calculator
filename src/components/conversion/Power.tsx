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
