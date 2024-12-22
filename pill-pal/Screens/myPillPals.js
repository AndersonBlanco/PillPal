import {View, Text, Image, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import { Dimensions } from "react-native";
import Logo from "../assets/logo.png"; 
import AppleLogo from "../assets/apple_logo.png";
import GoogleLogo from "../assets/google_logo.png";
import { useState } from "react";
import LogoSVG from "../assets/logo_svg"; 
import BottomNav from "../components/BottomNav";
import User from "../assets/user.png"; 
import MiniLogoSVG from "../assets/miniLogo";

export default function MyPillPals({navigation}){
    return(
        <SafeAreaView>
         <MiniLogoSVG height = {50} style = {{position:"absolute", right: 12.5, top: 48}}/>

            <Text>Hello Universe</Text>

            <BottomNav navigation={navigation} />
        </SafeAreaView>
    )
}