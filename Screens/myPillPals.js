import { ScrollView, FlatList, View, Text, SafeAreaView, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Button, Modal} from "react-native";
import { Dimensions } from "react-native";
import Logo from "../assets/logo.png"; 
import AppleLogo from "../assets/apple_logo.png";
import GoogleLogo from "../assets/google_logo.png";
import { useRef, useState } from "react";
import LogoSVG from "../assets/logo_svg"; 
import BottomNav from "../components/BottomNav";
import User from "../assets/user.png"; 
import MiniLogoSVG from "../assets/miniLogo";
import { useSelector, useDispatch } from "react-redux";
import SideMenu from "../components/sideMenu";
import AnimatedProgressWheel from 'react-native-progress-wheel';
import WeeklyTimerComponent from "../components/reminderPicker";
import { selecMyPillPals, addPal } from "../myPillPalsSlice";

import axios from "axios";
export default function MyPillPals(){
    const dispatch = useDispatch(); 
    
    const [editPal, setEditPal] = useState(false),
        [selectedPal, setSelectedPal] = useState(null),
        [editTimer, setEditTimer] = useState(false); 

    const ChargeWheel = ({val, style})  =>{
        return <View style = {style}><AnimatedProgressWheel
        color={"rgb(250,84,84)"}
        backgroundColor="rgb(250,84,84)"
        width={5}
        size={110}
        animateFromValue={0}
        progress={val}
        showPercentageSymbol
        showProgressLabel
        rounded = {true}
         
        /></View>
    }
   

    const myPillPals_reduxState = useSelector((state) => state.myPillPals.value); 

    const Edit = ({action})=>{
        return <TouchableOpacity style = {styles.editContainer} onPress={action}><Text style = {styles.editText}>edit</Text></TouchableOpacity>
    }

    const EditPal = (
        <Modal visible = {editPal} transparent animationType="fade">
            <View style = {{height: "100%", width:"100%", backgroundColor:"rgba(0,0,0, .25)",  textAlign:"center", alignItems:"center", justifyContent:"center",}}>
             <View style = {[{ paddingVertical: 25,backgroundColor: "white", textAlign:"center", alignItems:"center", justifyContent:"center", borderRadius: 10, width: "80%", height: "auto"}]}>

                <View style = {{backgroundColor:"transparent", width:"100%", alignItems:"flex-end", top: -22, paddingRight: 9,}}><Button title = "Close" onPress={() => setEditPal(!editPal)}/></View>

                <View style = {[styles.column, {rowGap: 20}]}>
                      <View style ={[styles.row, {columnGap: 12, alignItems:"center", justifyContent:"center"}]}><Text style = {styles.settingTitle}>Timer:</Text><TextInput value = {selectedPal != null? selectedPal['Timer'] : ""}/><Edit /></View>
                        <View style ={[styles.row, {columnGap: 12}]}><Text style = {styles.settingTitle}>Haptics:</Text><TextInput value = {selectedPal!=null? selectedPal['Haptics'] : ""} /><Edit/></View>
                        <View style ={[styles.row, {columnGap: 12}]}><Text style = {styles.settingTitle}>Name:</Text><TextInput value = {selectedPal!= null? selectedPal['Name'] : ""} /><Edit/></View>
                </View>

             </View>
            </View>
        </Modal>
    );

    const EditTimer = (
         <Modal visible = {editTimer} transparent animationType="fade">
            <View style = {{height: "100%", width:"100%", backgroundColor:"rgba(0,0,0, .25)",  textAlign:"center", alignItems:"center", justifyContent:"center",}}>
            <WeeklyTimerComponent selectedPal_id = {selecMyPillPals['id']} />
            </View>
        </Modal>
    );
    
    const ListPillPalss = ({dictionary}) =>{
        let ui = [];
       dictionary.map(i => 
            ui.push(

                <View style = {styles.myPillPalContainer} key = {i.id}>
                    <View style = {{   
                        borderRadius: 15,
                        width: Dimensions.get("screen").width*.925,
                        backgroundColor:"rgba(0,0,0,.05)",
                        paddingVertical: 25,
                        alignItems:"center",
                        justifyContent:"center",
                        rowGap: 10
                        }}>


                <View style = {[styles.row, {justifyContent:"space-around", marginTop: 15, backgroundColor:"transparent", columnGap: 75}]}>

               
 
                    <View style ={[styles.column, {top: -27, alignItems:"stretch", justifyContent:"center", rowGap: 0 }]}>
                       
                        <MiniLogoSVG height = {100} width={75} /> 
                        <Text style = {{position:"relative", bottom: 0, fontSize: 17}}>{i["Name"]}</Text>

                    </View>
                    <ChargeWheel style = {{top: -10}} val = {(i['charge'])} />
                </View>

                   <TouchableOpacity style = {styles.findContainer} onPress={() =>{ 
                    //setEditPal(!editPal); setSelectedPal(i)}

                    //tetsing POST-ing to sever
                    fetch("http://192.168.56.1:3001/arduino?command=universe", {
                     method: "GET",
                    })
                    .then((resp) =>resp.json())
                    .then(data => console.log("Succeeded: ", data))
                    .catch((err) => console.log("Error: ", err))
                   }}>
                            <Text style = {styles.findText}>Edit Name</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.findContainer} onPress={() =>{ setEditTimer(!editTimer); setSelectedPal(i); }}>
                            <Text style = {styles.findText}>Edit Timer</Text>
                        </TouchableOpacity>

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
        <View style = {{height: 25, backgroundColor:"transparent"}}/>
      </ScrollView>

           {EditPal}
       </>
    )
}

const styles = StyleSheet.create({
    gllobalMyPillPalsSetts:{
        bottom: -55, 
        rowGap: 0, 
        backgroundColor:"transparent",
        maxHeight: Dimensions.get("screen").height * .89
    },
    myPillPalContainer:{
        borderTopWidth: 0,
         borderTopColor: "rgba(0,0,0,.34)",
         display:"flex",
         flexDirection:"column",
         width: Dimensions.get("screen").width, 
         paddingVertical: 20,
         paddingHorizontal: 15,
         alignItems:"center",
         justifyContent:"center"
         
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
        width: "90%"
         
    },
    findText:{
        color:"white",
        fontSize: 12.5, 

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