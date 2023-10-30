import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

interface MenuProps {
  Color: string;
}

const Menu: React.FC<MenuProps> = ({Color}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.openDrawer();
        }}>
        <Icons name="menu" size={35} color={Color} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  button: {
    paddingTop: 5,
    paddingLeft: 5,
  },
});

export default Menu;
