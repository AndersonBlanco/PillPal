import {View, ScrollView, Text, TouchableOpacity, Image} from "react-native";
import Modal from "react-native-modal"; 
import { useState } from "react";
import User from "../assets/user.png"; 

export default function SideMenu({styles, state, stateChangeFunction}){
    let profileImgSize = 110; 

    const SideMenu = (
            <Modal backdropColor="white" animationIn = "slideInLeft" animationOut= "slideOutLeft" isVisible = {state}>
                <View style = {[styles.row, {height:"110%"}]}  >
                <View style = {{paddingTop: 65, backgroundColor: "white", height: "100%", width: "50%", shadowColor: "black", shadowOpacity: .25, shadowRadius: 5, shadowOffset:{width: 10}, }}>
                    <ScrollView style ={{top: -50}}>
                  <View style = {[styles.column, {paddingTop: 100, rowGap: 15, paddingRight: 25}]}>
                    <TouchableOpacity><Text style = {[styles.sideMenuText, {fontSize: 15}]}>MyPill-Pals</Text></TouchableOpacity>
                    <View style = {styles.lineBreak}/>
                    <Text style = {[styles.sideMenuText, {fontSize: 15}]}>Home</Text>
                    <View style = {styles.lineBreak}/>
                    <Text style = {[styles.sideMenuText, {fontSize: 15}]}>Settings</Text>
    
                  </View>
                  </ScrollView>
                  <View style = {[[styles.lineBreak, {top: -65, left: -15}]]}/>
                  <TouchableOpacity style = {{bottom: 50, flexDirection:"row", justifyContent:"center", alignItems:"center", columnGap: 15, display:"relative", left: -17 }}>
                    <Image source = {User} style = {{height: profileImgSize*.5, width: profileImgSize*.5}} />
                    <Text style = {{fontSize: 12.5}}>My Profile</Text>
                </TouchableOpacity>
                </View>
              <View style ={{backgroundColor:"transparent", width: "100%"}} onTouchStart={() => stateChangeFunction(!state)}/> 
                </View>
            </Modal>
        ); 
    

        return SideMenu; 
}