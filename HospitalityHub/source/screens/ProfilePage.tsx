import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../theme/colors';
import {Navigate, ProfileIcon} from '../assets/svgs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfilePage = () => {
  const navigation = useNavigation<any>();

  const handlePress = (menuItem: string) => {
    if (menuItem === 'Profile') {
      navigation.navigate('ProfileEdit');
    } else {
      navigation.navigate('Faq');
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.profileContainer}>
        <ProfileIcon />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Sam Semwal</Text>
          <Text style={styles.profileNumber}>+91 9138139660</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      <View>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handlePress('Profile')}>
          <MaterialCommunityIcons name="account" size={18} />
          <View style={styles.menuText}>
            <Text style={styles.menuItemText}>Profile</Text>
            <Navigate />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handlePress('Settings')}>
          <MaterialCommunityIcons name="cog" size={18} />
          <View style={styles.menuText}>
            <Text style={styles.menuItemText}>Settings</Text>
            <Navigate />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handlePress('Notifications')}>
          <MaterialCommunityIcons name="bell" size={18} />
          <View style={styles.menuText}>
            <Text style={styles.menuItemText}>Notifications</Text>
            <Navigate />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handlePress('BookingHistory')}>
          <MaterialCommunityIcons name="history" size={18} />
          <View style={styles.menuText}>
            <Text style={styles.menuItemText}>Booking History</Text>
            <Navigate />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => handlePress('CustomerSupport')}>
          <MaterialCommunityIcons name="headset" size={18} />
          <View style={styles.menuText}>
            <Text style={styles.menuItemText}>Customer Support</Text>
            <Navigate />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.backgroundColor,
  },
  profileInfo: {
    marginLeft: 16,
  },
  profileName: {
    fontSize: 30,
    fontWeight: '600',
  },
  profileNumber: {
    fontSize: 18,
    color: '#0A76BF',
    fontWeight: '600',
  },
  horizontalLine: {
    height: 2,
    backgroundColor: 'black',
    marginVertical: 18,
    marginHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 16,
    flex: 1,
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default ProfilePage;
