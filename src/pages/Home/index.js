import React from 'react';
import { SliderComponent } from './../../components/SliderMovies';
import { useFetch } from './../../hooks/useFetch';

import {API_KEY, PATH_API} from './../../utils';

export const Home = () => {

    const data = useFetch(
        `${PATH_API}/movie/now_playing?api_key=${API_KEY}&language=en-ES&page=1`
    );

    return (
        <>
            <SliderComponent movies={ data }/>
        </>
    )
}
