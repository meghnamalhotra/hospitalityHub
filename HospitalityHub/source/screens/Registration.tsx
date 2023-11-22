import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DeckSVG, FbSVG, GoogleSVG, IndianFlag} from '../assets/svgs';
import {Separator, Button} from '../components';
import {Colors} from '../theme/colors';
import {typography} from '../theme/typography';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const Registration = () => {
  const mobileRegex = /^[0]?[456789]\d{9}$/;
  const [isNumber, setNumber] = useState<any>(0);
  const [isNumberValid, setNumberValid] = useState<any>([]);
  const navigation = useNavigation<any>();
  const handlePress = () => {
    if (!isNumber) {
      Alert.alert('Enter mobile number to continue');
    } else if (!isNumberValid) {
      Alert.alert('Invalid Mobile No.');
    } else {
      navigation.navigate('Otp');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.main}>
      <SafeAreaView style={styles.main}>
        <ScrollView style={styles.titleText}>
          <DeckSVG
            height={
              Dimensions.get('screen').height > 700
                ? Dimensions.get('screen').height * 0.34
                : Dimensions.get('screen').height * 0.4
            }
            style={styles.svg}
          />
          <Text style={styles.heading}>
            Navigate the World, {'\n'}Book Your Bliss
          </Text>
          <View style={styles.subtext}>
            <Separator
              width={'15%'}
              height={'4%'}
              backgroundColor={Colors.borderGray}
            />
            <Text style={styles.subheading}>Log in or sign up</Text>
            <Separator
              width={'15%'}
              height={'4%'}
              backgroundColor={Colors.borderGray}
            />
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
                placeholderTextColor={Colors.lightgray}
                keyboardType="numeric"
                maxLength={10}
                onChangeText={value => {
                  setNumber(value);
                  setNumberValid(value.match(mobileRegex));
                }}
              />
            </View>
          </View>

          <Button title={'Continue'} onPress={handlePress} />

          <View style={styles.subtext}>
            <Separator
              width={'35%'}
              height={'4%'}
              backgroundColor={Colors.borderGray}
            />
            <Text style={styles.subheading}>or</Text>
            <Separator
              width={'35%'}
              height={'4%'}
              backgroundColor={Colors.borderGray}
            />
          </View>

          <View style={styles.socialContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => {
                GoogleSignin.configure({
                  iosClientId:
                    '893241661192-v0kjcfee3k50kt3caltffjudi34u4mr1.apps.googleusercontent.com',
                });
                GoogleSignin.hasPlayServices()
                  .then(hasPlayService => {
                    if (hasPlayService) {
                      GoogleSignin.signIn()
                        .then(userInfo => {
                          console.log(JSON.stringify(userInfo));
                        })
                        .catch(e => {
                          console.log('ERROR IS: ' + JSON.stringify(e));
                        });
                    }
                  })
                  .catch(e => {
                    console.log('ERROR IS: ' + JSON.stringify(e));
                  });
              }}>
              <GoogleSVG />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FbSVG />
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text
              style={styles.disclaimer1}
              onPress={() => navigation.navigate('TermsScreen')}>
              By Continuing, you agree to our{'\n'}
              <Text style={styles.disclaimer2}>Terms of Service</Text>
              <Text> </Text>
              <Text style={styles.disclaimer2}>Privacy Policy</Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
    fontFamily: typography.primary,
    color: Colors.black,
    marginTop: '4%',
    textAlign: 'center',
    fontSize: 30,
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
    fontFamily: typography.secondary,
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
    color: Colors.black,
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
    color: Colors.black,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: typography.secondary,
  },
  disclaimer2: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
});
export default Registration;
