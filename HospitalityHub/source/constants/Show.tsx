import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {MinusCircle, PlusCircle} from '../assets/svgs';

const Show = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setShow(!show);
        }}>
        {show === true ? <PlusCircle /> : <MinusCircle />}
      </TouchableOpacity>
    </View>
  );
};
export default Show;
