import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/main/home";
import Prices from "../pages/main/prices";
import Gallery from "../pages/main/gallery";
import Contacts from "../pages/main/contacts";
import Services from "../pages/main/services";
import Index from "../pages/main/gallery/selectImage";

const RouteComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='gallery' element={<Gallery/>}/>
            <Route path='gallery/:name' element={<Index/>}/>
            <Route path='prices' element={<Prices/>}/>
            <Route path='contacts' element={<Contacts/>}/>
            <Route path='services' element={<Services/>}/>
        </Routes>
    );
};

export default RouteComponent;