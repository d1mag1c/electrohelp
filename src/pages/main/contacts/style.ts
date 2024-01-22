import styled from "styled-components";

export const ContactsBlock = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding: 150px 30px;

    h1 {
        font-size: 50px;
        font-family: Orelega_One, 'sans-serif';
        font-weight: normal;
        margin: 0 auto 50px;
        width: 100%;
        text-align: center;
    }

    a {
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 50px;
            height: 50px;
        }
    }

    img:hover {
        cursor: pointer;
        width: 56px;
        height: 56px;
        transition: 0.2s;
    }

    img:active {
        width: 45px;
        height: 45px;
        transition: 0.2s;
    }
    @media (max-width: 600px) {
        h1 {
            font-size: 40px;
     
        }
        p {
            font-size: 15px;
        }
    }

`

export const ContactsContent = styled.div`

    display: flex;
    @media (max-width: 1000px) {
        flex-direction: column;

    }

`
export const ContactsSocial = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 150px;
    @media (max-width: 1000px) {

        margin-right: 0;
    }
`

export const ContactsSocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContactsIconsPhone = styled.div`

    display: flex;
    align-items: center;


    div {
        display: flex;
        flex-direction: column;
    }

    img {

        margin: 5px;
    }

    p {
        margin-left: 20px;
        font-size: 25px;

    }

    @media (max-width: 600px) {

        p {
            font-size: 20px;
        }
    }
`

export const ContactsEmail = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 54px;
        height: 54px;
        margin: 3px;
    }

    p {
        margin-left: 20px;
        font-size: 20px;

    }
    @media (max-width: 600px) {

        p {
            font-size: 15px;
        }
    }
    `

export const ContactsInstagram = styled.div`
    display: flex;
    align-items: center;
    p {
        margin-left: 20px;
        font-size: 20px;

    }
    @media (max-width: 600px) {

        p {
            font-size: 15px;
        }
    }
    `

export const ContactsRequisites = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: max-content;
    align-items: center;

    div {
        background: rgba(255, 242, 200, 0.18);
        border-radius: 10px;
        padding: 10px;

        p {
            font-size: 18px;
        }

        p:nth-of-type(5) {
            margin-top: 10px;
            font-weight: 600;
        }

        p:nth-of-type(10) {
            margin-top: 10px;
        }

        @media (max-width: 600px) {

            p {
                font-size: 15px;
            }
        }
    }

    @media (max-width: 1000px) {

        h1 {
            margin-top: 100px;
        }
    }

`
export const ContactsGoogleMap = styled.div`
    margin-top: 150px;
    width: 80%;
    height: 600px;
    
    @media (max-width: 600px) {
        margin-top: 100px;
        width: 100%;
        padding: 0 20px;
        height: 400px;
    }
    `