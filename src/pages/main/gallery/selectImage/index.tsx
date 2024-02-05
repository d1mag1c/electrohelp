import React from 'react';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import Slider from "react-slick";
import {galleryImgArray} from "../../../../constants/gallery_img_array";
import {SelectImageBlock} from "./style";
import {SlickButtonFix} from "../sliderImgGallery";


const SliderImgGallery = () => {
    const params = useParams()
    const paramsName = params.name ? params.name : 'default_value';
    const location = useLocation();
    const navigate = useNavigate();
    const value = location.state ? location.state.key : 1;

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: value - 1,
        infinite: true,
        speed: 300,
        prevArrow: (<SlickButtonFix><FaChevronLeft/></SlickButtonFix>),
        nextArrow: (<SlickButtonFix><FaChevronRight/></SlickButtonFix>),
    }

    return (
        <SelectImageBlock>

            {<Slider {...sliderSettings}>
                {galleryImgArray[paramsName].map((e: number) =>
                    <div key={`${paramsName}_${e}`} onFocus={() => navigate(-1)}>
                        <img src={`/img/${paramsName}/${paramsName}_${e}.jpg`} alt={`${paramsName}_${e}`}/>
                    </div>
                )}
            </Slider>}

        </SelectImageBlock>
    );
};

export default SliderImgGallery;