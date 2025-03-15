import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../Actions/reset";

//SongYear
const yearSlice = createSlice({
    name:"year",
    initialState: "",
    reducers:{
        setSongYear(state,action){
            return action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(reset, (state, action)=>{
            return action.payload
        });
    }
});

export const yearReducer = yearSlice.reducer;
export const {setSongYear} = yearSlice.actions;
