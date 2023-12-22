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
            <Link to='/'>Галерея</Link>
            <Link to='/'>Расценки</Link>
            <Link to='/'>О нас</Link>
            <Link to='/'>Контакты</Link>
        </BurgerBlock>
    );
};

export default Burger;