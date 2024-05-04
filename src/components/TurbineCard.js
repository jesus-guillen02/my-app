import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TurbineCard.css';

const TurbineCard = ({ turbine }) => {
    let navigate = useNavigate();  // React Router navigation hook

    // Function to determine the color based on status
    const getStatusColor = () => {
        switch (turbine.status) {
            case 'Operational':
                return 'green';
            case 'Maintenance Needed':
                return 'yellow';
            case 'Critical':
                return 'red';
            default:
                return 'gray'; // Default case if status is undefined
        }
    };

    // Click handler to navigate to turbine details
    const handleClick = () => {
        navigate(`/turbine/${turbine.id}`);  // Navigate to the detailed page on click
    };

    return (
        <div className="turbine-card" onClick={handleClick} style={{ borderColor: getStatusColor() }}>
            <h3>Turbine {turbine.id}</h3>
            <p>Status: {turbine.status}</p>
            <div className="status-indicator" style={{ backgroundColor: getStatusColor() }}></div>
        </div>
    );
};

export default TurbineCard;
