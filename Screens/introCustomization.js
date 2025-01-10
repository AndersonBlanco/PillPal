import {View, Text, Image, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Button} from "react-native";
import { Dimensions } from "react-native";
import Logo from "../assets/logo.png"; 
import AppleLogo from "../assets/apple_logo.png";
import GoogleLogo from "../assets/google_logo.png";
import { useState } from "react";
import UploadSVG from "../assets/uploadSVG";
import CameraSVG from "../assets/cameraSVG"; 
import User from "../assets/user.png"; 
//redux
import { Provider, useSelector, useDispatch } from 'react-redux';
import { getState, store } from '../store';
import { nav, selectNavigation, render } from '../navigationSlice';


export default function IntroCustomization(){
    const [imageDisp, setImageDisp] = useState(User); 
    const SelectImageActionButton = () =>{
        return(
            <TouchableOpacity><Text>Select Image</Text></TouchableOpacity>
        )
    }

    const svgSize = 34; 
    const dispatch = useDispatch(); 
    return(
      <>
            <TouchableOpacity onPress={() => dispatch(nav("Home"))} style = {{width: Dimensions.get("screen").width, position:"relative", left: Dimensions.get("screen").width * .85, top: -125}}>
            <Text style = {{fontSize: 17, color: "rgba(250, 84,84,1)"}}>Next</Text> 
            </TouchableOpacity>

       

            <View style = {[styles.column, {rowGap: 150, bottom: 0, justifyContent:"center", alignItems:"cenetr", textAlign:"center", bottom: 0}]}>

            <TouchableOpacity style = {{justifyContent:"center", alignItems:"center"}}>
                <Image source = {imageDisp} style = {styles.profileImage} />
            </TouchableOpacity>


            <View style = {[styles.column, {rowGap: 25}]}>
            <TouchableOpacity style = {[styles.imageOptionsButton, {display: "flex", flexDirection: "row", columnGap: 10}]}>            
            <UploadSVG height = {svgSize} width = {svgSize} /><Text>Upload</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {[styles.imageOptionsButton, {display: "flex", flexDirection: "row", columnGap: 10}]}>
            <CameraSVG height = {svgSize} width={svgSize} /><Text>Take Picture</Text>
            </TouchableOpacity>
            </View>

            </View>
    </>
    )
}

const styles = StyleSheet.create({
    profileImage:{
        borderRadius: 100,
        height: 200,
        width: 200,
         
    },

    row:{
        display:"flex",
        flexDirection:"row"
    },
    
    row:{
        display:"flex",
        flexDirection:"column"
    },
    imageOptionsButton:{
        paddingVertical: 10,
        paddingHorizontal: 15,
         borderWidth: 2,
         borderColor: "black",
         borderRadius: 100,
         width: Dimensions.get("screen").width * .9,
         textAlign: "center",
         alignItems:"center",
         justifyContent:"center",

    }
})