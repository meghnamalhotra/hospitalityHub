import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {DeckSVG, FbSVG, GoogleSVG, IndianFlag} from '../assets/svgs';
import Separator from '../components/separator';
import {Colors} from '../theme/colors';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const Registration = () => {
  const navigation = useNavigation<any>();
  const handlePress = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.main}>
      <DeckSVG height={'42%'} style={styles.svg} />
      <ScrollView style={styles.titleText}>
        <Text style={styles.heading}>
          Navigate the World, {'\n'}Book Your Bliss
        </Text>
        <View style={styles.subtext}>
          <Separator width={'15%'} height={'4%'} color={Colors.borderGray} />
          <Text style={styles.subheading}>Log in or sign up</Text>
          <Separator width={'15%'} height={'4%'} color={Colors.borderGray} />
        </View>
        <View style={styles.inputBoxContainer}>
          <View style={styles.flagContainer}>
            <IndianFlag />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.phoneCode}>+91</Text>
            <TextInput
              placeholder="Enter Mobile Number"
              style={styles.inputText}
            />
          </View>
        </View>

        <Button title={'Continue'} onPress={handlePress} />

        <View style={styles.subtext}>
          <Separator width={'35%'} height={'4%'} color={Colors.borderGray} />
          <Text style={styles.subheading}>or</Text>
          <Separator width={'35%'} height={'4%'} color={Colors.borderGray} />
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <GoogleSVG />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FbSVG />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.disclaimer1}>
            By Continuing, you agree to our{'\n'}
            <Text style={styles.disclaimer2}>Terms of Service</Text>
            <Text> </Text>
            <Text style={styles.disclaimer2}>Privacy Policy</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  svg: {
    alignSelf: 'center',
  },
  titleText: {
    flex: 1,
  },
  heading: {
    marginTop: '4%',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
  },
  subtext: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: '2%',
  },
  subheading: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    color: Colors.subHeadingBlack,
    marginVertical: '2%',
  },
  inputBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '2%',
  },
  flagContainer: {
    height:
      Dimensions.get('screen').height > 700
        ? Dimensions.get('screen').height * 0.06
        : Dimensions.get('screen').height * 0.08,
    width: '16%',
    marginRight: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: Colors.borderGray,
    borderWidth: 0.5,
    padding: 5,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,

    elevation: 5,
  },
  inputBox: {
    flexDirection: 'row',
    width: '70%',
    height: '100%',
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderColor: Colors.borderGray,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,

    elevation: 5,
  },
  inputText: {
    height: '100%',
    paddingHorizontal: 10,
    width: '90%',
    fontSize: 16,
    fontWeight: '600',
  },
  phoneCode: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonText: {
    color: Colors.white,
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
  },
  confirmButton: {
    marginTop: '2%',
    width: '90%',
    height:
      Dimensions.get('screen').height > 700
        ? Dimensions.get('screen').height * 0.06
        : Dimensions.get('screen').height * 0.08,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialButton: {
    height:
      Dimensions.get('screen').height > 700
        ? Dimensions.get('screen').height * 0.07
        : Dimensions.get('screen').height * 0.09,
    width: '42%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: Colors.borderGray,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  footer: {
    marginTop: '10%',
    alignItems: 'center',
  },
  disclaimer1: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
  disclaimer2: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
});
export default Registration;
