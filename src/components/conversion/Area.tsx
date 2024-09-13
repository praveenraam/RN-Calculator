import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

type AreaProps = {
  inputValue:string;
}

const Area = ({inputValue}: AreaProps) => {

  const [resultValue, setResultValue] = useState<string>('');
  const [conversionType,setConversionType] = useState<string>('Square Meters to Square Feet');

  const areaConversionFunc = (value:number,type:string) => {

    switch(type){
      case 'Square Meters to Square Feet':
        return (value * 10.7639).toFixed(2);  // 1 m² = 10.7639 ft²
      case 'Square Feet to Square Yards':
        return (value / 9).toFixed(2);  // 1 ft² = 0.1111 yd² (1 yd² = 9 ft²)
      case 'Square Yards to Acres':
        return (value / 4840).toFixed(6);  // 1 yd² = 0.000206612 acres
      case 'Acres to Hectares':
        return (value * 0.404686).toFixed(6);  // 1 acre = 0.404686 hectares
      default:
        return '0';
    }
  };

  useEffect(() => {
    if(inputValue){
      const numericValue = parseFloat(inputValue);
      if(!isNaN(numericValue)){
        const convertedValue = areaConversionFunc(numericValue, conversionType);
        setResultValue(convertedValue);
      }else{
        setResultValue('');
      }
    }else{
      setResultValue('');
    }
  },[inputValue,conversionType]);

  return (
    <View className="flex flex-col justify-center items-center">

    <View className="h-12 bg-gray-800 rounded-lg justify-center items-center mb-3 ">
      <Picker
        dropdownIconColor={'#fff'}
        selectedValue={conversionType}
        style={{ height: 50, width: 250, color: 'white' }}
        onValueChange={(itemValue) => setConversionType(itemValue)}
      >
        <Picker.Item label="Meters to Feet" value="Square Meters to Square Feet" />
        <Picker.Item label="Feet to Yards" value="Square Feet to Square Yards" />
        <Picker.Item label="Yards to Acres" value="Square Yards to Acres" />
        <Picker.Item label="Acres to Hectares" value="Acres to Hectares" />
      </Picker>
    </View>

      <View  className="bg-gray-800 w-4/5 p-4 my-3 rounded-lg">
        <Text className="text-white text-2xl text-center">{inputValue}</Text>
      </View>

      <View className="bg-gray-800 w-4/5 p-4 my-3 rounded-lg">
        <Text className="text-white text-2xl text-center">{resultValue}</Text>
      </View>
    </View>
  );
};

export default Area;
