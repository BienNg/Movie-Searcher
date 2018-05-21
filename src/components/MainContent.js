import React from 'react'
import $ from 'jquery'

class MainContent extends React.Component {

    constructor() {
        super()
        this.getMainContent()
    }

    getMainContent() {
        const urlPopular = "https://api.themoviedb.org/3/movie/popular?api_key=c9fa182d1bdc69a05cdaf873e0216d82"

        $.ajax({
            url: urlPopular,
            success: (searchResult) => {
                console.log("Main Content Data fetched!")

                const results = searchResult.results

                results.forEach((movie) => {
                    console.log(movie.title)
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
                Popular Movies: WORK IN PROGRESS
            </div>
        )
    }
}
export default MainContent