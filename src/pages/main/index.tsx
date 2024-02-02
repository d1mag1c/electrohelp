import React, {ReactNode} from 'react';
import {MainBlock, Wrapper} from "./style";
import FixedFooter from "../footer/fixedFooter";

export type MainType = {
    children?: ReactNode
}
const Main = ({children}: MainType)  => {
    return (
        <Wrapper>
            <MainBlock>
                {children}
            </MainBlock>
            <FixedFooter/>
        </Wrapper>

    );
};

export default Main;