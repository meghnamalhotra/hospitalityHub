import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {Colors} from '../theme/colors';
import {typography} from '../theme/typography';
import Separator from './Separator';

interface Props {
  title: string;
  onPress: any;
}
const Header: React.FC<Props> = ({title, onPress}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upper}>
        <TouchableOpacity onPress={onPress}>
          <Icons name="arrowleft" size={35} color={Colors.black} />
        </TouchableOpacity>
        <Text style={styles.uppertext}>{title}</Text>
      </View>
      <Separator width={500} height={1.5} color={'black'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red',
    alignContent: 'center',
    marginLeft: '3%',
  },
  uppertext: {
    fontFamily: typography.primary,
    fontSize: 25,
    fontWeight: '600',
    marginLeft: '5%',
    color: Colors.black,
  },
});
export default Header;
