import styled from "styled-components";
import {motion} from "framer-motion";

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

    @media (max-height: 600px) {

        display: none;
    }

`
export const FooterContent = styled.div`
    width: 100%;
    background: black;
    border-top-right-radius: 100px;
    border-top-left-radius: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 30px 5px;
    position: fixed;
    bottom: 0;
    z-index: 100;

    @media (max-width: 700px) {

        flex-direction: column;
    }
`
export const ButtonCall= styled(motion.button).attrs<{$state?: boolean}>(({$state}) => ({

    animate: {
        scale: $state ? [0.9] : [1, 0.9, 1],
        boxShadow: $state ? [''] : ["0 0 15px 10px rgba(248, 244, 155, 0.62)", "none",  "0 0 15px 10px rgba(248, 244, 155, 0.62)"],

    },
    transition: {
        duration: $state ? 0 : 1.8,
        times: $state ? [0] : [0, 0.3, 0.6, 0.9],
        repeat: $state ? 0 : Infinity,
    },
    whileHover: {
        scale: 1,
        boxShadow: "0 0 15px 10px rgba(248, 244, 155, 0.62)",

        transition: {
            times: [0],
            repeat: 0,
        },

    },

}))`

    width: 200px;
    height: 40px;
    min-height: 40px;
    border-radius: 10px;
    background: #ffc400;
    padding: 0 15px;
    min-width: 200px;
    margin: 0 20px;

    p {
        font-weight: bold;
        font-size: 20px;
    }

    &:hover {
        background: #ffb700;
    }

    &:active {

        transform: scale(0.9);
        box-shadow: 0 0 0 0;
    }

    @media (max-width: 960px) {

        height: 40px;


    }
`
export const SocialFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
        margin: 5px 10px;
        width: 40px;
        height: 40px;
    }

    @media (max-width: 960px) {

        margin-top: 10px;
        img {
            width: 30px;
            height: 30px;
        }
    }
`
export const Tell = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: max-content;
    margin-left: 20px;

    a {
        color: white;
        font-family: Unbounded, 'sans-serif';
        font-size: 25px;
    }

    border-bottom: 3px solid #ffc400;
    @media (max-width: 960px) {

        a {
            font-size: 20px;
        }


    }
    @media (max-width: 500px) {

        a {
            font-size: 15px;
        }


    }
`