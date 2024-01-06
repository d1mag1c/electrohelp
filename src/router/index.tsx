import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/main/home";
import Prices from "../pages/main/prices";
import Gallery from "../pages/main/gallery";
import Contacts from "../pages/main/contacts";
import AboutUs from "../pages/main/aboutUs";

const RouteComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='gallery' element={<Gallery/>}/>
            <Route path='prices' element={<Prices/>}/>
            <Route path='contacts' element={<Contacts/>}/>
            <Route path='aboutUs' element={<AboutUs/>}/>
        </Routes>
    );
};

export default RouteComponent;