import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {createStaticNavigation, NavigationContainer, DefaultTheme} from "@react-navigation/native"; 
import {createNativeStackNavigator} from "@react-navigation/native-stack"; 

//screens: 
import AuthScreen from './Screens/AuthScreen';
import IntroCustomization from './Screens/introCustomization';
import Home from './Screens/Home';
import Settings from './Screens/Settings';
import BottomNav from './components/BottomNav';
import Permissions from './Screens/Permissions';
import MyPillPals from './Screens/myPillPals';
const Stack = createNativeStackNavigator(); 
 
const PreComponentize = (props) => {
  return(
    <SafeAreaView>
      {props}
    </SafeAreaView>
  )
}

const userPillPals = {
  "PillPal1": {
      "charge": "x%",
      "Timer": "00:01:00:00",
      "Haptics": "Flash",
      "Name": "PillPal1"
  },
  "PillPal2": {
      "charge": "x%",
      "Timer": "00:01:00:00",
      "Haptics": "Flash",
      "Name": "PillPal1"
  },
  "PillPal3": {
      "charge": "x%",
      "Timer": "00:01:00:00",
      "Haptics": "Flash",
      "Name": "PillPal1"
  },
};


export default function App({navigation}) {

  return (
  <SafeAreaView style = {styles.container}>
    <Text>Hello Universe</Text>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
