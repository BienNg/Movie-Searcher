import React from 'react'

class MovieRow extends React.Component{

    
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
              </td>
            </tr>
          </tbody>
        </table>
    }
}

export default MovieRow