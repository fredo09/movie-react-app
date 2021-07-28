import React from 'react';
import { Row, Col } from 'antd';
import { SliderComponent } from './../../components/SliderMovies';
import { MovieList } from './../../components/MovieList'
import { useFetch } from './../../hooks/useFetch';
import { Footer } from './../../components/Footer';
import {API_KEY, PATH_API} from './../../utils';

export const Home = () => { 

    const newMovies = useFetch(
        `${PATH_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`
    );

    const popularMovies = useFetch(
        `${PATH_API}/movie/popular?api_key=${API_KEY}&language=en-ES&page=1`
    );

    const topMovies = useFetch(
        `${PATH_API}/movie/top_rated?api_key=${API_KEY}&language=en-ES&page=1`
    );

    return (
        <>
            <SliderComponent movies={newMovies} />
            <Row>
                <Col span={12}>
                    <MovieList title="Peliculas Populares" movies={popularMovies}/>
                </Col>
                <Col span={12}>
                    <MovieList title="Top Peliculas" movies={topMovies}/>
                </Col>
            </Row>
            <Footer />
        </>
    )
}
