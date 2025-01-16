import {View, Text, Image, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity, ScrollView, Touchable} from "react-native";
import { Dimensions } from "react-native";
import Logo from "../assets/logo.png"; 
import AppleLogo from "../assets/apple_logo.png";
import GoogleLogo from "../assets/google_logo.png";
import { useState } from "react";
import LogoSVG from "../assets/logo_svg"; 
import BottomNav from "../components/BottomNav";
import User from "../assets/user.png"; 
import MiniLogoSVG from "../assets/miniLogo";
import Modal from "react-native-modal"; 
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';
import { myPillPalsSlice, selecMyPillPals } from "../myPillPalsSlice";
import { Provider, useSelector, useDispatch } from 'react-redux'; 
import { store } from "../store";
import SideMenu from "../components/sideMenu";

export default function Home({navigation}){
    const myPillPals_reduxState = useSelector((state) => state.myPillPals.value); 
    
 
let profileImgSize = 110; 
const ListPillPals = ({dictionary}) =>{
    let ui = []; 
    dictionary.map(i => 
        ui.push(
            <View key={i.id} style= {styles.pillpalContainer}>
                <Text style = {styles.pillpal_name}>{i['Name']}</Text>
                <Text style = {styles.pillpal_charge}>{i['charge']}</Text>
            </View>
        )
    );

    return ui;
    
};

// <BottomNav navigation = {navigation} style = {{bottom: -Dimensions.get("screen").height*.8 + 110 + (50) + (15*3.5624*2) + (10 * 4)}}/>
// <TouchableOpacity onPressIn={() => alert("Hello Universe")} style = {{right: -50,alignItems:"center", backgroundColor:"transparent"}}><Text onPress = {() =>alert("Hello")} style = {{color: "rgba(0,0,0,.5)", fontSize: 30, fontWeight: "100", right: -25}}>{">"}</Text></TouchableOpacity>

const [modalView, setModalView] = useState(false); 

    return(
    <>
    <TouchableOpacity onPress = {() => setModalView(!modalView)} style = {{position:"absolute", left: 20.5, top: 48}}><MiniLogoSVG height = {50}/></TouchableOpacity>
    <View style = {[styles.column, {rowGap: 100}]}>
            <TouchableOpacity style = {{bottom: 50}}>
                <Image source = {User} style = {{height: profileImgSize, width: profileImgSize}} />
            </TouchableOpacity>
            <Text style = {{right: -10, top: -125}}>Username</Text>
       </View>
       <View style = {styles.globalPillPalContainer}>
       <ListPillPals dictionary={myPillPals_reduxState['pillPals']} />
        </View>
        <TouchableOpacity onPress={() => navigation.replace("MyPillPals")} style = {styles.addPillPal}><Text style = {{color: "white"}}>Add a PillPal</Text></TouchableOpacity>
        <SideMenu styles = {styles} state = {modalView} stateChangeFunction={setModalView} />

        </>
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
     bottom: 50, 
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
    bottom: -50
     
},
lineBreak:{
    backgroundColor: "lightgray",
    height: 1, 
    
}
})