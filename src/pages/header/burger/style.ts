import styled, {css} from "styled-components";

export const BurgerBlock = styled.div<{$state?: boolean}>`
    position: fixed;
    width: 100%;
    height: max-content;
    background: whitesmoke;
    top: 60px;
    right: 0;
    transition: 0.5s;
    z-index: 99;
    border-bottom: 2px solid black;
    transform: translateY(-100%);

    ${props => props.$state && css`

        @media (max-width: 1000px) {

            transform: translateY(0);

        }


    `}
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        width: max-content;
        min-width: max-content;
        padding: 20px 30px;
        font-size: 18px;
        @media (max-width: 650px) {

            font-size: 22px;
            padding: 30px 30px;
        }
    }

    @media (max-width: 650px) {

        flex-direction: column;

    }
`