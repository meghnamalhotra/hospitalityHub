import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors} from '../theme/colors';
import {typography} from '../theme/typography';
import Header from '../components/Header';
const CustomerReview = () => {
  const navigation = useNavigation<any>();
  const onPress = () => {
    navigation.navigate('Home');
  };
  return <Header title="Customer Review" onPress={onPress} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red',
    alignContent: 'center',
    marginLeft: '3%',
  },
  uppertext: {
    fontFamily: typography.primary,
    fontSize: 25,
    fontWeight: '600',
    marginLeft: '5%',
    color: Colors.black,
  },
});
export default CustomerReview;
