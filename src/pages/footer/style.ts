import styled from "styled-components";

export const FooterBlock = styled.section`
    width: 80%;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 100;
    max-width: 2000px;
    @media (max-width: 960px) {

        width: 100%;
    }

`
export const FooterContent = styled.div`
    width: 100%;
    height: 80px;
    background: black;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px 30px;
    position: fixed;
    bottom: 0;
    z-index: 100;
    

    @media (max-width: 700px) {

        flex-direction: column;
        height: 140px;

    }
`

export const ImgFooter = styled.div`
    position: relative;
    width: 100px;

    img {

        width: 100px;
        height: 100px;
        position: absolute;
        top: -80px;
        left: 0;
    }
    @media (max-width: 700px) {

    display: none;

    }
`
export const ButtonCall = styled.button`
    //width: 150px;
    height: 50px;
    border-radius: 10px;
    background: #ffc400;
    padding: 0 20px;
    box-shadow: 5px 5px 5px 0 rgba(248, 244, 155, 0.62);
    min-width: max-content;
    margin: 0 20px;
    p {
        font-weight: bold;
        font-size: 20px;
    }

    &:hover {
        background: #d29c00;

    }
    &:active{

        transform: translate(5px,5px);
        box-shadow: 0 0 0 0;
    }
`

export const Tell = styled.div `

    min-width: max-content;

    p {
        color: white;
        font-family: Unbounded, 'sans-serif';
        font-size: 25px;
    }

    border-bottom: 3px solid #ffc400;
    @media (max-width: 700px) {

        margin-top: 20px;

    }
`