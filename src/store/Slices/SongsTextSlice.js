import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../Actions/reset";

const songValueSlice = createSlice({
    name:"songtext",
    initialState: "",
    reducers:{
        setSong(state,action){
            return action.payload;
        }/* ,
        resetSong(state, action){
            return action.payload;
        } */
    },
    extraReducers(builder){
        builder.addCase(reset, (state,action)=>{
            return action.payload;
        })
    }
});

export const songValueReducer = songValueSlice.reducer;
export const {setSong} = songValueSlice.actions;

