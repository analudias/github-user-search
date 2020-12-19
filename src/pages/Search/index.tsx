import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Search = () => (
    <div className="search-content">
        <div className="profile-card">
                <h1>Encontre um perfil Github</h1>
                <input className="input-user" type="text"/>
        </div>
        <Link to="/result">
            <ButtonIcon text="Encontrar" />
        </Link>
    </div>
    
    
);

export default Search;