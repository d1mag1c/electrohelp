import React, {useState} from 'react';
import {BurgerButton, FutureBlock, HeaderBlock, HeaderLinks, HeaderTitle, WindowClose} from "./style";
import Burger from "./burger";
import {Link} from "react-router-dom";

const Header = () => {

    const [state, setState] = useState(false);

    const SetStateFalse = () => {
        window.scroll({top: 0})
        if (state) {
            setState(false)

        }
    }
    return (
        <>
            <HeaderBlock $state={state}>
                <HeaderTitle><a href="/">Electro<span>Help</span></a></HeaderTitle>

                <HeaderLinks>
                    <Link to='/' onClick={SetStateFalse}>Главная</Link>
                    <Link to='gallery' onClick={SetStateFalse}>Галерея</Link>
                    <Link to='prices' onClick={SetStateFalse}>Расценки</Link>
                    <Link to='services' onClick={SetStateFalse}>Услуги</Link>
                    <Link to='contacts' onClick={SetStateFalse}>Контакты</Link>
                </HeaderLinks>
                <BurgerButton onClick={() => setState(!state)} $state={state}>
                    <span></span><span></span><span></span>
                </BurgerButton>
                <FutureBlock></FutureBlock>


            </HeaderBlock>
            {state && <WindowClose onClick={() => setState(false)} /> }
            <Burger state={state} setState={setState}/>
        </>
    )
};

export default Header;