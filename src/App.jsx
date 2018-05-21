import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'
import MainContent from './components/MainContent';


class App extends Component {

  constructor() {
    super()
    var mainRows = []
    mainRows.push(<MainContent/>)
    this.state = {rows: mainRows}
  }


  performSearch(searchTerm) {
    console.log("Perform Search startded.")

    const URL = "https://api.themoviedb.org/3/search/movie?api_key=c9fa182d1bdc69a05cdaf873e0216d82&query=" + searchTerm

    $.ajax({
      url: URL,
      success: (searchResults) => {
        console.log("Data fetched!")

        var movieRows = []

        const results = searchResults.results
        results.forEach((movie) => {
          movieRows.push(<MovieRow key={movie.id} movie={movie} />)
        })

        this.setState({ rows: movieRows })
      },
      error: (xhr, status, err) => {
        console.error("Fetching failed.")
      }
    })

  }

  /** Generating Main Page Content and add it to current state to show it. */
  showMainContent(){
    console.log("ShowMainContent called.")
    var mainRows = []
    mainRows.push(<MainContent/>)
    this.setState({rows: mainRows})
  }

  searchHandler(event) {
    const searchTerm = event.target.value
    if(searchTerm !== ""){
      this.performSearch(searchTerm)
    }else{
      this.showMainContent()
    }
  }

  logoListener(event) {
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
                <img className="appIcon" alt="App Icon" width="70" src="movie_db_icon.png" onClick={() => this.logoListener()} />
              </td>
              <td width="8">
              </td>
              <td>
                <h1>MovieDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input className="inputSearch" placeholder="Enter Search..." onChange={this.searchHandler.bind(this)} />
        {this.state.rows}
      </div>
    );
  }
}

export default App;
