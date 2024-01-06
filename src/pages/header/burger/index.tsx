import React, {FC} from 'react';
import {BurgerBlock} from "./style";
import {Link} from "react-router-dom";

export type stateType = {
    state: boolean;
}

const Burger: FC<stateType> = ({state}) => {
    return (
        <BurgerBlock $state={state}>
            <Link to='/'>Главная</Link>
            <Link to='gallery'>Галерея</Link>
            <Link to='prices'>Расценки</Link>
            <Link to='aboutUs'>О нас</Link>
            <Link to='contacts'>Контакты</Link>
        </BurgerBlock>
    );
};

export default Burger;