import {Values} from "../pages/main/home/order";
import {ValuesCall} from "../pages/footer/requestCall";

export const sendContactForm = async (data: Values | ValuesCall) => {

    let customer = '';
    let status = false;

    for (let [key, value]  of Object.entries(data)) {
        customer += `<b>${key}</b> : ${value} %0A`;
    }

    if(data) {

        try {
            const response = await fetch(`https://api.telegram.org/bot6758183466:AAGtGAazoFKG2te9Xu73hkWy4Wel4tek9ME/sendMessage?chat_id=-1001924615542&parse_mode=html&text=${customer}`);
            const data = await response.json();
            status = data.ok;

        } catch (error) {
            console.error('Error:', error);
        }

    }
    return {status}
}