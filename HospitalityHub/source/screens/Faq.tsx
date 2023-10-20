import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {MinusCircle, PeopleGroup, PlusCircle, SupportImg} from '../assets/svgs';
import {Colors} from '../theme/colors';
import {Separator} from '../components';

const Faq = () => {
  const navigation = useNavigation<any>();
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
          <View style={styles.midContainerHeading}>
            <Text style={styles.containerTxt}>
              Is there a free trial available?
            </Text>
            <TouchableOpacity>
              <MinusCircle />
            </TouchableOpacity>
          </View>
          <Text style={{marginLeft: 10, marginRight: 33}}>
            Yes, you can try us for free for 30 days. If you want, we’ll provide
            you with a free, personalized 30-minute onboarding call to get you
            up and running as soon as possible.
          </Text>
          <View style={styles.SeparatorGap}>
            <Separator height={1} width={'100%'} color={'#CFCFCF'} />
          </View>
          <View style={styles.midContainerHeading}>
            <Text style={styles.containerTxt}>
              What is your cancellation policy?
            </Text>
            <TouchableOpacity>
              <PlusCircle />
            </TouchableOpacity>
          </View>
          <View style={styles.SeparatorGap}>
            <Separator height={1} width={'100%'} color={'#CFCFCF'} />
          </View>
          <View style={styles.midContainerHeading}>
            <Text style={styles.containerTxt}>
              Can other info be added to an invoice?
            </Text>
            <TouchableOpacity>
              <PlusCircle />
            </TouchableOpacity>
          </View>
          <View style={styles.SeparatorGap}>
            <Separator height={1} width={'100%'} color={'#CFCFCF'} />
          </View>
          <View style={styles.midContainerHeading}>
            <Text style={styles.containerTxt}>How does billing work?</Text>
            <TouchableOpacity>
              <PlusCircle />
            </TouchableOpacity>
          </View>
          <View style={styles.SeparatorGap}>
            <Separator height={1} width={'100%'} color={'#CFCFCF'} />
          </View>
          <View style={styles.midContainerHeading}>
            <Text style={styles.containerTxt}>
              How do I change my account email?
            </Text>
            <TouchableOpacity>
              <PlusCircle />
            </TouchableOpacity>
          </View>
          <View style={styles.SeparatorGap}>
            <Separator height={1} width={'100%'} color={'#CFCFCF'} />
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
          <View
            style={{
              backgroundColor: '#7F56D9',
              padding: 10,
              margin: 30,
              marginHorizontal: 50,
              borderRadius: 8,
            }}>
            <TouchableOpacity>
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
    backgroundColor: Colors.lightgray,
    paddingBottom: 30,
  },
  midContainerHeading: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTxt: {
    fontWeight: 'bold',
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
});
export default Faq;
