import React from 'react'
import MovieCard from './MovieCard'

function MovieList({Movies}) {
    return (
    <div className="cards">
    {
        Movies.map((Movie)=><MovieCard Movies={Movie}  key={Movie.id}/>)
    }
    </div>
    )
}

export default MovieList