import { styled } from "styled-components";

export const TitleStyled = styled.div` 
    margin: 0.18rem 0.3rem 0 0.3rem;
    min-width: 20vh;
    max-width: 40vh;
    border-bottom: 1px solid #1e1e2d;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.2rem;
    font-weight: 800;

    ${props => props.theme.title}
`