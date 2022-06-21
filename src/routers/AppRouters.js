
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import NavBars from '../components/NavBars';
import RegisterUser from '../components/RegisterUser';


const AppRouters = () => {

    return (
        <BrowserRouter>
        <NavBars/>
            <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/register" element={<RegisterUser/>} />
                    <Route path="/" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;