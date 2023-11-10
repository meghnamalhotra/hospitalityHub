import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MinusCircle, PlusCircle} from '../assets/svgs';

const Show = ({message2, message1}: any) => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <View style={styles.midContainerHeading}>
        <Text style={styles.containerTxt}>{message1}</Text>
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}>
          {show === true ? <PlusCircle /> : <MinusCircle />}
        </TouchableOpacity>
      </View>
      {!show && (
        <Text style={{marginLeft: 10, marginRight: 33}}>{message2}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  midContainerHeading: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTxt: {
    fontWeight: 'bold',
  },
});
export default Show;
