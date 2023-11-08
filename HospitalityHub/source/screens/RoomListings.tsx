import React from 'react';
import {Rooms} from '../constants/Rooms';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Wifi, Frame, Bathroom, Cup, Ac} from '../assets/svgs';
import Header from '../components/Header';

const RoomListings = () => {
  const renderItem = ({item}) => {
    return (
      <>
        <View style={styles.bookingContainer}>
          <View style={styles.card}>
            <View style={styles.textContainer}>
              <Text style={styles.heading}>{item.roomName}</Text>
              <Text>Non-Refundable</Text>
              <Text>-Price for 1 Adult</Text>
              <Text>-Bed Size: {item.bedSize}</Text>
              <Text>-Room size: {item.roomSize}</Text>
              <View style={styles.detailsContainer}>
                {item.breakfast && (
                  <Text style={styles.detailsText}>
                    <Cup /> Breakfast included in the price
                  </Text>
                )}
                {item.privateBathroom && (
                  <Text style={styles.detailsText}>
                    <Bathroom /> Private Bathroom
                  </Text>
                )}
                {item.freeWifi && (
                  <Text style={styles.detailsText}>
                    <Wifi /> Free WiFi
                  </Text>
                )}
                {item.ac && (
                  <Text style={styles.detailsText}>
                    <Ac /> Air Conditioning
                  </Text>
                )}
              </View>
              <Text>Price for 1 night ({item.date})</Text>
              <Text style={styles.detailsText1}>₹ {item.price}</Text>
              <Text>
                + ₹ {(item.price * item.tax).toFixed(2)} taxes and fee
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Frame style={styles.image} />
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.select}>Select</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView>
      <Header title={'Choose Room'} />
      <FlatList
        data={Rooms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
    paddingVertical: 20,
    paddingLeft: 15,
    paddingRight: 10,
  },
  bookingContainer: {
    flex: 1,
    backgroundColor: '#FFF',
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
  textContainer: {
    flex: 2,
    marginRight: 10,
  },
  detailsContainer: {
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-end',
    backgroundColor: 'red,',
  },
  image: {
    width: 80,
    height: 100,
    marginTop: '50%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsText: {
    marginBottom: 5,
    color: '#24A966',
    fontWeight: 'bold',
  },
  detailsText1: {
    color: '#1E91B6',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    height: '12%',
    width: '90%',
    marginBottom: '10%',
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#1E91B6',
  },
  select: {
    alignSelf: 'center',
    fontSize: 22,
    color: '#1E91B6',
  },
});

export default RoomListings;
