import { configureStore} from "@reduxjs/toolkit";
import { songsReducer, addSongs, removeSongs, editSongs, updateSongs} from "./Slices/SongSlice";
import { songValueReducer, setSong } from "./Slices/SongsTextSlice";
import { artistReducer, setArtist } from "./Slices/ArtistSlice";
import { songMovieReducer, setSongMovie} from "./Slices/MovieSlice";
import { yearReducer, setSongYear } from "./Slices/YearSlice";
import { updateSongsReducer, updateSong, updateArtist, updateMovie, updateYear } from "./Slices/UpdateSlice";
import { reset } from "./Actions/reset";


// eslint-disable-next-line no-unused-vars

const store = configureStore({
    reducer:{
        song:songsReducer,
        setsong:songValueReducer,
        artist:artistReducer,
        songmovie:songMovieReducer,
        songyear:yearReducer,
        updateSong:updateSongsReducer
    }
});


export {store, reset, addSongs, removeSongs, editSongs, updateSongs, setSong, setArtist, setSongMovie, setSongYear, updateSong, updateArtist, updateMovie, updateYear};
//export const {addSongs, removeSongs, editSongs, updateSongs} = songsSlice.actions;
//export const {setSong} = songValueSlice.actions;
//export const {setArtist} = artistSlice.actions;
//export const {setSongMovie} = songMovieSlice.actions;
//export const {setSongYear} = yearSlice.actions;
//export const {updateSong, updateArtist, updateMovie, updateYear} = updateSongsSlice.actions;