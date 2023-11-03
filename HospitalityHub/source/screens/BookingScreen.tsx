import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import {Colors} from '../theme/colors';
import Menu from '../components/menu';
import {Fall} from '../assets/svgs';
import {Button} from '../components';
const BookingScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Menu Color={Colors.dullBlack} />
        <Button title="Cancel Booking " onPress={toggleModal} />
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
  card: {
    marginTop: '35%',
    marginLeft: '5%',
    marginRight: '5%',
    backgroundColor: '#FFF',
    borderRadius: 0,
    elevation: 5,
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

export default BookingScreen;
