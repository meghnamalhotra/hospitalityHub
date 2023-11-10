import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import bookingData from '../constants/Bookings';
import {Colors} from '../theme/colors';
import {typography} from '../theme/typography';
import {Separator} from '../components';
import {Fall, Line} from '../assets/svgs';
import Menu from '../components/menu';

const Booked = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.bookingContainer}>
          <View style={styles.card}>
            <View style={styles.left}>
              <Text style={styles.date}>{item.month}</Text>
              <Text style={styles.date}>{item.checkinDate}</Text>
              <Text style={styles.date}>{item.day}</Text>
            </View>
            <View style={styles.line}>
              <Line />
            </View>
            <View style={styles.right}>
              <Text style={[styles.days]}>
                {item.numberOfNights} Night - {item.numberOfGuests} Guest
              </Text>
              <Text style={styles.hotelname}>{item.name}</Text>
              <View style={styles.id}>
                <View>
                  <Text style={styles.idupper}>Booking ID</Text>
                  <Text style={styles.idlower}>{item.bookingId}</Text>
                </View>
                <View>
                  <Text style={styles.idupper}>Date of checkout</Text>
                  <Text style={styles.idlower}>{item.checkoutDate}</Text>
                </View>
              </View>
            </View>
          </View>
          <Separator width={'100%'} height={1} backgroundColor={'black'} />

          <View style={styles.lower}>
            <TouchableOpacity style={styles.button1} onPress={toggleModal}>
              <Text style={styles.select1}>CANCEL BOOKING</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.select2}>HOTEL LOCATION</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper}>
        <Menu Color={Colors.dullBlack} />
        <Text style={styles.uppertext}>My Bookings</Text>
      </View>
      <Separator width={500} height={1.5} backgroundColor={'black'} />
      <FlatList
        data={bookingData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.txt}>CANCEL BOOKING</Text>
            <View>
              <Fall style={styles.img} />
            </View>
            <View>
              <Text style={styles.txt2}>Do you want to cancel your</Text>
              <Text style={styles.txt3}>booking at M Mahal Palace Delhi</Text>
              <Text style={styles.txt4}>from 23 Mar to 25 Mar 2023 </Text>
            </View>
            <View style={styles.btn2}>
              <TouchableOpacity
                style={styles.verifyOtpBtn}
                onPress={toggleModal}>
                <Text>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.verifyOtpBtn2}
                onPress={toggleModal}>
                <Text>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '3%',
    margin: 16,
  },
  uppertext: {
    fontFamily: typography.primary,
    fontSize: 27,
    fontWeight: '600',
    marginLeft: '15%',
    color: Colors.black,
    paddingTop: 7,
  },
  bookingContainer: {
    backgroundColor: Colors.white,
    marginBottom: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    activeOpacity: 0.7,
    borderRadius: 13,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 10,
  },
  date: {
    fontFamily: typography.primary,
    fontSize: 19,
    fontWeight: 'bold',
    color: Colors.lighBlue,
  },
  left: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  line: {
    marginLeft: '4%',
  },
  right: {
    flex: 1,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  id: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: '5%',
  },
  idupper: {
    fontFamily: typography.primary,
    fontSize: 11,
    fontWeight: '500',
  },

  idlower: {
    fontFamily: typography.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  days: {
    fontFamily: typography.primary,
    fontSize: 16,
    fontWeight: '700',
    color: Colors.lighBlue,
  },
  hotelname: {
    fontFamily: typography.primary,
    fontSize: 22,
    fontWeight: '700',
    color: Colors.black,
    marginTop: '1%',
  },
  lower: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginVertical: '4%',
  },
  button1: {
    height: 50,
    width: '49%',
    borderRadius: 25,
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: Colors.black,
  },
  button2: {
    height: 50,
    width: '49%',
    borderRadius: 25,
    justifyContent: 'center',
    backgroundColor: Colors.lighBlue,
  },
  select1: {
    alignSelf: 'center',
    fontFamily: typography.primary,
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    paddingHorizontal: 8,
  },
  select2: {
    alignSelf: 'center',
    fontFamily: typography.primary,
    fontSize: 17,
    fontWeight: '600',
    color: Colors.white,
    paddingHorizontal: 10,
  },

  bt1: {
    marginTop: '0%',
  },
  bt: {
    marginTop: '38%',
    marginHorizontal: '5%',
    marginBottom: '3%',
    paddingVertical: '3%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lighBlue,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    activeOpacity: 0.7,
  },
  btn: {
    color: Colors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  img: {
    marginTop: '5%',
    marginLeft: '30%',
  },
  txt: {
    marginTop: '7%',
    marginLeft: '20%',
    fontSize: 20,
  },
  txt2: {
    marginTop: '10%',
    marginLeft: '17%',
    fontSize: 17,
    fontWeight: '500',
  },
  txt3: {
    marginLeft: '10%',
    fontSize: 17,
    fontWeight: '500',
  },
  txt4: {
    marginLeft: '16%',
    fontSize: 17,
    fontWeight: '500',
  },
  btn2: {
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
export default Booked;
