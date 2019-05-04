import React from 'react';
import MovieList from './MovieList.jsx';
import moviesData from '../../../data/moviesData.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies
    };
  }

  render() {
    return (
      <div className="container">
        <h1> Movies</h1>
        <MovieList movies={moviesData} />
      </div>
    );
  }
}

export default App;
