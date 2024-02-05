import styled from "styled-components";

export const SliderBlock = styled.div`
    display: flex;
    width: 90%;
    max-width: 1200px;
    margin: 20px 30px 60px;
    height: 100%;
    min-height: 120px;

    .slick-slider {
        overflow: hidden;
        position: relative;

        .slick-arrow {
            position: absolute;
            top: 0;
            width: 8%;
            height: 100%;
            background: #757575;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.5s;
            opacity: 0.3;

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

    .slick-list {
        height: 100%;
        display: flex;
        align-items: center;

    }

    .slick-track {
        display: flex;
        height: 95%;

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
                object-fit: cover;
                width: 100%;
                height: 100%;
            }

            &:hover {
                cursor: pointer;
                scale: 1.02;
                transition: 0.5s;
            }
        }

    }

    @media (max-width: 1050px) {
        width: 100%;

    }

`