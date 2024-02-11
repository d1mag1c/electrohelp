import styled from "styled-components";

export const SelectImageBlock = styled.div`
    display: flex;
    min-height: 120px;
    margin: 0 auto;
    padding: 100px 20px 100px;
    width: 100%;
    max-width: 1600px;
    height: 100%;
    justify-content: center;
    background: black;
    max-height: 1000px;

    .slick-list {
        display: flex;
        width: 100%;
        align-items: start;
        justify-content: start;
        height: 100%;


    }

    .slick-track {
        display: flex;
        height: 100%;
    }

    .slick-slider {
        overflow: hidden;
        position: relative;

        .slick-arrow {
            position: absolute;
            background: #757575;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.5s;
            height: 20%;
            width: 5%;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0.5;

            &:hover svg {
                fill: yellow;
            }

            & svg {
                width: 50%;
                height: 50%;
            }
        }

        .slick-disabled {
            opacity: 0;
        }

        .slick-prev {
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
        }

        .slick-next {

            right: 0;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }

        &:hover .slick-arrow {

            transition: 0.5s;
            opacity: 0.9;
        }

        &:hover .slick-disabled {
            opacity: 0;
            display: none;
            transition: 0.5s;
        }
    }

    .slick-slide {
        margin: 0 5px;
        height: 100%;
        width: 100%;

        div {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            transition: 0.5s;

            img {
                border-radius: 10px;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

            &:hover {
                cursor: pointer;
                transition: 0.5s;
                scale: none;
            }
        }
    }

    @media (max-width: 1050px) {
        width: 100%;

    }

`