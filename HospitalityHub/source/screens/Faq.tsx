import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {PeopleGroup, SupportImg} from '../assets/svgs';
import {Colors} from '../theme/colors';
import {Separator} from '../components';
import Show from '../constants/Show';

const Faq = () => {
  const navigation = useNavigation<any>();
  const handlePress = () => {
    navigation.navigate('Location');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.topContainer}>
          <View style={styles.SvgCnt}>
            <SupportImg />
          </View>
          <Text style={styles.navTxt}>
            We are here to help you so please get in touch with us.
          </Text>
        </View>
        <View>
          <Text style={[styles.navTxt, {fontSize: 24}]}>
            Frequently asked questions
          </Text>
          <Show
            message1={'Is there a free trial available?'}
            message2={
              'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
            }
          />
          <View style={styles.SeparatorGap}>
            <Separator height={1} width={'100%'} backgroundColor={''} />
          </View>
          <Show
            message1={'What is your cancellation policy?'}
            message2={
              'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
            }
          />
          <View style={styles.SeparatorGap}>
            <Separator height={1} width={'100%'} backgroundColor={''} />
          </View>
          <Show
            message1={'Can other info be added to an invoice?'}
            message2={
              'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
            }
          />
          <View style={styles.SeparatorGap}>
            <Separator height={1} width={'100%'} backgroundColor={''} />
          </View>
          <Show
            message1={'How does billing work?'}
            message2={
              'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
            }
          />
          <View style={styles.SeparatorGap}>
            <Separator height={1} width={'100%'} backgroundColor={''} />
          </View>
          <Show
            message1={'How do I change my account email?'}
            message2={
              'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
            }
          />
          <View style={styles.SeparatorGap}>
            <Separator height={1} width={'100%'} backgroundColor={''} />
          </View>
        </View>
        <View style={styles.BottomContainer}>
          <View style={styles.SvgCnt}>
            <PeopleGroup />
          </View>
          <Text style={styles.navTxt}>Still have questions?</Text>
          <Text style={styles.BottomTxt}>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </Text>
          <View style={styles.buttn}>
            <TouchableOpacity onPress={handlePress}>
              <Text style={{textAlign: 'center', color: Colors.white}}>
                Get in Touch
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  SvgCnt: {
    alignItems: 'center',
    margin: 30,
  },
  navTxt: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 30,
    fontWeight: 'bold',
  },
  topContainer: {
    backgroundColor: Colors.backgroundColor,
    paddingBottom: 30,
  },
  SeparatorGap: {
    marginTop: 33,
    marginHorizontal: 10,
  },
  BottomContainer: {
    backgroundColor: Colors.lightgray,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  BottomTxt: {
    marginHorizontal: 30,
    marginVertical: 20,
    color: Colors.grey,
  },
  buttn: {
    backgroundColor: '#7F56D9',
    padding: 10,
    margin: 30,
    marginHorizontal: 50,
    borderRadius: 8,
  },
});
export default Faq;
