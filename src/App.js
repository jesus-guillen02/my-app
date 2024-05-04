import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Turbine from './pages/Turbine';
import TurbineDetails from './pages/TurbineDetails'; // We'll create this component next
import Settings from './pages/Settings';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turbine" element={<Turbine />} />
        <Route path="/turbine/:id" element={<TurbineDetails />} />  // Dynamic route for turbine details
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
