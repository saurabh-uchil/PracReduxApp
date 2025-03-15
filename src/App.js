import React from 'react'
import "./App.css";

import Navbar from './Components/Navbar';
import Route from './Components/Route';
import SongsPage from './Components/SongsPage';
import MoviesPage from './Components/MoviesPage';

export default function App() {

    return (
    <>
      <Navbar />
      <Route path="/songs">
        <SongsPage />
      </Route>
      <Route path="/movies">
        <MoviesPage />
      </Route>
    </> 
    
  )
}
