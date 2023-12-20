import React, {useState} from 'react';
import {DescriptionBlock, FormBlock, HomeBlock, OrderBlock} from "./style";
import PhoneInput from "react-phone-number-input/input";

const Home = () => {

    const [value, setValue] = useState<string>()

    return (
        <HomeBlock>
            <img src="/img/electric.png" alt="background"/>
            <OrderBlock>
                <DescriptionBlock>
                    <p>Нужен качественный электромонтаж?</p>
                    <p>Ищите высококвалифицированных специалистов?</p>
                    <p>Наши монтажники помогут вам!</p>
                    <span><img src="/img/help1.png" alt="Help"/></span>
                </DescriptionBlock>
                <FormBlock>
                    <h2>Оставить заявку!</h2>
                    <form action="" id="form_request">
                        <label htmlFor="name">Ваше имя:</label>
                        <input type="text" id="name" name="name"/>
                        <label htmlFor="tel">Телефон для связи:</label>
                        <PhoneInput
                            specialLabel={''}
                            international
                            сountry="BY"
                            placeholder="+375..."
                            value={value}
                            onChange={setValue}/>

                        <label htmlFor="info">Дополнительная информация:</label>
                        <textarea name="info" id="info" cols={3} rows={6}/>
                        <button>Отправить</button>
                    </form>
                </FormBlock>
            </OrderBlock>
        </HomeBlock>
    );
};

export default Home;