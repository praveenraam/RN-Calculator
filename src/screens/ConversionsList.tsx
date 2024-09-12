import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, FlatList, Pressable, Image } from 'react-native';

type ConversionType = {
  id: string;
  name: string;
};

const conversions: ConversionType[] = [
  { id: '1', name: 'Temperature' },
  { id: '2', name: 'Weight' },
  { id: '3', name: 'Length' },
  { id: '4', name: 'Area' },
];

const getImage = (itemName:String) => {

  switch (itemName){

    case 'Temperature' : return require('../../assets/img/conversions/Temperature.png');
    case 'Area' : return require('../../assets/img/conversions/Area.png');
    case 'Length' : return require('../../assets/img/conversions/Length.png');
    case 'Weight' : return require('../../assets/img/conversions/Weight.png');
  }

};

const ConversionsList = () => {

  const navigation = useNavigation();

  const handlePress = (item:ConversionType) => {
    navigation.navigate('Conversion',{conversionType: item.name});
  }

  const renderItem = ({ item }: { item: ConversionType }) => (
    <Pressable onPress={() => handlePress(item)} className="p-4 bg-gray-700 rounded-md my-2 flex-row item-center">
      <View className="flex-1 flex-row item-center">
        <Text className="text-white text-lg mr-2">{item.name}</Text>
        <Image source={getImage(item.name)} className="w-5 h-5 mt-1"/>
      </View>
      <Image source={require('../../assets/img/right.png')} className="w-5 h-5 mt-1" />
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
