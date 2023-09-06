import { styled } from "styled-components";

export const HeaderStyled = styled.div` 
    margin: 0.6rem 0 0.6rem 0;
    padding: 0.4rem;
    box-shadow: 0.438rem 0.438rem 0.375rem -0.5rem #202a39;
    border-bottom: 0.063rem solid #202a39;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    display: flex;

    ${props => props.theme.header}
`