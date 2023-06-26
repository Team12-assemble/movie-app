import React, {useState, useEffect} from "react"

function MainList () {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    
    useEffect (() => {
        fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
        .then((response) => response.json())
        .then((json) => {
            setMovies(json.data.movies)
            setLoading(false)
        });
    },[])
    
    return (
        <>
        {loading ? 
            <h1>Loading...</h1> : 
                movies.map(movie => 
                    <div key={movie.id}>
                        <img src={movie.medium_cover_image} />
                        <h2 class="hover_title">{movie.title}</h2>
                        <p class="hover_year">{movie.year}</p>
                    </div>
                    )}
        </>
    )

}

export default MainList;