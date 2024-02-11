import React from 'react';
import {GalleryBlock, LedVideo} from "./style";
import SliderImgGallery from "./sliderImgGallery";

const Gallery = () => {

    return (
        <GalleryBlock>
            <h2>Комнатное освещение</h2>
            <SliderImgGallery nameImg='home_light'/>
            <h2>Светодиодная подсветка</h2>
            <SliderImgGallery nameImg='led_light'/>
            <LedVideo>
                <video
                    className={'video_led'}
                    controls>
                    <source src="/img/led_light/vid-led.mp4" type="video/mp4"/>
                </video>
            </LedVideo>
            <h2>Офисные и торговые помещения</h2>
            <SliderImgGallery nameImg='office_light'/>
            <h2>Уличное освещение</h2>
            <SliderImgGallery nameImg='street_light'/>
            <h2>Декоративная электрика</h2>
            <SliderImgGallery nameImg='retro_light'/>
            <h2>Черновая работа</h2>
            <SliderImgGallery nameImg='rough_work'/>
        </GalleryBlock>
    );
};

export default Gallery;