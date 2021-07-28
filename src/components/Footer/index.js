/**
*   Componente Footer 
**/

import React from 'react';
import { Layout } from 'antd';

import './Footer.scss';

export const Footer = () => {

    const { Footer } = Layout;

    return (
        <Footer className="footer">
            <p>Fredy Vazquez &copy; 2021</p>
        </Footer>
    )
}
