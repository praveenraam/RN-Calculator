import React, { useState } from 'react';
import { View,Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';


// Components
import Temperature from '../components/conversion/Temperature';
import Area from '../components/conversion/Area';
import Weight from '../components/conversion/Weight';
import Length from '../components/conversion/Length';
import ConversionNumPad from '../components/ConversionNumPad';

type ParamList = {
  Conversion:{
    conversionType: string;
  };
};

const Conversion = () => {
  const route = useRoute<RouteProp<ParamList,'Conversion'>>();
  const {conversionType} = route.params;

  const [inputValue,setInputValue] = useState('');

  const handlePress = (key:string) => {
    if(key === 'Reset'){
      setInputValue('');
    }
    else if(key === 'backSpace'){
      setInputValue(inputValue.slice(0,-1));
    }
    else if(key === '+/-'){
      setInputValue(inputValue.startsWith('-') ? inputValue.slice(1) : '-' + inputValue);
    }
    else{
      setInputValue(inputValue + key);
    }
    console.log(inputValue);
  };

  const conversionComponent = (type: string) => {
    if(type === 'Temperature'){
      return <Temperature />;
    }
    else if(type === 'Area'){
      return <Area />;
    }
    else if(type === 'Weight'){
      return <Weight />;
    }
    else if(type === 'Length'){
      return <Length />;
    }
  };


  return (
    <View className="grid grid-rows-4 grid-flow-row gap-10 bg-black h-screen" style={{ backgroundColor: 'rgb(21, 21, 21)' }}>
      <View>
        {conversionComponent(conversionType)}
      </View>

      <View>
        <ConversionNumPad onPressKey={handlePress} />
      </View>
    </View>
  );

};

export default Conversion;
