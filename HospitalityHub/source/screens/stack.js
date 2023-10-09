/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../component/Home';
import Detail from '../component/Detail';
import Api from './API';
import Tab1 from './Tab1';
const Stack = createNativeStackNavigator();

function Stack1() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main Screen"
        component={Tab1}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Details"
        component={Detail}
        options={{headerShown: true}}
      />
      <Stack.Screen name="API" component={Api} options={{headerShown: true}} />
    </Stack.Navigator>
  );
}

export default Stack1;