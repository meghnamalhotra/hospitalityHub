import React, {useEffect} from 'react';

import StackNavigator from './source/navigation/StackNavigator';
import SplashScreen from 'react-native-splash-screen';
import Booked from './source/screens/MyBooking';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <StackNavigator />;
};

export default App;
