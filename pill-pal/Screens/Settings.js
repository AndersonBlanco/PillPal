import {View, Text, Image, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from "react-native";
import { Dimensions } from "react-native";
import Logo from "../assets/logo.png"; 
import AppleLogo from "../assets/apple_logo.png";
import GoogleLogo from "../assets/google_logo.png";
import { useState } from "react";
import LogoSVG from "../assets/logo_svg"; 
import BottomNav from "../components/BottomNav";
import User from "../assets/user.png"; 
import RightArrowSVG from "../assets/rightArrow";
export default function Settings({navigation}){
    //  <TouchableOpacity style = {styles.pressable}><Text style = {[styles.pressablmeTex, {color: "red"}]}>Delete Account</Text><GArrow style ={styles.gArrow} fill = "red" /></TouchableOpacity>
    const [localSettingsCurrentPage, setLocalSettingsCurrentPage] = useState(0);

    /**
     * 0 =  
     * 1 = Permissions 
     * 2 = Privacy 
     * 3 = Terms & Services 
     * 4 = Feedback
     * 5 = Software Details
     */
 

    return(
        <SafeAreaView>

            <View style = {styles.settingButtonsGroup}>
            <TouchableOpacity style = {styles.settingButtonContainer}><View style = {styles.row}><Text  style = {styles.settingName}>Permissions</Text><RightArrowSVG style = {styles.arrowRight} fill = "rgba(0,0,0,.4)"/></View></TouchableOpacity>
            <TouchableOpacity style = {styles.settingButtonContainer}><View style = {styles.row}><Text  style = {styles.settingName}>Privacy</Text><RightArrowSVG style = {styles.arrowRight} fill = "rgba(0,0,0,.4)"/></View></TouchableOpacity>
            <TouchableOpacity style = {styles.settingButtonContainer}><View style = {styles.row}><Text  style = {styles.settingName}>Terms & Services</Text><RightArrowSVG style = {styles.arrowRight} fill = "rgba(0,0,0,.4)"/></View></TouchableOpacity>
            <TouchableOpacity style = {styles.settingButtonContainer}><View style = {styles.row}><Text  style = {styles.settingName}>Feedback</Text><RightArrowSVG style = {styles.arrowRight} fill = "rgba(0,0,0,.4)"/></View></TouchableOpacity>
            <TouchableOpacity style = {styles.settingButtonContainer}><View style = {styles.row}><Text  style = {styles.settingName}>Software Details</Text><RightArrowSVG style = {styles.arrowRight} fill = "rgba(0,0,0,.4)"/></View></TouchableOpacity>
            </View>
            <BottomNav navigation={navigation} style= {{bottom: -Dimensions.get("screen").height*.88 + (25*2*6)}} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({

settingButtonsGroup:{
      rowGap: 0, 
      display:"flex",
      flexDirection:"column",
      

},

settingButtonContainer:{
    borderTopWidth: 1, 
    borderTopColor: "rgba(0,0,0,.2)",
    alignItems:"center",

    justifyContent: "flex-start",
    textAlign:"left",
    paddingVertical: 25,
    paddingHorizontal: 25
    
},

settingName:{
  textAlign:"left",
  alignSelf: "baseline"
},
row:{
    display:"flex",
    flexDirection:"row",
    width: "100%",

},

arrowRight:{
    position:"absolute",
    right: 0,
    color: "rgba(0,0,0,.4)"
}
})