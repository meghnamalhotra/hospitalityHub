/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ErrorScreen from '../screens/ErrorScreen';
import {Booked, Heart, Profile, Maison} from '../assets/svgs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={ErrorScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Maison width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Booked"
        component={ErrorScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Heart width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={ErrorScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Booked width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ErrorScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => <Profile width={24} height={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
