import styled from "styled-components";

export const HeaderBlock = styled.section`
    width: 100%;
    height: 60px;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: whitesmoke;


    
`
export const HeaderTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px 0 20px;

    a {
        font-family: Gorditas, 'sans-serif';
        font-size: 42px;
        color: black;
        font-weight: bold;
        
        span{
            font-family: Gorditas, 'sans-serif';
            color: #ffc400;
            font-weight: bold;
        }
    }

`
export const HeaderLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 200px;

    div {
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }


`