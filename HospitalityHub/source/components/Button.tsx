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
import {typography} from '../theme/typography';

const Button: React.FC<ButtonProps> = ({title, onPress, disabled}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          disabled
            ? [Colors.grey, Colors.grey]
            : [Colors.blueGradient1, Colors.blueGradient2, Colors.blueGradient3]
        }
        style={[styles.confirmButton, disabled && styles.disabledButton]}>
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
    marginHorizontal: '2%',
    fontFamily: typography.secondary,
  },
  confirmButton: {
    marginTop: '2%',
    width: '94%',
    height:
      Dimensions.get('screen').height > 700
        ? Dimensions.get('screen').height * 0.06
        : Dimensions.get('screen').height * 0.08,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default Button;
