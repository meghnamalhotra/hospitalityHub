import React, {useEffect} from 'react';

import StackNavigator from './source/navigation/StackNavigator';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <StackNavigator />;
};

export default App;
