import { createSlice } from "@reduxjs/toolkit"

const updateSongsSlice = createSlice({
    name:"editSong",
    initialState:{},
    reducers:{
    updateSong(state, action){
        return {...state, song:action.payload}
    },
    updateArtist(state, action){
        return {...state, artist:action.payload}
    },
    updateMovie(state, action){
        return {...state, movie:action.payload}
    },
    updateYear(state, action){
        return {...state, year:action.payload}
    }

    }
})

export const updateSongsReducer = updateSongsSlice.reducer;
export const {updateSong, updateArtist, updateMovie, updateYear} = updateSongsSlice.actions;