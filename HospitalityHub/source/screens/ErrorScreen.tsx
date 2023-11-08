import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Modal} from 'react-native';
import {Image} from '../assets/svgs';
import {Colors} from '../theme/colors';
import {Button} from '../components';

const ErrorScreen = () => {
  useEffect(() => {
    setShowModal(true);
  }, []);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image style={styles.image} />
            <View style={styles.centeredContent}>
              <Text style={styles.text1}>We're sorry.......</Text>
              <Text style={styles.text2}>
                An unexpected error have{'\n'}been occurred
              </Text>
            </View>
            <View style={styles.btn}>
              <Button title="Go To Home" onPress={closeModal} />
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
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
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
    color: Colors.black,
  },
  text2: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: Colors.black,
  },
  buttonContainer: {
    marginBottom: 32,
    marginLeft: 16,
  },
  buttonGradient: {
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  btn: {
    marginLeft: '10%',
    marginRight: '10%',
  },
});

export default ErrorScreen;
