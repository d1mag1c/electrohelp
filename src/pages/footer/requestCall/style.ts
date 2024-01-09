import styled, {css} from "styled-components";


export const RequestCallBlock = styled.div<{ $state?: boolean }>`
    width: 100%;
    height: 200px;
    background: black;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    z-index: 99;
    position: fixed;
    bottom: 0;
    transform: translateY(100%);
    transition: 0.5s;
    display: flex;
    justify-content: center;
    padding: 20px 100px;

    ${props => props.$state && css`

        transition: 0.5s;
        transform: translateY(0);

    `};

    @media (max-width: 700px) {

        padding: 20px 0;
        height: 380px;
    }

`

export const FooterFormBlock = styled.div`
    z-index: 99;
    width: max-content;

    form {
        display: flex;
        justify-content: center;
        z-index: 99;

        input {
            width: 90%;
            margin: 0 10px;
            min-width: 205px;
        }

        .button_request_call {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            min-width: 150px;
            width: 150px;
            height: 40px;
            border-radius: 10px;
            background: #ffc400;
            caret-color: rgba(255, 255, 255, 0);
            margin-left: 10px;

            &:hover {
                background: #ffae00;
            }
            &:active {
  
                box-shadow: 0 0 15px 5px rgba(248, 244, 155, 0.62);
                min-width: 145px;
                width: 145px;
                height: 35px;
                margin: 2.5px 0 0 15px;
            }
        }

        @media (max-width: 700px) {

            flex-direction: column;
            height: max-content;
            align-items: center;

            input {
                width: 260px;
                margin: 10px 10px 0;
            }

            .button_request_call {
                margin-top: 10px;
            }
        }

    }
`

export const PopUpFooter = styled.div<{$state?: boolean}>`
    position: absolute;
bottom: 0;
    width: 330px;
    height: 50px;
    background: green;
    border-radius: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s;
    z-index: 1;
    p {
        color: white;
        
    }

    ${props => props.$state && css`
        bottom: 250px;
        transition: 0.5s;
        
        @media (max-width: 700px) {

            bottom: 430px;
        }

    `};
`