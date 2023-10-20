import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfilePage from '../screens/ProfilePage';
import Home from '../screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BookingScreen from '../screens/BookingScreen';
import SavedScreen from '../screens/SavedScreen';

import {Colors} from '../theme/colors';

const Tab = createBottomTabNavigator();

const HomeTabIcon = (focused: boolean) =>
  focused ? (
    <MaterialCommunityIcons
      name="home-circle"
      color={Colors.lighBlue}
      size={30}
    />
  ) : (
    <MaterialCommunityIcons
      name="home-circle-outline"
      color={Colors.dullBlack}
      size={30}
    />
  );
const BookedTabIcon = (focused: boolean) =>
  focused ? (
    <MaterialCommunityIcons
      name="bookmark-multiple"
      color={Colors.lighBlue}
      size={30}
    />
  ) : (
    <MaterialCommunityIcons
      name="bookmark-multiple-outline"
      color={Colors.dullBlack}
      size={30}
    />
  );
const SavedTabIcon = (focused: boolean) =>
  focused ? (
    <MaterialCommunityIcons
      name="heart-circle"
      color={Colors.lighBlue}
      size={30}
    />
  ) : (
    <MaterialCommunityIcons name="heart-circle-outline" size={30} />
  );
const ProfileTabIcon = (focused: boolean) =>
  focused ? (
    <MaterialCommunityIcons
      name="account-circle"
      color={Colors.lighBlue}
      size={30}
    />
  ) : (
    <MaterialCommunityIcons
      name="account-circle-outline"
      color={Colors.dullBlack}
      size={30}
    />
  );

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '400',
          marginBottom: '5%',
        },
        tabBarStyle: {
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderTopWidth: 0,
          height: '8.5%',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarActiveTintColor: Colors.lighBlue,
          tabBarIcon: ({focused}) => HomeTabIcon(focused),
        }}
      />
      <Tab.Screen
        name="Booked"
        component={BookingScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: Colors.lighBlue,
          tabBarIcon: ({focused}) => BookedTabIcon(focused),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: Colors.lighBlue,
          tabBarIcon: ({focused}) => SavedTabIcon(focused),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarActiveTintColor: Colors.lighBlue,
          tabBarIcon: ({focused}) => ProfileTabIcon(focused),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
