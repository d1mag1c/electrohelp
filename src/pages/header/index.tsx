import React from 'react';
import {HeaderBlock, HeaderLinks, HeaderTitle} from "./style";

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle><a href="/">Electro<span>Help</span></a></HeaderTitle>
            <HeaderLinks>
                <div><p>Главная</p></div>
                <div><p>Галерея</p></div>
                <div><p>Расценки</p></div>
                <div><p>О нас</p></div>
                <div><p>Контакты</p></div>
            </HeaderLinks>
            <div></div>
        </HeaderBlock>
    );
};

export default Header;