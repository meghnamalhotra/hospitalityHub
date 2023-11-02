import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import {Colors} from '../theme/colors';
import {Fall} from '../assets/svgs';
const CancelBooking = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.txt}>CANCEL BOOKING</Text>
        </View>
        <View>
          <Fall style={styles.img} />
        </View>
        <View>
          <Text style={styles.txt2}>Do you want to cancel your</Text>
          <Text style={styles.txt3}>booking at Taj Mahal Palace Delhi</Text>
          <Text style={styles.txt4}>from 23 Mar to 25 Mar 2023 </Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity
            style={styles.verifyOtpBtn}
            onPress={() => navigation.navigate('TabNavigator')}>
            <Text>Verify OTP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.verifyOtpBtn2}
            // onPress={() => navigation.navigate('TabNavigator')}
          >
            <Text>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
  },
  img: {
    marginTop: '5%',
    marginLeft: '32%',
  },
  card: {
    marginTop: '35%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    elevation: 5,
  },
  txt: {
    marginTop: '7%',
    marginLeft: '25%',
    fontSize: 20,
  },
  txt2: {
    marginTop: '10%',
    marginLeft: '21%',
    fontSize: 17,
    fontWeight: '500',
  },
  txt3: {
    marginLeft: '15%',
    fontSize: 17,
    fontWeight: '500',
  },
  txt4: {
    marginLeft: '19%',
    fontSize: 17,
    fontWeight: '500',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verifyOtpBtn: {
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lighBlue,
    height: '34%',
    width: '40%',
    alignItems: 'center',
    marginTop: '20%',
    marginLeft: '4%',
  },
  verifyOtpBtn2: {
    borderRadius: 20,
    backgroundColor: Colors.lightgray,
    alignSelf: 'center',
    justifyContent: 'center',
    height: '34%',
    width: '40%',
    alignItems: 'center',
    marginTop: '20%',
    marginRight: '4%',
  },
});
export default CancelBooking;
