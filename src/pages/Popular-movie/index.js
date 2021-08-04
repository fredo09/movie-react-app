import React,  { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { Footer } from './../../components/Footer';
import { MovieCatalogo } from './../../components/MovieCatalog';
import { Loading } from './../../components/Loading';
import { API_KEY, PATH_API } from './../../utils';
import { Paginate } from './../../components/Paginate';

export const PopularMovie = () => {
    
    const [movieList, setMovieList] = useState({});
    
    /**
    *   Estados para funcionalidad de paginacion 
    **/
    // usuamos este estado para saber en que numero de paginacion esta asignada
    const [page, setPage] = useState(1);
    
    useEffect(() => {
        (async () => {
            const response = await fetch(
                `${PATH_API}/movie/popular?api_key=${API_KEY}&lenguage=es-ES&page=${page}`
            );
            
            const movies = await response.json();
            setMovieList(movies);
        })()
    }, [page]);

    const onChangePage = (page) => setPage(page);

    return (
        <Row>
            <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
                <h1 style={{ fontSize: 35, fontWeight: "bold" }}>
                    Peliculas Populares
                </h1>
            </Col>
            {movieList.results ? (
                <>
                    <Col span="24">
                        <MovieCatalogo movies={movieList} />
                    </Col>
                    <Col span="24">
                        <Paginate
                            currentPage={movieList.page}
                            totalItems={movieList.total_results}
                            onChengePage={onChangePage}
                        />
                    </Col>
                </>
            ) : (
                <Col span="24">
                    <Loading />
                </Col>
            )}
            <Col span="24">
                <Footer />
            </Col>
        </Row>
    );
}
