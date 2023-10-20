import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {SupportImg} from '../assets/svgs';
const Faq = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <View>
        <SupportImg />
      </View>
    </SafeAreaView>
  );
};
export default Faq;
