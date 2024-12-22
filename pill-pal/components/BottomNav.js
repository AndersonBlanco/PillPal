import {View, Text, Image, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import { Dimensions } from "react-native";
import LogoSVG from "../assets/logo_svg";
import MiniLogoSVG from "../assets/miniLogo";
import HomeSVG from "../assets/homeSVG"; 
import SettingsSVG from "../assets/settingsSVG";
const BottomNav = ({navigation, style}) =>{
        return (
            <View style = {[styles.row, {borderTopColor: "rgba(0,0,0,.2)", borderTopWidth: 1, justifyContent:"center", alignItems:"center", position: "absolute", paddingVertical: 25, bottom: -Dimensions.get("screen").height * .8, width: Dimensions.get("screen").width,}, style]}>
            <TouchableOpacity onPress={() => navigation.replace("MyPillPals")} style = {[styles.bottomNavIcon, {backgroundColor: "rgba(0,0,0,.0)", alignItems:"center", justifyContent:"center", }]}><LogoSVG height = {50} style = {{top: -5, right: -3.4}} /></TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.replace("Home")} style = {[styles.bottomNavIcon, {backgroundColor: "rgba(0,0,0,.0)", justifyContent:"center", alignItems:"center" }]}><HomeSVG height = {50} width={37} style = {{}} /></TouchableOpacity>
            <TouchableOpacity onPress = {() => navigation.replace("Settings")} style = {[styles.bottomNavIcon, {backgroundColor: "rgba(0,0,0,.0)", }]}><SettingsSVG height = {40} width = {40} style = {{bottom: -5}}/></TouchableOpacity>
   
        </View>
    ); 
 
    }
 
    
const styles = StyleSheet.create({
    bottomNavIcon:{
        borderRadius: 100,
        backgroundColor: "rgba(0,0,0,.2)",
        height: 50, 
        width: 50, 
        overflow: "hidden",
    },

        row:{
            display:"flex",
            flexDirection: "row",
            columnGap: 70
        },

        logo:{

    
            width: 15, 
            height: 25
        },
})

export default BottomNav; 