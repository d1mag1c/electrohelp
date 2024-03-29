import React, {useState} from 'react';
import {FormBlock, OrderBlock, OrderDescription, OrderMobileImg, WrapperOrder} from "./style";
import TemplateInput from "../../../../components/templateInput";
import {validatePhone, validateUserName} from "../../../../utils/validate";
import {sendContactForm} from "../../../../data/api";
import {timeoutMassage} from "../../../../utils/timeoutMassage";
import PopUpWindow from "./popUpWindow";

export type Values = {
    name: string,
    phone: string,
    info: string
}

const initValues = {name: "", phone: "", info: ""};

const Order = () => {

    const [value, setValue] = useState<Values>({
        name: "",
        phone: "",
        info: ""
    })

    const [errorName, setErrorName] = useState('')
    const [errorPhone, setErrorPhone] = useState('')
    const [successResponse, setSuccessResponse] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        setValue((props: Values) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }
    const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((props: Values) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value.replace(/[^0-9+]/ig, ''),
                })
        })
    }
    const DataForm = async () => {

        if (errorName === 'true' && errorPhone === 'true') {

            const getResponse =  await sendContactForm(value)
            setValue(initValues);
            setErrorName('');
            setErrorPhone('');

            setSuccessResponse(getResponse.status)
            timeoutMassage(setSuccessResponse)
        }
    }

    return (
        <WrapperOrder>

            <OrderBlock>
                <OrderDescription>
                    <p>Закажите услуги у нас и получите скидку после первого заказа до 20%! </p>
                </OrderDescription>
                <FormBlock>
                    <img src="/img/superhero.png" alt="superhero"/>
                    <h2>Оставить заявку!</h2>
                    <form action="" id="form_request">
                        <label htmlFor="name">Ваше имя <span>*</span></label>
                        <TemplateInput
                            type={'text'}
                            name={'name'}
                            id={'name'}
                            placeholder={'Ваше имя'}
                            value={value.name}
                            error={errorName}
                            errorChange={setErrorName}
                            validate={validateUserName}
                            onChange={handleChange}/>
                        <label htmlFor="phone">Телефон для связи <span>*</span></label>
                        <TemplateInput
                            type={'phone'}
                            name={'phone'}
                            id={'phone'}
                            placeholder={'+375...'}
                            value={value.phone}
                            error={errorPhone}
                            errorChange={setErrorPhone}
                            validate={validatePhone}
                            onChange={handleChangePhone}/>

                        {/*<PhoneInput*/}
                        {/*    international*/}
                        {/*    сountry="BY"*/}
                        {/*    placeholder="+375..."*/}
                        {/*    value={value.phone}*/}
                        {/*    onChange={handleChange}/>*/}


                        <label htmlFor="info">Дополнительная информация</label>
                        <textarea
                            name="info"
                            id="info"
                            rows={5}
                            cols={40}
                            value={value.info}
                            onChange={handleChange}
                        />
                        <div className={'button_form'} onClick={DataForm}>Отправить</div>
                        {successResponse && <PopUpWindow/>}
                    </form>
                </FormBlock>

                <OrderMobileImg>
                    <img src="/img/superhero_2.png" alt="superhero_2"/>
                </OrderMobileImg>
            </OrderBlock>
        </WrapperOrder>
    );
};

export default Order;