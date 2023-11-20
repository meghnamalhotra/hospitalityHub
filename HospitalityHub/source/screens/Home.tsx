import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import {
  Car,
  HalfStar,
  HotelImgae,
  Location,
  Star,
  Swimming,
  Wifi,
} from '../assets/svgs';
import {Colors} from '../theme/colors';
import {Button, Separator} from '../components';
import {BackHandler} from 'react-native';
import Menu from '../components/menu';
import Calendar from './CalendarPicker';
const Home = () => {
  const [redMore, setRedMore] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation<any>();
  const handlePress = () => {
    navigation.navigate('RoomListings');
  };
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit the app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'default',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const DATA = [
    {
      id: 1,
      image: <Swimming />,
    },
    {
      id: 2,
      image: <Car />,
    },
    {
      id: 3,
      image: <Wifi />,
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <Menu Color={Colors.white} />
        {/* <View> */}
        <HotelImgae height={'500'} style={styles.hotelsvg} />
        {/* </View> */}
        <Text style={styles.headerTxt}>Lemon Tree Premier Pune</Text>
        <View style={styles.locationTxt}>
          <Location />
          <Text style={{color: Colors.black}}>
            City Center, 15 & 15A, Connaught Rd, Modi Colony, Pune, Maharashtra
            411001
          </Text>
        </View>
        <Text style={styles.containerTxt}>What this Place Offers</Text>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.svgcontainer}>
              <View style={styles.svgs}>{item.image}</View>
            </View>
          )}
        />
        <Text style={styles.middleDetail}>About the Hotel</Text>
        <Text style={styles.aboutUs}>
          Lemon Tree Premier, City Center Pune is a great choice for travellers
          looking for a 5 star hotel in Pune. It is located in Near Pune Train
          Station.This Hotel stands out as one of the highly recommended hotel
          in Pune and is recommended by 86% of our guests. Hotel is rated 4.1
          out of 5, which is considered as very good. The property enjoys a
          great location advantage and provides easy and
          {redMore && (
            <Text>
              fast connectivity to the major transit points of the city. Some of
              the popular transit points from Lemon Tree Premier, City Center
              Pune are Pune Railway Station (520 mtrs), Pune Station Bus Stand
              (1.7 kms) and Pune International Airport (7.8 kms). The Hotel is
              in proximity to some popular tourist attractions and other places
              of interest in Pune. Some of the tourist attractions near Lemon
              Tree Premier, City Center Pune Nucleus Mall (970 mtrs), Shaniwar
              Wada (2.9 kms), Pataleshwar Caves (3.5 kms) and FC Road (4.8
              kms).From all the 4 Star hotels in Pune, Lemon Tree Premier, City
              Center Pune is very much popular among the tourists. A smooth
              check-in/check-out process, flexible policies and friendly
              management garner great customer satisfaction for this property.
              The Hotel has standard Check-In time as 02:00 PM and Check-Out
              time as 12:00 PM.
            </Text>
          )}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setRedMore(!redMore);
          }}>
          <Text style={styles.redMore}>
            {redMore === false ? 'Read More' : 'Hide'}
          </Text>
        </TouchableOpacity>
        <View style={styles.ratingRev}>
          <Text style={styles.ratingRevCont}>Rating & Reviews</Text>
          <Text style={styles.ratingNum}>4.5</Text>
        </View>
        <View style={styles.startSvg}>
          <View style={styles.ratingContainer}>
            <Star />
            <Star />
            <Star />
            <Star />
            <HalfStar />
          </View>
          <Text style={styles.ratingText}>234 Ratings</Text>
        </View>
        <View style={styles.seperater}>
          <Separator height={1} width={'100%'} backgroundColor={'#CFCFCF'} />
        </View>
        <View style={styles.separatorAlign}>
          <View style={styles.middleSeperater}>
            <Text style={styles.fontTxt}>Cleanliness</Text>
            <Text style={styles.fontTxt}>10</Text>
          </View>
        </View>
        <View style={styles.seperater}>
          <Separator height={4} width={'100%'} backgroundColor={'#1E91B6'} />
        </View>
        <View style={styles.ratingCnt}>
          <Text style={styles.fontTxt}>Comfort</Text>
          <Text style={styles.fontTxt}>10</Text>
        </View>
        <View style={styles.seperater}>
          <Separator height={4} width={'100%'} backgroundColor={'#1E91B6'} />
        </View>
        <View style={styles.ratingCnt}>
          <Text style={styles.fontTxt}>Facilities</Text>
          <Text style={styles.fontTxt}>10</Text>
        </View>
        <View style={styles.seperater}>
          <Separator height={4} width={'100%'} backgroundColor={'#1E91B6'} />
        </View>
        <View style={styles.bottomSeperater}>
          <Separator height={1} width={'100%'} backgroundColor={'#CFCFCF'} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CustomerReview');
          }}>
          <Text style={styles.custumRating}>View Customer Reviews</Text>
        </TouchableOpacity>
        <Button title="Book Now" onPress={toggleModal} />
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}>
          <View style={styles.modalContainer}>
            <Calendar />
            <View style={styles.buttonContainer}>
              <Button title="Back" onPress={toggleModal} />
              <Button
                title="Next"
                onPress={() => {
                  toggleModal();
                  handlePress();
                }}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: Colors.black,
  },
  locationTxt: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginBottom: 15,
    justifyContent: 'space-around',
  },
  containerTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: Colors.black,
  },
  hotelsvg: {
    alignSelf: 'center',
  },
  svgcontainer: {
    flexDirection: 'row',
    padding: 22,
    justifyContent: 'space-between',
  },
  svgs: {
    padding: 30,
    borderRadius: 10,
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
  separatorAlign: {
    margin: 10,
  },
  middleDetail: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: Colors.black,
  },
  aboutUs: {
    marginHorizontal: 10,
    color: Colors.black,
  },
  redMore: {
    margin: 10,
    color: Colors.lighBlue,
    fontWeight: 'bold',
  },
  ratingRev: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ratingRevCont: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 12,
    color: Colors.black,
  },
  ratingNum: {
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 40,
    marginTop: 15,
    color: Colors.lighBlue,
  },
  ratingText: {
    marginRight: 20,
    color: Colors.lighBlue,
  },
  startSvg: {
    flexDirection: 'row',
    marginLeft: 17,
    justifyContent: 'space-between',
  },
  fontTxt: {
    fontWeight: 'bold',
    color: Colors.black,
  },
  ratingCnt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  seperater: {
    marginHorizontal: 20,
    marginTop: 7,
  },
  custumRating: {
    textAlign: 'center',
    color: Colors.lighBlue,
    marginVertical: 30,
    textDecorationLine: 'underline',
  },
  middleSeperater: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomSeperater: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 40,
  },
});

export default Home;
