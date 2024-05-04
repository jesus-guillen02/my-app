import React from 'react';

const Settings = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Settings</h1>
            <div>
                <h2>User Preferences</h2>
                <p><strong>Theme:</strong> <button>Dark</button> | <button>Light</button></p>
                <p><strong>Dashboard Layout:</strong> <button>Customize</button></p>
            </div>
            <div>
                <h2>Notification Settings</h2>
                <p><input type="checkbox" id="email" /> <label htmlFor="email">Email Notifications</label></p>
                <p><input type="checkbox" id="sms" /> <label htmlFor="sms">SMS Notifications</label></p>
                <p><strong>Alert Threshold:</strong> <input type="text" placeholder="Enter value" /></p>
            </div>
            <div>
                <h2>System Configuration</h2>
                <p><strong>Data Sync Frequency:</strong> <select><option>Every 10 minutes</option><option>Every 30 minutes</option></select></p>
                <p><input type="checkbox" id="updates" /> <label htmlFor="updates">Automatic Updates</label></p>
            </div>
            <div>
                <h2>Security Settings</h2>
                <p><button>Change Password</button></p>
                <p><input type="checkbox" id="2fa" /> <label htmlFor="2fa">Enable Two-Factor Authentication</label></p>
            </div>
        </div>
    );
};

export default Settings;
