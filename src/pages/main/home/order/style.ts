import styled from "styled-components";
import {motion} from "framer-motion";
import {animateRightX} from "../../../../constants/framer-motion";

export const WrapperOrder = styled.section`
    width: 100%;
    min-height: 700px;
    z-index: 5;
    background: linear-gradient(to bottom, rgb(255, 255, 255), rgba(255, 255, 255, 0)), linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0)), url("/img/electrical-equipment.jpg") no-repeat center;
    background-size: cover;

`

export const OrderBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 0 20px;
    margin: 20px 0;
    @media (max-width: 800px) {
        flex-direction: column;
    }
    @media (max-width: 550px) {
        padding: 0 40px;

    }
`
export const OrderDescription = styled(motion.div).attrs(() => ({
    initial: "hidden",
    whileInView : "visible",
    viewport: {amount: 0.1, once: true},
    variants: animateRightX}))
    `
    display: flex;
    max-width: 280px;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 300px;
    background: rgb(214, 233, 255);
    border-radius: 20px;
    padding: 10px;
    position: relative;

    p {
        font-size: 25px;
        text-align: center;
    }

    &::after {
        position: absolute;
        content: '';

        right: -30px;
        bottom: 20px;
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-left: 30px solid rgb(214, 233, 255);;
        border-bottom: 15px solid transparent;
    }

    @media (max-width: 800px) {
        margin-bottom: 0;
        max-width: 370px;
        order: 2;
        &::after {
            right: 40px;
            bottom: -45px;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-top: 30px solid rgb(214, 233, 255);;
        }
    }

`

export const FormBlock = styled.div`
    background: linear-gradient(#7f87b7, #00318c);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    max-height: 500px;
    min-width: 320px;
    position: relative;
    margin-left: 200px;

    img {
        position: absolute;
        top: 0;
        left: -246.5px;
        width: 300px;
    }

    h2 {
        color: #ffc400;
    }

    form {

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: relative;

        label {
            margin: 10px 5px 5px;
            color: white;

            span {
                color: red;
            }
        }

        input {
            width: 80%;
            height: 40px;
            border: 1px solid black;
            border-radius: 10px;
            padding: 5px 10px;
            font-size: 18px;
        }

        textarea {
            width: 80%;
            border: 1px solid black;
            border-radius: 10px;
            padding: 5px 10px;
            font-size: 18px;
            resize: none;

        }

        .button_form {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: 200px;
            height: 50px;
            border-radius: 10px;
            background: #ffc400;
            margin: 20px auto 0;
            caret-color: rgba(255, 255, 255, 0);

            &:hover {
                background: #ffae00;
            }

            &:active {

                box-shadow: 0 0 15px 5px rgba(255, 255, 98, 0.62);
                width: 195px;
                height: 45px;
                margin: 22.5px 0 2.5px 0;
            }
        }
    }


    @media (max-width: 800px) {
        margin: 30px auto 50px;
        order: 1;
        min-width: 280px;
        img {
            display: none;
        }
    }

    @media (max-width: 550px) {
      

  
    }
`

export const OrderMobileImg = styled.div`
    display: none;

    @media (max-width: 800px) {
        display: flex;
        order: 3;
        width: 100%;
        height: 100%;
        margin: 20px 0;
        max-width: 400px;
        img {
            object-fit: contain;
            width: 100%;
            height: 100%;
        }
    }

`