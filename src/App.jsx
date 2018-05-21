import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel2';


class App extends Component {

  constructor(){
    super()
    console.log("Constructor called.")

    this.state = {}
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

  logoListener(event){
    console.log("Logo clicked.")
    window.open("https://www.themoviedb.org/")
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img className="appIcon" alt="App Icon" width="70" src = "movie_db_icon.png" onClick={() => this.logoListener()} />
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
