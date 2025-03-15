import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name:"songs",
    initialState: [],
    reducers: {
        addSongs(state, action){
            console.log(action);
            return [...state, action.payload]
        },
        removeSongs(state, action){
            const newState = state.filter((song)=>{
                return song.id !== action.payload
            });
            return [...newState];
        },
        editSongs(state, action){
            const newState = state.map((song)=>{
                if(song.id === action.payload){
                    return {...song, isEditable:!song.isEditable}
                }
                else{
                    return song;
                }
            });
            return [...newState];
        },
        updateSongs(state, action){
            const newState = state.map((song)=>{
                if(song.id === action.payload.id){
                    return {...action.payload}
                }
                else{
                    return song;
                }
            });
            return [...newState];
        }
    }
});

export const songsReducer = songsSlice.reducer;
export const {addSongs, removeSongs, editSongs, updateSongs} = songsSlice.actions;