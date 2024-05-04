// src/pages/Home.js
import React from 'react';
import '../components/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="logo-container">
                    <img src="/logo.png" alt="Wind Turbine Dashboard Logo" className="home-logo" />
                </div>
                <div className="text-container">
                    <p>
                        This project is the culmination of efforts by the senior design team at our university...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;

