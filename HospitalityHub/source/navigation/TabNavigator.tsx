/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ErrorScreen from '../screens/ErrorScreen';
import ProfilePage from '../screens/ProfilePage';
import {Booked} from '../assets/svgs';
import {Heart} from '../assets/svgs';
import {Profile} from '../assets/svgs';
import {Maison} from '../assets/svgs';

const Tab = createBottomTabNavigator();

const HomeTabIcon = () => <Maison width={28} height={28} />;
const BookedTabIcon = () => <Heart width={28} height={28} />;
const SavedTabIcon = () => <Booked width={28} height={28} />;
const ProfileTabIcon = () => <Profile width={28} height={28} />;

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ErrorScreen}
        options={{
          headerShown: false,
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Booked"
        component={ErrorScreen}
        options={{
          headerShown: false,
          tabBarIcon: BookedTabIcon,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={ErrorScreen}
        options={{
          headerShown: false,
          tabBarIcon: SavedTabIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          headerShown: false,
          tabBarIcon: ProfileTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
