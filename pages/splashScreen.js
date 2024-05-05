/* eslint-disable prettier/prettier */
// SplashScreen.js

import React from 'react';
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';


const SplashScreen = () => {

  return (
    <ImageBackground
      source={require('../assets/images/splash.jpg')} // Change the path to your image
      style={styles.imageBackground}
    >
      <View style={styles.overlay}>
        <Text style={styles.companyName}>Welcome To RentKar</Text>
        <Text style={styles.description}>
        Your ultimate companion for seamless car rental experiences.
         Whether it's a spontaneous road trip or planned travel, BookKar puts the power of mobility in your hands.
          With just a few taps, explore a diverse fleet of vehicles tailored to your needs
        </Text>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  companyName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default SplashScreen;
