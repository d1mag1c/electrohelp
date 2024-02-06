import styled from "styled-components";

export const FixedFooterBlock = styled.section `
    display: flex;
    height: 100px;
    width: 100%;
    background: black;
    flex: 0 0 auto;
    position: relative;
    div{
        display: none;
    }
    @media (max-width: 700px) {

        height: 150px;
    }
    @media (max-height: 600px) {

        div{
            display: flex;
        }
        height: max-content;

    }
`

export const FooterFixedContent = styled.div`
    width: 100%;
    background: black;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    display: none;
    justify-content: space-around;
    align-items: center;
    padding: 10px 30px 5px;
    bottom: 0;
    z-index: 100;
    
    @media (max-height: 600px) {
        
                display:flex;
                flex-direction: row;
 
    }
    
`