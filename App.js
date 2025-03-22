import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, SectionList, StyleSheet, Text, View, Animated, NativeEventEmitter} from 'react-native';
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
import { useEventListener } from 'expo';

//redux
import { Provider, useSelector, useDispatch } from 'react-redux';
import { getState, store } from './store';
import { nav, selectNavigation, render } from './navigationSlice';

export default function App() {
const navState = useSelector(selectNavigation);
const dispatch = useDispatch(); 
 

let currentId = navState.routes[navState.currentRoute].id; 
  return (
    
    <SafeAreaView style = {styles.container}>
  
      {
        currentId == 0?
        <AuthScreen/>
        : 
        currentId == 1?
        <IntroCustomization/>
        : 
        currentId == 2?
        <Home/>
        :
        currentId == 3?
        <Settings/>
        : 
        currentId == 4?
        <MyPillPals/>
        : 
        <Home/>

      }
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: -100,
    transitionDuration: "1s",
    
  },
});
