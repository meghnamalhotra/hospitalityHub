/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import {NavigationContainer} from '@react-navigation/native';
import Registration from '../screens/registration';
import TabNavigator from './TabNavigator';
import Otp from '../screens/Otp';
import ProfileEdit from '../screens/ProfileEdit';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign Up"
          component={Registration}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tab Navigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={ProfileEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
