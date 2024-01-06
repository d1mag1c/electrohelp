import React, {useState} from 'react';
import {BurgerButton, FutureBlock, HeaderBlock, HeaderLinks, HeaderTitle, WindowClose} from "./style";
import Burger from "./burger";
import {Link} from "react-router-dom";

const Header = () => {

    const [state, setState] = useState(false);

    return (
        <>
            <HeaderBlock $state={state}>
                <HeaderTitle><a href="/">Electro<span>Help</span></a></HeaderTitle>

                <HeaderLinks>
                    <Link to='/'>Главная</Link>
                    <Link to='gallery'>Галерея</Link>
                    <Link to='prices'>Расценки</Link>
                    <Link to='aboutUs'>О нас</Link>
                    <Link to='contacts'>Контакты</Link>
                </HeaderLinks>
                <BurgerButton onClick={() => setState(!state)} $state={state}>
                    <span></span><span></span><span></span>
                </BurgerButton>
                <FutureBlock></FutureBlock>


            </HeaderBlock>
            {state && <WindowClose onClick={() => setState(false)} /> }
            <Burger state={state}/>
        </>
    )
};

export default Header;