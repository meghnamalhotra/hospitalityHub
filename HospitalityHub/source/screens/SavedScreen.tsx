import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Modal,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../theme/colors';
import Menu from '../components/menu';
import {RateIcon} from '../assets/svgs';
import Icon from 'react-native-vector-icons/AntDesign';
const SavedScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleRatingClick = (ratingValue: any) => {
    setSelectedRating(ratingValue);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Menu Color={Colors.dullBlack} />
        <Text>SavedScreen</Text>
        <Modal animationType="slide" transparent={true} visible={showModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <RateIcon style={styles.icon} />
              <Text style={styles.txt}>Welcome Back!</Text>
              <Text>Thank you for rating us on Play Store.</Text>
              <View style={styles.star}>
                {[1, 2, 3, 4, 5].map(ratingValue => (
                  <TouchableOpacity
                    key={ratingValue}
                    onPress={() => handleRatingClick(ratingValue)}>
                    <Icon
                      name={ratingValue <= selectedRating ? 'star' : 'staro'}
                      size={30}
                      color={Colors.lighBlue}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.bt}>
                <Button title="Close" onPress={closeModal} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
  },
  icon: {
    marginLeft: '22%',
  },
  txt: {
    marginLeft: '19%',
    marginTop: '5%',
  },
  star: {
    flexDirection: 'row',
    marginLeft: '12%',
    marginTop: '5%',
  },
  bt: {
    marginTop: '4%',
  },
});

export default SavedScreen;
