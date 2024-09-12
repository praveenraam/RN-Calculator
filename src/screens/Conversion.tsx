import React from 'react';
import { View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';


// Components
import Temperature from '../components/conversion/Temperature';
import Area from '../components/conversion/Area';
import Weight from '../components/conversion/Weight';
import Length from '../components/conversion/Length';

type ParamList = {
  Conversion:{
    conversionType: string;
  };
};

const Conversion = () => {
  const route = useRoute<RouteProp<ParamList,'Conversion'>>();

  const {conversionType} = route.params;

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
    <View>
      {conversionComponent(conversionType)}
    </View>
  );

};

export default Conversion;
