import styled from "styled-components";

export const FixedFooterBlock = styled.section `
display: flex;
    height: 100px;
    background: black;
    @media (max-width: 700px) {

        height: 150px;
    }
`