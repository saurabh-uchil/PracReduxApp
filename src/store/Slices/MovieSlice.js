import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../Actions/reset";

//Song Movie
const songMovieSlice = createSlice({
    name:"songMovie",
    initialState: "",
    reducers:{
        setSongMovie(state,action){
            return action.payload;
        },
    },
    extraReducers(builder){
        builder.addCase(reset, (state, action)=>{
            console.log("called extra reducers");
            
            return action.payload
        });
    }
});

export const songMovieReducer = songMovieSlice.reducer
export const {setSongMovie} = songMovieSlice.actions;
