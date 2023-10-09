/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../component/Home';
import Detail from '../component/Detail';
import Api from './API';
import {Form, Ghar, Data} from '../asset';

const Tab = createBottomTabNavigator();

const Tab1 = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ghar width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="Sign_Up"
        component={Detail}
        options={{
          headerShown: false,
          tabBarIcon: () => <Form width={24} height={24} />,
        }}
      />
      <Tab.Screen
        name="API"
        component={Api}
        options={{
          headerShown: false,
          tabBarIcon: () => <Data width={24} height={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default Tab1;