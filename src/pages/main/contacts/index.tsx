import React from 'react';
import {
    ContactsBlock,
    ContactsContent,
    ContactsEmail,
    ContactsIconsPhone,
    ContactsInstagram, ContactsRequisites,
    ContactsSocial, ContactsSocialWrapper
} from "./style";
import {Link} from "react-router-dom";

const Contacts = () => {


    return (
        <ContactsBlock>

            <ContactsContent>
                <ContactsSocial>
                    <h1>Контакты</h1>
                    <ContactsSocialWrapper>
                        <ContactsIconsPhone>
                            <p>+375 (29) 2110932</p>
                            <div>
                                <Link to={'tel:+375292110932'}>
                                    <img src="/img/icons/phone.png" alt="phone"/></Link>
                                <Link to={'https://t.me/d1mag1c'}>
                                    <img src="/img/icons/telegram.png" alt="telegram"/></Link>
                                <Link to={'viber://chat?number=375292110932'}>
                                    <img src="/img/icons/viber.png" alt="viber"/></Link>
                            </div>
                        </ContactsIconsPhone>
                        <ContactsEmail>
                            <Link to={'mailto:electrohelp.by@gmail.com'}>
                                <img src="/img/icons/email.png" alt="email"/></Link>
                            <p>electrohelp.by@gmail.com</p>
                        </ContactsEmail>
                        <ContactsInstagram>
                            <Link to={'https://www.instagram.com/electrohelp.by/'}><img src="/img/icons/instagram.png"
                                                                                        alt="instagram"/></Link>
                            <p>instagram.com/electrohelp.by</p>
                        </ContactsInstagram>
                    </ContactsSocialWrapper>
                </ContactsSocial>
                <ContactsRequisites>
                    <h1>Реквизиты</h1>
                    <div>
                        <p>ИП Зайцев Дмитрий Александрович</p>
                        <p>Адрес:</p>
                        <p>Республика Беларусь, 220082, г.Минск</p>
                        <p>УНП 193121773</p>
                        <p>Банковские реквизиты:</p>
                        <p>р/с BY22PJCB30130617791000000933 (BYN)</p>
                        <p>в ОАО «Приорбанк», 220002, </p>
                        <p>г.Минск, ул.В.Хоружей, 31А</p>
                        <p>BIC: PJCBBY2X</p>
                        <p>Телефоны: +375(29)211-09-32</p>
                        <p>E-mail: electrohelp.by@gmail.com</p>
                    </div>
                </ContactsRequisites>
            </ContactsContent>

        </ContactsBlock>
    );
};

export default Contacts;