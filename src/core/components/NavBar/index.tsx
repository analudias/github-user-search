import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const NavBar = () => (
    <nav className="main-nav">
        <div className="main-title">
            <Link to="/" className="main-title-link">
                <h4>Bootcamp DevSuperior</h4>
            </Link>       
        </div>
    </nav>
);

export default NavBar;