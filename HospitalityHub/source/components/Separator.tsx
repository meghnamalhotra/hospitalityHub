import React from 'react';
import {View} from 'react-native';

interface Props {
  width: any;
  height: any;
  backgroundColor: string;
}

const Separator: React.FC<Props> = ({width, height, backgroundColor}) => {
  return (
    <View
      style={{width: width, height: height, backgroundColor: backgroundColor}}
    />
  );
};

export default Separator;
