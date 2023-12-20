import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/main/home";

const RouteComponent = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    );
};

export default RouteComponent;