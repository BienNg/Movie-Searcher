import React from 'react'
import './MainContent.css'
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class MainContent extends React.Component {

    constructor() {
        super()
        this.state = {}
        this.getMainContent()
    }

    getMainContent() {
        const urlPopular = "https://api.themoviedb.org/3/movie/popular?api_key=c9fa182d1bdc69a05cdaf873e0216d82"

        $.ajax({
            url: urlPopular,
            success: (searchResult) => {
                console.log("Main Content Data fetched!")
                var items = []
                const results = searchResult.results
                results.forEach((movie) => {
                    const poster_path = "http://image.tmdb.org/t/p/w185" + movie.poster_path
                    console.log(poster_path)
                    items.push(<div key={movie.id} className="item"><img src={poster_path} alt="movie poster" /></div>) 
                    this.setState({rows: items})
                })

                console.log("ITEMS LENGTH :::: " + items.length)
                items.forEach((item) => {
                    console.log(item)
                })
            },
            error: (xhr, status, err) => {
                console.error("Fetching failed.")
            }
        })
    }

    render() {
        return (
            <div><OwlCarousel
                className="owl-carousel owl-theme"
                loop={true}
                margin={5}
                items={7}
                nav={true}>
                {this.state.rows}
            </OwlCarousel>
            </div>
        )
    }
}
export default MainContent