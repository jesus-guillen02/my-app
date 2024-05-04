import React from 'react';
import './Profile.css'; // Make sure to create this CSS file for styling

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-info">
                <h1>About You</h1>
                <p>Name: Jane Doe</p>
                <p>Role: System Engineer</p>
                <p>Email: jane.doe@example.com</p>
                <p>Part of the Senior Design Team working on enhancing the efficiency and monitoring capabilities of wind turbines.</p>
            </div>
            <div className="profile-picture">
                <img src="/jesus-guillen-reduced.jpg" alt="Profile" /> {/* Ensure you have an image at this path */}
            </div>
        </div>
    );
};

export default Profile;
