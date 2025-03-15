/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Links from './Links'
import "../CSS/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Redux project</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                
                <li className="nav-item active">
                    <Links path="/songs">Songs</Links>
                </li>

                <li className="nav-item active">
                <Links path="/movies">Movies</Links>
                </li>
            </ul>
        </div>
</nav>
  )
}
