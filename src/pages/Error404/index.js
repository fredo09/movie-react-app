import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './../../components/Footer';
import ImgError404 from './../../assets/img/error404.png';
 
import './Error404.scss';

export const Error404 = () => {
    return (
        <>
            <div className="error404">
                <div className="error404__img">
                    <img alt="Error404" src={ImgError404} />
                </div>
                <Link to="/">
                    <p>Ir al inicio</p>
                </Link>
            </div>
            <Footer/>
        </>
    )
}
