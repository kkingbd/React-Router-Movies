import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  render() {
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetail key={movie.id} movie={movie} {...this.props}/>
        ))}
      </div>
    );
  }
}
function MovieDetail(props){
  return (
    <div onClick = {() => {props.history.push(`/movies/${props.movie.id}`)}} className="movie-card">
      <MovieCard movie={props.movie}/>
    </div>
  );
}
