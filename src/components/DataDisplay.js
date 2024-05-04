// src/components/DataDisplay.js
import React from 'react';

const DataDisplay = ({ turbineId, data }) => {
    return (
        <div>
            <h2>Data for Turbine {turbineId}</h2>
            <p>Power Output: {data.powerOutput}</p>
            <p>Wind Speed: {data.windSpeed}</p>
            <p>Status: {data.status}</p>
            {/* Add charts or graphs here */}
        </div>
    );
};

export default DataDisplay;
