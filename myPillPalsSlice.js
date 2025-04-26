import { createSlice } from "@reduxjs/toolkit";
 
export const myPillPalsSlice = createSlice({
    name: "myPillPals", 
    initialState:{
        value: {
            pillPals: [
                {
                    "id": 0, 
                    "charge": 100,
                    "Timer": "00:01:00:00",
                    "Haptics": "Flash",
                    "Name": "PillPal1",
                },
                {
                    "id": 1,
                    "charge": 75,
                    "Timer": "00:01:00:00",
                    "Haptics": "Flash",
                    "Name": "PillPal2"
                },
                {
                    "id": 2,
                    "charge": 50,
                    "Timer": "00:01:00:00",
                    "Haptics": "Flash",
                    "Name": "PillPal3"
                },
                  {
                    "id": 3,
                    "charge": 25,
                    "Timer": "00:01:00:00",
                    "Haptics": "Flash",
                    "Name": "PillPal4"
                },
            ]}
    },

    reducers:{
        addPal: (state, action) =>{
          //modify and append new pill-pal to existing inventory 
        },
        editPalTimer: (state, action, data)=>{ //payload is id
            state.value.pillPals[action.payload] = data.payload; 
        }

    }
})

export const {addPal} = myPillPalsSlice.actions; 
export const selecMyPillPals = (state) => state.myPillPals.value; 
export default myPillPalsSlice.reducer; 
