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
      case 'Square Millimeters to Square Centimeters':
        return (value / 100).toFixed(6); // 1 mm² = 0.01 cm²
      case 'Square Centimeters to Square Millimeters':
        return (value * 100).toFixed(6); // 1 cm² = 100 mm²

      case 'Square Centimeters to Square Meters':
        return (value / 10000).toFixed(6); // 1 cm² = 0.0001 m²
      case 'Square Meters to Square Centimeters':
        return (value * 10000).toFixed(6); // 1 m² = 10,000 cm²

      case 'Square Meters to Square Kilometers':
        return (value / 1e6).toFixed(6); // 1 m² = 1e-6 km²
      case 'Square Kilometers to Square Meters':
        return (value * 1e6).toFixed(6); // 1 km² = 1e6 m²

      case 'Square Meters to Square Feet':
        return (value * 10.7639).toFixed(6); // 1 m² = 10.7639 ft²
      case 'Square Feet to Square Meters':
        return (value / 10.7639).toFixed(6); // 1 ft² = 0.092903 m²

      case 'Square Feet to Square Yards':
        return (value / 9).toFixed(6); // 1 ft² = 0.1111 yd²
      case 'Square Yards to Square Feet':
        return (value * 9).toFixed(6); // 1 yd² = 9 ft²

      case 'Square Yards to Acres':
        return (value / 4840).toFixed(6); // 1 yd² = 0.000206612 acres
      case 'Acres to Square Yards':
        return (value * 4840).toFixed(6); // 1 acre = 4840 yd²

      case 'Acres to Hectares':
        return (value * 0.404686).toFixed(6); // 1 acre = 0.404686 hectares
      case 'Hectares to Acres':
        return (value / 0.404686).toFixed(6); // 1 hectare = 2.47105 acres

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
        style={{ height: 50, width: 300, color: 'white' }}
        onValueChange={(itemValue) => setConversionType(itemValue)}
      >
        <Picker.Item label="Square Millimeters to Square Centimeters" value="Square Millimeters to Square Centimeters" />
          <Picker.Item label="Square Centimeters to Square Millimeters" value="Square Centimeters to Square Millimeters" />
          <Picker.Item label="Square Centimeters to Square Meters" value="Square Centimeters to Square Meters" />
          <Picker.Item label="Square Meters to Square Centimeters" value="Square Meters to Square Centimeters" />
          <Picker.Item label="Square Meters to Square Kilometers" value="Square Meters to Square Kilometers" />
          <Picker.Item label="Square Kilometers to Square Meters" value="Square Kilometers to Square Meters" />
          <Picker.Item label="Square Meters to Square Feet" value="Square Meters to Square Feet" />
          <Picker.Item label="Square Feet to Square Meters" value="Square Feet to Square Meters" />
          <Picker.Item label="Square Feet to Square Yards" value="Square Feet to Square Yards" />
          <Picker.Item label="Square Yards to Square Feet" value="Square Yards to Square Feet" />
          <Picker.Item label="Square Yards to Acres" value="Square Yards to Acres" />
          <Picker.Item label="Acres to Square Yards" value="Acres to Square Yards" />
          <Picker.Item label="Acres to Hectares" value="Acres to Hectares" />
          <Picker.Item label="Hectares to Acres" value="Hectares to Acres" />
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
