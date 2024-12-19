import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStaticNavigation, NavigationContainer, DefaultTheme} from "@react-navigation/native"; 
import {createNativeStackNavigator} from "@react-navigation/native-stack"; 

//screens: 
import AuthScreen from './Screens/AuthScreen';

const Stack = createNativeStackNavigator(); 
 
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
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen name = "Test" component = {AuthScreen}/>
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
