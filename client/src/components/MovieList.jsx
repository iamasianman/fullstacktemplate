import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';
// what is the point of this list
// this is to list out movie list line by line
// this is just to show the stuff
// we can map this out

const MovieList = props => (
  <div className="movie-list">
    {props.movies.map(movie => (
      <MovieListEntry key={movie.title} movie={movie} />
    ))}
  </div>
);

export default MovieList;
