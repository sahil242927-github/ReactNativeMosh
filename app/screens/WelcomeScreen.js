import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AppButton from '../components/AppButton';
import CardContainer from '../components/CardContainer';
import ListingDetailsScreen from './ListingDetailsScreen';
import ViewImageScreen from './ViewImageScreen';
import MessagesScreen from './MessagesScreen';
import MyAccountScreen from './MyAccountScreen';
import ListingScreen from './ListingScreen';
import FormScreen from './FormScreen';
import CategoryScreen from './CategoryScreen';
import LoginScreen from './LoginScreen';
import ListingEditScreen from './ListingEditScreen';
import AppImagePicker from '../components/AppImagePicker';

export default function welcomeScreen() {
  return (
    <AppImagePicker />
    //<MessagesScreen />
    //<ListingEditScreen />
    //<LoginScreen />
    //<CategoryScreen />
    //<FormScreen />
    // <ListingScreen />
    // <MyAccountScreen />
    //<ViewImageScreen />
    // <ListingDetailsScreen />
    // <CardContainer />
    // <ImageBackground
    //   style={styles.background}
    //   source={require('../assets/bg.jpg')}
    //   blurRadius={6} // for making background blur
    // >
    //   <View style={styles.logoContainer}>
    //     <Image style={styles.logo} source={require('../assets/logo.png')} />
    //     <Text style={styles.tagline}>Sell what you don't need</Text>
    //     {/* <MaterialIcons name='email' size={50} color='dodgerblue' /> // email icon */}
    //   </View>
    //   <View style={styles.buttonContainer}>
    //     <AppButton title='Login' onPress={() => console.log('Tapped')} />
    //     <AppButton
    //       title='Register'
    //       onPress={() => console.log('Tapped')}
    //       color='secondary'
    //     />
    //   </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});
