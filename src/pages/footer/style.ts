import styled from "styled-components";

export const FooterBlock = styled.section`
    width: 80%;
    height: 80px;
    background: black;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
    img{

        width: 100px;
        height: 100px;
        margin-bottom: 50px;
    }
`

export const ButtonCall = styled.button`
    //width: 150px;
    height: 50px;
    border-radius: 10px;
    background: #ffc400;
    padding: 0 20px;
    box-shadow: 5px 5px 5px 0 rgba(248, 244, 155, 0.62);

    p {
        font-weight: bold;
        font-size: 20px;
    }

    &:hover {
        background: #d29c00;

    }
`

export const Tell = styled.div `
    
    p {
        color: white;
        font-family: Unbounded, 'sans-serif';
        font-size: 25px;
    }
border-bottom: 3px solid #ffc400;
`