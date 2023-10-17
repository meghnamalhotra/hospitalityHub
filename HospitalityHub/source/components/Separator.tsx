import React from 'react';
import {View} from 'react-native';

const Separator = ({width, height, color}: any) => {
  return (
    <View style={{width: width, height: height, backgroundColor: color}} />
  );
};

export default Separator;
