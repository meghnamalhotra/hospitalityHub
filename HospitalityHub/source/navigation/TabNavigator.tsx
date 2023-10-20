import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfilePage from '../screens/ProfilePage';
import Home from '../screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BookingScreen from '../screens/BookingScreen';
import SavedScreen from '../screens/SavedScreen';

const Tab = createBottomTabNavigator();

const HomeTabIcon = () => (
  <MaterialCommunityIcons name="home-circle" size={30} />
);

const BookedTabIcon = () => (
  <MaterialCommunityIcons name="bookmark-multiple" size={30} />
);
const SavedTabIcon = () => (
  <MaterialCommunityIcons name="heart-circle" size={30} />
);

const ProfileTabIcon = () => (
  <MaterialCommunityIcons name="account-circle" size={30} />
);

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Booked"
        component={BookingScreen}
        options={{
          headerShown: false,
          tabBarIcon: BookedTabIcon,
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
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
