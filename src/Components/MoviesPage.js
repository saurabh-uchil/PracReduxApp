import React from 'react'
import "../CSS/MoviesPage.css";

export default function MoviesPage() {
    const handleMovies = () =>{

    }

    const handleMovieChange = () =>{

    }
    
  return (
    <div className='MoviesPage'>
      <h2>Movies Playlist</h2>
      <form>
        <div className="form-group">
          <label htmlFor="song">Movie: </label>
          <input type="text" className="form-control" id="song" aria-describedby="song" placeholder="Enter a song" onChange={handleMovieChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="movie">Movie Description: </label>
          <input type="text" className="form-control" id="movie" aria-describedby="movie" placeholder="Enter a movie" />
        </div>
        
        <button type="submit" className="btn btn-primary" onClick={handleMovies}>Add</button>

      </form>

      {/* {songsArray.length > 0 && 
      
      <div className='moviesDiv'>
        {song}
      </div>
      } */}
    </div>
  )
}
