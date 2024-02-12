import {motion} from 'framer-motion';
import React from 'react';
import {DescriptionBlock, HomeDescriptionWrapper, HomeTitleBlock, ImgHome} from "./style";
import {animateOpacity} from "../../../../constants/framer-motion";


const HomeTitle = () => {
    return (
        <HomeTitleBlock>
            <h1>Электромонтажные работы в Минске и Минской области!</h1>
            <h2>Услуги электрика</h2>
            <HomeDescriptionWrapper>
                <DescriptionBlock>
                    <p>Нужен качественный электромонтаж?</p>
                    <p>Ищите специалистов с высокой квалификацией?</p>
                    <p>Мы поможем Вам!</p>
                    <motion.div variants={animateOpacity}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{amount: 0.1, once: true}}>
                        <img src="/img/help-preview.png" alt="help-preview"/>
                    </motion.div>

                </DescriptionBlock>
                <ImgHome>
                    <img className="work_man" src="/img/electrics.png" alt="background"/>
                </ImgHome>
            </HomeDescriptionWrapper>
        </HomeTitleBlock>
    );
};

export default HomeTitle;