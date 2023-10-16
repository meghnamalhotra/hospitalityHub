import React from 'react';
import {Button, StyleSheet, SafeAreaView, View} from 'react-native';

const Detail = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Button
          title="Go to Home Page"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
  },
});

export default Detail;
