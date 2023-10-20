import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BookingScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default BookingScreen;
