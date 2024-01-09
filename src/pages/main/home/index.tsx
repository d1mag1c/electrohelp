import React from 'react';
import Order from "./order";
import Advantages from "./advantages";
import FixedFooter from "../../footer/fixedFooter";

const Home = () => {
    return (
        <>
            <Order/>
            <Advantages/>
            <FixedFooter/>
        </>
    );
};

export default Home;