import { Switch, FlatList, View, Text, Image, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Touchable} from "react-native";
import { Dimensions } from "react-native";
import Logo from "../assets/logo.png"; 
import AppleLogo from "../assets/apple_logo.png";
import GoogleLogo from "../assets/google_logo.png";
import { useState } from "react";
import LogoSVG from "../assets/logo_svg"; 
import MiniLogoSVG from "../assets/miniLogo";
import BottomNav from "../components/BottomNav";
import User from "../assets/user.png"; 
import RightArrowSVG from "../assets/rightArrow";
import { useNavigation } from "@react-navigation/native";


let width = Dimensions.get("screen").width,
    height = Dimensions.get("screen").height; 

export default function Permissions({navigation}){
    const nav = useNavigation(); 

    const permissions = {
        "Notifications": {
            "description": "Notifications permissions allows for fast and efficient way of communicating and alerting users of app updates and gym news, events and more!"
        },
        "Live Location":{
            "description": "Live location tracks the users location with the device’s integrated gps system. This allows the functionality of services like the running tracker"
        },
        "20 Authentication":{
            "description": "20Authentication allows the user to maintain higher security than regular. Users will login with a second layer of security, that being the code sent to their phone number or email right after entering login credentials (ie email and password)"
        }
    };


    const [switchVal, setSwitch] = useState(false); 
    const List = ({dictionary}) =>{
        let ui = []; 
        for(let [k,v] of Object.entries(dictionary)){
        
           ui.push(
            <View style = {styles.optionContainer}>
                  <View style = {styles.optionHeader}><Text style = {styles.optionTitle}>{k}</Text><Switch onTouchEnd={() => setSwitch(!switchVal)} value= {switchVal} /></View>
                  <Text style = {styles.optionDescription}>{v['description']}</Text>
            </View>
        ); 
        }

        return ui; 
    }
 

    return(
        <SafeAreaView>
         <View>
                <MiniLogoSVG height = {50} style = {{position:"relaive", right: -width*.9}} />
            </View>
            <View style = {{paddingHorizontal: 10}}>
                <TouchableOpacity style = {styles.backButton_Container} onPress={() => navigation.popTo("Settings")}><RightArrowSVG fill={"rgba(250, 84,84,1)"} style = {styles.rightArrow} /><Text style = {styles.backButton}>Back</Text></TouchableOpacity>
            </View>
            <View style = {styles.optionsGlobalContainer}>
            <List dictionary={permissions} />
            </View>
        <BottomNav navigation={navigation} style= {{bottom: -height*.8 + (25*4*2) + 50/7.5 + (25*2*3) + (25) + (15*3) + (25*5) + (15*1.15)}} />
        </SafeAreaView>
    )
}


const styles=  StyleSheet.create({
    backButton:{
        fontSize: 15,
         textDecorationLine: "underline",
         color:"rgba(250, 84, 84, 1)", 

    },

    rightArrow:{
        transform: [{rotateZ:"180deg"}],
        
    },
    backButton_Container:{
        display:"flex",
        flexDirection:"row",
        
    },

    optionsGlobalContainer:{
        display:"flex",
        flexDirection:"column",
        rowGap: 10,
        marginTop: 25
    },

    optionContainer:{
        paddingVertical: 25, 
        borderTopWidth: 1, 
        borderTopColor: "rgba(0,0,0,.25)",
        paddingHorizontal: 25,
        display:"flex",
        flexDirection:"column",
        rowGap: 15, 


    },

    optionHeader:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },

    optionTitle:{
        color: "rgba(0,0,0,.8)",
        fontSize: 17
    },

    optionDescription:{
        color: "rgba(0,0,0,.7)"
    }
})