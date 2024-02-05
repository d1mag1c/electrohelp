import styled from "styled-components";

export const GalleryBlock = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    padding: 120px 0 100px;
    height: 100%;

    h2 {
        font-size: 40px;
        font-family: Orelega_One, 'sans-serif';
        font-weight: normal;
        margin: 0 auto;
        width: 100%;
        text-align: center;
    }

    @media (max-width: 1050px) {
        padding: 100px 0;
    }

    @media (max-width: 700px) {
        h2 {
            font-size: 30px;

        }


`
