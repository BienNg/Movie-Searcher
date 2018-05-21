import React from 'react'
import './MainContent.css'
import MainRows from './MainRows'
import $ from 'jquery'

class MainContent extends React.Component {

    constructor() {
        super()
        this.state = {}
        const urls = {
            "popular" : "https://api.themoviedb.org/3/movie/popular?api_key=c9fa182d1bdc69a05cdaf873e0216d82",
            "action" : "https://api.themoviedb.org/3/genre/28/movies?api_key=c9fa182d1bdc69a05cdaf873e0216d82&language=en-US&include_adult=false&sort_by=created_at.asc",
            "comedy" : "https://api.themoviedb.org/3/genre/35/movies?api_key=c9fa182d1bdc69a05cdaf873e0216d82&language=en-US&include_adult=false&sort_by=created_at.asc",
            "horror" : "https://api.themoviedb.org/3/genre/27/movies?api_key=c9fa182d1bdc69a05cdaf873e0216d82&language=en-US&include_adult=false&sort_by=created_at.asc"

        }
        //this.getMainContent(urls[0])
        this.generateMainRows(urls)
    }

    generateMainRows(urls) {
        var mainRows = []
        const keys = Object.keys(urls)
        keys.forEach((key) => {
            mainRows.push(<MainRows key={key} url={urls[key]} />)
        }) 
        this.state = { rows: mainRows }
    }

    onClickPoster(id) {
        window.open("https://themoviedb.org/movie/" + id)
    }

    getMainContent(url) {
        const URL = url
        $.ajax({
            url: URL,
            success: (searchResult) => {
                console.log("Main Content Data fetched!")
                var items = []
                const results = searchResult.results
                results.forEach((movie) => {
                    const poster_path = "http://image.tmdb.org/t/p/w185" + movie.poster_path
                    items.push(<div key={movie.id} className="item"><img src={poster_path} alt="movie poster" onClick={() => this.onClickPoster(movie.id)} /></div>)
                    this.setState({ rows: items })
                })
            },
            error: (xhr, status, err) => {
                console.error("Fetching failed.")
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.rows}
            </div>
        )
    }
}
export default MainContent