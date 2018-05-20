import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {

  constructor(){
    super()
    console.log("Constructor called.")

    this.state = {}
    /* const movies = [
      {id: 0, title: "Avengers: Infinity War", poster_path:  "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",overview: "Die zerstrittenen Avengers sehen sich der größten Bedrohung ausgesetzt, die sie jemals erlebt haben. Sie müssen es mit dem Titanen Thanos aufnehmen, der mithilfe der Infinity-Steine die gesamte Galaxie unterjochen will."},
      {id: 1, title: "Marvel's the Avengers", poster_path: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/ifdNNg3rpOgitwSpgeLOu1HY6r7.jpg", overview: "Nick Fury ist der Anführer der Organisation S.H.I.E.L.D., einer internationalen Friedensorganisation."}
    ]

    var movieRows = []

    movies.forEach((movie) => {
      const movieRow = <MovieRow movie={movie}/>

      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows} */
  }


  performSearch(searchTerm){
    console.log("Perform Search startded.")

    const URL = "https://api.themoviedb.org/3/search/movie?api_key=c9fa182d1bdc69a05cdaf873e0216d82&query=" + searchTerm

    $.ajax({
      url: URL,
      success: (searchResults) => {
        console.log("Data fetched!")
        
        var movieRows = []

        const results = searchResults.results
        results.forEach((movie) => {
          movieRows.push(<MovieRow key={movie.id} movie = {movie}/>)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Fetching failed.")
      }
    })
    
  }

  searchHandler(event){
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="App Icon" width="70" src = "movie_db_icon.png"/>
              </td>
              <td width="8">
              </td>
              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>  


      <input className="inputSearch" placeholder="Enter Search..." onChange={this.searchHandler.bind(this)}/>

      {this.state.rows}
      </div>
    );
  }
}

export default App;
