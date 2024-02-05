import React, {FC} from 'react';
import {BurgerBlock} from "./style";
import {Link} from "react-router-dom";

export type stateType = {
    state: boolean;
    setState : React.Dispatch<React.SetStateAction<boolean>>;
}


const Burger: FC<stateType> = ({state, setState}) => {

    const SetStateFalse = () => {
        window.scroll({top: 0})
        if (state) {
            setState(false)

        }
    }

    return (
        <BurgerBlock $state={state}>
            <Link to='/' onClick={SetStateFalse}>Главная</Link>
            <Link to='gallery' onClick={SetStateFalse}>Галерея</Link>
            <Link to='prices' onClick={SetStateFalse}>Расценки</Link>
            <Link to='services' onClick={SetStateFalse}>Услуги</Link>
            <Link to='contacts' onClick={SetStateFalse}>Контакты</Link>
        </BurgerBlock>
    );
};

export default Burger;