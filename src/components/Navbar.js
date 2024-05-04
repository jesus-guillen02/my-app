// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav style={{ background: '#007bff', color: 'white', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>Wind Turbine Dashboard</div>
            <div>
                <Link to="/" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Home</Link>
                <Link to="/turbine" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Turbine</Link>
                <Link to="/settings" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Settings</Link>
                <Link to="/profile" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Profile</Link>
            </div>
        </nav>
    );
};

export default Navbar;
