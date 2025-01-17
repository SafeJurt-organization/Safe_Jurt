import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header'; 
import Service from '../pages/ServiceAssistant/Service'; 
import MapPage from '../pages/MapPage/MapPage'; 
import Schedule from '../pages/Schedule/Schedule'; 
import Footer from '../components/Footer/Footer'; 

export default function index() {
    return (
        <Router>
         {<Header />} 
            <Routes>
                <Route path="/service" element={<Service />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/Footer" element={<Footer />} />
            </Routes>
        </Router>
    );
}   