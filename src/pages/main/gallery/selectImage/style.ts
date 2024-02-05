import styled from "styled-components";
import {SliderBlock} from "../sliderImgGallery/style";

export const SelectImageBlock = styled(SliderBlock)`
    margin: 0 auto;
    padding: 100px 20px 100px;
    max-width: 1500px;
    height: max-content;
    justify-content: center;
    max-height: 1200px;
    width: 100%;
    background: black;

    .slick-list {
        width: 100%;
        align-items: start;
        justify-content: start;
    }

    .slick-slider {

        .slick-arrow {
            height: 20%;
            width: 5%;
            top: 50%;
            transform: translateY(-50%);
        }
    }

    .slick-track {
        height: 100%;
    }

    .slick-slide {
    
        div {
          
            img {
                object-fit: contain;
            }

            &:hover {
                scale: none;
            }
        }
    }
`