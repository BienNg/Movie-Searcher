import React from 'react'
import $ from 'jquery'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class MainRows extends React.Component {

    constructor(probs) {
        super(probs)
        this.state = {}
        this.getMainContent(this.props.url)
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
                <OwlCarousel
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

export default MainRows