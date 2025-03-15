import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../Actions/reset";

//Artist
const artistSlice = createSlice({
    name:"artist",
    initialState: "",
    reducers:{
        setArtist(state,action){
            return action.payload;
        }
    },
    extraReducers(builder){
        builder.addCase(reset, (state, action)=>{
            return action.payload
        });
    }
});

export const artistReducer = artistSlice.reducer;
export const {setArtist} = artistSlice.actions;
