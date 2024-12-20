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
const Stack = createNativeStackNavigator(); 
 
const PreComponentize = (props) => {
  return(
    <SafeAreaView>
      {props}
    </SafeAreaView>
  )
}
export default function App({navigation}) {

  return (
    <NavigationContainer theme={{...DefaultTheme,   
      fonts: {
      ...DefaultTheme.fonts,
      
      body: {
        fontSize: 5,
        fontWeight: "300"
      },
    }, 
    colors: {
      background: "rgb(255, 255, 255)", 
      primary: "rgb(255, 0, 0)"
      }
      }}>
      <Stack.Navigator screenOptions={{headerShown: false, animation:"none"}}>
  
      <Stack.Screen name = "Auth" component = {AuthScreen}/>
      <Stack.Screen name = "IntroCustomization" component = {IntroCustomization}/>
      <Stack.Group name = "Main">
              <Stack.Screen name = "Home" component = {Home}/>
              <Stack.Screen name = "Settings" component = {Settings}/>
              
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
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
