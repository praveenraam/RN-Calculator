import { Pressable, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


interface OptionMenuProps {
  onClose: () => void;
}
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const OptionsComponent: React.FC<OptionMenuProps> = ({onClose}) => {

  const navigation = useNavigation<NavigationProp>();

  const handleNavigation = (screen: string) => {
    onClose();
    navigation.navigate(screen);
  };

  return (
    <View className="absolute top-3 right-10 bg-white p-4 border bg-black rounded shadow-lg">
     <Pressable onPress={() => handleNavigation('About')} className="mb-2">
       <Text className="text-white">Conversion</Text>
     </Pressable>
     <Pressable onPress={() => handleNavigation('About')} className="mb-2">
       <Text className="text-white">About</Text>
     </Pressable>
   </View>
  );
};

export default OptionsComponent;
