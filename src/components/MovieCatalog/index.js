/**
*   Component MovieCatalog  
**/

import React from 'react';
import { Col, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';

import './MovieCatalog.scss';

export const MovieCatalogo = ({ movies }) => {
    
    const { results } = movies;

    // retornamos un map con las peliculas ya mapeadas
    return results.map(movie => (
        <Col key={movie.id} xs={4} className="movie-catalogo">
            <MovieCard movie={ movie}/>
        </Col>
    ))
}

function MovieCard({ movie }) {

    const { id, title, backdrop_path, overview } = movie;

    const { Meta } = Card;

    const posterPath = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

    const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <Link to={`/movie/${id}`}>
            <Card
                hoverable
                style={{ width: 280 }}
                cover={<img alt={title} src={posterPath} />}
                actions={[<Icon type="eye" key="eye" />]}
            >
                <Meta title={title} description={ truncate(overview, 50)}/>
                
            </Card>
        </Link>
    );
}
