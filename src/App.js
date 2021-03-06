import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{

  state = {
    isLoading : true,
    movies: []
  };

  getMovies = async() => {
    const {data : {data : {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({movies:movies, isLoading:false})
  }

  componentDidMount(){
    this.getMovies();
  }
  render(){
    const{isLoading, movies} = this.state;
    return (
      <div>
        <h1>{isLoading ? "Loading" : movies.map(movie =>{
          console.log(movie.title);
          return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
        })}</h1>
      </div>
    )
  };
}

export default App;
