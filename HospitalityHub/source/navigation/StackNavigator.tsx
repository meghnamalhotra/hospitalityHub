/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Registration from '../screens/Registration';
import TabNavigator from './TabNavigator';
import Otp from '../screens/Otp';
import Faq from '../screens/Faq';
import ProfileEdit from '../screens/ProfileEdit';
import TermsScreen from '../screens/TermsScreen';
import CustomerReview from '../screens/CustomerReview';
import DrawerNavigator from './DrawerNavigator';
import RoomListings from '../screens/RoomListings';
import Location from '../screens/Location';

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
          name="Otp"
          component={Otp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Faq"
          component={Faq}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEdit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermsScreen"
          component={TermsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CustomerReview"
          component={CustomerReview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RoomListings"
          component={RoomListings}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
