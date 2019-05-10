import React from 'react';
import MovieList from './MovieList.jsx';
import moviesData from '../../../data/moviesData.js';
import Search from './Search.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: moviesData,
      filterMovies: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event, value) {
    let filterMoviesArr = this.state.movies.filter(movie =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      filterMovies: filterMoviesArr,
      movies: filterMoviesArr
    });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>Kevin's Amazing Movie List</h1>
        <Search handleSubmit={this.handleSubmit} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
