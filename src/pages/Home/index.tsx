import React from 'react';
import './styles.css';
import ButtonIcon from 'core/components/ButtonIcon';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="home-content">
        <div className="text-title">
            <h1 className="title-style">
                Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
            </h1>
        </div>
        <div className="text-subtitle">
            <h6>
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br/>
                Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto. <br/>
                Este design foi adaptado a partir de Ant Design System for Figma,
                de Mateusz Wierzbicki: antforfigma@gmail.com
            </h6>
        </div>
        <Link to="/search">
            <ButtonIcon />
        </Link>
        
    </div>
);

export default Home;