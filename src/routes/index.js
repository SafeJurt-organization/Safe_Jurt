import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header'; 
import Service from '../pages/ServiceAssistant/Service'; 
import MapPage from '../pages/MapPage/MapPage'; 
import Schedule from '../pages/Schedule/Schedule'; 
import Footer from '../components/Footer/Footer'; 
import CodeFamily from '../pages/code_family/CodeFamily';
import CreateAccount from '../pages/create_account/CreateAccount';
import Login from '../pages/login/Login';
import ConnectionFamily from '../pages/сonnection_family/ConnectionFamily';
import Role_Choice from '../pages/role_choice/RoleChoice';
import ForgotPassword from '../pages/forgot-password/ForgotPassword';
import '../app/app.scss'
export default function index() {
    return (
        <Router>
         <Header />
            <Routes>
                <Route path="/service" element={<Service />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/codeFamily" element={<CodeFamily />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/login" element={<Login />} />
                <Route path="/connection-family" element={<ConnectionFamily />} />
                <Route path="/role-choice" element={<Role_Choice />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
            <Footer />
        </Router>
    );
}   