import React from 'react';
import {View, Text, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import {ProfileIcon} from '../assets/svgs';

const ProfileEdit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredContent}>
        <ProfileIcon style={styles.profileIcon} />
        <Text style={styles.changePictureText}>Change Profile Picture</Text>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F9FF',
  },
  centeredContent: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 80,
    height: 80,
    marginBottom: 10,
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
});

export default ProfileEdit;
