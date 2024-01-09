import styled from "styled-components";

export const WrapperOrder = styled.section`
    width: 100%;
    min-height: 900px;
    z-index: 5;
    background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0)), linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0)), url("/img/kabel.png") no-repeat center;
    background-size: cover;
    padding: 80px 30px;
    display: flex;
    @media (max-width: 800px) {

        padding-bottom: 50px;
    }
    @media (max-width: 600px) {

        padding: 70px 30px 50px 30px;
        min-height: 700px;
    }
`

export const OrderBlock = styled.div`
    display: grid;
    grid-template-columns: max-content 50%;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    width: max-content;
    height: max-content;

    @media (max-width: 550px) {

        grid-template-columns: 0 100%;

    }


`
export const ImgHome = styled.div`

    width: 300px;
    height: max-content;
    margin: auto 50px auto auto;
    grid-column: 1/2;
    grid-row: 1/3;

    img {
        width: 100%;
        object-fit: contain;
    }

    @media (max-width: 800px) {

        width: 150px;
        grid-column: 1/2;
        grid-row: 1/2;

    }

    @media (max-width: 550px) {

        grid-template-columns: 0 100%;

        img {
            display: none;
        }
    }
`
export const DescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 26px;
    margin: 20px 20px;

    grid-column: 2/3;
    width: 100%;
    max-width: 600px;

    p {
        margin: 3px;
    }

    p:last-of-type {
        font-size: 32px;
    }
    @media (max-width: 400px) {
        margin: 20px 0;
    }
`

export const FormBlock = styled.div`
    background: rgba(190, 190, 190, 0.83);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-column: 2/3;
    max-width: 600px;
    position: relative;

    form {

        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: relative;

        label {
            margin: 10px 5px 5px;

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

    .img_help {
        display: flex;
        position: absolute;
        top: -40px;
        right: -70px;
        width: 150px;


        img {
            width: 100%;
        }
    }

    @media (max-width: 960px) {

        .img_help {
            top: -50px;
            right: -30px;
        }
    }

    @media (max-width: 800px) {
        width: 400px;
        margin: 30px auto 0;
        grid-column: 1/3;

    }
    @media (max-width: 550px) {
        width: 80%;
        min-width: 280px;
    }
`
