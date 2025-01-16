import { createSlice } from "@reduxjs/toolkit";
 
export const myPillPalsSlice = createSlice({
    name: "myPillPals", 
    initialState:{
        value: {
            pillPals: [
                {
                    "id": 0, 
                    "charge": "x%",
                    "Timer": "00:01:00:00",
                    "Haptics": "Flash",
                    "Name": "PillPal1",
                },
                {
                    "id": 1,
                    "charge": "x%",
                    "Timer": "00:01:00:00",
                    "Haptics": "Flash",
                    "Name": "PillPal2"
                },
                {
                    "id": 2,
                    "charge": "x%",
                    "Timer": "00:01:00:00",
                    "Haptics": "Flash",
                    "Name": "PillPal3"
                },
            ]}
    },

    reducers:{
        addPal: (state, action) =>{
          //modify and append new pill-pal to existing inventory 
        },

    }
})

export const {addPal} = myPillPalsSlice.actions; 
export const selecMyPillPals = (state) => state.myPillPals.value; 
export default myPillPalsSlice.reducer; 
