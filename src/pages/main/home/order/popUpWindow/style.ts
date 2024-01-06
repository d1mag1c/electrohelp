import styled from "styled-components";

export const PopUpBlock = styled.div`
    position: absolute;
    width: max-content;
    height: 50px;
    background: green;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 0 20px;
    z-index: 10;
    
    p{
        color: white;
        min-width: max-content;
        font-size: 18px;
    }
    
    `