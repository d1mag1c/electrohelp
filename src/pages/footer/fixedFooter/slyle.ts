import styled from "styled-components";

export const FixedFooterBlock = styled.section `
    display: flex;
    height: 100px;
    width: 100%;
    background: black;
    flex: 0 0 auto;
    @media (max-width: 700px) {

        height: 150px;
    }
`