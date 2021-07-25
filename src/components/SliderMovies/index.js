/**
*   Component SliderComponent 
**/

import React from 'react';
import { Carousel, Button } from 'antd';
import { Loading } from './../Loading';
import { Link } from 'react-router-dom';

import './SliderMovies.scss';

export const SliderComponent = ({ movies }) => {
    const { result, loading, error } = movies 
    
    if (loading || !result) {
        return <Loading/>
    }

    const { results } = result;

    return (
        <Carousel autoplay className="slider-movies" >
            {results.map(movie => (
                <Movie movie={movie} key={movie.id} />
            ))}
        </Carousel>
    )
}

function Movie({ movie }) {
    const { id, backdrop_path, title, overview } = movie;
    
    const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    return (
        <div className="slider-movies__movie" style={{ backgroundImage: `url(${backdropPath})` }}>
            <div className="slider-movies__movie-info">
                <div>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                    <Link to={`/movie/${id}`}>
                        <Button type="primary">
                            Ver más...
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
