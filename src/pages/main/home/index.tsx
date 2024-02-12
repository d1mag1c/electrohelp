import React from 'react';
import Order from "./order";
import Advantages from "./advantages";
import HomeTitle from "./homeTitle";
import SEO from "../../../constants/SEO";

const Home = () => {
    return (
        <>
            <SEO
                title={'Электромонтажные работы в Минске и Минской области! Услуги электрика!'}
                description={'Нужен качественный электромонтаж? Мы поможем Вам! Замена электропроводки, автоматов, освещения, электромонтажные работы любой сложности!'}/>
            <HomeTitle/>
            <Order/>
            <Advantages/>
        </>
    );
};

export default Home;