import { configureStore, createSlice } from "@reduxjs/toolkit";



// eslint-disable-next-line no-unused-vars
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

const songValueSlice = createSlice({
    name:"songtext",
    initialState: "",
    reducers:{
        setSong(state,action){
            return action.payload;
        },
        resetSong(state, action){
            return action.payload;
        }
    }
});

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
        builder.addCase("songtext/resetSong", (state, action)=>{
            return action.payload
        });
    }
});


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
        builder.addCase("songtext/resetSong", (state, action)=>{
            console.log("called extra reducers");
            
            return action.payload
        });
    }
});


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
        builder.addCase("songtext/resetSong", (state, action)=>{
            return action.payload
        });
    }
});


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



const movieSlice = createSlice({
    name:"movies",
    initialState: [],
    reducers: {
        addMovie(state, action){
            state.push(action.payload);
        },
        removeMovie(state, action){
            
        }
    }
});


const store = configureStore({
    reducer:{
        song:songsSlice.reducer,
        setsong:songValueSlice.reducer,
        artist:artistSlice.reducer,
        songmovie:songMovieSlice.reducer,
        songyear:yearSlice.reducer,
        movie:movieSlice.reducer,
        updateSong:updateSongsSlice.reducer
    }
});


export {store}
export const {addSongs, removeSongs, editSongs, updateSongs} = songsSlice.actions;
export const {setSong, resetSong} = songValueSlice.actions;
export const {setArtist} = artistSlice.actions;
export const {setSongMovie} = songMovieSlice.actions;
export const {setSongYear} = yearSlice.actions;
export const {updateSong, updateArtist, updateMovie, updateYear} = updateSongsSlice.actions;