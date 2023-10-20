// Header.js

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../theme/colors';
import {typography} from '../theme/typography';
import Separator from './Separator';
interface Props {
  title: string;
}
const Header: React.FC<Props> = ({title}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.upper}>
        <TouchableOpacity onPress={handlePress}>
          <Icons name="arrowleft" size={35} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.uppertext}>{title}</Text>
      </View>
      <Separator width={500} height={1.5} backgroundColor={'black'} />
    </>
  );
};

const styles = StyleSheet.create({
  upper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '3%',
    paddingTop: 12,
    margin: 16,
  },
  uppertext: {
    fontFamily: typography.primary,
    fontSize: 25,
    fontWeight: '600',
    marginLeft: '5%',
    color: Colors.black,
  },
});

export default Header;
