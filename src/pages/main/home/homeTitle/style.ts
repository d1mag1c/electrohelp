import styled from "styled-components";

export const HomeTitleBlock = styled.section`
    width: 100%;
    min-height: 700px;
    z-index: 5;
    background: linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0)), linear-gradient(to top, rgb(255, 255, 255), rgba(255, 255, 255, 0)), url("/img/kabel.png") no-repeat center;
    background-size: cover;
    padding: 120px 30px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: 40px;
        font-family: Orelega_One, 'sans-serif';
        font-weight: normal;
        text-align: center;
        margin: 0 50px;

    }

    h2 {
        font-size: 35px;
        margin: 20px 0;
        font-family: Orelega_One, 'sans-serif';
        font-weight: normal;
    }
    @media (max-width: 700px) {

        padding: 100px 30px 20px;

    }
    @media (max-width: 700px) {
        flex-direction: column;
        padding-bottom: 20px;
        h1 {
            font-size: 34px;
        }

        h2 {
            font-size: 28px;

        }
    }
`
export const HomeDescriptionWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    
    @media (max-width: 700px) {
        flex-direction: column;

    }
`

export const DescriptionBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 100px 20px 20px;
    max-width: 600px;
    justify-content: center;
    align-items: center;

    p {
        margin: 3px;
        font-size: 26px;
        text-align: center;
    }

    p:last-of-type {
        font-size: 32px;
    }

    div {
        display: flex;
        justify-content: center;
        width: max-content;
        height: max-content;
        margin-top: 20px;

        img {
            width: 250px;
            height: 150px;
        }
    }

    @media (max-width: 700px) {
        order: 2;
        margin: 40px 20px 20px;
    }
`

export const ImgHome = styled.div`

   
    width: 400px;
    height: max-content;
    margin: 0 30px;
    caret-color: rgba(255, 255, 255, 0);
    
    img {
        width: 100%;
        object-fit: contain;
    }

    @media (max-width: 700px) {
        order: 1;
        width: 300px;
    }


`