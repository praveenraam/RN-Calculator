import React from 'react';
import { Text, View, FlatList, Pressable, Image } from 'react-native';

type ConversionType = {
  id: string;
  name: string;
};

const conversions: ConversionType[] = [
  { id: '1', name: 'Temperature' }, // Fixed spelling
  { id: '2', name: 'Weight' },
  { id: '3', name: 'Length' },
  { id: '4', name: 'Area' },
];

const ConversionsList = () => {
  const renderItem = ({ item }: { item: ConversionType }) => (
    <Pressable className="p-4 bg-gray-700 rounded-md my-2 flex-row item-center">
      <Text className="text-white text-lg flex-1">{item.name}</Text>
      <Image source={require('../../assets/img/right.png')} className="w-5 h-5" />
    </Pressable>
  );

  return (
    <View className="flex-1 bg-black p-4">
      <FlatList
        data={conversions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ConversionsList;
