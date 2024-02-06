import styled from "styled-components";

export const WrapperOrder = styled.section`
    width: 100%;
    min-height: 700px;
    z-index: 5;
    background: linear-gradient(to bottom, rgb(255, 255, 255), rgba(255, 255, 255, 0)), linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0)), url("/img/electrical-equipment.jpg") no-repeat center;
    background-size: cover;

    @media (max-width: 700px) {
        min-height: 550px;
        padding-bottom: 50px;
    }
`

export const OrderBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;

    @media (max-width: 550px) {
        
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
    position: relative;

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
        width: 400px;
        margin: 30px auto 0;

    }
    @media (max-width: 550px) {
        width: 70%;
        min-width: 280px;
    }
`
