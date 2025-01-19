import { ScrollView, FlatList, View, Text, Image, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Button} from "react-native";
import { Dimensions } from "react-native";
import Logo from "../assets/logo.png"; 
import AppleLogo from "../assets/apple_logo.png";
import GoogleLogo from "../assets/google_logo.png";
import { useRef, useState } from "react";
import LogoSVG from "../assets/logo_svg"; 
import BottomNav from "../components/BottomNav";
import User from "../assets/user.png"; 
import MiniLogoSVG from "../assets/miniLogo";
import { useSelector } from "react-redux";
import SideMenu from "../components/sideMenu";
export default function MyPillPals(){
    const myPillPals_reduxState = useSelector((state) => state.myPillPals.value); 

    const Edit = ({action})=>{
        return <TouchableOpacity style = {styles.editContainer} onPress={action}><Text style = {styles.editText}>edit</Text></TouchableOpacity>
    }
    const ListPillPalss = ({dictionary}) =>{
        let ui = [];
       dictionary.map(i => 
            ui.push(
                <View style = {styles.myPillPalContainer} key = {i.id}>

                <View style= {[styles.row, {columnGap: 265, width: Dimensions.get("screen").width}]}>
                    <Text>{i["Name"]}</Text>
                    <Text>{i['charge']}</Text>
                </View>

                <View style = {[styles.row, {justifyContent:"space-between", marginTop: 50}]}>
                    <View style = {styles.column}>
                        <View style ={[styles.row, {columnGap: 12}]}><Text style = {styles.settingTitle}>Timer</Text><Edit /></View>
                        <View style ={[styles.row, {columnGap: 12}]}><Text style = {styles.settingTitle}>Haptics</Text><Edit/></View>
                        <View style ={[styles.row, {columnGap: 12}]}><Text style = {styles.settingTitle}>Name</Text><Edit/></View>
                    </View>

                    <View style ={[styles.column, {top: -27, alignItems:"stretch", justifyContent:"center", rowGap: 10 }]}>
                        <MiniLogoSVG height = {100} width={75} /> 
                        <TouchableOpacity style = {styles.findContainer}>
                            <Text style = {styles.findText}>Find</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                
                
            </View>
            )
        )
 

        return ui; 
    }
    return(
    <>
  <SideMenu/>
      <ScrollView style = {styles.gllobalMyPillPalsSetts} showsVerticalScrollIndicator>
        <ListPillPalss dictionary = {myPillPals_reduxState['pillPals']}/>
      </ScrollView>

           
       </>
    )
}

const styles = StyleSheet.create({
    gllobalMyPillPalsSetts:{
        bottom: -45, 
        rowGap: 10, 
        backgroundColor:"transparent",
        maxHeight: Dimensions.get("screen").height * .89
    },
    myPillPalContainer:{
        borderTopWidth: 1,
         borderTopColor: "rgba(0,0,0,.34)",
         display:"flex",
         flexDirection:"column",
         width: Dimensions.get("screen").width, 
         paddingVertical: 25
    },
    row:{
        display:"flex",
        flexDirection:"row",
        paddingHorizontal: 25
    },
    column:{
        display:"flex",
        flexDirection:"column"
    },
    findContainer:{
        backgroundColor:"rgb(250,84,84)",
        borderRadius: 100,
        paddingVertical: 10,
        textAlign:"center",
        alignItems:"center",

         
    },
    findText:{
        color:"white",
        fontSize: 10, 

    },
    settingTitle:{
        fontSize: 15, 
    },
    
    editContainer:{
        backgroundColor:"transparent",

    },
    editText:{
        color: "rgb(250, 84,84)",
        fontSize: 15,

    }
})