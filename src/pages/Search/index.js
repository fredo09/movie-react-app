import React, { useState, useEffect } from 'react';
import { Col, Row, Input } from 'antd';
import { withRouter } from 'react-router-dom';
import { MovieCatalogo } from './../../components/MovieCatalog';
import { Footer } from './../../components/Footer';
import { API_KEY, PATH_API } from './../../utils';
import queryString from 'query-string';

import './Search.scss';

const Search = ({ location, history }) => {

  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;
      const response = await fetch(
        `${PATH_API}/search/movie?api_key=${API_KEY}&language=es-ES&query=${s}&page=1`
      );
      const movies = await response.json();

      setSearchValue(s);
      setMovieList(movies);
    })();
  }, [location.search]);

  const onChangeSerach = e => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    history.push(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  return (
      <Row>
          <h1>Busca tu película</h1>
      <Col span={12} offset={6} className="search">
        
        <Input value={searchValue} onChange={onChangeSerach} />
      </Col>
      {movieList.results && (
        <Row>
          <Col span={24}>
            <MovieCatalogo movies={movieList} />
          </Col>
        </Row>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}


//Usando el withRouter
export default withRouter(Search);