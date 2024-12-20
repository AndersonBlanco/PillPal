import {View, Text, Image, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import { Dimensions } from "react-native";
import Logo from "../assets/logo.png"; 
import AppleLogo from "../assets/apple_logo.png";
import GoogleLogo from "../assets/google_logo.png";
import { useState } from "react";
import LogoSVG from "../assets/logo_svg"; 
import BottomNav from "../components/BottomNav";
import User from "../assets/user.png"; 
export default function Home({navigation}){
 
let profileImgSize = 110; 
    return(
        <SafeAreaView style = {{alignItems:"center", justifyContent:"center"}}>
    <View style = {[styles.column, {rowGap: 110}]}>
            <TouchableOpacity style = {{bottom: -100}}>
                <Image source = {User} style = {{height: profileImgSize, width: profileImgSize}} />
            </TouchableOpacity>
            <Text style = {{right: -10}}>Username</Text>
       </View>
       

        <BottomNav navigation = {navigation} style = {{bottom: -Dimensions.get("screen").height*.8 + 110}}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
 
    row:{
        display:"flex",
        flexDirection: "row",
 
    },

     
    column:{
        display:"flex",
        flexDirection: "column",
 
    },

})