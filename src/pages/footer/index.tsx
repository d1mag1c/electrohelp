import React, {useState} from 'react';
import {ButtonCall, FooterBlock, FooterContent, ImgFooter, Tell} from "./style";
import RequestCall from "./requestCall";

const Footer = () => {

    const [state, setState] = useState(false);

    return (
        <FooterBlock>
            <RequestCall state={state}/>
            <FooterContent>
                <ImgFooter><img src="/img/lightbulb.svg" alt="dasda"/></ImgFooter>
                <ButtonCall onClick={() => setState(!state)}><p>{state ? 'Закрыть' : 'Заказать звонок!'}</p></ButtonCall>
                <Tell><p>+375 (29) 2110932</p></Tell>
            </FooterContent>
        </FooterBlock>
    );
};

export default Footer;