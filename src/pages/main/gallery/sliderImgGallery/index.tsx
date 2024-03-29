import React, {FC} from 'react';
import Slider from "react-slick";
import {galleryImgArray} from "../../../../constants/gallery_img_array";
import {useNavigate} from "react-router-dom";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {SliderBlock} from "./style";

type ISliderImgGallery = {
    nameImg : string
}
export const SlickButtonFix = ({currentSlide, slideCount, children, ...props}: any) => (
    <span {...props} style={{cursor: 'pointer'}}>{children}</span>
);
const SliderImgGallery:FC<ISliderImgGallery> = ({nameImg}) => {

    const navigate = useNavigate();

    const sliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        speed: 300,
        prevArrow: (<SlickButtonFix><FaChevronLeft/></SlickButtonFix>),
        nextArrow: (<SlickButtonFix><FaChevronRight/></SlickButtonFix>),
    }

    const openImage = (value: number) => {
        const element = document.getElementById(nameImg);
        if(element) {
            element.scrollIntoView(true);
        }
        navigate(`/gallery/${nameImg}`, { state: { key: value}})

    }

    return (
        <SliderBlock >
            {<Slider {...sliderSettings}>
                {galleryImgArray[nameImg] && galleryImgArray[nameImg].map(e =>
                    <div key={`${nameImg}_${e}`} onFocus={() => openImage(e)}  id={nameImg}>
                        <img src={`/img/${nameImg}/${nameImg}_${e}.jpg`} alt={`${nameImg}_${e}`}/>
                    </div>
                )}

            </Slider>}
        </SliderBlock>
    );
};

export default SliderImgGallery;