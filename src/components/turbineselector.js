// src/components/TurbineSelector.js
import React from 'react';

const TurbineSelector = ({ turbines, onSelect }) => {
    return (
        <select onChange={e => onSelect(e.target.value)}>
            {turbines.map(turbine => (
                <option key={turbine.id} value={turbine.id}>
                    Turbine {turbine.id}
                </option>
            ))}
        </select>
    );
};

export default TurbineSelector;
