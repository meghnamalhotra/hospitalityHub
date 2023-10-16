import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from '../assets/svgs';

const ErrorScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} />
      <View style={styles.centeredContent}>
        <Text style={styles.text1}>We're sorry.......</Text>
        <Text style={styles.text2}>
          An unexpected error have{'\n'}been occurred
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <LinearGradient
          colors={['#5435FF', '#36C8F6', '#A0FBCD']}
          style={styles.buttonGradient}>
          <Text
            style={styles.buttonText}
            onPress={() => console.log('Navigate to Home')}>
            Go back to home
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 24,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    marginBottom: 16,
    color: 'black',
  },
  text2: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: 'black',
  },
  buttonContainer: {
    marginBottom: 32,
    marginHorizontal: 16,
  },
  buttonGradient: {
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ErrorScreen;
