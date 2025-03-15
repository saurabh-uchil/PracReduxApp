/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useDispatch, useSelector } from "react-redux";
import { updateSongs, updateSong, updateArtist, updateMovie, updateYear} from '../store';

import "../CSS/Songs.css"
import { useState } from "react";

export default function Songs({song, deleteSong, editSong}) {
   
    //console.log(JSON.stringify(song));
    
    const editedSong = useSelector((state)=>{
        return state.updateSong;
    }) ;

    let updatedSong = song.song;
    let updatedArtist = song.artist;
    let updatedMovie = song.movie;
    let updatedYear = song.year;

    console.log(JSON.stringify(editedSong));
         
      const dispatch = useDispatch();

      const [isSongEdited , setIsSongEdited]=  useState(false);
      const [isArtistEdited, setIsArtistEdited] =  useState(false);
      const [isMovieEdited , setIsMovieEdited] = useState(false);
      const [isYearEdited, setIsYearEdited ] =  useState(false);
    
      const handleSongChange = (e)=>{
        setIsSongEdited(true);
        updatedSong = updateSong(e.target.value);
        dispatch(updatedSong);
      }

      const handleArtistChange = (e)=>{
        setIsArtistEdited(true);
        updatedArtist = updateArtist(e.target.value);
        dispatch(updatedArtist); 
      }

      const handleMovieChange = (e)=>{
        setIsMovieEdited(true);
        updatedMovie = updateMovie(e.target.value);
        dispatch(updatedMovie);
      }

      const handleYearChange = (e)=>{
        setIsYearEdited(true);
        updatedYear = updateYear(e.target.value);
        dispatch(updatedYear);
      }
    


    const handleDelete = ()=>{
        deleteSong(song.id);
    }

    const handleEdit = ()=>{
        editSong(song.id);
    }

    let songText = song.song;
    let artistText = song.artist;
    let movieText = song.movie;
    let yearText = song.year;

    const hasUpdated = () =>{
        console.log(JSON.stringify(editedSong));
        if(isSongEdited){
            songText = editedSong.song;
        }

        if(isArtistEdited){
            artistText = editedSong.artist;
        } 

        if(isMovieEdited){
            movieText = editedSong.movie;
        } 

        if(isYearEdited){
           yearText = editedSong.song;
        } 
    }

    const handleSave = ()=>{
        hasUpdated();
        console.log(isSongEdited, isArtistEdited, isMovieEdited, isYearEdited);
        const updatedsong = updateSongs({id:song.id, song:songText, artist:artistText, movie:movieText, year:yearText, isEditable:false});
        console.log(song);
        dispatch(updatedsong);
        dispatch(updateSong(""))
        dispatch(updateArtist(""));
        dispatch(updateMovie(""));
        dispatch(updateYear(""));
        setIsSongEdited(false);
        setIsArtistEdited(false);
        setIsMovieEdited(false);
        setIsYearEdited(false);

    }

    const handleCancel = ()=>{
        editSong(song.id);
    }

    return (
        <div className="songCard">
            {!song.isEditable && <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Song: {song.song}</h5>
                    <p className="card-text">Id:{song.id}</p>
                    <p className="card-text">Artist: {song.artist}</p>
                    <p className="card-text">Movie: {song.movie}</p>
                    <p className="card-text">Year: {song.year}</p>
                    <div className='btns'>
                        <button className="btn btn-warning" onClick={handleEdit}>Edit</button>
                        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    </div>  
                </div>
            </div>}

            {song.isEditable && <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Edit Song</h5>
                    <p className="card-text">    
                    <input type="text" className="form-control" id="editSong" aria-describedby="editSong" placeholder="Enter song" defaultValue={song.song} onChange={handleSongChange}/>
                    </p>
                    <p className="card-text">    
                    <input type="text" className="form-control" id="editArtist" aria-describedby="editArtist" placeholder="Enter Artist" defaultValue={song.artist} onChange={handleArtistChange}/>
                    </p>
                    <p className="card-text">
                    <input type="text" className="form-control" id="editMovie" aria-describedby="editMovie" placeholder="Enter Movie Name" defaultValue={song.movie} onChange={handleMovieChange}/>
                    </p>
                    <p className="card-text">
                    <input type="text" className="form-control" id="editYear" aria-describedby="editYear" placeholder="Enter Year" defaultValue={song.year} onChange={handleYearChange}/>
                    </p>
                    <div className='btns'>
                        <button className="btn btn-warning" onClick={handleSave}>Save</button>
                        <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                    </div>  
                </div>
            </div>}
        </div>
      )
    }
