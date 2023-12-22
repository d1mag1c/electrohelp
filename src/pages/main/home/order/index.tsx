import React, {useState} from 'react';
import {DescriptionBlock, FormBlock, ImgHome, OrderBlock, WrapperOrder} from "./style";
import PhoneInput from "react-phone-number-input/input";

const Order = () => {

    const [value, setValue] = useState<string>()

    return (
        <WrapperOrder>

            <OrderBlock>
                <ImgHome>
                    <img className="work_man" src="/img/electric.png" alt="background"/>
                </ImgHome>
                <DescriptionBlock>
                    <p>Нужен качественный электромонтаж?</p>
                    <p>Ищите специалистов с высокой квалификацией?</p>
                    <p>Наши монтажники помогут вам!</p>
                </DescriptionBlock>
                <FormBlock>
                    <span><img src="/img/help1.png" alt="Help"/></span>
                    <h2>Оставить заявку!</h2>
                    <form action="index.php" id="form_request" method="post">
                        <label htmlFor="name">Ваше имя:</label>
                        <input type="text" id="name" name="name"/>
                        <label>Телефон для связи:</label>
                        <PhoneInput
                            international
                            сountry="BY"
                            placeholder="+375..."
                            value={value}
                            onChange={setValue}/>
                        <label htmlFor="info">Дополнительная информация:</label>
                        <textarea name="info" id="info" cols={3} rows={6}/>
                        <button type="submit">Отправить</button>
                    </form>
                </FormBlock>
            </OrderBlock>
        </WrapperOrder>
    );
};

export default Order;