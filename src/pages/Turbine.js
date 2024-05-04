import React from 'react';
import TurbineGrid from '../components/TurbineGrid'; // Ensure the path is correct

const Turbine = () => {
    const handleTurbineClick = (id) => {
        // Here you can handle the click, e.g., navigate to a detailed view
        console.log('Turbine clicked:', id);
        // Possible navigation could be implemented here
    };

    return (
        <div>
            <h1>Turbine Overview</h1>
            <TurbineGrid onClickTurbine={handleTurbineClick} />
        </div>
    );
};

export default Turbine;

