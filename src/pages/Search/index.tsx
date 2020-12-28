import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import './styles.css'; 

const Search = () => (
    <div className="search-content">
        <div className="profile-card">
            <h1>Encontre um perfil Github</h1>
            <input className="input-user" type="text"/>
            <Link to="/result">
                <ButtonIcon text="Encontrar" />
            </Link>
        </div>
        <div className="user-info">
            <ImageLoader />
            <InfoLoader />
        </div>
        
    </div>
    
    
);

export default Search;