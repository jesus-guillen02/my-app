import React from 'react';
import { useParams } from 'react-router-dom';

const TurbineDetails = () => {
    const { id } = useParams();  // Retrieve the dynamic part of the URL

    // Here you can fetch data from a server using the `id`, for now, let's assume it's static
    const turbineData = {
        id,
        status: 'Operational',
        Wind_Speed: '25 M/s',
        Energy_Generated: '490 kW/h',
        Humidity: '39.567%',
        Temperature: '80.0F'
    };

    return (
        <div>
            <h1>Turbine Details: {id}</h1>
            <p>Status: {turbineData.status}</p>
            <p>Wind Speed: {turbineData.Wind_Speed}</p>
            <p>Energy: {turbineData.Energy_Generated}</p>
            <p>Humidity: {turbineData.Humidity}</p>
            <p>Temperature: {turbineData.Temperature}</p>
        </div>
    );
};

export default TurbineDetails;
