import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';
import Menu from '../components/menu';

const BookingScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Menu Color={Colors.dullBlack} />
        <Text>BookingScreen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
});
export default BookingScreen;
