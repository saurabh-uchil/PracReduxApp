/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

export default function Movie({movie}) {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{movie}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
  )
}
