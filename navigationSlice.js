import { createSlice } from "@reduxjs/toolkit";
import AuthScreen from "./Screens/AuthScreen";
import IntroCustomization from "./Screens/introCustomization";

 


export const navigatorSlice = createSlice({
    name: "navigator", 
    initialState:{
        value: {
            routes: {
                "AuthScreen": { 
                name: "AuthScreen",
                id: 0,
                params: {}
            },
                "IntroCustomization": {
                name: "IntroCustomization", 
                id: 1,
                params: {}
            },
            "Home": {
                name: "Home", 
                id: 2,
                params: {}
            },
            "Settings": {
                name: "Settings", 
                id: 3,
                params: {}
            },
            "MyPillPals": {
                name: "MyPillPals", 
                id: 4,
                params: {}
            },
        },

            currentRoute: "AuthScreen"
        }
    },

    reducers:{
        nav: (state, action) =>{
            state.value.currentRoute = action.payload; 
        },
        render: (state) =>{
            switch(state.value.currentRoute){
                case "AuthScreen": 
                    return <AuthScreen/>; 
                case "IntroCustomization":
                    return <IntroCustomization/>;
            }
        }
    }
})

export const {nav} = navigatorSlice.actions; 
export const {render} = navigatorSlice.actions; 
export const selectNavigation = (state) => state.navigation.value; 
export default navigatorSlice.reducer; 
