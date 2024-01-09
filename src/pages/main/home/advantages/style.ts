import styled from "styled-components";

export const AdvantageBlock = styled.section`

    width: 100%;
    height: max-content;
    background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(239, 255, 206));
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 50px 50px;

    h2 {

        font-size: 40px;
        width: 100%;
        text-align: center;
        margin-bottom: 50px;

    }

    @media (max-width: 600px) {

        padding: 50px 20px;
    }
`

export const AdvantageContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    width: 100%;
    max-width: 1200px;
    @media (max-width: 960px) {

        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 700px) {

        grid-template-columns: 1fr;
    }
`

export const AdvantageCard = styled.div`
    caret-color: rgba(255, 255, 255, 0);
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 250px;
    height: 300px;
    border-radius: 20px;
    border: 2px solid black;
    margin: 20px;
    background: linear-gradient(to top, rgb(255, 255, 255), rgb(255, 248, 206));
    padding: 10px;

    h4 {
        margin-bottom: 20px;
        font-size: 20px;
    }

    p {
        text-align: center;
    }
`