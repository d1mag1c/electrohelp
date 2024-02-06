import React, {useState} from 'react';
import {FixedFooterBlock, FooterFixedContent} from "./slyle";
import RequestCall from "../requestCall";
import {ButtonCall, SocialFooter, Tell} from "../style";
import {Link} from "react-router-dom";

const FixedFooter = () => {
    const [state, setState] = useState(false);
    return (
        <FixedFooterBlock>
            <RequestCall state={state}/>
            <FooterFixedContent>
                <ButtonCall onClick={() => setState(!state)}><p>{state ? 'Закрыть' : 'Заказать звонок!'}</p>
                </ButtonCall>
                <SocialFooter>
                    <Link to={'https://t.me/d1mag1c'}>
                        <img src="/img/icons/telegram.png" alt="telegram"/>
                    </Link>
                    <Link to={'viber://chat?number=375292110932'}>
                        <img src="/img/icons/viber.png" alt="viber"/>
                    </Link>
                    <Link to={'https://www.instagram.com/electrohelp.by/'}>
                        <img src="/img/icons/instagram.png" alt="instagram"/>
                    </Link>
                    <Tell>
                        <Link to={'tel:+375292110932'}>+375 (29) 2110932</Link>
                    </Tell>
                </SocialFooter>
            </FooterFixedContent>
        </FixedFooterBlock>
    );
};

export default FixedFooter;