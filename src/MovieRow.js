import React from 'react'
import './MovieRows.css'

class MovieRow extends React.Component{

  viewMovie(){
    console.log("View movie clicked.")
    window.open("https://themoviedb.org/movie/" + this.props.movie.id)
  }
    
    render(){
        return <table key={this.props.movie.id}>
          <tbody>
            <tr>
              <td>
                <img src={"http://image.tmdb.org/t/p/w185" + this.props.movie.poster_path} alt="Movie Poster"/>
              </td>
              <td>
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.overview}</p>
                <input className="btn blue" type="button" value="view" onClick={this.viewMovie.bind(this)}/>
              </td>
            </tr>
          </tbody>
        </table>
    }
}

export default MovieRow