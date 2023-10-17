import React from 'react';
import {
  ButtonProps,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../theme/colors';
import LinearGradient from 'react-native-linear-gradient';

const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[
          Colors.blueGradient1,
          Colors.blueGradient2,
          Colors.blueGradient3,
        ]}
        style={styles.confirmButton}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.white,
    fontWeight: '700',
    letterSpacing: 0.5,
    textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
  },
  confirmButton: {
    marginTop: '2%',
    width: '90%',
    height:
      Dimensions.get('screen').height > 700
        ? Dimensions.get('screen').height * 0.06
        : Dimensions.get('screen').height * 0.08,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
});

export default Button;
