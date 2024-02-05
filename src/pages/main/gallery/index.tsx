import React from 'react';
import {GalleryBlock} from "./style";
import SliderImgGallery from "./sliderImgGallery";

const Gallery = () => {

    return (
        <GalleryBlock>
            <h2>Квартиры</h2>
            <SliderImgGallery nameImg='home_light'/>
            <h2>Офисные и торговые помещения</h2>
            <SliderImgGallery nameImg='office_light'/>
        </GalleryBlock>
    );
};

export default Gallery;