import React from 'react';
import TurbineCard from './TurbineCard';
import './TurbineGrid.css';

const calculatePerformanceDetails = (turbine) => {
    let score = 0;
    const maxScore = 100;

    // Efficiency contributes up to 50 points
    score += turbine.efficiency * 0.5;

    // Response time contributes up to 20 points (faster response, higher score)
    score += (24 - Math.min(turbine.responseTime, 24)) / 24 * 20;

    // Normalize score to a ratio
    const performanceRatio = score / maxScore;

    // Determine status based on performance ratio
    let status = 'Critical'; // Assume the worst
    if (performanceRatio > 0.75) {
        status = 'Operational';
    } else if (performanceRatio > 0.4) {
        status = 'Maintenance Needed';
    }

    return {
        ...turbine,
        performanceRatio,
        status
    };
};

const TurbineGrid = () => {
    const turbines = [
        { id: 1, efficiency: 92, responseTime: 6 },
        { id: 2, efficiency: 85, responseTime: 9 },
        { id: 3, efficiency: 65, responseTime: 12 },
        { id: 4, efficiency: 88, responseTime: 3 },
        { id: 5, efficiency: 90, responseTime: 8 },
        { id: 6, efficiency: 75, responseTime: 20 },
        { id: 7, efficiency: 95, responseTime: 4 },
        { id: 8, efficiency: 70, responseTime: 16 },
        { id: 9, efficiency: 55, responseTime: 22 }
    ].map(calculatePerformanceDetails);

    return (
        <div className="grid-container">
            {turbines.map(turbine => (
                <TurbineCard key={turbine.id} turbine={turbine} />
            ))}
        </div>
    );
};

export default TurbineGrid;
