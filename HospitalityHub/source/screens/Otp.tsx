/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../theme/colors';
const Otp = () => {
  const navigation = useNavigation<any>();
  const et1 = useRef<any>();
  const et2 = useRef<any>();
  const et3 = useRef<any>();
  const et4 = useRef<any>();
  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [count, setCount] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
  }, [count]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>
      <View style={styles.otpView}>
        <TextInput
          ref={et1}
          style={[
            styles.inputView,
            {borderColor: f1.length >= 1 ? Colors.blue : Colors.black},
          ]}
          value={f1}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={txt => {
            setF1(txt);
            if (txt.length >= 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et2}
          style={[
            styles.inputView,
            {borderColor: f2.length >= 1 ? Colors.blue : Colors.black},
          ]}
          keyboardType="number-pad"
          value={f2}
          maxLength={1}
          onChangeText={txt => {
            setF2(txt);
            if (txt.length >= 1) {
              et3.current.focus();
            } else if (txt.length < 1) {
              et1.current.focus();
            }
          }}
        />
        <TextInput
          ref={et3}
          style={[
            styles.inputView,
            {borderColor: f3.length >= 1 ? Colors.blue : Colors.black},
          ]}
          value={f3}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={txt => {
            setF3(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et4}
          style={[
            styles.inputView,
            {borderColor: f4.length >= 1 ? Colors.blue : Colors.black},
          ]}
          value={f4}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={txt => {
            setF4(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et3.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.resendView}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: count === 0 ? Colors.blue : Colors.grey,
          }}>
          Resend
        </Text>
      </View>
      <TouchableOpacity
        disabled={
          f1 !== '' && f2 !== '' && f3 !== '' && f4 !== '' ? false : true
        }
        style={[
          styles.verifyOtpBtn,
          {
            backgroundColor:
              f1 !== '' && f2 !== '' && f3 !== '' && f4 !== ''
                ? Colors.blue
                : Colors.grey,
          },
        ]}
        onPress={() => navigation.navigate('Tab Navigator')}>
        <Text style={styles.btnTxt}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 100,
    alignSelf: 'center',
    color: Colors.black,
  },
  otpView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 100,
  },
  inputView: {
    width: 50,
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  verifyOtpBtn: {
    width: '50%',
    height: 55,
    backgroundColor: Colors.blue,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  btnTxt: {
    color: Colors.white,
    fontSize: 20,
  },
  resendView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
  },
});

export default Otp;
