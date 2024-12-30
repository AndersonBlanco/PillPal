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

const userPillPals = {
    "device1": {
        "charge": "x%",
        "Timer": "00:01:00:00",
        "Haptics": "Flash",
        "Name": "PillPal1",
    },
    "device2": {
        "charge": "x%",
        "Timer": "00:01:00:00",
        "Haptics": "Flash",
        "Name": "PillPal2"
    },
    "device3": {
        "charge": "x%",
        "Timer": "00:01:00:00",
        "Haptics": "Flash",
        "Name": "PillPal3"
    },
  };

export default function Home({navigation}){
 
let profileImgSize = 110; 
const ListPillPals = ({dictionary}) =>{
    let ui = []; 
    for(let [k, v] of Object.entries(dictionary)){
        ui.push(
            <View style= {styles.pillpalContainer}>
                <Text style = {styles.pillpal_name}>{v['Name']}</Text>
                <Text style = {styles.pillpal_charge}>{v["charge"]}</Text>
            </View>
        )
    };

    return ui; 
}; 

    return(
        <SafeAreaView style = {{alignItems:"center", justifyContent:"center"}}>
            <MiniLogoSVG height = {50} style = {{position:"absolute", right: 12.5, top: 48}}/>
    <View style = {[styles.column, {rowGap: 110}]}>
            <TouchableOpacity style = {{bottom: -100}}>
                <Image source = {User} style = {{height: profileImgSize, width: profileImgSize}} />
            </TouchableOpacity>
            <Text style = {{right: -10}}>Username</Text>
       </View>
       <View style = {styles.globalPillPalContainer}>
       <ListPillPals dictionary={userPillPals} />
        </View>
        <TouchableOpacity onPress={() => navigation.replace("MyPillPals")} style = {styles.addPillPal}><Text style = {{color: "white"}}>Add a PillPal</Text></TouchableOpacity>
        <BottomNav navigation = {navigation} style = {{bottom: -Dimensions.get("screen").height*.8 + 110 + (50) + (15*3.5624*2) + (10 * 4)}}/>
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

    globalPillPalContainer:{
     bottom: -50, 
    },
    pillpalContainer:{
        display:"flex",
        flexDirection:"row",
        columnGap: 100, 
        width: Dimensions.get("screen").width *.7,
        alignItems:"center",
        justifyContent:"space-evenly",
        borderTopWidth: 1, 
        borderTopColor: "rgba(0,0,0,.25)",
        paddingHorizontal: 0, 
        paddingVertical: 15,



    },

addPillPal:{
    backgroundColor: "rgba(250, 84,84,1)",
    paddingVertical: 10, 
    alignItems:"center",
    justifyContent:"center",
    width: Dimensions.get("screen").width * .7, 
    borderRadius: 100,
    bottom: -250
     
}
})