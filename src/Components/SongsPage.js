import { useDispatch, useSelector } from 'react-redux';
import { addSongs, setSong, setArtist, setSongMovie, setSongYear, removeSongs, editSongs } from '../store';
import Songs from '../Components/Songs';
import "../CSS/SongsPage.css";

export default function SongsPage() {

      const songText = useSelector((state)=>{
        return state.setsong;
      });

      const artistText = useSelector((state)=>{
        return state.artist;
      });

      const movieText = useSelector((state)=>{
        return state.songmovie;
      });

      const yearText = useSelector((state)=>{
        return state.songyear;
      });
    
      const songsArray = useSelector((state)=>{
        return state.song;
      });
    
   
      const dispatch = useDispatch();
    
      const handleSongChange = (e)=>{
        const song = setSong(e.target.value);
        dispatch(song);
      }

      const handleArtistChange = (e)=>{
        const artist = setArtist(e.target.value);
        dispatch(artist); 
      }

      const handleMovieChange = (e)=>{
        const movie = setSongMovie(e.target.value);
        dispatch(movie);
      }

      const handleYearChange = (e)=>{
        const year = setSongYear(e.target.value);
        dispatch(year);
      }
    
      const handleSongs = (e) =>{
        console.log("Clicled on add");
        console.log("Songs Text: "+songText);
        e.preventDefault();
        const song = addSongs({id:Math.floor(Math.random()*500), song:songText, artist:artistText, movie:movieText, year:yearText, isEditable:false});
        console.log(song);
        dispatch(song);
        dispatch(setSong(""))
        dispatch(setArtist(""));
        dispatch(setSongMovie(""));
        dispatch(setSongYear(""));
      }
      
      const deleteSong = (id) =>{
        const remove = removeSongs(id);
        dispatch(remove);
      }

      const editSong = (id) =>{
        const edit = editSongs(id);
        dispatch(edit);
      }

      const song = songsArray.map((s, i)=>{
        return <Songs key={i} song={s} deleteSong={deleteSong} editSong={editSong}/>
      });
 
  return (
    <div className='SongsPage'>
      <h2>Songs Playlist</h2>
      <form>
        <div className="form-group">
          <label htmlFor="song">Song: </label>
          <input type="text" className="form-control" id="song" aria-describedby="song" placeholder="Enter a song" onChange={handleSongChange} value={songText}/>
        </div>

        <div className="form-group">
          <label htmlFor="artist">Artist: </label>
          <input type="text" className="form-control" id="artist" aria-describedby="artist" placeholder="Enter the artist" onChange={handleArtistChange} value={artistText}/>
        </div>
        
        <div className="form-group">
          <label htmlFor="movie">Movie: </label>
          <input type="text" className="form-control" id="movie" aria-describedby="movie" placeholder="Enter the movie" onChange={handleMovieChange} value={movieText}/>
        </div>

        <div className="form-group">
          <label htmlFor="year">Year: </label>
          <input type="text" className="form-control" id="year" aria-describedby="year" placeholder="Enter the year" onChange={handleYearChange} value={yearText}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSongs}>Add</button>

      </form>

      {songsArray.length > 0 && 
      
      <div className='songsDiv'>
        {song}
      </div>
      }
    </div>
  )
}
