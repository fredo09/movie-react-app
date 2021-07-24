import React from 'react';

import { useFetch } from './../../hooks/useFetch';

export const Home = () => {

    const movies = useFetch('https://api.themoviedb.org/3/movie/popular?api_key=ad515cdeec05711a1332f882f0b48560&language=en-US&page=1');
    console.log(movies)
    return (
        <div>
            <h1>Estamos en home</h1>
        </div>
    )
}
