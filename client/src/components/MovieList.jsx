import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = props => (
  <div className="movies-list">
    {props.movies.map(movie => (
      <MovieListEntry key={movie.title} movie={movie} />
    ))}
  </div>
);

export default MovieList;
