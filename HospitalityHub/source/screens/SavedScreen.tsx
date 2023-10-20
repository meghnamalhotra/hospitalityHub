import {View, Text} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';

const SavedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SavedScreen</Text>
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

export default SavedScreen;
