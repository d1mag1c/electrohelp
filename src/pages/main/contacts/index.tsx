import React from 'react';
import {
    ContactsBlock,
    ContactsContent,
    ContactsEmail, ContactsGoogleMap,
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
                            <div>
                                <Link to={'tel:+375292110932'}><img src="/img/icons/phone.png" alt="phone"/></Link>
                                <Link to={'https://t.me/d1mag1c'}><img src="/img/icons/telegram.png"
                                                                       alt="telegram"/></Link>
                                <Link to={'viber://chat?number=375292110932'}><img src="/img/icons/viber.png"
                                                                                   alt="viber"/></Link>
                            </div>
                            <p>+375 (29) 2110932</p>
                        </ContactsIconsPhone>
                        <ContactsEmail>
                            <Link to={'mailto:electrohelp.by@gmail.com'}><img src="/img/icons/email.png"
                                                                              alt="email"/></Link>
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
                        <p>Республика Беларусь, 220121, г.Минск</p>
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

            <ContactsGoogleMap>
                <iframe
                    title="googleMap"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.6497644212113!2d27.479038964146334!3d53.909362486496605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbc53670090d95%3A0x6d6f1601259b2831!2z0KHQv9C-0YDRgtC40LLQvdCw0Y8!5e0!3m2!1sru!2sby!4v1705954912173!5m2!1sru!2sby"
                    width="100%" height="100%" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </ContactsGoogleMap>
        </ContactsBlock>
    );
};

export default Contacts;