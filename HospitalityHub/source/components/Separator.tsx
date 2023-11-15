import React from 'react';
import {View} from 'react-native';

interface Props {
  width: any;
  height: any;
  backgroundColor: string;
  marginTop: any;
}

const Separator: React.FC<Props> = ({
  width,
  height,
  backgroundColor,
  marginTop,
}) => {
  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        marginTop: marginTop,
      }}
    />
  );
};

export default Separator;
