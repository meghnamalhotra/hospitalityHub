import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {BackArrow} from '../assets/svgs';
import CheckBox from '@react-native-community/checkbox';
import {Separator} from '../components';
import {Button} from '../components';
import {BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BookingPage2 = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'YES',
          onPress: () => navigation.goBack(),
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackArrow />
            </TouchableOpacity>
            <Text style={styles.textHeader}> Choose Room</Text>
          </View>
          <Separator
            width={490}
            height={1.5}
            backgroundColor={'#275665'}
            marginTop={15}
          />
          <Text style={styles.textHeader1}>Your details</Text>
          <View style={styles.inputBox}>
            <Text>+91</Text>
            <TextInput
              placeholder="Phone Number"
              style={styles.inputText}
              maxLength={10}
            />
          </View>
          <View style={styles.header1}>
            <Text style={styles.textHeader2}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.textHeader3}>Log in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputBox}>
            <TextInput placeholder="Email" style={styles.inputText} />
          </View>
          <Text style={styles.text1}>
            we’ll email you booking confirmation and{'\n'}reciepts
          </Text>
          <View style={styles.inputBox1}>
            <TextInput placeholder="First name" style={styles.inputText} />
          </View>
          <View style={styles.inputBox1}>
            <TextInput placeholder="Last name" style={styles.inputText} />
          </View>
          <Text style={styles.text2}>Use the name on your goverment ID</Text>
          <View style={styles.inputBox1}>
            <TextInput placeholder="Date of Birth" style={styles.inputText} />
          </View>
          <Text style={styles.text2}>
            To sign up you need to be atleast 18 year old
          </Text>
          <View>
            <Text style={styles.text3}>
              we’ll send you marketing emails, including deals and trip{'\n'}
              ideas. Opt out now or anytime from our emails or your{'\n'}
              account’s notification settings.
            </Text>
            <View style={styles.checkboxContainer}>
              <CheckBox style={styles.checkbox} />
              <Text style={styles.text4}>
                I don’t want to receive marketing emails
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.amountContainer}>
            <Text style={styles.text5}>₹ 3,493</Text>
            <Text style={styles.text6}>+ ₹ 594 taxes and fee</Text>
          </View>
          <View style={styles.button}>
            <Button title="Next Step" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F9FF',
  },
  header: {
    flexDirection: 'row',
  },
  header1: {
    marginVertical: '2%',
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '600',
  },
  textHeader1: {
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 10,
    marginVertical: 10,
  },
  inputText: {
    height: '100%',
    paddingHorizontal: 10,
    width: '90%',
    fontSize: 16,
    fontWeight: '600',
  },
  inputBox: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    width: '90%',
    height:
      Dimensions.get('screen').height > 700
        ? Dimensions.get('screen').height * 0.07
        : Dimensions.get('screen').height * 0.09,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderColor: '#8C8C8C',
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  inputBox1: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    marginVertical: '1.8%',
    width: '90%',
    height:
      Dimensions.get('screen').height > 700
        ? Dimensions.get('screen').height * 0.07
        : Dimensions.get('screen').height * 0.09,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderColor: '#8C8C8C',
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 5,
  },
  textHeader2: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
    marginTop: '2%',
    marginLeft: '6%',
  },
  textHeader3: {
    color: '#009BFF',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginTop: '-5.4%',
    marginLeft: '80%',
  },
  text1: {
    color: '#585858',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: '6%',
    marginTop: '2%',
  },
  text2: {
    color: '#585858',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: '6%',
    letterSpacing: 0.2,
  },
  text3: {
    color: '#5E5E5E',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: '6%',
    letterSpacing: 0.2,
    marginTop: '2%',
  },
  text4: {
    color: '#5E5E5E',
    fontSize: 18,
    fontWeight: '500',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '6%',
    marginTop: '3%',
    marginBottom: '3%',
  },
  checkbox: {
    width: 22,
    height: 22,
    marginRight: '2%',
  },
  text5: {
    color: '#1E91B6',
    fontSize: 30,
    fontWeight: '800',
    marginTop: '8%',
    marginLeft: '5%',
  },
  text6: {
    color: '#5E5E5E',
    fontSize: 12,
    fontWeight: '500',
    marginLeft: '4%',
    letterSpacing: 0.4,
    marginTop: '1%',
  },
  footer: {
    flexDirection: 'row',
  },
  amountContainer: {
    flex: 1,
    marginLeft: '5%',
  },
  button: {
    marginTop: '5%',
    paddingHorizontal: '6%',
  },
});

export default BookingPage2;
