import React, {FC, useState} from 'react';
import {FooterFormBlock, PopUpFooter, RequestCallBlock} from "./style";
import TemplateInput from "../../../components/templateInput";
import {validatePhone} from "../../../utils/validate";
import {sendContactForm} from "../../../data/api";
import {timeoutMassage} from "../../../utils/timeoutMassage";

export type IState = {
    state: boolean

}

export type ValuesCall = {
    name: string,
    phone: string,
}

const initValues = {name: "", phone: ""};

const RequestCall: FC<IState> = ({state}) => {

    const [value, setValue] = useState<ValuesCall>({
        name: "",
        phone: "",
    })

    const [errorPhone, setErrorPhone] = useState('')
    const [successResponse, setSuccessResponse] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        setValue((props: ValuesCall) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }
    const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((props: ValuesCall) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value.replace(/[^0-9+]/ig, ''),
                })
        })
    }

    const DataForm = async () => {

        if (errorPhone === 'true') {

            const getResponse = await sendContactForm(value)
            setValue(initValues);
            setErrorPhone('');

            setSuccessResponse(getResponse.status)
            timeoutMassage(setSuccessResponse)
        }
    }
    return (
        <>

                <PopUpFooter $state={successResponse}><p>Отправлено! Мы скоро с Вами свяжемся!</p></PopUpFooter>
            <RequestCallBlock $state={state}>

                <FooterFormBlock>
                    <form id="form_request_call">
                        <TemplateInput
                            type={'text'}
                            name={'name'}
                            id={'name'}
                            placeholder={'Ваше имя (необязательно)'}
                            value={value.name}
                            onChange={handleChange}/>
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
                        <div className={'button_request_call'}
                             onClick={DataForm}>Отправить
                        </div>
                    </form>
                </FooterFormBlock>
            </RequestCallBlock>

        </>
    );
};

export default RequestCall;