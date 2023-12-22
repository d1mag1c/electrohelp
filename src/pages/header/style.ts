import styled, {css} from "styled-components";

export const HeaderBlock = styled.section<{$state?: boolean}>`
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
    padding-top: 4px;
    ${props => props.$state && css`

        border-bottom: none;
    `}
`
export const HeaderTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px 0 20px;
    height: max-content;

    a {
        font-family: Gorditas, 'sans-serif';
        font-size: 42px;
        color: black;
        font-weight: bold;

        span {
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

    a {
        min-width: max-content;
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }

    @media (max-width: 1000px) {

        display: none;

    }
`
export const FutureBlock = styled.div`
    @media (max-width: 1000px) {

        display: none;

    }
`

export const BurgerButton = styled.div<{$state?: boolean}> `
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 50px;
    min-width: 50px;
    height: 50px;
    margin-right: 30px;
    transition: 0.5s;

    span {
        width: 100%;
        height: 8px;
        background: black;
        border-radius: 5px;
        transition: 0.5s;
        caret-color: rgba(255, 255, 255, 0);
    }

    ${props => props.$state && css`

        span:first-of-type {
            transform: rotate(-45deg) translate(-8px, 10px);
        }

        span:last-of-type {
            transform: rotate(45deg) translate(-7px, -10px);
        }

        span:nth-last-of-type(2) {
            display: none;
        }

    `}
    &:hover {
        cursor: pointer;

        span {

            background: #ffc400;
        }


    }

    @media (max-width: 1000px) {

        display: flex;

    }
`

export const WindowClose = styled.div `
    position: fixed;
    z-index: 98;
    top:60px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(128, 128, 128, 0.52);

`