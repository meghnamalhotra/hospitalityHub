import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ImageBackground,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Colors} from '../theme/colors';

const ProfileEdit = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('https://api.multiavatar.com/Binx.svg');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
    });
  };

  const renderItem = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.panelTitle}>Upload Photo</Text>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={takePhotoFromCamera}>
            <Text style={styles.panelButtonTitle}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.panelButton}
            onPress={choosePhotoFromLibrary}>
            <Text style={styles.panelButtonTitle}>Choose From Library</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.panelButton} onPress={toggleModal}>
            <Text style={styles.panelButtonTitle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContent}>
        <ImageBackground style={styles.profileIcon} source={{uri: image}} />
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.changePictureText}>Change Profile Picture</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          placeholderTextColor="#6E6E6E"
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#6E6E6E"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#6E6E6E"
        />
        <TextInput
          style={styles.input}
          placeholder="Create Password"
          placeholderTextColor="#6E6E6E"
        />
      </View>
      <View style={styles.changePasswordContainer}>
        <Text style={styles.changePasswordText}>Change Password?</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.logoutText}>
          Not You ? <Text style={styles.blackText}>Log Out</Text>
        </Text>
      </View>
      {renderItem()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Colors.backgroundColor,
  },
  centeredContent: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 100,
    overflow: 'hidden',
  },
  changePictureText: {
    marginTop: 8,
    color: '#1E91B6',
    fontWeight: '600',
    fontSize: 18,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '40%',
    margin: 20,
  },
  input: {
    height: 70,
    borderColor: '#616161',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: Colors.backgroundColor,
  },
  changePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '25%',
  },
  changePasswordText: {
    color: '#1E91B6',
    marginTop: '3%',
    marginRight: '6%',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    flex: 1,
    marginTop: '14%',
  },
  blackText: {
    color: '#1E91B6',
  },
  panel: {
    flex: 1,
  },
  panelTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1E91B6',
    textAlign: 'center',
  },
  panelButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#e6395c',
    alignItems: 'center',
    marginVertical: 5,
  },
  panelButtonTitle: {
    fontSize: 16,
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#f5f0f1',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
});

export default ProfileEdit;
