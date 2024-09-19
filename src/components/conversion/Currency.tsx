import React, { useState, useEffect, useCallback } from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import axios from 'axios';

type CurrencyConverterProps = {
  inputValue: string;
};

const CurrencyConverter = ({ inputValue }: CurrencyConverterProps) => {
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('INR');
  const [conversionRate, setConversionRate] = useState<number>(1);
  const [resultValue, setResultValue] = useState<string>('0');

  const fetchConversionRate = useCallback(async () => {
    try {
      const apiKey = 'YOUR_API_KEY';
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}?access_key=${apiKey}`
      );
      const rates = response.data.rates;
      setConversionRate(rates[toCurrency]);
    } catch (error) {
      console.error('Error fetching conversion rates:', error);
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetchConversionRate();
    }
  }, [fromCurrency, toCurrency, fetchConversionRate]);

  useEffect(() => {
    if (inputValue) {
      const numericValue = parseFloat(inputValue);
      if (!isNaN(numericValue)) {
        const convertedValue = (numericValue * conversionRate).toFixed(2);
        setResultValue(convertedValue);
      } else {
        setResultValue('0');
      }
    } else {
      setResultValue('0');
    }
  }, [inputValue, conversionRate]);

  return (
    <View className="flex flex-col justify-center items-center">
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20 }}>

        <View className="h-12 bg-gray-800 rounded-lg justify-center items-center mr-2">
          <Picker
            dropdownIconColor={'#fff'}
            selectedValue={fromCurrency}
            style={{ height: 50, width: 150, color: 'white' }}
            onValueChange={(itemValue) => setFromCurrency(itemValue)}
          >
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="INR" value="INR" />
            <Picker.Item label="EUR" value="EUR" />
            <Picker.Item label="GBP" value="GBP" />
          </Picker>
        </View>

        <View className="h-12 bg-gray-800 rounded-lg justify-center items-center ml-2">
          <Picker
            dropdownIconColor={'#fff'}
            selectedValue={toCurrency}
            style={{ height: 50, width: 150, color: 'white' }}
            onValueChange={(itemValue) => setToCurrency(itemValue)}
          >
            <Picker.Item label="USD" value="USD" />
            <Picker.Item label="INR" value="INR" />
            <Picker.Item label="EUR" value="EUR" />
            <Picker.Item label="GBP" value="GBP" />
          </Picker>
        </View>
      </View>

      <View className="bg-gray-800 w-4/5 p-4 my-3 rounded-lg">
        <Text className="text-white text-2xl text-center">{inputValue}</Text>
      </View>

      <View className="bg-gray-800 w-4/5 p-4 my-3 rounded-lg">
        <Text className="text-white text-2xl text-center">
          {inputValue} {fromCurrency} = {resultValue} {toCurrency}
        </Text>
      </View>
    </View>
  );
};

export default CurrencyConverter;
