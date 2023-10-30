import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ProfileIcon from '../assets/svgs/profile_icon.svg';
import {Colors} from '../theme/colors';
import ProfileEdit from '../screens/ProfileEdit';
import Faq from '../screens/Faq';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <View style={styles.profileContainer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.profileInfo}>
          <ProfileIcon style={styles.icon} />
          <View>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileNumber}>example@email.com</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logout}>
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        component={TabNavigator}
        name="Tabs"
        options={{drawerLabel: 'Home'}}
      />
      <Drawer.Screen component={ProfileEdit} name="Edit Profile" />
      <Drawer.Screen component={Faq} name="Settings" />
      <Drawer.Screen component={Faq} name="Notifications" />
      <Drawer.Screen component={Faq} name="BookingHistory" />
      <Drawer.Screen component={Faq} name="CustomerSupport" />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  profileContainer: {flex: 1},
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: Colors.drawergrey,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  profileName: {
    fontSize: 28,
    fontWeight: '600',
  },
  profileNumber: {
    fontSize: 18,
    color: Colors.drawerblue,
    fontWeight: '500',
  },
  horizontalLine: {
    height: 2,
    backgroundColor: Colors.black,
    marginVertical: 18,
    marginHorizontal: 20,
  },
  icon: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  logout: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 50,
    backgroundColor: '#f6f6f6',
    padding: 20,
  },
});

export default DrawerNavigator;
