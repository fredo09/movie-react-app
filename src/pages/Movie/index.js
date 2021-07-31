import React from 'react';
import { Row, Col, Button, Tooltip } from 'antd';
import { useParams } from 'react-router-dom';
import { useFetch } from './../../hooks/useFetch';
import { API_KEY, PATH_API,  } from './../../utils';
import { Loading } from './../../components/Loading';
import moment from 'moment';

import './Movie.scss';

export const Movie = () => {
    const { id } = useParams();
    
    const detailsMovie = useFetch(
        `${PATH_API}/movie/${id}?api_key=${API_KEY}&language=en-ES`
    );

    const { loading, result } = detailsMovie;
    
    if (loading || !result) {
        return <Loading/>
    }

    return <RenderMovie infoMovie={ result }/>
}

function RenderMovie({ infoMovie }) {

    const { backdrop_path, poster_path } = infoMovie;
    const pathDrop = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    return (
        <div className="movie" style={{ backgroundImage: `url('${pathDrop}')` }}>
            <div className="movie__dark"/>
            <Row>
                <Col span={8} offset={3} className="movie__poster">
                    <PosterMovie poster={ poster_path }/>
                </Col>
                <Col span={10} className="movie__info">
                    <MovieInfo movieInfo={ infoMovie}/>
                </Col>
            </Row>
        </div>
    );
}

function PosterMovie({ poster }) {
    console.log(poster)
    const posterImage = `https://image.tmdb.org/t/p/original${poster}`;
    console.log(posterImage);

    return (
        <div style={{backgroundImage: `url('${posterImage}')`}}></div>
    );
}

function MovieInfo({ movieInfo }) {

    const { id, title, release_date, overview, genres, vote_average } = movieInfo;
    
    return (
        <>
            <div className="movie__info-header">
                <h1>
                    {title}
                    <span>
                        { moment(release_date, "YYYY-MM-DD").format("YYYY") }
                    </span>
                </h1>
                <Button>
                    Ver trailer
                </Button>
            </div>
            <div className="movie__info-content">
                <h3>
                    Información General
                </h3>
                <p>
                    { overview }
                </p>

                <span>
                    Valoracion: 
                    {vote_average}
                    <Button shape="circle" icon="star"/>
                </span>

                <h3>
                    Generos
                </h3>
                <div>
                    {genres.map(genro => {
                        return (
                            <Tooltip color="#fff" title={genro.name} key={genro.id}>
                                <Button>{genro.name}</Button>
                            </Tooltip>
                        )
                    })}
                </div>
            </div>
        </>
    );
}
