import styled from "styled-components";

export const HomeBlock = styled.section`
    display: flex;
    justify-content: center;
    align-items: start;
    margin: 0 auto;
    padding: 100px 30px 120px 30px;
    width: 100%;
    z-index: 5;
    background: url("/img/kabel.png") no-repeat center;
    background-size: cover;

    img {
        width: 300px;
        height: max-content;
        object-fit: contain;

        margin: auto 50px auto 0;
    }
`

export const OrderBlock = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    height: max-content;
    justify-content: center;
    margin-right: 50px;
`
export const DescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 26px;
    margin: 20px 20px;
    position: relative;

    p {
        margin: 3px;
    }

    p:last-of-type {
        font-size: 32px;
    }

    span {
        display: flex;
        position: absolute;
        bottom: 20px;
        right: -100px;
        width: 150px;


        img {
            width: 100%;
        }
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

    form {

        display: flex;
        flex-direction: column;

        label {
            margin: 15px 5px 5px;
        }

        input {
            width: 400px;
            height: 40px;
            border: 1px solid black;
            border-radius: 10px;
            padding: 5px 10px;
            font-size: 18px;
        }

        textarea {
            width: 400px;
            border: 1px solid black;
            border-radius: 10px;
            padding: 5px 10px;
            font-size: 18px;
            resize: none;
        }

        button {
            width: 200px;
            height: 50px;
            border-radius: 10px;
            background: #ffc400;
            margin: 20px auto 0;

        }
    }
`
