import {Text, StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/colors';
import {typography} from '../theme/typography';

import Header from '../components/Header';

const TermsScreen = () => {
  return (
    <SafeAreaView>
      <Header title="Terms of Service" />
      <View style={styles.container}>
        <ScrollView style={styles.midContainer}>
          <Text style={styles.heading}>Terms and conditions</Text>
          <Text>
            {''}Welcome to our Hotel Booking App.{'\n'} Please read these terms
            and conditions carefully before using our services. General {'\n'}
            1.1. These terms and conditions ("Terms") apply to the use of our
            Hotel Booking App ("App"). By using our App, you agree to be bound
            by these Terms.{'\n'}
            1.2. Our App is owned and operated by [insert company name]
            ("Company").{'\n'} 1.3. We reserve the right to modify or update
            these Terms at any time without notice. Your continued use of our
            App after any changes to these Terms constitutes your acceptance of
            the modified Terms. {'\n'}Booking and Payment{'\n'} 2.1. Our App
            allows you to search for and book hotels. {'\n'}2.2. To make a
            booking, you must provide us with accurate and complete information,
            including your name, email address, phone number, and payment
            details.{'\n'} 2.3. Payment for your booking will be charged to the
            payment method you provide at the time of booking.{'\n'} 2.4. We
            may, at our discretion, charge a cancellation fee if you cancel your
            booking. The cancellation fee will be clearly stated at the time of
            booking.{'\n'} Hotel Reservations{'\n'}
            3.1. We do not own or operate any hotels.{'\n'}
            All hotel reservations made through our App are subject to the terms
            and conditions of the hotel.{'\n'} 3.2. We are not responsible for
            any errors, inaccuracies, or omissions in the hotel information
            provided on our App.{'\n'} 3.3. We are not responsible for any
            disputes or issues that may arise between you and the hotel. Any
            issues with your hotel reservation should be directed to the hotel.
            {'\n'} User Conduct 4.1. {'\n'}You agree to use our App only for
            lawful purposes and in a manner that does not infringe the rights
            of, or restrict or inhibit the use and enjoyment of, our App by any
            third party.{'\n'} 4.2. You agree not to: 4.2.1.{'\n'} Use our App
            in any way that is unlawful or fraudulent, or has any unlawful or
            fraudulent purpose or effect.{'\n'} 4.2.2.{'\n'} Use our App to
            transmit any unsolicited or unauthorized advertising, promotional
            materials, or other forms of solicitation.
            {'\n'} 4.2.3.{'\n'} Use our App to transmit any material that
            contains viruses, Trojan horses, worms, time-bombs, keystroke
            loggers, spyware, adware or any other harmful programs or similar
            computer code designed to adversely affect the operation of any
            computer software or hardware.{'\n'} 4.2.4. Use our App in any way
            that could damage, disable, overburden, or impair our servers or
            networks or interfere with any other party's use and enjoyment of
            our App. 4.2.5. Attempt to gain unauthorized access to any part of
            our App or any other systems or networks connected to our App. 4.3.
            We reserve the right to terminate or suspend your access to our App
            at any time if we believe you have breached these Terms.
            Intellectual Property 5.1. All intellectual property rights in our
            App, including but not limited to copyright, trademarks, and logos,
            are owned by or licensed to us. 5.2. You are not permitted to use
            any of our intellectual property without our prior written consent.
            Disclaimer 6.1. We make no representations or warranties of any
            kind, express or implied, about the completeness, accuracy,
            reliability, suitability, or availability with respect to our App or
            the information, products, services, or related graphics contained
            on our App for any purpose. Any reliance you place on such
            information is therefore strictly at your own risk. 6.2. We will not
            be liable for any loss or damage including without limitation,
            indirect or consequential loss or damage, or any loss
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  heading: {
    justifyContent: 'center',
    color: Colors.black,
    margin: 30,
    fontFamily: typography.primary,
    fontSize: 30,
  },
  midContainer: {
    padding: 10,
    fontFamily: typography.secondary,
  },
});
export default TermsScreen;
