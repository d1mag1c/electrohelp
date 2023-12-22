import React from 'react';
import {ButtonCall, FooterBlock, ImgFooter, Tell} from "./style";

const Footer = () => {
    return (
        <FooterBlock>
            <ImgFooter><img src="/img/lightbulb.svg" alt="dasda"/></ImgFooter>
            <ButtonCall><p>Заказать звонок!</p></ButtonCall>
            <Tell><p>+375 (29) 2110932</p></Tell>
        </FooterBlock>
    );
};

export default Footer;